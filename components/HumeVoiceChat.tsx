"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { VoiceProvider, useVoice, type ToolCallHandler } from "@humeai/voice-react";

interface DisplayMessage {
  role: "user" | "assistant";
  content: string;
}

interface VoiceChatControlsProps {
  accessToken: string;
  configId?: string;
  userId?: string;
  variables?: Record<string, string>;
  onError?: (error: Error) => void;
}

function VoiceChatControls({
  accessToken,
  configId,
  userId,
  variables,
  onError,
}: VoiceChatControlsProps) {
  const { status, connect, disconnect, isMuted, mute, unmute, messages } = useVoice();
  const [displayMessages, setDisplayMessages] = useState<DisplayMessage[]>([]);
  const messagesRef = useRef<HTMLDivElement>(null);

  const isConnected = status.value === "connected";
  const isConnecting = status.value === "connecting";

  useEffect(() => {
    const transformed: DisplayMessage[] = [];
    for (const msg of messages) {
      if (msg.type === "user_message" || msg.type === "assistant_message") {
        const content = msg.message?.content;
        if (content) {
          transformed.push({
            role: msg.type === "user_message" ? "user" : "assistant",
            content,
          });
        }
      }
    }
    setDisplayMessages(transformed);

    if (messagesRef.current) {
      setTimeout(() => {
        messagesRef.current?.scrollTo({
          top: messagesRef.current.scrollHeight,
          behavior: "smooth",
        });
      }, 100);
    }
  }, [messages]);

  const handleConnect = useCallback(async () => {
    try {
      const filteredVariables = variables
        ? Object.fromEntries(
            Object.entries(variables).filter(([, v]) => v !== undefined)
          )
        : undefined;

      const hasSettings =
        userId ||
        (filteredVariables && Object.keys(filteredVariables).length > 0);

      const sessionSettings = hasSettings
        ? {
            type: "session_settings" as const,
            ...(userId && { customSessionId: userId }),
            ...(filteredVariables &&
              Object.keys(filteredVariables).length > 0 && {
                variables: filteredVariables,
              }),
          }
        : undefined;

      await connect({
        auth: { type: "accessToken", value: accessToken },
        configId: configId || undefined,
        sessionSettings,
      });
    } catch (e) {
      const err = e instanceof Error ? e : new Error(String(e));
      onError?.(err);
    }
  }, [connect, accessToken, configId, userId, variables, onError]);

  return (
    <div className="flex flex-col gap-4">
      {/* Status indicator */}
      <div className="flex items-center gap-2">
        <div
          className={`w-3 h-3 rounded-full ${
            isConnected
              ? "bg-green-500"
              : isConnecting
              ? "bg-yellow-500 animate-pulse"
              : "bg-gray-400"
          }`}
        />
        <span className="text-sm text-slate-300">
          {isConnected
            ? "Connected"
            : isConnecting
            ? "Connecting..."
            : "Disconnected"}
        </span>
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        {!isConnected ? (
          <button
            onClick={handleConnect}
            disabled={isConnecting}
            className="px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition disabled:opacity-50"
          >
            {isConnecting ? "Connecting..." : "Start Voice Chat"}
          </button>
        ) : (
          <>
            <button
              onClick={disconnect}
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition"
            >
              End Chat
            </button>
            <button
              onClick={() => (isMuted ? unmute() : mute())}
              className={`px-6 py-3 rounded-xl font-semibold transition ${
                isMuted
                  ? "bg-yellow-600 text-white hover:bg-yellow-700"
                  : "bg-slate-700 text-white hover:bg-slate-600"
              }`}
            >
              {isMuted ? "Unmute" : "Mute"}
            </button>
          </>
        )}
      </div>

      {/* Messages */}
      <div
        ref={messagesRef}
        className="flex flex-col gap-3 max-h-96 overflow-y-auto bg-slate-800/50 rounded-xl p-4 border border-slate-700"
      >
        {displayMessages.length === 0 && (
          <p className="text-slate-400 text-sm text-center py-8">
            Start a voice conversation to see messages here
          </p>
        )}
        {displayMessages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl ${
              msg.role === "user"
                ? "bg-violet-600/20 ml-8 border border-violet-500/30"
                : "bg-slate-700/50 mr-8 border border-slate-600/50"
            }`}
          >
            <div className="text-xs text-slate-400 mb-1">
              {msg.role === "user" ? "You" : "Rainmakrr AI"}
            </div>
            <div className="text-slate-200">{msg.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface HumeVoiceChatProps {
  accessToken?: string;
  configId?: string;
  userId?: string;
  variables?: Record<string, string>;
  onMessage?: (content: string, role: "user" | "assistant") => void;
  onError?: (error: Error) => void;
  onToolCall?: (toolName: string, result: unknown) => void;
  toolsApiEndpoint?: string;
  className?: string;
}

export function HumeVoiceChat({
  accessToken,
  configId,
  userId,
  variables,
  onMessage,
  onError,
  onToolCall,
  toolsApiEndpoint = "/api/hume/tools",
  className = "",
}: HumeVoiceChatProps) {
  const [token, setToken] = useState<string | null>(accessToken || null);
  const [config, setConfig] = useState<string | null>(configId || null);
  const [user, setUser] = useState<string | null>(userId || null);
  const [loading, setLoading] = useState(!accessToken);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    if (!accessToken) {
      fetch("/api/hume/token")
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setFetchError(data.error);
          } else {
            setToken(data.accessToken);
            setConfig(data.configId || null);
            if (!userId) {
              setUser(data.userId || null);
            }
          }
        })
        .catch((e) => setFetchError(e.message))
        .finally(() => setLoading(false));
    }
  }, [accessToken, userId]);

  const handleToolCall: ToolCallHandler = useCallback(
    async (toolCall, send) => {
      const currentUserId = user || userId;

      try {
        const response = await fetch(toolsApiEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            toolName: toolCall.name,
            parameters: JSON.parse(toolCall.parameters),
            userId: currentUserId,
          }),
        });

        if (!response.ok) {
          throw new Error(`Tool API returned ${response.status}`);
        }

        const result = await response.json();
        onToolCall?.(toolCall.name, result);
        return send.success(JSON.stringify(result));
      } catch (error) {
        return send.error({
          error: error instanceof Error ? error.message : "Tool execution failed",
          code: "TOOL_ERROR",
          level: "warn",
          content: "I had trouble with that. Let me try another way.",
        });
      }
    },
    [user, userId, toolsApiEndpoint, onToolCall]
  );

  if (loading) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-slate-400">Loading voice chat...</span>
        </div>
      </div>
    );
  }

  if (fetchError || !token) {
    return (
      <div className={`p-4 ${className}`}>
        <div className="text-red-400 text-sm p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
          {fetchError || "Voice chat credentials not configured."}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <VoiceProvider
        onMessage={(msg) => {
          if (msg.type === "user_message" || msg.type === "assistant_message") {
            const content = msg.message?.content;
            if (content) {
              onMessage?.(content, msg.type === "user_message" ? "user" : "assistant");
            }
          }
        }}
        onError={(err) => {
          onError?.(new Error(err.message || "Voice chat error"));
        }}
        onToolCall={handleToolCall}
      >
        <VoiceChatControls
          accessToken={token}
          configId={config || undefined}
          userId={user || userId || undefined}
          variables={variables}
          onError={onError}
        />
      </VoiceProvider>
    </div>
  );
}

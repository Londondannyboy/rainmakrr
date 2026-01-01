"use client";

import { useUser } from "@stackframe/stack";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { HumeVoiceChat } from "@/components/HumeVoiceChat";

export default function VoicePage() {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push("/handler/sign-in");
    }
  }, [user, router]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-slate-400">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Voice Assistant
            </span>
          </h1>
          <p className="text-slate-300 text-lg">
            Talk to our AI recruitment assistant. Ask about job opportunities,
            market insights, or get career advice.
          </p>
        </div>

        {/* Voice Chat */}
        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">
              Start a Conversation
            </h2>
            <p className="text-slate-400 text-sm">
              Click the button below to start talking. You can ask about:
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                Job opportunities in your sector
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                Market trends and salary insights
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                Career advice and next steps
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                Schedule a consultation
              </li>
            </ul>
          </div>

          <HumeVoiceChat
            userId={user.id}
            variables={{
              first_name: user.displayName?.split(" ")[0] || "",
              email: user.primaryEmail || "",
            }}
            onMessage={(content, role) => {
              console.log(`[${role}]: ${content}`);
            }}
            onError={(error) => {
              console.error("Voice chat error:", error);
            }}
          />
        </div>

        {/* Tips */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50">
            <div className="text-2xl mb-2">🎤</div>
            <h3 className="font-semibold text-white mb-1">Speak Naturally</h3>
            <p className="text-slate-400 text-sm">
              Talk as you would to a human recruiter
            </p>
          </div>
          <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50">
            <div className="text-2xl mb-2">🔒</div>
            <h3 className="font-semibold text-white mb-1">Private & Secure</h3>
            <p className="text-slate-400 text-sm">
              Your conversations are confidential
            </p>
          </div>
          <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50">
            <div className="text-2xl mb-2">💡</div>
            <h3 className="font-semibold text-white mb-1">AI-Powered</h3>
            <p className="text-slate-400 text-sm">
              Instant insights and recommendations
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

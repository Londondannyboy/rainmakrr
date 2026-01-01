import { NextResponse } from "next/server";
import { stackServerApp } from "@/lib/stack";

export async function GET() {
  try {
    // Get current user if authenticated
    const user = await stackServerApp.getUser();

    const humeApiKey = process.env.HUME_API_KEY;
    const humeConfigId = process.env.NEXT_PUBLIC_HUME_CONFIG_ID;

    if (!humeApiKey) {
      return NextResponse.json(
        { error: "Hume API key not configured" },
        { status: 500 }
      );
    }

    // Fetch access token from Hume API
    const response = await fetch("https://api.hume.ai/oauth2-cc/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        api_key: humeApiKey,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Hume token error:", error);
      return NextResponse.json(
        { error: "Failed to get Hume access token" },
        { status: 500 }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      accessToken: data.access_token,
      configId: humeConfigId,
      userId: user?.id || null,
    });
  } catch (error) {
    console.error("Hume token route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

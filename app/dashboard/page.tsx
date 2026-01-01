"use client";

import { useUser } from "@stackframe/stack";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function DashboardPage() {
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
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Welcome back,{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {user.displayName?.split(" ")[0] || "there"}
            </span>
          </h1>
          <p className="text-slate-400">
            {user.primaryEmail}
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link
            href="/voice"
            className="bg-gradient-to-br from-violet-600/20 to-cyan-600/20 rounded-2xl p-6 border border-violet-500/30 hover:border-violet-500/50 transition-all group"
          >
            <div className="text-4xl mb-4">🎤</div>
            <h2 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition">
              Voice Assistant
            </h2>
            <p className="text-slate-400">
              Talk to our AI about job opportunities and career advice
            </p>
          </Link>

          <Link
            href="/contact"
            className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all group"
          >
            <div className="text-4xl mb-4">📞</div>
            <h2 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition">
              Book Consultation
            </h2>
            <p className="text-slate-400">
              Schedule a call with our recruitment specialists
            </p>
          </Link>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <div className="text-4xl mb-4">📊</div>
            <h2 className="text-xl font-bold text-white mb-2">
              Market Insights
            </h2>
            <p className="text-slate-400">
              Coming soon - personalized market data and trends
            </p>
          </div>
        </div>

        {/* Sectors */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Explore Sectors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/green-recruitment-agency", title: "Green & Environmental", icon: "🌿" },
              { href: "/renewable-energy-recruitment-agency", title: "Renewable Energy", icon: "⚡" },
              { href: "/private-equity-recruitment-agency", title: "Private Equity", icon: "💼" },
              { href: "/venture-capital-recruitment-agency", title: "Venture Capital", icon: "🚀" },
              { href: "/sustainability-recruitment-agency", title: "Sustainability & ESG", icon: "🌍" },
              { href: "/space-recruitment-agency", title: "Space & Aerospace", icon: "🛸" },
            ].map((sector) => (
              <Link
                key={sector.href}
                href={sector.href}
                className="flex items-center gap-4 bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-slate-600 transition-all"
              >
                <span className="text-2xl">{sector.icon}</span>
                <span className="text-white font-medium">{sector.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">Your Profile</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-slate-400 mb-1">Display Name</label>
              <p className="text-white">{user.displayName || "Not set"}</p>
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Email</label>
              <p className="text-white">{user.primaryEmail}</p>
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">User ID</label>
              <p className="text-slate-500 text-sm font-mono">{user.id}</p>
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Member Since</label>
              <p className="text-white">
                {user.signedUpAt
                  ? new Date(user.signedUpAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : "Unknown"}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

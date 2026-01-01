"use client";

import Link from "next/link";
import { useState } from "react";
import { useUser, UserButton } from "@stackframe/stack";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const user = useUser();

  return (
    <header className="bg-slate-950/90 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Rainmakrr
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors font-medium">
              Home
            </Link>
            <Link href="/insights" className="text-slate-300 hover:text-white transition-colors font-medium">
              Insights
            </Link>
            <div className="relative group">
              <button className="text-slate-300 hover:text-white transition-colors font-medium flex items-center gap-1">
                Recruitment
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900 border border-slate-700 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="p-2">
                  <Link href="/green-recruitment-agency" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">Green Recruitment</Link>
                  <Link href="/private-equity-recruitment-agency" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">Private Equity</Link>
                  <Link href="/venture-capital-recruitment-agency" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">Venture Capital</Link>
                  <Link href="/sustainability-recruitment-agency" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">Sustainability</Link>
                  <Link href="/space-recruitment-agency" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">Space & Aerospace</Link>
                </div>
              </div>
            </div>

            {user && (
              <>
                <Link href="/voice" className="text-violet-400 hover:text-violet-300 transition-colors font-medium">
                  Voice
                </Link>
                <Link href="/dashboard" className="text-slate-300 hover:text-white transition-colors font-medium">
                  Dashboard
                </Link>
              </>
            )}

            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-400 hidden lg:block">
                  {user.displayName || user.primaryEmail}
                </span>
                <UserButton />
              </div>
            ) : (
              <Link
                href="/handler/sign-in"
                className="px-6 py-2 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            {user && <UserButton />}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <Link href="/" className="block py-2 text-slate-300 hover:text-white">Home</Link>
            <Link href="/insights" className="block py-2 text-slate-300 hover:text-white">Insights</Link>
            <Link href="/green-recruitment-agency" className="block py-2 text-slate-300 hover:text-white">Green Recruitment</Link>
            <Link href="/private-equity-recruitment-agency" className="block py-2 text-slate-300 hover:text-white">Private Equity</Link>
            <Link href="/venture-capital-recruitment-agency" className="block py-2 text-slate-300 hover:text-white">Venture Capital</Link>
            {user && (
              <>
                <Link href="/voice" className="block py-2 text-violet-400 hover:text-violet-300">Voice Chat</Link>
                <Link href="/dashboard" className="block py-2 text-slate-300 hover:text-white">Dashboard</Link>
              </>
            )}
            {!user && (
              <Link href="/handler/sign-in" className="block py-2 text-violet-400 hover:text-violet-300">Sign In</Link>
            )}
            <Link href="/contact" className="block py-2 text-cyan-400 hover:text-cyan-300">Contact Us</Link>
          </div>
        )}
      </nav>
    </header>
  );
}

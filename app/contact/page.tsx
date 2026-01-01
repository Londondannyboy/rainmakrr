import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Rainmakrr Recruitment",
  description:
    "Get in touch with Rainmakrr. Whether you're hiring talent or looking for your next opportunity, we're here to help.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <main>
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-cyan-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-violet-400">Contact</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Ready to find exceptional talent or your next opportunity?
                We&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* For Employers */}
              <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <div className="text-4xl mb-4">🏢</div>
                <h2 className="text-2xl font-bold text-white mb-4">For Employers</h2>
                <p className="text-slate-400 mb-6">
                  Looking to hire? Tell us about your role and we&apos;ll connect you with exceptional talent.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="text-slate-300 flex items-center gap-2">
                    <span className="text-violet-400">✓</span> Free initial consultation
                  </li>
                  <li className="text-slate-300 flex items-center gap-2">
                    <span className="text-violet-400">✓</span> Market insights & salary benchmarks
                  </li>
                  <li className="text-slate-300 flex items-center gap-2">
                    <span className="text-violet-400">✓</span> Curated shortlists
                  </li>
                  <li className="text-slate-300 flex items-center gap-2">
                    <span className="text-violet-400">✓</span> Confidential search available
                  </li>
                </ul>
                <a
                  href="mailto:employers@rainmakrr.com"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
                >
                  Contact for Hiring
                </a>
              </div>

              {/* For Candidates */}
              <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <div className="text-4xl mb-4">👤</div>
                <h2 className="text-2xl font-bold text-white mb-4">For Candidates</h2>
                <p className="text-slate-400 mb-6">
                  Looking for your next role? Share your CV and we&apos;ll match you with opportunities.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="text-slate-300 flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> Access to unadvertised roles
                  </li>
                  <li className="text-slate-300 flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> Career advice & market insights
                  </li>
                  <li className="text-slate-300 flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> Interview preparation
                  </li>
                  <li className="text-slate-300 flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> Salary negotiation support
                  </li>
                </ul>
                <a
                  href="mailto:careers@rainmakrr.com"
                  className="inline-block px-6 py-3 bg-slate-700 text-white font-semibold rounded-xl border border-slate-600 hover:border-cyan-500 transition-all"
                >
                  Upload Your CV
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Contact Information</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-white font-medium mb-2">Email</h3>
                <a href="mailto:hello@rainmakrr.com" className="text-violet-400 hover:text-violet-300">
                  hello@rainmakrr.com
                </a>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-white font-medium mb-2">Location</h3>
                <p className="text-slate-400">London, United Kingdom</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">⏰</div>
                <h3 className="text-white font-medium mb-2">Response Time</h3>
                <p className="text-slate-400">Within 24 hours</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Sectors We Recruit For</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/green-recruitment-agency" className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full hover:text-white hover:bg-slate-700 transition-all">
                Green & Environmental
              </Link>
              <Link href="/renewable-energy-recruitment-agency" className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full hover:text-white hover:bg-slate-700 transition-all">
                Renewable Energy
              </Link>
              <Link href="/private-equity-recruitment-agency" className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full hover:text-white hover:bg-slate-700 transition-all">
                Private Equity
              </Link>
              <Link href="/venture-capital-recruitment-agency" className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full hover:text-white hover:bg-slate-700 transition-all">
                Venture Capital
              </Link>
              <Link href="/sustainability-recruitment-agency" className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full hover:text-white hover:bg-slate-700 transition-all">
                Sustainability & ESG
              </Link>
              <Link href="/space-recruitment-agency" className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full hover:text-white hover:bg-slate-700 transition-all">
                Space & Aerospace
              </Link>
              <Link href="/chief-of-staff-recruitment-agency" className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full hover:text-white hover:bg-slate-700 transition-all">
                Chief of Staff
              </Link>
              <Link href="/ea-recruitment-agency" className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full hover:text-white hover:bg-slate-700 transition-all">
                Executive Assistants
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

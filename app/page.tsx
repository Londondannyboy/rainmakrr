import type { Metadata } from "next";
import Link from "next/link";
import { getAllPublishedArticles } from "@/lib/db";

export const metadata: Metadata = {
  title: "Rainmakrr | Specialist Recruitment Agency UK",
  description:
    "UK specialist recruitment agency for green energy, private equity, venture capital, sustainability, and emerging sectors. Find exceptional talent or your next career.",
};

const greenCluster = [
  { href: "/green-recruitment-agency", title: "Green Recruitment", description: "Environmental & sustainability talent", color: "from-green-500 to-lime-400" },
  { href: "/renewable-energy-recruitment-agency", title: "Renewable Energy", description: "Solar, wind & clean energy", color: "from-cyan-500 to-yellow-400" },
  { href: "/sustainability-recruitment-agency", title: "Sustainability", description: "ESG & CSR specialists", color: "from-teal-500 to-amber-500" },
  { href: "/ev-recruitment-agency", title: "EV Recruitment", description: "Electric vehicle talent", color: "from-blue-500 to-orange-400" },
  { href: "/cleantech-recruitment-agency", title: "Cleantech", description: "Clean technology roles", color: "from-emerald-400 to-white" },
  { href: "/climate-tech-recruitment-agency", title: "Climate Tech", description: "Net zero specialists", color: "from-blue-400 to-orange-400" },
];

const financeCluster = [
  { href: "/venture-capital-recruitment-agency", title: "Venture Capital", description: "VC fund specialists", color: "from-purple-500 to-pink-400" },
  { href: "/private-equity-recruitment-agency", title: "Private Equity", description: "PE fund talent", color: "from-slate-400 to-yellow-500" },
  { href: "/fintech-recruitment-agency", title: "Fintech", description: "Fintech & payments talent", color: "from-blue-500 to-cyan-400" },
  { href: "/chief-of-staff-recruitment-agency", title: "Chief of Staff", description: "Strategic leadership", color: "from-slate-400 to-slate-300" },
  { href: "/ea-recruitment-agency", title: "Executive Assistant", description: "C-suite support", color: "from-amber-200 to-slate-400" },
];

const otherServices = [
  { href: "/space-recruitment-agency", title: "Space & Aerospace", description: "Satellite & NewSpace talent", color: "from-slate-400 to-purple-500" },
];

const stats = [
  { value: "11", label: "Specialist Sectors" },
  { value: "UK-Wide", label: "Coverage" },
  { value: "500+", label: "Placements" },
  { value: "95%", label: "Retention Rate" },
];

export default async function Home() {
  const articles = await getAllPublishedArticles("rainmakrr");
  const recentArticles = articles.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <main>
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-cyan-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Specialist Recruitment
                </span>
                <br />
                for Emerging Sectors
              </h1>
              <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                UK&apos;s leading recruitment agency for green energy, private equity, venture capital,
                and high-growth sectors. We connect exceptional talent with exceptional opportunities.
              </p>
              <p className="text-lg text-slate-400 mb-10">
                Looking for a <Link href="/venture-capital-recruitment-agency" className="text-purple-400 hover:text-purple-300 font-medium underline underline-offset-4">venture capital recruitment agency</Link>?
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
                >
                  Hire Talent
                </Link>
                <Link
                  href="#sectors"
                  className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-violet-500 transition-all"
                >
                  Explore Sectors
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured: VC Recruitment */}
        <section className="py-12 bg-gradient-to-r from-purple-600/10 via-slate-900 to-pink-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-purple-600/20 text-purple-400 text-sm rounded-full">Featured</span>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-8 border border-purple-500/30 hover:border-purple-500/50 transition-all">
              <Link href="/venture-capital-recruitment-agency" className="block">
                <h2 className="text-2xl font-bold text-white mb-3">Venture Capital Recruitment Agency</h2>
                <p className="text-slate-300 mb-6 max-w-2xl">
                  Specialist VC headhunters placing Partners, Principals, and Associates into top-tier funds across Europe. From seed to growth stage.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg text-sm">
                    Find VC Talent →
                  </span>
                  <span className="px-4 py-2 bg-slate-700 text-white rounded-lg text-sm border border-slate-600">
                    View VC Jobs →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Green & Energy Sector */}
        <section id="sectors" className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold text-white">Green & Energy</h2>
              <span className="px-3 py-1 bg-green-600/20 text-green-400 text-sm rounded-full">High Growth</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {greenCluster.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-all"
                >
                  <div className={`w-12 h-1 bg-gradient-to-r ${service.color} rounded mb-4 group-hover:w-20 transition-all`} />
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Finance & Executive */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold text-white">Finance & Executive</h2>
              <span className="px-3 py-1 bg-yellow-600/20 text-yellow-400 text-sm rounded-full">Premium</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {financeCluster.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-all"
                >
                  <div className={`w-12 h-1 bg-gradient-to-r ${service.color} rounded mb-4 group-hover:w-20 transition-all`} />
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold text-white">Emerging Sectors</h2>
              <span className="px-3 py-1 bg-purple-600/20 text-purple-400 text-sm rounded-full">Frontier</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all"
                >
                  <div className={`w-12 h-1 bg-gradient-to-r ${service.color} rounded mb-4 group-hover:w-20 transition-all`} />
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Rainmakrr */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Why Rainmakrr?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-violet-600/20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Sector Specialists</h3>
                <p className="text-slate-400">
                  Deep expertise in each sector we recruit for. We understand the nuances, skills, and culture.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600/20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  🌐
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Extensive Networks</h3>
                <p className="text-slate-400">
                  Access to passive candidates and hidden talent pools across all our specialist sectors.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  ✅
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Proven Track Record</h3>
                <p className="text-slate-400">
                  95% retention rate. Our placements stick because we focus on long-term fit, not just skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Insights & Guides */}
        {recentArticles.length > 0 && (
          <section className="py-16 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl font-bold text-white">Insights & Guides</h2>
                  <span className="px-3 py-1 bg-violet-600/20 text-violet-400 text-sm rounded-full">New</span>
                </div>
                <Link
                  href="/insights"
                  className="text-violet-400 hover:text-violet-300 transition-colors font-medium"
                >
                  View All &rarr;
                </Link>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/${article.slug}`}
                    className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-violet-500/50 transition-all"
                  >
                    {article.category && (
                      <span className="text-xs text-violet-400 uppercase tracking-wide">
                        {article.category}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-white mt-2 mb-3 group-hover:text-violet-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    {article.excerpt && (
                      <p className="text-slate-400 text-sm line-clamp-2">
                        {article.excerpt}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-violet-600/20 via-slate-900 to-cyan-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-slate-300 mb-8">
              Whether you&apos;re hiring or looking for your next opportunity, we&apos;re here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

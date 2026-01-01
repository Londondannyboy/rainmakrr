import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Venture Capital Recruitment Agency UK | VC Jobs & Headhunters",
  description:
    "Specialist venture capital recruitment agency placing talent at top VC funds. From Analysts to Partners, seed to growth stage. London & UK-wide.",
  keywords:
    "venture capital recruitment agency, vc recruitment, venture capital jobs recruitment, vc headhunter uk",
  openGraph: {
    title: "Venture Capital Recruitment Agency UK | VC Jobs & Headhunters",
    description: "Specialist venture capital recruitment agency placing talent at top VC funds.",
    type: "website",
    url: "https://rainmakrr.com/venture-capital-recruitment-agency",
  },
  alternates: {
    canonical: "https://rainmakrr.com/venture-capital-recruitment-agency",
  },
};

const vcRoles = [
  { title: "Analyst", type: "Investment" },
  { title: "Associate", type: "Investment" },
  { title: "Principal", type: "Investment" },
  { title: "Partner", type: "Investment" },
  { title: "Venture Partner", type: "Investment" },
  { title: "Platform/Portfolio Support", type: "Platform" },
  { title: "Talent Partner", type: "Platform" },
  { title: "Operating Advisors", type: "Platform" },
];

const fundStages = [
  { stage: "Pre-Seed & Seed", description: "First institutional capital" },
  { stage: "Series A", description: "Product-market fit funding" },
  { stage: "Series B", description: "Scale-up capital" },
  { stage: "Growth Stage", description: "Expansion funding" },
  { stage: "Late Stage/Pre-IPO", description: "Pre-exit rounds" },
  { stage: "Crossover Funds", description: "Public-private investors" },
];

const sectorFocus = [
  { name: "Deep Tech & AI", icon: "🤖" },
  { name: "Fintech & Payments", icon: "💳" },
  { name: "Climate Tech", icon: "🌍" },
  { name: "Healthcare & Biotech", icon: "🧬" },
  { name: "Consumer & D2C", icon: "🛒" },
  { name: "Enterprise SaaS", icon: "☁️" },
  { name: "Web3 & Crypto", icon: "🔗" },
  { name: "Spacetech", icon: "🚀" },
];

const faqs = [
  {
    question: "How do I get a job in venture capital?",
    answer:
      "Common paths include: operating experience at successful startups, investment banking, management consulting, or relevant domain expertise (e.g., engineering for deep tech funds). Some larger funds run formal Associate programs.",
  },
  {
    question: "Do I need an MBA for VC?",
    answer:
      "Less common than PE. Many VCs value operating experience, technical backgrounds, or entrepreneurial track records over MBAs. That said, an MBA from a top school can help, especially for career switchers.",
  },
  {
    question: "What's the salary for a VC Associate in London?",
    answer:
      "Base salaries range from £60-100k for Associates, with bonuses of 20-50%. Carry participation is increasingly common even at junior levels, though typically smaller allocations than PE.",
  },
  {
    question: "What skills do VC funds look for?",
    answer:
      "Market analysis, founder assessment, financial modelling, network building, sector expertise, and increasingly technical understanding (especially for deep tech funds). Strong communication and relationship skills are essential.",
  },
];

const relatedPages = [
  { href: "/private-equity-recruitment-agency", title: "Private Equity Recruitment", description: "PE fund talent specialists." },
  { href: "/fintech-recruitment-agency", title: "Fintech Recruitment", description: "Fintech & payments talent." },
  { href: "/climate-tech-recruitment-agency", title: "Climate Tech Recruitment", description: "Climate & sustainability talent." },
  { href: "/chief-of-staff-recruitment-agency", title: "Chief of Staff Recruitment", description: "Strategic leadership roles." },
];

export default function VentureCapitalRecruitmentAgency() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: "Rainmakrr - Venture Capital Recruitment Agency",
    description: "Specialist venture capital recruitment agency placing talent at top VC funds.",
    url: "https://rainmakrr.com/venture-capital-recruitment-agency",
    address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "UK" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rainmakrr.com" },
      { "@type": "ListItem", position: 2, name: "Venture Capital Recruitment Agency", item: "https://rainmakrr.com/venture-capital-recruitment-agency" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-pink-500/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-purple-400">Venture Capital Recruitment Agency</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Venture Capital Recruitment Agency
                </span>{" "}
                | VC Talent Specialists
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Building the teams that back the future. The UK&apos;s specialist{" "}
                <strong>venture capital recruitment agency</strong> connecting investors
                with the next generation of VC talent.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all glow-purple">
                  Find VC Talent
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-purple-500 transition-all">
                  View VC Jobs
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full" />
                  Seed to Growth Stage
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full" />
                  Investment & Platform Roles
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full" />
                  London & UK Hubs
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose a Venture Capital Recruitment Agency</h2>
            <p className="text-slate-300 mb-8 max-w-3xl">
              Working with a dedicated <strong>venture capital recruitment agency</strong> gives you access to a network that generalist recruiters simply don&apos;t have. We understand carry structures, fund cycles, and what separates a good investor from a great one.
            </p>
            <h3 className="text-2xl font-bold text-white mb-6">How Our Venture Capital Recruitment Agency Works</h3>
            <p className="text-slate-300 mb-10 max-w-3xl">
              Our venture capital recruitment agency process starts with understanding your fund&apos;s thesis, stage focus, and team dynamics. We then leverage our network of passive candidates — operators-turned-investors, ex-founders, and rising associates — to build a shortlist that fits.
            </p>
          </div>
        </section>

        {/* VC Roles */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Venture Capital Recruitment Agency Services</h2>
            <h3 className="text-xl font-bold text-purple-400 mb-6">VC Roles We Recruit</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {vcRoles.map((role) => (
                <div key={role.title} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-purple-500/50 transition-all">
                  <h3 className="text-white font-medium">{role.title}</h3>
                  <span className="text-purple-400 text-sm">{role.type}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fund Stages */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-purple-400 mb-6">Fund Stages We Cover</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {fundStages.map((fund) => (
                <div key={fund.stage} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all">
                  <h3 className="text-lg font-bold text-white mb-2">{fund.stage}</h3>
                  <p className="text-slate-400 text-sm">{fund.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sector Focus */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Venture Capital Recruitment Agency Expertise by Sector</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sectorFocus.map((sector) => (
                <div key={sector.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-pink-500/50 transition-all text-center">
                  <div className="text-3xl mb-2">{sector.icon}</div>
                  <h3 className="text-white font-medium text-sm">{sector.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VC vs PE Comparison */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Venture Capital Recruitment Agency: VC vs PE</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-4 px-4 text-slate-400 font-medium">Factor</th>
                    <th className="text-left py-4 px-4 text-purple-400 font-medium">Venture Capital</th>
                    <th className="text-left py-4 px-4 text-yellow-400 font-medium">Private Equity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 text-slate-300">Stage</td>
                    <td className="py-4 px-4 text-white">Early/Growth</td>
                    <td className="py-4 px-4 text-white">Mature</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 text-slate-300">Deal Size</td>
                    <td className="py-4 px-4 text-white">£1m - £50m</td>
                    <td className="py-4 px-4 text-white">£50m - £10bn+</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 text-slate-300">Control</td>
                    <td className="py-4 px-4 text-white">Minority</td>
                    <td className="py-4 px-4 text-white">Majority/Control</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 text-slate-300">Returns</td>
                    <td className="py-4 px-4 text-white">Power law</td>
                    <td className="py-4 px-4 text-white">Consistent</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 text-slate-300">Key Skills</td>
                    <td className="py-4 px-4 text-white">Market sensing, founder assessment</td>
                    <td className="py-4 px-4 text-white">Financial engineering, operations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ faqs={faqs} accentColor="purple" />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-600/20 via-slate-900 to-pink-500/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Partner With a Specialist Venture Capital Recruitment Agency</h2>
            <p className="text-slate-300 mb-8">
              From seed-stage analysts to growth partners, we connect VC funds with exceptional talent.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all glow-purple">
                Hire VC Talent
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-purple-500 transition-all">
                Explore VC Careers
              </Link>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Explore Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPages.map((page) => (
                <Link key={page.href} href={page.href} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all">
                  <h3 className="font-semibold text-white mb-2">{page.title}</h3>
                  <p className="text-slate-400 text-sm">{page.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

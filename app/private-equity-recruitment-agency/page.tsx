import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Private Equity Recruitment Agency UK | PE Jobs & Headhunters",
  description:
    "London's specialist private equity recruitment agency. We place Associates, VPs, Directors & Partners at top buyout, growth equity & PE funds.",
  keywords:
    "private equity recruitment agency, PE recruitment, private equity headhunter uk, buyout fund recruitment",
  openGraph: {
    title: "Private Equity Recruitment Agency UK | PE Jobs & Headhunters",
    description: "London's specialist private equity recruitment agency placing talent at top PE funds.",
    type: "website",
    url: "https://rainmakrr.com/private-equity-recruitment-agency",
  },
  alternates: {
    canonical: "https://rainmakrr.com/private-equity-recruitment-agency",
  },
};

const investmentRoles = [
  { title: "Analyst", level: "Entry" },
  { title: "Associate", level: "Junior" },
  { title: "Senior Associate", level: "Mid" },
  { title: "Vice President", level: "Mid-Senior" },
  { title: "Principal/Director", level: "Senior" },
  { title: "Partner/MD", level: "Executive" },
];

const operationsRoles = [
  "Operating Partners",
  "Portfolio Company CEOs",
  "Portfolio Company CFOs",
  "Investor Relations",
  "Fund Finance & Accounting",
  "Legal & Compliance",
];

const fundTypes = [
  { type: "Mega/Large Cap Buyout", deals: "£1bn+ deals" },
  { type: "Upper Mid-Market", deals: "£250m-£1bn" },
  { type: "Mid-Market PE", deals: "£50m-£250m" },
  { type: "Lower Mid-Market", deals: "£10m-£50m" },
  { type: "Growth Equity", deals: "Minority stakes" },
  { type: "Special Situations", deals: "Distressed/Turnaround" },
];

const salaryData = [
  { role: "Analyst", base: "£60-80k", bonus: "50-100%", carry: "Rare" },
  { role: "Associate", base: "£80-120k", bonus: "80-150%", carry: "Sometimes" },
  { role: "VP", base: "£130-180k", bonus: "100-200%", carry: "Yes" },
  { role: "Principal", base: "£180-250k", bonus: "150-300%", carry: "Yes" },
  { role: "Partner", base: "£300k+", bonus: "Variable", carry: "Significant" },
];

const faqs = [
  {
    question: "How do I break into private equity?",
    answer:
      "Traditional routes include 2-3 years in investment banking M&A, Big 4 transaction services, or top-tier consulting (MBB). Direct entry is rare but possible with exceptional credentials. Strong financial modelling skills and deal experience are essential.",
  },
  {
    question: "What's the difference between PE and VC recruitment?",
    answer:
      "PE focuses on mature businesses with proven cash flows; VC targets early-stage, high-growth startups. PE values financial modelling and operational improvement skills; VC values market assessment and founder evaluation. Compensation structures also differ significantly.",
  },
  {
    question: "How much do PE professionals earn in London?",
    answer:
      "All-in compensation ranges from £90k at Analyst level to £500k+ for Partners, plus carried interest which can be multiples of salary over a fund's life. Top mega-funds pay significantly more than mid-market firms.",
  },
  {
    question: "Do I need an MBA for private equity?",
    answer:
      "Not required but can help, especially for career switchers or those targeting US mega-funds. Many successful PE professionals don't have MBAs. Strong deal experience and a proven track record matter more.",
  },
];

const relatedPages = [
  { href: "/venture-capital-recruitment-agency", title: "Venture Capital Recruitment", description: "VC fund talent specialists." },
  { href: "/chief-of-staff-recruitment-agency", title: "Chief of Staff Recruitment", description: "Strategic leadership roles." },
  { href: "/ea-recruitment-agency", title: "EA Recruitment", description: "Executive assistant specialists." },
];

export default function PrivateEquityRecruitmentAgency() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: "Rainmakrr - Private Equity Recruitment Agency",
    description: "London's specialist private equity recruitment agency placing talent at top PE funds.",
    url: "https://rainmakrr.com/private-equity-recruitment-agency",
    address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "UK" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rainmakrr.com" },
      { "@type": "ListItem", position: 2, name: "Private Equity Recruitment Agency", item: "https://rainmakrr.com/private-equity-recruitment-agency" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-yellow-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-yellow-400">Private Equity Recruitment Agency</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-slate-300 to-yellow-400 bg-clip-text text-transparent">
                  Private Equity Recruitment Agency
                </span>{" "}
                | PE Talent Specialists
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                The insider&apos;s edge in private equity talent. London&apos;s specialist{" "}
                <strong>private equity recruitment agency</strong> placing investment professionals
                at leading buyout, growth equity, and PE funds.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-slate-700 to-yellow-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all glow-gold">
                  Find PE Talent
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-yellow-500 transition-all">
                  View PE Jobs
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                  Buyout & Growth Equity
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                  Confidential Search
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                  London & UK-Wide
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Team Roles */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">PE Roles We Recruit</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-6">Investment Team</h3>
                <div className="space-y-3">
                  {investmentRoles.map((role) => (
                    <div key={role.title} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 flex justify-between items-center">
                      <span className="text-white font-medium">{role.title}</span>
                      <span className="text-slate-400 text-sm">{role.level}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-300 mb-6">Operations & Support</h3>
                <ul className="space-y-3">
                  {operationsRoles.map((role) => (
                    <li key={role} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-slate-300">
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fund Types */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Fund Types We Serve</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {fundTypes.map((fund) => (
                <div key={fund.type} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-all">
                  <h3 className="text-lg font-bold text-white mb-2">{fund.type}</h3>
                  <p className="text-yellow-400 text-sm">{fund.deals}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Salary Guide */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">PE Salary Guide (London)</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-4 px-4 text-slate-400 font-medium">Role</th>
                    <th className="text-left py-4 px-4 text-slate-400 font-medium">Base (£)</th>
                    <th className="text-left py-4 px-4 text-slate-400 font-medium">Bonus</th>
                    <th className="text-left py-4 px-4 text-slate-400 font-medium">Carry</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryData.map((row) => (
                    <tr key={row.role} className="border-b border-slate-800">
                      <td className="py-4 px-4 text-white font-medium">{row.role}</td>
                      <td className="py-4 px-4 text-yellow-400">{row.base}</td>
                      <td className="py-4 px-4 text-slate-300">{row.bonus}</td>
                      <td className="py-4 px-4 text-slate-300">{row.carry}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why PE Firms Choose Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">Why PE Firms Choose Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="text-lg font-bold text-white mb-2">Passive Candidate Access</h3>
                <p className="text-slate-400 text-sm">Reach candidates not actively on the market.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-lg font-bold text-white mb-2">Deep Fund Network</h3>
                <p className="text-slate-400 text-sm">Relationships across London and UK PE landscape.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">🔐</div>
                <h3 className="text-lg font-bold text-white mb-2">Confidential Search</h3>
                <p className="text-slate-400 text-sm">Discreet executive search capability.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-lg font-bold text-white mb-2">Track Record</h3>
                <p className="text-slate-400 text-sm">Placements at top-tier and emerging managers.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-lg font-bold text-white mb-2">Comp Understanding</h3>
                <p className="text-slate-400 text-sm">Deep knowledge of carry and bonus structures.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ faqs={faqs} accentColor="gold" />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-slate-900/80 via-slate-900 to-yellow-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Next PE Investment Professional</h2>
            <p className="text-slate-300 mb-8">
              From Analysts to Partners, we connect PE funds with exceptional investment talent.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-slate-700 to-yellow-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all glow-gold">
                Hire PE Talent
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-yellow-500 transition-all">
                Explore PE Careers
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
                <Link key={page.href} href={page.href} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-all">
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

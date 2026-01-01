import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Sustainability Recruitment Agency UK | ESG & CSR Jobs",
  description:
    "Expert sustainability recruitment agency placing ESG, CSR & sustainability professionals. From Analysts to Chief Sustainability Officers.",
  keywords:
    "sustainability recruitment agency, ESG recruitment, sustainability jobs recruitment, CSR recruitment agency",
  openGraph: {
    title: "Sustainability Recruitment Agency UK | ESG & CSR Jobs",
    description: "Expert sustainability recruitment agency placing ESG, CSR & sustainability professionals.",
    type: "website",
    url: "https://rainmakrr.com/sustainability-recruitment-agency",
  },
  alternates: {
    canonical: "https://rainmakrr.com/sustainability-recruitment-agency",
  },
};

const roles = [
  "Chief Sustainability Officer",
  "Head of ESG",
  "Sustainability Director/Manager",
  "ESG Analyst/Associate",
  "CSR Manager",
  "Net Zero/Decarbonisation Manager",
  "Circular Economy Specialist",
  "Supply Chain Sustainability",
  "Sustainability Communications",
];

const sectors = [
  { name: "Corporate (FTSE)", icon: "📊" },
  { name: "Financial Services", icon: "💰" },
  { name: "Consulting (Big 4)", icon: "📋" },
  { name: "Energy & Utilities", icon: "⚡" },
  { name: "Consumer Goods", icon: "🛒" },
  { name: "Manufacturing", icon: "🏭" },
  { name: "Real Estate", icon: "🏢" },
  { name: "Government", icon: "🏛️" },
];

const trends = [
  { trend: "CSRD Compliance", description: "EU Corporate Sustainability Reporting Directive driving demand for ESG data specialists." },
  { trend: "Net Zero Strategy", description: "Decarbonisation managers and climate strategists in high demand." },
  { trend: "Sustainable Finance", description: "SFDR and taxonomy expertise commanding premium salaries." },
  { trend: "Supply Chain ESG", description: "Scope 3 emissions and ethical sourcing specialists increasingly sought." },
];

const faqs = [
  {
    question: "What qualifications do I need for sustainability jobs?",
    answer:
      "Relevant degrees help (environmental science, sustainability, business) but experience increasingly matters. Certifications like GRI, IEMA, CFA ESG Certificate, and SASB are valuable. Strong data and communication skills are essential.",
  },
  {
    question: "How much do sustainability managers earn?",
    answer:
      "£50-80k for managers, £80-120k for directors, £150k+ for CSOs at large corporates. Financial services and consulting tend to pay at the higher end. ESG investment roles can exceed £200k at senior levels.",
  },
  {
    question: "What's the difference between ESG and CSR?",
    answer:
      "ESG (Environmental, Social, Governance) is investor-focused and data-driven. CSR (Corporate Social Responsibility) is broader and often more philanthropic. ESG has become the dominant framework due to regulatory and investor requirements.",
  },
  {
    question: "Is sustainability a growing career field?",
    answer:
      "Absolutely. Regulatory requirements (CSRD, SFDR, TCFD) and investor pressure are driving rapid growth in sustainability roles across all sectors. Demand significantly outstrips supply for experienced professionals.",
  },
];

const relatedPages = [
  { href: "/green-recruitment-agency", title: "Green Recruitment", description: "Environmental & green economy roles." },
  { href: "/renewable-energy-recruitment-agency", title: "Renewable Energy Recruitment", description: "Clean energy talent." },
  { href: "/climate-tech-recruitment-agency", title: "Climate Tech Recruitment", description: "Net zero technology talent." },
];

export default function SustainabilityRecruitmentAgency() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: "Rainmakrr - Sustainability Recruitment Agency",
    description: "Expert sustainability recruitment agency placing ESG, CSR & sustainability professionals.",
    url: "https://rainmakrr.com/sustainability-recruitment-agency",
    address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "UK" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rainmakrr.com" },
      { "@type": "ListItem", position: 2, name: "Sustainability Recruitment Agency", item: "https://rainmakrr.com/sustainability-recruitment-agency" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 via-transparent to-amber-700/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-teal-400">Sustainability Recruitment Agency</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-teal-400 to-amber-500 bg-clip-text text-transparent">
                  Sustainability Recruitment Agency
                </span>{" "}
                | ESG & CSR Talent
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Recruiting for a sustainable future. The UK&apos;s expert{" "}
                <strong>sustainability recruitment agency</strong> placing ESG, CSR, and
                sustainability professionals at leading organisations.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all">
                  Find Sustainability Talent
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-teal-500 transition-all">
                  View ESG Jobs
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-400 rounded-full" />
                  ESG Specialists
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-400 rounded-full" />
                  Cross-Sector Coverage
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-400 rounded-full" />
                  UK & Europe
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Roles We Recruit */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Sustainability Recruitment Agency Services</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {roles.map((role) => (
                <div key={role} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-teal-500/50 transition-all">
                  <h3 className="text-white font-medium">{role}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Sustainability Recruitment Agency Expertise by Sector</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sectors.map((sector) => (
                <div key={sector.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-teal-500/50 transition-all text-center">
                  <div className="text-3xl mb-2">{sector.icon}</div>
                  <h3 className="text-white font-medium text-sm">{sector.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ESG Section */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">ESG Recruitment Agency Expertise</h2>
            <p className="text-slate-300 mb-8 max-w-3xl">
              As a specialist <strong>ESG recruitment agency</strong>, we place professionals across
              environmental, social, and governance functions — from ESG analysts to Chief Sustainability
              Officers. Our ESG recruitment covers CSRD compliance, TCFD reporting, and net-zero strategy roles.
            </p>
            <h3 className="text-2xl font-bold text-white mb-6">Sustainability Recruitment Agency Insights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {trends.map((item) => (
                <div key={item.trend} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold text-teal-400 mb-2">{item.trend}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Sustainability Recruitment Agency</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">🌍</div>
                <h3 className="font-bold text-white mb-2">Deep ESG Network</h3>
                <p className="text-slate-400 text-sm">Access to sustainability professionals across all sectors.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="font-bold text-white mb-2">Regulatory Knowledge</h3>
                <p className="text-slate-400 text-sm">Understanding of evolving ESG regulations and frameworks.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="font-bold text-white mb-2">Passive Talent Access</h3>
                <p className="text-slate-400 text-sm">Reach candidates not actively seeking new roles.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">✅</div>
                <h3 className="font-bold text-white mb-2">Cross-Industry Track Record</h3>
                <p className="text-slate-400 text-sm">Placements across finance, corporate, and consulting.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ faqs={faqs} accentColor="teal" />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-teal-600/20 via-slate-900 to-amber-700/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Partner With a Specialist Sustainability Recruitment Agency</h2>
            <p className="text-slate-300 mb-8">
              Whether you&apos;re hiring your first ESG analyst or a Chief Sustainability Officer, we have the network.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all">
                Hire Sustainability Talent
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-teal-500 transition-all">
                Find ESG Roles
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
                <Link key={page.href} href={page.href} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-teal-500/50 transition-all">
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

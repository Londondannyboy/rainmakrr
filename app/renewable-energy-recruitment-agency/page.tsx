import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Renewable Energy Recruitment Agency UK | Solar, Wind & Clean Energy Jobs",
  description:
    "Specialist renewable energy recruitment agency placing top talent in solar, wind, hydrogen & energy storage. Connect with leading clean energy employers.",
  keywords:
    "renewable energy recruitment agency, clean energy recruiters uk, energy transition recruitment, renewable jobs recruitment",
  openGraph: {
    title: "Renewable Energy Recruitment Agency UK | Solar, Wind & Clean Energy Jobs",
    description: "Specialist renewable energy recruitment agency placing top talent in solar, wind, hydrogen & energy storage.",
    type: "website",
    url: "https://rainmakrr.com/renewable-energy-recruitment-agency",
  },
  alternates: {
    canonical: "https://rainmakrr.com/renewable-energy-recruitment-agency",
  },
};

const energySectors = [
  { name: "Solar PV & Thermal", icon: "☀️" },
  { name: "Onshore Wind", icon: "🌬️" },
  { name: "Offshore Wind", icon: "🌊" },
  { name: "Hydrogen & Fuel Cells", icon: "💧" },
  { name: "Battery & Energy Storage", icon: "🔋" },
  { name: "Grid Infrastructure", icon: "⚡" },
  { name: "Hydroelectric", icon: "🌊" },
  { name: "Smart Grids", icon: "🔌" },
];

const technicalRoles = [
  "Project Managers",
  "Electrical Engineers",
  "Mechanical Engineers",
  "Civil Engineers",
  "SCADA/Control Systems",
  "O&M Technicians",
  "HSE Managers",
];

const commercialRoles = [
  "Business Development",
  "Asset Managers",
  "Investment Analysts",
  "PPA Specialists",
  "Origination Managers",
  "Finance Directors",
];

const whyChooseUs = [
  { title: "Deep Sector Network", description: "Established relationships across the UK renewable energy industry.", icon: "🌐" },
  { title: "Technical Understanding", description: "We understand the engineering and commercial requirements.", icon: "⚙️" },
  { title: "Fast Turnaround", description: "Project-critical hires delivered at pace.", icon: "⚡" },
  { title: "Contract & Permanent", description: "Flexible solutions for all hiring needs.", icon: "📋" },
];

const faqs = [
  {
    question: "How do I get into renewable energy?",
    answer:
      "Entry points include engineering degrees (electrical, mechanical, civil), industry certifications, or transferring from adjacent sectors like oil & gas, construction, or electrical trades. The sector values both technical expertise and commercial acumen.",
  },
  {
    question: "What are the highest paying renewable energy jobs?",
    answer:
      "Offshore wind project directors (£120k+), Head of Asset Management (£100k+), and technical specialists in battery storage and hydrogen can command premium salaries. Commercial directors and M&A specialists in renewable energy also earn above £100k.",
  },
  {
    question: "Do I need engineering qualifications?",
    answer:
      "For technical roles, yes—typically a relevant engineering degree. However, commercial, finance, legal, and project management roles often accept relevant experience from other industries, particularly energy, infrastructure, or construction.",
  },
  {
    question: "Which renewable energy sector is growing fastest?",
    answer:
      "Battery storage and green hydrogen are seeing explosive growth. Offshore wind continues strong expansion with projects like Scotwind and Celtic Sea. Solar remains the fastest-deploying technology globally.",
  },
];

const relatedPages = [
  { href: "/green-recruitment-agency", title: "Green Recruitment", description: "Environmental & sustainability roles." },
  { href: "/ev-recruitment-agency", title: "EV Recruitment", description: "Electric vehicle specialists." },
  { href: "/cleantech-recruitment-agency", title: "Cleantech Recruitment", description: "Clean technology talent." },
];

export default function RenewableEnergyRecruitmentAgency() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: "Rainmakrr - Renewable Energy Recruitment Agency",
    description: "Specialist renewable energy recruitment agency placing top talent in solar, wind, hydrogen & energy storage.",
    url: "https://rainmakrr.com/renewable-energy-recruitment-agency",
    address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "UK" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rainmakrr.com" },
      { "@type": "ListItem", position: 2, name: "Renewable Energy Recruitment Agency", item: "https://rainmakrr.com/renewable-energy-recruitment-agency" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-transparent to-yellow-500/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-cyan-400">Renewable Energy Recruitment Agency</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-yellow-400 bg-clip-text text-transparent">
                  Renewable Energy Recruitment Agency
                </span>{" "}
                | Clean Energy Talent
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Recruiting the talent that powers tomorrow. The UK&apos;s specialist{" "}
                <strong>renewable energy recruitment agency</strong> connecting engineers, developers, and
                commercial leaders with the clean energy transition.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-yellow-500 text-slate-900 font-semibold rounded-xl hover:opacity-90 transition-all">
                  Find Energy Talent
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-cyan-500 transition-all">
                  View Energy Jobs
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                  Energy Transition Experts
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                  Technical & Commercial Roles
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                  UK & Europe Coverage
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Energy Sectors */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Energy Sectors We Cover</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              Our <strong className="text-cyan-400">renewable energy recruitment agency</strong> spans the full clean energy ecosystem.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {energySectors.map((sector) => (
                <div key={sector.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-all text-center">
                  <div className="text-3xl mb-2">{sector.icon}</div>
                  <h3 className="text-white font-medium text-sm">{sector.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roles We Fill */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Roles We Fill</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Technical Roles</h3>
                <ul className="space-y-2">
                  {technicalRoles.map((role) => (
                    <li key={role} className="text-slate-300 flex items-center gap-2">
                      <span className="text-cyan-400">→</span> {role}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Commercial Roles</h3>
                <ul className="space-y-2">
                  {commercialRoles.map((role) => (
                    <li key={role} className="text-slate-300 flex items-center gap-2">
                      <span className="text-yellow-400">→</span> {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Why Renewables Companies Choose Us</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ faqs={faqs} accentColor="blue" />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 via-slate-900 to-yellow-500/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Power Your Team with Top Energy Talent</h2>
            <p className="text-slate-300 mb-8">
              From offshore wind to battery storage, we connect you with the engineers and leaders driving the energy transition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-yellow-500 text-slate-900 font-semibold rounded-xl hover:opacity-90 transition-all">
                Hire Energy Talent
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-cyan-500 transition-all">
                Find Energy Jobs
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
                <Link key={page.href} href={page.href} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
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

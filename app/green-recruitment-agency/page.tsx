import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Green Recruitment Agency UK | Environmental & Sustainability Jobs",
  description:
    "The UK's specialist green recruitment agency connecting top environmental talent with sustainability-focused employers. ESG, renewables, cleantech & climate roles.",
  keywords:
    "green recruitment agency, green jobs recruitment, environmental recruitment agency, eco recruitment agency, sustainability recruitment",
  openGraph: {
    title: "Green Recruitment Agency UK | Environmental & Sustainability Jobs",
    description:
      "The UK's specialist green recruitment agency connecting top environmental talent with sustainability-focused employers.",
    type: "website",
    url: "https://rainmakrr.com/green-recruitment-agency",
  },
  alternates: {
    canonical: "https://rainmakrr.com/green-recruitment-agency",
  },
};

const sectors = [
  { name: "Solar & Wind Energy", icon: "☀️" },
  { name: "Electric Vehicles", icon: "🔋" },
  { name: "Carbon Markets & Trading", icon: "📊" },
  { name: "Sustainable Finance", icon: "💰" },
  { name: "Circular Economy", icon: "♻️" },
  { name: "Conservation & Biodiversity", icon: "🌿" },
  { name: "Green Building & Construction", icon: "🏗️" },
  { name: "Waste & Recycling", icon: "🗑️" },
];

const services = [
  {
    title: "ESG & Sustainability Roles",
    description: "Chief Sustainability Officers, ESG Analysts, Net Zero Managers, and sustainability consultants.",
    icon: "🌍",
  },
  {
    title: "Renewable Energy Positions",
    description: "Engineers, project managers, and commercial leaders for solar, wind, hydrogen, and battery storage.",
    icon: "⚡",
  },
  {
    title: "Environmental Consulting",
    description: "Environmental scientists, impact assessors, and compliance specialists for consultancies.",
    icon: "🔬",
  },
];

const trustSignals = [
  { label: "Deep green sector expertise", icon: "🎯" },
  { label: "Network of 5,000+ sustainability professionals", icon: "👥" },
  { label: "Exclusive access to unadvertised roles", icon: "🔒" },
  { label: "Track record with leading green employers", icon: "✅" },
];

const processSteps = [
  { step: 1, title: "Brief & Requirements", description: "We understand your hiring needs, culture, and ideal candidate profile." },
  { step: 2, title: "Talent Search & Screening", description: "We search our network and screen candidates against your criteria." },
  { step: 3, title: "Shortlist & Interviews", description: "We present a curated shortlist and coordinate the interview process." },
  { step: 4, title: "Placement & Onboarding", description: "We support through offer negotiation and onboarding success." },
];

const faqs = [
  {
    question: "What is a green recruitment agency?",
    answer:
      "A green recruitment agency specialises in placing candidates in environmentally-focused roles across sectors like renewable energy, sustainability consulting, ESG, and conservation. We understand the unique skills, qualifications, and cultural fit required for green economy roles.",
  },
  {
    question: "How much do green jobs pay in the UK?",
    answer:
      "Green job salaries vary significantly by role and seniority. Sustainability managers typically earn £45-70k, ESG analysts £35-55k, renewable energy engineers £40-80k, and Chief Sustainability Officers £120-200k+. Salaries are rising as demand outstrips supply.",
  },
  {
    question: "What qualifications do I need for sustainability roles?",
    answer:
      "Qualifications vary by role. Many positions value relevant degrees (environmental science, engineering, business), but increasingly skills in data analysis, project management, and specific certifications (GRI, IEMA, CFA ESG) are important. Experience often matters more than formal qualifications.",
  },
  {
    question: "What industries hire through green recruitment agencies?",
    answer:
      "Energy, finance, consulting, manufacturing, construction, retail, FMCG, and government all hire sustainability and environmental professionals. Every sector now needs ESG expertise due to regulatory requirements and stakeholder pressure.",
  },
];

const relatedPages = [
  { href: "/renewable-energy-recruitment-agency", title: "Renewable Energy Recruitment", description: "Solar, wind & clean energy talent." },
  { href: "/sustainability-recruitment-agency", title: "Sustainability Recruitment", description: "ESG & CSR specialists." },
  { href: "/cleantech-recruitment-agency", title: "Cleantech Recruitment", description: "Clean technology talent." },
  { href: "/climate-tech-recruitment-agency", title: "Climate Tech Recruitment", description: "Net zero & climate solutions." },
  { href: "/ev-recruitment-agency", title: "EV Recruitment", description: "Electric vehicle specialists." },
];

export default function GreenRecruitmentAgency() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: "Rainmakrr - Green Recruitment Agency",
    description: "The UK's specialist green recruitment agency connecting top environmental talent with sustainability-focused employers.",
    url: "https://rainmakrr.com/green-recruitment-agency",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "UK",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rainmakrr.com" },
      { "@type": "ListItem", position: 2, name: "Green Recruitment Agency", item: "https://rainmakrr.com/green-recruitment-agency" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-transparent to-lime-500/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-green-400">Green Recruitment Agency</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
                  Green Recruitment Agency
                </span>{" "}
                | Sustainable Talent Solutions
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Powering the green transition with exceptional talent. The UK&apos;s specialist{" "}
                <strong>green recruitment agency</strong> connecting sustainability professionals with
                employers driving environmental change.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-lime-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all glow-green"
                >
                  Find Green Talent
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-green-500 transition-all"
                >
                  Browse Green Jobs
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  Green Sector Specialists
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  5,000+ Sustainability Professionals
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  UK-Wide Coverage
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              As a specialist <strong className="text-green-400">green recruitment agency</strong>, we place talent across the full spectrum of environmental and sustainability roles.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-all">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-400 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sectors We Cover */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Sectors We Cover</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              Our <strong className="text-green-400">green recruitment agency</strong> expertise spans the entire sustainability ecosystem.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sectors.map((sector) => (
                <div key={sector.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-green-500/50 transition-all text-center">
                  <div className="text-3xl mb-2">{sector.icon}</div>
                  <h3 className="text-white font-medium text-sm">{sector.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Green Recruitment Agency?</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              What sets us apart from generalist recruiters.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustSignals.map((signal) => (
                <div key={signal.label} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="text-3xl mb-4">{signal.icon}</div>
                  <p className="text-white font-medium">{signal.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Our Recruitment Process</h2>

            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center text-2xl font-bold text-green-400 mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ faqs={faqs} accentColor="green" />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600/20 via-slate-900 to-lime-500/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Hire Green Talent?
            </h2>
            <p className="text-slate-300 mb-8">
              Whether you&apos;re building a sustainability team, hiring your first ESG professional, or
              looking for your next green career move—we&apos;re here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-lime-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all glow-green"
              >
                Hire Green Talent
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-green-500 transition-all"
              >
                Upload Your CV
              </Link>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Explore Related Services</h2>
            <div className="grid md:grid-cols-5 gap-4">
              {relatedPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-green-500/50 transition-all"
                >
                  <h3 className="font-semibold text-white mb-1 text-sm">{page.title}</h3>
                  <p className="text-slate-400 text-xs">{page.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Cleantech Recruitment Agency UK | Clean Technology Jobs",
  description:
    "Specialist cleantech recruitment agency connecting innovative companies with top clean technology talent. Climate tech, carbon capture, clean energy & more.",
  keywords:
    "cleantech recruitment agency, clean technology jobs, cleantech recruiters, green tech recruitment",
  openGraph: {
    title: "Cleantech Recruitment Agency UK | Clean Technology Jobs",
    description: "Specialist cleantech recruitment agency connecting innovative companies with top clean technology talent.",
    type: "website",
    url: "https://rainmakrr.com/cleantech-recruitment-agency",
  },
  alternates: {
    canonical: "https://rainmakrr.com/cleantech-recruitment-agency",
  },
};

const sectors = [
  { name: "Carbon Capture (CCS/CCUS)", icon: "🏭" },
  { name: "Clean Energy Technology", icon: "⚡" },
  { name: "Sustainable Materials", icon: "🧪" },
  { name: "Water Technology", icon: "💧" },
  { name: "Waste & Circular Economy", icon: "♻️" },
  { name: "AgTech & Sustainable Food", icon: "🌱" },
  { name: "Green Hydrogen", icon: "💨" },
  { name: "Smart Grid & Energy", icon: "🔌" },
];

const roles = [
  "Engineers & Scientists",
  "Product & R&D",
  "Commercial & Business Development",
  "Operations & Manufacturing",
  "Project Management",
  "Investment & Corporate Development",
  "Policy & Government Affairs",
];

const faqs = [
  {
    question: "What is cleantech?",
    answer:
      "Cleantech (clean technology) refers to products, services, and processes that reduce environmental impact—from renewable energy to waste reduction to sustainable materials. It's a broad category spanning hardware, software, and services.",
  },
  {
    question: "What jobs are in cleantech?",
    answer:
      "Engineers, scientists, product managers, commercial roles, and operations professionals across energy, materials, water, waste, and agriculture sectors. Roles span early R&D through to commercial scale-up.",
  },
  {
    question: "How do I get into cleantech?",
    answer:
      "Technical backgrounds (engineering, chemistry, biology) are common paths. Commercial and operations experience from adjacent industries also transfers well. Domain expertise in specific cleantech verticals is highly valued.",
  },
];

const relatedPages = [
  { href: "/climate-tech-recruitment-agency", title: "Climate Tech Recruitment", description: "Net zero & climate technology talent." },
  { href: "/green-recruitment-agency", title: "Green Recruitment", description: "Environmental & sustainability roles." },
  { href: "/renewable-energy-recruitment-agency", title: "Renewable Energy Recruitment", description: "Clean energy specialists." },
];

export default function CleantechRecruitmentAgency() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: "Rainmakrr - Cleantech Recruitment Agency",
    description: "Specialist cleantech recruitment agency connecting innovative companies with top clean technology talent.",
    url: "https://rainmakrr.com/cleantech-recruitment-agency",
    address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "UK" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rainmakrr.com" },
      { "@type": "ListItem", position: 2, name: "Cleantech Recruitment Agency", item: "https://rainmakrr.com/cleantech-recruitment-agency" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-transparent to-white/10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-emerald-400">Cleantech Recruitment Agency</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent">
                  Cleantech Recruitment Agency
                </span>{" "}
                | Clean Technology Talent
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Talent for technologies that change everything. The UK&apos;s specialist{" "}
                <strong>cleantech recruitment agency</strong> connecting innovative companies
                with the engineers, scientists, and leaders building a sustainable future.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-400 text-slate-900 font-semibold rounded-xl hover:opacity-90 transition-all">
                  Find Cleantech Talent
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-emerald-400 transition-all">
                  View Cleantech Jobs
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Deep Tech Expertise
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  VC-Backed Scale-ups
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  R&D to Commercial
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Cleantech Sectors */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Cleantech Sectors We Cover</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sectors.map((sector) => (
                <div key={sector.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-emerald-400/50 transition-all text-center">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {roles.map((role) => (
                <div key={role} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-emerald-400/50 transition-all">
                  <h3 className="text-white font-medium">{role}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Landscape */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">Cleantech Investment Landscape</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="font-bold text-white mb-2">Record VC Investment</h3>
                <p className="text-slate-400 text-sm">Cleantech VC funding has reached all-time highs, driving talent demand.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">🏛️</div>
                <h3 className="font-bold text-white mb-2">Government Support</h3>
                <p className="text-slate-400 text-sm">UK net zero strategy and green financing driving sector growth.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="font-bold text-white mb-2">Scale-up Phase</h3>
                <p className="text-slate-400 text-sm">Many technologies moving from R&D to commercial deployment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">Why Cleantech Companies Choose Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">🔬</div>
                <h3 className="font-bold text-white mb-2">Deep Tech Understanding</h3>
                <p className="text-slate-400 text-sm">We understand complex technical requirements.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="font-bold text-white mb-2">Academic & Industry Network</h3>
                <p className="text-slate-400 text-sm">Access to researchers and industry veterans.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="font-bold text-white mb-2">VC-Backed Experience</h3>
                <p className="text-slate-400 text-sm">Familiar with startup and scale-up dynamics.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">🧪</div>
                <h3 className="font-bold text-white mb-2">Technical Assessment</h3>
                <p className="text-slate-400 text-sm">Rigorous evaluation of technical candidates.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ faqs={faqs} accentColor="lime" />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-emerald-400/20 via-slate-900 to-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Build Your Cleantech Team</h2>
            <p className="text-slate-300 mb-8">
              From CCS engineers to sustainable materials scientists, we connect you with the talent driving clean innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-400 text-slate-900 font-semibold rounded-xl hover:opacity-90 transition-all">
                Hire Cleantech Talent
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-emerald-400 transition-all">
                Find Cleantech Roles
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
                <Link key={page.href} href={page.href} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-emerald-400/50 transition-all">
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

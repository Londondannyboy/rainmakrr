import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Climate Tech Recruitment Agency UK | Net Zero & Climate Jobs",
  description:
    "Leading climate tech recruitment agency placing talent at the forefront of net zero. Carbon markets, climate software, decarbonisation & impact roles.",
  keywords:
    "climate tech recruitment agency, climate technology jobs, climate jobs recruitment, net zero recruitment",
  openGraph: {
    title: "Climate Tech Recruitment Agency UK | Net Zero & Climate Jobs",
    description: "Leading climate tech recruitment agency placing talent at the forefront of net zero.",
    type: "website",
    url: "https://rainmakrr.com/climate-tech-recruitment-agency",
  },
  alternates: {
    canonical: "https://rainmakrr.com/climate-tech-recruitment-agency",
  },
};

const focusAreas = [
  { name: "Carbon Accounting & Software", icon: "📊" },
  { name: "Climate Risk & Analytics", icon: "📈" },
  { name: "Decarbonisation Solutions", icon: "🏭" },
  { name: "Nature-Based Solutions", icon: "🌳" },
  { name: "Climate Finance & Carbon Markets", icon: "💰" },
  { name: "Climate Policy & Advocacy", icon: "🏛️" },
  { name: "Adaptation & Resilience", icon: "🛡️" },
  { name: "Direct Air Capture", icon: "💨" },
];

const roles = [
  "Climate Scientists & Modellers",
  "Carbon Market Specialists",
  "Climate Software Engineers",
  "Sustainability Data Analysts",
  "Climate Policy Experts",
  "Impact Investment Professionals",
  "Net Zero Strategy Consultants",
];

const faqs = [
  {
    question: "What is climate tech?",
    answer:
      "Climate tech refers to technologies specifically designed to reduce greenhouse gas emissions or address climate change impacts—from carbon accounting software to direct air capture to climate risk analytics.",
  },
  {
    question: "How do I get into climate tech?",
    answer:
      "Software engineers, data scientists, and climate scientists are in high demand. Commercial roles welcome passion for climate combined with relevant business experience. Many enter from adjacent sectors like energy, finance, or consulting.",
  },
  {
    question: "What skills do climate tech companies need?",
    answer:
      "Data science, software engineering, carbon accounting, climate science, policy expertise, and increasingly finance/carbon markets knowledge. Strong analytical and communication skills are essential across roles.",
  },
  {
    question: "Is climate tech a good career?",
    answer:
      "Yes—it's one of the fastest-growing sectors globally with significant VC investment and strong purpose alignment. The regulatory environment (CSRD, SFDR) is driving sustained corporate demand for climate solutions.",
  },
];

const relatedPages = [
  { href: "/cleantech-recruitment-agency", title: "Cleantech Recruitment", description: "Clean technology talent." },
  { href: "/sustainability-recruitment-agency", title: "Sustainability Recruitment", description: "ESG & CSR specialists." },
  { href: "/green-recruitment-agency", title: "Green Recruitment", description: "Environmental roles." },
];

export default function ClimateTechRecruitmentAgency() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: "Rainmakrr - Climate Tech Recruitment Agency",
    description: "Leading climate tech recruitment agency placing talent at the forefront of net zero.",
    url: "https://rainmakrr.com/climate-tech-recruitment-agency",
    address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "UK" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rainmakrr.com" },
      { "@type": "ListItem", position: 2, name: "Climate Tech Recruitment Agency", item: "https://rainmakrr.com/climate-tech-recruitment-agency" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-orange-400/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-blue-400">Climate Tech Recruitment Agency</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                  Climate Tech Recruitment Agency
                </span>{" "}
                | Net Zero Talent Specialists
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Recruiting the talent to solve climate change. The UK&apos;s leading{" "}
                <strong>climate tech recruitment agency</strong> connecting
                innovative companies with the scientists, engineers, and leaders driving net zero.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-orange-400 text-white font-semibold rounded-xl hover:opacity-90 transition-all">
                  Find Climate Talent
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-blue-400 transition-all">
                  View Climate Jobs
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  Carbon Markets
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-400 rounded-full" />
                  Climate Software
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  Net Zero Strategy
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Climate Tech Focus Areas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {focusAreas.map((area) => (
                <div key={area.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-blue-400/50 transition-all text-center">
                  <div className="text-3xl mb-2">{area.icon}</div>
                  <h3 className="text-white font-medium text-sm">{area.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roles We Recruit */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Roles We Recruit</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {roles.map((role) => (
                <div key={role} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-orange-400/50 transition-all">
                  <h3 className="text-white font-medium">{role}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Climate Tech vs Cleantech */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Climate Tech vs Cleantech</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-4 px-4 text-blue-400 font-medium">Climate Tech</th>
                    <th className="text-left py-4 px-4 text-emerald-400 font-medium">Cleantech</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 text-white">Focused specifically on climate/GHG</td>
                    <td className="py-4 px-4 text-white">Broader environmental focus</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 text-white">Software/data heavy</td>
                    <td className="py-4 px-4 text-white">Hardware/engineering heavy</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 text-white">Carbon markets emphasis</td>
                    <td className="py-4 px-4 text-white">Energy transition emphasis</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 text-white">Newer category (2010s+)</td>
                    <td className="py-4 px-4 text-white">Established since 2000s</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Climate Tech Ecosystem */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">UK Climate Tech Ecosystem</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="font-bold text-white mb-2">Startup Boom</h3>
                <p className="text-slate-400 text-sm">UK is a leading hub for climate tech startups and VC investment.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">🏛️</div>
                <h3 className="font-bold text-white mb-2">Policy Drivers</h3>
                <p className="text-slate-400 text-sm">Net Zero Strategy and COP presidency driving momentum.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">💼</div>
                <h3 className="font-bold text-white mb-2">Career Opportunities</h3>
                <p className="text-slate-400 text-sm">Growing demand for climate talent across all seniority levels.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ faqs={faqs} accentColor="coral" />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-500/20 via-slate-900 to-orange-400/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join the Climate Solution</h2>
            <p className="text-slate-300 mb-8">
              Whether you&apos;re hiring climate scientists or carbon market specialists, we have the network to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-orange-400 text-white font-semibold rounded-xl hover:opacity-90 transition-all">
                Hire Climate Talent
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-blue-400 transition-all">
                Find Climate Careers
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
                <Link key={page.href} href={page.href} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-400/50 transition-all">
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

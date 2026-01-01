import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "EV Recruitment Agency UK | Electric Vehicle & Automotive Jobs",
  description:
    "Specialist EV recruitment agency for the electric vehicle revolution. Engineers, sales, manufacturing & leadership roles at top EV companies.",
  keywords:
    "ev recruitment agency, electric vehicle recruitment, ev jobs uk, automotive recruitment",
  openGraph: {
    title: "EV Recruitment Agency UK | Electric Vehicle & Automotive Jobs",
    description: "Specialist EV recruitment agency for the electric vehicle revolution.",
    type: "website",
    url: "https://rainmakrr.com/ev-recruitment-agency",
  },
  alternates: {
    canonical: "https://rainmakrr.com/ev-recruitment-agency",
  },
};

const engineeringRoles = [
  "Battery Engineers",
  "Powertrain/Drivetrain Specialists",
  "Thermal Management Engineers",
  "Power Electronics Engineers",
  "BMS (Battery Management Systems)",
  "Vehicle Integration Engineers",
];

const commercialRoles = [
  "EV Sales & Marketing",
  "Charging Infrastructure",
  "Fleet Management",
  "Manufacturing & Production",
  "Supply Chain (batteries)",
  "Software & Connectivity",
];

const companyTypes = [
  { type: "Legacy OEMs", examples: "VW, BMW, JLR", icon: "🚗" },
  { type: "Pure EV OEMs", examples: "Tesla, Rivian, Lucid", icon: "⚡" },
  { type: "EV Startups", examples: "Arrival, Volta", icon: "🚀" },
  { type: "Battery Manufacturers", examples: "CATL, Samsung SDI", icon: "🔋" },
  { type: "Charging Networks", examples: "BP Pulse, Pod Point", icon: "🔌" },
  { type: "Component Suppliers", examples: "Tier 1 & 2 suppliers", icon: "⚙️" },
];

const faqs = [
  {
    question: "How do I get into the EV industry?",
    answer:
      "Engineers can transition from automotive, aerospace, or electronics backgrounds. Commercial roles welcome transferable skills from adjacent industries. Battery expertise is particularly valued and commands premium salaries.",
  },
  {
    question: "What skills are needed for EV jobs?",
    answer:
      "High-voltage systems, battery chemistry, power electronics, thermal management, embedded software, and manufacturing automation. For commercial roles, understanding of the EV ecosystem and charging infrastructure is valuable.",
  },
  {
    question: "Is EV a good career choice?",
    answer:
      "Yes—the UK is banning new petrol/diesel cars by 2035, driving massive investment and job creation. Battery gigafactories, charging infrastructure, and EV manufacturing are all growth areas with strong long-term prospects.",
  },
  {
    question: "What are EV engineer salaries?",
    answer:
      "£40-60k for junior engineers, £60-90k for experienced professionals, £100k+ for specialists in batteries and power electronics. EV startups may offer equity alongside base salary.",
  },
];

const relatedPages = [
  { href: "/renewable-energy-recruitment-agency", title: "Renewable Energy Recruitment", description: "Clean energy talent." },
  { href: "/cleantech-recruitment-agency", title: "Cleantech Recruitment", description: "Clean technology specialists." },
  { href: "/green-recruitment-agency", title: "Green Recruitment", description: "Environmental & sustainability roles." },
];

export default function EVRecruitmentAgency() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: "Rainmakrr - EV Recruitment Agency",
    description: "Specialist EV recruitment agency for the electric vehicle revolution.",
    url: "https://rainmakrr.com/ev-recruitment-agency",
    address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "UK" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rainmakrr.com" },
      { "@type": "ListItem", position: 2, name: "EV Recruitment Agency", item: "https://rainmakrr.com/ev-recruitment-agency" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-orange-500/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-blue-400">EV Recruitment Agency</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                  EV Recruitment Agency
                </span>{" "}
                | Electric Vehicle Talent Specialists
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Powering the EV revolution with exceptional talent. The UK&apos;s specialist{" "}
                <strong>EV recruitment agency</strong> connecting engineers, commercial leaders,
                and manufacturing experts with the electric vehicle industry.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all">
                  Find EV Talent
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-blue-500 transition-all">
                  View EV Jobs
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  Battery & Powertrain
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-400 rounded-full" />
                  Charging Infrastructure
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  OEMs & Startups
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* EV Roles */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">EV Roles We Recruit</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Engineering</h3>
                <ul className="space-y-2">
                  {engineeringRoles.map((role) => (
                    <li key={role} className="text-slate-300 flex items-center gap-2">
                      <span className="text-blue-400">→</span> {role}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-orange-400 mb-4">Commercial & Operations</h3>
                <ul className="space-y-2">
                  {commercialRoles.map((role) => (
                    <li key={role} className="text-slate-300 flex items-center gap-2">
                      <span className="text-orange-400">→</span> {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Companies We Work With */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Companies We Work With</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {companyTypes.map((company) => (
                <div key={company.type} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
                  <div className="text-3xl mb-4">{company.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{company.type}</h3>
                  <p className="text-slate-400 text-sm">{company.examples}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UK EV Market */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">UK EV Market Insights</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">2035</div>
                <p className="text-slate-400 text-sm">Petrol/diesel ban</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">£9bn+</div>
                <p className="text-slate-400 text-sm">Battery investment</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">100k+</div>
                <p className="text-slate-400 text-sm">New EV jobs by 2030</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">40%+</div>
                <p className="text-slate-400 text-sm">New car sales are EVs</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ faqs={faqs} accentColor="blue" />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 via-slate-900 to-orange-500/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Accelerate Your EV Hiring</h2>
            <p className="text-slate-300 mb-8">
              From battery engineers to commercial leaders, we connect you with the talent driving the EV revolution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all">
                Hire EV Talent
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-blue-500 transition-all">
                Find EV Careers
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
                <Link key={page.href} href={page.href} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
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

import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Space Recruitment Agency UK | Aerospace & Satellite Jobs",
  description:
    "Specialist space recruitment agency for the UK aerospace and satellite industry. Engineers, scientists & commercial talent for NewSpace, defence & exploration.",
  keywords:
    "space recruitment agency, aerospace recruitment agency, satellite recruitment, space industry jobs",
  openGraph: {
    title: "Space Recruitment Agency UK | Aerospace & Satellite Jobs",
    description: "Specialist space recruitment agency for the UK aerospace and satellite industry.",
    type: "website",
    url: "https://rainmakrr.com/space-recruitment-agency",
  },
  alternates: {
    canonical: "https://rainmakrr.com/space-recruitment-agency",
  },
};

const sectors = [
  { name: "Launch Vehicles & Rockets", icon: "🚀" },
  { name: "Satellites & Constellations", icon: "🛰️" },
  { name: "Space Exploration", icon: "🌍" },
  { name: "Ground Segment & Mission Ops", icon: "📡" },
  { name: "Defence & National Security", icon: "🛡️" },
  { name: "Earth Observation", icon: "🌐" },
  { name: "Space Tourism", icon: "✨" },
  { name: "In-Space Manufacturing", icon: "🏭" },
];

const technicalRoles = [
  "Spacecraft Systems Engineers",
  "Propulsion Engineers",
  "GNC (Guidance, Navigation, Control)",
  "RF & Communications Engineers",
  "Thermal Engineers",
  "Structures & Mechanisms",
  "Flight & Ground Software",
  "Mission Planners & Operators",
];

const commercialRoles = [
  "Business Development",
  "Programme/Project Managers",
  "Commercial & Sales",
  "Policy & Regulatory",
  "Finance & Investment",
];

const faqs = [
  {
    question: "How do I get into the space industry?",
    answer:
      "Engineering degrees (aerospace, mechanical, electrical, software) are most common paths. Physics and maths also valued. Industry experience from automotive, defence, or aviation transfers well to space. Security clearance is often required.",
  },
  {
    question: "What qualifications do I need for aerospace jobs?",
    answer:
      "Typically a relevant engineering degree. Security clearance (SC or DV) often required for defence-related roles. Specific spacecraft experience is highly valued, but transferable skills from adjacent industries are increasingly accepted.",
  },
  {
    question: "What's the salary for space engineers in the UK?",
    answer:
      "£35-50k for graduates, £50-80k for experienced engineers, £80-120k+ for specialists and senior roles. NewSpace startups may offer equity alongside base salary. Defence primes offer comprehensive benefits packages.",
  },
  {
    question: "What's the difference between space and aerospace?",
    answer:
      "Aerospace covers both aviation (aircraft) and space. 'Space' specifically refers to spacecraft, satellites, and launch vehicles. Many engineering skills overlap, making transitions between sectors common.",
  },
];

const relatedPages = [
  { href: "/cleantech-recruitment-agency", title: "Cleantech Recruitment", description: "Earth observation crossover roles." },
  { href: "/ev-recruitment-agency", title: "EV Recruitment", description: "Engineering skills crossover." },
];

export default function SpaceRecruitmentAgency() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: "Rainmakrr - Space Recruitment Agency",
    description: "Specialist space recruitment agency for the UK aerospace and satellite industry.",
    url: "https://rainmakrr.com/space-recruitment-agency",
    address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "UK" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rainmakrr.com" },
      { "@type": "ListItem", position: 2, name: "Space Recruitment Agency", item: "https://rainmakrr.com/space-recruitment-agency" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-purple-600/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-purple-400">Space Recruitment Agency</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-slate-300 to-purple-400 bg-clip-text text-transparent">
                  Space Recruitment Agency
                </span>{" "}
                | Aerospace & Satellite Talent
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Recruiting for the final frontier. The UK&apos;s specialist{" "}
                <strong>space recruitment agency</strong> connecting engineers, scientists,
                and commercial leaders with the aerospace and satellite industry.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold rounded-xl hover:opacity-90 transition-all glow-purple">
                  Find Space Talent
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-purple-500 transition-all">
                  View Space Jobs
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full" />
                  NewSpace & Primes
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full" />
                  Satellites & Launch
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full" />
                  Defence & Commercial
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Space Sectors */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Space & Aerospace Sectors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sectors.map((sector) => (
                <div key={sector.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-purple-500/50 transition-all text-center">
                  <div className="text-3xl mb-2">{sector.icon}</div>
                  <h3 className="text-white font-medium text-sm">{sector.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roles We Recruit */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Roles We Recruit</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Technical</h3>
                <ul className="space-y-2">
                  {technicalRoles.map((role) => (
                    <li key={role} className="text-slate-300 flex items-center gap-2">
                      <span className="text-purple-400">→</span> {role}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-slate-300 mb-4">Commercial & Support</h3>
                <ul className="space-y-2">
                  {commercialRoles.map((role) => (
                    <li key={role} className="text-slate-300 flex items-center gap-2">
                      <span className="text-slate-400">→</span> {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* UK Space Industry */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">UK Space Industry Overview</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">£17bn+</div>
                <p className="text-slate-400 text-sm">UK space industry value</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50,000+</div>
                <p className="text-slate-400 text-sm">Space sector jobs</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
                <p className="text-slate-400 text-sm">UK spaceports</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">10%</div>
                <p className="text-slate-400 text-sm">Global satellite market share</p>
              </div>
            </div>
          </div>
        </section>

        {/* NewSpace vs Traditional */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">NewSpace vs Traditional Aerospace</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-4 px-4 text-purple-400 font-medium">NewSpace</th>
                    <th className="text-left py-4 px-4 text-slate-300 font-medium">Traditional Aerospace</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 text-white">Agile, startup culture</td>
                    <td className="py-4 px-4 text-white">Structured, process-driven</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 text-white">Commercial focus</td>
                    <td className="py-4 px-4 text-white">Government/defence focus</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 text-white">Move fast, iterate</td>
                    <td className="py-4 px-4 text-white">Long development cycles</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 text-white">Often VC-backed</td>
                    <td className="py-4 px-4 text-white">Established primes</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 text-white">Competitive salary + equity</td>
                    <td className="py-4 px-4 text-white">Stable salary + benefits</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Key Players */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">Companies We Work With</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="font-bold text-white mb-3">Primes</h3>
                <p className="text-slate-400 text-sm">Airbus Defence & Space, Lockheed Martin UK, BAE Systems, Rolls-Royce</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="font-bold text-white mb-3">NewSpace Startups</h3>
                <p className="text-slate-400 text-sm">OneWeb, Satellite Vu, D-Orbit UK, Orbex, Skyrora</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="font-bold text-white mb-3">Government & Agencies</h3>
                <p className="text-slate-400 text-sm">UK Space Agency, MoD, ESA UK, National Space Centre</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ faqs={faqs} accentColor="purple" />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-slate-900/80 via-slate-900 to-purple-600/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Launch Your Space Team</h2>
            <p className="text-slate-300 mb-8">
              From propulsion engineers to satellite operators, we connect you with the talent pushing boundaries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold rounded-xl hover:opacity-90 transition-all glow-purple">
                Hire Space Talent
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-purple-500 transition-all">
                Explore Space Careers
              </Link>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Explore Related Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
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

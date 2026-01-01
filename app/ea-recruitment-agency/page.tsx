import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "EA Recruitment Agency UK | Executive Assistant & PA Jobs",
  description:
    "Premier EA recruitment agency placing exceptional Executive Assistants with C-suite leaders, HNWIs & top firms. London & UK-wide.",
  keywords:
    "ea recruitment agency, executive assistant recruitment, PA recruitment agency, EA jobs london",
  openGraph: {
    title: "EA Recruitment Agency UK | Executive Assistant & PA Jobs",
    description: "Premier EA recruitment agency placing exceptional Executive Assistants with C-suite leaders.",
    type: "website",
    url: "https://rainmakrr.com/ea-recruitment-agency",
  },
  alternates: {
    canonical: "https://rainmakrr.com/ea-recruitment-agency",
  },
};

const eaRoles = [
  "C-Suite Executive Assistants",
  "Board-Level PAs",
  "Private EAs (HNWI/Family Office)",
  "Chief of Staff (EA pathway)",
  "Team Assistants",
  "Office Managers",
  "Virtual EAs",
];

const sectors = [
  { name: "Private Equity & VC", icon: "💼" },
  { name: "Investment Banking", icon: "🏦" },
  { name: "Hedge Funds", icon: "📈" },
  { name: "Family Offices", icon: "🏛️" },
  { name: "FTSE 100/250", icon: "📊" },
  { name: "Magic Circle Law", icon: "⚖️" },
  { name: "Media & Entertainment", icon: "🎬" },
  { name: "HNWIs & Principals", icon: "👔" },
];

const qualities = [
  { trait: "Anticipation & Proactivity", description: "Thinking three steps ahead." },
  { trait: "Discretion & Confidentiality", description: "Trusted with sensitive information." },
  { trait: "Organisational Excellence", description: "Managing complex schedules flawlessly." },
  { trait: "Communication Skills", description: "Professional interactions at all levels." },
  { trait: "Technical Proficiency", description: "Advanced software and tools." },
  { trait: "Calm Under Pressure", description: "Grace in high-stakes situations." },
];

const salaryData = [
  { role: "Junior EA", salary: "£35-45k" },
  { role: "EA (3-5 years)", salary: "£45-60k" },
  { role: "Senior EA (C-Suite)", salary: "£60-85k" },
  { role: "Private EA (HNWI)", salary: "£70-120k+" },
  { role: "EA to CEO (FTSE 100)", salary: "£80-100k" },
];

const faqs = [
  {
    question: "What's the difference between an EA and a PA?",
    answer:
      "EAs typically support C-suite executives with strategic tasks, diary management, and decision support. PAs often handle more administrative duties. The lines are blurring, and many roles combine both. EA roles tend to be more senior with greater strategic involvement.",
  },
  {
    question: "How much do Executive Assistants earn in London?",
    answer:
      "£35k-100k+ depending on seniority and sector. Private EAs supporting HNWIs can earn significantly more, especially with live-in, travel requirements, or family office roles. Financial services and PE/VC pay at the top end.",
  },
  {
    question: "What qualifications do I need to be an EA?",
    answer:
      "No specific qualifications required, but strong experience, excellent references, and increasingly tech skills (advanced Office, project management tools) are essential. A degree can help but isn't mandatory.",
  },
  {
    question: "How do I transition from PA to EA?",
    answer:
      "Seek exposure to C-suite, take on strategic projects, develop business acumen, and consider moves to sectors known for strong EA career paths (PE, family offices). Proactively managing your principal's priorities rather than just their diary is key.",
  },
];

const relatedPages = [
  { href: "/chief-of-staff-recruitment-agency", title: "Chief of Staff Recruitment", description: "Strategic leadership roles." },
  { href: "/private-equity-recruitment-agency", title: "Private Equity Recruitment", description: "PE fund talent specialists." },
];

export default function EARecruitmentAgency() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: "Rainmakrr - EA Recruitment Agency",
    description: "Premier EA recruitment agency placing exceptional Executive Assistants with C-suite leaders.",
    url: "https://rainmakrr.com/ea-recruitment-agency",
    address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "UK" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rainmakrr.com" },
      { "@type": "ListItem", position: 2, name: "EA Recruitment Agency", item: "https://rainmakrr.com/ea-recruitment-agency" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-100/10 via-transparent to-slate-800/30" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-amber-200">EA Recruitment Agency</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-amber-200 to-slate-300 bg-clip-text text-transparent">
                  EA Recruitment Agency
                </span>{" "}
                | Executive Assistant Recruitment Specialists
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Rainmakrr is a specialist <strong>executive assistant recruitment agency</strong> placing
                EAs, PAs, and business support professionals into leadership teams across London and the UK.
                Whether you need a C-suite EA or a team assistant, our EA recruitment agency has the network to deliver.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-amber-200 to-slate-400 text-slate-900 font-semibold rounded-xl hover:opacity-90 transition-all">
                  Find an EA
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-amber-300 transition-all">
                  EA Job Opportunities
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-300 rounded-full" />
                  C-Suite & Board Level
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-300 rounded-full" />
                  Private & Family Office
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-300 rounded-full" />
                  London & UK-Wide
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* EA Roles */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Executive Assistant Recruitment Agency Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {eaRoles.map((role) => (
                <div key={role} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-amber-300/50 transition-all">
                  <h3 className="text-white font-medium">{role}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">EA Recruitment Agency Sectors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sectors.map((sector) => (
                <div key={sector.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-amber-300/50 transition-all text-center">
                  <div className="text-3xl mb-2">{sector.icon}</div>
                  <h3 className="text-white font-medium text-sm">{sector.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes a Great EA */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Why Choose Our EA Recruitment Agency</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qualities.map((item) => (
                <div key={item.trait} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold text-amber-200 mb-2">{item.trait}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Salary Benchmarks */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">EA Recruitment Agency London</h2>
            <h3 className="text-xl font-bold text-amber-200 mb-6">Executive Assistant Salary Benchmarks (London)</h3>
            <div className="max-w-2xl">
              {salaryData.map((row) => (
                <div key={row.role} className="flex justify-between items-center py-4 border-b border-slate-800">
                  <span className="text-white font-medium">{row.role}</span>
                  <span className="text-amber-300 font-bold">{row.salary}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ faqs={faqs} accentColor="gold" />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-amber-100/10 via-slate-900 to-slate-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Partner With a Specialist EA Recruitment Agency</h2>
            <p className="text-slate-300 mb-8">
              Whether you need a strategic partner for your CEO or a discreet PA for a private principal, we find the perfect fit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-amber-200 to-slate-400 text-slate-900 font-semibold rounded-xl hover:opacity-90 transition-all">
                Hire an EA
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-amber-300 transition-all">
                Find EA Roles
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
                <Link key={page.href} href={page.href} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-amber-300/50 transition-all">
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

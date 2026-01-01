import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Fintech Recruitment Agency UK | Fintech Jobs & Headhunters | Rainmakrr",
  description:
    "Specialist fintech recruitment agency placing tech and commercial talent into payments, neobanks, crypto, and wealthtech. UK & Europe's trusted fintech headhunters.",
  keywords:
    "fintech recruitment agency, fintech recruitment agency london, fintech jobs recruitment, payments recruitment, neobank recruitment",
  openGraph: {
    title: "Fintech Recruitment Agency UK | Fintech Jobs & Headhunters",
    description: "Specialist fintech recruitment agency placing tech and commercial talent into payments, neobanks, and wealthtech.",
    type: "website",
    url: "https://rainmakrr.com/fintech-recruitment-agency",
  },
  alternates: {
    canonical: "https://rainmakrr.com/fintech-recruitment-agency",
  },
};

const engineeringRoles = [
  "Backend Engineers",
  "Frontend Engineers",
  "DevOps / SRE",
  "Data Engineers",
  "ML Engineers",
  "Engineering Managers",
];

const productRoles = [
  "Product Managers",
  "UX/UI Designers",
  "Product Designers",
  "Technical PMs",
  "Design Leads",
  "Head of Product",
];

const commercialRoles = [
  "Sales Directors",
  "Account Executives",
  "Partnerships Leads",
  "Marketing Directors",
  "BDRs / SDRs",
  "CRO / CCO",
];

const operationsRoles = [
  "Compliance Officers",
  "Risk Analysts",
  "Operations Managers",
  "Customer Success",
  "Fraud Analysts",
  "Head of Compliance",
];

const sectors = [
  { name: "Payments & Infrastructure", examples: "Checkout.com, Stripe, Adyen" },
  { name: "Neobanks & Digital Banking", examples: "Monzo, Revolut, Starling" },
  { name: "Wealthtech & Investing", examples: "Freetrade, Nutmeg, Scalable" },
  { name: "Insurtech", examples: "Lemonade, Zego, Marshmallow" },
  { name: "Lending & Credit", examples: "Funding Circle, Iwoca, ClearScore" },
  { name: "Blockchain & Crypto", examples: "Coinbase, Kraken, Fireblocks" },
  { name: "Regtech & Compliance", examples: "ComplyAdvantage, Onfido, Alloy" },
  { name: "Embedded Finance", examples: "Swan, Unit, Bond" },
];

const faqs = [
  {
    question: "What makes a specialist fintech recruitment agency different?",
    answer:
      "Generalist recruiters don't understand equity structures, the difference between a neobank and a BaaS provider, or why your backend engineers need payments experience. We do — and our network reflects that.",
  },
  {
    question: "Do you recruit for both startups and scale-ups?",
    answer:
      "Yes. From pre-seed teams making their first hires to Series C+ companies building out leadership, we flex our approach to match your stage and urgency.",
  },
  {
    question: "What's the typical time to hire?",
    answer:
      "For most roles, we deliver a qualified shortlist within 5 business days. Average time-to-offer is 3-4 weeks for senior hires.",
  },
  {
    question: "Do you cover fintech roles outside the UK?",
    answer:
      "Yes. We place across Europe, with particular strength in London, Berlin, Amsterdam, and Paris.",
  },
];

const relatedPages = [
  { href: "/venture-capital-recruitment-agency", title: "Venture Capital Recruitment", description: "VC fund talent specialists." },
  { href: "/private-equity-recruitment-agency", title: "Private Equity Recruitment", description: "PE fund talent specialists." },
  { href: "/climate-tech-recruitment-agency", title: "Climate Tech Recruitment", description: "Net zero technology talent." },
  { href: "/chief-of-staff-recruitment-agency", title: "Chief of Staff Recruitment", description: "Strategic leadership roles." },
];

export default function FintechRecruitmentAgency() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: "Rainmakrr - Fintech Recruitment Agency",
    description: "Specialist fintech recruitment agency placing tech and commercial talent into payments, neobanks, crypto, and wealthtech companies.",
    url: "https://rainmakrr.com/fintech-recruitment-agency",
    areaServed: ["United Kingdom", "Europe"],
    address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "UK" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rainmakrr.com" },
      { "@type": "ListItem", position: 2, name: "Fintech Recruitment Agency", item: "https://rainmakrr.com/fintech-recruitment-agency" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-cyan-500/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-blue-400">Fintech Recruitment Agency</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Fintech Recruitment Agency
                </span>{" "}
                | Financial Technology Talent Specialists
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Rainmakrr is a <strong>fintech recruitment agency</strong> connecting high-growth
                financial technology companies with exceptional talent. From seed-stage neobanks
                to Series D payments giants, we place the engineers, product leaders, and commercial
                hires that scale fintech businesses.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all">
                  Hire Fintech Talent
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-blue-500 transition-all">
                  View Fintech Jobs
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  Payments & Banking
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  Tech & Commercial Roles
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  London & Europe
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose a Fintech Recruitment Agency</h2>
            <p className="text-slate-300 mb-8 max-w-3xl">
              The fintech sector moves fast. Hiring timelines that work for traditional banks don&apos;t
              cut it when you&apos;re racing to market. A dedicated <strong>fintech recruitment agency</strong> understands
              the urgency — and has the network to match.
            </p>
            <h3 className="text-2xl font-bold text-white mb-6">How Our Fintech Recruitment Agency Works</h3>
            <p className="text-slate-300 mb-6 max-w-3xl">
              Our fintech recruitment agency process starts with your roadmap. We map your hiring
              needs against growth milestones, then tap our network of fintech specialists who&apos;ve
              done it before — at Revolut, Monzo, Stripe, Checkout.com, and the next wave of challengers.
            </p>
            <div className="grid md:grid-cols-4 gap-4 mt-8">
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="text-white font-medium mb-1">48-Hour Shortlist</h4>
                <p className="text-slate-400 text-sm">Urgent roles fast-tracked</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="text-white font-medium mb-1">85% Passive</h4>
                <p className="text-slate-400 text-sm">Candidates not actively looking</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="text-2xl mb-2">🔧</div>
                <h4 className="text-white font-medium mb-1">Technical Screening</h4>
                <p className="text-slate-400 text-sm">For engineering hires</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="text-2xl mb-2">📊</div>
                <h4 className="text-white font-medium mb-1">Salary Benchmarking</h4>
                <p className="text-slate-400 text-sm">Real fintech market data</p>
              </div>
            </div>
          </div>
        </section>

        {/* Roles We Recruit */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Fintech Recruitment Agency Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">Engineering</h3>
                <ul className="space-y-2">
                  {engineeringRoles.map((role) => (
                    <li key={role} className="text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Product & Design</h3>
                <ul className="space-y-2">
                  {productRoles.map((role) => (
                    <li key={role} className="text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Commercial</h3>
                <ul className="space-y-2">
                  {commercialRoles.map((role) => (
                    <li key={role} className="text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-400 mb-4">Operations</h3>
                <ul className="space-y-2">
                  {operationsRoles.map((role) => (
                    <li key={role} className="text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Fintech Recruitment Agency Expertise by Sector</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {sectors.map((sector) => (
                <div key={sector.name} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 hover:border-blue-500/50 transition-all">
                  <h3 className="text-white font-bold mb-2">{sector.name}</h3>
                  <p className="text-slate-400 text-sm">{sector.examples}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* London Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">Fintech Recruitment Agency London</h2>
            <p className="text-slate-300 mb-8 max-w-3xl">
              As London&apos;s specialist <strong>fintech recruitment agency</strong>, we&apos;re embedded in the
              UK&apos;s fintech capital. From Shoreditch startups to Canary Wharf scale-ups, we recruit
              across the city&apos;s payments, banking, and wealthtech ecosystem.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h4 className="text-white font-medium mb-1">Shoreditch & Old Street</h4>
                <p className="text-slate-400 text-sm">Startup cluster</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h4 className="text-white font-medium mb-1">Canary Wharf</h4>
                <p className="text-slate-400 text-sm">Established fintech & banking</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h4 className="text-white font-medium mb-1">King&apos;s Cross & Farringdon</h4>
                <p className="text-slate-400 text-sm">Scale-up corridor</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h4 className="text-white font-medium mb-1">Bank & Moorgate</h4>
                <p className="text-slate-400 text-sm">Infrastructure & payments</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ faqs={faqs} accentColor="blue" />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 via-slate-900 to-cyan-500/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Partner With a Specialist Fintech Recruitment Agency</h2>
            <p className="text-slate-300 mb-8">
              Ready to scale your fintech team? As a specialist fintech recruitment agency, we&apos;ve
              placed over 300 professionals into payments, banking, and wealthtech roles across Europe.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all">
                Hire Fintech Talent
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-blue-500 transition-all">
                View Fintech Jobs
              </Link>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Explore Related Services</h2>
            <div className="grid md:grid-cols-4 gap-6">
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

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const greenCluster = [
    { href: "/green-recruitment-agency", label: "Green Recruitment" },
    { href: "/renewable-energy-recruitment-agency", label: "Renewable Energy" },
    { href: "/sustainability-recruitment-agency", label: "Sustainability" },
    { href: "/ev-recruitment-agency", label: "EV Recruitment" },
    { href: "/cleantech-recruitment-agency", label: "Cleantech" },
    { href: "/climate-tech-recruitment-agency", label: "Climate Tech" },
  ];

  const financeCluster = [
    { href: "/", label: "Venture Capital Recruitment Agency" },
    { href: "/private-equity-recruitment-agency", label: "Private Equity" },
    { href: "/fintech-recruitment-agency", label: "Fintech" },
    { href: "/ea-recruitment-agency", label: "Executive Assistant" },
  ];

  const otherServices = [
    { href: "/space-recruitment-agency", label: "Space & Aerospace" },
    { href: "/insights", label: "Insights & Guides" },
  ];

  const partnerSites = [
    { href: "https://esportsjobs.quest", label: "Esports Recruiters" },
    { href: "https://esportsjobs.quest", label: "Esports Recruitment" },
    { href: "https://esportsjobs.quest", label: "Recruitment Agencies" },
    { href: "https://esportsjobs.quest", label: "Esports Recruitment Agency" },
    { href: "https://fractional.quest/fractional-jobs-london", label: "Fractional Jobs" },
    { href: "https://fractional.quest/fractional-jobs-london", label: "Fractional Jobs London" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Rainmakrr
            </Link>
            <p className="mt-4 text-slate-400 text-sm">
              <strong className="text-slate-300">Venture capital recruitment agency</strong> placing exceptional VC talent at top funds across London and the UK.
            </p>
          </div>

          {/* Green & Energy */}
          <div>
            <h3 className="text-white font-semibold mb-4">Green & Energy</h3>
            <ul className="space-y-2">
              {greenCluster.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Finance & Executive */}
          <div>
            <h3 className="text-white font-semibold mb-4">Finance & Executive</h3>
            <ul className="space-y-2">
              {financeCluster.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Other Services</h3>
            <ul className="space-y-2">
              {otherServices.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block px-6 py-2 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Partner Sites */}
          <div>
            <h3 className="text-white font-semibold mb-4">Recruitment Agencies</h3>
            <ul className="space-y-2">
              {partnerSites.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors" target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Rainmakrr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

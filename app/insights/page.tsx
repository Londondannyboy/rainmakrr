import type { Metadata } from "next";
import Link from "next/link";
import { getAllPublishedArticles } from "@/lib/db";

export const metadata: Metadata = {
  title: "Insights & Guides | Rainmakrr",
  description:
    "Expert insights on private equity, venture capital, recruitment, and emerging sectors. Guides, rankings, and industry analysis from Rainmakrr.",
  openGraph: {
    title: "Insights & Guides | Rainmakrr",
    description: "Expert insights on private equity, venture capital, and recruitment.",
    type: "website",
    url: "https://rainmakrr.com/insights",
  },
  alternates: {
    canonical: "https://rainmakrr.com/insights",
  },
};

// Group articles by category
function groupByCategory(articles: Awaited<ReturnType<typeof getAllPublishedArticles>>) {
  const groups: Record<string, typeof articles> = {};

  for (const article of articles) {
    const category = article.category || "General";
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(article);
  }

  return groups;
}

export default async function InsightsPage() {
  const articles = await getAllPublishedArticles("rainmakrr");
  const grouped = groupByCategory(articles);
  const categories = Object.keys(grouped).sort();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-violet-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-violet-400">Insights</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Insights & Guides
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Expert analysis, rankings, and guides on private equity, venture capital,
                placement agents, and emerging sectors.
              </p>
              <p className="text-slate-400">
                {articles.length} articles available
              </p>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Guides</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.slice(0, 6).map((article) => (
                <Link
                  key={article.id}
                  href={`/${article.slug}`}
                  className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-violet-500/50 transition-all"
                >
                  {article.featured_asset_url && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={article.featured_asset_url}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {article.category && (
                      <span className="text-xs text-violet-400 uppercase tracking-wide">
                        {article.category}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-white mt-2 mb-3 group-hover:text-violet-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    {article.excerpt && (
                      <p className="text-slate-400 text-sm line-clamp-2">
                        {article.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Articles by Category */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">All Articles</h2>

            {categories.map((category) => (
              <div key={category} className="mb-12">
                <h3 className="text-xl font-semibold text-violet-400 mb-6 flex items-center gap-3">
                  {category}
                  <span className="text-sm text-slate-500 font-normal">
                    ({grouped[category].length} articles)
                  </span>
                </h3>
                <div className="grid gap-4">
                  {grouped[category].map((article) => (
                    <Link
                      key={article.id}
                      href={`/${article.slug}`}
                      className="group flex items-start gap-4 p-4 bg-slate-800/30 rounded-lg border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 transition-all"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-medium group-hover:text-violet-400 transition-colors truncate">
                          {article.title}
                        </h4>
                        {article.meta_description && (
                          <p className="text-slate-500 text-sm mt-1 truncate">
                            {article.meta_description}
                          </p>
                        )}
                      </div>
                      <span className="text-slate-600 text-sm whitespace-nowrap">
                        {article.published_at
                          ? new Date(article.published_at).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "short",
                              year: "numeric"
                            })
                          : ""}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-slate-900/80 via-slate-900 to-violet-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need Expert Recruitment Support?</h2>
            <p className="text-slate-300 mb-8">
              Our specialist consultants can help you find the right talent or opportunity.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

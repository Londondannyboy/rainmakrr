import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug, getArticleSlugs } from "@/lib/db";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = await getArticleSlugs();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | Rainmakrr",
    };
  }

  return {
    title: `${article.title} | Rainmakrr`,
    description: article.meta_description || article.excerpt || undefined,
    openGraph: {
      title: article.title,
      description: article.meta_description || article.excerpt || undefined,
      type: "article",
      url: `https://rainmakrr.com/${article.slug}`,
      images: article.hero_asset_url ? [{ url: article.hero_asset_url }] : undefined,
    },
    alternates: {
      canonical: `https://rainmakrr.com/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.meta_description || article.excerpt,
    url: `https://rainmakrr.com/${article.slug}`,
    image: article.hero_asset_url,
    datePublished: article.published_at,
    dateModified: article.updated_at,
    publisher: {
      "@type": "Organization",
      name: "Rainmakrr",
      url: "https://rainmakrr.com",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rainmakrr.com" },
      { "@type": "ListItem", position: 2, name: article.title, item: `https://rainmakrr.com/${article.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-emerald-600/20" />
          {article.hero_asset_url && (
            <div className="absolute inset-0 opacity-20">
              <img
                src={article.hero_asset_url}
                alt={article.hero_asset_alt || article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              {article.category && (
                <>
                  <span className="text-slate-400">{article.category}</span>
                  <span className="mx-2">/</span>
                </>
              )}
              <span className="text-emerald-400">{article.title}</span>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {article.excerpt}
              </p>
            )}

            {article.published_at && (
              <div className="text-sm text-slate-400">
                Published: {new Date(article.published_at).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
            )}
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-white prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3
                prose-p:text-slate-300 prose-p:leading-relaxed
                prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white
                prose-ul:text-slate-300 prose-ol:text-slate-300
                prose-li:marker:text-emerald-400
                prose-blockquote:border-emerald-500 prose-blockquote:text-slate-400
                prose-code:text-emerald-400 prose-code:bg-slate-800 prose-code:px-1 prose-code:rounded
                prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-700
                prose-table:text-slate-300
                prose-th:text-white prose-th:border-slate-700
                prose-td:border-slate-700
                prose-hr:border-slate-700"
              dangerouslySetInnerHTML={{ __html: article.content_html || article.content }}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900/80 via-slate-900 to-emerald-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need Help With Your Search?</h2>
            <p className="text-slate-300 mb-8">
              Get in touch with our specialist recruitment team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-slate-700 to-emerald-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all">
                Contact Us
              </Link>
              <Link href="/" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-emerald-500 transition-all">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

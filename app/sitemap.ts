import { MetadataRoute } from "next";
import { getArticleSlugs } from "@/lib/db";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://rainmakrr.com";

  // Core pages we want to rank
  const staticPages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    // Green & Energy cluster
    { url: "/green-recruitment-agency", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/renewable-energy-recruitment-agency", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/sustainability-recruitment-agency", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/ev-recruitment-agency", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/cleantech-recruitment-agency", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/climate-tech-recruitment-agency", priority: 0.9, changeFrequency: "weekly" as const },
    // Finance & Executive cluster
    { url: "/private-equity-recruitment-agency", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/venture-capital-recruitment-agency", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/fintech-recruitment-agency", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/chief-of-staff-recruitment-agency", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/ea-recruitment-agency", priority: 0.9, changeFrequency: "weekly" as const },
    // Emerging sectors
    { url: "/space-recruitment-agency", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/digital-marketing-recruitment-agency", priority: 0.9, changeFrequency: "weekly" as const },
  ];

  // Fetch article slugs from database
  let articlePages: MetadataRoute.Sitemap = [];
  try {
    const articles = await getArticleSlugs();
    articlePages = articles.map((article) => ({
      url: `${baseUrl}/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  } catch {
    // If DB fails, just return static pages
  }

  const staticSitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  return [...staticSitemap, ...articlePages];
}

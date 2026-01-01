import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/handler/", "/dashboard", "/voice", "/api/"],
    },
    sitemap: "https://rainmakrr.com/sitemap.xml",
  };
}

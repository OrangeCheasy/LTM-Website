import type { MetadataRoute } from "next";

/*
  Public pages are crawlable and route-level metadata controls indexing.
  Dynamic API endpoints remain excluded from crawling.
*/
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://liamthemo.com/sitemap.xml",
  };
}

import type { MetadataRoute } from "next";

/*
  Crawlers may fetch public pages so route-level robots metadata can be
  respected. Dynamic API endpoints remain excluded from crawling. The
  homepage itself stays noindex until the remaining manual launch inputs are
  complete, rather than being blocked here where crawlers could not see that
  directive.
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

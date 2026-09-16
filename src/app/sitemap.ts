import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { serviceSlugs } from "@/data/services";

const BASE_URL = "https://liamthemo.com";

/*
  Static sitemap — every route here is prerendered, so generating this at
  build time costs nothing extra.

  `/` is deliberately left out while the homepage remains noindex during the
  staged revamp. Phase 9 will reconcile indexing across the whole site.
*/
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/projects", "/experience", "/about", "/contact"];
  const serviceRoutes = serviceSlugs.map((slug) => `/services/${slug}`);
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));
}

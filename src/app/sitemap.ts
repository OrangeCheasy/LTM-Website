import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const BASE_URL = "https://liamthemo.com";

/*
  Keep the sitemap focused on the portfolio routes defined by the redesign.
  The homepage is intentionally omitted while it remains noindex pending the
  final resume, LinkedIn URL, and approved experience/education content. The
  placeholder resume route is omitted for the same reason.
*/
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/projects", "/experience", "/about", "/contact"];
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);

  return [...staticRoutes, ...projectRoutes].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));
}

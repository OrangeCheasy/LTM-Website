import type { MetadataRoute } from "next";
import { orderedExperience } from "@/data/experience";
import { projects } from "@/data/projects";

const BASE_URL = "https://liamthemo.com";

/*
  Keep the sitemap focused on routes that are intentionally indexable. The
  homepage and resume remain omitted while their final launch inputs are
  pending, and Experience is included only after real public entries exist.
*/
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/projects",
    "/about",
    "/contact",
    ...(orderedExperience.length > 0 ? ["/experience"] : []),
  ];
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);

  return [...staticRoutes, ...projectRoutes].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));
}

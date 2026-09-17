import { SERVICE_META, type Project } from "@/lib/types";

const PROJECT_TAG_ALIASES: Readonly<Record<string, string>> = {
  "PC hardware": "PC Hardware",
  "BIOS configuration": "BIOS Configuration",
  Software: "Software Troubleshooting",
  "Windows troubleshooting": "Windows Troubleshooting",
};

/**
 * One canonical category label for every project surface.
 * Service-backed projects use the service identity; portfolio-only work uses
 * its confirmed skills. Keeping this here prevents cards, indexes, and case
 * studies from formatting the same project differently.
 */
export function projectCategoryLabel(project: Project): string {
  return project.services.length > 0
    ? project.services.map((slug) => SERVICE_META[slug].title).join(" · ")
    : (project.skills ?? []).join(" · ");
}

/**
 * Canonical display tags for project cards and case studies.
 *
 * `Project.stack` remains the factual source data. This layer only normalizes
 * confirmed tag wording and casing, so presentation stays consistent without
 * inferring technologies that have not been documented for a project. Order
 * stays intentional and duplicates are removed.
 */
export function projectTags(project: Project): string[] {
  const normalized = project.stack
    .map((tag) => PROJECT_TAG_ALIASES[tag] ?? tag.trim())
    .filter(Boolean);

  return Array.from(new Set(normalized));
}

export function countProjectTags(items: readonly Project[]): number {
  return new Set(items.flatMap(projectTags)).size;
}

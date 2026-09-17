import { SERVICE_META, type Project } from "@/lib/types";

const PROJECT_TAG_ALIASES: Readonly<Record<string, string>> = {
  "PC hardware": "PC Hardware",
  "BIOS configuration": "BIOS / UEFI",
  Software: "Software Troubleshooting",
  "Windows troubleshooting": "Windows",
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
 * `Project.stack` remains the factual source data. This layer normalizes old
 * naming differences and adds the common Roblox Studio tool to Roblox project
 * displays so two projects using the same platform do not present unrelated
 * tag vocabularies. Order stays intentional and duplicates are removed.
 */
export function projectTags(project: Project): string[] {
  const normalized = project.stack
    .map((tag) => PROJECT_TAG_ALIASES[tag] ?? tag.trim())
    .filter(Boolean);

  if (project.services.includes("roblox") && !normalized.includes("Roblox Studio")) {
    normalized.unshift("Roblox Studio");
  }

  return Array.from(new Set(normalized));
}

export function countProjectTags(items: readonly Project[]): number {
  return new Set(items.flatMap(projectTags)).size;
}

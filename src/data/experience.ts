export interface ExperienceEntry {
  id: string;
  organization: string;
  role: string;
  startDate: string;
  endDate?: string;
  location: string;
  summary: string;
  details?: readonly string[];
  skills?: readonly string[];
  featured?: boolean;
  sortOrder?: number;
}

/*
  Public work-history copy is intentionally data-only. Phase 4 provides the
  shared rendering system first; entries should be added here only after the
  exact role wording, dates, locations, and any measurable outcomes are
  confirmed. This prevents the portfolio UI from becoming the source of
  invented resume facts.
*/
export const experience: readonly ExperienceEntry[] = [];

function bySortOrder(a: ExperienceEntry, b: ExperienceEntry) {
  return (a.sortOrder ?? Number.MAX_SAFE_INTEGER) -
    (b.sortOrder ?? Number.MAX_SAFE_INTEGER);
}

export const orderedExperience = [...experience].sort(bySortOrder);

export const featuredExperience = orderedExperience.filter(
  (entry) => entry.featured,
);

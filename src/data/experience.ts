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

/* Final entries are intentionally deferred until Phase 4 owner copy is approved. */
export const experience: readonly ExperienceEntry[] = [];

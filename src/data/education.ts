export interface EducationEntry {
  id: string;
  institution: string;
  program: string;
  startDate?: string;
  endDate?: string;
  location: string;
  note?: string;
  sortOrder?: number;
}

/* Final entries are intentionally deferred until Phase 6 owner copy is approved. */
export const education: readonly EducationEntry[] = [];

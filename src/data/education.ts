export interface EducationEntry {
  id: string;
  institution: string;
  program: string;
  startDate?: string;
  endDate?: string;
  location: string;
  details?: readonly string[];
  sortOrder?: number;
}

/*
  Keep exact institution, dates, and coursework out of the public site until
  the owner has explicitly approved that wording. The Phase 6 UI handles this
  empty state without inventing education facts, and adding a confirmed entry
  later is a data-only change.
*/
export const education: readonly EducationEntry[] = [];

export const sortedEducation = [...education].sort(
  (a, b) => (a.sortOrder ?? Number.MAX_SAFE_INTEGER) - (b.sortOrder ?? Number.MAX_SAFE_INTEGER),
);

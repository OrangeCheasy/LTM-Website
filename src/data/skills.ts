export type SkillCategory =
  | "language"
  | "framework"
  | "styling"
  | "platform"
  | "tool";

export interface Skill {
  name: string;
  category: SkillCategory;
  icon?: string;
}

/*
  Seeded only with technologies directly demonstrated by this repository.
  Phase 5 can extend the list with the owner's broader toolset.
*/
export const skills: readonly Skill[] = [
  { name: "TypeScript", category: "language" },
  { name: "React", category: "framework" },
  { name: "Next.js", category: "framework" },
  { name: "Tailwind CSS", category: "styling" },
  { name: "Cloudflare Workers", category: "platform" },
  { name: "GitHub", category: "tool" },
];

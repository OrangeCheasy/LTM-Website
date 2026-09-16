export type SkillCategory =
  | "language"
  | "framework"
  | "styling"
  | "cloud"
  | "game-development"
  | "data"
  | "tool";

export type SkillIconKey =
  | "typescript"
  | "react"
  | "nextjs"
  | "tailwind"
  | "cloudflare"
  | "github"
  | "python"
  | "luau"
  | "excel"
  | "roblox"
  | "rojo";

export interface Skill {
  name: string;
  category: SkillCategory;
  icon: SkillIconKey;
  url?: string;
  featured?: boolean;
}

/*
  Keep this list limited to technologies and tools that are supported by
  public project or service evidence elsewhere in the repository. Phase 5
  uses the same typed source for the homepage marquee and leaves room for
  future filtered skills views without duplicating content.
*/
export const skills: readonly Skill[] = [
  { name: "TypeScript", category: "language", icon: "typescript", featured: true },
  { name: "React", category: "framework", icon: "react", featured: true },
  { name: "Next.js", category: "framework", icon: "nextjs", featured: true },
  { name: "Tailwind CSS", category: "styling", icon: "tailwind", featured: true },
  { name: "Python", category: "language", icon: "python", featured: true },
  { name: "Luau", category: "language", icon: "luau", featured: true },
  { name: "Roblox Studio", category: "game-development", icon: "roblox", featured: true },
  { name: "Rojo", category: "game-development", icon: "rojo", featured: true },
  { name: "Cloudflare Workers", category: "cloud", icon: "cloudflare", featured: true },
  { name: "GitHub", category: "tool", icon: "github", featured: true },
  { name: "Microsoft Excel", category: "data", icon: "excel", featured: true },
];

export const featuredSkills = skills.filter((skill) => skill.featured);

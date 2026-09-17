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
  | "javascript"
  | "cplusplus"
  | "react"
  | "nextjs"
  | "tailwind"
  | "cloudflare"
  | "github"
  | "python"
  | "assembly68k"
  | "luau"
  | "mysql"
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
  public project, education, or service evidence elsewhere in the repository.
  The homepage marquee and future filtered skills views share this typed source
  so technology content stays centralized.
*/
export const skills: readonly Skill[] = [
  { name: "TypeScript", category: "language", icon: "typescript", featured: true },
  { name: "JavaScript", category: "language", icon: "javascript", featured: true },
  { name: "C++", category: "language", icon: "cplusplus", featured: true },
  { name: "Python", category: "language", icon: "python", featured: true },
  { name: "68K Assembly", category: "language", icon: "assembly68k", featured: true },
  { name: "Luau", category: "language", icon: "luau", featured: true },
  { name: "React", category: "framework", icon: "react", featured: true },
  { name: "Next.js", category: "framework", icon: "nextjs", featured: true },
  { name: "Tailwind CSS", category: "styling", icon: "tailwind", featured: true },
  { name: "MySQL", category: "data", icon: "mysql", featured: true },
  { name: "Microsoft Excel", category: "data", icon: "excel", featured: true },
  { name: "Roblox Studio", category: "game-development", icon: "roblox", featured: true },
  { name: "Rojo", category: "game-development", icon: "rojo", featured: true },
  { name: "Cloudflare Workers", category: "cloud", icon: "cloudflare", featured: true },
  { name: "GitHub", category: "tool", icon: "github", featured: true },
];

export const featuredSkills = skills.filter((skill) => skill.featured);

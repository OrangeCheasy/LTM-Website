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

export const experience: readonly ExperienceEntry[] = [
  {
    id: "austudio-game-developer",
    organization: "AuStudio (Roblox)",
    role: "Game Developer",
    startDate: "December 2025",
    location: "Remote",
    summary:
      "Developing modular Roblox gameplay, interface, animation, and backend systems with an emphasis on maintainable architecture and secure game integrity.",
    details: [
      "Develop modular, scalable Lua systems for gameplay, UI, and backend services.",
      "Create and implement secure anti-cheat and integrity systems.",
      "Build reusable libraries and clean architecture to improve team workflow and maintainability.",
      "Design and implement game UI using Roblox Studio and Lua.",
      "Optimize asset usage to reduce UI draw calls and memory cost.",
      "Build dynamic interfaces including XP bars, currency displays, and animated HUD elements.",
      "Create custom character animations, movement sequences, and ability animations.",
      "Integrate animation logic with SFX, VFX, timeline systems, and gameplay state machines.",
      "Develop cutscenes and animation-driven events to enhance gameplay.",
    ],
    skills: [
      "Lua",
      "Roblox Studio",
      "Systems Architecture",
      "UI Development",
      "Anti-Cheat",
      "Animation",
      "SFX / VFX",
    ],
    featured: true,
    sortOrder: 1,
  },
  {
    id: "hello-nori-supervisor",
    organization: "Hello Nori",
    role: "Supervisor",
    startDate: "April 2026",
    location: "Calgary, AB",
    summary:
      "Promoted from Server to Supervisor within the first month, taking on restaurant operations, team leadership, reporting, labour control, and performance management responsibilities.",
    details: [
      "Manage nightly logs, cash-outs, and day-to-day restaurant operations.",
      "Track server sales and performance and provide pre-shift and post-shift feedback.",
      "Create and maintain corporate-level Excel systems for operations, performance tracking, and analysis.",
      "Manage FOH and BOH labour control and support scheduling decisions.",
      "Support interviewing, hiring, onboarding, and staff training.",
      "Participate in weekly L10 meetings and scorecard reviews.",
      "Support monthly inventory and COGS analysis.",
      "Lead sales, upselling, service standards, hospitality, and guest connection.",
    ],
    skills: [
      "Operations",
      "Leadership",
      "Microsoft Excel",
      "Staff Training",
      "Inventory & COGS",
      "Scheduling",
      "Sales",
    ],
    featured: true,
    sortOrder: 2,
  },
  {
    id: "hello-nori-server",
    organization: "Hello Nori",
    role: "Server",
    startDate: "April 2026",
    endDate: "April 2026",
    location: "Calgary, AB",
    summary:
      "Delivered high-touch hospitality and sales-focused service before being promoted to Supervisor within the first month.",
    details: [
      "Delivered guest-focused table service in a fast-paced restaurant environment.",
      "Focused on sales, upselling, service quality, and personal connection with guests.",
    ],
    skills: ["Hospitality", "Sales", "Guest Experience"],
    featured: true,
    sortOrder: 3,
  },
  {
    id: "freelance-computer-tech",
    organization: "Freelance",
    role: "Computer Tech",
    startDate: "June 2018",
    location: "Calgary, AB",
    summary:
      "Provide hands-on computer hardware, software, and networking support for personal and small-business clients.",
    details: [
      "Diagnose and resolve hardware and software issues for personal and small-business clients.",
      "Build, repair, upgrade, and troubleshoot custom PCs.",
      "Configure and troubleshoot network and DNS settings.",
    ],
    skills: ["PC Hardware", "Troubleshooting", "Networking", "DNS", "Custom PC Builds"],
    featured: true,
    sortOrder: 4,
  },
];

function bySortOrder(a: ExperienceEntry, b: ExperienceEntry) {
  return (a.sortOrder ?? Number.MAX_SAFE_INTEGER) -
    (b.sortOrder ?? Number.MAX_SAFE_INTEGER);
}

export const orderedExperience = [...experience].sort(bySortOrder);

export const featuredExperience = orderedExperience.filter(
  (entry) => entry.featured,
);

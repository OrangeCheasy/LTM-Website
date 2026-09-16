import type { ReactNode } from "react";
import type { SkillIconKey } from "@/data/skills";

interface SkillGlyphProps {
  icon: SkillIconKey;
  className?: string;
}

const glyphs: Record<SkillIconKey, ReactNode> = {
  typescript: (
    <>
      <path d="M4 5h16v14H4z" />
      <path d="M7 9h6M10 9v6" />
      <path d="M15 11.2c.5-.8 2.8-.8 3.2.1.5 1.1-1.1 1.4-1.8 1.7-.9.3-1.8.8-1.5 1.7.3.9 2.8 1 3.5 0" />
    </>
  ),
  react: (
    <>
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  nextjs: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 16V8l8 8V8" />
    </>
  ),
  tailwind: (
    <>
      <path d="M4 9c2.2-2.7 4.4-2.7 6.6 0s4.4 2.7 6.6 0 4.4-2.7 6.6 0" />
      <path d="M1 15c2.2-2.7 4.4-2.7 6.6 0s4.4 2.7 6.6 0 4.4-2.7 6.6 0" />
    </>
  ),
  cloudflare: (
    <>
      <path d="M5 17.5h13.8a3.2 3.2 0 0 0 .2-6.4 5.8 5.8 0 0 0-10.8-1.8A4.3 4.3 0 0 0 5 17.5Z" />
      <path d="M3.2 14.8H8" />
    </>
  ),
  github: (
    <>
      <circle cx="7" cy="6.5" r="2" />
      <circle cx="17" cy="17.5" r="2" />
      <circle cx="7" cy="17.5" r="2" />
      <path d="M7 8.5v7M9 6.5h3a5 5 0 0 1 5 5v4" />
    </>
  ),
  python: (
    <>
      <path d="M8 4.5h5.5A2.5 2.5 0 0 1 16 7v4H9a3 3 0 0 0-3 3v2" />
      <path d="M16 19.5h-5.5A2.5 2.5 0 0 1 8 17v-4h7a3 3 0 0 0 3-3V8" />
      <circle cx="11" cy="7.5" r=".7" fill="currentColor" stroke="none" />
      <circle cx="13" cy="16.5" r=".7" fill="currentColor" stroke="none" />
    </>
  ),
  luau: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <path d="M5 15c2.4 2.4 5.8 3.2 9 2.1 2.2-.8 4-2.4 5-4.4" />
      <circle cx="16.2" cy="8.4" r="1.2" />
    </>
  ),
  excel: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
      <path d="M9 4v16M9 9h11M9 14h11M14 9v11" />
      <path d="m5.5 8 2 3-2 3M7.5 8l-2 3 2 3" />
    </>
  ),
  roblox: (
    <>
      <rect x="6" y="6" width="12" height="12" transform="rotate(18 12 12)" />
      <rect x="10" y="10" width="4" height="4" transform="rotate(18 12 12)" />
    </>
  ),
  rojo: (
    <>
      <path d="M5 8h9l-2.5-2.5M14 8l-2.5 2.5" />
      <path d="M19 16h-9l2.5-2.5M10 16l2.5 2.5" />
      <circle cx="5" cy="8" r="1.5" />
      <circle cx="19" cy="16" r="1.5" />
    </>
  ),
};

export default function SkillGlyph({ icon, className = "" }: SkillGlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-5 w-5 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {glyphs[icon]}
    </svg>
  );
}

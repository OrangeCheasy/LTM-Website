import SkillGlyph from "@/components/SkillGlyph";
import type { Skill, SkillIconKey } from "@/data/skills";

interface SkillsMarqueeProps {
  skills: readonly Skill[];
}

interface SkillsTrackProps {
  skills: readonly Skill[];
  hidden?: boolean;
}

const brandIconColors: Record<SkillIconKey, string> = {
  typescript: "#3178C6",
  react: "#61DAFB",
  nextjs: "#FFFFFF",
  tailwind: "#06B6D4",
  cloudflare: "#F38020",
  github: "#FFFFFF",
  python: "#3776AB",
  luau: "#00A2FF",
  excel: "#217346",
  roblox: "#FFFFFF",
  rojo: "#E2231A",
};

function SkillsTrack({ skills, hidden = false }: SkillsTrackProps) {
  return (
    <ul className="skills-marquee-track" aria-hidden={hidden || undefined}>
      {skills.map((skill) => (
        <li key={skill.name} className="skills-marquee-item">
          <span
            className="skills-marquee-icon"
            aria-hidden="true"
            style={{ color: brandIconColors[skill.icon] }}
          >
            <SkillGlyph icon={skill.icon} />
          </span>
          <span>{skill.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SkillsMarquee({ skills }: SkillsMarqueeProps) {
  if (skills.length === 0) {
    return null;
  }

  return (
    <div
      className="skills-marquee no-scrollbar"
      role="region"
      aria-label="Technologies and tools"
      tabIndex={0}
    >
      <div className="skills-marquee-strip">
        <SkillsTrack skills={skills} />
        <SkillsTrack skills={skills} hidden />
      </div>
    </div>
  );
}

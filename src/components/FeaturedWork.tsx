import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/lib/types";

export default function FeaturedWork({ projects }: { projects: Project[] }) {
  const featured = projects.filter((project) => project.featured);

  if (featured.length !== 3) {
    throw new Error(
      `Homepage requires exactly 3 featured projects; found ${featured.length}.`,
    );
  }

  return (
    <ul className="grid gap-[var(--space-grid)] md:grid-cols-3">
      {featured.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </ul>
  );
}

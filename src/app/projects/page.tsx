import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import ProjectCard from "@/components/ProjectCard";
import { Section, SectionHeader } from "@/components/ui";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected software, game development, automation, and technical projects by Liam Mo.",
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    title: "Projects — Liam Mo",
    description:
      "Selected software, game development, automation, and technical projects by Liam Mo.",
  },
};

export default function ProjectsPage() {
  const eagerIndex = projects.findIndex(
    (project) => project.cover.kind === "image",
  );

  return (
    <>
      <Section spacing="compact" aria-labelledby="projects-heading">
        <SectionHeader
          id="projects-heading"
          eyebrow="Selected work"
          title="Projects"
          description="A larger look at the software, games, automation, and technical work I’ve built or contributed to."
        />

        <ul className="mt-10 grid gap-[var(--space-grid)] sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={index === eagerIndex}
            />
          ))}
        </ul>
      </Section>

      <CTASection
        title="Want to build something useful?"
        description="If you have a project, software idea, or technical problem you want to discuss, send me the details and I’ll get back to you."
        ctaLabel="Contact Me"
      />
    </>
  );
}

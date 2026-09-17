import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import CoverArt from "@/components/CoverArt";
import ProjectCard from "@/components/ProjectCard";
import { LinkButton, Section, SectionHeader, Tag } from "@/components/ui";
import { projects } from "@/data/projects";
import { SERVICE_META, type Project } from "@/lib/types";

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

function projectCategory(project: Project) {
  return project.services.length > 0
    ? project.services.map((slug) => SERVICE_META[slug].title).join(" · ")
    : (project.skills ?? []).join(" · ");
}

export default function ProjectsPage() {
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const remainingProjects = featuredProject
    ? projects.filter((project) => project.slug !== featuredProject.slug)
    : projects;
  const technologyCount = new Set(projects.flatMap((project) => project.stack)).size;
  const featuredCount = projects.filter((project) => project.featured).length;
  const eagerIndex = remainingProjects.findIndex(
    (project) => project.cover.kind === "image",
  );

  return (
    <>
      <Section
        spacing="compact"
        aria-labelledby="projects-heading"
        className="border-b border-border/70"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.72fr)] lg:items-end lg:gap-12">
          <SectionHeader
            id="projects-heading"
            eyebrow="Portfolio"
            headingLevel="h1"
            title="Projects built from idea to working system"
            description="A closer look at the software, games, automation, and technical work I’ve designed, built, deployed, or helped grow."
          />

          <dl className="grid grid-cols-3 overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface">
            <div className="p-4 sm:p-5">
              <dt className="text-caption uppercase tracking-[0.12em] text-text-muted">Projects</dt>
              <dd className="mt-2 text-card text-text">{projects.length}</dd>
            </div>
            <div className="border-l border-border p-4 sm:p-5">
              <dt className="text-caption uppercase tracking-[0.12em] text-text-muted">Featured</dt>
              <dd className="mt-2 text-card text-text">{featuredCount}</dd>
            </div>
            <div className="border-l border-border p-4 sm:p-5">
              <dt className="text-caption uppercase tracking-[0.12em] text-text-muted">Tools</dt>
              <dd className="mt-2 text-card text-text">{technologyCount}</dd>
            </div>
          </dl>
        </div>
      </Section>

      {featuredProject ? (
        <Section spacing="compact" aria-labelledby="featured-project-heading">
          <div className="flex items-end justify-between gap-4">
            <SectionHeader
              id="featured-project-heading"
              eyebrow="Featured case study"
              title={featuredProject.title}
              description="Start here for a detailed look at the problem, build decisions, implementation, and available results."
            />
            <LinkButton href={`/projects/${featuredProject.slug}`} variant="ghost" size="sm" className="hidden sm:inline-flex">
              Open case study
            </LinkButton>
          </div>

          <article className="mt-8 overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface">
            <div className="grid lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]">
              <Link
                href={`/projects/${featuredProject.slug}`}
                aria-label={`View ${featuredProject.title} case study`}
                className="group relative min-h-64 overflow-hidden border-b border-border bg-surface-2 lg:min-h-96 lg:border-r lg:border-b-0"
              >
                <CoverArt
                  project={featuredProject}
                  priority={featuredProject.cover.kind === "image"}
                  decorative
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  imageClassName="transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </Link>

              <div className="flex flex-col justify-between p-[var(--space-card)] sm:p-8">
                <div>
                  {projectCategory(featuredProject) ? (
                    <p className="text-metadata font-semibold text-accent">
                      {projectCategory(featuredProject)}
                    </p>
                  ) : null}
                  <h2 className="mt-3 text-section text-text">{featuredProject.title}</h2>
                  <p className="mt-4 text-body-secondary text-text-muted">
                    {featuredProject.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                    {featuredProject.stack.map((technology) => (
                      <Tag key={technology}>{technology}</Tag>
                    ))}
                  </div>
                </div>

                <LinkButton
                  href={`/projects/${featuredProject.slug}`}
                  variant="primary"
                  size="md"
                  className="mt-8 w-full sm:w-fit"
                >
                  Explore the case study
                  <span aria-hidden="true">→</span>
                </LinkButton>
              </div>
            </div>
          </article>
        </Section>
      ) : null}

      {remainingProjects.length > 0 ? (
        <Section spacing="compact" aria-labelledby="all-projects-heading" className="border-t border-border/70">
          <SectionHeader
            id="all-projects-heading"
            eyebrow="More work"
            title="All projects"
            description="Each project page focuses on what was actually built, the tools involved, and the evidence available for the work."
          />

          <ul className="mt-8 grid gap-[var(--space-grid)] sm:grid-cols-2 lg:grid-cols-3">
            {remainingProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                priority={index === eagerIndex}
              />
            ))}
          </ul>
        </Section>
      ) : null}

      <CTASection
        title="Have a project or problem worth solving?"
        description="Send me the context, what you’re trying to achieve, and whatever constraints you already know."
        ctaLabel="Start a conversation"
        secondary={{ href: "/about", label: "About me" }}
      />
    </>
  );
}

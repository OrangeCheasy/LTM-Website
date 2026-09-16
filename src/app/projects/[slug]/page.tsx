import type { Metadata } from "next";
import ProjectPage, {
  generateStaticParams,
} from "../../portfolio/[slug]/page";
import { projects } from "@/data/projects";

export { generateStaticParams };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.title} — Liam Mo`,
      description: project.summary,
    },
  };
}

export default ProjectPage;

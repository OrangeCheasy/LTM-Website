import { LinkButton, Section, SectionHeader } from "@/components/ui";

export default function NotFound() {
  return (
    <Section>
      <SectionHeader
        headingLevel="h1"
        eyebrow="404"
        title="That page isn’t here"
        description="The link may be outdated, or the page may have moved during the portfolio rebuild."
      />

      <div className="mt-8 flex flex-wrap gap-3">
        <LinkButton href="/" variant="primary">
          Back Home
        </LinkButton>
        <LinkButton href="/projects" variant="secondary">
          View Projects
        </LinkButton>
      </div>
    </Section>
  );
}

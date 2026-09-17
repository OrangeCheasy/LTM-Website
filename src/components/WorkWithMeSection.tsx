import { LinkButton, Section } from "@/components/ui";

export default function WorkWithMeSection() {
  return (
    <Section
      spacing="compact"
      aria-labelledby="work-with-me-heading"
      className="border-t border-border/70"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
        <div>
          <p className="text-metadata font-medium text-accent">Collaboration</p>
          <h2 id="work-with-me-heading" className="mt-2 text-section text-text">
            Work With Me
          </h2>
          <p className="mt-3 max-w-2xl text-body-secondary text-text-muted">
            Have a software project, game, automation, or technical problem you want to discuss?
            Send me the details and I’ll get back to you.
          </p>
        </div>

        <LinkButton href="/contact" variant="primary" size="lg">
          Contact Me
        </LinkButton>
      </div>
    </Section>
  );
}

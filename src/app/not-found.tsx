import PageHero from "@/components/PageHero";
import { LinkButton } from "@/components/ui";

export default function NotFound() {
  return (
    <PageHero
      id="not-found-heading"
      eyebrow="404"
      title="That page isn’t here"
      description="The link may be outdated, or the page may have moved during the portfolio rebuild."
      actions={
        <>
          <LinkButton href="/" variant="primary">
            Back home
          </LinkButton>
          <LinkButton href="/projects" variant="secondary">
            View projects
          </LinkButton>
        </>
      }
    />
  );
}

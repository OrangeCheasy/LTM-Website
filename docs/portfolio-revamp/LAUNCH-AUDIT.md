# Portfolio Revamp — Launch Audit

This document tracks the final Phase 9 release state for the portfolio revamp.

## Code-complete launch work

- Shared site metadata is aligned to `Liam Mo — Software Developer`.
- Canonical URLs are defined for the homepage and primary public routes.
- Open Graph/Twitter metadata uses the personal developer portfolio positioning.
- Person + WebSite structured data is emitted server-side.
- A keyboard-visible skip link targets the main content region.
- A portfolio-styled 404 page is present.
- `/projects` and `/projects/[slug]` are the canonical project destinations.
- `/portfolio` and `/portfolio/:slug` permanently redirect to the matching project routes.
- Legacy `/services/:slug` URLs permanently redirect into `/contact?topic=:slug`.
- Sitemap output uses canonical project URLs and excludes intentionally `noindex` placeholder routes.
- `robots.txt` allows public routes while excluding `/api/`.
- GitHub activity has a text equivalent and graceful failure state.
- The technology marquee hides its duplicate visual track from assistive technology and respects reduced motion.
- The visitor counter fails gracefully and does not block page rendering.
- Contact copy/metadata is aligned to collaboration and portfolio language rather than the old service-first homepage.
- Favicon/icon route assets are present under `src/app`.
- Education content is confirmed and published for Ernest Manning High School and Mount Royal University, including dates, program status, location, and relevant coursework.
- Experience content is confirmed and published as a vertical role timeline for AuStudio, Hello Nori, and freelance computer-tech work, including the Server-to-Supervisor promotion path.

## Intentional indexing hold

The homepage remains `noindex, follow` until the remaining owner-supplied launch content is real. This prevents temporary/pending content from being published into search results while still allowing crawlers to follow canonical links.

The following inputs are still required before the homepage should switch to `index, follow`:

- approved profile photo
- current public resume asset/content
- exact LinkedIn profile URL

The resume route remains `noindex` while the PDF/content is pending. The experience route is now indexable because confirmed public experience entries exist, and sitemap generation mirrors that state.

## Infrastructure/manual validation still required

- Provision the optional Cloudflare D1 binding `VISITOR_DB` to enable the live visitor statistic. Without it, the footer intentionally displays an unavailable fallback.
- Validate the final layout at narrow phone, modern phone, tablet portrait, tablet landscape, laptop, and wide desktop widths.
- Tab through navigation, hero actions, project cards, contact controls, GitHub links, and footer links and confirm visible focus states.
- Verify `/portfolio` and a legacy `/portfolio/:slug` URL return permanent redirects to `/projects` equivalents.
- Verify a legacy `/services/:slug` URL redirects into the matching contact topic.
- Submit the production contact form end to end and confirm the configured notification arrives.
- Verify GitHub API failure and visitor-counter failure states do not break page rendering.
- Confirm the current favicon/app icon visually in production browsers.
- Confirm the final profile image crop once the approved photo is supplied.

## Launch rule

Do not remove the homepage `noindex` flag merely to satisfy a checklist. Indexing should be enabled only after the remaining owner-supplied profile/resume/social content is finalized and the live production validation passes.

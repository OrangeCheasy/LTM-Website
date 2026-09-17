# Portfolio Revamp — Launch Audit

This document tracks the release state of the portfolio redesign. `v2.10` is the launch-hardening and secondary-page redesign pass.

## Code-complete launch work

- Shared site metadata is aligned to `Liam Mo — Software Developer`.
- Canonical URLs are defined for the homepage and primary public routes.
- Open Graph/Twitter metadata uses the personal developer portfolio positioning.
- Person + WebSite structured data is emitted server-side.
- A keyboard-visible skip link targets the main content region.
- A portfolio-styled 404 page is present.
- `/projects` and `/projects/[slug]` are the only project UI implementations.
- `/portfolio` and `/portfolio/:slug` permanently redirect to the matching project routes; the now-dead legacy React pages were removed in v2.10.
- Legacy `/services/:slug` URLs permanently redirect into `/contact?topic=:slug`.
- Sitemap output uses canonical project URLs and excludes intentionally `noindex` placeholder routes.
- `robots.txt` allows public routes while excluding `/api/`.
- GitHub activity has a text equivalent, graceful failure state, and contribution colors themed to the portfolio design system.
- The technology marquee hides its duplicate visual track from assistive technology and respects reduced motion.
- The visitor counter fails gracefully and does not block page rendering.
- GitHub, LinkedIn, and contact destinations share the central social-link data source.
- Contact copy/metadata is aligned to collaboration and portfolio language.
- Favicon/icon route assets are present under `src/app`.
- Education content is confirmed and published.
- Experience content is confirmed and grouped into separate workplace timelines.
- `/projects`, `/projects/[slug]`, `/contact`, and `/about` were redesigned in v2.10 around the shared semantic spacing, surface, border, type, button, and focus systems.
- The homepage Outside the Tech gallery exposes a stable `#outside-tech` anchor so About can link to it without duplicating the gallery.

## v2.10 page architecture cleanup

- `/projects/[slug]` now owns the case-study implementation directly instead of importing the legacy `/portfolio/[slug]` page.
- Case studies render only evidence present in typed project data: metrics, features, screenshots, and before/after sections disappear when not supplied rather than being filled with placeholder claims.
- Project detail pages now have canonical metadata, responsive hero art, challenge/approach/outcome structure, project facts, technology tags, optional implementation/media sections, and previous/next project navigation.
- The Projects index has a responsive portfolio summary, featured case study, and remaining-work grid.
- Contact now has canonical metadata, direct email/social destinations, progressive form context, and a clearer two-column desktop layout that collapses naturally on smaller screens.
- About now derives current work, education, location, and skills from shared data sources rather than duplicating those facts in page-local copy.

## Intentional indexing hold

The homepage remains `noindex, follow`. This is deliberate even though LinkedIn, experience, education, canonical routing, and the main page system are complete.

The remaining owner-supplied inputs before the homepage should switch to `index, follow` are:

- approved profile photo
- current public resume asset/content
- final approved personal photos/alt text for the Outside the Tech gallery

The resume route remains `noindex` while its final content is pending. Do not remove the homepage indexing hold during intermediate v2.10 work.

## Automated validation

Every v2.10 implementation PR must pass the repository CI loop before it is merged into the `v2.10` major branch:

- dependency installation
- production dependency audit
- ESLint
- Cloudflare type generation
- OpenNext worker build
- TypeScript typecheck

No minor v2.10 branch should deploy to production. Production deployment remains a `main`-only action.

## Manual validation still required

Run these checks on the final v2.10 build before releasing it to `main`:

- narrow phone, modern phone, tablet portrait, tablet landscape, laptop, and wide desktop layouts
- keyboard tab/focus order through navigation, page CTAs, project cards, carousels, contact controls, GitHub/social links, and footer
- touch/swipe behavior for the Outside the Tech and project screenshot galleries
- `/portfolio` and `/portfolio/:slug` permanent redirects
- `/services/:slug` redirect into the correct contact topic
- production contact-form submission and delivery of its configured notification
- GitHub API and visitor-counter failure states
- favicon/app icon rendering in production browsers
- visitor counter with the private production D1 binding
- final image crops once the profile and personal gallery assets are supplied

## Repository / deployment follow-up

- Keep GitHub Actions as the only production deployment path; disable the old Cloudflare Git integration if it is still enabled.
- `main` is currently not protected by branch protection. Add a GitHub ruleset or branch protection requiring pull requests and CI before merge if desired; the connected GitHub tool used for this audit does not expose repository-administration mutations.
- Continue using minor branches for implementation and merge completed work into the active version major branch before any release PR to `main`.

## Launch rule

Do not remove the homepage `noindex` flag merely to satisfy a checklist. Enable indexing only when the remaining owner-supplied assets are final and the production/manual validation above passes.

# Phase 09 — Polish, Accessibility, SEO & Launch

## Objective

Treat the completed redesign as a product release rather than stopping when the homepage looks finished.

## 1. Visual consistency audit

Review every public route for:

- typography role consistency
- text colors
- section spacing
- page gutters/max widths
- button styles
- border/radius treatment
- icon sizing
- hover/focus behavior
- mobile spacing

Any exception to the shared system should be deliberate and documented.

## 2. Responsive validation

Manually validate at minimum:

- narrow phone
- modern phone
- tablet portrait
- tablet landscape
- laptop
- wide desktop

Check long project names, long role names, animation overflow, and image cropping—not only ideal demo content.

## 3. Accessibility

Validate:

- semantic heading order
- keyboard navigation
- visible `:focus-visible`
- link/button naming
- portrait/project image alt text
- sufficient text contrast
- reduced-motion behavior
- marquee duplicate content hidden from assistive technology
- GitHub visualizations have text equivalents

## 4. Performance

Target a fast static-first experience.

Review:

- image sizes/formats
- font loading
- unused client components
- unnecessary hydration
- GitHub API caching
- visitor counter request cost
- CLS from images/icons

Prefer server components and static rendering wherever live data is not required.

## 5. SEO / metadata

Important current-state item: the homepage currently declares `robots: { index: false, follow: false }`. The revamp launch must revisit and remove the noindex state once production functionality is validated.

Launch tasks:

- index/follow enabled intentionally
- canonical URLs correct
- sitemap uses `/projects` rather than `/portfolio`
- legacy `/portfolio` redirects verified
- page titles/descriptions updated to personal portfolio positioning
- Open Graph content updated
- favicon/app icons verified
- structured data considered for Person/website/project content

## 6. Content audit

Remove or rewrite stale service-first language that conflicts with the new portfolio identity.

Confirm:

- title is `Software Developer`
- homepage section order matches the master plan
- resume is current
- experience/education dates are current
- project links are valid
- social links are valid
- contact flow works end to end

## 7. Production verification

Before marking the revamp complete:

- lint passes
- TypeScript passes
- production build passes
- internal links checked
- 404 behavior checked
- contact form tested
- GitHub fallback tested
- visitor-counter fallback tested
- mobile navigation tested
- deployment on the active major branch verified

## Acceptance Criteria

The phase is complete only when the site is visually consistent, usable by keyboard/touch, responsive, build-clean, production-tested, and intentionally indexable.
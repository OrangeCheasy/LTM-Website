# LiamTheMo Portfolio Revamp

## Goal

Rebuild liamthemo.com from a service-first landing page into a polished personal developer portfolio centered on Liam, his work, experience, technical skills, education, GitHub activity, and contact paths.

The homepage should feel intentionally designed as one system. Typography, color, spacing, iconography, section widths, buttons, cards, borders, and motion should come from shared tokens/components instead of per-section improvisation.

## Portfolio Positioning

**Primary title: Software Developer**

This is the broadest accurate umbrella for the site. It includes web/full-stack work, game development, automation, tooling, and software projects without forcing the portfolio into only one specialty.

Supporting specialties can appear in copy and project tags, for example:

- Full-stack development
- Game development
- Automation and tooling
- UI/UX implementation

## Target Homepage Order

1. Global navigation
2. Profile hero
   - profile photo
   - full name
   - social/contact icons
   - title: Software Developer
   - short introduction/about copy
   - resume button
3. Featured Projects
   - exactly 3 featured projects
   - `View More` -> `/projects`
4. Experience
   - date range
   - position title
   - organization
   - location
   - short summary
   - `View Details` -> `/experience`
5. Skills / Technology marquee
   - continuously scrolling horizontal list
   - icon + readable technology name
6. Education
   - school, program, dates/status, location
   - `Outside the Tech` -> `/about#outside-tech`
7. GitHub Activity
   - live/recent public GitHub contribution/activity data
   - link to GitHub profile
8. Work With Me
   - compact CTA into `/contact`
9. Footer
   - full name
   - Calgary, Alberta
   - social links
   - privacy-safe visitor statistic

## Route Direction

The redesign should use these public routes:

- `/` — homepage
- `/projects` — all projects
- `/projects/[slug]` — project detail/case study
- `/experience` — expanded work/leadership experience
- `/about` — longer personal page, including `#outside-tech`
- `/contact` — contact/work-with-me flow
- `/resume` or a stable resume PDF URL — resume destination

The current `/portfolio` route should remain compatible through a permanent redirect to `/projects` after the new projects route is ready.

## Phase Map

- [Phase 01 — Design System & Site Shell](./PHASE-01-DESIGN-SYSTEM.md)
- [Phase 02 — Hero, Identity & About](./PHASE-02-HERO-IDENTITY.md)
- [Phase 03 — Featured Projects & Projects Route](./PHASE-03-PROJECTS.md)
- [Phase 04 — Experience](./PHASE-04-EXPERIENCE.md)
- [Phase 05 — Skills Marquee](./PHASE-05-SKILLS-MARQUEE.md)
- [Phase 06 — Education & Outside the Tech](./PHASE-06-EDUCATION.md)
- [Phase 07 — GitHub Activity](./PHASE-07-GITHUB-ACTIVITY.md)
- [Phase 08 — Work With Me, Footer & Visitor Count](./PHASE-08-CTA-FOOTER.md)
- [Phase 09 — Polish, Accessibility, SEO & Launch](./PHASE-09-LAUNCH.md)

## Non-Negotiable Quality Rules

- Shared typography scale, spacing scale, container widths, colors, radii, and button styles.
- No one-off font sizes or text colors unless documented as a deliberate exception.
- Mobile-first behavior for every section.
- Motion must respect `prefers-reduced-motion`.
- Interactive elements need visible keyboard focus states.
- Icons must have accessible names or be correctly marked decorative.
- The portfolio must not depend on JavaScript for basic reading/navigation.
- External integrations must fail gracefully rather than leaving blank sections.
- No secret tokens may be exposed to client-side code.

## Required Manual Inputs Before Their Phases Can Be Finalized

- Approved profile photo.
- Current resume PDF/content.
- Exact LinkedIn profile URL.
- Final three featured projects and their preferred cover art.
- Final experience and education wording/dates.
- Hobbies/interests for `Outside the Tech`.

These inputs should not block the structural implementation. Components and data models can be completed first using clearly labeled temporary content.
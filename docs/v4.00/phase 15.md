# Phase 15 — Accessibility, Performance & SEO

**Status:** Planned  
**Target major version:** v4.00  
**Depends on:** Content migration substantially complete

## Goal

Ensure the CMS does not regress the quality of the public portfolio and that editor features remain accessible and efficient.

## Accessibility Audit

Validate:

- Semantic heading structure.
- Keyboard navigation.
- Focus management.
- Accessible names for editor controls.
- Drag-and-drop alternatives.
- Screen-reader behavior.
- Form error announcements.
- Dialog/sheet focus trapping.
- Alt-text workflows.
- Color contrast.
- Touch target sizing.

## Performance Audit

Validate:

- Core Web Vitals.
- Public JavaScript bundle size.
- Editor code splitting.
- Image optimization.
- Database query count.
- Public read caching.
- Server rendering behavior.
- R2 media delivery.
- Avoidance of admin dependencies on public routes.

Public visitors should not pay a significant performance cost for functionality available only after authentication.

## SEO Audit

Validate:

- Titles/descriptions.
- Canonical URLs.
- Open Graph metadata.
- Structured data where appropriate.
- Sitemap generation.
- Robots behavior.
- Project route indexing.
- Draft/private preview exclusion from indexing.
- Image metadata and social previews.

## Deliverables

- Accessibility audit report.
- Performance measurements compared with v3.00 baseline.
- SEO audit.
- Fixes for identified regressions.
- Automated checks where feasible.

## Validation

Run repository tests, production build, accessibility tooling, Lighthouse/performance checks, and manual keyboard/screen-reader spot checks. Compare major public pages against the established baseline.

## Exit Criteria

The v4.00 CMS adds editing power without materially degrading the public site's accessibility, performance, responsive quality, or search metadata.

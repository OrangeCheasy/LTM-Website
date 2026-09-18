# Phase 0 — v3.00 Freeze & v4.00 Preparation

**Status:** Planned  
**Target major version:** v4.00  
**Depends on:** Completion and release of v3.00

## Goal

Finish the current portfolio revamp as a stable v3.00 checkpoint before CMS work begins. v4.00 should build on a known-good visual and content baseline rather than redesigning the public site and introducing editing infrastructure at the same time.

## Scope

- Complete all remaining v3.00 visual, responsive, accessibility, content, and launch work.
- Perform a repository-wide audit of the finalized v3.00 implementation.
- Inventory every piece of content that could reasonably become editable.
- Identify which content is currently hard-coded in React/TypeScript.
- Document the existing design system, layout rules, reusable components, routes, SEO conventions, media handling, and project data structures.
- Classify future data as either:
  - **CMS-managed content**, or
  - **application/design-system logic that remains in Git**.
- Establish the migration boundary between the v3.00 codebase and the future v4.00 CMS.

## Deliverables

- Permanent v3.00 major branch representing the finalized pre-CMS portfolio.
- Content inventory covering projects, project pages, work experience, education, Outside the Tech, About, Contact, social links, media, navigation, SEO, homepage cards, and section ordering.
- Architecture notes describing which existing components can become CMS renderers and which need refactoring.
- Initial v4.00 implementation backlog derived from the inventory.
- Baseline screenshots and QA notes for later visual-regression comparison.

## Validation

- Production build, lint, type checks, tests, and repository-specific validation pass for v3.00.
- Main is deployed from the finalized v3.00 checkpoint.
- Manual review confirms the site is visually complete on desktop and mobile.
- No unresolved v3.00 work is silently moved into v4.00 unless explicitly documented.

## Exit Criteria

Phase 0 is complete when v3.00 is a finished standalone portfolio, every intended CMS-managed content area is inventoried, and v4.00 can begin without depending on unfinished redesign work.

## Branching Note

Do not develop Phase 0 or later phases directly on a major branch. All implementation work must occur on temporary branches created from the intended version branch, then be validated and merged back according to the repository branch workflow.

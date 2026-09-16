# Phase 07 — GitHub Activity

## Objective

Connect public GitHub activity directly to the portfolio so the homepage shows recent development activity rather than a static decorative contribution graphic.

## Homepage Section

Section heading: `GitHub Activity`

Recommended content:

- contribution/activity summary
- recent public repositories or recent public events
- compact activity visualization where reliable
- clear link to the GitHub profile

The section should complement the Projects section rather than duplicate it.

## Data Strategy

Prefer server-side fetching/caching so API details and rate limits are not pushed into the browser.

Possible data sources should be evaluated during implementation based on reliability and GitHub API constraints. The implementation must:

- use only public data unless explicit authorization is added later
- avoid exposing secrets/tokens in client-side JavaScript
- cache responses to reduce rate-limit pressure
- define a reasonable revalidation interval
- provide a graceful fallback when GitHub is unavailable

## Failure State

If live activity cannot load, the section should still render useful static content such as:

- GitHub username/profile link
- a short fallback message
- optional links to featured public repositories already stored in local project data

The page must never show a broken empty box or raw API error.

## Privacy / Scope

Only information already public on GitHub should be surfaced. Do not expose private repository names, private contribution details, emails, or tokens.

## Accessibility

Contribution visualizations cannot rely on color alone. If a heatmap-style visualization is used, include accessible text summarizing the activity represented.

## Acceptance Criteria

- Homepage displays useful GitHub content without requiring client-side secrets.
- Public activity is cached/revalidated rather than fetched on every browser render.
- GitHub outages/rate limits leave a designed fallback.
- Section links clearly to the GitHub profile.
- Private repository information is never exposed.
- Any chart/heatmap has a text equivalent or useful accessible label.
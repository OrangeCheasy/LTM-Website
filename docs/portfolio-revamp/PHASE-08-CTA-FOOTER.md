# Phase 08 — Work With Me, Footer & Visitor Count

## Objective

Finish the homepage with a compact collaboration CTA and a footer that carries identity, location, social links, and a trustworthy visitor statistic.

## Work With Me

Place a small `Work With Me` area immediately before the footer.

Recommended content:

- short heading
- one concise line about availability/collaboration
- button to `/contact`

This should be smaller and calmer than the current large generic “Let’s Work Together” panel. It is the final action after a visitor has already seen projects, experience, skills, education, and GitHub activity.

## Footer Content

Required content:

- `Liam Mo`
- `Calgary, Alberta`
- GitHub / LinkedIn / contact links
- copyright year
- visitor statistic

Keep the footer visually simple and aligned to the same page container as the rest of the site.

## Visitor Statistic

Requested presentation:

`Visited by X people`

### Counting semantics

Do not label raw page views as “people.” The implementation must choose one of these approaches:

1. implement an anonymous unique-visitor approximation and keep the requested copy; or
2. count page views and change the label to `X visits`.

The implementation should be privacy-conscious and avoid building a long-lived fingerprinting system.

### Preferred technical direction

Because the site already deploys through Cloudflare Workers, implement the counter server-side using an appropriate Cloudflare-backed store/service selected during implementation.

Requirements:

- no personally identifying visitor data displayed or stored unnecessarily
- bot/self-refresh behavior considered
- atomic increments or equivalent concurrency-safe logic
- counter failure must never block page rendering
- cached homepage behavior must be considered so the count actually updates correctly

## Contact Integration

`Work With Me` should lead into the existing `/contact` route rather than introducing a duplicate contact system on the homepage.

## Acceptance Criteria

- CTA is concise and clearly points to `/contact`.
- Footer contains full name and Calgary, Alberta.
- Social links reuse the same data/component as the hero.
- Visitor statistic has honest semantics (`people` vs `visits`).
- Counter failure leaves a graceful fallback rather than an error.
- Counter implementation does not expose private identifiers or secrets to the client.
# Phase 05 — Skills / Technology Marquee

## Objective

Add the horizontally animated technology strip requested for the homepage while keeping it readable, accessible, and useful rather than purely decorative.

## Content

Each item contains:

- technology/tool icon
- readable technology/tool name

Potential groups represented in the data model:

- languages
- frameworks/libraries
- databases
- cloud/deployment
- game development
- developer tools

Only list technologies Liam can reasonably discuss or demonstrate through work/projects.

## Animation Direction

Create a seamless horizontal marquee that continuously scrolls across the page.

Requirements:

- duplicated visual track may be used for the seamless loop, but duplicate content must not be announced twice by assistive technology
- pause or reduce animation when `prefers-reduced-motion` is enabled
- avoid animation speed that makes names difficult to read
- no content should disappear permanently if animation fails
- no layout shift while icons load

Desktop may show more items simultaneously; mobile should preserve a comfortable icon/name size rather than shrinking everything.

## Icon Strategy

Prefer a consistent icon source and visual weight.

Rules:

- use SVG where possible
- normalize icon box size
- do not let brand-specific colors create an uncontrolled rainbow if it conflicts with the site system
- provide readable names; logos alone are insufficient

## Data Architecture

Suggested fields:

- `name`
- `icon`
- `category`
- `url?`
- `featured?`

The same data may later power a skills section on `/about` or `/experience`.

## Acceptance Criteria

- Smooth loop with no obvious jump at the seam.
- Text remains readable at mobile and desktop widths.
- Reduced-motion users receive a static or manually scrollable equivalent.
- Duplicate marquee tracks are hidden from screen readers.
- All skills come from one typed data source.
- Icons do not introduce CLS/layout shift.
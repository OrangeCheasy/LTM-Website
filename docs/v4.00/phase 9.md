# Phase 9 — Reusable Block & Card System

**Status:** Planned  
**Target major version:** v4.00  
**Depends on:** Phases 1, 5, and 6

## Goal

Create a safe, reusable library of content blocks that lets future sections be composed without turning the CMS into an unrestricted HTML/page-builder environment.

## Initial Block Types

Potential supported blocks include:

- Text
- Heading
- Image
- Image gallery
- Project card/list
- Experience card/list
- Education card/list
- Link card
- Stats
- Timeline
- Callout
- Button group
- Quote
- Divider
- Spacer
- Hero
- Image + text
- Carousel
- Technology list
- Repository/GitHub card
- Contact card
- Custom card

## Custom Card Rules

A Custom Card should expose approved fields such as:

- Title
- Subtitle
- Description
- Image/icon
- Link
- Width/span
- Emphasis/style variant
- Alignment

It must **not** accept arbitrary executable JavaScript. Raw HTML, if ever supported, should be treated as an exceptional high-risk feature and sanitized rigorously; the preferred design is structured data rendered by trusted components.

## Architecture

Each block type should have:

- A stable type identifier.
- Runtime schema.
- Editor component.
- Public renderer.
- Default values.
- Supported layout options.
- Migration/version strategy.
- Accessibility expectations.

A central registry should map block types to these definitions rather than relying on large route-specific conditional trees.

## Deliverables

- Block registry.
- Initial production block library.
- Block picker.
- Block settings/editor UI.
- Public renderers.
- Duplication and ordering support.
- Compatibility rules for containers/layouts.

## Validation

Build representative pages entirely from blocks and compare them against established v3.00 design conventions. Test malformed block payloads, missing optional fields, duplication, reorder, hide/show, and responsive behavior.

## Exit Criteria

Most future portfolio sections can be created by composing approved blocks rather than writing new React components.

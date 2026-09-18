# Phase 12 — Global Site Configuration

**Status:** Planned  
**Target major version:** v4.00  
**Depends on:** Admin and publishing foundations

## Goal

Move routine site-wide settings into the CMS while keeping structural design-system behavior in code.

## Candidate Settings

- Display name
- Profile image
- Public email/contact targets
- GitHub link
- LinkedIn link
- Other social links
- Navigation items
- Footer content
- Homepage featured-project selection
- Default SEO title/description
- Default Open Graph image
- Contact-page links
- Selected homepage preferences

Constrained theme preferences may also be exposed where useful, for example:

```text
Card density:
Compact / Normal / Spacious
```

## Boundaries

Do not build a raw CSS editor or arbitrary design-token editor. Global settings must map to explicitly supported options so the public site remains coherent and responsive.

Sensitive deployment configuration, database bindings, API secrets, authentication settings, and infrastructure credentials must remain outside CMS-editable content.

## Scope

- Global settings schema.
- Admin settings interface.
- Validation for URLs, text limits, and supported enum values.
- Shared site-config provider/read layer.
- Integration with navigation, footer, metadata, contact surfaces, and homepage.
- Draft/publish behavior consistent with other CMS content.

## Deliverables

- Site-settings storage.
- Admin settings UI.
- Public settings resolver.
- Navigation/social/footer integration.
- SEO defaults integration.
- Supported presentation preferences.

## Validation

Change representative settings in draft, preview them, publish them, and verify all dependent surfaces update consistently. Confirm invalid external URLs and unsupported values are rejected.

## Exit Criteria

Routine global portfolio configuration can be changed without modifying source code while infrastructure and design-system internals remain protected in Git/environment configuration.

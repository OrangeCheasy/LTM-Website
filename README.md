# LiamTheMo Portfolio

Personal portfolio website for **Liam Mo**, built around software development, projects, experience, technical skills, education, GitHub activity, and ways to get in touch.

**Live site:** https://liamthemo.com

The site is currently being rebuilt from its older service-first layout into a personal developer portfolio. The primary positioning for the redesign is **Software Developer**, with supporting work across full-stack development, game development, automation, tooling, and UI implementation.

## Current development line

| Item | Value |
| --- | --- |
| Pre-revamp snapshot | `v2.00` |
| Current major branch | `v2.06` |
| Current phase | Phase 6 — Education & Outside the Tech |
| Production domain | `liamthemo.com` |

`v2.00` is the preserved snapshot of the website before the portfolio revamp and should not be rewritten.

## Revamp roadmap

Each portfolio phase maps to a `v0.01` version increment:

| Phase | Major branch | Scope |
| --- | --- | --- |
| 1 | `v2.01` | Design system and site shell |
| 2 | `v2.02` | Hero, identity, about, social links, resume |
| 3 | `v2.03` | Featured projects and `/projects` migration |
| 4 | `v2.04` | Experience |
| 5 | `v2.05` | Skills and technology marquee |
| 6 | `v2.06` | Education and Outside the Tech |
| 7 | `v2.07` | GitHub activity integration |
| 8 | `v2.08` | Work With Me, footer, visitor statistic |
| 9 | `v2.09` | Accessibility, SEO, performance, launch audit |

## Development workflow

Follow `AGENTS.md` for repository rules and branch/version requirements.

For every implementation task:

1. identify the current major branch (`main` or `vX.XX`)
2. create a new minor branch from that exact major branch
3. make all code/content/config changes only on the minor branch
4. validate the change locally/through CI
5. open a pull request back into the same major branch
6. merge only when the task is complete

Minor branches are development-only and must not be deployment targets. Completed version branches may be released to `main` after their production PR passes CI.

## Cloudflare deployment

Production is deployed from `main` through Cloudflare Workers Builds. GitHub Actions is validation-only.

Cloudflare should use:

```bash
# Build command
npx @opennextjs/cloudflare build

# Deploy command
npx @opennextjs/cloudflare deploy
```

The package `build` script must remain `next build`; OpenNext invokes it internally. Do not replace the package `build` script with `opennextjs-cloudflare build`, or the build will recurse.

`npm run build:worker` explicitly generates the OpenNext Worker output for local/manual validation. `npm run deploy` runs the full OpenNext build-and-deploy flow manually when needed.

## Validation

Pull requests targeting `main` or `v*` run the repository CI suite:

- dependency install
- ESLint
- Cloudflare type generation
- OpenNext Worker build
- TypeScript typecheck

Production deployment remains owned by Cloudflare rather than GitHub Actions.

# rosspower.ai

Ross Power's sites: AI keynote speaker, workshop facilitator, educator and
founder of AI Powered. One repo, two Next.js 16 apps (App Router, Tailwind CSS v4,
TypeScript) sharing one design system. Hosted on **Vercel**.

| App | Folder | Production (`main`) | Preview (`preview` branch) |
| --- | --- | --- | --- |
| Landing page | `apps/web` | rosspower.ai | preview.rosspower.ai |
| Link in bio (static) | `apps/links` | links.rosspower.ai | preview.links.rosspower.ai |

Every push to `preview` updates both previews; production changes only when a PR
is merged into `main`.

## Develop locally

```bash
npm install          # once, at the repo root (npm workspaces)
npm run dev:web      # http://localhost:3000
npm run dev:links    # http://links.localhost:3300
npm run build        # builds both apps (links → apps/links/out)
npm run lint
npm run typecheck
```

`*.localhost` always points at your own machine, so no hosts-file setup is needed.
`/styleguide` on the web app (not indexed) shows the type scale, colours, buttons
and the Container padding at the current breakpoint.

## Structure

```
packages/ui/                 @rosspower/ui: shared by both apps
  src/styles/theme.css       Design tokens, breakpoints, type scale, base styles
  src/components/            Button, Eyebrow, Logo, icons, WhatsAppFloat
  src/content/brand.ts       Socials (+ follower counts), contact, discovery booking
apps/web/                    rosspower.ai
  src/app/                   layout, homepage, styleguide; globals.css = site animations
  src/components/layout/     Section, Container, SiteHeader, SiteFooter
  src/components/home/       Homepage sections (Hero, Stats, About, Speaking, …)
  src/content/nav.ts         Header/footer links. Add new pages here.
  src/content/home.ts        All homepage copy and image paths
  public/images/             Photos (ross/, events/, stories/)
  legacy/index.html          The previous single-file site, kept for reference only
apps/links/                  links.rosspower.ai (static export)
  src/content/links.ts       Profile, every link and its photo. Edit links here.
  src/components/            Profile, link cards (feature, tile, row, social)
  public/images/             Pre-sized photos (no image optimiser on a static export)
```

Both apps import the theme first in their `globals.css`:

```css
@import "tailwindcss";
@import "@rosspower/ui/theme.css";
@source "../../../../packages/ui/src";
```

The links page pins the type scale to its phone sizes, because it is always a
phone-width column.

## Layout rules

Every block is **Section › Container › content**:

- `Section` is full-bleed and owns only the background (`tone`).
- `Container` is max 1440px wide and owns the padding:

| Breakpoint | Vertical | Horizontal |
| --- | --- | --- |
| ≥1440 (`desktop`) | 96px | 80px |
| ≥1200 (`laptop`) | 72px | 56px |
| ≥810 (`tablet`) | 56px | 42px |
| base (390) | 42px | 24px |

## Type

| Style | Font | 1440 / 1200 / 810 / 390 |
| --- | --- | --- |
| H1 | Anton, uppercase | 264 / 216 / 144 / 72 |
| H2 | Instrument Serif (italic `.voice` accents) | 64 / 56 / 48 / 40 |
| H3 | Helvetica 500 (Medium) | 32 / 30 / 26 / 24 |
| H4 | Helvetica 700 | 26 / 24 / 22 / 20 |
| H5 | Helvetica 700 | 24 / 22 / 20 / 18 |
| H6 | Helvetica 700 | 18 / 18 / 16 / 16 |
| Subtitle (`type-p-lg`) | Helvetica 400 | 18 at all sizes, line height 1.5 |
| P / P sm | Helvetica 400 | 17·15 → 16·14 |
| Label | Helvetica 600 | 13 → 12 |

Bare `h1`–`h6` and `p` pick these up automatically; the `type-*` utilities apply
them to any element.

## Hosting

One Vercel project, `rosspower-ai` (team `rosspowers-projects`), deploys both apps
together using [Vercel Services](https://vercel.com/docs/services):

- Project settings: Root Directory = repo root, Framework Preset = Services
- `vercel.json` defines two services, `web` (`apps/web`) and `links` (`apps/links`),
  and routes by host: `links.rosspower.ai` and `preview.links.rosspower.ai` go to
  `links`; everything else goes to `web`
- `main` → production (rosspower.ai, links.rosspower.ai);
  `preview` branch → preview.rosspower.ai and preview.links.rosspower.ai
- Generated `*.vercel.app` preview URLs only show the web app (they have no
  links hostname); use preview.links.rosspower.ai for the links page

DNS for rosspower.ai is at a third-party provider: each subdomain is a CNAME to
`cname.vercel-dns.com`.

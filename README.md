# rosspower.ai

The personal site for **Ross Power**: AI keynote speaker, workshop facilitator,
educator and founder of AI Powered.

Built with **Next.js 16** (App Router), **Tailwind CSS v4** and TypeScript.
Hosted on **Vercel**.

## Develop locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint
```

`/styleguide` (not indexed) shows the type scale, colours, buttons and the
Container padding at the current breakpoint.

## Structure

```
src/
  app/
    layout.tsx         Shared shell: fonts, metadata, SiteHeader + SiteFooter
    page.tsx           Homepage (composes the sections below)
    globals.css        Design tokens, breakpoints, type scale
    styleguide/        Internal reference page
  components/
    layout/            Section, Container, SiteHeader, SiteFooter
    home/              Homepage sections (Hero, Stats, About, Speaking, …)
    ui/                Button, Eyebrow, MediaFrame, icons
  content/
    nav.ts             Header/footer links. Add new pages here.
    home.ts            All homepage copy and image paths
public/images/         Photos (ross/, events/)
legacy/index.html      The previous single-file site, kept for reference only
```

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

Deployed on **Vercel**, connected to this GitHub repo:

- `main` → production (rosspower.ai)
- `preview` and every other branch → a Vercel preview URL

No `vercel.json` is needed; Vercel detects Next.js.

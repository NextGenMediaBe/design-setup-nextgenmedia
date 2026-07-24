# Project structure

One layout for every Next.js project we build. A developer opening any of our repos should
know where things are within thirty seconds.

## The tree

```
klant-website/
├── app/
│   ├── (marketing)/               # route group — shares a layout, adds nothing to the URL
│   │   ├── layout.tsx             # header + footer for public pages
│   │   ├── page.tsx               # /
│   │   ├── over-ons/page.tsx      # /over-ons
│   │   ├── diensten/
│   │   │   ├── page.tsx           # /diensten
│   │   │   └── [slug]/page.tsx    # /diensten/maatkasten
│   │   └── contact/
│   │       ├── page.tsx
│   │       └── _components/       # private folder — colocated, never routable
│   │           └── contact-form.tsx
│   ├── (legal)/                   # different layout: narrow prose column, no hero
│   │   ├── layout.tsx
│   │   ├── privacy/page.tsx
│   │   └── algemene-voorwaarden/page.tsx
│   ├── api/
│   │   └── contact/route.ts       # server actions preferred; route handlers for webhooks
│   ├── layout.tsx                 # root: <html lang="nl-BE">, fonts, JSON-LD, analytics
│   ├── not-found.tsx              # 404
│   ├── error.tsx                  # client error boundary ("use client" required)
│   ├── global-error.tsx           # catches errors in the root layout itself
│   ├── loading.tsx                # only where a route actually streams
│   ├── sitemap.ts                 # see 01-standards/seo.md
│   ├── robots.ts
│   ├── opengraph-image.tsx        # site-wide fallback OG image
│   ├── icon.svg                   # favicon
│   └── apple-icon.png
│
├── components/
│   ├── ui/                        # primitives. shadcn lands here. No business logic
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── dialog.tsx
│   │   └── accordion.tsx
│   ├── sections/                  # one file per page section, one export each
│   │   ├── hero-split.tsx
│   │   ├── services-grid.tsx
│   │   ├── testimonial-marquee.tsx
│   │   ├── faq-accordion.tsx
│   │   └── cta-banner.tsx
│   └── layout/                    # site chrome
│       ├── site-header.tsx
│       ├── site-footer.tsx
│       └── mobile-nav.tsx
│
├── lib/
│   ├── utils.ts                   # cn() and genuinely generic helpers
│   ├── seo.ts                     # baseMetadata, SITE constants
│   ├── schema.ts                  # JSON-LD builders
│   ├── env.ts                     # zod-validated environment variables
│   └── cms.ts                     # data access — cache()-wrapped fetchers
│
├── hooks/
│   ├── use-media-query.ts
│   └── use-scroll-lock.ts
│
├── content/                       # MDX / JSON when there is no CMS
│   ├── projecten/loft-zurenborg.mdx
│   └── diensten.json
│
├── public/
│   ├── fonts/                     # woff2, self-hosted — 01-standards/performance.md
│   ├── images/
│   └── og-default.jpg
│
├── styles/
│   └── globals.css                # Tailwind v4 entry + the token layer
│
├── types/
│   └── content.ts                 # shared types only; component props stay in the component
│
├── DESIGN.md                      # this project's design decisions
├── CLAUDE.md                      # project instructions, points at this repo
├── .env.example                   # committed
├── .env.local                     # gitignored
├── next.config.ts
├── tsconfig.json
└── package.json
```

Directories you don't need until you need them: `types/`, `content/`, `hooks/`, `api/`.
Don't create empty folders to match this tree.

## `app/` conventions

| Convention | Meaning |
|---|---|
| `(name)/` | **Route group.** Shares a layout, contributes nothing to the URL. Use it to split marketing / app / legal layouts |
| `_name/` | **Private folder.** Never routable. This is where colocated components for one route live |
| `[slug]` / `[...slug]` | Dynamic / catch-all segment |
| `@name/` | Parallel route. Rarely needed on a marketing site — don't reach for it |
| `layout.tsx` | Persists across navigation, does not re-render on route change. Shared chrome only |
| `page.tsx` | The route. One per URL |
| `loading.tsx` | Suspense fallback. Add it only where there is real async work — an instant flash of skeleton is worse than nothing |
| `error.tsx` | Must be a Client Component. Give it a working `reset()` button |
| `not-found.tsx` | Designed, not the default. It is a real page with navigation |

Rules:

- **Colocate, then promote.** A component used by exactly one route starts in that route's
  `_components/`. It moves to `components/sections/` the day a second route imports it.
- URL segments are in the **site's language**: `/over-ons`, `/diensten`, `/projecten`.
  Never mix English routes into a Dutch site. See `01-standards/seo.md` for locale routing.
- No `page.tsx` longer than ~40 lines. See [Page components](#page-components).
- Server Actions live next to what uses them in an `actions.ts`, marked `"use server"`.
  Route handlers are for webhooks and third parties only.

## Where components live

| Folder | Contains | Test |
|---|---|---|
| `components/ui/` | Primitives: button, input, badge, dialog, tooltip. Styled, unopinionated, no data | Could it ship in any project of ours after a token swap? |
| `components/sections/` | Full-width page sections: hero, feature grid, testimonial block, CTA, FAQ | Does it occupy a full band of the page and get composed into a `page.tsx`? |
| `components/layout/` | Header, footer, mobile nav, skip link | Is it site chrome that appears on every page? |
| `app/**/_components/` | Anything used by exactly one route | Is it only imported by its sibling `page.tsx`? |

**One section per file, one export per file.** A `sections.tsx` with six exports is a merge
conflict and a barrel file in disguise.

Sections take props and render; they do not fetch. Data comes from the Server Component page
above them. That keeps sections reusable and keeps `"use client"` at the leaves — see
`01-standards/performance.md`.

## Naming

| Thing | Convention | Example |
|---|---|---|
| Files and folders | **kebab-case** | `hero-split.tsx`, `use-media-query.ts`, `site-header.tsx` |
| React components | **PascalCase** | `export function HeroSplit()` |
| Hooks | `use` + kebab file, camelCase export | `use-scroll-lock.ts` → `useScrollLock` |
| Constants | `SCREAMING_SNAKE` | `const MAX_UPLOAD_MB = 5` |
| Types / interfaces | PascalCase, no `I` prefix | `type Project = {}` |
| Booleans | `is` / `has` / `should` | `isOpen`, `hasError` |
| Event handlers | `handle` in the component, `on` in the prop | `onSelect={handleSelect}` |
| CSS custom properties | `--category-name` | `--color-accent`, `--ease-out` |

Windows and macOS are case-insensitive; Linux CI is not. kebab-case everywhere removes an
entire class of "works locally, fails on Vercel" bugs.

### Name a section for what it IS, not where it sits

`HomeSection2` tells you nothing and lies the moment the page is reordered. The name
describes the pattern and the shape.

| Don't | Do |
|---|---|
| `home-section-1.tsx` | `hero-split.tsx` |
| `about-block.tsx` | `story-timeline.tsx` |
| `section-three.tsx` | `logo-cloud.tsx` |
| `bottom-cta.tsx` | `cta-banner.tsx` |
| `contact-page-form.tsx` | `contact-form.tsx` |

Names come from the pattern catalogue in `03-patterns/`. If a section doesn't map to one,
it either needs a better name or it shouldn't exist.

## Imports

One alias, configured once:

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./*"] }
  }
}
```

```tsx
import { Button } from "@/components/ui/button";
import { HeroSplit } from "@/components/sections/hero-split";
import { cn } from "@/lib/utils";
```

| Rule | Detail |
|---|---|
| `@/` for everything crossing a folder boundary | No `../../../components` |
| Relative imports only within the same folder | `./contact-form` |
| Import order | react → next → external → `@/` internal → relative → types. Let `eslint-plugin-import` or Prettier's sort plugin enforce it |
| One alias, not five | `@/components`, `@/lib`, `@/ui` as separate aliases is config nobody remembers |

### No barrel files

Never write `components/ui/index.ts` re-exporting everything.

| Cost | Detail |
|---|---|
| Tree-shaking | One import from a barrel pulls the whole module graph into the bundle. Your 4kb button import becomes 90kb |
| Server/client boundaries | A barrel that re-exports one `"use client"` module can drag client code into a server tree |
| Build time | Every barrel is a fan-out the bundler has to resolve on every change |
| Circular imports | Barrels are the most common source, and the error message never points at them |

Import from the file. `import { Button } from "@/components/ui/button"` is four extra
characters and it is unambiguous.

The one acceptable exception: a package boundary in a monorepo, where the barrel *is* the
public API and the package is marked `sideEffects: false`.

## Design files

| File | Location | Purpose |
|---|---|---|
| `DESIGN.md` | Project root | This project's decisions: palette and why, type scale, spacing rhythm, motion budget, deviations from this repo. Written at kickoff, updated when a decision changes |
| `globals.css` | `styles/globals.css`, imported once in `app/layout.tsx` | Tailwind v4 entry, `@theme` mapping, and the token layer copied from `02-design-system/tokens/globals.css` and then edited for the brand |

```css
/* styles/globals.css */
@import "tailwindcss";

@theme {
  --color-accent: var(--color-accent);
  --font-sans: var(--font-sans);
}

:root {
  /* project tokens — see 02-design-system/tokens/globals.css */
  --color-accent: oklch(0.62 0.19 28);
}
```

Tokens are **CSS custom properties**, not a JS object. They cost nothing at runtime, work in
media queries and `@theme`, and give you dark mode without a provider. Never define a colour
in `tailwind.config` and again in CSS.

## Environment variables

```bash
# .env.example — committed, no real values, every key documented
NEXT_PUBLIC_SITE_URL=https://www.klant.be
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=klant.be

# Server only — never prefixed with NEXT_PUBLIC_
RESEND_API_KEY=
SANITY_API_READ_TOKEN=
```

| Rule | Detail |
|---|---|
| `NEXT_PUBLIC_` means **public** | It is inlined into the client bundle at build time. A secret with that prefix is a leaked secret |
| `.env.example` is committed and complete | Every key the app reads, with a placeholder or a safe default. A new dev copies it to `.env.local` and the app boots |
| `.env.local` is gitignored | Along with `.env*.local`. Never commit real values, not even to a private repo |
| Validate at boot | Parse with Zod in `lib/env.ts` and import that. A missing key should fail the build, not throw at 2am in a route handler |
| Never read `process.env` in a component | Read it in `lib/env.ts`, export typed values |
| Changing a public var requires a rebuild | It's inlined. Redeploy, don't just update it in the Vercel dashboard |

```ts
// lib/env.ts
import { z } from "zod";

const schema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url(),
  RESEND_API_KEY: z.string().min(1),
});

export const env = schema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
});
```

## Page components

**A page component is a list of sections and nothing else.** No layout maths, no markup, no
conditionals beyond a `notFound()`. If you can't read the page's structure in five seconds,
it's wrong.

```tsx
// app/(marketing)/page.tsx
import { HeroSplit } from "@/components/sections/hero-split";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProcessSteps } from "@/components/sections/process-steps";
import { TestimonialMarquee } from "@/components/sections/testimonial-marquee";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { getServices, getTestimonials } from "@/lib/cms";

export default async function HomePage() {
  const [services, testimonials] = await Promise.all([getServices(), getTestimonials()]);

  return (
    <>
      <HeroSplit />
      <LogoCloud />
      <ServicesGrid services={services} />
      <ProcessSteps />
      <TestimonialMarquee testimonials={testimonials} />
      <FaqAccordion />
      <CtaBanner />
    </>
  );
}
```

Consequences of the rule, all of them deliberate:

- Each section owns its own `<section>` element, vertical padding, and container width. The
  page never wraps a section in a spacing div.
- Reordering the page is reordering lines.
- A designer reading `page.tsx` sees the page structure without reading any markup.
- Data fetching happens once, at the page, and is passed down. Sections stay presentational.
- The moment a page needs a wrapper `<div className="...">`, that wrapper belongs inside a
  section or is a new section.

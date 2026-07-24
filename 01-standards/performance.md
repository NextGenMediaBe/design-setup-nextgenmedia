# Performance

Performance is a design constraint, not a cleanup phase. A hero that needs 400kb of JS is a
bad hero, however it looks.

## Targets

Field data (75th percentile, mobile) is what counts. Lab numbers are a debugging tool.

| Metric | Good | Our target | Dominated by |
|---|---|---|---|
| **LCP** — Largest Contentful Paint | < 2.5s | **< 2.0s** | The hero image or headline: server response, image weight, font blocking, render-blocking JS |
| **INP** — Interaction to Next Paint | < 200ms | **< 150ms** | Main-thread work: hydration, big client components, third-party scripts |
| **CLS** — Cumulative Layout Shift | < 0.1 | **< 0.05** | Images without dimensions, fonts swapping, injected banners, late-loading embeds |
| **TTFB** | < 800ms | **< 400ms** | Rendering strategy: static/ISR vs dynamic, database calls in the layout |

Build budget for a marketing page, gzipped, above the fold:

| Asset | Budget |
|---|---|
| First-load JS per route | **< 130kb** (Next.js prints this; treat the number as a gate) |
| Shared JS chunk | < 90kb |
| CSS | < 20kb |
| LCP image | < 150kb |
| Total page weight | < 700kb |
| Requests before LCP | < 25 |

Blowing a budget is allowed once you have said why in the PR. Blowing it silently is not.

## Images

Images are the LCP element on almost every page we build. They are also the easiest win.

```tsx
import Image from "next/image";

// Hero — the LCP element
<Image
  src={hero}                 // static import → width/height inferred, blur placeholder free
  alt="Team van NextGenMedia aan het werk"
  priority                   // preloads, skips lazy-loading
  sizes="100vw"
  className="h-full w-full object-cover"
/>

// In a 3-column grid
<Image
  src={project.image}
  alt={project.title}
  width={800}
  height={600}
  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
/>
```

| Rule | Why |
|---|---|
| `priority` on the **LCP image only** | It emits a `<link rel="preload">`. Priority on six images is the same as priority on none |
| Always set `sizes` for responsive images | Without it the browser assumes `100vw` and downloads a 2000px file for a 400px slot |
| Always have width/height (or `fill` + a sized parent) | Reserves the box. This is most of your CLS |
| Formats: AVIF then WebP | `formats: ["image/avif", "image/webp"]` in `next.config`. AVIF is ~30% smaller than WebP; the fallback chain is automatic |
| Everything below the fold is lazy | The default. Don't override it |
| `placeholder="blur"` for photos | Free with static imports; use `blurDataURL` for CMS images |
| Serve at 2x max | A 3x asset costs 2.25x the bytes for a difference nobody sees |

**When NOT to use `next/image`:**

- SVGs — ship them as inline components or plain `<img>`. The optimizer does nothing for
  vector and `dangerouslyAllowSVG` is a security hole.
- Icons — inline SVG, always. See `01-standards/stack.md`.
- Images in emails, RSS, or anything leaving the site.
- Static exports without a loader configured.
- CSS background images — but ask why the image is decorative instead: a real `<Image>` with
  `alt=""` gets optimized, a `background-image` does not.

**CLS killers to check for:** an `<img>` with no dimensions, an embed (map, video, form)
with no reserved aspect box, a cookie banner injected above content, a "notification bar"
that appears after hydration.

```css
/* Reserve the box for any embed */
.embed { aspect-ratio: 16 / 9; }
```

## Fonts

Self-host. Always. A `fonts.googleapis.com` request costs a DNS lookup, a TLS handshake and
a render-blocking stylesheet, and it happens before your text can paint.

```ts
// app/fonts.ts
import localFont from "next/font/local";

export const sans = localFont({
  src: [
    { path: "./fonts/Inter-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Inter-SemiBold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: "Inter",   // generates size-adjust metrics → near-zero CLS on swap
});
```

| Rule | Detail |
|---|---|
| `next/font` (local or google) | It inlines the `@font-face`, self-hosts the file, and removes the external request entirely |
| woff2 only | No woff, no ttf, no eot. Every browser we support has woff2 |
| Max **2 families, 4 files total** | Each weight is a request and ~20–40kb. Two weights per family is nearly always enough |
| Subset | `latin` only unless the copy needs more. Belgian Dutch and French are covered by `latin` + `latin-ext` for a few French glyphs |
| `display: "swap"` | Text paints immediately in the fallback. `block` hides your LCP text for up to 3s |
| `adjustFontFallback` / `size-adjust` | Matches the fallback's metrics to the real face so the swap doesn't reflow. This is the single biggest font-related CLS fix |
| Preload the **display face only** | `preload: true` on the family used above the fold; `preload: false` on a display/accent face used further down |
| Variable fonts | One file, all weights. Prefer them when the family offers one |

Never `@import` a font in CSS. Never load a font in a client component.

## JavaScript

The default is zero client JS. You add it deliberately, at the smallest possible scope.

| Rule | Detail |
|---|---|
| Server Components by default | No `"use client"` at the top of `page.tsx` or `layout.tsx`. Ever |
| `"use client"` at the **leaves** | The boundary makes that component *and its whole import tree* client code. Push it down to the accordion, not up to the section |
| Pass server components as `children` | `<ClientTabs>{await <ServerPanel/>}</ClientTabs>` keeps the panel content off the client bundle |
| Dynamic import anything heavy and below the fold | Charts, maps, video players, rich editors, lightboxes |
| No `ssr: false` for content | It costs you SEO and LCP. Only for genuinely browser-only widgets |
| Check the number every build | `next build` prints First Load JS per route. If it grew, find out why before merging |

```tsx
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/sections/contact-map"), {
  loading: () => <div className="aspect-[16/9] animate-pulse rounded-lg bg-[var(--color-muted)]" />,
});
```

Note the skeleton has the same aspect ratio as the real thing — a dynamic import without a
reserved box just moves your problem from JS weight to CLS.

**Bundle analysis** — run it when a route crosses budget, not never:

```bash
pnpm add -D @next/bundle-analyzer
ANALYZE=true pnpm build
```

Usual suspects and their fixes:

| Suspect | Fix |
|---|---|
| `moment`, `lodash` | `date-fns`/`Intl.DateTimeFormat`, and native methods |
| A whole icon library | Import per-icon (`lucide-react` tree-shakes; barrel re-exports of your own don't) |
| A carousel library | `embla-carousel` is ~5kb; most "carousels" are a scroll-snap container and no JS |
| A 40kb animation lib for one fade | CSS transition. See `02-design-system/motion.md` |
| Duplicated React from a mismatched peer dep | `pnpm why react` |

## CSS

| Rule | Detail |
|---|---|
| **No runtime CSS-in-JS** | styled-components / emotion compute styles during render — it is INP cost with zero design benefit. Rule 2 in `01-standards/stack.md` |
| Tailwind v4 scans your source | Never build class names by string concatenation (`text-${color}-500`) — the scanner can't see it and the class is purged. Map to full class strings |
| One stylesheet | `02-design-system/tokens/globals.css` plus Tailwind. No per-component `.css` files |
| Tokens as CSS custom properties | They cost nothing at runtime and give you theming without JS |
| No `@import` in CSS | Each one is a serialized request |
| Avoid `backdrop-filter` on large areas | It is a per-frame GPU cost, and it's a common cause of jank on scroll |

Next.js inlines critical CSS for the App Router automatically. Do not hand-roll a critical
CSS step.

## Third-party scripts

This is the single biggest cause of a site that scored 98 in staging and 61 in production.
Every tag the client asks for is a negotiation, not an instruction.

| Script | Strategy |
|---|---|
| Analytics | **Plausible** or Vercel Analytics — cookieless, ~1kb, no consent banner. `strategy="afterInteractive"` |
| Google Tag Manager | `strategy="afterInteractive"`. Push back hard: GTM lets anyone add unbounded JS to your site later |
| Chat widget (Intercom, Crisp, Tawk) | **Do not load it on page load.** Render your own button, load the real widget on first click |
| Cookie banner | Only if you actually set non-essential cookies. Cookieless analytics removes the need |
| Embedded video | Facade: poster image + play button, load the iframe on click. `lite-youtube-embed` or 20 lines of your own |
| Maps | Static map image linking to Google Maps, or dynamic import on interaction |
| Fonts from a CDN | No. See above |
| A/B testing scripts | Server-side or edge middleware only. Client-side flicker is both a CLS and a UX failure |

```tsx
import Script from "next/script";

<Script
  src="https://plausible.io/js/script.js"
  data-domain="klant.be"
  strategy="afterInteractive"
/>
```

| `next/script` strategy | Use for |
|---|---|
| `beforeInteractive` | Almost nothing. Only a script that must run before hydration (rare consent managers) |
| `afterInteractive` | **Default.** Analytics, tag managers |
| `lazyOnload` | Chat, heatmaps, anything the user doesn't need for the first interaction |
| `worker` | Experimental (Partytown). Nice when it works; don't ship it under deadline |

Self-host what you can. A proxied Plausible script (`/js/script.js` via a rewrite) avoids a
third-party connection entirely and survives ad blockers.

## Rendering and caching

Pick the cheapest option that is correct. Default to static.

| Content | Strategy | How |
|---|---|---|
| Marketing pages, copy that changes rarely | **Static** | The default. No `dynamic`, no uncached `fetch` |
| Blog, cases, CMS content | **ISR** | `export const revalidate = 3600`, plus an on-publish webhook calling `revalidatePath()` |
| Personalised, auth'd, or request-dependent | **Dynamic** | `export const dynamic = "force-dynamic"`, and only for that route |
| Geo/AB/redirect logic | **Edge middleware** | Keep it small — middleware runs on every matched request |

```ts
// app/blog/[slug]/page.tsx
export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}
```

Traps that silently make a page dynamic — and cost you TTFB and LCP:

- Reading `cookies()`, `headers()`, or `searchParams` anywhere in the tree.
- A `fetch` with `cache: "no-store"` in a shared layout.
- `new Date()` used for rendered output rather than for a cache key.
- A third-party SDK doing its own uncached HTTP call at render time.

Also: cache headers on `/public` assets are immutable in Next by default — leave them alone.
Don't add a `Cache-Control` header in `next.config` unless you know exactly which route it
lands on.

## Measuring

| Tool | Use it for | Caveat |
|---|---|---|
| **Lighthouse** | Pre-merge gate. Run it against `next build && next start`, incognito, mobile preset | Dev-mode scores are fiction: no minification, no caching, React dev warnings |
| **WebPageTest** | Waterfall analysis, real device + throttled 4G, filmstrip to see what LCP actually is | Slower loop; use when Lighthouse says "slow" but not why |
| **Chrome DevTools Performance** | Finding what blocks the main thread during an interaction | The only real way to debug INP |
| **Vercel Speed Insights** / CrUX | Field data. This is the number that counts | Needs traffic and ~28 days to stabilise |
| **`next build` output** | Per-route JS budget | Check it every build, not at the end of the project |

**Lab scores lie about INP.** Lighthouse doesn't interact with the page — it reports Total
Blocking Time as a proxy. A page can score 100 and still take 500ms to open its mobile menu.
The only ways to know:

1. Field data (Speed Insights / CrUX) on the real site.
2. Manually: DevTools Performance, record, click the thing, read the interaction duration.

Do a manual INP pass on the three interactions that matter on every site: the mobile menu,
the primary CTA, and the contact form submit.

**Test on a real mid-range Android over throttled 4G before launch.** A MacBook on fibre
tells you nothing about the device most Belgian visitors are actually holding.

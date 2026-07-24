# Vengeance UI

A large collection of animated React components — buttons, text effects, carousels,
backgrounds, docks, galleries. Genuinely good work, and the strongest source we have for
the "one memorable interaction per page" moments.

- Site: https://www.vengenceui.com/components *(note the domain spelling)*
- Repo: https://github.com/Ashutoshx7/VengenceUI
- Registry index (248 entries, more than the site lists): `https://www.vengenceui.com/r/registry.json`

## Licence — read this first

> **The repository has no LICENSE file.** GitHub reports `license: null`, and the site's
> terms only say to "check the repository". Under default copyright that means **all
> rights reserved**.

What that means in practice:

| Use | Verdict |
|---|---|
| Installing via the author's own shadcn registry into a project | Fine — that is the distribution channel they built and published |
| Studying the technique and writing our own implementation | Fine |
| Copying the source verbatim into **this** repo and redistributing it | **No** |
| Shipping it in a paid client project | **Ask the author first**, in writing |

So we do **not** vendor these components. This file is a catalogue: what exists, what it
needs, and what is broken — so you can pull the one you need on demand instead of
duplicating 66 files we would then have to maintain.

## Install

Set up shadcn once (New York / Zinc / CSS variables), then:

```bash
npx shadcn@latest add https://www.vengenceui.com/r/<name>.json
```

Or register the namespace in `components.json` and use short names:

```jsonc
{ "registries": { "@vengeanceui": "https://www.vengenceui.com/r/{name}.json" } }
```

```bash
npx shadcn@latest add @vengeanceui/animated-rays
```

Everything lands in `components/ui/<name>.tsx`. No component declares
`registryDependencies` — each is self-contained apart from `cn`.

### Baseline the components assume

```bash
npm i clsx tailwind-merge framer-motion
# per component, as needed:
npm i gsap three @react-three/fiber @react-three/drei
npm i lucide-react @phosphor-icons/react next-themes @paper-design/shaders-react
```

Tailwind v4, CSS-first config, `@custom-variant dark (&:is(.dark *))`, and the standard
`cn` helper in `lib/utils.ts`.

## Known problems — check these before you install

1. **Six registry files 404** although their pages exist. `shadcn add` fails; copy from the
   page instead: `my-animated-button`, `image-collage`, `cylinder-carousel`,
   `ripple-displacement-slider`, `solar-system`, `magnetic-spotlight-marquee`.
2. **Under-declared dependencies.** `liquid-text` and `liquid-ocean` import Three.js but
   declare no dependencies — the install succeeds and the build breaks. **Audit the
   imports of every component you add.**
3. **Missing global CSS.** These install visually broken because their stylesheets are not
   in the registry JSON: `glow-border-card` (needs `.glow-conic`), `logo-slider` (needs
   `.logo-slider__track/__item/__blur`), `glass-dock` (needs `.glass-dock`, `.glass-border`
   and per-icon classes). You have to write that CSS yourself.
4. **`elastic-stack` ships a typo:** `from "@@/lib/utils"`. Fix to `@/lib/utils`.
5. **`morph-text` `@import`s Google Fonts from inside a JS `<style>` tag** — a runtime
   network request and a CSP problem. Move the font to `next/font`.
6. **`border-beam` uses `<style jsx>`**, which is a no-op outside the Next.js Pages Router.
   Move the keyframe to `globals.css`.
7. **They import `framer-motion`, not `motion`.** Pin the legacy package name, or update
   the imports yourself.
8. **`glass-dock` uses MorphSVGPlugin** behind a `try/catch` that only warns, because it
   used to be a paid plugin. It is free now — see
   [`gsap/README.md`](./gsap/README.md) — so register it and the icons will actually morph.

## Catalogue

### Buttons
`candy-button` (glossy blue radial, no deps) · `pop-button` (hard offset shadow that
collapses on click, no deps) · `radial-glow-button` (animated `@property` gradient +
conic shine, no deps) · `generate-button` (sparkle + letter shimmer, loading state) ·
`social-flip-button` (letter→icon flip) · `corner-button` (corner dots expand on hover) ·
`creepy-button` (googly eyes tracking the cursor) · `liquid-metal` (real chrome shader
ring, needs `@paper-design/shaders-react`) · `my-animated-button` ⚠️ registry 404

**Pick of the group:** `pop-button` and `radial-glow-button` — both dependency-free and
the effect is in the CSS, so they are cheap and easy to restyle to the token layer.

### Text and motion
`animated-number` (digits scroll on change) · `flip-text` (3D per-character flip) ·
`flip-fade-text` (word cycling) · `morph-text` (SVG threshold gooey morph, no deps) ·
`ascii-glitch-ripple` (character-scramble ripple from the cursor, no deps) ·
`liquid-text` (Three.js pointer ripple) ⚠️ undeclared `three`

**Pick:** `ascii-glitch-ripple` on a single heading or nav item is a strong, cheap
signature effect. `morph-text` is the more dramatic one.

### Interactive
`interactive-book` · `perspective-carousel` · `diagonal-carousel` · `cylinder-carousel` ⚠️
· `image-trail` · `pixelated-image-trail` · `image-collage` ⚠️ · `circular-gallery`
(draggable 3D ring, GSAP) · `interactive-keyboard` · `typing-keyboard` · `music-player` ·
`verse-cards` (fanning card deck, GSAP) · `solar-system` ⚠️ · `interactive-particles`
(image → GPU particles, three + gsap) · `ripple-displacement-slider` ⚠️ (WebGL) ·
`scroll-dissolve-reveal` (R3F scroll dissolve)

**Warning:** the WebGL ones (`three`, `@react-three/fiber`) add 150kb+ and will cost you
the Lighthouse score. Use at most one, above the fold, on a site where the visual *is* the
product. Check [`../01-standards/performance.md`](../01-standards/performance.md) first.

### Layout and cards
`agent-bento-grid` · `expandable-bento-grid` (card → modal) · `staggered-grid` (GSAP
scroll stagger) · `image-scatter` · `glow-border-card` ⚠️ needs CSS ·
`testimonials-card` · `highlight-grid` (highlight follows the hovered cell, no deps)

### Tooltips, avatars, marquees
`cursor-card` (cursor-following link preview, portal-rendered) · `elastic-stack` ⚠️ typo ·
`logo-slider` ⚠️ needs CSS · `stacked-logos` · `masked-avatars` · `shared-tooltip-avatars`
· `image-reveal-list` (hover a list item, image slides in) · `faq-accordion` ·
`magnetic-spotlight-marquee` ⚠️

**Pick:** `image-reveal-list` is the best of these for real client work — it turns a
services list or a project index into something worth hovering.

### Navigation
`glass-dock` ⚠️ needs CSS · `spotlight-navbar` (spotlight springs back to the active item)
· `notch-navbar` (notched header, theme toggle, mobile menu) · `gooey-search` ·
`animated-footer` (ASCII hands lighting up around the cursor, GSAP) · `awwwards-nav`
(bottom pill expanding into a mega-menu) · `search-modal` (command palette)

**Accessibility caveat:** none of these were built to the standard in
[`../01-standards/accessibility.md`](../01-standards/accessibility.md). Before shipping any
navigation component from here, verify keyboard operability, focus trapping and
`aria-expanded`. Expect to add them yourself.

### Collections (multiple variants in one file — good value)
`line-hover-link` — **11** underline variants · `folder-preview` — **9** opening folder
variants · `animated-tooltip` — **7** SVG bubble shapes

### Backgrounds
`animated-rays` · `aurora-hero` · `fluid-morph-bg` · `twisting-ribbon` (canvas 2D) ·
`perspective-grid` · `light-lines` · `wave-grid-background` (three) · `liquid-ocean` ⚠️
(three, undeclared)

**Read this before using any of them.** Animated backgrounds are on the anti-pattern list
in [`../02-design-system/anti-patterns.md`](../02-design-system/anti-patterns.md) for a
reason: they are the fastest way to make a site look generated. If you use one:

- one per site, in the hero only, never behind body text
- restyled to the project palette — the shipped colours are all purple/cyan and will fight
  the brand
- `prefers-reduced-motion` must stop it, which none of them handle out of the box
- static fallback under `md`

### Not on the site, only in `registry.json`
`border-beam` · `cyber-glitch-text` · `interactive-hover-button` · `liquid-gradient` ·
`morphing-disclosure` · `smooth-scroll` · `reveal-loader` · `code-block` · `copy-button` ·
`github-button` · `component-showcase` · `fullscreen-preview` · `testinomial-card2`

The registry also re-hosts the whole shadcn/ui base set. Install those from shadcn
directly, not from here.

## How to use this well

The temptation with a library like this is to install ten of them. Don't. The rule from
[`../02-design-system/motion.md`](../02-design-system/motion.md) holds: **one or two
moments of motion per page.**

The right pattern is: build the page properly first, then pick *one* component here that
makes the thing the client cares about memorable. A services list that reveals images on
hover. A hero heading that scrambles. One dock. Then restyle it to the token layer so it
does not look like it came from somewhere else — which, right now, most of them do.

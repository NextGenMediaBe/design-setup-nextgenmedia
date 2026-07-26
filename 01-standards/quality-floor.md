# Quality floor

Non-negotiable on every project, regardless of budget or timeline. This is the gate, not
the explanation — each line links to the document that explains it.

Nothing here is a stretch goal. A project that misses one of these is not finished.

## Accessibility — WCAG 2.2 AA

Full detail: [`accessibility.md`](./accessibility.md).

| | Requirement |
|---|---|
| Contrast | **4.5:1** body text · **3:1** large text (≥24px, or ≥19px bold) and UI components |
| Focus | Visible on every interactive element, **3:1** against its background. Never `outline: none` without a replacement |
| Target size | **44×44px** minimum (WCAG 2.2 asks 24×24; we use 44) |
| Keyboard | Full operability, logical focus order, no traps, working skip link |
| Semantics | Semantic HTML before ARIA. One `<h1>`, real landmarks, real `<button>` and `<a>` |
| Forms | `<label for>`, `autocomplete`, `inputmode`, errors linked via `aria-describedby`, errors in **text** and not only in colour |
| Preferences | `prefers-reduced-motion` and `prefers-color-scheme` respected |
| Language | `lang="nl"` on `<html>` — also required for `hyphens: auto` to work |

**A Lighthouse accessibility score below 100 is a defect**, the same as a failing
typecheck. Lighthouse catches roughly a third of real issues, so the keyboard pass is
mandatory on top of it.

## Performance — Core Web Vitals

Full detail: [`performance.md`](./performance.md).

| Metric | Budget |
|---|---|
| LCP | **< 2.5s** on a mid-range phone over 4G |
| INP | **< 200ms** |
| CLS | **< 0.1** |

- Fonts self-hosted, `font-display: swap`, preload the display face only, `size-adjust`
  fallback metrics to prevent shift on swap.
- Images with explicit dimensions, modern formats, `loading="lazy"` on everything except
  the LCP image — which gets `priority`.
- Third-party scripts are the largest single cause of a bad score. Chat widgets load on
  first click, never on page load.
- Measure on the built output, never the dev server.

**Performance is a design constraint.** A visual effect that costs the budget does not
ship. Large `filter: blur()` layers, WebGL heroes and animated backgrounds are all
performance failures before they are aesthetic ones.

## Responsive

- **320px to 1920px** with no horizontal scroll at any width.
- Checked at 390, 768, 1024 and 1440 — `npm run design:audit` renders three of these.
- Mobile layout is designed, not inherited. Every section in
  [`../03-patterns/`](../03-patterns/) states its mobile behaviour.
- No heading wraps to more than three lines at 390px.

## Forms

- Label above the field, always visible. Placeholder is an example, never the label.
- **Label→field 4–8px, field→next field 20–28px.** See
  [`../02-design-system/anti-patterns.md`](../02-design-system/anti-patterns.md) §4.4.
- Validation on blur, inline, in text.
- Required marking with a word, never a bare asterisk.
- A success state that replaces the form. Not a toast over a still-filled form.
- The submission actually arrives — tested on the production URL.

## SEO and delivery

Full detail: [`seo.md`](./seo.md).

- Unique Dutch title and description per page.
- `LocalBusiness` or the relevant schema.org JSON-LD, matching visible content.
- An OG image that is **not** a screenshot of the hero.
- `sitemap.xml`, `robots.txt`, canonical URLs.
- **`noindex` removed from production.** Verify it.

## Privacy

- A cookie banner where refusing is exactly as easy as accepting. One click, same visual
  weight, no dark pattern.
- Prefer cookieless analytics (Plausible, Vercel Analytics) so no banner is needed at all.
- Privacy policy, cookie policy and terms present and actually written.
- Belgian companies: VAT number and registered address on the site — a legal requirement.

# Navigation

## Header

### Layout

```
[logo]          [nav links]                    [CTA]
```

Logo left, links centered or left-adjacent, one CTA right. This is conventional because it
works — a visitor should not have to learn where the navigation is.

- **Height:** 64–72px mobile, 72–80px desktop. Consistent across every page.
- **Links:** 4–6. Above six, either the site needs a mega menu or the information
  architecture is wrong.
- **One CTA**, and it is the same action as the hero's primary CTA.
- **Active state** on the current page — a colour change plus something non-colour
  (weight, underline, dot). Colour alone fails for colourblind users.

### Scroll behaviour

Pick one and commit:

| Behaviour | When |
|---|---|
| **Static** | Short pages. Simplest, and nothing goes wrong |
| **Sticky, always visible** | Long pages, or when the CTA needs to stay reachable |
| **Hide on scroll down, show on scroll up** | Content-heavy pages where vertical space matters |

If the header is transparent over the hero, it needs a solid state once you scroll past
it — background, a bottom border, and a shadow appearing together over ~200ms. Transparent
headers over light heroes with white text are a contrast failure waiting to happen; check
it against the lightest part of the image.

### Implementation

```tsx
<header className="sticky top-0 z-50 border-b border-transparent bg-background/80
                   backdrop-blur transition-colors data-[scrolled=true]:border-border">
  <nav aria-label="Hoofdnavigatie" className="container-page flex h-18 items-center justify-between">
```

- `<header>` containing a `<nav aria-label="…">`. The label matters when there is more than
  one nav on the page (header + footer).
- Mark the current page with `aria-current="page"`, not just a class.
- A skip link is the first focusable element on the page:
  `<a href="#main" class="sr-only-focusable">Naar hoofdinhoud</a>`.
- `backdrop-blur` needs a semi-transparent background to do anything, and costs paint
  performance on long pages. Skip it if you are fighting for a Lighthouse score.

## Mobile menu

Below `md`, links collapse behind a trigger.

### Rules

1. **Full-screen overlay, not a cramped dropdown.** You have the space; use it. Large tap
   targets, generous spacing, big type.
2. **Lock body scroll** while open, and restore the scroll position on close.
3. **Focus goes into the menu** when it opens, is **trapped** while it is open, and
   **returns to the trigger** when it closes. This is the most commonly skipped step and
   the most obviously broken one for keyboard users.
4. **Escape closes it.** So does a route change.
5. `aria-expanded` on the trigger, `aria-controls` pointing at the panel.
6. The hamburger→X transition should animate. It is one of the few places a small
   animation genuinely helps — it shows the same control is now the close button.
7. **The CTA goes in the menu too**, at the bottom, full width.

```tsx
<button
  aria-expanded={open}
  aria-controls="mobile-menu"
  aria-label={open ? "Menu sluiten" : "Menu openen"}
  onClick={() => setOpen(!open)}
>
```

Do not build this by hand unless you have to — use a headless dialog primitive (Radix,
React Aria) that already handles the focus trap, the scroll lock and the escape key.
Getting all three right by hand takes longer than it looks.

## Mega menu

Only when there are genuinely more than ~15 destinations. Otherwise it is complexity for
its own sake.

- Grouped into 2–4 labelled columns.
- **Opens on hover with a delay (~150ms) and closes with a longer one (~300ms)**, so the
  cursor can travel diagonally to the panel without it snapping shut. Also opens on
  click/focus for keyboard and touch.
- Arrow keys move within it, Escape closes it, Tab moves out and closes it.
- A description line under each link earns its space.
- On mobile it becomes an accordion, never a mega menu.

## Breadcrumbs

For sites deeper than two levels. Blog posts, case studies, product categories.

- `<nav aria-label="Kruimelpad">` wrapping an `<ol>`.
- The current page is the last item, not a link, with `aria-current="page"`.
- Separator is `aria-hidden` — a screen reader should not read "slash" five times.
- Add `BreadcrumbList` JSON-LD; Google renders it in results.
- Truncate the middle on mobile, never the first or last item.

## Footer

The footer does two jobs: it catches people who did not convert, and it carries the legal
and trust signals.

### Structure

```
[logo + one line about what you do]     [Diensten]  [Bedrijf]  [Contact]

──────────────────────────────────────────────────────────────────────
© 2026 NextGenMedia    Privacy · Cookies · Algemene voorwaarden    [social]
```

- 3–4 link columns, grouped by intent, not by sitemap order.
- Real contact details: address, phone as a `tel:` link, email as `mailto:`.
- **For Belgian companies: BTW/VAT number and company registration are legally required**
  on the website, along with the registered address.
- Privacy policy, cookie policy and terms — linked, and actually written.
- Social icons only for accounts that are active. A dead Twitter link is worse than none.
- Newsletter signup here is fine; keep it to one field.

### Visual treatment

The footer should be **visually recessive** — a different background (darker or a muted
surface), smaller type, `text-muted` for links. It is a utility area, not a section that
competes with the content above it.

`py-16` to `py-20`, with a `pt-8` divider row for the legal line.

**Mobile:** columns stack, or become accordions if there are many links. Legal line
centered at the bottom.

## Anti-patterns

| Don't | Why |
|---|---|
| More than 6 top-level links | Nobody scans that many; it means the IA is unresolved |
| A dropdown for two items | Two links fit in the bar |
| Hamburger menu on desktop | Hides navigation for no reason; measurably reduces engagement |
| Mobile menu without focus trap | Tab escapes to the page behind it — broken for keyboard users |
| "Home" as a nav link | The logo does that |
| Transparent header with no scrolled state | Contrast fails as soon as content scrolls under it |
| Sticky header taller than 80px | Eats the viewport on laptops |
| Footer that repeats the entire sitemap | Nobody reads it; group by intent instead |
| Social icons linking to empty profiles | Actively damages trust |

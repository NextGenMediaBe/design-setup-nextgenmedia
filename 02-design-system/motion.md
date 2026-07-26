# Motion

Motion has one job: make a change in state legible. Anything that does not clarify what
happened, where something came from, or what is now interactive is decoration — and
decoration ages badly.

## The hierarchy of tools

Use the lightest tool that does the job.

| Need | Tool |
|---|---|
| Hover, focus, active, open/closed | **CSS transitions** |
| Looping ambient motion (marquee, pulse) | **CSS keyframes** |
| Enter/exit of mounted components, layout changes, drag | **Motion** (`motion/react`) |
| Scroll-driven sequences, pinning, text splitting, SVG drawing, complex timelines | **GSAP** — see `04-snippets/gsap/` |
| Scroll-linked with no JS orchestration | **CSS scroll-driven animations** (`animation-timeline`), progressively enhanced |

Do not install Motion for a hover state. Do not install GSAP for a fade-in.

## Duration

| Range | Use |
|---|---|
| 100–150ms | Instant feedback: button press, checkbox, tooltip |
| 150–250ms | **Default.** Hover, focus, small transitions |
| 250–400ms | Panels, dropdowns, modals, accordion |
| 400–600ms | Page-level transitions, large elements entering |
| > 600ms | Only for deliberate, once-per-page statement moments |

Larger elements travel further and need more time. Exits are ~30% faster than entrances —
the user has already decided.

## Easing

Never `linear` for movement. Never the browser default `ease`.

```css
--ease-brand:    cubic-bezier(0.2, 0.8, 0.2, 1);     /* the project's signature curve */
--ease-out:      cubic-bezier(0.16, 1, 0.3, 1);      /* entrances, reveals — the workhorse */
--ease-in-out:   cubic-bezier(0.65, 0, 0.35, 1);     /* moves between two on-screen states */
--ease-in:       cubic-bezier(0.7, 0, 0.84, 0);      /* exits, things leaving the screen */
--ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1);  /* playful overshoot — use sparingly */
```

Rule: things **entering** ease *out* (fast start, soft landing). Things **leaving** ease
*in* (soft start, quick departure).

**Pick one `--ease-brand` per project and write it into `DESIGN.md`.**
`cubic-bezier(.2,.8,.2,1)` reads precise and controlled; `cubic-bezier(.34,1.56,.64,1)`
reads playful. A curve used consistently across every interaction is a character trait. A
different curve per component is noise, and `ease` or `linear` is no character at all.

Concrete pairing of duration to purpose:

| Purpose | Duration | Curve |
|---|---|---|
| Micro-interaction — hover, press, toggle | **120–200ms** | `--ease-brand` |
| Entrance — panel, reveal, modal | **300–500ms** | `--ease-brand` |
| Exit | ~70% of the entrance | `--ease-in` |

**Never `transition: all`.** Name the properties. `transition: all` animates layout
properties you did not intend and is enforced against by
[`../tools/slop-check.mjs`](../tools/slop-check.mjs).

## Restraint

From `02-design-system/anti-patterns.md`, restated because it is the most-broken rule:

- **One or two moments of motion per page.** Not every section fading up on scroll.
- **Hover lifts are 2–4px**, not `scale(1.05)`. A card that grows on hover looks cheap;
  a card whose border brightens and shadow deepens looks expensive.
- **Nothing animates that the user did not cause**, except one deliberate hero moment.
- **Content is readable without JS.** Never gate text visibility on an animation firing —
  if the observer fails, the page must still have content.

## Scroll reveals — if you use them at all

```css
@media (prefers-reduced-motion: no-preference) {
  .reveal {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 500ms var(--ease-out), transform 500ms var(--ease-out);
  }
  .reveal[data-visible="true"] { opacity: 1; transform: none; }
}
```

- Travel distance: **12–24px**. Not 60px. The element should look like it settled, not
  like it flew in.
- Stagger within a group: **50–80ms**. Cap total stagger at ~300ms — a six-item grid
  taking 1.2s to appear is annoying on the second visit.
- Trigger when the element is ~15% into the viewport, and **fire once** (`triggerOnce`).
  Re-animating on scroll-back is a common and irritating mistake.

## Reduced motion — mandatory

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

In JS, check it before building timelines:

```js
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduced) { gsap.set(targets, { clearProps: "all", opacity: 1 }); return; }
```

Reduced motion means *no movement*, not *no interface*. Opacity fades and color changes
are acceptable; translation, scale, parallax and autoplay are not.

## Performance

- Animate **`transform` and `opacity` only.** Anything else (width, height, top, margin,
  box-shadow, filter) triggers layout or paint on every frame.
  - Need a size change? Animate `scale`, or use FLIP / GSAP Flip.
  - Need a shadow change? Cross-fade two stacked pseudo-elements.
- `will-change` is a last resort, applied just before the animation and removed after.
  Leaving it on permanently costs memory.
- Long lists: use one `IntersectionObserver` for all items, not one per item.
- Never animate on the main thread during scroll if a CSS scroll-driven animation can do it.

## Accessibility

- Motion never conveys information on its own.
- Nothing auto-plays for longer than 5 seconds without a pause control.
- No flashing faster than 3Hz.
- Focus must remain visible and correctly ordered while things move.

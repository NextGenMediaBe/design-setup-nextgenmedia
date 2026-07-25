# Craft

A page can obey every rule in `spacing-layout.md`, `color.md` and `typography.md` and still
read as amateur. What gives it away lives at the 1–4px scale: an icon sitting 1px low, a
border that is solid instead of alpha, a shadow with one layer, a gradient that goes grey
in the middle. Nobody can name these. Everybody sees them.

This file is the small stuff. Every value here is a default you can ship.

## Optical alignment

The browser centers boxes. The eye centers mass. They disagree constantly.

| Don't | Do |
|---|---|
| `justify-center` and ship it | Nudge by 1–2px until it looks centred |
| Same `width`/`height` for a circle and a square | Circle gets ~5% more diameter |
| Trust `line-height` to centre text in a button | Check the descender gap and adjust padding |

**Icons inside buttons.** A play triangle, a chevron, an arrow — anything with visual mass
off-centre — needs translating. A triangle pointing right sits ~1px left of its box centre:

```css
.btn-play svg { transform: translateX(1px); }
.btn-icon-only svg { transform: translateY(-0.5px); } /* cap-height vs box */
```

**Circles next to squares.** A 40px circular avatar next to a 40px square logo reads
smaller — the circle has ~21% less area. Compensate at ~5%:

```css
--size-square: 40px;
--size-round: 42px;   /* avatars, dots, round icon buttons */
```

Same rule for a pill button next to a rounded-rect button: the pill needs 2–4px more
horizontal padding to look equally weighted.

**Text in a box.** Latin type has more space below the cap line than above the baseline.
A single-line button with equal `padding-block` looks bottom-heavy. Take 1px off the
bottom:

```css
.btn { padding: 0.75rem 1.25rem 0.6875rem; } /* 12px top, 11px bottom */
```

**Hanging punctuation.** A paragraph or blockquote that starts with `"` or `“` has a
visible dent in the left margin. Pull it out:

```css
blockquote { text-indent: -0.42em; }        /* for “ at ~1.5rem */
p { hanging-punctuation: first last;  }     /* Safari; harmless elsewhere */
```

**Centred text with descenders.** A centred two-line heading where the second line is
`ppgy`-heavy sits optically low against the block below it. Reduce the following margin by
2–4px rather than adding to it. Same for a centred logotype: optical centring beats
`margin: 0 auto` when the mark has a heavy base.

## Borders

**Always alpha, never solid.** A solid `#e5e5e5` border is correct on exactly one
background. An alpha border adapts to whatever it lands on — surfaces, gradients, images,
dark mode.

```css
--border:        oklch(20% 0.02 260 / 0.10);  /* light mode default */
--border-strong: oklch(20% 0.02 260 / 0.16);  /* inputs, focus containers */
--border-subtle: oklch(20% 0.02 260 / 0.06);  /* dividers inside a card */
```

| Mode | Alpha range | Notes |
|---|---|---|
| Light | **8–12%** | Above 14% the border reads as a line, not an edge |
| Dark | **12–20%** | Dark needs more alpha for the same perceived weight |

In dark mode, borders are *white* alpha over the surface, not black:

```css
@media (prefers-color-scheme: dark) {
  :root { --border: oklch(98% 0 0 / 0.14); --border-strong: oklch(98% 0 0 / 0.22); }
}
```

**Hairlines.** A `1px` border at DPR 1.5 (very common on Android and scaled Windows) lands
on a half-pixel and renders as a soft 2px grey smear. Fix it per-DPR:

```css
.hairline { border-top: 1px solid var(--border); }
@media (min-resolution: 2dppx) {
  .hairline { border-top: 0.5px solid var(--border); }
}
```

For a guaranteed crisp line at any DPR, use a shadow instead of a border — shadows are not
snapped to the layout grid:

```css
.divider { box-shadow: 0 1px 0 var(--border); }
```

**Border or shadow?** A border defines an edge; a shadow defines height.

| Situation | Use |
|---|---|
| Card on the same-colour background | **Border.** A shadow alone will not separate it |
| Card that floats above content (dropdown, popover) | **Shadow** + a faint border |
| Card that needs heavy shadow to be visible | You wanted a border — see `spacing-layout.md` |
| Dark mode elevation | **Lighter surface** + border. Shadows barely read on dark |

**Inner vs outer.** `border` participates in layout and shifts content by its width.
`box-shadow: inset` does not. That difference decides which you use:

```css
/* Hover adds an edge — inset, so nothing moves */
.card { box-shadow: inset 0 0 0 1px var(--border); }
.card:hover { box-shadow: inset 0 0 0 1px var(--border-strong); }
```

Use a real `border` when the edge is structural and permanent (inputs, table cells). Use
`inset` shadow when the edge appears, thickens or disappears on state — a `border-width`
change from 1px to 2px reflows the content inside by 1px on every hover, and it is visible.

## Shadow physics

A single-layer shadow always looks like CSS. A real shadow is **two or three layers**: one
tight and relatively dark (contact), one wide and soft (ambient).

Rules, all of them non-optional:

1. **The light source is above, and it is the same across the whole page.** Every shadow
   has a positive `y`, and `x` is always `0`. One page, one sun.
2. **Shadow colour is the surface hue darkened, never `#000`.** Black shadows on a warm
   background go muddy grey.
3. **Elevation increases blur *and* y-offset together.** Bigger blur with the same offset
   reads as blur, not height.
4. **Blur ≈ 2–3× the y-offset.** Spread stays at 0 or slightly negative.

```css
:root {
  --shadow-hue: 260;
  --shadow-color: 20% 0.02 var(--shadow-hue);

  --shadow-xs:
    0 1px 2px oklch(var(--shadow-color) / 0.06);
  --shadow-sm:
    0 1px 2px  oklch(var(--shadow-color) / 0.05),
    0 2px 6px  oklch(var(--shadow-color) / 0.05);
  --shadow-md:
    0 1px 2px  oklch(var(--shadow-color) / 0.05),
    0 4px 8px  oklch(var(--shadow-color) / 0.06),
    0 8px 20px oklch(var(--shadow-color) / 0.06);
  --shadow-lg:
    0 2px 4px   oklch(var(--shadow-color) / 0.05),
    0 8px 16px  oklch(var(--shadow-color) / 0.07),
    0 16px 40px oklch(var(--shadow-color) / 0.08);
  --shadow-xl:
    0 4px 8px   oklch(var(--shadow-color) / 0.05),
    0 12px 24px oklch(var(--shadow-color) / 0.08),
    0 32px 64px oklch(var(--shadow-color) / 0.10);
}
```

Note the alpha stays low and roughly constant. Depth comes from geometry, not opacity.

**Dark mode inverts the model.** Light comes from above onto a dark surface, so a raised
element catches more light — it gets *lighter*, it does not get a bigger shadow.

```css
@media (prefers-color-scheme: dark) {
  :root {
    --surface-0: oklch(18% 0.01 260);   /* page */
    --surface-1: oklch(21% 0.012 260);  /* card */
    --surface-2: oklch(25% 0.014 260);  /* dropdown, modal */
    --shadow-md: 0 4px 16px oklch(0% 0 0 / 0.4);        /* depth only, no detail */
    --highlight: inset 0 1px 0 oklch(100% 0 0 / 0.06);  /* top edge catches light */
  }
}
```

That `--highlight` inset — a 1px white line on the top edge only — is the single cheapest
thing you can do to make a dark card look physical.

## Gradients

**Interpolate in a perceptual space.** sRGB interpolation between two saturated hues passes
through a desaturated grey in the middle. Every muddy gradient you have ever seen is this
bug.

```css
/* Don't */
background: linear-gradient(180deg, oklch(60% 0.18 250), oklch(60% 0.18 30));
/* Do */
background: linear-gradient(in oklch longer hue, oklch(60% 0.18 250), oklch(60% 0.18 30));
```

Use `in oklab` for two colours that are close, `in oklch` when you want the path to travel
through hue. `in oklch` with `shorter hue` is the safe default.

Rules:

- **Two stops for a surface gradient. Never three.** A third stop is a colour-grading
  decision you are not making deliberately.
- **Shift lightness, not hue.** A surface gradient should be the same colour getting
  lighter or darker — 6–14% L difference, ≤ 0.02 C difference, hue identical. Anything
  more is a *statement* gradient and there is at most one per page (`anti-patterns.md`).
- **A gradient must have light-source logic.** It gets lighter towards the light. If the
  page shadows fall downwards, surfaces are lighter at the top. A gradient that goes dark
  at the top while shadows point down is physically wrong and reads as wrong.

```css
.surface-grad {
  background: linear-gradient(
    in oklab 180deg,
    oklch(99% 0.004 260),
    oklch(96% 0.006 260)
  );
}
```

**Banding.** Any gradient spanning more than ~400px in 8-bit colour will show steps,
especially in dark blues and greys. Kill it with grain, not with more stops:

```css
.gradient-hero { position: relative; isolation: isolate; }
.gradient-hero::after {
  content: "";
  position: absolute; inset: 0; z-index: -1;
  pointer-events: none;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
```

## Radius

**Nested radii must differ, and the maths is fixed:**

```
inner radius = outer radius − padding
```

A card with `border-radius: 14px` and `padding: 16px` needs an inner element at
`max(0, 14 − 16) = 0` — square. Same card with `padding: 4px` (a search field with an
inline button) needs the inner element at `10px`. Equal radii on nested elements produce a
visible crescent of uneven space in each corner; it is the most common radius mistake.

```css
.card    { --r: 0.875rem; border-radius: var(--r); padding: 0.25rem; }
.card > * { border-radius: calc(var(--r) - 0.25rem); }
```

**Choose one radius language for the project and do not mix.**

| Radius | Reads as | Fits |
|---|---|---|
| 0–2px | Precise, technical, editorial | Dashboards, data, finance, agencies |
| 6–10px | Neutral, modern default | Most SaaS and marketing |
| 14–24px | Friendly, soft, consumer | Health, education, lifestyle, mobile-first |
| Full pill | Playful or utilitarian | Tags, avatars, single CTA styles |

Fully square is a strong choice and needs commitment — one `rounded-lg` component in a
square system destroys it. Fully pill on *containers* (not just buttons) needs even more
commitment and a lot of internal padding to not look like a capsule of squeezed text.

Buttons and inputs in the same form share a radius. A pill button next to an 8px input is
the fastest way to look assembled from two kits.

## Image treatment

- **One aspect ratio per set.** Every card image in a grid gets the same
  `aspect-ratio: 16 / 10` (or 4/3, or 1/1) with `object-fit: cover`. Mixed ratios in a row
  is the strongest amateur signal on the page.
- **`object-position` matters more than `object-fit`.** Cropping to `center` decapitates
  portraits and cuts products in half. Set it per image:
  `object-position: 50% 30%` for faces, `50% 65%` for architecture and product-on-table.
- **Apply one grade to all photos.** A mixed-quality set (client phone photos + one stock
  shot + a screenshot) looks intentional the moment the same filter is on all of it:

```css
.photo { filter: saturate(0.92) contrast(1.04) brightness(1.01); }
```

  Keep it under 10% of anything. The goal is cohesion, not an effect.
- **Uniformly mediocre beats mixed quality.** Three decent photos and one excellent one
  looks broken; four decent ones looks like a brand. If you cannot lift the whole set,
  lower the outlier.
- **Transparent-PNG logos have inconsistent internal padding.** Never place raw logo files
  in a row. Put each in a fixed box with `object-fit: contain`, cap by *optical* height
  (wordmarks ~24px, round marks ~30px), and normalise:

```css
.logo-cell { display: grid; place-items: center; height: 3rem; }
.logo-cell img { max-height: 1.75rem; width: auto; filter: grayscale(1); opacity: 0.65; }
```

- **The edge of an image is a decision.** Pick one per section and be consistent:
  full-bleed to the viewport, contained with the section radius, masked with a
  `mask-image` fade, or framed with padding and a border. Defaulting to "rounded corners,
  shadow" for every image is the `anti-patterns.md` monotony in visual form.
- Always give dimensions and use Next `<Image>` — see `../01-standards/performance.md`.

## Texture and noise

A flat colour field is the flattest thing a screen can display. A grain overlay at 2–4%
gives it a surface. It is the cheapest craft upgrade available.

```css
:root {
  --noise: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
.grain::after {
  content: ""; position: absolute; inset: 0;
  background-image: var(--noise);
  pointer-events: none;
}
```

| Context | Opacity |
|---|---|
| Large gradient (anti-banding) | **0.03–0.04** |
| Dark flat hero or footer | **0.03–0.05** |
| Light flat surface | **0.015–0.025** |
| Small card, body background | **Don't.** It reads as a compression artefact |

Above 0.06 it stops being texture and starts being dirt. Grain goes on big flat areas and
gradients only — never behind body text, never on an image, never on a component under
~400px tall. `baseFrequency` 0.7–0.9 is film-like; below 0.5 it becomes clouds.

## Icons

- **One set. Lucide by default** (`01-standards/stack.md`). Not Lucide plus Heroicons plus
  one SVG someone pasted from a brand kit.
- **One stroke width per project**, `1.5` for most UI, `2` only if the type is heavy. Never
  mix — a 2px icon next to a 1.5px icon looks like a rendering bug.
- **Never mix filled and outlined in the same context.** Filled vs outlined is a *state*
  signal (active nav item, favourited) or it is nothing.
- **Optical size ≠ bounding box.** Lucide draws inside a 24px box with ~2px of internal
  padding, so a `24px` icon is optically ~20px. Next to 16px text (cap height ~11px), a
  20px icon is enormous. Rule: **icon box = font-size, and the icon reads 1–2px smaller
  than cap height.**

```
text 14px → icon 16px
text 16px → icon 18px (or 16px for a quieter feel)
text 18px → icon 20px
```

- **Align to the cap, not the box.** Flex-centring an icon against a line of text puts it
  optically low, because the line box includes descender space:

```css
.icon-inline { display: inline-flex; align-items: center; gap: 0.5rem; }
.icon-inline svg { flex: none; transform: translateY(-0.5px); }
```

- Icons get `flex: none` always. An icon squashed by flex-shrink at a narrow width is a
  bug you will not see on your monitor.
- Decorative icons get `aria-hidden="true"`; meaningful ones get a label
  (`../01-standards/accessibility.md`).

## Numbers and data

A number is a design element. Size, weight and tracking are decisions, the same as for a
heading.

- **Tabular figures for anything in a column, a table, a timer or a counter.** Proportional
  digits make numbers jitter as they update and misalign when stacked.

```css
.tabular { font-variant-numeric: tabular-nums; }
.stat    { font-variant-numeric: tabular-nums; letter-spacing: -0.02em; }
```

- **Right-align numeric columns; left-align text columns.** Headers align with their
  content, not with each other.
- **Align on the decimal.** Fixed decimal places across the column (`12,50` / `9,00`, not
  `12,5` / `9`) does it without extra markup.
- **nl-BE formatting: `.` for thousands, `,` for decimals, `€` before the amount with a
  non-breaking space.** `€ 1.250,00`. Never hand-roll it:

```ts
new Intl.NumberFormat("nl-BE", { style: "currency", currency: "EUR" }).format(1250);
// "€ 1.250,00"
```

- **Abbreviate large display numbers, never table numbers.** A stat block shows `1,2 mln`
  or `12,4k`; a data table shows the full figure. Keep the unit visually smaller and
  lighter than the digits:

```html
<p class="text-5xl font-semibold tracking-tight tabular-nums">
  12,4<span class="text-2xl font-normal text-muted">k</span>
</p>
```

- Big numbers need **negative tracking** (`-0.02em` to `-0.03em`) — the same rule as large
  headings in `typography.md`.

## Interactive feel

- **Never `transition: all`.** It animates properties you did not intend (including layout
  ones), and it defeats the compositor. Name what changes:

```css
.btn {
  transition-property: background-color, border-color, color, box-shadow, transform;
  transition-duration: 160ms;
  transition-timing-function: var(--ease-out);
}
```

- **A hover state that changes two or more properties reads as considered.** One property
  reads as a default. Background *and* border. Or border *and* shadow *and* a 2px lift.
  Not `scale(1.05)` — see `motion.md`.
- **Implement `:active`.** Almost nobody does, and it is the difference between a button
  that feels like a button and a rectangle that navigates. The press is fast and small:

```css
.btn:active { transform: translateY(1px) scale(0.99); transition-duration: 60ms; }
```

- **Feedback within 100ms or show state.** Anything slower than 100ms without a visual
  response feels broken. Set `aria-busy`, swap to a spinner, or disable — and reserve the
  width so the button does not resize when the label changes to "Bezig…".
- **Cursors are semantics.** `pointer` on links and buttons only — never on non-interactive
  cards, never `pointer` on a disabled control (use `not-allowed`). `text` stays on text.
  `grab`/`grabbing` on draggables. A `cursor: pointer` on plain copy makes users click it.
- Hover effects go behind `@media (hover: hover)` so touch devices do not get stuck in a
  hover state after a tap.
- Focus-visible ring is separate from hover and always present
  (`../01-standards/accessibility.md`).

## Text rendering

```css
h1, h2, h3 { text-wrap: balance; }   /* ≤ 4 lines: evens out the line lengths */
p, li      { text-wrap: pretty; }    /* prevents single-word last lines */
```

`balance` is for headings and short blocks only — the browser caps it around four lines and
it costs layout work on long text. `pretty` is the one for body copy.

- **Widows.** `text-wrap: pretty` handles most. For a heading that must not break in a
  specific place, use `&nbsp;` between the last two words. Never a `<br>` — it breaks at
  every viewport.
- **Dutch compounds need hyphenation in narrow columns.** `verzekeringsmaatschappij` in a
  280px card will either overflow or leave a river. Set the language on `<html>` and turn
  it on where columns are narrow:

```css
html { lang: nl; } /* actually: <html lang="nl"> */
.card p, .col-narrow { hyphens: auto; hyphenate-limit-chars: 8 4 4; }
```

  Do not hyphenate headings, and do not hyphenate anything wider than ~45ch.
- **Font features worth enabling:**

```css
body {
  font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
  font-variant-numeric: proportional-nums; /* tabular only where numbers align */
}
.small-caps { font-variant-caps: all-small-caps; letter-spacing: 0.04em; }
```

  `calt` (contextual alternates) fixes awkward letter pairs; leave it on. Turn on `ss01`
  only after checking what it actually does in that specific typeface.
- **`-webkit-font-smoothing: antialiased` is a deliberate choice, not a reset.** It makes
  text visibly lighter on macOS. It helps for light text on dark backgrounds; it makes
  small dark-on-light body text too thin. Apply it where it earns its place:

```css
.on-dark { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
```

- `text-rendering: optimizeLegibility` is not a fix for anything and can break rendering on
  long pages. Leave it off.

## The final 5%

Thirty seconds each. Run all of them before you call anything done.

1. Zoom to 200% and look at every border — any that went blurry needs the hairline fix.
2. Toggle dark mode: are borders now white-alpha, are surfaces lighter with elevation, is
   any shadow doing nothing?
3. Check one nested rounded element: is `inner = outer − padding` actually true?
4. Look at every icon-next-to-text pair with a ruler: is the icon optically 1–2px under
   cap height, and is it 0.5px high?
5. Screenshot a card row and check the images: same aspect ratio, same grade, sensible
   crop on every one?
6. Tab through the whole page: every interactive element has a visible ring, and nothing is
   reachable that shouldn't be.
7. Press and hold a button: does anything happen? If not, `:active` is missing.
8. Resize to 320px wide: does any number, price or long Dutch word overflow?
9. Read every heading: any widow, any line break landing on a preposition?
10. Look at the largest gradient at full-screen brightness: banding?
11. Compare the first and last section's vertical padding — do they match the scale, or did
    one get nudged?
12. Squint at the page: does the visual hierarchy survive, or does everything weigh the same?
13. Check every shadow direction on the page: all `x: 0`, all positive `y`?
14. Hover every clickable thing: does anything change only one property?
15. Load it on a real phone, outdoors if you can. Contrast and shadow subtlety both die in
    daylight.

If a page passes all fifteen and still feels off, the problem is not craft — it is
hierarchy or content. Go back to `principles.md`.

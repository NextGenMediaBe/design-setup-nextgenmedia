# Spacing and layout

## The scale

4px base. Use these steps and no others — arbitrary values (`mt-[37px]`) are a smell that
the layout is being nudged into place instead of structured.

```
0.5 → 2px    within an icon+label pair
1   → 4px    tight inline gaps
2   → 8px    label to input
3   → 12px   icon to text in a button
4   → 16px   paragraph spacing, card padding (mobile)
6   → 24px   card padding, gap between related cards
8   → 32px   gap between unrelated blocks
12  → 48px   section internal separation
16  → 64px   section padding (mobile)
24  → 96px   section padding (desktop) — the floor
32  → 128px  generous section padding
40  → 160px  hero / statement section
```

Above 8 (32px) the steps get coarse on purpose. Big gaps do not need fine control.

## Proximity is the whole point

The single most common layout failure is *uniform* spacing. If every gap is 24px, nothing
is grouped and the eye has no structure to follow.

```
heading           ─┐
                   │  8–12px   (tight: they belong together)
subheading        ─┘
                      24–32px  (loose: new group)
body paragraph
                      48px     (looser: new subsection)
next heading
```

Rule: **the gap inside a group must be visibly smaller than the gap around the group.**
Roughly a 1:2 ratio. If you cannot see the difference, increase the outer gap.

## Containers

```css
--container-sm:  40rem;   /* 640  — text-only sections, articles */
--container-md:  48rem;   /* 768  — narrow content */
--container-lg:  64rem;   /* 1024 — standard content */
--container-xl:  80rem;   /* 1280 — wide grids, dashboards */
--container-2xl: 90rem;   /* 1440 — full-bleed media */

--gutter: 1.25rem;        /* 20px mobile */
--gutter-md: 2rem;        /* 32px tablet+ */
```

**Vary the container by content type.** A testimonial section should be narrower than a
feature grid. Everything at `max-w-7xl` is the monotony described in
`02-design-system/anti-patterns.md`.

## Section rhythm

```html
<section class="py-24 md:py-32">
  <div class="mx-auto max-w-5xl px-5 md:px-8">
    ...
  </div>
</section>
```

- Desktop section padding: **96–160px**. Mobile: 64–96px.
- Consecutive sections with the same background should not both have full padding —
  merge them or change the background.
- A dark full-bleed section between two light ones creates a beat. Use it once per page,
  not three times.

## Grid

Twelve columns on desktop, but do not use all twelve symmetrically every time.

| Split | Use for |
|---|---|
| 12 | Full-bleed hero, wide media |
| 7 / 5 | Text + image. The asymmetry is what makes it look designed |
| 8 / 4 | Content + sidebar |
| 6 / 6 | Genuine equals only — comparison, before/after |
| 4 / 4 / 4 | Three cards. Use when there are exactly three |

Gaps: `gap-6` (24px) inside a card grid, `gap-12`/`gap-16` between major columns.

## Breakpoints

```
sm  640    large phone
md  768    tablet portrait — the layout usually changes here
lg  1024   tablet landscape / small laptop
xl  1280   desktop
2xl 1536   large desktop — mostly just wider gutters
```

Design mobile-first, but **design mobile deliberately.** A three-column grid that becomes
a stack is not a mobile design; it is a desktop design that survived. Decide per section:
does it stack, scroll horizontally, collapse into an accordion, or drop entirely?

## Vertical rhythm and alignment

- Align to a baseline where possible — headings, images and cards in a row should share a
  top edge, not float independently.
- **Optical over mathematical.** A circular logo next to text is centered by eye, not by
  `align-items: center`. Icons inside buttons often need 1px of adjustment.
- Cards in a row are equal height (`items-stretch`), with the CTA pinned to the bottom
  (`mt-auto`), so the buttons align across the row.

## Radius and elevation

```css
--radius-sm:   0.375rem;  /* badges, small inputs */
--radius-md:   0.625rem;  /* buttons, inputs */
--radius-lg:   0.875rem;  /* cards */
--radius-xl:   1.25rem;   /* panels, modals */
--radius-full: 9999px;    /* pills, avatars */
```

**Nested radii must differ.** A button inside a card with the same radius as the card
looks wrong. Inner radius ≈ outer radius − padding.

```css
--shadow-sm: 0 1px 2px  oklch(20% 0.02 260 / 0.05);
--shadow-md: 0 4px 12px oklch(20% 0.02 260 / 0.08);
--shadow-lg: 0 12px 32px oklch(20% 0.02 260 / 0.10);
```

Shadows are **tinted with the neutral hue**, never pure black, and stay subtle. A card
that needs a heavy shadow to be visible needs a border instead.

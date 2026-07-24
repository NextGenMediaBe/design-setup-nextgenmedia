# Design principles

Seven rules. They are what separate a page that looks designed from one that looks
assembled. Apply them in order — each assumes the ones above it.

## 1. Hierarchy is contrast, not size

A heading is not important because it is 48px. It is important because everything around
it is quieter. Before enlarging something, try shrinking its neighbours, greying them,
or removing them.

Each screen has **one** primary element. If two things compete, the viewer picks neither.

Tools for hierarchy, roughly in order of strength: position → size → weight → color →
whitespace → decoration. Reach for the earlier ones first. If you find yourself adding
a border, a badge and a shadow to make something stand out, the layout underneath is
wrong.

## 2. Space is the design

The most common failure in generated layouts is uniform, insufficient spacing. Real
designs breathe, and they breathe *unevenly*.

- **Related things sit close, unrelated things sit far apart.** The gap between a heading
  and its paragraph must be visibly smaller than the gap between that paragraph and the
  next heading. If both are `mb-4`, the grouping is invisible.
- **Section padding is large.** `py-24` on desktop is a floor for a marketing section, not
  a ceiling. `py-32` and `py-40` are normal.
- **Whitespace is not wasted space.** A section with one sentence and a lot of air reads
  as confident. The same sentence squeezed between two dense blocks reads as filler.

See `02-design-system/spacing-layout.md` for the scale.

## 3. Constrain the palette hard

One neutral ramp, one accent, and that is nearly always enough. Color earns attention —
if six things are colored, none of them are emphasized.

The neutral ramp does 90% of the work. The accent appears on the primary action, active
states, and perhaps one graphic accent. Not on every heading. Not on every icon.

See `02-design-system/color.md`.

## 4. Type carries the personality

Font choice communicates more than layout does. Two typefaces maximum: one with character
for display, one that disappears for body text. A page set entirely in Inter is legible
and says nothing.

Body text: 16–18px, line-height 1.6–1.75, measure of 60–75 characters. Headings:
line-height 1.05–1.2, negative letter-spacing on large sizes. These are not preferences,
they are what makes text look professionally set.

See `02-design-system/typography.md`.

## 5. Break the grid on purpose

A page of identical full-width, centered, three-column sections is monotonous regardless
of how well each section is built. Rhythm comes from variation:

- alternate wide sections with narrow, text-only ones
- offset an image so it bleeds past the container
- let one section go full-bleed dark between light ones
- use an asymmetric split (7/5, not 6/6) where the content is asymmetric

Vary **one axis at a time**. Every section being different is as monotonous as every
section being the same.

## 6. Detail at the edges

Quality is read in small things: the radius on a card matching the radius on its button,
a border that is `1px` of a 6%-alpha neutral rather than `#e5e5e5`, a hover that moves
2px instead of 8px, an icon optically centered rather than mathematically centered.

Consistency in these details is more valuable than any single flourish.

## 7. Design the empty, loading and error states

Most generated UIs only design the happy path with three items in the list. A real product
has zero items, a slow network, and failures. A designed empty state is often the highest
leverage screen in an app — it is the first thing a new user sees.

---

## The test

Before calling a page done, ask:

1. Can I name the one thing this screen wants me to do?
2. If I squint until the text blurs, is there still a clear structure?
3. Is there a section I could delete without losing anything? (Delete it.)
4. Does it look like something a person made a decision about, or like a template
   with content poured in?

Then run `07-workflows/quality-review.md`.

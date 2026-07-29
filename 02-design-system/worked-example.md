# Worked example — a data-dense internal app

One system, decided end to end. Every colour, radius, shadow, transition and scrollbar in
it was chosen; nothing fell through to a framework default. It shipped.

It is here so you can see the *shape* of a finished decision set at a specificity the
abstract docs cannot reach. Do not copy the values — yellow is not your accent and Manrope
is not your face. Copy the fact that there is an answer for every question below.

**Direction:** light, clean, one brand accent. A working surface for people who look at it
for six hours a day, not a landing page. Everything is functional. Animation exists only to
confirm that something happened.

## Colour

| Role | Value | Note |
|---|---|---|
| Accent | `#fff848` | Bright yellow. Text on it is `#000000` |
| Page background | `#ffffff` | |
| Body text | `#0a0a0a` | Near-black, deliberately |
| Card border | `gray-200 (#e5e7eb)` at ~80% | `border-gray-200/80` |
| Secondary text | `gray-500` / `gray-600` | |
| Placeholder | `gray-400` | |

**Why near-black and not `#000`.** Pure black against pure white is the highest contrast a
screen can produce, and at 14px body size it produces halation — the white bleeds into the
letterforms and the text vibrates. `#0a0a0a` is a 4% step off black: still 20:1 against
white, visibly calmer over a long session. The same logic runs the other way on dark
surfaces (`craft.md`, shadow physics). The rule generalises: **no pure values at either
end.**

**Where the accent appears.** Primary button. Active sidebar item, at 20% opacity. Focus
ring. That is the entire list. It is never a fill for a header bar, a card, a table stripe
or a hero. A 100%-chroma yellow across a 400px region is unreadable and exhausting; the
same yellow on a 90px button is a landmark. Sparingly is not modesty, it is what makes it
findable.

### Status colours are always a pair

Never a single class. Every status is `bg-<colour>-100` **plus** `text-<colour>-700`.

| Status | Classes |
|---|---|
| Success / active | `bg-green-100 text-green-700` |
| Info | `bg-blue-100 text-blue-700` |
| Warning | `bg-amber-100 text-amber-700` |
| Error | `bg-red-100 text-red-700` |
| Neutral / inactive | `bg-gray-200 text-gray-700` |

Two reasons, both load-bearing. First, contrast: a `-100` tint with `-700` text clears
WCAG AA at small sizes in every hue, which a hand-picked pair will not
(`../01-standards/accessibility.md`). Second, it kills the most common badge failure —
grey text on a tinted fill. That happens when someone sets the background per status and
lets the text colour default to the table's `text-gray-500`. The result reads as disabled,
in five different colours. Foreground and background are one decision, made together, or
the component is wrong.

## Typography

**Manrope**, self-hosted via `next/font`, weights 400 / 500 / 600 / 700 / 800.

```css
body {
  font-feature-settings: 'ss01', 'kern';
  text-rendering: optimizeLegibility;
  /* + Tailwind `antialiased` */
}
```

| Element | Treatment |
|---|---|
| Headings | `font-semibold tracking-tight` |
| Body | 400, `antialiased` |
| Numbers, tables | `font-variant-numeric: tabular-nums` |

**Tabular numerals are not optional here.** In proportional figures a `1` is narrower than
a `0`, so a column of amounts has a ragged left edge inside each cell, and a live counter
jitters horizontally every time it ticks. In an app whose entire job is stacked figures,
that single line is the difference between a table and a spreadsheet screenshot. Turn it on
for every table, stat block, timer, ID and monospaced-looking field. See `craft.md`,
"Numbers and data".

Manrope was chosen partly by elimination: Inter, Geist, Roboto and Plus Jakarta are the
faces every dashboard already uses, which means the interface starts with no voice at all.
See `typography.md` for the full exclusion list.

## Shape and space

```
--radius-sm: 0.375rem   /* badges, small chips */
--radius-md: 0.5rem
--radius-lg: 0.625rem   /* buttons, inputs */
cards:       1rem       /* rounded-2xl */
```

| Element | Spacing |
|---|---|
| Buttons, inputs | `px-4 py-2`, `rounded-lg`, `text-sm` |
| Cards | `p-5 md:p-6` |

Card radius (1rem) against button radius (0.625rem) inside a `p-5` card: the inner element
is far enough from the corner that the nested-radius formula in `craft.md` does not bind.
Two radii, one language.

## Elevation

Two shadows. Not a scale of six — a working surface has cards and it has hover, and there
is no third state to express.

```css
--shadow-rest:  0 1px 2px rgba(15,23,42,.04), 0 1px 3px rgba(15,23,42,.03);
--shadow-hover: 0 4px 16px rgba(15,23,42,.06);
```

Both are tinted toward slate (`15,23,42`) rather than pure black, and both stay under 6%
alpha — the rule from `craft.md`. On a white page a black shadow reads as grey dirt; a
slate-tinted one reads as shade. Depth comes from the geometry changing (1px → 4px offset,
3px → 16px blur), not from the opacity climbing.

## Component recipes

Exact classes as shipped.

**Primary button**

```
inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#fff848] text-black
font-semibold rounded-lg shadow-sm hover:bg-[#f5ee30] active:translate-y-px
focus-visible:ring-2 focus-visible:ring-[#fff848]/60 transition-all duration-150 text-sm
```

> `transition-all` is in the real system and it should not be. It is banned by
> `anti-patterns.md` §5.3: it animates properties you did not intend, including layout
> ones, and defeats the compositor. Narrow it to what actually changes —
> `transition-[background-color,box-shadow,transform]`. Shown here unfixed because a worked
> example that quietly cleans itself up teaches nothing.

**Secondary button** — same geometry as primary, different skin.

```
bg-white text-gray-800 font-medium border border-gray-200
hover:bg-gray-50 hover:border-gray-300
```

Note it changes *two* properties on hover (background and border). One property reads as a
default.

**Danger button**

```
bg-red-50 text-red-700 border border-red-200 hover:bg-red-100
```

Tinted, not solid red. A solid red destructive button in a dense table is louder than the
data.

**Card**

```
bg-white border border-gray-200/80 rounded-2xl p-5 md:p-6
+ box-shadow: var(--shadow-rest)
```

Border *and* shadow: the card sits on white, so the shadow alone would not separate it.

**Input**

```
w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white
placeholder:text-gray-400 focus:ring-2 focus:ring-[#fff848]/50 focus:border-[#fff848]
```

**Status badge** — plus the `bg`/`text` pair from the table above.

```
inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium
ring-1 ring-inset ring-black/[0.04]
```

That 4% inset ring is the detail: it gives a tinted pill a defined edge without a visible
border line, on any of the five status colours.

**Table header cell**

```
px-4 py-3 text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider
```

**Sidebar item**

```
flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600
hover:text-black hover:bg-gray-100
```

Active: `text-black bg-[#fff848]/20` — the only place the accent appears as a fill, at 20%.

## Motion

| Moment | Definition |
|---|---|
| fade-in | opacity 0 → 1, `0.2s ease-out` |
| slide-in | opacity 0 → 1 + `translateY(4px)` → 0, `0.2s ease-out` |
| Button press | `active:scale-[0.98]` or `active:translate-y-px` |
| Primary hover glow | `box-shadow: 0 2px 12px rgba(255,248,72,.5)` |
| Focus | always a visible `ring-2`, accent or `gray-200` |

4px of travel, not 24. In an app that redraws a table on every filter change, a large
entrance animation becomes a delay. Every entry above is feedback for something the user
did.

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

Mandatory, in every project, no exceptions. See `motion.md` and
`../01-standards/accessibility.md`.

## The details that make it read as finished

None of these are visible individually. Together they are the difference between shipped
and generated.

**Scrollbar.** A dense app is mostly scroll containers. The default OS scrollbar is 15px of
grey chrome inside every one of them.

```css
::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 999px;
}
::-webkit-scrollbar-thumb:hover { background: #9ca3af; }

/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #d1d5db transparent;
}
```

**Icons.** Lucide, one set. Mostly `h-4 w-4` against `text-sm`. Coloured `text-gray-400`
next to headings and labels — **never the accent colour**. An accent-coloured icon next to
every section title spends the accent twelve times per screen and it stops meaning
"primary action".

**Overflow guards.** Two rules that prevent the single ugliest bug in a data app: one wide
table pushing the whole page sideways on mobile.

```css
img, svg, video, canvas { max-width: 100%; }
html, body { overflow-x: hidden; }
```

**Empty states.** `text-center py-12 text-gray-400`, with a real sentence in it. Every list,
table and panel has one, designed, before the feature ships — not a blank rectangle the
first user discovers.

## What to take from this

The values are disposable. These are not:

- **One accent, committed, used sparingly.** Three places, listed. Everything else is
  neutral. An accent used everywhere is a background colour.
- **Near-black and near-white, never pure.** `#0a0a0a` on `#ffffff` at the text end;
  low-alpha slate at the shadow end.
- **Status colours are a foreground/background pair, always.** One decision, never two.
- **Tabular numerals wherever figures stack.** One line of CSS, and a table stops looking
  broken.
- **Two shadows, not six.** Name the states that actually exist, then stop.
- **Every value above is written down somewhere** — in `globals.css`, in `DESIGN.md`, in
  a component recipe. That is the only reason a system stays consistent past the third
  screen. Consistency is not discipline; it is having somewhere to look it up.

Then transcribe your own version into `DESIGN-template.md` and `tokens/globals.css` before
you build a component. That order is the whole point.

# Typography

## Two typefaces

One for display (headings, the hero, numbers), one for text (body, UI, labels). A third
is a mistake unless it is a monospace for code.

The display face carries the personality. The text face should be invisible.

### Pairings that work

| Display | Text | Reads as |
|---|---|---|
| Instrument Serif | Inter | Editorial, premium, calm |
| Fraunces | Söhne / Inter | Warm, crafted, human |
| Satoshi | Inter | Modern, neutral, safe |
| General Sans | General Sans | Clean, single-family discipline |
| Bricolage Grotesque | Inter | Expressive, contemporary |
| Playfair Display | Source Sans 3 | Classic, luxury, hospitality |
| Space Grotesk | IBM Plex Sans | Technical, product-led |
| GT Sectra / Newsreader | Geist | Considered, editorial |

If the client is a law firm, a restaurant or a clinic, a serif display face is almost
always the stronger choice — and almost never what gets picked by default.

### Loading

Self-host with `next/font` (or `@font-face` + `font-display: swap`). No render-blocking
`<link>` to Google Fonts. Subset to `latin` unless the site is multilingual. Load only
the weights you use — typically 400 and 500 for text, 400/600 for display.

## The scale

A modular scale of **1.25** (major third) for marketing, **1.2** for dense app UI.
Clamp the display sizes so they are fluid without a media query.

```css
--text-xs:   0.75rem;   /* 12 — legal, captions. Sparingly. */
--text-sm:   0.875rem;  /* 14 — UI labels, table cells */
--text-base: 1rem;      /* 16 — body minimum */
--text-lg:   1.125rem;  /* 18 — marketing body, lead-ins */
--text-xl:   1.25rem;   /* 20 — subheads */
--text-2xl:  1.5rem;    /* 24 — h4 */
--text-3xl:  1.875rem;  /* 30 — h3 */
--text-4xl:  clamp(2rem, 1.6rem + 2vw, 2.75rem);      /* h2 */
--text-5xl:  clamp(2.5rem, 1.8rem + 3.5vw, 4rem);     /* h1 */
--text-6xl:  clamp(3rem, 1.8rem + 6vw, 5.5rem);       /* hero display */
```

## Line height and tracking

These two settings do more for perceived quality than the font choice does.

| Size | line-height | letter-spacing |
|---|---|---|
| Hero display (48px+) | 1.0 – 1.1 | −0.03em to −0.02em |
| h1 / h2 (30–48px) | 1.1 – 1.2 | −0.02em |
| h3 / h4 (20–30px) | 1.25 – 1.35 | −0.01em |
| Body (16–18px) | **1.6 – 1.75** | 0 |
| Small / captions (12–14px) | 1.5 | +0.01em |
| Uppercase labels | 1.2 | **+0.06em to +0.1em** |

Rules of thumb: **as size goes up, line-height and tracking come down.** Uppercase always
needs positive tracking. Body text below 1.6 line-height looks cramped at any size.

## Measure

- Body text: **60–75 characters** (`max-w-[65ch]`).
- Lead paragraphs under a hero: 45–60ch.
- Never let a paragraph run the full width of a 1200px container.

## Weight

Two or three weights per family. Regular (400) for body, medium (500) for UI emphasis,
semibold/bold (600/700) for headings. Skip 800/900 — heavy weights at large sizes look
blunt, and tightening the tracking achieves more.

**Do not use `font-bold` to create hierarchy inside body copy.** Use it once, for the
thing that matters.

## Practical defaults

```css
body {
  font-family: var(--font-text);
  font-size: var(--text-lg);       /* 18px on marketing sites */
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
  line-height: 1.15;
  letter-spacing: -0.02em;
  text-wrap: balance;              /* stops orphan words in headings */
}

p { text-wrap: pretty; }           /* stops single-word last lines */
```

`text-wrap: balance` on headings and `pretty` on paragraphs are two lines of CSS that
visibly improve every page. Use them.

## Numbers

For tables, pricing and stats, enable tabular figures so digits align:

```css
font-variant-numeric: tabular-nums;
```

For display numbers (large stats), `lining-nums` and tight tracking.

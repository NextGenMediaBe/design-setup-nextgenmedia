# Color

## The structure

Every project gets the same three groups. Nothing else is defined at the brand layer.

1. **Neutrals** — a 12-step ramp. Does the bulk of the work: text, surfaces, borders.
2. **Accent** — one hue, 5 steps. Primary actions, active states, focus rings.
3. **Semantic** — success / warning / danger / info. Only used to signal state.

Semantic colors are never brand colors, and the accent is never used to signal an error.

## Building a palette from scratch

When there is no brand palette, generate one. Work in **OKLCH** — it keeps perceived
lightness even across hues, which HSL does not.

### Neutrals

Do not use pure grey. Tint the ramp toward the accent hue (or its complement) by
2–5% chroma. This is the single cheapest change that makes a palette look considered.

```
--n-50   oklch(98.5%  0.004  260)   page background (warm/cool off-white, never #fff)
--n-100  oklch(96.5%  0.005  260)   subtle surface
--n-200  oklch(92%    0.006  260)   borders, dividers
--n-300  oklch(86%    0.008  260)   disabled borders
--n-400  oklch(70%    0.010  260)   placeholder text
--n-500  oklch(58%    0.012  260)   muted text
--n-600  oklch(48%    0.014  260)   secondary text
--n-700  oklch(38%    0.014  260)   strong secondary
--n-800  oklch(26%    0.014  260)   headings on light
--n-900  oklch(18%    0.014  260)   body text
--n-950  oklch(12%    0.014  260)   near-black surfaces
```

### Accent

Pick a hue that is not 220–250 (that band is every SaaS site). Then build five steps:

```
--a-100  oklch(95%  0.04  H)   tinted background
--a-300  oklch(80%  0.12  H)   hover on tinted
--a-500  oklch(60%  0.19  H)   the accent — buttons, links
--a-600  oklch(53%  0.19  H)   hover
--a-800  oklch(35%  0.14  H)   text on tinted backgrounds
```

`--a-500` must reach **4.5:1 against white** if white text sits on it. If it does not,
drop lightness rather than desaturating.

## Applying it

Colors are consumed through **semantic tokens**, never directly. Components reference
intent, not value:

```css
--background:        var(--n-50);
--foreground:        var(--n-900);
--surface:           white;
--surface-muted:     var(--n-100);
--border:            var(--n-200);
--text-muted:        var(--n-500);
--primary:           var(--a-500);
--primary-hover:     var(--a-600);
--primary-foreground: white;
--ring:              var(--a-500);
```

This is what makes dark mode a token swap instead of a rewrite, and what lets one client
palette be replaced without touching a component.

See `02-design-system/tokens/globals.css` for the full file.

## Rules

1. **Text contrast**: 4.5:1 for body, 3:1 for text ≥24px or ≥19px bold. Verify, do not
   estimate.
2. **Never rely on color alone** to convey information — pair with an icon, label or
   pattern.
3. **Borders are alpha, not solid.** `oklch(0% 0 0 / 8%)` adapts to whatever is behind it;
   `#e5e7eb` does not.
4. **Shadows are tinted.** A shadow of `rgba(0,0,0,0.1)` on a warm background looks dirty.
   Use the neutral hue at low alpha.
5. **Dark mode is not inverted light mode.** Surfaces get *lighter* as they come forward
   (elevation = lightness), borders get brighter, and accent colors usually need
   +5–10% lightness to stay vivid.
6. **Backgrounds are off-white / off-black.** `#ffffff` and `#000000` are harsh and read
   as unstyled.

## Quick sanity check

- Print the page in greyscale mentally. Is the hierarchy still legible? If it collapses,
  you are using color to do a job that weight and size should do.
- Count the hues on screen. More than two plus semantics means the palette leaked.

# Tokens

Three layers, one direction of reference. That is the whole doctrine.

```
Layer 1  primitives   raw values          --n-700, --a-500, --step-6, --dur-220
   ↓        referenced only by layer 2
Layer 2  semantic     roles               --color-action, --space-section-m, --radius-card
   ↓        referenced by layer 3 and by components
Layer 3  component    per-component knobs --button-height, --card-padding
```

## Layer 1 — primitives

Raw values with no meaning attached. A ramp of neutrals, a ramp of the accent, the spacing
steps, the raw durations, the raw radii. Names describe *what the value is*, never *what it
is for*: `--n-700` is a neutral at 700, not "the body text colour".

**No component ever references a primitive.** Not once, not "just for this one case". A
`color: var(--n-700)` in a component is a bug and should be treated like a type error.

## Layer 2 — semantic

Roles. This is the only layer a component may read.

```
--color-action        --color-surface         --space-section-m
--color-action-hover  --color-surface-raised  --space-card
--color-text-body     --color-border          --radius-card
--color-text-muted    --color-border-strong   --radius-control
--color-danger        --color-ring            --ease-brand
```

Each one resolves to a primitive and to nothing else. `--color-action: var(--a-500)`. The
value is a pointer; the name is the contract.

The test for a good semantic name: it survives a redesign. `--color-action` survives the
accent going from orange to green. `--color-orange-button` does not.

## Layer 3 — component tokens

Per-component knobs that resolve from layer 2. They exist so a component has a single place
to tune, and so variants are a value change rather than a new rule set.

```css
--button-height-md: 2.75rem;
--button-padding-x: 1.25rem;
--button-radius:    var(--radius-control);
--card-padding:     var(--space-card);
--card-radius:      var(--radius-card);
--input-height:     var(--button-height-md);   /* buttons and inputs match, by definition */
```

Layer 3 is optional. Add a component token when a value is used more than twice inside one
component, or when two components must stay in lockstep (the `--input-height` line above is
the reason this layer earns its place).

## The rule

> A component that references a layer-1 primitive is a bug.

Enforce it however you can: a grep in CI for `var(--n-`, `var(--a-`, `var(--step-` inside
`components/`, a lint rule, or a review checklist item. It is the single rule that makes the
rest work.

## Why the layering matters

A palette swap is the most common late-stage request there is. The client's brand shifts,
the accent tests badly, a second brand gets added, dark mode arrives.

With layering, that request is: edit the ten primitive values at the top of one file. Every
button, border, focus ring, shadow tint and hover state follows, because none of them ever
named a colour — they named a role. Ten minutes, one diff, no visual regressions except the
intended one.

Without layering, `#2F5FE0` is written in 140 places, some of them as `#2f5fe0`, some as
`rgb(47,95,224)`, some as a Tailwind class, and about a dozen of them are *not* the brand
colour but happened to look the same. That is a rewrite, and it is never fully correct
afterwards.

The same argument applies to spacing, radius and easing. One `--radius-card` change turns a
soft consumer product into a precise editorial one. One `--ease-brand` change is the
difference between crisp and floaty across the entire site.

## The two files in this folder

| File | What it is |
|---|---|
| `globals.css` | A **filled-in reference implementation**. A complete, shippable token set with real values, using Tailwind **v4** (`@theme inline`). Read it to see what a finished layer looks like. Do not copy it into a project unmodified — its accent, neutral hue and type choices are one specific direction |
| `tokens.css.template` | The **empty skeleton**. Copy this per project, fill it in, and record where each brand value came from in the `/* HERKOMST: */` slots. Framework-agnostic: plain custom properties, with the Tailwind bridge marked optional at the bottom |

Workflow: copy `tokens.css.template` into the project as `app/globals.css`, fill layer 1
from the decisions in the project's `DESIGN.md`, leave layers 2 and 3 alone unless the
project genuinely needs a new role, then build.

`globals.css` is the answer to "what should this look like when it is done". The template is
the thing you actually start from.

## HERKOMST

Every brand colour in the template has a `/* HERKOMST: ... */` slot next to it. Fill it in.

```css
--a-500: oklch(58% 0.17 28);  /* HERKOMST: logo PDF, Pantone 172 C, geconverteerd 2026-07 */
--n-900: oklch(19% 0.014 40); /* HERKOMST: afgeleid van --a-500, chroma 0.014 */
```

Six months later somebody will ask why the accent is that specific orange. Without this
line the answer is "no idea", and the colour gets changed by guess. With it, the answer is
in the file that defines the colour, which is the only place it will still be readable.

## Tailwind v3 versus v4

`tailwind.config.template.ts` in this folder is **Tailwind v3** config style. It replaces
`theme.colors`, `theme.borderRadius`, `theme.fontFamily`, `theme.boxShadow` and
`theme.transitionTimingFunction` outright, so `bg-indigo-600` does not exist and the build
fails if anyone writes it. Read the comment block at the top of that file before changing
anything in it.

**Tailwind v4 has no config file.** The equivalent lives in CSS, in an `@theme` block, and
the mechanism is the same: `@theme` *replaces* a namespace when you clear it first.

```css
@import "tailwindcss";

@theme {
  /* Wipe the entire default palette. This is the v4 equivalent of replacing
     theme.colors instead of extending it. bg-indigo-600 now fails to compile. */
  --color-*: initial;

  --color-transparent: transparent;
  --color-current: currentColor;
  --color-white: #fff;
  --color-black: #000;

  --color-surface: var(--surface);
  --color-action:  var(--action);
  --color-body:    var(--text-body);
  /* ... one entry per semantic token ... */

  --radius-*: initial;
  --radius-control: var(--radius-control);
  --radius-card:    var(--radius-card);

  --ease-*: initial;
  --ease-brand: var(--ease-brand);
}
```

- `--namespace-*: initial` is the reset. Without it, `@theme` behaves like v3's `extend` and
  the default palette stays reachable — which defeats the whole point.
- `@theme inline` (as used in `globals.css`) emits the *referenced* value rather than a
  `var()` chain. Use `inline` when the token points at another custom property that changes
  per mode, so dark-mode overrides actually take effect in the utility.
- Namespaces worth clearing: `--color-*`, `--radius-*`, `--font-*`, `--shadow-*`, `--ease-*`,
  and `--breakpoint-*` if the project sets its own.

Pick one. A project on v4 uses `globals.css`-style `@theme` and has no
`tailwind.config.ts` at all. A project on v3 uses the config template and keeps the raw
custom properties in a plain CSS file that the config points at.

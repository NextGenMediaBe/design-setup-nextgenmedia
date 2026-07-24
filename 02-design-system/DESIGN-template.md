# DESIGN.md — per-project template

Copy this into the root of every new project as `DESIGN.md`, fill it in during kickoff,
and reference it from that project's `CLAUDE.md`. It is the contract: once it exists,
every colour, size and radius in the project must come from it, and anything that does not
is a bug.

Two parts, both load-bearing:

- **Frontmatter** — machine-readable tokens. Mirrors the project's `globals.css` exactly.
  If a value changes in one, change it in the other.
- **Prose** — the *named rules*. This is the part that actually steers an agent. A rule
  with a name ("The Hairline First Rule") gets followed; a bullet point in a wall of text
  does not.

> Format adapted from [Impeccable](https://github.com/pbakaus/impeccable) by Paul Bakaus
> (Apache-2.0). The named-rule convention is the idea worth stealing.

---

```markdown
---
name: <Project name>
description: <One sentence. The visual direction in plain words — what it should feel
  like, not a list of colours.>

# Mirrors app/globals.css. That file is the source of truth.
colors:
  # Brand
  primary: "oklch(60% 0.19 25)"
  primary-hover: "oklch(53% 0.19 25)"
  primary-subtle: "oklch(95% 0.04 25)"

  # Surfaces
  background: "oklch(98.5% 0.005 40)"
  surface: "oklch(100% 0 0)"
  surface-muted: "oklch(96.5% 0.007 40)"

  # Text
  text-heading: "oklch(18% 0.014 40)"
  text-body: "oklch(26% 0.015 40)"
  text-muted: "oklch(58% 0.014 40)"

  # Lines
  border: "oklch(18% 0.014 40 / 10%)"

  # State — never brand colours
  success: "oklch(62% 0.16 150)"
  warning: "oklch(75% 0.15 80)"
  danger:  "oklch(58% 0.20 25)"

typography:
  display:
    fontFamily: "<Display face>, Georgia, serif"
    fontSize: "clamp(2.5rem, 1.8rem + 3.5vw, 4rem)"
    fontWeight: 400
    letterSpacing: "-0.02em"
    lineHeight: 1.1
  heading:
    fontFamily: "<Display face>, Georgia, serif"
    fontSize: "clamp(2rem, 1.6rem + 2vw, 2.75rem)"
    fontWeight: 500
    letterSpacing: "-0.02em"
    lineHeight: 1.15
  body:
    fontFamily: "<Text face>, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "<Text face>, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.08em"
    textTransform: "uppercase"

radii:
  sm: "0.375rem"
  md: "0.625rem"
  lg: "0.875rem"
  xl: "1.25rem"
  pill: "999px"

spacing:
  scale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160]
  sectionY: { mobile: "4rem", desktop: "6rem" }
  gutter: { mobile: "1.25rem", desktop: "2rem" }

motion:
  ease: "cubic-bezier(0.16, 1, 0.3, 1)"
  durations: { fast: "150ms", base: "220ms", slow: "380ms" }

breakpoints: { sm: 640, md: 768, lg: 1024, xl: 1280 }
---

# <Project> — design system

## Direction

<Two or three sentences. What is this supposed to feel like, and what is it explicitly
not? Naming what it is *not* is often more useful than what it is.>

**Key characteristics**

- <e.g. Warm off-white ground, never pure white.>
- <e.g. One accent — terracotta — carries every action. Nothing else is coloured.>
- <e.g. Serif display against a neutral sans. Editorial, not startup.>
- <e.g. Hairline borders instead of shadows. Almost no elevation.>

## Rules

Give each rule a name. Named rules get followed.

### The <Name> Rule — colours
<One paragraph. What must always be true, and why.>

### The <Name> Rule — typography
<…>

### The <Name> Rule — elevation
<…>

### The <Name> Rule — layout
<…>

## Do

- <Do use …>
- <Do keep …>

## Don't

- <Do not use …>
- <Do not …>

## Components

| Component | Rule |
|---|---|
| Button | <variants, radius, height, what the hover does> |
| Card | <padding, radius, border vs shadow, is it clickable> |
| Input | <height, focus state> |
| Section | <padding, container width, background alternation> |
```

---

## Writing good rules

A rule is worth writing down when it is **a decision that could reasonably have gone the
other way**. "Use good contrast" is not a rule, it is a platitude. These are rules:

- *The Hairline First Rule* — use a 1px border before you reach for a shadow.
- *The One Accent Rule* — a second accent colour needs written justification.
- *The 65ch Rule* — no paragraph is wider than 65 characters, at any breakpoint.
- *The No Pure Values Rule* — never `#fff`, never `#000`, never `linear`.
- *The Mobile Is Designed Rule* — every section states what it does under 768px.

Aim for **6–12 rules**. Below six, the system is not specific enough to constrain anything.
Above twelve, nobody reads them, and the agent starts sampling instead of following.

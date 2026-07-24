# Section patterns

Blueprints for the sections a marketing site is made of. Each one states the job, the
variants worth using, the layout, the mobile behaviour, and the mistakes.

They are **not components to paste**. They are decisions already made, so you spend your
effort on the content instead of re-deciding what a pricing table looks like.

| File | Covers |
|---|---|
| [`hero.md`](./hero.md) | The first screen. Six variants and when each one is right |
| [`navigation.md`](./navigation.md) | Header, mobile menu, mega menu, footer |
| [`content-sections.md`](./content-sections.md) | Features, split content, bento, stats, process, logos, testimonials, FAQ, pricing, CTA, contact |

## How to use them

1. Outline the page as a list of sections (`00-start/project-kickoff.md`).
2. For each section, pick the variant here that matches the content you actually have.
   *Content decides the pattern.* Three benefits with an icon each is a feature grid. Two
   benefits with a screenshot each is an alternating split. Do not pick the grid and then
   invent a third benefit to fill it.
3. Vary consecutive sections. Two feature grids in a row is the monotony described in
   [`../02-design-system/anti-patterns.md`](../02-design-system/anti-patterns.md).

## Rules that apply to every section

- **One idea per section.** If you need two headings, it is two sections.
- **Section padding:** `py-16` mobile, `py-24` to `py-32` desktop. Never less.
- **Container width follows content type.** Text-only sections are narrower than grids.
  See [`../02-design-system/spacing-layout.md`](../02-design-system/spacing-layout.md).
- **Every section has an `id`** so it can be linked and used in navigation.
- **Semantic wrapper:** `<section>` with an `aria-labelledby` pointing at its heading.
- **Heading levels are sequential.** One `h1` on the page (the hero). Every other section
  starts at `h2`.
- **Mobile behaviour is specified**, not inherited. Each pattern below says what it does.

## The rhythm of a page

A page that works usually alternates *density*: a dense section, then an open one.

```
hero            open, large type, lots of air
logo strip      thin, quiet — a breath
features        dense, structured
split content   open, image-led
testimonial     very open — one quote, huge whitespace
pricing         dense, decision-making
FAQ             dense, text
CTA             open, one action
footer          dense, but visually recessive
```

Compare that to eight equally dense, equally padded sections. The difference is the
entire reason the first one feels designed.

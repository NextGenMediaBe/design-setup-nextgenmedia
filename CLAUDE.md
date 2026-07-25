# Design Setup — build kit

This repository is a **build kit**, not an application. When it is present in a project or
referenced from one, treat everything in it as the standard for that project.

It is deliberately **generic**. It contains no brand, no client, no company identity. Its
job is to make whatever you build look like a professional designer made it — considered,
fast, and specific to the project at hand — instead of looking generated.

## The goal, stated plainly

Most AI-built interfaces fail in the same three ways, and they are all avoidable:

1. **No visual direction.** Everything converges on Inter, a blue accent, `rounded-lg`,
   three cards and `shadow-md`. That is not a style, it is the absence of a decision.
   → Fix: [`02-design-system/art-direction.md`](02-design-system/art-direction.md). **Pick
   a direction before writing a single token.**
2. **No craft.** The layout is correct and the details are not: borders that are solid
   instead of alpha, shadows that are pure black, icons centered mathematically, nested
   radii that match. → Fix: [`02-design-system/craft.md`](02-design-system/craft.md).
3. **Slow.** Animated backgrounds, WebGL heroes, unoptimised images, third-party scripts.
   → Fix: [`01-standards/performance.md`](01-standards/performance.md).

Correctness is the floor. This kit exists for what sits above it.

## Reading order

**Before writing any UI code:**

| Step | Read | Why |
|---|---|---|
| 1 | `00-start/project-kickoff.md` | What to resolve before building |
| 2 | `02-design-system/art-direction.md` | **Choose the direction. Do not skip this.** |
| 3 | `02-design-system/principles.md` | The rules that make output look designed |
| 4 | `02-design-system/anti-patterns.md` | The tells that make output look generated |
| 5 | `01-standards/stack.md` | Default stack, and when to deviate |
| 6 | `03-patterns/` | Section blueprints for the pages you need |

Then, while building: [`02-design-system/craft.md`](02-design-system/craft.md) and the
relevant standards. Everything else is reference — pull it in when the task touches it.
Do not read the whole repo up front.

The end-to-end process is [`07-workflows/build-website.md`](07-workflows/build-website.md).

## Non-negotiable rules

1. **A visual direction is chosen and written down** in the project's `DESIGN.md` before
   any component is built. See
   [`02-design-system/DESIGN-template.md`](02-design-system/DESIGN-template.md).
2. **No default framework palette.** Never ship `blue-500`, `gray-100`, `slate-900` as
   brand colours. Colours come from the token layer in `02-design-system/tokens/`,
   generated per project via `02-design-system/color.md`.
3. **Type scale before layout.** Set the typographic scale first, then build sections.
   Layout follows type, not the other way around.
4. **One accent colour.** A second needs an explicit, written reason.
5. **Motion is opt-in per element and respects `prefers-reduced-motion`.** One or two
   moments of motion per page, not one per section. See `02-design-system/motion.md`.
6. **Every interactive element has a visible focus state.** No `outline: none` without a
   replacement.
7. **Real or realistic content.** Never "Lorem ipsum", "Feature One", invented statistics
   or fabricated testimonials. See `05-copy/copywriting.md`.
8. **Mobile layout is designed, not inherited.** Every section spec in `03-patterns/`
   states its mobile behaviour. Implement that; do not just let flex wrap.
9. **Performance is a design constraint.** LCP < 2.5s, INP < 200ms, CLS < 0.1 on a
   mid-range phone. A visual effect that costs the budget does not ship. A Lighthouse
   accessibility score below 100 is a defect, the same as a failing typecheck.

## Conventions

- Standards, patterns and code are in **English**. The copy guidance in `05-copy/` is in
  **Dutch**, because that is the market it is written for; the frameworks in it apply to
  any language.
- `> **NEEDS INPUT**` marks a placeholder waiting on real material. Do not invent content
  for those — ask, or flag it.
- Code blocks are reference implementations. Adapt them to the project's actual stack.
- **Brand assets live in the project, never in this repo.** See `06-brand/` for how to
  establish or ingest a brand system per project.

## Adding to this repo

New material lands in `_inbox/`. Follow `07-workflows/ingest-material.md` to sort, dedupe
and file it. Anything project- or client-specific does not belong here.

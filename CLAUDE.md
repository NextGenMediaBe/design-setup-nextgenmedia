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

## Start here

> ### → [`AI-RUNBOOK.md`](AI-RUNBOOK.md)
>
> The step-by-step. What to do, in what order, what is forbidden, where to stop and check.
> Open it before anything else and work through it top to bottom.

Two of its ten phases are **gates**:

> **No component code exists before the design plan (Phase 3) and the self-critique
> (Phase 4) have been delivered as visible output.**

If asked to start building immediately, deliver both first in the same turn, then build.
It costs three minutes and it decides the entire result.

The skill that enforces this is [`skills/anti-slop-design/`](skills/anti-slop-design/).
The end-to-end process with timeboxes is
[`07-workflows/build-website.md`](07-workflows/build-website.md).

## Reading order

**Before writing any UI code:**

| Step | Read | Why |
|---|---|---|
| 1 | `AI-RUNBOOK.md` | The runbook. Everything below is what it sends you to |
| 2 | `00-start/project-kickoff.md` | What to resolve before building |
| 3 | `08-sectors/<sector>.md` | What the visitor actually came to do — usually not what the client thinks |
| 4 | `02-design-system/art-direction.md` | **Choose the direction. Do not skip this.** |
| 5 | `02-design-system/anti-patterns.md` | The tells that make output look generated, and why |
| 6 | `02-design-system/principles.md` | The rules that make output look designed |
| 7 | `01-standards/stack.md` | Default stack, and when to deviate |
| 8 | `03-patterns/` | Section blueprints for the pages you need |

Then, while building: [`02-design-system/craft.md`](02-design-system/craft.md) and the
relevant standards. Stuck on what "fully decided" looks like? Read
[`02-design-system/worked-example.md`](02-design-system/worked-example.md) — one complete
system, every value chosen.

Everything else is reference — pull it in when the task touches it. Do not read the whole
repo up front.

## Non-negotiable rules

1. **A visual direction is chosen and written down** in the project's `DESIGN.md` before
   any component is built. See
   [`02-design-system/DESIGN-template.md`](02-design-system/DESIGN-template.md).
2. **A signature element is named** in `DESIGN.md` — the one thing a visitor remembers this
   site by, concrete and buildable. Without it, building does not start.
3. **Every brand colour's origin is recorded.** Derived from something physical the client
   owns: material, product, packaging, facade, workwear. A colour you cannot justify out
   loud is a colour you defaulted to.
4. **No default framework palette.** Never `blue-500`, `indigo-600`, `slate-900`,
   `#6366F1`, `#0F172A`. Colours come from the token layer in `02-design-system/tokens/`.
5. **No burned-out display faces.** Not Inter, Geist, Poppins, Space Grotesk, Satoshi or
   the rest of the list in `02-design-system/typography.md`.
6. **One accent colour**, appearing at most twice per viewport. A second accent needs a
   written reason.
7. **Motion is opt-in per element and respects `prefers-reduced-motion`.** One or two
   moments per page, not one per section. Never `transition: all`.
8. **Every interactive element has hover, active, focus-visible, disabled, loading and
   error.** Missing states are a bigger tell than any colour choice.
9. **Real content.** Never "Lorem ipsum", "Feature One", invented statistics, fabricated
   testimonials or stock photography. Flag the absence instead of substituting.
10. **Mobile layout is designed, not inherited.** Every section spec in `03-patterns/`
    states its mobile behaviour. Implement that; do not just let flex wrap.
11. **Performance is a design constraint.** LCP < 2.5s, INP < 200ms, CLS < 0.1 on a
    mid-range phone. A visual effect that costs the budget does not ship. A Lighthouse
    accessibility score below 100 is a defect, the same as a failing typecheck.
12. **`npm run design:check` passes.** A failure gets fixed, not suppressed. Suppressing
    needs `slop-check-ok:` with a written reason plus an entry in `DESIGN.md`.

## Conventions

- Standards, patterns and code are in **English**. `05-copy/` and `08-sectors/` are in
  **Dutch**, because both are market-specific — Dutch micro-typography and Flemish sector
  knowledge do not translate. The frameworks in them apply to any language.
- `> **NEEDS INPUT**` marks a placeholder waiting on real material. Do not invent content
  for those — ask, or flag it.
- Code blocks are reference implementations. Adapt them to the project's actual stack.
- **Brand assets live in the project, never in this repo.** See `06-brand/` for how to
  establish or ingest a brand system per project.

## Adding to this repo

New material lands in `_inbox/`. Follow `07-workflows/ingest-material.md` to sort, dedupe
and file it. Anything project- or client-specific does not belong here.

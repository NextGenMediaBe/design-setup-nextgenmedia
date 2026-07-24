# NextGenMedia — Design Setup

This repository is a **build kit**. It is not an application. When it is present in a
project (or referenced from one), treat everything in it as the house style for that
project: standards to follow, patterns to reach for, and mistakes to avoid.

## How to use this repo

**Before writing any UI code**, read in this order:

| Step | Read | Why |
|---|---|---|
| 1 | `00-start/project-kickoff.md` | Questions to resolve before building |
| 2 | `01-standards/stack.md` | Default stack and when to deviate |
| 3 | `02-design-system/principles.md` | The rules that make output look designed |
| 4 | `02-design-system/anti-patterns.md` | The rules that make output look generated |
| 5 | `03-patterns/` | Section-level blueprints for the pages you need |

Everything else is reference — pull it in when the task touches it. Do not read the
whole repo up front.

## Non-negotiable rules

1. **No default Tailwind palette.** Never ship `blue-500`, `gray-100`, `slate-900` as
   brand colors. Use the token layer in `02-design-system/tokens/`. If the project has
   no brand yet, generate a palette per `02-design-system/color.md` and write it into
   the project's token file.
2. **Type scale before layout.** Set the typographic scale first
   (`02-design-system/typography.md`), then build sections. Layout follows type, not the
   other way around.
3. **One accent color.** A second accent needs an explicit reason.
4. **Motion is opt-in per element and respects `prefers-reduced-motion`.**
   See `02-design-system/motion.md`.
5. **Every interactive element has a visible focus state.** No `outline: none` without a
   replacement. See `01-standards/accessibility.md`.
6. **Real content or realistic content.** Never ship "Lorem ipsum" or "Feature One".
   Write plausible copy per `05-copy/copywriting.md`.
7. **Mobile layout is designed, not inherited.** Every section spec in `03-patterns/`
   states its mobile behaviour; implement that, do not just let flex wrap.

## Conventions in this repo

- Standards, patterns and code are in **English**. Brand, tone-of-voice and copy
  material are in **Dutch** (the market these are used for).
- A file or section marked `> **NEEDS INPUT**` is a placeholder waiting on real
  material from NextGenMedia. Do not invent content for those — ask, or flag it.
- Code blocks are reference implementations. Adapt to the project's actual stack; do not
  paste blindly.

## Adding to this repo

New material (skills, snippets, brand assets, zips) lands in `_inbox/`.
Follow `07-workflows/ingest-material.md` to sort, dedupe and file it. Nothing stays in
`_inbox/` permanently.

# Runbook

The operational companion to [`CLAUDE.md`](CLAUDE.md). Work through this top to bottom,
every time. It tells you what to do, in what order, what is forbidden, and where to stop
and check.

If you read nothing else, read **Phase 3**, **Phase 4** and **the forbidden list**.

---

## The one rule

> **No component code exists before Phase 3 (design plan) and Phase 4 (self-critique) have
> been delivered as visible output.**

If the user says "just start building", deliver both first in the same turn, then build.
It costs three minutes and it decides the entire result. Skipping it is the single most
reliable way to produce something that looks generated.

---

## Phase 0 — Orient

Answer for yourself, in one line each:

- What am I building? Marketing site, web app, dashboard, single page, or one component?
- Is there an existing `DESIGN.md` in the project? **If yes, it wins over everything here.**
  Read it and follow it.
- Is there an existing token layer (`globals.css`, `tailwind.config`)? Then match it; do not
  introduce a second system.

**Only if you are editing an existing project and it already has a design system: skip to
Phase 5.** Everything before that is for new work.

Files to read now, and no others:

| Building | Read |
|---|---|
| Anything | [`02-design-system/anti-patterns.md`](02-design-system/anti-patterns.md) |
| A new site or app | + [`00-start/project-kickoff.md`](00-start/project-kickoff.md), [`02-design-system/art-direction.md`](02-design-system/art-direction.md), the matching [`08-sectors/`](08-sectors/) playbook |
| A single section | + the matching file in [`03-patterns/`](03-patterns/) |
| A single component | + [`02-design-system/craft.md`](02-design-system/craft.md) |
| Copy in Dutch | + [`05-copy/copywriting.md`](05-copy/copywriting.md), [`05-copy/micro-typografie-nl.md`](05-copy/micro-typografie-nl.md) |

Do not read the whole repo. Pull in what the task touches.

---

## Phase 1 — Sharpen the brief

Six questions. **If an answer is missing, ask. Do not guess.**

1. Sector — which playbook in [`08-sectors/`](08-sectors/)?
2. Audience — who, how technical, formal or informal?
3. **The one task** — what does a single visitor do that counts as success? Everything on
   the page serves it or gets cut.
4. Three competitors, with URLs.
5. Three references the client likes, with URLs and one sentence each on *what* they like.
6. **One reference the client finds ugly.** The most useful of the six — it rules out more
   than the three likes rule in.

If the client cannot name something they dislike, show three and ask which is wrong.

---

## Phase 2 — Read the sector playbook

[`08-sectors/`](08-sectors/) — sixteen of them. It tells you what the visitor actually came
to do, which is usually not what the client thinks.

Where the brief and the playbook disagree, the brief wins, and you note why in `DESIGN.md`.

---

## Phase 3 — GATE: the design plan

Write this out as visible output before opening an editor. Five parts, all mandatory.

**1. Palette — 4 to 6 values, each with its origin.**

Not "warm neutral". Write where it comes from: the material, the product, the packaging,
the facade, the workwear, an ingredient, the machine, the location.

```
#B5562E   verweerde Boomse klinker uit hun oude terras   → accent, primaire CTA
#CFC6B2   gebroken dolomiet na een droge week            → paginagrond, nooit #fff
```

A colour whose origin you cannot name is a colour you defaulted to. See
[`02-design-system/color.md`](02-design-system/color.md).

**2. Type — 2 to 3 roles.** Display, body, and a utility face for data, labels, prices and
dates. Per role: the face, the weights, and one sentence on why it fits *this sector* —
not why it is nice. See [`02-design-system/typography.md`](02-design-system/typography.md).

**3. Layout concept — one sentence, then an ASCII wireframe of the homepage.**

**4. Signature element.** The one thing a visitor remembers this site by. Concrete and
buildable.

> Not: "een onderscheidende uitstraling."
> Wel: "elke realisatie krijgt bouwjaar en uitvoeringstermijn als mono-label op dezelfde
> plek in de bovenhoek van de foto — na drie projecten herken je het patroon."

**Without a filled-in signature element you may not start building.**

**5. Motion principle — one sentence.** What moves, when, and why. Plus the brand curve as
a token.

Record all five in the project's `DESIGN.md`
([`02-design-system/DESIGN-template.md`](02-design-system/DESIGN-template.md)).

---

## Phase 4 — GATE: self-critique

Ask, in writing, and answer honestly:

> **If I ran this same brief ten times, would I land here ten times out of ten?**

If yes, this is a default, not a decision. Revise the part that was predictable and **show
the before, the after, and the reason** in your output.

Run the question separately over palette, type, layout and signature element. In practice
at least one of the four fails on the first pass. If all four pass on the first try, you
are not being honest with yourself.

Then check the plan against
[`02-design-system/anti-patterns.md`](02-design-system/anti-patterns.md) §1.7: is it one of
the three AI cluster looks? If it is, and the brief did not ask for it, you defaulted with
extra steps.

**Take one reasoned aesthetic risk.** Write down what it is and why it is defensible. The
defence must connect to the client — what they make, what they do, where they are. "To make
it more interesting" is not a defence. Taking no risk guarantees a forgettable result.

---

## Phase 5 — Tokens first

Before the first component:

1. Write `app/globals.css` from
   [`02-design-system/tokens/globals.css`](02-design-system/tokens/globals.css), replacing
   only the BRAND block.
2. Restyle the shadcn primitives you will use — button, input, card — to those tokens.

Ten minutes now, hours later. A component placed before the token layer exists carries the
default look into every page that uses it.

---

## Phase 6 — Build, in this order

1. Header and footer — they frame everything
2. Hero
3. The section carrying the main argument
4. Everything else
5. CTA
6. **States**: empty, loading, error for every list and form; hover, active, focus-visible,
   disabled for every control; then 404 and 500
7. **Motion, last.** One or two moments per page

Write real copy as you go. Placeholder text that survives to review means the layout was
built for the wrong content lengths.

Check each section at 390px before moving to the next.

---

## Phase 7 — The AI-tell pass

A separate pass, after building. Do not fold this into normal review — it catches different
things.

```bash
npm run design:check
```

Then read every section with fresh eyes and ask:

- Is there an eyebrow label above any heading? Remove it.
- Is there a decorative line or bar under any heading, or a coloured stripe down the side of
  a card? Remove it.
- Does any paragraph contain three adjectives in a row? Rewrite.
- Are all the sentences roughly the same length? Break the rhythm.
- Is there any visible "binnenkort", "wordt aangevuld", "(placeholder)"? Delete the label
  and either fill the section or remove it.
- Does every icon mean something, or is it filling a card?
- Would this sentence, this block, this photo appear unchanged on a competitor's site?

**A failure from `design:check` gets fixed, not suppressed.** Suppression needs
`slop-check-ok:` with a written reason plus an entry in `DESIGN.md`. If you are writing your
second suppression, the Phase 3 plan was wrong.

---

## Phase 8 — Verify in the browser

**Not in the code. In the browser.** Code that looks right and renders wrong is the normal
case, not the exception.

```bash
npm run design:audit      # 390 / 768 / 1440 + contrast + heading wraps
```

Then, by hand:

- No horizontal overflow at any width from 320px to 1920px
- Console clean — no errors, no warnings you introduced
- Transitions actually run, and are actually soft
- Tab through the whole page: every stop visible, order logical, no traps
- Turn on reduced motion in DevTools and reload. Nothing should move
- Look at the screenshots and criticise your own work as if you were a competing studio

---

## Phase 9 — Audit and hand over

[`07-workflows/quality-review.md`](07-workflows/quality-review.md) — 40 binary checks plus
three written questions. **Deliver the completed audit**, not a claim that it passed.

The third question is the one that matters: *if I replace the client name with their
biggest competitor's, what falls over?* If the answer is "nothing", go back to Phase 3.

---

# What is forbidden

Full reasoning per rule in
[`02-design-system/anti-patterns.md`](02-design-system/anti-patterns.md). This is the
scannable version. Everything here needs `slop-check-ok:` plus a written reason in
`DESIGN.md` to override.

## Colour

- Purple-to-blue gradients, in any form
- Aurora backgrounds, mesh gradients, blurred colour blobs, glow orbs
- Glow: coloured `box-shadow` spread, accent-coloured `drop-shadow`, neon borders
- Gradient text (`bg-clip-text`)
- Tailwind defaults as brand colour: `indigo-600`, `violet-*`, `purple-*`, `slate-900`,
  `emerald-500`, and the hexes `#6366F1` `#8B5CF6` `#7C3AED` `#0F172A` `#22C55E`
- Pure `#fff` and pure `#000`
- Warm-beige "cream" as the default background
- Three or four equal-weight colours. **One accent, used sparingly**

## Typography

- Inter, Instrument Sans, Geist, General Sans, Plus Jakarta Sans, Space Grotesk, Poppins,
  Montserrat, Outfit, DM Sans, Satoshi **as the display face**
- One face for everything with `font-bold` as the only hierarchy
- Default `letter-spacing` on headings 40px and up
- More than three weights
- Line length above 75 or below 45 characters
- **Eyebrow labels** — small tracked uppercase above a heading. See below

## Layout

- The standard order: hero → three feature cards → logo bar → pricing → FAQ → footer
- Three equal cards with an icon on top and two abstract nouns as the heading
- Floating pills above the headline ("Vertrouwd door 200+ teams", "AI powered")
- The animated scroll-indicator mouse
- Stat bars with numbers the client cannot prove
- Fabricated dashboard mockups
- **A decorative line or accent bar under a heading**
- **A coloured stripe down the left side of a card or section**
- Dot-grid and decorative raster backgrounds
- Floating glass cards, icon tiles above every heading
- Identical `padding-block` and `gap` on every section

## Components

- `rounded-2xl shadow-lg p-6` on everything; one radius for every element size
- Unthemed shadcn
- Emoji as icons
- **Equal spacing between label→field and field→next field.** Label→field 4–8px,
  field→next field 20–28px. Check this explicitly on every form
- Placeholder as label
- Shipping a component with only its default and hover state
- **Magnetic buttons** that jump toward the cursor
- `scale(1.05)` on hover with a hard colour flip

## Motion

- Fade-in-up on every element with identical duration and easing
- Animation that gates content visibility
- `transition: all`
- `ease`, `linear` or the browser default on brand motion
- Moving gradient backgrounds, pulsing glows, particles, autoplaying carousels
- Anything without a `prefers-reduced-motion` path

## Imagery

- Stock photos of a diverse team behind a laptop
- AI illustrations, 3D blobs, abstract vector blobs, isometric people, unDraw style
- A generic icon in every feature card purely to fill it
- Icons that do not match their label. Address is a pin, phone is a handset, email is an
  envelope
- Cropped heads and awkward crops
- A rebuilt approximation of the brand mark instead of the real one

## Copy

- Em-dashes (—) in Dutch. Ever
- Straight quotes instead of ' ' " " and ’
- Title Case in Dutch headings
- Three adjectives in a row
- Sentences all the same length
- "niet X, maar Y" / "it's not just A, it's B"
- Hollow openers: "In de snel veranderende wereld van…"
- Visible placeholder or meta text: "binnenkort beschikbaar", "wordt aangevuld",
  "(placeholder)", "lorem ipsum"
- Invented statistics, testimonials, client logos or case studies
- The banned word lists in
  [`02-design-system/anti-patterns.md`](02-design-system/anti-patterns.md) §7.2
- Buttons that say "Klik hier", "Lees meer", "Ontdek"
- Promising what you do not control: "meer omzet", invented percentages
- Putting the technology in the headline instead of the result

---

# What is required

- A visual direction, chosen and written down, before any component
- A named signature element
- Every brand colour's origin recorded
- One accent, at most twice per viewport
- Two or three type roles, self-hosted
- `tabular-nums` wherever figures stack
- Near-black on near-white
- Hover, active, focus-visible, disabled, loading, error on every interactive element
- Empty, loading and error state for every list and form
- A visible focus ring, brand-coloured
- `prefers-reduced-motion` honoured from the start
- Real content, or an honest gap. Never a labelled placeholder
- At least one concrete, checkable number per page
- At least one local anchor: a place name, a region, a real reference
- Mobile layout designed, not inherited
- LCP < 2.5s, INP < 200ms, CLS < 0.1
- Lighthouse accessibility 100
- `npm run design:check` passes

---

# The two tests that catch what lists miss

**The competitor test.** Replace the client's name with their biggest competitor's. Apply it
per sentence, per block, per photo — not just per page. If it still reads fine, it is
generic. Rewrite.

**The ten-runs test.** Would this same brief produce this same result ten times out of ten?
Then it is a default, not a decision.

> AI-achtigheid is de afwezigheid van keuzes. Everywhere a generator would pick the safest,
> most average option, pick something specific instead: a specific typeface, a specific
> sentence, a specific photo, a specific opinion about what you do not do. Every real choice
> pulls the work further out of the template.

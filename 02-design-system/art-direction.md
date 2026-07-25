# Art direction

This is the step that gets skipped, and it is the one that decides whether the result looks
designed. Rules about spacing and contrast make a page *correct*. A chosen direction makes
it *someone's*.

Without a direction, every project converges on the same thing: Inter, a blue accent,
`rounded-lg`, three cards, `shadow-md`. That default is not a style. It is the absence of a
decision, and it is instantly recognisable as such.

**Pick one direction per project, before writing tokens.** Write it into the project's
`DESIGN.md`. Then every later choice — a radius, a border, a hover — has an answer that is
not "whatever seems fine".

## How to choose

Three inputs, in this order:

1. **What the client sells and to whom.** A notary and a skate brand cannot share a
   direction. Trust-heavy sectors need restraint; attention-heavy sectors need contrast.
2. **What the client already has.** An existing logo carries a voice. A geometric sans
   wordmark does not sit under a Playfair headline.
3. **What the competition looks like.** Look at five competitor sites. If they all do the
   same thing, doing it slightly better is worth less than doing something adjacent.

Then commit. A direction executed fully beats a safer one executed halfway.

---

## The directions

Each lists the moves that define it. Take the whole set — the coherence *is* the effect.

### 1. Swiss / International

**For:** consultancies, architects, B2B, anything where precision is the value.

| | |
|---|---|
| Colour | Near-black on off-white. **One** accent, used almost stingily — on links and one CTA |
| Type | One grotesque, 2–3 weights. Tight tracking. Large size jumps between levels |
| Layout | Strict grid, visibly aligned. Asymmetric placement *within* the grid. Left-aligned everything |
| Detail | Hairline rules as structure. Radius 0–4px. No shadows at all |
| Motion | Almost none. A 150ms colour change |

**Fails when:** the grid is not actually strict. This direction is unforgiving — one
misaligned element reads as a mistake rather than a choice.

### 2. Editorial

**For:** agencies, studios, publishers, personal brands, anything with real writing.

| | |
|---|---|
| Colour | Warm paper ground (`oklch(97% 0.01 80)`), ink text, one muted accent |
| Type | **Serif display** against a neutral sans. Large measure for the display, 60–65ch body |
| Layout | Asymmetric. Wide images breaking the text column. Generous margins. Pull quotes |
| Detail | Rules above section headings. Drop caps sparingly. No cards |
| Motion | Reveals on scroll, slow (600ms+), small travel |

**Fails when:** there is not enough real copy. Editorial needs text to be editorial about.

### 3. Warm minimal

**For:** wellness, hospitality, interior, food, small premium products.

| | |
|---|---|
| Colour | Off-white to sand. Neutrals with real chroma (0.01–0.02). Accent is a muted earth tone |
| Type | Humanist sans or a soft serif. Small sizes. Low contrast between levels |
| Layout | Enormous whitespace. `py-40` sections. Small type in large fields of nothing |
| Detail | No borders, no shadows. Separation by space alone. Radius 0 or fully soft — not in between |
| Motion | Slow fades. Nothing moves quickly |

**Fails when:** it gets crowded. This direction is only whitespace; if the client keeps
adding content, switch directions rather than compress it.

### 4. Technical / instrument

**For:** developer tools, data products, dashboards, security, fintech.

| | |
|---|---|
| Colour | Dark surfaces (never pure black — `oklch(12% 0.01 250)`). Elevation by lightness. One high-chroma accent |
| Type | Grotesque for UI, **monospace for labels, numbers and metadata**. Tracked uppercase micro-labels |
| Layout | Dense. Small paddings. Visible structure — dividers, coordinates, measurement marks |
| Detail | 1px borders everywhere, radius 4–6px, no shadows. `tabular-nums` on every number |
| Motion | Fast (120ms), mechanical easing. No bounce |

**Fails when:** the mono is used for body copy, or the density is decorative rather than
informational. Density must serve information.

### 5. Brutalist / raw

**For:** creative studios, music, fashion, events, youth brands. High risk, high ceiling.

| | |
|---|---|
| Colour | High contrast. Often one saturated colour against black and white. Unblended |
| Type | Oversized display, sometimes cropped by the viewport. Extreme size contrast |
| Layout | Deliberately broken grid. Overlap. Elements running off-canvas |
| Detail | Hard edges, thick borders (2–4px), zero radius, no shadow |
| Motion | Abrupt. Hard cuts, scramble effects, marquees |

**Fails when:** it is applied to a business that needs to be trusted, or when "broken" is
random rather than composed. Brutalism is not the absence of care.

### 6. Luxury / fashion

**For:** high-end retail, jewellery, real estate, hotels, private services.

| | |
|---|---|
| Colour | Near-monochrome. Black, off-white, one metallic or deep tone. Colour comes from photography |
| Type | Small. **Tracked-out uppercase** for labels and nav (0.15–0.25em). A refined serif or a thin grotesque for display |
| Layout | Full-bleed photography. Huge margins around small type. Centered where others are left-aligned |
| Detail | No borders, no shadows, no radius. Nothing is a card |
| Motion | Slow, cinematic. Image cross-fades. 800ms+ |

**Fails when:** the photography is not excellent. This direction is a frame for images —
without good ones there is nothing left.

### 7. Institutional

**For:** law, accountancy, medical, insurance, government, education.

| | |
|---|---|
| Colour | A single deep, desaturated brand colour (navy, forest, burgundy). Cool neutrals. No gradients |
| Type | A serif for headings, a clear sans for body. Conservative sizes. High legibility |
| Layout | Symmetric, predictable, calm. Clear hierarchy. Wide but readable measure |
| Detail | Subtle borders, radius 4–6px, minimal shadow. Real photography of real people |
| Motion | Functional only |

**Fails when:** it tips into dull. The saving grace is craft: excellent typography and
generous spacing make restraint read as confidence rather than neglect.

### 8. Product / dark premium

**For:** modern SaaS, AI products, apps. The most crowded space, so execution matters most.

| | |
|---|---|
| Colour | Dark ground, surfaces lightening with elevation. One accent with a subtle glow on the primary action only |
| Type | A geometric or neo-grotesque sans. Tight tracking on large sizes |
| Layout | Bento sections, product screenshots bleeding off the edge, tight rhythm |
| Detail | 1px alpha borders, small radii (8–12px), soft multi-layer shadows |
| Motion | Precise, 200ms, one hero moment |

**Fails when:** it becomes the default AI look — purple gradient, glassmorphism, floating
blobs. See [`anti-patterns.md`](./anti-patterns.md). To use this direction you have to
actively avoid its clichés.

### 9. Playful / consumer

**For:** consumer apps, kids, food delivery, sports, communities.

| | |
|---|---|
| Colour | Saturated. **This is the one direction where a second accent is justified.** Bold flat fills |
| Type | A rounded or chunky sans. Heavy weights. Big |
| Layout | Cards with real depth, overlapping elements, diagonal sections |
| Detail | Large radii (16–24px) or fully round. Solid offset shadows rather than blurred ones |
| Motion | Springy easing, overshoot, micro-interactions on everything |

**Fails when:** it is used for a B2B product because someone wanted it to feel "friendly".
Playful and expensive rarely coexist.

### 10. Archival / documentary

**For:** museums, non-profits, research, long-form storytelling.

| | |
|---|---|
| Colour | Paper and ink. Muted, slightly aged. Photography desaturated to a common grade |
| Type | Serif body at a generous size. Sans for metadata and captions |
| Layout | Timeline-driven, image-and-caption pairs, sidenotes in the margin |
| Detail | Visible captions, credits, dates. Hairline rules. No cards |
| Motion | Scroll-driven, slow, tied to content |

**Fails when:** the content is thin. Like editorial, it needs substance.

---

## Making it concrete

Once the direction is chosen, it decides these five things. Write them into `DESIGN.md`
before you build anything:

| Decision | Question the direction answers |
|---|---|
| **Radius scale** | Precise (0–6px), balanced (8–14px), or friendly (16–24px)? |
| **Separation method** | Border, shadow, background change, or space alone? Pick **one** primary |
| **Type contrast** | How big is the jump from body to display? Swiss: huge. Warm minimal: small |
| **Colour density** | How much of the screen is coloured? Luxury: ~2%. Playful: ~40% |
| **Motion character** | Mechanical, cinematic, springy, or absent? |

Consistency across those five is what reads as "a designer made this". Any one of them
being inconsistent is what reads as "generated".

## Mixing

You can borrow across directions, but the base has to hold. Editorial with technical
metadata works. Swiss with luxury photography works. Brutalist with institutional does not.

The test: can you describe the direction in one sentence without using "and also"? If the
sentence needs three clauses, it is not a direction, it is indecision.

## Writing it down

In the project's `DESIGN.md` (see [`DESIGN-template.md`](./DESIGN-template.md)):

```markdown
## Direction

Editorial, warmed. Paper ground, serif display against a neutral sans, no cards
anywhere — separation is space and hairline rules. Photography is desaturated to a
single grade. It should read like a well-set magazine, not a SaaS landing page.

**Not:** dark mode, gradients, bento grids, or anything that would look at home on a
YC company's site.
```

The "not" line does more work than the description. Name what you are ruling out.

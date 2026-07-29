# Anti-patterns — the anti-slop rules

The tells that mark an interface as generated. A visitor recognises them in under a second
without being able to name them, which is exactly why they are damaging: the reaction is
"this is cheap" and it arrives before any content is read.

Every rule below is written as **Banned → why it is a tell → what to do instead.** A ban is
liftable, but only by a written reason in the project's `DESIGN.md`. "It looked nice" is not
a reason. "The client's packaging is that colour" is.

Machine-enforced by [`../tools/slop-check.mjs`](../tools/slop-check.mjs). If a rule here has
a rule id in brackets, the scanner fails the build on it.

---

## 1. Colour

### 1.1 Purple-to-blue gradients `[gradient-purple]`

**Banned.** In any form: hero background, CTA fill, text gradient, blob, border, glow.

**Why it is a tell.** It is the default output of every generator, every template and every
tutorial written since 2022. It carries no meaning — it is not derived from a brand, a
material or a product — so it reads as decoration applied because something had to go there.

**Instead.** If the design needs depth behind a hero, use a single flat surface colour, a
photograph, or a two-stop gradient that shifts **lightness within one hue** and has a
light-source logic (see [`craft.md`](./craft.md)).

### 1.2 Aurora backgrounds

**Banned.** Blurred coloured blobs at high blur radius behind the hero. Also: mesh
gradients, animated gradient washes, "glow orbs".

**Why it is a tell.** The single loudest visual signature of 2024–2026 AI output. It is
also expensive — a large `filter: blur()` layer costs paint on every scroll frame and is a
common LCP killer. Two failures for one effect.

**Instead.** Nothing. An empty, well-proportioned field of one colour is stronger. If the
hero feels empty, the type is too small or the copy is too weak; fixing the background will
not fix that.

### 1.3 Glow `[shadow-heavy]`

**Banned.** `box-shadow` with a coloured spread, `filter: drop-shadow()` in the accent
colour, neon borders, glowing cards, glowing text.

**Why it is a tell.** Glow implies emitted light. Almost nothing in a real interface emits
light, so it reads as a sticker effect. It also destroys the consistency of the light source
across the page.

**Instead.** Depth comes from one of the three strategies in §4.1. If an element must be
emphasised, use position, size, or a surface value change.

### 1.4 Tailwind default colours `[color-tailwind-default]` `[slate-default]`

**Banned.** `indigo-600`, `violet-500`, `purple-*`, `fuchsia-*`, `slate-900`,
`emerald-500`, and the literal hex values `#6366F1`, `#8B5CF6`, `#7C3AED`, `#0F172A`,
`#22C55E`.

**Why it is a tell.** These exact values appear in millions of tutorials, starter templates
and screenshots. Designers and developers recognise them on sight. `slate-900` text on an
off-white ground is the single most common AI colour pairing in existence.

**Instead.** Build the palette from something real. See §1.8.

### 1.5 Gradient text

**Banned.** `bg-clip-text` on headings.

**Why it is a tell.** It lowers contrast (often below 4.5:1 at the light end), adds nothing
semantically, and is the most-copied hero treatment of the last four years.

**Instead.** Solid colour. If one word must be emphasised, change its weight, its face, or
put it on its own line.

### 1.6 Glassmorphism as default `[backdrop-blur]`

**Banned as a default.** `backdrop-blur` on cards floating over a busy background.

**Why it is a tell.** It is applied because it is available, not because the design needs
translucency. It also reduces legibility and costs paint performance.

**Allowed** for overlays that genuinely sit above scrolling content (a sticky header, a
modal scrim) — with `slop-check-ok:` and a reason.

### 1.7 The three AI cluster looks

These are not bad designs. They are *good* designs that have become defaults, which makes
them indistinguishable from an unmade decision.

| Cluster | Signature | Status |
|---|---|---|
| **Cream editorial** | `#F4F1EA`-ish cream, high-contrast serif, terracotta accent (`#D97757`-ish) | Only with an explicit brief |
| **Acid dark** | Near-black ground, one acid-green or vermilion accent, mono labels | Only with an explicit brief |
| **Newspaper** | Hairlines, radius 0, dense columns, everything labelled in monospace | Only with an explicit brief |

**Why they are tells.** Each is now the second-most-likely output after purple-blue. When
three different clients get the same "distinctive" look, it stops being distinctive.

**Instead.** They are all legitimate *if the brief asks for them*. Write in `DESIGN.md`
which brief input led there. If you cannot point at one, you defaulted.

### 1.8 What to do instead — building a palette

- **Derive it from something physical the client owns**: the material, the product, the
  packaging, the building facade, the workwear, an ingredient, the machine, the location.
  Record the origin of every colour in `DESIGN.md`. A colour you can justify out loud is a
  colour that survives review.
- **4 to 6 named values.** More is chaos, fewer is bloodless.
- **Semantic token names only**: `--color-action`, `--color-surface-raised`,
  `--color-feedback-danger`. Never `--gradient-start`, `--purple-2`, `--brand-2`.
- **OKLCH for the ramp**, so lightness is perceptually even across hues.
- **One accent, used sparingly.** If the accent appears in five places in one viewport it
  is no longer an accent. Aim for one or two.
- **Neutrals get a temperature.** Perfect grey (`#808080`, `#F5F5F5`) is the colour of no
  decision. Pull neutrals 2–5% chroma toward the brand hue. This is the cheapest change
  with the largest effect. See [`color.md`](./color.md).
- **No pure `#fff` or `#000`.**

---

## 2. Typography

### 2.1 Burned-out display faces `[font-overused]`

**Banned as a display face**, without a written reason: Inter, Instrument Sans, Geist,
General Sans, Plus Jakarta Sans, Space Grotesk, Poppins, Montserrat, Outfit, DM Sans,
Satoshi.

**Why it is a tell.** All are good typefaces. All are exhausted — they are the defaults in
every framework, template and AI output. Inter in particular is the visual equivalent of
system default.

**Instead.** Inter may stay as a **body** face if it genuinely fits, but then never also as
the heading. Pick a display face from the mood-based pairings in
[`typography.md`](./typography.md).

### 2.2 One face, hierarchy by `font-bold` alone

**Banned.**

**Why it is a tell.** Real typographic hierarchy uses size, weight, face, colour, spacing
and case. Using only weight means no type system was designed; the defaults were accepted.

**Instead.** Two or three roles: **display** (character, used sparingly), **body**
(readable, invisible), **utility** (mono or a narrow sans for data, labels, prices, dates).

### 2.3 Default tracking on large headings

**Banned.** Any heading at 40px or above with `letter-spacing: normal`.

**Why it is a tell.** Type is spaced for body size. At display size the same spacing looks
loose and unset. It is the difference between "typed" and "typeset", and it is visible to
people who cannot explain what they are seeing.

**Instead.** `-0.02em` to `-0.035em` from 40px up. Uppercase labels need the opposite:
`+0.06em` to `+0.12em`. Caps without tracking is equally wrong in the other direction.

### 2.4 Too many weights, wrong measure

**Banned.** More than three weights in one system. Line length above 75 or below 45
characters.

**Why it is a tell.** Both are symptoms of no type scale being defined — sizes and weights
picked per component instead of from a system.

**Instead.** Write the ratio down (1.2, 1.25, 1.333 or 1.5) and derive every size from it.
Body measure 60–75ch, lead paragraphs 45–60ch.

### 2.5 What to do instead — earning the type

- **Match the sector, not the trend.** See [`../08-sectors/`](../08-sectors/).
- **Use a variable font on a real axis**: optical size, width, or weight stepped per
  breakpoint. No generator does this, and it reads immediately as considered.
- **`font-feature-settings` deliberately**: `tnum` in tables, prices and any aligned
  numbers; `ss01` where the alternate adds character.
- Dutch micro-typography is a separate discipline and the loudest tell of all in NL copy.
  See [`../05-copy/micro-typografie-nl.md`](../05-copy/micro-typografie-nl.md).

---

## 3. Layout and composition

### 3.1 The standard page order

**Banned**, unless the brief asks for exactly this:

```
hero → three feature cards → logo bar → pricing → FAQ accordion → footer
```

**Why it is a tell.** It is the shape of every generated landing page. A visitor who has
seen it forty times reads the whole page as boilerplate before evaluating a single claim.

**Instead.** Derive the order from what the visitor came to do — that is what the sector
playbooks in [`../08-sectors/`](../08-sectors/) exist for. A restaurant leads with the menu
and the reservation button. A plumber leads with a phone number. Neither leads with a hero
that tells a brand story.

### 3.2 Three cards with an icon on top

**Banned.** Three equal cards, each with a Lucide icon, a two-abstract-noun heading, and
two lines of text.

**Why it is a tell.** It is the default container for "we must say three things". The
icons are interchangeable, which means they carry no information — pure filler.

**Instead.** Use the number the content needs. Two, four, five. If the three items deserve
real explanation, use alternating split sections instead
([`../03-patterns/content-sections.md`](../03-patterns/content-sections.md)).

### 3.3 Floating pills and badges

**Banned.** The pill above the headline: "Trusted by 200+ teams", "AI powered", "#1 in …",
"✨ Introducing v2". Especially with blur or glow.

**Why it is a tell.** It links nowhere, proves nothing, and exists because the hero looked
empty. It is the clearest single marker of a generated hero.

**Instead.** If there is real proof, give it a real place — a named client, a number the
client can defend, a link to a case. If there is no proof, leave the space empty.

### 3.4 Scroll indicators, fake stats, fake dashboards

**Banned.** The animated mouse at the bottom of the hero. Statistic bars with numbers the
client cannot prove. Mockup dashboards with invented charts.

**Why it is a tell.** Nobody needs to be taught to scroll. Invented numbers are a lie a
visitor can sometimes check. A fabricated dashboard is the visual equivalent of lorem
ipsum — it says the product was not available to photograph.

**Instead.** Real numbers with context, or no numbers. A real screenshot with real data,
cropped to the part that matters, or no screenshot.

### 3.5 Bento as reflex

**Banned as decoration.**

**Why it is a tell.** Bento is a solution to a specific problem: content items of genuinely
different weight and shape. Used because it looks current, it produces cells with a title
and nothing in them.

**Instead.** Use it when the content is actually heterogeneous, and size cells by
importance. If every cell holds the same kind of thing, it is a grid.

### 3.6 Uniform rhythm

**Banned.** Identical `padding-block` and `gap` on every section.

**Why it is a tell.** Machine-made regularity. Real compositions breathe unevenly — the
section that matters most gets more air.

**Instead.** A non-linear section scale (`--space-section-s/m/l/xl`) and a deliberate
choice per section. See [`spacing-layout.md`](./spacing-layout.md).

### 3.7 The eyebrow label

**Banned.** The small tracked uppercase label sitting above a heading:

```
ONZE DIENSTEN
Wat we voor je doen
```

**Why it is a tell.** This is the clearest single fingerprint there is. Every generated
page and every bought template does it, on every section, without exception. It is applied
because the heading looked lonely, not because the label carries information — and it
almost never does, because it usually just restates the section it sits in.

**Instead.** Delete it. If the heading needs context, put the context *in* the heading.
Separate sections with whitespace or a background change, not with a label.

**The one exception:** a visual direction that commits to tracked caps as a defining
feature — luxury and editorial do this deliberately, see [`art-direction.md`](./art-direction.md).
Then it is a system-wide decision recorded in `DESIGN.md`, used consistently, and correctly
tracked (`+0.06em` to `+0.12em`). Not a reflex applied per section.

### 3.8 Decorative rules and side bars

**Banned.**

- A short line or accent bar under a heading
- A coloured stripe down the left edge of a card, quote or section
- Icon tiles above every heading
- Dot-grid and decorative raster backgrounds
- Floating glass cards over a busy background

**Why it is a tell.** All five are filler that survives from a template. The line under the
heading in particular is a generator reflex — it appears because something had to separate
the heading from the body, and whitespace was not trusted to do it.

**Instead.** Whitespace separates. A background change separates. If a card genuinely needs
to signal a category, use the whole card — its background, its border colour — not a stripe
glued to one edge.

### 3.9 What to do instead — composition

- **Asymmetry costs five minutes and reads instantly as a human decision.** Offset the
  content column. Let an image run to the viewport edge. Use a 7/5 split, not 6/6.
- **One element breaks or overlaps the grid.** One. Not five.
- **Use `grid-template-areas` or `subgrid`** rather than a stack of flex wrappers.
  Named areas make deliberate composition possible; nested flex makes it accidental.
- **Optical alignment over mathematical.** Icons, quote marks and round shapes must align
  optically even when the bounding box disagrees. See [`craft.md`](./craft.md).

---

## 4. Components

### 4.1 `rounded-2xl shadow-lg p-6` on everything `[radius-blob]` `[shadow-heavy]`

**Banned.** One radius on all elements. Shadow as the default depth solution.

**Why it is a tell.** Equal radii on a 600px card and a 40px button is physically wrong —
the curvature reads differently at different scales. And shadow-everywhere is what happens
when depth was never designed.

**Instead.** Pick **one depth strategy per project** and hold it:

1. **Borders and contrast only.** No shadow anywhere.
2. **One subtle shadow on exactly one element type** (e.g. only popovers).
3. **Stacked colour surfaces**, no blur.

And one radius vocabulary, documented: if cards are 16px, buttons are 8px. Nested radius
is `outer − padding`, never equal.

### 4.2 Unthemed shadcn

**Banned.** Placing a shadcn component before the token layer has been replaced.

**Why it is a tell.** The default shadcn look is recognisable to everyone who builds for
the web. It is a starting point you restyle, not a design system you adopt.

**Instead.** Replace the tokens first, then place the first component. Ten minutes at the
start; hours if left to the end.

### 4.3 Emoji as icons

**Banned** in headings, buttons, feature cards, and anywhere in UI chrome.

**Why it is a tell.** Emoji render differently per platform, cannot be styled, and read as
a placeholder for an icon that was never chosen.

**Instead.** One icon set. Never mix filled and outlined in the same context.

### 4.4 Form spacing — the check almost nobody makes

**Banned.** Equal spacing between label→field and field→next field.

**Why it is a tell.** This is one of the most reliable markers of generated UI. When both
gaps are the same, the eye cannot tell which label belongs to which field, and the form
reads as a list of unrelated boxes. It is invisible to the person who built it and obvious
to anyone filling it in.

**Instead.**

```
label
  ↕ 4–8px        (tight: they belong together)
field
  ↕ 20–28px      (loose: new group)
label
```

**Check this explicitly on every form you build.**

### 4.5 Placeholder as label

**Banned.** Always.

**Why it is a tell.** The label disappears the moment the user types, so nobody can check
their own input. It also fails for screen readers and for autofill.

**Instead.** A visible `<label>` above the field. Placeholder is an example value or
nothing.

### 4.6 Magnetic buttons and hover theatre

**Banned.** Buttons that displace toward the cursor. Also `scale(1.05)` on hover with a hard
colour flip.

**Why it is a tell.** The magnetic button is everywhere and functional nowhere — it moves
the target while the user is aiming at it, which is actively worse than not moving. It
signals "we saw this effect and used it", which is the definition of a default.

`scale(1.05)` has the same problem in miniature: it is the hover state you get when nobody
decided what hover should communicate.

**Instead.** A hover state changes **two properties quietly**: border colour and background,
or background and a 2px lift. 150–200ms, on a named curve. A card whose border brightens and
shadow deepens reads as expensive; a card that grows reads as cheap.

This ban is in tension with two things elsewhere in this repo, deliberately kept so you can
see the reasoning: recipe 6 in [`../04-snippets/gsap/recipes.md`](../04-snippets/gsap/recipes.md)
implements a magnetic button, and Vengeance UI ships one. Both are now marked as
discouraged. The technique is worth understanding; the effect is not worth shipping.

### 4.7 Missing states

**Banned.** Shipping a component with only its default and hover state.

**Why it is a tell.** Missing states are a bigger tell than any colour choice. The moment a
user tabs to a button and nothing happens, or submits a form and the button does not change,
the whole thing reads as unfinished.

**Instead.** Every interactive component has: **hover, active, focus-visible, disabled,
loading, error**. Every list has: **empty, loading, error**. Focus states are visible and
brand-specific — never the browser default, never `outline: none` without a replacement.

---

## 5. Motion

### 5.1 Fade-in-up on everything

**Banned.** Every element revealing on scroll with the same duration and easing.

**Why it is a tell.** It is one line of library config applied globally. It also punishes
the second visit, when the user knows what is there and has to wait for it again.

**Instead.** One orchestrated moment per page is stronger than twenty separate effects.

### 5.2 Motion that delays reading

**Banned.** Any animation that gates content visibility.

**Why it is a tell.** It puts the interface ahead of the content. It also breaks if JS
fails, and search engines may not see the text.

**Instead.** Content is in the DOM and readable without JS. Animate from a runtime start
state (`gsap.from()`), never from a CSS `opacity: 0`.

### 5.3 `transition: all` `[transition-all]`

**Banned.**

**Why it is a tell.** It animates properties you did not intend, including layout ones,
which causes jank. It is what you write when you have not decided what should move.

**Instead.** Name the properties: `transition: background-color 160ms var(--ease-brand),
border-color 160ms var(--ease-brand)`.

### 5.4 Default easing on brand motion

**Banned.** `ease`, `linear`, `ease-in-out` on anything that expresses character.

**Instead.** Concrete values:

| Purpose | Duration | Curve |
|---|---|---|
| Micro-interaction (hover, press, toggle) | **120–200ms** | `cubic-bezier(.2,.8,.2,1)` |
| Entrance (panel, reveal, modal) | **300–500ms** | `cubic-bezier(.2,.8,.2,1)` |
| Playful / consumer brands | 300–450ms | `cubic-bezier(.34,1.56,.64,1)` |
| Exit | ~70% of the entrance | `cubic-bezier(.7,0,.84,0)` |

Document the curve as a token (`--ease-brand`) so it is used consistently and can be
changed in one place.

### 5.5 Ambient motion

**Banned.** Moving gradient backgrounds, pulsing glows, floating particles, auto-playing
carousels.

**Instead.** Motion does exactly three jobs: **show a state change, direct attention, carry
character.** Anything outside those three gets cut. `prefers-reduced-motion` is respected
from the start, not bolted on. See [`motion.md`](./motion.md).

---

## 6. Imagery

**Banned:** stock photos of a diverse team behind a laptop in an over-lit office; AI
illustrations with that smooth, symmetric, plastic quality; 3D blobs; abstract vector
blobs; isometric people; unDraw-style illustration; a generic icon in every feature card
purely to fill it.

**Why it is a tell.** All of them say the same thing: there was no real material, and
rather than say so, something was inserted. Visitors read that instantly, even when they
cannot name the stock library.

**Instead.** Real photography of the client — the building, the people, the work, the
tools, the sign, the machine, the product in use. **Ask for it. If it does not exist, say
so in the deliverable rather than substituting stock.** With no photography, go typographic
or work with colour fields — better empty and sharp than filled with stock.

One image treatment repeated everywhere (grain, duotone, a fixed crop ratio, one grade) is
cheap and reads immediately as brand. Full detail in [`imagery.md`](./imagery.md).

### 6.1 Icons that do not mean their label

**Banned.** An icon chosen because the slot needed filling. Letter placeholders (A / T / E)
standing in for icons.

**Why it is a tell.** If swapping two icons changes nothing, the icons carry no information.
A row of identical coloured circles with a glyph inside is the most template-looking element
in existence.

**Instead.** Address is a pin. Phone is a handset. Email is an envelope. If a concept has no
obvious icon, use a number, or nothing. See [`imagery.md`](./imagery.md) for the
four-custom-icons approach.

### 6.2 A rebuilt approximation of the brand mark

**Banned.** Redrawing the client's logo element "close enough" instead of extracting it.

**Why it is a tell.** It is never close enough, and the client sees it immediately. It also
means the site and the printed material will not match.

**Instead.** Cut the element out of the real logo file and use `currentColor` so it inherits
its context. See [`../06-brand/README.md`](../06-brand/README.md).

### 6.3 Crop discipline

Cropped heads, awkward cut-offs and inconsistent crop ratios read as amateur or automatic.
Fixed ratio across a set, `object-position` set deliberately per image — see
[`craft.md`](./craft.md).

---

## 7. Copy

### 7.1 Structural tells — more important than individual words

| Banned | Why it is a tell |
|---|---|
| Sentences all the same length | Human writing varies from 3 to 30 words. Uniform length is the clearest statistical marker of generated prose |
| "Niet X, maar Y" / "It's not just A, it's B" | The single most overused rhetorical construction in AI output. One per page is already too many |
| The rule of three everywhere | Three adjectives, three benefits, three columns. Sometimes use two. Sometimes five |
| Hedging: "in veel gevallen", "het is belangrijk om op te merken", "over het algemeen" | Filler that commits to nothing |
| Rhetorical bridges: "Het resultaat?", "De vraag is dan:", "Klinkt goed, toch?" | Formulaic transitions that no person writes twice on one page |
| Every section closing with a summarising sentence | A structural habit, not a choice |

### 7.2 Banned words `[banned-word]`

**Dutch:** ontzorgen · op maat gemaakte oplossingen · toonaangevend · innovatief · naadloos
· moeiteloos · uw partner in · van A tot Z · no-nonsense · we denken graag met u mee ·
kwaliteit staat voorop · til uw bedrijf naar een hoger niveau · ontdek de mogelijkheden ·
in het huidige digitale landschap · transformeer · ontgrendel · empower · het beste van
twee werelden · met passie voor ons vak · uniek in zijn soort · jarenlange ervaring
(without a number)

**English:** leverage · delve · seamless · unlock · transform · empower · elevate · robust
· cutting-edge · game-changing · best-in-class · streamline · harness · navigate ·
"Build the future of" · "Your all-in-one platform" · "Scale without limits" · "Reimagine" ·
"The future of"

### 7.3 What to do instead

- **The competitor test.** Replace the client's name with a direct competitor's. If it
  still reads fine, the copy is generic. Rewrite it. This test is also question 3 of
  [`../07-workflows/quality-review.md`](../07-workflows/quality-review.md).
- **At least one concrete, checkable number per page**: "sinds 1994", "gemiddeld 3
  werkdagen", "27 monteurs", "binnen 40 km van Antwerpen".
- **At least one sentence that sounds like the owner said it.** Ask for a quote if there
  is none.
- **Name things the way the client names them.** Trade jargon is authenticity; marketing
  jargon is noise.
- **Local anchoring**: place names, region, a local reference. No generator adds this on
  its own, and it is the fastest human signal available.
- **Error and empty states**: say what went wrong and what the next step is. Never vague,
  never apologetic.
- **Say what you do NOT do.** A section stating plainly what the company does not offer
  ("we trainen geen eigen modellen", "we doen geen SEO", "we werken niet met onderaannemers")
  wins more trust than ten promises. It works because **a generator never says no** — it only
  ever offers more. An explicit refusal is unmistakably human and is evidence that real
  choices were made. This is the single most effective trust device available and almost
  nobody uses it.
- **Sell the result, not the technology.** "Gemiddeld 10 uur per week bespaard" beats
  "geavanceerde AI-oplossingen". Never put the technology in the headline.
- **Never promise what you do not control.** No "meer omzet", no invented percentages.

### 7.4 Visible placeholder and meta text `[banned-word]`

**Banned.** Anything that betrays unfinishedness on a live page: "binnenkort beschikbaar",
"wordt aangevuld", "(placeholder)", "voorbeeldtekst", "lorem ipsum", "coming soon".

**Why it is a tell.** It says the page shipped before it was ready, and it makes a visitor
wonder what else is unfinished. A visible "certificaten worden binnenkort aangevuld" is
worse than having no certificates section at all.

**Instead.** Leave the section out, or hide it, until there is real content. An honest gap
is invisible; a labelled gap is not.

Dutch tone of voice: [`../05-copy/copywriting.md`](../05-copy/copywriting.md).
Dutch micro-typography: [`../05-copy/micro-typografie-nl.md`](../05-copy/micro-typografie-nl.md).

---

## The test that catches what the list misses

> Would this page be indistinguishable from the same page built for a different client in a
> different sector, with the name and the colour swapped?

If yes, none of it is specific, and no rule above will save it. Go back to
[`../00-start/project-kickoff.md`](../00-start/project-kickoff.md) and build from what makes
this client different.

## Lifting a ban

Add to the project's `DESIGN.md`:

```markdown
## Opgeheven verboden

- **backdrop-blur op de sticky header** — de header ligt over productfotografie die tot de
  rand doorloopt; een dekkende balk zou de foto's afsnijden. Getest op contrast: 5.1:1.
```

And in the code, on the same line or the line above:

```tsx
{/* slop-check-ok: sticky header over full-bleed fotografie, zie DESIGN.md */}
```

A suppression without a reason of at least ten characters is rejected by the scanner.

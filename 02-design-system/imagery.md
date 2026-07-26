# Imagery

Which image to use at all. How to crop, grade and frame it once you have it is in
[`craft.md`](craft.md) — aspect ratios, `object-position`, the single grade, grain, logo
rows. This file is the decision that comes before that one.

## Banned by default

Each of these is a tell. Not because it is ugly, but because it appears on ten thousand
other sites and signals that nobody chose it.

| Banned | Why it reads as generated |
|---|---|
| Stock photo of a diverse team behind a laptop in an over-lit office | The most-licensed image category on earth. The lighting is studio, the laptop is empty, nobody is working. Visitors have seen this exact frame on a competitor's site |
| AI illustration — smooth, symmetric, plastic, slightly wrong hands | The surface has no material. Every gradient is soft, every edge is rounded, and the composition is centred. Recognisable in under a second in 2026 |
| 3D blobs, gradient meshes, "abstract shapes" | 2021 crypto-startup default. Says nothing about the business |
| Abstract vector blobs behind a section | Decoration in place of content. Usually added because the section felt empty, which is a layout problem |
| Isometric people at tiny desks | One illustration house's style, resold to everyone |
| unDraw-style flat figures with one accent colour | Free, therefore everywhere. Also fights whatever accent you actually chose |
| A Lucide/Heroicon in every feature card purely to fill it | A generic `Zap` next to "Snel" adds zero information. It is padding with an SVG in it |

The last one deserves a rule of its own: **an icon that could be swapped for any other icon
without changing the meaning should not be there.** Remove it and see if the card gets
worse. Usually it gets better.

## What to use instead

Real photographs of the client. Specifically:

- The building, the front, the sign, the entrance
- The people, at work, not lined up against a wall
- The work in progress — the half-finished kitchen, the open machine, the proof on the press
- The tools, the van, the workshop, the stock
- The product in use, in a real place, by a real person
- The paperwork, the plan, the drawing, the sample board

**Ask for these explicitly, by name, as a list.** "Do you have photos?" gets "some, I
think". A list gets photos. Put the request in the kickoff (`../00-start/project-kickoff.md`)
and state the count you need per section.

**If they do not exist, flag it in the deliverable. Do not silently substitute stock.**
A `> **NEEDS INPUT**` marker in `DESIGN.md` and a visible placeholder in the build is the
correct behaviour. A stock photo dropped in "for now" ships. It always ships.

Half-usable client photos beat good stock. Phone photos with a bad crop can be re-cropped,
graded and grained into a set (`craft.md`). A stock photo cannot be made specific.

## The no-photography strategy

The default failure is: no photos exist, so stock appears. There is no situation where that
is the best available move. Pick one of these instead, commit to it across the whole site,
and it reads as an art direction rather than an absence.

**1. Typographic.** The image *is* the type. Oversized pull quotes, a number set at 8rem, a
statement heading filling a full-bleed section, a list of services set large enough to be
the visual. Works for consultancies, law, agencies, anything where the offer is words.
Needs a display face doing real work and a strict scale — see `typography.md`.

**2. Colour fields.** Flat or two-stop sections of brand colour carrying only text. Change
the field colour between sections to create rhythm. Add grain at 0.02–0.04 so the flat area
has a surface (`craft.md`). Cheap, fast, and looks deliberate at any budget. Fails only if
the palette is weak — which is a separate problem to fix first.

**3. The client's own documents and materials.** Scan them. A technical drawing, a floor
plan, a price sheet, a certificate, a route map, a swatch of the material they actually
work in — steel, oak, linen, concrete, paper stock. Scanned at 600dpi and used at 20%
opacity as a section background, or full-bleed and cropped hard, this is the most specific
imagery available and it costs a scanner. Also: a photo of the material itself as a
texture, not as a subject.

**4. Pattern derived from the mark.** Take one element of the logo — an angle, a curve, a
grid, a dot — and build a repeating pattern or a set of section dividers from it. Use it in
one accent colour, at low contrast, at three or four sizes. This is how identity systems
have handled "no photography" for fifty years.

**5. Data and diagrams as the visual.** A process drawn as four steps, a map of the service
area, a real chart from real numbers, a timeline, a comparison table set with care. Only if
the data is real. A fabricated chart is the same offence as a fabricated testimonial
(`../05-copy/copywriting.md`).

Mixing two of these is fine. Mixing four is the same as having no direction.

## One treatment, repeated

Whatever the source, put the whole set through **one** treatment and never vary it:

- One grade (saturation, contrast, brightness — under 10% of anything)
- One crop ratio per set
- One optional colour move: duotone in the brand hue, or a warm/cool bias
- One grain level

This is the cheapest thing on this page and it is the one that reads immediately as brand.
It also rescues a mixed-quality set: four graded phone photos look like a decision, three
good photos and one great one look like an accident. Implementation values are in
[`craft.md`](craft.md#image-treatment).

Duotone specifically: use it when the photos are weak, inconsistent, or when you need a
figure to sit under text. Use the brand accent for the highlights and a near-black neutral
for the shadows, never two accents.

## Icons

- **One set, project-wide.** Lucide by default (`../01-standards/stack.md`). Never Lucide
  plus Heroicons plus one SVG from a brand kit.
- **Never mix filled and outlined** in the same context. Filled versus outlined is a state
  signal (active nav item, favourited) or it is nothing.
- Stroke width, optical sizing and alignment are in [`craft.md`](craft.md#icons).

**The strongest move: draw four custom icons, use the standard set for everything else.**

Four, not forty. They go on the core concepts — the three or four services, the process
steps, the one thing the business actually sells. Everything else (chevron, close, search,
external link, check, menu, arrow) stays Lucide.

Why this split works:

- The four appear in the highest-attention places on the site and get seen repeatedly, so
  they do the work of a brand mark. The other forty are UI furniture that nobody looks at
  directly — a custom chevron buys nothing and costs consistency.
- A full custom icon set is a week and it will be uneven. Four icons is an afternoon and
  they can be genuinely good.
- Custom icons *earn* their card. The "icon in every feature card" ban above is about
  generic icons. An icon drawn for that specific service is content.

Draw them on the same grid and at the same stroke width as the standard set (Lucide: 24px
box, ~2px internal padding, 1.5 stroke) so the two families read as one. If they do not sit
next to a Lucide icon convincingly, redraw them, do not adjust the Lucide ones.

## Illustration

Illustration is right when:

- You are explaining a **process or a system** that has no photograph (how a claim is
  handled, how the heat pump works, what happens to the data)
- The service is **abstract** — insurance, software, legal, finance — and photographs of it
  are inherently fake
- The audience is **children or education**, where illustration is the native register
- The subject **cannot be photographed** for privacy or safety reasons (patients, minors,
  a site under construction)

The rule: **a bought illustration pack is as recognisable as stock photography.** Blush,
Storyset, Humaaans, unDraw, any Envato bundle — other people are using the same characters
on the same day. If illustration is the direction, it is commissioned or it is not
illustration, it is stock with fewer pixels.

If the budget does not allow commissioning: go typographic or use colour fields instead.
That is a real art direction. A bought pack is not.

## Third-party logos

Client logos, partner logos, integration logos, payment icons.

- **Optical sizing, never uniform width or height.** Supplied SVGs have wildly different
  internal padding and aspect ratios. Cap by optical height — wordmarks ~24px, round marks
  ~30px — inside a fixed box with `object-fit: contain`. The CSS is in
  [`craft.md`](craft.md#image-treatment).
- **Greyscale by default**, 60–70% opacity, full colour on hover only if the row is
  interactive. Twelve brand palettes in one strip will out-shout your own accent.
- **Normalise the padding inside supplied SVGs.** Open them, check the `viewBox` against the
  actual drawn bounds, and trim. A logo delivered with 20% baked-in whitespace will read as
  30% smaller than its neighbour no matter what CSS you write.
- Use SVG, not PNG. Set `width`/`height` to prevent CLS.
- Only logos you have permission to display. Ask, and record the answer.
- Payment icons: use the official brand SVGs at their official aspect ratios. Never redraw
  a Visa mark, never put them all in identical square boxes.

## Product screenshots

- **Real screenshots of the real product with real data.** Never a fabricated dashboard,
  never invented numbers, never a mocked-up UI that does not exist. It is the same rule as
  invented statistics in `../05-copy/copywriting.md`.
- **Crop to the part that matters.** A full 1440px browser window scaled into a 600px column
  is unreadable. Show the one panel the sentence is about, at a size where the text in it
  can actually be read.
- Anonymise real customer data — change names and figures to realistic equivalents, not to
  "Lorem" or "Test User 1".
- Take them at 2× DPR on a clean profile: no browser chrome unless it is the point, no
  extensions, no notification badges, correct locale so the dates and currency are nl-BE.
- One background, one shadow treatment, one corner radius across every screenshot on the
  site.

## Sourcing free photography

Use only when the image is genuinely generic (a landscape, a material, a texture) and never
for anything that implies "this is us" or "these are our customers".

| Source | What it is good for | Limits |
|---|---|---|
| Unsplash / Pexels | Textures, landscapes, materials, still life, abstract surfaces | The popular images are on thousands of sites. No model or property release — do not use recognisable faces in advertising. Licence terms have changed before |
| Wikimedia Commons | Real places, buildings, machines, historical material | Licences vary per file (CC-BY, CC-BY-SA, PD). Attribution is mandatory and must be visible. Check every single file |
| Flickr Commons / national archives | Historical and documentary material with real character | "No known copyright restrictions" is not the same as public domain. Quality and resolution vary |
| Government and institutional image banks (Flemish/Belgian/EU) | Regional, infrastructure, public-sector subjects | Usually restricted to editorial or non-commercial use. Read the specific terms |
| Manufacturer and supplier press kits | Products the client actually sells or installs | Usually free to use for resellers, often with brand rules attached. Ask the supplier |
| Client's own suppliers and partners | On-brand, specific, free | Requires an email. Send the email |

Rules that apply to all of them: no recognisable faces without a release; no logos or
trademarks visible in the frame; download the licence text and store it with the asset;
grade every one of them into the project's single treatment so they do not read as imported.

## Alt text

The decision tree — decorative versus informative versus functional, and what to write in
each case — is in [`../01-standards/accessibility.md`](../01-standards/accessibility.md).
Follow it there. Do not invent a second rule set here.

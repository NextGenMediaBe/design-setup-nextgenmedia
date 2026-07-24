# Content sections

Everything between the hero and the footer. For each: what it is for, the layout, mobile
behaviour, and the mistake people make.

---

## Logo strip / social proof bar

**Job:** borrow credibility in one second.

Thin section, `py-12`, directly under the hero. Logos greyscale at `opacity-50`, uniform
**optical** height (not uniform bounding box — a wide wordmark and a square mark at the
same pixel height look wrong; match by visual weight). Introduce with a small line:
"Gebruikt door 40+ Vlaamse bedrijven", not "Trusted by industry leaders".

**Mobile:** 3 per row wrapping, or a slow CSS marquee. Not a carousel with controls.

**Mistake:** logos of companies that are not clients. If there are fewer than four real
ones, use a different proof pattern — one named testimonial beats six borrowed logos.

---

## Feature grid

**Job:** show the range of what something does.

Use it when you have **4–6 genuinely parallel items**. Below four, use an alternating split.
Above six, group them or cut them.

```
2 items → 2 columns, wide, generous
3 items → 3 columns
4 items → 2×2 (better than 4 across — 4 across gets cramped)
6 items → 3×2
```

Per item: icon (20–24px, consistent stroke, `text-muted` not accent), a 2–5 word title,
and 1–2 sentences. **Uneven lengths are fine and look more real** than three copy blocks
padded to the same length.

Cards or no cards? No cards is usually better — it is quieter and lets whitespace do the
grouping. Use cards when the items are clickable or the background is busy.

**Mobile:** single column stack, `gap-8`. Not a horizontal scroller — feature copy needs
to be readable, not swiped past.

**Mistake:** decorative icons that are interchangeable. If swapping two icons changes
nothing, the icons are noise — drop them and use numbers or nothing.

---

## Alternating split content

**Job:** explain 2–4 things properly, one at a time.

Image one side, copy the other, alternating direction each row. `gap-12 lg:gap-20`,
`items-center`, `py-16` between rows.

This is the most underused and most effective marketing pattern. It gives each point room
to be explained instead of compressed into a card.

- Asymmetric split (`7/5`) reads better than `6/6`.
- Optional per row: a small eyebrow label, then `h3`, then copy, then a text link.
- Do not alternate more than four times — it becomes a rhythm the eye tunes out.

**Mobile:** stack, **image always below the copy** regardless of the desktop order.
Alternating on mobile just looks broken.

---

## Bento grid

**Job:** show a feature set with visual hierarchy — one thing matters more than the rest.

Asymmetric grid of cards of different sizes. Genuinely effective, and heavily overused
since 2023, so it needs to earn its place.

```
┌───────────────┬───────┐
│               │       │
│   Feature     ├───────┤
│   (2×2)       │       │
├───────┬───────┴───────┤
│       │               │
└───────┴───────────────┘
```

- Vary size **by importance**, not to fill the grid.
- Each cell has *one* visual idea: a chart, a screenshot detail, a big number, a diagram.
- Consistent padding and radius across all cells, whatever their size.

**Mobile:** stack in importance order. A bento that becomes a plain stack on mobile is
correct — do not try to preserve the asymmetry at 375px.

**Mistake:** cells with nothing in them but a title. If a cell has no visual, it does not
belong in a bento.

---

## Stats

**Job:** one number that changes the reader's mind.

2–4 numbers, large display type, `tabular-nums`, with a short label under each. Big
numbers, small labels — the ratio is the whole effect.

- Real numbers only. An invented "10,000+ users" is a lie that a visitor can often check.
- Give context: "€2.4M bespaard voor klanten in 2025" beats "€2.4M".
- Count-up animation: fine, once, on scroll in. Put the final value in the HTML so it is
  correct without JS — [`../04-snippets/gsap/recipes.md`](../04-snippets/gsap/recipes.md).

**Mobile:** 2×2 grid, or stacked with a divider between.

---

## Process / how it works

**Job:** remove the fear of "what happens after I contact them".

3–5 steps, numbered. Vertical timeline or horizontal row.

- Number each step visibly — the numbering *is* the pattern.
- One verb-led title per step, one sentence.
- Include a duration if you can ("binnen 48u") — it converts.
- Connecting line between steps: a `1px` border, not a decorative graphic.

**Mobile:** vertical, with the line running down the left through the numbers.

**Mistake:** five steps where three would do, and steps that describe internal process
rather than what the client experiences.

---

## Testimonials

**Job:** proof from someone who is not you.

**One testimonial, given real space, beats six in a grid.** A single quote at
`--text-3xl`, `max-w-3xl`, with lots of padding and a real name, role, company and photo,
is the strongest version of this section.

Grid of three only when the quotes are short and genuinely different in what they praise.

Required per quote: **real name, real role, real company.** A quote attributed to
"Sarah M., Marketing Manager" reads as fabricated whether or not it is.

- Do not use star ratings unless they come from a real review platform, linked.
- Photos: real ones or none. Generated headshots are recognisable and destroy trust.
- Marquee of quotes: only for short ones, and pause on hover so they can be read.

**Mobile:** one at a time, stacked. No carousel unless there are more than four.

---

## FAQ

**Job:** answer the objection that stops the purchase.

Accordion, `max-w-3xl`, left-aligned. 5–8 questions.

- Write the questions in the visitor's words — "Wat kost het?" not "Prijsstelling".
- Answer directly in the first sentence, then elaborate.
- Put the hardest objection first (price, contract length, switching cost). Burying it
  looks evasive.
- First item open by default, or all closed. Never all open — that is a wall of text.
- Add `FAQPage` JSON-LD — see [`../01-standards/seo.md`](../01-standards/seo.md).

**Accessibility:** a real `<button>` per header, `aria-expanded`, `aria-controls`, and the
panel toggled with `hidden` — not `height: 0` with the content still tabbable.

**Mobile:** identical. This pattern is already mobile-first.

---

## Pricing

**Job:** let someone self-select and act.

2–4 tiers. Above four, nobody chooses.

- **Highlight one tier** — border in the accent, a subtle scale, a "Meest gekozen" label.
  Not three simultaneous highlights.
- Feature list per tier: the differences at the top, the shared items below. Nobody reads
  22 identical checkmarks.
- Show the price. "Contact us" for every tier loses people who would have bought.
- Monthly/yearly toggle: show the saving on the toggle itself, not in fine print.
- Include what happens next: "Geen kaart nodig", "Maandelijks opzegbaar".
- VAT: state whether prices are excl. or incl. BTW. Belgian B2C must show incl.

**Mobile:** stack, **highlighted tier first**. Do not preserve the desktop order.

**Mistake:** the middle tier highlighted purely by convention when the business actually
wants to sell the top one.

---

## CTA section

**Job:** the last ask.

Full-bleed, contrasting background (dark if the page is light), `py-24 md:py-32`,
centered, one heading, one line, one button.

- Restate the value, do not repeat the hero headline verbatim.
- **One** button. This is the section where a second option costs the most.
- Remove risk right under the button: "Gratis. Geen kaart nodig."

**Mobile:** full-width button, generous padding.

---

## Contact

**Job:** make getting in touch feel easy and low-risk.

Split: form on one side, human details on the other (address, phone, email, opening hours,
a map or a photo of the actual office).

- **3–5 fields.** Every field costs replies. Name, email, message is usually enough.
- Labels above inputs, always visible. Placeholder-as-label fails the moment someone types.
- Say what happens next: "We antwoorden binnen één werkdag."
- Errors inline on blur, tied to the input via `aria-describedby`.
- Success state replaces the form — do not just show a toast and leave the filled form there.
- Add `LocalBusiness` JSON-LD with the address and opening hours.

**Mobile:** form first, details below. Phone number as a `tel:` link.

**Mistake:** an embedded Google Map iframe that loads 900kb and sets cookies before
consent. Use a static map image linking out to Maps.

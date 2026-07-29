# Audit

Forty binary checks and three written answers. Every box is yes or no — if it needs a
"mostly", the answer is no. **Deliver the filled-in audit**, not a claim that it passed.

This is the last step. Do the **AI-tell pass** and the **browser verification** first —
[`../AI-RUNBOOK.md`](../AI-RUNBOOK.md) Phase 7 and Phase 8. They are separate passes on
purpose: this list checks whether the work meets the standard, those check whether it reads
as made by a person.

Run the automated pass first; it clears about a third of this list for you.

```bash
npm run design:check      # slop-check: the machine-enforced anti-patterns
npm run design:audit      # screenshots at 390/768/1440 + contrast + heading wraps
npm run typecheck && npm run lint && npm run build
npx unlighthouse --site http://localhost:3000
```

Targets: Performance ≥ 90, **Accessibility 100**, Best Practices ≥ 95, SEO ≥ 95.
Accessibility below 100 is a defect, not a score.

---

## Colour

- [ ] 1. Every colour on screen resolves to a semantic token. No stray hex in components.
- [ ] 2. Each brand colour's origin is written in `DESIGN.md` and traces to something real.
- [ ] 3. One accent, and it appears at most twice in any single viewport.
- [ ] 4. Neutrals are tinted toward the brand hue. No `#808080`, no `#fff`, no `#000`.

## Type

- [ ] 5. Two or three type roles, each with a stated job. No hierarchy by weight alone.
- [ ] 6. Headings ≥ 40px carry `-0.02em` to `-0.035em`; uppercase labels carry `+0.06em`+.
- [ ] 7. Body measure sits between 45 and 75 characters at every breakpoint.
- [ ] 8. The type scale ratio is written down and every size derives from it.

## Layout

- [ ] 9. The section order comes from the brief and the sector playbook, not the default order.
- [ ] 10. Section rhythm varies — the most important section has visibly more air.
- [ ] 11. No eyebrow labels above headings, no decorative rule under a heading, no coloured stripe down a card edge.
- [ ] 12. Gaps inside a group are visibly smaller than the gaps around it.

## Components

- [ ] 13. One documented radius vocabulary; nested radii differ (`inner = outer − padding`).
- [ ] 14. One depth strategy, held throughout (borders / one shadow / stacked surfaces).
- [ ] 15. Every interactive element has hover, active, focus-visible, disabled, loading, error.
- [ ] 16. **Form spacing checked**: label→field 4–8px, field→next field 20–28px. No placeholder-as-label.

## Motion

- [ ] 17. One or two moments of motion on the page. Not one per section.
- [ ] 18. No `transition: all`; the brand curve is a token and is used consistently.
- [ ] 19. `prefers-reduced-motion` verified by enabling it in DevTools, not assumed.
- [ ] 20. All content is readable with JavaScript disabled.

## Imagery

- [ ] 21. No stock photography, AI illustration, 3D blobs or isometric people.
- [ ] 22. Images are the client's own — or their absence is flagged in the deliverable.
- [ ] 23. One image treatment repeated across the whole set (crop ratio, grade, grain).
- [ ] 24. Icons come from one set; filled and outlined are not mixed.

## Copy

- [ ] 25. No banned words from `../02-design-system/anti-patterns.md` §7.2.
- [ ] 26. Sentence lengths vary — at least one under five words and one over twenty. No tricolons, no visible placeholder text.
- [ ] 27. At least one concrete, checkable number, and at least one local anchor.
- [ ] 28. Every button says what happens. No "Klik hier", "Lees meer", "Ontdek".

## Micro-typography (NL)

- [ ] 29. Zero em-dashes (—) in Dutch copy.
- [ ] 30. Curly quotes and the correct apostrophe (’) everywhere. No straight quotes.
- [ ] 31. Sentence case in headings. No English Title Case.
- [ ] 32. NL number, date, time and phone notation; `&nbsp;` in `€ 1.200`, `10 %`, `nr. 5`.

## Accessibility

- [ ] 33. Keyboard-only pass completed: every stop visible, order logical, no traps, skip link works.
- [ ] 34. Contrast 4.5:1 body, 3:1 large text and UI, 3:1 on the focus indicator.
- [ ] 35. Semantic HTML before ARIA: one `<h1>`, real landmarks, real `<button>` and `<a>`.
- [ ] 36. Forms: `<label for>`, `autocomplete`, `inputmode`, errors via `aria-describedby` and in text.

## Performance and delivery

- [ ] 37. LCP < 2.5s, INP < 200ms, CLS < 0.1, measured on the built output.
- [ ] 38. No horizontal scroll anywhere from 320px to 1920px. Tap targets ≥ 44×44px.
- [ ] 39. Unique NL title and description per page, JSON-LD present, OG image is not a hero screenshot.
- [ ] 40. `noindex` removed, forms tested on the production URL, cookie banner rejects as easily as it accepts.

---

## The three questions

Answer in prose. These are the part that cannot be automated, and they are what the audit
is actually for.

### 1. What is the signature element of this page, and why would someone remember it?

Name the one thing. If the honest answer is "the overall feel" or "it's clean", there is no
signature element and step 3 of [`build-website.md`](./build-website.md) was not completed.

### 2. What aesthetic risk did I take, and how do I defend it?

State the risk and the defence. The defence has to connect to the client — what they do,
what they make, where they are. "To make it more interesting" is not a defence. If there
was no risk, say so, and accept that the result is safe and forgettable.

### 3. If I replace the client's name with their biggest competitor's, what falls over?

Go through the page and swap the name. Something must break — a claim only this client can
make, a photo only they have, a number only they can prove, a way of speaking only they use.

**If the answer is "nothing", the work is generic. Go back to step 3 and start over.**
This is the only question on the list that can send a whole project back.

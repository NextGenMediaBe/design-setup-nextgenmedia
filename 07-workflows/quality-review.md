# Workflow: quality review

Run this before anything ships. Two passes: automated, then by eye. The automated pass is
cheap and catches the mechanical mistakes; the eye pass catches the ones that matter.

## Pass 1 — automated

```bash
npx impeccable detect
```

[Impeccable](https://github.com/pbakaus/impeccable) (Apache-2.0, Paul Bakaus) is a
zero-LLM detector with ~46 deterministic rules for exactly the anti-patterns in
`02-design-system/anti-patterns.md`: default framework palettes, overused fonts, purple
gradients, glassmorphism, contrast failures, off-system values. It has a static-HTML mode,
a live-URL mode via Puppeteer, and a screenshot contrast sampler.

If the project has a `DESIGN.md` (see `02-design-system/DESIGN-template.md`), the detector
also flags any colour, font, radius or size that is **not in the system** — which is the
single most useful check available, because drift is invisible when you are inside it.

Suppress a finding only with a written reason:

```jsonc
// .impeccable/config.json
{ "ignore": [{ "rule": "…", "path": "…", "reason": "why this is deliberate" }] }
```

Then the usual gates — all three must pass, no exceptions:

```bash
npm run typecheck && npm run lint && npm run build
```

And Lighthouse on the built site, not the dev server:

```bash
npx unlighthouse --site http://localhost:3000
```

Targets: Performance ≥ 90, Accessibility **100**, Best Practices ≥ 95, SEO ≥ 95.
Accessibility below 100 is a defect, not a score.

## Pass 2 — by eye

Work down the list. Anything that fails goes back before review continues.

### Structure
- [ ] Can you name, in one sentence, what this page wants the visitor to do?
- [ ] Squint until the text blurs. Is there still a clear hierarchy?
- [ ] Is there a section you could delete with nothing lost? Delete it.
- [ ] Do the sections vary in shape, or is every one "centered heading + three cards"?

### Type
- [ ] Body text ≥ 16px, line-height ≥ 1.6, measure ≤ 75ch.
- [ ] Headings have tight line-height and negative tracking at large sizes.
- [ ] Two typefaces, no more.
- [ ] No orphan words in headings (`text-wrap: balance` applied).

### Colour
- [ ] Every colour on screen traces back to a token. No stray hex values.
- [ ] Body text ≥ 4.5:1, large text ≥ 3:1. Measured, not estimated.
- [ ] No pure `#fff` or `#000`.
- [ ] Count the hues: one accent plus semantics, nothing else.

### Space
- [ ] Gaps inside a group are visibly smaller than gaps around it.
- [ ] Section padding ≥ 96px on desktop.
- [ ] No arbitrary values (`mt-[37px]`) — everything on the scale.

### States — the ones usually missing
- [ ] Hover, focus-visible, active, disabled on every interactive element.
- [ ] Empty state for every list, table and search.
- [ ] Loading state — skeletons that match the real layout, not a spinner.
- [ ] Error state, with a message that says what to do next.
- [ ] Form validation: inline, on blur, with the error tied to the input via `aria-describedby`.

### Responsive
Check at **375, 768, 1024, 1440**. At each:
- [ ] No horizontal scroll.
- [ ] Nothing overlaps or clips.
- [ ] Tap targets ≥ 44×44px.
- [ ] The mobile layout looks decided, not inherited.

### Motion
- [ ] `prefers-reduced-motion` honoured — verify by enabling it in DevTools.
- [ ] Content is readable with JS disabled.
- [ ] Reveals fire once, travel ≤ 24px, stagger ≤ 300ms total.
- [ ] Nothing autoplays for more than 5s without a control.

### Accessibility
- [ ] Keyboard-only: tab through the whole page. Every stop is visible, order is logical,
      nothing is a trap.
- [ ] Landmarks present: `header`, `nav`, `main`, `footer`. One `h1`. No skipped levels.
- [ ] Images have alt text; decorative images have `alt=""`.
- [ ] Skip-to-content link.
- [ ] Screen reader spot check on the nav and the primary form.

### Content
- [ ] No lorem ipsum, no "Feature One", no placeholder logos.
- [ ] No invented statistics or testimonials.
- [ ] Dutch copy is spell-checked and actually Flemish where it should be.

### Meta
- [ ] Title and description per page, unique, under 60/155 characters.
- [ ] OG image renders correctly (check on a real link preview).
- [ ] Favicon set, including the 180px apple-touch-icon.
- [ ] `sitemap.xml` and `robots.txt` present.
- [ ] Canonical URLs. `noindex` removed from production.

### Final
- [ ] 404 page designed.
- [ ] Forms actually submit, and the submission actually arrives.
- [ ] All external links work; no `localhost` or Vercel preview URLs left in the markup.
- [ ] Cookie/analytics setup matches what the privacy policy claims.

## The last question

> Would this page be indistinguishable from the same page built for a different client,
> with the name swapped?

If yes, nothing on it is specific to this client. That is the failure worth catching, and
no automated tool will catch it for you.

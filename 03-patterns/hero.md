# Hero

The first screen. Its only job is to answer *what is this and is it for me* in about three
seconds, and to offer one obvious next step.

## Rules

1. **Not `100vh` by default.** A full-height hero hides the fact that there is a page
   below it. Content-height with generous padding (`pt-32 pb-24` desktop) is right most of
   the time. Use `min-h-screen` only when the hero is a genuine statement piece with
   nothing to scroll past.
2. **Show the second section.** Leave 10–15% of the next section visible at 1440×900. That
   single detail measurably increases how many people scroll.
3. **One primary CTA.** A secondary link is fine — as a link or a ghost button, never a
   second filled button. Two equally weighted buttons means no decision was made.
4. **The headline says what it does, not how it feels.** "Boekhouding voor zelfstandigen,
   zonder het gedoe" beats "Empowering your financial journey".
5. **Subhead is one sentence, max 20 words**, and adds information the headline did not.
   If it just restates the headline, delete it.
6. **No badge above the headline** unless it links somewhere real and says something
   specific. "✨ Introducing v2.0" that links nowhere is the single clearest tell of a
   generated page.

## Variants

### A. Centered, type-led
**When:** strong headline, no product to show, brand-forward. Agencies, consultancies,
services.

```
        [small eyebrow — optional, tracked caps]
              Very large headline,
             two lines, balanced
        One sentence of supporting copy, 45–60ch
              [ Primary CTA ]  Secondary →
```

Container `max-w-4xl`, everything centered, headline at `--text-6xl` with
`tracking-tight`. Lives or dies on the typography — see
[`../02-design-system/typography.md`](../02-design-system/typography.md).

**Mobile:** unchanged, sizes clamp down. The easiest variant to get right on mobile.

### B. Split — copy left, visual right
**When:** there is a product screenshot, a photo, or a real graphic. The default for SaaS
and product sites.

Grid `7/5` or `6/6`, `gap-12 lg:gap-16`, `items-center`. Copy left-aligned.

Let the visual **bleed past the container** on the right edge — it implies the interface
continues beyond the frame and stops the layout looking like two boxes.

**Mobile:** stack, copy first. The image goes below the CTA, not between the headline and
the button.

### C. Full-bleed image or video background
**When:** hospitality, real estate, events, restaurants — anywhere the photography *is*
the product.

Non-negotiables:
- A scrim between image and text: `bg-gradient-to-t from-black/70 via-black/40 to-black/10`.
  Text on an unscrimmed photo fails contrast at some viewport size, always.
- Video: `muted playsinline loop`, a poster image, and **never** on mobile data — serve the
  poster below `md`.
- Verify contrast against the *lightest* region of the image, not the average.

**Mobile:** poster image, bottom-aligned text, more scrim.

### D. Minimal / editorial
**When:** portfolios, studios, high-end brands. The confidence play.

One enormous headline, one line of copy, one text link. Nothing else on the first screen.
Works only if the typography is genuinely good and the rest of the site earns it.

### E. Split with form
**When:** lead generation is the entire point. Consultations, quotes, demos.

Copy left, form card right. Keep the form to **3 fields maximum** above the fold — name,
email, and one qualifier. Every extra field costs conversions.

**Mobile:** form first if the traffic is paid and intent is high; copy first for organic.

### F. Hero with proof strip
**When:** trust needs to be established immediately.

Any variant above, plus a thin strip at the bottom of the hero: client logos, a rating, or
a single number. Keep it quiet — `opacity-60`, small, greyscale logos.

**Only with real logos and real numbers.** Fake trust is worse than no trust.

## Implementation notes

```tsx
<section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
  <div className="container-page max-w-4xl text-center">
    <h1 className="text-balance">…</h1>
    <p className="mx-auto mt-6 max-w-xl text-lg text-muted">…</p>
    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
      <Button size="lg">Primary</Button>
      <Link className="…">Secondary →</Link>
    </div>
  </div>
</section>
```

- The `h1` is **server-rendered text**, never injected by an animation. Split it for a
  reveal only after it is already in the DOM — see
  [`../04-snippets/gsap/recipes.md`](../04-snippets/gsap/recipes.md), recipe 2.
- The hero image gets `priority` on `next/image`. It is the LCP element on nearly every
  page; getting this wrong costs a second.
- Buttons stack full-width on mobile (`w-full sm:w-auto`), primary on top.
- If the header is transparent over the hero, the hero needs top padding equal to the
  header height plus its normal padding, and the header needs a solid state on scroll.

## Common mistakes

| Mistake | Why it hurts |
|---|---|
| `min-h-screen` + `justify-center` on every hero | Nothing signals there is more page |
| Two filled buttons of equal weight | No decision was made for the visitor |
| Headline that could belong to any company | Nothing was learned about the client |
| Gradient background + gradient text + gradient buttons | The generated-page signature |
| Animated blobs or particles behind the text | Costs performance, adds nothing, dates instantly |
| Hero image without `priority` | Directly damages LCP |
| Scrim omitted on a photo background | Contrast failure at some viewport |

# Workflow: een site bouwen

The order matters. Most of what makes a build go wrong is doing step 4 before step 2.

## 1. Kickoff

Answer [`../00-start/project-kickoff.md`](../00-start/project-kickoff.md). Take the stated
defaults where nothing is specified, and say which defaults you took.

Output: a page list, and a section outline per page.

## 2. Design decisions — before any component

Write `DESIGN.md` in the project root from
[`../02-design-system/DESIGN-template.md`](../02-design-system/DESIGN-template.md).

- Palette per [`../02-design-system/color.md`](../02-design-system/color.md). If the client
  has a brand, start from `06-brand/<klant>/`. If not, generate one.
- Two typefaces from [`../02-design-system/typography.md`](../02-design-system/typography.md).
- 6–12 named rules. This is the part that steers everything after it.

Then write `app/globals.css` from
[`../02-design-system/tokens/globals.css`](../02-design-system/tokens/globals.css),
replacing only the BRAND block.

**Do not skip to building "and set the colours later".** Retrofitting a palette across
40 components is hours of work that this step avoids.

## 3. Scaffold

```bash
npx create-next-app@latest <naam> --typescript --tailwind --app --src-dir=false --import-alias "@/*"
cd <naam>
npx shadcn@latest init
```

Structure per [`../01-standards/project-structure.md`](../01-standards/project-structure.md).
Fonts via `next/font`. Then immediately restyle the shadcn primitives you will use
(button, input, card) to the token layer — before building pages, so every page inherits
the right look instead of being corrected later.

## 4. Build sections, not pages

One component per section, in `components/sections/`. Each one follows its blueprint in
[`../03-patterns/`](../03-patterns/).

A page is then a list of sections and nothing else:

```tsx
export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <Features />
      <CaseStudy />
      <Testimonial />
      <Pricing />
      <Faq />
      <CtaBand />
    </>
  );
}
```

Build in this order, and check each one at 375px before moving on:

1. Header and footer — they frame everything else
2. Hero
3. The section that carries the main argument
4. Everything else
5. CTA

**Write real copy as you go**, per [`../05-copy/copywriting.md`](../05-copy/copywriting.md).
Placeholder text that survives to review means the layout was designed for the wrong
content lengths.

## 5. States

Before styling anything further, build the states that always get forgotten:

- empty, loading, error for every list and form
- hover, focus-visible, active, disabled for every control
- 404 and 500 pages

## 6. Motion — last

Everything works without it first. Then add **one or two** moments, per
[`../02-design-system/motion.md`](../02-design-system/motion.md). Reveals, a hero effect,
or one interaction that makes the site memorable — not all three.

## 7. Metadata and SEO

Per [`../01-standards/seo.md`](../01-standards/seo.md): metadata per page, OG image,
JSON-LD, sitemap, robots. Ten minutes of work that is invisible if you do it and
embarrassing if you don't.

## 8. Review

[`quality-review.md`](./quality-review.md). Automated pass, then the checklist. Fix, then
run it again.

## 9. Deploy

- Vercel, connected to the repo.
- Environment variables set in the dashboard, `.env.example` committed, `.env` never.
- Custom domain, DNS, and check the certificate.
- `noindex` removed from production. Verify — this one has bitten everybody.
- Analytics live and reporting.
- Forms tested **on the production URL**, not just locally.

## 10. Handover

- Where the code lives, how to run it, how to deploy.
- If there is a CMS: how to edit, with the two or three things they will actually change.
- What is agreed about updates and hosting.

---

## Timeboxes, roughly

| Phase | Landing page | Marketing site (5–8 pages) |
|---|---|---|
| Kickoff + design decisions | 1–2u | 3–4u |
| Scaffold + tokens | 1u | 1–2u |
| Sections | 4–8u | 2–4 dagen |
| States + responsive | 2u | 1 dag |
| Motion | 1–2u | 2–4u |
| SEO + metadata | 1u | 2–3u |
| Review + fixes | 2u | 1 dag |

If a phase runs far over, it is almost always because step 2 was skipped.

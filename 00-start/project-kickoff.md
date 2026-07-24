# Project kickoff

Resolve these before writing code. If the user has not supplied an answer and the default
is safe, take the default and say which default you took. Only stop and ask when the
answer changes the architecture.

## 1. What is it

- **Type** — marketing site, web app, dashboard, e-commerce, landing page, portfolio?
- **Primary goal** — what does one visitor do that counts as a success? Everything on the
  page serves that action or gets cut.
- **Audience** — B2B or consumer, technical or not, Dutch/Flemish or international?

## 2. Content and brand

- Is there an existing brand (logo, colors, fonts)? → check `06-brand/`.
- Is there real copy, or do we write placeholder copy per `05-copy/copywriting.md`?
- Are there images/photos, or do we design around their absence?
  *A site with no photography needs a different visual strategy than one with a shoot —
  decide this early, it drives the whole layout.*

## 3. Technical

- **Stack** — default is in `01-standards/stack.md`. Deviate only for a stated reason.
- **Hosting** — Vercel by default. Netlify, Cloudflare Pages, or a VPS if specified.
- **CMS** — does the client need to edit content themselves? If yes, that decision comes
  now, not after the pages are built.
- **Multilingual** — NL/FR/EN is common for Belgian clients. Retrofitting i18n is
  expensive; ask up front.
- **Forms** — where do submissions go? Email, CRM, database?
- **Analytics / cookie consent** — GDPR applies. See `01-standards/security.md`.

## 4. Scope

List the pages. For each page, list the sections top to bottom before building anything.
A one-line outline per page prevents building the wrong thing:

```
Home:      hero → logo strip → 3 features → case study → testimonial → pricing → FAQ → CTA → footer
Over ons:  hero (compact) → story → team → values → CTA → footer
Contact:   hero (compact) → form + details → map → footer
```

Check the outline against `03-patterns/` — each section there has a blueprint.

## 5. Defaults if nothing is specified

| Question | Default |
|---|---|
| Stack | Next.js (App Router) + TypeScript + Tailwind |
| Styling | Tailwind + CSS custom properties for tokens |
| Components | shadcn/ui as a base, restyled to the token layer |
| Animation | CSS transitions; Motion only where it earns its weight |
| Icons | Lucide |
| Fonts | Two: one for display, one for text — see `02-design-system/typography.md` |
| Language | Dutch (nl-BE) |
| Dark mode | Build the token layer for it, ship light-only unless asked |

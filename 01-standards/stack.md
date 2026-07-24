# Stack

The default stack. Deviating is fine — deviating silently is not. State the reason.

## Web (marketing sites and apps)

| Layer | Choice | Notes |
|---|---|---|
| Framework | **Next.js**, App Router | Server Components by default; `"use client"` only where interaction requires it |
| Language | **TypeScript**, strict | No `any` in committed code |
| Styling | **Tailwind CSS** + CSS custom properties | Tokens live in CSS vars, Tailwind consumes them — see `02-design-system/tokens/` |
| Components | **shadcn/ui** | A starting point that you restyle, not a design system you adopt as-is |
| Icons | **Lucide** | One icon set per project, no mixing |
| Animation | CSS transitions first; **Motion** (`motion/react`) for orchestration | See `02-design-system/motion.md` |
| Forms | **React Hook Form** + **Zod** | Validate on the server too |
| Content | **MDX** for simple, **Sanity** or **Payload** when the client edits | Decide at kickoff |
| Hosting | **Vercel** | Cloudflare Pages when edge/cost matters |
| Analytics | **Plausible** or **Vercel Analytics** | Cookieless by preference — avoids a consent banner |

## When to pick something else

- **Static, few pages, no app logic** → Astro. Ships less JS, better Lighthouse, simpler.
- **Client insists on WordPress/Webflow/Wix** → not a code project. Use the design system
  and patterns here as the design brief, build in their tool.
- **Heavy dashboard, no SEO need** → Vite + React Router is lighter than Next.js.
- **Mobile app** → Expo / React Native. The token layer in `02-design-system/` still
  applies; the component code does not.

## Rules that survive any stack choice

1. **No component library's default look ships.** Whatever you install gets the token
   layer applied before it goes in a page.
2. **No CSS-in-JS runtime.** Tailwind or plain CSS modules. Runtime style computation is
   a performance cost with no design benefit.
3. **No jQuery, no Bootstrap, no template kits.** They carry a visual signature that
   makes the site look bought.
4. **Dependencies are a liability.** Before adding one, check it is not 30 lines of code
   you could write. Date formatting, class merging, and simple carousels usually are.
5. **Package manager:** `pnpm` where possible, `npm` otherwise. Never mix lockfiles.

## Baseline project commands

Every project exposes the same four scripts, whatever the stack:

```json
{
  "dev": "...",
  "build": "...",
  "lint": "...",
  "typecheck": "..."
}
```

`build`, `lint` and `typecheck` must pass before anything is called done.

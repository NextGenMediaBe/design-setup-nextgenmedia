# Anti-patterns

The tells that make a site read as generated. Each one is cheap to avoid and expensive to
leave in, because a visitor recognises the pattern instantly even if they cannot name it.

## Color

| Don't | Do |
|---|---|
| `bg-blue-600`, `text-gray-600`, `bg-slate-900` as brand colors | Define a token palette; reference `bg-primary`, `text-muted` |
| Purple→pink→blue gradient on the hero, the buttons and the icons | At most one gradient per page, and give it a reason to exist |
| Gradient text on every heading | Solid color. Gradient text on one word, once, if at all |
| A different color per feature card | One accent; differentiate with content, not hue |
| Pure `#000` on pure `#fff` | A near-black (`hsl(220 20% 8%)`) on a warm off-white |

## Layout

| Don't | Do |
|---|---|
| Every section: centered heading + centered subtitle + 3 cards | Vary section shape — see `03-patterns/` |
| Three feature cards, always three, always equal | Use the number the content needs; asymmetric weights are fine |
| Emoji as icons (🚀 ✨ 💡) | A real icon set (Lucide), consistently sized and stroked |
| Everything `rounded-lg` with `shadow-md` | Pick a radius scale and a shadow scale, use them deliberately |
| A card around content that isn't a card | Cards are for grouped, repeatable, clickable things |
| `max-w-7xl` on every container | Vary measure by content type: text narrower than media |
| Uniform `gap-8` everywhere | Space encodes grouping — vary it |

## Typography

| Don't | Do |
|---|---|
| Inter (or the framework default) for everything | Two typefaces: display + text |
| `text-6xl font-bold` heroes with default tracking | Large sizes need `tracking-tight` and tight line-height |
| Body text at 14px | 16–18px, line-height ≥ 1.6 |
| Full-width paragraphs across a 1280px container | Cap at 65–75ch |
| ALL CAPS body copy, or centered paragraphs of 4+ lines | Caps for short labels only; long text is left-aligned |

## Content

| Don't | Do |
|---|---|
| "Lorem ipsum", "Feature One", "Your Company" | Plausible real copy — `05-copy/copywriting.md` |
| "Empower your workflow with cutting-edge AI solutions" | Say what it actually does, in the client's words |
| Fake logos of Google/Microsoft/Stripe in a trust bar | Real logos, or no trust bar |
| Invented testimonials with generated headshots | Real quotes, or a different social-proof pattern |
| Stat counters with made-up numbers (10,000+ users) | Real numbers, or drop the section |
| Stock photos of a diverse team laughing at a laptop | Product screenshots, abstract art direction, or type-led design |

## Motion

| Don't | Do |
|---|---|
| Every section fades up on scroll | One or two moments of motion per page |
| `whileHover={{ scale: 1.05 }}` on cards | 2–4px lift, a border-color change, ≤200ms |
| Animated gradient backgrounds, floating blobs, particles | Static, or a single restrained effect |
| Auto-playing carousels | Static grid, or user-controlled |
| No `prefers-reduced-motion` handling | Always handle it |
| Long entrance animations that delay reading | ≤ 400ms, and content is readable without JS |

## Code

| Don't | Do |
|---|---|
| `<div>` for everything | `header`, `nav`, `main`, `section`, `article`, `footer`, `button` |
| Hardcoded hex values in components | Token variables |
| `outline: none` on focus | A visible `focus-visible` ring |
| `<img>` without dimensions | Next `<Image>` or explicit width/height — prevents layout shift |
| One 900-line page component | Sections as components, one file each |
| Arbitrary values everywhere (`mt-[37px]`) | Stay on the spacing scale; arbitrary values are a smell |
| `"use client"` at the top of every file | Only where interactivity requires it |

## Structural tells

- **The AI hero**: full-screen height, centered, gradient background, two buttons,
  "Get Started" and "Learn More". If the hero is 100vh and centered, it needs a reason.
- **The badge above the heading**: a pill saying "✨ Introducing v2.0" that links nowhere.
- **Six-icon feature grid** where the icons are decorative and interchangeable.
- **Every heading followed by exactly one 2-line paragraph.** Real content has uneven
  lengths.
- **A "Trusted by" strip with no trust in it.**

## The check

Would this page be indistinguishable from any other page built by the same prompt with a
different company name? If yes, nothing in it is specific to this client. Go back to
`00-start/project-kickoff.md` and build from what makes them different.

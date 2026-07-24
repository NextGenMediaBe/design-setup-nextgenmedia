# GSAP

Since Webflow acquired GSAP it is **100% free, including every former "Club GreenSock"
plugin**, for commercial use. That is the whole toolkit below — SplitText, ScrollSmoother,
MorphSVG, DrawSVG, Inertia and the rest — at no cost.

Reference version here: **3.15.0**.

> We do **not** vendor the library into this repo. Install it from npm. What lives here are
> setup rules and recipes, which is the part that is actually hard to get right.

```bash
npm i gsap @gsap/react
```

## When to use GSAP at all

Read `02-design-system/motion.md` first. GSAP is the heaviest tool in the box (~70kb with
ScrollTrigger). Reach for it only when you need:

- a **scroll-driven timeline** — pinning, scrubbing, sequenced sections
- **text split into lines/words/chars** for a reveal
- **SVG drawing or morphing**
- a **timeline** with more than three coordinated steps
- **Flip** — animating between two layouts you cannot express as a transform

For a hover state, a fade-in, or a mounted component's entrance: CSS or Motion. Not GSAP.

## Setup in Next.js / React

Two rules that cause most GSAP bugs in React:

1. **Register plugins once, client-side only.** Plugins touch `window`.
2. **Always use `useGSAP`.** It scopes selectors to a ref and reverts every animation and
   ScrollTrigger on unmount. Without it, Strict Mode double-mounts and hot reload leave
   orphaned ScrollTriggers that fight each other.

```tsx
// lib/gsap.ts — single registration point, imported by every animated component
"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

// House defaults — matches 02-design-system/motion.md
gsap.defaults({ ease: "power3.out", duration: 0.6 });

export { gsap, useGSAP, ScrollTrigger, SplitText };
```

```tsx
"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export function Section() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // ".item" is scoped to `root` — no global selector leakage
      gsap.from(".item", { y: 24, opacity: 0, stagger: 0.06 });
    },
    { scope: root },
  );

  return (
    <section ref={root}>
      <div className="item">…</div>
    </section>
  );
}
```

### The non-negotiables

- **Never render content at `opacity: 0` in CSS** and rely on GSAP to reveal it. If JS
  fails or is slow, the page is blank — and search engines may not see it. Use
  `gsap.from()` (which sets the start state at runtime), or a `.gsap-ready` class the
  script adds.
- **Respect reduced motion** with `gsap.matchMedia()` — see below.
- **`ScrollTrigger.refresh()`** after images load or layout changes, or triggers fire at
  the wrong scroll positions.
- **Animate `transform`/`opacity`.** GSAP will happily animate `width` at 15fps.

### Reduced motion, the correct way

```tsx
useGSAP(() => {
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.from(".item", { y: 24, opacity: 0, stagger: 0.06 });
  });

  mm.add("(prefers-reduced-motion: reduce)", () => {
    gsap.set(".item", { clearProps: "all", opacity: 1 });
  });
}, { scope: root });
```

`matchMedia` also handles breakpoints — use it instead of manual `window.innerWidth`
checks, because it cleans up when the query stops matching.

## Plugin reference

| Plugin | Does | Use it for |
|---|---|---|
| **ScrollTrigger** | Ties animations to scroll position | Reveals, pinning, scrubbing, horizontal scroll |
| **ScrollSmoother** | Smooth/inertial scrolling + parallax via `data-speed` | Premium agency feel. Needs ScrollTrigger |
| **SplitText** | Splits text into lines/words/chars | Hero headline reveals, per-line masking |
| **Flip** | Animates between two DOM states | Grid → detail transitions, layout changes, filtering |
| **DrawSVG** | Animates SVG stroke drawing | Logo draw-on, illustrated line art, signatures |
| **MorphSVG** | Morphs one path into another | Icon transitions, shape-shifting graphics |
| **MotionPath** | Moves elements along a path | Follow-the-line scroll storytelling |
| **Observer** | Unified wheel/touch/pointer events | Custom scroll-jacking, swipe sections |
| **Draggable** + **Inertia** | Drag with momentum and snapping | Carousels, sliders, knobs, sortables |
| **ScrambleText** | Scrambles characters into place | Technical/hacker aesthetic headlines |
| **CustomEase** | Arbitrary bezier easing curves | Matching a designer's motion spec exactly |
| **CustomBounce / CustomWiggle** | Generated bounce and wiggle eases | Playful micro-interactions |
| **ScrollTo** | Animated scroll to a target | Anchor navigation with easing |
| **TextPlugin** | Types text out character by character | Terminal effects |
| **GSDevTools** | Timeline scrubber overlay | **Development only** — strip before shipping |
| **Physics2D / PhysicsProps** | Velocity/gravity-based motion | Confetti, particle bursts |
| **EaselPlugin / PixiPlugin** | Canvas library integration | Only if the project uses those |

Import each from `gsap/<PluginName>` and register it. Only register what you use —
unregistered plugins tree-shake away.

## Recipes

Working, copy-pasteable implementations: [`recipes.md`](./recipes.md).

## Licence

GSAP is distributed under the [standard "no charge" GreenSock licence](https://gsap.com/community/standard-license/)
and is free for commercial projects, including all bonus plugins.

# GSAP recipes

All recipes assume the setup in [`README.md`](./README.md): plugins registered in
`lib/gsap.ts`, `useGSAP` with a `scope` ref, and `gsap.matchMedia()` for reduced motion.

Every one of these is `"use client"`.

---

## 1. Scroll reveal (the one you actually use most)

Restrained: 24px of travel, 60ms stagger, fires once.

```tsx
useGSAP(() => {
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
      gsap.from(el.children, {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,          // never re-animate on scroll back
        },
      });
    });
  });
}, { scope: root });
```

```html
<div data-reveal>
  <h2>…</h2>
  <p>…</p>
  <a href="#">…</a>
</div>
```

---

## 2. Hero headline, split by line, masked reveal

The signature "expensive site" move. Lines slide up from behind a mask rather than
fading in.

```tsx
useGSAP(() => {
  const heading = root.current!.querySelector("h1")!;

  // Wait for fonts — splitting before they load measures the fallback face
  // and the line breaks land in the wrong place.
  document.fonts.ready.then(() => {
    const split = new SplitText(heading, {
      type: "lines",
      linesClass: "split-line",
      mask: "lines",              // 3.13+: wraps each line in an overflow-hidden mask
    });

    gsap.from(split.lines, {
      yPercent: 110,
      duration: 1,
      ease: "power4.out",
      stagger: 0.08,
    });

    // Free the DOM when the component unmounts
    return () => split.revert();
  });
}, { scope: root });
```

On older GSAP without `mask`, wrap manually:

```css
.split-line-wrapper { overflow: hidden; }
```

**Never** hide the `h1` with CSS while waiting for this. It must be readable without JS.

---

## 3. Pinned section with scrubbed content

Section sticks while its inner steps advance with the scrollbar.

```tsx
useGSAP(() => {
  const mm = gsap.matchMedia();

  // Pinning on mobile is usually a mistake — it fights native scroll.
  mm.add("(min-width: 768px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pin-section",
        start: "top top",
        end: "+=200%",     // how much scroll the pin consumes
        pin: true,
        scrub: 1,          // 1s of smoothing — not `true`, which is rigid
        anticipatePin: 1,
      },
    });

    tl.to(".step-1", { opacity: 0, y: -40 })
      .from(".step-2", { opacity: 0, y: 40 }, "<")
      .to(".step-2", { opacity: 0, y: -40 })
      .from(".step-3", { opacity: 0, y: 40 }, "<");
  });
}, { scope: root });
```

`scrub: 1` (a number, not `true`) is what makes it feel smooth instead of glued to the
scrollbar.

---

## 4. Horizontal scroll gallery

```tsx
useGSAP(() => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    const track = root.current!.querySelector<HTMLElement>(".track")!;
    const distance = () => track.scrollWidth - window.innerWidth;

    gsap.to(track, {
      x: () => -distance(),
      ease: "none",
      scrollTrigger: {
        trigger: ".h-scroll",
        start: "top top",
        end: () => `+=${distance()}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,   // recompute on resize
      },
    });
  });
}, { scope: root });
```

Below `lg`, let it be a native horizontal overflow scroller with snap — better on touch:

```css
@media (max-width: 1023px) {
  .track { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; }
  .track > * { scroll-snap-align: start; flex: 0 0 85%; }
}
```

---

## 5. Smooth scrolling + parallax (ScrollSmoother)

```tsx
useGSAP(() => {
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,          // seconds to catch up. Above ~2 feels broken
      effects: true,        // enables data-speed / data-lag
      normalizeScroll: true,
      smoothTouch: false,   // never smooth-scroll on touch devices
    });
    return () => smoother.kill();
  });
}, { scope: root });
```

```html
<div id="smooth-wrapper">
  <div id="smooth-content">
    <img data-speed="0.8" />   <!-- moves slower → recedes -->
    <h2  data-speed="1.15" />  <!-- moves faster → advances -->
    <div data-lag="0.3" />     <!-- trails the scroll -->
  </div>
</div>
```

Parallax range: keep `data-speed` between **0.8 and 1.2**. Beyond that it reads as a
gimmick and breaks the sense that elements share a plane.

Caveat: ScrollSmoother replaces native scrolling. It can break `position: sticky`,
in-page anchors and browser find-on-page. Use `smoother.scrollTo(target, true)` for
anchors. On a content-heavy or accessibility-sensitive site, skip it.

---

## 6. Magnetic button — discouraged, kept for the technique

> **Do not ship this.** Banned by
> [`../../02-design-system/anti-patterns.md`](../../02-design-system/anti-patterns.md) §4.6:
> it moves the target while the user is aiming at it, and it appears on so many sites that
> it now reads as a default rather than a choice.
>
> It stays here because `gsap.quickTo` and the pointer maths are worth understanding, and
> because the same pattern is correct for things that *should* track the cursor — a lens, a
> spotlight over a map, a draggable handle. Overriding the ban needs `slop-check-ok:` and a
> reason in `DESIGN.md`.

Cursor pulls the button toward it.

```tsx
useGSAP(() => {
  if (window.matchMedia("(pointer: coarse)").matches) return;  // no touch devices

  const btn = root.current!.querySelector<HTMLElement>(".magnetic")!;
  const label = btn.querySelector(".magnetic-label");

  const xTo = gsap.quickTo(btn, "x", { duration: 0.6, ease: "power3" });
  const yTo = gsap.quickTo(btn, "y", { duration: 0.6, ease: "power3" });

  const onMove = (e: PointerEvent) => {
    const r = btn.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    xTo(x * 0.35);                       // 0.35 = subtle. 1.0 = silly
    yTo(y * 0.35);
    if (label) gsap.to(label, { x: x * 0.15, y: y * 0.15, duration: 0.6 });
  };

  const onLeave = () => {
    xTo(0); yTo(0);
    if (label) gsap.to(label, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  };

  btn.addEventListener("pointermove", onMove);
  btn.addEventListener("pointerleave", onLeave);
  return () => {
    btn.removeEventListener("pointermove", onMove);
    btn.removeEventListener("pointerleave", onLeave);
  };
}, { scope: root });
```

`gsap.quickTo` is the right tool here — it reuses one tween instead of allocating a new
one on every pointer event.

---

## 7. Infinite marquee

```tsx
useGSAP(() => {
  const items = gsap.utils.toArray<HTMLElement>(".marquee-item");

  gsap.to(items, {
    xPercent: -100,
    repeat: -1,
    duration: 20,
    ease: "none",
    modifiers: {
      // wraps each item back around instead of a hard reset — seamless loop
      xPercent: gsap.utils.wrap(-100, 0),
    },
  });
}, { scope: root });
```

Duplicate the content once in the DOM so there is no visible gap. Pause on hover if the
content is readable (`onMouseEnter={() => tl.pause()}`) — a scrolling logo strip does not
need it, scrolling testimonials do.

For a pure logo strip, CSS does this with no JS:

```css
@keyframes marquee { to { transform: translateX(-50%); } }
.marquee { animation: marquee 30s linear infinite; }
@media (prefers-reduced-motion: reduce) { .marquee { animation: none; } }
```

---

## 8. Number counter

```tsx
useGSAP(() => {
  gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
    const target = Number(el.dataset.count);
    const obj = { value: 0 };

    gsap.to(obj, {
      value: target,
      duration: 1.6,
      ease: "power2.out",
      snap: { value: 1 },
      onUpdate: () => {
        el.textContent = obj.value.toLocaleString("nl-BE");
      },
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
    });
  });
}, { scope: root });
```

Put the final number in the HTML as the initial text content, so it is correct without JS
and for crawlers.

---

## 9. SVG line draw

```tsx
useGSAP(() => {
  gsap.from(".draw path", {
    drawSVG: "0%",
    duration: 1.4,
    ease: "power2.inOut",
    stagger: 0.15,
    scrollTrigger: { trigger: ".draw", start: "top 75%", once: true },
  });
}, { scope: root });
```

Paths need a `stroke` and no `fill` for this to be visible. Set `stroke-linecap: round`
for a hand-drawn feel.

---

## 10. Flip — grid item to detail view

```tsx
const expand = (card: HTMLElement) => {
  const state = Flip.getState(".card, .detail");   // capture BEFORE the DOM change

  card.classList.add("is-expanded");                // make the change

  Flip.from(state, {                                // animate the difference
    duration: 0.6,
    ease: "power3.inOut",
    absolute: true,
    nested: true,
  });
};
```

Flip is the correct tool whenever "the element needs to move to a different place in the
DOM and animate there". Doing that with manual transforms is a losing battle.

---

## 11. Section-to-section snap (Observer)

Full-screen slide navigation without hijacking the scrollbar badly.

```tsx
useGSAP(() => {
  let index = 0;
  let animating = false;
  const sections = gsap.utils.toArray<HTMLElement>(".slide");

  const goTo = (i: number, dir: number) => {
    if (animating || i < 0 || i >= sections.length) return;
    animating = true;
    index = i;
    gsap.to(window, {
      scrollTo: { y: sections[i], autoKill: false },
      duration: 0.9,
      ease: "power3.inOut",
      onComplete: () => { animating = false; },
    });
  };

  const obs = Observer.create({
    type: "wheel,touch,pointer",
    wheelSpeed: -1,
    tolerance: 10,
    preventDefault: true,
    onDown: () => goTo(index - 1, -1),
    onUp:   () => goTo(index + 1, 1),
  });

  return () => obs.kill();
}, { scope: root });
```

Use sparingly. Scroll-jacking frustrates users who want to skim, and breaks
find-on-page. It suits a portfolio or a product launch page, not a content site.

---

## 12. Page transition (App Router)

```tsx
"use client";
import { usePathname } from "next/navigation";
import { gsap, useGSAP } from "@/lib/gsap";
import { useRef } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      root.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out", clearProps: "all" },
    );
  }, { dependencies: [pathname], scope: root });

  return <div ref={root}>{children}</div>;
}
```

`clearProps: "all"` at the end matters — leaving a transform on the wrapper creates a
containing block that breaks `position: fixed` for anything inside it.

---

## Debugging

```ts
// Visualise every trigger's start/end markers
ScrollTrigger.create({ markers: true, /* … */ });

// Timeline scrubber — DEV ONLY, never ship
import { GSDevTools } from "gsap/GSDevTools";
GSDevTools.create({ animation: tl });
```

Common causes when a ScrollTrigger fires at the wrong place:

1. **Images without dimensions** — layout shifts after the trigger is computed.
   Fix the dimensions, or call `ScrollTrigger.refresh()` on load.
2. **A `transform` on an ancestor** — creates a containing block that breaks pinning.
3. **Fonts loading late** — text reflows. Split after `document.fonts.ready`.
4. **A conflicting smooth-scroll library** (Lenis + ScrollSmoother). Pick one.

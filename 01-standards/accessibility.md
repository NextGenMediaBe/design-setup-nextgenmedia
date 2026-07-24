# Accessibility

WCAG 2.2 AA is the floor, not the goal. A Lighthouse accessibility score below 100 is a
defect and blocks the build — the same as a failing `typecheck`. Lighthouse only catches
about a third of real issues, so the keyboard pass in [Testing](#testing) is mandatory too.

## Semantic HTML first

Native elements come with keyboard behaviour, focus, and an accessible role for free.
Every `div` you make interactive is behaviour you have to rebuild by hand — and will get
wrong.

| Don't | Do |
|---|---|
| `<div onClick>` | `<button type="button">` |
| `<span>` styled as a link | `<a href>` (or `<Link>`) |
| `<div class="card">` wrapping a whole clickable region | `<article>` with one real link inside |
| `<div class="nav">` | `<nav aria-label="Hoofdnavigatie">` |
| A `<table>` for layout | CSS grid |
| `<br>` for spacing | margin |

### Landmarks

Exactly one per page unless noted:

```html
<header>            <!-- site header, banner -->
<nav aria-label="Hoofdnavigatie">
<main id="main">    <!-- exactly one, never nested -->
<aside>             <!-- complementary, may repeat with distinct labels -->
<footer>            <!-- contentinfo -->
```

If a landmark type appears more than once (two `<nav>`, several `<aside>`), each gets a
distinct `aria-label`. Do not put the word "navigation" in a `<nav>` label — the role is
already announced. `aria-label="Hoofdnavigatie"`, not `aria-label="Hoofdnavigatie navigatie"`.

### Heading order

- One `<h1>` per page. It is the page's subject, not the logo, not the site name.
- Never skip a level going down. `h2` → `h4` is a failure. Going back up is fine.
- Headings are structure, not size. Need a big line that isn't a heading? Use a `<p>` with
  a type class. Need a small heading? Keep the `<h3>` and style it down. See
  `02-design-system/typography.md`.
- Every `03-patterns/` section starts with a heading, even a visually hidden one, so the
  section outline is navigable.

```tsx
<h2 className="sr-only">Klantenreviews</h2>
```

## Focus

### Visible focus, always

Rule 5 in `CLAUDE.md`: no `outline: none` without a replacement. The token layer defines
the indicator once; components do not reinvent it.

```css
:where(a, button, input, select, textarea, summary, [tabindex]):focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
  border-radius: inherit;
}
```

| Rule | Value |
|---|---|
| Indicator contrast vs adjacent colours | **3:1 minimum** |
| Indicator thickness | 2px minimum |
| Offset | 2px, so it never sits on the component's own border |
| Obscured by sticky header/footer? | Failure (WCAG 2.2 *Focus Not Obscured*) — add `scroll-margin-top` equal to header height |

Use `:focus-visible`, not `:focus`, so mouse users don't get a ring on click. Never rely on
the browser default ring: it is invisible on dark surfaces.

### Skip link

First focusable element in the DOM, visible on focus:

```tsx
<a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-[var(--color-surface)] focus:px-4 focus:py-2">
  Naar de hoofdinhoud
</a>
```

### Focus management for overlays

| Event | Required behaviour |
|---|---|
| Dialog opens | Move focus into the dialog — to the first interactive element, or to the dialog container if it has a heading |
| Dialog open | Focus is trapped: `Tab` from the last element wraps to the first, `Shift+Tab` from the first wraps to the last |
| Background | `inert` on everything outside the dialog (or `aria-hidden` + no tabbables) |
| Dialog closes | Focus returns to the element that opened it |
| Route change | Focus moves to `<h1>` or `<main tabIndex={-1}>`; announce the new page title |
| Element removed while focused | Move focus to a sensible neighbour, never let it fall to `<body>` |

Use Radix / shadcn `Dialog` primitives — they do all of the above. If you hand-roll it, you
will forget the restore.

## Keyboard operability

Everything you can do with a mouse you can do with a keyboard, in a visible order, with no
trap. Tab order follows the DOM; never use positive `tabindex`.

Exact bindings per widget. These are the APG patterns — implement them or use a primitive
that already does.

### Button / link

| Key | Action |
|---|---|
| `Enter` | Activate (both) |
| `Space` | Activate (button only — links do not respond to Space) |

### Menu (dropdown / navigation menu)

| Key | Action |
|---|---|
| `Enter` / `Space` / `↓` on trigger | Open, focus first item |
| `↑` / `↓` | Move between items (wraps) |
| `Home` / `End` | First / last item |
| `a`–`z` | Jump to next item starting with that character |
| `Esc` | Close, return focus to trigger |
| `Tab` | Close and move on |

### Tabs

| Key | Action |
|---|---|
| `←` / `→` | Previous / next tab (horizontal orientation) |
| `Home` / `End` | First / last tab |
| `Tab` | Leaves the tablist and lands in the active panel |

Roving tabindex: only the active tab is `tabindex="0"`, the rest are `-1`. Default to
automatic activation (panel changes on arrow). Use manual activation (`Enter`/`Space`) only
when panel content is expensive to load.

### Accordion / disclosure

| Key | Action |
|---|---|
| `Enter` / `Space` on the header button | Toggle |
| `Tab` | Moves to the next header or into the open panel |

The header is a `<button>` inside an `<h3>`, with `aria-expanded` and `aria-controls`.
Never make the whole header row a `div` with a click handler.

### Combobox / autocomplete

| Key | Action |
|---|---|
| `↓` | Open the listbox / move to next option |
| `↑` | Previous option |
| `Enter` | Select the focused option |
| `Esc` | Close listbox; second press clears the input |
| `Home` / `End` | Move the text cursor within the input |

Focus stays in the input. Use `aria-activedescendant` to point at the visually highlighted
option — do not move DOM focus into the list.

### Dialog / modal

| Key | Action |
|---|---|
| `Esc` | Close |
| `Tab` / `Shift+Tab` | Cycle within the dialog only |

Non-modal popovers close on `Esc` and on outside click, but do not trap focus.

### Carousel

| Key | Action |
|---|---|
| `Tab` | Reaches previous/next buttons and each slide-link in order |
| `←` / `→` | Previous / next slide when focus is inside the carousel |
| Autoplay | Must have a visible pause button; pauses on hover **and** on focus |

Autoplaying past 5 seconds without a pause control fails WCAG. See
`02-design-system/motion.md`.

## ARIA

**No ARIA is better than bad ARIA.** Five rules, in order:

1. Use a native element if one exists. `<button>` beats `role="button"`.
2. Do not change native semantics. Never `<h2 role="button">` — put a button inside it.
3. All interactive ARIA widgets must be keyboard operable (see above).
4. Never put `aria-hidden="true"` or `tabindex="-1"` on a focusable element. It creates a
   control screen readers can't see but keyboards can reach.
5. Every interactive element has an accessible name.

### Accessible names

Precedence, highest first: `aria-labelledby` → `aria-label` → native label / content →
`title`. Rules that get broken constantly:

| Case | Rule |
|---|---|
| Icon-only button | `aria-label` describing the **action**: `aria-label="Menu sluiten"`, not `"kruisje"` |
| Decorative icon inside a labelled button | `aria-hidden="true"` on the SVG |
| Visible text label | The accessible name must **start with** the visible text (WCAG *Label in Name*), or voice control breaks |
| Link that says "Lees meer" | Give it context: `aria-label="Lees meer over onze werkwijze"`, or rewrite the visible copy |
| `aria-label` on a `<div>` or `<span>` | Ignored. Only works on elements with a role |

Never use `title` as the name. It doesn't show on touch, doesn't show on keyboard focus,
and is announced inconsistently.

### The few ARIA attributes you actually need

`aria-expanded`, `aria-controls`, `aria-current="page"`, `aria-describedby`, `aria-invalid`,
`aria-live`, `aria-pressed`, `aria-hidden`. If you are reaching for anything else, check
whether a native element or a Radix primitive solves it first.

## Forms

```tsx
<div>
  <label htmlFor="email">E-mailadres</label>
  <input
    id="email"
    name="email"
    type="email"
    autoComplete="email"
    required
    aria-describedby={error ? "email-error email-hint" : "email-hint"}
    aria-invalid={error ? true : undefined}
  />
  <p id="email-hint">We gebruiken dit alleen om te reageren.</p>
  {error && <p id="email-error" role="alert">Vul een geldig e-mailadres in.</p>}
</div>
```

| Rule | Detail |
|---|---|
| Every input has a `<label>` | `htmlFor` → `id`. Wrapping also works. A visually hidden label is fine; no label is not |
| **Never placeholder-as-label** | It disappears on typing, fails contrast, and is not a name. Placeholders are for format examples only: `bv. +32 470 12 34 56` |
| Errors | Text, next to the field, referenced by `aria-describedby`. Not colour, not a tooltip, not only a summary at the top |
| `aria-invalid` | Set to `true` only when the field is actually in error, never pre-emptively |
| Error text | Says how to fix it: "Vul een geldig e-mailadres in", not "Ongeldig" |
| Required | Use the `required` attribute. If you mark with `*`, explain the asterisk once above the form |
| Grouping | Radios and checkboxes go in `<fieldset>` with a `<legend>` |
| Submit | A real `<button type="submit">`. The form works on `Enter` |
| Errors on submit | Move focus to the first invalid field, or to an error summary with `tabIndex={-1}` |
| Redundant entry | WCAG 2.2: do not ask for the same information twice in one flow — carry it forward |

### Autocomplete tokens

Non-negotiable on any field asking for personal data — it is a WCAG AA requirement and it
halves the time to fill a form.

| Field | Token |
|---|---|
| Full name | `name` |
| First / last | `given-name` / `family-name` |
| Email | `email` |
| Phone | `tel` |
| Company | `organization` |
| Street | `street-address` |
| Postcode | `postal-code` |
| City | `address-level2` |
| Country | `country-name` |
| Message | *(no token — leave it off)* |

## Colour and contrast

| Content | Minimum ratio |
|---|---|
| Body text, and any text under 24px / 19px bold | **4.5:1** |
| Large text: 24px+, or 19px+ bold | **3:1** |
| UI component boundaries: input borders, toggle states, icon-only controls | **3:1** |
| Focus indicator vs adjacent colours | **3:1** |
| Disabled controls, decorative dividers, logos | No requirement — but disabled still has to be readable enough to understand |

Rules:

- **Never colour alone.** Error states get an icon and text. Chart series get labels or
  patterns. A "required" field is not communicated by a red border.
- Placeholder text is text: 4.5:1. Most default greys fail — check yours.
- Text over an image needs a scrim or a solid panel. "It looks fine on my hero photo" is not
  a measurement. See `02-design-system/color.md`.
- Check both themes. A palette that passes in light mode routinely fails in dark.
- Hover and active states must also pass. It is common for a hover state to drop below 4.5:1.

## Target size

WCAG 2.2 AA requires **24x24 CSS px**. We use **44x44** as the house minimum, because
24 is a legal floor and 44 is a usable one.

```tsx
/* icon button: visual 20px icon, 44px hit area */
<button className="inline-flex h-11 w-11 items-center justify-center">
  <X className="h-5 w-5" aria-hidden="true" />
  <span className="sr-only">Sluiten</span>
</button>
```

- Adjacent targets: at least 8px of spacing, or overlapping hit areas.
- Inline links inside a paragraph are exempt. Do not pad them into the line above.
- Extend the hit area with padding or a pseudo-element, not with `scale`.

## Motion

Full rules in `02-design-system/motion.md`. The accessibility floor:

- Respect `prefers-reduced-motion: reduce` — no translation, scale, parallax, or autoplay.
- Nothing flashes more than 3 times per second.
- Anything moving/auto-updating longer than 5 seconds has a pause control.
- Motion never carries information on its own.
- Parallax and scroll-jacking are off entirely under reduced motion.

## Images and alt text

Decision tree — answer in order, stop at the first yes:

1. **Is it purely decorative** (background texture, divider, an icon next to text that
   already says the same thing)? → `alt=""`. Empty, not missing. Never omit the attribute.
2. **Is it a link or button on its own** (logo linking home, icon button)? → alt describes
   the **destination or action**: `alt="NextGenMedia — naar de homepage"`.
3. **Does it carry information the surrounding text doesn't** (a chart, a screenshot, a
   product photo)? → describe the information, not the picture. A chart's alt is its
   conclusion; the data goes in a table or in the body copy.
4. **Is it a photo whose content matters** (team, project, case)? → short factual
   description, ~125 characters. Skip "afbeelding van" — the role already says image.
5. **Is the same content in a nearby caption?** → `alt=""` and let the caption do the work.
   Do not repeat it.

Text in an image (a poster, a quote card) must be repeated in real text. Never ship a hero
whose headline only exists as pixels.

## Live regions

For anything that changes without a page load: form submit results, filter counts, cart
updates, toasts, async search.

```tsx
<p aria-live="polite" aria-atomic="true" className="sr-only">
  {count} resultaten gevonden
</p>
```

| Situation | Setting |
|---|---|
| Status, results count, "opgeslagen" | `aria-live="polite"` (or `role="status"`) |
| Error that stops the user | `role="alert"` (implies assertive) |
| Progress / loading | `aria-busy="true"` on the region while loading |
| Toasts | `role="status"`, and long enough to read: 5s minimum, dismissible |

The live region must be **in the DOM before** the content changes. Mounting the region and
its message at the same time announces nothing. Never put `aria-live` on a whole page
container — every unrelated change gets read out.

## Language

Sites are Dutch (Belgium) unless stated otherwise.

```tsx
// app/layout.tsx
<html lang="nl-BE">
```

- Any passage in another language gets its own `lang`: `<span lang="en">performance</span>`.
  Without it, a Dutch screen-reader voice mangles English words.
- Multilingual sites: `lang` reflects the **current route's** locale, set from the route
  segment — `nl-BE`, `fr-BE`, `en`. See `01-standards/seo.md` for the routing and `hreflang`
  setup.
- The language switcher labels each language in its own language: "Nederlands", "Français",
  "English", each link carrying `lang` and `hreflang`.

## Testing

Automated tooling catches roughly a third of issues. Do all five before calling a page done.

| Pass | How | Looking for |
|---|---|---|
| **Keyboard only** | Unplug the mouse. Tab through the whole page | Everything reachable, visible ring at all times, logical order, no trap, `Esc` closes overlays, focus restores |
| **axe DevTools** | Browser extension, on the built output | Zero violations. Fix, don't dismiss |
| **Lighthouse** | `next build && next start`, then run against `localhost` | Score **100**. Dev-mode scores are meaningless |
| **Screen reader** | VoiceOver (`Cmd+F5`) on macOS, NVDA on Windows. Rotor / element list | Headings form a sensible outline, landmarks named, every control has a name, forms announce label + error |
| **200% zoom + 320px reflow** | Browser zoom to 200%; viewport to 320x256 | No horizontal scroll, nothing clipped, no overlap, sticky elements don't eat the screen |

Add to CI where possible:

```bash
pnpm dlx @axe-core/cli http://localhost:3000 --exit
pnpm dlx unlighthouse --site http://localhost:3000
```

Things automation will never catch, so check them by hand: alt text that is technically
present but useless, heading levels used for size, a focus order that is valid but
nonsensical, an `aria-label` that contradicts the visible text, and colour used as the only
signal.

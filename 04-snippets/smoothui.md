# SmoothUI

Interactiecomponenten met spring-animatie: tabs met schuivende indicator, accordeons die
op hoogte animeren, scrubbers, toggles, kaartstapels. Geen achtergronden, geen gloed — de
waarde zit in hoe dingen *bewegen als je ze aanraakt*.

- Site: https://smoothui.dev
- Repo: https://github.com/educlopez/smoothui
- Licentie: **MIT**, © 2024 Eduardo Calvo — vrij te gebruiken, ook commercieel

Van de drie catalogi in deze map is dit de enige met een schone licentie én serieuze
aandacht voor `prefers-reduced-motion`. Begin hier voordat je naar Magic UI of Vengeance UI
kijkt.

Oordelen volgens het schema in [`INDEX.md`](./INDEX.md).

## Waar de broncode staat

De site publiceert een shadcn-registry, maar de repo is leesbaarder:

```
packages/smoothui/components/<naam>/index.tsx      ← het component
packages/smoothui/components/<naam>/package.json   ← de npm-dependencies
```

## Vier dingen die stukgaan bij kopiëren

**1. De import van `cn` is een monorepo-alias.** Elk component doet
`import { cn } from "@repo/shadcn-ui/lib/utils"`. Herschrijf naar `@/lib/utils`.

**2. Het is `motion`, niet `framer-motion`.** Alles importeert uit `motion/react` en pint
`"motion": "^12.23.25"`. Installeer je `framer-motion`, dan resolven de imports niet.

**3. `NumberFlow` en `PriceFlow` sturen op CSS-klassen die niet meegeleverd worden.** Ze
togglen `slide-in-up` / `slide-out-up` / `slide-in-down` / `slide-out-down`, en die bestaan
alleen in de stylesheets van de docs-app. Kopieer je het component alleen, dan beweegt er
niets — zonder foutmelding.

Erger: de repo definieert die klassen **twee keer, verschillend**. In `global.css` met
transform en opacity, in `smoothui.css` met een blur en 50px verplaatsing. Welke wint hangt
af van laadvolgorde. Kies er bewust één. Dit is de versie die je wilt:

```css
@keyframes slide-out-up   { 0% { transform: translateY(0);      opacity: 1 } 100% { transform: translateY(-100%); opacity: 0 } }
@keyframes slide-out-down { 0% { transform: translateY(0);      opacity: 1 } 100% { transform: translateY(100%);  opacity: 0 } }
@keyframes slide-in-up    { 0% { transform: translateY(100%);   opacity: 0 } 100% { transform: translateY(0);     opacity: 1 } }
@keyframes slide-in-down  { 0% { transform: translateY(-100%);  opacity: 0 } 100% { transform: translateY(0);     opacity: 1 } }

.slide-out-up   { animation: slide-out-up   .3s cubic-bezier(.22,1,.36,1) forwards }
.slide-out-down { animation: slide-out-down .3s cubic-bezier(.22,1,.36,1) forwards }
.slide-in-up    { animation: slide-in-up    .3s cubic-bezier(.22,1,.36,1) forwards }
.slide-in-down  { animation: slide-in-down  .3s cubic-bezier(.22,1,.36,1) forwards }

/* Verplicht bij ons — geen van beide componenten checkt dit zelf. */
@media (prefers-reduced-motion: reduce) {
  .slide-out-up, .slide-out-down, .slide-in-up, .slide-in-down { animation: none }
}
```

**4. `--color-brand` wordt gebruikt maar nergens gedefinieerd.** `AnimatedInput` leest
`var(--color-brand)` rechtstreeks, `AnimatedTabs` en `AnimatedToggle` gebruiken een
`bg-brand`-utility. Bij ons wordt dat `--primary` uit
[`../02-design-system/tokens/globals.css`](../02-design-system/tokens/globals.css) — niet
hun roze `oklch(0.72 0.2 352.53)` overnemen.

De componenten veronderstellen verder de shadcn-tokens: `background`, `foreground`,
`primary`, `muted`, `muted-foreground`, `border`, `ring`. `ExpandableCards` heeft ook een
`scrollbar-hide`-utility nodig die in geen van beide stylesheets staat.

## De motion-woordenschat

Dit is het meest bruikbare aan de hele bibliotheek, los van de componenten. SmoothUI
gebruikt consequent:

```
spring:  { type: "spring", duration: 0.25, bounce: 0.05–0.1 }
easing:  ease-out-quint  cubic-bezier(0.23, 1, 0.32, 1)
```

Dat is een verdedigbare huiscurve. Vergelijk met `--ease-brand` in
[`../02-design-system/motion.md`](../02-design-system/motion.md) en kies er één per project.

## Componenten

### Aanraders

| Component | Oordeel | Wat het doet | Let op |
|---|---|---|---|
| `animated-tabs` | ✅ | Tabs met een indicator die via `layoutId` meeschuift. Drie varianten: underline, pill, segment | Het beste geïmplementeerde component van de set. Roving tabindex, pijltjes, Home/End, `aria-selected`, reduced motion. **Mist `aria-controls` en een `role="tabpanel"`** — de koppeling met het paneel moet je zelf leggen |
| `basic-accordion` | ✅ | Accordeon die op hoogte animeert, met `inert` op ingeklapte inhoud i.p.v. unmounten | Correcte a11y. `<h3>` staat hardgecodeerd binnen de knop; per APG hoort de knop ín de heading. Chevron mist `aria-hidden` |
| `scrubber` | ✅ | Range-control in design-tool-stijl, met pointer capture en tickmarks | Beste ARIA van de set. Mist `aria-valuetext` (leest "0.42" i.p.v. "Dekking 42 procent") en de thumb staat op `opacity: .15` in rust, wat non-text contrast niet haalt |
| `animated-toggle` | ✅ | Switch met morphende thumb. `variant="icon"` is de thema-schakelaar | `role="switch"` correct. `label` is optioneel — maak het verplicht. Maat `sm` is 36×20px, onder de 44px raakvlak-eis |
| `animated-stepper` | ✅ | Meerstaps-wizard met spring-overgangen tussen stappen | Het grootste interactiecomponent. Dichter bij een echte submit-flow dan `smooth-button` |
| `phototab` | ✅ | Beeldgalerij met tabs | Enige component op Radix gebouwd, erft dus gratis de a11y |

### Met reden

| Component | Oordeel | Wat het doet | Waarom het een reden nodig heeft |
|---|---|---|---|
| `photo-stack` | ⚠️ | Sleepbare kaartstapel, Tinder-stijl | Div-als-knop met handmatige Enter/Space. `bg-white` en `outline-blue-600` hardgecodeerd. `<figcaption>` buiten een `<figure>` is ongeldige HTML. Geen `aria-live` na wisselen |
| `expandable-cards` | ⚠️ | Kaart die openklapt naar een detailpaneel | Animeert `width` i.p.v. transform — layout op elke frame. `aria-selected` op `role="button"` is een **ongeldige ARIA-combinatie**, moet `aria-expanded` zijn. Geneste interactieve knop in een klikbare kaart |
| `dynamic-island` | ⚠️ | Morphende container die tussen weergaven wisselt | Sterke techniek, maar de inhoud is hardgecodeerde demo ("Incoming Call / Guillermo Rauch"). **Echte bug:** `DefaultTimer` start een `setInterval` in een `useMemo` en retourneert de cleanup — `useMemo` roept die nooit aan, het interval lekt. Moet `useEffect` zijn |
| `basic-toast` | ⚠️ | Toast met spring-entree | **Geen stack**: elk toast is `fixed top-4 right-4`, twee tegelijk overlappen exact. Geen `role="status"`, geen `aria-live`, sluitknop zonder toegankelijke naam. Auto-dismiss op 3s zonder pauze bij hover schendt WCAG 2.2.1. Palet hardgecodeerd op `emerald/red/amber/blue-500` |
| `animated-input` | ⚠️ | Input met zwevend label | **Mist `"use client"`** terwijl het hooks gebruikt — breekt in een App Router server tree. `#6b7280` hardgecodeerd. Draagt zowel `aria-label` als een `<label htmlFor>`, waardoor de zichtbare tekst genegeerd wordt. Ondanks de belofte **geen enkele validatiestaat**: geen `aria-invalid`, geen `aria-describedby` |
| `number-flow` | ⚠️ | Teller met rollende cijfers en plus/min-knoppen | Geen reduced motion (manifest geeft dit eerlijk aan). Cijfers zijn losse `<div>`s zonder `role="spinbutton"`, `aria-valuenow` of `aria-live` — een screenreader hoort "Increase number" en verneemt de waarde nooit |
| `smooth-button` | ⚠️ | CVA-knop met verloopvarianten en press-animatie | De verloopvarianten vallen onder §1.1. Ondanks de naam **geen loading- of success-staat** |
| `exposure-slider` | ⚠️ | iOS-achtige tickerslider met voortgangsring | Complex en gebaar-gedreven. Alleen waar het echt iets toevoegt |

### Verboden

| Component | Regel |
|---|---|
| `siri-orb` | §1.3 gloed, §5.5 doorlopende beweging |
| `glow-hover-card` | §1.3 gloed |
| De ~15 `shader-reveal-*`, `sdf-*`, `chroma-blur-*`, `aperture-blur-*`, `radial-circles-*`, `warped-circle-*`, `prism-sweep-*` transities | §5.5 ambient motion, plus shader-kosten voor nul informatie |

### `price-flow` — niet gebruiken

🚫 Niet vanwege een designregel maar omdat het **kapot is**. `padStart(2, "0")` en lezen
van `[0]` en `[1]` betekent: twee cijfers, meer niet. Geef er 100 aan en het rendert "10".
Onbruikbaar voor echte prijzen zonder herschrijving. De `setTimeout` wordt bovendien nooit
opgeruimd bij unmount, en de dubbele prev/next cijfers laten een screenreader "4 2 4 3"
voorlezen.

Wil je een prijs animeren, gebruik dan `number-flow` met een eigen `Intl.NumberFormat`
op `nl-BE`, of doe het helemaal niet — zie
[`../05-copy/micro-typografie-nl.md`](../05-copy/micro-typografie-nl.md) voor de correcte
notatie.

## Overige componenten in de repo

Niet in detail bekeken, wel aanwezig: `animated-o-t-p-input`, `animated-progress-bar`,
`animated-tags`, `reviews-carousel`, `scrollable-card-stack`, `app-download-stack`,
`notification-badge`, `gooey-popover`, `rich-popover`, `searchable-dropdown`, `combobox`,
`context-menu`, `drawer`, `dialog`, `checkbox`, `form`, `interactive-image-selector`.

**Nuttige aanwijzing:** `combobox`, `context-menu`, `dialog`, `drawer`, `checkbox` en
`form` hebben elk een `.a11y.test.tsx` met vitest-axe. De componenten die ik hierboven
beoordeelde grotendeels niet. Dat is een redelijke indicator van waar wél
toegankelijkheidsaandacht aan besteed is — begin bij die zes als je een formulier bouwt.

## De patronen die het waard zijn los te trekken

Ook als je geen enkel component overneemt:

1. **`inert` op ingeklapte accordeon-inhoud** in plaats van unmounten. Houdt de breedte
   stabiel én haalt het uit de tab-volgorde en de a11y-boom. Eén attribuut, twee problemen.
2. **De drag-dan-klik guard** in `photo-stack`: een korte sleep vuurt zowel `onDragEnd` als
   een naslepende `onClick`, waardoor de actie dubbel afgaat. Zij vangen dat met een ref.
   Elk sleepbaar component heeft dit nodig en bijna geen enkel heeft het.
3. **`(hover: hover) and (pointer: fine)` als media query** in `scrubber`, om hover-gedrag
   alleen op muisapparaten aan te zetten. Beter dan een breakpoint raden.
4. **Pointer capture** (`setPointerCapture`) bij slepen, zodat de beweging doorloopt als de
   cursor het element verlaat.

## Voor je iets installeert

Vier plekken hardgecodeerde kleur moeten meteen weg, niet later:
`basic-toast` (`emerald/red/amber/blue-500`), `animated-input` (`#6b7280`), `photo-stack`
(`bg-white`, `outline-blue-600`), `dynamic-island` (`bg-black`). Dat zijn regel 4 uit
`CLAUDE.md` en `npm run design:check` faalt erop.

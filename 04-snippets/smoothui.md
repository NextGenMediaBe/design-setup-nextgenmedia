# SmoothUI

**114 componenten** plus 10 blokcategorieën. De site zegt zelf "50+" — dat cijfer is jaren
oud. Interactie en beweging zijn het onderwerp: tabs, accordeons, scrubbers, toggles,
kaartstapels, 29 tekstonthullingen en 17 WebGL-paginatransities.

- Site: https://smoothui.dev
- Repo: https://github.com/educlopez/smoothui — actief onderhouden, 861 sterren
- Licentie: **MIT**, © 2024 Eduardo Calvo. **Geen betaalde laag.** Alle 114 gratis
- Onderhouder: Eduardo Calvo (`educlopez`)

Van de drie catalogi in deze map is dit de enige die `prefers-reduced-motion` structureel
respecteert — en tegelijk de enige waar toegankelijkheid het zwakste punt is. Die twee
staan niet in tegenspraak: motion-discipline is één ding, toetsenbordbediening een ander.

Oordelen volgens het schema in [`INDEX.md`](./INDEX.md).

## Installeren

```bash
pnpm dlx shadcn@latest init          # eerst, maakt components.json en lib/utils.ts
pnpm dlx shadcn@latest add @smoothui/animated-tabs
```

SmoothUI is een *officiële* shadcn-registry, dus `@smoothui` werkt zonder configuratie.
Er is ook een eigen CLI (`smoothui-cli`) en een REST API op `/api/v1` zonder auth.

Let op: de registry-index is `/r/registry.json`, niet `/registry.json`.

## Stack-eisen

| | |
|---|---|
| React | **19+ verplicht** — `basic-accordion` gebruikt `inert` |
| Tailwind | **v4 alleen.** `@theme inline`, `@custom-variant`, OKLCH. Geen v3-pad |
| Motion | `motion`, import uit `motion/react` |
| GSAP | Voor precies één component (`gooey-popover`) |
| WebGL | Alle 17 transities: ruw WebGL1 met handgeschreven GLSL. Geen three.js |

## Vijf dingen die stukgaan

**1. `apple-invites` declareert een pakket dat niet bestaat.** `@smoothui/data` staat niet
op npm — de hele scope bestaat niet. `npm install` faalt. De broncode importeert het
overigens ook nergens. Dit is de slechtste registry-entry van de drie catalogi.

**2. Een gedeeld bestand wordt nergens gedeclareerd.** Veel componenten importeren
`SPRING_DEFAULT` en verwanten uit `components/smoothui/lib/animation.ts`, en dat bestand
staat in geen enkele `dependencies` of `registryDependencies`. Kopieer je één component,
dan mist die import. Maak hem zelf aan:

```ts
export const SPRING_DEFAULT = { type: "spring", duration: 0.25, bounce: 0.1 };
export const SPRING_SNAPPY  = { type: "spring", duration: 0.2,  bounce: 0 };
export const EASE_OUT       = [0.23, 1, 0.32, 1] as const;
export const EASE_IN_OUT    = [0.645, 0.045, 0.355, 1] as const;
export const DURATION = { fast: .15, default: .25, slow: .3, complex: .4 } as const;
```

**3. Vijf componenten declareren `"motion/react"` als dependency.** Dat is een
import-subpad, geen installeerbaar pakket. Voer die array letterlijk aan een installer en
het resolvet verkeerd.

Verder ontbreken: `react-dom` bij vijf portal-componenten, `vaul` bij `drawer`, `cmdk` bij
`combobox`, `radix-ui` bij `context-menu` en `dropdown-menu`, en `react` bij alle 114.

**4. CSS-klassen zonder meegeleverde keyframes.** `number-flow`, `price-flow` en
`power-off-slide` sturen op `slide-in-up` / `slide-out-up` / `slide-in-down` /
`slide-out-down` en `loading-shimmer`. Die staan alleen in de stylesheet van de docs-app.
Kopieer je het component alleen, dan rendert het statisch — zonder foutmelding.

Ze staan bovendien **twee keer, verschillend** in de repo: één versie met transform en
opacity, één met `filter: blur(5px)` en 50px verplaatsing. Welke wint hangt af van
laadvolgorde. Neem deze, want transform en opacity zijn goedkoper dan een blur-repaint
(zie [`../02-design-system/motion.md`](../02-design-system/motion.md)):

```css
@keyframes slide-out-up   { 0% { transform: translateY(0);     opacity: 1 } 100% { transform: translateY(-100%); opacity: 0 } }
@keyframes slide-out-down { 0% { transform: translateY(0);     opacity: 1 } 100% { transform: translateY(100%);  opacity: 0 } }
@keyframes slide-in-up    { 0% { transform: translateY(100%);  opacity: 0 } 100% { transform: translateY(0);     opacity: 1 } }
@keyframes slide-in-down  { 0% { transform: translateY(-100%); opacity: 0 } 100% { transform: translateY(0);     opacity: 1 } }

.slide-out-up   { animation: slide-out-up   .3s cubic-bezier(.22,1,.36,1) forwards }
.slide-out-down { animation: slide-out-down .3s cubic-bezier(.22,1,.36,1) forwards }
.slide-in-up    { animation: slide-in-up    .3s cubic-bezier(.22,1,.36,1) forwards }
.slide-in-down  { animation: slide-in-down  .3s cubic-bezier(.22,1,.36,1) forwards }

/* Verplicht bij ons — deze drie componenten checken het zelf niet. */
@media (prefers-reduced-motion: reduce) {
  .slide-out-up, .slide-out-down, .slide-in-up, .slide-in-down { animation: none }
}
```

`loading-shimmer` gebruikt de al lang verouderde `-webkit-gradient()`-syntaxis. Werkt
alleen in WebKit en Blink; Firefox krijgt niets. Herschrijven of laten.

**5. De import van `cn` is bij losse bestanden een monorepo-alias.** Herschrijf naar
`@/lib/utils`.

## Kleur

`--color-brand` is `oklch(0.72 0.2 352.53)` — een felle magenta-roze, hardgecodeerd als
`bg-brand` en `text-brand` door de hele bibliotheek. Bij ons wordt dat `--primary` uit
[`../02-design-system/tokens/globals.css`](../02-design-system/tokens/globals.css).

Goed nieuws: het systeem gaat uit van **precies één accent**, wat overeenkomt met regel 6
uit [`../CLAUDE.md`](../CLAUDE.md). Eén variabele overschrijven volstaat.

De `--color-smooth-*` ramp is een volledig ontzadigde grijstrap (`oklch(L 0 0)`) die in
donkere modus in zijn geheel omklapt. Technisch netjes, maar nul tint — dat is precies de
"kleur van geen keuze" uit [`../02-design-system/color.md`](../02-design-system/color.md).
Vervang door neutralen getint naar de merkhue.

**Twee componenten hebben hardgecodeerde kleur die de scanner afkeurt:** `animated-input`
gebruikt `#6b7280`, en `animated-progress-bar` heeft `#6366F1` als standaardvulling — die
staat letterlijk op de zwarte lijst in
[`../02-design-system/anti-patterns.md`](../02-design-system/anti-patterns.md) §1.4.

## De motion-woordenschat

Het bruikbaarste aan de bibliotheek, los van de componenten:

```
spring:  { type: "spring", duration: 0.25, bounce: 0.05–0.1 }
snappy:  { type: "spring", duration: 0.2,  bounce: 0 }
easing:  ease-out-quint  cubic-bezier(0.23, 1, 0.32, 1)
```

Dat is een verdedigbare huiscurve. Vergelijk met `--ease-brand` in `motion.md` en kies er
één per project.

## De catalogus

### Basic UI (24) — het sterkste deel

`accordion` ✅ · `animated-tabs` ✅ · `animated-toggle` ✅ · `animated-input` ⚠️ ·
`animated-stepper` ✅ · `animated-progress-bar` ⚠️ · `animated-tooltip` ✅ ·
`animated-file-upload` ✅ · `checkbox` ✅ · `radio-group` ✅ · `skeleton-loader` ✅ ·
`form` ⚠️ · `basic-modal` ⚠️ · `basic-toast` ⚠️ · `tweet-card` ⚠️ · `notification-badge` ⚠️ ·
`select` · `combobox` · `context-menu` · `dropdown-menu` · `basic-dropdown` ·
`searchable-dropdown` · `dialog` · `drawer` — zie de waarschuwing hieronder

**De aanraders.** `animated-tabs` heeft volledige roving tabindex met pijltjes, Home en
End, en één indicator die via `layoutId` meeschuift. `accordion` gebruikt `inert` op
ingeklapte inhoud in plaats van te unmounten — dat houdt de breedte stabiel én haalt het
uit de tab-volgorde. `checkbox` tekent het vinkje via `pathLength` in plaats van het in te
faden. `skeleton-loader` rendert de echte children `invisible` zodat de layout exact klopt.

**De ARIA-waarschuwing die telt.** In `context-menu`, `dropdown-menu`, `select`,
`basic-dropdown` en `searchable-dropdown` zit een `motion.div` **tussen de menucontainer en
de items**. Dat breekt de roving focus en de typeahead van Radix, omdat de items geen
directe kinderen meer zijn. Het menu opent en animeert prima; pijltjestoetsen en
letternavigatie doen het niet. Dat is niet cosmetisch — controleer dit voor je er een
navigatie of formulier op bouwt.

`form` heeft twee echte bugs: een module-brede `fieldCounter` waardoor stagger-indexen
lekken tussen gelijktijdig gemonteerde formulieren, en `key={shakeKey}` dat de hele
veldsubtree hermonteert bij een fout — waarmee focus en niet-gecontroleerde invoer weg zijn.

`basic-toast` is **geen stack**: elk toast is `fixed top-4 right-4`, twee tegelijk
overlappen exact. Geen `role="status"`, geen `aria-live`, sluitknop zonder naam,
auto-dismiss op 3s zonder pauze bij hover — dat laatste is een WCAG 2.2.1-schending. Palet
hardgecodeerd op `emerald/red/amber/blue`.

`basic-modal` genereert zijn `titleId` met `Math.random()` tijdens render: hydration-mismatch
onder SSR.

### Navigatie (2)

`breadcrumb` ✅ · `pagination` ✅ — beide correct toegankelijk, met `aria-current="page"` en
`aria-hidden` op de scheidingstekens.

### Knoppen (5)

| Component | Oordeel | Notitie |
|---|---|---|
| `smooth-button` | ✅ | De basis. CVA-varianten, `aria-busy` bij laden, druk naar 0.97. De `candy`-variant is een verloop — die niet |
| `button-copy` | ✅ | Drietrapsmorph Copy → Loader → Check. **Raakt `navigator.clipboard` niet aan**, je levert `onCopy` zelf |
| `magnetic-button` | 🚫 | §4.6 — verplaatst het doelwit terwijl de gebruiker erop mikt, en staat op zoveel sites dat het als default leest. Technisch netjes gebouwd (uit op niet-hover-apparaten), maar niet shippen. Zie recept 6 in [`gsap/recipes.md`](./gsap/recipes.md) |
| `clip-corners-button` | ⚠️ | Hoekdriehoekjes springen 4px naar buiten |
| `dot-morph-button` | ⚠️ | Punt morpht naar een pil |

### Tekst (29) — allemaal hetzelfde probleem

Negenentwintig varianten op "tekst verschijnt". Ze zijn technisch net en respecteren
allemaal `useReducedMotion`, maar de regel uit `motion.md` blijft: **één of twee momenten
per pagina.** Negenentwintig opties maken de verleiding groter, niet de regel losser.

**De rustigste, en daarom de bruikbaarste:** `per-word-crossfade` (alleen 8px y),
`micro-scale-fade` (alleen scale 0.96→1), `shared-axis-y` (pure opacity-cascade van 78ms,
geen transform, geen easing — editorieel en ongewoon ingetogen), `reveal-text` (0.25s,
snappy en gewoon).

**Met reden:** `mask-reveal-up` (regels komen achter een masker vandaan — dit is de
gemaskeerde hero-onthulling uit `hero.md`), `scroll-reveal-paragraph`,
`stagger-from-center` / `stagger-from-edges` (identiek op de delay-formule na),
`scramble-hover` (geen animatiebibliotheek, en netjes afgeschermd voor touch),
`shine-text`, `blur-out-up`, `soft-blur-in`, `focus-blur-resolve`.

**Verboden:** `wave-text` (🚫 §5.5 — oneindige lus op mount).

**Let op de namen.** Vier kloppen niet met wat het component doet:

| Naam | Werkelijkheid |
|---|---|
| `shimmer-sweep` | Geen shimmer en geen verloop. De broncode verwijst zelf door naar `shine-text` |
| `shared-axis-y` | Geen y-beweging. Pure opacity. Heet in de zijbalk "Word Cut Staircase" |
| `short-slide-right` | Komt binnen **vanaf links** |
| `typewriter-text` | Rendert geen cursor |

### Transities (17) — verboden

WebGL-paginatransities met handgeschreven GLSL. Technisch indrukwekkend: het zijn twee
engines (`shader-reveal-transition`, `sdf-blob-transition`) met twaalf dunne wrappers
eromheen, die in de zijbalk andere namen krijgen zodat de gedeelde afkomst onzichtbaar is.

🚫 op alle zeventien. §5.2 — ze zetten een canvas tussen de bezoeker en de inhoud, met een
overgang van meer dan een seconde. Geen `aria-live`, geen `aria-hidden` op de overlay, geen
focusafhandeling over de wissel. Voor een portfolio of een releasepagina valt er iets voor
te zeggen; dan met `slop-check-ok:` en een reden.

### AI (3)

| Component | Oordeel | Notitie |
|---|---|---|
| `agent-avatar` | ✅ | Deterministische pixel-avatar uit een seed-hash met mulberry32. Canvas-2D, nul dependencies. Een echte generatieve identiteit, geen verloop-uit-een-string |
| `ai-branch` | ✅ | Gespreksvertakking met wraparound |
| `ai-input` | ⚠️ | Dock morpht naar een formulier. Importeert `SiriOrb` en een lokale hook die het niet declareert |

### Overig (34) — de interessantste groep

**Aanraders:** `infinite-slider` (hertimet de *resterende* afstand bij hover, dus geen
sprong) · `photo-stack` ⚠️ · `scrubber` ✅ · `expandable-cards` ⚠️ · `contribution-graph` ⚠️ ·
`book` ✅ · `product-card` ⚠️ · `phototab` ✅ · `animated-avatar-group` ✅ ·
`animated-o-t-p-input` ✅ · `animated-tags` ⚠️ · `grid-loader` ✅ · `user-account-avatar` ⚠️ ·
`rich-popover` ✅

**Verboden:** `siri-orb` 🚫 (§1.3 gloed, §5.5) · `glow-hover-card` 🚫 (§1.3) ·
`cursor-follow` 🚫 (vervangt de systeemcursor) · `gooey-popover` 🚫 (§5.5, en de enige
GSAP-component zonder reduced-motion-pad) · `apple-invites` 🚫 (WCAG 2.2.2 — draait elke 3s
door zonder pauzeknop, én de ontbrekende npm-scope)

**Kapot, niet verboden:** `price-flow` 🚫. `padStart(2, "0")` en lezen van index 0 en 1
betekent twee cijfers. Geef er 100 aan en het toont "10", 250 wordt "25". Stil fout voor
elke waarde vanaf 100. Gebruik `number-flow` met een eigen `Intl.NumberFormat` op `nl-BE`
— zie [`../05-copy/micro-typografie-nl.md`](../05-copy/micro-typografie-nl.md).

`switchboard-card` roept `Math.random()` aan in `useMemo`: hydration-mismatch onder SSR.
`reviews-carousel` kaapt ArrowLeft en ArrowRight op `window`, ongeacht focus, en heeft
**hardgecodeerde Spaanse labels** ("Anterior", "Siguiente") in een verder Engels component.

### Blokken (10 categorieën)

CTA, FAQs, Features, Footer, Hero, Logo Clouds, Pricing, Stats, Team Sections, Testimonial.
De site claimt 20+ varianten maar somt ze nergens op, en `/api/v1/blocks` geeft een lege
array terug. Niet bruikbaar tot dat opgelost is — en let op dat dit precies de
standaardvolgorde uit §3.1 is.

## Toegankelijkheid — lees dit voor je kiest

Ongeveer **7 van de 114** componenten zijn behoorlijk toegankelijk: `breadcrumb`,
`pagination`, `photo-stack`, `scrubber`, `button-copy`, `agent-avatar`, `expandable-cards`.

De terugkerende problemen:

- **Div-als-knop zonder toetsenbordpad** in `animated-tags`, `interactive-image-selector`,
  `job-listing-component`, `figma-comment`, `apple-invites`, `image-metadata-preview`.
- **Bedieningselementen zonder waarde**: `exposure-slider` is een slider zonder
  `role="slider"`, zonder `aria-value*` en zonder pijltjestoetsen. `animated-progress-bar`
  heeft geen `role="progressbar"`. `power-off-slide` heeft een focusbare knop zonder rol en
  zonder toetsafhandeling — focusbaar, maar onmogelijk te activeren.
- **Niets wordt aangekondigd**: `basic-toast`, `number-flow`, `notification-badge` en
  `grid-loader` wijzigen waarden zonder live region.
- **`role="application"` misbruikt** in `cursor-follow` en `scrollable-card-stack` — dat
  claimt een interactiemodel dat er niet is, wat erger is dan geen rol.
- **`contribution-graph`** is hover-only met een onderdrukte lint-waarschuwing bovenop het
  probleem en geen `aria-label` per cel. De hele dataset is onleesbaar voor hulpsoftware.

Regel 11 uit `CLAUDE.md` zegt: Lighthouse onder 100 is een defect. Reken op herstelwerk bij
alles wat de bezoeker echt bedient.

**Krediet waar het hoort:** `useReducedMotion()` wordt consequent en correct toegepast —
elk component valt terug op `duration: 0`, op `gooey-popover` en de handgreep van `drawer`
na. Dat is beter dan Magic UI en Vengeance UI samen.

## De patronen die het waard zijn los te trekken

Ook als je geen enkel component overneemt:

1. **`inert` op ingeklapte inhoud** in plaats van unmounten. Houdt de breedte stabiel én
   haalt het uit de tab-volgorde en de a11y-boom. Eén attribuut, twee problemen.
2. **Randbreedte compenseren onder transform** in `reviews-carousel` en
   `scrollable-card-stack`: `1/scale`, zodat haarlijnen haarlijnen blijven als de kaart
   krimpt. Precies het soort detail waar
   [`../02-design-system/craft.md`](../02-design-system/craft.md) over gaat.
3. **De breedte vooraf meten** in `cursor-follow`, vóór de pil uitklapt, zodat er geen
   breedtesprong is. Dat is het verschil tussen ontworpen en gegenereerd.
4. **Verplaatsen over de gemeten hoogte** in `image-metadata-preview`: de foto schuift
   precies zoveel omhoog als het paneel dat eronder verschijnt hoog is
   (`animate={{ y: -bounds.height }}`). Fysiek coherente beweging.
5. **De drag-dan-klik guard** in `photo-stack`: een korte sleep vuurt zowel `onDragEnd` als
   een naslepende `onClick`. Elk sleepbaar component heeft dit nodig en bijna geen enkel
   heeft het.
6. **`(hover: hover) and (pointer: fine)`** als media query in plaats van een breakpoint
   raden, gebruikt in `scrubber` en `scramble-hover`.
7. **Resterende afstand hertimen** in `infinite-slider` bij snelheidswijziging, zodat de
   marquee niet verspringt.

# Vengeance UI

Een grote verzameling geanimeerde React-componenten: knoppen, teksteffecten, carousels,
achtergronden, docks, galerijen. Echt goed werk, en de sterkste bron die we hebben voor het
ene memorabele interactiemoment per pagina.

- Site: https://www.vengenceui.com/components *(let op de spelling van het domein)*
- Repo: https://github.com/Ashutoshx7/VengenceUI
- Registry-index (248 entries, meer dan de site toont): `https://www.vengenceui.com/r/registry.json`

Oordelen volgens het schema in [`INDEX.md`](./INDEX.md).

## Licentie: lees dit eerst

> **De repository heeft geen LICENSE-bestand.** GitHub meldt `license: null`, en de
> voorwaarden op de site zeggen alleen dat je "de repository moet nakijken". Onder het
> standaard auteursrecht betekent dat **alle rechten voorbehouden**.

Wat dat in de praktijk betekent:

| Gebruik | Oordeel |
|---|---|
| Installeren via de eigen shadcn-registry van de auteur, in een project | Prima. Dat is het distributiekanaal dat ze zelf gebouwd en gepubliceerd hebben |
| De techniek bestuderen en zelf een implementatie schrijven | Prima |
| De broncode letterlijk in **deze** repo kopiëren en herdistribueren | **Nee** |
| Meeleveren in een betaald klantproject | **Eerst de auteur vragen**, schriftelijk |

We vendoren deze componenten dus **niet**. Dit bestand is een catalogus: wat er bestaat, wat
het nodig heeft en wat er stuk is, zodat je op het moment zelf de ene component kunt halen
die je nodig hebt in plaats van 66 bestanden te dupliceren die we daarna moeten onderhouden.

## Installeren

Zet shadcn één keer op (New York / Zinc / CSS-variabelen), daarna:

```bash
npx shadcn@latest add https://www.vengenceui.com/r/<name>.json
```

Of registreer de namespace in `components.json` en gebruik korte namen:

```jsonc
{ "registries": { "@vengeanceui": "https://www.vengenceui.com/r/{name}.json" } }
```

```bash
npx shadcn@latest add @vengeanceui/animated-rays
```

Alles landt in `components/ui/<name>.tsx`. Geen enkel component declareert
`registryDependencies`: elk is zelfstandig, op `cn` na.

### De basis die de componenten veronderstellen

```bash
npm i clsx tailwind-merge framer-motion
# per component, naar behoefte:
npm i gsap three @react-three/fiber @react-three/drei
npm i lucide-react @phosphor-icons/react next-themes @paper-design/shaders-react
```

Tailwind v4, CSS-first config, `@custom-variant dark (&:is(.dark *))`, en de standaard
`cn`-helper in `lib/utils.ts`.

## Bekende problemen: controleer dit voor je installeert

1. **Zes registry-bestanden geven 404** terwijl hun pagina's wel bestaan. `shadcn add`
   faalt; kopieer in plaats daarvan van de pagina: `my-animated-button`, `image-collage`,
   `cylinder-carousel`, `ripple-displacement-slider`, `solar-system`,
   `magnetic-spotlight-marquee`.
2. **Onderaangegeven dependencies.** `liquid-text` en `liquid-ocean` importeren Three.js
   maar declareren niets. De installatie slaagt en de build breekt. **Controleer de imports
   van elk component dat je toevoegt.**
3. **Ontbrekende globale CSS.** Deze installeren visueel kapot, omdat hun stylesheets niet
   in de registry-JSON staan: `glow-border-card` (heeft `.glow-conic` nodig), `logo-slider`
   (heeft `.logo-slider__track/__item/__blur` nodig), `glass-dock` (heeft `.glass-dock`,
   `.glass-border` en klassen per icoon nodig). Die CSS moet je zelf schrijven.
4. **`elastic-stack` bevat een typefout:** `from "@@/lib/utils"`. Herstel naar
   `@/lib/utils`.
5. **`morph-text` doet een `@import` van Google Fonts vanuit een JS `<style>`-tag.** Dat is
   een netwerkverzoek tijdens runtime en een CSP-probleem. Zet het lettertype in
   `next/font`.
6. **`border-beam` gebruikt `<style jsx>`**, wat buiten de Next.js Pages Router niets doet.
   Verplaats de keyframe naar `globals.css`.
7. **Ze importeren `framer-motion`, niet `motion`.** Pin de oude pakketnaam, of pas de
   imports zelf aan.
8. **`glass-dock` gebruikt MorphSVGPlugin** achter een `try/catch` die alleen waarschuwt,
   omdat het vroeger een betaalde plugin was. Die is nu gratis, zie
   [`gsap/README.md`](./gsap/README.md), dus registreer hem en de iconen morphen echt.

## De catalogus

### Knoppen
`candy-button` (glanzend blauw radiaal, geen deps) · `pop-button` (harde offset-schaduw die
inklapt bij klik, geen deps) · `radial-glow-button` (geanimeerd `@property`-verloop plus
conische glans, geen deps) · `generate-button` (sparkle plus letterglans, met laadstatus) ·
`social-flip-button` (letter naar icoon-flip) · `corner-button` (hoekpunten klappen uit bij
hover) · `creepy-button` (googly eyes die de cursor volgen) · `liquid-metal` (echte
chroom-shaderring, heeft `@paper-design/shaders-react` nodig) · `my-animated-button` ⚠️
registry 404

**De aanraders uit deze groep:** `pop-button` en `radial-glow-button`. Beide zonder
dependencies, en het effect zit in de CSS, dus ze zijn goedkoop en makkelijk te restylen
naar de token-laag.

### Tekst en beweging
`animated-number` (cijfers scrollen bij wijziging) · `flip-text` (3D-flip per teken) ·
`flip-fade-text` (woorden wisselen) · `morph-text` (gooey SVG-threshold-morph, geen deps) ·
`ascii-glitch-ripple` (karakter-scramble die vanaf de cursor uitwaaiert, geen deps) ·
`liquid-text` (Three.js-rimpeling op de pointer) ⚠️ niet-gedeclareerde `three`

**Aanrader:** `ascii-glitch-ripple` op één kop of één navigatie-item is een sterk en
goedkoop signatuureffect. `morph-text` is de dramatischere van de twee.

### Interactief
`interactive-book` · `perspective-carousel` · `diagonal-carousel` · `cylinder-carousel` ⚠️
· `image-trail` · `pixelated-image-trail` · `image-collage` ⚠️ · `circular-gallery`
(sleepbare 3D-ring, GSAP) · `interactive-keyboard` · `typing-keyboard` · `music-player` ·
`verse-cards` (uitwaaierende kaartstapel, GSAP) · `solar-system` ⚠️ ·
`interactive-particles` (beeld naar GPU-deeltjes, three plus gsap) ·
`ripple-displacement-slider` ⚠️ (WebGL) · `scroll-dissolve-reveal` (R3F scroll-dissolve)

**Waarschuwing:** de WebGL-varianten (`three`, `@react-three/fiber`) voegen 150kb+ toe en
kosten je de Lighthouse-score. Gebruik er hoogstens één, boven de vouw, op een site waar het
beeld *het* product is. Lees eerst
[`../01-standards/performance.md`](../01-standards/performance.md).

### Layout en kaarten
`agent-bento-grid` · `expandable-bento-grid` (kaart naar modal) · `staggered-grid`
(GSAP-scrollstagger) · `image-scatter` · `glow-border-card` ⚠️ heeft CSS nodig ·
`testimonials-card` · `highlight-grid` (markering volgt de cel onder de cursor, geen deps)

### Tooltips, avatars, marquees
`cursor-card` (linkpreview die de cursor volgt, via portal gerenderd) · `elastic-stack` ⚠️
typefout · `logo-slider` ⚠️ heeft CSS nodig · `stacked-logos` · `masked-avatars` ·
`shared-tooltip-avatars` · `image-reveal-list` (hover een lijstitem, beeld schuift binnen) ·
`faq-accordion` · `magnetic-spotlight-marquee` ⚠️

**Aanrader:** `image-reveal-list` is hiervan de beste voor echt klantwerk. Het maakt van een
dienstenlijst of een projectindex iets dat je wíl hoveren.

### Navigatie
`glass-dock` ⚠️ heeft CSS nodig · `spotlight-navbar` (spotlight veert terug naar het actieve
item) · `notch-navbar` (header met notch, themawissel, mobiel menu) · `gooey-search` ·
`animated-footer` (ASCII-handen die oplichten rond de cursor, GSAP) · `awwwards-nav`
(onderste pil die uitklapt naar een megamenu) · `search-modal` (command palette)

**Toegankelijkheidsvoorbehoud:** geen van deze is gebouwd naar de standaard in
[`../01-standards/accessibility.md`](../01-standards/accessibility.md). Voor je hier een
navigatiecomponent uit meelevert: controleer toetsenbordbediening, focus trapping en
`aria-expanded`. Reken erop dat je die zelf moet toevoegen.

### Collecties (meerdere varianten in één bestand, goede prijs-kwaliteit)
`line-hover-link`: **11** onderstreepvarianten · `folder-preview`: **9** varianten van een
openende map · `animated-tooltip`: **7** SVG-bubbelvormen

### Achtergronden: grotendeels verboden

**🚫 VERBODEN.** Dit zijn benoemde anti-patterns in
[`../02-design-system/anti-patterns.md`](../02-design-system/anti-patterns.md) §1.2 en §5.5.
Ze zijn de luidste AI-tell die er is, en ze kosten daarbovenop je LCP-budget:

| Component | Regel gebroken |
|---|---|
| `aurora-hero` | §1.2 aurora-achtergronden: dit is letterlijk waar de regel over gaat |
| `animated-rays` | §1.2: aurora onder een andere naam |
| `fluid-morph-bg` | §1.2 plus §5.5: zeven morphende SVG-blobs |
| `liquid-gradient` | §1.1 paars-blauw verloop plus §5.5 omgevingsbeweging |
| `glow-border-card` | §1.3 gloed: een roterende conische aurora-rand |
| `wave-grid-background` | §5.5 omgevingsbeweging, plus 150kb+ Three.js |
| `liquid-ocean` | §5.5, plus 150kb+ Three.js en een niet-gedeclareerde dependency |

**Met reden toegestaan**, met `slop-check-ok:` en een geschreven reden in `DESIGN.md`:
`twisting-ribbon` (canvas 2D, goedkoop), `perspective-grid` (statisch, geen beweging),
`light-lines` (statisch verloop).

Gebruik je er één van die drie: één per site, alleen in de hero, nooit achter lopende tekst,
gerestyled naar het projectpalet (de meegeleverde kleuren zijn allemaal paars of cyaan en
vechten met het merk), `prefers-reduced-motion` zet hem stil (geen van de drie doet dat uit
zichzelf), en een statische fallback onder `md`.

### Niet op de site, alleen in `registry.json`
`border-beam` · `cyber-glitch-text` · `interactive-hover-button` · `liquid-gradient` ·
`morphing-disclosure` · `smooth-scroll` · `reveal-loader` · `code-block` · `copy-button` ·
`github-button` · `component-showcase` · `fullscreen-preview` · `testinomial-card2`

De registry herbergt daarnaast de complete basisset van shadcn/ui. Installeer die
rechtstreeks bij shadcn, niet hier.

## Voor je hier iets uit installeert

Deze catalogus is ouder dan de anti-slopregels. Veel van wat hierboven staat, breekt ze.
Toets elk component aan
[`../02-design-system/anti-patterns.md`](../02-design-system/anti-patterns.md) voor het in
een project gaat, en reken erop dat `npm run design:check` op meerdere ervan faalt:
`rounded-2xl`, `shadow-xl`, `backdrop-blur` en `transition-all` komen overal voor.

Restylen naar de token-laag is hier niet optioneel. Deze componenten komen met
hardgecodeerde hexwaarden, paars-cyaan paletten en `dark:`-varianten die Zinc veronderstellen.

## Hoe je dit goed gebruikt

De verleiding bij een bibliotheek als deze is er tien te installeren. Niet doen. De regel
uit [`../02-design-system/motion.md`](../02-design-system/motion.md) geldt onverkort: **één
of twee momenten van beweging per pagina.**

Het juiste patroon is: bouw de pagina eerst goed, en kies dan *één* component hieruit dat
het ding waar de klant om geeft memorabel maakt. Een dienstenlijst die beelden onthult bij
hover. Een hero-kop die scramblet. Eén dock. Restyle het daarna naar de token-laag zodat het
er niet uitziet alsof het ergens anders vandaan komt, want dat is nu bij de meeste wel het
geval.

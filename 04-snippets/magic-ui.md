# Magic UI

76 gedocumenteerde componenten, plus één alleen in de registry. De grootste en best
onderhouden van de drie catalogi, en tegelijk de bron van bijna elk visueel cliché dat
[`../02-design-system/anti-patterns.md`](../02-design-system/anti-patterns.md) verbiedt.

- Site: https://magicui.design/docs/components
- Repo: https://github.com/magicuidesign/magicui
- Licentie: **MIT** (`LICENSE.md`, © Magic UI). Alle 76 componenten vrij te gebruiken, ook
  commercieel
- **Magic UI Pro** (pro.magicui.design) is een apart product: landingspagina-templates,
  $199 eenmalig, **niet MIT**: "Re-selling of code is NOT allowed". Zes van de negen
  templates zijn betaald. Dat is geen onderdeel van deze catalogus

Van de 76 zijn er ongeveer **dertig verboden** en **twintig alleen met reden**. Dat is geen
kritiek op de bibliotheek. Die is technisch goed gemaakt. Het is wat er gebeurt als je een
collectie effecten langs een verbodslijst legt die specifiek geschreven is tegen effecten.

Oordelen volgens het schema in [`INDEX.md`](./INDEX.md).

## Installeren: niet kopiëren

```bash
npx shadcn@latest init
npx shadcn@latest add @magicui/marquee
```

`@magicui` staat in de publieke shadcn-catalogus, dus een recente CLI kent het zonder
configuratie. Op een oudere CLI:

```jsonc
{ "registries": { "@magicui": "https://magicui.design/r/{name}.json" } }
```

**Kopiëren en plakken vanaf de documentatiepagina breekt stil.** Zestien componenten hebben
een CSS-blok nodig (keyframes en `--animate-*` variabelen) dat **alleen in de
registry-JSON staat en niet op de pagina**. `marquee` gekopieerd van de docs rendert een
nette rij die nooit beweegt, zonder enige foutmelding. Gebruik de CLI.

## Stack-eisen

| | |
|---|---|
| React | 19 |
| Tailwind | **v4 verplicht.** `@theme inline`, `gap-(--gap)`, OKLCH |
| Motion | `motion` (niet `framer-motion`), import uit `motion/react` |
| Tailwind v3 | Alleen via het bevroren `v3.magicui.design`: oudere versies, geen nieuwe componenten |

Er is geen `tailwind.config.ts`-aanpassing: alles gaat in `globals.css` onder `@theme inline`.

## Wat er stukgaat

**Acht componenten declareren npm-dependencies niet die ze wel importeren.** `shadcn add`
slaagt, de build faalt daarna op een ontbrekende module:

| Component | Ontbreekt |
|---|---|
| `terminal` | `motion` |
| `dot-pattern` | `motion` |
| `interactive-hover-button` | `lucide-react` |
| `hero-video-dialog` | `lucide-react` |
| `dock` | `class-variance-authority` |
| `rainbow-button` | `@radix-ui/react-slot`, `class-variance-authority` |
| `code-comparison` | `@shikijs/transformers`, `lucide-react` |
| `file-tree` | `@radix-ui/react-accordion`, `lucide-react`, én de registry-deps `button` en `scroll-area` |

`file-tree` is de ergste: het gebruikt ook `animate-accordion-up/down` waarvan de keyframes
nergens meegeleverd worden. Die komen normaal uit shadcn's eigen `accordion`. Installeer je
die niet, dan klappen mappen open zonder animatie en waarschuwt niets.

**`smooth-cursor` declareert het verkeerde motion-pakket**: `framer-motion` in de registry,
`motion/react` in de code.

**Rainbow Button heeft twee tegenstrijdige kleursets.** De registry levert OKLCH, de
documentatiepagina toont nog kale HSL-triples. De MDX is verouderd; volg de CLI.

## Geen enkel component respecteert reduced motion

Op één na. `retro-grid` heeft een `prefers-reduced-motion`-override in de eigen broncode.
De andere 75 niet, inclusief `marquee`, `meteors`, `ripple`, `orbiting-circles`,
`shimmer`, `rainbow` en `aurora-text`, die allemaal oneindig doorlopen.

Dat is regel 7 uit [`../CLAUDE.md`](../CLAUDE.md), gebroken bij aankomst. Gebruik
[`utils/motion-guard.tsx`](./utils/motion-guard.tsx), of minimaal:

```css
@media (prefers-reduced-motion: reduce) {
  [class*="animate-"] { animation: none !important; }
}
```

## De catalogus

### Componenten

| Component | Oordeel | Wat het doet | Notitie |
|---|---|---|---|
| `marquee` | ✅ | Inhoud 4× gedupliceerd en oneindig verschoven | Server component, nul dependencies. Reduced-motion zelf toevoegen |
| `hero-video-dialog` | ✅ | Videothumbnail die opent in een lightbox | |
| `animated-list` | ✅ | Items ploppen één voor één omhoog | `scale: 0 → 1` is een harde pop. Verlaag de amplitude, anders leest het als demo |
| `dotted-map` | ✅ | Wereldkaart als puntmatrix met markers | Statisch. Bruikbaar voor werkgebied, zie [`../08-sectors/16-lokale-dienstverlening.md`](../08-sectors/16-lokale-dienstverlening.md) |
| `bento-grid` | ⚠️ | Asymmetrisch raster met CTA die opschuift bij hover | Gebruikt `transition-all` drie keer, schaduwen in zuiver zwart, `text-neutral-*` hardgecodeerd, en `col-span-3` maakt elke kaart volle breedte tot je het overschrijft. Herschrijven, niet kopiëren. Plus §3.5: bento is geen decoratie |
| `dock` | ⚠️ | macOS-dock met vergrotende iconen | Alleen `mouseX`: op mobiel dood. Animeert `width`/`height` (layout) i.p.v. transform. `bg-white/10` |
| `terminal` | ⚠️ | Nep-terminal die regels uittypt | Geen `aria-live`, geen volledige tekst voor screenreaders, `setInterval` per teken. Stoplichtjes in `bg-red-500` etc. |
| `tweet-card` | ⚠️ | Server-gerenderde X-post | Alleen met een echte tweet. Regel 9 |
| `avatar-circles` | ⚠️ | Overlappende avatars met "+N" | De `+N` is een `<a href="">`: focusbaar, aangekondigd als link, navigeert naar de eigen pagina. **Echte a11y-fout.** Ook `<img>` zonder optimalisatie. Alleen met echte mensen |
| `lens` | ⚠️ | Vergrootglas dat de cursor volgt | Alleen waar detail echt uitmaakt (juwelen, stof, techniek) |
| `progressive-blur` | ⚠️ | Gelaagde blur-fade aan de rand van een scroller | §1.6 glasmorfisme. Werkt wel echt goed op een horizontale scroller |
| `globe` | ⚠️ | WebGL bolletjes-globe, sleepbaar | `cobe` + RAF per frame. Alleen als het bedrijf écht internationaal is, nooit als decoratie. Kost je het performancebudget |
| `orbiting-circles` | 🚫 | Elementen draaien rond een cirkel | §5.5. Dit is de "tech-logo's in een baan"-tell |
| `icon-cloud` | 🚫 | 3D roterende iconenbol | §5.5, en de iconen betekenen niets |
| `pointer` · `smooth-cursor` | 🚫 | Vervangen de systeemcursor | De cursor is een besturingselement, geen canvas. Vervangen schaadt gebruikers met motorische beperkingen en high-contrast-modi |

### Special effects: grotendeels verboden

| Component | Oordeel | Regel |
|---|---|---|
| `animated-beam` | ⚠️ | Bruikbaar in een **architectuurdiagram** waar de lijn iets betekent. Als decoratie §5.5 |
| `confetti` | ⚠️ | Eén keer, op een echte succesbevestiging. Niet bij page load |
| `animated-theme-toggler` | ⚠️ | Alleen de `circle`-variant. Ster, driehoek en zeshoek zijn nieuwigheid. Vereist een `prefers-reduced-motion`-poort en het `::view-transition` CSS-blok uit de registry |
| `glare-hover` | ⚠️ | Diagonale lichtveeg. Grenst aan §1.3 |
| `border-beam` | 🚫 | §1.3 gloed: een komeet rond de rand |
| `shine-border` | 🚫 | §1.3 |
| `magic-card` | 🚫 | §1.3: spotlight volgt de cursor, rand licht op |
| `meteors` | 🚫 | §5.5 |
| `particles` | 🚫 | §5.5 |

### Tekstanimaties

| Component | Oordeel | Notitie |
|---|---|---|
| `text-animate` | ✅ | Het enige component in de bibliotheek met correcte a11y (`aria-label` + `sr-only` volledige tekst + `aria-hidden` per segment). **Gebruik `by="word"`**. `by="character"` wikkelt elke letter in een `inline-block` en sloopt kerning, ligaturen en het afbreken van Nederlandse samenstellingen |
| `number-ticker` | ✅ | Twee dingen wijzigen: `Intl.NumberFormat("en-US")` staat hardgecodeerd en rendert `1,234.5` in plaats van `1.234,5`. Zet op `nl-BE`. En `text-black dark:text-white` zijn zuivere waarden |
| `word-rotate` | ✅ | Eén woord schuift eruit, het volgende erin |
| `highlighter` | ✅ | Handgetekende markeerstreep via `rough-notation`. Geen cliché, en het werkt |
| `typing-animation` | ⚠️ | Vertraagt lezen (§5.2). Alleen als het typen zelf het onderwerp is |
| `line-shadow-text` | ⚠️ | Doorlopende beweging in de schaduw |
| `video-text` | ⚠️ | Video in een SVG-tekstmasker. Sterk als het beeld goed is, anders ruis |
| `text-reveal` | ⚠️ | Alinea gepind tijdens scrollen, woorden lichten op. §5.2: de lezer moet scrollen om te kunnen lezen |
| `hyper-text` | ⚠️ | Letters scramblen naar de eindtekst |
| `morphing-text` | ⚠️ | Zinnen vervloeien met blur |
| `scroll-based-velocity` | ⚠️ | Marquee die reageert op scrollsnelheid |
| `comic-text` | ⚠️ | Alleen als het merk daadwerkelijk comic is |
| `pixel-image` | ⚠️ | Beeld verschijnt als blokraster |
| `kinetic-text` | ✅ | Variabel lettergewicht reagerend op cursornabijheid. Dit is precies de "gebruik een variabele as voor iets echts"-regel uit [`../02-design-system/typography.md`](../02-design-system/typography.md) |
| `aurora-text` | 🚫 | §1.5 verlooptekst + §1.2 aurora |
| `animated-gradient-text` | 🚫 | §1.5 |
| `dia-text-reveal` | 🚫 | §1.5 |
| `animated-shiny-text` | 🚫 | §1.3 |
| `sparkles-text` | 🚫 | §5.5 |
| `spinning-text` | 🚫 | §5.5 |
| `text-3d-flip` | 🚫 | Nieuwigheid |

### Knoppen

| Component | Oordeel | Regel |
|---|---|---|
| `ripple-button` | ✅ | Rimpel vanaf het klikpunt. Dit is feedback, geen decoratie. Het enige knopeffect hier dat een functie heeft |
| `rainbow-button` | 🚫 | §1.1 verloop + §1.3 gloed |
| `shimmer-button` | 🚫 | §1.3 |
| `pulsating-button` | 🚫 | §1.3: pulserende halo |
| `shiny-button` | 🚫 | §1.3 |
| `interactive-hover-button` | ⚠️ | Punt schaalt 100× om de knop te vullen. Speels, maar het label verandert tijdens de hover. Dat verwart |

### Achtergronden

| Component | Oordeel | Notitie |
|---|---|---|
| `noise-texture` | ✅ | `feTurbulence`-grain met verzadigings- en contrastregeling. **De beste vondst in de hele bibliotheek**: dit is precies de korrel uit [`../02-design-system/craft.md`](../02-design-system/craft.md) waarmee een vlak ontwerp fysiek gaat aanvoelen |
| `grid-pattern` · `hexagon-pattern` · `striped-pattern` | ✅ | Statische SVG-patronen. Rustig, goedkoop, bruikbaar als subtiele structuur |
| `dot-pattern` | ✅ | Statische variant. De `glow`-variant is ⚠️ |
| `interactive-grid-pattern` | ⚠️ | Cel licht op onder de cursor |
| `flickering-grid` | 🚫 | §5.5 |
| `animated-grid-pattern` | 🚫 | §5.5 |
| `ripple` | 🚫 | §5.5 |
| `retro-grid` | 🚫 | §1.7 synthwave-cluster + §5.5. Wel krediet: het enige component met eigen reduced-motion-afhandeling |
| `light-rays` | 🚫 | §1.2 |
| `warp-background` | 🚫 | §5.5: perspectieftunnel met stralen |
| `backlight` | 🚫 | §1.3: letterlijk een verzadigde gloed achter het element |
| `glyph-matrix` | 🚫 | §5.5 |
| `cool-mode` | 🚫 | Deeltjes bij ingedrukt houden |
| `neon-gradient-card` | 🚫 | §1.1 + §1.3 |

### Overig

| Component | Oordeel | Notitie |
|---|---|---|
| `code-comparison` | ✅ | Voor/na met Shiki-highlighting. Nuttig in documentatie |
| `animated-circular-progress-bar` | ✅ | SVG-ring naar een percentage |
| `scroll-progress` | ⚠️ | Twintig regels, alleen transform, geen layout-thrash: technisch het schoonste component. Maar het verloop is hardgecodeerd `#A97CF8 → #F38CB8 → #FDCC92`, precies de paars-roze-perzik uit §1.1. Overschrijf met één accentkleur uit de token-laag |
| `file-tree` | ⚠️ | Werkt, maar installeert kapot. Zie hierboven. Ook `hover:bg-slate-300` |
| `safari` · `iphone` · `android` | ⚠️ | Apple- en Android-hardware in een generieke kit. **De techniek is het waard, het beeld niet**: de wrapper zet `aspectRatio` zodat het frame zijn ruimte reserveert vóór de media laadt. Nul layout shift. Neem die rekenwijze over en teken je eigen neutrale frame. Let op: 13 kB inline SVG per instantie, zonder deduplicatie |

## Wat je hier echt vandaan haalt

Als je drie dingen meeneemt en de rest laat staan:

1. **`noise-texture`.** Korrel over grote egale vlakken is de goedkoopste manier om een plat
   ontwerp fysiek te laten aanvoelen, en het is geen tell.
2. **De `aspectRatio`-techniek uit de device mocks.** Reserveer de ruimte vóór de media
   laadt. Dat is CLS-budget, en het geldt overal, niet alleen bij een telefoonframe.
3. **`kinetic-text`.** Variabel lettergewicht dat op iets echts reageert is precies het
   detail dat geen generator toevoegt.

Daarnaast zijn `marquee`, `text-animate`, `number-ticker`, `word-rotate`, `highlighter`,
`ripple-button` en de statische patronen degelijk gereedschap.

De rest is een catalogus van effecten. Zoals in
[`../02-design-system/motion.md`](../02-design-system/motion.md) staat: één of twee momenten
per pagina. Dat 76 opties beschikbaar zijn verandert daar niets aan. Het maakt de verleiding
alleen groter.

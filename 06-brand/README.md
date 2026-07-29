# Brand

Hoe je per project tot een merksysteem komt. **Hier staan geen merken opgeslagen**: geen
klantlogo's, geen huisstijlen, geen assets. Die horen in het project zelf, niet in deze kit.

Wat hier wél staat: het proces om een merk in te lezen als het bestaat, of er één te bouwen
als het niet bestaat.

## Route A: de klant heeft een huisstijl

### Wat je nodig hebt

| Item | Formaat | Wat je meestal krijgt |
|---|---|---|
| Logo | **SVG** | Een PNG van 400px uit een PowerPoint |
| Logo op donker | SVG | Bestaat meestal niet |
| Kleuren | Exacte waarden | "Ons blauw" en een screenshot |
| Fonts | Naam + weblicentie | Een naam, geen licentie |
| Brandbook | PDF | Als het bestaat is dit goud waard |

Vraag ernaar voor je begint. Een uitgerekt PNG-logo in de header verraadt het hele project,
en dat los je niet meer op in CSS. Bestaat de SVG niet, vectoriseer dan opnieuw. Dat is
een half uur werk en het scheelt het verschil tussen amateur en niet.

### Inlezen

1. **Kleuren omzetten naar OKLCH.** Hex is wat je krijgt; OKLCH is waarin je werkt, omdat
   je er lichtheid in kan aanpassen zonder de kleur te verschuiven. Zie
   [`../02-design-system/color.md`](../02-design-system/color.md).
2. **Contrast controleren.** Een merkkleur die op drukwerk werkt haalt vaak geen 4.5:1 op
   wit. Los dat op in de tokens: een donkerdere variant voor tekst, de originele voor
   vlakken. Leg vast waarom, anders "corrigeert" de volgende persoon het terug.
3. **Neutralen aanmaken**, getint naar de merkkleur. Nooit een kale grijstrap naast een
   warme merkkleur. Dat is de goedkoopste manier om een goed logo er slecht uit te laten
   zien.
4. **Fonts controleren op weblicentie.** Een desktoplicentie dekt geen webfont. Vind je
   geen licentie, kies dan een vergelijkbare met een open licentie en meld dat.
5. **Richting kiezen** die bij het logo past:
   [`../02-design-system/art-direction.md`](../02-design-system/art-direction.md). Een
   geometrisch sans-wordmerk staat niet onder een Playfair-titel.

## Route B: er is geen huisstijl

Veel kleinere klanten hebben alleen een logo, of zelfs dat niet. Dan bouw je er één. Dat is
geen extra werk maar een kans: je bepaalt zelf de richting.

1. **Richting kiezen** op basis van de sector en de doelgroep. Dat is stap één, niet de
   kleur. `art-direction.md`.
2. **Accent-hue** afleiden uit het logo, of kiezen. Vermijd hue 220–250: dat is elke SaaS-
   en elke AI-site.
3. **Palet genereren** volgens `color.md`. Eén accent, neutralen getint naar die hue.
4. **Lettercombinatie** uit
   [`../02-design-system/typography.md`](../02-design-system/typography.md). Advocaat,
   restaurant, kliniek, notaris: bijna altijd een serif voor de display, en bijna nooit
   wat er standaard uitkomt.
5. **Vastleggen** in de `DESIGN.md` van het project, met benoemde regels. Zonder dat
   document loopt het bij de volgende opdracht meteen uiteen.

**Leg twee richtingen voor, geen vijf.** Vijf opties betekent dat er geen keuze gemaakt is,
en de klant kiest dan op smaak in plaats van op geschiktheid.

## Waar het terechtkomt

In het **project**, niet hier:

```
<project>/
├── DESIGN.md              ← het contract, uit 02-design-system/DESIGN-template.md
├── app/globals.css        ← tokens, uit 02-design-system/tokens/globals.css
└── public/
    ├── logo.svg
    ├── logo-mark.svg
    ├── logo-light.svg     (voor donkere achtergrond)
    ├── favicon.ico        32×32
    ├── icon.svg
    ├── apple-touch-icon.png   180×180
    └── og-image.png       1200×630
```

Die laatste wordt structureel vergeten en is het eerste dat mensen zien wanneer de link
gedeeld wordt in WhatsApp, Slack of LinkedIn. Maak hem, of genereer hem met `next/og`.
Zie [`../01-standards/seo.md`](../01-standards/seo.md).

## Merk-intake: de vragen

Stel deze bij de kickoff, niet halverwege:

- Bestaat er een logo? In welk formaat? Wie heeft het bronbestand?
- Zijn er vaste kleuren? Waar komen die waarden vandaan?
- Welke fonts, en is er een weblicentie?
- Is er drukwerk of bewegwijzering waar de site bij moet aansluiten?
- Wat mag er **niet**? Vaak het bruikbaarste antwoord: "geen blauw, dat is onze
  concurrent" bepaalt meer dan een vage voorkeur.
- Hoe zien de drie belangrijkste concurrenten eruit?

# Brand

Huisstijlen. Eén map per merk, met daarin een `DESIGN.md` volgens
[`../02-design-system/DESIGN-template.md`](../02-design-system/DESIGN-template.md),
de tokens, en de assets.

```
06-brand/
├── nextgenmedia/          ← ons eigen merk
│   ├── DESIGN.md
│   ├── tokens.css
│   └── assets/            (logo's in SVG, favicons, OG-afbeelding)
└── <klantnaam>/
    ├── DESIGN.md
    ├── tokens.css
    └── assets/
```

## NextGenMedia

> **NEEDS INPUT** — hier hoort onze eigen huisstijl te staan. Nodig:
>
> - **Logo** in SVG: volledig, alleen het beeldmerk, en een variant voor donkere
>   achtergrond. Geen PNG als er een SVG bestaat.
> - **Kleuren** — de exacte waarden, niet "ongeveer dit blauw". Als er alleen hex is,
>   zetten we die om naar OKLCH.
> - **Fonts** — welke, welke gewichten, en of de licentie webgebruik dekt.
> - **Toon** — hoe we onszelf beschrijven in één alinea.
> - Bestaande drukwerk, visitekaartjes of een brandbook als die er zijn.
>
> Zet het in `_inbox/` en zeg "verwerk de inbox".

## Een klantmerk toevoegen

1. Map aanmaken: `06-brand/<klantnaam>/`.
2. Assets verzamelen. Wat je meestal krijgt: een PNG-logo van 400px en een PDF. Wat je
   nodig hebt: SVG en de echte kleurwaarden. Vraag daarnaar, en vectoriseer opnieuw als
   het niet bestaat — een uitgerekt PNG-logo verraadt het hele project.
3. `DESIGN.md` invullen met het template. Dit is het moment om de beslissingen vast te
   leggen, niet halverwege het bouwen.
4. Contrast controleren. Een merkkleur die op papier werkt haalt vaak geen 4.5:1 op wit.
   Los dat op in de tokens (donkerder maken voor tekst, origineel houden voor vlakken) en
   noteer waarom — zie [`../02-design-system/color.md`](../02-design-system/color.md).
5. `tokens.css` afleiden van `../02-design-system/tokens/globals.css`, alleen het
   BRAND-blok vervangen.

## Als er geen huisstijl is

Bij veel kleinere klanten is er alleen een logo. Dan bouw je er één, en leg je die vast in
`DESIGN.md` zodat de volgende opdracht consistent blijft:

1. Haal de accent-hue uit het logo.
2. Genereer de neutrale ramp getint naar die hue —
   [`../02-design-system/color.md`](../02-design-system/color.md).
3. Kies een lettercombinatie uit
   [`../02-design-system/typography.md`](../02-design-system/typography.md) die past bij
   de sector. Advocaat, restaurant of kliniek: bijna altijd een serif voor de display.
4. Leg het voor met **twee** richtingen, niet vijf. Vijf opties betekent dat er geen keuze
   gemaakt is.

## Assets die elk project nodig heeft

| Bestand | Formaat | Waarvoor |
|---|---|---|
| `logo.svg` | SVG | Header, footer |
| `logo-mark.svg` | SVG | Favicon-basis, compacte plekken |
| `logo-light.svg` | SVG | Op donkere achtergrond |
| `favicon.ico` | 32×32 | Browsertab, legacy |
| `icon.svg` | SVG | Moderne browsers |
| `apple-touch-icon.png` | 180×180 | iOS-startscherm |
| `og-image.png` | 1200×630 | Link-previews. Wordt vaak vergeten en is het eerste dat mensen zien als de link gedeeld wordt |

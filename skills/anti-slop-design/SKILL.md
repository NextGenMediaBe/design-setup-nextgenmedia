---
name: anti-slop-design
description: Gebruik deze skill bij elke opdracht waarin visuele output gemaakt of gewijzigd wordt. Triggers - website bouwen, landingspagina, homepage, redesign, UI maken, interface, scherm, component bouwen, huisstijl, design, styling, frontend, Tailwind, opmaak, "maak het mooier", "ziet er AI-achtig uit". Dwingt het ontwerpproces af - designplan en zelfkritiek voor er code geschreven wordt - en handhaaft de anti-slop-regels van deze repo.
---

# Anti-slop design

Je bent design lead. Je levert geen correcte pagina op, je levert een ontworpen pagina op.
Het verschil zit in één ding: er is een beslissing genomen die je kunt verdedigen.

## De harde regel

**Je schrijft geen componentcode voor stap 3 en stap 4 zijn opgeleverd.**

Als de gebruiker vraagt om meteen te beginnen bouwen: lever eerst het designplan en de
zelfkritiek, in dezelfde beurt, en bouw daarna door. Het kost drie minuten en het bepaalt
het hele resultaat. Sla het niet over omdat het "maar een landingspagina" is.

## Het proces

Werk **[`AI-RUNBOOK.md`](../../AI-RUNBOOK.md)** van boven naar beneden af. Daar staan de
tien fasen, plus achteraan de volledige lijst van wat verboden en wat verplicht is.

Samengevat:

| Stap | Wat | Gate |
|---|---|---|
| 1 | Brief scherpstellen — sector, doelgroep, de ene taak, drie concurrenten, drie mooie referenties, **één lelijke** | Ontbreekt iets: vragen, niet gokken |
| 2 | Sectorplaybook lezen uit [`08-sectors/`](../../08-sectors/) | |
| 3 | **Designplan**: palet met herkomst per kleur, type in 2-3 rollen, layoutconcept met ASCII-wireframe, signature-element, motion-principe | **Gate** |
| 4 | **Zelfkritiek**: "kom ik hier tien van de tien keer uit?" Zo ja: herzien en tonen wat je veranderde | **Gate** |
| 5 | Bouwen — tokens eerst, dan header/footer, dan hero, dan de rest, dan states, dan motion | |
| 6 | `npm run design:audit` — screenshots 390/768/1440, dan zelfkritiek als concurrerend bureau | |
| 7 | `npm run design:check` — faalt hij, repareren, niet onderdrukken | |
| 8 | [`07-workflows/quality-review.md`](../../07-workflows/quality-review.md) invullen en opleveren | |

## Wat je nooit doet

De volledige lijst met redenen staat in
[`02-design-system/anti-patterns.md`](../../02-design-system/anti-patterns.md). Lees die
voor je begint. De twaalf die het vaakst terugkruipen:

1. **Het eyebrow-label**: klein getrackt hoofdlettertje boven een kop. De duidelijkste
   sjabloon-vingerafdruk die er is. Ook: een streepje onder een kop, en een gekleurde balk
   langs de zijkant van een kaart.
2. Paars-naar-blauw verloop, in welke vorm dan ook.
3. Aurora-achtergrond: wazige gekleurde vlekken achter de hero.
4. Tailwind-defaultkleuren: `indigo-600`, `violet-500`, `slate-900`, `#6366F1`, `#0F172A`.
5. Inter, Geist, Poppins, Space Grotesk of Satoshi als **displayfont**.
6. De standaardvolgorde hero → drie feature-kaarten → logo-balk → prijzen → FAQ → footer.
7. Drie kaarten met een icoon bovenaan en twee abstracte zelfstandige naamwoorden als kop.
8. Een zwevende pill boven de kop ("Vertrouwd door 200+ teams").
9. `rounded-2xl shadow-lg` op elke kaart, en dezelfde radius op alles.
10. Magnetische knoppen, en `scale(1.05)` bij hover met een harde kleurflip.
11. `transition: all` en fade-in-up op elk element bij scroll.
12. Stockfoto's, AI-illustraties, 3D-blobs, isometrische mensen. Iconen die niet bij hun
    label horen.
13. Em-dashes (—) en rechte apostrofs in Nederlandse tekst. Drie bijvoeglijke naamwoorden
    op een rij.
14. Zichtbare placeholder-tekst: "binnenkort beschikbaar", "wordt aangevuld", "(placeholder)".
15. Formulieren waar de afstand label→veld gelijk is aan veld→volgend veld.

Punt 15 is de meest gemiste. Controleer die expliciet: label→veld 4 tot 8px,
veld→volgend veld 20 tot 28px.

Punt 1 is de meest voorkomende. Als er ergens `SOFTWARE OP MAAT` in mini-caps boven een kop
staat: weghalen, niet mooier maken.

## Naslag tijdens het bouwen

| Waarvoor | Bestand |
|---|---|
| Visuele richting kiezen | [`02-design-system/art-direction.md`](../../02-design-system/art-direction.md) |
| De verbodslijst met redenen | [`02-design-system/anti-patterns.md`](../../02-design-system/anti-patterns.md) |
| Palet opbouwen (OKLCH) | [`02-design-system/color.md`](../../02-design-system/color.md) |
| Type-systeem en pairings | [`02-design-system/typography.md`](../../02-design-system/typography.md) |
| Ritme, grid, witruimte | [`02-design-system/spacing-layout.md`](../../02-design-system/spacing-layout.md) |
| Timing en curves | [`02-design-system/motion.md`](../../02-design-system/motion.md) |
| Detailafwerking op 1-4px | [`02-design-system/craft.md`](../../02-design-system/craft.md) |
| Beeldstrategie | [`02-design-system/imagery.md`](../../02-design-system/imagery.md) |
| Tokens in drie lagen | [`02-design-system/tokens/README.md`](../../02-design-system/tokens/README.md) |
| Sectieblauwdrukken | [`03-patterns/`](../../03-patterns/) |
| NL tone of voice | [`05-copy/copywriting.md`](../../05-copy/copywriting.md) |
| NL micro-typografie | [`05-copy/micro-typografie-nl.md`](../../05-copy/micro-typografie-nl.md) |
| Kwaliteitsvloer a11y/perf | [`01-standards/quality-floor.md`](../../01-standards/quality-floor.md) |

Lees niet alles vooraf. Pak wat de taak raakt.

## Het esthetische risico

Neem er één per project en schrijf op waarom het te verdedigen is. De verdediging moet
terug te voeren zijn op de klant: wat ze doen, wat ze maken, waar ze zitten.

Geen risico nemen is ook een keuze, en het levert gegarandeerd iets vergeetbaars op.

## De drie vragen bij oplevering

1. Wat is het signature-element van deze pagina, en waarom onthoudt iemand het?
2. Welk esthetisch risico heb ik genomen en hoe verdedig ik het?
3. Als ik de klantnaam vervang door die van de grootste concurrent, wat valt er dan om?

Is het antwoord op vraag 3 "niets", dan is het werk generiek en ga je terug naar stap 3.

## Installatie in een project

```bash
mkdir -p .claude/skills
cp -r <pad-naar-deze-repo>/skills/anti-slop-design .claude/skills/
```

Of, met de repo als submodule onder `.design` (Windows):

```powershell
New-Item -ItemType Junction -Path .claude\skills\anti-slop-design -Target .design\skills\anti-slop-design
```

De verwijzingen hierboven zijn relatief aan de repo-root. Hangt de repo onder `.design/`,
lees dan `.design/02-design-system/...`.

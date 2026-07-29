# Design Setup

Een bouwkit die je meegeeft aan Claude bij het bouwen van een website of app. Eén doel:
dat wat eruit komt eruitziet alsof een professionele designer het gemaakt heeft (en snel
is) in plaats van gegenereerd.

De repo is **algemeen**. Er staan geen merken, klanten of huisstijlen in. Alles hier werkt
voor elk project.

## Gebruiken

Geef de link mee in de chat:

> Baseer het design op https://github.com/NextGenMediaBe/design-setup-nextgenmedia.
> Lees `CLAUDE.md` en volg de leesvolgorde daarin.

Of hang hem in het project, dan leest Claude hem automatisch mee:

```bash
git submodule add https://github.com/NextGenMediaBe/design-setup-nextgenmedia.git .design
```

en in de `CLAUDE.md` van dat project: *"Volg de standaarden in `.design/`."*

## Het probleem dat dit oplost

AI-gebouwde interfaces falen bijna altijd op dezelfde drie punten:

**Geen visuele richting.** Alles komt uit op Inter, een blauw accent, `rounded-lg`, drie
kaartjes en `shadow-md`. Dat is geen stijl, dat is het ontbreken van een keuze. Daarom
begint deze kit met [`02-design-system/art-direction.md`](02-design-system/art-direction.md):
tien uitgewerkte richtingen, met per richting wat dat betekent voor kleur, type, layout en
motion. Je kiest er één vóór je begint.

**Geen afwerking.** De layout klopt en de details niet: randen die massief zijn in plaats
van alpha, schaduwen in zuiver zwart, iconen wiskundig gecentreerd, geneste hoekradii die
gelijk zijn. Dat zit in [`02-design-system/craft.md`](02-design-system/craft.md).

**Traag.** Geanimeerde achtergronden, WebGL-heroes, onbewerkte afbeeldingen, externe
scripts. [`01-standards/performance.md`](01-standards/performance.md) zet daar harde
budgetten op.

## Wat staat waar

| Map | Inhoud |
|---|---|
| `00-start/` | Wat je uitvraagt voor er één regel code geschreven wordt |
| `01-standards/` | Stack, projectstructuur, accessibility, performance, SEO, kwaliteitsvloer |
| `02-design-system/` | **Art direction**, **anti-patterns**, principes, kleur, typografie, spacing, motion, craft, beeld, tokens |
| `03-patterns/` | Blauwdrukken per sectie: hero, features, pricing, navigatie, footer |
| `04-snippets/` | GSAP-recepten, utilities, en een catalogus van externe bronnen |
| `05-copy/` | Tone of voice en NL micro-typografie |
| `06-brand/` | Hoe je per project een merksysteem inleest of bouwt. Geen opgeslagen merken |
| `07-workflows/` | Het verplichte proces, de audit, en materiaal verwerken |
| `08-sectors/` | **16 sectorplaybooks**: wat de bezoeker echt komt doen, per branche |
| `tools/` | `slop-check`, ESLint-regel, stylelint-config, screenshot-audit |
| `skills/` | `anti-slop-design`: de skill die het proces afdwingt |
| `_inbox/` | Dropzone voor materiaal dat nog gesorteerd moet worden |

`CLAUDE.md` in de root is het instapdocument: leesvolgorde en de harde regels.

## Het stappenplan

**[`AI-RUNBOOK.md`](AI-RUNBOOK.md)** is het document waar de AI letterlijk doorheen loopt.
Tien fasen, van "wat bouw ik eigenlijk" tot de oplevering, met daarin twee poorten:

> Er wordt geen componentcode geschreven voordat het designplan en de zelfkritiek er zijn.

Achteraan staan twee lijsten: **wat verboden is** en **wat verplicht is**, allebei
scanbaar. Dat is het antwoord op "de AI moet exact weten wat wel en niet mag".

De skill `anti-slop-design` dwingt het proces af,
[`07-workflows/build-website.md`](07-workflows/build-website.md) geeft dezelfde stappen met
tijdsinschattingen.

## De regels worden gehandhaafd, niet gehoopt

```bash
npm run design:check
```

Faalt de build op paars-blauwe verlopen, `indigo-600`, `#6366F1`, `rounded-2xl`,
`transition: all`, Inter als displayfont, em-dashes in NL-tekst, rechte apostrofs,
verboden woorden, emoji in koppen, en een ontbrekend `lang="nl"`. Elke hit toont het
bestand, de regel en de suggestie uit `02-design-system/anti-patterns.md`.

```bash
npm run design:audit
```

Screenshots op 390, 768 en 1440px, plus een contrastcontrole en een check op koppen die op
mobiel over meer dan drie regels breken.

## Nieuw materiaal toevoegen

Stuur zips, links of losse bestanden door en zeg *"verwerk de inbox"*. Het proces staat in
[`07-workflows/ingest-material.md`](07-workflows/ingest-material.md): uitpakken,
inventariseren, filteren, plaatsen, index bijwerken, pushen.

Filteren is de belangrijkste stap. Zestig snippets die je vertrouwt zijn meer waard dan
vijfhonderd waarvan je de helft niet durft te gebruiken.

## Taal

Standaarden, patterns en code staan in het **Engels**. Dat werkt beter als de repo in een
willekeurig project belandt, en het is vooral code. De copy-richtlijnen staan in het
**Nederlands**, want dat is de markt; de frameworks erin gelden voor elke taal.

# Design Setup

Een bouwkit die je meegeeft aan Claude bij het bouwen van een website of app. Eén doel:
dat wat eruit komt eruitziet alsof een professionele designer het gemaakt heeft — en snel
is — in plaats van gegenereerd.

De repo is **algemeen**. Er staan geen merken, klanten of huisstijlen in. Alles hier werkt
voor elk project.

## Gebruiken

Geef de link mee in de chat:

> Baseer het design op https://github.com/NextGenMediaBe/design-setup-nextgenmedia
> — lees `CLAUDE.md` en volg de leesvolgorde daarin.

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
| `01-standards/` | Stack, projectstructuur, accessibility, performance, SEO |
| `02-design-system/` | **Art direction**, principes, anti-patterns, kleur, typografie, spacing, motion, craft, tokens |
| `03-patterns/` | Blauwdrukken per sectie: hero, features, pricing, navigatie, footer |
| `04-snippets/` | GSAP-recepten, utilities, en een catalogus van externe bronnen |
| `05-copy/` | Tone of voice en copywriting-frameworks (NL) |
| `06-brand/` | Hoe je per project een merksysteem inleest of bouwt — geen opgeslagen merken |
| `07-workflows/` | Bouwen, reviewen, en nieuw materiaal verwerken |
| `skills/` | Claude Code skills |
| `_inbox/` | Dropzone voor materiaal dat nog gesorteerd moet worden |

`CLAUDE.md` in de root is het instapdocument: leesvolgorde en de harde regels.

## Nieuw materiaal toevoegen

Stuur zips, links of losse bestanden door en zeg *"verwerk de inbox"*. Het proces staat in
[`07-workflows/ingest-material.md`](07-workflows/ingest-material.md): uitpakken,
inventariseren, filteren, plaatsen, index bijwerken, pushen.

Filteren is de belangrijkste stap. Zestig snippets die je vertrouwt zijn meer waard dan
vijfhonderd waarvan je de helft niet durft te gebruiken.

## Taal

Standaarden, patterns en code staan in het **Engels** — dat werkt beter als de repo in een
willekeurig project belandt, en het is vooral code. De copy-richtlijnen staan in het
**Nederlands**, want dat is de markt; de frameworks erin gelden voor elke taal.

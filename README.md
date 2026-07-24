# Design Setup — NextGenMedia

De bouwkit die we meegeven aan Claude Code (of Claude Desktop) bij het bouwen van een
website of app. Alles wat hier in staat is bedoeld om één ding te doen: ervoor zorgen dat
wat er uitkomt er meteen goed uitziet en niet als een standaard AI-template.

## Hoe gebruik je dit

**Optie 1 — als submodule in een project** (aanbevolen):

```bash
git submodule add https://github.com/NextGenMediaBe/design-setup-nextgenmedia.git .design
```

Verwijs er dan naar in de `CLAUDE.md` van dat project: *"Volg de standaarden in `.design/`."*

**Optie 2 — clonen naast je project** en Claude in de prompt het pad meegeven.

**Optie 3 — skills installeren**, zodat ze als slash-command beschikbaar zijn:
zie `skills/README.md`.

## Wat staat waar

| Map | Inhoud |
|---|---|
| `00-start/` | Wat Claude uitvraagt voor er één regel code geschreven wordt |
| `01-standards/` | Stack, projectstructuur, code style, a11y, performance, SEO |
| `02-design-system/` | Kleur, typografie, spacing, motion, tokens — én anti-patterns |
| `03-patterns/` | Blauwdrukken per sectie: hero, features, pricing, footer, ... |
| `04-snippets/` | Kant-en-klare stukken code |
| `05-copy/` | Tone of voice en copywriting-frameworks (NL) |
| `06-brand/` | Huisstijl NextGenMedia + klantmerken |
| `07-workflows/` | Stap-voor-stap processen (bouwen, reviewen, materiaal toevoegen) |
| `skills/` | Claude Code skills |
| `_inbox/` | Dropzone voor nieuw materiaal dat nog gesorteerd moet worden |

`CLAUDE.md` in de root is het instapdocument voor Claude zelf — die bepaalt de leesvolgorde.

## Nieuw materiaal toevoegen

Gooi zips, losse bestanden, links of skills in `_inbox/` en zeg tegen Claude:
*"verwerk de inbox"*. Het proces staat in `07-workflows/ingest-material.md`:
uitpakken, bekijken wat we al hebben, dubbels weggooien, op de juiste plek zetten,
index bijwerken, pushen.

## Taal

Standaarden, patterns en code staan in het **Engels** — dat werkt beter als de repo in
een willekeurig project belandt en het bevat vooral code. Brand, tone of voice en copy
staan in het **Nederlands**, want dat is de markt.

## Status

Waar `> **NEEDS INPUT**` staat, wacht een bestand nog op echt materiaal van
NextGenMedia (huisstijl, fonts, logo's, bestaande code). Die vullen we aan naarmate het
binnenkomt.

# Workflow: material toevoegen

Wat te doen wanneer NextGenMedia nieuw materiaal aanlevert — een zip, een repo, een link
naar een component library, losse snippets, of een skill.

## 1. Bepaal wat het is

| Soort | Waar het heen gaat |
|---|---|
| Een **library** (npm-installeerbaar, bv. GSAP) | Vendor het **niet**. Schrijf een referentie + recepten in `04-snippets/<lib>/` |
| Een **component collection** (copy-paste code) | `04-snippets/<bron>/` met bron + licentie vermeld |
| Een **starter/template repo** | Extract wat herbruikbaar is; de rest niet overnemen |
| **Design tokens / huisstijl** | `02-design-system/` of `06-brand/` |
| **Copy, tone of voice** | `05-copy/` |
| Een **Claude skill** (`SKILL.md`) | `skills/<naam>/` |
| Een **volledige site** van een klant | Niet hierin. Extract alleen het patroon |

## 2. Verwerk het

```
_inbox/  →  uitpakken  →  inventariseren  →  filteren  →  plaatsen  →  index  →  push
```

- **Uitpakken** naar de scratchpad, niet in de repo. Archieven zelf worden niet gecommit
  (staan in `.gitignore`).
- **Inventariseren**: wat zit erin, wat doet het, waar hangt het van af.
- **Filteren** — dit is de belangrijkste stap. Neem alleen over wat:
  - we nog niet hebben (check eerst `04-snippets/INDEX.md`),
  - werkt zonder de rest van zijn originele project,
  - past bij de stack in `01-standards/stack.md`,
  - iets toevoegt dat we niet in 20 regels zelf schrijven.

  Alles wat "misschien ooit handig" is, laat je liggen. Een repo van 500 half-bruikbare
  snippets is minder waard dan 60 die je vertrouwt.
- **Plaatsen** met een kop bovenaan elk bestand: bron, licentie, dependencies.
- **Index bijwerken**: `04-snippets/INDEX.md` en de betreffende `README.md`.
- **Committen** met een bericht dat zegt wat er bij kwam en waarvandaan.

## 3. Vaste kop op ingevoegd materiaal

Elk overgenomen bestand begint met:

```
/**
 * <naam> — <wat het doet in één zin>
 * Bron:    <url of zip-naam>
 * Licentie: <MIT / onbekend / ...>
 * Nodig:   <npm packages, tailwind config, css keyframes>
 * Aangepast: <wat wij veranderd hebben t.o.v. het origineel>
 */
```

Zonder herkomst weten we later niet of we het mogen gebruiken.

## 4. Licenties

- **MIT / Apache / ISC** — vrij te gebruiken, bronvermelding behouden.
- **Geen licentie vermeld** — noteer `Licentie: onbekend`. Bruikbaar als inspiratie en
  als techniek, maar herschrijf het in plaats van letterlijk te kopiëren voor
  klantprojecten.
- **Copyleft (GPL)** — niet opnemen.
- **Betaalde templates** — niet opnemen, ook niet gedeeltelijk.

## 5. Dedupe

Voor je iets toevoegt: bestaat er al een variant? Dan één van tweeën:
- de nieuwe is beter → vervang, en noteer waarom in de commit,
- ze zijn echt verschillend → beide houden, maar in `INDEX.md` erbij zetten wanneer je
  welke pakt.

Nooit twee bestanden die hetzelfde doen zonder uitleg. Dat is precies hoe zo'n repo
onbruikbaar wordt.

# Skills

Claude Code skills die bij deze setup horen. Een skill is een map met een `SKILL.md`:

```
skills/
└── <naam>/
    └── SKILL.md     ← frontmatter (name, description) + de instructies
```

De `description` in de frontmatter bepaalt wanneer Claude de skill oppikt. Schrijf die als
een trigger (waar de gebruiker om vraagt), niet als een samenvatting van wat de skill doet.

## Installeren

**Per project**, kopieer of symlink naar `.claude/skills/`:

```bash
mkdir -p .claude/skills
cp -r .design/skills/* .claude/skills/
```

**Globaal**, beschikbaar in elk project:

```bash
cp -r skills/* ~/.claude/skills/
```

Op Windows, met de repo als submodule onder `.design`:

```powershell
New-Item -ItemType Junction -Path .claude\skills\design -Target .design\skills
```

Een junction is beter dan kopiëren: een `git pull` in de submodule werkt de skills meteen bij.

## Beschikbaar

> **NEEDS INPUT**: nog geen skills toegevoegd. Zet losse skills in `_inbox/` en zeg
> "verwerk de inbox".

## Wat een goede skill hier zou zijn

Ideeën, als vertrekpunt:

| Skill | Doet |
|---|---|
| `nieuw-project` | Draait de kickoff uit `00-start/`, zet de structuur op, genereert `DESIGN.md` en de tokens |
| `design-review` | Draait `07-workflows/quality-review.md` op de huidige diff |
| `sectie` | Bouwt één sectie volgens het patroon uit `03-patterns/` |
| `palet` | Genereert een OKLCH-palet uit een logo of één merkkleur |
| `nl-copy` | Herschrijft placeholder-tekst naar echte Vlaamse copy volgens `05-copy/` |

## Regels voor skills hier

- Verwijs naar de bestanden in deze repo in plaats van de inhoud te herhalen. Twee kopieën
  van dezelfde regel lopen uit elkaar.
- Eén skill doet één ding. Een skill die alles doet wordt nooit getriggerd.
- Zet de `description` in de taal waarin de gebruiker het zou vragen, hier dus meestal
  Nederlands.

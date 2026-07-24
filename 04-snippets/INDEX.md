# Snippets index

Everything reusable, and where it came from. Check here before adding anything new —
see [`../07-workflows/ingest-material.md`](../07-workflows/ingest-material.md).

## In this repo

| Wat | Pad | Bron | Licentie |
|---|---|---|---|
| GSAP setup voor Next.js + 12 recepten | [`gsap/`](./gsap/) | GSAP 3.15.0 (npm) | GreenSock standard — gratis, ook commercieel |
| Drieweg thema-switcher + FOUC-guard | [`utils/theme-toggle.ts`](./utils/theme-toggle.ts) | Impeccable | Apache-2.0 |

## Externe bronnen — installeren op aanvraag, niet gevendord

| Bron | Wat | Licentie | Doc |
|---|---|---|---|
| **shadcn/ui** | De basis-primitives. Altijd hier beginnen, dan restylen naar de token-laag | MIT | [ui.shadcn.com](https://ui.shadcn.com) |
| **Vengeance UI** | 66 geanimeerde componenten: buttons, tekst-effecten, carousels, docks, achtergronden | ⚠️ **Geen licentie** | [`vengeance-ui.md`](./vengeance-ui.md) |
| **GSAP** | Animatie. Alle plugins sinds Webflow gratis | GreenSock standard | [`gsap/README.md`](./gsap/README.md) |
| **Impeccable** | `npx impeccable detect` — 46 anti-pattern-regels, zero-LLM | Apache-2.0 | [`../07-workflows/quality-review.md`](../07-workflows/quality-review.md) |
| **Lucide** | Iconen. Eén set per project | ISC | [lucide.dev](https://lucide.dev) |
| **Motion** | React-animatie voor mount/unmount en layout | MIT | [motion.dev](https://motion.dev) |

## Beslisboom

```
Heb ik een basis-component nodig (button, dialog, input, table)?
  → shadcn/ui, daarna restylen naar 02-design-system/tokens/

Heb ik één opvallend moment nodig (hero-effect, hover-reveal, dock)?
  → Vengeance UI — lees eerst de licentie-waarschuwing

Heb ik scroll-gedreven animatie of tekst-splitting nodig?
  → GSAP, 04-snippets/gsap/recipes.md

Is het een hover, focus of open/dicht?
  → CSS transition. Geen library.

Bestaat het nog niet?
  → Zelf schrijven, en hier toevoegen met de kop uit ingest-material.md
```

## Nog toe te voegen

Wat we missen en waar we naar op zoek zijn:

- [ ] Formulier-patterns — validatie, meerstaps, bestand-upload
- [ ] Tabel- en datagrid-patterns voor dashboards
- [ ] Auth-schermen (login, registratie, wachtwoord vergeten)
- [ ] E-mailtemplates (React Email)
- [ ] Cookie consent die niet lelijk is en wel GDPR-conform
- [ ] Kaart-integratie zonder de Google Maps iframe
- [ ] Lege staten, laadskeletons, foutpagina's als echte componenten

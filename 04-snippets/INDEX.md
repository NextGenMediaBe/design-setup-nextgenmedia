# Snippets index

Everything reusable, and where it came from. Check here before adding anything new —
see [`../07-workflows/ingest-material.md`](../07-workflows/ingest-material.md).

## Een catalogus is geen aanbeveling

De bibliotheken hieronder zijn geïnventariseerd, niet goedgekeurd. Ze zijn grotendeels
gebouwd vóór — en soms in directe tegenspraak met — de regels in
[`../02-design-system/anti-patterns.md`](../02-design-system/anti-patterns.md). Componenten
met een gloed, een aurora, een paars verloop of doorlopende achtergrondbeweging staan erin
omdat ze bestaan, niet omdat je ze mag gebruiken.

Elk component in een catalogus krijgt daarom één van drie oordelen:

| | Betekenis |
|---|---|
| ✅ **Bruikbaar** | Breekt geen regel. Nog steeds restylen naar de token-laag |
| ⚠️ **Met reden** | Breekt een regel die te verdedigen valt. Vereist `slop-check-ok:` plus een regel in `DESIGN.md` onder *Opgeheven verboden* |
| 🚫 **Verboden** | Een benoemd anti-pattern. De regel staat erbij |

Twee dingen gelden voor alle drie:

1. **Restylen naar de token-laag is niet optioneel.** Deze componenten komen met
   hardgecodeerde hexwaarden en `dark:`-varianten die Zinc of Slate veronderstellen. Zonder
   restyle faalt `npm run design:check` en ziet het eruit alsof het ergens anders vandaan
   komt — wat ook zo is.
2. **Eén opvallend moment per pagina.** De regel uit
   [`../02-design-system/motion.md`](../02-design-system/motion.md) verandert niet doordat
   er nu honderden componenten beschikbaar zijn. Een catalogus van driehonderd effecten
   verleidt tot tien; het antwoord blijft één.

## In this repo

| Wat | Pad | Bron | Licentie |
|---|---|---|---|
| GSAP setup voor Next.js + 12 recepten | [`gsap/`](./gsap/) | GSAP 3.15.0 (npm) | GreenSock standard — gratis, ook commercieel |
| Drieweg thema-switcher + FOUC-guard | [`utils/theme-toggle.ts`](./utils/theme-toggle.ts) | Impeccable | Apache-2.0 |

## Externe bronnen — installeren op aanvraag, niet gevendord

| Bron | Wat | Licentie | Doc |
|---|---|---|---|
| **shadcn/ui** | De basis-primitives. Altijd hier beginnen, dan restylen naar de token-laag **voor** je de eerste component plaatst | MIT | [ui.shadcn.com](https://ui.shadcn.com) |
| **Vengeance UI** | 66 geanimeerde componenten. Zeven ervan zijn nu expliciet verboden — lees de kop van het bestand | ⚠️ **Geen licentie** | [`vengeance-ui.md`](./vengeance-ui.md) |
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

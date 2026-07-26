# Bouw en aannemerij

## Wat de bezoeker echt komt doen

- **Bewijs zoeken dat je het al eens gedaan hebt.** Niet "diensten" lezen, maar foto's
  bekijken van werken die lijken op wat hij zelf plant. Een verbouwer zoekt verbouwingen,
  geen industriehal.
- **Inschatten wat het kost en hoe lang het duurt.** Hij weet dat je geen prijs op de site
  zet. Hij zoekt een orde van grootte: prijsvork per m², doorlooptijd, wanneer je vrij bent.
- **Uitzoeken of je nog bestaat en in de buurt werkt.** Recentste project van 2019 is een
  rood signaal. Werfadressen binnen 30 km is een groen signaal.
- **Een telefoonnummer vinden.** Op mobiel, met één duim, zonder scrollen. Bouw wordt
  telefonisch verkocht, niet via een formulier.
- **Checken of je betaalt wat je belooft.** Erkenning (klasse D, D1, …), VCA, RC-verzekering,
  BTW-nummer, tienjarige aansprakelijkheid. Dit is de sector met de meeste faillissementen;
  de bezoeker is bang zijn voorschot kwijt te spelen.

## De emotionele opdracht

Wegnemen: de angst voor een half afgewerkte werf, een aannemer die niet meer opneemt en een
factuur die 40% hoger uitvalt dan de offerte. Opwekken: het gevoel dat hier mensen werken die
al duizend keer hetzelfde correct hebben opgeleverd en die dat zonder opsmuk kunnen tonen. De
site moet aanvoelen als iemand die zijn werk laat zien en niet moet praten. Elk woord dat naar
marketing ruikt, kost geloofwaardigheid. Zwaar, materieel, feitelijk. Geen enkel adjectief dat
je niet met een foto of een getal kan staven.

## Typografie

| Rol | Voorstel | Waarom |
|---|---|---|
| Display | **Archivo Expanded** 700, clamp(38px, 5vw, 76px), `letter-spacing: -0.02em`, `line-height: 1.02` | Breed en zwaar zonder decoratie. Leest als gefreesde letters op een bouwbord, niet als een merk |
| Kop 2/3 | **Archivo** 600, 28/34px, `-0.01em`, `line-height: 1.15` | Zelfde familie, minder breedte: hiërarchie zonder een tweede font |
| Body | **Archivo** 400, 17px/1.65, `max-width: 68ch` | Humanistische breedte, blijft leesbaar in fel daglicht op een telefoon |
| Metadata / cijfers | **IBM Plex Mono** 500, 13px, `letter-spacing: 0.06em`, uppercase, `font-variant-numeric: tabular-nums` | Werfnummer, m², termijn en jaartal onder elkaar uitgelijnd. Mono maakt van een cijfer een meting |
| Knop | **Archivo** 600, 16px, `letter-spacing: 0.01em`, geen uppercase | Uppercase op een knop van 3 woorden leest als schreeuwen |

Type-contrast is groot: display staat 4,5× boven body. Dat is de Swiss/brutalist-mix uit
`art-direction.md` — kies die combinatie bewust en houd hem vol.

## Palet

| Kleur | Hex | Herkomst |
|---|---|---|
| Ground / tekst | `#15171A` | Natgestorte beton in de bekisting: bijna zwart met een koude zweem |
| Beton uitgehard | `#8C918F` | Ontkiste betonwand, de grijstint die na drie weken stabiel blijft |
| Cementstof | `#DCD8D0` | De laag stof op een werfvloer voor de eindschoonmaak. Lichte oppervlakken |
| Veiligheidsoranje | `#E4551D` | RAL 2004, de helm en de hesje. **Het enige accent** |
| Geolied eik | `#6B4F31` | Balklaag en raamkader, geolied en niet gelakt. Warme steun onder foto's en in de footer |
| Verzinkt staal | `#3D4A52` | Een gewalst profiel in de regen. Randen en 1px-lijnen |

Randen zijn **altijd alpha** over de achtergrond (`color-mix(in oklch, #3D4A52 22%, transparent)`),
nooit een volle grijstint — zie `craft.md`.

**Vermijd:** elke pastel, elk verloop, en vooral `blue-600` als "betrouwbaar blauw". Dat blauw
is het generieke aannemersblauw van 4.000 templatesites en zegt exact niets. Ook vermijden:
oranje op meer dan 4% van het scherm. Veiligheidsoranje werkt omdat het zeldzaam is.

## Layoutprincipe

Het project is de held; alles eromheen is bijschrift.

```
┌──────────────────────────────────────────────────────────────┐
│ LOGO      PROJECTEN  DIENSTEN  OVER  JOBS      03 456 78 90  │ sticky, tel klikbaar
├──────────────────────────────────────────────────────────────┤
│  [ FOTO — werf in uitvoering, full-bleed, 16:9, geen scrim ]  │
│                                                              │
│  Ruwbouw en sleutel-op-de-deur                               │
│  in de Kempen sinds 1978                                     │
│  [ Vraag een prijs ]      Bekijk 40 projecten →              │
│                                                              │
│  ─ 218 PROJECTEN ─ 41 MEDEWERKERS ─ VCA** ─ KLASSE D5 ─      │ mono, 13px
├──────────────────────────────────────────────────────────────┤
│  PROJECTEN                                                   │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐                │
│  │    4:3     │ │    4:3     │ │    4:3     │                │
│  ├────────────┤ ├────────────┤ ├────────────┤                │
│  │ Woning D.  │ │ Loods VM   │ │ Kantoor B. │                │
│  │ HERENTALS  │ │ GEEL       │ │ TURNHOUT   │                │
│  │ 2024·7 MND │ │ 2023·4 MND │ │ 2025·11MND │                │
│  └────────────┘ └────────────┘ └────────────┘                │
├──────────────────────────────────────────────────────────────┤
│  VOOR / NA   [ sleepslider, één werf, 3:2, zelfde standpunt ] │
├──────────────────────────────────────────────────────────────┤
│  HOE HET LOOPT  01 plaatsbezoek → 02 offerte → 03 planning →  │
│                 04 uitvoering → 05 oplevering + PV            │
├──────────────────────────────────────────────────────────────┤
│  [ FOTO ploeg op de werf ]   Bel 03 456 78 90 / Vraag prijs  │
└──────────────────────────────────────────────────────────────┘
```

Ritme: secties van `py-28` desktop / `py-16` mobiel, met **één** vol-bleed fotoblok per twee
tekstblokken. Nooit twee tekstsecties na elkaar zonder foto ertussen.
Het projectraster is 3 kolommen op ≥1024px, 2 op tablet, en op mobiel **geen carrousel maar
een verticale stapel van 4 projecten plus "Alle 40 projecten"** — een carrousel verstopt je
sterkste bewijs achter een swipe.
De telefoonstrip is op mobiel een vaste balk onderaan (`position: fixed; bottom: 0`) van 56px
met de knop "Bel 03 456 78 90" links en "Vraag een prijs" rechts.
Foto's laden met `loading="lazy"` behalve de hero, die krijgt `priority` en `fetchpriority=high`.

## Signature-ideeën

1. **Werffiche onder elke projectfoto.** Vijf regels mono, altijd dezelfde vijf velden:
   `PLAATS · TYPE · OPPERVLAKTE · UITVOERING · TERMIJN`. Bij 40 projecten wordt dat een
   databank in plaats van een fotoboek, en het is het enige element dat een concurrent niet
   in een middag kopieert, omdat hij die gegevens niet heeft bijgehouden.
2. **Voor/na met een gedwongen identiek standpunt.** Sleepslider, maar de discipline zit in de
   fotografie: dezelfde brandpuntsafstand, dezelfde ooghoogte, dezelfde uitsnede. Eén werf,
   groot, op de homepage; de rest op de projectpagina.
3. **Werfkaart van België of van de provincie** met een punt per opgeleverd project, gekleurd
   `#E4551D`. Hover geeft naam en jaar. Beantwoordt "werkt hij in mijn buurt" in één seconde,
   en toont dichtheid als bewijs.
4. **Live werfteller in de header-strip**: "vandaag 6 werven in uitvoering", gevoed uit een
   JSON die de werfleider wekelijks bijwerkt. Eén getal dat aantoont dat het bedrijf draait.

## Vertrouwenselementen die er echt toe doen

| Element | Waarom het werkt in deze sector |
|---|---|
| Erkenningsklasse en categorie (bv. D klasse 5) | Wettelijk geplafonneerd op werfbedrag. Een bouwheer weet meteen of je zijn werk mág aannemen |
| Ondernemingsnummer + oprichtingsjaar in de footer | Twee klikken naar de KBO en de jaarrekening. Wie het verbergt, wordt gecheckt en afgekeurd |
| Tienjarige aansprakelijkheidsverzekering met naam van de verzekeraar | Sinds de wet Peeters verplicht. Het noemen van de verzekeraar maakt het controleerbaar |
| Foto's van de eigen ploeg met naam en functie | Onderscheidt een aannemer met vast personeel van een doorgeefluik dat alles uitbesteedt |
| Werfadres of minstens de gemeente per project | Toetsbaar. Een bezoeker kan er langs rijden, en dat weet hij |
| Uitvoeringstermijn per project, ook als die uitliep | Termijn is de nummer één bron van conflict. Wie hem publiceert, claimt controle |
| VCA (VCA* / VCA**) | Doet er alleen toe bij industriële en overheidsopdrachten. Voor particulieren is het ruis |

Keurmerklogo's van sectorfederaties onderaan in grijstinten op `opacity: 0.55` — niet in kleur,
niet groot. Vier logo's op een rij ziet er wanhopiger uit dan één.

## Wat hier absoluut niet mag

| Nooit | Waarom | In plaats daarvan |
|---|---|---|
| Zachte pasteltinten (`#EAF2FB`, mint, perzik) | Materieel werk gepresenteerd in babykleuren leest als een bureau dat het werk uitbesteedt | Beton, staal, hout, één oranje |
| Ronde vriendelijke vormen: `rounded-3xl` kaarten, pill-knoppen | De sector is haaks, waterpas en op de millimeter. Ronde hoeken ondermijnen precies de claim | Radius 0 tot 4px, overal hetzelfde |
| Aurora-, blob- of meshverloop achter de hero | Kost LCP, dateert binnen een jaar en is de duidelijkste tell van een gegenereerde pagina | Een echte werffoto, `priority`, 16:9, ongefilterd |
| Stockfoto's van een man met helm en tablet | Iedereen herkent ze. Eén stockfoto maakt alle echte foto's verdacht | Vijf eigen foto's is beter dan dertig gekochte |
| 3D-render als er ook een foto van het gebouwde bestaat | Een render bewijst dat je kan tekenen, niet dat je kan bouwen | Render alleen bij lopende projecten, met label `IN UITVOERING` |
| "Kwaliteit, service en vakmanschap" als USP-blok | Drie woorden die elke concurrent ook schrijft, dus nul informatie | "Gemiddeld 4 weken tussen offerte en start" — een getal dat een concurrent moet evenaren |
| Een contactformulier van 9 velden als enige weg | De bouwklant belt. Een formulier voelt als een blokkade | Telefoon primair, formulier van 4 velden secundair |
| Fotogalerij als lightbox-carrousel zonder bijschrift | 40 losse foto's zonder context tonen niets aan | Per project één pagina met werffiche en 6 tot 10 foto's |

## Conversie

**Primair doel:** een telefonisch of ingepland plaatsbezoek. Niet "een offerte aanvragen" —
in de bouw wordt de opdracht op de werf gewonnen, niet in de mailbox.

**Primaire CTA:** `Vraag een prijs` — kort, concreet, geen belofte die je moet nakomen.
Alternatieven die eveneens werken, kies er één en gebruik hem overal identiek:
`Plan een plaatsbezoek` of `Bel 03 456 78 90`.
Nooit: "Contacteer ons", "Meer info", "Ontdek onze diensten".

**Secundaire actie:** `Bekijk 40 projecten →` als tekstlink, niet als tweede gevulde knop.
Op mobiel wordt de secundaire actie `Bel nu` in de vaste onderbalk.

**Waar de CTA staat:** in de hero onder de subhead; in de sticky header als tekstueel
telefoonnummer; aan het einde van elke projectpagina met de zin "Zoiets voor uw project?";
in de vaste mobiele onderbalk; en één keer in de footer. Vijf plaatsen, één formulering.
Het formulier zelf vraagt: naam, telefoon, gemeente, type werk. Vier velden, meer niet.

## Referenties

- **[willemen.be](https://www.willemen.be)** — de hero is een roterende reeks projectslides
  waarbij elk beeld dezelfde volle breedte krijgt en de titel als link fungeert; nieuws en
  vacatures zitten in twee tabbladen direct onder de vouw, zodat een sollicitant en een
  bouwheer vanaf hetzelfde punt vertrekken.
- **[democogroup.com/democo](https://democogroup.com/democo)** — het cijferblok "3 landen,
  6 kantoren, 43 actieve werven" staat als losse sectie tussen de projecten en het nieuws,
  waardoor de schaal van het bedrijf een gemeten feit wordt in plaats van een claim; elke
  projectslide begint met de stadsnaam als kop en daaronder één zin.
- **[besix.com](https://www.besix.com)** — de projectcarrousel legt naam én opleverdatum als
  tekst over het beeld, zodat je bij elke slide meteen weet of je naar iets afgewerkts of
  iets lopends kijkt; de vijf sectoren staan als één rij van vijf iconen met label, niet als
  vijf kaarten met paragrafen.

# B2B industrie, productie en techniek

## Wat de bezoeker echt komt doen

- Controleren of jouw machine of onderdeel binnen zijn tolerantie, spanning, debiet of asafstand valt. Hij zoekt een getal, geen belofte.
- Een PDF-datasheet of een DWG/STEP-bestand downloaden om in zijn eigen tekening te plakken. Vaak is dat de enige reden dat hij op de site is.
- Nagaan of jij zijn toepassing al eens gedaan hebt. Niet "voedingsindustrie" maar "CIP-bestendig, RVS 316L, IP69K".
- De naam vinden van de persoon die hem morgen kan terugbellen, plus het rechtstreekse nummer. Niet een formulier zonder afzender.
- Levertermijn en of het onderdeel nog leverbaar is. Een verouderd typenummer dat nergens naar verwijst kost je het order.

## De emotionele opdracht

De bezoeker is een technicus, een aankoper of een projectleider die tegenover zijn eigen baas moet verantwoorden waarom hij bij jou koopt. Hij is niet aan het dromen, hij is aan het indekken. Elke pagina moet hem materiaal geven waarmee hij dat gesprek wint: een spec, een tekening, een referentie in zijn eigen sector, een norm die je haalt. De site moet aanvoelen als een goed geordend technisch archief waar iemand met verstand van zaken de rug rechthoudt. Warmte komt niet uit vriendelijkheid, maar uit precisie: iemand die alles op orde heeft, is iemand die zijn productie ook op orde heeft.

## Typografie

| Rol | Voorstel | Waarom |
|---|---|---|
| Display | **Archivo**, wght 700, width 112 (Expanded), `letter-spacing: -0.02em`, `line-height: 1.05` | Breed en vlak, leest als een machineplaatje in plaats van als een merkbelofte. De breedte-as geeft gewicht zonder in condensed-drama te vervallen. |
| Body | **IBM Plex Sans**, 400/500, 17px, `line-height: 1.65`, `letter-spacing: 0` | Getekend voor technische documentatie. Houdt lange specificatiezinnen leesbaar en heeft een echte 500 voor inline nadruk. |
| Tabellen en getallen | **IBM Plex Mono**, 400, 14px, `line-height: 1.5`, `font-variant-numeric: tabular-nums` | Kolommen met maten, koppels en toleranties moeten optisch uitlijnen. Zonder tabular figures danst elke tabel. |
| Micro-labels | **IBM Plex Mono**, 500, 11px, `text-transform: uppercase`, `letter-spacing: 0.09em` | Voor artikelnummers, normverwijzingen, eenheden en tabelkoppen. |

Zet `font-variant-numeric: tabular-nums` globaal op `table`, `.spec`, `.price` en elk artikelnummer. Eenheden staan in de kolomkop, niet achter elk getal: `Koppel (Nm)`, niet `40 Nm / 60 Nm / 90 Nm`.

## Palet

| Kleur | Hex | Herkomst |
|---|---|---|
| Gietijzer | `#16181A` | Onbehandeld gietijzeren machineframe in de hal. Tekst en donkere vlakken. |
| Technisch papier | `#F3F1ED` | Ongebleekt tekenpapier. De achtergrond, nooit `#FFFFFF`. |
| Verzinkt staal | `#B6BBC0` | Thermisch verzinkte plaat. Randen, tabelkaders, inactieve staten. |
| Geanodiseerd aluminium | `#7F868D` | Geëxtrudeerd aluminiumprofiel. Secundaire tekst, bijschriften. |
| Noodstop-oranje | `#D8471F` | De kap van de noodstopschakelaar en de veiligheidsmarkering. Het enige accent: CTA, actieve filter, gemarkeerde tabelrij. |
| Perslucht-blauw | `#1D4E63` | Leidingmarkering voor perslucht volgens de kleurcodering in de hal. **Alleen voor datavisualisatie**, nooit voor UI. Dat is de geschreven reden voor deze tweede kleur. |

Vermijd: elk verloop. Verlopen horen niet bij metaal, en een verlopende CTA-knop in deze sector leest als een reclamebureau dat het dossier niet gelezen heeft. Ook vermijden: `#FFFFFF` als paginagrond en pure zwarte schaduwen — gebruik `rgba(22, 24, 26, 0.12)` als je überhaupt een schaduw nodig hebt, en meestal heb je die niet.

## Layoutprincipe

Een catalogus met een voorpagina, niet een landingspagina met een catalogus erachter.

```
┌──────────────────────────────────────────────────────────┐
│ LOGO   Producten  Toepassingen  Downloads  Support  [NL] │
│                                       ☎ +32 …  Offerte → │
├──────────────────────────────────────────────────────────┤
│  Lineaire aandrijvingen tot 12 kN,          ┌──────────┐  │
│  leverbaar uit voorraad Genk.               │  FOTO    │  │
│  Slag 100–3000 mm · IP65 · ATEX zone 2      │  machine │  │
│  [ Vraag een offerte ]  Datasheets ↓        │  in situ │  │
│                                             └──────────┘  │
├──────────────────────────────────────────────────────────┤
│  PRODUCTGROEPEN — 8 tegels, lijntekening + typenummer     │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐                              │
│  │ ⊟  │ │ ⊞  │ │ ⌸  │ │ ⌷  │  … tekening, geen foto      │
│  │LA-2│ │LA-4│ │RV-1│ │KS-9│                              │
│  └────┘ └────┘ └────┘ └────┘                              │
├──────────────────────────────────────────────────────────┤
│  SELECTIETABEL — direct op de homepage, niet verstopt     │
│  Type   Slag(mm)  Kracht(kN)  Snelh(mm/s)  IP   Datasheet │
│  LA-24    600        4,0         250       65      ↓      │
│  LA-42   1200        8,5         180       67      ↓      │
├──────────────────────────────────────────────────────────┤
│  TOEPASSINGEN — 3 cases met sector, probleem, cijfer      │
├──────────────────────────────────────────────────────────┤
│  NORMEN & CERTIFICATEN   |   TECHNISCHE SUPPORT + foto    │
│  ISO 9001 · ATEX · CE    |   Naam, functie, doorkiesnr.   │
└──────────────────────────────────────────────────────────┘
```

Ritme: secties zijn kort en dicht op elkaar (`py-20`, niet `py-40`). Witruimte overtuigt hier niemand — informatiedichtheid wel, zolang ze geordend is. Scheiding gebeurt met 1px hairlines in `#B6BBC0`, nooit met schaduwen of cards. Elke sectie krijgt een genummerd micro-label linksboven (`01 — PRODUCTGROEPEN`) zodat de pagina zich leest als een documentstructuur.

Mobiel: de selectietabel wordt geen kaartenstapel. Ze blijft een tabel in een `overflow-x: auto` container met een sticky eerste kolom (het typenummer) en een zichtbare scrollschaduw rechts. Filters klappen in één bottom sheet met een `Toon 24 resultaten`-knop onderaan. De telefoonnummer-CTA staat mobiel in een vaste balk onderaan, want een technicus op de werf belt.

## Signature-ideeën

1. **De selectietabel als hero-element.** Zet de vergelijkingstabel van de hoofdproductlijn direct onder de fold op de homepage, met werkende sortering op elke kolom. De bezoeker moet nul klikken doen om te zien of je maten kloppen. Elke rij eindigt op een download-icoon dat direct de PDF opent, niet een tussenpagina.
2. **Filteren op parameters, niet op categorieën.** De productcatalogus krijgt sliders en numerieke bereikvelden voor de vier of vijf grootheden die er in jouw vak toe doen — slag, kracht, debiet, drukklasse, boring, aansluitmaat. Elke filterwijziging schrijft naar de URL (`?slag=600-1200&ip=67`) zodat een aankoper zijn selectie in een mail naar zijn collega kan plakken. Toon boven de resultaten altijd `24 van 312 artikelen` in tabular figures. Filters die nul resultaten geven worden uitgegrijsd met de teller erbij (`ATEX (0)`), niet verborgen — dat vertelt hem meteen dat je het niet hebt.
3. **Technische tekening in plaats van renderfoto.** Elk artikeldetail opent op een 2D-maattekening met maatlijnen, niet op een glanzende 3D-render. Lijnen in `#16181A` op `#F3F1ED`, maatvoering in IBM Plex Mono 11px. Daaronder een tabbladrij: `Maattekening · Foto · 3D-model · Datasheet`. De tekening eerst, altijd.
4. **Downloadcentrum met versiedatum en revisienummer.** Eén pagina met elke datasheet, handleiding, EU-conformiteitsverklaring en CAD-bestand, in een tabel met kolommen `Document · Type · Taal · Rev. · Datum · Grootte`. Revisienummer en datum zichtbaar maken kost niets en is het sterkste vertrouwenssignaal in deze sector: het bewijst dat het document onderhouden wordt.

## Vertrouwenselementen die er echt toe doen

| Element | Waarom het werkt in deze sector |
|---|---|
| Downloadbare datasheet per artikel, zonder formulier ervoor | Een e-mailmuur voor een PDF kost je de technicus die morgen de aankoop voorbereidt. Hij haalt de spec dan bij je concurrent. |
| Revisienummer en datum op elk document | Bewijst dat de documentatie leeft. Een datasheet uit 2017 zonder revisie zegt dat het bedrijf ook zo werkt. |
| Normen en certificaten met nummer en geldigheidsdatum | "ISO-gecertificeerd" is niets. "ISO 9001:2015, certificaat 12 345, geldig tot 03/2027" is verifieerbaar. |
| Referentieprojecten met sector, probleem en één meetbaar cijfer | "Doorlooptijd van 14 naar 6 dagen bij een verpakkingslijn in de zuivel" doet werk dat een logo-balk nooit doet. |
| Foto en doorkiesnummer van de technische binnendienst | Deze koper wil weten wie hij belt als de lijn stilligt. Een generiek `info@` is een risico. |
| Voorraadstatus en levertermijn per artikel | De belangrijkste variabele in een aankoopbeslissing die niemand op zijn site zet. |
| Vermelding van jouw eigen productielocatie met adres | Aankopers checken of je een echte werkplaats hebt of een doorverkoper bent. |

## Wat hier absoluut niet mag

| Nooit | Waarom | In plaats daarvan |
|---|---|---|
| Een SaaS-hero met een abstracte belofte ("Wij versnellen uw productie") | Zegt niets over of jouw as in zijn machine past. De bezoeker scrollt weg voor hij één spec gezien heeft. | Kopregel met het product, het bereik en de locatie: "Lineaire aandrijvingen tot 12 kN, uit voorraad Genk." |
| Een contactformulier als primaire actie | "Vraag informatie aan" levert leads zonder inhoud op en dwingt jouw binnendienst tot drie mails heen en weer. | Een offerteaanvraag met de technische velden erin: toepassing, aantal, gewenste levertermijn, en een bestandsupload voor zijn tekening. |
| Stockfoto's van handen boven een tablet in een fabriek | Iedereen in de sector herkent ze en ze bewijzen niets over jouw hal. | Eigen foto's van jouw machines, jouw montage, jouw mensen. Slechte belichting is minder erg dan generiek. |
| Datasheet achter een e-mailformulier | Kost je precies de technisch beslissende bezoeker en levert je marketing-adressen op. | Open downloads, en meet welke artikelnummers gedownload worden als koopsignaal. |
| Getallen in een proportionele font | Kolommen lopen scheef en de tabel leest als een brochure in plaats van als data. | `tabular-nums` op elke tabel, prijs en artikelnummer. |
| Verouderde typenummers zonder redirect | Een technicus met een oude machine zoekt op het nummer op zijn typeplaatje. Een 404 daar is een verloren serviceorder. | Elk uitgefaseerd nummer krijgt een pagina met de opvolger en de verschillen in een tabel. |
| Cards met `shadow-md` rond productgroepen | Zacht en generiek, botst met alles wat metaal is. | Hairline `1px solid #B6BBC0`, radius 2px, achtergrond ongewijzigd. |

## Conversie

**Primair doel:** een offerteaanvraag met technische inhoud, niet een contactopname. De offerteaanvraag is hier belangrijker dan een contactformulier omdat de aankoop hoe dan ook via een offerte loopt: prijzen zijn projectafhankelijk, aantallen bepalen de staffel en de levertermijn is de helft van de beslissing. Een contactformulier stelt dat gesprek alleen maar uit met twee dagen.

**Primaire CTA:** `Vraag een offerte aan`. Het formulier heeft zes velden: toepassing, gevraagd type of specificatie, aantal, gewenste leverdatum, bedrijf, en een uploadveld voor een tekening of foto van het te vervangen onderdeel. Dat uploadveld verhoogt de kwaliteit van de aanvraag meer dan welke andere ingreep ook. Bevestig na verzenden met een concrete termijn: `Je aanvraag is binnen. Onze binnendienst antwoordt binnen één werkdag.`

**Secundaire acties:** `Download de datasheet` (per artikel, geen drempel) en het doorkiesnummer van de technische dienst als tekstlink met de openingsuren ernaast (`ma–do 8–17u, vr 8–15u`).

**Waar de CTA staat:** rechtsboven in de header, permanent zichtbaar en visueel het enige oranje element daar. In de hero als gevulde knop. Onderaan elke productdetailpagina in een balk met het artikelnummer al voorgevuld. Mobiel in een vaste onderbalk met twee helften: `Bellen` links, `Offerte` rechts. Nooit als zwevende bubbel rechtsonder.

## Referenties

- **https://www.mcmaster.com** — De homepage is de catalogus: 27 categorietegels met lijntekeningen als icoon en verder niets. Geen hero, geen slogan, geen mission statement. Het bewijst dat een technische bezoeker liever direct in de boomstructuur landt dan in een positioneringszin.
- **https://www.igus.eu** — Naast de catalogus staan configuratoren en een levensduurberekening als eigen navigatie-item, en er is een apart CAD-downloadportaal. Rekentools op gelijke voet met producten zetten is de juiste hiërarchie voor deze sector.
- **https://www.trumpf.com/en_INT/** — Machines zijn geordend op bewerkingsproces (2D- en 3D-lasersnijden, lassen, buigen, ponsen) in plaats van op productnaam, en naast elke machine staat een "Calculate now"-actie. De bezoeker vindt zo op wat hij doet, niet op wat het heet.

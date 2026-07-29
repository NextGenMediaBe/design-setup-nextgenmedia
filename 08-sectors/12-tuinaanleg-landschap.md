# Tuinaanleg en landschap

## Wat de bezoeker echt komt doen

- Kijken of jouw afgewerkte tuinen lijken op wat hij in zijn hoofd heeft. Hij bladert door foto's, hij leest nog niet.
- Uitvissen wat zoiets kost. Dit is de vraag die hij nooit stelt en waar alles op vastloopt. Zonder budgetindicatie belt hij niet.
- Nagaan of jij het hele traject doet of alleen een deel: ontwerp, grondwerk, verharding, beplanting, onderhoud, zwemvijver.
- Weten wanneer je kan beginnen. In deze sector is de wachttijd vaak zes tot twaalf maanden, en dat moet hij nú weten.
- Zien hoe een tuin van jou er na drie jaar uitziet. Een pas aangelegde tuin zegt niets over jouw beplantingskennis.

## De emotionele opdracht

Een tuin is de grootste aankoop die iemand doet zonder enig referentiekader. Hij weet wat een keuken kost, hij weet niet wat een terras kost, en hij vermoedt dat het meer wordt dan hij denkt. Daarbovenop is het een aankoop die pas na drie groeiseizoenen zijn definitieve vorm krijgt: hij koopt iets dat hij niet kan zien. De opdracht is dus dubbel: de site moet zijn verbeelding voeden met beelden die specifiek genoeg zijn om zich in te herkennen, en tegelijk de aankoop hanteerbaar maken met budgetten, doorlooptijden en een uitgeschreven werkwijze. Het geheel mag traag en gegroeid aanvoelen. Nooit gehaast, nooit commercieel. Seizoen, materiaal en tijd zijn de dragende thema's, niet snelheid.

## Typografie

| Rol | Voorstel | Waarom |
|---|---|---|
| Display | **Fraunces**, wght 500, opsz 120, SOFT 20, `letter-spacing: -0.01em`, `line-height: 1.1` | Een serif met variabele zachtheid en optische maat. Op grote maat heeft hij organische, licht onregelmatige vormen die bij beplanting horen; hij is nadrukkelijk geen zakelijke grotesk. |
| Alternatief display | **Newsreader**, 400 italic voor tussenkoppen, `line-height: 1.25` | Als het merk meer redactioneel dan ambachtelijk is. De cursief werkt goed voor plantennamen en seizoensaanduidingen. |
| Body | **Karla**, 400, 18px, `line-height: 1.7`, `letter-spacing: 0` | Grotesk met eigenzinnige details, houdt lange projectbeschrijvingen luchtig. 18px omdat deze bezoeker rustig leest, niet scant. |
| Bijschriften en plantnamen | **Karla**, 400 italic, 14px, `line-height: 1.5` | Latijnse plantennamen cursief, altijd bij de foto: `Molinia caerulea 'Transparent'`. |
| Micro-labels | **Karla**, 600, 11px, uppercase, `letter-spacing: 0.12em` | Voor gemeente, oppervlakte, aanlegjaar, budgetrange en seizoen. |

## Palet

Uit planten en steen, niet uit een swatchgenerator.

| Kleur | Hex | Herkomst |
|---|---|---|
| Taxusschaduw | `#3B4733` | Het diepe blad van *Taxus baccata* aan de noordkant, waar geen zon komt. De donkerste kleur op de site, gebruikt voor tekst en donkere vlakken. |
| Salieblad | `#8C9A6E` | Het grijsgroene blad van *Salvia officinalis* en *Stachys byzantina*. Secundaire tekst en rustige vlakken. |
| Blauwe hardsteen, gezoet | `#8E9295` | Belgische blauwe hardsteen na zoeten, droog. Randen, kaders, tabelstructuur. |
| Gebroken dolomiet | `#CFC6B2` | Het pad van gebroken dolomiet na een droge week. De paginagrond, nooit `#FFFFFF`. |
| Vochtige teelaarde | `#5E452F` | Pas omgespitte grond in maart. Tekstaccent, kaders rond beeld. |
| Oude gebakken klinker | `#B5562E` | Een verweerde Boomse steen in een oud terras. Het enige accent: primaire CTA, actieve filter, hover. |

Verboden: `#22C55E` en elke Tailwind `emerald-*`, `green-*` of `lime-*` als merkkleur. Die groenen bestaan niet in een tuin. Ze komen uit een schermpalet, zijn te verzadigd en te koel, en ze verraden onmiddellijk dat er geen plant is aangekeken bij het maken van de site. Vermijd ook: elk verloop van groen naar blauw, houtnerf-achtergrondtexturen, en `#FFFFFF` als grond. De warme `#CFC6B2` laat groen in de foto's er beter uitzien.

## Layoutprincipe

Een portfolio dat zichzelf ordent naar seizoen en materiaal, met het budget er niet uit weggelaten.

```
┌───────────────────────────────────────────────────────────┐
│ merk        Realisaties  Werkwijze  Onderhoud  Over  ⌕     │
│                                        [ Plan een gesprek ]│
├───────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐  │
│  │  ÉÉN FOTO, VOLLE BREEDTE, EIGEN WERK                │  │
│  │  Tuinen die er na vijf jaar beter uitzien           │  │
│  │  dan bij oplevering.                                │  │
│  │  Ontwerp, aanleg en onderhoud: Hasselt en omgeving  │  │
│  └─────────────────────────────────────────────────────┘  │
├───────────────────────────────────────────────────────────┤
│  REALISATIES: raster 2 kolommen, groot beeld               │
│  ┌───────────────────────┐ ┌───────────────────────┐       │
│  │  foto                 │ │  foto                 │       │
│  │  BILZEN · 2022        │ │  ALKEN · 2019         │       │
│  │  Stadstuin, 180 m²    │ │  Hoevetuin, 900 m²    │       │
│  │  € 45.000 – € 60.000  │ │  € 90.000 – € 120.000 │       │
│  └───────────────────────┘ └───────────────────────┘       │
│  Filters: type · oppervlakte · budget · aanlegjaar         │
├───────────────────────────────────────────────────────────┤
│  WERKWIJZE: 5 stappen in doorlopende tekst, met de          │
│  doorlooptijd per stap en wat het ontwerp kost              │
├───────────────────────────────────────────────────────────┤
│  MATERIALEN. 6 foto's van dichtbij: hardsteen, cortenstaal  │
│  padouk, dolomiet, gebakken klinker, gepolierd beton        │
├───────────────────────────────────────────────────────────┤
│  DEZELFDE TUIN IN VIER SEIZOENEN: één project, 4 foto's     │
├───────────────────────────────────────────────────────────┤
│  WACHTTIJD, WERKGEBIED, TEAM, ADRES                        │
└───────────────────────────────────────────────────────────┘
```

Ritme: beeld domineert, tekst is de uitzondering. Secties met foto's staan strak tegen elkaar (`gap-2`), tekstsecties krijgen juist lucht (`py-32`) en een smalle maat van 62 tekens. Geen enkele card, geen enkele schaduw: scheiding gebeurt door de foto's zelf en door 1px hairlines in `#8E9295`. Radius 0 op alle beeld. Een rechthoekige foto oogt als een afdruk, een afgeronde als een widget.

Mobiel: het realisatieraster wordt één kolom met foto's op volle schermbreedte, en de metadata (gemeente, oppervlakte, budget) staat eronder in drie regels, niet over de foto heen. De filters vallen samen in één knop `Filter` die een bottom sheet opent met de vier assen. De vier seizoensfoto's worden een horizontale swipe met een zichtbare positie-indicator (`2 / 4`), niet een verticale stapel. Het seizoensverschil moet naast elkaar leesbaar blijven.

## Signature-ideeën

1. **Budgetrange op elke projectkaart.** Elk project draagt een bereik in stappen: `€ 25.000 – € 40.000`, `€ 40.000 – € 60.000`, `€ 60.000 – € 90.000`, `€ 90.000+`. Zet er in het projectdetail bij wat het bedrag bevatte (grondwerk, verharding, beplanting, verlichting, water) en wat niet. Vrijwel niemand in de sector doet dit; het is de meest gestelde onuitgesproken vraag en het filtert je aanvragen meteen op ernst. Voeg boven het raster een filter op budget toe, met een teller: `7 projecten in € 40.000 – € 60.000`.
2. **Hetzelfde project in vier seizoenen.** Kies één tuin die je al vijf jaar onderhoudt en fotografeer hem vanaf exact hetzelfde standpunt in februari, mei, augustus en november. Vier foto's naast elkaar, met de maand als micro-label. Dit is het enige beeldidee dat jouw beplantingskennis bewijst en dat een concurrent zonder onderhoudscontracten niet kan namaken.
3. **De materialenpagina met detailfoto's op ware textuur.** Zes tot tien materialen die je werkelijk verwerkt, elk met een close-up van minstens 1600px breed, de correcte benaming, de indicatieve prijs per m², het onderhoud dat het vraagt en hoe het na vijf jaar verkleurt. Cortenstaal, gezoete blauwe hardsteen, padouk, gepolierd beton, gebroken dolomiet, gebakken klinker. Dit trekt de bezoeker die al weet wat hij wil en zoekt wie het kan.
4. **De wachttijd zichtbaar bovenaan.** Eén regel, permanent bijgewerkt: `Ontwerpen: vanaf september. Aanleg: eerste vrije periode maart 2027.` Het lijkt tegen je te werken en doet het omgekeerde: het bewijst dat je vol zit, en het voorkomt de teleurstellende telefoontjes van wie volgende maand een terras wil.

## Vertrouwenselementen die er echt toe doen

| Element | Waarom het werkt in deze sector |
|---|---|
| Budgetrange per project | De vraag die de bezoeker niet durft te stellen en die hem tegenhoudt om te bellen. Beantwoord hem voor hij belt. |
| Foto's van tuinen van drie tot tien jaar oud | Een pas opgeleverde tuin bewijst dat je kan aanleggen. Een tuin van zeven jaar bewijst dat je kan beplanten. |
| Latijnse plantennamen bij de foto's | Toont vakkennis aan wie ze herkent en kost niets bij wie ze niet herkent. Het onderscheid tussen een hovenier en een aannemer. |
| De werkwijze met doorlooptijd per stap en de prijs van het ontwerp | Maakt een ondoorzichtig traject planbaar. Het ontwerptarief expliciet noemen filtert je aanvragen. |
| Actuele wachttijd | Bewijst drukte en voorkomt verkeerde verwachtingen. Wie het aanvaardt, is een serieuze klant. |
| Het werkgebied met de gemeenten voluit | Deze markt is straal-gebonden. Een bezoeker uit 60 km verder moet dat meteen zien. |
| Onderhoudscontracten als eigen dienst | Wie onderhoud aanbiedt, plant anders. Het is een kwaliteitssignaal voor het ontwerp, niet alleen een extra omzetlijn. |
| Foto's van het team en het machinepark | Bewijst dat je eigen ploegen hebt en niet alles doorgeeft aan onderaannemers. |

## Wat hier absoluut niet mag

| Nooit | Waarom | In plaats daarvan |
|---|---|---|
| `#22C55E`, `emerald-500` of welk Tailwind-groen ook als merkkleur | Die verzadiging bestaat niet in een tuin. Het is de duidelijkste aanwijzing dat er geen plant bekeken is bij het ontwerpen van de site. | `#3B4733` en `#8C9A6E`, met `#B5562E` als accent. Kleur komt verder uit de foto's. |
| Stockfoto's van tuinen | Je verkoopt precies het ding dat op de foto staat. Een gekochte foto is een gekocht portfolio. | Alleen eigen werk. Eén sterke eigen tuin verslaat twintig gekochte. |
| Een portfolio zonder enige prijsinformatie | De bezoeker vult zelf een bedrag in en dat is meestal te laag, waarna het gesprek al verloren is voor het begint. | Budgetranges per project en een ondergrens: "Onze projecten starten vanaf € 25.000." |
| Foto's van alleen net opgeleverde tuinen | Een kale tuin met verse beplanting toont je grondwerk, niet je vakmanschap. | Minstens de helft van het portfolio is drie jaar of ouder, met het aanlegjaar erbij. |
| Cards met afgeronde hoeken en schaduw rond elke realisatie | Maakt van een foto een widget en haalt het beeld uit zijn eigen kader. | Radius 0, geen schaduw, foto's strak tegen elkaar met een 8px goot. |
| Een carrousel als hoofdweergave van de realisaties | Verbergt alles behalve de eerste, en niemand klikt door tot het einde. | Een raster van twee kolommen dat je gewoon scrollt. |
| Vaktermen zonder uitleg in de werkwijze | "Beplantingsplan", "nivelleren", "drainerende fundering" zeggen de klant niets. | Eén zin uitleg per stap, in gewone taal, met wat het voor hem betekent. |
| Een offerteformulier met vijftien velden | Deze klant weet nog niet wat hij wil; hij kan de vragen niet beantwoorden en haakt af. | Vier velden en een uploadveld voor een foto of een luchtbeeld van zijn perceel. |

## Conversie

**Primair doel:** een plaatsbezoek of een kennismakingsgesprek. Niet een offerte: een tuinofferte zonder plaatsbezoek is waardeloos, en het aanbieden ervan trekt precies de prijsvergelijkers aan die je niet wil.

**Primaire CTA:** `Plan een kennismaking`. Het formulier heeft vijf velden: gemeente, geschatte oppervlakte, wat je wil laten doen (volledige tuin, terras, beplanting, zwemvijver, onderhoud), je budgetrange als keuzelijst met dezelfde stappen als in het portfolio, en contactgegevens. Voeg een uploadveld toe voor een foto of een screenshot van het perceel. Dat verhoogt de kwaliteit van elke aanvraag. Bevestig met een realistische termijn: `We nemen binnen vijf werkdagen contact op om een plaatsbezoek in te plannen.`

**Secundaire acties:** `Bekijk de realisaties →` als tekstlink met pijl, en een `Vraag de materialengids aan`-download voor wie nog in de oriëntatiefase zit. Voor bestaande tuinen: `Onderhoud aanvragen` als aparte, lichtere ingang.

**Waar de CTA staat:** rechtsboven in de header, in `#B5562E`, permanent zichtbaar. Onderaan elk projectdetail met het projecttype al voorgevuld (`Een tuin als deze bespreken →`). Onderaan de werkwijzepagina, direct na de stap waarin de kostenopbouw uitgelegd wordt. En één keer helemaal onderaan de homepage, na de wachttijd. Wie tot daar leest heeft de wachttijd aanvaard en is de beste aanvraag die je krijgt. Nooit een pop-up en nooit een zwevende bubbel: het tempo van deze site is de helft van het argument.

## Referenties

- **https://www.oudolf.com**: De projecten zijn opgesplitst in 24 publieke en 8 private tuinen, elk als een tegel met alleen een foto, de tuinnaam en een landcode. Er staat geen enkele verkoopzin op de site; het portfolio is het volledige argument, en het adres in Hummelo staat gewoon in de voettekst.
- **https://bolstertuinen.be**: De navigatie splitst meteen in particuliere tuinen en publieke ruimte, en de referenties zijn filterbaar op tuintype ("eigentijdse stadstuin", "luxetuin") in plaats van chronologisch. Zo landt elke bezoeker in het deel van het portfolio dat op zijn eigen situatie lijkt.
- **https://puurtuinarchitectuur.be**: Elke realisatie draagt de gemeente als label (Aalst, Haaltert, Ninove, Denderleeuw) en het type werk ("Totaalconcept", "Aanleg van natuurlijke vijver"). De gemeentenaam bij elk project doet dubbel werk: hij bewijst het werkgebied en hij maakt de referentie controleerbaar voor een buur.

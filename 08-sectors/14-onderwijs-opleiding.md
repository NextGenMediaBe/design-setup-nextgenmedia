# Onderwijs en opleiding

De bezoeker vergelijkt. Altijd. Hij heeft drie tabs open met drie programma's en kiest op
feiten die hij naast elkaar kan leggen: wat leer ik, hoe lang duurt het, wanneer start het,
wat kost het, en wat kan ik daarna doen. Een site die die vijf antwoorden achter marketingtaal
verstopt, verliest het van een site die ze in een tabel zet.

Dit playbook geldt voor twee soorten opdrachtgevers die zich anders gedragen. Lees eerst welke
je voor je hebt.

| | Hogeschool / universiteit | Private opleidingsverstrekker |
|---|---|---|
| Instapmoment | Eén of twee per jaar, vaste academische kalender | Doorlopend, soms maandelijks |
| Beslissingstermijn | Maanden, met ouders erbij | Dagen tot twee weken, vaak alleen |
| Wat overtuigt | Studiefiche, ECTS, doorstroom, erkenning, studentenverhalen | Prijs, duur, avondlessen, KMO-portefeuille, werkgeversverklaringen |
| Volume | 40–300 opleidingen, filteren is de kernfunctie | 10–60 opleidingen, vergelijken is de kernfunctie |
| Toon | Institutioneel, neutraal, feitelijk | Direct, resultaatgericht — maar nog steeds feitelijk |
| Grootste risico | Informatiearchitectuur zakt in elkaar bij 200+ items | De site glijdt af naar verkooppagina zonder inhoud |

De rest van dit playbook geldt voor beide, met de verschillen expliciet benoemd.

## Wat de bezoeker echt komt doen

1. **Vinden of de opleiding bestaat die hij zoekt.** Met een zoekterm die niet jouw
   officiële benaming is ("boekhouden" in plaats van "Bachelor Accountancy-Fiscaliteit").
2. **Vier tot zes programma's naast elkaar leggen.** Duur, lesmoment, locatie, prijs,
   startdatum, diploma.
3. **De studiefiche lezen.** Welke vakken, hoeveel studiepunten, hoe wordt geëvalueerd, wie
   geeft het.
4. **De startdatum en de inschrijvingsdeadline vinden.** Dit is het meest gezochte en het
   slechtst gepubliceerde stuk informatie in de hele sector.
5. **Kijken of het combineerbaar is** met werk, gezin, of een lopend traject.

Een tweede, kleinere groep: ouders. Zij zoeken erkenning, doorstroommogelijkheden en kostprijs.
Verstop die niet in een pdf.

## De emotionele opdracht

De bezoeker twijfelt aan zichzelf, niet aan jou. "Ga ik dit kunnen, met mijn job, mijn
vooropleiding, mijn Nederlands, mijn agenda." Elke onduidelijkheid leest hij als een reden om
het niet te doen.

De opdracht is dus niet enthousiasmeren. Het is **de drempel zichtbaar laag maken door hem
exact te beschrijven**. "Je hebt geen voorkennis nodig. Lessen op dinsdag- en donderdagavond,
19u–22u, van september tot juni." Dat zinnetje overtuigt meer dan een pagina over ambitie.

## Typografie

| Rol | Voorstel | Waarom |
|---|---|---|
| Display | **Tiempos Headline** 600, `clamp(2.25rem, 4.5vw, 3.5rem)`, `tracking: -0.015em`, `line-height: 1.08` | Een schreef geeft institutioneel gewicht zonder ouderwets te worden. Gratis alternatief: **Newsreader** 600 met `optical-size` op 40 |
| Sectiekop | **Instrument Sans** 600, 24–30px, `tracking: -0.005em` | Sans voor structuur, schreef voor stem — het onderscheid houdt lange pagina's leesbaar |
| Body — lange tekst | **Instrument Sans** 400, **18px**, `line-height: 1.7`, max **68ch** | Opleidingsteksten zijn 800–1500 woorden. 18px/1.7 is het verschil tussen doorlezen en scannen. Ga niet onder 17px |
| Studiefiche-tabellen | **Instrument Sans** 400, 15px, `line-height: 1.45` | Compacter dan body, want het is naslag, geen lectuur |
| Studiepunten, uren, prijzen, data | **IBM Plex Mono** 500, 14px, `font-variant-numeric: tabular-nums` | Een kolom met 3, 6 en 12 studiepunten moet uitlijnen. Mono maakt cijfers ook herkenbaar als harde feiten |
| Micro-label (NIVEAU, TAAL, LOCATIE) | **Instrument Sans** 600 uppercase, 11px, `tracking: 0.1em`, kleur `#5C6472` | Labels moeten wegvallen zodat de waarde ernaast opvalt |

Regel: **de leesmaat is heilig.** Zodra een opleidingsbeschrijving breder wordt dan 68ch,
stopt men met lezen op regel drie. Zet de studiefiche-tabel buiten die kolom, vol breed.

## Palet

| Hex | Herkomst | Gebruik |
|---|---|---|
| `#16233F` | Inkt van een gebonden syllabus, blauwzwart onder tl-licht | Koppen, body-tekst, footer |
| `#FBF8F2` | Fotokopieerpapier 80 g, net iets warmer dan wit | Paginagrond |
| `#B0451C` | Gebrand baksteen van een negentiende-eeuwse aulagevel | Accent: links, actieve filter, primaire knop |
| `#5C6472` | Potlood HB op papier | Metadata, labels, secundaire tekst |
| `#E3DCCB` | Kaftkarton van een cursusmap | Tabelrandjes, scheidingsvlakken, achtergrond van de filterbalk |
| `#2F6B4F` | Groen van een schoolbordrand | **Functionele statuskleur, geen tweede accent:** uitsluitend "Inschrijvingen open". De tegenhanger voor gesloten is `#5C6472`, niet rood |

**Vermijd:** het volledige regenboogpalet dat onderwijssites gebruiken om studierichtingen te
coderen — na acht kleuren betekent kleur niets meer en faalt de contrastcheck. Codeer
studiegebieden met tekstlabels en één kleur. Vermijd ook geel op wit (haalt nooit 4,5:1),
verlopen achter koppen, en foto's van juichende studenten met een blauw kleurfilter erover.

## Layoutprincipe

Eén rustige leeskolom, met daarnaast een sticky feitenblok dat nooit meescrolt uit beeld.

```
┌──────────────────────────────────────────────────────────────┐
│ LOGO      Opleidingen  Toelating  Praktisch  Over  [ INFO ]  │
├──────────────────────────────────────────────────────────────┤
│  HERO — geen beeld nodig                                     │
│  Zoek een opleiding                                          │
│  ┌──────────────────────────────────────────────┐            │
│  │ 🔍 zoek op trefwoord, niet op onze benaming  │            │
│  └──────────────────────────────────────────────┘            │
│  247 opleidingen · eerstvolgende start 14 sep 26             │
├──────────────────────────────────────────────────────────────┤
│  FILTERS (sticky, 56px)                                      │
│  Domein ▾  Niveau ▾  Lesmoment ▾  Locatie ▾  Start ▾  Wis    │
├──────────────────────────────────────────────────────────────┤
│  RESULTATEN — rijen, geen kaartenraster                      │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ Bachelor Verpleegkunde                                 │  │
│  │ 180 SP · 3 jaar · dag · Antwerpen · start 14 sep 26     │  │
│  │ ● Inschrijvingen open t.e.m. 30 sep      Studiefiche → │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │ Graduaat Boekhouden                                    │  │
│  │ 120 SP · 2 jaar · avond · Mechelen · start 22 sep 26    │  │
│  └────────────────────────────────────────────────────────┘  │
├──────────────────────────────────────────────────────────────┤
│  OPLEIDINGSPAGINA                                            │
│  ┌────────────────────────────┐ ┌──────────────────────────┐ │
│  │ Wat leer je (lange tekst,  │ │ FEITENBLOK — sticky      │ │
│  │ 68ch, 18px/1.7)            │ │ Studiepunten   180 SP    │ │
│  │                            │ │ Duur           3 jaar    │ │
│  │ Voor wie                   │ │ Lesmoment      dag       │ │
│  │ Toelatingsvoorwaarden      │ │ Start      14 sep 26     │ │
│  │ Programma per jaar         │ │ Deadline   30 sep 26     │ │
│  │ Na je opleiding            │ │ Prijs      €1.116/jaar   │ │
│  │ Kostenoverzicht            │ │ ───────────────────────  │ │
│  │                            │ │ [ SCHRIJF JE IN ]        │ │
│  │ STUDIEFICHE (vol breed,    │ │  Infomoment 12 mrt →     │ │
│  │ buiten de leeskolom)       │ │  Studiefiche (pdf) →     │ │
│  └────────────────────────────┘ └──────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│  FOOTER: erkenning, ondernemingsnummer, klachtenprocedure    │
└──────────────────────────────────────────────────────────────┘
```

**Ritme.** Secties `py-20`, niet `py-32` — dit is een informatiesite, te veel lucht maakt de
pagina eindeloos. Binnen de leeskolom: `h2` krijgt `margin-top: 3rem` en een 1px `#E3DCCB`
lijn erboven. Die lijn is de enige scheiding die je nodig hebt.

**Mobiel.** Filters worden één knop `Filter (3)` die een bottom sheet opent met de filters
als lijst en een vaste balk onderaan met `Toon 41 resultaten`. Resultaatrijen worden 96px
hoge blokken; de metadata gaat naar twee regels van 13px. Het feitenblok gaat naar de top van
de opleidingspagina, direct onder de titel, als een tabel van zes rijen — niet naar onderen,
want dan wordt hij nooit gezien. De inschrijfknop wordt een sticky balk van 56px onderaan.

## Signature-ideeën

1. **Vergelijker voor maximaal drie opleidingen.** Vinkje op elke resultaatrij, dan een
   tabel met de acht velden naast elkaar. De bezoeker doet dit toch al met drie browsertabs;
   doe het beter dan zijn tabs. Deelbaar via URL, zodat hij het aan zijn partner kan sturen.
2. **De kalenderstrook met instapdata.** Eén horizontale strook boven de resultaten met de
   eerstvolgende zes startmomenten en per moment het aantal opleidingen dat dan begint. Bij
   een private verstrekker is dit de belangrijkste module van de site.
3. **Studiefiche als HTML-tabel, met de pdf als extra.** Vakken, studiepunten, semester,
   contacturen, evaluatievorm. Doorzoekbaar, linkbaar, leesbaar op een telefoon. De pdf blijft
   bestaan voor wie hem moet afdrukken, maar is niet de enige bron.
4. **"Kan ik dit combineren met werk?"-blok.** Concreet: lesdagen, uren per week zelfstudie,
   aantal examenperiodes, of stage verplicht is. Vier feiten die de meest gestelde vraag
   beantwoorden voor iemand ze stelt.

## Vertrouwenselementen die er echt toe doen

| Element | Waarom het werkt | Plaatsing |
|---|---|---|
| Erkenning en diplomawaarde, letterlijk benoemd | "Erkend door de Vlaamse overheid" of "diploma hoger onderwijs, niveau 6" beslist voor veel bezoekers de keuze | Feitenblok én footer |
| Instapdatum plus inschrijvingsdeadline, beide | Alleen een startdatum tonen laat de bezoeker denken dat hij nog tijd heeft | Feitenblok, bovenaan, met dagen-teller als de deadline binnen 30 dagen valt |
| Volledig kostenoverzicht, inclusief boeken en materiaal | Verborgen kosten zijn de meest genoemde klacht in de sector | Eigen sectie op de opleidingspagina, als tabel |
| KMO-portefeuille, opleidingscheques of betaald educatief verlof | Halveert de gepercipieerde prijs; wie het niet vermeldt, laat inschrijvingen liggen | Naast de prijs, met het registratienummer |
| Naam en foto van de lesgever, met zijn werkervaring | Bij private verstrekkers doorslaggevend: men koopt de docent, niet het lokaal |Onder het programma |
| Doorstroomcijfers of werkgeversverklaringen, met jaartal | Een cijfer zonder jaartal en bron is een marketingclaim | Onderaan, met bronvermelding |
| Infomoment met datum en inschrijflink | De veiligste tussenstap voor wie nog niet durft in te schrijven | Als secundaire actie overal waar de primaire CTA staat |

## Wat hier absoluut niet mag

| Nooit | Waarom | In plaats daarvan |
|---|---|---|
| Marketingtaal boven de feiten | "Ontdek jouw passie" beantwoordt geen enkele vraag en kost de plek waar de startdatum had moeten staan | Feiten eerst, toon in de tekst eronder |
| Startdatum of prijs alleen in een pdf | De bezoeker downloadt niet, hij gaat naar de volgende tab | Beide als tekst op de pagina, pdf als extra |
| Opleidingen als kaartenraster van 3×4 | Bij 40+ items is een raster onvergelijkbaar; rijen kun je scannen op één kolom | Rijen met vaste metadatavolgorde |
| Filters die de URL niet veranderen | Een gefilterde lijst is niet deelbaar en niet vindbaar in Google | Filterstaat in querystring, server-rendered |
| Stockfoto van juichende studenten met laptops | Iedereen herkent het, en het zegt niets over jouw campus | Eigen foto van het echte lokaal, of geen foto |
| Uitgevonden slaagcijfers of tevredenheidsscores | Onderwijs is een gereguleerde sector; een niet-onderbouwd cijfer is een risico én ongeloofwaardig | Alleen cijfers met bron en meetjaar. Geen cijfer is beter dan een vaag cijfer |
| Chatbot als eerste contactvorm | Vragen over toelating zijn te specifiek; men wil een mens | Naam, e-mail en telefoon van de opleidingscoördinator |
| "Meer info" als knoptekst | Zegt niet wat er gebeurt na de klik | "Bekijk de studiefiche" of "Schrijf je in" |
| Accordeons over de volledige inhoud | Wat dichtgeklapt staat, wordt niet gelezen en niet geïndexeerd | Lange tekst gewoon open; accordeon alleen voor FAQ |

## Conversie

**Doel.** Niet één, maar een ladder — bouw ze alle drie:
1. Studiefiche bekeken of gedownload (micro-conversie, meet dit)
2. Inschrijving op een infomoment of proefles
3. Inschrijving in de opleiding

**Primaire CTA.** Per situatie exact deze woorden:
- Hogeschool, inschrijvingen lopen: `Schrijf je in`
- Hogeschool, buiten de periode: `Ontvang de brochure`
- Private verstrekker: `Schrijf je in voor 22 sep` — met de datum in de knop
- Op de opleidingspagina zonder open inschrijving: `Hou me op de hoogte`

Gevuld, `#B0451C`, 48px hoog, vol breed in het feitenblok.

**Secundaire actie.** `Infomoment 12 maart →` en `Studiefiche (pdf, 240 kB) →`, als tekstlinks
onder de knop. Vermeld altijd bestandstype en grootte.

**Plaatsing.** In het sticky feitenblok, dus permanent zichtbaar tijdens het lezen. Herhaal
onderaan de pagina na het kostenoverzicht — dat is het moment waarop iemand beslist. Zet géén
CTA in de hero van de homepage: daar hoort het zoekveld, want de bezoeker weet nog niet
waarvoor hij zou inschrijven.

**Formulier.** Inschrijven: voornaam, naam, e-mail, telefoon, geboortedatum, hoogst behaalde
diploma. Zes velden is hier acceptabel omdat de intentie hoog is. Infomoment: drie velden.

## Referenties

- **[onderwijsaanbod.kuleuven.be/opleidingen/n](https://onderwijsaanbod.kuleuven.be/opleidingen/n)**
  — elke opleiding heeft een permanente URL met een vast nummer (`SC_55557822.htm`) en elk
  opleidingsonderdeel een eigen ECTS-fiche, zodat een studiefiche jarenlang linkbaar blijft
  vanuit studiekeuzesites en e-mails van studiebegeleiders.
- **[syntra-ab.be/opleidingen](https://www.syntra-ab.be/opleidingen)** — het aanbod opent met het
  aantal opleidingen als eerste feit ("900+ opleidingen beschikbaar") in plaats van met een
  slogan, waardoor je meteen weet dat je moet filteren en niet moet bladeren.
- **[vdab.be/opleidingen](https://www.vdab.be/opleidingen)** — het aanbod is opgedeeld in
  negentien opleidingsdomeinen als eerste ingang, zodat iemand die zijn opleiding niet bij naam
  kent toch binnen twee klikken in de juiste sectie zit.
- **[onderwijsaanbod.thomasmore.be/opleidingen/n](https://onderwijsaanbod.thomasmore.be/opleidingen/n)**
  — splitst de navigatie in "Opleidingen" en "Opleidingsonderdelen", zodat een kandidaat-student
  en een ingeschreven student die een vakfiche zoekt niet door dezelfde boom moeten.

# Lokale dienstverlening: elektricien, loodgieter, schoonmaak

De bezoeker staat in een kelder met water op de vloer. Hij googelt op zijn telefoon, met één
hand. Hij wil binnen tien seconden bellen. Dat is de volledige opdracht.

Alles wat tussen zijn duim en het telefoonnummer staat (een hero met een merkverhaal, een
cookiemuur die het scherm vult, een carrousel, een chatvenster dat opent) kost je de klant
letterlijk aan de eerstvolgende zoekresultaat.

Bouw deze site als een knop met wat uitleg eromheen.

## Wat de bezoeker echt komt doen

Drie soorten, in volgorde van waarde:

1. **De spoedgevallen** (30–50% van het verkeer, 80% van de omzet-per-bezoek). Lek, panne,
   verstopping. Wil: nummer, of je nú komt, en of je in zijn gemeente werkt. Leest niets.
2. **De planners.** Nieuwe verlichting, badkamer, wekelijkse poetshulp. Wil: prijslogica,
   werkgebied, foto's van eerder werk, en een offerteformulier. Leest wel, maar weinig.
3. **De vergelijkers.** Heeft drie tabs open. Kiest op reactiesnelheid en op de vraag of het
   tarief transparant is. Belt de eerste die zijn uurtarief durft te tonen.

Alle drie stellen dezelfde eerste vraag: **kom je naar mijn gemeente, en wat kost het.**

## De emotionele opdracht

**Opluchting binnen één seconde.** Niet vertrouwen opbouwen, niet imponeren: opluchten.
De bezoeker moet denken "die pakt dit op". Dat gevoel komt uit drie dingen: een nummer dat
groot en klikbaar is, zijn eigen gemeentenaam die letterlijk op het scherm staat, en een
aanrijtijd of openingstijd die concreet is.

Het tweede gevoel, pas daarna: **dit wordt geen verrassing op de factuur.** Prijslogica, geen
prijslijst, maar wel logica die uitgelegd is.

## Typografie

| Rol | Voorstel | Waarom |
|---|---|---|
| Telefoonnummer | **Archivo Expanded** 700, `clamp(2rem, 8vw, 3rem)`, `tracking: 0.01em`, `font-variant-numeric: tabular-nums` | Het nummer is het belangrijkste element van de site en moet als één blok leesbaar zijn vanaf armlengte. Expanded geeft breedte zonder extra gewicht |
| Display | **Archivo** 700, `clamp(1.75rem, 5.5vw, 2.75rem)`, `line-height: 1.15` | Zwaar en compact. Deze kop moet in één oogopslag gelezen worden, niet bewonderd |
| Sectiekop | **Archivo** 600, 22–26px | Genoeg onderscheid, geen tweede font |
| Body | **Archivo** 400, 17px, `line-height: 1.6`, max 62ch | Er staat weinig tekst. Wat er staat, moet raak zijn |
| Tarieven en uren | **IBM Plex Mono** 500, 15px, `tabular-nums` | Cijfers als cijfers presenteren maakt ze geloofwaardiger dan cijfers in een broodtekstfont |
| Knoptekst | **Archivo** 700, 17px, `tracking: 0.01em` | Op mobiel is 17px in een 52px knop de juiste verhouding. Kleiner leest als een link |
| Gemeentenamen | **Archivo** 400, 15px, `line-height: 1.9` | Een lijst van veertig gemeenten moet als lijst scanbaar zijn |

Regel: **geen enkele tekst onder 15px, nergens.** Deze site wordt op een telefoon gelezen door
iemand van 55 die zijn bril niet bij heeft.

## Palet

| Hex | Herkomst | Gebruik |
|---|---|---|
| `#14181C` | Antraciet van een gietijzeren rioolputdeksel | Tekst, header, footer |
| `#F7F6F2` | Wit van een pas geplamuurde muur | Paginagrond |
| `#E4571B` | Oranje van een verkeerskegel bij een wegenwerk | Accent. **Uitsluitend** de belknop en de offerteknop |
| `#0E4F6B` | Blauw van een geëmailleerd huisnummerplaatje | Links, koppen van de werkgebied-sectie, secundaire knop-outline |
| `#1C7A4A` | Groen van een keuringssticker op een elektrische kast | **Functionele status:** "Nu bereikbaar", "Vandaag nog beschikbaar". Alleen als het waar is en automatisch gestuurd op openingsuren |
| `#8A8F96` | Verzinkt staal van een buisklem | Metadata, scheidingslijnen, uitgegrijsde staat |

**Vermijd:** blauw-met-geel gradiënt (de generieke "vakman"-look), zwaar dropshadow onder elke
kaart, en rood als accent. Rood naast het woord "spoed" leest als storing in plaats van als
oplossing. Vermijd ook meer dan één verzadigde kleur in beeld: de belknop moet het enige
oranje op het scherm zijn.

## Layoutprincipe

Eén kolom, mobile-first, met het telefoonnummer boven alles en een belbalk die nooit
verdwijnt.

```
MOBIEL (het echte ontwerp: desktop is de afgeleide)
┌───────────────────────────────┐
│ LOGO              ☰           │  ← 56px, logo max 32px hoog
├───────────────────────────────┤
│  Loodgieter in Gent en        │  ← gemeentenaam in de H1
│  omgeving. 24/7 bereikbaar.   │
│                               │
│      0471 56 48 69            │  ← 40px, klikbaar, tel:
│  ┌─────────────────────────┐  │
│  │      BEL NU             │  │  ← 56px hoog, vol breed, #E4571B
│  └─────────────────────────┘  │
│  ● Nu bereikbaar · ter plaatse│  ← #1C7A4A, gestuurd op openingsuren
│    binnen 60 min              │
│  ┌─────────────────────────┐  │
│  │  Offerte aanvragen      │  │  ← outline #0E4F6B, 52px
│  └─────────────────────────┘  │
├───────────────────────────────┤
│  WAT WE DOEN: 4 regels,       │
│  geen kaarten, geen iconen-   │
│  raster                       │
├───────────────────────────────┤
│  WAT HET KOST                 │
│  Voorrijkost      €45         │
│  Uurtarief        €65/u       │
│  Avond en weekend  +50%       │
│  Materiaal        aan kostprijs│
│  Alles incl. btw. Je krijgt de│
│  prijs voor we beginnen.      │
├───────────────────────────────┤
│  WERKGEBIED: plaatsnamen      │
│  Gent · Gentbrugge · Ledeberg │
│  Sint-Amandsberg · Mariakerke │
│  Drongen · Wondelgem · Merelbeke│
│  Destelbergen · Melle · Deinze│
│  Staat je gemeente er niet    │
│  bij? Bel toch even.          │
├───────────────────────────────┤
│  RECENT WERK: 4 echte foto's  │
│  met plaats en datum          │
├───────────────────────────────┤
│  REVIEWS: 3, met naam+plaats  │
├───────────────────────────────┤
│  FOOTER: btw, verzekering,    │
│  erkenningsnummer, uren       │
├───────────────────────────────┤
│ ☎ 0471 56 48 69  │  Offerte  │  ← STICKY, 60px, altijd zichtbaar
└───────────────────────────────┘
```

**Desktop** is dezelfde volgorde in een `max-w-6xl` container: hero met tekst links en één
foto rechts, tarieven en werkgebied naast elkaar in twee kolommen. Het telefoonnummer staat in
de header rechts, in `#14181C`, 22px, met de belknop ernaast. De sticky balk vervalt op
desktop. De header volstaat.

**Ritme.** Secties `py-14` op mobiel, `py-20` op desktop. Kort. Deze site mag niet lang
aanvoelen; als de bezoeker moet scrollen om het werkgebied te vinden, staat het te laag.

**Raakvlakken.** Alles minstens **48×48px**, belknoppen 56px. Verticale afstand tussen twee
tikbare elementen minstens 12px, anders wordt er misgeklikt met natte handen.

## Signature-ideeën

1. **De sticky belbalk op mobiel.** 60px hoog, vast onderaan, twee vlakken: links het nummer
   met een telefoonicoon (`tel:`-link), rechts "Offerte". Verschijnt niet na scroll maar staat
   er **vanaf de eerste render**. Een balk die inschuift, mist precies de bezoeker die na twee
   seconden weer weg wil. Geef de `<body>` `padding-bottom: 60px` zodat de footer niet
   verdwijnt, en zet `env(safe-area-inset-bottom)` in de padding voor iPhone-toestellen. Dit is
   het enige element van de site dat je nooit mag verstoppen, ook niet bij een geopende
   cookiebanner.
2. **Werkgebied als lijst van plaatsnamen, niet als kaartje.** Een kaartafbeelding met een
   cirkel eromheen beantwoordt de vraag niet: de bezoeker moet zelf inschatten of Wondelgem
   binnen de cirkel valt, hij kan er niet op zoeken, Google indexeert de plaatsnamen niet, en
   op een telefoon van 375px is de kaart onleesbaar. Schrijf de gemeenten uit: twaalf tot
   veertig namen, in twee of drie kolommen, alfabetisch. De bezoeker vindt zijn eigen gemeente
   in een halve seconde en dat is het moment waarop hij belt. Bijkomend: die plaatsnamen zijn
   de zoektermen waarop je gevonden wilt worden. Sluit af met "Staat je gemeente er niet bij?
   Bel toch even". Dat vangt de rand van het gebied op zonder dat je hem moet afbakenen.
3. **Prijslogica in plaats van prijslijst.** Vier regels: voorrijkost, uurtarief,
   avond-/weekendtoeslag, materiaal. Plus één zin: "Je krijgt de prijs voor we beginnen."
   Bedrijven weigeren vaak elke prijs te tonen; dat is precies waarom de één die het wel doet
   gebeld wordt. Als de opdrachtgever geen tarieven wil publiceren, publiceer dan minstens de
   voorrijkost en de zin over de prijsbevestiging.
4. **Beschikbaarheidsindicator die echt klopt.** Een groene stip met "Nu bereikbaar" tijdens
   de openingsuren, en buiten de uren "Gesloten: morgen vanaf 7u30, of bel 24/7 voor spoed".
   Stuur dit op de klok van de bezoeker, niet hardcoded. Een groene stip om 23u die niemand
   opneemt, kost meer vertrouwen dan hij oplevert.

## Vertrouwenselementen die er echt toe doen

| Element | Waarom het werkt | Plaatsing |
|---|---|---|
| Telefoonnummer als tekst, niet in een afbeelding | Moet klikbaar zijn, kopieerbaar, en voorleesbaar door een screenreader | Header, hero, sticky balk, footer |
| Uitgeschreven gemeentelijst | Beantwoordt de eerste vraag zonder interpretatie, en is de enige vorm die zoekmachines lezen | Eigen sectie, boven de reviews |
| Aanrijtijd of responstijd, concreet | "Binnen 60 minuten ter plaatse" is het verschil met "snelle service" | Direct onder de belknop |
| Voorrijkost en uurtarief | De meest gestelde vraag aan de telefoon. Wie hem online beantwoordt, wint de vergelijker | Eigen sectie, boven het werkgebied |
| Btw-nummer en verzekeringspolis | Bewijst dat het geen zwartwerk is; verzekering BA-uitbating is voor schade aan de woning doorslaggevend | Footer, als tekst |
| Erkennings- of certificatienummer | Elektricien: erkend keuringsorganisme of AREI-conformiteit. Verwarming: G1/G2/G3-attest. Noem het nummer | Footer en de dienstpagina waar het geldt |
| Vier foto's van eigen werk, met plaats en datum | Vier echte foto's overtuigen meer dan twintig stockbeelden. Plaats en datum maken ze verifieerbaar | Eigen sectie |
| Drie reviews met voornaam, gemeente en maand | Ongefilterde, korte reviews met plaatsnaam. Link naar de bron als die er is | Onder het werk |
| Openingsuren per dag, plus de spoedregeling apart | "24/7" zonder uitleg wordt niet geloofd. "Ma–vr 7u30–18u, spoed 24/7 aan avondtarief" wel | Footer en de beschikbaarheidsindicator |

## Wat hier absoluut niet mag

| Nooit | Waarom | In plaats daarvan |
|---|---|---|
| Hero die eerst een merkverhaal vertelt | "Al 25 jaar uw partner in comfort" kost de bovenste 300px aan iemand die water op de vloer heeft. Het verhaal mag bestaan – op de over-pagina | H1 met dienst plus plaats, dan het nummer, dan de belknop. Verhaal onderaan of elders |
| Werkgebied als kaartafbeelding of ingesloten Google Map | Onleesbaar op 375px, niet doorzoekbaar, niet indexeerbaar, laadt traag, en beantwoordt de vraag niet | Alfabetische lijst met plaatsnamen |
| Telefoonnummer alleen in de footer | Dat is 4000px scrollen voor het enige element dat telt | Vier plekken, waarvan één permanent zichtbaar |
| Cookiebanner die het volledige scherm bedekt | Verbergt de belknop bij de allereerste render en verhoogt je bounce direct | Smalle balk bovenaan of onderaan die de sticky belbalk vrij laat |
| Contactformulier als enige contactweg | Een spoedgeval vult geen formulier in | Bellen primair, formulier secundair, WhatsApp eventueel derde |
| Carrousel in de hero | Bewegend beeld boven de belknop, en niemand ziet slide twee of drie | Eén statische foto, `priority`, met scrim |
| Chatwidget die vanzelf opent | Overlapt de sticky belbalk, precies op de plek waar de duim zit | Geen widget, of eentje die enkel op de offertepagina staat en niet vanzelf opent |
| Iconenraster van twaalf diensten | Niemand telt twaalf diensten; men zoekt er één | Vier tot zes diensten als tekstregels, met een link per dienst |
| "Vrijblijvende offerte" als knoptekst | Zegt niet wat er gebeurt en klinkt als een verkoopgesprek | "Offerte aanvragen" of "Bel nu" |
| Stockfoto van een lachende man met een sleutel | Iedereen herkent het beeld en er wordt niets uit afgeleid | Foto van de echte busje, de echte ploeg, of het echte werk |
| Uurtarief helemaal verzwijgen | De vergelijker belt de concurrent die het wel toont | Minstens de voorrijkost, plus de zin dat de prijs vooraf bevestigd wordt |

## Conversie

**Doel.** Eén gesprek. Alles wordt gemeten als: telefoongesprek gestart. Formulieren zijn een
vangnet voor wie niet kan bellen, geen doel op zich.

**Primaire CTA, letterlijk:** `Bel nu 0471 56 48 69` in de hero (nummer in de knop, want dat
maakt duidelijk wat er gebeurt na de tik), en `Bel nu` in de sticky balk waar de ruimte
ontbreekt. `#E4571B`, 56px hoog, vol breed op mobiel, `href="tel:+32471564869"` met het
internationale formaat in de href en het leesbare formaat in de tekst.

Voor schoonmaak, waar er geen spoedmoment is, verschuift de primaire CTA naar
`Vraag een gratis prijsberekening` en zakt bellen naar secundair. Dat is de enige subsector
waar je het nummer niet als eerste zet.

**Secundaire actie.** `Offerte aanvragen`, outline `#0E4F6B`, 52px. Op de offertepagina een
formulier van vier velden: naam, telefoon, gemeente, korte omschrijving. Meer velden vult
niemand in vanaf een telefoon. Zet `type="tel"` en `inputmode="numeric"` op het telefoonveld
en `autocomplete` op alles.

**Plaatsing.** Nummer in de header vanaf de eerste render. Belknop in de hero binnen de eerste
schermhoogte, boven de vouw op een iPhone SE (375×667). Sticky balk permanent op mobiel.
Herhaal de belknop na de tariefsectie en na het werkgebied. Dat zijn de twee momenten waarop
de laatste twijfel wegvalt.

**Snelheid als conversiefactor.** LCP onder 2 seconden op 4G, want deze bezoeker heeft geen
geduld en staat vaak op een slechte verbinding in een kelder. Eén hero-foto, geen webfont voor
het telefoonnummer zolang het niet geladen is (`font-display: swap` met een goede fallback),
geen third-party script boven de vouw.

## Referenties

- **[loodgieter24h.be](https://www.loodgieter24h.be/)**: het telefoonnummer staat samen met een
  knop "BEL NU" meermaals boven de vouw, en de kop zet de dienst en de stad naast elkaar
  ("Loodgieter Antwerpen 24/7") zodat de twee vragen van de bezoeker in één regel beantwoord zijn.
- **[spoedservices.be](https://spoedservices.be/)**: benoemt de provincies waar men werkt
  (Antwerpen, Limburg, Oost-Vlaanderen, Vlaams-Brabant, West-Vlaanderen) als tekst in plaats van
  op een kaart, waardoor je in één blik ziet of jouw regio erbij hoort.
- **[speedyloodgieter.be](https://www.speedyloodgieter.be/)**: zet het mobiele nummer
  (0495 56 37 78) en de belofte van een gratis offerte in dezelfde regel, zodat de prijsvraag al
  beantwoord is voor je belt.
- **[elektricien-hulp.be](https://elektricien-hulp.be/)**: koppelt de belofte aan een concreet
  getal ("binnen 30 minuten ter plaatse") in plaats van aan het woord "snel", wat de bezoeker
  iets geeft om de concurrent mee te vergelijken.

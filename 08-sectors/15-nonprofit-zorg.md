# Non-profit en zorg

Twee dingen tegelijk, en ze vechten om dezelfde ruimte: iemand die **hulp nodig heeft** en
iemand die **wil helpen**. De eerste is kwetsbaar, gehaast en schaamt zich vaak. De tweede is
welwillend maar wantrouwig en wil weten waar zijn geld heen gaat.

Ontwerp de site zo dat beiden binnen één scroll hun eigen pad zien. Als de hulpzoekende eerst
door een donatiecampagne moet, heb je de organisatie verkeerd om gezet.

## Wat de bezoeker echt komt doen

**De hulpzoekende (of zijn familie):**
1. Nagaan of dit voor hem is. "Geldt dit ook als ik geen diagnose heb? Als ik geen Nederlands
   spreek? Als het over mijn kind gaat?"
2. Weten wat het kost. In de zorg is "gratis" of "terugbetaald" het antwoord dat de drempel
   wegneemt — als het waar is, zet het bovenaan.
3. Weten wat er gebeurt na de aanvraag. Wie belt, wanneer, en hoe lang duurt het.
4. Een telefoonnummer vinden voor het geval het dringend is.

**De helper:**
1. Begrijpen wat de organisatie exact doet, in één zin, met een cijfer erbij.
2. Zien waar het geld naartoe gaat, in percentages of euro's.
3. Doneren of zich aanmelden als vrijwilliger, in minder dan een minuut.
4. Nagaan of de gift fiscaal aftrekbaar is.

## De emotionele opdracht

**Waardigheid, niet medelijden.** Het verschil is meetbaar in de fotografie: iemand die in de
camera kijkt en iets doet, tegenover iemand die gefotografeerd wordt terwijl hij lijdt. Het
eerste levert donaties op en respecteert de persoon. Het tweede levert een klacht op van de
persoon in kwestie.

**Rust, niet urgentie.** Rode banners, tellers en "nog X dagen" horen bij crowdfunding, niet
bij een zorgorganisatie. De bezoeker die hulp zoekt is al in paniek. De bezoeker die wil
helpen wordt door druk juist argwanend.

**Bewijs, niet belofte.** Elk cijfer met een jaartal en een bron. Non-profits worden strenger
beoordeeld dan bedrijven, en terecht.

## Typografie

| Rol | Voorstel | Waarom |
|---|---|---|
| Display | **Bricolage Grotesque** 600, `clamp(2.25rem, 5vw, 3.75rem)`, `tracking: -0.02em`, `line-height: 1.1` | Een grotesque met onregelmatige details: menselijk zonder kinderlijk te worden. Gratis, variabel |
| Sectiekop | **Bricolage Grotesque** 500, 26–32px, `tracking: -0.01em` | Zelfde familie, lager gewicht — het verschil doet het werk, niet een tweede font |
| Body | **Source Sans 3** 400, **18px**, `line-height: 1.72`, max **66ch** | Deze bezoeker leest slecht: stress, leeftijd, of Nederlands als tweede taal. 18px is de ondergrens, niet de luxe |
| Citaat / getuigenis | **Newsreader** 400 italic, 22px, `line-height: 1.5`, ingesprongen 32px | Een schreef markeert dat dit iemands woorden zijn en niet die van de organisatie |
| Cijfers en bedragen | **Source Sans 3** 600, `font-variant-numeric: tabular-nums`, transparantiecijfers op 40–56px | Grote cijfers zijn hier het argument. Tabular-nums zodat een kolom bedragen uitlijnt |
| Micro-label (FISCAAL ATTEST, GRATIS, ANONIEM) | **Source Sans 3** 600 uppercase, 11px, `tracking: 0.09em` | Deze drie woorden verlagen de drempel het meest en verdienen een eigen niveau |

Regel: **nooit onder 17px voor lopende tekst, nergens.** Ook niet in de footer, ook niet in
de disclaimer. Dit is de sector waar dat het meeste kost.

## Palet

| Hex | Herkomst | Gebruik |
|---|---|---|
| `#14403A` | Dof groen van geëmailleerd ziekenhuisplaatstaal — dieper en matter dan het op een scherm lijkt | Koppen, footer, donkere secties |
| `#FDFBF7` | Ongebleekt verbandgaas, warm wit | Paginagrond. Nooit `#FFF`: te klinisch, en het maakt foto's van mensen bleek |
| `#E4622F` | Oranje van een reddingsvest in daglicht | Accent. **Alleen** de doneerknop en de aanmeldknop. Nergens anders |
| `#6F8079` | Grijsgroen van gewassen katoen | Secundaire tekst, labels, bijschriften |
| `#EDE5D8` | Kraftkarton van een doos hulpgoederen | Achtergrond van transparantieblokken en getuigenissen |
| `#2E5E8A` | Blauw van een geëmailleerd wegwijzerbord | **Functionele kleur, geen tweede accent:** uitsluitend voor de hulplijn en de aanmeldroute, zodat die visueel gescheiden blijft van de doneerroute |

**Vermijd:** het lichtblauw-plus-groen dat elke zorgwebsite gebruikt (het is inmiddels
onzichtbaar geworden), verlopen achter portretten, en rood in welke vorm dan ook — rood leest
in deze context als alarm of als tekort. Vermijd ook zwart-witfotografie van hulpbehoevenden:
het estheticeert leed.

## Layoutprincipe

Twee zichtbaar gescheiden paden vanaf de eerste schermhoogte, en een transparantieblok dat
niet weggeklikt kan worden.

```
┌──────────────────────────────────────────────────────────────┐
│ LOGO   Wat we doen  Hulp nodig  Steun ons  Over  [ DONEER ]  │
├──────────────────────────────────────────────────────────────┤
│  HERO — foto van één persoon, oogcontact, aan het werk       │
│  Eén zin die zegt wat de organisatie doet en voor wie.       │
│  ┌───────────────────────────┐  ┌─────────────────────────┐  │
│  │ IK HEB HULP NODIG         │  │ IK WIL HELPEN           │  │
│  │ gratis · anoniem          │  │ gift · vrijwilliger     │  │
│  │ [ Vraag hulp aan ]        │  │ [ Doneer ]              │  │
│  │  of bel 0800 XX XXX       │  │  of word vrijwilliger → │  │
│  └───────────────────────────┘  └─────────────────────────┘  │
│      blauw #2E5E8A                   oranje #E4622F          │
├──────────────────────────────────────────────────────────────┤
│  WAT WE DOEN — drie zinnen, drie echte cijfers met jaartal   │
│   1.079          87            €14.474.143                   │
│   mensen         kinderen      naar onderzoek in 2025        │
├──────────────────────────────────────────────────────────────┤
│  GETUIGENIS — één persoon, naam, leeftijd, foto, citaat      │
│  op #EDE5D8, geen kaart, geen schaduw                        │
├──────────────────────────────────────────────────────────────┤
│  JE GELD GOED BESTEED                                        │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ Van elke 10 euro gaat 8,20 euro rechtstreeks naar      │  │
│  │ ███████████████████████████████░░░░░░░  82% / 18%      │  │
│  │ zorg & onderzoek 82%  ·  werking en fondsen 18%        │  │
│  │ Jaarrekening 2025 (pdf, 1,2 MB) →  Balanscentrale →    │  │
│  └────────────────────────────────────────────────────────┘  │
├──────────────────────────────────────────────────────────────┤
│  DONEERFLOW — STAP 1 VAN 2                                   │
│  ○ eenmalig   ● maandelijks                                  │
│  [ €10 ] [ €25 ] [ €40 ] [ €60 ] [ eigen bedrag ]            │
│  Vanaf €40 per jaar krijg je een fiscaal attest: een gift    │
│  van €40 kost je netto €28.                                  │
│                                    [ Ga verder → ]           │
├──────────────────────────────────────────────────────────────┤
│  FOOTER: vzw-naam, ondernemingsnummer, zetel, RSZ,           │
│  jaarrekening, privacybeleid, klachtenprocedure              │
└──────────────────────────────────────────────────────────────┘
```

**Ritme.** Secties `py-24`. Wissel `#FDFBF7` en `#EDE5D8` af als sectiescheiding; gebruik geen
borders en geen schaduwen — deze sector heeft geen kaarten nodig. Getuigenissen krijgen extra
lucht boven en onder (`py-32`), omdat een citaat ademruimte nodig heeft om als citaat te lezen.

**Mobiel.** De twee paden stapelen, en **"Ik heb hulp nodig" staat eerst** — altijd, ook als
de donatiecampagne loopt. Elk pad wordt een blok van 160px met de knop vol breed op 52px.
Het telefoonnummer wordt een `tel:`-link. De transparantiebalk blijft horizontaal maar de
percentages gaan onder de balk in plaats van erin. De doneerflow blijft twee stappen met een
zichtbare voortgangsindicator; bedragknoppen worden een raster van 2×3 met 56px hoge knoppen.

## Signature-ideeën

1. **De twee-deuren-hero.** Twee blokken naast elkaar, verschillende kleur, verschillende
   toon, gelijke visuele zwaarte. Dit is geen designtruc maar een organisatiebeslissing die
   zichtbaar wordt gemaakt: wij dienen twee publieken en we verstoppen er geen.
2. **Bedrag vertaald naar iets fysieks, zonder te overdrijven.** Naast elk bedragknopje één
   regel: "€25 = één begeleid gesprek". Alleen als je de rekensom kunt onderbouwen. Verzin
   deze getallen nooit — vraag ze aan de organisatie en zet het jaartal erbij.
3. **De netto-kost naast de bruto-gift.** "Je gift van €40 kost je netto €28 na
   belastingvermindering." Dit is het enige stukje rekenwerk dat aantoonbaar het gemiddelde
   giftbedrag verhoogt, en het is in België feitelijk correct vanaf €40 per kalenderjaar.
4. **Transparantieblok dat naar de echte bron linkt.** Percentage, jaarrekening als pdf, en
   een link naar de Balanscentrale van de Nationale Bank. Dat laatste is een externe link naar
   een controle die je niet zelf beheert — precies daarom werkt hij.

## Vertrouwenselementen die er echt toe doen

| Element | Waarom het werkt | Plaatsing |
|---|---|---|
| Jaarrekening en jaarverslag, zichtbaar en downloadbaar | Een vzw die haar cijfers moet publiceren maar ze wegstopt, roept precies de vraag op die ze wil vermijden. Zichtbaar publiceren is het goedkoopste vertrouwen dat er bestaat | Eigen sectie op de homepage én in de footer, met jaartal en bestandsgrootte |
| Verdeling van de middelen als één zin plus één balk | "Van elke 10 euro gaat 8,20 euro rechtstreeks naar zorg" is begrijpelijker dan een taartdiagram met zeven segmenten | Boven de doneerflow, niet erna |
| Fiscaal attest expliciet uitgelegd | Vanaf €40 per kalenderjaar, 45% belastingvermindering, attest volgt automatisch. Wie dit niet uitlegt, laat gemiddeld bedrag liggen | Bij de bedragkeuze, en als eigen FAQ-pagina |
| Ondernemingsnummer, vzw-vorm en zetel | Verifieerbaarheid. Iemand die twijfelt, zoekt het nummer op in de Kruispuntbank | Footer, als tekst |
| Erkenningen en labels, met nummer | Erkenning voor fiscale attesten door de FOD Financiën, of een kwaliteitslabel met registratienummer | Footer, klein, geen badgemuur |
| Namen en gezichten van het team | Een organisatie zonder zichtbare mensen leest als een doorgeefluik | Over-pagina, echte foto's, functie erbij |
| Getuigenis met naam, leeftijd en foto | Een anoniem citaat overtuigt niemand. Als anonimiteit nodig is, zeg dan waarom en gebruik geen stockportret | Eigen sectie, één per pagina |
| Wat er gebeurt na de aanvraag, in stappen met termijn | "Je krijgt binnen 2 werkdagen een telefoontje van een begeleider" haalt de grootste drempel weg | Direct onder het aanmeldformulier |

## Wat hier absoluut niet mag

| Nooit | Waarom | In plaats daarvan |
|---|---|---|
| Schuld-inducerende tekst | "Zonder jou kan Lena niet verder" maakt de lezer verantwoordelijk voor iemands lot. Het werkt op korte termijn en vernietigt vertrouwen op lange termijn | "€25 betaalt één begeleid gesprek." Feit, geen verwijt |
| Stockfoto's van verdriet | Herkenbaar, dus ongeloofwaardig, en het maakt lijden decoratief | Eigen reportagefotografie, mensen die iets doen, oogcontact |
| Zwart-wit of ontkleuring van portretten | Estheticeert leed en zet de persoon in het verleden | Foto's in kleur, één consistente grade |
| Aftellende teller of "nog X uur" | Crowdfundingtrucs ondermijnen precies de rust die deze sector nodig heeft | Een doel met een stand, zonder klok |
| Doneerflow van meer dan twee stappen | Elke extra stap kost donaties, en het gaat om kleine bedragen | Stap 1: bedrag en frequentie. Stap 2: gegevens en betaling. Klaar |
| Rijksregisternummer vragen zonder uitleg | Het is nodig voor het automatisch fiscaal attest, maar zonder uitleg voelt het als datahonger | Eén zin ernaast: waarvoor het dient en dat het wettelijk verplicht is |
| Popup-overlay met doneervraag bij het openen | De helft van je bezoekers zoekt hulp. Je vraagt hen om geld | Doneerknop in de header, permanent, zonder overlay |
| De hulproute onder de donatieroute zetten | De organisatie bestaat voor de eerste groep | Hulp eerst op mobiel, gelijkwaardig op desktop |
| Verzonnen of afgeronde impactcijfers | In een gereguleerde, subsidieerbare sector is dit een reëel risico | Alleen cijfers uit het jaarverslag, met jaartal |
| Chatbot in plaats van een telefoonnummer | Wie in crisis is, typt niet | Gratis nummer, openingsuren, en de wachttijd als je die kent |

## Conversie

**Doel.** Twee doelen, apart gemeten, nooit tegen elkaar geoptimaliseerd:
- Hulproute: aanvraag ingediend of gebeld
- Steunroute: gift voltooid, of vrijwilligersaanmelding

**Primaire CTA, letterlijk:**
- Steunroute in de header: `Doneer`
- Steunroute in de flow, stap 1: `Ga verder`, stap 2: `Bevestig mijn gift van €40`
- Hulproute: `Vraag hulp aan` — nooit "Contacteer ons", want dat suggereert een gesprek met
  een organisatie in plaats van hulp voor jou
- Bij een gratis dienst: `Gratis aanvragen` — het woord gratis in de knop verwijdert de
  grootste twijfel

**Secundaire actie.** `Word vrijwilliger →`, `Lees Lena's verhaal →`, `Bekijk de jaarrekening →`.
Tekstlinks, `#14403A`, onderstreept met 1px offset. Nooit een tweede gevulde knop naast de
doneerknop.

**Plaatsing.** Doneerknop in de header vanaf scroll 0, en herhaald direct na het
transparantieblok — dat is het moment waarop de twijfel is weggenomen. De hulproute krijgt
een permanent zichtbaar telefoonnummer in de header op desktop en een sticky balk op mobiel.

**Doneerflow, stap voor stap.** Stap 1: frequentie (eenmalig / maandelijks, maandelijks
voorgeselecteerd), bedrag (vijf presets, laagste €10, en een eigen-bedragveld), en de zin over
het fiscaal attest. Stap 2: voornaam, naam, e-mail, adres, rijksregisternummer met uitleg,
betaalkeuze (Bancontact eerst, dan kaart, dan domiciliëring). Toon op beide stappen dezelfde
voortgangsindicator en het gekozen bedrag.

## Referenties

- **[komoptegenkanker.be/over-ons/je-geld-goed-besteed](https://www.komoptegenkanker.be/over-ons/je-geld-goed-besteed)**
  — de besteding staat er als één begrijpelijke zin ("van elke 10 euro gaat meer dan 8 euro
  rechtstreeks naar preventie, onderzoek, zorg en patiëntenrechten") met daarnaast de harde
  bedragen per bestemming en het opgehaalde totaal, in plaats van als een taartdiagram dat je
  moet interpreteren.
- **[komoptegenkanker.be/fiscale-attesten](https://www.komoptegenkanker.be/fiscale-attesten)** —
  legt op een eigen pagina uit waarom het rijksregisternummer wordt gevraagd en wat er gebeurt
  als je het niet geeft, zodat de meest verdachte vraag in het formulier vooraf al beantwoord is.
- **[charitywater.org](https://www.charitywater.org/)** — koppelt één ondubbelzinnige belofte
  ("100% van je gift gaat naar waterprojecten", met private donoren die de werking betalen) aan
  een projectkaart met GPS-coördinaten, zodat de belofte controleerbaar wordt in plaats van
  alleen gesteld.
- **[bednet.be](https://www.bednet.be/)** — de aanmeldroute domineert de pagina met een knop die
  het belangrijkste bezwaar in de knoptekst zelf wegneemt ("Gratis Bednet aanvragen"), en de
  getuigenissen zijn drie herkenbare mensen met naam en situatie in plaats van anonieme citaten.

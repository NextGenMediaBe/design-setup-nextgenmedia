# Tandarts, huisarts en praktijk

## Wat de bezoeker echt komt doen

- **Een afspraak maken of het telefoonnummer vinden.** Vaak met pijn, vaak buiten kantooruren,
  vaak op een telefoon. Dit is 70% van het verkeer en het verdient 70% van de aandacht.
- **Uitzoeken of ze vandaag terechtkunnen.** "Wanneer is de eerstvolgende vrije plaats" is de
  echte vraag achter elk bezoek aan een praktijksite.
- **Het wachtdienst- of spoednummer zoeken** op zondagavond, met kiespijn. Dat nummer moet
  vindbaar zijn zonder te navigeren.
- **Weten wat het kost en wat de mutualiteit terugbetaalt.** Geconventioneerd of niet is voor
  veel patiënten de beslissende factor, en het is precies wat de meeste sites verzwijgen.
- **Zien wie hen gaat behandelen.** Een gezicht en een naam nemen meer angst weg dan drie
  paragrafen over apparatuur.
- **Praktische obstakels oplossen:** parking, tram, rolstoeltoegang, eerste bezoek, wat
  meebrengen (eID, verwijsbrief, klevertjes).

## De emotionele opdracht

De bezoeker is licht angstig en tegelijk geïrriteerd door de administratie. Weg te nemen: de
spanning voor pijn, voor de rekening, en voor het gevoel er als een nummer doorgejaagd te
worden. Op te wekken: rust en het idee dat hier alles al is geregeld en dat hij niets fout kan
doen. De site moet klinken als iemand die kalm uitlegt wat er gaat gebeuren, in korte zinnen,
zonder jargon en zonder verkooptoon. Ruimte is hier geen esthetiek maar een middel: een
volgestouwde pagina verhoogt letterlijk de hartslag van iemand die al gespannen is. Vriendelijk
maar volwassen: de bezoeker is geen kind en wil niet als kind toegesproken worden.

## Typografie

| Rol | Voorstel | Waarom |
|---|---|---|
| Display | **Instrument Sans** 600, clamp(32px, 4vw, 54px), `-0.02em`, `line-height: 1.12` | Humanistisch, licht open, niet geometrisch. Rustig zonder braaf te worden |
| Kop 2/3 | **Instrument Sans** 600, 26/20px, `-0.01em`, `line-height: 1.25` | Klein type-contrast is hier juist: grote sprongen voelen dringend, en dringend is precies wat je niet wil |
| Body | **Source Sans 3** 400, 18px/1.7, `max-width: 66ch` | Grote x-hoogte, uitstekend leesbaar voor oudere ogen. 18px is de ondergrens, niet 16 |
| Uren en tarieven | **IBM Plex Mono** 400, 14px, `font-variant-numeric: tabular-nums` | Openingsuren en euro's onder elkaar uitgelijnd. Een tarieventabel die niet uitlijnt, leest als onbetrouwbaar |
| Utility / labels | **Instrument Sans** 500, 12px, `letter-spacing: 0.10em`, uppercase | Sectielabels en badges, klein en stil |

Regelafstand is overal ruim (1.65–1.75) en alinea's zijn maximaal 3 zinnen. Kop-tot-body-sprong
blijft klein: dit is de institutionele richting uit `art-direction.md`, verzacht.

## Palet

| Kleur | Hex | Herkomst |
|---|---|---|
| Ground | `#FCFBF9` | Een gipsmodel van een gebitsafdruk, en gesteriliseerd linnen. Warm gebroken wit, nooit `#FFFFFF` |
| Inkt | `#1E2A2E` | De inkt in het papieren patiëntendossier. Donker, maar niet zwart: contrast 15:1 zonder hardheid |
| Accent | `#3E7E77` | De blauwgroene doek van een operatieschort. Die kleur is in OK's gekozen als complement van bloed. Ze kalmeert het oog letterlijk |
| Rustvlakken | `#D9E6E2` | Matglas van een praktijkdeur. Achtergrond van het tarievenblok en het afsprakenkader |
| Spoedrood | `#B4472F` | De rode band op de spoedkoffer. **Uitsluitend** voor het wachtdienstnummer, nergens anders |
| Instrumentgrijs | `#7E8B8A` | Geborsteld RVS van een instrumententafel. Secundaire tekst en 1px-randen |

Randen zijn alpha: `color-mix(in oklch, #7E8B8A 30%, transparent)`. Schaduwen zijn zacht,
gekleurd en laag: `0 1px 2px rgb(30 42 46 / 0.05), 0 8px 24px rgb(30 42 46 / 0.04)`, nooit
puur zwart.

**Vermijd:** `#00B4D8` en verwanten, het "medische cyaan" dat op elke tandartstemplate staat;
tandpasta-mint met wit-glinstering; en elk verloop. Ook vermijden: rood voor iets anders dan de
spoedlijn. Als alles rood mag, betekent rood niets meer.

## Layoutprincipe

Rust als functie: één handeling per scherm, en de praktische informatie altijd binnen bereik.

```
┌──────────────────────────────────────────────────────────────┐
│ PRAKTIJK      TEAM  AFSPRAAK  TARIEVEN  CONTACT              │
│                             WACHTDIENST 0903 39 969  ◀ #B4472F│
├──────────────────────────────────────────────────────────────┤
│                                                              │
│   Tandartspraktijk in Deurne                                 │
│   Vandaag open tot 18:00 · eerstvolgende plaats: di 29/7     │
│                                                              │
│   [ Maak een afspraak ]        Bel 03 500 91 00              │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  HET TEAM                                                    │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐     1:1 portret      │
│  │ foto │  │ foto │  │ foto │  │ foto │     zelfde licht     │
│  └──────┘  └──────┘  └──────┘  └──────┘     zelfde achtergr. │
│   Ann       Joris     Nadia     Wim                          │
│   tandarts  parodont. tandarts  mondhyg.                     │
│   RIZIV 1-… geconv.   geconv.   niet-geconv.                 │
├──────────────────────────────────────────────────────────────┤
│  WAT KOST HET                                                │
│  Behandeling      │ Ereloon │ RIZIV │ U betaalt              │
│  Consultatie      │  30,12  │ 26,10 │   4,02                 │
│  Jaarlijks nazicht│  ...    │  ...  │   ...                  │
│  "Indicatief, op basis van standaardbehandelingen."          │
├──────────────────────────────────────────────────────────────┤
│  EERSTE KEER HIER   wat meebrengen · hoeveel tijd · verloop  │
├──────────────────────────────────────────────────────────────┤
│  ADRES + KAART · parking · tram 10 · openingsuren per dag    │
└──────────────────────────────────────────────────────────────┘
```

Ritme: secties van `py-24` desktop / `py-14` mobiel, gescheiden door witruimte alleen: geen
lijnen, geen kaarten, geen afwisselende achtergrondkleuren. Eén uitzondering: het tarievenblok
en het spoedblok krijgen `#D9E6E2` als vlak, omdat ze eruit mogen springen.
Op mobiel staat het wachtdienstnummer als eerste element boven de logo-balk, in een strook van
40px op `#B4472F` met witte tekst en een `tel:`-link. Daaronder de hero, dan het team.
De afspraakknop wordt géén vaste onderbalk: een blijvend zwevende knop verhoogt de spanning.
Eén keer in de hero en één keer onderaan volstaat.
Portretten zijn 1:1, allemaal door dezelfde fotograaf, zelfde achtergrond, zelfde ooghoogte.
Zonder die consistentie leest een teampagina als een LinkedIn-collage.

## Signature-ideeën

1. **Een echte statusregel in de hero:** "Vandaag open tot 18:00 · eerstvolgende vrije plaats:
   dinsdag 29/7". Gegenereerd uit het agendasysteem, met een fallback op statische
   openingsuren. Dit is het enige element dat de vraag beantwoordt waarmee bijna iedereen komt.
2. **Een tarieventabel met vier kolommen** (behandeling, ereloon, tussenkomst RIZIV, wat u zelf
   betaalt), inclusief de zin dat het om standaardbehandelingen gaat. Vrijwel geen enkele
   praktijk doet dit; wie het wel doet, wordt onmiddellijk als eerlijk gelezen.
3. **"Eerste keer hier" als een genummerd verloop van vier stappen**, met tijdsduur per stap:
   aanmelden (2 min) → intakegesprek (10 min) → onderzoek (20 min) → plan en prijs (5 min).
   Angst is grotendeels onzekerheid over de volgorde; de volgorde tonen neemt ze weg.
4. **Foto's van de behandelruimte zonder mensen erin.** Leeg, licht, opgeruimd. Wie bang is,
   wil de kamer zien voordat hij erin zit. Een lachend stockmodel in een stoel doet het
   omgekeerde.

## Vertrouwenselementen die er echt toe doen

| Element | Waarom het werkt in deze sector |
|---|---|
| Naam, foto en RIZIV-nummer per zorgverlener | Het RIZIV-nummer is publiek verifieerbaar. Het is het goedkoopste bewijs van echtheid dat bestaat |
| Vermelding geconventioneerd / niet-geconventioneerd per behandelaar | Bepaalt rechtstreeks wat de patiënt betaalt. Verzwijgen wordt gelezen als "duur" |
| Wachtdienst- of spoednummer met uren waarop het bemand is | Een nummer zonder uren maakt de paniek erger in plaats van kleiner |
| Openingsuren per dag, uitgeschreven, plus sluitingsperiodes | Voorkomt de helft van alle telefoons naar het onthaal |
| Annulatievoorwaarden expliciet vermeld | Klinkt streng, maar leest als een praktijk die haar agenda beheert, en dus stipt is |
| Betaalmiddelen (Bancontact, cash, derdebetaler) | Voorkomt een pijnlijk moment aan de balie. Derdebetalersregeling is voor sommigen doorslaggevend |
| Wat meebrengen: eID, klevertjes, verwijsbrief, medicatielijst | Concrete geruststelling: de patiënt kan niets fout doen |
| Erkenning of bijzondere beroepstitel (parodontologie, orthodontie) | Alleen vermelden waar hij echt geldt, per persoon, niet als praktijkclaim |

Geen ledenlogo's van beroepsverenigingen in kleur op de homepage. Als ze er staan: klein,
grijs, in de footer.

## Wat hier absoluut niet mag

| Nooit | Waarom | In plaats daarvan |
|---|---|---|
| Donkere modus of donkere secties | Een donkere medische site leest als een kliniek 's nachts; het verhoogt spanning bij precies het publiek dat je moet kalmeren | Eén lichte grond `#FCFBF9`, overal |
| Felle accenten, neon, hoge chroma | Alarmerend. Fel = urgentie = angst | Eén gedempt accent `#3E7E77`, en rood alleen voor spoed |
| Neo-brutalisme: dikke zwarte randen, harde offset-schaduwen, schreeuwend display | Signaleert "creatief bureau", niet "zorgverlener". Ondermijnt de bevoegdheidsclaim | Randen 1px alpha, radius 6–8px, zachte lage schaduw |
| Stockfoto van een lachende vrouw in een tandartsstoel | Iedereen weet dat niemand daar lacht. De leugen besmet de rest van de pagina | Echte portretten van het echte team, en lege behandelruimtes |
| Voor/na-foto's van gebitten op de homepage | Medisch-esthetische claims zijn in België aan strikte reclameregels gebonden, en het schuift een verkoopdoel voor een zorgvraag | Behandelingen uitleggen in tekst; beeldmateriaal achter een aparte, gelabelde pagina |
| Chatbot of pop-up met "Kan ik u helpen?" | Onderbreekt iemand die pijn heeft en een nummer zoekt | Telefoonnummer en afspraakknop, statisch en altijd zichtbaar |
| Tandarts-illustraties, cartoontanden, mascottes | Kinderlijk. De volwassen patiënt leest het als amateurisme | Echte fotografie, of geen beeld |
| Medisch jargon zonder vertaling ("apicectomie") | Verhoogt onzekerheid precies waar je ze moet verlagen | Vakterm plus één zin gewone taal ertussen haakjes |
| "Uw glimlach is onze passie" | Slogantaal in een zorgcontext leest als commercie | "Elke werkdag open van 8u30 tot 18u. Spoed ook op zaterdagvoormiddag." |

## Conversie

**Primair doel:** een ingeplande afspraak in het agendasysteem, of een gesprek met het onthaal.
Voor praktijken met een patiëntenstop verschuift het doel naar het beantwoorden van de vraag
"kan ik hier terecht" zonder telefoon. Dat spaart de praktijk meer dan het je kost.

**Primaire CTA:** `Maak een afspraak`, de standaardformulering in Vlaanderen, dus meteen
begrepen. Voor praktijken die alleen telefonisch werken: `Bel 03 500 91 00`, met het nummer
letterlijk in de knop, want een knop met een nummer erin wordt op mobiel direct getikt.
Nooit: "Contacteer ons", "Start hier", "Boek nu".

**Secundaire actie:** `Bekijk de tarieven` of `Nieuwe patiënt? Lees dit eerst` als tekstlink.
Het wachtdienstnummer is géén CTA maar een permanent zichtbaar gegeven in de header.

**Waar de CTA staat:** in de hero direct onder de statusregel; aan het einde van het teamblok
(daar is de geruststelling net gelukt); onderaan de tarievenpagina; en in de footer naast de
openingsuren. Het afspraakformulier vraagt maximaal vier velden: naam, telefoon, reden,
voorkeursmoment. Geen rijksregisternummer, geen medische voorgeschiedenis, geen bestandsupload.
Dat is bijzondere persoonsgegevensverwerking en hoort in het beveiligde patiëntendossier,
niet in een webformulier.

## Referenties

- **[adenta.eu](https://www.adenta.eu)**: de vier tandartsen én de vier assistenten staan
  allemaal met foto en voornaam op de site, elk met de specialisaties eronder uitgeschreven,
  zodat de bezoeker vooraf weet wie hij tegenover zich krijgt; het wachtdienstnummer
  (0903 399 69) staat als apart nummer mét het venster 9:00–18:00 vermeld, los van het gewone
  praktijknummer.
- **[maesveld.be](https://maesveld.be)**: het wachtdienstnummer 011/60 40 60 krijgt een eigen
  sectie halverwege de pagina én staat opnieuw in de footer, dus je vindt het zonder navigatie
  vanaf welk scrollpunt ook; "Maak een afspraak" is als enige knoptekst consequent
  doorgetrokken over navigatie en pagina.
- **[bitewing.be/tarieven](https://www.bitewing.be/tarieven/)**: de tarieven staan in een
  tabel met aparte kolommen voor maximumereloon, RIZIV-tussenkomst, remgeld en supplement, en
  met afzonderlijke rijen voor gewone verzekerden en verhoogde tegemoetkoming; onder de tabel
  staat letterlijk dat de bedragen op standaardbehandelingen slaan en indicatief zijn.

# Events, DJ en creatieve dienstverlening

Van alle zestien playbooks mag hier het esthetische risico het grootst zijn. Dit is de enige
sector waar een gebroken raster, kinetische typografie en harde motion de opdracht *dienen*
in plaats van ondermijnen. Maar het experiment zit uitsluitend in de presentatie. De agenda,
de ticketflow en het boekingsformulier blijven doodeenvoudig. Daar wordt niets gebroken.

Houd dat onderscheid gedurende het hele project vast:

| Laag | Regel |
|---|---|
| Presentatie: hero, over, portfolio, editorial, footer | Neem risico. Overlap, crop, marquee, scramble, oversized display |
| Functie: agenda, tickets, boekingsformulier, prijzen, contact | Saai en voorspelbaar. Links uitgelijnd, één kolom, standaard formuliergedrag |

Als een bezoeker op de agenda staat en niet meteen weet welke datum uitverkocht is, heeft de
art direction gewonnen van de site. Dat is een defect, geen stijlkeuze.

## Wat de bezoeker echt komt doen

Er zijn drie totaal verschillende bezoekers en ze delen één homepage:

1. **De bezoeker van het evenement.** Wil datum, locatie, deuren open, line-up, ticketprijs
   en of het uitverkocht is. Komt vaak via Instagram, op een telefoon, staand.
2. **De boeker.** Programmator, bruidspaar, marketingmanager, eventbureau. Wil bewijs dat je
   dit eerder gedaan hebt, wil weten of je vrij bent op één specifieke datum, en wil een
   prijsindicatie zonder te moeten bellen.
3. **De vakgenoot.** Andere DJ, fotograaf, bookingagent. Kijkt naar smaak. Blijft twee
   minuten, kijkt naar de line-up-archieven en de credits.

Bouw voor 1 en 2. Bezoeker 3 wordt automatisch bediend als de art direction klopt.

## De emotionele opdracht

Laat voelen dat er een *avond* aan de andere kant zit, niet een dienstenpakket. Een site die
"wij verzorgen uw evenement van A tot Z" zegt, verkoopt logistiek. Een site die de zaal om
kwart voor twee laat zien, verkoopt de reden dat men boekt.

Het gevoel dat je moet raken is **anticipatie met bewijs erachter**. Anticipatie zonder
bewijs is een flyer. Bewijs zonder anticipatie is een cv.

## Typografie

| Rol | Voorstel | Waarom |
|---|---|---|
| Display / line-up | **Monument Extended** 800, `clamp(3.5rem, 11vw, 9rem)`, `tracking: -0.03em`, `line-height: 0.86` | Extended letters vullen de breedte van een affiche. Op 0.86 raken de regels elkaar bijna. Dat is het affichegevoel |
| Alternatief gratis | **Archivo Expanded** 700 via de width-as (`font-stretch: 125%`) | Variabele breedte-as, dus je kunt per regel de zetbreedte optisch corrigeren |
| Sectiekop | **PP Neue Machina** 500, 28–40px, `tracking: -0.01em` | Vierkante schouders, leest technisch. Houdt de display in toom |
| Body | **Suisse Int'l** 400, 17px, `line-height: 1.6`, max 62ch | Neutraal genoeg om onder een schreeuwende display niet mee te schreeuwen |
| Data, tijden, prijzen | **JetBrains Mono** 500, 14px, `tracking: 0.04em`, `font-variant-numeric: tabular-nums` | Datums onder elkaar in een agenda moeten kolomsgewijs uitlijnen. Zonder tabular-nums doen ze dat niet |
| Micro-label (SOLD OUT, 18+, DEURS 22:00) | **JetBrains Mono** 700 uppercase, 11px, `tracking: 0.14em` | Leest als een stempel, niet als tekst |

Regel: **de display staat nooit in een paragraaf.** Zodra er meer dan zeven woorden in staan,
zak je naar de sectiekop. Extended lettertypen op paragraafgrootte zijn onleesbaar.

## Palet

| Hex | Herkomst | Gebruik |
|---|---|---|
| `#0C0C0D` | Zwartblauw van een clubmuur onder werklicht na sluiting. Bewust niet `#000`, want puur zwart laat het rood trillen | Grond, ~70% van het scherm |
| `#F4F1E8` | Ongecoat affichepapier 120 g, zoals de flyers op de toog liggen | Tekst op de donkere grond, en de grond van de agenda-sectie |
| `#FF3B14` | Signaalrood van een spuitbusstencil op ruw beton | Accent. Primaire CTA, actieve nav, één woord in de hero |
| `#6E6A5E` | Verschoten karton van een oude ticketstub | Metadata, credits, uitgespeelde datums |
| `#D8FF3E` | Highlighter op een geprinte line-up | **Tweede accent, met reden:** uitsluitend status, "LAATSTE TICKETS", "EXTRA SHOW". Nooit decoratief, nooit als achtergrond |

**Vermijd:** paars-naar-roze verlopen, neonglow-`box-shadow`, glassmorphism-kaarten, een
donkere achtergrond met een blauwe halo. Dat is precies de look van elke gegenereerde
"nightlife"-template. Vermijd ook pure `#000` en pure `#FFF` naast elkaar: te hard, en het
maakt de foto's dof.

## Layoutprincipe

Eén brede kolom die het raster bewust op drie plekken breekt, met een agenda die er
volstrekt niet aan meedoet.

```
┌──────────────────────────────────────────────────────────┐
│ LOGO            werk  agenda  over          [ BOEK ]     │  ← sticky, 64px, wordt solid na 80px scroll
├──────────────────────────────────────────────────────────┤
│                                                          │
│   NACHT-                     ┌──────────────┐            │
│   PROGRAM-  ──────────────►  │  foto loopt  │            │  ← display crops rechts weg,
│   MATIE                      │  BUITEN de   │            │    foto bleedt uit de container
│   ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁      │  container ──┼───────────►│
│   één zin, 20 woorden max    └──────────────┘            │
│   [ BEKIJK DE AGENDA ]   showreel →                      │
├──────────────────────────────────────────────────────────┤
│ ◄── MARQUEE: namen van eerdere acts, 40s loop, pauzeert ──►│  ← 1 van de 2 motionmomenten
├──────────────────────────────────────────────────────────┤
│  AGENDA: hier stopt het experiment                       │
│  ┌────────────────────────────────────────────────────┐  │
│  │ za 12 sep 26 │ Naam van de act   │ Zaal │ TICKETS  │  │
│  │ vr 18 sep 26 │ Naam van de act   │ Zaal │ UITVERK. │  │  ← platte rijen, links uitgelijnd,
│  │ za 03 okt 26 │ Naam van de act   │ Zaal │ TICKETS  │  │    1px hairline #F4F1E8 op 12% alpha
│  └────────────────────────────────────────────────────┘  │
│                            alle datums →                 │
├──────────────────────────────────────────────────────────┤
│  WERK: asymmetrisch, 2/3 · 1/3 · vol · 1/2 rechts        │  ← wisselende kolombreedtes,
│  ┌────────────┐┌────┐                                    │    verticale offsets van 0/64/24px
│  │            ││    │      ┌──────────────────────┐      │
│  └────────────┘└────┘      └──────────────────────┘      │
├──────────────────────────────────────────────────────────┤
│  BOEKEN: één kolom, max-w 560px, gecentreerd             │  ← saai, en dat is de bedoeling
├──────────────────────────────────────────────────────────┤
│  FOOTER: adres, btw, credits fotografie, socials         │
└──────────────────────────────────────────────────────────┘
```

**Ritme.** Secties `py-32` op desktop, behalve de agenda: die krijgt `py-20`, want ze moet
compacter aanvoelen dan de rest. Twee opeenvolgende secties nooit dezelfde achtergrond. De
wissel donker/papier is de sectiescheiding, niet een border.

**Mobiel.** Display naar `clamp(2.5rem, 14vw, 4rem)`, `line-height: 0.92`. Het gebroken
raster wordt één kolom: offsets vervallen volledig, alleen de wisselende beeldhoogtes
blijven (4:5, 1:1, 3:4 afwisselend) zodat het ritme overleeft zonder te breken. De marquee
blijft, maar op 60s in plaats van 40s. De agenda wordt een stapel kaarten van 88px hoog met
de datum links in mono en de status rechts. Boekingsformulier: velden vol breed, 52px hoog.

## Signature-ideeën

1. **Line-up als typografisch affiche, niet als lijst.** Zet de namen op grootte naar
   speelduur of positie in de line-up, over vijf regels, met `text-wrap: balance` uit en
   handmatige regelbreuken. Elke naam is een link naar de artiestenpagina. Dit is één
   HTML-blok en het is het meest gedeelde beeld van de hele site.
2. **De datumtegel die zichzelf doorstreept.** Wanneer een datum uitverkocht is, blijft de
   rij staan maar krijgt hij `#6E6A5E` tekst en een 2px `#FF3B14` lijn door de artiestnaam.
   Verwijder verkochte datums nooit: een agenda met doorstreepte regels is het sterkste
   sociale bewijs dat er bestaat.
3. **Archief per jaar, op één pagina.** `/archief` met alle eerdere data als één lange
   mono-lijst: `2026 · 41 dates`, daaronder de regels. Geen kaarten, geen foto's. Vier jaar
   werk in één scroll leest indrukwekkender dan een portfoliogrid van twaalf items.
4. **Beschikbaarheidscheck in het formulier, niet ervoor.** Eén datumveld bovenaan het
   boekingsformulier dat direct antwoordt met "vrij", "onder optie" of "bezet". Dit is de
   enige plek waar functionele techniek meer waard is dan een visueel idee.

## Vertrouwenselementen die er echt toe doen

| Element | Waarom het werkt | Plaatsing |
|---|---|---|
| Doorstreept archief van eerdere data | Bewijst volume en continuïteit zonder één woord marketing | Eigen pagina, gelinkt vanuit agenda en footer |
| Namen van zalen en festivals waar je speelde | Een programmator herkent de namen en weet meteen het niveau | Onder de hero, klein, `#6E6A5E`, geen logo's tenzij je licentie hebt |
| Foto's mét fotograafcredit | Credits signaleren dat het echte reportagebeelden zijn, geen stock | Bij elk beeld, 11px mono onder de foto |
| Technische fiche als download | Rider, stroombehoefte, podiumplan. Een boeker die dit vindt, belt niet meer om het te vragen | Op de boekingspagina, PDF met bestandsgrootte vermeld |
| Videofragment van 20 seconden | Publiek in beeld is het enige bewijs van sfeer dat niet te faken is | In de hero als muted loop, of één klik weg |
| Btw-nummer en zetel | Een boeker heeft dit nodig voor de factuur en checkt of je bestaat | Footer |

## Wat hier absoluut niet mag

| Nooit | Waarom | In plaats daarvan |
|---|---|---|
| Autoplay met geluid | Bezoeker zit op kantoor of in de trein. Sluit de tab binnen een seconde | Muted loop, met een zichtbare geluidsknop rechtsonder |
| Een intro-animatie voor je de site ziet | Kost 1,5–3 seconden LCP en wordt bij elk bezoek opnieuw getoond | Reveal ná paint: content staat in de DOM, animeert daarna |
| Experiment in de agenda of het formulier | Een boeker die de datum niet vindt, mailt niet. Die belt de concurrent | Agenda plat en links uitgelijnd, formulier standaard |
| WebGL-hero of particle-achtergrond | Blaast het performancebudget op voor iets dat een foto beter doet | Eén sterke foto, `priority`, met scrim |
| "Bekijk portfolio" als CTA | Een boeker wil boeken, niet browsen | "Check je datum" of "Vraag een offerte" |
| Line-up alleen als gedeelde Instagram-afbeelding | Niet doorzoekbaar, niet leesbaar met een screenreader, niet vindbaar in Google | Echte HTML-tekst; de affiche-look maak je met CSS |
| Uitverkochte datums verwijderen | Je gooit je beste sociale bewijs weg | Laten staan, doorstrepen |
| Motion op meer dan twee momenten per pagina | Alles beweegt betekent dat niets opvalt | Marquee + één reveal. Alles respecteert `prefers-reduced-motion` |

## Conversie

**Doel.** Twee gescheiden doelen op één site, niet in elkaar geschoven:
- Publiek → tickets kopen (uitgaand verkeer naar de ticketpartner)
- Boeker → aanvraag met datum, type evenement en budgetindicatie

**Primaire CTA** verschilt per publiek en dat mag zichtbaar zijn:
- In de header, altijd: `Boek ons` (gevuld, `#FF3B14`, 44px hoog)
- In de agenda per rij: `Tickets` (outline, 1px, `#F4F1E8` op 30% alpha)
- Onderaan de boekingspagina: `Verstuur aanvraag`

**Secundaire actie.** Tekstlink met pijl, nooit een tweede gevulde knop:
`Bekijk de showreel →` in de hero, `Alle datums →` onder de agenda.

**Plaatsing.** CTA in de header vanaf scroll 0. Herhaling na de werk-sectie. Het formulier
staat op een eigen pagina *en* als sectie onderaan de homepage. Mensen die scrollen willen
niet klikken. Formulier: naam, e-mail, datum, type evenement, budgetrange als select. Vijf
velden, niet meer. Budget als range-select en niet als vrij veld, anders vult niemand het in.

**Mobiel.** Onderaan het scherm een balk van 56px met links `Agenda` en rechts `Boek ons`,
verschijnt na 400px scroll. Raakvlakken minstens 48px.

## Referenties

- **[horstartsandmusic.com](https://www.horstartsandmusic.com/)**: de navigatie is opgedeeld
  in vier werkelijkheden (Festival, Club, Atelier, Park) in plaats van in paginatypes, met een
  tweede menu voor Archive, Editorial, FAQ en Jobs; daardoor kan de bovenste laag experimenteel
  blijven terwijl alles wat je echt moet vinden één laag dieper netjes staat.
- **[pukkelpop.be](https://www.pukkelpop.be/nl)**: de line-up staat als horizontale carrousel
  van artiestkaarten met de speeldatum in het kaartje zelf ("zo 23 aug"), zodat je van elke naam
  direct de dag weet zonder naar een apart schema te moeten.
- **[abconcerts.be/nl/agenda](https://www.abconcerts.be/nl/agenda)**: elke agenda-rij heeft
  precies drie mogelijke statussen (Koop tickets, Uitverkocht, Afgelast) en het datumformaat is
  overal identiek ("zo 30 aug 26"), waardoor twintig pagina's concerten zonder nadenken te
  scannen zijn.
- **[basedesign.com](https://basedesign.com/)** splitst het werk in Feed, Projects en Index:
  drie manieren om naar hetzelfde archief te kijken, zodat een bezoeker die iets zoekt en een
  bezoeker die rondkijkt niet dezelfde weergave moeten delen.

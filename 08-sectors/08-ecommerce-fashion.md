# E-commerce en fashion

## Wat de bezoeker echt komt doen

- Scannen. Ze loopt in twee seconden over een raster van dertig producten en stopt bij één
  beeld. Ze leest geen productnamen; ze herkent een vorm.
- Filteren op maat en op kleur, en meteen zien dat er nog iets overblijft. Een filter die naar
  nul resultaten leidt zonder alternatief is het punt waarop ze vertrekt.
- Uitzoeken of het haar past. Ze zoekt de maattabel, de lengte van het model, en of iemand in
  de reviews schrijft dat het klein valt.
- De retourvoorwaarde controleren vóór ze bestelt, niet erna. Gratis retour is voor een groot
  deel van de aankopen de voorwaarde om überhaupt te durven bestellen.
- Vergelijken met wat ze in een ander tabblad heeft openstaan. Je concurrent staat letterlijk
  naast je.

## De emotionele opdracht

De aankoop is een gok en dat weet ze. Ze bestelt iets waarvan ze de stof niet kan voelen, in
een maat die per merk verschilt, van een pasvorm die op een model van 1m78 anders valt dan op
haar. Elke twijfel die je niet wegneemt, wordt uitgesteld gedrag: ze bewaart het, en koopt het
niet. Neem de gok weg met feiten in plaats van met sfeer: samenstelling van de stof, lengte
van het model plus de maat die het draagt, echte kleur onder neutraal licht, en de retour-
voorwaarde in dezelfde blik als de prijs. Wat je opwekt is geen begeerte — die brengt ze zelf
mee — maar de rust om op bestellen te drukken zonder eerst nog vijf minuten te googelen.

## Typografie

| Rol | Voorstel | Waarom |
|---|---|---|
| Display | Schibsted Grotesk 500, `tracking-[-0.02em]`, `leading-[1.05]`, 40–64px | Neutrale grotesk die de fotografie niet beconcurreert. In fashion is de kleding de stem; het lettertype hoeft er alleen niet tegenin te gaan. |
| Body en UI | Schibsted Grotesk 400, 15px in kaarten, 16px in lopende tekst, `leading-[1.55]` | Eén familie voor alles houdt een catalogus van duizend items consistent. Twee families vallen uit elkaar zodra er promoties bijkomen. |
| Prijs en maten | Schibsted Grotesk 500, `font-variant-numeric: tabular-nums`, 15px | In een raster staan prijzen onder elkaar in kolommen. Zonder tabulaire cijfers golft `€ 39,95` tegen `€ 129,00`. Verplicht op prijs, korting, maat, voorraad en levertijd. |
| Utility | Schibsted Grotesk 500, 11px, uppercase, `tracking-[0.1em]` | Maatlabels, `NIEUW`, `LAATSTE STUKS`, categoriekoppen, kruimelpad. |
| Optioneel redactioneel | Instrument Serif 400, alleen op campagnepagina's, 48–96px | Eén serif, uitsluitend buiten het winkelgedeelte. Nooit in het productgrid, nooit op de PDP. |

Streepjesprijzen: de oude prijs in 13px, kleur `#8A8378`, met `line-through`; de nieuwe prijs
in dezelfde 15px als een gewone prijs, in inktrood. Maak de nieuwe prijs nooit groter dan
gewone prijzen — dan schreeuwt elk gereduceerd item het raster kapot.

## Palet

| Kleur | Hex | Herkomst |
|---|---|---|
| Studiopapier | `#FAF9F6` | De rol achtergrondpapier in een fotostudio, licht crème onder neutraal licht. Paginabodem; witte kleding valt hier niet in weg zoals tegen `#FFF`. |
| Inkt | `#1A1714` | Textielstempelinkt op een wasetiket. Alle tekst en de primaire knop. |
| Ecru katoen | `#EAE4DA` | Ongeverfd katoenjersey. Vullingen, filterpillen in rust, skeletons tijdens laden. |
| Indigo | `#2E3A52` | Onbehandelde selvedge-denim voor de eerste wasbeurt. Secundaire tekst, actieve filterstaat, de rand rond een geselecteerde maat. |
| Karton | `#C6B49A` | De ongebleekte verzenddoos. Levering- en retourblokken, iconen. |
| Stempelrood | `#A32E22` | De rode inkt van een uitverkoopstempel op een prijskaartje. Uitsluitend voor prijsreducties en `nog 2 op voorraad`. Nooit voor een knop. |

**Vermijd:** felgeel met rood over de hele pagina, knipperende kortingsbadges op elke kaart,
en een tweede accentkleur voor "nieuw". Kortingsruis maakt van elk product een restpartij en
verlaagt de prijs die je voor de niet-gereduceerde helft van je collectie kunt vragen. Eén
kleur voor korting, en die kleur komt alleen voor waar er echt korting is.

## Layoutprincipe

Het product is de held en het raster is het meubel: één identiek gecropt beeld per item, in
een ritme dat zo regelmatig is dat afwijking betekenis krijgt.

```
┌────────────────────────────────────────────────────────────┐
│ Gratis retour in België · Voor 22u besteld, morgen in huis │  ← 36px strook, ecru
├────────────────────────────────────────────────────────────┤
│ LOGO    Nieuw  Dames  Heren  Merken  Sale     🔍  ♡  🛒 2  │  ← 64px, sticky
├────────────────────────────────────────────────────────────┤
│   [ campagnebeeld 21:9, één look, tekst in de linkerderde ]│
│     Zomercollectie          [ Shop de collectie ]          │
├────────────────────────────────────────────────────────────┤
│ Dames / Jassen                              412 artikelen  │  ← kruimelpad + telling
│ ┌──────────────────────────────────────────────────────┐   │
│ │ Maat ▾  Kleur ▾  Merk ▾  Prijs ▾      Sorteren ▾    │   │  ← sticky filterbalk 56px
│ └──────────────────────────────────────────────────────┘   │
│ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐                │
│ │  3:4   │ │  3:4   │ │  3:4   │ │  3:4   │                │  ← 4 koloms desktop
│ │ foto   │ │ foto   │ │ foto   │ │ foto   │                │
│ ├────────┤ ├────────┤ ├────────┤ ├────────┤                │
│ │ Merk   │ │ Merk   │ │ Merk   │ │ Merk   │                │  ← 11px caps
│ │ Naam   │ │ Naam   │ │ Naam   │ │ Naam   │                │  ← 15px
│ │ € 89,95│ │ € 59,95│ │ €129,00│ │ € 45,00│                │  ← tabulair
│ │ ●●●○   │ │ ●●     │ │ ●      │ │ ●●●●   │                │  ← kleurstippen 10px
│ └────────┘ └────────┘ └────────┘ └────────┘                │
│                (24 per pagina, dan Toon meer)              │
└────────────────────────────────────────────────────────────┘
```

Ritme: vier kolommen op ≥1280px, drie op 1024px, twee op mobiel. Kolomafstand 16px, rijafstand
32px — de extra ruimte tussen rijen laat het oog per rij scannen in plaats van per kolom.
Crop 3:4 op alles, geen enkele uitzondering; producten met vierkante packshots krijgen een
3:4-canvas met marge, niet hun eigen ratio. Geen kaartrand, geen schaduw, geen radius op de
foto: het raster wordt gedragen door de identieke crops.

**Dichtheid.** Twee kolommen op mobiel, niet één. Één kolom voelt genereus en verkoopt
slechter: de bezoeker scant en heeft vergelijkingsmateriaal in beeld nodig. Op desktop is vier
de bovengrens voor fashion; ga naar zes en de foto wordt te klein om stof te beoordelen. Laad
24 items en dan `Toon meer` met een knop — oneindig scrollen breekt de footer, de
terugnavigatie en je analytics. Reserveer de fotohoogte met `aspect-ratio: 3/4` vóór het beeld
laadt, anders schuift het hele raster en haal je de CLS-drempel van 0,1 niet.

**Filters.** Op desktop sticky bovenaan, niet in een linkerkolom die met de pagina wegscrolt.
Actieve filters staan als verwijderbare pillen onder de balk, met een `Wis alles`. Elke
filterwaarde toont het aantal resultaten erachter (`Maat 38 (47)`), en waarden met nul
resultaten worden uitgegrijsd, niet verborgen — verdwijnende opties lezen als een bug. Op
mobiel: één knop `Filter (2)` links en `Sorteren` rechts in een balk van 52px, die een bottom
sheet openen met een vaste knop `Toon 47 artikelen` onderaan.

**De PDP** heeft één volgorde en die wijkt nooit af: beeldgalerij links (minstens vijf beelden
— totaalbeeld, achterkant, detail van de stof, detail van sluiting of zoom, en één beeld
gedragen in situatie), rechts merk, naam, prijs, kleurkiezer, maatkiezer met `Maattabel` als
link ernaast, `In winkelmand`, en direct daaronder drie regels in kartonkleur: levertijd,
retourtermijn en verzendkosten. Daaronder pas de beschrijving, samenstelling (`80% wol, 20%
polyamide`), onderhoudsvoorschrift en de zin die de meeste retours voorkomt: `Model is 1m78
en draagt maat S`. Reviews onderaan, met filter op maat. De maatkiezer toont uitverkochte
maten als doorstreept en aanwezig, met de optie `Hou me op de hoogte` — dat is voorraadinfo,
en het verkoopt later.

**Belgische retourwetgeving.** Bij verkoop op afstand aan consumenten geldt een wettelijk
herroepingsrecht van 14 kalenderdagen, te tellen vanaf de dag na ontvangst van de goederen,
zonder opgave van reden. Je moet de klant vóór de aankoop informeren over dat recht en een
modelformulier voor herroeping ter beschikking stellen; doe je dat niet, dan loopt de termijn
door. Vermeld de termijn dus letterlijk op de PDP en in de winkelmand, niet alleen in een
voorwaardenpagina. Bied je meer aan dan het minimum — veel Belgische webshops hanteren 30
dagen en gratis retour in de winkel — zet dat dan bovenaan als strook, want het is een van je
sterkste conversieargumenten. Wie de wettelijke 14 dagen als commerciële troef presenteert,
verkoopt iets wat de klant sowieso al heeft; wie 30 dagen geeft, verkoopt iets extra.

## Signature-ideeën

1. **Maat-op-basis-van-wat-je-al-hebt.** Eén vraag bij de maatkiezer: welke maat draag je bij
   dit merk of bij een gangbaar referentiemerk. Antwoord is een aanbeveling met een reden
   (`valt klein uit, neem 40`). Vermindert retours meetbaar en is nuttiger dan elke
   maattabel.
2. **De stofzoom.** Eén beeld per product, altijd op dezelfde positie in de galerij: macro-
   opname van het weefsel bij 100%, met de samenstelling eronder. Het is de enige manier om
   een stof te tonen die je niet kunt aanraken, en bijna niemand doet het consequent.
3. **Reviews gefilterd op maat en lengte.** `Toon alleen reviews van maat 38` bovenaan het
   reviewblok. De review van iemand met hetzelfde postuur is honderd keer meer waard dan een
   gemiddelde van 4,6.
4. **Eén campagnepagina per seizoen die geen shop is.** Instrument Serif, volle beelden, geen
   prijs in beeld, met onderaan één raster `Shop de looks`. Zo houd je het merkverhaal en het
   winkelgedeelte gescheiden en blijft het raster rustig.

## Vertrouwenselementen die er echt toe doen

| Element | Waarom het werkt in deze sector |
|---|---|
| Retourtermijn en verzendkosten in dezelfde blik als de `In winkelmand`-knop | Onverwachte verzendkosten in de checkout zijn wereldwijd de grootste oorzaak van verlaten winkelmandjes. De informatie hoort bij de beslissing, niet erna. |
| Lengte en gedragen maat van het model | Vertaalt een foto naar haar eigen lichaam. Het is de goedkoopste maatregel tegen retouren die bestaat. |
| Betaalmethoden zichtbaar vóór de checkout, met Bancontact eerst | Bancontact is in België de dominante betaalmethode. Ontbreekt het logo, dan gaat een deel van je publiek ervan uit dat het niet kan. |
| Reviews met aantal, gemiddelde en de mogelijkheid tot filteren | Vijf sterretjes zonder aantal is decoratie. `4,4 uit 218 beoordelingen` is een controleerbaar feit. |
| Voorraadstand per maat, ook als die nul is | Bewijst dat het systeem echt is, en `nog 2 stuks` in maat 38 is de enige eerlijke vorm van urgentie. |
| Ondernemingsnummer, fysiek adres en telefoonnummer in de footer | Wettelijk verplicht en het is het eerste dat een voorzichtige koper controleert bij een winkel die hij niet kent. |
| Consistente productfotografie: één achtergrond, één licht, één crop, één grade | Een raster waarin drie foto's een andere witbalans hebben, leest als een dropshipper met catalogusbeelden van vier leveranciers. |

## Wat hier absoluut niet mag

| Nooit | Waarom | In plaats daarvan |
|---|---|---|
| Kortingsruis over de hele pagina | Kortingsbadges op elke kaart plus een banner plus een aftelklok maakt van je collectie een uitverkoopbak en verwoest de prijs van je nieuwe items | Eén stempelrode prijs bij items die echt gereduceerd zijn, en maximaal één promostrook bovenaan de pagina |
| Wisselende beeldverhoudingen of achtergronden in het raster | Het raster golft en de bezoeker leest de inconsistentie als onbetrouwbaarheid van de winkel | Eén crop 3:4, één achtergrondkleur, één grade. Fotobriefing vóór de shoot, geen correctie achteraf |
| Oneindig scrollen | Breekt de footer, verliest de scrollpositie bij terugnavigatie vanaf een PDP, en maakt het onmogelijk in te schatten hoe groot het aanbod is | 24 items, dan een `Toon meer`-knop, met de totaaltelling zichtbaar |
| Aftelklokken die na afloop opnieuw beginnen | Nepschaarste; bezoekers herkennen het en het is bovendien een oneerlijke handelspraktijk | Echte voorraadstand per maat, uit het systeem |
| Verzendkosten pas in stap 3 van de checkout | De grootste oorzaak van afgebroken bestellingen; het voelt als bedrog, ook wanneer het bedrag redelijk is | Verzendkosten en drempel voor gratis levering in de topstrook, op de PDP en in de winkelmand |
| Verplicht account aanmaken om te bestellen | Kost een substantieel deel van de eerste bestellingen bij een winkel die de klant nog niet kent | Gasten-checkout als standaard, account aanmaken als optie ná de bestelling |
| Hoverbeeld dat pas laadt bij hover | Elke hover triggert een netwerkverzoek en een zichtbare flits; op touch bestaat hover niet | Tweede beeld preloaden voor de eerste twaalf kaarten, cross-fade van 200ms; op mobiel een swipebare galerij in de kaart |
| Productfoto's zonder `width`/`height` of `aspect-ratio` | Het raster springt tijdens het laden, CLS gaat over 0,1 en de bezoeker klikt op het verkeerde product | `aspect-ratio: 3/4` op de container, `loading="lazy"` vanaf de tweede rij, eerste rij met `priority` |

## Conversie

**Primair doel:** een product in de winkelmand met de juiste maat. De maatkeuze is het
werkelijke conversiepunt — niet de knop, maar de zekerheid die eraan voorafgaat.

**Primaire CTA:** `In winkelmand`. Gevuld in inkt `#1A1714`, tekst in studiopapier, 52px hoog,
volle breedte van de rechterkolom op de PDP, radius 2px. Is er nog geen maat gekozen, dan
blijft de knop actief maar scrollt hij bij klikken naar de maatkiezer met een regel eronder:
`Kies eerst een maat` — nooit een uitgegrijsde knop, want die geeft geen uitleg. In de
winkelmand wordt de knop `Afrekenen`, in de checkout `Bestelling plaatsen`, met het
totaalbedrag ernaast.

**Secundaire actie:** `Bewaar` met een hartje, als icoonknop rechtsboven op de kaart en als
tekstlink onder de primaire knop op de PDP. Dat is je remarketinglijst. Daarnaast op de PDP
`Bekijk de maattabel` als onderlijnde link naast de maatkiezer — hij opent een paneel, geen
nieuwe pagina.

**Plaatsing:** in het raster is de kaart zelf de knop, met de hartjesknop als enige zichtbare
control. Op de PDP staat `In winkelmand` boven de vouw op desktop, en op mobiel in een vaste
onderbalk van 64px met daarin de prijs links en de knop rechts, zodra de galerij uit beeld
scrolt. Onder de knop drie regels van 13px in karton: `Gratis verzending vanaf € 50 ·
Morgen in huis bij bestelling voor 22u · 30 dagen retourrecht`.

## Referenties

- **[torfs.be](https://www.torfs.be/nl)** — de servicevoorwaarden staan als vijf losse
  uitspraken direct onder de hero (gratis retour in België, levering morgen bij bestelling
  voor 22u, gratis verzending vanaf € 35, avond- en zaterdaglevering), dus vóór de bezoeker
  ook maar één product opent.
- **[jbc.be](https://www.jbc.be/nl)** — vier concrete servicebeloftes met echte uren en
  bedragen (`voor 21u besteld, morgen in huis`, `gratis levering & retour in je JBC-winkel`,
  `30 dagen bedenktijd`), plus Bancontact als eerste betaallogo en de e-commercekeurmerken in
  de footer.
- **[aplace.com](https://aplace.com/)** — de navigatie splitst op Sale, New Arrivals, Women,
  Men, Beauty, Goods en Brands, en de homepage bestaat uit vier identiek gecropte
  categorietegels in plaats van een productraster, zodat het winkelgedeelte pas begint zodra
  de bezoeker een richting heeft gekozen.

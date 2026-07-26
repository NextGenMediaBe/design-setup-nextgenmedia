# Vastgoed en immo

## Wat de bezoeker echt komt doen

- Filteren op gemeente, prijsplafond en aantal slaapkamers, en binnen dertig seconden weten
  of er überhaupt iets tussen zit. Zo niet, is hij weg.
- Foto's beoordelen. Hij kijkt naar lichtinval, plafondhoogte, tuinoriëntatie en de staat van
  het schrijnwerk. Je verkooptekst leest hij pas als de foto's hem overtuigd hebben.
- Prijs en EPC-label naast elkaar leggen. Een label F betekent een verplichte renovatie binnen
  vijf jaar na aankoop; dat bedrag telt hij mentaal bij de vraagprijs op.
- Terugkomen. Bezoek 1 is scannen, bezoek 2 is vergelijken met wat de partner ervan vindt,
  bezoek 3 is een bezichtiging aanvragen. De site moet alle drie ondersteunen.
- Bij een verkoper: uitzoeken wat zijn eigen woning waard is, zonder meteen een naam achter
  te laten.

## De emotionele opdracht

Twee angsten tegelijk. De koper is bang dat hij te laat is — dat het goede pand al weg is
voor hij het zag — en tegelijk bang dat de foto's liegen en hij zijn zaterdag verspilt aan
een bezichtiging van iets dat in het echt donker en klein blijkt. De verkoper is bang dat hij
zijn huis onder de prijs weggeeft aan iemand die dat wel wist. Neem beide weg met
volledigheid in plaats van enthousiasme: elke foto van elke ruimte, ook de berging; het
EPC-cijfer voluit; het bouwjaar; de kadastrale gegevens; de datum waarop het pand online
kwam. Een site die niets verbergt hoeft niets te overtuigen.

## Typografie

| Rol | Voorstel | Waarom |
|---|---|---|
| Display | Instrument Serif, 400, `tracking-[-0.01em]`, `leading-[1.05]`, 56–72px desktop | Eén hoge-contrastserif geeft gewicht zonder luxe-cliché. Hij staat alleen op de hero en op sectiekoppen, nergens in de UI. |
| Body | Instrument Sans, 400/500, 17px, `leading-[1.6]`, `tracking-normal` | Neutrale grotesk die volledig terugtreedt achter de fotografie. 500 voor labels in kaarten, 400 voor lopende beschrijving. |
| Prijs en meetwaarden | Instrument Sans 500, `font-variant-numeric: tabular-nums`, `tracking-[-0.01em]` | Prijzen staan onder elkaar in een grid. Zonder tabulaire cijfers dansen de eurotekens en leest een kolom niet als kolom. Verplicht op prijs, m², slaapkamers, EPC-kengetal en bouwjaar. |
| Utility | IBM Plex Mono, 400, 11px, `tracking-[0.08em]`, uppercase | Referentienummers, kadastrale codes, "TE KOOP" / "IN OPTIE" / "VERKOCHT"-status. Mono maakt van administratieve data zichtbaar administratieve data. |

Zet één type-schaal en gebruik in de kaart nooit meer dan drie groottes: prijs (20px),
adres (17px), kenmerkenregel (14px). Alles daarboven vecht met de foto.

## Palet

| Kleur | Hex | Herkomst |
|---|---|---|
| Leisteen | `#1A1E20` | De natuurleien op een Vlaams zadeldak, nat na regen. Dit is je tekstkleur en je footer, niet zwart. |
| Kalkpleister | `#F4F1EA` | Ongeschilderde kalkpleister op een binnenmuur. Achtergrond van elke pagina. |
| Gebrande gevelsteen | `#A6432E` | De rode gevelsteen van een naoorlogse rijwoning. Enige accent: primaire CTA, actieve filter, geselecteerde pin op de kaart. |
| Eik | `#8A7358` | Onbehandelde eiken vloerplank. Randen, dividers, iconen in rust. |
| Zink | `#5B6467` | Zinken dakgoot. Secundaire tekst, metadata, uitgeschakelde staten. |
| Kalksteen | `#E5E0D6` | Gezaagde blauwe hardsteen na verwering. Vullingen van kaarten en van de filterbalk. |

**Vermijd:** kobaltblauw met goud. Dat is de standaarduitrusting van elk makelaarskantoor in
België en het maakt je site inwisselbaar. Vermijd ook elke tweede accentkleur voor "nieuw" —
gebruik daarvoor het mono-label, niet een kleur.

**EPC-labels zijn geen ontwerpbeslissing.** In Vlaanderen is het label verplicht in elke
advertentie, met het kengetal in kWh/m²jaar erbij. Neem de officiële kleurschijf van het VEKA
over — A+ diepgroen, A groen, B lichtgroen, C geel, D oker, E oranje, F rood — en pas hem
niet aan je palet aan. Toon het label als een blokje van 44×24px met het kengetal ernaast in
tabulaire cijfers: `EPC B · 178 kWh/m²jaar`. Kleur alleen is onvoldoende: zet de letter er
altijd in, voor kleurenblinde bezoekers en voor de wet.

## Layoutprincipe

De foto is de pagina; de interface is een dun raster dat eroverheen ligt en verdwijnt zodra
je niet filtert.

```
┌────────────────────────────────────────────────────────────┐
│  LOGO            Kopen  Huren  Verkopen  Nieuwbouw   [Bel] │  ← 72px, transparant over hero
├────────────────────────────────────────────────────────────┤
│                                                            │
│        [ full-bleed foto van één pand, 16:9, scrim ]       │
│                                                            │
│        Woningen in Oost-Vlaanderen                         │  ← Instrument Serif 64px
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Gemeente ▾ │ Type ▾ │ Max. prijs ▾ │ Slpk ▾ │ Zoek  │  │  ← filterbalk, 64px hoog
│  └──────────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────────┤
│  42 panden · Sorteer: nieuwste ▾            [Lijst][Kaart] │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐               │
│  │  4:3 foto │  │  4:3 foto │  │  4:3 foto │               │
│  │  [EPC B]  │  │  [EPC F]  │  │  [EPC A]  │               │  ← label linksonder óp de foto
│  ├───────────┤  ├───────────┤  ├───────────┤               │
│  │ € 349.000 │  │ € 285.000 │  │ € 512.000 │               │  ← tabulair, 20px
│  │ Nekkersbg │  │ Ledeberg  │  │ Sint-Amds │               │
│  │ 142 m² ·3 │  │ 96 m² · 2 │  │ 210 m² ·4 │               │
│  └───────────┘  └───────────┘  └───────────┘               │
│                     [ Toon meer ]                          │
├────────────────────────────────────────────────────────────┤
│  Verkopen?  Gratis schatting binnen 48 uur   [ Schatting ] │
├────────────────────────────────────────────────────────────┤
│  Kantoren · Team · Reviews (11.000+) · BIV-nummer · Footer │
└────────────────────────────────────────────────────────────┘
```

Ritme: één crop-ratio voor het hele grid, 4:3, zonder uitzondering. Een pand met alleen
staande foto's krijgt een 4:3-uitsnede, geen eigen kaartformaat — het moment dat één kaart
hoger is dan de rest, valt het grid uit elkaar. Kaartafstand 24px, radius 4px op de kaart en
0px op de foto erbinnen. Geen schaduw: scheiding komt van de witruimte tussen kaarten.

Mobiel: de filterbalk wordt één knop `Filter (3)` die een bottom sheet opent met de filters
onder elkaar en een sticky `Toon 42 panden`-knop onderaan. Kaarten worden één kolom, foto
volle breedte, en de kaart/lijst-toggle wordt een zwevende pil onderaan het scherm. Nooit een
horizontaal scrollend grid voor zoekresultaten — dat verbergt hoeveel er is.

**De detailpagina** heeft een vaste volgorde: fotogalerij (klikbaar naar fullscreen, met
plattegrond als laatste beeld), dan prijs met EPC-blok en de kerncijfers in een tabel van
twee kolommen, dan de beschrijving, dan de kaart met de buurt, dan de makelaar met foto,
naam, gsm-nummer en een formulier van drie velden. De prijs en de knop `Bezichtiging
aanvragen` blijven sticky in een balk van 64px zodra de galerij uit beeld scrolt. Toon de
onlinedatum: `Online sinds 3 juli`. Verzwijg je die, dan gaat de bezoeker ervan uit dat het
pand al maanden blijft hangen.

**Makelaar versus projectontwikkelaar zijn twee verschillende sites.** Een makelaar verkoopt
een *voorraad die verandert*: het zoekgrid is de homepage, de content is de listing, en de
navigatie is Kopen/Huren/Verkopen. Zijn tweede publiek is de verkoper, en die heeft een eigen
ingang nodig met een schattingsformulier. Een ontwikkelaar verkoopt *een klein aantal
projecten die nog niet bestaan*: geen zoekgrid maar drie tot acht projectpagina's met
renders, fasering, opleverdatum, beschikbaarheidstabel per unit en een downloadbaar
lastenboek. Bij een ontwikkelaar is de kaart met de buurt belangrijker dan bij een makelaar,
want de koper koopt een omgeving die hij nog niet kan bezoeken. Meng de twee niet: een
ontwikkelaar met een zoekbalk over vier projecten ziet er leeg uit.

## Signature-ideeën

1. **De plattegrond als navigatie.** Toon op de detailpagina de plattegrond als SVG waarin
   elke ruimte hoverbaar is; klikken springt naar de foto van die ruimte in de galerij.
   Bezoekers proberen altijd de foto's aan de plattegrond te koppelen — doe het voor hen.
2. **Zonstand op de tuin.** Eén statisch diagram per pand: het perceel met de oriëntatie en
   een boog die aangeeft waar de zon om 9u, 14u en 19u staat in juni. Iedereen vraagt "ligt
   de tuin op het zuiden"; niemand beantwoordt het visueel.
3. **De kostprijsstrook.** Onder de vraagprijs één regel die uitklapt naar registratierechten
   (3% bij enige eigen woning in Vlaanderen, 12% daarbuiten), notariskosten en een
   indicatieve maandlast. Verkoopt geen enkel pand, maar wint elk vertrouwen.
4. **Een archief van verkochte panden**, met de verkoopdatum en de doorlooptijd in dagen. Dat
   is de enige geloofwaardige vorm van "wij verkopen snel".

## Vertrouwenselementen die er echt toe doen

| Element | Waarom het werkt in deze sector |
|---|---|
| BIV-erkenningsnummer in de footer | Vastgoedmakelaar is in België een beschermd beroep. Het nummer is verifieerbaar bij het BIV en scheidt je onmiddellijk van tussenpersonen zonder erkenning. |
| Aantal reviews met het gemiddelde, niet alleen sterren | "4,7 uit 11.243 beoordelingen" is een claim die je kunt controleren; vijf gouden sterretjes zonder aantal is decoratie. |
| Een echte foto van het kantoor en van elke medewerker met naam en gsm | Vastgoed wordt lokaal gekocht. Bezoekers checken of ze het kantoor herkennen van de baan naar het werk. |
| De volledige fotoset, inclusief de badkamer die niet gerenoveerd is | Wie zes foto's toont van een huis met twaalf ruimtes, verbergt zes ruimtes. Bezoekers rekenen dat door. |
| Onlinedatum en statuslabel (in optie, verkocht) | Bewijst dat de voorraad leeft en dat de site onderhouden wordt. Een verlopen aanbod is de snelste manier om een makelaar ongeloofwaardig te maken. |
| EPC-label met kengetal, altijd zichtbaar in het grid | Wettelijk verplicht, en het is het tweede getal waarnaar gekeken wordt. Het weglaten tot op de detailpagina leest als verstoppen. |

## Wat hier absoluut niet mag

| Nooit | Waarom | In plaats daarvan |
|---|---|---|
| Tekst rechtstreeks over een foto zonder scrim | Elke foto heeft ergens een lichte lucht of een wit gevelvlak; op één schermbreedte zakt het contrast onder 3:1 en is de kop onleesbaar | `bg-gradient-to-t from-[#1A1E20]/75 via-[#1A1E20]/35 to-transparent` over de onderste 60% van het beeld, en toets het contrast tegen het lichtste gebied, niet tegen het gemiddelde |
| Kaarten met wisselende beeldverhoudingen | Het grid golft, en de bezoeker leest de onrust als slordigheid van het kantoor | Eén vaste crop 4:3 met `object-cover`, en een fotobriefing die dat oplegt |
| Prijzen in proportionele cijfers | `€ 1.195.000` en `€ 349.000` lijnen niet uit; kolommen vergelijken wordt onmogelijk | `font-variant-numeric: tabular-nums` op elke prijs, ook in de kaart |
| "Prijs op aanvraag" als standaard | Leest als "duurder dan jij kunt betalen" en filtert je eigen aanbod uit elke prijsfilter | Alleen bij panden waar de eigenaar het contractueel oplegt, met een reden erbij |
| Een carrousel als homepage-hero die door zes panden roteert | De bezoeker wil filteren, niet kijken naar wat jij belangrijk vindt; bovendien laadt hij zes grote afbeeldingen voor één zichtbare | Eén statische hero-afbeelding met `priority`, en de filterbalk direct eronder |
| Een 3D-tour die automatisch start | Kost tussen 3 en 8 MB, verwoest je LCP en start geluid op een gsm | Een posterbeeld met een expliciete knop `Start virtuele rondleiding`, lazy geladen |
| Contactformulieren met tien velden | Bij een bezichtigingsaanvraag is elk extra veld directe uitval | Naam, telefoon, gewenst moment. De rest vraag je aan de telefoon |

## Conversie

**Primair doel:** een bezichtigingsaanvraag op een concreet pand. Alles daarboven — nieuws,
team, blog — is ondergeschikt en mag nooit boven het zoekgrid staan.

**Primaire CTA:** `Bezichtiging aanvragen`. Op de detailpagina, gevuld in gebrande gevelsteen
`#A6432E`, minimaal 48px hoog, sticky in de onderbalk zodra de galerij uit beeld is. Op
mobiel volle breedte met daarnaast een tweede blokje `Bel 09 ...` van 56px breed — bij een
pand dat vandaag online kwam belt men liever dan te mailen.

**Secundaire actie:** `Bewaar dit pand` als tekstlink met hartje in zink `#5B6467`, plus
`Ontvang nieuwe panden in Gent per mail` onderaan het zoekresultaat. Dat tweede is je
werkelijke lijstopbouw: iemand die vandaag niets vindt, is over drie weken je koper.

**Voor de verkoperkant:** één strook onderaan de homepage met `Vraag een gratis schatting`,
en niets anders. Twee doelgroepen op één pagina overleven alleen als de tweede exact één
ingang krijgt.

**Plaatsing:** filterbalk binnen de eerste 600px. Primaire CTA op de detailpagina zowel
direct onder de prijs als in de sticky balk. Nooit een CTA in het zoekgrid zelf — daar is de
kaart de knop.

## Referenties

- **[dewaele.com](https://www.dewaele.com/nl)** — het EPC-label staat als gekleurde letter
  rechtstreeks in elke zoekkaart, naast prijs, oppervlakte en aantal slaapkamers, zodat je
  kunt filteren zonder ooit een detailpagina te openen; statuslabels als "Binnenkort online"
  en "In optie" houden de voorraad zichtbaar levend.
- **[matexi.be](https://www.matexi.be/nl)** — een ontwikkelaarssite die geen zoekmachine
  probeert te zijn: drie projectkaarten met de startprijs voluit (`vanaf € 357.000`), het
  aantal beschikbare units, en een zoekingang die vraagt naar buurt in plaats van naar
  filters.
- **[ion.be](https://www.ion.be/nl)** — projectteasers zijn volledige beeldvlakken met alleen
  projectnaam en stad eroverheen, en de navigatie splitst op projecttype (residentieel,
  commercieel, studentenhuisvesting) in plaats van op prijs; de cijfers `153 projecten` en
  `435.000 m²` staan als losse getallen in de pagina, niet in een badge.

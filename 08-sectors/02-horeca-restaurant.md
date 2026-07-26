# Horeca en restaurant

## Wat de bezoeker echt komt doen

- **De kaart lezen.** Niet "onze filosofie", niet "onze chef". De gerechten en de prijzen.
  Dit is in bijna elke meting de meest bezochte pagina van een restaurantsite.
- **Reserveren.** Vaak voor vanavond of dit weekend, vaak op een telefoon, vaak onderweg.
  Elke seconde tussen landing en reservatieformulier kost een tafel.
- **Openingsuren en sluitingsdagen checken.** "Zijn jullie maandag open?" is de vraag waarvoor
  de meeste mensen bellen. Als de site dat niet in één oogopslag beantwoordt, bel je.
- **Inschatten of het bij de gelegenheid past.** Verjaardag met schoonouders of vrijdagavond
  met vrienden. Dat oordeel wordt uit foto's van de zaal gehaald, niet uit tekst.
- **Prijsniveau peilen.** Zonder prijzen op de kaart gaat de bezoeker ervan uit dat het duur is
  en verzint hij een bedrag dat hoger ligt dan de werkelijkheid.
- **Praktische blokkades wegnemen:** parking, allergenen, kindvriendelijk, terras, groepen.

## De emotionele opdracht

Wegnemen: de vrees om verkeerd te kiezen — te duur, te stijf, te luidruchtig, of net te
alledaags voor een gelegenheid die telt. Opwekken: de honger en het beeld van jezelf aan die
tafel. De site is geen brochure maar een venster: één blik door het raam moet volstaan om te
weten hoe het er ruikt en klinkt. Warmte zonder gezelligheidsretoriek. Als de bezoeker na tien
seconden nog niet weet wat er op het bord ligt en wat dat kost, heb je verloren, hoe mooi de
pagina ook is.

## Typografie

| Rol | Voorstel | Waarom |
|---|---|---|
| Display | **Fraunces** 400, optische as `opsz 96`, `SOFT 0`, `WONK 1`, clamp(40px, 6vw, 88px), `-0.015em`, `line-height: 1.05` | Een serif met een eigenaardigheid in de g en de a. Redactioneel, niet bruiloftschrift. Eén gewicht volstaat |
| Kaart-items | **Newsreader** 400, 19px/1.5, `letter-spacing: 0` | Gebouwd voor lange leesteksten op scherm. Een gerechtsomschrijving van 12 woorden leest als een zin, niet als een label |
| Kaart-prijs | **Newsreader** 400, 19px, `font-variant-numeric: tabular-nums`, rechts uitgelijnd | Prijzen onder elkaar uitgelijnd. Zonder tabular-nums danst de kolom |
| Body | **Newsreader** 400, 18px/1.7, `max-width: 62ch` | Zelfde familie als de kaart houdt de site één stuk |
| Utility (uren, labels, nav) | **Archivo** 500, 12px, `letter-spacing: 0.14em`, uppercase | Klein, getrackt, rustig. Draagt alle praktische informatie zonder de sfeer te breken |

Type-contrast is groot maar warm: één serif-systeem plus één sans die alleen als etiket
optreedt. Dat is de editoriale richting uit `art-direction.md`, ongewijzigd doorgetrokken.

## Palet

| Kleur | Hex | Herkomst |
|---|---|---|
| Ground | `#F4EEE3` | Ongebleekt papier van de dagkaart, en het lijnwaad servet |
| Inkt / donkere secties | `#1A1512` | Gebrand hout uit de houtskoolgrill, warm zwart |
| Accent | `#7A2E33` | Bezinksel onderin een fles rode wijn. Voor de reserveerknop en niets anders |
| Broodkorst | `#C08046` | De kleur van een korst na 40 minuten. Rules, hover, actieve navigatie |
| Laurier gedroogd | `#4A5240` | Een gedroogd laurierblad. Secundaire tekst en het praktische blok onderaan |

Foto's krijgen **één grade**: witbalans 5200K, `saturate(0.94)`, lichte warme lift in de
schaduwen. Draai die grade over álle foodfoto's, ook die van de zaal en het terras. Twintig
foto's met één grade lezen als één restaurant; twintig foto's van drie fotografen lezen als
een Google-zoekresultaat.

**Vermijd:** zwart met `#D4AF37` goud — het universele "fine dining"-cliché dat elke zaak van
een frituur tot een sterrenzaak gebruikt en dat dus niets meer differentieert. Ook vermijden:
verzadigd rood-wit-groen zodra er iets Italiaans op de kaart staat.

## Layoutprincipe

Eén beeld, dan meteen de kaart: de bezoeker mag nooit voorbij een manifest scrollen om te
zien wat hij kan eten.

```
┌──────────────────────────────────────────────────────────────┐
│ NAAM VAN DE ZAAK        KAART  OVER  CONTACT   [ Reserveer ] │ sticky
├──────────────────────────────────────────────────────────────┤
│ WO–ZA 18:30–22:00 · ZO+MA GESLOTEN · 09 123 45 67            │ utility-strip, 12px caps
├──────────────────────────────────────────────────────────────┤
│  [ FOTO — één gerecht of de zaal, 3:2, full-bleed, scrim ]    │
│                                                              │
│   Naam van de zaak                                           │
│   Vis van de dagvangst, houtskool, en twintig couverts.      │
│   [ Reserveer een tafel ]        Bekijk de kaart ↓            │
├──────────────────────────────────────────────────────────────┤
│  DE KAART — week van 27 juli            ◀ binnen één scroll   │
│  VOOR                                                        │
│  Rauwe haring, appel, mierikswortel                    14    │
│  Gegrilde prei, hazelnoot, oude Comté                  16    │
│  HOOFD                                                       │
│  Tarbot, beurre blanc, zeekraal                        34    │
│  MENU 4 GANGEN                                         68    │
│  [ Volledige kaart als pdf · 140 kB ]                        │
├──────────────────────────────────────────────────────────────┤
│  [ 3 foto's, 4:5, zelfde grade: zaal · pas · terras ]         │
├──────────────────────────────────────────────────────────────┤
│  PRAKTISCH   adres + kaart · parking · allergenen · groepen  │
│              openingsuren per dag, uitgeschreven             │
└──────────────────────────────────────────────────────────────┘
```

Ritme: hero `min-h: 78vh` (niet 100vh — de kaart moet aan de onderrand aftekenen), daarna
secties van `py-24`. Tussen kaart en fotoblok staat één hairline in `#C08046` op 20% alpha,
verder geen scheidingen: ruimte doet het werk.
Op mobiel wisselt de volgorde: utility-strip, hero op 62vh, **kaart onmiddellijk**, dan pas
foto's. De reserveerknop wordt een vaste onderbalk van 56px die na 200px scroll verschijnt.
De kaart is HTML-tekst, geen afbeelding en geen ingesloten pdf-viewer: prijzen moeten
selecteerbaar en doorzoekbaar zijn, en een pdf-viewer op mobiel is onbruikbaar.

## Signature-ideeën

1. **De kaart met een datumstempel.** Boven de kaart één regel: "Week van 27 juli — de kaart
   wijzigt elke maandag." Dat ene zinnetje maakt van een statische pagina een levend
   restaurant en geeft de bezoeker een reden om terug te komen kijken.
2. **Eén stilstaand beeld dat traag ademt.** Geen carrousel: één foto van de pas of het vuur,
   6 seconden, `scale(1.00 → 1.04)`, `ease-out`, en klaar. Eén bewegend moment op de pagina,
   uitgeschakeld onder `prefers-reduced-motion`. Zie `motion.md`.
3. **Live "vanavond nog 2 tafels vrij"** getrokken uit het reservatiesysteem. Toont schaarste
   zonder te liegen, en verandert een bezoek in een boeking. Als de koppeling er niet is:
   niet faken, weglaten.
4. **De ploeg als één groepsportret in de keuken**, niet als vier losse kaartjes. In horeca
   koopt men een team; een rij individuele avatars leest als een adviesbureau.

## Vertrouwenselementen die er echt toe doen

| Element | Waarom het werkt in deze sector |
|---|---|
| Prijzen naast elk gerecht | Verwijdert de enige echte drempel. Geen prijs betekent voor de bezoeker "duurder dan ik dacht" |
| Openingsuren per dag, uitgeschreven | De meest gezochte informatie. "Zo+ma gesloten" bespaart je twintig telefoons per week |
| Recente Google-recensies met datum | Een score zonder datum is dood gewicht. Drie recensies van deze maand wegen zwaarder dan 900 sterren |
| Foto's van de échte zaal, inclusief lege tafels | De bezoeker beoordeelt de sfeer op meubels en licht, niet op mensen |
| Naam van de chef en van de zaakvoerder | Horeca is persoonsgebonden. Een naam maakt de zaak aansprakelijk |
| Allergenen- en dieetvermelding op de kaart | Voor een deel van je publiek beslist dit of ze überhaupt komen |
| Michelin / Gault&Millau, alleen indien actueel | Werkt uitsluitend als de vermelding het lopende jaar draagt. Een verlopen onderscheiding is een risico |
| Parkeeruitleg met een concrete parking en afstand | "Parking Vrijdagmarkt, 4 min te voet" beslist mee over de avond |

## Wat hier absoluut niet mag

| Nooit | Waarom | In plaats daarvan |
|---|---|---|
| Carrousel van stockborden | De bezoeker herkent stockfood en concludeert dat je eigen borden niet toonbaar zijn | Zes eigen foto's van gerechten die vandaag op de kaart staan, één grade |
| Het woord "culinaire beleving" | Zegt niets, staat op elke horecasite in Vlaanderen, en klinkt als een cateraar | "Vis van de dagvangst, op houtskool, twintig couverts" |
| De kaart als pdf-download of als foto | Onleesbaar op mobiel, niet indexeerbaar, niet doorzoekbaar op allergenen | HTML-kaart op de pagina; pdf hooguit als extra link |
| Automatisch spelende muziek of video met geluid | Mensen bekijken restaurantsites op kantoor en in bed. Geluid is een directe bounce | Stille loop met poster, of één stilstaand beeld |
| `min-h-screen` hero met alleen een logo | De kaart, het enige wat men zoekt, ligt dan onder de vouw | Hero op 78vh, kaart zichtbaar aftekenend |
| Reserveren via een e-mailformulier | Wie vanavond wil eten, wacht geen 6 uur op een antwoord | Koppeling met een boekingssysteem, plus telefoonnummer als alternatief |
| Kaarten met `shadow-md` en `rounded-2xl` om gerechten | Maakt van een menu een productcatalogus | Een gezette kaart: regel, stippellijn of witruimte, prijs rechts |
| Verouderde kerstmenu's in juli | Eén verlopen datum en de hele site wordt als onbetrouwbaar gelezen | Datumstempel boven de kaart, en één iemand die hem wekelijks bijwerkt |

## Conversie

**Primair doel:** een bevestigde reservatie in het boekingssysteem.

**Primaire CTA:** `Reserveer een tafel` — voluit, niet "Reserveer" alleen, want het object
maakt de handeling concreet en verlaagt de drempel.
Nooit: "Boek nu", "Ontdek", "Contacteer ons".

**Secundaire actie:** `Bekijk de kaart ↓` als tekstlink met anker naar de kaartsectie.
Voor zaken zonder online systeem is de secundaire actie `Bel 09 123 45 67`, met `tel:`-link.

**Waar de CTA staat:** rechts in de sticky header vanaf de eerste pixel; in de hero onder de
subhead; direct onder de kaart, waar de honger het hoogst is; in de vaste mobiele onderbalk;
en in de footer naast de openingsuren. De knop onder de kaart is de belangrijkste van de site
— daar is de beslissing al gevallen en mag er geen navigatie meer tussen zitten.

## Referenties

- **[thejaneantwerp.com](https://www.thejaneantwerp.com)** — de navigatie draagt naast
  "Reservations" een tweede knop voor last-minute beschikbaarheid, zodat een afgewezen
  bezoeker niet wegklikt maar naar een tweede kans wordt geleid; de openingsdagen
  (woensdag t/m zaterdag) staan letterlijk uitgeschreven in de footer in plaats van als
  algemene "openingsuren"-link.
- **[zilte.be](https://www.zilte.be)** — de footer vermeldt de service-uren als exacte
  vensters (lunch 12:00–13:00, diner 19:00–20:30) in plaats van "open van … tot …", waardoor
  een bezoeker meteen weet dat hij op een aankomsttijdstip boekt en niet op een tijdslot;
  "De kaart" en "Reserveren" staan als twee losse items naast elkaar in de hoofdnavigatie.
- **[elders.gent](https://elders.gent)** — adres en telefoonnummer staan als tekst in het
  eerste scherm, direct onder de naam, nog voor enige sfeerfoto; de kaart noteert per menu de
  prijs per persoon (lunch 42, diner 72) met vegetarische en vegan markeringen per gerecht,
  zodat prijs en dieet in dezelfde blik worden opgelost.

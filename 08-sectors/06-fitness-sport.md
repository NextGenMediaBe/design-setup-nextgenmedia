# Fitness, personal training en sportclub

## Wat de bezoeker echt komt doen

- Uitzoeken of dit voor hém is. Hij is bang dat iedereen daar al fit is en hij de enige
  beginner. De hele site beantwoordt in feite die ene vraag.
- Het uurrooster bekijken. Past de les van 19u30 na het werk, en is er iets op zaterdag?
  Zonder rooster is er geen beslissing.
- De prijs vinden. Wie het tarief moet opvragen, gaat ervan uit dat het duur is en dat er
  onderhandeld wordt.
- Kijken waar het is en of er parking is. Meer dan tien minuten rijden betekent na drie weken
  afhaken, en dat weet hij van zichzelf.
- Bij personal training: bewijs zoeken dat de coach met mensen als hij werkt, niet met
  wedstrijdatleten van 24.

## De emotionele opdracht

Wegnemen: schaamte. De bezoeker stelt zich voor dat hij binnenkomt en niet weet hoe het
toestel werkt terwijl iemand kijkt. Elk stockbeeld van een gebeeldhouwd model bevestigt die
angst; elke foto van een lid van 48 met een normaal lichaam en zweet in zijn shirt neemt hem
weg. Opwekken: het gevoel dat er een concreet, gepland eerste moment bestaat: een proefles
op donderdag om 19u30, met een naam erbij van wie hem opvangt. Energie is de toon, maar de
functie is geruststelling. Hard type en zwarte vlakken maken de site sportief; echte gezichten
maken hem betreedbaar. Je hebt beide nodig, en zonder het tweede werkt het eerste tegen je.

## Typografie

| Rol | Voorstel | Waarom |
|---|---|---|
| Display | Archivo Expanded 700–800, uppercase, `tracking-[-0.02em]`, `leading-[0.92]`, 72–120px | Breed en zwaar vult het beeldvlak en houdt stand over een foto. De negatieve leading laat twee regels tegen elkaar duwen; dat is de energie, niet een animatie. |
| Body | Archivo 400/500, 17px, `leading-[1.6]` | Zelfde superfamilie als de display, dus geen tweede font nodig. 500 voor lesnamen en tariefregels. |
| Rooster en cijfers | Archivo 500 met `font-variant-numeric: tabular-nums`, 15px | Uren staan in kolommen: `06:30`, `19:30`. Zonder tabulaire cijfers loopt de kolom scheef en wordt het rooster onleesbaar. Ook op prijzen en op duur in minuten. |
| Utility | Archivo 600, 11px, uppercase, `tracking-[0.12em]` | Niveau-labels (`BEGINNER` / `ALLE NIVEAUS`), zaalnaam, `NOG 4 PLAATSEN`. Tracked caps geven de sportklok-toon zonder een derde lettertype. |

Type-contrast is groot: van 15px body naar 96px display in één stap. Niets ertussen. Een
tussenniveau van 32px maakt het geheel braaf.

## Palet

| Kleur | Hex | Herkomst |
|---|---|---|
| Rubbervloer | `#121415` | De zwarte rubbertegel onder een squatrek, met de grijze spikkel erin. Basisachtergrond, nooit `#000`. |
| Magnesiumkrijt | `#F2EFE8` | Krijtstof op een halterstang. Alle tekst op donker, en de lichte secties. |
| Gietijzer | `#3B4144` | Een ongeverfde 20 kg-schijf. Randen, dividers, inactieve roostercellen. |
| Roodgloeiend | `#E24E1B` | De kleur van een gietijzeren schijf in de hoogoven, en van de klemveiligheid op een olympische stang. Enige accent: primaire CTA, actieve dag in het rooster, voortgangsbalk. |
| Platformhout | `#A8763E` | Het berkenhouten inzetstuk van een gewichthefplatform. Warme lijn onder secties, iconen, hover op secundaire links. |
| Zweetgroen | `#7A8B3F` | Het olijfgroen van versleten legerkleding in de crossfitbox. Optioneel, alleen voor niveau-indicatie. Niet als tweede accent. |

**Vermijd:** neonblauw `#00A3FF` en alles wat erop lijkt, inclusief cyaan glow, blauwe
gradiënten en oplichtende lijnen over een gespierd silhouet. Dat is de sjabloon die elke
fitnessketen sinds 2014 gebruikt en het leest onmiddellijk als template. Vermijd ook groen
plus blauw plus paars in één diagram voor "je progressie".

## Layoutprincipe

Grote, hard uitgesneden foto's van echte leden, met type dat er half overheen loopt in plaats
van er netjes in te passen.

```
┌────────────────────────────────────────────────────────────┐
│ LOGO      Lessen  Rooster  Tarieven  Coaches   [Proefles]  │  ← 68px, donker, sticky
├────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────┐  │
│  │  [ foto: lid van ~45, halverwege een set, zweet ]    │  │
│  │  KRACHT                                              │  │  ← 110px, tekst loopt
│  │  ZONDER          [ Boek je proefles ]                │  │    tot in de foto
│  │  PUBLIEK          Bekijk het rooster →               │  │
│  └──────────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────────┤
│  DEZE WEEK                          ma di wo do vr za zo   │
│  06:30  Kracht 60'      Sofie     [ 4 plaatsen ]           │  ← tabulaire uren
│  12:15  Conditioning 45' Bram     [ vol ]                  │
│  19:30  Beginners 60'   Sofie     [ 9 plaatsen ]           │
│                              [ Volledig rooster ]          │
├────────────────────────────────────────────────────────────┤
│  TARIEVEN   ┌─────────┐ ┌─────────┐ ┌─────────┐            │
│             │ 10-beurt│ │ Maand   │ │ Jaar    │            │
│             │  € 120  │ │  € 59   │ │  € 590  │            │
│             │ /kaart  │ │ /maand  │ │ /jaar   │            │
│             └─────────┘ └─────────┘ └─────────┘            │
├────────────────────────────────────────────────────────────┤
│  COACHES  [foto] Sofie · kracht    [foto] Bram · conditie  │
├────────────────────────────────────────────────────────────┤
│  LEDEN AAN HET WOORD  (3 quotes, met voornaam + leeftijd)  │
├────────────────────────────────────────────────────────────┤
│  Adres · parking · openingsuren · kaart · Footer           │
└────────────────────────────────────────────────────────────┘
```

Ritme: secties wisselen hard tussen rubbervloer `#121415` en magnesiumkrijt `#F2EFE8`, zonder
overgang, zonder gradiënt. Rooster en tarieven staan altijd op licht. Dat zijn de twee
secties die gelezen worden, niet gevoeld. Sectiepadding 96px desktop, 56px mobiel. Radius 4px
op alles; ronde hoeken van 20px maken van een sportclub een app.

Mobiel: het weekrooster wordt geen tabel maar een verticale lijst per dag met een horizontaal
scrollende dagpicker bovenaan, waarbij vandaag geselecteerd is. Tariefkaarten stapelen, met
de meest gekozen bovenaan in plaats van in het midden. De hero-kop klimt naar 44px en de foto
krijgt `object-position: 60% center` zodat het gezicht in beeld blijft. Hard uitgesneden
betekent op mobiel bewust kiezen welk deel sneuvelt.

## Signature-ideeën

1. **Het rooster is de homepage-hero.** Draai de conventie om: geen sfeerbeeld met een claim,
   maar de eerstvolgende drie lessen van vandaag met uur, coach en resterende plaatsen, direct
   boekbaar. Dat is wat iedereen zoekt en niemand toont op scherm één.
2. **Een fotoreeks van hetzelfde uur, elke week.** Woensdag 19u30, twaalf weken lang, dezelfde
   hoek. Het is geen before/after: het is bewijs dat er elke week gewoon mensen staan. Toon
   ze als één horizontaal scrollende strook met de datum eronder.
3. **De "eerste keer"-pagina, verteld per minuut.** `19:15 je komt binnen · 19:20 Sofie loopt
   met je mee · 19:30 opwarming · 20:25 einde, je krijgt water`. Neemt exact de angst weg die
   de bezoeker heeft en kost je één pagina tekst.
4. **Plaatsenteller die echt klopt.** `Nog 4 van 14` naast elke les, live uit het
   boekingssysteem. Werkt alleen als het waar is; verzonnen schaarste in fitness wordt binnen
   één week doorgeprikt door leden die de zaal zien.

## Vertrouwenselementen die er echt toe doen

| Element | Waarom het werkt in deze sector |
|---|---|
| Foto's van echte leden, met voornaam en leeftijd | Bezoekers zoeken iemand van hun eigen leeftijd en bouw in beeld. Vinden ze die, dan is de drempel weg; vinden ze alleen fitnessmodellen, dan concluderen ze dat de club niet voor hen is. |
| Tarieven voluit op de site, inclusief inschrijvingsgeld | Verborgen prijzen betekenen voor de bezoeker: verkoopgesprek, contract, opzegtermijn. Het volledige bedrag tonen is hier de sterkste conversietrigger die er is. |
| Volledig weekrooster zonder login | Het rooster is het product. Achter een account zetten kost je alle bezoekers die nog niet beslist hebben. |
| Opzegvoorwaarden in één zin, zichtbaar bij de prijs | De grootste rem op een abonnement is de angst voor het jaarcontract. `Maandelijks opzegbaar` naast het tarief verwijdert die rem volledig. |
| Erkenningen van de coach, uitgeschreven | Niet een badge maar de tekst: `Bachelor kinesitherapie (UGent), NASM-CPT`. Bij personal training koopt men een persoon. |
| Foto van de zaal op een gewoon moment, niet leeg en niet gestileerd | Een lege blinkende zaal doet vermoeden dat er niemand komt. Een zaal met zes mensen erin verkoopt beter dan een zaal met nul. |
| Aantal reviews met gemiddelde en locatie | `4,8 uit 312 beoordelingen` is verifieerbaar; sterren zonder aantal niet. |

## Wat hier absoluut niet mag

| Nooit | Waarom | In plaats daarvan |
|---|---|---|
| Stockfoto's van modellen | Bezoekers herkennen ze binnen een seconde en concluderen dat de echte zaal minder mooi is dan de site; het bevestigt precies de schaamte die je moest wegnemen | Eén fotoshoot van twee uur met vijf echte leden van verschillende leeftijden en bouw, in de eigen zaal, in het echte licht |
| Neonblauw met glow | De sjabloon-look van de sector; het maakt elke club inwisselbaar en dateert onmiddellijk | Roodgloeiend `#E24E1B` op zwart rubber, met warme fotografie |
| Prijzen achter een formulier | Leest als "we onderhandelen", en de helft haakt af voor het formulier verstuurd is | De drie tarieven voluit, met inschrijvingsgeld en opzegtermijn erbij |
| Een rooster als PDF-download | Onleesbaar op gsm, altijd verouderd, en niet boekbaar | Een HTML-rooster uit het boekingssysteem, met per les een knop |
| Tellers die van 0 naar 1.500 lopen bij scroll | Kost een animatieframework, leest als opvulling, en niemand gelooft het getal | Het getal gewoon groot zetten, met eronder waar het vandaan komt |
| Before/after-foto's als hoofdbeeld | Juridisch gevoelig, en het maakt van fitness een uiterlijkbelofte in plaats van een gewoonte; het schrikt precies de beginner af | Procesfoto's: dezelfde persoon in week 1 en week 12, aan het trainen, niet in ondergoed voor een witte muur |
| Videobackground op mobiel | 4–10 MB op mobiele data, LCP boven de 4s, en de kop wordt onleesbaar zodra het beeld verandert | Posterbeeld onder `md`, video alleen op desktop met `muted playsinline loop` en een scrim |

## Conversie

**Primair doel:** een geboekte proefles of intakegesprek op een concreet tijdstip. Niet een
"aanvraag", niet een brochure: een afspraak in de agenda. Het is het enige punt waarop
twijfel omslaat in aanwezigheid.

**Primaire CTA:** `Boek je proefles`. Gevuld `#E24E1B`, 52px hoog, `tracking-[0.02em]`
uppercase in Archivo 600. Bij personal training wordt dat `Plan je kennismaking`. Daar
verkoop je een gesprek, niet een training. Bij een club met vaste lessen mag het per lesregel
`Reserveer` heten, 36px hoog, in dezelfde kleur.

**Secundaire actie:** `Bekijk het rooster →` als tekstlink in magnesiumkrijt met onderlijning
op hover. Nooit als tweede gevulde knop. Tweede secundaire ingang onderaan: `Kom eens
langskijken, zonder afspraak` met de openingsuren erbij, voor wie nog niets wil vastleggen.

**Plaatsing:** in de header sticky vanaf scrollpositie 0, in de hero naast de kop, per
lesregel in het rooster, onder elke tariefkaart, en één keer onderaan de coachpagina met de
naam van de coach erin (`Plan een gesprek met Sofie`). Op mobiel een vaste onderbalk van 64px
met de primaire CTA vanaf het moment dat de hero uit beeld is.

## Referenties

- **[ultimateperformance.com](https://www.ultimateperformance.com/)**: de homepage opent met
  drie harde cijfers (`97%` doelen behaald, `91%` resultaat op lange termijn, `8.500+`
  Google-reviews) in plaats van met een claim, en elke klantcase draagt een naam, een leeftijd
  en een concreet getal (`Roy, 57, 40 kg`) zodat de bezoeker zichzelf kan matchen.
- **[basic-fit.com/nl-be](https://www.basic-fit.com/nl-be/)**: drie tariefkaarten met het
  bedrag per vier weken voluit, het inschrijvingsgeld apart vermeld, en een clubzoeker die
  het aantal clubs in het land als getal toont met directe stadslinks eronder; niets zit
  achter een formulier.
- **[barrys.com](https://www.barrys.com/)**: één donkere achtergrond over de hele site met
  rood als enige accent, en `Book Your First Class` staat identiek in de header en herhaald
  door de pagina, zodat er nooit een scherm is zonder de volgende stap.

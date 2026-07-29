# Garage en automotive

## Wat de bezoeker echt komt doen

- Een afspraak vastleggen voor een datum die hem past, liefst zonder te bellen tijdens de werkuren. Hij wil zien welke dagen vrij zijn, niet "wij nemen contact op".
- Weten wat het ongeveer gaat kosten voordat hij de sleutels afgeeft. Niet de exacte factuur, wel een bereik waarmee hij niet voor een verrassing staat.
- Nagaan of jij zijn merk doet. Een BMW-rijder die alleen algemene onderhoudspraat leest, gaat naar de volgende garage.
- Uitzoeken hoe hij zonder auto verder moet: vervangwagen, hoelang je hem houdt, of hij kan wachten.
- Bij een keuring: weten of hij bij jou vooraf kan laten nakijken zodat hij niet twee keer moet gaan. Dat is een aparte, zeer koopkrachtige zoekvraag.
- Bij occasies: de kilometerstand, het bouwjaar, de onderhoudshistoriek en of er een garantie op zit. In die volgorde.

## De emotionele opdracht

Deze bezoeker heeft ooit een factuur gekregen die dubbel zo hoog was als afgesproken, of vermoedt dat hij ooit betaald heeft voor werk dat niet gebeurd is. Hij komt met wantrouwen dat niet persoonlijk is maar wel echt. De hele site moet één ding uitstralen: hier wordt niets verzwegen. Prijzen die zichtbaar zijn, een naam en een gezicht bij de werkplaats, foto's van de eigen hef bruggen en niet van een studio. Het moet zwaar en solide aanvoelen, zoals de werkplaats zelf: gereedschap, staal, hoog contrast, harde randen. Vriendelijkheid is hier niet het doel, betrouwbaarheid wel. Een zachte, luchtige site leest in deze sector als een verkooppraatje.

## Typografie

| Rol | Voorstel | Waarom |
|---|---|---|
| Display | **Archivo**, wght 800, width 112 (Expanded), `letter-spacing: -0.015em`, `line-height: 1.0` | Zwaar, breed en vlak: het gewicht van een motorblok. Op 56px+ leest het als belettering op een werkplaatsdeur, niet als een merkbelofte. |
| Alternatief display | **Saira Condensed**, 700, uppercase, `letter-spacing: 0.01em` | Als het merk meer racing-DNA heeft. Condensed werkt hier omdat het uit de motorsportbelettering komt, niet omdat het smal moet. |
| Body | **Barlow**, 400/500, 17px, `line-height: 1.6` | Licht semi-condensed karakter uit verkeersborden en voertuigbelettering. Blijft leesbaar bij lange servicebeschrijvingen. |
| Prijzen en cijfers | **Barlow**, 600, `font-variant-numeric: tabular-nums` | Prijzen, kilometerstanden en bouwjaren moeten in kolommen uitlijnen op de occasielijst. |
| Micro-labels | **Roboto Mono**, 500, 11px, uppercase, `letter-spacing: 0.1em` | Voor chassisnummers, afspraakreferenties, keuringsdata en statuslabels (`IN WERKPLAATS`, `KLAAR`). |

## Palet

| Kleur | Hex | Herkomst |
|---|---|---|
| Cartelzwart | `#0E0F11` | Verbruikte motorolie na 15.000 km, in de opvangbak. De grond van de site. |
| Plaatstaal | `#2A2D31` | Koudgewalst plaatstaal aan de onderzijde van een motorkap. Panelen en tabellen. |
| Poetsdoek | `#E9E5DF` | De ongebleekte katoenen poetsdoek aan de werkbank. Tekst op donker en lichte secties. |
| Remklauw-rood | `#C8102E` | Een gelakte remklauw achter een spaakvelg. Het enige accent: primaire CTA, actieve staat, prijsaccenten. |
| Hefbrug-geel | `#F2A81D` | De waarschuwingsmarkering op de armen van de hefbrug en de kabel van de looplamp. Alleen voor waarschuwings- en attentiestaten (keuring verlopen, afspraak bevestigd), nooit als tweede merkkleur. Dat is de geschreven reden. |
| Verweerd gietstaal | `#6E7377` | Het oppervlak van een gebruikte remschijf. Randen, secundaire tekst, uitgeschakelde staten. |

Vermijd: elk verloop, elk paars of turquoise, en het lichtblauw dat vrijwel elke garagesite in België gebruikt omdat het "proper" oogt. Blauw op wit is de kleur van de verzekeraar, niet van de werkplaats. Vermijd ook `#FFFFFF` als paginagrond. `#E9E5DF` heeft de temperatuur van de ruimte.

## Layoutprincipe

Een werkplaatsbalie: alles wat je nodig hebt ligt op de toog, in blokken met harde randen.

```
┌───────────────────────────────────────────────────────────┐
│ LOGO   Onderhoud  Keuring  Banden  Occasies  Contact       │
│                            ☎ 011 23 45 67  [ Afspraak ]    │
├───────────────────────────────────────────────────────────┤
│                                                            │
│   ONDERHOUD, KEURING EN         ┌──────────────────────┐   │
│   HERSTELLING IN HASSELT.       │  FOTO: eigen hal,    │   │
│   Alle merken. Vervangwagen     │  hefbrug omhoog,     │   │
│   gratis bij elk onderhoud.     │  eigen monteur       │   │
│                                 └──────────────────────┘   │
│   [ Maak een afspraak ]  Of bel 011 23 45 67               │
├───────────────────────────────────────────────────────────┤
│  PRIJZEN: 4 blokken, harde rand 2px, geen schaduw          │
│  ┌──────────┐┌──────────┐┌──────────┐┌──────────┐          │
│  │ Kleine   ││ Grote    ││ Keuring  ││ Banden   │          │
│  │ beurt    ││ beurt    ││ vooraf   ││ wissel   │          │
│  │ vanaf    ││ vanaf    ││ nakijken ││ vanaf    │          │
│  │ € 145    ││ € 289    ││ € 49     ││ € 60     │          │
│  └──────────┘└──────────┘└──────────┘└──────────┘          │
├───────────────────────────────────────────────────────────┤
│  MERKEN: logo-rij in grijstinten, 12 merken, één regel     │
├───────────────────────────────────────────────────────────┤
│  KEURING: wat we nakijken, checklist van 14 punten         │
├───────────────────────────────────────────────────────────┤
│  OCCASIES: 6 wagens, foto + bouwjaar + km + prijs          │
├───────────────────────────────────────────────────────────┤
│  DE WERKPLAATS: foto's van het team, namen, openingsuren   │
└───────────────────────────────────────────────────────────┘
```

Ritme: secties zijn compact (`py-20`) en gescheiden door 2px randen in `#2A2D31`, niet door witruimte. Om de twee secties wisselt de grond van `#0E0F11` naar `#E9E5DF`. Dat harde contrast is de vormtaal, niet een stijlfoutje. Radius is 2px of 0. Geen enkele schaduw op de hele site.

Mobiel: de prijsblokken worden een verticale stapel op volle breedte, niet een carrousel. Een carrousel verbergt drie van de vier prijzen. De telefoon- en afspraakknop staan in een vaste onderbalk over de volledige breedte, gesplitst 50/50, met de telefoon links (want een deel van je verkeer belt) en `Afspraak` rechts in `#C8102E`. De occasielijst krijgt mobiel één wagen per rij met de prijs als grootste element.

## Signature-ideeën

1. **Prijsblokken met "vanaf"-bedragen op de homepage.** Vier tot zes diensten met een echt startbedrag, en eronder in kleine tekst wat erin zit en wat het duurder maakt ("Vanaf € 145 voor een 1.4 benzine. Diesel met partikelfilter: vanaf € 195."). Vrijwel geen enkele garage doet dit, en het is precies wat de bezoeker zoekt. Wie een prijs durft te tonen, wordt geloofd over de rest.
2. **De keuringschecklist als eigen pagina.** Zet de veertien punten die je bij een voorcontrole nakijkt letterlijk op een rij, met per punt wat er misgaat en wat het kost om het te herstellen. Dit is de sterkste zoekterm in de sector ("auto klaarmaken voor keuring") en de pagina beantwoordt hem volledig. Sluit af met de prijs van de voorcontrole en de afspraakknop.
3. **Merklogo's als filter, niet als decoratie.** De rij merken die je onderhoudt is klikbaar: elk logo leidt naar een korte pagina met de onderhoudsintervallen van dat merk, of je de fabrieksgarantie behoudt, en welke diagnoseapparatuur je ervoor hebt. Dat laatste is het detail dat de merkrijder overtuigt.
4. **Occasies met de historiek in beeld.** Elke occasie krijgt naast de gebruikelijke gegevens een blok `Wat wij eraan gedaan hebben` met de datum en de uitgevoerde werken vóór verkoop, plus een foto van het onderhoudsboekje of het keuringsbewijs. Bouwjaar, kilometerstand en prijs staan in tabular figures onder elkaar zodat de lijst scanbaar blijft.

## Vertrouwenselementen die er echt toe doen

| Element | Waarom het werkt in deze sector |
|---|---|
| Vanaf-prijzen per dienst, zichtbaar zonder gesprek | Neemt de grootste angst weg: de onbekende factuur. Het is het zeldzaamste element in de sector, dus ook het meest onderscheidende. |
| Foto's van de eigen hal, hefbrug en monteurs met naam | Bewijst dat het bedrijf bestaat en dat er vakmensen staan. Stockfoto's doen het omgekeerde. |
| Merklogo's van wat je onderhoudt, plus de diagnoseapparatuur | De merkrijder controleert of jij zijn wagen mág uitlezen zonder de fabrieksgarantie te verliezen. |
| Vermelding dat de fabrieksgarantie behouden blijft (blokvrijstelling) | Haalt de meest voorkomende twijfel weg bij wie zijn wagen nog in garantie heeft. |
| Vervangwagen: beschikbaarheid, kostprijs, hoeveel er zijn | De praktische blokkade die de afspraak tegenhoudt. Benoem hem expliciet. |
| Online afspraakmodule met echte beschikbare dagen | "Wij contacteren u" is geen afspraak. De bezoeker wil vanavond om 22u zijn dinsdag vastleggen. |
| Openingsuren inclusief de zaterdagvoormiddag en de sluitingsperiode | Wordt vaker gecontroleerd dan welke pagina ook, en fout of ontbrekend kost je een bezoek. |
| Google-beoordelingen met het aantal en de link naar het profiel | In deze sector is het lokale oordeel doorslaggevend. Toon het cijfer én het aantal. |

## Wat hier absoluut niet mag

| Nooit | Waarom | In plaats daarvan |
|---|---|---|
| Zachte cards met `rounded-2xl` en `shadow-md` | Botst met alles waar deze sector over gaat. Het leest als een wellnesscentrum, niet als een werkplaats. | Blokken met een 2px rand in `#2A2D31`, radius 0–2px, geen schaduw. Contrast doet het scheidingswerk. |
| Stockfoto's van een lachende monteur met duim omhoog | Iedereen herkent ze en ze bewijzen niets over jouw garage. | Eigen foto's: de hal, de hefbrug, het team met voornamen, de balie. Middelmatige eigen foto's verslaan perfecte stockfoto's. |
| "Vraag uw prijs" als enige prijsinformatie | Bevestigt precies het wantrouwen waarmee de bezoeker binnenkwam. | Vanaf-prijzen met een eerlijke uitleg van wat het duurder maakt. |
| Een contactformulier in plaats van een afspraakmodule | Voegt twee dagen en drie telefoontjes toe aan iets dat in dertig seconden kon. | Een module met werkelijke beschikbaarheid: dienst → wagen → datum → bevestiging per mail en sms. |
| Lichtblauw met wit als hoofdkleuren | De standaardkleur van elke garagesite in België; je wordt er onzichtbaar door. | Het palet hierboven: cartelzwart, poetsdoek, remklauw-rood. |
| Een occasielijst zonder kilometerstand of bouwjaar in het overzicht | Dwingt tot doorklikken op wagens die niet passen, en leest als verstoppen. | Bouwjaar, kilometerstand, brandstof en prijs zichtbaar in de lijst, in tabular figures. |
| Merklogo's van merken die je niet officieel bedient | Juridisch risico en het schaadt je geloofwaardigheid bij wie het controleert. | Alleen de merken die je werkelijk onderhoudt, met de vermelding "onafhankelijke garage, alle merken" waar dat geldt. |
| Een verloop achter de kopregel | Verloopt op elk scherm anders en het is de duidelijkste sjabloon-tell. | Een vlakke `#0E0F11` grond of een echte foto met een scrim `bg-gradient-to-t from-black/70`. |

## Conversie

**Primair doel:** een vastgelegde afspraak in de agenda, met dienst en wagen erbij. Niet een telefoontje, niet een contactaanvraag: een bevestigde datum. Alles daarvoor is werk voor jouw balie in plaats van voor de site.

**Primaire CTA:** `Maak een afspraak`. Het formulier heeft vier stappen en niet meer: welke dienst (onderhoud, keuring nakijken, banden, herstelling, diagnose), welke wagen (merk, model, bouwjaar, of nummerplaat), welke dag en welk dagdeel, en de contactgegevens. Toon in stap 3 werkelijke beschikbaarheid, geen open kalender. Bevestig direct op het scherm en per sms met een concrete zin: `Dinsdag 18 augustus, 8u30. Breng je onderhoudsboekje mee.`

**Secundaire acties:** het telefoonnummer als `tel:`-link met de openingsuren ernaast, en `Bekijk onze occasies →` voor het deel van het verkeer dat niet voor service komt. Occasies krijgen hun eigen CTA per wagen: `Plan een proefrit`.

**Waar de CTA staat:** rechtsboven in de header in `#C8102E`, permanent zichtbaar. In de hero als gevulde knop met het telefoonnummer ernaast als tekst. Onderaan elk prijsblok als tekstlink met de dienst al voorgeselecteerd (`Onderhoud inplannen →`). Onderaan de keuringspagina. Mobiel in een vaste onderbalk over de volle breedte, gesplitst tussen `Bellen` en `Afspraak`. Nooit een zwevende chatbubbel. Die suggereert dat er iemand meekijkt die er niet is.

## Referenties

- **https://www.boschcarservice.com/be/nl/**: "Garage zoeken" en "Afspraak" staan als aparte items op het hoogste navigatieniveau, en de dienstenlijst noemt meer dan dertig concrete handelingen bij naam (ADAS-kalibratie, koppeling vervangen, schokdempers). Bruikbaar model voor hoe je van een dienstenlijst een zoekingang maakt.
- **https://www.123autoservice.be/nl**: De afspraakstroom is expliciet in drie stappen opgedeeld (type wagen en dienst → locatie → offerte of terugbelverzoek), en occasiewagens hebben een eigen navigatie-item naast de servicepagina's. Zo blijven de twee verkeersstromen gescheiden zonder twee sites te bouwen.
- **https://www.autoveiligheid.be**: De achttien keuringsstations zijn per provincie opgesomd met een eigen pagina per station, en de keuringstypes staan als afzonderlijke ingangen naast "Plan je bezoek". Het laat zien hoe je een verplichte, weinig geliefde handeling planbaar maakt in plaats van uitlegbaar.
- **https://www.singervehicledesign.com**: De pagina bestaat vrijwel volledig uit voertuigfotografie met minimale typografie eroverheen, en de primaire actie is `Inquire` in plaats van een aankoopknop. Het bewijst dat in automotive het beeld het argument is en de tekst er alleen bij hoeft te staan.

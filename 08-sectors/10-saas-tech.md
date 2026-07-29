# SaaS en tech

Dit is de zwaarst besmette sector van de zestien. Er bestaat een sjabloon dat zichzelf duizenden keren gekopieerd heeft, en elke afzonderlijke keuze erin is verdedigbaar terwijl het geheel volstrekt betekenisloos is geworden. Dit playbook is daarom het strengste van de reeks: het verbiedt meer dan het voorstelt. Lees de verbodslijst voor je één component bouwt.

## Wat de bezoeker echt komt doen

- Uitvissen of dit product het specifieke ding doet dat hij vanmorgen probeerde op te lossen. Niet de categorie, het ding. "Kan ik een webhook op een statuswijziging zetten" is de vraag, niet "workflow automation".
- Zien hoe het er in het echt uitziet en aanvoelt, zodat hij kan inschatten of hij het na de proefperiode nog gebruikt.
- De prijs vinden, en vooral: uitrekenen wat het bij zijn aantal gebruikers of zijn volume kost. Een prijs zonder rekensom is geen prijs.
- Nagaan of het koppelt aan wat hij al draait. De integratielijst is vaak de echte beslispagina.
- Inschatten of dit bedrijf er over twee jaar nog is. Changelog, documentatie, statuspagina en een echt adres doen dat werk.

## De emotionele opdracht

Je bezoeker heeft dit jaar al vier van deze sites gezien die er identiek uitzagen en heeft in twee gevallen spijt van zijn keuze. Zijn grondhouding is niet nieuwsgierigheid maar vermoeidheid. Alles wat lijkt op de vorige vier bevestigt zijn vermoeden dat er niets achter zit. De opdracht is dus niet "vertrouwen wekken" maar **herkenbaar anders zijn op een manier die met het product te maken heeft**. Een site die het echte product toont, met echte data, in een vormtaal die niemand anders in je categorie gebruikt, doet in tien seconden wat drie feature-kaarten nooit doen. Specificiteit is hier het enige overtuigingsmiddel dat nog werkt.

## Verboden: de standaardvolgorde

Deze paginavolgorde is verboden. Niet af te raden, verboden. Als je hem bouwt, bouw je een site die niemand van je concurrent kan onderscheiden.

```
hero met belofte
  ↓
drie feature-kaarten met een lucide-icoon per kaart
  ↓
logo-balk "Vertrouwd door"
  ↓
prijstabel met drie kolommen, middelste "Populair"
  ↓
FAQ-accordeon
  ↓
footer
```

Ook individueel verboden, ongeacht waar op de pagina:

| Verboden | Waarom |
|---|---|
| **Het nep-dashboard in de hero**: een verzonnen interface met verzonnen grafieken, "€ 48.291" en een oplopende lijn | Het is een tekening van een product, geen product. Iedereen die vaker dan eens een SaaS-site zag, ziet dat het niet echt is, en vraagt zich vervolgens af wat er nog meer niet echt is. |
| **De zwevende pill boven de kop**: "Vertrouwd door 200+ teams", "AI powered", "✨ Nu met AI" | De duidelijkste tell van een gegenereerde pagina. Als hij nergens naartoe linkt is hij decoratie; als het cijfer verzonnen is, is hij een leugen op de eerste regel. |
| **Paars en blauw in welke vorm dan ook** als merkkleur, accent of verloop | `#6366F1`, `#8B5CF6`, `#3B82F6` en hun verlopen zijn de kleur van de categorie geworden, niet van jouw product. Kies ze en je bent onzichtbaar. |
| **Aurora-achtergronden**, blurred blobs, mesh gradients, glasmorfisme | Kosten renderprestaties, dateren binnen het jaar en dragen nul informatie. Ze zijn er precies omdat er geen visueel idee was. |
| **Drie feature-kaarten met een lijnicoon per kaart** | De iconen betekenen niets ("een vinkje in een cirkel" = betrouwbaar?) en drie is nooit het echte aantal. |
| **Een logo-balk zonder toestemming of zonder klantrelatie** | Verifieerbaar onwaar en juridisch een probleem. |
| **"Get started" / "Start gratis" naast "Book a demo" als twee gevulde knoppen** | Twee gelijkwaardige knoppen betekent dat er geen beslissing genomen is. |
| **Een tellertje dat naar 10.000 optelt bij scroll** | Als het cijfer klopt, is de animatie overbodig. Als het niet klopt, is de animatie fraude. |

## Wat er in plaats daarvan in de hero staat

Eén van deze drie, geen vierde optie:

1. **Een echt productbeeld**, screenshot van de werkelijke applicatie met werkelijke data. Laat hem rechts buiten de container bloeden zodat duidelijk is dat de interface verdergaat. Één ononderbroken schermafbeelding op ware verhouding, geen drie gestapelde mockups op een schuine as.
2. **Een echte interactie in de pagina zelf.** Een invoerveld dat werkelijk iets doet, een schuifregelaar die een echte berekening toont, een codeblok waar de bezoeker zijn eigen waarde in kan typen en het antwoord ziet. Twintig seconden hands-on verslaan elke feature-lijst.
3. **Het fysieke ding**, als je product er een heeft. Hardware, een kaart, een apparaat, een boek, de mensen. Fotografie van iets dat bestaat is per definitie geloofwaardiger dan een render.

## Typografie

| Rol | Voorstel | Waarom |
|---|---|---|
| Display | **Instrument Sans**, 600, `letter-spacing: -0.025em`, `line-height: 1.05` | Een neo-grotesk met een eigen karakter in de a, g en R, waar Inter juist opvalt door het ontbreken daarvan. Op 64px+ zie je het verschil onmiddellijk. |
| Alternatief display | **Bricolage Grotesque**, 700, optische maat variabel, `letter-spacing: -0.03em` | Als je categorie volledig grijs is: dit heeft een merkbare eigenheid zonder onleesbaar te worden. Alleen voor display, nooit voor body. |
| Body | **Schibsted Grotesk**, 400, 17px, `line-height: 1.6`, `letter-spacing: 0` | Rustig, hoge x-hoogte, houdt lange uitleg leesbaar zonder de display te beconcurreren. |
| Cijfers, code, labels | **Geist Mono**, 400/500, 13px, `font-variant-numeric: tabular-nums` | Voor prijzen, limieten, API-voorbeelden en statuslabels. Geeft de pagina de textuur van gereedschap in plaats van marketing. |
| Micro-labels | **Geist Mono**, 500, 11px, uppercase, `letter-spacing: 0.08em` | Sectienummers, versienummers, changelog-datums. |

**Inter is niet verboden maar wel verdacht.** Als je hem kiest, schrijf in `DESIGN.md` waarom hij beter is dan de drie alternatieven hierboven. Kun je dat niet, dan koos je hem omdat het de standaard was.

## Palet

Blauw en paars zijn hier volledig van tafel. Drie richtingen die wel werken voor tech, elk met een echte herkomst:

**Richting A: Grafiet en zuurgeel.** Donker, instrumentachtig, werkt voor developer- en infrastructuurproducten.

| Kleur | Hex | Herkomst |
|---|---|---|
| Grond | `#111214` | Een gepoedercoate 19"-rackfront onder halogeenlicht. Nooit `#000000`. |
| Oppervlak | `#1A1C1F` | Hetzelfde metaal, één trap hoger belicht. Elevatie is licht, geen schaduw. |
| Tekst | `#E5E7E4` | Gezeefdrukte belettering op datacenterapparatuur. |
| Gedempte tekst | `#8B8F8B` | Uitgesleten labeltekst op oudere apparatuur. |
| Accent | `#D7F04A` | Het geel van een reflecterend veiligheidsvest en van oscilloscoop-fosfor. Alleen op de primaire actie en de actieve staat. |

**Richting B: Inkt op papier.** Licht, tekstgedreven, werkt voor producten waar redactie, documentatie of vakkennis het verkoopargument is.

| Kleur | Hex | Herkomst |
|---|---|---|
| Grond | `#F4F1EA` | Ongestreken drukwerkpapier, 90 g. |
| Tekst | `#14130F` | Zwarte offsetinkt, nooit volledig zwart op papier. |
| Gedempte tekst | `#6E6A5E` | Dezelfde inkt in halftoon. |
| Kader | `#DAD4C6` | De vouwlijn van dat papier. Alle scheidingen zijn 1px hairlines. |
| Accent | `#B4472B` | Menie, en de rode stempelinkt van een goedkeuringsstempel. |

**Richting C: Staal en oker.** Neutraal donker met een warm accent; werkt voor B2B-platformen die niet als speeltje willen ogen.

| Kleur | Hex | Herkomst |
|---|---|---|
| Grond | `#1C1B18` | Gebruinde staalplaat. |
| Oppervlak | `#26241F` | Dezelfde plaat, gepolijst. |
| Tekst | `#F0EBE1` | Kalk op beton. |
| Kader | `#3B382F` | De naad tussen twee platen. |
| Accent | `#E0A32E` | Messing, en de okerkleurige markeringsverf op fabrieksvloeren. |

Vermijd, in alle drie de richtingen: elk verloop tussen twee kleurtonen, elke `box-shadow` met pure zwarte kleur (gebruik de grondkleur op 40% alfa), en elke rand in een volle kleur. Randen zijn `rgba(255,255,255,0.09)` op donker of `rgba(20,19,15,0.12)` op licht.

## Layoutprincipe

De pagina is een demonstratie in vijf bewegingen, niet een brochure met secties.

```
┌───────────────────────────────────────────────────────────┐
│ merk    Product  Prijzen  Docs  Changelog      Inloggen ▸ │
├───────────────────────────────────────────────────────────┤
│  Eén zin die zegt wat het doet, voor wie,                  │
│  in de woorden van de gebruiker.                           │
│  Eén zin extra met de informatie die de kop niet gaf.      │
│                                                            │
│  ┌──────────────────────────────────────────────────┐──── │
│  │  ECHTE INTERACTIE: typ hier iets in en zie het   │ ▸   │
│  │  resultaat. Of: één echte schermafbeelding die   │ ▸   │
│  │  rechts buiten de container doorloopt.           │ ▸   │
│  └──────────────────────────────────────────────────┘──── │
│  [ Probeer het hier ]   Documentatie →                     │
├───────────────────────────────────────────────────────────┤
│  01: HET PROBLEEM, in de taal van de bezoeker.            │
│  Twee alinea's. Geen kaarten. Geen iconen.                 │
├───────────────────────────────────────────────────────────┤
│  02: DE WERKELIJKE WERKWIJZE, stap voor stap, elk          │
│  met een schermafbeelding van de échte stap.               │
│  ┌───────────────┐  Stap 1: wat je doet                    │
│  │  screenshot   │  Wat er dan gebeurt en waarom dat        │
│  └───────────────┘  anders is dan bij het alternatief.      │
├───────────────────────────────────────────────────────────┤
│  03: PRIJS met een rekenveld (aantal ▸ € per maand)        │
├───────────────────────────────────────────────────────────┤
│  04: CHANGELOG, laatste 5 regels, met echte datums         │
├───────────────────────────────────────────────────────────┤
│  05: WIE DIT BOUWT, namen, foto's, adres, statuspagina     │
└───────────────────────────────────────────────────────────┘
```

Ritme: de hero is nadrukkelijk **niet** `min-h-screen`. Laat de bovenkant van sectie 01 zichtbaar op 1440×900. Secties wisselen af in dichtheid: een lange leessectie, dan een brede beeldsectie, dan weer tekst. Nooit vier secties na elkaar met dezelfde kaartenopbouw.

Mobiel: de interactieve hero valt terug op een echte schermopname als video (`muted playsinline`, poster vooraf, nooit boven 1,2 MB) of op één screenshot met een `Probeer het` link. Het rekenveld bij de prijs blijft mobiel bestaan. Dat is de sectie met de hoogste mobiele intentie. De horizontaal doorlopende screenshot krijgt op mobiel `overflow-x: auto` met zichtbare scrollrand, niet een geschaalde versie waarin niets leesbaar is.

## Alternatieve paginavolgorde

Kies één van deze twee in plaats van de standaardvolgorde. Beide zijn getest patroon, geen experiment.

**Volgorde 1: De demonstratie.**
`hero met werkende interactie` → `wat er zonet gebeurde, in één alinea uitgelegd` → `de drie momenten in de werkelijke workflow, elk met een echte schermafbeelding` → `wat het niet doet (expliciete afbakening)` → `prijs met rekenveld` → `changelog` → `wie het bouwt, met adres en statuspagina`.

**Volgorde 2: Het argument.**
`hero met één stelling en één echt beeld` → `het probleem in de taal van de bezoeker, twee alinea's` → `waarom de bestaande oplossingen het niet oplossen, met naam en toenaam` → `hoe dit het wel doet, in doorlopende tekst met beelden ertussen` → `één diepgaande klantcasus met cijfers en een citaat van een genoemd persoon` → `prijs` → `begin hier`.

Wat beide doen en de standaardvolgorde niet: ze verplichten je tot doorlopende tekst. Kaarten laten je toe niets te zeggen; een alinea niet.

## Signature-ideeën

1. **De hero is een werkend veld.** Zet de kleinst mogelijke echte versie van je product in de pagina: een invoerveld dat een echte API-respons toont, een schuifregelaar met een echte berekening, een editor met één regel voorbeeldcode die de bezoeker mag aanpassen. Rate-limit de backend en cache agressief. Dit is één component bouwen in plaats van een mockup tekenen, en het overtuigt tien keer harder.
2. **Changelog op de homepage.** Vijf regels met echte datums, elk linkend naar de volledige notitie. Het is het goedkoopste bewijs dat het product leeft, en het is het enige element dat een verlaten concurrent niet kan namaken. Datums in Geist Mono, `2026-07-14` in ISO-notatie.
3. **Expliciete afbakening.** Eén sectie met de kop `Waar dit niet voor is`, met drie eerlijke regels. "Geen boekhouding, geen facturatie, geen tijdregistratie." Het kost je bezoekers die toch niet gekocht hadden en het levert je geloofwaardigheid op bij iedereen die blijft. Vrijwel niemand doet dit, dus het valt op.
4. **Prijs met een rekenveld in plaats van drie kolommen.** Eén invoerveld (`Aantal gebruikers` of `Aantal verzendingen per maand`), en het bedrag verandert direct mee in Geist Mono met tabular figures. Daaronder in tekst welke grens welke sprong veroorzaakt. Dit beantwoordt de echte vraag, die de driekolomstabel juist verbergt.

## Vertrouwenselementen die er echt toe doen

| Element | Waarom het werkt in deze sector |
|---|---|
| Een changelog met datums van de afgelopen weken | Bewijst dat het product onderhouden wordt. Meer waard dan elke klantlogo-balk. |
| Publieke documentatie zonder inlog | De technische beoordelaar leest de docs voor hij de marketingpagina gelooft. |
| Een statuspagina met historische uptime | Verifieerbaar, en het feit dat je hem publiek durft te zetten is het signaal. |
| Namen en gezichten van de mensen die het bouwen | In een categorie vol anonieme landingspagina's is een team met namen een onderscheid op zich. |
| Een echt vestigingsadres en BTW-nummer in de footer | Nederlandstalige B2B-kopers controleren dit. Een footer zonder adres is een rode vlag. |
| Prijs die zichtbaar is zonder gesprek | "Neem contact op voor prijzen" op elk plan kost je iedereen die zelf beslist. |
| Eén diepgaande klantcasus met cijfers en een genoemde persoon | Verslaat twaalf logo's en drie anonieme quotes met een straal voluit. |
| Een exportfunctie die je expliciet benoemt | "Je data blijft van jou, exporteer alles als CSV of via de API" haalt de grootste blokkade weg. |

## Wat hier absoluut niet mag

| Nooit | Waarom | In plaats daarvan |
|---|---|---|
| Nep-dashboard met verzonnen grafieken in de hero | Het is een tekening van een product. De bezoeker ziet het en gaat twijfelen aan de rest. | Eén echte schermafbeelding met echte (of geanonimiseerde) data, of een werkend veld in de pagina. |
| De zwevende pill boven de kop | De duidelijkste tell van een gegenereerde pagina; linkt meestal nergens heen. | Niets. Begin met de kopregel. Als het cijfer waar is, zet het in een eigen sectie met de bron erbij. |
| Paars of blauw als merk- of accentkleur | Het is de kleur van de categorie geworden, niet van jou. Je wordt er onzichtbaar door. | Richting A, B of C hierboven. |
| Aurora, mesh gradients, blurred blobs, glasmorfisme | Renderkosten, dateert binnen het jaar, draagt nul informatie. | Een vlakke grond en één sterk beeld. Structuur komt uit typografie en hairlines. |
| Drie feature-kaarten met een lijnicoon per kaart | De iconen betekenen niets en drie is nooit het echte aantal. | Doorlopende tekst met een echte schermafbeelding per stap in de werkelijke workflow. |
| "Vertrouwd door 200+ teams" zonder namen | Onverifieerbaar, dus wordt het als onwaar gelezen. | Eén klant, voluit, met wat ze doen en welk cijfer veranderde. |
| Een logo-balk met logo's van bedrijven die geen klant zijn | Verifieerbaar onwaar en juridisch een probleem. | Geen logo-balk tot je er vijf hebt die het echt zijn en het schriftelijk goedvonden. |
| `min-h-screen` hero met alles verticaal gecentreerd | Niets signaleert dat er een pagina onder zit. | `pt-32 pb-24`, met de bovenrand van de volgende sectie zichtbaar. |
| Twee gevulde knoppen naast elkaar in de hero | Er is geen beslissing genomen voor de bezoeker. | Eén gevulde knop, en de tweede actie als tekstlink met een pijl. |
| Een animatie die de kopregel letter voor letter intypt | Vertraagt de LCP, en het `h1` moet server-gerenderd in de DOM staan. | Een statische kop. Als er beweging moet zijn, één fade van 300ms op het beeld eronder. |

## Conversie

**Primair doel:** een account dat daadwerkelijk gebruikt wordt, niet een aanmelding. Meet daarom niet de registratie maar de eerste betekenisvolle handeling in het product, en ontwerp de hele pagina naar dat moment toe.

**Primaire CTA:** `Probeer het gratis` als er een zelfbedieningsproduct is, of `Bekijk de demo` als de verkoop via een gesprek loopt. Nooit allebei als gevulde knop. Zet direct onder de knop in kleine tekst wat er gebeurt: `Geen kaartgegevens nodig · 14 dagen · opzeggen in één klik`. Die regel doet meer werk dan de knop zelf. Vermijd `Aan de slag`. Het zegt niet wat de volgende stap is.

**Secundaire actie:** `Documentatie →` als tekstlink met pijl. Bij een verkoop-gedreven product: `Prijzen bekijken →`. De secundaire actie is nooit een tweede gevulde knop en nooit een chatbubbel.

**Waar de CTA staat:** rechtsboven in de header, waar hij bij scroll blijft staan zodra de hero-CTA uit beeld is. In de hero, direct onder de subkop. Onderaan de prijsberekening. En één keer helemaal onderaan de pagina, met een andere formulering dan bovenaan (`Begin met één project` in plaats van `Probeer het gratis`), zodat wie helemaal doorleest niet dezelfde zin twee keer krijgt. Nooit een zwevende bubbel rechtsonder en nooit een exit-intent overlay.

## Referenties

- **https://oxide.computer**. De hero laat je wisselen tussen één, twee en drie fysieke racks, en toont daarnaast CLI, API en Console als drie echte interfaces. Er is geen verzonnen grafiek te bekennen: het is fotografie van hardware die bestaat plus schermafbeeldingen van de console die je krijgt.
- **https://linear.app**. De schermafbeeldingen op de pagina zijn de werkelijke applicatie: issues, tijdlijnen, code-diffs en een pulse-dashboard, niet een geïllustreerde interpretatie ervan. De changelog staat als eigen sectie op de homepage, met datums.
- **https://tailscale.com**. De use-casesectie is gesplitst naar rol (IT, security, DevOps, engineering) in plaats van naar feature, zodat elke bezoeker zijn eigen ingang vindt. De hero toont de statusinterface op een laptopscherm, het scherm dat je na installatie werkelijk ziet.
- **https://www.figma.com**. Elke sectie toont echte werkruimtes, componenten en gereedschappen uit de applicatie zelf, tot en met vectorbewerking en codegeneratie. Bruikbaar als bewijs dat een productpagina volledig uit echte interface kan bestaan; hun paarse accent is precies wat dit playbook je verbiedt over te nemen.

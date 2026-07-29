# Advocaat, notaris en boekhouder

## Wat de bezoeker echt komt doen

- **Toetsen of dit kantoor zijn specifieke probleem al eens heeft opgelost.** Niet "recht" maar
  "aanneming die stilvalt", "ontslag om dringende reden", "overdracht van een handelszaak".
  Wie zijn dossier niet in de expertiselijst herkent, klikt weg.
- **De persoon zoeken, niet het kantoor.** Men mandateert een naam. De bezoeker wil weten wie
  het dossier doet, hoe lang die het al doet, en waar hij over publiceert.
- **De kostenlogica begrijpen.** Niet het bedrag (dat kan je niet geven) maar het mechanisme:
  uurtarief, forfait, abonnement, kantoorkosten, provisie. Onduidelijkheid over erelonen is de
  belangrijkste reden waarom mensen een gesprek uitstellen.
- **Discretie inschatten.** Wie hier langskomt, heeft vaak een probleem dat hij aan niemand
  vertelt. Alles wat naar publiciteit ruikt, wekt argwaan.
- **Contact opnemen met een lage sociale drempel.** Een telefoonnummer, een naam, en de
  zekerheid dat een eerste gesprek hem nergens toe verbindt.

## De emotionele opdracht

Wegnemen: de schaamte of de stress van het onderliggende dossier, en de angst voor een factuur
die uit het niets komt. Opwekken: het gevoel tegenover iemand te zitten die dit vaker heeft
gezien, die niet zal schrikken, en die precies weet wat de volgende stap is. Autoriteit hier is
niet luidheid maar kalmte: smalle kolommen, veel lucht, weinig kleur, geen enkele beweging die
om aandacht vraagt. De site moet lezen als een goed gezet advies, niet als een aanbod. Eén
verkeerd geplaatste animatie kost meer geloofwaardigheid dan een ontbrekende pagina.

## Typografie

| Rol | Voorstel | Waarom |
|---|---|---|
| Display | **Spectral** 500, clamp(34px, 3.8vw, 58px), `-0.01em`, `line-height: 1.15` | Een schreef met contrast, ontworpen voor scherm. Draagt gezag zonder in advocatencliché te vervallen |
| Kop 2/3 | **Spectral** 500, 26/20px, `line-height: 1.3` | Kleine sprongen. Grote sprongen zijn theatraal, en theater is hier verlies |
| Body | **Source Serif 4** 400, 18px/1.72, `max-width: 62ch` | Schreef op schreef, maar met een lagere contrastgraad: leest 900 woorden lang comfortabel |
| Labels / nav / metadata | **Public Sans** 500, 12px, `letter-spacing: 0.12em`, uppercase | De enige sans op de site. Draagt datums, rechtsgebieden en balie-informatie |
| Bedragen en tarieven | **Public Sans** 500, 15px, `font-variant-numeric: tabular-nums` | Een tarievenschema dat niet uitlijnt, leest als slordig, en slordig is dodelijk in deze sector |

Maximaal twee families. Body is nooit breder dan 62ch, ook niet op een 1920px-scherm: de
kolom blijft smal en de rest is marge. Dat is het hele layoutargument.

## Palet

| Kleur | Hex | Herkomst |
|---|---|---|
| Ground | `#F7F5F0` | Vellum en dossierpapier. Warm gebroken wit, iets vergeeld, nooit `#FFFFFF` |
| Inkt | `#161A22` | Zwarte vulpeninkt op dat papier: bijna zwart met een blauwe onderlaag |
| De ene diepe kleur | `#5A1E2B` | Het bordeauxrode leer van een gebonden wetboek. Links, actieve navigatie, de enige knop |
| Messing | `#8C7A5C` | De naamplaat naast de voordeur. Hairlines boven sectiekoppen, en niets meer |
| Potloodgrijs | `#6E6A62` | Een annotatie in de marge. Secundaire tekst, datums, functietitels |
| Dossieromslag | `#DCD6C9` | De rand van een oude bruine omslag. Tabelranden en scheidingslijnen |

Kleurdichtheid ligt rond 3% van het scherm. Als je het palet moet gebruiken om de pagina
interessant te maken, is de typografie niet goed genoeg.

**Vermijd:** goudverloop; de combinatie `slate-900` + `blue-600` die elke gegenereerde
zakelijke site draagt; en donkere secties om "premium" te suggereren. Vermijd ook een tweede
accent: hier is er geen enkele reden voor.

## Layoutprincipe

Eén smalle kolom tekst in een groot vlak papier: het kantoor bewijst zijn oordeelsvermogen
door wat het weglaat.

```
┌──────────────────────────────────────────────────────────────┐
│ KANTOORNAAM        EXPERTISE  TEAM  PUBLICATIES  CONTACT     │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│        Advocaten voor bouwrecht en                           │
│        overheidsopdrachten.                                  │
│                                                              │
│        Eén kolom van 58ch, links uitgelijnd, geen beeld.     │
│        Sinds 1994 in Gent. Vier vennoten.                    │
│                                                              │
│        [ Plan een eerste gesprek ]                           │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  EXPERTISE                         ─── hairline #8C7A5C ───  │
│  Bouwrecht en aanneming                                  →   │
│  Overheidsopdrachten                                     →   │
│  Vastgoed en mede-eigendom                               →   │
│  Ondernemingsrecht                                       →   │
│  (een lijst met regels, géén kaartenraster)                  │
├──────────────────────────────────────────────────────────────┤
│  TEAM        ┌──────┐ ┌──────┐ ┌──────┐   4:5 portret,       │
│              │ foto │ │ foto │ │ foto │   zwart-wit, één licht│
│              └──────┘ └──────┘ └──────┘                       │
│              Mr. …     Mr. …     Mr. …                        │
│              VENNOOT   VENNOOT   ADVOCAAT                     │
├──────────────────────────────────────────────────────────────┤
│  PUBLICATIES                                                 │
│  12.06.2026  Titel van de bijdrage        · één zin       →  │
│  03.04.2026  Titel van de bijdrage        · één zin       →  │
├──────────────────────────────────────────────────────────────┤
│  WAT KOST HET   uurtarief · forfait · abonnement · provisie  │
├──────────────────────────────────────────────────────────────┤
│  CONTACT  adres · telefoon · balie · ondernemingsnummer      │
└──────────────────────────────────────────────────────────────┘
```

Ritme: secties van `py-32` desktop / `py-18` mobiel. Elke sectiekop krijgt een hairline van
1px `#8C7A5C` erboven op volle kolombreedte: dat is de enige decoratie op de hele site.
Geen kaarten, geen schaduwen, geen achtergrondvlakken: scheiding gebeurt met ruimte en lijn.
Op mobiel blijft alles één kolom en verandert er structureel niets; alleen `py` en type
clampen naar beneden. Het teamraster wordt twee kolommen, niet één, zodat de pagina niet in
een eindeloze rij portretten verandert.
Portretten zijn zwart-wit of gedempt naar één grade, 4:5, dezelfde lichtopstelling. Kleur in
portretten trekt het oog weg van de tekst.

## Signature-ideeën

1. **Publicaties met datum vooraan, als een register.** Een gezette lijst (datum, titel, één
   zin) in plaats van kaarten met leesduur en thumbnail. Vijftien echte bijdragen in dat
   formaat zijn het sterkste autoriteitsbewijs dat een kantoor kan tonen, en ze zijn niet na
   te maken.
2. **Een expliciet blok "Wat kost het".** Geen bedragen, wel het mechanisme: het uurtarief per
   niveau, wanneer forfait geldt, hoe kantoorkosten worden aangerekend, wanneer je een
   provisie vraagt, en de zin "u krijgt vooraf een schriftelijke raming". Bijna geen kantoor
   doet dit; wie het wel doet, haalt de grootste drempel weg.
3. **Zaakschetsen zonder namen.** Vijf blokjes van vier regels: het probleem, de inzet, de
   afloop, de doorlooptijd. Geanonimiseerd, uiteraard. Concreter dan elke expertiselijst en
   het respecteert het beroepsgeheim.
4. **Eén gefotografeerd detail van het kantoor** (een trappenhuis, een dossierkast, een raam),
   groot, in dezelfde grade als de portretten, ergens halverwege de pagina. Geen hero, geen
   sfeercarrousel: één beeld dat aantoont dat er een fysiek adres met een geschiedenis is.

## Vertrouwenselementen die er echt toe doen

| Element | Waarom het werkt in deze sector |
|---|---|
| Balie van inschrijving per advocaat (bv. balie Gent, sinds 2009) | Publiek toetsbaar via de OVB-lijst en de enige harde bevoegdheidscontrole die bestaat |
| Publicaties met vindplaats (tijdschrift, jaar, nummer) | Onderscheidt echte expertise van een gekopieerde dienstenlijst |
| Spreekbeurten, doceeropdrachten, redactieraden | Autoriteit die door derden is toegekend, niet door het kantoor zelf |
| Uitgeschreven ereloonlogica | Neemt de grootste angst weg zonder één bedrag te noemen |
| Ondernemingsnummer, BIV/ITAA- of notarisnummer in de footer | Voor boekhouders bepaalt de ITAA-erkenning of ze überhaupt bepaalde handelingen mogen stellen |
| Vermelding beroepsgeheim en verwerking van gegevens | In de enige sector waar discretie zelf het product is, telt dit als kenmerk, niet als kleine lettertjes |
| Verzekering beroepsaansprakelijkheid met naam van de verzekeraar | Voor grotere dossiers is dit de eerste vraag van de tegenpartij en van de bank |
| Oprichtingsjaar en aantal vennoten | Continuïteit. Een kantoor dat 30 jaar bestaat, bestaat er waarschijnlijk nog 5 |

Nooit klantenlogo's van bedrijven die je bijstaat, tenzij met uitdrukkelijke schriftelijke
toestemming, en zelfs dan zelden. Cliëntenlijsten schenden precies de discretie die de
bezoeker komt toetsen.

## Wat hier absoluut niet mag

| Nooit | Waarom | In plaats daarvan |
|---|---|---|
| Speelse motion: springende iconen, tellers die oplopen, hover-tilt | Leest als een start-up die aandacht koopt. In dit vak is aandacht kopen een zwaktesignaal | Eén fade van 200ms op linkkleur, verder niets |
| Illustraties: line-art, blob-mensjes, isometrische scènes | Ontkent de ernst van het dossier waarmee de bezoeker komt | Eén gefotografeerd detail, of alleen typografie |
| Verlopen: in de hero, op knoppen, achter tekst | Voegt niets toe, dateert, en is de duidelijkste tell van een gegenereerde pagina | Vlakke kleur `#5A1E2B` op de enige knop |
| Weegschaal, rechtershamer, Vrouwe Justitia, kolommen | De rechtershamer bestaat in het Belgische recht niet eens. Iconografie van een Amerikaanse serie | Het kantoornaamwoord, gezet in Spectral, en verder niets |
| Stockfoto van handen boven een contract | Betekenisloos, herkenbaar, en het suggereert dat je geen eigen kantoor hebt om te fotograferen | Echte portretten en één echt interieurbeeld |
| "Uw partner in juridisch advies" | Elke concurrent schrijft het. Nul onderscheidend vermogen | "Wij voeren bouwgeschillen voor aannemers en bouwheren. Sinds 1994." |
| Chatbot of live-chatwidget | Niemand typt een echtscheiding of een fiscale controle in een chatvenster | Telefoonnummer, e-mail per advocaat, en een formulier van vier velden |
| Resultaatclaims ("98% gewonnen zaken") | In België deontologisch problematisch en bij het publiek onmiddellijk verdacht | Zaakschetsen zonder uitkomstclaim, of publicaties |
| Donkere modus als merkkeuze | Papier is de metafoor van het vak. Donker breekt hem | `#F7F5F0` als enige grond |

## Conversie

**Primair doel:** een eerste gesprek, telefonisch of op kantoor. Niet een download, niet een
nieuwsbrief. Het dossier begint pas als iemand het uitspreekt.

**Primaire CTA:** `Plan een eerste gesprek`. "Eerste" impliceert dat er nog niets vastligt, en
dat verlaagt de drempel meer dan welke prijsvermelding ook. Voor notarissen werkt
`Maak een afspraak`; voor boekhouders `Vraag een kennismaking`.
Nooit: "Contacteer ons", "Vraag een offerte", "Ontdek onze diensten".

**Secundaire actie:** `Bel 09 123 45 67` als tekstlink met `tel:`, plus een direct e-mailadres
per advocaat op de teampagina. Geen tweede gevulde knop, ooit.

**Waar de CTA staat:** één keer in de hero; onderaan elke expertisepagina met de zin "Speelt
dit bij u? Eerste gesprek van 30 minuten, vrijblijvend."; onderaan elk persoonsprofiel, direct
onder het e-mailadres van die persoon; en in de footer. **Niet** in de header: een
permanent zichtbare knop leest hier als verkoop. Het formulier vraagt naam, telefoon,
e-mailadres en één vrij veld "waarover gaat het". Vier velden. Geen documentupload en geen
detailvragen: dat hoort in het gesprek, niet in een webformulier dat niemand als vertrouwelijk
ervaart.

## Referenties

- **[eubelius.com](https://www.eubelius.com/nl)**: de homepage stuurt bezoekers met twee
  gelijkwaardige knoppen naar "Onze advocaten" en "Onze expertise", en verder nergens heen:
  de site erkent dat de bezoeker ofwel een persoon ofwel een rechtsgebied zoekt; de circa 25
  expertisedomeinen staan uitgeschreven van arbeidsrecht tot kapitaalmarkttransacties, zodat
  een bezoeker zijn eigen dossier letterlijk kan aanwijzen.
- **[liedekerke.com](https://www.liedekerke.com)**: "Find a lawyer" staat als enige dominante
  actie meteen onder de baseline, boven alle nieuws en inzichten; de expertise is in drie
  aparte assen opgedeeld (17 rechtsgebieden, transversale thema's zoals ESG en cybersecurity,
  en 12 sectoren), waardoor iemand die zijn probleem niet als rechtsgebied kan benoemen, het
  via zijn sector alsnog terugvindt.
- **[notaris.be](https://www.notaris.be)**: de kostenvraag wordt niet met een tarievenlijst
  maar met rekenmodules per verrichting beantwoord (aankoop, hypotheek, schenking), zodat de
  bezoeker een bedrag voor zijn eigen situatie krijgt in plaats van een tabel die hij moet
  interpreteren; de hele navigatie is opgebouwd rond levensgebeurtenissen (wonen, relatie,
  erven en schenken, ondernemen) in plaats van rond akten.

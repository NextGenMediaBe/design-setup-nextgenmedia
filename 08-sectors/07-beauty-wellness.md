# Beauty, kapper en wellness

## Wat de bezoeker echt komt doen

- Je smaak beoordelen. Ze kijkt naar het werk op je site zoals ze naar een portfolio kijkt:
  is dit het soort kapsel of gelaatsbehandeling dat ik zou willen dragen.
- Een moment zoeken dat past. Zaterdagvoormiddag, of donderdag na 17u. Als dat er niet in
  staat, is de rest irrelevant.
- De prijs van één specifieke behandeling vinden — knippen bij lang haar, een balayage, een
  massage van 60 minuten — en niet de prijs van "een behandeling".
- Uitzoeken wie het doet. Bij kappers en wellness is de behandelaar de aankoop; ze wil weten
  of ze bij dezelfde persoon terugkomt.
- Boeken zonder te bellen. Bellen tijdens de werkuren is voor een groot deel van je publiek
  de reden dat ze het uitstelt.

## De emotionele opdracht

Wegnemen: de angst voor een verkeerde smaak. Ze is een keer buitengekomen met iets wat ze
niet gevraagd had, en dat herinnert ze zich beter dan tien goede keren. Alles wat je toont
moet daarom werk zijn, niet sfeer: echte klanten, echt licht, herkenbare haarlengtes en
huidtinten, geen zwart-witportret van een model dat niets liet doen. Opwekken: het gevoel dat
er iets voor haar gereserveerd wordt. Een agenda die vrije uren toont is zelf al het gevoel —
een concreet tijdstip, met haar naam eraan, in een omgeving die er verzorgd uitziet. Rust in
het ontwerp is hier geen esthetische voorkeur maar een functionele: een drukke pagina leest
als een druk salon, en daar wil niemand ontspannen.

## Typografie

| Rol | Voorstel | Waarom |
|---|---|---|
| Display | Marcellus 400, `tracking-[0.01em]`, `leading-[1.12]`, 44–64px, nooit vet | Eén elegante serif met humanistische, gebeitelde vormen. Hij draagt de hele elegantie van de site, dus hij is de enige serif. Bij zwaardere sizes iets positieve tracking: Marcellus loopt anders dicht. |
| Body | Karla 400, 17px, `leading-[1.7]`, `max-w-[62ch]` | Neutrale grotesk met genoeg karakter om niet systeem-achtig te ogen. Ruime leading, want de teksten zijn kort en de witruimte doet het werk. |
| Prijslijst | Karla 500 met `font-variant-numeric: tabular-nums`, 16px | Behandeling links, prijs rechts uitgelijnd, met een dunne stippellijn ertussen. Zonder tabulaire cijfers lijnt `€ 45` niet op `€ 120` en ziet je tarieflijst er slordig uit. |
| Utility | Karla 500, 11px, uppercase, `tracking-[0.18em]` | Navigatie, duurlabels (`60 MIN`), categoriekoppen. Ruime tracking is hier de hele stijl: klein, wijd, rustig. |

Type-contrast blijft laag. Van 17px body naar 52px display is genoeg; alles daarboven wordt
luid, en luid is precies het tegenovergestelde van wat verkocht wordt.

## Palet

| Kleur | Hex | Herkomst |
|---|---|---|
| Ongebleekt linnen | `#F7F3EE` | Een gewassen linnen handdoek op een stapel. Achtergrond van elke pagina; nooit `#FFF`, want puur wit maakt huidtinten in foto's grauw. |
| Notenhout | `#3A322E` | Het blad van een oude kaptafel in noten. Tekstkleur, in plaats van zwart. |
| Porselein | `#E9D6C7` | Een lichte huidtint tegen een witte wasbak, en de kleur van een porseleinen schaaltje. Vullingen, hovervlakken, de agendabalk. |
| Ongeglazuurde klei | `#B4705B` | Een terracotta pot zonder glazuur, en de tint van gebruikte kleurhanddoeken. Enige accent: boekingsknop, actieve datum, onderlijning op hover. |
| Messing | `#A98B5D` | Een messing kraan die matgeworden is. Dunne lijnen, iconen, de rand rond een portret. Nooit als vulvlak. |
| Eucalyptus | `#7E8C7B` | Een tak eucalyptus in de douche. Alleen voor de wellnesskant van een gemengd concept, en dan als achtergrondvlak van één sectie. |

**Vermijd:** goudverloop, glitter, roze `#FF6FA5`, en elk verloop van paars naar roze. Die
combinatie is het visuele handschrift van goedkope nagelstudio-templates en trekt je prijs
onmiddellijk naar beneden. Vermijd ook zwart-op-wit met een dun script-lettertype als logo —
zie de tabel hieronder.

## Layoutprincipe

Redactioneel: een tijdschriftpagina met veel wit, waarin één groot beeld en één korte tekst
per scherm staan, en waar de agenda het enige element is dat zich als interface gedraagt.

```
┌────────────────────────────────────────────────────────────┐
│  LOGO         BEHANDELINGEN  TEAM  OVER  CONTACT   [Boek]  │  ← 80px, linnen, niet sticky
├────────────────────────────────────────────────────────────┤
│                                                            │
│      ┌──────────────────────────┐                          │
│      │                          │   Kleur die meegroeit    │  ← Marcellus 56px
│      │   [ foto 4:5, klant in   │   met wat je al hebt.    │
│      │     daglicht, van opzij ]│                          │
│      │                          │   Salon in Gent. Boek    │  ← Karla 17px
│      │                          │   online, ook 's avonds. │
│      └──────────────────────────┘   [ Boek een afspraak ]  │
│                                                            │
├────────────────────────────────────────────────────────────┤
│   BEHANDELINGEN                                            │  ← 11px caps, tracked
│   Knippen & stylen  · · · · · · · · · · · 45 min    € 48   │  ← tabulair, rechts
│   Balayage          · · · · · · · · · · · 180 min  € 165   │
│   Gelaatsverzorging · · · · · · · · · · · 60 min    € 79   │
│                                    Volledige prijslijst →  │
├────────────────────────────────────────────────────────────┤
│   [ werk 1 ]   [ werk 2 ]   [ werk 3 ]   [ werk 4 ]        │  ← 4:5, één grade
│   Echte klanten, geen modellen. Naam van de behandelaar.   │
├────────────────────────────────────────────────────────────┤
│   ┌───────────────────────────────────────────────────┐    │
│   │  BESCHIKBAAR DEZE WEEK                            │    │
│   │  do 30/7   14:00  15:30  17:00                    │    │  ← klikbare uren
│   │  vr 31/7   10:00  11:30                           │    │
│   └───────────────────────────────────────────────────┘    │
├────────────────────────────────────────────────────────────┤
│   TEAM  [portret] Lien · kleur   [portret] Nora · knippen  │
├────────────────────────────────────────────────────────────┤
│   Adres · uren · parkeren · Instagram · Footer             │
└────────────────────────────────────────────────────────────┘
```

Ritme: sectiepadding 128px desktop, 72px mobiel — meer dan overal elders in deze kit. Eén
beeld per scherm, nooit een grid van zes. Geen kaarten, geen schaduwen: scheiding is
uitsluitend witruimte, met hoogstens een haarlijn van 1px in messing `#A98B5D` op 30% alpha
boven een sectiekop. Radius 0 op beelden en 2px op knoppen; halfronde hoeken maken het geheel
zacht op de verkeerde manier.

Mobiel: de agendasectie schuift naar boven, direct onder de hero — op gsm is boeken de enige
handeling. Prijslijst wordt twee regels per item (naam boven, duur en prijs eronder in één
regel) in plaats van een uitgerekte stippellijn. Werkfoto's worden een horizontaal scrollende
strook van 78% schermbreedte, zodat het volgende beeld half zichtbaar blijft.

**De online agenda is de kern van de site, niet een knop in de header.** Bouw hem als
volwaardige sectie: dagkiezer, uren als klikbare pillen van 44×36px, behandeling en
behandelaar te kiezen vóór het uur (want de beschikbaarheid hangt ervan af), en een
bevestiging in maximaal drie stappen met naam, gsm en e-mail. Toon lege dagen als lege dagen
in plaats van ze te verbergen — een agenda die alleen volle dagen toont, lijkt kapot. Werkt
het salon met een extern systeem (Treatwell, Salonized, Zenoti), embed het dan in de pagina
met je eigen kleuren waar het systeem dat toelaat, en laat het nooit in een nieuw tabblad
openen op mobiel.

## Signature-ideeën

1. **Beschikbaarheid op de homepage.** Drie eerstvolgende vrije momenten, met datum en uur,
   direct klikbaar. Het is het enige element van de site dat elke dag verandert, en het is de
   snelste weg van twijfel naar afspraak.
2. **Een werkarchief per behandelaar.** Elke stylist heeft een eigen pagina met twaalf foto's
   van eigen werk, in dezelfde crop en dezelfde kleurgrade. Klanten kiezen daarop een persoon
   en de site verkoopt de zaak niet als geheel maar als vakmensen.
3. **Het haartype- of huidtypefilter op de prijslijst.** `Fijn haar · Krullend · Gekleurd` of
   `Droge huid · Gevoelig · Acnegevoelig` filtert de behandelingen. Dat is dienstverlening,
   geen decoratie, en het toont dat je verschil ziet tussen mensen.
4. **Eén stilstaand detailbeeld per sectie**: een schaar op linnen, een hand in nat haar, damp
   boven een kom. Klein, 4:5, ongesatureerd naar één grade. Het houdt de redactionele toon
   overeind zonder een enkel stockbeeld nodig te hebben.

## Vertrouwenselementen die er echt toe doen

| Element | Waarom het werkt in deze sector |
|---|---|
| Portret en naam van elke behandelaar, met haar specialiteit | De klant koopt een persoon, niet een salon. Een team zonder gezichten dwingt haar het risico bij het toeval te leggen. |
| Volledige prijslijst met duur per behandeling | Duur is hier even belangrijk als prijs: ze moet weten of het in haar middagpauze past. "Vanaf €"-prijzen zonder duur voelen als een val. |
| Foto's van echt werk aan echte klanten, met toestemming | Een salonsite met alleen persfoto's van een merkcampagne toont het werk van iemand anders. Bezoekers merken dat. |
| Google-reviews met aantal en gemiddelde, ingebed en actueel | In beauty is mond-aan-mond het hele aankoopkanaal; reviews zijn de digitale versie ervan. Een score zonder aantal telt niet. |
| Duidelijke annulatievoorwaarde bij de boeking | `Kosteloos annuleren tot 24 uur vooraf` neemt de laatste rem weg bij een afspraak die drie weken vooruit ligt. |
| Merken van de producten waarmee gewerkt wordt | Klanten met een gekend product zoeken specifiek daarop. Het is bovendien het enige geloofwaardige kwaliteitssignaal dat je niet zelf claimt. |
| Praktische informatie: parkeren, tram, avonduren | Een salon wordt gekozen op bereikbaarheid binnen een straal van tien minuten. Die informatie hoort boven de vouw van de contactpagina, niet in de footer. |

## Wat hier absoluut niet mag

| Nooit | Waarom | In plaats daarvan |
|---|---|---|
| Script- of handschriftfonts | Onleesbaar onder 20px, dramatisch slecht op mobiel, en het is het duidelijkste teken van een goedkoop sjabloon in deze sector | Marcellus voor de display, Karla in tracked caps voor labels. Elegantie komt van tracking en witruimte, niet van krullen |
| Glitter, sparkle-overlays, glanzende deeltjes | Zakt de gepercipieerde prijs onmiddellijk met een derde en dateert je site naar 2012 | Eén detailfoto met echt licht — een reflectie in een spiegel, damp, nat haar |
| Goud- of roze verlopen | Het handschrift van elke gratis nagelstudio-template; het maakt je onherkenbaar tussen tien anderen | Vlak messing `#A98B5D` als haarlijn, en klei `#B4705B` als enige accent |
| Puur wit `#FFFFFF` als achtergrond | Huidtinten in foto's worden er grauw en groenig tegen; het salon oogt klinisch | Ongebleekt linnen `#F7F3EE`, dat huid warm houdt |
| Stockbeelden van modellen met een handdoek om het hoofd | Toont niets van je werk en iedereen heeft ze al gezien op vier andere sites | Eigen fotografie van klanten, in één kleurgrade, in het daglicht van je eigen zaak |
| "Boek via WhatsApp" als enige boekingsweg | Verschuift de drempel terug naar een persoonlijk gesprek — precies wat online boeken moest oplossen | Een echte agenda met vrije uren. WhatsApp mag ernaast staan, nooit in de plaats |
| Een prijslijst als PDF | Onleesbaar op gsm, niet vindbaar door Google, en meestal een jaar oud | HTML-lijst per categorie, met duur en prijs, en één datum van laatste aanpassing |
| Muziek of video die automatisch start | In wellness is dit dubbel fout: het overvalt precies het publiek dat rust zoekt, vaak op kantoor | Stilstaand beeld. Als er beweging moet zijn: één trage cross-fade van 1200ms tussen twee foto's |

## Conversie

**Primair doel:** een bevestigde online afspraak, met naam, behandeling en tijdstip. Elk
telefoongesprek dat je vervangt is directe winst, want de meeste bellers bellen niet en komen
ook niet.

**Primaire CTA:** `Boek een afspraak`. Gevuld in ongeglazuurde klei `#B4705B`, tekst in linnen
`#F7F3EE`, 48px hoog, radius 2px, Karla 500 met `tracking-[0.06em]`. In de agendasectie
verandert de knop van tekst naar het gekozen moment: `Bevestig donderdag 30/7 om 14:00` — dat
is de sterkste knoptekst die er in deze sector bestaat, omdat hij niets meer vraagt maar iets
bevestigt.

**Secundaire actie:** `Bekijk de prijslijst` als tekstlink in notenhout met een messing
onderlijning op hover. Voor wie nog niet klaar is om te boeken maar wel wil weten wat het
kost — dat is de helft van je verkeer. Daarnaast één zachte ingang onderaan: `Twijfel je over
de kleur? Boek een gratis kleuradvies van 15 minuten`.

**Plaatsing:** knop rechts in de header (niet sticky op desktop, wél als vaste onderbalk van
60px op mobiel vanaf 400px scroll), naast de hero-tekst, onder elke behandeling in de
prijslijst, en in de agendasectie als de bevestigingsknop. Nooit als pop-up na acht seconden:
in een sector die om rust verkoopt is een overlay een breuk van de belofte.

## Referenties

- **[hershesons.com](https://www.hershesons.com/)** — de site behandelt het salon en de
  productlijn als één ding: zwart-op-wit typografie, productfoto's op vlakke witte
  achtergrond zonder schaduw, en de boekingslink schakelt rechtstreeks door naar het
  Zenoti-agendasysteem in plaats van naar een contactformulier.
- **[treatwell.be](https://www.treatwell.be/nl/)** — categorienavigatie op behandeling
  (kapper, nagels, gezicht, massage, ontharen) in plaats van op salon, en de trending-sectie
  toont behandelingen met hun eigenlijke klantnaam (`Korean lash lift`, `perzikroze`) — de
  woorden die klanten zelf gebruiken, niet de vaktermen.
- **[rituals.com/nl-be](https://www.rituals.com/nl-be/home)** — een consequent neutrale basis
  van wit en warme aardetinten waarbij alle kleur uit de productfotografie komt; product-
  tegels zijn vierkant en identiek gecropt, zodat een raster van twaalf items rustig blijft.

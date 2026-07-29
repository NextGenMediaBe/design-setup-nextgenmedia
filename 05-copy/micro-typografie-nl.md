# Micro-typografie NL

Regels voor Nederlandstalige interface- en websiteteksten. Aanvulling op
[`copywriting.md`](copywriting.md): dat bestand gaat over wát er staat, dit over hoe het
gezet staat. Elke regel hieronder is binair te controleren.

> **Aan wie dit bestand later opschoont:** de em-dashes, rechte aanhalingstekens en Title
> Case die hierin staan zijn **opzettelijk**. Het zijn de tegenvoorbeelden in de
> fout→goed-tabellen en in de tekentabel. Vervang ze niet. Alle andere Nederlandstalige
> bestanden in deze repo horen er nul te bevatten; dit bestand is de enige uitzondering,
> omdat je een fout niet kunt tonen zonder hem te schrijven.

## 1. Geen em-dash

De em-dash (—) hoort niet in Nederlandse tekst. Nooit. Vervang door een komma, een punt of
een dubbelepunt.

| Fout | Goed |
|---|---|
| Wij bouwen websites — snel en betaalbaar. | Wij bouwen websites, snel en betaalbaar. |
| Er is één regel — hou het simpel. | Er is één regel: hou het simpel. |
| Dat kost tijd — veel tijd. | Dat kost tijd. Veel tijd. |
| Onze aanpak — helder en direct — werkt. | Onze aanpak, helder en direct, werkt. |

**Waarom dit de luidste tell is.** De em-dash zonder spaties is een Amerikaanse
zetconventie. In Nederlandse bronteksten komt hij vrijwel niet voor: kranten, boeken en
overheidsteksten gebruiken hem niet. Taalmodellen zijn overwegend op Engels getraind en
zetten hem alsnog neer, meestal meerdere keren per alinea. Het gevolg is dat één em-dash in
een Vlaamse tekst harder "dit is niet door een mens geschreven" roept dan welke woordkeuze
ook. Het is de goedkoopste fout om te vermijden en de duurste om te laten staan.

Als er écht een gedachtestreepje nodig is, gebruik dan het **kastlijntje**: een en-dash met
spaties eromheen.

```
Fout:  Dat is de kern—alles daarbuiten is ruis.
Goed:  Dat is de kern – alles daarbuiten is ruis.
```

| Teken | Naam | Entity | Gebruik |
|---|---|---|---|
| `—` | em-dash | `&mdash;` | **Nooit** |
| `–` | en-dash / kastlijntje | `&ndash;` | Gedachtestreepje mét spaties. Max 1 per pagina |
| `–` | en-dash | `&ndash;` | Bereik zonder spaties: `2019–2024`, `9–17 u` |
| `-` | koppelteken | `-` | Samenstellingen: `e-mailadres`, `Vlaams-Brabant` |

Maximum **één** kastlijntje per pagina. Twee betekent dat de zinnen te lang zijn.

## 2. Krulletjes en apostrofs

Rechte aanhalingstekens (`"` en `'`) zijn typemachinetekens. Op het web zijn ze een tell.

| Fout | Goed | Entity |
|---|---|---|
| "kwaliteit" | “kwaliteit” | `&ldquo;` `&rdquo;` |
| 'kleine' | ‘kleine’ | `&lsquo;` `&rsquo;` |
| 's ochtends | ’s ochtends | `&rsquo;` |
| 't Stad | ’t Stad | `&rsquo;` |
| jaren '90 | jaren ’90 | `&rsquo;` |
| Jans' fiets | Jans’ fiets | `&rsquo;` |
| ... | … | `&hellip;` |

Let op: `’s`, `’t` en `’90` gebruiken het **rechter** enkele aanhalingsteken (’), niet het
linker (‘). Een `‘90` is even fout als een rechte `'90`.

Dubbele aanhalingstekens: gebruik “ ” als projectstandaard. De boekconventie „ ” mag ook,
maar kies één vorm en hou die vol.

**Hoe je ze correct krijgt:**

```
Windows      Alt+0147 “   Alt+0148 ”   Alt+0145 ‘   Alt+0146 ’
macOS        ⌥[ “   ⌥⇧[ ”   ⌥] ‘   ⌥⇧] ’
```

In CSS voor `<q>` en `blockquote`:

```css
:root { quotes: "\201C" "\201D" "\2018" "\2019"; }
q { quotes: inherit; }
```

Zet in de editor "smart quotes" aan, of laat een MDX/CMS-pipeline het doen. Doe het niet met
een zoek-en-vervang op `"` alleen, want dat sloopt je HTML-attributen.

## 3. Sentence case, geen Title Case

| Fout | Goed |
|---|---|
| Onze Werkwijze | Onze werkwijze |
| Veelgestelde Vragen | Veelgestelde vragen |
| Vraag Een Offerte Aan | Vraag een offerte aan |
| Over Ons Bedrijf | Over ons bedrijf |

Alleen het eerste woord en eigennamen krijgen een hoofdletter. Dat geldt voor koppen,
knoppen, labels, menu-items, tabbladen en kaarttitels.

Engelse Title Case in een Nederlandse kop is een van de duidelijkste vertaaltells die er
zijn: de zetregel komt uit het Engels, dus de tekst is uit het Engels gedacht. Ook in het
Nederlands geldt: maandnamen, dagnamen, talen en nationaliteiten krijgen **geen**
hoofdletter (`maart`, `dinsdag`, `het Nederlands`, `een Vlaamse klant` wél, want dat is
afgeleid van een eigennaam).

ALLES IN HOOFDLETTERS mag alleen in korte labels (`NIEUW`, `BTW`), nooit in een kop of
knop. Screenreaders spellen sommige woorden in kapitalen letter per letter.

## 4. Spaties rond leestekens

| Fout | Goed |
|---|---|
| Bel ons ! | Bel ons! |
| Waarom ons ? | Waarom ons? |
| Prijs : 250 euro | Prijs: 250 euro |
| €1.200 of € 1.200 (met gewone spatie) | `€&nbsp;1.200` |
| 10 % (met gewone spatie) | `10&#8239;%` |
| nr. 5 | `nr.&nbsp;5` |
| J. Peeters | `J.&nbsp;Peeters` |
| A. B. Janssens | `A.&#8239;B.&nbsp;Janssens` |

Nooit een spatie **vóór** `.` `,` `;` `:` `!` `?`. Dat is een Franse conventie, geen
Nederlandse.

Gebruik een harde spatie (`&nbsp;` of de smalle variant `&#8239;`) overal waar een regelval
de betekenis breekt:

- Tussen valutateken en bedrag: `€&nbsp;1.200`
- Tussen getal en eenheid: `25&nbsp;m²`, `10&nbsp;kg`, `3&nbsp;weken`
- Na een afkorting die bij het volgende woord hoort: `nr.&nbsp;5`, `bv.&nbsp;een webshop`
- Tussen initialen en tussen initiaal en achternaam
- Tussen de laatste twee woorden van een kop, om een weduwe te voorkomen

Kies per project of het percentteken vastzit (`10%`) of met een smalle harde spatie staat
(`10&#8239;%`). Beide zijn verdedigbaar. Een gewone spatie is dat niet, want die breekt.

## 5. Getallen, datums, tijd en telefoon

| Soort | Fout | Goed |
|---|---|---|
| Duizendtal | 1,200 | 1.200 |
| Decimaal | 1200.50 | 1.200,50 |
| Bedrag | $1,200.50 / €1200,5 | € 1.200,50 |
| Datum lang | March 12, 2026 / 12 Maart 2026 | 12 maart 2026 |
| Datum kort | 03/12/2026 | 12/03/2026 |
| Tijd | 2:30 PM | 14.30 of 14:30 |
| Telefoon vast | (03) 123-4567 / +32(0)3/123.45.67 | +32 3 123 45 67 |
| Telefoon mobiel | +32-470-123456 | +32 470 12 34 56 |
| Nationaal formaat | 3 123 45 67 | 03 123 45 67 |
| Bereik | 9-17u | 9–17 u |

Kies `14.30` of `14:30` en gebruik die vorm op de hele site. Niet allebei.

Hardcode dit nooit. Laat `Intl` het doen, met locale `nl-BE`:

| Aanroep | Output |
|---|---|
| `new Intl.NumberFormat("nl-BE").format(1200.5)` | `1.200,5` |
| `new Intl.NumberFormat("nl-BE", { minimumFractionDigits: 2 }).format(1200.5)` | `1.200,50` |
| `new Intl.NumberFormat("nl-BE", { style: "currency", currency: "EUR" }).format(1200.5)` | `€ 1.200,50` |
| `new Intl.NumberFormat("nl-BE", { style: "percent" }).format(0.1)` | `10%` |
| `new Intl.NumberFormat("nl-BE", { style: "unit", unit: "kilometer" }).format(12)` | `12 km` |
| `new Intl.DateTimeFormat("nl-BE", { dateStyle: "long" }).format(d)` | `12 maart 2026` |
| `new Intl.DateTimeFormat("nl-BE", { day: "2-digit", month: "2-digit", year: "numeric" }).format(d)` | `12/03/2026` |
| `new Intl.DateTimeFormat("nl-BE", { weekday: "long" }).format(d)` | `donderdag` |
| `new Intl.DateTimeFormat("nl-BE", { timeStyle: "short" }).format(d)` | `14:30` |
| `new Intl.ListFormat("nl-BE").format(["ontwerp", "bouw", "onderhoud"])` | `ontwerp, bouw en onderhoud` |

ICU-data verschilt licht per runtime en per Node-versie. Controleer de output van de
percent- en unit-formatter één keer in de build en leg het resultaat vast in een test.

Zet cijferkolommen op `font-variant-numeric: tabular-nums` (zie
`../02-design-system/craft.md`).

## 6. Weduwen en wezen

Eén woord alleen op de laatste regel van een kop is zichtbaar slordig. Het kost twee regels
CSS om dat structureel op te lossen.

```css
h1, h2, h3, h4, blockquote { text-wrap: balance; }
p, li, dd                  { text-wrap: pretty; }
```

- `balance` verdeelt de regellengtes van korte blokken. Alleen voor koppen en blokken tot
  ongeveer vier regels; de browser stopt daarboven.
- `pretty` voorkomt een laatste regel met één woord in bodytekst.
- Moet een kop op een specifieke plek níet breken? Zet `&nbsp;` tussen de laatste twee
  woorden. Nooit een `<br>`: die breekt op elke andere schermbreedte op de verkeerde plek.

## 7. Afbreken

Nederlands heeft lange samenstellingen. Zonder afbreking krijg je in een smalle kolom
gaten, rivieren en overlopende woorden. `verzekeringsmaatschappij` past niet in een kaart
van 280 px.

```html
<html lang="nl">
```

```css
.prose p,
.card p,
.col-narrow {
  -webkit-hyphens: auto;
          hyphens: auto;
  hyphenate-limit-chars: 8 4 4; /* min woordlengte, min vóór, min ná */
}
```

`lang="nl"` is niet optioneel: zonder de juiste taal past de browser Engelse afbreekregels
toe en krijg je `verzeke-ringsmaatschappij`. Zet de taal ook op elk anderstalig fragment
(`<span lang="en">`).

Regels:

- Afbreken alleen in kolommen smaller dan ongeveer 45 tekens.
- **Nooit koppen afbreken.** Zet daar expliciet `hyphens: manual`.
- Voor één hardnekkig woord: een zachte afbreekstreep `&shy;` op de gewenste plek.
- Zet `hyphenate-limit-chars` altijd. De standaard breekt woorden van vijf letters af.

## 8. Labels en verplichte velden

| Fout | Goed |
|---|---|
| E-mailadres: | E-mailadres |
| Naam : | Naam |
| Telefoon* | Telefoon (verplicht) |
| Bedrijf (optional) | Bedrijf (optioneel) |
| `Velden met * zijn verplicht` | Markeer per veld |

Geen dubbelepunt achter een label, en zeker geen spatie ervóór. Het label staat boven het
veld (zie `copywriting.md`), dus de dubbelepunt heeft niets te verbinden.

Markeer verplicht of optioneel **met een woord**, in het label zelf:

```html
<label for="tel">Telefoon <span class="text-muted">(verplicht)</span></label>
<input id="tel" name="tel" type="tel" required aria-required="true" />
```

**Waarom een kale asterisk faalt.** Een screenreader leest `*` afhankelijk van de
verbositeitsinstelling als "ster", als "asterisk", of helemaal niet. De uitleg die de
betekenis geeft ("velden met * zijn verplicht") staat ergens anders op de pagina en is niet
programmatisch aan het veld gekoppeld, dus wie veld per veld navigeert hoort hem nooit. Een
woord in het label werkt in elke screenreader, in elke instelling, en ook voor wie gewoon
snel scant. Zijn bijna alle velden verplicht, markeer dan alleen `(optioneel)`.

## 9. Geen emoji in de interface

Geen ✨ 🚀 💡 🎉 in koppen, knoppen, labels, menu-items of sectietitels. Ook niet "als
accent".

Redenen, los van smaak: emoji renderen per platform anders en breken je regelhoogte;
screenreaders lezen de volledige Unicode-naam voor ("gebalde vuist, medium-lichte
huidskleur") midden in je knoptekst; ze schalen niet mee met je typografie; en ze zijn de
tweede duidelijkste AI-tell na de em-dash.

Emoji mogen alleen waar ze gebruikersinhoud zijn (een chatbericht, een reactie).

## 10. Eén uitroepteken per pagina

Maximum één, en liefst nul. Nooit in bodytekst, nooit in een knop, nooit twee achter
elkaar. Een uitroepteken in een foutmelding is agressief; in een succesmelding is het
overdreven.

| Fout | Goed |
|---|---|
| Bedankt voor je aanvraag! | Bedankt voor je aanvraag. |
| Oeps! Er ging iets mis! | Er ging iets mis. Probeer het opnieuw. |
| Gratis offerte!! | Gratis offerte |

## 11. Knopteksten

Een knop zegt wat er gebeurt. Nooit waar je moet klikken, nooit een vaag beloftewoord.

| Fout | Goed |
|---|---|
| Klik hier | Offerte aanvragen |
| Lees meer | Prijzen bekijken |
| Ontdek | Bekijk het aanbod |
| Meer info | Zo werkt het |
| Verzenden | Aanvraag versturen |
| Contact | Bel ons |
| Get started | Gratis starten |
| Submit | Bericht versturen |
| Download | Brochure downloaden (pdf, 2 MB) |
| Bekijk | Woning bekijken |
| Aanmelden | Account aanmaken |
| Volgende | Naar de betaling |

Twee tot vier woorden. Werkwoord plus zelfstandig naamwoord. Geen leestekens, geen emoji,
sentence case. Staan er drie knoppen op een pagina met hetzelfde label, dan is er één te
veel.

## 12. Afkortingen en eenheden

| Fout | Goed | Opmerking |
|---|---|---|
| 25m2 / 25 M² | 25&nbsp;m² | Harde spatie, superscript-2 als teken |
| 10KM / 10 Km | 10&nbsp;km | Eenheden krijgen geen hoofdletter en geen punt |
| 20°C zonder spatie | 20&nbsp;°C | SI schrijft een spatie |
| 14u30 | 14 u 30 of 14.30 | Kies één vorm |
| BTW / B.T.W. | btw | Kleine letters |
| Enz... | enz. | Eén punt, geen drie |
| ivm / dmv | i.v.m. / d.m.v. | Punten en geen spaties |

Vlaams versus Nederlands, de verschillen die op een Belgische site tellen:

| Vlaams (BE) | Nederlands (NL) | Betekenis |
|---|---|---|
| bv. | bijv. | bijvoorbeeld |
| t.e.m. | t/m | tot en met |
| gsm | mobiel | mobiele telefoon |
| 14 u | 14.00 uur | tijdsaanduiding |
| btw-nummer | btw-nummer | identiek, maar BE-formaat: `BE 0123.456.789` |
| ondernemingsnummer | KvK-nummer | bedrijfsregistratie |

Schrijf `u` alleen in tabellen en openingsuren, `uur` in lopende tekst. Openingsuren:
`ma–vr 9–17 u`, met en-dashes en zonder spaties in het bereik.

## Controlelijst

Twaalf binaire checks. Elk antwoord moet "ja" zijn.

- [ ] Nul em-dashes (—) op de pagina.
- [ ] Maximaal één kastlijntje (–) met spaties.
- [ ] Nul rechte aanhalingstekens of apostrofs in zichtbare tekst.
- [ ] `’s`, `’t` en `’90` gebruiken het rechter enkele aanhalingsteken.
- [ ] Elke kop, knop en label staat in sentence case.
- [ ] Geen spatie vóór een leesteken, harde spatie in `€&nbsp;`, eenheden en initialen.
- [ ] Alle getallen, datums en tijden komen uit `Intl` met `nl-BE`, in één consistente vorm.
- [ ] Geen enkele kop eindigt met één woord op een eigen regel.
- [ ] `<html lang="nl">` staat er, en `hyphens: auto` staat op de smalle kolommen.
- [ ] Geen dubbelepunt achter labels; verplicht/optioneel staat als woord in het label.
- [ ] Nul emoji in koppen, knoppen, labels en menu's.
- [ ] Maximaal één uitroepteken, en elke knoptekst zegt wat er gebeurt.

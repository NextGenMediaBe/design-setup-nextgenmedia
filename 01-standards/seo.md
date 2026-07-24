# SEO

Technical SEO is build work, not marketing work. Get the metadata, structure and speed right
during the build and the client's content has somewhere to land.

## Metadata

The App Router's Metadata API is the only way we set head tags. No `next/head`, no
`react-helmet`, no manual `<meta>` in a layout.

### The base object

One shared file, imported by the root layout. `metadataBase` is required — without it every
OG image and canonical URL is relative and breaks in the crawler.

```ts
// lib/seo.ts
import type { Metadata } from "next";

export const SITE = {
  name: "Klantnaam",
  url: "https://www.klant.be",
  locale: "nl_BE",
} as const;

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Klantnaam — Interieurbouw in Antwerpen",
    template: "%s | Klantnaam",
  },
  description:
    "Maatwerk interieur voor woningen en horeca in Antwerpen. Ontwerp, productie en plaatsing in eigen beheer.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: "/" },
};
```

```tsx
// app/layout.tsx
import { baseMetadata } from "@/lib/seo";
export const metadata = baseMetadata;
```

`title.template` applies to child routes only — the root's own title uses `default`.

### Per-route, dynamic

```ts
// app/projecten/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};

  const url = `/projecten/${slug}`;

  return {
    title: project.metaTitle ?? project.title,
    description: project.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.excerpt,
      url,
      publishedTime: project.publishedAt,
      images: [{ url: project.ogImage, width: 1200, height: 630, alt: project.title }],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();
  // ...
}
```

`generateMetadata` and the page both fetch — Next dedupes identical `fetch` calls within a
render, and your own data loaders should be wrapped in `cache()` so this costs one request.

### Length and content rules

| Field | Length | Rules |
|---|---|---|
| `title` | **50–60 characters** | Primary keyword first, brand last, separated by `—` or `\|`. Unique per page. Never "Home" or "Welkom" |
| `description` | **140–160 characters** | Not a ranking factor; it is a click-through factor. Write it as ad copy with a reason to click. Unique per page |
| `h1` | One per page | Can differ from the title — the title is for the SERP, the h1 is for the visitor |
| OG title | ≤ 60 | Can be punchier than the `title` |
| OG description | ≤ 110 | Truncated harder in social previews |

Never auto-generate descriptions from the first paragraph. An empty description beats a
duplicated one — Google will write a better snippet than your slice of body copy.

### Canonicals

- Every indexable page declares a canonical. Relative is fine with `metadataBase`.
- Self-referencing on normal pages.
- Paginated lists: page 2 canonicals to **itself**, not to page 1.
- Filter/sort/tracking params: canonical to the clean URL.
- One URL shape site-wide: lowercase, hyphens, no trailing slash, no `index`. Enforce with a
  redirect, don't just canonical it away.
- `noindex` belongs on thank-you pages, internal search results, and staging. Staging also
  gets HTTP auth — a `noindex` in a preview deploy is not enough.

## Open Graph and social cards

| Rule | Value |
|---|---|
| Image size | **1200x630** (1.91:1) |
| Format | JPG or PNG, < 300kb. Not SVG, not WebP — several crawlers won't render them |
| Absolute URL | Guaranteed by `metadataBase` |
| Text in the image | Large. It's read at 500px wide in a feed |
| `twitter.card` | `summary_large_image` |
| Fallback | A branded default OG image at the root, so a page with no image still shares cleanly |

### Generated OG images

```tsx
// app/projecten/[slug]/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { getProject } from "@/lib/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Projectafbeelding";

export default async function Image({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0B0C",
          color: "#FAFAF9",
          padding: 80,
          fontFamily: "Inter",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.6 }}>klant.be</div>
        <div style={{ fontSize: 72, lineHeight: 1.1, fontWeight: 600 }}>
          {project?.title}
        </div>
      </div>
    ),
    { ...size },
  );
}
```

`next/og` uses Satori: flexbox only, no grid, no float, every element needs an explicit
`display`, and fonts must be passed in as a buffer if you want anything but the default.
Keep the template to two text layers and a background — complex OG templates are a
maintenance tax for an image nobody zooms into.

## Structured data

JSON-LD, injected as a script tag in a Server Component. Not Microdata, not RDFa.

```tsx
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

**The one rule that gets sites penalised: structured data must describe content that is
visible on that page.** Reviews in schema but not on the page, a price in schema that isn't
in the copy, FAQ markup for questions the visitor can't see — all of it is a manual-action
risk and none of it is worth the rich result.

### Organization — once, in the root layout

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.klant.be/#organization",
  "name": "Klantnaam BV",
  "url": "https://www.klant.be",
  "logo": "https://www.klant.be/logo.png",
  "email": "info@klant.be",
  "telephone": "+3234567890",
  "vatID": "BE0123456789",
  "sameAs": [
    "https://www.linkedin.com/company/klantnaam",
    "https://www.instagram.com/klantnaam"
  ]
}
```

### LocalBusiness — for any client with a physical address

Use the most specific type available (`HomeAndConstructionBusiness`, `Restaurant`,
`Dentist`, `HairSalon`…), not the generic `LocalBusiness`.

```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://www.klant.be/#localbusiness",
  "name": "Klantnaam BV",
  "image": "https://www.klant.be/gevel.jpg",
  "url": "https://www.klant.be",
  "telephone": "+3234567890",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Nationalestraat 12",
    "addressLocality": "Antwerpen",
    "postalCode": "2000",
    "addressRegion": "Antwerpen",
    "addressCountry": "BE"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 51.2178, "longitude": 4.3987 },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:30",
      "closes": "17:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "14:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Antwerpen" },
    { "@type": "City", "name": "Mechelen" }
  ]
}
```

Belgian specifics: phone in E.164 (`+32...`), `addressCountry: "BE"`, `vatID` as
`BE0123456789` (10 digits, no dots), `postalCode` as 4 digits. Closed days are simply
omitted, or given `opens`/`closes` of `"00:00"`.

### BreadcrumbList — every page below the root

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.klant.be" },
    { "@type": "ListItem", "position": 2, "name": "Projecten", "item": "https://www.klant.be/projecten" },
    { "@type": "ListItem", "position": 3, "name": "Loft Zurenborg" }
  ]
}
```

The last item has no `item`. Breadcrumbs must also exist visibly in the page.

### FAQPage — only on a page with a real, visible FAQ

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Hoelang duurt een maatkast op maat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reken op vier tot zes weken tussen goedkeuring van het ontwerp en plaatsing."
      }
    }
  ]
}
```

The answer text must match the visible answer. Rich results for FAQ are now limited to
authoritative government and health sites — mark it up anyway for the entity understanding,
but do not sell it as a SERP feature.

### Article / BlogPosting — blog and case pages

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Vijf fouten bij het inrichten van een kleine keuken",
  "description": "…",
  "image": ["https://www.klant.be/blog/keuken.jpg"],
  "datePublished": "2026-03-11T09:00:00+01:00",
  "dateModified": "2026-05-02T14:20:00+02:00",
  "author": { "@type": "Person", "name": "Jan Peeters" },
  "publisher": { "@id": "https://www.klant.be/#organization" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.klant.be/blog/kleine-keuken" }
}
```

`headline` ≤ 110 characters. `author` is a real named person, not the company — Google's
guidance and any E-E-A-T assessment both want a person.

Validate every type at `search.google.com/test/rich-results` before launch, and check
Search Console → Enhancements a week after.

## Sitemap and robots

App Router file conventions. No plugins, no generated static files in `public/`.

```ts
// app/sitemap.ts
import type { MetadataRoute } from "next";
import { getProjects, getPosts } from "@/lib/content";
import { SITE } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, posts] = await Promise.all([getProjects(), getPosts()]);

  const staticRoutes = ["", "/over-ons", "/diensten", "/projecten", "/contact"].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  return [
    ...staticRoutes,
    ...projects.map((p) => ({
      url: `${SITE.url}/projecten/${p.slug}`,
      lastModified: new Date(p.updatedAt),
      priority: 0.7,
    })),
    ...posts.map((p) => ({
      url: `${SITE.url}/blog/${p.slug}`,
      lastModified: new Date(p.updatedAt),
      priority: 0.6,
    })),
  ];
}
```

```ts
// app/robots.ts
import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/bedankt", "/preview"] }],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
```

Rules:

- The sitemap contains **indexable, canonical, 200-status URLs only**. No redirects, no
  `noindex` pages, no paginated duplicates.
- `lastModified` must be real. A sitemap where every page changed today is ignored.
- `priority` and `changeFrequency` are near-worthless signals — set them once, don't tune them.
- Over 50,000 URLs: return an array of sitemaps via `generateSitemaps`. You will not hit this.
- Block staging with HTTP auth, not with `robots.txt`. A disallowed URL can still be indexed.

## Internationalisation

Belgian sites are often `nl-BE` + `fr-BE`, sometimes with `en`.

**Subpaths, not subdomains, not ccTLDs:**

| Approach | Verdict |
|---|---|
| `klant.be/nl/`, `klant.be/fr/` | **Use this.** One domain accumulates all authority, one hosting setup, one analytics property, trivial in the App Router with a `[locale]` segment |
| `nl.klant.be`, `fr.klant.be` | Splits authority across hosts, doubles the config, no upside for a single-country site |
| `klant.be` + `klant.fr` | Only when the business genuinely operates in two countries with separate entities |

Default locale can live at the root (`/` = nl-BE) or at `/nl` — pick one and redirect the
other. Never serve the same content at both.

```ts
// app/[locale]/projecten/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const path = `/projecten/${slug}`;

  return {
    alternates: {
      canonical: `/${locale}${path}`,
      languages: {
        "nl-BE": `/nl${path}`,
        "fr-BE": `/fr${path}`,
        en: `/en${path}`,
        "x-default": `/nl${path}`,
      },
    },
    openGraph: { locale: locale.replace("-", "_") },
  };
}
```

- `alternates.languages` renders the `hreflang` tags. They must be **reciprocal** — every
  language version lists every other, including itself.
- Always include `x-default`, pointing at the language a visitor from anywhere else should get.
- Never `hreflang` a page to a translation that doesn't exist. Point to the closest real page
  or omit the entry.
- `<html lang>` must match the route's locale. See `01-standards/accessibility.md`.
- Translate the URL slugs too: `/fr/projets/`, not `/fr/projecten/`.
- Do not auto-redirect on `Accept-Language`. Detect, suggest with a dismissible banner, and
  let the user choose — crawlers always look like they're in the US.

## Content structure

Search engines read the same outline that screen readers do. Getting
`01-standards/accessibility.md` right gets most of this for free.

| Rule | Detail |
|---|---|
| One `<h1>`, containing the page's primary term | Not the logo, not the company name |
| `h2` per section, `h3` for subpoints, no skipped levels | The heading outline should read as a summary of the page |
| Content is server-rendered | Anything behind `useEffect` or `ssr: false` may not be indexed. Check with "View Source", not DevTools |
| Internal links use `<Link>` with real, descriptive text | "Bekijk onze maatkasten", not "Klik hier". A `<div onClick={router.push}>` is not a link |
| Every page is reachable within 3 clicks of the homepage | Orphan pages don't rank |
| One page per intent | Three thin pages about the same service compete with each other. Merge them |
| Tabs and accordions | Fine — content in a collapsed accordion is indexed, as long as it is in the DOM |
| No text baked into images | See the alt-text tree in `01-standards/accessibility.md` |

## Image SEO

- Filenames are descriptive and slugified: `maatkast-eiken-antwerpen.jpg`, not `IMG_4821.jpg`.
- Alt text is written for humans first; the keyword only belongs there if it belongs there.
- The `<Image>` rules in `01-standards/performance.md` (dimensions, `sizes`, AVIF/WebP)
  are also SEO rules — image weight is an LCP input and LCP is a ranking input.
- Add an `ImageObject` to Article schema for anything meant to appear in Discover.
- Keep an image sitemap only if images are the product (photography, real estate,
  e-commerce). Otherwise it is noise.

## Performance as a ranking factor

Core Web Vitals is a real, small ranking signal and a large conversion signal. It also
decides whether a page gets crawled deeply — a slow site burns crawl budget.

Targets and the fixes live in `01-standards/performance.md`. The SEO-relevant summary:

| Signal | Target |
|---|---|
| LCP | < 2.5s at p75 mobile |
| INP | < 200ms |
| CLS | < 0.1 |
| Mobile-friendly | Google indexes the mobile rendering. Design mobile first (rule 7 in `CLAUDE.md`) |
| HTTPS, no mixed content | Non-negotiable |
| No interstitials on mobile | A full-screen cookie wall or newsletter popup on first load is a documented demotion |

Content beats speed. A fast page about nothing ranks for nothing. Speed is the tiebreaker
between you and an equally relevant competitor — and there is always an equally relevant
competitor.

## Local SEO for Belgian businesses

For a local client, Google Business Profile usually drives more calls than the website does.
Treat it as part of the deliverable.

| Item | Rule |
|---|---|
| **Google Business Profile** | Claimed, verified, correct category (the primary category matters more than any on-page factor), real photos, hours including holiday hours, products/services filled in |
| **NAP consistency** | Name, Address, Phone identical *character for character* across the site footer, the schema, GBP, Facebook, and every directory. `Nationalestraat 12` and `Nationalestraat 12A` are two different businesses to a crawler |
| Phone format | `+32 3 456 78 90` visibly, `+3234567890` in `tel:` and schema |
| Address on the site | Real text in the footer, marked up with `PostalAddress` — not an image, not only inside a Google Maps embed |
| Contact page | Address, phone, email, opening hours, VAT number, and a map. A form alone is not a contact page |
| Local directories | Gouden Gids / goudengids.be, Trustoo, Bing Places, Apple Business Connect. Sector directories beat generic ones |
| Reviews | Ask for them, respond to all of them. Do not put review counts in schema unless they are also visible on the page |
| Location pages | One page per city you genuinely serve, with distinct content — a real project, a real team, real specifics. Twenty templated "Maatkasten in [stad]" pages is doorway spam |
| `areaServed` | List the municipalities in `LocalBusiness` schema |
| Language | A Flemish business ranks in Dutch. Only build a French version if they actually sell in Wallonia or Brussels |
| Legal footer | Company name, VAT (`BE 0123.456.789`), registered address. Required in Belgium and it is a trust signal |

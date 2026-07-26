/**
 * FIXTURE — opzettelijk schoon. Niet "verbeteren" met sfeer, kleur of emoji.
 *
 * De self-test eist dat dit bestand nul hits oplevert. Het is de tegenhanger van
 * slop.tsx: als hier ooit iets gaat vuren, is er een regel te breed geworden.
 */

type WorkItem = {
  slug: string;
  klant: string;
  discipline: string;
  jaar: number;
};

const werk: WorkItem[] = [
  { slug: 'boschmans-transport', klant: 'Boschmans Transport', discipline: 'Merkidentiteit', jaar: 2025 },
  { slug: 'de-kleine-schrijnwerkerij', klant: 'De Kleine Schrijnwerkerij', discipline: 'Website', jaar: 2024 },
];

export function WerkLijst() {
  return (
    <section className="bg-surface text-ink border-t border-hairline">
      <h2 className="font-display text-step-3">Recent werk</h2>
      <ul className="grid gap-gutter">
        {werk.map((item) => (
          <li key={item.slug} className="rounded-card border border-hairline p-6">
            <h3 className="text-step-1">{item.klant}</h3>
            <p className="text-muted">
              {item.discipline}, {item.jaar}
            </p>
            <a
              href={`/werk/${item.slug}`}
              className="text-accent underline underline-offset-4 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              Bekijk de case
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * motion-guard — reduced-motion vangnet voor componenten van derden.
 *
 * Bron:      zelf geschreven
 * Licentie:  vrij te gebruiken
 * Nodig:     react. De Motion-variant vereist `motion`.
 *
 * WAAROM DIT BESTAAT
 *
 * Geen enkel component uit Magic UI, Vengeance UI of SmoothUI handelt
 * `prefers-reduced-motion` af. Niet één. Dat is geen kritiek op die
 * bibliotheken — het is een consequentie van hoe ze verspreid worden: je
 * kopieert een .tsx en de auteur weet niet in welke context hij landt.
 *
 * Voor ons is het regel 7 uit CLAUDE.md, en die is niet onderhandelbaar.
 * Bij een oneindige marquee of een typemachine-effect is het bovendien geen
 * detail: dat zijn precies de bewegingen die vestibulaire klachten uitlokken.
 *
 * Zie 02-design-system/motion.md voor wanneer je uberhaupt beweegt.
 */

import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Retourneert of de gebruiker minder beweging wil, en volgt live mee als de
 * systeeminstelling verandert.
 *
 * Start bewust op `false` en niet op `true`: tijdens SSR is de voorkeur
 * onbekend, en een hydration-mismatch op elk geanimeerd component is erger dan
 * één frame animatie. Wil je zeker geen enkele beweging tonen voor de
 * voorkeur bekend is, gebruik dan de CSS-variant hieronder — die werkt al
 * voor de eerste render.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    setReduced(mq.matches);

    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/**
 * Synchrone check voor gebruik buiten React (GSAP-timelines, event handlers).
 * Veilig tijdens SSR.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia(QUERY).matches;
}

/**
 * Wikkelt een geanimeerd component van derden zodat het bij reduced motion
 * wordt vervangen door een statische versie.
 *
 *   const SafeMarquee = withReducedMotion(Marquee, ({ children }) => (
 *     <div className="flex flex-wrap gap-4">{children}</div>
 *   ));
 *
 * Let op: de fallback moet dezelfde INHOUD tonen, niet niets. Reduced motion
 * betekent geen beweging, niet geen interface.
 */
export function withReducedMotion<P extends object>(
  Animated: React.ComponentType<P>,
  Static: React.ComponentType<P>,
): React.FC<P> {
  const Guarded: React.FC<P> = (props) => {
    const reduced = usePrefersReducedMotion();
    const Component = reduced ? Static : Animated;
    return <Component {...props} />;
  };
  Guarded.displayName = `withReducedMotion(${Animated.displayName ?? Animated.name ?? "Component"})`;
  return Guarded;
}

/**
 * Duur-helper. Geeft 0 terug bij reduced motion, zodat een tween meteen op de
 * eindstaat staat in plaats van hem over te slaan.
 *
 *   transition={{ duration: motionDuration(0.6) }}
 */
export function motionDuration(seconds: number): number {
  return prefersReducedMotion() ? 0 : seconds;
}

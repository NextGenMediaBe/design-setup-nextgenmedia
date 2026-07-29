/**
 * theme-toggle (three-way theme switcher): auto → light → dark → auto.
 *
 * Bron:      github.com/pbakaus/impeccable (site/scripts/utils/theme.js)
 * Licentie:  Apache-2.0
 * Nodig:     niets
 * Aangepast: geparametriseerd (storage key, theme-color), TypeScript,
 *            en `data-theme` i.p.v. class toggling zodat het met de
 *            token-laag in 02-design-system/tokens/globals.css werkt.
 *
 * Waarom drieweg: de meeste toggles zijn light/dark en negeren dat het OS al
 * een voorkeur heeft. "auto" is de default en volgt het systeem live mee,
 * totdat de gebruiker één keer expliciet kiest.
 */

export type ThemePref = "auto" | "light" | "dark";
export type Theme = "light" | "dark";

interface Options {
  storageKey?: string;
  /** meta[name=theme-color] content per resolved theme. */
  themeColor?: Record<Theme, string>;
  /** Attribuut op <html>. "class" schrijft .light/.dark, anders data-*. */
  target?: "class" | "data-theme";
}

const DEFAULTS: Required<Options> = {
  storageKey: "theme",
  themeColor: { light: "#faf9f7", dark: "#0d0d0f" },
  target: "class",
};

export function createThemeToggle(options: Options = {}) {
  const opts = { ...DEFAULTS, ...options };

  const getPref = (): ThemePref => {
    try {
      const v = localStorage.getItem(opts.storageKey);
      return v === "light" || v === "dark" ? v : "auto";
    } catch {
      return "auto"; // private mode / storage geblokkeerd
    }
  };

  const setPref = (pref: ThemePref) => {
    try {
      if (pref === "auto") localStorage.removeItem(opts.storageKey);
      else localStorage.setItem(opts.storageKey, pref);
    } catch {
      /* niet fataal */
    }
  };

  const systemTheme = (): Theme =>
    window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const resolve = (pref: ThemePref): Theme => (pref === "auto" ? systemTheme() : pref);

  const apply = (pref: ThemePref) => {
    const html = document.documentElement;
    const theme = resolve(pref);

    if (opts.target === "class") {
      html.classList.remove("light", "dark");
      html.classList.add(theme);
    } else {
      html.setAttribute("data-theme", theme);
    }
    html.setAttribute("data-theme-pref", pref);
    html.style.colorScheme = theme;

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", opts.themeColor[theme]);

    // Label beschrijft de *volgende* stap. Dat is wat een screenreader nodig heeft.
    const label: Record<ThemePref, string> = {
      auto: "Thema: automatisch. Klik voor lichte modus.",
      light: "Thema: licht. Klik voor donkere modus.",
      dark: "Thema: donker. Klik voor automatisch.",
    };
    document.querySelectorAll<HTMLElement>("[data-theme-toggle]").forEach((btn) => {
      btn.setAttribute("aria-label", label[pref]);
      btn.setAttribute("title", label[pref]);
    });
  };

  const next = (pref: ThemePref): ThemePref =>
    pref === "auto" ? "light" : pref === "light" ? "dark" : "auto";

  function init() {
    apply(getPref());

    // Volg het OS zolang de voorkeur "auto" is.
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    mq?.addEventListener("change", () => {
      if (getPref() === "auto") apply("auto");
    });

    // Gedelegeerd, zodat toggles die later in de DOM komen ook werken.
    document.addEventListener("click", (e) => {
      const btn = (e.target as Element | null)?.closest("[data-theme-toggle]");
      if (!btn) return;
      const pref = next(getPref());
      setPref(pref);
      apply(pref);
    });
  }

  return { init, apply, getPref, setPref, resolve };
}

/**
 * FOUC-guard. Moet inline in <head> staan, vóór enige stylesheet, anders
 * flitst de pagina in het verkeerde thema voordat de bundle geladen is.
 *
 * In Next.js:
 *   <script dangerouslySetInnerHTML={{ __html: themeInitScript() }} />
 */
export function themeInitScript(storageKey = "theme"): string {
  return `(function(){try{var p=localStorage.getItem('${storageKey}');var t=(p==='light'||p==='dark')?p:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');var e=document.documentElement;e.classList.add(t);e.style.colorScheme=t;e.setAttribute('data-theme-pref',p||'auto')}catch(_){}})()`;
}

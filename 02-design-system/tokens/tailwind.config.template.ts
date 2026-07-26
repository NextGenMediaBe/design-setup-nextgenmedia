/* ===========================================================================
   TAILWIND CONFIG TEMPLATE — Tailwind v3 config style
   ---------------------------------------------------------------------------
   READ THIS BEFORE CHANGING ANYTHING BELOW.

   `theme.colors`, `theme.borderRadius`, `theme.fontFamily`, `theme.boxShadow`
   and `theme.transitionTimingFunction` are declared at the TOP level of
   `theme`, not inside `theme.extend`. That is deliberate and it is the entire
   point of this file.

   Top level = REPLACE. Inside `extend` = MERGE.

   Because these five are replacements:

     - `bg-indigo-600` does not exist. Neither does `text-slate-900`,
       `border-gray-200`, `rounded-lg`, `shadow-md`, `font-sans` pointing at
       Inter, or `ease-in-out` pointing at the browser default.
     - Writing any of them is a BUILD ERROR, not a silently-wrong colour.
       The mistake surfaces in CI instead of in a client review.
     - The only colours reachable from a utility class are the semantic tokens
       below, which resolve to CSS custom properties, which resolve to the
       project's brand primitives. One reference chain, no shortcuts.

   This is the mechanism that enforces non-negotiable rule 2 in CLAUDE.md
   ("no default framework palette") at build time rather than by review.

   DO NOT move any of these five keys into `theme.extend`. The moment you do,
   the entire default Tailwind palette becomes reachable again, `bg-blue-500`
   compiles, and every guarantee in this file is gone. There is no partial
   version of this: it works completely or not at all.

   `extend` remains fine for keys that have no default palette to leak back in
   — spacing, maxWidth, screens, keyframes, animation, zIndex. Those are at
   the bottom.

   TAILWIND V4: this file does not apply. v4 has no config file; the same
   replacement is done in CSS with `@theme { --color-*: initial; ... }`.
   See ./README.md and the commented bridge at the bottom of
   ./tokens.css.template.

   OPACITY MODIFIERS: `bg-action/50` cannot work when the token is a complete
   colour like `oklch(58% 0.19 28)`. Two options — either accept that and use
   an explicit `--action-subtle` token for tints (recommended, and it keeps
   alpha decisions in the token layer where they belong), or store the
   primitives as bare channel values and read them with `<alpha-value>`.
   Do not mix the two approaches in one project.
   =========================================================================== */

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", ".dark"],

  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],

  theme: {
    /* =======================================================================
       REPLACEMENTS — top level, not extend. See the header.
       ======================================================================= */

    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      white: "#fff",
      black: "#000",

      /* Surfaces */
      bg: "var(--bg)",
      surface: {
        DEFAULT: "var(--surface)",
        muted: "var(--surface-muted)",
        raised: "var(--surface-raised)",
        inverse: "var(--surface-inverse)",
      },

      /* Text */
      heading: "var(--text-heading)",
      body: "var(--text-body)",
      muted: "var(--text-muted)",
      placeholder: "var(--text-placeholder)",
      inverse: "var(--text-inverse)",
      "on-action": "var(--text-on-action)",

      /* Borders — `border-border` reads badly, so also set
         theme.borderColor.DEFAULT below. */
      border: {
        DEFAULT: "var(--border)",
        strong: "var(--border-strong)",
        subtle: "var(--border-subtle)",
      },

      /* Action — one accent. A second needs a written reason in DESIGN.md. */
      action: {
        DEFAULT: "var(--action)",
        hover: "var(--action-hover)",
        subtle: "var(--action-subtle)",
        "on-subtle": "var(--action-on-subtle)",
      },

      ring: "var(--ring)",

      /* Status */
      success: "var(--success)",
      warning: "var(--warning)",
      danger: "var(--danger)",
      info: "var(--info)",
    },

    borderRadius: {
      none: "0",
      control: "var(--radius-control)", // buttons, inputs, selects
      card: "var(--radius-card)",
      panel: "var(--radius-panel)", // modals, sheets
      badge: "var(--radius-badge)",
      full: "9999px",
    },

    fontFamily: {
      display: ["var(--font-display)"],
      sans: ["var(--font-text)"],
      mono: ["var(--font-mono)"],
    },

    boxShadow: {
      none: "none",
      sm: "var(--shadow-sm)",
      md: "var(--shadow-md)",
      lg: "var(--shadow-lg)",
      xl: "var(--shadow-xl)",
      /* Dark-mode top edge highlight. See ../craft.md. */
      highlight: "var(--highlight)",
    },

    transitionTimingFunction: {
      /* No `linear`, no `ease`. If you need linear for a marquee, write it
         inline and know why. See ../motion.md. */
      brand: "var(--ease-brand)",
      enter: "var(--ease-enter)",
      exit: "var(--ease-exit)",
      move: "var(--ease-move)",
    },

    /* =======================================================================
       EXTEND — safe here. These keys have no default palette to leak back.
       ======================================================================= */

    extend: {
      /* `border-border` is unreadable; make the bare `border` class correct. */
      borderColor: {
        DEFAULT: "var(--border)",
      },

      outlineColor: {
        DEFAULT: "var(--ring)",
      },

      spacing: {
        /* Section rhythm is its own scale, not the 4px steps continued
           upward. See ../spacing-layout.md and the note in
           tokens.css.template. */
        "section-s": "var(--space-section-s)",
        "section-m": "var(--space-section-m)",
        "section-l": "var(--space-section-l)",
        "section-xl": "var(--space-section-xl)",
        gutter: "var(--gutter)",
        nav: "var(--nav-height)",
      },

      maxWidth: {
        container: "var(--container-lg)",
        "container-sm": "var(--container-sm)",
        "container-md": "var(--container-md)",
        "container-xl": "var(--container-xl)",
        "container-2xl": "var(--container-2xl)",
        measure: "65ch",
      },

      transitionDuration: {
        instant: "var(--duration-instant)",
        fast: "var(--duration-fast)",
        base: "var(--duration-base)",
        slow: "var(--duration-slow)",
        page: "var(--duration-page)",
      },

      height: {
        control: "var(--button-height-md)",
        "control-sm": "var(--button-height-sm)",
        "control-lg": "var(--button-height-lg)",
      },

      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "none" },
        },
      },

      animation: {
        /* Travel 12–24px, never 60px. See ../motion.md. */
        "fade-up": "fade-up var(--duration-slow) var(--ease-enter) both",
      },
    },
  },

  plugins: [],
};

export default config;

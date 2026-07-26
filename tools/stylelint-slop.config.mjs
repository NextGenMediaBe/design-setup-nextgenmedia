/**
 * Stylelint config: the CSS half of the slop check.
 *
 * Colour literals belong in the token layer and nowhere else. Everything downstream
 * reads `var(--…)`. Files named tokens.css or globals.css are the one place where raw
 * values are allowed, because that is where the palette is defined.
 *
 * Usage — stylelint.config.mjs in the target project:
 *
 *   import slop from './tools/stylelint-slop.config.mjs';
 *   export default { extends: ['stylelint-config-standard'], ...slop };
 *
 * or straight from the CLI:
 *
 *   npx stylelint "**\/*.{css,scss}" --config tools/stylelint-slop.config.mjs
 */

/** Hex values that appear in every tutorial on earth. Banned everywhere, tokens included. */
const BLACKLIST_HEX = [
  '#6366F1', '#8B5CF6', '#7C3AED', '#0F172A', '#F4F1EA', '#D97757', '#22C55E',
];

const blacklistPattern = new RegExp(
  `(${BLACKLIST_HEX.map((h) => h.slice(1)).join('|')})\\b`,
  'i',
);

const TOKEN_FILES = ['**/tokens.css', '**/globals.css', '**/tokens.scss'];

export default {
  rules: {
    // 1. No raw colour literals outside the token layer.
    'color-no-hex': [
      true,
      {
        message:
          'Geen hex buiten de tokenlaag. Definieer de kleur in tokens.css en gebruik var(--…).',
      },
    ],
    'function-disallowed-list': [
      ['rgb', 'rgba', 'hsl', 'hsla'],
      {
        message:
          'Geen rgb()/hsl() buiten de tokenlaag. Definieer de kleur in tokens.css en gebruik var(--…).',
      },
    ],

    // 2. transition: all animates layout and paint along with it.
    // 3. outline: none / 0 removes the focus state; a replacement is mandatory.
    'declaration-property-value-disallowed-list': [
      {
        transition: [/(^|\s)all(\s|$|\s+\d)/],
        'transition-property': [/(^|\s)all(\s|$)/],
        outline: [/^none$/, /^0$/],
        '/.*/': [blacklistPattern],
      },
      {
        message: (value, root) => {
          if (root && root.prop && root.prop.toLowerCase() === 'outline') {
            return 'outline: none mag alleen met een vervangende focusstijl (:focus-visible met een zichtbare ring). Schrijf die eerst.';
          }
          if (blacklistPattern.test(String(value))) {
            return 'Deze hex staat in miljoenen tutorials en wordt herkend. Leid je palet af uit iets fysieks van de klant.';
          }
          return 'Noem de properties expliciet. transition: all animeert layout mee.';
        },
      },
    ],
  },

  overrides: [
    {
      files: TOKEN_FILES,
      rules: {
        // The token layer is where raw values live. The hex blacklist still applies.
        'color-no-hex': null,
        'function-disallowed-list': null,
      },
    },
  ],
};

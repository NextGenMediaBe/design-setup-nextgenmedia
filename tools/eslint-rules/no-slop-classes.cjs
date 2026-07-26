/**
 * ESLint rule: no-slop-classes
 *
 * Blocks the Tailwind class patterns that make an interface read as generated:
 * default indigo/violet/purple/fuchsia, purple gradients, blob radii, backdrop blur,
 * heavy shadows, `transition-all`, and the slate-900/off-white default pairing.
 *
 * CommonJS on purpose. The repo's package.json sets "type": "module", so this file
 * carries the .cjs extension to stay loadable from a flat config.
 *
 * Usage — eslint.config.js in the target project:
 *
 *   import slop from './tools/eslint-rules/no-slop-classes.cjs';
 *
 *   export default [
 *     {
 *       files: ['**\/*.{ts,tsx,jsx,js}'],
 *       plugins: { design: { rules: { 'no-slop-classes': slop } } },
 *       rules: { 'design/no-slop-classes': 'error' },
 *     },
 *   ];
 *
 * Escape hatch: an eslint-disable-next-line comment, with a written reason, e.g.
 *   // eslint-disable-next-line design/no-slop-classes -- glaslaag boven de videohero
 */

'use strict';

const PATTERNS = [
  {
    id: 'colorTailwindDefault',
    re: /\b(?:bg|text|from|via|to|border|ring|shadow|fill|stroke)-(?:indigo|violet|purple|fuchsia)-\d{2,3}\b/,
    message:
      'Gebruik een semantisch token uit tokens.css, geen Tailwind-defaultkleur ({{match}}).',
  },
  {
    id: 'gradientPurple',
    re: /\bfrom-(?:purple|violet|indigo|fuchsia)-\d{2,3}\b/,
    message:
      'Paars/blauw verloop is de sterkste AI-tell ({{match}}). Zie 02-design-system/anti-patterns.md.',
  },
  {
    id: 'radiusBlob',
    re: /\brounded-(?:2xl|3xl)\b/,
    message:
      'Kies één radiusvocabulaire in DESIGN.md ({{match}}). Geneste radii moeten verschillen.',
  },
  {
    id: 'backdropBlur',
    re: /\bbackdrop-blur(?:-\w+)?\b/,
    message: 'Glasmorfisme als default ({{match}}). Alleen met een geschreven reden.',
  },
  {
    id: 'shadowHeavy',
    re: /\bshadow-(?:lg|xl|2xl)\b/,
    message:
      'Schaduw als default diepte-oplossing ({{match}}). Kies één diepte-strategie.',
  },
  {
    id: 'transitionAll',
    re: /\btransition-all\b|transition:\s*all\b/,
    message: 'Noem de properties expliciet ({{match}}). transition: all animeert layout mee.',
  },
  {
    id: 'slateDefault',
    re: /\b(?:bg|text|border)-slate-(?:50|900|950)\b/,
    message: 'slate-900 op off-white is de standaard AI-combinatie ({{match}}).',
  },
];

const CLASS_FNS = new Set(['clsx', 'cn', 'classNames', 'cva', 'twMerge']);

function calleeName(node) {
  const c = node.callee;
  if (!c) return null;
  if (c.type === 'Identifier') return c.name;
  if (c.type === 'MemberExpression' && c.property.type === 'Identifier') return c.property.name;
  return null;
}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Verbied de Tailwind-klassepatronen die een interface gegenereerd laten ogen.',
      recommended: true,
      url: '02-design-system/anti-patterns.md',
    },
    schema: [],
    messages: Object.fromEntries(PATTERNS.map((p) => [p.id, p.message])),
  },

  create(context) {
    const reported = new WeakSet();

    function check(node, value) {
      if (typeof value !== 'string' || value.length === 0) return;
      if (reported.has(node)) return;
      for (const pattern of PATTERNS) {
        const m = pattern.re.exec(value);
        if (m) {
          reported.add(node);
          context.report({ node, messageId: pattern.id, data: { match: m[0] } });
          return;
        }
      }
    }

    /** Walk a clsx/cn/cva argument tree so object keys and nested arrays are covered too. */
    function walk(node) {
      if (!node || typeof node.type !== 'string') return;
      switch (node.type) {
        case 'Literal':
          check(node, node.value);
          break;
        case 'TemplateLiteral':
          for (const q of node.quasis) check(q, q.value.cooked ?? q.value.raw);
          for (const e of node.expressions) walk(e);
          break;
        case 'ArrayExpression':
          for (const el of node.elements) walk(el);
          break;
        case 'ObjectExpression':
          for (const prop of node.properties) {
            if (prop.type === 'Property') {
              if (prop.key.type === 'Literal') check(prop.key, prop.key.value);
              walk(prop.value);
            } else if (prop.type === 'SpreadElement') {
              walk(prop.argument);
            }
          }
          break;
        case 'ConditionalExpression':
          walk(node.consequent);
          walk(node.alternate);
          break;
        case 'LogicalExpression':
        case 'BinaryExpression':
          walk(node.left);
          walk(node.right);
          break;
        case 'CallExpression':
          for (const a of node.arguments) walk(a);
          break;
        default:
          break;
      }
    }

    return {
      Literal(node) {
        check(node, node.value);
      },
      TemplateElement(node) {
        check(node, node.value.cooked ?? node.value.raw);
      },
      CallExpression(node) {
        if (!CLASS_FNS.has(calleeName(node))) return;
        for (const arg of node.arguments) walk(arg);
      },
    };
  },
};

#!/usr/bin/env node
/**
 * slop-check — zero-dependency scanner for the tells that make an interface look generated.
 *
 *   node tools/slop-check.mjs [paths...] [--fix] [--json] [--self-test]
 *
 * Exit codes: 0 = clean, 1 = violations found (or self-test failed).
 *
 * Escape hatch: put `slop-check-ok: <reden van minstens 10 tekens>` on the offending
 * line or the line directly above it. A reason is mandatory; that is the whole point.
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '..');

/* ------------------------------------------------------------------ config */

const EXTENSIONS = new Set([
  '.tsx', '.ts', '.jsx', '.js', '.astro', '.vue', '.svelte',
  '.css', '.scss', '.md', '.mdx', '.json', '.html',
]);

const MARKUP_EXT = new Set(['.tsx', '.jsx', '.astro', '.vue', '.svelte', '.html']);
const SCRIPT_EXT = new Set(['.ts', '.js', '.mts', '.mjs', '.cts', '.cjs']);
const STYLE_EXT = new Set(['.css', '.scss']);
const PROSE_EXT = new Set(['.md', '.mdx']);
const CONTENT_EXT = new Set(['.md', '.mdx', '.json']);

const PREFERRED_ROOTS = ['src', 'app', 'content', 'components'];
const SKIP_DIRS = new Set([
  'node_modules', '.git', '.next', 'dist', 'build', 'out', 'coverage',
  '.turbo', '.cache', '.audit', '.venv', 'vendor', '.svelte-kit',
]);

const CLASS_CALL = /\b(?:clsx|cn|classNames|cva|twMerge)\s*\(/;
const SUPPRESS = /slop-check-ok:\s*\S.{9,}/;

const DOCS = '02-design-system/anti-patterns.md';

/* ------------------------------------------------------------------- rules */

/** Rules that live in class strings (markup files, or clsx/cn/cva calls elsewhere). */
const CLASS_RULES = [
  {
    id: 'color-tailwind-default',
    re: /\b(?:bg|text|from|via|to|border|ring|shadow|fill|stroke)-(?:indigo|violet|purple|fuchsia)-\d{2,3}\b/,
    fix: null,
    msg: 'Gebruik een semantisch token uit tokens.css, geen Tailwind-defaultkleur.',
  },
  {
    id: 'gradient-purple',
    re: /\bfrom-(?:purple|violet|indigo|fuchsia)-\d{2,3}\b/,
    msg: `Paars/blauw verloop is de sterkste AI-tell. Zie ${DOCS}.`,
  },
  {
    id: 'radius-blob',
    re: /\brounded-(?:2xl|3xl)\b/,
    msg: 'Kies één radiusvocabulaire in DESIGN.md. Geneste radii moeten verschillen.',
  },
  {
    id: 'backdrop-blur',
    re: /\bbackdrop-blur(?:-\w+)?\b/,
    msg: 'Glasmorfisme als default. Alleen toegestaan met // slop-check-ok: <reden>.',
  },
  {
    id: 'shadow-heavy',
    re: /\bshadow-(?:lg|xl|2xl)\b/,
    msg: 'Schaduw als default diepte-oplossing. Kies één diepte-strategie.',
  },
  {
    id: 'transition-all',
    re: /\btransition-all\b|transition:\s*all\b/,
    alsoStyles: true,
    msg: 'Noem de properties expliciet. transition: all animeert layout mee.',
  },
  {
    id: 'slate-default',
    re: /\b(?:bg|text|border)-slate-(?:50|900|950)\b/,
    msg: 'slate-900 op off-white is de standaard AI-combinatie.',
  },
];

/** Hex literals that show up in every tutorial on earth. */
const BLACKLIST_HEX = ['#6366F1', '#8B5CF6', '#7C3AED', '#0F172A', '#F4F1EA', '#D97757', '#22C55E'];

const HEX_RE = (() => {
  const forms = new Set();
  for (const hex of BLACKLIST_HEX) {
    const body = hex.slice(1);
    forms.add(body);
    // A 3-digit shorthand only exists when every channel is a doubled character.
    if (body[0] === body[1] && body[2] === body[3] && body[4] === body[5]) {
      forms.add(body[0] + body[2] + body[4]);
    }
  }
  return new RegExp(`#(?:${[...forms].join('|')})\\b`, 'i');
})();

const HEX_MSG =
  'Deze hex staat in miljoenen tutorials en wordt herkend. Leid je palet af uit iets fysieks van de klant.';

/** Display fonts that have been used into the ground. */
const BURNED_FONTS = [
  'Inter', 'Instrument Sans', 'Geist', 'General Sans', 'Plus Jakarta Sans',
  'Space Grotesk', 'Poppins', 'Montserrat', 'Outfit', 'DM Sans', 'Satoshi',
];
const FONT_CONTEXT = /font-family|fontFamily|next\/font/;
const FONT_RE = new RegExp(`\\b(?:${BURNED_FONTS.map(escapeRe).join('|')})\\b`, 'i');
const FONT_MSG = 'Opgebrande displayfont. Zie 02-design-system/typography.md voor pairings per stemming.';

const EM_DASH = '—';
const EM_DASH_MSG =
  'Geen em-dash in NL-copy. Gebruik een komma, punt, dubbele punt, of en-dash met spaties.';

const QUOTE_MSG = 'Gebruik krulletjes: ‘ ’ “ ” en de juiste apostrof ’.';

const BANNED_NL = [
  'ontzorgen', 'op maat gemaakte oplossingen', 'toonaangevend', 'innovatief', 'naadloos',
  'moeiteloos', 'uw partner in', 'van A tot Z', 'no-nonsense', 'we denken graag met u mee',
  'kwaliteit staat voorop', 'naar een hoger niveau', 'ontdek de mogelijkheden',
  'in het huidige digitale landschap', 'transformeer', 'ontgrendel',
  'het beste van twee werelden', 'met passie voor ons vak', 'uniek in zijn soort',
  'of het nu', 'in de wereld van', 'snel veranderende wereld', 'state-of-the-art',
  'revolutionair', 'game-changer', 'gamechanger', 'next-level', 'empowering',
  'geavanceerde oplossingen', 'binnenkort beschikbaar', 'wordt aangevuld',
  'voorbeeldtekst', 'placeholder', 'lorem ipsum',
];
const BANNED_EN = [
  'leverage', 'delve', 'seamless', 'unlock', 'transform', 'empower', 'elevate', 'robust',
  'cutting-edge', 'game-changing', 'best-in-class', 'streamline', 'harness', 'reimagine',
  'state-of-the-art', 'next-level', 'revolutionary', 'coming soon', 'lorem ipsum',
  'placeholder text',
];
/** Constructions with a variable gap in the middle; a literal string cannot express these. */
const BANNED_LOOSE = [
  'niet alleen\\b[^.!?\\n]{0,80}?\\bmaar ook',
  'til(?:t|len)?\\s+(?:je|jij|jouw|u|uw|het|ons)\\b[^.!?\\n]{0,60}?\\bnaar een hoger niveau',
];
const BANNED_RE = new RegExp(
  `\\b(?:${[...BANNED_NL, ...BANNED_EN].map(escapeRe).concat(BANNED_LOOSE).join('|')})\\b`,
  'i',
);
const BANNED_MSG = 'Verboden woord. Zie 05-copy/copywriting.md.';

const EMOJI_RE = /\p{Extended_Pictographic}/u;
const HEADING_TAG = /<(?:h[1-3]|button)\b/i;
const MD_HEADING = /^\s{0,3}#{1,6}\s/;
const EMOJI_MSG = 'Geen emoji in koppen of knoppen.';

const LANG_FILES = /(?:^|\/)(?:app\/layout\.tsx|layout\.astro|index\.html)$/;
const LANG_MSG =
  'Zet lang="nl" op <html>, anders werkt hyphens: auto niet en klopt de spellingcontrole niet.';

/** Every rule id the self-test expects to see fire. */
const ALL_RULE_IDS = [
  ...CLASS_RULES.map((r) => r.id),
  'hex-blacklist',
  'font-burned',
  'em-dash',
  'straight-quote',
  'banned-word',
  'emoji-heading',
  'missing-lang',
];

/* --------------------------------------------------------------- utilities */

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function rel(file) {
  return path.relative(process.cwd(), file).split(path.sep).join('/') || file;
}

function posix(file) {
  return file.split(path.sep).join('/');
}

/** Ranges of JSX text nodes on a line: the bit between `>` and `<`. */
function jsxTextSegments(line) {
  const segs = [];
  const re = />([^<>]+)</g;
  let m;
  while ((m = re.exec(line))) segs.push([m.index + 1, m.index + 1 + m[1].length]);
  return segs;
}

/** Ranges of string-literal bodies on a line. */
function stringSegments(line) {
  const segs = [];
  const re = /(['"`])((?:\\.|(?!\1)[^\\])*)\1/g;
  let m;
  while ((m = re.exec(line))) segs.push([m.index + 1, m.index + 1 + m[2].length]);
  return segs;
}

function sliceAll(line, segs) {
  return segs.map(([a, b]) => line.slice(a, b)).join('\0');
}

/** Rebuild a line, applying `fn` only inside the given ranges. */
function replaceInSegments(line, segs, fn) {
  if (!segs.length) return line;
  const merged = [];
  for (const [a, b] of [...segs].sort((x, y) => x[0] - y[0])) {
    const last = merged[merged.length - 1];
    if (last && a <= last[1]) last[1] = Math.max(last[1], b);
    else merged.push([a, b]);
  }
  let out = '';
  let cursor = 0;
  for (const [a, b] of merged) {
    out += line.slice(cursor, a) + fn(line.slice(a, b));
    cursor = b;
  }
  return out + line.slice(cursor);
}

/** Strip inline code spans so `'quotes'` in code do not get flagged. */
function stripInlineCode(line) {
  return line.replace(/`[^`]*`/g, (m) => ' '.repeat(m.length));
}

function isSuppressed(lines, i) {
  return SUPPRESS.test(lines[i]) || (i > 0 && SUPPRESS.test(lines[i - 1]));
}

/* ----------------------------------------------------------------- walking */

function walk(dir, out, opts) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (SKIP_DIRS.has(e.name)) continue;
      if (e.name === '__fixtures__' && !opts.includeFixtures) continue;
      walk(full, out, opts);
    } else if (e.isFile() && EXTENSIONS.has(path.extname(e.name).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

function collectFiles(roots, opts) {
  const files = [];
  for (const root of roots) {
    const abs = path.resolve(root);
    let st;
    try {
      st = fs.statSync(abs);
    } catch {
      continue;
    }
    if (st.isDirectory()) walk(abs, files, opts);
    else if (EXTENSIONS.has(path.extname(abs).toLowerCase())) files.push(abs);
  }
  return [...new Set(files)].sort();
}

function defaultRoots() {
  return PREFERRED_ROOTS.filter((d) => fs.existsSync(path.resolve(d)));
}

/**
 * Er is bewust GEEN fallback naar '.'.
 *
 * Deze scanner beoordeelt de output van een project, niet de bouwkit zelf. Zonder
 * src/ app/ content/ components/ sta je in de kit — en die staat vol met Engelse
 * naslag waarin een em-dash en een verbodswoord als voorbeeld hóren te staan.
 * De hele repo scannen leverde 773 valse hits op. Beter niets scannen dan dat.
 *
 * Wil je toch de kit zelf scannen, geef dan expliciet een pad mee:
 *   node tools/slop-check.mjs 05-copy
 */
function noRootsMessage() {
  return [
    'Geen doelmappen gevonden (src/, app/, content/, components/).',
    '',
    'Draai dit in een projectmap, of geef expliciet een pad mee:',
    '  node tools/slop-check.mjs pad/naar/map',
    '',
    'Om de scanner zelf te testen:  npm run design:test',
  ].join('\n');
}

/* ---------------------------------------------------------------- scanning */

function scanFile(file) {
  let text;
  try {
    text = fs.readFileSync(file, 'utf8');
  } catch {
    return [];
  }
  const ext = path.extname(file).toLowerCase();
  const lines = text.split(/\r?\n/);
  const hits = [];

  const isMarkup = MARKUP_EXT.has(ext);
  const isScript = SCRIPT_EXT.has(ext);
  const isStyle = STYLE_EXT.has(ext);
  const isProse = PROSE_EXT.has(ext);
  const isContent = CONTENT_EXT.has(ext);
  const isJsx = ext === '.tsx' || ext === '.jsx';

  let inFence = false;
  let inFrontmatter = false;

  const push = (i, id, msg) => {
    if (isSuppressed(lines, i)) return;
    hits.push({
      file: rel(file),
      line: i + 1,
      text: lines[i].trim().slice(0, 100),
      rule: id,
      suggestion: msg,
    });
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Markdown bookkeeping.
    if (isProse) {
      if (i === 0 && line.trim() === '---') {
        inFrontmatter = true;
        continue;
      }
      if (inFrontmatter) {
        if (line.trim() === '---') inFrontmatter = false;
        continue;
      }
      if (/^\s*(```|~~~)/.test(line)) {
        inFence = !inFence;
        continue;
      }
    }

    // 1. Class-name rules.
    const classScope = isMarkup || (isScript && CLASS_CALL.test(line));
    for (const rule of CLASS_RULES) {
      if (!(classScope || (rule.alsoStyles && isStyle))) continue;
      if (rule.re.test(line)) push(i, rule.id, rule.msg);
    }

    // 2. Blacklisted hex, anywhere.
    if (HEX_RE.test(line)) push(i, 'hex-blacklist', HEX_MSG);

    // 3. Burned fonts, only in a font declaration or a next/font import.
    if ((isStyle || ext === '.ts' || ext === '.tsx') && FONT_CONTEXT.test(line) && FONT_RE.test(line)) {
      push(i, 'font-burned', FONT_MSG);
    }

    // 4. Em-dash in content files and in JSX text / string literals.
    if (line.includes(EM_DASH)) {
      if (isContent && !inFence) push(i, 'em-dash', EM_DASH_MSG);
      else if (isJsx) {
        const segs = [...jsxTextSegments(line), ...stringSegments(line)];
        if (sliceAll(line, segs).includes(EM_DASH)) push(i, 'em-dash', EM_DASH_MSG);
      }
    }

    // 5. Straight quotes in markdown prose.
    if (isProse && !inFence && !/https?:\/\//.test(line) && !/^\s{4,}\S/.test(line)) {
      const prose = stripInlineCode(line);
      if (/(?<=\p{L})'(?=\p{L})/u.test(prose) || /"[^"\n]{1,200}"/.test(prose)) {
        push(i, 'straight-quote', QUOTE_MSG);
      }
    }

    // 6. Banned words in content files and JSX text nodes.
    if ((isContent && !inFence) || isJsx) {
      const haystack = isJsx && !isContent ? sliceAll(line, jsxTextSegments(line)) : line;
      if (BANNED_RE.test(haystack)) push(i, 'banned-word', BANNED_MSG);
    }

    // 7. Emoji in headings and buttons.
    if (EMOJI_RE.test(line) && (HEADING_TAG.test(line) || (isProse && !inFence && MD_HEADING.test(line)))) {
      push(i, 'emoji-heading', EMOJI_MSG);
    }

    // 8. <html> without lang="nl" in the document shell.
    if (LANG_FILES.test(posix(file)) && /<html\b/i.test(line) && !/lang\s*=\s*["'{]?\s*nl/i.test(line)) {
      push(i, 'missing-lang', LANG_MSG);
    }
  }

  return hits;
}

/* ------------------------------------------------------------------ fixing */

function fixText(text, ext) {
  const isProse = PROSE_EXT.has(ext);
  const isContent = CONTENT_EXT.has(ext);
  const isJsx = ext === '.tsx' || ext === '.jsx';
  if (!isContent && !isJsx) return { text, changes: 0 };

  const lines = text.split(/\r?\n/);
  let changes = 0;
  let inFence = false;
  let inFrontmatter = false;

  const transform = (s) => {
    let out = s;
    out = out.replace(new RegExp(`\\s*${EM_DASH}\\s*`, 'g'), ' – ');
    if (isProse) {
      out = out.replace(/(?<=\p{L})'(?=\p{L})/gu, '’');
      out = out.replace(/"([^"\n]{1,200})"/g, '“$1”');
    }
    // Non-breaking spaces where a line break would look broken.
    out = out.replace(/(€|\$|£)\s(?=[\d])/g, '$1\u00A0');
    out = out.replace(/(\d)\s(%)/g, '$1\u00A0$2');
    out = out.replace(/\b(nr\.|nummer|blz\.|hfst\.)\s(?=\d)/gi, '$1\u00A0');
    return out;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (isProse) {
      if (i === 0 && line.trim() === '---') {
        inFrontmatter = true;
        continue;
      }
      if (inFrontmatter) {
        if (line.trim() === '---') inFrontmatter = false;
        continue;
      }
      if (/^\s*(```|~~~)/.test(line)) {
        inFence = !inFence;
        continue;
      }
      if (inFence) continue;
    }
    if (isSuppressed(lines, i)) continue;

    let next;
    if (isContent) {
      if (isProse && /https?:\/\//.test(line)) {
        // Leave URLs alone entirely; only the em-dash is safe to touch.
        next = line.replace(new RegExp(`\\s*${EM_DASH}\\s*`, 'g'), ' – ');
      } else {
        next = transform(line);
      }
    } else {
      next = replaceInSegments(line, [...jsxTextSegments(line), ...stringSegments(line)], transform);
    }
    if (next !== line) {
      lines[i] = next;
      changes++;
    }
  }

  return { text: lines.join('\n'), changes };
}

function applyFixes(files) {
  const changed = [];
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    let original;
    try {
      original = fs.readFileSync(file, 'utf8');
    } catch {
      continue;
    }
    const { text, changes } = fixText(original, ext);
    if (changes > 0 && text !== original) {
      fs.writeFileSync(file, text, 'utf8');
      changed.push({ file: rel(file), changes });
    }
  }
  return changed;
}

/* ------------------------------------------------------------------ output */

const C = process.stdout.isTTY
  ? { dim: '[2m', red: '[31m', yellow: '[33m', bold: '[1m', off: '[0m' }
  : { dim: '', red: '', yellow: '', bold: '', off: '' };

function report(hits) {
  if (!hits.length) {
    console.log('slop-check: geen overtredingen gevonden.');
    return;
  }
  const byRule = new Map();
  for (const h of hits) {
    if (!byRule.has(h.rule)) byRule.set(h.rule, []);
    byRule.get(h.rule).push(h);
  }
  const sorted = [...byRule.entries()].sort((a, b) => b[1].length - a[1].length);

  for (const [ruleId, group] of sorted) {
    console.log(`\n${C.bold}${C.red}${ruleId}${C.off} ${C.dim}(${group.length})${C.off}`);
    console.log(`  ${C.yellow}${group[0].suggestion}${C.off}`);
    for (const h of group) {
      console.log(`  ${h.file}:${h.line}`);
      console.log(`    ${C.dim}${h.text}${C.off}`);
    }
  }

  const files = new Set(hits.map((h) => h.file));
  console.log(`\n${C.bold}${hits.length} overtredingen in ${files.size} bestanden${C.off}`);
  console.log(`${C.dim}Achtergrond en alternatieven: ${DOCS}${C.off}`);
  console.log(
    `${C.dim}Bewust afwijken? Zet "slop-check-ok: <reden>" op de regel of de regel erboven.${C.off}`,
  );
}

/* -------------------------------------------------------------- self-test */

function selfTest() {
  const dir = path.join(HERE, '__fixtures__');
  if (!fs.existsSync(dir)) {
    console.error(`self-test: fixtures ontbreken (${rel(dir)}).`);
    return 1;
  }
  const files = collectFiles([dir], { includeFixtures: true });
  const hits = files.flatMap(scanFile);

  const counts = new Map(ALL_RULE_IDS.map((id) => [id, 0]));
  for (const h of hits) counts.set(h.rule, (counts.get(h.rule) ?? 0) + 1);

  const width = Math.max(...ALL_RULE_IDS.map((id) => id.length));
  console.log(`self-test: ${files.length} fixtures, ${hits.length} hits\n`);
  console.log(`${'rule id'.padEnd(width)}  hits  status`);
  console.log(`${'-'.repeat(width)}  ----  ------`);
  let failed = 0;
  for (const id of ALL_RULE_IDS) {
    const n = counts.get(id) ?? 0;
    if (n === 0) failed++;
    console.log(`${id.padEnd(width)}  ${String(n).padStart(4)}  ${n > 0 ? 'ok' : 'FAIL'}`);
  }

  const cleanFile = path.join(dir, 'clean.tsx');
  const cleanHits = fs.existsSync(cleanFile) ? scanFile(cleanFile) : null;
  if (cleanHits === null) {
    console.log('\nclean.tsx  ontbreekt  FAIL');
    failed++;
  } else if (cleanHits.length > 0) {
    console.log(`\nclean.tsx  ${cleanHits.length} hits  FAIL (moet 0 zijn)`);
    for (const h of cleanHits) console.log(`  ${h.file}:${h.line}  ${h.rule}  ${h.text}`);
    failed++;
  } else {
    console.log('\nclean.tsx  0 hits  ok');
  }

  if (failed > 0) {
    console.error(`\nself-test MISLUKT: ${failed} controle(s) faalden.`);
    return 1;
  }
  console.log('\nself-test geslaagd: elke regel vuurt op de fixtures.');
  return 0;
}

/* --------------------------------------------------------------------- cli */

function main(argv) {
  const flags = new Set(argv.filter((a) => a.startsWith('--')));
  const paths = argv.filter((a) => !a.startsWith('--'));

  if (flags.has('--help') || flags.has('-h')) {
    console.log(
      'Gebruik: node tools/slop-check.mjs [paden...] [--fix] [--json] [--self-test]\n' +
        '  --fix        pas de automatisch te herstellen regels toe en schrijf terug\n' +
        '  --json       machineleesbare uitvoer\n' +
        '  --self-test  draai de scanner tegen tools/__fixtures__\n',
    );
    return 0;
  }

  if (flags.has('--self-test')) return selfTest();

  const explicit = paths.length > 0;
  const roots = explicit ? paths : defaultRoots();

  if (!roots.length) {
    if (flags.has('--json')) {
      console.log(JSON.stringify({ skipped: true, reason: 'no target directories' }, null, 2));
    } else {
      console.log(noRootsMessage());
    }
    return 0;
  }

  const files = collectFiles(roots, { includeFixtures: explicit });

  let changed = [];
  if (flags.has('--fix')) changed = applyFixes(files);

  const hits = files.flatMap(scanFile);

  if (flags.has('--json')) {
    console.log(
      JSON.stringify(
        {
          scannedFiles: files.length,
          roots,
          fixed: changed,
          violations: hits.length,
          files: [...new Set(hits.map((h) => h.file))].length,
          hits,
          docs: DOCS,
        },
        null,
        2,
      ),
    );
    return hits.length > 0 ? 1 : 0;
  }

  if (flags.has('--fix')) {
    if (changed.length === 0) console.log('slop-check --fix: niets te herstellen.');
    else {
      const total = changed.reduce((n, c) => n + c.changes, 0);
      console.log(`slop-check --fix: ${total} regels aangepast in ${changed.length} bestanden`);
      for (const c of changed) console.log(`  ${c.file}  (${c.changes})`);
    }
  }

  report(hits);
  return hits.length > 0 ? 1 : 0;
}

process.exit(main(process.argv.slice(2)));

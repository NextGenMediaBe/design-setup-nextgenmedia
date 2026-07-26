#!/usr/bin/env node
/**
 * audit-screenshot — screenshots plus two checks that a human reviewer always forgets.
 *
 *   node tools/audit-screenshot.mjs [url]        default: http://localhost:3000
 *
 * Writes .audit/<viewport>.png for 390x844, 768x1024 and 1440x900, then reports:
 *   1. every text element under its WCAG AA contrast threshold
 *   2. every h1/h2 that wraps to more than three lines on a 390px screen
 *
 * Exit codes: 0 = both checks pass, 1 = a check failed, 2 = could not run.
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const URL_ARG = process.argv[2] || 'http://localhost:3000';
const OUT_DIR = path.resolve('.audit');

const VIEWPORTS = [
  { name: '390x844', width: 390, height: 844 },
  { name: '768x1024', width: 768, height: 1024 },
  { name: '1440x900', width: 1440, height: 900 },
];

const C = process.stdout.isTTY
  ? { dim: '[2m', red: '[31m', green: '[32m', bold: '[1m', off: '[0m' }
  : { dim: '', red: '', green: '', bold: '', off: '' };

/* ------------------------------------------------------- in-page evaluators */

/** Runs in the browser. Returns every text element below its AA contrast threshold. */
const CONTRAST_PROBE = () => {
  const srgb = (c) => {
    const v = c / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  const luminance = ([r, g, b]) => 0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b);
  const ratio = (a, b) => {
    const la = luminance(a);
    const lb = luminance(b);
    return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
  };
  const parse = (str) => {
    const m = String(str).match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const parts = m[1].split(/[,\s/]+/).filter(Boolean).map(Number);
    const [r, g, b] = parts;
    const a = parts.length > 3 ? parts[3] : 1;
    return { rgb: [r, g, b], a };
  };
  /** Flatten a foreground with alpha over an opaque backdrop. */
  const over = (fg, alpha, bg) => fg.map((c, i) => c * alpha + bg[i] * (1 - alpha));

  const selectorFor = (el) => {
    const parts = [];
    let node = el;
    let depth = 0;
    while (node && node.nodeType === 1 && depth < 4) {
      let s = node.tagName.toLowerCase();
      if (node.id) {
        parts.unshift(`${s}#${node.id}`);
        break;
      }
      const cls = (node.getAttribute('class') || '').trim().split(/\s+/).filter(Boolean).slice(0, 2);
      if (cls.length) s += '.' + cls.join('.');
      parts.unshift(s);
      node = node.parentElement;
      depth++;
    }
    return parts.join(' > ');
  };

  const backdropFor = (el) => {
    let node = el;
    let stack = [];
    while (node && node.nodeType === 1) {
      const bg = parse(getComputedStyle(node).backgroundColor);
      if (bg && bg.a > 0) {
        stack.push(bg);
        if (bg.a >= 1) break;
      }
      node = node.parentElement;
    }
    let base = [255, 255, 255];
    for (let i = stack.length - 1; i >= 0; i--) base = over(stack[i].rgb, stack[i].a, base);
    return base;
  };

  const failures = [];
  const seen = new Set();

  for (const el of document.querySelectorAll('body *')) {
    const hasText = [...el.childNodes].some(
      (n) => n.nodeType === 3 && n.textContent.trim().length > 1,
    );
    if (!hasText) continue;

    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none' || Number(cs.opacity) === 0) continue;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) continue;

    const fg = parse(cs.color);
    if (!fg) continue;
    const bg = backdropFor(el);
    const fgFlat = fg.a < 1 ? over(fg.rgb, fg.a, bg) : fg.rgb;

    const size = parseFloat(cs.fontSize);
    const weight = parseInt(cs.fontWeight, 10) || 400;
    const large = size >= 24 || (size >= 18.66 && weight >= 700);
    const threshold = large ? 3 : 4.5;

    const r = ratio(fgFlat, bg);
    if (r + 0.005 < threshold) {
      const selector = selectorFor(el);
      const key = selector + '|' + Math.round(r * 100);
      if (seen.has(key)) continue;
      seen.add(key);
      failures.push({
        selector,
        ratio: Math.round(r * 100) / 100,
        threshold,
        fontSize: size,
        fontWeight: weight,
        sample: el.textContent.trim().replace(/\s+/g, ' ').slice(0, 60),
      });
    }
  }
  return failures.sort((a, b) => a.ratio - b.ratio);
};

/** Runs in the browser. Returns h1/h2 elements wrapping past three lines. */
const HEADING_PROBE = () => {
  const out = [];
  for (const el of document.querySelectorAll('h1, h2')) {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden') continue;
    let lh = parseFloat(cs.lineHeight);
    if (!Number.isFinite(lh)) lh = parseFloat(cs.fontSize) * 1.2;
    if (!Number.isFinite(lh) || lh <= 0) continue;
    const h = el.getBoundingClientRect().height;
    const lines = Math.round((h / lh) * 10) / 10;
    if (lines > 3.15) {
      out.push({
        tag: el.tagName.toLowerCase(),
        lines,
        lineHeight: Math.round(lh * 10) / 10,
        height: Math.round(h),
        text: el.textContent.trim().replace(/\s+/g, ' ').slice(0, 70),
      });
    }
  }
  return out;
};

/* --------------------------------------------------------------------- main */

async function loadPlaywright() {
  try {
    return await import('playwright');
  } catch {
    console.error(
      `${C.red}Playwright ontbreekt.${C.off}\n\n` +
        'Installeer het in dit project en haal de browser binnen:\n\n' +
        '  npm install --save-dev playwright\n' +
        '  npx playwright install chromium\n\n' +
        'Daarna opnieuw:  node tools/audit-screenshot.mjs [url]',
    );
    process.exit(2);
  }
}

async function main() {
  const { chromium } = await loadPlaywright();

  fs.mkdirSync(OUT_DIR, { recursive: true });

  let browser;
  try {
    browser = await chromium.launch();
  } catch (err) {
    console.error(
      `${C.red}Chromium kon niet starten.${C.off} Draai eerst:  npx playwright install chromium\n${err.message}`,
    );
    process.exit(2);
  }

  let contrastFailures = [];
  let headingFailures = [];

  try {
    for (const vp of VIEWPORTS) {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        deviceScaleFactor: 2,
        reducedMotion: 'reduce',
      });
      const page = await context.newPage();

      try {
        await page.goto(URL_ARG, { waitUntil: 'networkidle', timeout: 30000 });
      } catch (err) {
        console.error(
          `${C.red}Kon ${URL_ARG} niet laden.${C.off} Draait de dev-server?\n${err.message}`,
        );
        await context.close();
        await browser.close();
        process.exit(2);
      }

      const file = path.join(OUT_DIR, `${vp.name}.png`);
      await page.screenshot({ path: file, fullPage: true });
      console.log(`${C.dim}screenshot${C.off}  ${vp.name.padEnd(9)} ${path.relative(process.cwd(), file)}`);

      if (vp.width === 390) {
        contrastFailures = await page.evaluate(CONTRAST_PROBE);
        headingFailures = await page.evaluate(HEADING_PROBE);
      }

      await context.close();
    }
  } finally {
    await browser.close();
  }

  console.log(`\n${C.bold}Contrast (WCAG AA, gemeten op 390px)${C.off}`);
  if (contrastFailures.length === 0) {
    console.log(`  ${C.green}Alle tekst haalt de drempel.${C.off}`);
  } else {
    for (const f of contrastFailures) {
      console.log(
        `  ${C.red}${f.ratio.toFixed(2)}:1${C.off} (nodig ${f.threshold}:1)  ${f.selector}`,
      );
      console.log(`    ${C.dim}${f.fontSize}px/${f.fontWeight}  "${f.sample}"${C.off}`);
    }
    console.log(`  ${contrastFailures.length} elementen onder de drempel.`);
  }

  console.log(`\n${C.bold}Koppen op 390px${C.off}`);
  if (headingFailures.length === 0) {
    console.log(`  ${C.green}Geen h1/h2 die verder dan drie regels doorloopt.${C.off}`);
  } else {
    for (const h of headingFailures) {
      console.log(`  ${C.red}${h.tag}: ${h.lines} regels${C.off}  "${h.text}"`);
      console.log(`    ${C.dim}hoogte ${h.height}px bij line-height ${h.lineHeight}px${C.off}`);
    }
    console.log(
      `  ${headingFailures.length} kop(pen) te lang. Kort de tekst in of verlaag de mobiele stap in de typeschaal.`,
    );
  }

  const failed = contrastFailures.length > 0 || headingFailures.length > 0;
  console.log(
    `\n${failed ? C.red + 'audit gefaald' : C.green + 'audit geslaagd'}${C.off}  ${C.dim}screenshots in ${path.relative(process.cwd(), OUT_DIR)}/${C.off}`,
  );
  process.exit(failed ? 1 : 0);
}

main().catch((err) => {
  console.error(`${C.red}audit-screenshot crashte:${C.off} ${err.stack || err.message}`);
  process.exit(2);
});

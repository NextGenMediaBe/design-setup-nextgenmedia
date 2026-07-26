# tools/

Enforcement. The rest of this kit tells you what good looks like; this directory fails the
build when the output drifts back to the default.

Everything here is Node 20+ and zero-dependency, except the screenshot audit, which needs
Playwright. The ESLint and Stylelint files are **configs consumed by the target project** —
this repo does not lint itself, it hands these to whatever you are building.

| File | What it does | Run |
|---|---|---|
| `slop-check.mjs` | Scans source and content for the tells: default palettes, burned fonts, blob radii, em-dashes, banned copy. | `npm run design:check` |
| `eslint-rules/no-slop-classes.cjs` | ESLint rule for the same class patterns, at author time. | wired into the project's ESLint config |
| `stylelint-slop.config.mjs` | Keeps colour literals inside the token layer, kills `transition: all` and `outline: none`. | `npx stylelint … --config` |
| `audit-screenshot.mjs` | Screenshots three viewports, then checks contrast and heading wrap. | `npm run design:audit [url]` |
| `__fixtures__/` | Deliberately broken files. They prove the scanner fires. Do not clean them up. | `npm run design:test` |

## slop-check

```bash
node tools/slop-check.mjs                    # scan src/ app/ content/ components/
node tools/slop-check.mjs content            # scan a specific path
node tools/slop-check.mjs --fix              # apply the safe rewrites
node tools/slop-check.mjs --json             # machine-readable
node tools/slop-check.mjs --self-test        # prove the scanner still works
```

It scans `src/`, `app/`, `content/` and `components/` relative to the working directory,
skipping any that do not exist. Extensions: `.tsx .ts .jsx .js .astro .vue .svelte .css
.scss .md .mdx .json .html`.

**If none of those directories exist it scans nothing and exits 0**, with a message telling
you to pass a path explicitly. There is deliberately no fallback to the whole tree: without
those directories you are standing in the build kit, whose own English reference prose is
full of em-dashes and banned words *as examples*. Scanning it produced 773 false hits.

To scan something else, pass it:

```bash
node tools/slop-check.mjs content/nl
node tools/slop-check.mjs ../klantproject/app
```

Exit code 1 on any hit, so it drops straight into CI.

### The rules

| Rule id | Catches |
|---|---|
| `color-tailwind-default` | `bg-indigo-500`, `text-violet-600` and the rest of the default purple family |
| `gradient-purple` | `from-purple-600` — the single strongest AI tell |
| `radius-blob` | `rounded-2xl` / `rounded-3xl` used as a default |
| `backdrop-blur` | glassmorphism reached for without a reason |
| `shadow-heavy` | `shadow-lg` and up as the depth strategy |
| `transition-all` | `transition-all`, `transition: all` |
| `slate-default` | `slate-50` / `slate-900` / `slate-950` as brand colours |
| `hex-blacklist` | `#6366F1 #8B5CF6 #7C3AED #0F172A #F4F1EA #D97757 #22C55E` |
| `font-burned` | Inter, Geist, Poppins, Space Grotesk, Satoshi and the rest, in a `font-family`, `fontFamily` or `next/font` line |
| `em-dash` | `—` in Markdown, JSON and JSX text. Autofixable |
| `straight-quote` | straight `'` and `"` in Dutch prose. Autofixable |
| `banned-word` | the NL and EN filler list from `05-copy/copywriting.md` |
| `emoji-heading` | emoji in `h1`–`h3`, `<button>`, or a Markdown heading |
| `missing-lang` | `app/layout.tsx`, `layout.astro` or `index.html` with `<html>` but no `lang="nl"` |

### What `--fix` changes

Only what is mechanically safe:

- `—` becomes ` – ` (en-dash with spaces)
- `auto's` becomes `auto’s` — an apostrophe between two letters only
- `"citaat"` becomes `“citaat”` — paired straight doubles only
- `€ 1.200`, `10 %` and `nr. 5` get a non-breaking space, so they never break across lines

Code fences, frontmatter and lines containing URLs are left alone. Everything else the
scanner finds is a judgement call and stays yours.

### The escape hatch

```tsx
// slop-check-ok: glaslaag over de videohero, bewust gekozen in DESIGN.md
<div className="backdrop-blur-md" />
```

`slop-check-ok:` followed by **at least ten characters of reason**, on the offending line
or the line directly above it. A reason shorter than that does not suppress anything —
that is deliberate. The point is not to switch the rule off, it is to make the deviation a
decision somebody wrote down.

### Note on this repo

Running `npm run design:check` at the root of the build kit itself reports hundreds of
hits, because the standards documents are English reference prose full of em-dashes and
quoted anti-patterns. That is expected. Run it in the **target project**, not here. Use
`npm run design:test` to check the tool itself.

## ESLint

The rule file is CommonJS with a `.cjs` extension, because this repo's `package.json` sets
`"type": "module"`.

```js
// eslint.config.js in the target project
import noSlopClasses from './tools/eslint-rules/no-slop-classes.cjs';

export default [
  {
    files: ['**/*.{ts,tsx,jsx,js}'],
    plugins: { design: { rules: { 'no-slop-classes': noSlopClasses } } },
    rules: { 'design/no-slop-classes': 'error' },
  },
];
```

It checks every string literal and template chunk, plus the full argument tree of `clsx`,
`cn`, `classNames`, `cva` and `twMerge`, so variant objects are covered too.

## Stylelint

```js
// stylelint.config.mjs in the target project
import slop from './tools/stylelint-slop.config.mjs';

export default {
  extends: ['stylelint-config-standard'],
  ...slop,
};
```

Or point at it directly:

```bash
npx stylelint "**/*.{css,scss}" --config tools/stylelint-slop.config.mjs
```

Hex, `rgb()` and `hsl()` literals are errors everywhere except `**/tokens.css`,
`**/globals.css` and `**/tokens.scss` — the token layer is the one place raw values
belong. The blacklisted hex values are errors even there.

`outline: none` and `outline: 0` are errors. If you remove the native focus ring you owe
the project a `:focus-visible` replacement, written first.

## Screenshot audit

```bash
npm run design:audit                          # http://localhost:3000
node tools/audit-screenshot.mjs https://staging.example.com
```

Writes `.audit/390x844.png`, `.audit/768x1024.png` and `.audit/1440x900.png`, then runs two
checks against the 390px render:

- **Contrast** — every element with its own text is measured against the nearest
  non-transparent background, alpha composited. Fails under 4.5:1, or under 3:1 for text
  at 24px+ or 18.66px+ bold.
- **Heading wrap** — any `h1` or `h2` taller than three line-heights on a phone. That is
  the usual symptom of a type scale that was never given a mobile step.

Exit 1 if either fails, 2 if it could not run at all (Playwright missing, dev server down).
Playwright is not installed by default:

```bash
npm install --save-dev playwright
npx playwright install chromium
```

## Wiring it up

### Pre-commit

`.husky/pre-commit` in the target project:

```sh
#!/bin/sh
npx tsc --noEmit || exit 1
node tools/slop-check.mjs || exit 1
npx eslint . --max-warnings 0 || exit 1
npx stylelint "**/*.{css,scss}" --config tools/stylelint-slop.config.mjs || exit 1
```

### GitHub Actions

```yaml
- name: Design check
  run: |
    node tools/slop-check.mjs
    npx stylelint "**/*.{css,scss}" --config tools/stylelint-slop.config.mjs

- name: Screenshot audit
  run: |
    npm run build
    npm run start &
    npx wait-on http://localhost:3000
    node tools/audit-screenshot.mjs

- name: Upload audit screenshots
  if: always()
  uses: actions/upload-artifact@v4
  with:
    name: audit
    path: .audit/
```

Run `node tools/slop-check.mjs --self-test` in CI too. It scans `__fixtures__/` and fails
if any rule stops firing — which is how you find out a regex broke before it silently stops
catching anything.

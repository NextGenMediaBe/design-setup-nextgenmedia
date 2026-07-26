# Workflow: the mandatory process

Follow these eight steps literally, in order, on every project. The order is the point:
most of what goes wrong is doing step 5 before step 3.

**Steps 3 and 4 are gates.** No component code exists before both are delivered.

---

## 1. Sharpen the brief

Answer [`../00-start/project-kickoff.md`](../00-start/project-kickoff.md), plus these six.
If an answer is missing, **ask — do not guess**:

| | |
|---|---|
| Sector | Which playbook in [`../08-sectors/`](../08-sectors/) applies |
| Audience | Who, and how technical |
| **The one task** | What does one visitor do that counts as success? Everything serves it or gets cut |
| Three competitors | With URLs |
| Three references the client likes | With URLs, and one sentence each on *what* they like |
| **One reference the client finds ugly** | The most useful answer of the six. It rules out more than the three likes rule in |

If the client cannot name a reference they dislike, show them three and ask which one is
wrong. A brief with no negative space produces a design with no edges.

## 2. Read the sector playbook

[`../08-sectors/`](../08-sectors/). It tells you what the visitor actually came to do,
which is usually not what the client thinks. Read the whole file before designing.

The playbook is a starting point, not a template. Where the brief and the playbook
disagree, the brief wins — and you note why in `DESIGN.md`.

## 3. Write the design plan — before any code

Deliver this as text, in the chat, before opening an editor. Five parts:

**Palette** — 4 to 6 hex values. **Per colour: where it comes from.** Not "warm neutral",
but "the sand-lime brick of the workshop facade in the photos they sent". A colour whose
origin you cannot name is a colour you defaulted to.

**Type** — 2 to 3 roles (display, body, utility), each with the face, the weights, and one
sentence on why it fits *this sector*. Not why it is nice.

**Layout concept** — one sentence, then an ASCII wireframe of the homepage:

```
┌──────────────────────────────────────────┐
│ logo            nav              [bel]   │
├──────────────────────────────────────────┤
│ ███████████████████  H1 twee regels      │  foto bleedt links door
│ ███████████████████  één zin             │
│ ███████████████████  [Offerte aanvragen] │
├──────────────────────────────────────────┤
│  3 realisaties, 7/5 asymmetrisch         │
└──────────────────────────────────────────┘
```

**Signature element** — the one thing a visitor remembers this site by. Concrete and
buildable, not "a distinctive feel". **Without a filled-in signature element you may not
start building.**

**Motion principle** — one sentence. What moves, when, and why.

Record all five in the project's `DESIGN.md`
([`../02-design-system/DESIGN-template.md`](../02-design-system/DESIGN-template.md)).

## 4. Self-critique — the gate

Ask, in writing, and answer honestly:

> If I ran this same brief ten times, would I land here ten times out of ten?

If yes, this is a default, not a decision. **Revise the component that was predictable, and
write down what you changed and why.** Show that revision explicitly in the output — the
before, the after, and the reason.

Run the same question separately over palette, type, layout and the signature element. In
practice at least one of the four always fails on the first pass.

Also check against [`../02-design-system/anti-patterns.md`](../02-design-system/anti-patterns.md)
§1.7: is the plan one of the three AI cluster looks? If it is, and the brief did not ask
for it, you defaulted with extra steps.

### Take one reasoned aesthetic risk

One per project. Write down what it is and why it is defensible. An asymmetric grid that
breaks at one point, a type size nobody uses, a colour that is uncomfortable for two
seconds, a section with almost nothing in it.

Taking no risk is also a risk: it guarantees a forgettable result. The defence matters more
than the risk — "because the client restores vintage motorcycles and the site should feel
mechanical rather than soft" is a defence. "To make it more interesting" is not.

## 5. Build to the plan

Every colour and type decision must be traceable to step 3. If you find yourself picking a
value that is not in the plan, either the plan was incomplete (go update it) or you are
drifting (stop).

Order of work:

1. Token layer first — [`../02-design-system/tokens/`](../02-design-system/tokens/).
   Restyle the shadcn primitives you will use **before** placing the first component.
2. Header and footer — they frame everything.
3. Hero.
4. The section carrying the main argument.
5. Everything else, then the CTA.
6. States: empty, loading, error, hover, focus-visible, active, disabled. Then 404 and 500.
7. Motion, last. One or two moments.

Write real copy as you go ([`../05-copy/copywriting.md`](../05-copy/copywriting.md)).
Placeholder text that survives to review means the layout was built for the wrong content
lengths.

Check each section at 390px before moving to the next.

## 6. Screenshot audit

```bash
npm run design:audit
```

Renders **390px, 768px and 1440px**, writes to `.audit/`, and checks contrast ratios and
headings that wrap to more than three lines on mobile.

Then look at the screenshots and criticise your own work as if you were a competing studio
pitching against it. Write the critique down. Specifically:

- Which section is the weakest, and would deleting it lose anything?
- Where does the eye go first? Is that where it should go?
- Does the mobile version look designed, or does it look like the desktop survived?
- Squint until the text blurs. Is there still structure?

## 7. Run the checks

```bash
npm run design:check
```

Fails the build on the machine-enforced rules in
[`../02-design-system/anti-patterns.md`](../02-design-system/anti-patterns.md).

**A failure gets fixed, not suppressed.** Suppression via `slop-check-ok:` requires a
written reason and an entry in `DESIGN.md`. If you are writing your second suppression,
the plan from step 3 was wrong.

Then the standard gates:

```bash
npm run typecheck && npm run lint && npm run build
```

## 8. Fill in the audit

[`quality-review.md`](./quality-review.md) — 40 binary points plus three written questions.
**Deliver the completed audit**, not a claim that it passed.

The third question is the one that matters: *if I replace the client name with their
biggest competitor's, what falls over?* If the answer is "nothing", go back to step 3.

---

## Timeboxes, roughly

| Phase | Landing page | Marketing site (5–8 pages) |
|---|---|---|
| Brief + playbook | 1u | 2u |
| Design plan + self-critique | 1–2u | 3–4u |
| Tokens + scaffold | 1u | 1–2u |
| Sections | 4–8u | 2–4 days |
| States + responsive | 2u | 1 day |
| Motion | 1–2u | 2–4u |
| SEO + metadata | 1u | 2–3u |
| Audit + fixes | 2u | 1 day |

If a phase runs far over, it is almost always because step 3 was skipped and the design is
being decided inside the code.

## Deploy and handover

- Vercel, connected to the repo. Env vars in the dashboard, `.env.example` committed.
- Domain, DNS, certificate.
- **`noindex` removed from production.** Verify it. This one has bitten everybody.
- Forms tested on the production URL, not locally.
- Handover: where the code lives, how to deploy, how to edit content, what is agreed about
  updates and hosting.

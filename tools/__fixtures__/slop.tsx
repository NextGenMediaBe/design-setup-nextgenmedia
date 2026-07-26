/**
 * FIXTURE — opzettelijk fout. Niet repareren.
 *
 * Dit bestand bestaat om te bewijzen dat tools/slop-check.mjs daadwerkelijk vuurt.
 * Elke regel hieronder is een bewuste overtreding. Zodra iemand dit "opruimt"
 * stopt de self-test met bewijzen dat de scanner werkt.
 *
 * Draai:  node tools/slop-check.mjs --self-test
 */

import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';

const display = { fontFamily: 'Space Grotesk, sans-serif' };
const accent = '#6366F1';
const ink = '#0F172A';
const paper = '#F4F1EA';
const brick = '#D97757';
const grass = '#22C55E';
const lilac = '#8b5cf6';
const deep = '#7C3AED';

export function Hero() {
  return (
    <section className="bg-slate-950 text-slate-50 border-slate-900">
      <div className="bg-gradient-to-br from-purple-600 via-violet-500 to-fuchsia-400">
        <div className="rounded-3xl rounded-2xl backdrop-blur-md shadow-2xl shadow-lg">
          <h1 className="text-indigo-600 ring-violet-300">🚀 Naar een hoger niveau</h1>
          <h2 className="text-fuchsia-500">Innovatief en naadloos ✨</h2>
          <p className="transition-all duration-300">Wij ontzorgen u — van A tot Z.</p>
          <p>Het beste van twee werelden — moeiteloos en toonaangevend.</p>
          <button className="border-indigo-500">Ontdek de mogelijkheden 🎉</button>
          <span>{'Wij zijn uw partner in transformeer-projecten — echt waar.'}</span>
        </div>
      </div>
    </section>
  );
}

export function Card() {
  return (
    <article className="bg-violet-50 border-purple-200 shadow-xl rounded-2xl">
      <h3 className="text-purple-900">Robust en cutting-edge 🔥</h3>
      <p>We leverage seamless technology to unlock and transform your business.</p>
    </article>
  );
}

// Uji logika penutupan peta prasyarat: node tests/prerequisite-graph.mjs
import assert from 'node:assert/strict';
import { load, check, checks } from './_util.mjs';

const { prerequisiteClosure } = await load('src/lib/prerequisite-graph.ts');

const incoming = { b: ['a'], c: ['b'], d: ['b', 'c'] };
const outgoing = { a: ['b'], b: ['c', 'd'], c: ['d'] };

check('simpul terisolasi hanya mengaktifkan dirinya', () => {
  assert.deepEqual(prerequisiteClosure('x', {}, {}), { x: true });
});

check('penutupan menyertakan leluhur dan turunan', () => {
  const active = prerequisiteClosure('b', incoming, outgoing);
  assert.deepEqual(Object.keys(active).sort(), ['a', 'b', 'c', 'd']);
});

check('penutupan dari akar menjangkau seluruh keturunan', () => {
  const active = prerequisiteClosure('a', incoming, outgoing);
  assert.deepEqual(Object.keys(active).sort(), ['a', 'b', 'c', 'd']);
});

check('penutupan dari daun menjangkau seluruh leluhur', () => {
  const active = prerequisiteClosure('d', incoming, outgoing);
  assert.deepEqual(Object.keys(active).sort(), ['a', 'b', 'c', 'd']);
});

check('graf berisi siklus tidak membuat loop tak berujung', () => {
  const cycIn = { a: ['b'], b: ['a'] };
  const cycOut = { a: ['b'], b: ['a'] };
  const active = prerequisiteClosure('a', cycIn, cycOut);
  assert.deepEqual(Object.keys(active).sort(), ['a', 'b']);
});

console.log(`PASS prerequisite-graph (${checks.count} pemeriksaan)`);

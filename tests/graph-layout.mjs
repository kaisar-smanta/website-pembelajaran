// Uji tata letak grafik prasyarat murni: node tests/graph-layout.mjs
import assert from 'node:assert/strict';
import { layoutGraph } from '../src/lib/graph/layout.ts';

let passed = 0;
function check(label, fn) {
  fn();
  passed++;
  console.log(`  ok - ${label}`);
}

function byId(result) {
  return new Map(result.nodes.map((node) => [node.id, node]));
}

function isFiniteNumber(value) {
  return typeof value === 'number' && Number.isFinite(value);
}

// DAG: a -> b, a -> c, b -> d, c -> d
const dagNodes = [
  { id: 'a', title: 'A', element: 'bilangan' },
  { id: 'b', title: 'B', element: 'aljabar-fungsi' },
  { id: 'c', title: 'C', element: 'geometri' },
  { id: 'd', title: 'D', element: 'kalkulus' },
];
const dagEdges = [
  { from: 'a', to: 'b' },
  { from: 'a', to: 'c' },
  { from: 'b', to: 'd' },
  { from: 'c', to: 'd' },
];

check('rank lapisan benar pada DAG kecil', () => {
  const result = layoutGraph(dagNodes, dagEdges, { elementOrder: ['bilangan', 'aljabar-fungsi', 'geometri', 'kalkulus'] });
  const nodes = byId(result);
  assert.equal(nodes.get('a').rank, 0);
  assert.equal(nodes.get('b').rank, 1);
  assert.equal(nodes.get('c').rank, 1);
  assert.equal(nodes.get('d').rank, 2);
  assert.equal(result.cycle.length, 0);
});

check('setiap sisi menghubungkan rank yang bertambah', () => {
  const result = layoutGraph(dagNodes, dagEdges);
  const nodes = byId(result);
  for (const edge of dagEdges) {
    assert.ok(nodes.get(edge.from).rank < nodes.get(edge.to).rank, `sisi ${edge.from}->${edge.to}`);
  }
});

check('DAG menghasilkan koordinat dan kanvas yang wajar', () => {
  const result = layoutGraph(dagNodes, dagEdges);
  assert.ok(result.nodes.length === dagNodes.length);
  assert.ok(result.edges.length === dagEdges.length);
  assert.ok(result.width > 0 && isFiniteNumber(result.width));
  assert.ok(result.height > 0 && isFiniteNumber(result.height));
  for (const node of result.nodes) {
    assert.ok(isFiniteNumber(node.x) && isFiniteNumber(node.y), `koordinat ${node.id}`);
    assert.equal(node.dummy, false);
    assert.ok(Array.isArray(node.lines) && node.lines.length >= 1);
    assert.ok(isFiniteNumber(node.titleY));
  }
  for (const edge of result.edges) {
    assert.equal(typeof edge.d, 'string');
    assert.ok(edge.d.startsWith('M '), `path sisi ${edge.from}->${edge.to}`);
    assert.equal(typeof edge.primary, 'boolean');
  }
});

check('sisi panjang menghasilkan dummy (jumlah node render tetap sama)', () => {
  const result = layoutGraph(
    [
      { id: 'a', title: 'A' },
      { id: 'b', title: 'B' },
      { id: 'c', title: 'C' },
    ],
    [
      { from: 'a', to: 'b' },
      { from: 'b', to: 'c' },
      { from: 'a', to: 'c' },
    ],
  );
  assert.equal(result.nodes.length, 3);
  assert.equal(result.edges.length, 3);
  const long = result.edges.find((edge) => edge.from === 'a' && edge.to === 'c');
  assert.ok(long && long.d.length > 0);
});

check('graf kosong tidak membuat crash', () => {
  const result = layoutGraph([], []);
  assert.deepEqual(result.nodes, []);
  assert.deepEqual(result.edges, []);
  assert.ok(isFiniteNumber(result.width) && result.width > 0);
  assert.ok(isFiniteNumber(result.height) && result.height > 0);
  assert.deepEqual(result.cycle, []);
});

check('siklus terdeteksi dan tidak menghasilkan NaN', () => {
  const result = layoutGraph(
    [
      { id: 'a', title: 'A' },
      { id: 'b', title: 'B' },
      { id: 'c', title: 'C' },
    ],
    [
      { from: 'a', to: 'b' },
      { from: 'b', to: 'c' },
      { from: 'c', to: 'a' },
    ],
  );
  assert.ok(result.cycle.length >= 2, 'siklus harus dilaporkan');
  for (const id of ['a', 'b', 'c']) {
    assert.ok(result.cycle.includes(id), `siklus memuat ${id}`);
  }
  assert.ok(isFiniteNumber(result.width) && result.width > 0);
  assert.ok(isFiniteNumber(result.height) && result.height > 0);
  for (const node of result.nodes) {
    assert.ok(isFiniteNumber(node.x) && isFiniteNumber(node.y), `koordinat ${node.id}`);
    assert.ok(isFiniteNumber(node.titleY));
  }
  for (const edge of result.edges) {
    assert.ok(!edge.d.includes('NaN'), `path ${edge.from}->${edge.to} tidak boleh NaN`);
  }
});

console.log(`PASS graph-layout (${passed} pemeriksaan)`);

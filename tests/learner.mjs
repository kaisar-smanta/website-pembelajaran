// Uji logika murni penyimpanan dugaan & refleksi: node tests/learner.mjs
import assert from 'node:assert/strict';
import {
  recordPrediction,
  recordReflection,
  loadPredictions,
  savePredictions,
  loadReflections,
  saveReflections,
  seededShuffle,
  PREDICTION_KEY,
  REFLECTION_KEY,
} from '../src/lib/learner.ts';

function mockStorage() {
  const data = new Map();
  return {
    getItem: (key) => (data.has(key) ? data.get(key) : null),
    setItem: (key, value) => data.set(key, String(value)),
  };
}

let passed = 0;
function check(label, fn) {
  fn();
  passed++;
  console.log(`  ok - ${label}`);
}

check('recordPrediction menyimpan dan menimpa tanpa memutasi peta asal', () => {
  const base = {};
  const next = recordPrediction(base, 'a', 'dugaan', 5);
  assert.deepEqual(next.a, { value: 'dugaan', at: 5 });
  assert.deepEqual(base, {});
});

check('recordReflection menyimpan teks dan keyakinan', () => {
  const next = recordReflection({}, 'r', 'alasan', 4, 9);
  assert.deepEqual(next.r, { text: 'alasan', confidence: 4, at: 9 });
});

check('loadPredictions & savePredictions bertukar lewat storage', () => {
  const storage = mockStorage();
  savePredictions(storage, recordPrediction({}, 'x', 'ya', 1));
  assert.equal(storage.getItem(PREDICTION_KEY) !== null, true);
  const loaded = loadPredictions(storage);
  assert.equal(loaded.x.value, 'ya');
});

check('loadReflections & saveReflections bertukar lewat storage', () => {
  const storage = mockStorage();
  saveReflections(storage, recordReflection({}, 'y', 'refleksiku', 3, 2));
  assert.equal(storage.getItem(REFLECTION_KEY) !== null, true);
  const loaded = loadReflections(storage);
  assert.equal(loaded.y.text, 'refleksiku');
  assert.equal(loaded.y.confidence, 3);
});

check('load menolak data rusak tanpa melempar galat', () => {
  const storage = mockStorage();
  storage.setItem(PREDICTION_KEY, '{bukan json');
  assert.deepEqual(loadPredictions(storage), {});
  storage.setItem(REFLECTION_KEY, JSON.stringify({ a: { text: 5 } }));
  assert.deepEqual(loadReflections(storage), {});
});

check('load aman saat storage tidak tersedia', () => {
  assert.deepEqual(loadPredictions(undefined), {});
  assert.deepEqual(loadReflections(undefined), {});
  savePredictions(undefined, {});
  saveReflections(undefined, {});
});

check('seededShuffle deterministik untuk benih sama', () => {
  const items = [1, 2, 3, 4, 5, 6];
  assert.deepEqual(seededShuffle(items, 'seed'), seededShuffle(items, 'seed'));
  assert.deepEqual(items, [1, 2, 3, 4, 5, 6], 'array asal tidak berubah');
});

check('seededShuffle mempertahankan seluruh elemen', () => {
  const items = ['a', 'b', 'c', 'd', 'e'];
  const out = seededShuffle(items, 'lain');
  assert.deepEqual([...out].sort(), [...items].sort());
});

console.log(`\nSeluruh ${passed} uji learner lulus.`);

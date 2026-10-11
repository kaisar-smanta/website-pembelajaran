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
  toggleRubricCheck,
  loadRubricChecks,
  saveRubricChecks,
  clearRubricChecks,
  recordCompletion,
  clearCompletion,
  loadCompletions,
  saveCompletions,
  recordDraft,
  clearDraft,
  loadDrafts,
  saveDrafts,
  PREDICTION_KEY,
  REFLECTION_KEY,
  RUBRIC_KEY,
  COMPLETION_KEY,
  DRAFT_KEY,
} from '../src/lib/learner.ts';
import { check, checks, mockStorage } from './_util.mjs';

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

check('recordReflection menyimpan jawaban per pertanyaan', () => {
  const next = recordReflection({}, 'r', 'a\n\u0000\nb', 3, 1, ['a', 'b']);
  assert.deepEqual(next.r.parts, ['a', 'b']);
  assert.equal(next.r.text, 'a\n\u0000\nb');
  assert.equal('parts' in recordReflection({}, 'r', 'a', 3, 1).r, false);
});

check('loadReflections memulihkan parts dan menyaring nilai rusak', () => {
  const storage = mockStorage();
  saveReflections(storage, recordReflection({}, 'z', 'x', 2, 1, ['x']));
  assert.deepEqual(loadReflections(storage).z.parts, ['x']);
  storage.setItem(
    REFLECTION_KEY,
    JSON.stringify({ q: { text: 't', confidence: 1, at: 0, parts: ['ok', 5] } }),
  );
  assert.deepEqual(loadReflections(storage).q.parts, ['ok']);
  storage.setItem(REFLECTION_KEY, JSON.stringify({ q: { text: 't', confidence: 1, at: 0, parts: [] } }));
  assert.equal('parts' in loadReflections(storage).q, false);
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

check('toggleRubricCheck menambah dan menghapus tanpa memutasi peta asal', () => {
  const base = {};
  const added = toggleRubricCheck(base, 'q1', 2, true);
  assert.deepEqual(added.q1, [2]);
  assert.deepEqual(base, {});
  const more = toggleRubricCheck(added, 'q1', 0, true);
  assert.deepEqual(more.q1, [0, 2]);
  const less = toggleRubricCheck(more, 'q1', 2, false);
  assert.deepEqual(less.q1, [0]);
  assert.deepEqual(toggleRubricCheck(less, 'q1', 0, false), {});
});

check('loadRubricChecks & saveRubricChecks bertukar lewat storage', () => {
  const storage = mockStorage();
  saveRubricChecks(storage, toggleRubricCheck({}, 'x', 1, true));
  assert.equal(storage.getItem(RUBRIC_KEY) !== null, true);
  assert.deepEqual(loadRubricChecks(storage).x, [1]);
  saveRubricChecks(storage, clearRubricChecks(loadRubricChecks(storage), 'x'));
  assert.deepEqual(loadRubricChecks(storage), {});
});

check('loadRubricChecks menolak data rusak tanpa melempar', () => {
  const storage = mockStorage();
  storage.setItem(RUBRIC_KEY, JSON.stringify({ a: 'bukan larik', b: [1, 'x', 2] }));
  assert.deepEqual(loadRubricChecks(storage), { b: [1, 2] });
  assert.deepEqual(loadRubricChecks(undefined), {});
  saveRubricChecks(undefined, {});
});

check('recordCompletion menyimpan stempel waktu tanpa memutasi peta asal', () => {
  const base = {};
  const next = recordCompletion(base, 'sl-1', 42);
  assert.deepEqual(next['sl-1'], { at: 42 });
  assert.deepEqual(base, {});
});

check('clearCompletion menghapus tanda selesai', () => {
  const map = recordCompletion({}, 'sl-1', 1);
  assert.deepEqual(clearCompletion(map, 'sl-1'), {});
  assert.deepEqual(clearCompletion(map, 'tidak-ada'), map);
});

check('loadCompletions & saveCompletions bertukar lewat storage', () => {
  const storage = mockStorage();
  saveCompletions(storage, recordCompletion({}, 'mt-2', 7));
  assert.equal(storage.getItem(COMPLETION_KEY) !== null, true);
  const loaded = loadCompletions(storage);
  assert.equal(loaded['mt-2'].at, 7);
});

check('loadCompletions menolak data rusak tanpa melempar', () => {
  const storage = mockStorage();
  storage.setItem(COMPLETION_KEY, JSON.stringify({ a: { at: 'x' }, b: { at: 3 } }));
  assert.deepEqual(loadCompletions(storage), { b: { at: 3 } });
  assert.deepEqual(loadCompletions(undefined), {});
  saveCompletions(undefined, {});
});

check('recordDraft & clearDraft mengelola draf tanpa memutasi peta asal', () => {
  const base = {};
  const next = recordDraft(base, 'q1', 'langkah awal', 3);
  assert.deepEqual(next.q1, { text: 'langkah awal', at: 3 });
  assert.deepEqual(base, {});
  assert.deepEqual(clearDraft(next, 'q1'), {});
});

check('loadDrafts & saveDrafts bertukar lewat storage', () => {
  const storage = mockStorage();
  saveDrafts(storage, recordDraft({}, 'q9', 'drafku', 8));
  assert.equal(storage.getItem(DRAFT_KEY) !== null, true);
  assert.equal(loadDrafts(storage).q9.text, 'drafku');
});

check('loadDrafts menolak data rusak tanpa melempar', () => {
  const storage = mockStorage();
  storage.setItem(DRAFT_KEY, JSON.stringify({ a: { text: 5 }, b: { text: 'ok', at: 1 } }));
  assert.deepEqual(loadDrafts(storage), { b: { text: 'ok', at: 1 } });
  assert.deepEqual(loadDrafts(undefined), {});
  saveDrafts(undefined, {});
});

console.log(`\nSeluruh ${checks.count} uji learner lulus.`);

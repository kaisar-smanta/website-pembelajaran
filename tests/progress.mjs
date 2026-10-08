// Uji logika murni kemajuan latihan: node tests/progress.mjs
import assert from 'node:assert/strict';
import {
  recordAttempt,
  clearAttempt,
  summarize,
  missedQuestionIds,
  unansweredQuestionIds,
  streakFrom,
  cloneProgress,
  loadProgress,
  saveProgress,
  STORAGE_KEY,
} from '../src/lib/progress.ts';
import {
  buildOverview,
  continueLearning,
  suggestedStart,
} from '../src/lib/progress-overview.ts';

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

check('recordAttempt mencatat dan menimpa percobaan', () => {
  let map = {};
  map = recordAttempt(map, 'a', false, 1);
  map = recordAttempt(map, 'a', true, 2);
  assert.equal(map.a.correct, true);
  assert.equal(map.a.at, 2);
});

check('recordAttempt tidak memutasi peta asal', () => {
  const base = {};
  const next = recordAttempt(base, 'a', true, 1);
  assert.deepEqual(base, {});
  assert.equal(next.a.correct, true);
});

check('summarize menghitung terjawab, benar, dan akurasi', () => {
  let map = {};
  map = recordAttempt(map, 'a', true, 1);
  map = recordAttempt(map, 'b', false, 2);
  const result = summarize(map, ['a', 'b', 'c']);
  assert.deepEqual(result, { answered: 2, correct: 1, total: 3, accuracy: 0.5 });
});

check('summarize tanpa jawaban menghasilkan akurasi 0', () => {
  assert.deepEqual(summarize({}, ['a']), { answered: 0, correct: 0, total: 1, accuracy: 0 });
});

check('missed/unanswered memilih soal yang tepat', () => {
  let map = {};
  map = recordAttempt(map, 'a', true, 1);
  map = recordAttempt(map, 'b', false, 2);
  assert.deepEqual(missedQuestionIds(map, ['a', 'b', 'c']), ['b']);
  assert.deepEqual(unansweredQuestionIds(map, ['a', 'b', 'c']), ['c']);
});

check('streakFrom menghitung benar berurutan dari awal', () => {
  let map = {};
  map = recordAttempt(map, 'a', true, 1);
  map = recordAttempt(map, 'b', true, 2);
  map = recordAttempt(map, 'c', false, 3);
  assert.equal(streakFrom(map, ['a', 'b', 'c']), 2);
  assert.equal(streakFrom({}, ['a']), 0);
});

check('cloneProgress menghasilkan salinan independen', () => {
  const map = recordAttempt({}, 'a', true, 1);
  const copy = cloneProgress(map);
  copy.a.correct = false;
  assert.equal(map.a.correct, true);
});

check('clearAttempt menghapus percobaan tanpa memutasi peta asal', () => {
  const map = recordAttempt({}, 'a', true, 1);
  const cleared = clearAttempt(map, 'a');
  assert.deepEqual(cleared, {});
  assert.equal(map.a.correct, true);
});

check('clearAttempt pada peta kosong tetap kosong', () => {
  assert.deepEqual(clearAttempt({}, 'x'), {});
});

check('clearAttempt pada id yang tidak ada mengembalikan peta yang sama', () => {
  const map = recordAttempt({}, 'a', true, 1);
  assert.equal(clearAttempt(map, 'b'), map);
});

check('summarize mengabaikan soal tanpa penilaian pada ketepatan', () => {
  let map = {};
  map = recordAttempt(map, 'a', true, 1);
  map = recordAttempt(map, 'b', false, 2, false);
  const result = summarize(map, ['a', 'b', 'c']);
  assert.deepEqual(result, { answered: 2, correct: 1, total: 3, accuracy: 1 });
});

check('missedQuestionIds tidak memasukkan soal tanpa penilaian', () => {
  let map = {};
  map = recordAttempt(map, 'a', false, 1, false);
  map = recordAttempt(map, 'b', false, 2);
  assert.deepEqual(missedQuestionIds(map, ['a', 'b']), ['b']);
});

check('reset (clearAttempt) mengembalikan soal ke belum dikerjakan', () => {
  let map = recordAttempt({}, 'a', false, 1);
  assert.equal(summarize(map, ['a']).answered, 1);
  map = clearAttempt(map, 'a');
  assert.equal(summarize(map, ['a']).answered, 0);
  assert.deepEqual(unansweredQuestionIds(map, ['a']), ['a']);
});

check('recordAttempt menyimpan keadaan pilihan ganda', () => {
  const map = recordAttempt({}, 'a', false, 1, true, { selected: 'C' });
  assert.equal(map.a.selected, 'C');
});

check('recordAttempt menyimpan jawaban singkat dan uraian', () => {
  let map = {};
  map = recordAttempt(map, 'a', true, 1, true, { input: '9b^5' });
  map = recordAttempt(map, 'b', true, 2, false, { revealed: true, input: 'alasan saya' });
  assert.equal(map.a.input, '9b^5');
  assert.equal(map.b.revealed, true);
  assert.equal(map.b.input, 'alasan saya');
  assert.equal(map.b.graded, false);
});

check('loadProgress memulihkan keadaan dari penyimpanan', () => {
  const storage = mockStorage();
  let map = {};
  map = recordAttempt(map, 'a', false, 1, true, { selected: 'B' });
  map = recordAttempt(map, 'b', true, 2, false, { revealed: true, input: 'uraian' });
  saveProgress(storage, map);

  const restored = loadProgress(storage);
  assert.equal(restored.a.selected, 'B');
  assert.equal(restored.a.correct, false);
  assert.equal(restored.b.revealed, true);
  assert.equal(restored.b.input, 'uraian');
  assert.equal(restored.b.graded, false);
});

check('loadProgress mengabaikan data rusak / berkas lama tanpa keadaan', () => {
  const storage = mockStorage();
  storage.setItem(STORAGE_KEY, JSON.stringify({ a: { correct: true, at: 5 } }));
  const restored = loadProgress(storage);
  assert.equal(restored.a.correct, true);
  assert.equal(restored.a.selected, undefined);
  assert.equal(restored.a.graded, true);
});

check('clearAttempt pada penyimpanan membuat soal kembali belum dikerjakan', () => {
  const storage = mockStorage();
  saveProgress(storage, recordAttempt({}, 'a', true, 1, true, { selected: 'A' }));
  const cleared = clearAttempt(loadProgress(storage), 'a');
  saveProgress(storage, cleared);
  assert.equal(loadProgress(storage).a, undefined);
});

function topicEntry(id, overrides = {}) {
  return {
    id,
    slug: id,
    title: `Topik ${id}`,
    grade: 'X',
    gradeName: 'Kelas X',
    element: 'bilangan',
    elementName: 'Bilangan',
    subject: 'matematika',
    subjectName: 'Matematika',
    questionIds: [`${id}-q1`],
    predictions: 0,
    reflections: 0,
    practiceHref: `/latihan/${id}`,
    materialHref: `/matematika/kelas/X/bilangan/${id}`,
    ...overrides,
  };
}

function overviewOf(entries, progress = {}) {
  return buildOverview(entries, progress, {}, {});
}

check('continueLearning memilih topik yang dimulai tetapi belum tuntas', () => {
  const entries = [
    topicEntry('a', { questionIds: ['a-q1', 'a-q2'] }),
    topicEntry('b', { questionIds: ['b-q1', 'b-q2'] }),
  ];
  const progress = {
    'a-q1': { questionId: 'a-q1', correct: true, at: 5, graded: true },
    'b-q1': { questionId: 'b-q1', correct: false, at: 9, graded: true },
  };
  const overview = overviewOf(entries, progress);
  assert.deepEqual(continueLearning(overview).map((t) => t.id), ['b', 'a']);
});

check('suggestedStart mengutamakan kelas paling awal', () => {
  const entries = [
    topicEntry('c', { grade: 'XII', gradeName: 'Kelas XII' }),
    topicEntry('a', { grade: 'X' }),
    topicEntry('b', { grade: 'XI', gradeName: 'Kelas XI' }),
  ];
  const overview = overviewOf(entries);
  assert.deepEqual(suggestedStart(overview, 3).map((t) => t.id), ['a', 'b', 'c']);
});

check('suggestedStart tidak mendahulukan topik atas prasyaratnya', () => {
  const entries = [topicEntry('b', { prerequisites: ['a'] }), topicEntry('a')];
  const overview = overviewOf(entries);
  assert.deepEqual(suggestedStart(overview, 2).map((t) => t.id), ['a', 'b']);
});

check('suggestedStart melewatkan topik yang sudah dimulai', () => {
  const entries = [topicEntry('a'), topicEntry('b', { prerequisites: ['a'] })];
  const progress = { 'a-q1': { questionId: 'a-q1', correct: true, at: 1, graded: true } };
  const overview = overviewOf(entries, progress);
  assert.deepEqual(suggestedStart(overview, 5).map((t) => t.id), ['b']);
});

check('suggestedStart deterministik dan menghormati limit', () => {
  const entries = [topicEntry('a'), topicEntry('b'), topicEntry('c'), topicEntry('d')];
  const overview = overviewOf(entries);
  assert.deepEqual(suggestedStart(overview, 2).map((t) => t.id), ['a', 'b']);
  assert.deepEqual(suggestedStart(overview, 2).map((t) => t.id), ['a', 'b']);
  assert.equal(suggestedStart(overview, 0).length, 0);
});

check('suggestedStart mengabaikan prasyarat di luar kandidat', () => {
  const entries = [
    topicEntry('a', { questionIds: [] }),
    topicEntry('b', { prerequisites: ['a', 'tidak-ada'] }),
  ];
  const overview = overviewOf(entries);
  assert.deepEqual(suggestedStart(overview, 3).map((t) => t.id), ['b']);
});

console.log(`PASS progress (${passed} pemeriksaan)`);

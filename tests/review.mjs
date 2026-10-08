// Uji logika penjadwalan tinjauan lintas topik: node tests/review.mjs
import assert from 'node:assert/strict';
import {
  DAY_MS,
  REVIEW_CORRECT_INTERVAL_MS,
  REVIEW_INTERVAL_MS,
  buildReviewQueue,
  summarizeReviewQueue,
  msUntilDue,
  formatDueIn,
  reviewDueHint,
} from '../src/lib/review.ts';

let passed = 0;
function check(label, fn) {
  fn();
  passed++;
  console.log(`  ok - ${label}`);
}

const NOW = 1000 * DAY_MS;

check('buildReviewQueue aman pada masukan kosong', () => {
  assert.deepEqual(buildReviewQueue([], {}, NOW), []);
  assert.deepEqual(buildReviewQueue(['a', 'b'], {}, NOW).map((i) => i.questionId), ['a', 'b']);
});

check('buildReviewQueue menambahkan soal yang belum pernah dicoba sebagai unanswered', () => {
  const [item] = buildReviewQueue(['a'], {}, NOW);
  assert.equal(item.reason, 'unanswered');
  assert.equal(item.box, 0);
  assert.equal(item.accuracy, null);
  assert.equal(item.lastAt, 0);
  assert.equal(item.dueAt, NOW);
});

check('buildReviewQueue mengeluarkan soal yang sudah tepat', () => {
  const attempts = { a: { questionId: 'a', correct: true, at: NOW - DAY_MS, graded: true } };
  assert.deepEqual(buildReviewQueue(['a'], attempts, NOW), []);
});

check('buildReviewQueue mengabaikan percobaan tanpa penilaian otomatis', () => {
  const attempts = {
    a: { questionId: 'a', correct: false, at: NOW - DAY_MS, graded: false },
    b: { questionId: 'b', correct: true, at: NOW - DAY_MS, graded: false },
  };
  assert.deepEqual(buildReviewQueue(['a', 'b'], attempts, NOW), []);
});

check('buildReviewQueue menandai soal yang belum tepat sebagai missed', () => {
  const attempts = { a: { questionId: 'a', correct: false, at: NOW - 2 * DAY_MS, graded: true } };
  const [item] = buildReviewQueue(['a'], attempts, NOW);
  assert.equal(item.reason, 'missed');
  assert.equal(item.box, 1);
  assert.equal(item.accuracy, 0);
  assert.equal(item.lastAt, NOW - 2 * DAY_MS);
  assert.equal(item.dueAt, NOW - 2 * DAY_MS);
});

check('buildReviewQueue mengutamakan soal belum tepat di atas yang belum dicoba', () => {
  const attempts = { m: { questionId: 'm', correct: false, at: NOW, graded: true } };
  const ids = ['u', 'm'];
  assert.deepEqual(buildReviewQueue(ids, attempts, NOW).map((i) => i.questionId), ['m', 'u']);
});

check('buildReviewQueue mengutamakan percobaan salah yang lebih lama', () => {
  const attempts = {
    baru: { questionId: 'baru', correct: false, at: NOW - 2 * DAY_MS, graded: true },
    lama: { questionId: 'lama', correct: false, at: NOW - 30 * DAY_MS, graded: true },
    sedang: { questionId: 'sedang', correct: false, at: NOW - 10 * DAY_MS, graded: true },
  };
  const queue = buildReviewQueue(['baru', 'lama', 'sedang'], attempts, NOW);
  assert.deepEqual(queue.map((i) => i.questionId), ['lama', 'sedang', 'baru']);
});

check('buildReviewQueue deterministik untuk skor yang seri', () => {
  const attempts = {
    b: { questionId: 'b', correct: false, at: NOW - DAY_MS, graded: true },
    a: { questionId: 'a', correct: false, at: NOW - DAY_MS, graded: true },
  };
  assert.deepEqual(buildReviewQueue(['b', 'a'], attempts, NOW).map((i) => i.questionId), ['a', 'b']);
});

check('buildReviewQueue tidak memutasi daftar id maupun peta percobaan', () => {
  const ids = ['a', 'b'];
  const attempts = { a: { questionId: 'a', correct: false, at: NOW, graded: true } };
  const idsCopy = ids.slice();
  const attemptsCopy = JSON.parse(JSON.stringify(attempts));
  buildReviewQueue(ids, attempts, NOW);
  assert.deepEqual(ids, idsCopy);
  assert.deepEqual(attempts, attemptsCopy);
});

check('summarizeReviewQueue menghitung alasan tiap item', () => {
  const attempts = {
    m1: { questionId: 'm1', correct: false, at: NOW, graded: true },
    m2: { questionId: 'm2', correct: false, at: NOW, graded: true },
  };
  const queue = buildReviewQueue(['m1', 'm2', 'u1', 'u2', 'u3'], attempts, NOW);
  assert.deepEqual(summarizeReviewQueue(queue), { total: 5, missed: 2, unanswered: 3 });
});

check('summarizeReviewQueue aman pada antrean kosong', () => {
  assert.deepEqual(summarizeReviewQueue([]), { total: 0, missed: 0, unanswered: 0 });
});

check('interval Leitner naik dan jarak jawaban benar satu hari', () => {
  assert.deepEqual(REVIEW_INTERVAL_MS[0], 0);
  assert.deepEqual(REVIEW_INTERVAL_MS[1], 0);
  assert.ok(REVIEW_INTERVAL_MS[2] > REVIEW_INTERVAL_MS[1]);
  assert.ok(REVIEW_INTERVAL_MS[3] > REVIEW_INTERVAL_MS[2]);
  assert.equal(REVIEW_CORRECT_INTERVAL_MS, DAY_MS);
});

check('msUntilDue menghitung jeda relatif terhadap sekarang', () => {
  assert.equal(msUntilDue({ dueAt: NOW + 3 * DAY_MS }, NOW), 3 * DAY_MS);
  assert.equal(msUntilDue({ dueAt: NOW - DAY_MS }, NOW), -DAY_MS);
});

check('formatDueIn menerjemahkan jeda menjadi petunjuk ramah', () => {
  assert.equal(formatDueIn(-1), 'Saatnya ditinjau');
  assert.equal(formatDueIn(0), 'Saatnya ditinjau');
  assert.equal(formatDueIn(DAY_MS / 2), 'Tinjauan berikutnya besok');
  assert.equal(formatDueIn(3 * DAY_MS), 'Tinjauan berikutnya dalam 3 hari');
});

check('reviewDueHint membedakan belum dicoba, jatuh tempo, dan terjadwal', () => {
  assert.equal(
    reviewDueHint({ reason: 'unanswered', dueAt: NOW }, NOW),
    'Belum pernah dicoba',
  );
  assert.equal(
    reviewDueHint({ reason: 'missed', dueAt: NOW - DAY_MS }, NOW),
    'Saatnya ditinjau',
  );
  assert.equal(
    reviewDueHint({ reason: 'missed', dueAt: NOW + 2 * DAY_MS }, NOW),
    'Tinjauan berikutnya dalam 2 hari',
  );
});

console.log(`PASS review (${passed} pemeriksaan)`);

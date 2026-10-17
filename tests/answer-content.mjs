// Uji kontrak penilaian terhadap ISI bank soal: setiap kunci jawaban dan
// padanan `acceptedAnswers` harus benar-benar diterima oleh penilai, dan kunci
// pilihan ganda harus menunjuk opsi yang ada. Berbeda dari `answer.mjs` yang
// menguji kasus contoh, berkas ini membaca seluruh soal nyata sehingga
// perubahan jawaban tidak bisa lolos tanpa terdeteksi.
// node tests/answer-content.mjs
import { collectQuestions, ok, checks } from './_util.mjs';
import { answersMatch, answerCandidates } from '../src/lib/answer.ts';

const questions = await collectQuestions();
let shortAnswers = 0;
let accepted = 0;
const failures = [];

// Jawaban yang jelas salah; kunci yang benar-benar menilai harus menolaknya.
const WRONG = 'zzz-bukan-jawaban-999';

for (const q of questions) {
  if (q.type === 'multiple-choice') {
    if (!Array.isArray(q.options) || !q.options.some((opt) => opt.key === q.answer)) {
      failures.push(`${q.id}: kunci ${q.answer} bukan salah satu opsi`);
    }
    continue;
  }
  if (q.type !== 'short-answer') continue;
  shortAnswers += 1;

  if (answerCandidates(q.answer).size === 0) {
    failures.push(`${q.id}: kunci "${q.answer}" tidak menghasilkan kandidat`);
  }
  if (!answersMatch(q.answer, q.answer, q.acceptedAnswers ?? [])) {
    failures.push(`${q.id}: kunci "${q.answer}" menolak dirinya sendiri`);
  }
  // Kasus negatif: memastikan penilai benar-benar menilai, bukan menerima apa pun.
  if (answersMatch(WRONG, q.answer, q.acceptedAnswers ?? [])) {
    failures.push(`${q.id}: jawaban salah "${WRONG}" malah diterima`);
  }
  for (const alt of q.acceptedAnswers ?? []) {
    accepted += 1;
    if (!answersMatch(alt, q.answer, q.acceptedAnswers ?? [])) {
      failures.push(`${q.id}: acceptedAnswers "${alt}" tidak diterima`);
    }
  }
}

ok(
  questions.length > 0,
  'tidak ada soal yang dimuat dari bank soal',
);
ok(
  shortAnswers > 0,
  'tidak ada soal short-answer untuk diuji',
);
ok(failures.length === 0, `kontrak penilaian gagal:\n    ${failures.join('\n    ')}`);

console.log(
  `Kontrak penilaian diperiksa: ${questions.length} soal, ${shortAnswers} jawaban singkat, ${accepted} padanan (${checks.count} asersi)`,
);

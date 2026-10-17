/**
 * Sinyal penguasaan ringkas untuk satu topik di halaman materi.
 *
 * Hanya membaca peta percobaan yang sudah ada lewat pembantu murni
 * `summarize` (`progress.ts`), lalu menambahkan kotak Leitner tertinggi.
 * Tidak menghitung ulang ketepatan di sini supaya definisinya tetap tunggal.
 */

import { summarize, type ProgressMap } from './progress.ts';

export interface TopicMasterySignal {
  /** Soal yang pernah dikerjakan. */
  answered: number;
  /** Soal yang dinilai otomatis (mengecualikan uraian terbuka). */
  gradedAnswered: number;
  /** Ketepatan 0..1 dari soal yang dinilai otomatis; 0 bila belum ada. */
  accuracy: number;
  /** Kotak Leitner tertinggi yang diraih (0 bila belum pernah tepat). */
  maxBox: number;
}

/**
 * Menghitung sinyal penguasaan dari percobaan pada id soal yang diberikan.
 * Mengembalikan nol yang netral bila belum ada percobaan, sehingga pemanggil
 * dapat menyembunyikan sinyalnya tanpa perlu memeriksa kasus khusus.
 */
export function topicMasterySignal(
  attempts: ProgressMap,
  questionIds: readonly string[],
): TopicMasterySignal {
  const summary = summarize(attempts, [...questionIds]);
  let maxBox = 0;
  for (const id of questionIds) {
    const attempt = attempts[id];
    if (!attempt || attempt.graded === false) continue;
    if (typeof attempt.box === 'number' && attempt.box > maxBox) maxBox = attempt.box;
  }
  return {
    answered: summary.answered,
    gradedAnswered: summary.gradedAnswered,
    accuracy: summary.accuracy,
    maxBox,
  };
}

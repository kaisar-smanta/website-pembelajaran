/**
 * Logika latihan murni (tanpa DOM) yang dipakai bersama halaman bank latihan
 * `/latihan` dan halaman per topik `/latihan/[topic]`: menghitung dan
 * mengelompokkan soal menurut tingkat kesulitan.
 *
 * Fungsi di sini dapat diuji lewat `tests/practice.mjs`. Perhitungan kemajuan
 * siswa tidak diduplikasi di sini — halaman memakai `src/lib/progress.ts`.
 */

import type { Difficulty } from '@/types/content';
import { DIFFICULTY_ORDER } from '../data/display.ts';
import { missedQuestionIds, unansweredQuestionIds } from './progress.ts';
import type { ProgressMap } from './progress.ts';

/** Jumlah soal per tingkat kesulitan. */
export type DifficultyCounts = Record<Difficulty, number>;

/**
 * Mode sesi tinjau. `missed` = soal yang pernah dijawab belum tepat,
 * `unanswered` = soal yang belum pernah dicoba, `both` = gabungan keduanya.
 */
export type ReviewMode = 'missed' | 'unanswered' | 'both';

/**
 * Menggabungkan benih sesi dengan id soal menjadi benih pengacakan urutan opsi.
 *
 * Benih sesi dibangkitkan sekali per sesi/percobaan sehingga urutan opsi dapat
 * berbeda antar-kunjungan, tetapi tetap sama selama satu percobaan berlangsung.
 */
export function combineSeed(sessionSeed: string, questionId: string): string {
  return `${sessionSeed}::${questionId}`;
}

/**
 * Memilih id soal untuk sesi tinjau berdasarkan kemajuan siswa, mempertahankan
 * urutan aslinya. Soal tanpa penilaian otomatis tidak pernah masuk mode `missed`.
 */
export function reviewQuestionIds(
  attempts: ProgressMap,
  questionIds: string[],
  mode: ReviewMode = 'both',
): string[] {
  if (mode === 'missed') return missedQuestionIds(attempts, questionIds);
  if (mode === 'unanswered') return unansweredQuestionIds(attempts, questionIds);
  const missed = new Set(missedQuestionIds(attempts, questionIds));
  return questionIds.filter((id) => missed.has(id) || !attempts[id]);
}

/** Menghitung jumlah item untuk tiap tingkat kesulitan (selalu memuat ketiganya). */
export function difficultyCounts<T extends { difficulty: Difficulty }>(
  items: T[],
): DifficultyCounts {
  const counts = {} as DifficultyCounts;
  for (const level of DIFFICULTY_ORDER) counts[level] = 0;
  for (const item of items) counts[item.difficulty] += 1;
  return counts;
}

/** Mengelompokkan item per tingkat kesulitan, mempertahankan urutan aslinya. */
export function groupByDifficulty<T extends { difficulty: Difficulty }>(
  items: T[],
): Record<Difficulty, T[]> {
  const groups = {} as Record<Difficulty, T[]>;
  for (const level of DIFFICULTY_ORDER) groups[level] = [];
  for (const item of items) groups[item.difficulty].push(item);
  return groups;
}

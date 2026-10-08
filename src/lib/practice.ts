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

/** Jumlah soal per tingkat kesulitan. */
export type DifficultyCounts = Record<Difficulty, number>;

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

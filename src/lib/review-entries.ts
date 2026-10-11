/**
 * Pembangun entri daftar tinjauan untuk halaman latihan per topik.
 *
 * Modul ini memakai `stripMarkdown` (yang memuat `marked` + `katex`), jadi
 * SENGAJA dipisahkan dari `src/lib/practice.ts`: `practice.ts` diimpor oleh
 * skrip sisi klien (QuestionCard, QuizTeaser, practice-runner), sedangkan
 * modul ini hanya dipakai saat build agar KaTeX/marked tidak ikut terkirim
 * ke peramban.
 */

import type { Difficulty, Question } from '@/types/content';
import { DIFFICULTY_ORDER } from './difficulty.ts';
import { stripMarkdown } from '../utils/markdown.ts';
import { groupByDifficulty } from './practice.ts';

/** Entri daftar tinjauan pada ringkasan kemajuan halaman latihan topik. */
export interface ReviewEntry {
  id: string;
  number: number;
  snippet: string;
}

/**
 * Membangun entri tinjauan dari daftar soal: nomor per tingkat kesulitan
 * (`DIFFICULTY_ORDER`) dan cuplikan prompt tanpa rumus/markdown, dipotong 96
 * karakter.
 */
export function buildReviewEntries(
  all: Question[],
  order: Difficulty[] = DIFFICULTY_ORDER,
): ReviewEntry[] {
  const byDifficulty = groupByDifficulty(all);
  const reviewNumber = new Map<string, number>();
  for (const d of order) {
    byDifficulty[d].forEach((q, i) => reviewNumber.set(q.id, i + 1));
  }
  return all.map((q) => {
    const text = stripMarkdown(
      q.prompt.replace(/\$\$[\s\S]+?\$\$/g, ' ').replace(/\$[^\n$]+?\$/g, ' '),
    );
    return {
      id: q.id,
      number: reviewNumber.get(q.id) ?? 0,
      snippet: text.length > 96 ? `${text.slice(0, 96).trimEnd()}…` : text,
    };
  });
}

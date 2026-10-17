import type { Difficulty, Question } from '@/types/content';

/**
 * Berkas soal didaftarkan otomatis lewat glob. Setiap berkas mengekspor satu
 * atau lebih array soal; semua objek dengan `id` dan `topicId` dikumpulkan.
 */
const modules = import.meta.glob(['./*.ts', '!./index.ts'], { eager: true }) as Record<
  string,
  unknown
>;

function isQuestion(value: unknown): value is Question {
  return (
    Boolean(value) &&
    typeof value === 'object' &&
    typeof (value as { id?: unknown }).id === 'string' &&
    typeof (value as { topicId?: unknown }).topicId === 'string'
  );
}

/** Seluruh bank soal; tambahkan berkas per topik lalu terdaftar otomatis. */
export const questions: Question[] = Object.values(modules).flatMap((module) =>
  Object.values(module as Record<string, unknown>).flatMap((value) =>
    Array.isArray(value) ? value.filter(isQuestion) : [],
  ),
);

const byId = new Map<string, Question>(questions.map((q) => [q.id, q]));

export function getQuestion(id: string): Question | undefined {
  return byId.get(id);
}

export function questionsByTopic(topicId: string): Question[] {
  return questions.filter((q) => q.topicId === topicId);
}

export function questionsByTopicAndDifficulty(topicId: string, difficulty: Difficulty): Question[] {
  return questions.filter((q) => q.topicId === topicId && q.difficulty === difficulty);
}

/** Id topik yang memiliki setidaknya satu soal pada bank. */
export function topicIdsWithQuestions(): string[] {
  return Array.from(new Set(questions.map((q) => q.topicId)));
}

/** Jumlah soal per tingkat kesulitan untuk satu topik. */
export function practiceCounts(topicId: string): { dasar: number; cakap: number; mahir: number } {
  const items = questionsByTopic(topicId);
  return {
    dasar: items.filter((q) => q.difficulty === 'dasar').length,
    cakap: items.filter((q) => q.difficulty === 'cakap').length,
    mahir: items.filter((q) => q.difficulty === 'mahir').length,
  };
}

// Kategori asesmen tinggal di modul bebas-glob agar dapat dimuat uji Node;
// diekspor ulang agar pemanggil lama tetap bekerja.
export { assessmentCategories } from './categories';

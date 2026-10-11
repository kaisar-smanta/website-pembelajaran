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

export const assessmentCategories: { id: NonNullable<Question['category']>; name: string; description: string }[] = [
  { id: 'cepat', name: 'Latihan Cepat', description: 'Soal singkat untuk memanaskan pemahaman.' },
  { id: 'konsep', name: 'Pemahaman Konsep', description: 'Memeriksa pengertian, bukan sekadar hitungan.' },
  { id: 'penerapan', name: 'Penerapan', description: 'Menggunakan konsep pada masalah terstruktur.' },
  { id: 'pemodelan', name: 'Pemodelan', description: 'Membentuk model matematika dari situasi.' },
  { id: 'penalaran', name: 'Penalaran', description: 'Membuktikan, menilai, dan menyusun argumen.' },
  { id: 'kontekstual', name: 'Soal Kontekstual', description: 'Masalah nyata dengan interpretasi.' },
  { id: 'evaluasi', name: 'Evaluasi Bab', description: 'Campuran soal untuk mengukur capaian.' },
];

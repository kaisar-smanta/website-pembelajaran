/**
 * Logika kemajuan latihan yang murni (tanpa DOM) agar dapat diuji lewat
 * `tests/progress.mjs`, ditambah lapisan penyimpanan localStorage yang tipis
 * dan aman dipanggil dari peramban.
 */

import { readMap, writeMap } from './storage.ts';

export interface Attempt {
  questionId: string;
  correct: boolean;
  /** Waktu percobaan terakhir (epoch ms). */
  at: number;
  /**
   * false bila soal tidak dapat dinilai otomatis (mis. uraian terbuka).
   * Percobaan seperti ini tetap dihitung "dikerjakan" tetapi tidak
   * memengaruhi ketepatan maupun daftar "belum tepat".
   */
  graded?: boolean;
  /** Kunci pilihan ganda yang dipilih siswa (untuk memulihkan tampilan). */
  selected?: string;
  /** Teks jawaban singkat/uraian yang diketik siswa (untuk memulihkan tampilan). */
  input?: string;
  /** Apakah pembahasan soal uraian sudah dibuka. */
  revealed?: boolean;
}

/** Potongan keadaan soal yang ikut disimpan bersama percobaan. */
export interface AttemptState {
  selected?: string;
  input?: string;
  revealed?: boolean;
}

export type ProgressMap = Record<string, Attempt>;

export interface TopicProgress {
  answered: number;
  correct: number;
  total: number;
  /** 0..1 */
  accuracy: number;
}

/** Jarak antar-percobaan yang dianggap sesi baru (30 menit). */
export const SESSION_GAP_MS = 30 * 60 * 1000;

export function recordAttempt(
  map: ProgressMap,
  questionId: string,
  correct: boolean,
  at: number = Date.now(),
  graded: boolean = true,
  state: AttemptState = {},
): ProgressMap {
  const attempt: Attempt = { questionId, correct, at, graded };
  if (state.selected !== undefined) attempt.selected = state.selected;
  if (state.input !== undefined) attempt.input = state.input;
  if (state.revealed !== undefined) attempt.revealed = state.revealed;
  return { ...map, [questionId]: attempt };
}

/**
 * Hapus satu percobaan, mis. saat siswa menekan "Coba lagi". Ini menjaga agar
 * hitungan "dikerjakan" selalu sesuai dengan keadaan soal di layar.
 */
export function clearAttempt(map: ProgressMap, questionId: string): ProgressMap {
  if (!Object.prototype.hasOwnProperty.call(map, questionId)) return map;
  const next = { ...map };
  delete next[questionId];
  return next;
}

export function summarize(attempts: ProgressMap, questionIds: string[]): TopicProgress {
  let answered = 0;
  let correct = 0;
  let gradedAnswered = 0;
  for (const id of questionIds) {
    const attempt = attempts[id];
    if (!attempt) continue;
    answered += 1;
    if (attempt.graded === false) continue;
    gradedAnswered += 1;
    if (attempt.correct) correct += 1;
  }
  const total = questionIds.length;
  return {
    answered,
    correct,
    total,
    accuracy: gradedAnswered ? correct / gradedAnswered : 0,
  };
}

/** Soal yang pernah dijawab salah (untuk review). Soal tanpa penilaian otomatis diabaikan. */
export function missedQuestionIds(attempts: ProgressMap, questionIds: string[]): string[] {
  return questionIds.filter((id) => {
    const attempt = attempts[id];
    return Boolean(attempt && attempt.graded !== false && !attempt.correct);
  });
}

/** Soal yang belum pernah dicoba. */
export function unansweredQuestionIds(attempts: ProgressMap, questionIds: string[]): string[] {
  return questionIds.filter((id) => !attempts[id]);
}

export function streakFrom(attempts: ProgressMap, questionIds: string[]): number {
  let streak = 0;
  for (const id of questionIds) {
    const attempt = attempts[id];
    if (attempt && attempt.correct) streak += 1;
    else break;
  }
  return streak;
}

export const STORAGE_KEY = 'mtk-progress';

/** Menyalin agar pemanggil tidak memutasi objek dari penyimpanan. */
export function cloneProgress(map: ProgressMap): ProgressMap {
  return Object.fromEntries(Object.entries(map).map(([id, a]) => [id, { ...a }]));
}

export function loadProgress(storage: Storage | undefined): ProgressMap {
  return readMap(
    STORAGE_KEY,
    (value, id) => {
      if (typeof value.correct !== 'boolean') return undefined;
      const attempt: Attempt = {
        questionId: id,
        correct: value.correct,
        at: typeof value.at === 'number' ? value.at : 0,
        graded: value.graded === false ? false : true,
      };
      if (typeof value.selected === 'string') attempt.selected = value.selected;
      if (typeof value.input === 'string') attempt.input = value.input;
      if (value.revealed === true) attempt.revealed = true;
      return attempt;
    },
    storage,
  );
}

export function saveProgress(storage: Storage | undefined, map: ProgressMap): void {
  writeMap(STORAGE_KEY, map, storage);
}

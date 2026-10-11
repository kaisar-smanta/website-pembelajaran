/**
 * Pembantu sisi klien yang dipakai bersama `QuestionCard.astro` (kartu soal) dan
 * `QuizTeaser.astro` (kuis kilat): benih acak sesi, penulisan progres, dan
 * rentetan jawaban benar. Sebelumnya logika ini disalin di kedua komponen.
 */

import {
  clearAttempt,
  loadProgress,
  recordAttempt,
  saveProgress,
  type AttemptState,
} from './progress.ts';
import { STORAGE_KEYS } from './storage-keys.ts';

/** Benih sesi per tab; stabil selama satu percobaan sehingga urutan opsi tetap. */
export function sessionSeed(storage?: Storage): string {
  try {
    const store = storage ?? window.sessionStorage;
    let seed = store.getItem(STORAGE_KEYS.sessionSeed);
    if (!seed) {
      seed = Math.random().toString(36).slice(2) + Date.now().toString(36);
      store.setItem(STORAGE_KEYS.sessionSeed, seed);
    }
    return seed;
  } catch {
    return 'sesi-tetap';
  }
}

/** Menyimpan satu percobaan soal lalu mengirim kejadian `mtk:progress`. */
export function recordProgress(
  questionId: string,
  correct: boolean,
  options: { graded?: boolean; state?: AttemptState; at?: number } = {},
): void {
  if (!questionId) return;
  const graded = options.graded ?? true;
  try {
    const storage = window.localStorage;
    const map = loadProgress(storage);
    saveProgress(
      storage,
      recordAttempt(map, questionId, correct, options.at ?? Date.now(), graded, options.state),
    );
  } catch {
    /* penyimpanan diblokir: abaikan */
  }
  dispatchProgress({ questionId, correct, graded });
}

/** Menghapus percobaan satu soal (mis. "Coba lagi") lalu memberi tahu pendengar. */
export function clearProgress(questionId: string): void {
  if (!questionId) return;
  try {
    const storage = window.localStorage;
    const map = loadProgress(storage);
    saveProgress(storage, clearAttempt(map, questionId));
  } catch {
    /* abaikan */
  }
  dispatchProgress({ questionId, cleared: true });
}

function dispatchProgress(detail: Record<string, unknown>): void {
  try {
    window.dispatchEvent(new CustomEvent('mtk:progress', { detail }));
  } catch {
    /* abaikan */
  }
}

/** Rentetan jawaban benar kuis kilat yang tersimpan. */
export function loadQuizStreak(): number {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEYS.quizStreak);
    const parsed = raw ? Number.parseInt(raw, 10) : 0;
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
  } catch {
    return 0;
  }
}

export function saveQuizStreak(value: number): void {
  try {
    window.localStorage.setItem(STORAGE_KEYS.quizStreak, String(value));
  } catch {
    /* abaikan */
  }
}

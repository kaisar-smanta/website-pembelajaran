/**
 * Penjadwalan tinjauan lintas topik yang murni (tanpa DOM) agar dapat diuji
 * lewat `tests/review.mjs`.
 *
 * Model yang dipakai sederhana dan terinspirasi Leitner/Ebbinghaus: soal yang
 * belum tepat selalu dijadwalkan paling mendesak, lalu makin lama jarang
 * diulang. Karena `ProgressMap` hanya menyimpan percobaan terakhir tiap soal,
 * kotak (box) diturunkan langsung dari keadaan percobaan terakhir.
 */

import type { ProgressMap } from './progress.ts';

export const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Interval tinjauan (dalam hari) menurut kotak:
 * `0` belum pernah dikerjakan, `1` baru saja belum tepat, lalu makin jarang.
 */
export const REVIEW_INTERVAL_DAYS: readonly number[] = [0, 0, 1, 3, 7, 16, 35];

/** Interval tinjauan yang sama dalam milidetik. */
export const REVIEW_INTERVAL_MS: readonly number[] = REVIEW_INTERVAL_DAYS.map(
  (days) => days * DAY_MS,
);

/** Interval tinjauan setelah satu jawaban benar (kotak 2). */
export const REVIEW_CORRECT_INTERVAL_MS = REVIEW_INTERVAL_MS[2];

/** Batas keterlambatan yang diperhitungkan pada skor prioritas (satu tahun). */
export const REVIEW_MAX_OVERDUE_MS = 365 * DAY_MS;

export type ReviewReason = 'missed' | 'unanswered';

/** Satu soal dalam antrean tinjauan lintas topik. */
export interface ReviewItem {
  questionId: string;
  reason: ReviewReason;
  /** Kotak Leitner: 0 belum pernah, 1 baru belum tepat. */
  box: number;
  /** Ketepatan terakhir: 0 bila salah, null bila belum pernah dinilai. */
  accuracy: number | null;
  /** Waktu percobaan terakhir (epoch ms); 0 bila belum pernah. */
  lastAt: number;
  /** Interval kotak ini dalam milidetik. */
  intervalMs: number;
  /** Kapan soal ini kembali dijadwalkan (epoch ms). */
  dueAt: number;
  /** Skor urutan; makin besar makin mendesak. */
  priority: number;
}

export interface ReviewSummary {
  total: number;
  missed: number;
  unanswered: number;
}

/**
 * Membangun antrean tinjauan berprioritas dari seluruh id soal yang diketahui.
 *
 * Soal yang sudah tepat atau tidak dapat dinilai otomatis tidak pernah masuk
 * antrean. Soal yang belum pernah dicoba ikut ditambahkan agar tetap terjangkau,
 * tetapi selalu berada di bawah soal yang pernah salah (ketepatan lebih rendah
 * lebih mendesak). Di antara soal yang pernah salah, percobaan yang lebih lama
 * lebih mendesak.
 */
export function buildReviewQueue(
  questionIds: readonly string[],
  attempts: ProgressMap,
  now: number = Date.now(),
): ReviewItem[] {
  const items: ReviewItem[] = [];

  for (const questionId of questionIds) {
    const attempt = attempts[questionId];
    let reason: ReviewReason;
    let box: number;
    let accuracy: number | null;
    let lastAt: number;

    if (!attempt) {
      reason = 'unanswered';
      box = 0;
      accuracy = null;
      lastAt = 0;
    } else if (attempt.graded === false || attempt.correct) {
      continue;
    } else {
      reason = 'missed';
      box = 1;
      accuracy = 0;
      lastAt = typeof attempt.at === 'number' ? attempt.at : 0;
    }

    const intervalMs = REVIEW_INTERVAL_MS[box] ?? 0;
    const dueAt = reason === 'unanswered' ? now : lastAt + intervalMs;
    const overdueMs = Math.max(0, now - dueAt);
    const accuracyWeight = accuracy === null ? 0.5 : 1 - accuracy;
    const overdueWeight =
      Math.min(overdueMs, REVIEW_MAX_OVERDUE_MS) / REVIEW_MAX_OVERDUE_MS;

    items.push({
      questionId,
      reason,
      box,
      accuracy,
      lastAt,
      intervalMs,
      dueAt,
      priority: accuracyWeight + overdueWeight,
    });
  }

  return items.sort(compareReviewItems);
}

function compareReviewItems(a: ReviewItem, b: ReviewItem): number {
  if (b.priority !== a.priority) return b.priority - a.priority;
  if (a.dueAt !== b.dueAt) return a.dueAt - b.dueAt;
  if (a.lastAt !== b.lastAt) return a.lastAt - b.lastAt;
  return a.questionId < b.questionId ? -1 : a.questionId > b.questionId ? 1 : 0;
}

export function summarizeReviewQueue(items: readonly ReviewItem[]): ReviewSummary {
  let missed = 0;
  let unanswered = 0;
  for (const item of items) {
    if (item.reason === 'missed') missed += 1;
    else unanswered += 1;
  }
  return { total: items.length, missed, unanswered };
}

export function msUntilDue(item: Pick<ReviewItem, 'dueAt'>, now: number = Date.now()): number {
  return item.dueAt - now;
}

/** Kalimat singkat "hingga tinjauan berikutnya" untuk sebuah jeda. */
export function formatDueIn(ms: number): string {
  if (ms <= 0) return 'Saatnya ditinjau';
  const days = Math.ceil(ms / DAY_MS);
  if (days <= 1) return 'Tinjauan berikutnya besok';
  return `Tinjauan berikutnya dalam ${days} hari`;
}

/** Petunjuk jadwal untuk satu soal antrean. */
export function reviewDueHint(
  item: Pick<ReviewItem, 'reason' | 'dueAt'>,
  now: number = Date.now(),
): string {
  if (item.reason === 'unanswered') return 'Belum pernah dicoba';
  return formatDueIn(msUntilDue(item, now));
}

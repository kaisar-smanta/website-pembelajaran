/**
 * Registri tunggal seluruh kunci `localStorage` yang dipakai situs.
 *
 * Sebelumnya kunci tersebar (sebagian di `learner.ts`, `progress.ts`, dan
 * literal mentah di komponen). Memusatkannya di sini mencegah bentrok dan
 * memudahkan migrasi bila bentuk data berubah.
 */

/** Versi skema penyimpanan. Naikkan saat bentuk data berubah tak-kompatibel. */
export const SCHEMA_VERSION = 1;

export const STORAGE_KEYS = {
  /** Peta percobaan soal: `Record<questionId, Attempt>`. */
  progress: 'mtk-progress',
  /** Dugaan pada bagian pemantik. */
  predictions: 'mtk-predictions',
  /** Jawaban refleksi per bagian. */
  reflections: 'mtk-reflections',
  /** Centang kriteria rubrik jawaban terbuka. */
  rubric: 'mtk-rubric-checks',
  /** Tanda penyelesaian aktivitas interaktif. */
  completions: 'mtk-completions',
  /** Draf jawaban uraian. */
  drafts: 'mtk-drafts',
  /** Benih acak sesi kuis aktif. */
  sessionSeed: 'mtk-session-seed',
  /** Rentetan jawaban benar kuis kilat. */
  quizStreak: 'mtk-quiz-streak',
  /** Preferensi mode terang/gelap. */
  theme: 'theme',
  /** Metadata skema penyimpanan (versi). */
  meta: 'mtk-meta',
} as const;

export type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];

/**
 * Seluruh kunci milik fitur pembelajaran (progres, latihan, kuis, catatan).
 * Dipakai untuk operasi menyeluruh seperti "hapus semua kemajuan".
 * Sengaja tidak memuat `theme` agar preferensi terang/gelap tetap tersimpan.
 */
export const LEARNER_KEYS = [
  STORAGE_KEYS.progress,
  STORAGE_KEYS.predictions,
  STORAGE_KEYS.reflections,
  STORAGE_KEYS.rubric,
  STORAGE_KEYS.completions,
  STORAGE_KEYS.drafts,
  STORAGE_KEYS.sessionSeed,
  STORAGE_KEYS.quizStreak,
  STORAGE_KEYS.meta,
] as const;

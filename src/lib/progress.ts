/**
 * Logika kemajuan latihan yang murni (tanpa DOM) agar dapat diuji lewat
 * `tests/progress.mjs`, ditambah lapisan penyimpanan localStorage yang tipis
 * dan aman dipanggil dari peramban.
 */

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
  if (!storage) return {};
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return {};
    const out: ProgressMap = {};
    for (const [id, value] of Object.entries(parsed as Record<string, unknown>)) {
      if (!value || typeof value !== 'object') continue;
      const attempt = value as Partial<Attempt>;
      if (typeof attempt.correct !== 'boolean') continue;
      out[id] = {
        questionId: id,
        correct: attempt.correct,
        at: typeof attempt.at === 'number' ? attempt.at : 0,
        graded: attempt.graded === false ? false : true,
      };
      if (typeof attempt.selected === 'string') out[id].selected = attempt.selected;
      if (typeof attempt.input === 'string') out[id].input = attempt.input;
      if (attempt.revealed === true) out[id].revealed = true;
    }
    return out;
  } catch {
    return {};
  }
}

export function saveProgress(storage: Storage | undefined, map: ProgressMap): void {
  if (!storage) return;
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    /* penyimpanan penuh atau diblokir: abaikan */
  }
}

/**
 * Penyimpanan ringan untuk interaksi non-penilaian pada halaman materi:
 * dugaan pada bagian pemantik dan jawaban refleksi. Logika murni dipisahkan
 * agar dapat diuji tanpa DOM maupun localStorage (lihat tests/learner.mjs).
 */

import { readMap, writeMap } from './storage.ts';

export interface PredictionRecord {
  value: string;
  at: number;
}

export interface ReflectionRecord {
  text: string;
  confidence: number;
  at: number;
  /** Jawaban per pertanyaan (stabil terhadap perubahan urutan teks). */
  parts?: string[];
}

/**
 * Catatan penyelesaian aktivitas interaktif yang tidak dinilai (contoh
 * bertahap, cari kesalahan, mencocokkan). Dipakai agar bilah "Kemajuan halaman"
 * menghitung aktivitas ini, bukan hanya dugaan, refleksi, dan latihan.
 */
export interface CompletionRecord {
  at: number;
}

/** Draf jawaban uraian yang disimpan agar tidak hilang saat halaman dimuat ulang. */
export interface DraftRecord {
  text: string;
  at: number;
}

export type RubricCheckMap = Record<string, number[]>;

export type PredictionMap = Record<string, PredictionRecord>;
export type ReflectionMap = Record<string, ReflectionRecord>;
export type CompletionMap = Record<string, CompletionRecord>;
export type DraftMap = Record<string, DraftRecord>;

export const PREDICTION_KEY = 'mtk-predictions';
export const REFLECTION_KEY = 'mtk-reflections';
export const RUBRIC_KEY = 'mtk-rubric-checks';
export const COMPLETION_KEY = 'mtk-completions';
export const DRAFT_KEY = 'mtk-drafts';

export function toggleRubricCheck(
  map: RubricCheckMap,
  questionId: string,
  index: number,
  checked: boolean,
): RubricCheckMap {
  const current = new Set(map[questionId] ?? []);
  if (checked) current.add(index);
  else current.delete(index);
  const next = { ...map };
  const indices = [...current].sort((a, b) => a - b);
  if (indices.length) next[questionId] = indices;
  else delete next[questionId];
  return next;
}

export function clearRubricChecks(map: RubricCheckMap, questionId: string): RubricCheckMap {
  if (!Object.prototype.hasOwnProperty.call(map, questionId)) return map;
  const next = { ...map };
  delete next[questionId];
  return next;
}

export function loadRubricChecks(storage: Storage | undefined): RubricCheckMap {
  return readMap(
    RUBRIC_KEY,
    (value) => {
      if (!Array.isArray(value)) return undefined;
      return value.filter((n): n is number => typeof n === 'number');
    },
    storage,
  );
}

export function saveRubricChecks(storage: Storage | undefined, map: RubricCheckMap): void {
  writeMap(RUBRIC_KEY, map, storage);
}

/** Menyimpan/menyegarkan satu dugaan tanpa memutasi peta masukan. */
export function recordPrediction(
  map: PredictionMap,
  id: string,
  value: string,
  at: number = Date.now(),
): PredictionMap {
  return { ...map, [id]: { value, at } };
}

/** Menyimpan/menyegarkan satu refleksi tanpa memutasi peta masukan. */
export function recordReflection(
  map: ReflectionMap,
  id: string,
  text: string,
  confidence: number,
  at: number = Date.now(),
  parts?: string[],
): ReflectionMap {
  const record: ReflectionRecord = { text, confidence, at };
  if (parts && parts.length) record.parts = parts;
  return { ...map, [id]: record };
}

export function loadPredictions(storage: Storage | undefined): PredictionMap {
  return readMap(
    PREDICTION_KEY,
    (value) => {
      if (typeof value.value !== 'string') return undefined;
      return { value: value.value, at: typeof value.at === 'number' ? value.at : 0 };
    },
    storage,
  );
}

export function savePredictions(storage: Storage | undefined, map: PredictionMap): void {
  writeMap(PREDICTION_KEY, map, storage);
}

export function loadReflections(storage: Storage | undefined): ReflectionMap {
  return readMap(
    REFLECTION_KEY,
    (value) => {
      if (typeof value.text !== 'string') return undefined;
      const confidence = typeof value.confidence === 'number' ? value.confidence : 0;
      const record: ReflectionRecord = {
        text: value.text,
        confidence,
        at: typeof value.at === 'number' ? value.at : 0,
      };
      if (Array.isArray(value.parts)) {
        const parts = value.parts.filter((p): p is string => typeof p === 'string');
        if (parts.length) record.parts = parts;
      }
      return record;
    },
    storage,
  );
}

export function saveReflections(storage: Storage | undefined, map: ReflectionMap): void {
  writeMap(REFLECTION_KEY, map, storage);
}

/** Menandai satu aktivitas interaktif selesai tanpa memutasi peta masukan. */
export function recordCompletion(
  map: CompletionMap,
  id: string,
  at: number = Date.now(),
): CompletionMap {
  return { ...map, [id]: { at } };
}

/** Menghapus tanda selesai satu aktivitas (mis. saat aktivitas diulang). */
export function clearCompletion(map: CompletionMap, id: string): CompletionMap {
  if (!Object.prototype.hasOwnProperty.call(map, id)) return map;
  const next = { ...map };
  delete next[id];
  return next;
}

export function loadCompletions(storage: Storage | undefined): CompletionMap {
  return readMap(
    COMPLETION_KEY,
    (value) => {
      const at = value.at;
      if (typeof at !== 'number') return undefined;
      return { at };
    },
    storage,
  );
}

export function saveCompletions(storage: Storage | undefined, map: CompletionMap): void {
  writeMap(COMPLETION_KEY, map, storage);
}

/** Menyimpan draf jawaban uraian tanpa memutasi peta masukan. */
export function recordDraft(
  map: DraftMap,
  id: string,
  text: string,
  at: number = Date.now(),
): DraftMap {
  return { ...map, [id]: { text, at } };
}

export function clearDraft(map: DraftMap, id: string): DraftMap {
  if (!Object.prototype.hasOwnProperty.call(map, id)) return map;
  const next = { ...map };
  delete next[id];
  return next;
}

export function loadDrafts(storage: Storage | undefined): DraftMap {
  return readMap(
    DRAFT_KEY,
    (value) => {
      if (typeof value.text !== 'string') return undefined;
      return { text: value.text, at: typeof value.at === 'number' ? value.at : 0 };
    },
    storage,
  );
}

export function saveDrafts(storage: Storage | undefined, map: DraftMap): void {
  writeMap(DRAFT_KEY, map, storage);
}

/**
 * Mengacak daftar secara deterministik dari sebuah benih sehingga urutan hasil
 * build stabil untuk seluruh pengunjung, tetapi tidak mengungkap pasangan pada
 * aktivitas mencocokkan.
 */
export function seededShuffle<T>(items: T[], seed: string): T[] {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i -= 1) {
    h = Math.imul(h ^ (h >>> 15), h | 1);
    h ^= h + Math.imul(h ^ (h >>> 7), h | 61);
    const j = Math.abs(h) % (i + 1);
    const tmp = out[i];
    out[i] = out[j];
    out[j] = tmp;
  }
  return out;
}

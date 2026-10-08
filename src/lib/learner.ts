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
}

export type RubricCheckMap = Record<string, number[]>;

export type PredictionMap = Record<string, PredictionRecord>;
export type ReflectionMap = Record<string, ReflectionRecord>;

export const PREDICTION_KEY = 'mtk-predictions';
export const REFLECTION_KEY = 'mtk-reflections';
export const RUBRIC_KEY = 'mtk-rubric-checks';

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
): ReflectionMap {
  return { ...map, [id]: { text, confidence, at } };
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
      return { text: value.text, confidence, at: typeof value.at === 'number' ? value.at : 0 };
    },
    storage,
  );
}

export function saveReflections(storage: Storage | undefined, map: ReflectionMap): void {
  writeMap(REFLECTION_KEY, map, storage);
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

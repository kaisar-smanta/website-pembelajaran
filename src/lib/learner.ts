/**
 * Penyimpanan ringan untuk interaksi non-penilaian pada halaman materi:
 * dugaan pada bagian pemantik dan jawaban refleksi. Logika murni dipisahkan
 * agar dapat diuji tanpa DOM maupun localStorage (lihat tests/learner.mjs).
 */

import { readMap, writeMap } from './storage.ts';
import { STORAGE_KEYS } from './storage-keys.ts';

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

export const PREDICTION_KEY = STORAGE_KEYS.predictions;
export const REFLECTION_KEY = STORAGE_KEYS.reflections;
export const RUBRIC_KEY = STORAGE_KEYS.rubric;
export const COMPLETION_KEY = STORAGE_KEYS.completions;
export const DRAFT_KEY = STORAGE_KEYS.drafts;

interface KeyedStore<T> {
  load: (storage?: Storage) => Record<string, T>;
  save: (storage: Storage | undefined, map: Record<string, T>) => void;
}

/**
 * Menyatukan pola baca/tulis peta per entitas: satu validasi bentuk nilai,
 * selebihnya dibungkus oleh `readMap`/`writeMap` dari `./storage.ts`.
 */
function makeKeyedStore<T>(
  key: string,
  validate: (value: Record<string, unknown>) => T | undefined,
): KeyedStore<T> {
  return {
    load: (storage) => readMap(key, (value) => validate(value), storage),
    save: (storage, map) => writeMap(key, map, storage),
  };
}

const predictionStore = makeKeyedStore<PredictionRecord>(PREDICTION_KEY, (value) => {
  if (typeof value.value !== 'string') return undefined;
  return { value: value.value, at: typeof value.at === 'number' ? value.at : 0 };
});

const reflectionStore = makeKeyedStore<ReflectionRecord>(REFLECTION_KEY, (value) => {
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
});

const rubricStore = makeKeyedStore<number[]>(RUBRIC_KEY, (value) => {
  if (!Array.isArray(value)) return undefined;
  return value.filter((n): n is number => typeof n === 'number');
});

const completionStore = makeKeyedStore<CompletionRecord>(COMPLETION_KEY, (value) => {
  const at = value.at;
  if (typeof at !== 'number') return undefined;
  return { at };
});

const draftStore = makeKeyedStore<DraftRecord>(DRAFT_KEY, (value) => {
  if (typeof value.text !== 'string') return undefined;
  return { text: value.text, at: typeof value.at === 'number' ? value.at : 0 };
});

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
  return rubricStore.load(storage);
}

export function saveRubricChecks(storage: Storage | undefined, map: RubricCheckMap): void {
  rubricStore.save(storage, map);
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
  return predictionStore.load(storage);
}

export function savePredictions(storage: Storage | undefined, map: PredictionMap): void {
  predictionStore.save(storage, map);
}

export function loadReflections(storage: Storage | undefined): ReflectionMap {
  return reflectionStore.load(storage);
}

export function saveReflections(storage: Storage | undefined, map: ReflectionMap): void {
  reflectionStore.save(storage, map);
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
  return completionStore.load(storage);
}

export function saveCompletions(storage: Storage | undefined, map: CompletionMap): void {
  completionStore.save(storage, map);
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
  return draftStore.load(storage);
}

export function saveDrafts(storage: Storage | undefined, map: DraftMap): void {
  draftStore.save(storage, map);
}

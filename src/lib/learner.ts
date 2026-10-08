/**
 * Penyimpanan ringan untuk interaksi non-penilaian pada halaman materi:
 * dugaan pada bagian pemantik dan jawaban refleksi. Logika murni dipisahkan
 * agar dapat diuji tanpa DOM maupun localStorage (lihat tests/learner.mjs).
 */

export interface PredictionRecord {
  value: string;
  at: number;
}

export interface ReflectionRecord {
  text: string;
  confidence: number;
  at: number;
}

export type PredictionMap = Record<string, PredictionRecord>;
export type ReflectionMap = Record<string, ReflectionRecord>;

export const PREDICTION_KEY = 'mtk-predictions';
export const REFLECTION_KEY = 'mtk-reflections';

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

function parseMap<T extends Record<string, unknown>>(
  raw: string | null,
  validate: (value: Record<string, unknown>) => T | undefined,
): Record<string, T> {
  if (!raw) return {};
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return {};
  }
  if (!parsed || typeof parsed !== 'object') return {};
  const out: Record<string, T> = {};
  for (const [id, value] of Object.entries(parsed as Record<string, unknown>)) {
    if (!value || typeof value !== 'object') continue;
    const valid = validate(value as Record<string, unknown>);
    if (valid) out[id] = valid;
  }
  return out;
}

export function loadPredictions(storage: Storage | undefined): PredictionMap {
  if (!storage) return {};
  let raw: string | null = null;
  try {
    raw = storage.getItem(PREDICTION_KEY);
  } catch {
    return {};
  }
  return parseMap(raw, (value) => {
    if (typeof value.value !== 'string') return undefined;
    return { value: value.value, at: typeof value.at === 'number' ? value.at : 0 };
  });
}

export function savePredictions(storage: Storage | undefined, map: PredictionMap): void {
  if (!storage) return;
  try {
    storage.setItem(PREDICTION_KEY, JSON.stringify(map));
  } catch {
    /* penyimpanan penuh atau diblokir: abaikan */
  }
}

export function loadReflections(storage: Storage | undefined): ReflectionMap {
  if (!storage) return {};
  let raw: string | null = null;
  try {
    raw = storage.getItem(REFLECTION_KEY);
  } catch {
    return {};
  }
  return parseMap(raw, (value) => {
    if (typeof value.text !== 'string') return undefined;
    const confidence = typeof value.confidence === 'number' ? value.confidence : 0;
    return { text: value.text, confidence, at: typeof value.at === 'number' ? value.at : 0 };
  });
}

export function saveReflections(storage: Storage | undefined, map: ReflectionMap): void {
  if (!storage) return;
  try {
    storage.setItem(REFLECTION_KEY, JSON.stringify(map));
  } catch {
    /* penyimpanan penuh atau diblokir: abaikan */
  }
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

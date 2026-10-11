/**
 * Penghitung rekaman interaksi (prediksi & refleksi) per topik.
 *
 * Modul ini murni: tanpa DOM dan tanpa impor data materi.
 */

import type { StampedRecord } from './types.ts';

/** Id topik pemilik sebuah kunci penyimpanan interaksi (`topik:bagian:indeks`). */
export function topicOfStorageKey(key: string): string {
  const i = key.indexOf(':');
  return i === -1 ? key : key.slice(0, i);
}

export function maxStamp(...times: (number | undefined)[]): number {
  let max = 0;
  for (const t of times) if (typeof t === 'number' && t > max) max = t;
  return max;
}

export function tally(
  records: Record<string, StampedRecord>,
): Map<string, { count: number; at: number }> {
  const out = new Map<string, { count: number; at: number }>();
  for (const [key, record] of Object.entries(records)) {
    const topicId = topicOfStorageKey(key);
    const current = out.get(topicId) ?? { count: 0, at: 0 };
    current.count += 1;
    if (record && typeof record.at === 'number' && record.at > current.at) {
      current.at = record.at;
    }
    out.set(topicId, current);
  }
  return out;
}

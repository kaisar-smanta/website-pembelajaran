/**
 * Pembantu kecil yang dipakai bersama beberapa skrip klien.
 *
 * Berisi pemformatan persen bulat, penyembunyian bagian opsional, dan pembacaan
 * larik JSON dari nilai atribut. Tidak ada kerangka UI di sini.
 */

import { readJsonArray } from './dom.ts';

/** Persentase bulat untuk teks antarmuka, mis. `0.42` menjadi `'42%'`. */
export function formatPercentWhole(ratio: number): string {
  return `${Math.round(ratio * 100)}%`;
}

/** Menampilkan atau menyembunyikan elemen opsional tanpa galat bila kosong. */
export function setSectionVisible(el: HTMLElement | null, visible: boolean): void {
  if (el) el.hidden = !visible;
}

/** Pemeriksa tipe untuk larik string dari data JSON tersemat. */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 * Varian `readJsonArray` untuk JSON yang tersimpan pada nilai atribut, bukan
 * isi elemen. Teks dipindahkan ke elemen sementara agar guard parsing tetap
 * satu sumber.
 */
export function readJsonArrayText<T>(
  text: string | null | undefined,
  isItem: (value: unknown) => value is T,
): T[] {
  if (!text) return [];
  const holder = document.createElement('script');
  holder.textContent = text;
  return readJsonArray(holder, isItem);
}

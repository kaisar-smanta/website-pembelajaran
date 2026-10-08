/**
 * Logika penyaringan murni (tanpa DOM) yang dipakai bersama oleh seluruh mesin
 * saringan halaman: latihan, aplikasi, eksplorasi, dan peta pembelajaran.
 *
 * Fungsi di sini sengaja tidak menyentuh `window`/`document` maupun struktur
 * DOM apa pun sehingga dapat diuji lewat `tests/filter.mjs`. Perekat ke DOM
 * berada di `src/lib/filter-dom.ts`.
 */

/** Menyalin sebuah `Set` lalu menambah/menghapus `value` (imutabel). */
export function toggleSet<T>(set: Set<T>, value: T): Set<T> {
  const next = new Set(set);
  if (next.has(value)) next.delete(value);
  else next.add(value);
  return next;
}

/**
 * Membaca daftar nilai dari parameter URL.
 *
 * Mendukung kunci berulang (`?a=1&a=2`) maupun nilai berkoma (`?a=1,2`),
 * menghapus duplikat, dan membuang nilai kosong sambil mempertahankan urutan.
 */
export function readListParam(params: URLSearchParams, key: string): string[] {
  const seen = new Set<string>();
  const values: string[] = [];
  for (const raw of params.getAll(key)) {
    for (const part of raw.split(',')) {
      const value = part.trim();
      if (value && !seen.has(value)) {
        seen.add(value);
        values.push(value);
      }
    }
  }
  return values;
}

/**
 * Menulis daftar nilai ke parameter URL.
 *
 * Kunci dihapus bila `values` kosong; sebaliknya digabung dengan koma dan
 * ditulis sekali sehingga URL tetap ringkas.
 */
export function writeListParam(
  params: URLSearchParams,
  key: string,
  values: string[],
): void {
  params.delete(key);
  const clean = values.map((value) => value.trim()).filter(Boolean);
  if (clean.length > 0) params.set(key, clean.join(','));
}

/** Menghitung jumlah `items` per nilai `key` (mis. jumlah soal per kelas). */
export function countBy<T>(items: T[], key: (item: T) => string): Map<string, number> {
  const counts = new Map<string, number>();
  for (const item of items) {
    const value = key(item);
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  return counts;
}

/**
 * Mencocokkan sekumpulan nilai terhadap pilihan.
 *
 * Pilihan kosong berarti "semua cocok" (tanpa penyaringan). Bila pilihan
 * berisi, item cocok ketika salah satu nilainya termasuk pilihan.
 */
export function matchesAny(selected: Set<string>, values: string[]): boolean {
  if (selected.size === 0) return true;
  return values.some((value) => selected.has(value));
}

/**
 * Menormalkan teks untuk pencarian: huruf kecil, tanpa diakritik, dan spasi
 * yang dirapikan. Dipakai pada kata kunci maupun teks yang dibandingkan.
 */
export function normalizeText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

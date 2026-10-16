/**
 * Keacakan deterministik yang dipakai bersama oleh kuis, aktivitas mencocokkan,
 * dan halaman tantangan. Fungsi di sini murni (tanpa DOM) sehingga urutan hasil
 * build stabil dan dapat diuji.
 */

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

/**
 * Menggabungkan benih sesi dengan id soal menjadi benih pengacakan urutan opsi.
 *
 * Benih sesi dibangkitkan sekali per sesi/percobaan sehingga urutan opsi dapat
 * berbeda antar-kunjungan, tetapi tetap sama selama satu percobaan berlangsung.
 */
export function combineSeed(sessionSeed: string, questionId: string): string {
  return `${sessionSeed}::${questionId}`;
}

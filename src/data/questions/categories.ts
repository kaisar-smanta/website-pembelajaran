import type { Question } from '@/types/content';

/**
 * Metadata kategori asesmen, dipisah dari `index.ts` agar dapat dimuat uji Node
 * tanpa `import.meta.glob`. Bentuknya `Record` atas union `Question['category']`
 * sehingga menambah kategori baru pada tipe wajib disertai entri di sini (gagal
 * saat `astro check`).
 */
const ASSESSMENT_CATEGORY_META: Record<
  NonNullable<Question['category']>,
  { name: string; description: string }
> = {
  cepat: { name: 'Latihan Cepat', description: 'Soal singkat untuk memanaskan pemahaman.' },
  konsep: { name: 'Pemahaman Konsep', description: 'Memeriksa pengertian, bukan sekadar hitungan.' },
  penerapan: { name: 'Penerapan', description: 'Menggunakan konsep pada masalah terstruktur.' },
  pemodelan: { name: 'Pemodelan', description: 'Membentuk model matematika dari situasi.' },
  penalaran: { name: 'Penalaran', description: 'Membuktikan, menilai, dan menyusun argumen.' },
  kontekstual: { name: 'Soal Kontekstual', description: 'Masalah nyata dengan interpretasi.' },
  evaluasi: { name: 'Evaluasi Bab', description: 'Campuran soal untuk mengukur capaian.' },
};

/** Kategori asesmen berurutan untuk dikonsumsi UI dan diuji langsung. */
export const assessmentCategories: {
  id: NonNullable<Question['category']>;
  name: string;
  description: string;
}[] = Object.entries(ASSESSMENT_CATEGORY_META).map(([id, meta]) => ({
  id: id as NonNullable<Question['category']>,
  ...meta,
}));

import type { ElementId, ExplorationType, SubjectId } from '@/types/content';

/**
 * Metadata tampilan terpusat (warna aksen, label tingkat, kelas unggulan,
 * daftar halaman statis). Sebelumnya pemetaan ini disalin di banyak komponen
 * dan halaman sehingga rawan menyimpang; kini hanya ada di satu tempat.
 */

/** Variabel CSS warna untuk tiap elemen (dipakai sebagai `var(...)`). */
export const ELEMENT_COLOR: Record<ElementId, string> = {
  bilangan: 'var(--color-number)',
  'aljabar-fungsi': 'var(--color-algebra)',
  geometri: 'var(--color-geometry)',
  kalkulus: 'var(--color-calculus)',
  'data-peluang': 'var(--color-data)',
};

/** Nama variabel warna elemen tanpa pembungkus `var()` (untuk gaya inline). */
export const ELEMENT_COLOR_VAR: Record<ElementId, string> = {
  bilangan: '--color-number',
  'aljabar-fungsi': '--color-algebra',
  geometri: '--color-geometry',
  kalkulus: '--color-calculus',
  'data-peluang': '--color-data',
};

/** Warna aksen untuk elemen, dengan cadangan warna primer. */
export function elementColor(element: ElementId | undefined): string {
  return element ? ELEMENT_COLOR[element] : 'var(--color-primary)';
}

/** Nama variabel warna untuk elemen, dengan cadangan warna primer. */
export function elementColorVar(element: ElementId | undefined): string {
  return element ? ELEMENT_COLOR_VAR[element] : '--color-primary';
}

/** Kelas aksen elemen (mis. `accent-bilangan`) yang menyetel `--accent`. */
export function elementAccentClass(element: ElementId): string {
  return `accent-${element}`;
}

/** Kelas aksen mata pelajaran. */
export function subjectAccentClass(subject: SubjectId): string {
  return subject === 'matematika-lanjut' ? 'subject-lanjut' : 'subject-matematika';
}

/** Label dan urutan tingkat kesulitan (sumber tunggal di `src/lib/difficulty.ts`). */
export { DIFFICULTY_LABELS, DIFFICULTY_ORDER } from '../lib/difficulty.ts';

/** Label ramah untuk tiap tipe eksplorasi. */
export const EXPLORATION_TYPE_LABELS: Record<ExplorationType, string> = {
  'function-slider': 'Grafik interaktif',
  'compound-interest': 'Simulasi keuangan',
  probability: 'Simulasi peluang',
  'linear-regression': 'Visualisasi regresi',
  sequence: 'Pola barisan',
  distribution: 'Sebaran data',
  'conditional-probability': 'Peluang bersyarat',
  circle: 'Eksplorasi lingkaran',
  matrix: 'Simulasi matriks',
  'linear-system': 'Sistem persamaan',
  'function-composition': 'Komposisi fungsi',
  'function-inverse': 'Fungsi invers',
  polynomial: 'Pola polinomial',
  vector: 'Eksplorasi vektor',
  conic: 'Irisan kerucut',
  derivative: 'Garis singgung & turunan',
  integral: 'Luas & integral',
  'random-variable': 'Variabel acak',
  limit: 'Limit fungsi',
  'binomial-distribution': 'Distribusi binomial',
  geogebra: 'GeoGebra',
};

/** Entri daftar ringkas "Halaman" pada `/peta-situs`. */
export interface StaticListEntry {
  /** Label alternatif; default `title`. */
  label?: string;
  /** Catatan ringkas di samping tautan. */
  note: string;
  /** Urutan tampil (menentukan, bukan urutan `STATIC_PAGES`). */
  order: number;
}

export interface StaticPage {
  path: string;
  title: string;
  /** Ringkasan halaman untuk pencarian; jatuh tempo ke `title` bila kosong. */
  description?: string;
  /** Bila ada, halaman ikut didaftarkan pada daftar "Halaman" `/peta-situs`. */
  listed?: StaticListEntry;
}

/**
 * Halaman statis (tanpa parameter) yang selalu ada. Menjadi satu-satunya
 * daftar kanonik: `sitemap.xml`, `search.json`, dan `/peta-situs` menurunkannya
 * dari sini, bukan mendaftar terpisah. `description` mengisi ringkasan
 * pencarian, sedangkan `listed` memilih himpunan dan urutan pada peta situs.
 */
export const STATIC_PAGES: StaticPage[] = [
  {
    path: '',
    title: 'Beranda',
    description: 'Beranda pusat belajar Matematika dan Matematika Tingkat Lanjut SMA.',
  },
  {
    path: 'peta-pembelajaran',
    title: 'Peta Pembelajaran',
    description: 'Peta hubungan antar konsep dan kurikulum.',
  },
  { path: 'matematika', title: 'Matematika' },
  { path: 'matematika-lanjut', title: 'Matematika Tingkat Lanjut' },
  {
    path: 'latihan',
    title: 'Latihan',
    description: 'Bank soal berjenjang dasar, cakap, mahir.',
    listed: { label: 'Latihan & Asesmen', note: 'Bank soal berjenjang', order: 1 },
  },
  {
    path: 'tantangan',
    title: 'Tantangan',
    description: 'Soal tantangan dan materi pengayaan untuk siswa di atas capaian.',
    listed: { label: 'Tantangan & Pengayaan', note: 'Soal mahir & topik pengayaan', order: 2 },
  },
  {
    path: 'eksplorasi',
    title: 'Eksplorasi',
    description: 'Simulasi dan eksplorasi interaktif.',
    listed: { note: 'Simulasi interaktif', order: 3 },
  },
  {
    path: 'alat',
    title: 'Alat Matematika',
    description: 'Alat bantu matematika daring.',
    listed: { note: 'Perangkat bantu', order: 5 },
  },
  {
    path: 'aplikasi',
    title: 'Matematika dalam Kehidupan',
    description: 'Studi kasus penerapan matematika.',
    listed: { note: 'Studi kasus penerapan', order: 4 },
  },
  {
    path: 'referensi',
    title: 'Referensi',
    description: 'Sumber dan catatan kurikulum.',
    listed: { note: 'Catatan kurikulum', order: 10 },
  },
  {
    path: 'glosarium',
    title: 'Glosarium',
    description: 'Daftar istilah matematika dari seluruh topik, menurut abjad.',
    listed: { note: 'Daftar istilah', order: 6 },
  },
  {
    path: 'rumus',
    title: 'Kumpulan Rumus',
    description: 'Kumpulan rumus matematika dari seluruh topik per elemen.',
    listed: { note: 'Lembar rujukan rumus', order: 7 },
  },
  {
    path: 'peta-situs',
    title: 'Peta Situs',
    description: 'Peta situs: seluruh topik dan halaman dalam satu halaman.',
  },
  {
    path: 'kemajuan',
    title: 'Kemajuan Saya',
    description: 'Ringkasan kemajuan belajar tersimpan di peramban kamu.',
    listed: { note: 'Rekap belajar tersimpan', order: 8 },
  },
  {
    path: 'review',
    title: 'Tinjauan lintas topik',
    listed: { note: 'Ulangi soal yang belum tepat', order: 9 },
  },
  {
    path: 'kontak',
    title: 'Kontak',
    description: 'Cara menghubungi penyusun dan kanal resmi sekolah.',
    listed: { note: 'Hubungi penyusun', order: 11 },
  },
  {
    path: 'aksesibilitas',
    title: 'Aksesibilitas',
    description: 'Komitmen dan catatan aksesibilitas situs ini.',
    listed: { note: 'Catatan aksesibilitas', order: 12 },
  },
  {
    path: 'tentang',
    title: 'Tentang',
    description: 'Tentang situs dan cara belajar di sini.',
    listed: { note: 'Kredit dan lisensi', order: 13 },
  },
  {
    path: 'cari',
    title: 'Pencarian',
    description: 'Pencarian materi di seluruh situs.',
    listed: { note: 'Cari di seluruh situs', order: 14 },
  },
];

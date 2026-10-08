import type { Difficulty, ElementId, ExplorationType, SubjectId } from '@/types/content';

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

/** Label dan urutan tingkat kesulitan. */
export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  dasar: 'Dasar',
  cakap: 'Cakap',
  mahir: 'Mahir',
};

export const DIFFICULTY_ORDER: Difficulty[] = ['dasar', 'cakap', 'mahir'];

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

/** Topik yang ditonjolkan pada beranda (beranda & bagian topik). */
export const FEATURED_TOPIC_IDS: string[] = [
  'eksponen',
  'fungsi-kuadrat',
  'trigonometri',
  'polinomial',
  'turunan',
  'vektor',
];

export interface StaticPage {
  path: string;
  title: string;
}

/**
 * Halaman statis (tanpa parameter) yang selalu ada. Dipakai bersama oleh
 * `sitemap.xml` dan `search.json` agar keduanya tidak lagi mendaftar terpisah.
 */
export const STATIC_PAGES: StaticPage[] = [
  { path: '', title: 'Beranda' },
  { path: 'peta-pembelajaran', title: 'Peta Pembelajaran' },
  { path: 'matematika', title: 'Matematika' },
  { path: 'matematika-lanjut', title: 'Matematika Tingkat Lanjut' },
  { path: 'latihan', title: 'Latihan' },
  { path: 'tantangan', title: 'Tantangan' },
  { path: 'eksplorasi', title: 'Eksplorasi' },
  { path: 'alat', title: 'Alat Matematika' },
  { path: 'aplikasi', title: 'Matematika dalam Kehidupan' },
  { path: 'referensi', title: 'Referensi' },
  { path: 'glosarium', title: 'Glosarium' },
  { path: 'rumus', title: 'Kumpulan Rumus' },
  { path: 'peta-situs', title: 'Peta Situs' },
  { path: 'kemajuan', title: 'Kemajuan Saya' },
  { path: 'review', title: 'Tinjauan lintas topik' },
  { path: 'kontak', title: 'Kontak' },
  { path: 'aksesibilitas', title: 'Aksesibilitas' },
  { path: 'tentang', title: 'Tentang' },
  { path: 'cari', title: 'Pencarian' },
];

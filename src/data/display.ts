import type { ElementId, ExplorationType } from '@/types/content';

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
export const ELEMENT_COLOR_VAR: Record<ElementId, string> = Object.fromEntries(
  Object.entries(ELEMENT_COLOR).map(([element, color]) => [
    element,
    color.replace(/^var\(/, '').replace(/\)$/, ''),
  ]),
) as Record<ElementId, string>;

/** Warna aksen untuk elemen, dengan cadangan warna primer. */
export function elementColor(element: ElementId | undefined): string {
  return element ? ELEMENT_COLOR[element] : 'var(--color-primary)';
}

/** Nama variabel warna untuk elemen, dengan cadangan warna primer. */
export function elementColorVar(element: ElementId | undefined): string {
  return element ? ELEMENT_COLOR_VAR[element] : '--color-primary';
}

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
  'normal-distribution': 'Distribusi normal',
  triangle: 'Aturan sinus & kosinus',
  'sign-chart': 'Peta tanda',
  logarithm: 'Eksponen & logaritma',
  'counting-tree': 'Pohon pencacahan',
  amortization: 'Amortisasi pinjaman',
  'number-theory': 'Alat teori bilangan',
  induction: 'Domino induksi',
  confounding: 'Perancu & paradoks',
  'function-family': 'Keluarga fungsi',
  'exponent-laws': 'Sifat eksponen',
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

/** Penempatan halaman pada grup footer (dirender `Footer.astro`). */
export interface StaticFooterEntry {
  /** Judul grup footer tempat halaman tampil. */
  heading: string;
  /** Urutan dalam grup (menentukan, bukan urutan `STATIC_PAGES`). */
  order: number;
  /** Label alternatif di footer; default `title`. */
  label?: string;
}

export interface StaticPage {
  path: string;
  title: string;
  /** Ringkasan halaman untuk pencarian; jatuh tempo ke `title` bila kosong. */
  description?: string;
  /** Bila ada, halaman ikut didaftarkan pada daftar "Halaman" `/peta-situs`. */
  listed?: StaticListEntry;
  /** Bila ada, halaman tampil di footer pada grup ini. */
  footer?: StaticFooterEntry;
}

/**
 * Halaman statis (tanpa parameter) yang selalu ada. Menjadi satu-satunya
 * daftar kanonik: `sitemap.xml`, `search.json`, `/peta-situs`, dan
 * `footerNav` menurunkannya dari sini, bukan mendaftar terpisah. `description`
 * mengisi ringkasan pencarian, `listed` memilih himpunan dan urutan pada peta
 * situs, sedangkan `footer` menempatkan halaman pada grup footer.
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
    listed: { note: 'Alur belajar & prasyarat', order: 0 },
    footer: { heading: 'Kurikulum', order: 1 },
  },
  {
    path: 'matematika',
    title: 'Matematika',
    footer: { heading: 'Kurikulum', order: 2 },
  },
  {
    path: 'matematika-lanjut',
    title: 'Matematika Tingkat Lanjut',
    footer: { heading: 'Kurikulum', order: 3 },
  },
  {
    path: 'latihan',
    title: 'Latihan',
    description: 'Bank soal berjenjang dasar, cakap, mahir.',
    listed: { label: 'Latihan & Asesmen', note: 'Bank soal berjenjang', order: 1 },
    footer: { heading: 'Belajar', order: 1, label: 'Latihan & Asesmen' },
  },
  {
    path: 'latihan/kilat',
    title: 'Latihan Kilat',
    description: 'Sesi latihan campuran sepuluh soal acak dari berbagai topik dan tingkat.',
    listed: { note: 'Sesi campuran 10 soal', order: 2 },
    footer: { heading: 'Belajar', order: 2 },
  },
  {
    path: 'tantangan',
    title: 'Tantangan',
    description: 'Soal tantangan dan materi pengayaan untuk siswa di atas capaian.',
    listed: { label: 'Tantangan & Pengayaan', note: 'Soal mahir & topik pengayaan', order: 3 },
    footer: { heading: 'Belajar', order: 3, label: 'Tantangan & Pengayaan' },
  },
  {
    path: 'eksplorasi',
    title: 'Eksplorasi',
    description: 'Simulasi dan eksplorasi interaktif.',
    listed: { note: 'Simulasi interaktif', order: 4 },
    footer: { heading: 'Belajar', order: 4 },
  },
  {
    path: 'alat',
    title: 'Alat Matematika',
    description: 'Alat bantu matematika daring.',
    listed: { note: 'Perangkat bantu', order: 6 },
    footer: { heading: 'Belajar', order: 5 },
  },
  {
    path: 'aplikasi',
    title: 'Matematika dalam Kehidupan',
    description: 'Studi kasus penerapan matematika.',
    listed: { note: 'Studi kasus penerapan', order: 5 },
    footer: { heading: 'Belajar', order: 6 },
  },
  {
    path: 'referensi',
    title: 'Referensi',
    description: 'Sumber dan catatan kurikulum.',
    listed: { note: 'Catatan kurikulum', order: 11 },
    footer: { heading: 'Tentang', order: 2 },
  },
  {
    path: 'glosarium',
    title: 'Glosarium',
    description: 'Daftar istilah matematika dari seluruh topik, menurut abjad.',
    listed: { note: 'Daftar istilah', order: 7 },
    footer: { heading: 'Belajar', order: 7 },
  },
  {
    path: 'rumus',
    title: 'Kumpulan Rumus',
    description: 'Kumpulan rumus matematika dari seluruh topik per elemen.',
    listed: { note: 'Lembar rujukan rumus', order: 8 },
    footer: { heading: 'Belajar', order: 8 },
  },
  {
    path: 'peta-situs',
    title: 'Peta Situs',
    description: 'Peta situs: seluruh topik dan halaman dalam satu halaman.',
    listed: { note: 'Daftar semua halaman', order: 12 },
    footer: { heading: 'Tentang', order: 3 },
  },
  {
    path: 'kemajuan',
    title: 'Kemajuan Saya',
    description: 'Ringkasan kemajuan belajar tersimpan di peramban kamu.',
    listed: { note: 'Rekap belajar tersimpan', order: 9 },
    footer: { heading: 'Belajar', order: 9 },
  },
  {
    path: 'review',
    title: 'Tinjauan lintas topik',
    description: 'Antrean tinjauan berkala lintas topik dari soal yang belum tepat.',
    listed: { note: 'Ulangi soal yang belum tepat', order: 10 },
    footer: { heading: 'Belajar', order: 10 },
  },
  {
    path: 'kontak',
    title: 'Kontak',
    description: 'Jalur yang tersedia untuk koreksi materi, pertanyaan, dan masukan.',
    listed: { note: 'Hubungi penyusun', order: 13 },
    footer: { heading: 'Tentang', order: 4 },
  },
  {
    path: 'aksesibilitas',
    title: 'Aksesibilitas',
    description: 'Komitmen dan catatan aksesibilitas situs ini.',
    listed: { note: 'Catatan aksesibilitas', order: 14 },
    footer: { heading: 'Tentang', order: 5 },
  },
  {
    path: 'tentang',
    title: 'Tentang',
    description: 'Tentang situs dan cara belajar di sini.',
    listed: { note: 'Kredit dan lisensi', order: 15 },
    footer: { heading: 'Tentang', order: 1, label: 'Tentang & Kredit' },
  },
  {
    path: 'cari',
    title: 'Pencarian',
    description: 'Pencarian materi di seluruh situs.',
    listed: { note: 'Cari di seluruh situs', order: 16 },
    footer: { heading: 'Tentang', order: 6, label: 'Cari materi' },
  },
];

/** Grup footer ringkas yang diturunkan dari `STATIC_PAGES`. */
export interface FooterGroup {
  heading: string;
  items: { label: string; href: string }[];
}

/**
 * Menyusun grup footer dari `STATIC_PAGES` supaya daftar tautan footer tidak
 * pernah menyimpang dari daftar halaman kanonik. Urutan grup mengikuti
 * kemunculan pertama pada `STATIC_PAGES`; urutan item mengikuti `footer.order`.
 */
export function staticFooterGroups(): FooterGroup[] {
  const groups = new Map<
    string,
    { heading: string; items: { label: string; href: string; order: number }[] }
  >();
  for (const page of STATIC_PAGES) {
    if (!page.footer) continue;
    let group = groups.get(page.footer.heading);
    if (!group) {
      group = { heading: page.footer.heading, items: [] };
      groups.set(page.footer.heading, group);
    }
    group.items.push({
      label: page.footer.label ?? page.title,
      href: page.path ? `/${page.path}` : '/',
      order: page.footer.order,
    });
  }
  return [...groups.values()].map((group) => ({
    heading: group.heading,
    items: group.items
      .sort((a, b) => a.order - b.order)
      .map(({ label, href }) => ({ label, href })),
  }));
}

import { staticFooterGroups } from './display.ts';

export interface NavItem {
  label: string;
  /** Tautan halaman. Kosong untuk grup dropdown tanpa halaman sendiri. */
  href?: string;
  /** Ringkasan singkat yang tampil pada panel dropdown (desktop). */
  description?: string;
  /** Nama ikon (dipetakan ke SVG di Header.astro). */
  icon?: string;
  children?: NavItem[];
}

/**
 * Navigasi utama: sengaja dijaga ringkas (enam pintu tingkat atas) agar header
 * tetap satu baris di desktop dan ramah bagi pelajar. Rincian tiap minat
 * ditampilkan pada panel dropdown, bukan dibebankan ke bilah utama.
 */
export const mainNav: NavItem[] = [
  { label: 'Peta Pembelajaran', href: '/peta-pembelajaran', icon: 'map' },
  {
    label: 'Belajar',
    icon: 'book',
    children: [
      {
        label: 'Matematika',
        href: '/matematika',
        description: 'Wajib · Fase E–F, kelas X–XII',
        icon: 'sigma',
      },
      {
        label: 'Matematika Tingkat Lanjut',
        href: '/matematika-lanjut',
        description: 'Pilihan · kelas XI–XII',
        icon: 'function',
      },
    ],
  },
  { label: 'Latihan', href: '/latihan', icon: 'pencil' },
  {
    label: 'Jelajah',
    icon: 'compass',
    children: [
      {
        label: 'Eksplorasi',
        href: '/eksplorasi',
        description: 'Simulasi & grafik interaktif',
        icon: 'sliders',
      },
      {
        label: 'Alat Matematika',
        href: '/alat',
        description: 'Kalkulator & perkakas',
        icon: 'tools',
      },
      {
        label: 'Matematika dalam Kehidupan',
        href: '/aplikasi',
        description: 'Studi kasus nyata',
        icon: 'globe',
      },
      {
        label: 'Tantangan',
        href: '/tantangan',
        description: 'Soal mahir & pengayaan',
        icon: 'star',
      },
    ],
  },
  {
    label: 'Rujukan',
    icon: 'library',
    children: [
      {
        label: 'Kemajuan Saya',
        href: '/kemajuan',
        description: 'Progres & tinjauan berkala',
        icon: 'chart',
      },
      {
        label: 'Kumpulan Rumus',
        href: '/rumus',
        description: 'Ringkasan rumus per topik',
        icon: 'formula',
      },
      {
        label: 'Glosarium',
        href: '/glosarium',
        description: 'Istilah penting A–Z',
        icon: 'book',
      },
      {
        label: 'Referensi',
        href: '/referensi',
        description: 'Sumber & bacaan lanjutan',
        icon: 'link',
      },
      {
        label: 'Tinjauan lintas topik',
        href: '/review',
        description: 'Antrean ulangan pintar',
        icon: 'refresh',
      },
      {
        label: 'Peta Situs',
        href: '/peta-situs',
        description: 'Semua halaman situs',
        icon: 'map',
      },
    ],
  },
  { label: 'Tentang', href: '/tentang', icon: 'info' },
];

/** Tautan footer tambahan yang bukan halaman statis (rute dinamis per kelas). */
const footerExtraItems: NavItem[] = [
  { label: 'Kelas X', href: '/matematika/kelas/X' },
  { label: 'Kelas XI', href: '/matematika/kelas/XI' },
  { label: 'Kelas XII', href: '/matematika/kelas/XII' },
];

/**
 * Grup footer diturunkan dari `STATIC_PAGES` (`src/data/display.ts`) agar tidak
 * ada daftar halaman yang disalin ganda; hanya tautan dinamis per kelas yang
 * ditambahkan di sini.
 */
export const footerNav: { heading: string; items: NavItem[] }[] = staticFooterGroups().map(
  (group) => ({
    heading: group.heading,
    items: group.heading === 'Kurikulum' ? [...group.items, ...footerExtraItems] : group.items,
  }),
);

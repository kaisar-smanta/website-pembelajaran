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
 * Navigasi utama — sengaja dijaga ringkas (enam pintu tingkat atas) agar header
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

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: 'Kurikulum',
    items: [
      { label: 'Peta Pembelajaran', href: '/peta-pembelajaran' },
      { label: 'Matematika', href: '/matematika' },
      { label: 'Matematika Tingkat Lanjut', href: '/matematika-lanjut' },
      { label: 'Kelas X', href: '/matematika/kelas/X' },
      { label: 'Kelas XI', href: '/matematika/kelas/XI' },
      { label: 'Kelas XII', href: '/matematika/kelas/XII' },
    ],
  },
  {
    heading: 'Belajar',
    items: [
      { label: 'Latihan & Asesmen', href: '/latihan' },
      { label: 'Tantangan & Pengayaan', href: '/tantangan' },
      { label: 'Eksplorasi', href: '/eksplorasi' },
      { label: 'Alat Matematika', href: '/alat' },
      { label: 'Matematika dalam Kehidupan', href: '/aplikasi' },
      { label: 'Glosarium', href: '/glosarium' },
      { label: 'Kumpulan Rumus', href: '/rumus' },
      { label: 'Kemajuan Saya', href: '/kemajuan' },
      { label: 'Tinjauan lintas topik', href: '/review' },
    ],
  },
  {
    heading: 'Tentang',
    items: [
      { label: 'Tentang & Kredit', href: '/tentang' },
      { label: 'Referensi', href: '/referensi' },
      { label: 'Peta Situs', href: '/peta-situs' },
      { label: 'Kontak', href: '/kontak' },
      { label: 'Aksesibilitas', href: '/aksesibilitas' },
      { label: 'Cari materi', href: '/cari' },
    ],
  },
];

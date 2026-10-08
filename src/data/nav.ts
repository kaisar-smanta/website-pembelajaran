export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: 'Peta Pembelajaran', href: '/peta-pembelajaran' },
  {
    label: 'Matematika',
    href: '/matematika',
    children: [
      { label: 'Ringkasan', href: '/matematika' },
      { label: 'Kelas X', href: '/matematika/kelas/X' },
      { label: 'Kelas XI', href: '/matematika/kelas/XI' },
      { label: 'Kelas XII', href: '/matematika/kelas/XII' },
    ],
  },
  {
    label: 'Matematika Tingkat Lanjut',
    href: '/matematika-lanjut',
    children: [
      { label: 'Ringkasan', href: '/matematika-lanjut' },
      { label: 'Kelas XI', href: '/matematika-lanjut/kelas/XI' },
      { label: 'Kelas XII', href: '/matematika-lanjut/kelas/XII' },
    ],
  },
  { label: 'Latihan', href: '/latihan' },
  { label: 'Eksplorasi', href: '/eksplorasi' },
  { label: 'Alat', href: '/alat' },
  { label: 'Kehidupan', href: '/aplikasi' },
  { label: 'Referensi', href: '/referensi' },
  { label: 'Tentang', href: '/tentang' },
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
      { label: 'Eksplorasi', href: '/eksplorasi' },
      { label: 'Alat Matematika', href: '/alat' },
      { label: 'Kehidupan', href: '/aplikasi' },
    ],
  },
  {
    heading: 'Tentang',
    items: [
      { label: 'Tentang & Kredit', href: '/tentang' },
      { label: 'Referensi', href: '/referensi' },
      { label: 'Cari materi', href: '/cari' },
    ],
  },
];

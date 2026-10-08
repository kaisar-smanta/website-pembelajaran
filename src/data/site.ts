/**
 * Identitas situs, penyusun, dan sekolah — satu sumber terpusat.
 *
 * Ubah nilai di berkas ini untuk memperbarui kredit di header, footer,
 * beranda, dan halaman /tentang tanpa menyentuh komponen.
 */

export interface SchoolLink {
  label: string;
  href: string;
  /** Nama ikon kecil yang dirender sebagai teks/simbol, tanpa emoji. */
  kind: 'website' | 'instagram' | 'youtube' | 'facebook';
}

export interface SiteIdentity {
  name: string;
  tagline: string;
  mascot: {
    name: string;
    tagline: string;
  };
  author: {
    name: string;
    role: string;
  };
  school: {
    name: string;
    logo: string;
    logoAlt: string;
    /** Tautan resmi sekolah. Tambahkan media sosial lain di `links`. */
    url: string;
  };
  links: SchoolLink[];
}

export const site: SiteIdentity = {
  name: 'Matematika SMA',
  tagline: 'Pusat Pembelajaran',
  mascot: {
    name: 'Numi',
    tagline: 'Sahabat kecil untuk belajar matematika',
  },
  author: {
    name: 'Kaisar Titoniran Akbar, S.Pd',
    role: 'Penyusun materi',
  },
  school: {
    name: 'SMAN 1 Tanjung',
    logo: '/logo-sman1-tanjung.jpg',
    logoAlt: 'Logo SMAN 1 Tanjung',
    url: 'https://sman1tanjungkalsel.sch.id/',
  },
  links: [
    { label: 'Website sekolah', href: 'https://sman1tanjungkalsel.sch.id/', kind: 'website' },
    // TODO: tambahkan tautan resmi bila sudah tersedia, contoh:
    // { label: 'Instagram sekolah', href: '<url-instagram>', kind: 'instagram' },
    // { label: 'YouTube sekolah', href: '<url-youtube>', kind: 'youtube' },
    // { label: 'Facebook sekolah', href: '<url-facebook>', kind: 'facebook' },
  ],
};

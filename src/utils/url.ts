import type { SubjectId } from '@/types/content';

/** Utilitas URL yang sadar base path GitHub Pages. */

/**
 * Vite/Astro mengganti `import.meta.env` menjadi objek statis saat build,
 * tetapi nilainya `undefined` bila modul ini diimpor langsung oleh Node
 * (mis. dari berkas uji). Menyimpannya lewat tipe opsional membuat modul tetap
 * aman di kedua konteks tanpa mengubah hasil build.
 */
const env: { BASE_URL?: string; SITE?: string } | undefined = import.meta.env;

const rawBase = env?.BASE_URL ?? '/';

export const BASE: string = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

/** Membuat URL internal dengan base path yang benar. */
export function url(path = ''): string {
  const clean = String(path).replace(/^\/+/, '');
  return `${BASE}${clean}`;
}

/** Membuat URL absolut menggunakan `site` untuk metadata & sitemap. */
export function absoluteUrl(pathname = ''): string {
  const site = env?.SITE || 'https://example.github.io';
  const clean = String(pathname).replace(/^\/+/, '');
  const base = BASE.replace(/\/+$/, '');
  return `${site.replace(/\/+$/, '')}${base}/${clean}`;
}

/**
 * Segmen URL mata pelajaran. Matematika memakai `/matematika`, Matematika
 * Tingkat Lanjut memakai `/matematika-lanjut`. Rute lama tanpa segmen ini
 * dipertahankan sebagai pengalih (lihat `src/pages/_redirects` stubs).
 */
export function subjectUrl(subject: SubjectId, path = ''): string {
  const clean = String(path).replace(/^\/+/, '');
  return url(`${subject}${clean ? `/${clean}` : ''}`);
}

/** URL halaman kelas. */
export function gradeUrl(grade: string, subject: SubjectId = 'matematika'): string {
  return subjectUrl(subject, `kelas/${grade}`);
}

/** URL halaman elemen dalam suatu kelas. */
export function elementUrl(
  grade: string,
  element: string,
  subject: SubjectId = 'matematika',
): string {
  return subjectUrl(subject, `kelas/${grade}/${element}`);
}

/** URL halaman topik. */
export function topicUrl(
  grade: string,
  element: string,
  slug: string,
  subject: SubjectId = 'matematika',
): string {
  return subjectUrl(subject, `kelas/${grade}/${element}/${slug}`);
}

/** URL ikhtisar elemen lintas kelas. */
export function elementOverviewUrl(element: string, subject: SubjectId = 'matematika'): string {
  return subjectUrl(subject, `elemen/${element}`);
}

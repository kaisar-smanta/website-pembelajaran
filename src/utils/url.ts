import type { SubjectId } from '@/types/content';

/** Utilitas URL yang sadar base path GitHub Pages. */

export const BASE: string = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

/** Membuat URL internal dengan base path yang benar. */
export function url(path = ''): string {
  const clean = String(path).replace(/^\/+/, '');
  return `${BASE}${clean}`;
}

/** Membuat URL absolut menggunakan `site` untuk metadata & sitemap. */
export function absoluteUrl(pathname = ''): string {
  const site = import.meta.env.SITE || 'https://example.github.io';
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

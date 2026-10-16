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

/**
 * Bentuk jalur tanpa base path, untuk konsumen yang menambahkan base sendiri
 * (mis. `sitemap.xml` dan `search.json`). Semua bentuk rute didefinisikan di
 * sini agar tidak ada templat string yang tersebar.
 */
export function subjectPath(subject: SubjectId, path = ''): string {
  const clean = String(path).replace(/^\/+/, '');
  return `${subject}${clean ? `/${clean}` : ''}`;
}

export function gradePath(grade: string, subject: SubjectId = 'matematika'): string {
  return subjectPath(subject, `kelas/${grade}`);
}

export function elementPath(
  grade: string,
  element: string,
  subject: SubjectId = 'matematika',
): string {
  return subjectPath(subject, `kelas/${grade}/${element}`);
}

export function topicPath(
  grade: string,
  element: string,
  slug: string,
  subject: SubjectId = 'matematika',
): string {
  return subjectPath(subject, `kelas/${grade}/${element}/${slug}`);
}

export function elementOverviewPath(
  element: string,
  subject: SubjectId = 'matematika',
): string {
  return subjectPath(subject, `elemen/${element}`);
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
 * dipertahankan sebagai pengalih statis (lihat berkas `src/pages/kelas/**` dan
 * `src/pages/elemen/**`).
 */
export function subjectUrl(subject: SubjectId, path = ''): string {
  return url(subjectPath(subject, path));
}

/** URL halaman kelas. */
export function gradeUrl(grade: string, subject: SubjectId = 'matematika'): string {
  return url(gradePath(grade, subject));
}

/** URL halaman elemen dalam suatu kelas. */
export function elementUrl(
  grade: string,
  element: string,
  subject: SubjectId = 'matematika',
): string {
  return url(elementPath(grade, element, subject));
}

/** URL halaman topik. */
export function topicUrl(
  grade: string,
  element: string,
  slug: string,
  subject: SubjectId = 'matematika',
): string {
  return url(topicPath(grade, element, slug, subject));
}

/** URL ikhtisar elemen lintas kelas. */
export function elementOverviewUrl(element: string, subject: SubjectId = 'matematika'): string {
  return url(elementOverviewPath(element, subject));
}

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

/** URL halaman kelas. */
export function gradeUrl(grade: string): string {
  return url(`kelas/${grade}`);
}

/** URL halaman elemen dalam suatu kelas. */
export function elementUrl(grade: string, element: string): string {
  return url(`kelas/${grade}/${element}`);
}

/** URL halaman topik. */
export function topicUrl(grade: string, element: string, slug: string): string {
  return url(`kelas/${grade}/${element}/${slug}`);
}

/** URL ikhtisar elemen lintas kelas. */
export function elementOverviewUrl(element: string): string {
  return url(`elemen/${element}`);
}

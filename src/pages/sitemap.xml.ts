import type { APIRoute } from 'astro';
import { topics, topicSubject } from '@/data/topics';
import { applications } from '@/data/applications';
import { orderedExplorations } from '@/data/explorations';
import { SUBJECT_ORDER, elementOrderFor, gradesFor } from '@/data/curriculum';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL('https://example.github.io')).href.replace(/\/+$/, '');
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const root = `${origin}${base}`;

  const paths: string[] = [
    '/',
    '/peta-pembelajaran',
    '/latihan',
    '/eksplorasi',
    '/alat',
    '/aplikasi',
    '/referensi',
    '/tentang',
    '/cari',
  ];

  for (const subject of SUBJECT_ORDER) {
    paths.push(`/${subject}`);
    for (const g of gradesFor(subject)) {
      paths.push(`/${subject}/kelas/${g}`);
      for (const e of elementOrderFor(subject)) {
        const hasTopic = topics.some(
          (t) =>
            t.status !== 'rencana' &&
            topicSubject(t) === subject &&
            t.grade === g &&
            t.element === e,
        );
        if (hasTopic) paths.push(`/${subject}/kelas/${g}/${e}`);
      }
    }
    for (const e of elementOrderFor(subject)) {
      const hasTopic = topics.some(
        (t) => t.status !== 'rencana' && topicSubject(t) === subject && t.element === e,
      );
      if (hasTopic) paths.push(`/${subject}/elemen/${e}`);
    }
  }

  for (const t of topics) {
    if (t.status === 'rencana') continue;
    const subject = topicSubject(t);
    paths.push(`/${subject}/kelas/${t.grade}/${t.element}/${t.slug}`);
    paths.push(`/latihan/${t.slug}`);
  }

  for (const a of applications) {
    paths.push(`/aplikasi/${a.id}`);
  }

  for (const e of orderedExplorations()) {
    paths.push(`/eksplorasi/${e.id}`);
  }

  const urls = paths
    .map((p) => {
      const loc = p === '/' ? `${root}/` : `${root}${p}/`;
      return `  <url><loc>${loc}</loc></url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

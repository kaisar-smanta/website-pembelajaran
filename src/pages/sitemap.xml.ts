import type { APIRoute } from 'astro';
import { topics, topicSubject } from '@/data/topics';
import { applications } from '@/data/applications';
import { orderedExplorations } from '@/data/explorations';
import { SUBJECT_ORDER, elementOrderFor, gradesFor } from '@/data/curriculum';
import { topicIdsWithQuestions } from '@/data/questions';
import { STATIC_PAGES } from '@/data/display';
import { absoluteUrl } from '@/utils/url';

export const prerender = true;

export const GET: APIRoute = () => {
  const paths = new Set<string>();

  for (const page of STATIC_PAGES) paths.add(page.path);

  for (const subject of SUBJECT_ORDER) {
    for (const g of gradesFor(subject)) {
      paths.add(`${subject}/kelas/${g}`);
      for (const e of elementOrderFor(subject)) {
        const hasTopic = topics.some(
          (t) =>
            t.status !== 'rencana' &&
            topicSubject(t) === subject &&
            t.grade === g &&
            t.element === e,
        );
        if (hasTopic) paths.add(`${subject}/kelas/${g}/${e}`);
      }
    }
    for (const e of elementOrderFor(subject)) {
      const hasTopic = topics.some(
        (t) => t.status !== 'rencana' && topicSubject(t) === subject && t.element === e,
      );
      if (hasTopic) paths.add(`${subject}/elemen/${e}`);
    }
  }

  const practiceTopicIds = new Set(topicIdsWithQuestions());
  for (const t of topics) {
    if (t.status === 'rencana') continue;
    const subject = topicSubject(t);
    paths.add(`${subject}/kelas/${t.grade}/${t.element}/${t.slug}`);
    if (practiceTopicIds.has(t.id)) paths.add(`latihan/${t.slug}`);
  }

  for (const a of applications) {
    paths.add(`aplikasi/${a.id}`);
  }

  for (const e of orderedExplorations()) {
    paths.add(`eksplorasi/${e.id}`);
  }

  const urls = Array.from(paths)
    .map((p) => `  <url><loc>${absoluteUrl(`${p}/`)}</loc></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

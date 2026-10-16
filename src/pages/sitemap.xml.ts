import type { APIRoute } from 'astro';
import { topics, topicSubject } from '@/data/topics';
import { applications } from '@/data/applications';
import { orderedExplorations } from '@/data/explorations';
import { topicIdsWithQuestions } from '@/data/questions';
import { STATIC_PAGES } from '@/data/display';
import {
  subjectElementsWithContent,
  subjectGradeElementCombos,
  subjectGradesWithContent,
  subjectsWithContent,
} from '@/lib/routes';
import {
  absoluteUrl,
  elementOverviewPath,
  elementPath,
  gradePath,
  topicPath,
} from '@/utils/url';

export const prerender = true;

/**
 * Tanggal build (YYYY-MM-DD) sebagai penanda kesegaran berkas statis. Data
 * topik maupun studi kasus tidak menyimpan tanggal per item, sehingga seluruh
 * entri memakai tanggal build yang sama.
 */
function buildDate(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Meng-escape teks agar aman sebagai isi elemen XML. */
function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = () => {
  const paths = new Set<string>();

  for (const page of STATIC_PAGES) paths.add(page.path);

  for (const subject of subjectsWithContent()) {
    for (const g of subjectGradesWithContent(subject)) {
      paths.add(gradePath(g, subject));
    }
    for (const { grade, element } of subjectGradeElementCombos(subject)) {
      paths.add(elementPath(grade, element, subject));
    }
    for (const e of subjectElementsWithContent(subject)) {
      paths.add(elementOverviewPath(e, subject));
    }
  }

  const practiceTopicIds = new Set(topicIdsWithQuestions());
  for (const t of topics) {
    if (t.status === 'rencana') continue;
    const subject = topicSubject(t);
    paths.add(topicPath(t.grade, t.element, t.slug, subject));
    if (practiceTopicIds.has(t.id)) paths.add(`latihan/${t.slug}`);
  }

  for (const a of applications) {
    paths.add(`aplikasi/${a.id}`);
  }

  for (const e of orderedExplorations()) {
    paths.add(`eksplorasi/${e.id}`);
  }

  const lastmod = buildDate();
  const urls = Array.from(paths)
    .map((p) => {
      const loc = escapeXml(absoluteUrl(`${p}/`));
      return `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

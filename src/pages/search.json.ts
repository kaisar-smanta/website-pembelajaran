import type { APIRoute } from 'astro';
import { topics, topicSubject } from '@/data/topics';
import { sectionSearchText } from '@/lib/content-text';
import { applications, applicationCategories } from '@/data/applications';
import { explorations, orderedExplorations } from '@/data/explorations';
import { topicIdsWithQuestions, questionsByTopic, practiceCounts } from '@/data/questions';
import { ELEMENTS, GRADES, SUBJECTS } from '@/data/curriculum';
import { STATIC_PAGES } from '@/data/display';
import { DIFFICULTY_ORDER } from '@/lib/difficulty';
import { subjectsWithContent, subjectElementsWithContent } from '@/lib/routes';
import { collectFormulaEntries, collectGlossaryEntries } from '@/lib/reference';
import { stripMarkdown } from '@/utils/markdown';
import { elementOverviewPath, topicPath } from '@/utils/url';
import type { SearchItem } from '@/lib/search';

export const prerender = true;

/** Teks eksplorasi per id, disuntikkan ke `sectionSearchText` agar judul/tujuan
 *  eksplorasi ikut terindeks tanpa membuat `content-text.ts` bergantung pada data. */
const explorationTextById = new Map(
  explorations.map((e) => [e.id, [e.title, e.goal ?? '', e.description].join(' ')]),
);

export const GET: APIRoute = () => {
  const items: SearchItem[] = [];

  for (const t of topics) {
    const body = t.sections
      .map((s) => sectionSearchText(s, (id) => explorationTextById.get(id)))
      .join(' ');
    const subject = topicSubject(t);
    items.push({
      title: t.title,
      summary: stripMarkdown(t.summary),
      url: `/${topicPath(t.grade, t.element, t.slug, subject)}/`,
      type: 'topik',
      grade: t.grade,
      element: t.element,
      pengayaan: Boolean(t.supplementary),
      keywords: [
        ...(t.keywords ?? []),
        t.subtitle ?? '',
        GRADES[t.grade].name,
        ELEMENTS[t.element].name,
        SUBJECTS[subject].name,
      ]
        .join(' ')
        .trim(),
      text: stripMarkdown(`${t.description} ${body}`).slice(0, 2000),
    });
  }

  const practiceTopicIds = new Set(topicIdsWithQuestions());

  for (const t of topics) {
    if (!practiceTopicIds.has(t.id)) continue;
    const count = questionsByTopic(t.id).length;
    const levels = practiceCounts(t.id);
    const difficulties = DIFFICULTY_ORDER.filter((level) => levels[level] > 0);
    items.push({
      title: `Latihan: ${t.title}`,
      summary: `${count} soal berjenjang`,
      url: `/latihan/${t.slug}/`,
      type: 'latihan',
      grade: t.grade,
      element: t.element,
      pengayaan: Boolean(t.supplementary),
      keywords: [
        ...(t.keywords ?? []),
        t.subtitle ?? '',
        GRADES[t.grade].name,
        ELEMENTS[t.element].name,
        'latihan',
        'soal',
        ...difficulties,
      ]
        .filter(Boolean)
        .join(' ')
        .trim(),
      text: stripMarkdown(
        `${t.title} ${t.summary} latihan soal ${difficulties.join(' ')} ${GRADES[t.grade].name} ${ELEMENTS[t.element].name}`,
      ).slice(0, 800),
    });
  }

  for (const a of applications) {
    items.push({
      title: a.title,
      summary: stripMarkdown(a.summary),
      url: `/aplikasi/${a.id}/`,
      type: 'aplikasi',
      grade: a.grade,
      element: a.element,
      keywords: [
        applicationCategories[a.category].name,
        GRADES[a.grade].name,
        ELEMENTS[a.element].name,
        a.level,
        ...(a.tags ?? []),
      ]
        .filter(Boolean)
        .join(' ')
        .trim(),
      text: stripMarkdown(
        [
          a.body,
          a.analysis ?? '',
          ...(a.takeaways ?? []),
          ...(a.reflection ?? []),
        ].join(' '),
      ).slice(0, 1500),
    });
  }

  for (const e of orderedExplorations()) {
    const parts = [e.description, e.goal ?? ''];
    if (e.prompts) parts.push(e.prompts.predict, e.prompts.observe, e.prompts.explain);
    items.push({
      title: `Eksplorasi: ${e.title}`,
      summary: stripMarkdown(e.goal ?? e.description),
      url: `/eksplorasi/${e.id}/`,
      type: 'eksplorasi',
      grade: e.grade,
      element: e.element,
      keywords: [
        ...(e.tags ?? []),
        'eksplorasi interaktif',
        e.level ?? '',
        e.grade ? GRADES[e.grade].name : '',
        e.element ? ELEMENTS[e.element].name : '',
      ]
        .filter(Boolean)
        .join(' '),
      text: stripMarkdown(parts.join(' ')).slice(0, 800),
    });
  }

  for (const entry of collectGlossaryEntries(topics)) {
    const topic = entry.topics[0];
    const meaning = stripMarkdown(entry.meaning);
    items.push({
      title: entry.termText,
      summary: meaning,
      url: `/glosarium/?q=${encodeURIComponent(entry.termText)}`,
      type: 'istilah',
      grade: topic?.grade,
      element: entry.elements[0],
      keywords: [
        entry.termText,
        ...entry.elements.map((id) => ELEMENTS[id].name),
        ...entry.topics.map(
          (t) => `${t.title} ${GRADES[t.grade].name} ${ELEMENTS[t.element].name}`,
        ),
        'istilah',
        'glosarium',
        'kamus',
        'definisi',
      ]
        .filter(Boolean)
        .join(' ')
        .trim(),
      text: stripMarkdown(`${meaning} ${entry.topics.map((t) => t.title).join(' ')}`).slice(0, 1000),
    });
  }

  for (const formula of collectFormulaEntries(topics)) {
    const topic = formula.topic;
    const body = stripMarkdown(formula.body);
    items.push({
      title: `${formula.title} · ${topic.title}`,
      summary: body.slice(0, 200),
      url: `/${topicPath(topic.grade, topic.element, topic.slug, topicSubject(topic))}/#${formula.sectionId}`,
      type: 'rumus',
      grade: topic.grade,
      element: topic.element,
      keywords: [
        formula.title,
        formula.kind,
        topic.title,
        GRADES[topic.grade].name,
        ELEMENTS[topic.element].name,
        SUBJECTS[topicSubject(topic)].name,
        'rumus',
        'formula',
        'generalisasi',
      ]
        .filter(Boolean)
        .join(' ')
        .trim(),
      text: body.slice(0, 2000),
    });
  }

  const pages: { title: string; path: string; summary: string }[] = STATIC_PAGES.map((p) => ({
    title: p.title,
    path: p.path,
    summary:
      p.path in SUBJECTS
        ? SUBJECTS[p.path as keyof typeof SUBJECTS].description
        : p.description ?? p.title,
  }));
  for (const subject of subjectsWithContent()) {
    for (const e of subjectElementsWithContent(subject)) {
      pages.push({
        title: `Elemen ${ELEMENTS[e].name} · ${SUBJECTS[subject].short}`,
        path: elementOverviewPath(e, subject),
        summary: ELEMENTS[e].description,
      });
    }
  }
  for (const p of pages) {
    items.push({
      title: p.title,
      summary: p.summary,
      url: p.path ? `/${p.path}/` : '/',
      type: 'halaman',
      keywords: '',
      text: p.summary,
    });
  }

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};

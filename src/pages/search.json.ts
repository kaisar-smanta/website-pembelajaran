import type { APIRoute } from 'astro';
import { topics, sectionSearchText, topicSubject } from '@/data/topics';
import { applications, applicationCategories } from '@/data/applications';
import { orderedExplorations } from '@/data/explorations';
import { topicIdsWithQuestions, questionsByTopic, practiceCounts } from '@/data/questions';
import { ELEMENTS, GRADES, SUBJECTS, SUBJECT_ORDER, elementOrderFor } from '@/data/curriculum';
import { DIFFICULTY_ORDER, STATIC_PAGES } from '@/data/display';
import { stripMarkdown } from '@/utils/markdown';

export const prerender = true;

interface SearchItem {
  title: string;
  summary: string;
  url: string;
  type: 'topik' | 'aplikasi' | 'eksplorasi' | 'latihan' | 'halaman';
  grade?: string;
  element?: string;
  keywords: string;
  text: string;
}

export const GET: APIRoute = () => {
  const items: SearchItem[] = [];

  for (const t of topics) {
    const body = t.sections.map((s) => sectionSearchText(s)).join(' ');
    const subject = topicSubject(t);
    items.push({
      title: t.title,
      summary: stripMarkdown(t.summary),
      url: `/${subject}/kelas/${t.grade}/${t.element}/${t.slug}/`,
      type: 'topik',
      grade: t.grade,
      element: t.element,
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

  const pageSummaries: Record<string, string> = {
    '': 'Beranda pusat belajar Matematika dan Matematika Tingkat Lanjut SMA.',
    'peta-pembelajaran': 'Peta hubungan antar konsep dan kurikulum.',
    latihan: 'Bank soal berjenjang dasar, cakap, mahir.',
    eksplorasi: 'Simulasi dan eksplorasi interaktif.',
    alat: 'Alat bantu matematika daring.',
    aplikasi: 'Studi kasus penerapan matematika.',
    referensi: 'Sumber dan catatan kurikulum.',
    glosarium: 'Daftar istilah matematika dari seluruh topik, menurut abjad.',
    rumus: 'Kumpulan rumus matematika dari seluruh topik per elemen.',
    'peta-situs': 'Peta situs: seluruh topik dan halaman dalam satu halaman.',
    kemajuan: 'Ringkasan kemajuan belajar tersimpan di peramban kamu.',
    kontak: 'Cara menghubungi penyusun dan kanal resmi sekolah.',
    aksesibilitas: 'Komitmen dan catatan aksesibilitas situs ini.',
    tentang: 'Tentang situs dan cara belajar di sini.',
    cari: 'Pencarian materi di seluruh situs.',
  };

  const pages: { title: string; path: string; summary: string }[] = STATIC_PAGES.map((p) => ({
    title: p.title,
    path: p.path,
    summary:
      p.path in SUBJECTS
        ? SUBJECTS[p.path as keyof typeof SUBJECTS].description
        : pageSummaries[p.path] ?? p.title,
  }));
  for (const subject of SUBJECT_ORDER) {
    for (const e of elementOrderFor(subject)) {
      pages.push({
        title: `Elemen ${ELEMENTS[e].name} — ${SUBJECTS[subject].short}`,
        path: `${subject}/elemen/${e}`,
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

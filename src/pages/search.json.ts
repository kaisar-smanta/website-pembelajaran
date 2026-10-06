import type { APIRoute } from 'astro';
import { topics } from '@/data/topics';
import { applications, applicationCategories } from '@/data/applications';
import { ELEMENTS, GRADES } from '@/data/curriculum';
import { stripMarkdown } from '@/utils/markdown';

export const prerender = true;

interface SearchItem {
  title: string;
  summary: string;
  url: string;
  type: 'topik' | 'aplikasi' | 'halaman';
  grade?: string;
  element?: string;
  keywords: string;
  text: string;
}

export const GET: APIRoute = () => {
  const items: SearchItem[] = [];

  for (const t of topics) {
    const body = t.sections
      .map((s) => `${s.title ?? ''} ${s.body ?? ''}`)
      .join(' ');
    items.push({
      title: t.title,
      summary: t.summary,
      url: `/kelas/${t.grade}/${t.element}/${t.slug}/`,
      type: 'topik',
      grade: t.grade,
      element: t.element,
      keywords: [...(t.keywords ?? []), t.subtitle ?? '', GRADES[t.grade].name, ELEMENTS[t.element].name]
        .join(' ')
        .trim(),
      text: stripMarkdown(`${t.description} ${body}`).slice(0, 2000),
    });
  }

  for (const a of applications) {
    items.push({
      title: a.title,
      summary: a.summary,
      url: `/aplikasi/${a.id}/`,
      type: 'aplikasi',
      keywords: applicationCategories[a.category].name,
      text: stripMarkdown(`${a.body} ${a.analysis ?? ''}`).slice(0, 1200),
    });
  }

  const pages: { title: string; path: string; summary: string }[] = [
    { title: 'Peta Pembelajaran', path: '/peta-pembelajaran', summary: 'Peta hubungan antar konsep dan kurikulum.' },
    { title: 'Latihan & Asesmen', path: '/latihan', summary: 'Bank soal berjenjang dasar, cakap, mahir.' },
    { title: 'Eksplorasi', path: '/eksplorasi', summary: 'Simulasi dan eksplorasi interaktif.' },
    { title: 'Alat Matematika', path: '/alat', summary: 'Alat bantu matematika daring.' },
    { title: 'Matematika dalam Kehidupan', path: '/aplikasi', summary: 'Studi kasus penerapan matematika.' },
    { title: 'Referensi', path: '/referensi', summary: 'Sumber dan catatan kurikulum.' },
  ];
  for (const p of pages) {
    items.push({
      title: p.title,
      summary: p.summary,
      url: `${p.path}/`,
      type: 'halaman',
      keywords: '',
      text: p.summary,
    });
  }

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};

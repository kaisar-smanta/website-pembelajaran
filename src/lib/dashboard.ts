/**
 * Penyiapan data dasbor `/kemajuan` yang dijalankan saat build.
 *
 * Modul ini murni di sisi server (tanpa DOM) dan mengumpulkan metadata tiap
 * topik yang dibutuhkan skrip peramban: id soal, jumlah dugaan/refleksi, serta
 * tautan latihan dan materi. Hasilnya diserialkan ke halaman sebagai JSON.
 */

import { topics, topicSubject } from '@/data/topics';
import { questionsByTopic } from '@/data/questions';
import { ELEMENTS, GRADES, SUBJECTS } from '@/data/curriculum';
import { url, topicUrl } from '@/utils/url';

export interface DashboardEntry {
  id: string;
  slug: string;
  title: string;
  grade: string;
  gradeName: string;
  element: string;
  elementName: string;
  subject: string;
  subjectName: string;
  questionIds: string[];
  predictions: number;
  reflections: number;
  practiceHref: string;
  materialHref: string;
}

export function buildDashboardEntries(): DashboardEntry[] {
  return topics.map((topic) => {
    const subject = topicSubject(topic);
    let predictions = 0;
    let reflections = 0;
    for (const section of topic.sections) {
      for (const block of section.blocks ?? []) {
        if (block.kind === 'prediction') predictions += 1;
        else if (block.kind === 'reflection') reflections += 1;
      }
    }
    return {
      id: topic.id,
      slug: topic.slug,
      title: topic.title,
      grade: topic.grade,
      gradeName: GRADES[topic.grade].name,
      element: topic.element,
      elementName: ELEMENTS[topic.element].name,
      subject,
      subjectName: SUBJECTS[subject].name,
      questionIds: questionsByTopic(topic.id).map((q) => q.id),
      predictions,
      reflections,
      practiceHref: url(`/latihan/${topic.slug}`),
      materialHref: topicUrl(topic.grade, topic.element, topic.slug, subject),
    };
  });
}

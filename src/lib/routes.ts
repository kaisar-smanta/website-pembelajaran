import type { ElementId, Grade, SubjectId } from '@/types/content';
import { SUBJECT_ORDER, elementOrderFor, gradesFor } from '@/data/curriculum';
import { topics, topicSubject } from '@/data/topics';

/**
 * Penurunan ruang rute dari data kurikulum + topik. Halaman tidak lagi menulis
 * ulang lintasan kartesian (mata pelajaran × kelas × elemen); semuanya memakai
 * pembantu murni di sini. Tidak ada kode khusus Astro.
 */

export interface GradeElement {
  grade: Grade;
  element: ElementId;
}

/** Mata pelajaran yang tetap dilayani pengalih rute lama. */
export const LEGACY_SUBJECT: SubjectId = 'matematika';

function comboKey(subject: SubjectId, grade: Grade, element: ElementId): string {
  return `${subject}/${grade}/${element}`;
}

/** Topik yang sudah terbit; topik `rencana` tidak menghasilkan rute. */
const publishedTopics = topics.filter((topic) => topic.status !== 'rencana');

const contentCombos = new Set<string>(
  publishedTopics.map((topic) => comboKey(topicSubject(topic), topic.grade, topic.element)),
);

/** Apakah ada topik terbit pada kombinasi mata pelajaran/kelas/elemen. */
export function hasTopic(subject: SubjectId, grade: Grade, element: ElementId): boolean {
  return contentCombos.has(comboKey(subject, grade, element));
}

/**
 * Kombinasi kelas×elemen yang benar-benar berisi topik, mengikuti urutan
 * kurikulum (kelas lalu elemen).
 */
export function subjectGradeElementCombos(subject: SubjectId): GradeElement[] {
  const combos: GradeElement[] = [];
  for (const grade of gradesFor(subject)) {
    for (const element of elementOrderFor(subject)) {
      if (hasTopic(subject, grade, element)) combos.push({ grade, element });
    }
  }
  return combos;
}

/**
 * Seluruh kombinasi kelas×elemen kurikulum, termasuk yang belum bertopik.
 * Dipakai halaman kelas×elemen agar halaman "segera hadir" tetap dibuat.
 */
export function allGradeElementCombos(subject: SubjectId): GradeElement[] {
  const combos: GradeElement[] = [];
  for (const grade of gradesFor(subject)) {
    for (const element of elementOrderFor(subject)) combos.push({ grade, element });
  }
  return combos;
}

/** Mata pelajaran yang memiliki sekurangnya satu topik terbit. */
export function subjectsWithContent(): SubjectId[] {
  return SUBJECT_ORDER.filter((subject) =>
    publishedTopics.some((topic) => topicSubject(topic) === subject),
  );
}

/** Kelas yang memiliki sekurangnya satu topik terbit pada suatu mata pelajaran. */
export function subjectGradesWithContent(subject: SubjectId): Grade[] {
  return gradesFor(subject).filter((grade) =>
    publishedTopics.some((topic) => topicSubject(topic) === subject && topic.grade === grade),
  );
}

/** Elemen yang memiliki sekurangnya satu topik terbit pada suatu mata pelajaran. */
export function subjectElementsWithContent(subject: SubjectId): ElementId[] {
  return elementOrderFor(subject).filter((element) =>
    gradesFor(subject).some((grade) => hasTopic(subject, grade, element)),
  );
}

/** Kelas yang dicakup pengalih rute lama (hanya Matematika). */
export function legacyGrades(): Grade[] {
  return gradesFor(LEGACY_SUBJECT);
}

/** Elemen yang dicakup pengalih rute lama (hanya Matematika). */
export function legacyElements(): ElementId[] {
  return elementOrderFor(LEGACY_SUBJECT);
}

/** Kombinasi kelas×elemen pengalih rute lama (hanya Matematika). */
export function legacyCombos(): GradeElement[] {
  return allGradeElementCombos(LEGACY_SUBJECT);
}

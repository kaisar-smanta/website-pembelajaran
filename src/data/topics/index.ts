import type { ElementId, Grade, SubjectId, Topic } from '@/types/content';
import { SUBJECT_ORDER, SUBJECTS } from '@/data/curriculum';
import { plannedTopics } from './planned';
import { sectionSearchText } from '@/lib/content-text';

export { plannedTopics, sectionSearchText };

/**
 * Berkas topik didaftarkan otomatis lewat glob sehingga menambah topik baru
 * cukup dengan membuat berkasnya. `index.ts` dan `planned.ts` dikecualikan.
 */
const modules = import.meta.glob(['./*.ts', '!./index.ts', '!./planned.ts'], {
  eager: true,
}) as Record<string, unknown>;

const GRADE_ORDER: Grade[] = ['X', 'XI', 'XII'];

function isTopic(value: unknown): value is Topic {
  return (
    Boolean(value) &&
    typeof value === 'object' &&
    typeof (value as { id?: unknown }).id === 'string' &&
    Array.isArray((value as { sections?: unknown }).sections)
  );
}

function elementRank(subject: SubjectId, element: ElementId): number {
  const index = SUBJECTS[subject].elements.indexOf(element);
  return index === -1 ? 999 : index;
}

/** Urutan tetap: mata pelajaran, kelas, elemen, lalu judul. */
function topicOrder(a: Topic, b: Topic): number {
  const subjectDelta =
    SUBJECT_ORDER.indexOf(topicSubject(a)) - SUBJECT_ORDER.indexOf(topicSubject(b));
  if (subjectDelta !== 0) return subjectDelta;
  const gradeDelta = GRADE_ORDER.indexOf(a.grade) - GRADE_ORDER.indexOf(b.grade);
  if (gradeDelta !== 0) return gradeDelta;
  const elementDelta =
    elementRank(topicSubject(a), a.element) - elementRank(topicSubject(b), b.element);
  if (elementDelta !== 0) return elementDelta;
  return a.title.localeCompare(b.title, 'id');
}

/** Seluruh topik; blok interaktif sudah ditulis langsung pada tiap berkas. */
export const topics: Topic[] = Object.values(modules)
  .flatMap((module) => Object.values(module as Record<string, unknown>).filter(isTopic))
  .sort(topicOrder);

const byId = new Map<string, Topic>(topics.map((t) => [t.id, t]));

export function getTopic(id: string): Topic | undefined {
  return byId.get(id);
}

/** Mata pelajaran sebuah topik; topik lama tanpa penanda dianggap Matematika. */
export function topicSubject(topic: Topic): SubjectId {
  return topic.subject ?? 'matematika';
}

export function topicsBySubject(subject: SubjectId): Topic[] {
  return topics.filter((t) => topicSubject(t) === subject);
}

export function topicsBySubjectGrade(subject: SubjectId, grade: Grade): Topic[] {
  return topics.filter((t) => topicSubject(t) === subject && t.grade === grade);
}

export function topicsBySubjectElement(subject: SubjectId, element: ElementId): Topic[] {
  return topics.filter((t) => topicSubject(t) === subject && t.element === element);
}

export function topicsBySubjectGradeElement(
  subject: SubjectId,
  grade: Grade,
  element: ElementId,
): Topic[] {
  return topics.filter(
    (t) => topicSubject(t) === subject && t.grade === grade && t.element === element,
  );
}

export function resolveTopics(ids: string[] | undefined): Topic[] {
  if (!ids) return [];
  return ids.map((id) => byId.get(id)).filter((t): t is Topic => Boolean(t));
}

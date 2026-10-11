/**
 * Pengelompokan kemajuan per mata pelajaran, kelas, lalu elemen.
 *
 * Modul ini murni: tanpa DOM dan tanpa impor data materi.
 */

import type { SiteOverview, SubjectGroup } from './types.ts';

/** Mengelompokkan kemajuan per mata pelajaran, kelas, lalu elemen. */
export function groupOverview(overview: SiteOverview): SubjectGroup[] {
  const subjects = new Map<string, SubjectGroup>();

  for (const topic of overview.topics) {
    let subject = subjects.get(topic.subject);
    if (!subject) {
      subject = {
        subject: topic.subject,
        subjectName: topic.subjectName,
        grades: [],
        answered: 0,
        total: 0,
        correct: 0,
        gradedAnswered: 0,
        accuracy: 0,
      };
      subjects.set(topic.subject, subject);
    }

    let grade = subject.grades.find((g) => g.grade === topic.grade);
    if (!grade) {
      grade = { grade: topic.grade, gradeName: topic.gradeName, elements: [], answered: 0, total: 0 };
      subject.grades.push(grade);
    }

    let element = grade.elements.find((e) => e.element === topic.element);
    if (!element) {
      element = {
        element: topic.element,
        elementName: topic.elementName,
        topics: [],
        answered: 0,
        total: 0,
        correct: 0,
        gradedAnswered: 0,
        accuracy: 0,
      };
      grade.elements.push(element);
    }

    element.topics.push(topic);
    element.answered += topic.answered;
    element.total += topic.total;
    element.correct += topic.correct;
    element.gradedAnswered += topic.gradedAnswered;
    grade.answered += topic.answered;
    grade.total += topic.total;
    subject.answered += topic.answered;
    subject.total += topic.total;
    subject.correct += topic.correct;
    subject.gradedAnswered += topic.gradedAnswered;
  }

  const groups = Array.from(subjects.values());
  for (const subject of groups) {
    subject.accuracy = subject.gradedAnswered ? subject.correct / subject.gradedAnswered : 0;
    for (const grade of subject.grades) {
      for (const element of grade.elements) {
        element.accuracy = element.gradedAnswered ? element.correct / element.gradedAnswered : 0;
      }
    }
  }
  return groups;
}

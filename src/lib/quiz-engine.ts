/**
 * Mesin kuis bersama untuk `QuestionCard.astro` (kartu soal) dan
 * `QuizTeaser.astro` (kuis kilat).
 *
 * Sebelumnya kedua komponen menyalin mesin keadaan pilihan ganda yang sama:
 * mengacak urutan opsi dengan benih sesi, menandai jawaban benar/salah,
 * mencatat rentetan jawaban benar, dan merayakannya. Modul ini memusatkan
 * perilaku tersebut, tetap ringan terhadap DOM, dan memakai kembali pustaka
 * yang sudah ada (`quiz-client`, `random`, `celebrate`, `answer`, `progress`).
 */

import { isAcceptedAnswer, normalizeAnswer } from './answer.ts';
import { celebrate } from './celebrate.ts';
import type { AttemptState } from './progress.ts';
import {
  clearProgress,
  loadQuizStreak,
  recordProgress,
  saveQuizStreak,
  sessionSeed,
} from './quiz-client.ts';
import { combineSeed, seededShuffle } from './random.ts';

/** Benih sesi untuk mengacak urutan opsi sebuah soal. */
export function optionSeed(questionId: string): string {
  return combineSeed(sessionSeed(), questionId);
}

/** Mengembalikan salinan `items` dalam urutan opsi deterministik sesi ini. */
export function optionOrder<T>(items: T[], questionId: string): T[] {
  return seededShuffle(items, optionSeed(questionId));
}

/** Mengacak ulang anak `list` di DOM sesuai urutan opsi sesi. */
export function shuffleOptionElements(list: Element, questionId: string): void {
  for (const node of optionOrder(Array.from(list.children), questionId)) {
    list.appendChild(node);
  }
}

/** Menaikkan rentetan jawaban benar tersimpan dan mengembalikan nilai barunya. */
export function bumpQuizStreak(): number {
  const streak = loadQuizStreak() + 1;
  saveQuizStreak(streak);
  return streak;
}

/** Menyetel ulang rentetan jawaban benar, mis. setelah jawaban salah. */
export function resetQuizStreak(): void {
  saveQuizStreak(0);
}

/** Merayakan jawaban benar dengan kekuatan yang tumbuh bersama rentetan. */
export function celebrateCorrect(root: HTMLElement): void {
  celebrate(root, { count: 7 + Math.min(bumpQuizStreak(), 6) });
}

/**
 * Umpan balik yang menuntun siswa dengan menyebut konsep yang perlu diperiksa,
 * bukan sekadar menyatakan jawabannya salah.
 */
export function conceptHint(competencies: string[]): string {
  return competencies.length
    ? `Periksa kembali: ${competencies.join(', ')}.`
    : 'Periksa kembali langkah-langkahmu.';
}

/** Membaca daftar string JSON dari sebuah nilai atribut, aman terhadap isi rusak. */
export function parseJsonStringList(raw: string | null): string[] {
  try {
    const parsed: unknown = JSON.parse(raw ?? '[]');
    return Array.isArray(parsed)
      ? parsed.filter((item): item is string => typeof item === 'string')
      : [];
  } catch {
    return [];
  }
}

/** Membaca kompetensi soal dari atribut `data-competencies`. */
export function parseCompetencies(root: Element): string[] {
  return parseJsonStringList(root.getAttribute('data-competencies'));
}

/** Menyimpan percobaan satu kartu soal berdasarkan `data-question-id`. */
export function recordQuestion(
  root: Element,
  correct: boolean,
  state: AttemptState & { graded?: boolean } = {},
): void {
  const questionId = root.getAttribute('data-question-id');
  if (!questionId) return;
  recordProgress(questionId, correct, { graded: state.graded ?? true, state });
}

/** Menghapus percobaan satu kartu soal, mis. saat siswa menekan "Coba lagi". */
export function clearQuestion(root: Element): void {
  const questionId = root.getAttribute('data-question-id');
  if (questionId) clearProgress(questionId);
}

/** Hasil penilaian jawaban singkat. */
export interface ShortAnswerResult {
  /** `empty` bila jawaban kosong setelah dinormalisasi. */
  status: 'empty' | 'correct' | 'wrong';
  /** Nilai ternormalisasi, dipakai untuk memeriksa kekosongan. */
  value: string;
}

/**
 * Menilai jawaban singkat memakai normalisasi penulisan dan ekuivalensi
 * numerik dari `answer.ts`, termasuk `acceptedAnswers`.
 */
export function gradeShortAnswer(
  input: string,
  answer: string,
  accepted: string[] = [],
): ShortAnswerResult {
  const value = normalizeAnswer(input);
  if (!value) return { status: 'empty', value };
  return { status: isAcceptedAnswer(input, answer, accepted) ? 'correct' : 'wrong', value };
}

/** Mengulang animasi CSS pada elemen yang sama tanpa menyalin keyframes. */
export function replayAnimation(target: Element | null, className: string): void {
  if (!target) return;
  target.classList.remove(className);
  void (target as HTMLElement).offsetWidth;
  target.classList.add(className);
}

/** Konfigurasi mesin keadaan pilihan ganda. */
export interface ChoiceGroupConfig {
  /** Tombol opsi ber-`data-key`, dalam urutan tampil. */
  options: HTMLButtonElement[];
  /** Kunci jawaban benar. */
  answer: string;
  /** Kelas untuk opsi yang merupakan jawaban benar. */
  correctClass: string;
  /** Kelas untuk opsi terpilih yang salah. */
  incorrectClass: string;
  /** Kelas opsional untuk opsi yang baru diklik, mis. kuis kilat. */
  chosenClass?: string;
  /**
   * Menandai status opsi terpilih. Bawaan menulis `aria-checked` untuk
   * radiogroup kartu soal; kuis kilat menggantinya dengan `aria-disabled`.
   */
  markChosen?: (option: HTMLButtonElement, chosen: boolean) => void;
  /** Mengunci opsi setelah dinilai. Bawaan menonaktifkan tombol. */
  lockOptions?: (options: HTMLButtonElement[]) => void;
  /** Membuka kunci opsi. Bawaan mengaktifkan kembali tombol. */
  unlockOptions?: (options: HTMLButtonElement[]) => void;
  /** Dipanggil sekali saat pilihan diterima dan opsi sudah dikunci. */
  onChoose: (key: string, isCorrect: boolean, option: HTMLButtonElement) => void;
  /** Aktifkan roving tabindex dan navigasi panah/Home/End (kartu soal). */
  roving?: boolean;
}

/** Mesin keadaan pilihan ganda yang dipakai kedua komponen kuis. */
export interface ChoiceGroup {
  /** Menandai jawaban benar/salah tanpa memanggil `onChoose`. */
  apply: (key: string | null) => boolean;
  /** Memilih jawaban; diabaikan bila sudah dinilai atau `key` kosong. */
  choose: (key: string | null) => void;
  /** Mengunci opsi karena sudah dinilai. */
  lock: () => void;
  /** Membuka kunci dan mengaktifkan kembali opsi. */
  unlock: () => void;
  /** Mengembalikan seluruh opsi ke keadaan belum dinilai. */
  reset: () => void;
  /** Apakah soal sudah dinilai. */
  isAnswered: () => boolean;
  /** Memindahkan tabindex roving ke kunci tertentu. */
  setActive: (key: string | null) => void;
}

const defaultMarkChosen = (option: HTMLButtonElement, chosen: boolean): void => {
  option.setAttribute('aria-checked', String(chosen));
};

const defaultLock = (options: HTMLButtonElement[]): void => {
  for (const option of options) option.disabled = true;
};

const defaultUnlock = (options: HTMLButtonElement[]): void => {
  for (const option of options) option.disabled = false;
};

/** Membuat mesin keadaan pilihan ganda bersama untuk kedua komponen kuis. */
export function createChoiceGroup(config: ChoiceGroupConfig): ChoiceGroup {
  const {
    options,
    answer,
    correctClass,
    incorrectClass,
    chosenClass,
    markChosen = defaultMarkChosen,
    lockOptions = defaultLock,
    unlockOptions = defaultUnlock,
    onChoose,
    roving = false,
  } = config;

  let answered = false;

  function setActive(key: string | null): void {
    for (const option of options) {
      option.tabIndex = key !== null && option.getAttribute('data-key') === key ? 0 : -1;
    }
  }

  function apply(key: string | null): boolean {
    const isCorrect = key !== null && key === answer;
    for (const option of options) {
      const optionKey = option.getAttribute('data-key');
      option.classList.remove(correctClass, incorrectClass);
      if (chosenClass) option.classList.remove(chosenClass);
      if (optionKey === answer) option.classList.add(correctClass);
      else if (key !== null && optionKey === key && !isCorrect) option.classList.add(incorrectClass);
      if (chosenClass && key !== null && optionKey === key) option.classList.add(chosenClass);
      markChosen(option, key !== null && optionKey === key);
    }
    return isCorrect;
  }

  function choose(key: string | null): void {
    if (answered || key === null) return;
    const option = options.find((item) => item.getAttribute('data-key') === key);
    if (!option) return;
    const isCorrect = apply(key);
    answered = true;
    lockOptions(options);
    onChoose(key, isCorrect, option);
  }

  function focusByIndex(index: number): void {
    if (options.length === 0) return;
    const clamped = (index + options.length) % options.length;
    const option = options[clamped];
    setActive(option.getAttribute('data-key'));
    option.focus();
  }

  function handleKeydown(event: KeyboardEvent, index: number, option: HTMLButtonElement): void {
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();
        focusByIndex(index + 1);
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();
        focusByIndex(index - 1);
        break;
      case 'Home':
        event.preventDefault();
        focusByIndex(0);
        break;
      case 'End':
        event.preventDefault();
        focusByIndex(options.length - 1);
        break;
      case ' ':
      case 'Enter':
        event.preventDefault();
        choose(option.getAttribute('data-key'));
        break;
    }
  }

  options.forEach((option, index) => {
    option.addEventListener('click', () => choose(option.getAttribute('data-key')));
    if (roving) option.addEventListener('keydown', (event) => handleKeydown(event, index, option));
  });

  if (roving) setActive(options[0]?.getAttribute('data-key') ?? null);

  return {
    apply,
    choose,
    lock: () => {
      answered = true;
      lockOptions(options);
    },
    unlock: () => {
      answered = false;
      unlockOptions(options);
      if (roving) setActive(options[0]?.getAttribute('data-key') ?? null);
    },
    reset: () => {
      answered = false;
      for (const option of options) {
        option.classList.remove(correctClass, incorrectClass);
        if (chosenClass) option.classList.remove(chosenClass);
        markChosen(option, false);
      }
      unlockOptions(options);
      if (roving) setActive(options[0]?.getAttribute('data-key') ?? null);
    },
    isAnswered: () => answered,
    setActive,
  };
}

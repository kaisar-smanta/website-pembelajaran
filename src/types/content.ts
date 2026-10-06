/**
 * Model data konten untuk seluruh situs.
 *
 * Semua materi disimpan sebagai data terstruktur TypeScript sehingga halaman
 * dapat dibangkitkan secara statis (static generation) dan topik baru cukup
 * ditambahkan sebagai data tanpa menulis komponen UI baru.
 */

export type Grade = 'X' | 'XI' | 'XII';

export type Phase = 'E' | 'F';

export type ElementId =
  | 'bilangan'
  | 'aljabar-fungsi'
  | 'geometri'
  | 'data-peluang';

export type Difficulty = 'dasar' | 'cakap' | 'mahir';

export type QuestionType =
  | 'multiple-choice'
  | 'short-answer'
  | 'open-response';

/** Jenis bagian pembelajaran dalam sebuah topik (mengikuti alur belajar). */
export type SectionKind =
  | 'tujuan'
  | 'pemantik'
  | 'prasyarat'
  | 'konteks'
  | 'konsep'
  | 'representasi'
  | 'eksplorasi'
  | 'generalisasi'
  | 'rumus'
  | 'contoh'
  | 'latihan-dasar'
  | 'latihan-cakap'
  | 'latihan-mahir'
  | 'dunia-nyata'
  | 'kesalahan-umum'
  | 'refleksi'
  | 'rangkuman'
  | 'evaluasi'
  | 'catatan';

/** Blok tambahan di luar markdown, untuk kasus yang butuh UI khusus. */
export type Block =
  | {
      kind: 'callout';
      variant: 'info' | 'warning' | 'tip' | 'concept';
      title?: string;
      /** Markdown singkat; mendukung $...$ */
      text: string;
    }
  | {
      kind: 'table';
      caption?: string;
      headers: string[];
      rows: string[][];
      /** Jika true, sel dirender sebagai matematika (tanpa tanda $) */
      math?: boolean;
      scroll?: boolean;
    }
  | {
      kind: 'exploration';
      /** id eksplorasi interaktif pada src/content/explorations.ts */
      explorationId: string;
    }
  | {
      kind: 'details';
      summary: string;
      /** Markdown isi pembahasan */
      text: string;
    }
  | {
      kind: 'geogebra';
      url: string;
      title: string;
      height?: number;
    };

export interface Section {
  id: string;
  kind: SectionKind;
  title?: string;
  /** Isi markdown. Matematika ditulis $...$ atau $$...$$. */
  body?: string;
  blocks?: Block[];
  level?: Difficulty;
  /** Bila true, bagian disembunyikan di balik tombol "lihat". */
  collapsed?: boolean;
}

export interface LearningObjective {
  text: string;
}

export interface Topic {
  id: string;
  /** Segmen URL, harus unik. */
  slug: string;
  title: string;
  subtitle?: string;
  grade: Grade;
  phase: Phase;
  element: ElementId;
  /** Ringkasan 1 kalimat untuk kartu. */
  summary: string;
  /** Deskripsi beberapa kalimat untuk halaman topik. */
  description: string;
  keywords?: string[];
  /** id topik prasyarat (referensi, bukan teks). */
  prerequisites?: string[];
  /** id topik terkait. */
  relatedTopics?: string[];
  objectives?: LearningObjective[];
  prerequisiteKnowledge?: string[];
  estimatedMinutes?: number;
  sections: Section[];
  explorations?: string[];
  applications?: string[];
  featured?: boolean;
  /** 'lengkap' = materi sudah ditulis; 'rencana' = masih dalam roadmap. */
  status?: 'lengkap' | 'rencana';
}

export interface QuestionOption {
  /** Kunci opsi, mis. "A". */
  key: string;
  text: string;
}

export interface Question {
  id: string;
  topicId: string;
  difficulty: Difficulty;
  type: QuestionType;
  /** Kategori asesmen. */
  category?:
    | 'cepat'
    | 'konsep'
    | 'penerapan'
    | 'pemodelan'
    | 'penalaran'
    | 'kontekstual'
    | 'evaluasi';
  prompt: string;
  options?: QuestionOption[];
  /** Kunci jawaban: untuk short-answer, daftar jawaban yang diterima. */
  answer: string;
  /** Alternatif jawaban singkat yang juga benar. */
  acceptedAnswers?: string[];
  explanation?: string;
  hints?: string[];
  competencies?: string[];
}

export type ApplicationCategory =
  | 'keuangan'
  | 'data'
  | 'pertumbuhan'
  | 'pengukuran';

export interface Application {
  id: string;
  title: string;
  category: ApplicationCategory;
  summary: string;
  /** id topik yang relevan. */
  topicIds: string[];
  /** Markdown narasi studi kasus. */
  body: string;
  /** Contoh perhitungan atau analisis. */
  analysis?: string;
}

export interface ExplorationParam {
  name: string;
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
}

export interface Exploration {
  id: string;
  title: string;
  topicId?: string;
  type: 'function-slider' | 'compound-interest' | 'probability' | 'geogebra' | 'linear-regression';
  /** Bila true, ditampilkan sebagai eksplorasi unggulan di beranda. */
  featured?: boolean;
  /** Rumus untuk tipe function-slider. */
  formula?: 'quadratic' | 'exponential' | 'sine';
  description: string;
  /** Parameter awal untuk tipe berbasis slider. */
  params?: ExplorationParam[];
  /** Untuk tipe geogebra. */
  url?: string;
}

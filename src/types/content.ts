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
      /** id eksplorasi interaktif pada src/data/explorations.ts */
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
  /**
   * Id soal dari bank soal (`src/data/questions`) yang ditampilkan sebagai
   * latihan interaktif. Menjadikan bank soal sumber tunggal latihan.
   */
  questionIds?: string[];
  /**
   * Alternatif `questionIds`: tarik otomatis seluruh soal topik pada tingkat
   * ini sebagai latihan interaktif.
   */
  practiceLevel?: Difficulty;
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

export type ExplorationType =
  | 'function-slider'
  | 'compound-interest'
  | 'probability'
  | 'linear-regression'
  | 'sequence'
  | 'distribution'
  | 'conditional-probability'
  | 'circle'
  | 'matrix'
  | 'linear-system'
  | 'function-composition'
  | 'function-inverse'
  | 'geogebra';

/** Ajakan berpikir sebelum, selama, dan sesudah bereksplorasi. */
export interface ExplorationPrompt {
  /** Dugaan yang diajukan sebelum mengubah apa pun. */
  predict: string;
  /** Apa yang perlu diamati saat parameter diubah. */
  observe: string;
  /** Hubungan dengan konsep yang dipelajari. */
  explain: string;
}

export interface Exploration {
  id: string;
  title: string;
  topicId?: string;
  type: ExplorationType;
  /** Bila true, ditampilkan sebagai eksplorasi unggulan di beranda. */
  featured?: boolean;
  /** Rumus untuk tipe function-slider. */
  formula?: 'quadratic' | 'exponential' | 'sine' | 'transform';
  description: string;
  /** Parameter awal untuk tipe berbasis slider. */
  params?: ExplorationParam[];
  /** Untuk tipe geogebra. */
  url?: string;
  /** Kelas tempat eksplorasi paling relevan. */
  grade?: Grade;
  /** Elemen kurikulum. */
  element?: ElementId;
  /** Urutan tampil di dalam kelasnya; makin kecil makin awal. */
  order?: number;
  /** Satu kalimat: apa yang seharusnya ditemukan siswa. */
  goal?: string;
  /** Skema prediksi–observasi–penjelasan. */
  prompts?: ExplorationPrompt;
  /** Kesalahan atau jebakan umum saat bereksplorasi. */
  cautions?: string[];
  /** Kata kunci untuk pencarian. */
  tags?: string[];
  /** Tuntutan penalaran, sejajar dengan tingkat kesulitan soal. */
  level?: Difficulty;
  /** Perkiraan waktu bereksplorasi (menit). */
  estimatedMinutes?: number;
  /** 'lengkap' = siap dipakai; 'rencana' = masih roadmap. */
  status?: 'lengkap' | 'rencana';
}

import type { ElementId, Grade, SubjectId } from '@/types/content';

export interface LearningPathNode {
  label: string;
  id?: string;
  grade?: Grade;
  element?: ElementId;
}

export interface LearningPath {
  id: string;
  /** Mata pelajaran; kosong berarti 'matematika'. */
  subject?: SubjectId;
  title: string;
  note: string;
  accent: ElementId;
  nodes: LearningPathNode[];
}

export const learningPaths: LearningPath[] = [
  {
    id: 'bilangan',
    accent: 'bilangan',
    title: 'Jalur Bilangan: dari eksponen ke keputusan keuangan',
    note: 'Setiap tahap bertumpu pada tahap sebelumnya.',
    nodes: [
      { label: 'Eksponen', id: 'eksponen', grade: 'X', element: 'bilangan' },
      {
        label: 'Fungsi Eksponensial',
        id: 'fungsi-eksponensial',
        grade: 'X',
        element: 'aljabar-fungsi',
      },
      {
        label: 'Persamaan Eksponen & Logaritma',
        id: 'persamaan-eksponen-logaritma',
        grade: 'X',
        element: 'aljabar-fungsi',
      },
      { label: 'Barisan & Deret', id: 'barisan-deret', grade: 'XI', element: 'bilangan' },
      { label: 'Bunga Majemuk', id: 'bunga-majemuk', grade: 'XI', element: 'bilangan' },
      { label: 'Anuitas', id: 'anuitas', grade: 'XI', element: 'bilangan' },
      {
        label: 'Pinjaman & Investasi',
        id: 'pinjaman-investasi',
        grade: 'XII',
        element: 'bilangan',
      },
    ],
  },
  {
    id: 'fungsi',
    accent: 'aljabar-fungsi',
    title: 'Jalur Fungsi: dari hubungan ke pemodelan data',
    note: 'Fungsi menghubungkan aljabar, data, dan pengambilan keputusan.',
    nodes: [
      {
        label: 'Sistem Pertidaksamaan',
        id: 'sistem-pertidaksamaan',
        grade: 'X',
        element: 'aljabar-fungsi',
      },
      {
        label: 'Fungsi Kuadrat',
        id: 'fungsi-kuadrat',
        grade: 'X',
        element: 'aljabar-fungsi',
      },
      {
        label: 'Transformasi Fungsi',
        id: 'transformasi-fungsi',
        grade: 'XI',
        element: 'aljabar-fungsi',
      },
      {
        label: 'Fungsi Invers',
        id: 'fungsi-invers',
        grade: 'XI',
        element: 'aljabar-fungsi',
      },
      {
        label: 'Komposisi Fungsi',
        id: 'komposisi-fungsi',
        grade: 'XI',
        element: 'aljabar-fungsi',
      },
      {
        label: 'Pemodelan Fungsi',
        id: 'pemodelan-fungsi',
        grade: 'XI',
        element: 'aljabar-fungsi',
      },
      { label: 'Data Bivariat', id: 'data-bivariat', grade: 'XI', element: 'data-peluang' },
      { label: 'Regresi', id: 'regresi', grade: 'XI', element: 'data-peluang' },
    ],
  },
  {
    id: 'geometri',
    accent: 'geometri',
    title: 'Jalur Geometri: dari sudut dan sisi ke busur dan juring',
    note: 'Trigonometri menyiapkan perhitungan sudut dan panjang; lingkaran memperluasnya ke busur, juring, dan garis singgung.',
    nodes: [
      { label: 'Trigonometri', id: 'trigonometri', grade: 'X', element: 'geometri' },
      { label: 'Lingkaran', id: 'lingkaran', grade: 'XI', element: 'geometri' },
      {
        label: 'Transformasi Geometri (pengayaan)',
        id: 'transformasi-geometri',
        grade: 'XII',
        element: 'geometri',
      },
    ],
  },
  {
    id: 'aljabar-matriks',
    accent: 'aljabar-fungsi',
    title: 'Jalur Aljabar: dari sistem linear ke matriks',
    note: 'Topik pengayaan: SPLTV menyiapkan cara menyelesaikan sistem, lalu matriks menawarkan notasi dan penyelesaian yang lebih ringkas.',
    nodes: [
      { label: 'SPLTV (pengayaan)', id: 'spltv', grade: 'X', element: 'aljabar-fungsi' },
      { label: 'Matriks (pengayaan)', id: 'matriks', grade: 'XI', element: 'aljabar-fungsi' },
    ],
  },
  {
    id: 'pengayaan',
    accent: 'aljabar-fungsi',
    title: 'Jalur Pengayaan: penalaran dan pembuktian',
    note: 'Materi di luar capaian pembelajaran untuk memperdalam penalaran: teori bilangan, ketaksamaan, induksi matematika, dan kombinatorika lanjut.',
    nodes: [
      { label: 'Teori Bilangan (pengayaan)', id: 'teori-bilangan', grade: 'X', element: 'bilangan' },
      { label: 'Ketaksamaan (pengayaan)', id: 'ketaksamaan', grade: 'X', element: 'aljabar-fungsi' },
      {
        label: 'Induksi Matematika (pengayaan)',
        id: 'induksi-matematika',
        grade: 'XI',
        element: 'aljabar-fungsi',
      },
      {
        label: 'Kombinatorika Lanjut (pengayaan)',
        id: 'kombinatorika-lanjut',
        grade: 'XII',
        element: 'data-peluang',
      },
    ],
  },
  {
    id: 'peluang',
    accent: 'data-peluang',
    title: 'Jalur Peluang: dari data ke kesimpulan yang sahih',
    note: 'Asosiasi bukan berarti kausalitas.',
    nodes: [
      {
        label: 'Analisis Data',
        id: 'analisis-distribusi-data',
        grade: 'X',
        element: 'data-peluang',
      },
      {
        label: 'Statistik dalam Kehidupan',
        id: 'statistik-dalam-kehidupan',
        grade: 'X',
        element: 'data-peluang',
      },
      { label: 'Data Bivariat', id: 'data-bivariat', grade: 'XI', element: 'data-peluang' },
      { label: 'Regresi', id: 'regresi', grade: 'XI', element: 'data-peluang' },
      { label: 'Peluang', id: 'peluang', grade: 'XI', element: 'data-peluang' },
      {
        label: 'Asosiasi & Kausalitas',
        id: 'asosiasi-kausalitas',
        grade: 'XII',
        element: 'data-peluang',
      },
      {
        label: 'Permutasi & Kombinasi',
        id: 'permutasi-kombinasi',
        grade: 'XII',
        element: 'data-peluang',
      },
      {
        label: 'Peluang Bersyarat',
        id: 'peluang-bersyarat',
        grade: 'XII',
        element: 'data-peluang',
      },
    ],
  },

  // ---------------- Matematika Tingkat Lanjut ----------------
  {
    id: 'mtl-aljabar-geometri',
    subject: 'matematika-lanjut',
    accent: 'aljabar-fungsi',
    title: 'Jalur MTL: dari polinomial ke vektor dan irisan kerucut',
    note: 'Mata pelajaran pilihan Fase F yang memperkuat abstraksi dan penalaran geometris.',
    nodes: [
      { label: 'Polinomial', id: 'polinomial', grade: 'XI', element: 'aljabar-fungsi' },
      {
        label: 'Matriks & Transformasi',
        id: 'matriks-transformasi',
        grade: 'XI',
        element: 'aljabar-fungsi',
      },
      {
        label: 'Trigonometri Lanjut',
        id: 'trigonometri-lanjut',
        grade: 'XI',
        element: 'aljabar-fungsi',
      },
      { label: 'Vektor', id: 'vektor', grade: 'XI', element: 'geometri' },
      { label: 'Irisan Kerucut', id: 'irisan-kerucut', grade: 'XI', element: 'geometri' },
    ],
  },
  {
    id: 'mtl-kalkulus-data',
    subject: 'matematika-lanjut',
    accent: 'kalkulus',
    title: 'Jalur MTL: dari laju perubahan ke integral dan peluang',
    note: 'Turunan dan integral menjadi alat utama membaca perubahan dan akumulasi.',
    nodes: [
      { label: 'Limit Fungsi', id: 'limit-fungsi', grade: 'XII', element: 'kalkulus' },
      { label: 'Turunan', id: 'turunan', grade: 'XII', element: 'kalkulus' },
      { label: 'Penerapan Turunan', id: 'aplikasi-turunan', grade: 'XII', element: 'kalkulus' },
      { label: 'Integral', id: 'integral', grade: 'XII', element: 'kalkulus' },
      {
        label: 'Variabel Acak Diskret',
        id: 'variabel-acak-diskret',
        grade: 'XII',
        element: 'data-peluang',
      },
      {
        label: 'Distribusi Binomial (pengayaan)',
        id: 'distribusi-binomial',
        grade: 'XII',
        element: 'data-peluang',
      },
    ],
  },
];

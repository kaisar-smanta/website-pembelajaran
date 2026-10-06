import type { Exploration } from '@/types/content';

export const explorations: Exploration[] = [
  {
    id: 'eksponen-pertumbuhan',
    title: 'Eksplorasi Pertumbuhan Eksponensial',
    topicId: 'eksponen',
    type: 'function-slider',
    formula: 'exponential',
    description:
      'Ubah nilai awal $a$ dan faktor pengali $b$ pada $f(x)=a\\cdot b^{x}$ untuk melihat perbedaan pertumbuhan ketika $b>1$, $b=1$, dan $0<b<1$.',
    params: [
      { name: 'a', label: 'Nilai awal a', min: 0.5, max: 5, step: 0.5, value: 1 },
      { name: 'b', label: 'Faktor pengali b', min: 0.25, max: 3, step: 0.05, value: 2 },
    ],
  },
  {
    id: 'kuadrat-parameter',
    title: 'Eksplorasi Parameter Fungsi Kuadrat',
    topicId: 'fungsi-kuadrat',
    type: 'function-slider',
    formula: 'quadratic',
    description:
      'Geser nilai $a$, $b$, dan $c$ pada $f(x)=ax^{2}+bx+c$ untuk mengamati pengaruhnya terhadap arah bukaan, sumbu simetri, dan titik puncak parabola.',
  },
  {
    id: 'fungsi-eksponensial-parameter',
    title: 'Eksplorasi Grafik Fungsi Eksponensial',
    topicId: 'fungsi-eksponensial',
    type: 'function-slider',
    formula: 'exponential',
    description:
      'Ubah basis $b$ pada $f(x)=a\\cdot b^{x}$ dan bandingkan grafik untuk $b>1$ (pertumbuhan) dengan $0<b<1$ (peluruhan).',
    params: [
      { name: 'a', label: 'Koefisien a', min: 0.5, max: 4, step: 0.5, value: 1 },
      { name: 'b', label: 'Basis b', min: 0.25, max: 3, step: 0.05, value: 2 },
    ],
  },
  {
    id: 'bunga-majemuk-sim',
    title: 'Simulasi Bunga Majemuk',
    topicId: 'bunga-majemuk',
    type: 'compound-interest',
    description:
      'Bandingkan pertumbuhan saldo antara bunga tunggal dan bunga majemuk dengan modal, suku bunga, dan lama menabung yang dapat diatur.',
  },
  {
    id: 'anuitas-sim',
    title: 'Simulasi Anuitas dan Amortisasi',
    topicId: 'anuitas',
    type: 'compound-interest',
    description:
      'Atur besar pinjaman, suku bunga, dan lama pinjaman untuk melihat besar angsuran serta komposisi pokok dan bunga pada tabel amortisasi.',
  },
  {
    id: 'peluang-sim',
    title: 'Simulasi Peluang',
    topicId: 'peluang',
    type: 'probability',
    description:
      'Lakukan percobaan pelemparan koin atau dadu berulang kali dan bandingkan peluang empiris dengan peluang teoretis.',
  },
  {
    id: 'regresi-sim',
    title: 'Visualisasi Regresi Linear',
    topicId: 'regresi',
    type: 'linear-regression',
    description:
      'Tambahkan titik data pada diagram pencar, lalu amati garis regresi dan nilai koefisien yang dihasilkan.',
  },
];

export function getExploration(id: string): Exploration | undefined {
  return explorations.find((e) => e.id === id);
}

/** Parameter default berdasarkan tipe eksplorasi. */
export function defaultParams(type: Exploration['type']): { a: number; b: number; c: number } {
  switch (type) {
    case 'compound-interest':
      return { a: 10000000, b: 6, c: 10 };
    case 'probability':
      return { a: 100, b: 0.5, c: 0 };
    case 'linear-regression':
      return { a: 0, b: 0, c: 0 };
    default:
      return { a: 1, b: 2, c: 0 };
  }
}

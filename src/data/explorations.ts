import type { ElementId, Exploration, Grade } from '@/types/content';

/**
 * Registri eksplorasi interaktif.
 *
 * Ini adalah satu-satunya sumber kebenaran: urutan, pengelompokan kelas, dan
 * metadatanya diatur di sini sehingga halaman `/eksplorasi`, beranda, dan
 * sisipan di halaman materi cukup membaca data ini.
 */
export const explorations: Exploration[] = [
  {
    id: 'eksponen-pertumbuhan',
    title: 'Eksplorasi Pertumbuhan Eksponensial',
    topicId: 'eksponen',
    type: 'function-slider',
    formula: 'exponential',
    grade: 'X',
    element: 'bilangan',
    order: 10,
    description:
      'Ubah nilai awal $a$ dan faktor pengali $b$ pada $f(x)=a\\cdot b^{x}$ untuk melihat perbedaan pertumbuhan ketika $b>1$, $b=1$, dan $0<b<1$.',
    goal: 'Membedakan pertumbuhan, nilai konstan, dan peluruhan dari nilai basis $b$.',
    params: [
      { name: 'a', label: 'Nilai awal a', min: 0.5, max: 5, step: 0.5, value: 1 },
      { name: 'b', label: 'Faktor pengali b', min: 0.25, max: 3, step: 0.05, value: 2 },
    ],
    prompts: {
      predict: 'Sebelum menggeser, tebak: apa yang terjadi pada grafik jika $b$ diperkecil menjadi $0{,}5$?',
      observe: 'Geser $b$ dari $0{,}25$ sampai $3$ dan perhatikan arah serta kecuraman kurva.',
      explain: 'Hubungkan nilai $b$ dengan istilah pertumbuhan ($b>1$), konstan ($b=1$), dan peluruhan ($0<b<1$).',
    },
    cautions: [
      'Mengira grafik memotong sumbu-$x$: nilai $f(x)=a\\cdot b^{x}$ selalu positif.',
      'Lupa bahwa perubahan kecil pada basis berdampak besar pada jangka panjang.',
    ],
    tags: ['eksponen', 'pertumbuhan', 'peluruhan', 'grafik'],
  },
  {
    id: 'kuadrat-parameter',
    title: 'Eksplorasi Parameter Fungsi Kuadrat',
    topicId: 'fungsi-kuadrat',
    type: 'function-slider',
    formula: 'quadratic',
    grade: 'X',
    element: 'aljabar-fungsi',
    order: 20,
    description:
      'Geser nilai $a$, $b$, dan $c$ pada $f(x)=ax^{2}+bx+c$ untuk mengamati pengaruhnya terhadap arah bukaan, sumbu simetri, dan titik puncak parabola.',
    goal: 'Menghubungkan tanda $a$, nilai $b$, dan $c$ dengan bentuk serta posisi parabola.',
    prompts: {
      predict: 'Menurutmu, bagaimana bentuk grafik berubah jika $a$ bernilai negatif?',
      observe: 'Ubah $a$ dan amati titik puncaknya; lalu ubah $c$ dan amati perpotongan dengan sumbu-$y$.',
      explain: 'Rumuskan pengaruh setiap koefisien terhadap bentuk parabola dan nilai diskriminan.',
    },
    cautions: [
      'Menganggap $c$ menentukan titik puncak, padahal $c$ adalah nilai $f(0)$.',
      'Mengira $a$ hanya mengatur lebar, padahal tanda $a$ menentukan arah bukaan.',
    ],
    tags: ['kuadrat', 'parabola', 'titik puncak', 'diskriminan'],
  },
  {
    id: 'fungsi-eksponensial-parameter',
    title: 'Eksplorasi Grafik Fungsi Eksponensial',
    topicId: 'fungsi-eksponensial',
    type: 'function-slider',
    formula: 'exponential',
    grade: 'X',
    element: 'aljabar-fungsi',
    order: 30,
    description:
      'Ubah basis $b$ pada $f(x)=a\\cdot b^{x}$ dan bandingkan grafik untuk $b>1$ (pertumbuhan) dengan $0<b<1$ (peluruhan).',
    goal: 'Membandingkan grafik pertumbuhan dan peluruhan eksponensial beserta asimtotnya.',
    params: [
      { name: 'a', label: 'Koefisien a', min: 0.5, max: 4, step: 0.5, value: 1 },
      { name: 'b', label: 'Basis b', min: 0.25, max: 3, step: 0.05, value: 2 },
    ],
    prompts: {
      predict: 'Untuk $b=0{,}5$, apakah grafik naik atau turun saat $x$ bertambah?',
      observe: 'Bandingkan bentuk grafik untuk $b=2$ dan $b=0{,}5$, lalu perhatikan perilaku di $x$ negatif.',
      explain: 'Jelaskan mengapa grafik selalu mendekati sumbu-$x$ tetapi tidak menyentuhnya.',
    },
    cautions: [
      'Menukar peran basis $b$ dengan koefisien $a$.',
      'Mengira grafik peluruhan memotong sumbu-$x$.',
    ],
    tags: ['eksponensial', 'asimtot', 'peluruhan', 'grafik'],
  },
  {
    id: 'trigonometri-gelombang',
    title: 'Eksplorasi Gelombang Sinus',
    topicId: 'trigonometri',
    type: 'function-slider',
    formula: 'sine',
    grade: 'X',
    element: 'geometri',
    order: 40,
    description:
      'Ubah amplitudo $a$ dan bilangan gelombang $k$ pada $f(x)=a\\sin(kx)$ untuk melihat pengaruhnya pada tinggi dan panjang gelombang.',
    goal: 'Mengaitkan $a$ dengan amplitudo dan $k$ dengan periode grafik sinus.',
    params: [
      { name: 'a', label: 'Amplitudo a', min: 0.5, max: 3, step: 0.1, value: 1 },
      { name: 'k', label: 'Bilangan gelombang k', min: 0.5, max: 3, step: 0.1, value: 1 },
    ],
    prompts: {
      predict: 'Jika $k$ diperbesar, apakah gelombang makin rapat atau makin renggang?',
      observe: 'Geser $k$ dan hitung jarak satu puncak ke puncak berikutnya.',
      explain: 'Verkaitkan $a$ dengan amplitudo dan $k$ dengan periode $\\dfrac{2\\pi}{k}$.',
    },
    cautions: [
      'Menukar peran amplitudo dan periode.',
      'Mengukur periode dari puncak ke lembah, bukan puncak ke puncak.',
    ],
    tags: ['trigonometri', 'sinus', 'amplitudo', 'periode'],
  },
  {
    id: 'barisan-pola',
    title: 'Eksplorasi Pola Barisan dan Deret',
    topicId: 'barisan-deret',
    type: 'sequence',
    grade: 'X',
    element: 'bilangan',
    order: 50,
    description:
      'Bandingkan barisan aritmetika dan geometri: ubah suku awal, beda atau rasio, lalu amati nilai suku dan jumlahnya.',
    goal: 'Membandingkan pola barisan aritmetika dan geometri serta pertumbuhan jumlah sukunya.',
    prompts: {
      predict: 'Barisan mana yang jumlah 10 sukunya lebih besar: aritmetika beda $2$ atau geometri rasio $2$?',
      observe: 'Ubah jenis barisan, suku awal, dan banyak suku; amati tabel serta grafik jumlahnya.',
      explain: 'Jelaskan mengapa jumlah barisan geometri dapat melampaui aritmetika seiring bertambahnya suku.',
    },
    cautions: [
      'Menjumlahkan nilai suku, bukan memperhatikan indeksnya.',
      'Menganggap barisan geometri selalu membesar; jika $0<r<1$ jumlahnya menuju batas tertentu.',
    ],
    tags: ['barisan', 'deret', 'aritmetika', 'geometri'],
  },
  {
    id: 'distribusi-sebaran',
    title: 'Eksplorasi Sebaran dan Pencilan',
    topicId: 'analisis-distribusi-data',
    type: 'distribution',
    grade: 'X',
    element: 'data-peluang',
    order: 60,
    description:
      'Tambahkan atau geser nilai data untuk melihat bagaimana bentuk sebaran dan pencilan memengaruhi mean, median, serta kuartil.',
    goal: 'Melihat bagaimana pencilan memengaruhi mean, median, dan kuartil.',
    prompts: {
      predict: 'Menambah satu nilai yang sangat besar: statistik mana yang paling berubah?',
      observe: 'Tambahkan atau geser nilai ekstrem lalu bandingkan mean dan median.',
      explain: 'Jelaskan mengapa median lebih tahan terhadap pencilan daripada mean.',
    },
    cautions: [
      'Menganggap mean selalu mewakili data dengan baik.',
      'Menghitung kuartil tanpa mengurutkan data lebih dahulu.',
    ],
    tags: ['statistik', 'mean', 'median', 'kuartil', 'pencilan'],
  },
  {
    id: 'bunga-majemuk-sim',
    title: 'Simulasi Bunga Tunggal vs Bunga Majemuk',
    topicId: 'bunga-majemuk',
    type: 'compound-interest',
    featured: true,
    grade: 'XI',
    element: 'bilangan',
    order: 10,
    description:
      'Bandingkan pertumbuhan saldo antara bunga tunggal dan bunga majemuk dengan modal, suku bunga, dan lama menabung yang dapat diatur.',
    goal: 'Membandingkan bunga tunggal dan bunga majemuk serta melihat kapan selisihnya membesar.',
    prompts: {
      predict: 'Pada suku bunga tinggi dan jangka panjang, mana yang tumbuh lebih cepat?',
      observe: 'Ubah modal, suku bunga, dan lama menabung; perhatikan kolom selisih pada tabel.',
      explain: 'Jelaskan mengapa perbedaan keduanya makin besar seiring bertambahnya waktu.',
    },
    cautions: [
      'Menjumlahkan persentase antar periode seolah selalu linear.',
      'Menganggap bunga majemuk sama dengan bunga tunggal untuk jangka pendek.',
    ],
    tags: ['bunga majemuk', 'bunga tunggal', 'investasi'],
  },
  {
    id: 'anuitas-sim',
    title: 'Simulasi Anuitas dan Amortisasi',
    topicId: 'anuitas',
    type: 'compound-interest',
    grade: 'XI',
    element: 'bilangan',
    order: 20,
    description:
      'Atur besar pinjaman, suku bunga, dan lama pinjaman untuk melihat besar angsuran serta komposisi pokok dan bunga pada tabel amortisasi.',
    goal: 'Membaca komposisi pokok dan bunga pada tiap angsuran serta pengaruh suku bunga.',
    prompts: {
      predict: 'Pada angsuran awal, bagian mana yang lebih besar: pokok atau bunga?',
      observe: 'Ubah lama pinjaman dan amati angsuran bulanan serta total bunga.',
      explain: 'Jelaskan mengapa total bunga bertambah saat tenor diperpanjang.',
    },
    cautions: [
      'Menganggap angsuran bulanan sama dengan pokok ditambah bunga yang tetap.',
      'Lupa mengubah suku bunga tahunan menjadi suku bunga bulanan.',
    ],
    tags: ['anuitas', 'amortisasi', 'pinjaman', 'angsuran'],
  },
  {
    id: 'peluang-sim',
    title: 'Simulasi Peluang Empiris vs Teoretis',
    topicId: 'peluang',
    type: 'probability',
    featured: true,
    grade: 'XI',
    element: 'data-peluang',
    order: 30,
    description:
      'Lakukan percobaan pelemparan koin atau dadu berulang kali dan bandingkan peluang empiris dengan peluang teoretis.',
    goal: 'Melihat peluang empiris mendekati peluang teoretis saat percobaan diperbanyak.',
    prompts: {
      predict: 'Jika koin dilempar 50 kali, apakah pasti tepat 25 muncul angka?',
      observe: 'Jalankan simulasi beberapa kali dengan jumlah berbeda dan bandingkan dengan garis teoretis.',
      explain: 'Hubungkan hasil pengamatan dengan Hukum Bilangan Besar.',
    },
    cautions: [
      'Menyimpulkan peluang hanya dari sedikit percobaan.',
      'Menganggap hasil selalu persis rata karena peluangnya seperdua.',
    ],
    tags: ['peluang', 'empiris', 'teoretis', 'koin', 'dadu'],
  },
  {
    id: 'regresi-sim',
    title: 'Visualisasi Regresi Linear',
    topicId: 'regresi',
    type: 'linear-regression',
    featured: true,
    grade: 'XI',
    element: 'data-peluang',
    order: 40,
    description:
      'Tambahkan titik data pada diagram pencar, lalu amati garis regresi dan nilai koefisien yang dihasilkan.',
    goal: 'Mengaitkan arah korelasi dengan tanda gradien dan melihat pengaruh pencilan.',
    prompts: {
      predict: 'Jika satu titik jauh dari pola ditambahkan, ke arah mana garis regresi bergeser?',
      observe: 'Tambahkan titik acak, lalu tambahkan satu titik ekstrem dan amati nilai $r$ serta garisnya.',
      explain: 'Jelaskan hubungan arah sebaran, tanda gradien, dan nilai korelasi $r$.',
    },
    cautions: [
      'Membaca korelasi sebagai hubungan sebab-akibat.',
      'Menganggap $r$ besar berarti garis pasti tepat untuk memprediksi.',
    ],
    tags: ['regresi', 'korelasi', 'diagram pencar', 'pencilan'],
  },
  {
    id: 'transformasi-fungsi-sim',
    title: 'Simulasi Transformasi Fungsi',
    topicId: 'transformasi-fungsi',
    type: 'function-slider',
    formula: 'transform',
    grade: 'XI',
    element: 'aljabar-fungsi',
    order: 50,
    description:
      'Geser $a$, $h$, dan $k$ pada $y=a\\,f(x-h)+k$ dengan $f(x)=x^{2}$ untuk mengamati translasi, dilatasi, dan pencerminan.',
    goal: 'Memisahkan pengaruh $a$ (dilatasi/pencerminan), $h$ (translasi horizontal), dan $k$ (translasi vertikal).',
    params: [
      { name: 'a', label: 'Faktor a', min: -2, max: 2, step: 0.1, value: 1 },
      { name: 'h', label: 'Geser horizontal h', min: -4, max: 4, step: 0.5, value: 0 },
      { name: 'k', label: 'Geser vertikal k', min: -6, max: 6, step: 0.5, value: 0 },
    ],
    prompts: {
      predict: 'Jika $h$ bertambah, ke arah mana grafik bergeser?',
      observe: 'Ubah $h$ dan $k$, amati puncak parabola; lalu ubah $a$ dan perhatikan lebar serta arah bukaan.',
      explain: 'Tuliskan urutan transformasi dari $f(x)$ menjadi $a\\,f(x-h)+k$.',
    },
    cautions: [
      'Membalik arah pergeseran horizontal: $x-h$ menggeser ke kanan untuk $h$ positif.',
      'Menerapkan translasi dan dilatasi tanpa memperhatikan urutannya.',
    ],
    tags: ['transformasi', 'translasi', 'dilatasi', 'pencerminan'],
  },
  {
    id: 'peluang-bersyarat-sim',
    title: 'Simulasi Peluang Bersyarat',
    topicId: 'peluang-bersyarat',
    type: 'conditional-probability',
    grade: 'XII',
    element: 'data-peluang',
    order: 10,
    description:
      'Atur peluang kejadian $A$ dan $B$ untuk melihat hubungan $P(A\\cap B)$, $P(A\\mid B)$, dan $P(B\\mid A)$ beserta pemeriksaan dengan tabel dua arah.',
    goal: 'Menghitung peluang bersyarat dan mengeceknya dengan tabel dua arah serta rumus Bayes.',
    prompts: {
      predict: 'Jika $P(B\\mid A)$ tinggi, apakah $P(A\\mid B)$ juga pasti tinggi?',
      observe: 'Ubah $P(A)$, $P(B\\mid A)$, dan $P(B\\mid A^{c})$; bandingkan nilai $P(A\\mid B)$ hasil perhitungan.',
      explain: 'Jelaskan mengapa $P(A\\mid B)$ dan $P(B\\mid A)$ dapat berbeda.',
    },
    cautions: [
      'Menyamakan $P(A\\mid B)$ dengan $P(B\\mid A)$.',
      'Lupa memperhitungkan peluang kejadian komplemen.',
    ],
    tags: ['peluang bersyarat', 'bayes', 'tabel dua arah'],
  },
];

const byId = new Map<string, Exploration>(explorations.map((e) => [e.id, e]));

export function getExploration(id: string): Exploration | undefined {
  return byId.get(id);
}

const GRADE_RANK: Record<Grade, number> = { X: 0, XI: 1, XII: 2 };

/** Semua eksplorasi berstatus lengkap, diurutkan berdasarkan kelas lalu `order`. */
export function orderedExplorations(): Exploration[] {
  return explorations
    .filter((e) => (e.status ?? 'lengkap') === 'lengkap')
    .slice()
    .sort(
      (a, b) =>
        (GRADE_RANK[a.grade ?? 'X'] ?? 9) - (GRADE_RANK[b.grade ?? 'X'] ?? 9) ||
        (a.order ?? 999) - (b.order ?? 999) ||
        a.title.localeCompare(b.title),
    );
}

/** Eksplorasi per kelas. */
export function explorationsByGrade(grade: Grade): Exploration[] {
  return orderedExplorations().filter((e) => e.grade === grade);
}

/** Eksplorasi per elemen kurikulum. */
export function explorationsByElement(element: ElementId): Exploration[] {
  return orderedExplorations().filter((e) => e.element === element);
}

/** Eksplorasi unggulan untuk beranda. */
export function featuredExplorations(): Exploration[] {
  return explorations.filter((e) => e.featured);
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
    case 'sequence':
      return { a: 2, b: 2, c: 10 };
    case 'distribution':
      return { a: 0, b: 0, c: 0 };
    case 'conditional-probability':
      return { a: 0.5, b: 0.5, c: 0.5 };
    default:
      return { a: 1, b: 2, c: 0 };
  }
}

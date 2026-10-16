// Potongan 4/5 registri eksplorasi interaktif.
//
// Berkas-berkas ini digabung berurutan oleh `src/data/explorations.ts`.
// Urutan entri dipertahankan (beranda memilih 3 eksplorasi unggulan pertama),
// jadi jangan menyusun ulang tanpa memeriksa komponen beranda.

import type { Exploration } from '@/types/content';

export const explorationsBagian4: Exploration[] = [
  {
    id: 'ketaksamaan-tanda-kuadrat',
    title: 'Eksplorasi Tanda Fungsi Kuadrat',
    topicId: 'ketaksamaan',
    type: 'function-slider',
    formula: 'quadratic',
    grade: 'X',
    element: 'aljabar-fungsi',
    description:
      'Geser $a$, $b$, dan $c$ pada $f(x)=ax^{2}+bx+c$ untuk melihat di mana grafik berada di atas atau di bawah sumbu-$x$, lalu kaitkan dengan tanda ketaksamaan.',
    goal: 'Menentukan daerah penyelesaian ketaksamaan kuadrat dari posisi grafik terhadap sumbu-$x$.',
    params: [
      { name: 'a', label: 'Koefisien a', min: -3, max: 3, step: 0.1, value: 1 },
      { name: 'b', label: 'Koefisien b', min: -6, max: 6, step: 0.5, value: -2 },
      { name: 'c', label: 'Konstanta c', min: -6, max: 6, step: 0.5, value: -3 },
    ],
    prompts: {
      predict: 'Untuk $f(x)>0$, pada selang $x$ mana saja kamu perkirakan grafik berada di atas sumbu-$x$?',
      observe: 'Ubah $c$ lalu $a$, dan tandai titik potong sumbu-$x$ serta bagian grafik yang bernilai positif dan negatif.',
      explain: 'Jelaskan bagaimana akar dan tanda $a$ menentukan himpunan penyelesaian ketaksamaan kuadrat.',
    },
    cautions: [
      'Menjawab $x$ di antara akar untuk $f(x)>0$ tanpa memeriksa arah bukaan parabola.',
      'Mengira tanda fungsi berubah di titik yang bukan akar.',
    ],
    tags: ['ketaksamaan', 'kuadrat', 'tanda', 'sumbu-x'],
    level: 'dasar',
    estimatedMinutes: 12,
  },
  {
    id: 'kombinatorika-hitung',
    title: 'Eksplorasi Pencacahan dan Peluang',
    topicId: 'kombinatorika-lanjut',
    type: 'probability',
    grade: 'XII',
    element: 'data-peluang',
    description:
      'Jalankan percobaan berulang lalu bandingkan frekuensi hasil dengan peluang teoretis hasil pencacahan.',
    goal: 'Mengaitkan banyak cara pencacahan dengan nilai peluang teoretis suatu kejadian.',
    prompts: {
      predict: 'Jika banyak percobaan diperbesar, apakah frekuensi relatif makin dekat dengan peluang hasil pencacahan?',
      observe: 'Ubah banyak percobaan dan jenis percobaan, lalu bandingkan peluang empiris dengan nilai teoretis.',
      explain: 'Jelaskan mengapa pencacahan yang tepat menentukan nilai peluang teoretis yang dituju oleh frekuensi relatif.',
    },
    cautions: [
      'Menyimpulkan peluang hanya dari sedikit percobaan.',
      'Menghitung peluang tanpa menghitung banyak anggota ruang sampel lebih dahulu.',
    ],
    tags: ['kombinatorika', 'pencacahan', 'peluang', 'frekuensi relatif'],
    level: 'cakap',
    estimatedMinutes: 15,
  },
  {
    id: 'pemodelan-model-data',
    title: 'Eksplorasi Menyetel Model Data',
    topicId: 'pemodelan-fungsi',
    type: 'function-slider',
    formula: 'quadratic',
    grade: 'XI',
    element: 'aljabar-fungsi',
    description:
      'Geser koefisien $a$, $b$, dan $c$ pada $f(x)=ax^{2}+bx+c$ untuk mencocokkan kurva dengan pola data, lalu nilai seberapa dekat model dengan titik-titik pengamatan.',
    goal: 'Memilih koefisien model kuadrat yang paling sesuai dengan data pengamatan.',
    params: [
      { name: 'a', label: 'Koefisien a', min: -2, max: 2, step: 0.1, value: 0.5 },
      { name: 'b', label: 'Koefisien b', min: -8, max: 8, step: 0.5, value: 2 },
      { name: 'c', label: 'Konstanta c', min: -6, max: 6, step: 0.5, value: -3 },
    ],
    prompts: {
      predict: 'Menurutmu, koefisien mana yang paling menentukan tinggi puncak model terhadap data?',
      observe: 'Ubah satu koefisien sekaligus dan amati apakah kurva makin dekat dengan titik-titik data.',
      explain: 'Jelaskan bagaimana kamu memutuskan sebuah model sudah cukup mewakili data.',
    },
    cautions: [
      'Menyetel semua koefisien sekaligus sehingga tidak tahu mana yang berpengaruh.',
      'Menganggap model cocok hanya karena melewati satu titik data.',
    ],
    tags: ['pemodelan', 'kuadrat', 'data', 'grafik'],
    level: 'cakap',
    estimatedMinutes: 14,
  },
  {
    id: 'permutasi-kombinasi-hitung',
    title: 'Eksplorasi Permutasi, Kombinasi, dan Peluang',
    topicId: 'permutasi-kombinasi',
    type: 'probability',
    grade: 'XII',
    element: 'data-peluang',
    description:
      'Bandingkan peluang yang dihitung dengan permutasi dan kombinasi, lalu periksa kecocokannya lewat simulasi berulang.',
    goal: 'Menghubungkan aturan permutasi dan kombinasi dengan nilai peluang suatu kejadian.',
    prompts: {
      predict: 'Untuk susunan yang sama, apakah urutan memengaruhi banyak cara? Berapa peluangnya?',
      observe: 'Jalankan simulasi beberapa kali dan bandingkan frekuensi relatif dengan hasil hitung kombinasi.',
      explain: 'Jelaskan kapan memakai permutasi dan kapan memakai kombinasi dalam menghitung peluang.',
    },
    cautions: [
      'Memakai permutasi padahal urutan tidak diperhatikan.',
      'Menganggap peluang empiris harus persis sama dengan peluang teoretis.',
    ],
    tags: ['permutasi', 'kombinasi', 'peluang', 'pencacahan'],
    level: 'cakap',
    estimatedMinutes: 15,
  },
  {
    id: 'logaritma-invers-grafik',
    title: 'Eksplorasi Eksponen dan Logaritma sebagai Invers',
    topicId: 'persamaan-eksponen-logaritma',
    type: 'function-slider',
    formula: 'exponential',
    grade: 'X',
    element: 'aljabar-fungsi',
    description:
      'Geser nilai awal $a$ dan basis $b$ pada $f(x)=a\\cdot b^{x}$, lalu bayangkan grafik $y=\\log_{b}x$ sebagai pencerminannya terhadap garis $y=x$.',
    goal: 'Melihat hubungan invers antara fungsi eksponensial dan logaritma melalui grafik.',
    params: [
      { name: 'a', label: 'Nilai awal a', min: 0.5, max: 4, step: 0.5, value: 1 },
      { name: 'b', label: 'Basis b', min: 0.25, max: 3, step: 0.05, value: 2 },
    ],
    prompts: {
      predict: 'Jika $b$ diperbesar, apakah grafik logaritma makin curam atau makin landai?',
      observe: 'Ubah basis $b$ dan amati titik $f(0)=a$ serta pasangan titik yang bertukar peran pada grafik inversnya.',
      explain: 'Jelaskan mengapa $\\log_{b}b=1$ dan $\\log_{b}1=0$ dari pencerminan grafik terhadap $y=x$.',
    },
    cautions: [
      'Mengira grafik logaritma terdefinisi untuk $x$ negatif.',
      'Menukar peran basis dan hasil pada penulisan $\\log_{b}x$.',
    ],
    tags: ['logaritma', 'eksponen', 'invers', 'grafik'],
    level: 'cakap',
    estimatedMinutes: 13,
  },
  {
    id: 'pinjaman-angsuran-sim',
    title: 'Simulasi Pertumbuhan Kewajiban Pinjaman',
    topicId: 'pinjaman-investasi',
    type: 'compound-interest',
    grade: 'XII',
    element: 'bilangan',
    description:
      'Atur besar pinjaman, suku bunga, dan lama waktu untuk melihat bagaimana total kewajiban bertambah bila bunga berbunga, lalu bandingkan dengan bunga tunggal sederhana.',
    goal: 'Membandingkan pertumbuhan kewajiban pada bunga tunggal dan bunga majemuk, serta pengaruh lama waktu terhadap selisihnya.',
    prompts: {
      predict: 'Bila utang tidak dilunasi, apakah total kewajiban tumbuh lurus atau makin cepat seiring waktu?',
      observe: 'Ubah suku bunga dan lama waktu, lalu bandingkan total kewajiban pada bunga tunggal dan bunga majemuk.',
      explain: 'Jelaskan mengapa selisih bunga tunggal dan bunga majemuk melebar seiring bertambahnya waktu.',
    },
    cautions: [
      'Menyamakan suku bunga tahunan dengan suku bunga per periode.',
      'Menganggap pertumbuhan kewajiban selalu linear terhadap waktu.',
    ],
    tags: ['pinjaman', 'bunga majemuk', 'kewajiban', 'bunga tunggal'],
    level: 'cakap',
    estimatedMinutes: 15,
  },
  {
    id: 'pertidaksamaan-daerah-sim',
    title: 'Simulasi Daerah Penyelesaian',
    topicId: 'sistem-pertidaksamaan',
    type: 'linear-system',
    grade: 'X',
    element: 'aljabar-fungsi',
    description:
      'Ubah koefisien dua pertidaksamaan linear dan amati irisan setengah bidangnya sebagai daerah penyelesaian.',
    goal: 'Menentukan daerah penyelesaian sistem pertidaksamaan linear dari irisan setengah bidang.',
    prompts: {
      predict: 'Jika tanda pertidaksamaan diganti, apakah daerah penyelesaian berpindah ke sisi lain garis?',
      observe: 'Ubah koefisien dan tanda, lalu perhatikan sisi mana yang menjadi irisan semua setengah bidang.',
      explain: 'Jelaskan mengapa daerah penyelesaian adalah irisan semua setengah bidang, bukan gabungannya.',
    },
    cautions: [
      'Menentukan sisi setengah bidang tanpa menguji satu titik.',
      'Menganggap daerah penyelesaian adalah gabungan, bukan irisan, setengah bidang.',
    ],
    tags: ['pertidaksamaan', 'sistem', 'daerah penyelesaian', 'setengah bidang'],
    level: 'cakap',
    estimatedMinutes: 14,
  },
  {
    id: 'statistik-sebaran-ukuran',
    title: 'Eksplorasi Sebaran dan Ukuran Pemusatan',
    topicId: 'statistik-dalam-kehidupan',
    type: 'distribution',
    grade: 'X',
    element: 'data-peluang',
    description:
      'Ubah atau geser nilai data, termasuk satu pencilan, lalu bandingkan bagaimana mean, median, dan kuartil bergerak.',
    goal: 'Membandingkan kepekaan mean dan median terhadap pencilan pada suatu sebaran data.',
    prompts: {
      predict: 'Jika satu nilai sangat besar ditambahkan, ukuran mana yang paling berubah?',
      observe: 'Geser nilai ekstrem lalu bandingkan posisi mean, median, dan kuartil pada diagram sebaran.',
      explain: 'Jelaskan mengapa median lebih tahan terhadap pencilan daripada mean.',
    },
    cautions: [
      'Menghitung kuartil tanpa mengurutkan data terlebih dahulu.',
      'Menganggap mean selalu mewakili data dengan baik meski ada pencilan.',
    ],
    tags: ['statistik', 'mean', 'median', 'kuartil', 'pencilan'],
    level: 'dasar',
    estimatedMinutes: 14,
  },
  {
    id: 'teori-bilangan-pola',
    title: 'Eksplorasi Pola Bilangan dan Keterbagian',
    topicId: 'teori-bilangan',
    type: 'sequence',
    grade: 'X',
    element: 'bilangan',
    description:
      'Amati pola bilangan pada barisan, lalu selidiki keterbagian suku-sukunya sebagai petunjuk struktur bilangan.',
    goal: 'Menemukan pola bilangan yang mendukung pemeriksaan keterbagian dan FPB.',
    prompts: {
      predict: 'Sebelum mengubah nilai, tebak: apakah selisih antar suku pada pola ini selalu tetap?',
      observe: 'Ubah suku awal dan langkah, lalu catat selisih atau rasio antar suku yang berurutan.',
      explain: 'Jelaskan bagaimana pola bilangan membantu memeriksa keterbagian suatu suku.',
    },
    cautions: [
      'Menyimpulkan pola hanya dari dua suku pertama.',
      'Menganggap setiap pola bilangan selalu aritmetika.',
    ],
    tags: ['teori bilangan', 'pola', 'keterbagian', 'barisan'],
    level: 'dasar',
    estimatedMinutes: 12,
  },
  {
    id: 'transformasi-geometri-matriks',
    title: 'Eksplorasi Transformasi Geometri dengan Matriks',
    topicId: 'transformasi-geometri',
    type: 'matrix',
    grade: 'XII',
    element: 'geometri',
    description:
      'Isi satu atau dua matriks $2\\times 2$, hitung determinannya, lalu amati bagaimana matriks memindahkan titik pada bidang.',
    goal: 'Menghubungkan operasi dan determinan matriks dengan jenis transformasi geometri.',
    prompts: {
      predict: 'Apakah hasil kali $AB$ selalu sama dengan $BA$ saat kedua matriks memindahkan bangun?',
      observe: 'Tukar urutan matriks dan bandingkan hasil akhir pemindahan titik serta determinannya.',
      explain: 'Jelaskan bagaimana nilai determinan berkaitan dengan perubahan luas bangun.',
    },
    cautions: [
      'Menganggap perkalian matriks selalu komutatif.',
      'Mengabaikan pengaruh determinan terhadap luas bayangan bangun.',
    ],
    tags: ['transformasi geometri', 'matriks', 'determinan', 'luas'],
    level: 'cakap',
    estimatedMinutes: 15,
  },
  {
    id: 'turunan-garis-singgung-sim',
    title: 'Simulasi Gradien Garis Singgung',
    topicId: 'turunan',
    subject: 'matematika-lanjut',
    type: 'derivative',
    grade: 'XII',
    element: 'kalkulus',
    description:
      'Geser titik singgung pada kurva $f(x)=x^{3}-3x$ dan amati bagaimana gradien serta persamaan garis singgungnya berubah di setiap titik.',
    goal: 'Memaknai turunan sebagai gradien garis singgung yang berubah dari titik ke titik.',
    prompts: {
      predict: 'Di titik mana garis singgung menjadi mendatar?',
      observe: 'Geser titik singgung dan catat kapan gradien positif, nol, serta negatif.',
      explain: 'Hubungkan tanda gradien dengan naik atau turunnya kurva di sekitar titik itu.',
    },
    cautions: [
      'Menganggap gradien garis singgung sama di semua titik kurva.',
      'Mengira garis singgung selalu hanya menyentuh kurva di satu titik.',
    ],
    tags: ['turunan', 'garis singgung', 'gradien', 'laju perubahan'],
    level: 'cakap',
    estimatedMinutes: 13,
  },
  // ---------------- Eksplorasi peta tanda, logaritma, pencacahan, amortisasi ----------------
  {
    id: 'ketaksamaan-daerah-tanda',
    title: 'Eksplorasi Peta Tanda dan Daerah Penyelesaian',
    topicId: 'ketaksamaan',
    type: 'sign-chart',
    grade: 'X',
    element: 'aljabar-fungsi',
    order: 26,
    description:
      'Atur koefisien $ax^{2}+bx+c$ atau akar-akar bentuk rasional $\\dfrac{(x-p)(x-q)}{x-r}$, lalu amati tanda fungsi pada tiap selang garis bilangan dan daerah yang memenuhi $f(x)>0$ atau $f(x)<0$.',
    goal: 'Menentukan daerah penyelesaian pertidaksamaan kuadrat dan rasional dari peta tanda pada garis bilangan.',
    prompts: {
      predict: 'Untuk $f(x)>0$ pada kuadrat dengan $a>0$, di selang mana saja kamu perkirakan tandanya positif?',
      observe: 'Ubah tanda $a$ lalu geser akar-akarnya; catat kapan tanda tiap selang berubah dan di titik mana.',
      explain: 'Jelaskan mengapa tanda fungsi hanya dapat berubah di akar (atau kutub), dan bagaimana bentuk selang penyelesaian ditentukan.',
    },
    cautions: [
      'Menandai selang penyelesaian tanpa memeriksa tanda di titik uji.',
      'Menganggap tanda berubah di setiap titik, padahal hanya berubah di akar atau kutub.',
      'Lupa bahwa titik kutub rasional tidak pernah termasuk daerah penyelesaian.',
    ],
    tags: ['ketaksamaan', 'peta tanda', 'garis bilangan', 'daerah penyelesaian'],
    level: 'dasar',
    estimatedMinutes: 13,
  },
];

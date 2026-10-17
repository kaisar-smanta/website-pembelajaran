// Potongan 6/6 registri eksplorasi interaktif.
//
// Berkas-berkas ini digabung berurutan oleh `src/data/explorations.ts`. Potongan
// ini memuat tipe baru `piecewise` dan lima eksplorasi yang memakai ulang tipe
// simulasi yang sudah ada (A12), sehingga pemiliknya cukup satu berkas.

import type { Exploration } from '@/types/content';

export const explorationsBagian6: Exploration[] = [
  // ---------------- Tipe baru: piecewise (topik fungsi nilai mutlak) ----------------
  {
    id: 'piecewise-nilai-mutlak',
    title: 'Eksplorasi Fungsi Piecewise dan Nilai Mutlak',
    topicId: 'fungsi-nilai-mutlak-piecewise',
    type: 'piecewise',
    subject: 'matematika-lanjut',
    grade: 'XI',
    element: 'aljabar-fungsi',
    order: 65,
    description:
      'Atur titik sambung $c$, kemiringan kiri $m_1$, kemiringan kanan $m_2$, dan geseran vertikal $k$ pada fungsi piecewise dua potong. Amati kapan kedua potongan bertemu mulus di $c$ dan kapan muncul lompatan.',
    goal: 'Menemukan kapan fungsi piecewise kontinu di titik sambung serta bagaimana lompatan bergantung pada kemiringan dan letak titik sambung.',
    params: [
      { name: 'c', label: 'Titik sambung c', min: -4, max: 4, step: 1, value: 0 },
      { name: 'm1', label: 'Kemiringan kiri m1', min: -3, max: 3, step: 0.5, value: -1 },
      { name: 'm2', label: 'Kemiringan kanan m2', min: -3, max: 3, step: 0.5, value: 1 },
      { name: 'k', label: 'Geseran vertikal k', min: -3, max: 3, step: 0.5, value: 0 },
    ],
    prompts: {
      predict:
        'Jika $m_1=-1$, $m_2=1$, dan $k=0$, apakah grafik tetap kontinu ketika titik sambung $c$ digeser menjauhi nol?',
      observe:
        'Ubah $c$ sedikit demi sedikit sambil mencatat nilai dari kiri dan nilai di titik sambung. Lalu ubah $k$ dan periksa apakah besar lompatannya ikut berubah.',
      explain:
        'Jelaskan mengapa lompatan di titik sambung sama dengan $(m_2-m_1)c$ dan mengapa geseran $k$ tidak mengubah besar lompatan itu.',
    },
    cautions: [
      'Menganggap setiap fungsi piecewise selalu diskontinu, padahal grafiknya dapat menyambung mulus.',
      'Menilai fungsi tepat di $x=c$ memakai potongan kiri, padahal titik ujung kanan yang tertutup.',
      'Menyamakan geseran vertikal $k$ dengan besar lompatan, padahal keduanya berbeda.',
    ],
    tags: ['piecewise', 'nilai mutlak', 'kontinuitas', 'titik sambung', 'lompatan'],
    level: 'cakap',
    estimatedMinutes: 14,
  },
  // ---------------- Lima eksplorasi yang memakai ulang tipe simulasi (A12) ----------------
  {
    id: 'lingkaran-busur-juring',
    title: 'Eksplorasi Pendalaman Busur dan Juring',
    topicId: 'lingkaran',
    type: 'circle',
    grade: 'XI',
    element: 'geometri',
    order: 18,
    description:
      'Geser jari-jari $r$ dan sudut pusat $\\theta$, lalu bandingkan panjang busur serta luas juring dengan keliling dan luas lingkaran. Selidiki bagaimana keduanya berubah ketika $r$ atau $\\theta$ digandakan.',
    goal: 'Menemukan bahwa panjang busur sebanding dengan $r\\theta$ dan luas juring sebanding dengan $r^{2}\\theta$, sehingga penggandaan jari-jari menggandakan busur dan melipatgandakan luas juring.',
    prompts: {
      predict:
        'Jika jari-jari digandakan tetapi sudut pusat tetap, apakah panjang busur dan luas juring ikut menjadi dua kali?',
      observe:
        'Ubah $r$ dan $\\theta$ satu per satu; catat panjang busur dan luas juring pada readout, lalu bandingkan dengan keliling dan luas lingkaran.',
      explain:
        'Jelaskan mengapa busur sebanding dengan $r\\theta$ sedangkan luas juring sebanding dengan $r^{2}\\theta$.',
    },
    cautions: [
      'Menukar panjang busur dengan tali busur.',
      'Mengira luas juring hanya bergantung pada sudut, tanpa memperhatikan jari-jari.',
      'Mencampur satuan derajat dan radian saat memakai rumus $\\theta$.',
    ],
    tags: ['lingkaran', 'busur', 'juring', 'sudut pusat', 'perbandingan'],
    level: 'cakap',
    estimatedMinutes: 12,
  },
  {
    id: 'matriks-invers-determinan',
    title: 'Eksplorasi Determinan dan Ketersediaan Invers',
    topicId: 'matriks',
    type: 'matrix',
    grade: 'XI',
    element: 'aljabar-fungsi',
    order: 37,
    description:
      'Ubah unsur matriks dan amati nilai determinannya. Saat determinan bernilai nol, matriks kehilangan inversnya. Bandingkan dengan matriks yang determinannya tak nol agar peran determinan pada rumus invers terlihat jelas.',
    goal: 'Menghubungkan nilai determinan dengan ketersediaan invers serta memahami peran determinan pada rumus invers matriks $2\\times 2$.',
    prompts: {
      predict: 'Berapa nilai determinan yang membuat sebuah matriks kehilangan inversnya?',
      observe:
        'Atur unsur matriks sampai determinannya nol, lalu coba hitung inversnya. Catat apa yang terjadi pada rumus invers.',
      explain:
        'Jelaskan mengapa pembagian oleh determinan membuat invers tidak terdefinisi saat determinan bernilai nol.',
    },
    cautions: [
      'Menukar letak unsur diagonal saat menuliskan matriks adjoin sehingga tanda invers keliru.',
      'Menganggap matriks dengan determinan negatif otomatis tidak punya invers.',
      'Menghitung determinan tanpa memperhatikan urutan unsur pada hasil kali diagonal.',
    ],
    tags: ['matriks', 'determinan', 'invers', 'adjoin'],
    level: 'cakap',
    estimatedMinutes: 14,
  },
  {
    id: 'logaritma-basis-grafik',
    title: 'Eksplorasi Basis Logaritma dan Bentuk Grafik',
    topicId: 'fungsi-logaritma',
    type: 'logarithm',
    subject: 'matematika-lanjut',
    grade: 'XI',
    element: 'aljabar-fungsi',
    order: 61,
    description:
      'Geser basis $b$ dan bandingkan grafik $y=b^{x}$ dengan $y=\\log_{b}x$. Amati bagaimana nilai basis menentukan arah dan kecuraman kedua kurva serta posisi pencerminannya terhadap garis $y=x$.',
    goal: 'Menghubungkan nilai basis dengan arah dan kecuraman grafik eksponen serta logaritma.',
    prompts: {
      predict:
        'Jika basis diperkecil dari $2$ menjadi $0{,}5$, apakah grafik $y=\\log_{b}x$ tetap naik atau berubah menjadi turun?',
      observe:
        'Ubah basis dan catat arah kedua kurva, titik potong, serta posisi pencerminan terhadap garis $y=x$.',
      explain:
        'Jelaskan mengapa basis $b>1$ memberi fungsi naik sedangkan $0<b<1$ memberi fungsi turun, dan mengapa $b=1$ tidak sah.',
    },
    cautions: [
      'Memakai $b=1$ atau $b\\le0$ yang tidak sah untuk logaritma.',
      'Membaca grafik log seolah garis lurus di semua skala.',
      'Mengira penggantian basis hanya menggeser grafik tanpa mengubah kecuraman.',
    ],
    tags: ['logaritma', 'basis', 'grafik', 'fungsi invers'],
    level: 'cakap',
    estimatedMinutes: 12,
  },
  {
    id: 'sistem-tiga-kasus',
    title: 'Eksplorasi Tiga Kemungkinan Solusi Sistem Linear',
    topicId: 'sistem-pertidaksamaan',
    type: 'linear-system',
    grade: 'X',
    element: 'aljabar-fungsi',
    order: 6,
    description:
      'Ubah koefisien dua persamaan linear dan amati apakah kedua garis berpotongan di satu titik, sejajar, atau berimpit. Hubungkan ketiga kasus itu dengan banyaknya solusi dan nilai determinan.',
    goal: 'Membedakan sistem dengan satu solusi, tak hingga solusi, dan tanpa solusi dari posisi dua garis serta nilai determinan.',
    prompts: {
      predict:
        'Jika kedua garis sejajar, berapa banyak solusi yang dimiliki sistem? Bagaimana dengan dua garis yang berimpit?',
      observe:
        'Atur koefisien agar kedua garis berpotongan, lalu sejajar, lalu berimpit; catat banyak solusi dan nilai determinan pada readout.',
      explain:
        'Jelaskan mengapa determinan nol dapat berarti tak hingga solusi atau tanpa solusi, bergantung pada posisi garis.',
    },
    cautions: [
      'Mengira setiap sistem linear selalu punya tepat satu solusi.',
      'Menukar kasus berimpit (tak hingga solusi) dengan sejajar (tanpa solusi).',
      'Salah tanda saat memindahkan suku ke ruas lain.',
    ],
    tags: ['sistem linear', 'solusi', 'determinan', 'garis'],
    level: 'cakap',
    estimatedMinutes: 13,
  },
  {
    id: 'normal-luas-selang',
    title: 'Eksplorasi Luas Selang dan Aturan Empiris',
    topicId: 'distribusi-normal',
    type: 'normal-distribution',
    subject: 'matematika-lanjut',
    grade: 'XII',
    element: 'data-peluang',
    order: 51,
    description:
      'Atur rata-rata, simpangan baku, dan batas selang, lalu baca luas peluang pada readout. Geser batas ke $\\mu\\pm\\sigma$, $\\mu\\pm2\\sigma$, dan $\\mu\\pm3\\sigma$, lalu bandingkan hasilnya dengan aturan empiris $68\\%$, $95\\%$, dan $99{,}7\\%$.',
    goal: 'Membandingkan luas selang dari simulator dengan taksiran aturan empiris serta mengenali kapan keduanya cukup dekat.',
    prompts: {
      predict:
        'Untuk selang $\\mu\\pm\\sigma$, apakah luas dari simulator persis $68\\%$ atau hanya dekat?',
      observe:
        'Geser batas bawah dan atas ke $\\mu\\pm\\sigma$, $\\mu\\pm2\\sigma$, lalu $\\mu\\pm3\\sigma$; bandingkan luas readout dengan angka aturan empiris.',
      explain:
        'Jelaskan mengapa aturan empiris hanya taksiran sedangkan simulator memberi nilai yang lebih halus.',
    },
    cautions: [
      'Menganggap $68$, $95$, dan $99{,}7$ sebagai nilai pasti.',
      'Menukar luas ekor dengan luas di antara dua batas.',
      'Menerapkan aturan empiris pada data yang tidak normal.',
    ],
    tags: ['distribusi normal', 'aturan empiris', 'luas selang', 'skor baku'],
    level: 'mahir',
    estimatedMinutes: 15,
  },
];

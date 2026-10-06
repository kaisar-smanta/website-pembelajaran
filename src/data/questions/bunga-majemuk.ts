import type { Question } from '@/types/content';

export const bungaMajemukQuestions: Question[] = [
  {
    id: 'bm-01',
    topicId: 'bunga-majemuk',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt:
      'Modal Rp5.000.000 ditabung dengan bunga majemuk 8% per tahun. Saldo setelah 5 tahun adalah …',
    options: [
      { key: 'A', text: 'Rp7.000.000,00' },
      { key: 'B', text: 'Rp6.802.444,80' },
      { key: 'C', text: 'Rp7.346.640,38' },
      { key: 'D', text: 'Rp8.000.000,00' },
    ],
    answer: 'C',
    explanation:
      'Gunakan $M_n = M_0(1+i)^n$ dengan $M_0 = 5.000.000$, $i = 0{,}08$, dan $n = 5$: $M_5 = 5.000.000(1{,}08)^5 = 5.000.000(1{,}469328) \\approx \\text{Rp}7.346.640,38$. Opsi A memakai penalaran bunga tunggal, opsi B keliru memakai $n = 4$.',
    hints: [
      'Substitusi ke $M_n = M_0(1+i)^n$ dengan $n=5$.',
      'Jangan menambahkan bunga lurus $8\\% \\times 5$; itu bunga tunggal.',
    ],
    competencies: ['rumus bunga majemuk'],
  },
  {
    id: 'bm-02',
    topicId: 'bunga-majemuk',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Suku bunga nominal 12% per tahun dihitung bulanan. Suku bunga per bulan adalah …',
    options: [
      { key: 'A', text: '$12\\%$' },
      { key: 'B', text: '$6\\%$' },
      { key: 'C', text: '$1\\%$' },
      { key: 'D', text: '$0{,}12\\%$' },
    ],
    answer: 'C',
    explanation:
      'Suku bunga per periode $i = \\dfrac{j}{m} = \\dfrac{0{,}12}{12} = 0{,}01$, yaitu $1\\%$ per bulan. Memakai langsung $12\\%$ untuk perhitungan bulanan adalah kesalahan mencampur nominal dan suku bunga per periode.',
    hints: ['Bagi suku bunga nominal dengan banyaknya periode per tahun.'],
    competencies: ['suku bunga per periode'],
  },
  {
    id: 'bm-03',
    topicId: 'bunga-majemuk',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Suku bunga nominal 12% per tahun dihitung bulanan. Suku bunga efektif per tahun adalah …',
    options: [
      { key: 'A', text: '$12{,}00\\%$' },
      { key: 'B', text: '$12{,}36\\%$' },
      { key: 'C', text: '$12{,}68\\%$' },
      { key: 'D', text: '$13{,}00\\%$' },
    ],
    answer: 'C',
    explanation:
      '$i_{\\text{efektif}} = \\left(1+\\dfrac{j}{m}\\right)^{m}-1 = (1{,}01)^{12}-1 \\approx 0{,}126825 = 12{,}68\\%$. Opsi A adalah nominal, opsi B muncul bila dihitung per semester, bukan bulanan.',
    hints: ['Gunakan $m = 12$ karena bunga dihitung tiap bulan.'],
    competencies: ['suku bunga efektif'],
  },
  {
    id: 'bm-04',
    topicId: 'bunga-majemuk',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Modal Rp5.000.000 dibungakan 8% per tahun selama 5 tahun. Selisih saldo antara bunga majemuk dan bunga tunggal adalah …',
    options: [
      { key: 'A', text: 'Rp0,00' },
      { key: 'B', text: 'Rp346.640,38' },
      { key: 'C', text: 'Rp400.000,00' },
      { key: 'D', text: 'Rp2.000.000,00' },
    ],
    answer: 'B',
    explanation:
      'Bunga majemuk: $5.000.000(1{,}08)^5 \\approx \\text{Rp}7.346.640,38$. Bunga tunggal: $5.000.000(1+0{,}08\\cdot5) = \\text{Rp}7.000.000$. Selisihnya Rp346.640,38, yaitu bunga atas bunga. Opsi A keliru menganggap keduanya sama.',
    hints: ['Hitung kedua saldo lalu kurangkan.'],
    competencies: ['membandingkan bunga tunggal dan majemuk'],
  },
  {
    id: 'bm-05',
    topicId: 'bunga-majemuk',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Modal Rp1.000.000 dibungakan majemuk 10% per tahun. Hitung saldo setelah 2 tahun (tulis dalam rupiah).',
    answer: 'Rp1.210.000',
    acceptedAnswers: ['Rp1.210.000,00', '1.210.000', '1210000', 'Rp 1.210.000'],
    explanation:
      '$M_2 = 1.000.000(1{,}1)^2 = 1.000.000(1{,}21) = \\text{Rp}1.210.000$.',
    hints: ['Hitung dulu $(1{,}1)^2 = 1{,}21$.'],
    competencies: ['rumus bunga majemuk'],
  },
  {
    id: 'bm-06',
    topicId: 'bunga-majemuk',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Modal Rp3.000.000 dibungakan majemuk 1,5% per bulan selama 8 bulan. Hitung saldo akhir dan bulatkan ke rupiah terdekat.',
    answer: 'Rp3.379.478',
    acceptedAnswers: ['Rp3.379.477,76', '3.379.478', '3379478', 'Rp 3.379.478'],
    explanation:
      '$M_8 = 3.000.000(1{,}015)^8 = 3.000.000(1{,}126493) \\approx \\text{Rp}3.379.478$.',
    hints: ['Karena dihitung per bulan, gunakan $i = 0{,}015$ dan $n = 8$.'],
    competencies: ['rumus bunga majemuk', 'suku bunga per periode'],
  },
  {
    id: 'bm-07',
    topicId: 'bunga-majemuk',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Modal Rp2.000.000 dibungakan majemuk 6% per tahun selama 4 tahun. Hitung saldo akhir dan bulatkan ke rupiah terdekat.',
    answer: 'Rp2.524.954',
    acceptedAnswers: ['Rp2.524.953,92', '2.524.954', '2524954', 'Rp 2.524.954'],
    explanation:
      '$M_4 = 2.000.000(1{,}06)^4 = 2.000.000(1{,}262477) \\approx \\text{Rp}2.524.954$.',
    hints: ['Hitung $(1{,}06)^4$ dengan teliti sebelum dikalikan.'],
    competencies: ['rumus bunga majemuk', 'pemodelan keuangan'],
  },
  {
    id: 'bm-08',
    topicId: 'bunga-majemuk',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Jelaskan dengan contoh angka mengapa saldo bunga majemuk selalu lebih besar daripada bunga tunggal untuk modal dan suku bunga yang sama, serta kapan keduanya bernilai sama.',
    answer:
      'Bunga majemuk dihitung dari saldo terbaru yang sudah memuat bunga sebelumnya, sedangkan bunga tunggal selalu dihitung dari modal awal. Contoh: modal Rp5.000.000 pada 8% per tahun selama 5 tahun. Bunga tunggal menghasilkan $5.000.000(1+0{,}08\\cdot5) = \\text{Rp}7.000.000$, sedangkan bunga majemuk menghasilkan $5.000.000(1{,}08)^5 \\approx \\text{Rp}7.346.640$. Selisih Rp346.640 berasal dari bunga atas bunga. Keduanya sama hanya jika $n = 1$ (atau suku bunganya nol), sebab saat itu belum ada bunga yang dimajemukkan.',
    explanation:
      'Penilaian menekankan penjelasan mekanisme bunga atas bunga dan syarat kesamaan ($n=1$ atau $i=0$), didukung contoh perhitungan yang benar.',
    competencies: ['membandingkan model', 'penalaran keuangan'],
  },
  {
    id: 'bm-09',
    topicId: 'bunga-majemuk',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Suatu modal ditabung dengan bunga majemuk 8% per tahun. Tentukan perkiraan lama waktu agar saldo menjadi dua kali lipat, dan jelaskan cara memeriksanya tanpa kalkulator logaritma.',
    answer:
      'Perlu mencari $n$ terkecil dengan $1{,}08^n \\ge 2$. Menghitung bertahap: $1{,}08^9 \\approx 1{,}999 < 2$ dan $1{,}08^{10} \\approx 2{,}159 > 2$. Jadi saldo baru menjadi dua kali lipat setelah **10 tahun**; pada akhir tahun ke-9 nilainya masih sedikit di bawah dua kali. Pemeriksaan dilakukan dengan perkalian berulang atau tabel nilai $(1{,}08)^n$ tanpa perlu logaritma.',
    explanation:
      'Kunci jawaban menuntut pemodelan pertidaksamaan $(1{,}08)^n \\ge 2$ dan pemeriksaan numerik bertahap, bukan sekadar menebak.',
    competencies: ['pemodelan eksponen', 'penyelesaian numerik'],
  },
  {
    id: 'bm-10',
    topicId: 'bunga-majemuk',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Dua bank menawarkan suku bunga nominal yang sama, yaitu 12% per tahun. Bank A menghitung bunga setiap semester, Bank B setiap bulan. Bandingkan suku bunga efektif keduanya dan jelaskan mengapa hasilnya berbeda.',
    answer:
      'Bank A: $i = 6\\%$ dengan $m = 2$, sehingga $i_{\\text{efektif}} = (1{,}06)^2 - 1 = 0{,}1236 = 12{,}36\\%$. Bank B: $i = 1\\%$ dengan $m = 12$, sehingga $i_{\\text{efektif}} = (1{,}01)^{12} - 1 \\approx 0{,}126825 = 12{,}68\\%$. Bank B memiliki suku bunga efektif lebih besar karena bunga dimajemukkan lebih sering (12 kali per tahun), sehingga efek bunga atas bunga lebih kuat; makin sering pemajemukan, makin besar suku bunga efektif.',
    explanation:
      'Penilaian mencakup perhitungan kedua suku bunga efektif dan alasan konseptual mengapa frekuensi pemajemukan menaikkan suku bunga efektif.',
    competencies: ['suku bunga efektif', 'analisis kritis'],
  },
];

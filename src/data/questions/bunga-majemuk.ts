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
      'Gunakan $M_n = M_0(1+i)^n$ dengan $M_0 = 5.000.000$, $i = 0{,}08$, dan $n = 5$: $M_5 = 5.000.000(1{,}08)^5 = 5.000.000(1{,}469328) \\approx \\text{Rp}7.346.640,38$ (opsi C). Opsi A memakai bunga tunggal $5.000.000(1+0{,}08\\cdot5)$. Opsi B keliru memakai $n = 4$. Opsi D membulatkan saldo $7{,}35$ juta menjadi $8$ juta secara berlebihan.',
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
      { key: 'C', text: '$0{,}12\\%$' },
      { key: 'D', text: '$1\\%$' },
    ],
    answer: 'D',
    explanation:
      'Suku bunga per periode $i = \\dfrac{j}{m} = \\dfrac{0{,}12}{12} = 0{,}01$, yaitu $1\\%$ per bulan (opsi D). Opsi A ($12\\%$) mencampur suku bunga nominal tahunan dengan suku bunga bulanan. Opsi B ($6\\%$) keliru membagi dengan $2$, seolah periode semesteran. Opsi C ($0{,}12\\%$) salah menempatkan koma desimal.',
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
      { key: 'C', text: '$13{,}00\\%$' },
      { key: 'D', text: '$12{,}68\\%$' },
    ],
    answer: 'D',
    explanation:
      '$i_{\\text{efektif}} = \\left(1+\\dfrac{j}{m}\\right)^{m}-1 = (1{,}01)^{12}-1 \\approx 0{,}126825 = 12{,}68\\%$ (opsi D). Opsi A ($12{,}00\\%$) adalah suku bunga nominal, bukan efektif. Opsi B ($12{,}36\\%$) muncul bila pemajemukan semesteran ($m=2$). Opsi C ($13{,}00\\%$) sekadar membulatkan ke atas tanpa menghitung.',
    hints: [
      'Gunakan $m = 12$ karena bunga dihitung tiap bulan.',
      'Rumus suku bunga efektif: $\\left(1+\\dfrac{j}{m}\\right)^{m}-1$ dengan $j=0{,}12$ dan $m=12$.',
    ],
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
      { key: 'A', text: 'Rp2.000.000,00' },
      { key: 'B', text: 'Rp400.000,00' },
      { key: 'C', text: 'Rp0,00' },
      { key: 'D', text: 'Rp346.640,38' },
    ],
    answer: 'D',
    explanation:
      'Bunga majemuk: $5.000.000(1{,}08)^5 \\approx \\text{Rp}7.346.640,38$. Bunga tunggal: $5.000.000(1+0{,}08\\cdot5) = \\text{Rp}7.000.000$. Selisihnya Rp346.640,38 (opsi D), yaitu bunga atas bunga. Opsi A ($2.000.000$) keliru memakai suku bunga nol. Opsi B ($400.000$) adalah total bunga tunggal, bukan selisihnya. Opsi C ($0$) keliru menganggap kedua jenis bunga selalu sama.',
    hints: [
      'Hitung kedua saldo lalu kurangkan.',
      'Bunga tunggal memakai $M_0(1+i\\,n)$, sedangkan bunga majemuk memakai $M_0(1+i)^n$.',
    ],
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
    acceptedAnswers: ['Rp1.210.000,00', 'Rp1.210.000', '1.210.000,00', '1210000,00', '1.210.000', '1210000', 'Rp 1.210.000'],
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
    acceptedAnswers: ['Rp3.379.477,76', 'Rp3.379.478,00', '3.379.478,00', '3379478,00', '3.379.478', '3379478', 'Rp 3.379.478'],
    explanation:
      '$M_8 = 3.000.000(1{,}015)^8 = 3.000.000(1{,}126493) \\approx \\text{Rp}3.379.478$.',
    hints: [
      'Karena dihitung per bulan, gunakan $i = 0{,}015$ dan $n = 8$.',
      'Hitung $(1{,}015)^8$ dengan teliti sebelum dikalikan $3.000.000$.',
    ],
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
    acceptedAnswers: ['Rp2.524.953,92', 'Rp2.524.954,00', '2.524.954,00', '2524954,00', '2.524.954', '2524954', 'Rp 2.524.954'],
    explanation:
      '$M_4 = 2.000.000(1{,}06)^4 = 2.000.000(1{,}262477) \\approx \\text{Rp}2.524.954$.',
    hints: [
      'Hitung $(1{,}06)^4$ dengan teliti sebelum dikalikan.',
      'Substitusi $M_0=2.000.000$, $i=0{,}06$, dan $n=4$ ke $M_n=M_0(1+i)^n$.',
    ],
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
    hints: [
      'Bandingkan dasar perhitungan bunga majemuk (saldo terbaru) dengan bunga tunggal (modal awal).',
      'Tunjukkan dengan contoh $n=1$ bahwa keduanya sama, lalu untuk $n>1$ bahwa majemuk lebih besar.',
    ],
    competencies: ['membandingkan model', 'penalaran keuangan'],
    rubric: [
      'Menjelaskan majemuk dihitung dari saldo terbaru, tunggal dari modal awal',
      'Memberikan contoh angka yang benar untuk kedua jenis bunga',
      'Menyebut keduanya sama hanya saat $n=1$ atau $i=0$',
    ],
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
    hints: [
      'Cari $n$ terkecil yang memenuhi $(1{,}08)^{n} \\ge 2$ dengan mencoba nilai $n$ secara berurutan.',
      'Uji $(1{,}08)^9$ dan $(1{,}08)^{10}$, lalu bandingkan dengan $2$.',
    ],
    competencies: ['pemodelan eksponen', 'penyelesaian numerik'],
    rubric: [
      'Memodelkan pertidaksamaan $(1{,}08)^{n}\\ge2$',
      'Memeriksa bertahap hingga $1{,}08^{9}<2$ dan $1{,}08^{10}>2$',
      'Menyimpulkan lama waktu sekitar $10$ tahun',
    ],
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
    hints: [
      'Hitung suku bunga efektif tiap bank dengan rumus $(1+i)^{m}-1$ sesuai frekuensi pemajemukannya.',
      'Bank A memakai $i=6\\%$ dan $m=2$; Bank B memakai $i=1\\%$ dan $m=12$.',
    ],
    competencies: ['suku bunga efektif', 'analisis kritis'],
    rubric: [
      'Menghitung $i_{\\text{efektif}}$ Bank A $=12{,}36\\%$',
      'Menghitung $i_{\\text{efektif}}$ Bank B $\\approx12{,}68\\%$',
      'Menjelaskan makin sering pemajemukan makin besar suku bunga efektif',
    ],
  },
  {
    id: 'bm-11',
    topicId: 'bunga-majemuk',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Modal Rp4.000.000 akan dibungakan majemuk triwulanan (bunga dibagi rata dalam setahun) selama 2 tahun. (a) Jika suku bunga nominal 12% per tahun, hitung saldo akhirnya. (b) Jika peminjam menginginkan saldo akhir tepat Rp5.200.000, tentukan suku bunga nominal per tahun yang diperlukan (bulatkan dua angka di belakang koma).',
    answer:
      '(a) Suku bunga per triwulan $i=\\dfrac{0{,}12}{4}=0{,}03$ dan banyak periode $n=4\\times2=8$, sehingga $M_8=4.000.000(1{,}03)^8=4.000.000(1{,}266770)\\approx\\text{Rp}5.067.080{,}33$. (b) Perlu $4.000.000\\left(1+\\dfrac{j}{4}\\right)^8=5.200.000$, yaitu $\\left(1+\\dfrac{j}{4}\\right)^8=1{,}3$. Ambil akar pangkat delapan: $1+\\dfrac{j}{4}=(1{,}3)^{1/8}\\approx1{,}033339$, sehingga $j=4(1{,}033339-1)\\approx0{,}133357$, yaitu sekitar $13{,}34\\%$ per tahun. Jadi suku bunga nominal harus dinaikkan dari $12\\%$ menjadi sekitar $13{,}34\\%$.',
    explanation:
      'Kunci: mengubah suku bunga nominal menjadi suku bunga per triwulan, memakai $M_n=M_0(1+i)^n$ pada bagian (a), lalu menyelesaikan persamaan eksponen dengan menarik akar pangkat delapan untuk mencari nominal yang diminta pada bagian (b).',
    hints: [
      'Bagi nominal dengan 4 dan kalikan lama tahun dengan 4 untuk memperoleh banyak periode.',
      'Untuk mencari nominal, selesaikan $\\left(1+\\dfrac{j}{4}\\right)^8=1{,}3$ dengan menarik akar pangkat delapan.',
    ],
    competencies: ['suku bunga per periode', 'rumus bunga majemuk', 'persamaan eksponen', 'pemodelan'],
    rubric: [
      'Menggunakan $i=3\\%$ dan $n=8$ untuk menghitung saldo bagian (a)',
      'Menyusun $\\left(1+\\dfrac{j}{4}\\right)^{8}=1{,}3$ pada bagian (b)',
      'Menarik akar pangkat delapan dan memperoleh $j\\approx13{,}34\\%$',
    ],
  },
  {
    id: 'bm-12',
    topicId: 'bunga-majemuk',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Tanpa menghitung saldo penuh, buktikan bahwa untuk $i>0$ dan bilangan bulat $n\\ge2$ berlaku $(1+i)^n > 1+ni$. Jelaskan kaitannya dengan saldo bunga majemuk yang selalu melebihi bunga tunggal.',
    answer:
      'Dengan ekspansi binomial, $(1+i)^n = 1+ni+\\binom{n}{2}i^2+\\binom{n}{3}i^3+\\cdots+i^n$. Karena $i>0$ dan $n\\ge2$, semua suku mulai dari $\\binom{n}{2}i^2$ positif, sehingga $(1+i)^n = 1+ni+(\\text{suku positif}) > 1+ni$. Sisi kanan $1+ni$ adalah faktor pertumbuhan bunga tunggal, sedangkan sisi kiri adalah faktor pertumbuhan bunga majemuk. Jadi untuk $n\\ge2$ saldo bunga majemuk selalu lebih besar daripada bunga tunggal, dan kelebihan itu berasal dari suku-suku bunga atas bunga.',
    explanation:
      'Kunci: menggunakan ekspansi binomial dan menunjukkan suku-suku tambahan positif, lalu menafsirkan kedua sisi sebagai faktor bunga majemuk dan bunga tunggal.',
    hints: [
      'Kembangkan $(1+i)^n$ dengan teorema binomial.',
      'Sisi kanan $1+ni$ adalah faktor pertumbuhan bunga tunggal.',
    ],
    competencies: ['rumus bunga majemuk', 'ekspansi binomial', 'pembuktian'],
    rubric: [
      'Mengembangkan $(1+i)^{n}$ dengan teorema binomial',
      'Menunjukkan suku tambahan positif sehingga $(1+i)^{n}>1+ni$',
      'Menafsirkan kedua sisi sebagai faktor bunga majemuk dan bunga tunggal',
    ],
  },
  {
    id: 'bm-13',
    topicId: 'bunga-majemuk',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Suku bunga nominal $12\\%$ per tahun dimajemukkan $m$ kali setahun. (a) Hitung suku bunga efektif tahunan untuk $m=1$, $m=2$, $m=4$, dan $m=12$. (b) Jelaskan pola yang muncul dan mengapa demikian. (c) Ramalkan nilai batas suku bunga efektif ketika $m$ makin besar tak terhingga, lalu tafsirkan maknanya.',
    answer:
      '(a) Dengan $i_{\\text{efektif}}=\\left(1+\\dfrac{0{,}12}{m}\\right)^{m}-1$: untuk $m=1$ diperoleh $12{,}00\\%$; $m=2$: $(1{,}06)^2-1=12{,}36\\%$; $m=4$: $(1{,}03)^4-1\\approx12{,}56\\%$; $m=12$: $(1{,}01)^{12}-1\\approx12{,}68\\%$. (b) Nilainya bertambah besar ketika $m$ bertambah, sebab makin sering bunga dimajemukkan, makin banyak kesempatan bunga menghasilkan bunga. Namun pertambahannya makin kecil (dari $0{,}36$ poin ke $0{,}20$ lalu $0{,}12$), sehingga menuju suatu batas. (c) Nilai batasnya adalah $e^{0{,}12}-1\\approx0{,}127497$, yaitu sekitar $12{,}75\\%$ per tahun; ini adalah suku bunga efektif bila bunga dimajemukkan secara kontinu. Jadi memperbanyak frekuensi pemajemukan tidak dapat menaikkan suku bunga efektif melewati batas ini.',
    explanation:
      'Kunci: menghitung beberapa suku bunga efektif, mengenali pola naik yang melandai, lalu menghubungkan batasnya dengan $e^{0{,}12}-1$ yang muncul ketika $\\left(1+\\dfrac{0{,}12}{m}\\right)^{m}\\to e^{0{,}12}$.',
    hints: [
      'Gunakan bilangan Euler: $\\left(1+\\dfrac{r}{m}\\right)^{m}\\to e^{r}$ untuk $m\\to\\infty$.',
      'Perhatikan bahwa selisih antar nilai makin kecil, tanda menuju batas.',
    ],
    competencies: ['suku bunga efektif', 'limit eksponen', 'penalaran'],
    rubric: [
      'Menghitung $i_{\\text{efektif}}$ untuk $m=1,2,4,12$ sebagai $12{,}00\\%$, $12{,}36\\%$, $12{,}56\\%$, $12{,}68\\%$',
      'Mengenali pola naik yang melandai seiring bertambahnya frekuensi $m$',
      'Menghubungkan batas dengan $e^{0{,}12}-1\\approx12{,}75\\%$ memakai $\\left(1+\\dfrac{r}{m}\\right)^{m}\\to e^{r}$',
      'Menafsirkan batas itu sebagai suku bunga efektif pemajemukan kontinu',
    ],
  },
  {
    id: 'bm-14',
    topicId: 'bunga-majemuk',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Pak Dedi menabung Rp2.000.000 dengan bunga majemuk $5\\%$ per tahun. Saldo setelah $3$ tahun adalah …',
    options: [
      { key: 'A', text: 'Rp2.300.000,00' },
      { key: 'B', text: 'Rp2.315.250,00' },
      { key: 'C', text: 'Rp2.310.000,00' },
      { key: 'D', text: 'Rp2.250.000,00' },
    ],
    answer: 'B',
    explanation:
      'Gunakan $M_n=M_0(1+i)^n$: $M_3=2.000.000(1{,}05)^3=2.000.000(1{,}157625)=\\text{Rp}2.315.250$ (opsi B). Opsi A memakai bunga tunggal $2.000.000(1+0{,}05\\cdot3)=\\text{Rp}2.300.000$. Opsi C ($2.310.000$) menambahkan bunga hanya dua periode. Opsi D ($2.250.000$) memakai lima kali bunga sederhana $50.000$, mengabaikan bunga atas bunga.',
    hints: [
      'Substitusikan $i=0{,}05$ dan $n=3$ ke $M_n=M_0(1+i)^n$.',
      'Hitung $(1{,}05)^3=1{,}157625$ terlebih dahulu.',
    ],
    competencies: ['rumus bunga majemuk', 'kontekstual'],
  },
  {
    id: 'bm-15',
    topicId: 'bunga-majemuk',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Populasi harimau di sebuah kawasan konservasi diperkirakan $1.000$ ekor dan menyusut $20\\%$ setiap tahun. Dengan model peluruhan majemuk, tentukan perkiraan populasi setelah $3$ tahun.',
    answer: '512',
    acceptedAnswers: ['512', '512 ekor'],
    explanation:
      'Setiap tahun populasi menjadi $80\\%$ dari tahun sebelumnya, sehingga $P_3=1.000(1-0{,}20)^3=1.000(0{,}8)^3=1.000(0{,}512)=512$ ekor.',
    hints: [
      'Menyusut $20\\%$ berarti tiap tahun tersisa $80\\%$, jadi faktornya $0{,}8$.',
      'Gunakan $P_n=P_0(1-r)^n$ dengan $P_0=1.000$, $r=0{,}2$, dan $n=3$.',
    ],
    competencies: ['pemodelan peluruhan', 'kontekstual'],
  },
];

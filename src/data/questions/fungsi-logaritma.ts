import type { Question } from '@/types/content';

export const fungsiLogaritmaQuestions: Question[] = [
  {
    id: 'flg-01',
    topicId: 'fungsi-logaritma',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Bentuk eksponen $2^{5}=32$ dapat dituliskan sebagai logaritma …',
    options: [
      { key: 'A', text: '$\\log_{2}32=5$' },
      { key: 'B', text: '$\\log_{5}32=2$' },
      { key: 'C', text: '$\\log_{2}5=32$' },
      { key: 'D', text: '$\\log_{32}2=5$' },
    ],
    answer: 'A',
    explanation:
      'Dari $b^{y}=x$ diperoleh $\\log_{b}x=y$, sehingga $2^{5}=32$ menjadi $\\log_{2}32=5$ (A). Opsi B menukar posisi basis dan hasil sehingga keliru menaruh $5$ sebagai basis; opsi C menganggap pangkat sebagai numerus; opsi D menempatkan hasil $32$ sebagai basis, padahal basis tetap $2$.',
    hints: [
      'Basis tetap di bawah, hasil masuk ke numerus, dan pangkat menjadi nilai logaritma.',
      'Uji dengan definisi: $\\log_{b}x=y$ berarti $b^{y}=x$.',
      'Contoh kecil: $3^{2}=9$ setara dengan $\\log_{3}9=2$, jadi posisi basis dan hasil seperti itu.',
    ],
    competencies: ['konversi bentuk eksponen ke logaritma'],
  },
  {
    id: 'flg-02',
    topicId: 'fungsi-logaritma',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Nilai dari $\\log_{2}\\dfrac{1}{8}$ adalah …',
    options: [
      { key: 'A', text: '$-3$' },
      { key: 'B', text: '$3$' },
      { key: 'C', text: '$-\\dfrac{1}{3}$' },
      { key: 'D', text: '$\\dfrac{1}{8}$' },
    ],
    answer: 'A',
    explanation:
      'Tulis $\\dfrac{1}{8}=2^{-3}$, sehingga $\\log_{2}\\dfrac{1}{8}=-3$ (A). Opsi B salah tanda karena menganggap pangkatnya positif; opsi C membalik nilai menjadi $-\\dfrac{1}{3}$; opsi D keliru menyamakan nilai logaritma dengan numerusnya.',
    hints: [
      'Tanyakan: $2$ dipangkatkan berapa agar hasilnya $\\dfrac{1}{8}$?',
      'Ingat bahwa $\\dfrac{1}{8}=2^{-3}$, sehingga pangkatnya bernilai negatif.',
    ],
    competencies: ['nilai logaritma', 'pangkat negatif'],
  },
  {
    id: 'flg-03',
    topicId: 'fungsi-logaritma',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'konsep',
    prompt: 'Tentukan nilai $\\log_{10}1000$.',
    answer: '3',
    explanation: 'Karena $10^{3}=1000$, maka $\\log_{10}1000=3$.',
    hints: [
      'Tulis $1000$ sebagai pangkat basis $10$.',
      'Karena $10^{3}=1000$, pangkat itu jugalah nilai logaritmanya.',
      'Nilai logaritma sama dengan banyak angka nol yang mengikuti $1$ pada $1000$.',
    ],
    competencies: ['nilai logaritma basis 10'],
  },
  {
    id: 'flg-04',
    topicId: 'fungsi-logaritma',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Hitunglah $\\log_{2}64$.',
    table: {
      caption: 'Beberapa pangkat dari $2$.',
      headers: ['n', '2^{n}'],
      rows: [
        ['1', '2'],
        ['2', '4'],
        ['3', '8'],
        ['4', '16'],
        ['5', '32'],
      ],
      math: true,
    },
    answer: '6',
    explanation: 'Karena $2^{6}=64$, maka $\\log_{2}64=6$.',
    hints: [
      'Hitung $2^{1},2^{2},2^{3},\\dots$ sampai mencapai $64$.',
      'Hitung berapa kali faktor $2$ harus dikalikan agar hasilnya $64$.',
    ],
    competencies: ['nilai logaritma'],
  },
  {
    id: 'flg-05',
    topicId: 'fungsi-logaritma',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Domain dari fungsi $f(x)=\\log_{3}(x-2)$ adalah …',
    options: [
      { key: 'A', text: '$x>2$' },
      { key: 'B', text: '$x\\geq2$' },
      { key: 'C', text: '$x<2$' },
      { key: 'D', text: '$x\\neq2$' },
    ],
    answer: 'A',
    explanation:
      'Numerus harus positif: $x-2>0$, sehingga $x>2$ (A). Opsi B keliru memasukkan $x=2$ karena nilai $0$ tidak terdefinisi dalam logaritma; opsi C justru mengambil daerah numerus negatif; opsi D hanya mengecualikan $x=2$ tetapi tetap mengizinkan $x<2$ yang membuat numerus negatif.',
    hints: [
      'Syarat numerus adalah lebih besar dari nol, bukan sekadar tidak sama dengan nol.',
      'Susun pertidaksamaan $x-2>0$ untuk memperoleh batas domainnya.',
      'Karena $x-2$ harus positif, batasnya bukan $x=2$, melainkan nilai yang lebih besar darinya.',
    ],
    competencies: ['domain fungsi logaritma'],
  },
  {
    id: 'flg-06',
    topicId: 'fungsi-logaritma',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Dengan perubahan basis, nilai $\\log_{4}8$ adalah …',
    options: [
      { key: 'A', text: '$\\frac{3}{2}$' },
      { key: 'B', text: '$\\frac{2}{3}$' },
      { key: 'C', text: '$2$' },
      { key: 'D', text: '$3$' },
    ],
    answer: 'A',
    explanation:
      '$\\log_{4}8=\\dfrac{\\log_{2}8}{\\log_{2}4}=\\dfrac{3}{2}$ (A). Opsi B membalik pecahan menjadi $\\frac{2}{3}$; opsi C langsung memakai $\\log_{2}4=2$ sebagai hasil; opsi D memakai $\\log_{2}8=3$ tanpa membaginya dengan $\\log_{2}4$.',
    hints: [
      'Ubah kedua bilangan ke basis $2$ lebih dahulu.',
      'Bentuk $\\log_{4}8$ menjadi pembagian dua logaritma basis $2$.',
    ],
    competencies: ['perubahan basis', 'nilai logaritma'],
  },
  {
    id: 'flg-07',
    topicId: 'fungsi-logaritma',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Sederhanakan $\\log_{2}12+\\log_{2}6-\\log_{2}9$.',
    answer: '3',
    explanation:
      'Gabungkan dengan sifat penjumlahan dan pengurangan: $\\log_{2}\\!\\left(\\dfrac{12\\cdot6}{9}\\right)=\\log_{2}8=3$.',
    hints: [
      'Penjumlahan logaritma berarti perkalian numerus, pengurangan berarti pembagian.',
      'Hitung $\\dfrac{12\\cdot6}{9}$ lebih dahulu.',
    ],
    competencies: ['sifat logaritma'],
  },
  {
    id: 'flg-08',
    topicId: 'fungsi-logaritma',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Tentukan $x$ yang memenuhi $\\log_{2}(x-1)=3$.',
    answer: '9',
    explanation:
      'Ubah ke bentuk eksponen: $x-1=2^{3}=8$, sehingga $x=9$. Syarat numerus $x-1=8>0$ terpenuhi.',
    hints: [
      'Bentuk $\\log_{2}(x-1)=3$ setara dengan $x-1=2^{3}$.',
      'Setelah menemukan $x$, periksa apakah numerusnya positif.',
    ],
    competencies: ['persamaan logaritma sederhana'],
  },
  {
    id: 'flg-09',
    topicId: 'fungsi-logaritma',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt: 'Asimtot tegak grafik $f(x)=\\log_{2}(x-3)+1$ adalah …',
    options: [
      { key: 'A', text: '$x=3$' },
      { key: 'B', text: '$x=-3$' },
      { key: 'C', text: '$x=1$' },
      { key: 'D', text: '$x=0$' },
    ],
    answer: 'A',
    explanation:
      'Asimtot terjadi saat numerus nol, yaitu $x-3=0$, sehingga $x=3$ (A). Opsi B salah tanda karena memakai $x+3$; opsi C membaca konstanta $+1$ sebagai pergeseran horizontal; opsi D mengabaikan pergeseran horizontal dan tetap memakai asimtot asal $x=0$.',
    hints: [
      'Asimtot tegak ditentukan oleh numerus yang bernilai nol.',
      'Konstanta $+1$ di luar logaritma menggeser grafik secara vertikal, bukan memindahkan asimtot.',
    ],
    competencies: ['transformasi grafik logaritma', 'asimtot tegak'],
  },
  {
    id: 'flg-10',
    topicId: 'fungsi-logaritma',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Taraf intensitas bunyi didefinisikan $L=10\\log_{10}\\!\\left(\\dfrac{I}{I_{0}}\\right)$ desibel dengan $I_{0}=10^{-12}\\ \\text{W/m}^{2}$. Sebuah sumber bunyi menghasilkan intensitas $I=10^{-4}\\ \\text{W/m}^{2}$. (a) Hitung taraf intensitasnya. (b) Tentukan perkiraan kenaikan taraf bila intensitasnya menjadi dua kali lipat, dengan $\\log_{10}2\\approx0{,}30$.',
    answer:
      '(a) Rasio intensitasnya $\\dfrac{I}{I_{0}}=\\dfrac{10^{-4}}{10^{-12}}=10^{8}$, sehingga $L=10\\log_{10}(10^{8})=10\\cdot8=80$ dB. (b) Kenaikannya $\\Delta L=10\\log_{10}\\!\\left(\\dfrac{2I}{I}\\right)=10\\log_{10}2\\approx10\\cdot0{,}30=3{,}0$ dB. Jadi menggandakan intensitas fisik hanya menambah sekitar $3$ dB.',
    explanation:
      'Kunci menekankan pembentukan rasio $I/I_{0}$, penggunaan $\\log_{10}(10^{n})=n$, dan sifat penjumlahan logaritma saat intensitas dikalikan.',
    hints: [
      'Bentuk rasio $\\dfrac{I}{I_{0}}$ lebih dahulu, lalu sederhanakan menjadi pangkat $10$.',
      'Gunakan $\\log_{10}(10^{n})=n$ dan $\\log_{10}2\\approx0{,}30$.',
    ],
    competencies: ['skala logaritmik', 'sifat logaritma', 'pemodelan'],
    rubric: [
      'Membentuk rasio intensitas dengan benar',
      'Menggunakan sifat $\\log_{10}(10^{n})=n$',
      'Menghitung taraf intensitas dalam desibel',
      'Menafsirkan kenaikan sekitar 3 dB saat intensitas digandakan',
    ],
  },
  {
    id: 'flg-11',
    topicId: 'fungsi-logaritma',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Tentukan himpunan penyelesaian $\\log_{2}x+\\log_{2}(x-2)=3$. Tuliskan syarat numerus dan periksa setiap kandidat solusi.',
    answer:
      'Syarat numerus: $x>0$ dan $x-2>0$, sehingga $x>2$. Gabungkan dengan sifat perkalian: $\\log_{2}\\big(x(x-2)\\big)=3$, sehingga $x(x-2)=2^{3}=8$. Jadi $x^{2}-2x-8=0$, atau $(x-4)(x+2)=0$, dengan kandidat $x=4$ dan $x=-2$. Kandidat $x=-2$ ditolak karena tidak memenuhi $x>2$. Jadi himpunan penyelesaiannya $\\{4\\}$.',
    explanation:
      'Kunci: menuliskan syarat numerus, menggabungkan logaritma, mengubah ke bentuk eksponen, menyelesaikan persamaan kuadrat, lalu menyaring kandidat.',
    hints: [
      'Tulis dulu syarat $x>0$ dan $x-2>0$.',
      'Gabungkan kedua logaritma menjadi logaritma dari hasil kali, lalu ubah ke bentuk eksponen.',
    ],
    competencies: ['persamaan logaritma', 'syarat numerus', 'penalaran aljabar'],
    rubric: [
      'Menuliskan syarat numerus positif',
      'Menggabungkan logaritma dengan sifat perkalian',
      'Menyelesaikan persamaan kuadrat yang muncul',
      'Menyaring kandidat dengan syarat numerus',
    ],
  },
  {
    id: 'flg-12',
    topicId: 'fungsi-logaritma',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Skala Richter menuliskan magnitudo gempa sebagai $M=\\log_{10}\\!\\left(\\dfrac{A}{A_{0}}\\right)$, dengan $A$ amplitudo gelombang dan $A_{0}$ amplitudo acuan. Jika magnitudo sebuah gempa naik $2$ satuan, berapa kali lipat amplitudonya bertambah? Jelaskan langkahmu.',
    answer:
      'Misalkan magnitudo awal $M_{1}=\\log_{10}\\!\\left(\\dfrac{A_{1}}{A_{0}}\\right)$ dan magnitudo akhir $M_{2}=\\log_{10}\\!\\left(\\dfrac{A_{2}}{A_{0}}\\right)$ dengan $M_{2}-M_{1}=2$. Selisihnya $M_{2}-M_{1}=\\log_{10}\\!\\left(\\dfrac{A_{2}}{A_{0}}\\right)-\\log_{10}\\!\\left(\\dfrac{A_{1}}{A_{0}}\\right)=\\log_{10}\\!\\left(\\dfrac{A_{2}}{A_{1}}\\right)$. Jadi $\\log_{10}\\!\\left(\\dfrac{A_{2}}{A_{1}}\\right)=2$, sehingga $\\dfrac{A_{2}}{A_{1}}=10^{2}=100$. Amplitudonya bertambah $100$ kali lipat.',
    explanation:
      'Kunci menekankan sifat pengurangan logaritma untuk memperoleh rasio amplitudo, lalu mengubahnya kembali ke bentuk eksponen.',
    hints: [
      'Gunakan sifat pengurangan: $\\log_{10}a-\\log_{10}b=\\log_{10}\\dfrac{a}{b}$.',
      'Setelah memperoleh $\\log_{10}\\dfrac{A_{2}}{A_{1}}=2$, ubah ke bentuk eksponen.',
    ],
    competencies: ['skala logaritmik', 'pemodelan', 'sifat logaritma'],
    rubric: [
      'Menuliskan selisih magnitudo sebagai selisih logaritma',
      'Menyederhanakan menjadi logaritma rasio amplitudo',
      'Mengubah ke bentuk eksponen dengan benar',
      'Menafsirkan hasil sebagai kelipatan amplitudo',
    ],
  },
  {
    id: 'flg-13',
    topicId: 'fungsi-logaritma',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Diberikan $f(x)=\\log_{2}(6-2x)$. (a) Tentukan domain fungsi. (b) Tentukan persamaan asimtot tegaknya. (c) Jelaskan mengapa grafik fungsi ini turun ketika $x$ bertambah.',
    answer:
      '(a) Numerus harus positif: $6-2x>0$. Karena $-2x>-6$ maka $x<3$, sehingga domainnya $\\{x \\mid x<3\\}$. (b) Asimtot tegak terjadi saat numerus mendekati nol, yaitu $6-2x=0$, sehingga $x=3$. (c) Tuliskan $6-2x=2(3-x)$. Untuk $x<3$, ketika $x$ bertambah mendekati $3$, nilai $3-x$ mengecil menuju nol, sehingga numerus mengecil dan $f(x)\\to-\\infty$. Jadi $f$ turun pada seluruh domainnya.',
    explanation:
      'Kunci: menyelesaikan pertidaksamaan numerus positif (membalik tanda saat membagi bilangan negatif), menetapkan asimtot dari numerus nol, dan menjelaskan perilaku turun dari struktur numerus.',
    hints: [
      'Numerus harus positif, tetapi hati-hati membalik tanda saat membagi dengan bilangan negatif.',
      'Asimtot tegak terjadi ketika numerus bernilai nol.',
    ],
    competencies: ['domain fungsi logaritma', 'asimtot tegak', 'penalaran'],
    rubric: [
      'Menyelesaikan pertidaksamaan numerus dengan benar',
      'Menuliskan domain dalam notasi himpunan',
      'Menentukan asimtot tegak',
      'Menjelaskan perilaku turun berdasarkan struktur numerus',
    ],
  },
  {
    id: 'flg-14',
    topicId: 'fungsi-logaritma',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Diketahui $\\log_{2}3=a$ dan $\\log_{2}5=b$. (a) Nyatakan $\\log_{2}45$ dalam $a$ dan $b$. (b) Gunakan perubahan basis untuk menentukan $\\log_{3}5$ dalam $a$ dan $b$.',
    answer:
      '(a) Tulis $45=9\\cdot5=3^{2}\\cdot5$, sehingga $\\log_{2}45=\\log_{2}(3^{2}\\cdot5)=2\\log_{2}3+\\log_{2}5=2a+b$. (b) Dengan perubahan basis ke basis $2$: $\\log_{3}5=\\dfrac{\\log_{2}5}{\\log_{2}3}=\\dfrac{b}{a}$.',
    explanation:
      'Kunci: memfaktorkan $45$ menjadi $3^{2}\\cdot5$ lalu memakai sifat penjumlahan dan pangkat logaritma, kemudian menerapkan perubahan basis $\\log_{3}5=\\dfrac{\\log_{2}5}{\\log_{2}3}$.',
    hints: [
      'Faktorkan $45$ menjadi pangkat $3$ dikalikan $5$.',
      'Ubah basis ke $2$ agar muncul $a$ dan $b$.',
    ],
    competencies: ['sifat logaritma', 'perubahan basis', 'penalaran aljabar'],
    rubric: [
      'Memfaktorkan $45=3^{2}\\cdot5$',
      'Memakai $\\log_{2}(3^{2}\\cdot5)=2\\log_{2}3+\\log_{2}5$ sehingga memperoleh $2a+b$',
      'Menerapkan perubahan basis $\\log_{3}5=\\dfrac{\\log_{2}5}{\\log_{2}3}$',
      'Menyimpulkan $\\log_{3}5=\\dfrac{b}{a}$',
    ],
  },
  {
    id: 'flg-15',
    topicId: 'fungsi-logaritma',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Tentukan semua nilai $x$ yang memenuhi $\\log_{2}(x+3)+\\log_{2}(x-3)=4$. Tuliskan syarat numerus, selesaikan, lalu periksa setiap kandidat solusi.',
    answer:
      'Syarat numerus: $x+3>0$ dan $x-3>0$, sehingga $x>3$. Gabungkan: $\\log_{2}\\big((x+3)(x-3)\\big)=4$, sehingga $(x+3)(x-3)=2^{4}=16$. Karena $(x+3)(x-3)=x^{2}-9$, diperoleh $x^{2}-9=16$, atau $x^{2}=25$, dengan kandidat $x=5$ dan $x=-5$. Kandidat $x=-5$ ditolak karena tidak memenuhi $x>3$, sedangkan $x=5$ memenuhi $5>3$. Jadi solusinya $x=5$.',
    explanation:
      'Kunci: menetapkan syarat $x>3$, memakai selisih kuadrat $(x+3)(x-3)=x^{2}-9$, mengubah ke bentuk eksponen, dan menyaring kandidat dengan syarat numerus.',
    hints: [
      'Mulai dengan syarat $x+3>0$ dan $x-3>0$; keduanya menghasilkan $x>3$.',
      'Gunakan $(x+3)(x-3)=x^{2}-9$ setelah menggabungkan logaritma.',
    ],
    competencies: ['persamaan logaritma', 'syarat numerus', 'evaluasi'],
    rubric: [
      'Menuliskan syarat numerus yang tepat',
      'Menggabungkan logaritma dan mengubah ke bentuk eksponen',
      'Menyelesaikan persamaan yang muncul',
      'Menolak kandidat yang melanggar syarat numerus',
    ],
  },
  {
    id: 'flg-16',
    topicId: 'fungsi-logaritma',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt: 'Nilai dari $\\log_{3}8\\cdot\\log_{2}9$ adalah …',
    options: [
      { key: 'A', text: '$5$' },
      { key: 'B', text: '$6$' },
      { key: 'C', text: '$9$' },
      { key: 'D', text: '$12$' },
    ],
    answer: 'B',
    explanation:
      'Ubah ke basis yang sama, misalnya basis $10$: $\\log_{3}8=\\dfrac{\\log8}{\\log3}$ dan $\\log_{2}9=\\dfrac{\\log9}{\\log2}$. Hasil kalinya $\\dfrac{\\log8\\cdot\\log9}{\\log3\\cdot\\log2}=\\dfrac{3\\log2\\cdot2\\log3}{\\log3\\cdot\\log2}=6$ (opsi B). Opsi A ($5$) menjumlahkan pangkat $3$ dan $2$. Opsi C ($9$) salah membaca hasil sebagai numerus $\\log_{2}9$. Opsi D ($12$) menggandakan hasil yang benar.',
    hints: [
      'Ubah kedua logaritma ke basis yang sama dengan perubahan basis.',
      'Tulis $\\log8=3\\log2$ dan $\\log9=2\\log3$.',
      'Setelah disubstitusi, faktor yang sama saling menghapus di pembilang dan penyebut.',
    ],
    competencies: ['perubahan basis', 'sifat logaritma', 'penalaran'],
  },
];

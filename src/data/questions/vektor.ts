import type { Question } from '@/types/content';

export const vektorQuestions: Question[] = [
  {
    id: 'vk-01',
    topicId: 'vektor',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Panjang vektor $\\vec{a} = \\begin{pmatrix} 6 \\\\ 8 \\end{pmatrix}$ adalah …',
    options: [
      { key: 'A', text: '$10$' },
      { key: 'B', text: '$14$' },
      { key: 'C', text: '$48$' },
      { key: 'D', text: '$\\sqrt{14}$' },
    ],
    answer: 'A',
    explanation:
      '$\\lVert \\vec{a} \\rVert = \\sqrt{6^{2} + 8^{2}} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ (A). Opsi B ($14$) menjumlahkan komponen $6+8$; opsi C ($48$) mengalikan komponen $6\\cdot8$; opsi D ($\\sqrt{14}$) mengakarkan jumlah komponen alih-alih jumlah kuadrat.',
    hints: ['Gunakan teorema Pythagoras pada komponen-komponennya.'],
    competencies: ['panjang vektor'],
  },
  {
    id: 'vk-02',
    topicId: 'vektor',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Tentukan panjang vektor $\\vec{b} = \\begin{pmatrix} 5 \\\\ 12 \\end{pmatrix}$.',
    answer: '13',
    explanation:
      '$\\lVert \\vec{b} \\rVert = \\sqrt{5^{2} + 12^{2}} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.',
    hints: ['Kuadratkan tiap komponen, jumlahkan, lalu ambil akarnya.'],
    competencies: ['panjang vektor'],
  },
  {
    id: 'vk-03',
    topicId: 'vektor',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Diketahui titik $A(1,2)$ dan $B(4,6)$. Vektor $\\vec{AB}$ adalah …',
    options: [
      { key: 'A', text: '$\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$' },
      { key: 'B', text: '$\\begin{pmatrix} 5 \\\\ 8 \\end{pmatrix}$' },
      { key: 'C', text: '$\\begin{pmatrix} -3 \\\\ -4 \\end{pmatrix}$' },
      { key: 'D', text: '$\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$' },
    ],
    answer: 'A',
    explanation:
      '$\\vec{AB} = B - A = \\begin{pmatrix} 4 - 1 \\\\ 6 - 2 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ (A). Opsi B ($(5,8)$) menjumlahkan koordinat $A+B$; opsi C ($(-3,-4)$) memakai $A-B$ sehingga tandanya terbalik; opsi D ($(4,3)$) menukar urutan komponen.',
    hints: ['Komponen vektor $\\vec{AB}$ adalah koordinat ujung dikurangi koordinat pangkal.'],
    competencies: ['representasi vektor', 'vektor posisi'],
  },
  {
    id: 'vk-04',
    topicId: 'vektor',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Tentukan komponen pertama (arah-$x$) dari vektor satuan $\\vec{a} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$. Tulis dalam bentuk pecahan.',
    answer: '3/5',
    acceptedAnswers: ['0.6', '3/5', '0,6', '0,60', '0.60'],
    explanation:
      '$\\lVert \\vec{a} \\rVert = 5$, sehingga $\\hat{a} = \\dfrac{1}{5}\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 3/5 \\\\ 4/5 \\end{pmatrix}$. Komponen pertamanya $\\dfrac{3}{5}$.',
    hints: ['Bagi setiap komponen dengan panjang vektor.'],
    competencies: ['vektor satuan'],
  },
  {
    id: 'vk-05',
    topicId: 'vektor',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Diketahui $\\vec{a} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ dan $\\vec{b} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$. Hasil dari $2\\vec{a} - \\vec{b}$ adalah …',
    options: [
      { key: 'A', text: '$\\begin{pmatrix} 5 \\\\ 6 \\end{pmatrix}$' },
      { key: 'B', text: '$\\begin{pmatrix} 4 \\\\ 6 \\end{pmatrix}$' },
      { key: 'C', text: '$\\begin{pmatrix} 7 \\\\ 8 \\end{pmatrix}$' },
      { key: 'D', text: '$\\begin{pmatrix} 6 \\\\ 8 \\end{pmatrix}$' },
    ],
    answer: 'A',
    explanation:
      '$2\\vec{a} = \\begin{pmatrix} 6 \\\\ 8 \\end{pmatrix}$, sehingga $2\\vec{a} - \\vec{b} = \\begin{pmatrix} 6 - 1 \\\\ 8 - 2 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 6 \\end{pmatrix}$ (A). Opsi B ($(4,6)$) mengurangi komponen pertama dengan $2$; opsi C ($(7,8)$) menjumlahkan alih-alih mengurangkan; opsi D ($(6,8)$) lupa mengurangkan $\\vec{b}$.',
    hints: [
      'Kalikan dulu dengan skalar, lalu kurangkan komponen yang seposisi.',
      'Hitung $2\\vec{a}$ komponen per komponen sebelum mengurangkan $\\vec{b}$.',
    ],
    competencies: ['perkalian skalar', 'pengurangan vektor'],
  },
  {
    id: 'vk-06',
    topicId: 'vektor',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Hitunglah perkalian titik $\\vec{a} \\cdot \\vec{b}$ untuk $\\vec{a} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ dan $\\vec{b} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$.',
    answer: '11',
    explanation:
      '$\\vec{a} \\cdot \\vec{b} = 3(1) + 4(2) = 3 + 8 = 11$.',
    hints: [
      'Jumlahkan hasil kali komponen yang bersesuaian.',
      'Kalikan komponen pertama dengan komponen pertama dan komponen kedua dengan komponen kedua, lalu jumlahkan.',
    ],
    competencies: ['perkalian titik'],
  },
  {
    id: 'vk-07',
    topicId: 'vektor',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Vektor yang tegak lurus dengan $\\vec{a} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ adalah …',
    options: [
      { key: 'A', text: '$\\begin{pmatrix} 4 \\\\ -3 \\end{pmatrix}$' },
      { key: 'B', text: '$\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$' },
      { key: 'C', text: '$\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$' },
      { key: 'D', text: '$\\begin{pmatrix} 6 \\\\ 8 \\end{pmatrix}$' },
    ],
    answer: 'A',
    explanation:
      '$\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} \\cdot \\begin{pmatrix} 4 \\\\ -3 \\end{pmatrix} = 12 - 12 = 0$, sehingga kedua vektor tegak lurus (A). Opsi B sejajar dengan $\\vec{a}$ karena merupakan kelipatannya; opsi D juga kelipatan $\\vec{a}$ sehingga sejajar; opsi C memberi $12 + 12 = 24 \\neq 0$, jadi tidak tegak lurus.',
    hints: [
      'Dua vektor tegak lurus bila perkalian titiknya nol.',
      'Uji setiap opsi dengan perkalian titik terhadap $\\vec{a}$; hasil nol menandakan tegak lurus.',
    ],
    competencies: ['ketegaklurusan', 'perkalian titik'],
  },
  {
    id: 'vk-08',
    topicId: 'vektor',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Tentukan besar sudut (dalam derajat) antara $\\vec{u} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$ dan $\\vec{v} = \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}$.',
    answer: '45',
    acceptedAnswers: ['45°', '45 derajat', '45^\\circ'],
    explanation:
      '$\\vec{u} \\cdot \\vec{v} = 5$, $\\lVert \\vec{u} \\rVert = \\sqrt{5}$, $\\lVert \\vec{v} \\rVert = \\sqrt{10}$, sehingga $\\cos\\theta = \\dfrac{5}{\\sqrt{50}} = \\dfrac{1}{\\sqrt{2}}$. Jadi $\\theta = 45^\\circ$.',
    hints: [
      'Gunakan $\\cos\\theta = \\dfrac{\\vec{u} \\cdot \\vec{v}}{\\lVert \\vec{u} \\rVert \\lVert \\vec{v} \\rVert}$.',
      'Setelah memperoleh $\\cos\\theta=\\dfrac{1}{\\sqrt{2}}$, tentukan sudut istimewa yang sesuai.',
    ],
    competencies: ['sudut antar vektor', 'perkalian titik'],
  },
  {
    id: 'vk-09',
    topicId: 'vektor',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penerapan',
    prompt:
      'Tentukan proyeksi vektor $\\vec{a} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ pada $\\vec{b} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$, lalu tentukan panjang proyeksi tersebut.',
    answer:
      '$\\vec{a} \\cdot \\vec{b} = 3(1) + 4(2) = 11$ dan $\\lVert \\vec{b} \\rVert^{2} = 1^{2} + 2^{2} = 5$. Proyeksi vektornya adalah $\\vec{p} = \\dfrac{\\vec{a} \\cdot \\vec{b}}{\\lVert \\vec{b} \\rVert^{2}}\\vec{b} = \\dfrac{11}{5}\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 11/5 \\\\ 22/5 \\end{pmatrix}$. Panjangnya $\\lVert \\vec{p} \\rVert = \\dfrac{11}{5}\\sqrt{5} = \\dfrac{11\\sqrt{5}}{5} \\approx 4{,}92$.',
    explanation:
      'Kunci menekankan penggunaan rumus proyeksi vektor dan pemeriksaan bahwa panjang proyeksi sama dengan proyeksi skalar $\\dfrac{\\vec{a} \\cdot \\vec{b}}{\\lVert \\vec{b} \\rVert}$.',
    hints: [
      'Proyeksi vektor $\\vec{a}$ pada $\\vec{b}$ adalah $\\dfrac{\\vec{a} \\cdot \\vec{b}}{\\lVert \\vec{b} \\rVert^{2}}\\vec{b}$.',
      'Panjang proyeksi sama dengan $\\dfrac{|\\vec{a} \\cdot \\vec{b}|}{\\lVert \\vec{b} \\rVert}$; gunakan untuk memeriksa hasil.',
    ],
    competencies: ['proyeksi vektor', 'perkalian titik'],
    rubric: [
      'Menghitung perkalian titik',
      'Menghitung kuadrat panjang vektor acuan',
      'Menerapkan rumus proyeksi vektor',
      'Menentukan panjang proyeksi',
    ],
  },
  {
    id: 'vk-10',
    topicId: 'vektor',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Diketahui $A(1,1)$, $B(3,3)$, dan $C(5,k)$ kolinear. Nilai $k$ adalah …',
    options: [
      { key: 'A', text: '$5$' },
      { key: 'B', text: '$4$' },
      { key: 'C', text: '$6$' },
      { key: 'D', text: '$3$' },
    ],
    answer: 'A',
    explanation:
      '$\\vec{AB} = \\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix}$. Kolinear berarti $\\vec{AC} = t\\,\\vec{AB}$, yaitu $(4, k-1) = t(2,2)$. Dari komponen pertama $4 = 2t$ diperoleh $t = 2$, sehingga $k - 1 = 2(2) = 4$ dan $k = 5$ (A). Opsi B ($4$) berhenti pada nilai $k-1$ tanpa menambahkan $1$; opsi C ($6$) memakai $t=3$; opsi D ($3$) menyamakan $k$ langsung dengan kelipatan yang keliru.',
    hints: [
      'Titik kolinear bila dua vektor arahnya sejajar (kelipatan).',
      'Setelah memperoleh $t=2$, samakan komponen kedua: $k-1=2t$.',
    ],
    competencies: ['kolinearitas'],
  },
  {
    id: 'vk-11',
    topicId: 'vektor',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Pada segitiga $A(0,0)$, $B(4,0)$, $C(0,6)$, buktikan dengan vektor bahwa ruas garis yang menghubungkan titik tengah $AB$ dan $AC$ sejajar dengan $BC$ dan panjangnya setengah $BC$.',
    answer:
      'Titik tengah $AB$ adalah $M = \\dfrac{1}{2}(A+B) = (2,0)$ dan titik tengah $AC$ adalah $N = \\dfrac{1}{2}(A+C) = (0,3)$. Maka $\\vec{MN} = N - M = \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$ dan $\\vec{BC} = C - B = \\begin{pmatrix} -4 \\\\ 6 \\end{pmatrix} = 2\\,\\vec{MN}$. Karena $\\vec{BC}$ adalah kelipatan positif dari $\\vec{MN}$, kedua ruas garis sejajar. Karena kelipatannya $2$, panjang $\\lVert \\vec{MN} \\rVert = \\tfrac{1}{2}\\lVert \\vec{BC} \\rVert$, yaitu $\\sqrt{13} = \\tfrac{1}{2}(2\\sqrt{13})$. Terbukti.',
    explanation:
      'Kunci menekankan perumusan titik tengah, perhitungan vektor $\\vec{MN}$ dan $\\vec{BC}$, lalu penyimpulan kesejajaran dari kelipatan dan panjang dari faktor skala.',
    hints: ['Titik tengah ruas $PQ$ adalah $\\tfrac{1}{2}(P+Q)$.', 'Kelipatan vektor menunjukkan kesejajaran.'],
    competencies: ['teorema titik tengah', 'pembuktian geometris'],
    rubric: [
      'Menentukan titik tengah kedua ruas',
      'Menghitung vektor penghubung kedua titik tengah',
      'Menunjukkan kesejajaran lewat kelipatan',
      'Menyimpulkan panjangnya setengah ruas lain',
    ],
  },
  {
    id: 'vk-12',
    topicId: 'vektor',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Tentukan nilai $x$ agar $\\vec{u} = \\begin{pmatrix} x \\\\ 3 \\end{pmatrix}$ dan $\\vec{v} = \\begin{pmatrix} 2 \\\\ -4 \\end{pmatrix}$ saling tegak lurus. Jelaskan alasan langkahmu.',
    answer:
      'Dua vektor tegak lurus jika dan hanya jika perkalian titiknya nol. Maka $\\vec{u} \\cdot \\vec{v} = 2x + 3(-4) = 2x - 12 = 0$, sehingga $2x = 12$ dan $x = 6$. Periksa: $\\begin{pmatrix} 6 \\\\ 3 \\end{pmatrix} \\cdot \\begin{pmatrix} 2 \\\\ -4 \\end{pmatrix} = 12 - 12 = 0$. Benar.',
    explanation:
      'Kunci menekankan syarat ketegaklurusan $\\vec{u} \\cdot \\vec{v} = 0$ lalu penyelesaian persamaan linear yang dihasilkan.',
    hints: [
      'Ketegaklurusan berarti perkalian titik kedua vektor sama dengan nol.',
      'Setelah $2x-12=0$, selesaikan persamaan linear lalu periksa dengan substitusi.',
    ],
    competencies: ['ketegaklurusan', 'penalaran aljabar'],
    rubric: [
      'Memakai syarat tegak lurus perkalian titik nol',
      'Menyusun persamaan dalam x',
      'Menyelesaikan nilai x',
      'Memeriksa jawaban dengan substitusi',
    ],
  },
  {
    id: 'vk-13',
    topicId: 'vektor',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Diketahui $\\vec{a}=\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$ dan $\\vec{b}=\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$. (a) Hitung $\\vec{a}\\cdot\\vec{b}$ dan tentukan besar sudut antara keduanya. (b) Tentukan proyeksi skalar $\\vec{a}$ pada $\\vec{b}$. (c) Jelaskan mengapa proyeksi skalar dapat bernilai negatif, padahal panjang selalu positif.',
    answer:
      '(a) $\\vec{a}\\cdot\\vec{b}=4(1)+3(2)=10$. Karena $\\lVert\\vec{a}\\rVert=5$ dan $\\lVert\\vec{b}\\rVert=\\sqrt{5}$, maka $\\cos\\theta=\\dfrac{10}{5\\sqrt{5}}=\\dfrac{2}{\\sqrt{5}}\\approx0{,}894$, sehingga $\\theta\\approx26{,}57^\\circ$. (b) Proyeksi skalar $=\\dfrac{\\vec{a}\\cdot\\vec{b}}{\\lVert\\vec{b}\\rVert}=\\dfrac{10}{\\sqrt{5}}=2\\sqrt{5}\\approx4{,}47$. (c) Proyeksi skalar mengukur panjang bayangan yang diberi tanda arah; jika sudut antara kedua vektor tumpul, bayangannya berlawanan arah dengan $\\vec{b}$ sehingga nilainya negatif. Jadi tandanya menunjukkan arah relatif, bukan panjang geometris.',
    explanation:
      'Kunci: menghitung perkalian titik dan sudut, menentukan proyeksi skalar, lalu menafsirkan arti tanda pada proyeksi skalar.',
    hints: ['Gunakan $\\cos\\theta=\\dfrac{\\vec a\\cdot\\vec b}{\\lVert\\vec a\\rVert\\lVert\\vec b\\rVert}$.', 'Tanda proyeksi skalar bergantung pada tanda $\\cos\\theta$.'],
    competencies: ['perkalian titik', 'proyeksi', 'evaluasi'],
    rubric: [
      'Menghitung perkalian titik',
      'Menentukan besar sudut antara kedua vektor',
      'Menghitung proyeksi skalar',
      'Menjelaskan arti tanda proyeksi skalar',
    ],
  },
  {
    id: 'vk-14',
    topicId: 'vektor',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Seorang surveyor mencatat dua perpindahan dari titik awal: $\\vec{d_1}$ sejauh $400$ m ke arah timur, lalu $\\vec{d_2}$ sejauh $300$ m pada arah $60^\\circ$ dari timur. (a) Tentukan vektor perpindahan total $\\vec{d}=\\vec{d_1}+\\vec{d_2}$ dalam bentuk komponen. (b) Hitung jarak titik akhir dari titik awal.',
    answer:
      'Ambil sumbu-$x$ ke timur. Vektor $\\vec{d_1}=\\begin{pmatrix} 400 \\\\ 0 \\end{pmatrix}$ m dan $\\vec{d_2}=\\begin{pmatrix} 300\\cos60^\\circ \\\\ 300\\sin60^\\circ \\end{pmatrix}=\\begin{pmatrix} 150 \\\\ 150\\sqrt{3} \\end{pmatrix}$ m $\\approx\\begin{pmatrix} 150 \\\\ 259{,}81 \\end{pmatrix}$ m. (a) $\\vec{d}=\\begin{pmatrix} 550 \\\\ 150\\sqrt{3} \\end{pmatrix}$ m $\\approx\\begin{pmatrix} 550 \\\\ 259{,}81 \\end{pmatrix}$ m. (b) $\\lVert\\vec{d}\\rVert=\\sqrt{550^{2}+(150\\sqrt{3})^{2}}=\\sqrt{302.500+67.500}=\\sqrt{370.000}=100\\sqrt{37}\\approx608{,}28$ m. Jadi jarak titik akhir dari titik awal sekitar $608$ m.',
    explanation:
      'Kunci: menguraikan perpindahan kedua menjadi komponen, menjumlahkan komponen yang bersesuaian, lalu menghitung besar perpindahan dengan Pythagoras.',
    hints: [
      'Uraikan $300$ m pada arah $60^\\circ$ menjadi $300\\cos60^\\circ$ (arah timur) dan $300\\sin60^\\circ$ (arah utara).',
      'Setelah komponen dijumlahkan, gunakan $\\lVert\\vec{d}\\rVert=\\sqrt{d_x^{2}+d_y^{2}}$.',
    ],
    competencies: ['penjumlahan vektor', 'penguraian vektor', 'pemodelan'],
    figure: {
      svg: '<svg viewBox="0 0 280 170" role="img" xmlns="http://www.w3.org/2000/svg"><defs><marker id="vkArrow14" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="currentColor"/></marker></defs><line x1="30" y1="140" x2="265" y2="140" stroke="currentColor" stroke-width="1" opacity="0.35"/><line x1="30" y1="140" x2="30" y2="15" stroke="currentColor" stroke-width="1" opacity="0.35"/><line x1="30" y1="140" x2="190" y2="140" stroke="currentColor" stroke-width="2.2" marker-end="url(#vkArrow14)"/><line x1="190" y1="140" x2="250" y2="36" stroke="currentColor" stroke-width="2.2" marker-end="url(#vkArrow14)"/><line x1="30" y1="140" x2="250" y2="36" stroke="currentColor" stroke-width="2.2" stroke-dasharray="5 4" marker-end="url(#vkArrow14)"/><text x="88" y="158" fill="currentColor" font-size="12">d1 = 400 m</text><text x="198" y="112" fill="currentColor" font-size="12">d2 = 300 m</text><text x="128" y="78" fill="currentColor" font-size="12">d</text></svg>',
      alt: 'Diagram vektor dua perpindahan surveyor: 400 meter ke timur, lalu 300 meter pada arah 60 derajat dari timur, dengan vektor perpindahan total dari titik awal.',
      caption: 'Perpindahan total $\\vec{d}$ adalah jumlah vektor $\\vec{d_1}$ dan $\\vec{d_2}$.',
    },
    rubric: [
      'Menguraikan $300$ m menjadi komponen $x$ dan $y$',
      'Menjumlahkan komponen kedua perpindahan',
      'Menghitung besar perpindahan total',
      'Menyajikan hasil dengan satuan meter',
    ],
  },
  {
    id: 'vk-15',
    topicId: 'vektor',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Dua gaya bekerja pada satu titik: $\\vec{F_1}=\\begin{pmatrix} 6 \\\\ 2 \\end{pmatrix}$ N dan $\\vec{F_2}=\\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$ N. (a) Tentukan gaya resultan. (b) Hitung besarnya. (c) Tentukan sudut antara gaya resultan dan sumbu-$x$.',
    answer:
      '(a) $\\vec{R}=\\vec{F_1}+\\vec{F_2}=\\begin{pmatrix} 4 \\\\ 5 \\end{pmatrix}$ N. (b) $\\lVert\\vec{R}\\rVert=\\sqrt{4^{2}+5^{2}}=\\sqrt{16+25}=\\sqrt{41}\\approx6{,}40$ N. (c) $\\tan\\theta=\\dfrac{5}{4}=1{,}25$, sehingga $\\theta\\approx51{,}34^\\circ$ terhadap sumbu-$x$.',
    explanation:
      'Kunci: menjumlahkan dua vektor gaya, menghitung besar resultan, dan menentukan arah dengan tangen.',
    hints: ['Gaya resultan adalah jumlah kedua vektor.', 'Gunakan komponen resultan untuk mencari besar dan arah.'],
    competencies: ['resultan gaya', 'vektor', 'kontekstual'],
    rubric: [
      'Menjumlahkan kedua vektor gaya',
      'Menghitung besar resultan',
      'Menentukan sudut terhadap sumbu-x',
      'Menyajikan satuan yang tepat',
    ],
  },
  {
    id: 'vk-16',
    topicId: 'vektor',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah pesawat terbang dengan kecepatan udara (relatif terhadap udara) $200$ km/jam dan ingin menempuh lintasan tepat ke arah utara. Angin bertiup ke arah timur dengan kecepatan $50$ km/jam. (a) Tentukan arah hidung pesawat terhadap arah utara agar lintasannya tepat ke utara. (b) Hitung kecepatan pesawat terhadap tanah.',
    answer:
      'Ambil sumbu-$x$ ke timur dan sumbu-$y$ ke utara. Misal pesawat diarahkan $\\theta$ ke barat dari utara. Vektor kecepatan udara relatif adalah $(-200\\sin\\theta,\\,200\\cos\\theta)$ km/jam, sedangkan angin $(50,\\,0)$ km/jam. Agar lintasan tepat ke utara, komponen $x$ resultan harus nol: $-200\\sin\\theta+50=0$, sehingga $\\sin\\theta=\\dfrac{1}{4}$ dan $\\theta\\approx14{,}48^\\circ$ ke barat dari utara. Komponen utara resultan adalah $200\\cos\\theta=200\\sqrt{1-\\dfrac{1}{16}}=200\\cdot\\dfrac{\\sqrt{15}}{4}=50\\sqrt{15}\\approx193{,}65$ km/jam. Jadi pesawat harus diarahkan sekitar $14{,}5^\\circ$ ke barat dari utara dengan kecepatan terhadap tanah sekitar $193{,}6$ km/jam.',
    explanation:
      'Kunci: menguraikan vektor kecepatan udara menjadi komponen, menetapkan komponen timur sama dengan kecepatan angin agar resultan hanya ke utara, lalu menghitung komponen utara sebagai kecepatan terhadap tanah.',
    hints: [
      'Tulis vektor kecepatan udara dan angin dalam komponen.',
      'Agar arah resultan tepat ke utara, komponen timurnya harus nol.',
      'Gunakan $\\cos\\theta=\\sqrt{1-\\sin^{2}\\theta}$.',
    ],
    competencies: ['pemodelan vektor', 'penguraian vektor', 'resultan kecepatan'],
    rubric: [
      'Menguraikan kecepatan udara menjadi komponen',
      'Menetapkan komponen timur resultan nol',
      'Menentukan arah hidung pesawat',
      'Menghitung kecepatan terhadap tanah',
    ],
  },
  {
    id: 'vk-17',
    topicId: 'vektor',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Diketahui $\\vec{a}=\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$ dan $\\vec{b}=\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}$. Vektor $\\vec{c}=\\vec{a}+t\\vec{b}$ tegak lurus $\\vec{a}$ untuk nilai $t$ sama dengan …',
    options: [
      { key: 'A', text: '$-1$' },
      { key: 'B', text: '$1$' },
      { key: 'C', text: '$-\\dfrac{1}{5}$' },
      { key: 'D', text: '$5$' },
    ],
    answer: 'A',
    explanation:
      '$\\vec{c}=\\begin{pmatrix} 2+t \\\\ 1+3t \\end{pmatrix}$. Tegak lurus $\\vec{a}$ berarti $\\vec{c}\\cdot\\vec{a}=0$, yaitu $2(2+t)+1(1+3t)=5+5t=0$, sehingga $t=-1$ (A). Opsi B ($1$) salah tanda saat memindahkan $5t=-5$; opsi C ($-\\frac15$) hanya menyamakan satu komponen dengan nol; opsi D ($5$) membalik hasil alih-alih membagi $-5$ dengan $5$.',
    hints: [
      'Gunakan syarat tegak lurus $\\vec{c}\\cdot\\vec{a}=0$.',
      'Hitung dulu komponen $\\vec{c}$ dalam $t$.',
    ],
    competencies: ['ketegaklurusan', 'perkalian titik', 'penalaran'],
  },
];

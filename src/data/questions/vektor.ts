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
      '$\\lVert \\vec{a} \\rVert = \\sqrt{6^{2} + 8^{2}} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.',
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
      '$\\vec{AB} = B - A = \\begin{pmatrix} 4 - 1 \\\\ 6 - 2 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$.',
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
    acceptedAnswers: ['0.6', '3/5'],
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
      { key: 'D', text: '$\\begin{pmatrix} 5 \\\\ 2 \\end{pmatrix}$' },
    ],
    answer: 'A',
    explanation:
      '$2\\vec{a} = \\begin{pmatrix} 6 \\\\ 8 \\end{pmatrix}$, sehingga $2\\vec{a} - \\vec{b} = \\begin{pmatrix} 6 - 1 \\\\ 8 - 2 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 6 \\end{pmatrix}$.',
    hints: ['Kalikan dulu dengan skalar, lalu kurangkan komponen yang seposisi.'],
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
    hints: ['Jumlahkan hasil kali komponen yang bersesuaian.'],
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
      '$\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} \\cdot \\begin{pmatrix} 4 \\\\ -3 \\end{pmatrix} = 12 - 12 = 0$, sehingga kedua vektor tegak lurus. Opsi B dan D sejajar dengan $\\vec{a}$, sedangkan opsi C memberi $12 + 12 = 24 \\neq 0$.',
    hints: ['Dua vektor tegak lurus bila perkalian titiknya nol.'],
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
    acceptedAnswers: ['45°', '45 derajat'],
    explanation:
      '$\\vec{u} \\cdot \\vec{v} = 5$, $\\lVert \\vec{u} \\rVert = \\sqrt{5}$, $\\lVert \\vec{v} \\rVert = \\sqrt{10}$, sehingga $\\cos\\theta = \\dfrac{5}{\\sqrt{50}} = \\dfrac{1}{\\sqrt{2}}$. Jadi $\\theta = 45^\\circ$.',
    hints: ['Gunakan $\\cos\\theta = \\dfrac{\\vec{u} \\cdot \\vec{v}}{\\lVert \\vec{u} \\rVert \\lVert \\vec{v} \\rVert}$.'],
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
    hints: ['Proyeksi vektor $\\vec{a}$ pada $\\vec{b}$ adalah $\\dfrac{\\vec{a} \\cdot \\vec{b}}{\\lVert \\vec{b} \\rVert^{2}}\\vec{b}$.'],
    competencies: ['proyeksi vektor', 'perkalian titik'],
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
      '$\\vec{AB} = \\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix}$. Kolinear berarti $\\vec{AC} = t\\,\\vec{AB}$. Karena $\\vec{AC} = \\begin{pmatrix} 4 \\\\ k-1 \\end{pmatrix}$, dari komponen pertama $4 = 2t$ diperoleh $t = 2$, sehingga $k - 1 = 2(2) = 4$ dan $k = 5$.',
    hints: ['Titik kolinear bila dua vektor arahnya sejajar (kelipatan).'],
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
    hints: ['Ketegaklurusan berarti perkalian titik kedua vektor sama dengan nol.'],
    competencies: ['ketegaklurusan', 'penalaran aljabar'],
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
  },
  {
    id: 'vk-14',
    topicId: 'vektor',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah pesawat bergerak dengan kecepatan $\\vec{v}=\\begin{pmatrix} 200 \\\\ 0 \\end{pmatrix}$ km/jam, tetapi bertemu angin $\\vec{u}=\\begin{pmatrix} 0 \\\\ 40 \\end{pmatrix}$ km/jam. (a) Tentukan vektor kecepatan resultan. (b) Hitung besar kecepatan resultan. (c) Tentukan arahnya terhadap arah timur.',
    answer:
      '(a) Kecepatan resultan $\\vec{r}=\\vec{v}+\\vec{u}=\\begin{pmatrix} 200 \\\\ 40 \\end{pmatrix}$ km/jam. (b) $\\lVert\\vec{r}\\rVert=\\sqrt{200^{2}+40^{2}}=\\sqrt{40000+1600}=\\sqrt{41600}\\approx203{,}96$ km/jam. (c) Arahnya $\\tan\\theta=\\dfrac{40}{200}=0{,}2$, sehingga $\\theta\\approx11{,}31^\\circ$ di atas arah timur.',
    explanation:
      'Kunci: menjumlahkan vektor kecepatan dan angin, menghitung besar dengan Pythagoras, lalu menentukan arah lewat tangen.',
    hints: ['Jumlahkan komponen yang bersesuaian.', 'Gunakan $\\tan\\theta=\\dfrac{\\text{komponen } y}{\\text{komponen } x}$.'],
    competencies: ['penjumlahan vektor', 'pemodelan kecepatan'],
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
  },
];

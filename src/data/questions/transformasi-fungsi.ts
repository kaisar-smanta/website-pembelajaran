import type { Question } from '@/types/content';

export const transformasiFungsiQuestions: Question[] = [
  {
    id: 'tf-01',
    topicId: 'transformasi-fungsi',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Jika grafik $y = f(x)$ digeser ke atas sejauh $4$ satuan, rumus grafik barunya adalah …',
    options: [
      { key: 'A', text: '$y = f(x) + 4$' },
      { key: 'B', text: '$y = f(x) - 4$' },
      { key: 'C', text: '$y = f(x+4)$' },
      { key: 'D', text: '$y = f(x-4)$' },
    ],
    answer: 'A',
    explanation:
      'Pergeseran vertikal ke atas sejauh $k$ satuan menambahkan $k$ pada nilai fungsi: $y = f(x) + k$. Karena $k = 4$, rumusnya $y = f(x) + 4$. Opsi C dan D adalah pergeseran horizontal.',
    hints: ['Pergeseran vertikal mengubah nilai fungsi di luar, bukan argumen $x$.'],
    competencies: ['translasi vertikal'],
  },
  {
    id: 'tf-02',
    topicId: 'transformasi-fungsi',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Grafik $y = x^{2}$ digeser ke kiri sejauh $5$ satuan. Tuliskan rumus grafik barunya.',
    answer: '(x+5)^2',
    acceptedAnswers: ['(x+5)^{2}', 'y=(x+5)^2', 'y=(x+5)^{2}', 'x^2+10x+25'],
    explanation:
      'Geser ke kiri $5$ satuan berarti $h = -5$, sehingga $y = (x - (-5))^{2} = (x+5)^{2}$. Perhatikan tandanya berlawanan dengan arah geser.',
    hints: ['Geser ke kiri berarti menambahkan $5$ di dalam tanda kurung.'],
    competencies: ['translasi horizontal'],
  },
  {
    id: 'tf-03',
    topicId: 'transformasi-fungsi',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Tentukan hasil refleksi grafik $y = x^{2}$ terhadap sumbu-$x$.',
    answer: '-x^2',
    acceptedAnswers: ['y=-x^2', '-x^{2}', 'y=-x^{2}'],
    explanation:
      'Refleksi terhadap sumbu-$x$ mengubah tanda nilai fungsi: $y = -f(x) = -x^{2}$.',
    hints: ['Pencerminan terhadap sumbu-$x$ memberi tanda negatif di depan fungsi.'],
    competencies: ['refleksi terhadap sumbu-$x$'],
  },
  {
    id: 'tf-04',
    topicId: 'transformasi-fungsi',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Diketahui $f(3) = 7$. Tentukan nilai fungsi $y = -f(x)$ pada $x = 3$.',
    answer: '-7',
    explanation:
      'Karena $y = -f(x)$, maka pada $x = 3$ nilainya $-f(3) = -7$. Refleksi terhadap sumbu-$x$ membalik tanda nilai fungsi.',
    hints: ['Substitusikan $f(3) = 7$ ke dalam $-f(3)$.'],
    competencies: ['refleksi terhadap sumbu-$x$'],
  },
  {
    id: 'tf-05',
    topicId: 'transformasi-fungsi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Titik puncak grafik $y = (x+1)^{2} - 4$ adalah …',
    options: [
      { key: 'A', text: '$(-1, -4)$' },
      { key: 'B', text: '$(1, -4)$' },
      { key: 'C', text: '$(-1, 4)$' },
      { key: 'D', text: '$(1, 4)$' },
    ],
    answer: 'A',
    explanation:
      'Bentuk $y = (x+1)^{2} - 4$ berasal dari $y = x^{2}$ yang digeser ke kiri $1$ satuan dan ke bawah $4$ satuan. Titik puncak $(0,0)$ berpindah menjadi $(-1, -4)$.',
    hints: ['Tulis $x+1$ sebagai $x - (-1)$ untuk membaca pergeseran horizontal.'],
    competencies: ['translasi grafik', 'titik puncak'],
  },
  {
    id: 'tf-06',
    topicId: 'transformasi-fungsi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Grafik $y = 2x + 1$ dicerminkan terhadap sumbu-$y$, lalu digeser ke atas sejauh $3$ satuan. Rumus akhirnya adalah …',
    options: [
      { key: 'A', text: '$y = -2x + 4$' },
      { key: 'B', text: '$y = 2x + 4$' },
      { key: 'C', text: '$y = -2x - 2$' },
      { key: 'D', text: '$y = -2x + 1$' },
    ],
    answer: 'A',
    explanation:
      'Refleksi terhadap sumbu-$y$: $y = 2(-x) + 1 = -2x + 1$. Lalu digeser ke atas $3$ satuan: $y = -2x + 1 + 3 = -2x + 4$.',
    hints: ['Refleksi sumbu-$y$ mengganti $x$ menjadi $-x$; geser ke atas menambah $3$ pada nilai fungsi.'],
    competencies: ['refleksi', 'translasi vertikal'],
  },
  {
    id: 'tf-07',
    topicId: 'transformasi-fungsi',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penerapan',
    prompt:
      'Grafik $y = x^{2}$ melalui titik $(3, 9)$. Tentukan titik padanannya pada grafik $y = f(3x)$ beserta alasan singkatnya.',
    answer:
      'Pada dilatasi horizontal $y = f(3x)$, absis titik dibagi dengan $3$ sedangkan ordinatnya tetap. Titik $(3, 9)$ berpindah menjadi $\\left(\\dfrac{3}{3}, 9\\right) = (1, 9)$. Periksa: $f(3 \\cdot 1) = f(3) = 9$, sesuai.',
    explanation:
      'Kunci menekankan aturan perubahan titik $(a, b) \\to \\left(\\tfrac{a}{k}, b\\right)$ untuk dilatasi horizontal $y = f(kx)$ dengan $k = 3$.',
    hints: ['Dilatasi horizontal $f(kx)$ membagi absis dengan $k$, ordinat tetap.'],
    competencies: ['dilatasi horizontal'],
  },
  {
    id: 'tf-08',
    topicId: 'transformasi-fungsi',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Jelaskan mengapa urutan transformasi berpengaruh. Gunakan contoh $f(x) = x^{2}$ dengan meregangkan vertikal faktor $2$ dan menggeser ke atas $3$ satuan.',
    answer:
      'Jika grafik meregang vertikal faktor $2$ lebih dahulu, diperoleh $y = 2x^{2}$, lalu digeser ke atas $3$ satuan menjadi $y = 2x^{2} + 3$. Jika urutannya dibalik, digeser ke atas $3$ satuan dahulu menjadi $y = x^{2} + 3$, lalu diregangkan vertikal faktor $2$ menghasilkan $y = 2(x^{2} + 3) = 2x^{2} + 6$. Hasil $2x^{2}+3$ dan $2x^{2}+6$ berbeda untuk setiap $x$, jadi urutan transformasi memengaruhi rumus akhir.',
    explanation:
      'Kunci menekankan bahwa peregangan vertikal mengalikan seluruh nilai fungsi, sehingga elemen yang sudah digeser ikut dikalikan bila urutannya berbeda.',
    hints: ['Bandingkan $2x^{2}+3$ dengan $2(x^{2}+3)$ lalu jabarkan keduanya.'],
    competencies: ['urutan transformasi', 'penalaran'],
  },
  {
    id: 'tf-09',
    topicId: 'transformasi-fungsi',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Grafik $y = x^{2}$ digeser ke kanan $3$ satuan, lalu diregangkan horizontal dengan $g(x) = f\\!\\left(\\dfrac{x}{2}\\right)$. Rumus $g(x)$ adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{(x-6)^{2}}{4}$' },
      { key: 'B', text: '$\\dfrac{(x-6)^{2}}{2}$' },
      { key: 'C', text: '$(x-6)^{2}$' },
      { key: 'D', text: '$\\dfrac{(x+6)^{2}}{4}$' },
    ],
    answer: 'A',
    explanation:
      'Setelah digeser ke kanan $3$ satuan diperoleh $y = (x-3)^{2}$. Mengganti $x$ dengan $\\dfrac{x}{2}$ memberi $g(x) = \\left(\\dfrac{x}{2} - 3\\right)^{2} = \\left(\\dfrac{x - 6}{2}\\right)^{2} = \\dfrac{(x-6)^{2}}{4}$.',
    hints: ['Substitusikan $\\dfrac{x}{2}$ ke setiap kemunculan $x$ pada $(x-3)^{2}$.'],
    competencies: ['dilatasi horizontal', 'komposisi transformasi'],
  },
  {
    id: 'tf-10',
    topicId: 'transformasi-fungsi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Lintasan sebuah bola dimodelkan $h(t) = a(t-p)^{2} + q$ dengan titik puncak $(2, 5)$ dan melalui titik $(0, 1)$. Tentukan nilai $a$, $p$, dan $q$, lalu tuliskan rumus lengkapnya.',
    answer:
      'Dari puncak $(p, q) = (2, 5)$ diperoleh $p = 2$ dan $q = 5$, sehingga $h(t) = a(t-2)^{2} + 5$. Substitusi titik $(0, 1)$: $a(0-2)^{2} + 5 = 1 \\Rightarrow 4a = -4 \\Rightarrow a = -1$. Jadi $h(t) = -(t-2)^{2} + 5$. Periksa: $h(2) = 5$ dan $h(0) = -(0-2)^{2} + 5 = -4 + 5 = 1$, benar.',
    explanation:
      'Kunci menekankan pembacaan parameter puncak dari bentuk $a(t-p)^{2}+q$ dan penentuan $a$ melalui substitusi satu titik yang dilalui.',
    hints: ['Bentuk puncak $a(t-p)^{2}+q$ memiliki puncak $(p, q)$; gunakan titik lain untuk mencari $a$.'],
    competencies: ['pemodelan transformasi', 'bentuk puncak'],
  },
];

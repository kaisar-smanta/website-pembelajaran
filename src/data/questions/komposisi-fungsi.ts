import type { Question } from '@/types/content';

export const komposisiFungsiQuestions: Question[] = [
  {
    id: 'kf-01',
    topicId: 'komposisi-fungsi',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt:
      'Diketahui $f(x) = x + 2$ dan $g(x) = 3x$. Rumus $(f \\circ g)(x)$ adalah …',
    options: [
      { key: 'A', text: '$3x + 2$' },
      { key: 'B', text: '$3x + 6$' },
      { key: 'C', text: '$4x + 2$' },
      { key: 'D', text: '$3x^{2} + 6x$' },
    ],
    answer: 'A',
    explanation:
      '$(f \\circ g)(x) = f(g(x)) = f(3x) = 3x + 2$. Kerjakan $g$ terlebih dahulu, lalu masukkan hasilnya ke $f$. Opsi B adalah $(g \\circ f)(x)$.',
    hints: ['Kerjakan fungsi yang paling dekat dengan $x$, yaitu $g$, lebih dahulu.'],
    competencies: ['komposisi fungsi'],
  },
  {
    id: 'kf-02',
    topicId: 'komposisi-fungsi',
    difficulty: 'dasar',
    type: 'open-response',
    category: 'konsep',
    prompt:
      'Jelaskan arti notasi $(f \\circ g)(x)$ dan urutan pengerjaan fungsi di dalamnya. Bandingkan dengan $(g \\circ f)(x)$.',
    answer:
      '$(f \\circ g)(x)$ berarti $f(g(x))$: fungsi $g$ dikerjakan lebih dahulu terhadap $x$, lalu hasilnya menjadi masukan bagi $f$. Sebaliknya, $(g \\circ f)(x) = g(f(x))$ berarti $f$ dikerjakan lebih dahulu. Secara umum urutannya tidak boleh ditukar karena $f \\circ g \\neq g \\circ f$, kecuali pada kasus khusus.',
    explanation:
      'Kunci menekankan makna "bundaran" serta urutan pengerjaan dari fungsi yang paling dekat dengan $x$.',
    hints: ['Fungsi yang ditulis lebih dekat ke $x$ dikerjakan lebih dahulu.'],
    competencies: ['konsep komposisi fungsi'],
  },
  {
    id: 'kf-03',
    topicId: 'komposisi-fungsi',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Diketahui $f(x) = x^{2}$ dan $g(x) = x + 1$. Hitunglah $(f \\circ g)(3)$.',
    answer: '16',
    explanation:
      '$(f \\circ g)(3) = f(g(3))$. Karena $g(3) = 3 + 1 = 4$, maka $f(4) = 4^{2} = 16$.',
    hints: ['Hitung $g(3)$ lebih dahulu, lalu masukkan hasilnya ke $f$.'],
    competencies: ['nilai komposisi fungsi'],
  },
  {
    id: 'kf-04',
    topicId: 'komposisi-fungsi',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Diketahui $f(x) = 2x$ dan $g(x) = x - 4$. Hitunglah $(g \\circ f)(5)$.',
    answer: '6',
    explanation:
      '$(g \\circ f)(5) = g(f(5))$. Karena $f(5) = 2(5) = 10$, maka $g(10) = 10 - 4 = 6$.',
    hints: ['Pada $(g \\circ f)$, kerjakan $f$ lebih dahulu.'],
    competencies: ['nilai komposisi fungsi'],
  },
  {
    id: 'kf-05',
    topicId: 'komposisi-fungsi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Diketahui $f(x) = x^{2} + 1$ dan $g(x) = x - 3$. Rumus $(f \\circ g)(x)$ adalah …',
    options: [
      { key: 'A', text: '$x^{2} - 6x + 10$' },
      { key: 'B', text: '$x^{2} - 2$' },
      { key: 'C', text: '$x^{2} + 10$' },
      { key: 'D', text: '$x^{2} - 6x + 9$' },
    ],
    answer: 'A',
    explanation:
      '$(f \\circ g)(x) = f(x-3) = (x-3)^{2} + 1 = x^{2} - 6x + 9 + 1 = x^{2} - 6x + 10$. Opsi B adalah $(g \\circ f)(x) = (x^{2}+1) - 3 = x^{2} - 2$.',
    hints: ['Substitusikan seluruh $g(x)$ ke dalam variabel $x$ pada $f$.'],
    competencies: ['rumus komposisi fungsi'],
  },
  {
    id: 'kf-06',
    topicId: 'komposisi-fungsi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Diketahui $f(x) = \\sqrt{x}$ dan $g(x) = 2x + 4$. Domain dari $(f \\circ g)(x)$ adalah …',
    options: [
      { key: 'A', text: '$x \\geq -2$' },
      { key: 'B', text: '$x \\geq 2$' },
      { key: 'C', text: '$x \\geq -4$' },
      { key: 'D', text: 'semua bilangan real' },
    ],
    answer: 'A',
    explanation:
      '$(f \\circ g)(x) = f(2x+4) = \\sqrt{2x+4}$. Agar terdefinisi, isi akar tidak boleh negatif: $2x + 4 \\geq 0 \\Rightarrow x \\geq -2$. Jadi domainnya $x \\geq -2$.',
    hints: ['Syarat fungsi akar: bentuk di bawah tanda akar $\\geq 0$.'],
    competencies: ['domain komposisi fungsi'],
  },
  {
    id: 'kf-07',
    topicId: 'komposisi-fungsi',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Diketahui $f(x) = 2x + 1$ dan $(f \\circ g)(x) = 4x + 7$. Tentukan rumus $g(x)$.',
    answer: '2x+3',
    acceptedAnswers: ['2x + 3', '2 x + 3'],
    explanation:
      '$(f \\circ g)(x) = f(g(x)) = 2g(x) + 1$. Karena nilainya $4x + 7$, maka $2g(x) + 1 = 4x + 7 \\Rightarrow 2g(x) = 4x + 6 \\Rightarrow g(x) = 2x + 3$. Periksa: $f(2x+3) = 2(2x+3) + 1 = 4x + 7$, benar.',
    hints: ['Tulis $2g(x) + 1$ sama dengan hasil yang diketahui, lalu selesaikan untuk $g(x)$.'],
    competencies: ['menentukan fungsi dalam komposisi'],
  },
  {
    id: 'kf-08',
    topicId: 'komposisi-fungsi',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Diketahui $f(x) = x + 3$ dan $g(x) = x^{2} - 1$. Tentukan $(f \\circ g)(x)$ dan $(g \\circ f)(x)$, lalu jelaskan mengapa komposisi fungsi tidak komutatif.',
    answer:
      '$(f \\circ g)(x) = f(x^{2}-1) = (x^{2}-1) + 3 = x^{2} + 2$. Sedangkan $(g \\circ f)(x) = g(x+3) = (x+3)^{2} - 1 = x^{2} + 6x + 9 - 1 = x^{2} + 6x + 8$. Kedua hasil berbeda, sehingga $f \\circ g \\neq g \\circ f$. Komposisi tidak komutatif karena urutan pengerjaan memengaruhi hasil akhir.',
    explanation:
      'Kunci menekankan substitusi yang benar pada masing-masing urutan dan kesimpulan bahwa hasilnya tidak sama.',
    hints: ['Untuk $(f \\circ g)$, kerjakan $g$ dahulu; untuk $(g \\circ f)$, kerjakan $f$ dahulu.'],
    competencies: ['sifat komposisi', 'penalaran aljabar'],
  },
  {
    id: 'kf-09',
    topicId: 'komposisi-fungsi',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Diketahui $f(x) = 3x + 1$ dan $g(x) = x - 2$. Rumus $(f \\circ g)^{-1}(x)$ adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{x+5}{3}$' },
      { key: 'B', text: '$\\dfrac{x-5}{3}$' },
      { key: 'C', text: '$3x + 5$' },
      { key: 'D', text: '$\\dfrac{x+1}{3}$' },
    ],
    answer: 'A',
    explanation:
      '$(f \\circ g)(x) = 3(x-2) + 1 = 3x - 5$. Inversnya: $y = 3x - 5 \\Rightarrow x = \\dfrac{y+5}{3}$, jadi $(f \\circ g)^{-1}(x) = \\dfrac{x+5}{3}$. Periksa dengan sifat $(f \\circ g)^{-1} = g^{-1} \\circ f^{-1}$: $f^{-1}(x) = \\dfrac{x-1}{3}$ dan $g^{-1}(x) = x+2$, sehingga $g^{-1}\\!\\left(\\dfrac{x-1}{3}\\right) = \\dfrac{x-1}{3} + 2 = \\dfrac{x+5}{3}$, sama.',
    hints: ['Cari dahulu $(f \\circ g)(x)$, lalu tentukan inversnya.'],
    competencies: ['invers komposisi fungsi'],
  },
  {
    id: 'kf-10',
    topicId: 'komposisi-fungsi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah toko memberi diskon $25\\%$ terhadap harga barang, lalu menambahkan biaya layanan tetap sebesar $5$ ribu rupiah. Nyatakan total biaya sebagai komposisi fungsi, lalu hitung total biaya untuk harga awal $40$ ribu rupiah.',
    answer:
      'Diskon memodelkan $f(x) = 0{,}75x$, dan biaya layanan $g(x) = x + 5$ (dalam ribuan rupiah). Total biaya adalah $(g \\circ f)(x) = g(0{,}75x) = 0{,}75x + 5$. Untuk $x = 40$: $0{,}75(40) + 5 = 30 + 5 = 35$. Jadi total biaya $35$ ribu rupiah.',
    explanation:
      'Kunci menekankan pemilihan urutan: diskon dikenakan lebih dahulu, baru biaya layanan ditambahkan, sehingga komposisinya $(g \\circ f)(x)$.',
    hints: ['Diskon $25\\%$ berarti membayar $75\\%$ dari harga awal.'],
    competencies: ['pemodelan komposisi fungsi', 'kontekstual'],
  },
];

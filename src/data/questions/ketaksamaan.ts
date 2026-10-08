import type { Question } from '@/types/content';

export const ketaksamaanQuestions: Question[] = [
  {
    id: 'ktk-01',
    topicId: 'ketaksamaan',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Jika $2x - 3 > 5$, maka himpunan penyelesaiannya adalah …',
    options: [
      { key: 'A', text: '$x > 1$' },
      { key: 'B', text: '$x > 4$' },
      { key: 'C', text: '$x < 4$' },
      { key: 'D', text: '$x > -4$' },
    ],
    answer: 'B',
    explanation: '$2x - 3 > 5 \\Rightarrow 2x > 8 \\Rightarrow x > 4$.',
    hints: ['Tambahkan $3$ pada kedua ruas lebih dahulu.'],
    competencies: ['sifat ketaksamaan'],
  },
  {
    id: 'ktk-02',
    topicId: 'ketaksamaan',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Jika $a < b$ dan $c < 0$, maka pernyataan yang benar adalah …',
    options: [
      { key: 'A', text: '$ac < bc$' },
      { key: 'B', text: '$ac > bc$' },
      { key: 'C', text: '$ac = bc$' },
      { key: 'D', text: '$a + c > b + c$' },
    ],
    answer: 'B',
    explanation:
      'Mengalikan ketaksamaan dengan bilangan negatif membalik arah tanda, sehingga $ac > bc$.',
    hints: ['Perhatikan tanda bilangan pengali.'],
    competencies: ['sifat ketaksamaan'],
  },
  {
    id: 'ktk-03',
    topicId: 'ketaksamaan',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Tentukan nilai terkecil dari $x + \\dfrac{4}{x}$ untuk $x > 0$.',
    answer: '4',
    acceptedAnswers: ['4'],
    explanation:
      'Dengan AM-GM, $x + \\dfrac{4}{x} \\ge 2\\sqrt{x \\cdot \\dfrac{4}{x}} = 2\\sqrt{4} = 4$. Kesamaan saat $x = 2$.',
    hints: ['Gunakan $a + b \\ge 2\\sqrt{ab}$ dengan $a = x$ dan $b = \\dfrac{4}{x}$.'],
    competencies: ['AM-GM'],
  },
  {
    id: 'ktk-04',
    topicId: 'ketaksamaan',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Untuk setiap bilangan real $x$ dan $y$, pernyataan yang **selalu** benar adalah …',
    options: [
      { key: 'A', text: '$|x + y| \\ge |x| + |y|$' },
      { key: 'B', text: '$|x + y| \\le |x| + |y|$' },
      { key: 'C', text: '$|x + y| = |x| + |y|$' },
      { key: 'D', text: '$|x + y| \\ge |x| - |y| + 1$' },
    ],
    answer: 'B',
    explanation:
      'Ketaksamaan segitiga menyatakan $|x + y| \\le |x| + |y|$ untuk semua bilangan real $x$ dan $y$.',
    hints: ['Ingat bahwa nilai mutlak tidak pernah membuat hasil lebih besar dari jumlah nilai mutlaknya.'],
    competencies: ['ketaksamaan segitiga'],
  },
  {
    id: 'ktk-05',
    topicId: 'ketaksamaan',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Tentukan himpunan penyelesaian dari $3 - 2x \\ge 7$.',
    answer: 'x <= -2',
    acceptedAnswers: ['x <= -2', 'x ≤ -2', 'x≤-2', '(-∞,-2]', '(-inf,-2]'],
    explanation:
      '$3 - 2x \\ge 7 \\Rightarrow -2x \\ge 4$. Membagi dengan $-2$ membalik tanda, sehingga $x \\le -2$.',
    hints: ['Membagi dengan bilangan negatif membalik arah ketaksamaan.'],
    competencies: ['sifat ketaksamaan', 'penyelesaian pertidaksamaan'],
  },
  {
    id: 'ktk-06',
    topicId: 'ketaksamaan',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Untuk $x > 0$, nilai minimum dari $2x + \\dfrac{8}{x}$ adalah …',
    options: [
      { key: 'A', text: '$4$' },
      { key: 'B', text: '$6$' },
      { key: 'C', text: '$8$' },
      { key: 'D', text: '$16$' },
    ],
    answer: 'C',
    explanation:
      '$2x + \\dfrac{8}{x} \\ge 2\\sqrt{2x \\cdot \\dfrac{8}{x}} = 2\\sqrt{16} = 8$. Kesamaan saat $2x = \\dfrac{8}{x}$, yaitu $x = 2$.',
    hints: ['Kalikan suku $2x$ dan $\\dfrac{8}{x}$ untuk melihat hasilnya konstan.'],
    competencies: ['AM-GM', 'optimasi'],
  },
  {
    id: 'ktk-07',
    topicId: 'ketaksamaan',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'konsep',
    prompt: 'Diketahui $x + y = 6$. Tentukan nilai minimum dari $x^2 + y^2$.',
    answer: '18',
    acceptedAnswers: ['18'],
    explanation:
      'Dengan $c = d = 1$ pada Cauchy-Schwarz: $(x^2 + y^2)(1+1) \\ge (x+y)^2 = 36$, sehingga $x^2 + y^2 \\ge 18$. Kesamaan saat $x = y = 3$.',
    hints: ['Gunakan $(x^2+y^2)(1^2+1^2) \\ge (x+y)^2$.'],
    competencies: ['Cauchy-Schwarz', 'optimasi'],
  },
  {
    id: 'ktk-08',
    topicId: 'ketaksamaan',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'konsep',
    prompt:
      'Jelaskan bunyi ketaksamaan AM-GM untuk dua bilangan, syarat keberlakuannya, dan kapan kesamaan tercapai. Berikan satu contoh penggunaannya untuk mencari nilai minimum.',
    answer:
      'Untuk dua bilangan tak negatif $a$ dan $b$ berlaku $\\dfrac{a+b}{2} \\ge \\sqrt{ab}$, yaitu $a + b \\ge 2\\sqrt{ab}$. Syaratnya $a \\ge 0$ dan $b \\ge 0$. Kesamaan tercapai tepat saat $a = b$. Contoh: untuk $x > 0$, nilai minimum $x + \\dfrac{4}{x}$ adalah $2\\sqrt{4} = 4$, tercapai saat $x = 2$.',
    explanation:
      'Kunci jawaban: rumus AM-GM dua variabel, syarat tak negatif, syarat kesamaan $a = b$, dan satu contoh optimasi yang benar.',
    hints: ['Sebutkan syarat $a, b \\ge 0$.', 'Kesamaan terjadi ketika kedua bilangan sama.'],
    competencies: ['AM-GM', 'komunikasi matematis'],
  },
  {
    id: 'ktk-09',
    topicId: 'ketaksamaan',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Sebuah kebun berbentuk persegi panjang memiliki keliling $40$ m. Luas maksimum yang dapat dicapai adalah …',
    options: [
      { key: 'A', text: '$80$ m$^2$' },
      { key: 'B', text: '$100$ m$^2$' },
      { key: 'C', text: '$160$ m$^2$' },
      { key: 'D', text: '$200$ m$^2$' },
    ],
    answer: 'B',
    explanation:
      'Dari keliling, $l + w = 20$. Dengan AM-GM, $lw \\le \\left(\\dfrac{l+w}{2}\\right)^2 = 10^2 = 100$. Luas maksimum $100$ m$^2$, tepat saat kebun berbentuk persegi dengan sisi $10$ m.',
    hints: ['Ubah keliling menjadi $l + w$.', 'Gunakan hasil kali maksimum saat kedua sisi sama.'],
    competencies: ['AM-GM', 'pemodelan'],
  },
  {
    id: 'ktk-10',
    topicId: 'ketaksamaan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Buktikan bahwa untuk setiap bilangan real $a$ dan $b$ berlaku $a^2 + b^2 \\ge 2ab$. Jelaskan mengapa kesamaan hanya terjadi saat $a = b$.',
    answer:
      'Perhatikan bahwa $(a-b)^2 \\ge 0$ untuk semua bilangan real, karena kuadrat selalu tak negatif. Jabarkan: $a^2 - 2ab + b^2 \\ge 0$, sehingga $a^2 + b^2 \\ge 2ab$. Kesamaan terjadi tepat ketika $(a-b)^2 = 0$, yaitu $a - b = 0$ atau $a = b$.',
    explanation:
      'Kunci jawaban: memulai dari kuadrat tak negatif $(a-b)^2 \\ge 0$, menjabarkannya, dan menafsirkan syarat kesamaan.',
    hints: ['Mulai dari $(a-b)^2 \\ge 0$.', 'Kapan suatu kuadrat bernilai nol?'],
    competencies: ['penalaran', 'pembuktian'],
  },
  {
    id: 'ktk-11',
    topicId: 'ketaksamaan',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Diketahui $x > 0$ dan $y > 0$ dengan $xy = 36$. Tentukan nilai minimum dari $x + y$.',
    answer: '12',
    acceptedAnswers: ['12'],
    explanation:
      'Dengan AM-GM, $x + y \\ge 2\\sqrt{xy} = 2\\sqrt{36} = 12$. Kesamaan saat $x = y = 6$.',
    hints: ['Karena hasil kalinya tetap, gunakan AM-GM untuk menjumlahkan.'],
    competencies: ['AM-GM', 'optimasi'],
  },
  {
    id: 'ktk-12',
    topicId: 'ketaksamaan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah taman berbentuk persegi panjang akan dipagari. Satu sisinya dibatasi tembok sehingga tidak perlu dipagari. Jika pagar yang tersedia $40$ m, tentukan ukuran taman agar luasnya maksimum dan hitung luas maksimum itu.',
    answer:
      'Misal sisi yang tegak lurus tembok berukuran $x$ (ada dua sisi) dan sisi yang sejajar tembok berukuran $y$. Pagar memenuhi $2x + y = 40$, sehingga $y = 40 - 2x$. Luas $A = xy = x(40 - 2x) = 40x - 2x^2$. Fungsi kuadrat ini terbuka ke bawah dengan puncak di $x = \\dfrac{40}{2 \\cdot 2} = 10$. Maka $y = 20$ dan $A = 10 \\cdot 20 = 200$ m$^2$. Jadi ukurannya $10$ m (dua sisi tegak) dan $20$ m (sisi sejajar tembok), dengan luas maksimum $200$ m$^2$.',
    explanation:
      'Kunci jawaban: memodelkan $2x + y = 40$, menyusun luas $A = x(40-2x)$, lalu menemukan puncak parabola.',
    hints: [
      'Hanya tiga sisi yang dipagari.',
      'Nyatakan $y$ dalam $x$ lalu susun fungsi luas.',
      'Puncak parabola $f(x) = ax^2 + bx + c$ ada di $x = -\\dfrac{b}{2a}$.',
    ],
    competencies: ['pemodelan', 'optimasi', 'fungsi kuadrat'],
  },
  {
    id: 'ktk-13',
    topicId: 'ketaksamaan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Untuk bilangan positif $a$ dan $b$, buktikan bahwa $(a+b)\\left(\\dfrac{1}{a} + \\dfrac{1}{b}\\right) \\ge 4$ dan tentukan kapan kesamaan tercapai.',
    answer:
      'Jabarkan: $(a+b)\\left(\\dfrac{1}{a} + \\dfrac{1}{b}\\right) = 1 + \\dfrac{a}{b} + \\dfrac{b}{a} + 1 = 2 + \\dfrac{a}{b} + \\dfrac{b}{a}$. Dengan AM-GM, $\\dfrac{a}{b} + \\dfrac{b}{a} \\ge 2\\sqrt{\\dfrac{a}{b} \\cdot \\dfrac{b}{a}} = 2$. Jadi hasilnya $\\ge 2 + 2 = 4$. Kesamaan terjadi saat $\\dfrac{a}{b} = \\dfrac{b}{a}$, yaitu $a = b$ (karena $a, b > 0$).',
    explanation:
      'Kunci jawaban: menjabarkan hasil kali, mengenali bentuk $\\dfrac{a}{b} + \\dfrac{b}{a}$, lalu menerapkan AM-GM.',
    hints: ['Jabarkan hasil kalinya lebih dahulu.', 'Terapkan AM-GM pada $\\dfrac{a}{b}$ dan $\\dfrac{b}{a}$.'],
    competencies: ['AM-GM', 'penalaran', 'pembuktian'],
  },
  {
    id: 'ktk-14',
    topicId: 'ketaksamaan',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'evaluasi',
    prompt: 'Manakah pernyataan berikut yang **salah**?',
    options: [
      { key: 'A', text: 'Untuk $x > 0$ berlaku $x + \\dfrac{1}{x} \\ge 2$.' },
      { key: 'B', text: 'Untuk setiap $x \\ne 0$ berlaku $x + \\dfrac{1}{x} \\ge 2$.' },
      { key: 'C', text: 'AM-GM mensyaratkan kedua bilangan tak negatif.' },
      { key: 'D', text: 'Kesamaan $x + \\dfrac{1}{x} = 2$ terjadi saat $x = 1$.' },
    ],
    answer: 'B',
    explanation:
      'Pernyataan B salah. Untuk $x < 0$, misalnya $x = -1$, nilai $x + \\dfrac{1}{x} = -2 < 2$. AM-GM tidak berlaku karena salah satu bilangan negatif.',
    hints: ['Uji pernyataan dengan bilangan negatif.'],
    competencies: ['AM-GM', 'evaluasi'],
  },
];

import type { Question } from '@/types/content';

export const limitFungsiQuestions: Question[] = [
  {
    id: 'lim-01',
    topicId: 'limit-fungsi',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Nilai $\\lim_{x \\to 3} (2x + 1)$ adalah …',
    options: [
      { key: 'A', text: '$5$' },
      { key: 'B', text: '$6$' },
      { key: 'C', text: '$7$' },
      { key: 'D', text: '$9$' },
    ],
    answer: 'C',
    explanation:
      'Karena $2x+1$ adalah fungsi polinomial, limitnya cukup dihitung dengan substitusi langsung: $\\lim_{x \\to 3}(2x+1) = 2(3)+1 = 7$.',
    hints: ['Substitusikan $x = 3$ langsung ke fungsi.'],
    competencies: ['limit fungsi polinomial', 'substitusi langsung'],
  },
  {
    id: 'lim-02',
    topicId: 'limit-fungsi',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'konsep',
    prompt: 'Tentukan nilai $\\lim_{x \\to 2} \\dfrac{x^{2} - 4}{x - 2}$.',
    answer: '4',
    acceptedAnswers: ['4', '4'],
    explanation:
      'Substitusi langsung memberi $\\dfrac{0}{0}$, bentuk tak tentu. Faktorkan pembilangnya: $\\dfrac{(x-2)(x+2)}{x-2} = x+2$ untuk $x \\neq 2$. Maka limitnya $\\lim_{x \\to 2}(x+2) = 4$.',
    hints: ['Gunakan selisih kuadrat $x^{2}-4=(x-2)(x+2)$.', 'Coret faktor yang sama, lalu substitusikan.'],
    competencies: ['pemfaktoran', 'limit bentuk tak tentu'],
  },
  {
    id: 'lim-03',
    topicId: 'limit-fungsi',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Nilai $\\lim_{x \\to 0} \\dfrac{3x^{2} - 2x}{x}$ adalah …',
    options: [
      { key: 'A', text: '$2$' },
      { key: 'B', text: '$-2$' },
      { key: 'C', text: '$0$' },
      { key: 'D', text: '$-1$' },
    ],
    answer: 'B',
    explanation:
      'Untuk $x \\neq 0$, $\\dfrac{3x^{2}-2x}{x} = 3x - 2$. Ketika $x \\to 0$, nilainya menuju $0 - 2 = -2$.',
    hints: ['Faktorkan $x$ pada pembilang lalu sederhanakan.'],
    competencies: ['pemfaktoran', 'limit bentuk tak tentu'],
  },
  {
    id: 'lim-04',
    topicId: 'limit-fungsi',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Tentukan nilai $\\lim_{x \\to \\infty} \\dfrac{2x + 1}{x}$.',
    answer: '2',
    acceptedAnswers: ['2', '2'],
    explanation:
      'Bagi pembilang dan penyebut dengan $x$: $\\dfrac{2 + \\frac{1}{x}}{1}$. Karena $\\dfrac{1}{x} \\to 0$ saat $x \\to \\infty$, hasilnya $\\dfrac{2 + 0}{1} = 2$.',
    hints: ['Bagi pembilang dan penyebut dengan pangkat tertinggi $x$.', 'Ingat $\\dfrac{1}{x} \\to 0$ ketika $x \\to \\infty$.'],
    competencies: ['limit di tak hingga'],
  },
  {
    id: 'lim-05',
    topicId: 'limit-fungsi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Nilai $\\lim_{x \\to 0} \\dfrac{\\sqrt{x + 9} - 3}{x}$ adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{1}{3}$' },
      { key: 'B', text: '$\\dfrac{1}{6}$' },
      { key: 'C', text: '$\\dfrac{1}{9}$' },
      { key: 'D', text: '$3$' },
    ],
    answer: 'B',
    explanation:
      'Kalikan dengan akar sekawan $\\sqrt{x+9}+3$: $\\dfrac{(x+9)-9}{x(\\sqrt{x+9}+3)} = \\dfrac{1}{\\sqrt{x+9}+3}$. Saat $x \\to 0$, hasilnya $\\dfrac{1}{3+3} = \\dfrac{1}{6}$.',
    hints: ['Kalikan pembilang dan penyebut dengan $\\sqrt{x+9}+3$.', 'Manfaatkan $(\\sqrt{u}-3)(\\sqrt{u}+3)=u-9$.'],
    competencies: ['perkalian akar sekawan', 'limit bentuk tak tentu'],
  },
  {
    id: 'lim-06',
    topicId: 'limit-fungsi',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Tentukan nilai $\\lim_{x \\to \\infty} \\dfrac{4x^{2} - 3x}{2x^{2} + 5}$.',
    answer: '2',
    acceptedAnswers: ['2', '2'],
    explanation:
      'Bagi pembilang dan penyebut dengan $x^{2}$: $\\dfrac{4 - \\frac{3}{x}}{2 + \\frac{5}{x^{2}}}$. Suku-suku $\\frac{3}{x}$ dan $\\frac{5}{x^{2}}$ menuju $0$, sehingga hasilnya $\\dfrac{4}{2} = 2$.',
    hints: ['Bentuk ini $\\dfrac{\\infty}{\\infty}$; bagi dengan $x^{2}$.', 'Bandingkan koefisien suku berpangkat tertinggi.'],
    competencies: ['limit di tak hingga', 'pangkat tertinggi'],
  },
  {
    id: 'lim-07',
    topicId: 'limit-fungsi',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Fungsi $f(x) = \\dfrac{x^{2} - 4}{x - 2}$ tidak terdefinisi di $x = 2$. Jelaskan mengapa $\\lim_{x \\to 2} f(x)$ tetap ada, lalu tentukan nilainya. Kaitkan penjelasanmu dengan makna limit sebagai nilai yang didekati.',
    answer:
      'Limit memeriksa perilaku $f(x)$ **di sekitar** $x = 2$, bukan nilai $f(2)$ yang memang tidak ada. Untuk $x \\neq 2$, pembilang dapat difaktorkan: $f(x) = \\dfrac{(x-2)(x+2)}{x-2} = x + 2$. Bentuk sederhana ini berlaku di semua $x$ kecuali $x = 2$, dan ketika $x$ makin dekat ke $2$ dari kedua arah, nilai $x+2$ makin dekat ke $4$. Jadi $\\lim_{x \\to 2} f(x) = 4$, walaupun $f(2)$ tidak terdefinisi.',
    explanation:
      'Kunci: menegaskan limit hanya bergantung pada nilai di sekitar titik, menyederhanakan pecahan melalui pemfaktoran, lalu menyimpulkan nilainya $4$.',
    hints: [
      'Faktorkan $x^{2}-4$ menjadi $(x-2)(x+2)$.',
      'Penyederhanaan berlaku untuk $x \\neq 2$; justru inilah peran limit.',
    ],
    competencies: ['makna limit', 'pemfaktoran', 'penalaran'],
  },
  {
    id: 'lim-08',
    topicId: 'limit-fungsi',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'konsep',
    prompt: 'Tentukan nilai $\\lim_{x \\to 4} \\dfrac{x - 4}{\\sqrt{x} - 2}$.',
    answer: '4',
    acceptedAnswers: ['4', '4'],
    explanation:
      'Kalikan dengan akar sekawan $\\sqrt{x}+2$: $\\dfrac{(x-4)(\\sqrt{x}+2)}{(\\sqrt{x}-2)(\\sqrt{x}+2)} = \\dfrac{(x-4)(\\sqrt{x}+2)}{x-4} = \\sqrt{x}+2$ untuk $x \\neq 4$. Maka limitnya $\\sqrt{4}+2 = 4$.',
    hints: ['Kalikan dengan $\\dfrac{\\sqrt{x}+2}{\\sqrt{x}+2}$.', 'Gunakan $(\\sqrt{x}-2)(\\sqrt{x}+2) = x - 4$.'],
    competencies: ['perkalian akar sekawan', 'limit bentuk tak tentu'],
  },
  {
    id: 'lim-09',
    topicId: 'limit-fungsi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Nilai $\\lim_{x \\to 3} \\dfrac{x^{2} - 9}{x^{2} - 3x}$ adalah …',
    options: [
      { key: 'A', text: '$0$' },
      { key: 'B', text: '$1$' },
      { key: 'C', text: '$2$' },
      { key: 'D', text: '$3$' },
    ],
    answer: 'C',
    explanation:
      'Faktorkan: $\\dfrac{(x-3)(x+3)}{x(x-3)} = \\dfrac{x+3}{x}$ untuk $x \\neq 3$. Maka limitnya $\\dfrac{3+3}{3} = 2$.',
    hints: ['Faktorkan pembilang $x^{2}-9$ dan penyebut $x^{2}-3x$.', 'Coret faktor $(x-3)$ yang sama.'],
    competencies: ['pemfaktoran', 'limit bentuk tak tentu'],
  },
  {
    id: 'lim-10',
    topicId: 'limit-fungsi',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'penalaran',
    prompt: 'Tentukan nilai $\\lim_{x \\to \\infty} \\left(\\sqrt{x^{2} + 2x} - x\\right)$.',
    answer: '1',
    acceptedAnswers: ['1', '1'],
    explanation:
      'Kalikan dengan akar sekawan: $\\left(\\sqrt{x^{2}+2x}-x\\right)\\dfrac{\\sqrt{x^{2}+2x}+x}{\\sqrt{x^{2}+2x}+x} = \\dfrac{2x}{\\sqrt{x^{2}+2x}+x}$. Bagi pembilang dan penyebut dengan $x$: $\\dfrac{2}{\\sqrt{1+\\frac{2}{x}}+1}$. Saat $x \\to \\infty$, hasilnya $\\dfrac{2}{1+1} = 1$.',
    hints: [
      'Bentuk ini $\\infty - \\infty$; kalikan dengan akar sekawan.',
      'Setelah mengalikan, bagi pembilang dan penyebut dengan $x$.',
    ],
    competencies: ['akar sekawan', 'limit di tak hingga', 'penalaran'],
  },
  {
    id: 'lim-11',
    topicId: 'limit-fungsi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Posisi sebuah sepeda (dalam meter) setelah $t$ detik dimodelkan $s(t) = t^{2} + 3t$. Tentukan kecepatan sesaat pada $t = 2$ detik dengan menghitung limit kecepatan rata-rata pada selang $[2,\\, 2+h]$ ketika $h \\to 0$. Tuliskan langkah-langkahnya.',
    answer:
      'Kecepatan rata-rata pada selang $[2, 2+h]$ adalah $\\dfrac{s(2+h)-s(2)}{h}$. Hitung $s(2+h) = (2+h)^{2}+3(2+h) = 4+4h+h^{2}+6+3h = 10+7h+h^{2}$ dan $s(2)=4+6=10$. Maka $\\dfrac{s(2+h)-s(2)}{h} = \\dfrac{7h+h^{2}}{h} = 7 + h$ (untuk $h \\neq 0$). Kecepatan sesaat adalah limit $h \\to 0$: $\\lim_{h \\to 0}(7+h) = 7$ m/s.',
    explanation:
      'Kunci: menyusun hasil bagi selisih, menyederhanakannya faktor $h$, lalu mengambil limit $h \\to 0$ sehingga diperoleh $7$ m/s.',
    hints: [
      'Kecepatan rata-rata adalah $\\dfrac{s(2+h)-s(2)}{h}$.',
      'Setelah menyederhanakan, ambil $h \\to 0$.',
    ],
    competencies: ['hasil bagi selisih', 'limit menuju turunan', 'pemodelan'],
  },
  {
    id: 'lim-12',
    topicId: 'limit-fungsi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Diketahui $\\lim_{x \\to 2} \\dfrac{x^{2} - a x}{x - 2}$ ada. Tentukan nilai $a$ dan hitung nilai limitnya. Jelaskan alasan pemilihan nilai $a$.',
    answer:
      'Jika $a$ dipilih sembarang, substitusi $x=2$ memberi $\\dfrac{4-2a}{0}$, yang menuju tak hingga kecuali pembilangnya juga nol. Agar limit ada, penyebut dan pembilang harus memiliki faktor $(x-2)$, sehingga pembilang harus nol di $x=2$: $4 - 2a = 0$, yaitu $a = 2$. Dengan demikian $\\dfrac{x^{2}-2x}{x-2} = \\dfrac{x(x-2)}{x-2} = x$ untuk $x \\neq 2$, dan limitnya $\\lim_{x \\to 2} x = 2$.',
    explanation:
      'Kunci: menyadari bahwa limit pecahan dengan penyebut menuju $0$ hanya ada bila pembilang juga menuju $0$, menyelesaikan $4-2a=0$, lalu menyederhanakan dan menghitung limitnya $2$.',
    hints: [
      'Agar limit ada saat penyebut $\\to 0$, pembilang harus $\\to 0$ juga.',
      'Setelah $a$ ditemukan, faktorkan dan coret $(x-2)$.',
    ],
    competencies: ['parameter limit', 'bentuk tak tentu', 'penalaran'],
  },
  {
    id: 'lim-13',
    topicId: 'limit-fungsi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Seorang siswa berkata, "Karena substitusi $x = 1$ ke $\\dfrac{x^{2}-1}{x-1}$ menghasilkan $\\dfrac{0}{0}$, maka limitnya tidak ada." Nilai kebenaran pernyataan ini, jelaskan kesalahannya, dan hitung nilai limit yang benar.',
    answer:
      'Pernyataan itu salah. Bentuk $\\dfrac{0}{0}$ adalah bentuk **tak tentu**, bukan bukti bahwa limit tidak ada; ia hanya menandakan perlu penyederhanaan. Faktorkan pembilang: $\\dfrac{(x-1)(x+1)}{x-1} = x+1$ untuk $x \\neq 1$. Ketika $x \\to 1$, nilai $x+1 \\to 2$. Jadi limitnya ada dan bernilai $2$.',
    explanation:
      'Kunci: membedakan bentuk tak tentu dari limit yang tidak ada, menyederhanakan pecahan dengan pemfaktoran, dan memperoleh nilai $2$.',
    hints: [
      '$\\dfrac{0}{0}$ berarti perlu disederhanakan, bukan langsung disimpulkan tidak ada.',
      'Faktorkan $x^{2}-1=(x-1)(x+1)$ lalu coret.',
    ],
    competencies: ['bentuk tak tentu', 'pemfaktoran', 'evaluasi'],
  },
  {
    id: 'lim-14',
    topicId: 'limit-fungsi',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Konsentrasi obat dalam darah (mg/L) setelah $t$ jam dimodelkan $C(t) = \\dfrac{8t}{t + 2}$. Tentukan konsentrasi jangka panjang ketika $t \\to \\infty$.',
    answer: '8',
    acceptedAnswers: ['8', '8 mg/L'],
    explanation:
      'Bagi pembilang dan penyebut dengan $t$: $C(t) = \\dfrac{8}{1 + \\frac{2}{t}}$. Karena $\\dfrac{2}{t} \\to 0$ saat $t \\to \\infty$, konsentrasi jangka panjangnya $\\dfrac{8}{1} = 8$ mg/L.',
    hints: ['Bagi pembilang dan penyebut dengan $t$.', 'Gunakan $\\dfrac{1}{t} \\to 0$ ketika $t \\to \\infty$.'],
    competencies: ['limit di tak hingga', 'pemodelan kontekstual'],
  },
];

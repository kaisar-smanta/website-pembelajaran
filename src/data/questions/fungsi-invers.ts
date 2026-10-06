import type { Question } from '@/types/content';

export const fungsiInversQuestions: Question[] = [
  {
    id: 'fi-01',
    topicId: 'fungsi-invers',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Jika $f(x) = 2x + 3$, maka $f^{-1}(x) = \\ldots$',
    options: [
      { key: 'A', text: '$\\dfrac{x-3}{2}$' },
      { key: 'B', text: '$\\dfrac{x+3}{2}$' },
      { key: 'C', text: '$2x-3$' },
      { key: 'D', text: '$\\dfrac{1}{2x+3}$' },
    ],
    answer: 'A',
    explanation:
      'Tulis $y = 2x + 3$, maka $2x = y - 3$ sehingga $x = \\dfrac{y-3}{2}$. Setelah menukar $x$ dan $y$, diperoleh $f^{-1}(x) = \\dfrac{x-3}{2}$. Periksa: $f(5)=13$ dan $f^{-1}(13)=\\dfrac{10}{2}=5$.',
    hints: ['Jadikan $x$ sebagai subjek rumus, lalu tukar nama $x$ dan $y$.'],
    competencies: ['invers fungsi linear'],
  },
  {
    id: 'fi-02',
    topicId: 'fungsi-invers',
    difficulty: 'dasar',
    type: 'open-response',
    category: 'konsep',
    prompt:
      'Jelaskan mengapa $f(x) = x^{2}$ dengan domain bilangan real $\\mathbb{R}$ tidak memiliki fungsi invers, lalu jelaskan cara memperbaikinya agar memiliki invers.',
    answer:
      '$f(x) = x^{2}$ bukan fungsi satu-satu karena dua masukan berbeda dapat memberi hasil sama, misalnya $f(2) = f(-2) = 4$. Padahal fungsi hanya memiliki invers bila bijektif (khususnya injektif). Agar menjadi satu-satu, domainnya dibatasi, misalnya $x \\geq 0$. Dengan pembatasan itu, $f^{-1}(x) = \\sqrt{x}$ untuk $x \\geq 0$.',
    explanation:
      'Kunci menekankan gagasan injektif: satu hasil tidak boleh berasal dari lebih dari satu masukan, dan pembatasan domain adalah cara memperbaikinya.',
    hints: ['Cari dua nilai $x$ berbeda yang menghasilkan $f(x)$ sama.'],
    competencies: ['fungsi bijektif', 'domain fungsi'],
  },
  {
    id: 'fi-03',
    topicId: 'fungsi-invers',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Tentukan rumus invers dari $f(x) = 5x - 10$.',
    answer: '(x+10)/5',
    acceptedAnswers: ['\\frac{x+10}{5}', 'x/5+2', '\\frac{1}{5}x+2', '1/5 x + 2'],
    explanation:
      '$y = 5x - 10 \\Rightarrow 5x = y + 10 \\Rightarrow x = \\dfrac{y+10}{5}$. Jadi $f^{-1}(x) = \\dfrac{x+10}{5}$.',
    hints: ['Pindahkan $-10$ ke ruas kiri, lalu bagi dengan $5$.'],
    competencies: ['invers fungsi linear'],
  },
  {
    id: 'fi-04',
    topicId: 'fungsi-invers',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Diketahui $f(x) = 2x + 3$. Tentukan nilai $f^{-1}(7)$.',
    answer: '2',
    explanation:
      'Karena $f(2) = 2(2) + 3 = 7$, maka $f^{-1}(7) = 2$. Cara lain: $f^{-1}(x) = \\dfrac{x-3}{2}$, sehingga $f^{-1}(7) = \\dfrac{7-3}{2} = 2$.',
    hints: ['Cari nilai $x$ yang membuat $f(x) = 7$.'],
    competencies: ['nilai fungsi invers'],
  },
  {
    id: 'fi-05',
    topicId: 'fungsi-invers',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Invers dari $f(x) = \\dfrac{x+2}{x-1}$, $x \\neq 1$, adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{x+2}{x-1}$' },
      { key: 'B', text: '$\\dfrac{x-2}{x+1}$' },
      { key: 'C', text: '$\\dfrac{x+2}{x+1}$' },
      { key: 'D', text: '$\\dfrac{1-x}{x+2}$' },
    ],
    answer: 'A',
    explanation:
      'Tulis $y = \\dfrac{x+2}{x-1}$, maka $y(x-1) = x+2 \\Rightarrow xy - y = x + 2 \\Rightarrow x(y-1) = y + 2 \\Rightarrow x = \\dfrac{y+2}{y-1}$. Setelah menukar $x$ dan $y$, diperoleh $f^{-1}(x) = \\dfrac{x+2}{x-1}$. Fungsi ini invers terhadap dirinya sendiri.',
    hints: ['Kalikan silang, lalu kumpulkan suku yang memuat $x$.'],
    competencies: ['invers fungsi rasional'],
  },
  {
    id: 'fi-06',
    topicId: 'fungsi-invers',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Diketahui $f(x) = x^{2} + 1$ dengan domain $x \\geq 0$. Rumus $f^{-1}(x)$ adalah …',
    options: [
      { key: 'A', text: '$\\sqrt{x-1}$, untuk $x \\geq 1$' },
      { key: 'B', text: '$\\sqrt{x+1}$, untuk $x \\geq -1$' },
      { key: 'C', text: '$x^{2}-1$, untuk $x \\geq 0$' },
      { key: 'D', text: '$\\dfrac{1}{x^{2}+1}$' },
    ],
    answer: 'A',
    explanation:
      '$y = x^{2} + 1 \\Rightarrow x^{2} = y - 1 \\Rightarrow x = \\sqrt{y-1}$ karena $x \\geq 0$ (ambil akar positif). Jadi $f^{-1}(x) = \\sqrt{x-1}$ dengan syarat $x \\geq 1$. Periksa: $f(2) = 5$ dan $f^{-1}(5) = \\sqrt{4} = 2$.',
    hints: ['Karena domain $x \\geq 0$, gunakan akar positif saja.'],
    competencies: ['invers fungsi kuadrat', 'pembatasan domain'],
  },
  {
    id: 'fi-07',
    topicId: 'fungsi-invers',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Diketahui $f^{-1}(x) = 2x + 3$. Tentukan rumus $f(x)$.',
    answer: '(x-3)/2',
    acceptedAnswers: ['\\frac{x-3}{2}', 'x/2-3/2', '\\frac{1}{2}x-\\frac{3}{2}'],
    explanation:
      'Misal $y = f^{-1}(x) = 2x + 3$. Karena $f$ adalah invers dari $f^{-1}$, tukar peran $x$ dan $y$: $x = 2y + 3 \\Rightarrow y = \\dfrac{x-3}{2}$. Jadi $f(x) = \\dfrac{x-3}{2}$.',
    hints: ['Invers dari $f^{-1}$ adalah $f$ itu sendiri.'],
    competencies: ['invers dari fungsi invers'],
  },
  {
    id: 'fi-08',
    topicId: 'fungsi-invers',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Jelaskan mengapa $f^{-1}(x)$ tidak sama dengan $\\dfrac{1}{f(x)}$. Sertakan contoh dengan $f(x) = 2x + 3$.',
    answer:
      '$f^{-1}$ adalah fungsi yang membalik pemetaan, bukan hasil bagi $1$ dibagi $f(x)$. Untuk $f(x) = 2x + 3$, inversnya adalah $f^{-1}(x) = \\dfrac{x-3}{2}$, sedangkan $\\dfrac{1}{f(x)} = \\dfrac{1}{2x+3}$. Keduanya berbeda: misalnya $f^{-1}(3) = 0$, tetapi $\\dfrac{1}{f(3)} = \\dfrac{1}{9}$. Jadi $f^{-1}(x) \\neq \\dfrac{1}{f(x)}$.',
    explanation:
      'Kunci menekankan perbedaan makna notasi: $-1$ pada $f^{-1}$ menandakan fungsi invers, bukan pangkat $-1$ yang berarti kebalikan.',
    hints: ['Hitung $f^{-1}(3)$ dan $\\dfrac{1}{f(3)}$ lalu bandingkan.'],
    competencies: ['pemahaman notasi invers'],
  },
  {
    id: 'fi-09',
    topicId: 'fungsi-invers',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Grafik fungsi $f$ melalui titik $(5, 4)$. Titik yang pasti dilalui grafik $f^{-1}$ adalah …',
    options: [
      { key: 'A', text: '$(4, 5)$' },
      { key: 'B', text: '$(-5, 4)$' },
      { key: 'C', text: '$(5, -4)$' },
      { key: 'D', text: '$\\left(\\tfrac{1}{5}, \\tfrac{1}{4}\\right)$' },
    ],
    answer: 'A',
    explanation:
      'Karena $f(5) = 4$, maka $f^{-1}(4) = 5$, sehingga grafik $f^{-1}$ melalui $(4, 5)$. Titik ini adalah pencerminan $(5,4)$ terhadap garis $y = x$.',
    hints: ['Jika $(a,b)$ pada grafik $f$, maka $(b,a)$ pada grafik $f^{-1}$.'],
    competencies: ['grafik fungsi invers', 'pencerminan terhadap $y=x$'],
  },
  {
    id: 'fi-10',
    topicId: 'fungsi-invers',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Hubungan suhu Celsius $C$ dan Fahrenheit $F$ adalah $F = \\dfrac{9}{5}C + 32$. Tentukan rumus $C$ sebagai fungsi dari $F$, lalu hitung suhu dalam Celsius ketika $F = 77$.',
    answer:
      'Selesaikan untuk $C$: $\\dfrac{9}{5}C = F - 32$, sehingga $C = \\dfrac{5}{9}(F - 32)$. Inilah fungsi invers dari hubungan tersebut. Untuk $F = 77$: $C = \\dfrac{5}{9}(77 - 32) = \\dfrac{5}{9}(45) = 25$. Jadi suhunya $25^{\\circ}$C.',
    explanation:
      'Kunci menekankan langkah menurunkan invers (menyatakan $C$ dalam $F$) dan penerapannya pada nilai $F = 77$ yang menghasilkan $C = 25$.',
    hints: ['Kurangi $32$ terlebih dahulu, lalu kalikan dengan $\\dfrac{5}{9}$.'],
    competencies: ['fungsi invers', 'pemodelan kontekstual'],
  },
];

import type { Question } from '@/types/content';

export const integralQuestions: Question[] = [
  {
    id: 'in-01',
    topicId: 'integral',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Hasil dari $\\displaystyle\\int 6x\\,dx$ adalah …',
    options: [
      { key: 'A', text: '$3x^{2} + C$' },
      { key: 'B', text: '$6x^{2} + C$' },
      { key: 'C', text: '$3x + C$' },
      { key: 'D', text: '$x^{2} + C$' },
    ],
    answer: 'A',
    explanation:
      'Dengan aturan pangkat, $\\displaystyle\\int 6x\\,dx = 6 \\cdot \\dfrac{x^{2}}{2} + C = 3x^{2} + C$.',
    hints: ['Gunakan $\\displaystyle\\int x^{n}\\,dx = \\dfrac{x^{n+1}}{n+1} + C$.'],
    competencies: ['integral tak tentu polinomial'],
  },
  {
    id: 'in-02',
    topicId: 'integral',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Hitung $\\displaystyle\\int_{0}^{1} 3x^{2}\\,dx$.',
    answer: '1',
    explanation:
      '$\\displaystyle\\int_{0}^{1} 3x^{2}\\,dx = \\Big[x^{3}\\Big]_{0}^{1} = 1 - 0 = 1$.',
    hints: ['Antiturunan $3x^{2}$ adalah $x^{3}$.'],
    competencies: ['integral tentu'],
  },
  {
    id: 'in-03',
    topicId: 'integral',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'konsep',
    prompt: 'Tentukan $\\displaystyle\\int \\left(3x^{2} - 4x + 5\\right) dx$.',
    answer: 'x^3 - 2x^2 + 5x + C',
    acceptedAnswers: ['x^{3}-2x^{2}+5x+C', 'x^3-2x^2+5x+C', 'x3 - 2x2 + 5x + C'],
    explanation:
      'Integrasikan suku demi suku: $\\displaystyle\\int 3x^{2}\\,dx = x^{3}$, $\\displaystyle\\int -4x\\,dx = -2x^{2}$, dan $\\displaystyle\\int 5\\,dx = 5x$. Hasilnya $x^{3} - 2x^{2} + 5x + C$.',
    hints: ['Jangan lupa konstanta integrasi $C$.'],
    competencies: ['integral tak tentu polinomial'],
  },
  {
    id: 'in-04',
    topicId: 'integral',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Nilai $\\displaystyle\\int_{1}^{3} (2x + 1)\\,dx$ adalah …',
    options: [
      { key: 'A', text: '$10$' },
      { key: 'B', text: '$12$' },
      { key: 'C', text: '$8$' },
      { key: 'D', text: '$6$' },
    ],
    answer: 'A',
    explanation:
      'Antiturunan $2x + 1$ adalah $x^{2} + x$. Maka $\\Big[x^{2} + x\\Big]_{1}^{3} = (9 + 3) - (1 + 1) = 12 - 2 = 10$.',
    hints: ['Gunakan teorema dasar kalkulus $F(b) - F(a)$.'],
    competencies: ['integral tentu', 'teorema dasar kalkulus'],
  },
  {
    id: 'in-05',
    topicId: 'integral',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Hitung $\\displaystyle\\int_{0}^{2} x^{2}\\,dx$.',
    answer: '8/3',
    acceptedAnswers: ['2,67', '2.67', '8 per 3', '2 2/3'],
    explanation:
      '$\\displaystyle\\int_{0}^{2} x^{2}\\,dx = \\left[\\dfrac{x^{3}}{3}\\right]_{0}^{2} = \\dfrac{8}{3} - 0 = \\dfrac{8}{3}$.',
    hints: ['Antiturunan $x^{2}$ adalah $\\dfrac{x^{3}}{3}$.'],
    competencies: ['integral tentu'],
  },
  {
    id: 'in-06',
    topicId: 'integral',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Hitung $\\displaystyle\\int_{0}^{\\pi} \\sin x\\,dx$.',
    answer: '2',
    explanation:
      'Antiturunan $\\sin x$ adalah $-\\cos x$, sehingga $\\Big[-\\cos x\\Big]_{0}^{\\pi} = -\\cos\\pi + \\cos 0 = -(-1) + 1 = 2$.',
    hints: ['Ingat $\\displaystyle\\int \\sin x\\,dx = -\\cos x + C$.'],
    competencies: ['integral tentu', 'integral trigonometri'],
  },
  {
    id: 'in-07',
    topicId: 'integral',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Hitung $\\displaystyle\\int_{0}^{1} e^{x}\\,dx$.',
    answer: 'e - 1',
    acceptedAnswers: ['e-1', '1,72', '1.72'],
    explanation:
      '$\\displaystyle\\int_{0}^{1} e^{x}\\,dx = \\Big[e^{x}\\Big]_{0}^{1} = e^{1} - e^{0} = e - 1 \\approx 1{,}72$.',
    hints: ['Antiturunan $e^{x}$ adalah $e^{x}$.'],
    competencies: ['integral tentu', 'integral eksponensial'],
  },
  {
    id: 'in-08',
    topicId: 'integral',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Jelaskan bagaimana teorema dasar kalkulus menghubungkan integral tentu sebagai limit jumlah dengan antiturunan, lalu gunakan untuk menghitung $\\displaystyle\\int_{1}^{2} 3x^{2}\\,dx$.',
    answer:
      'Integral tentu didefinisikan sebagai limit jumlah luas persegi panjang, $\\lim_{n \\to \\infty} \\sum f(x_i)\\,\\Delta x$. Teorema dasar kalkulus menyatakan bahwa bila $F$ adalah antiturunan $f$, maka nilai limit jumlah itu sama dengan $F(b) - F(a)$, sehingga luas tidak perlu dihitung lewat penjumlahan tak hingga. Untuk $3x^{2}$, antiturunannya $x^{3}$, sehingga $\\displaystyle\\int_{1}^{2} 3x^{2}\\,dx = \\Big[x^{3}\\Big]_{1}^{2} = 8 - 1 = 7$.',
    explanation:
      'Kunci: menyebut tafsir limit jumlah, peran antiturunan sebagai jalan pintas melalui $F(b) - F(a)$, lalu menerapkannya pada perhitungan.',
    hints: [
      'Sebutkan bahwa $\\displaystyle\\int_{a}^{b} f(x)\\,dx = F(b) - F(a)$.',
      'Antiturunan $3x^{2}$ adalah $x^{3}$.',
    ],
    competencies: ['teorema dasar kalkulus', 'penalaran'],
  },
  {
    id: 'in-09',
    topicId: 'integral',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Luas daerah antara kurva $y = x$ dan $y = x^{2}$ pada selang $[0, 1]$ adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{1}{6}$' },
      { key: 'B', text: '$\\dfrac{1}{3}$' },
      { key: 'C', text: '$\\dfrac{1}{2}$' },
      { key: 'D', text: '$\\dfrac{2}{3}$' },
    ],
    answer: 'A',
    explanation:
      'Pada $[0, 1]$ berlaku $x \\geq x^{2}$, sehingga $L = \\displaystyle\\int_{0}^{1} (x - x^{2})\\,dx = \\left[\\dfrac{x^{2}}{2} - \\dfrac{x^{3}}{3}\\right]_{0}^{1} = \\dfrac{1}{2} - \\dfrac{1}{3} = \\dfrac{1}{6}$.',
    hints: ['Kurangkan fungsi bawah dari fungsi atas, lalu integrasikan pada batas titik potong.'],
    competencies: ['luas antara dua kurva'],
  },
  {
    id: 'in-10',
    topicId: 'integral',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'pemodelan',
    prompt:
      'Hitung luas daerah yang dibatasi kurva $y = 4 - x^{2}$ dan sumbu-$x$ pada selang $[-2, 2]$.',
    answer: '32/3',
    acceptedAnswers: ['10,67', '10.67', '32 per 3', '10 2/3'],
    explanation:
      'Karena $4 - x^{2} \\geq 0$ pada $[-2, 2]$, luasnya $\\displaystyle\\int_{-2}^{2} (4 - x^{2})\\,dx = \\left[4x - \\dfrac{x^{3}}{3}\\right]_{-2}^{2} = \\left(8 - \\dfrac{8}{3}\\right) - \\left(-8 + \\dfrac{8}{3}\\right) = \\dfrac{32}{3}$.',
    hints: ['Integrasikan $4 - x^{2}$ dari $-2$ hingga $2$.'],
    competencies: ['luas di bawah kurva'],
  },
  {
    id: 'in-11',
    topicId: 'integral',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Tentukan luas daerah yang dibatasi kurva $y = x + 1$ dan $y = x^{2} - 1$. Tunjukkan penentuan batas dan perhitungannya.',
    answer:
      'Titik potong dicari dari $x + 1 = x^{2} - 1$, yaitu $x^{2} - x - 2 = 0$ sehingga $(x - 2)(x + 1) = 0$ dan diperoleh $x = -1$ atau $x = 2$. Pada selang itu $x + 1 \\geq x^{2} - 1$, sehingga $L = \\displaystyle\\int_{-1}^{2} \\left[(x + 1) - (x^{2} - 1)\\right] dx = \\int_{-1}^{2} (-x^{2} + x + 2)\\,dx = \\left[-\\dfrac{x^{3}}{3} + \\dfrac{x^{2}}{2} + 2x\\right]_{-1}^{2}$. Nilai di $x = 2$ adalah $-\\dfrac{8}{3} + 2 + 4 = \\dfrac{10}{3}$, dan di $x = -1$ adalah $\\dfrac{1}{3} + \\dfrac{1}{2} - 2 = -\\dfrac{7}{6}$. Maka $L = \\dfrac{10}{3} - \\left(-\\dfrac{7}{6}\\right) = \\dfrac{9}{2}$.',
    explanation:
      'Kunci: mencari titik potong sebagai batas, menentukan fungsi atas dan bawah, lalu menghitung selisih integralnya.',
    hints: [
      'Selesaikan $x + 1 = x^{2} - 1$ untuk memperoleh batas.',
      'Gunakan $L = \\displaystyle\\int_{a}^{b} \\left[f(x) - g(x)\\right] dx$.',
    ],
    competencies: ['luas antara dua kurva', 'teorema dasar kalkulus', 'penalaran'],
  },
  {
    id: 'in-12',
    topicId: 'integral',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Diketahui kurva $y=6x-x^{2}$ dan sumbu-$x$ pada selang $[0,6]$. (a) Hitung $\\displaystyle\\int_{0}^{6}(6x-x^{2})\\,dx$. (b) Jelaskan mengapa integrannya boleh ditulis $6x-x^{2}$, bukan $x^{2}-6x$. (c) Tafsirkan hasil integral itu secara geometris.',
    answer:
      '(a) $\\displaystyle\\int_{0}^{6}(6x-x^{2})\\,dx=\\left[3x^{2}-\\dfrac{x^{3}}{3}\\right]_{0}^{6}=108-72=36$. (b) Pada selang $[0,6]$, kurva $y=6x-x^{2}=x(6-x)$ bernilai tidak negatif, sehingga kurva berada di atas sumbu-$x$; fungsi atas adalah $6x-x^{2}$. Menulis $x^{2}-6x$ akan memberi tanda berlawanan. (c) Hasil $36$ menyatakan luas daerah yang dibatasi kurva dan sumbu-$x$ pada selang itu, yaitu $36$ satuan luas.',
    explanation:
      'Kunci: menghitung integral tentu, memeriksa posisi kurva terhadap sumbu-$x$, lalu menafsirkan nilai sebagai luas.',
    hints: ['Antiturunan $6x-x^{2}$ adalah $3x^{2}-\\dfrac{x^{3}}{3}$.', 'Periksa tanda $x(6-x)$ pada selang $[0,6]$.'],
    competencies: ['integral tentu', 'luas daerah', 'evaluasi'],
  },
  {
    id: 'in-13',
    topicId: 'integral',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Debit air yang masuk ke sebuah tangki (liter per menit) dimodelkan $r(t)=30+10t$ untuk $0\\leq t\\leq5$. (a) Tentukan total volume air yang masuk selama $5$ menit. (b) Jelaskan makna integral tentu dalam konteks ini.',
    answer:
      '(a) Volume $=\\displaystyle\\int_{0}^{5}(30+10t)\\,dt=\\left[30t+5t^{2}\\right]_{0}^{5}=150+125=275$ liter. (b) Integral debit terhadap waktu menjumlahkan seluruh laju aliran sepanjang selang, sehingga hasilnya adalah akumulasi air yang masuk tangki selama $5$ menit, yaitu $275$ liter.',
    explanation:
      'Kunci: mengintegralkan laju untuk memperoleh akumulasi, lalu menafsirkannya sebagai volume total.',
    hints: ['Antiturunan $30+10t$ adalah $30t+5t^{2}$.', 'Integral laju terhadap waktu menghasilkan akumulasi (volume).'],
    competencies: ['integral tentu', 'kontekstual', 'akumulasi'],
  },
];

import type { Question } from '@/types/content';

export const turunanQuestions: Question[] = [
  {
    id: 'tur-01',
    topicId: 'turunan',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Turunan fungsi $f(x) = x^{3} - 3x^{2} + 2$ di $x = 2$ adalah …',
    options: [
      { key: 'A', text: '$12$' },
      { key: 'B', text: '$4$' },
      { key: 'C', text: '$-6$' },
      { key: 'D', text: '$0$' },
    ],
    answer: 'D',
    explanation:
      'Dengan aturan pangkat, $f\'(x) = 3x^{2} - 6x$. Maka $f\'(2) = 3(4) - 6(2) = 12 - 12 = 0$.',
    hints: ['Turunkan suku demi suku, lalu substitusikan $x = 2$.'],
    competencies: ['aturan pangkat', 'turunan di titik'],
  },
  {
    id: 'tur-02',
    topicId: 'turunan',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Turunan dari $y = 4x^{5} - 2x^{2} + 7$ adalah …',
    options: [
      { key: 'A', text: '$20x^{5} - 4x^{2}$' },
      { key: 'B', text: '$4x^{4} - 2x$' },
      { key: 'C', text: '$20x^{4} - 4x + 7$' },
      { key: 'D', text: '$20x^{4} - 4x$' },
    ],
    answer: 'D',
    explanation:
      'Setiap suku diturunkan dengan aturan pangkat dan konstanta: turunan $4x^{5}$ adalah $20x^{4}$, turunan $-2x^{2}$ adalah $-4x$, dan turunan konstanta $7$ adalah $0$. Jadi $y\' = 20x^{4} - 4x$.',
    hints: ['Turunan konstanta adalah nol.'],
    competencies: ['aturan pangkat', 'aturan konstanta'],
  },
  {
    id: 'tur-03',
    topicId: 'turunan',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'konsep',
    prompt: 'Tentukan turunan $f(x) = \\sin x + \\cos x$, lalu hitung $f\'(0)$.',
    answer: '1',
    explanation:
      '$f\'(x) = \\cos x - \\sin x$. Maka $f\'(0) = \\cos 0 - \\sin 0 = 1 - 0 = 1$.',
    hints: ['Turunan $\\sin x$ adalah $\\cos x$ dan turunan $\\cos x$ adalah $-\\sin x$.'],
    competencies: ['turunan trigonometri'],
  },
  {
    id: 'tur-04',
    topicId: 'turunan',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'konsep',
    prompt: 'Tentukan laju perubahan rata-rata fungsi $f(x) = x^{2}$ pada selang $[1, 3]$.',
    answer: '4',
    explanation:
      'Laju perubahan rata-rata adalah $\\dfrac{f(3) - f(1)}{3 - 1} = \\dfrac{9 - 1}{2} = 4$.',
    hints: ['Gunakan hasil bagi selisih $\\dfrac{f(b) - f(a)}{b - a}$.'],
    competencies: ['laju perubahan rata-rata'],
  },
  {
    id: 'tur-05',
    topicId: 'turunan',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Diketahui $f(x) = (x^{2} + 1)(2x - 3)$. Nilai $f\'(1)$ adalah …',
    options: [
      { key: 'A', text: '$0$' },
      { key: 'B', text: '$6$' },
      { key: 'C', text: '$-2$' },
      { key: 'D', text: '$2$' },
    ],
    answer: 'D',
    explanation:
      'Aturan hasil kali: $f\'(x) = 2x(2x - 3) + (x^{2} + 1)(2) = 6x^{2} - 6x + 2$. Maka $f\'(1) = 6 - 6 + 2 = 2$.',
    hints: ['Gunakan $\\dfrac{d}{dx}(fg) = f\'g + fg\'$.'],
    competencies: ['aturan hasil kali'],
  },
  {
    id: 'tur-06',
    topicId: 'turunan',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Diketahui $f(x) = \\dfrac{2x + 1}{x - 1}$. Nilai $f\'(2)$ adalah …',
    options: [
      { key: 'A', text: '$1$' },
      { key: 'B', text: '$3$' },
      { key: 'C', text: '$-1$' },
      { key: 'D', text: '$-3$' },
    ],
    answer: 'D',
    explanation:
      'Aturan hasil bagi: $f\'(x) = \\dfrac{2(x - 1) - (2x + 1)}{(x - 1)^{2}} = \\dfrac{-3}{(x - 1)^{2}}$. Maka $f\'(2) = \\dfrac{-3}{1} = -3$.',
    hints: ['Gunakan $\\dfrac{d}{dx}\\left(\\dfrac{f}{g}\\right) = \\dfrac{f\'g - fg\'}{g^{2}}$.'],
    competencies: ['aturan hasil bagi'],
  },
  {
    id: 'tur-07',
    topicId: 'turunan',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Tentukan turunan $g(x) = (3x + 1)^{4}$, lalu hitung $g\'(0)$.',
    answer: '12',
    explanation:
      'Aturan rantai: $g\'(x) = 4(3x + 1)^{3} \\cdot 3 = 12(3x + 1)^{3}$. Maka $g\'(0) = 12(1)^{3} = 12$.',
    hints: ['Turunkan fungsi luar, lalu kalikan turunan fungsi dalam.'],
    competencies: ['aturan rantai'],
  },
  {
    id: 'tur-08',
    topicId: 'turunan',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Tentukan turunan $f(x) = (3x + 1)^{4}(x - 2)$ dengan aturan hasil kali dan aturan rantai. Tunjukkan langkah-langkahnya.',
    answer:
      'Misalkan $u = (3x + 1)^{4}$ maka $u\' = 12(3x + 1)^{3}$, dan $v = x - 2$ maka $v\' = 1$. Dengan aturan hasil kali, $f\'(x) = u\'v + uv\' = 12(3x + 1)^{3}(x - 2) + (3x + 1)^{4}$. Bentuk ini dapat difaktorkan menjadi $(3x + 1)^{3}\\left[12(x - 2) + (3x + 1)\\right] = (3x + 1)^{3}(15x - 23)$.',
    explanation:
      'Kunci menekankan pemisahan kedua faktor, turunan faktor pertama dengan aturan rantai, lalu penerapan $u\'v + uv\'$ dan penyederhanaan.',
    hints: [
      'Turunan $(3x+1)^4$ memerlukan aturan rantai.',
      'Gunakan $\\dfrac{d}{dx}(uv) = u\'v + uv\'$.',
    ],
    competencies: ['aturan hasil kali', 'aturan rantai', 'penalaran'],
    rubric: [
      'Memisahkan kedua faktor dengan benar',
      'Menerapkan aturan rantai pada faktor pertama',
      'Menerapkan aturan hasil kali',
      'Menyederhanakan hasil akhir',
    ],
  },
  {
    id: 'tur-09',
    topicId: 'turunan',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt: 'Turunan fungsi $h(x) = 2^{x}$ di $x = 0$ adalah …',
    options: [
      { key: 'A', text: '$2\\ln 2$' },
      { key: 'B', text: '$1$' },
      { key: 'C', text: '$\\dfrac{1}{2}$' },
      { key: 'D', text: '$\\ln 2$' },
    ],
    answer: 'D',
    explanation:
      'Untuk basis $a > 0$, berlaku $\\dfrac{d}{dx}(a^{x}) = a^{x}\\ln a$. Jadi $h\'(x) = 2^{x}\\ln 2$ dan $h\'(0) = 2^{0}\\ln 2 = \\ln 2$.',
    hints: ['Turunan $a^{x}$ menyertakan faktor $\\ln a$.'],
    competencies: ['turunan eksponensial', 'penalaran'],
  },
  {
    id: 'tur-10',
    topicId: 'turunan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Dengan menuliskan $\\tan x = \\dfrac{\\sin x}{\\cos x}$, buktikan bahwa $\\dfrac{d}{dx}(\\tan x) = \\sec^{2} x$.',
    answer:
      'Gunakan aturan hasil bagi dengan $f = \\sin x$ dan $g = \\cos x$, sehingga $f\' = \\cos x$ dan $g\' = -\\sin x$. Maka $\\dfrac{d}{dx}(\\tan x) = \\dfrac{\\cos x \\cdot \\cos x - \\sin x \\cdot (-\\sin x)}{\\cos^{2} x} = \\dfrac{\\cos^{2} x + \\sin^{2} x}{\\cos^{2} x}$. Karena $\\cos^{2} x + \\sin^{2} x = 1$, hasilnya $\\dfrac{1}{\\cos^{2} x} = \\sec^{2} x$.',
    explanation:
      'Kunci: menyatakan tangen sebagai hasil bagi, menerapkan aturan hasil bagi, lalu memakai identitas Pythagoras.',
    hints: [
      'Ingat $\\dfrac{d}{dx}(\\cos x) = -\\sin x$.',
      'Gunakan identitas $\\sin^{2} x + \\cos^{2} x = 1$.',
    ],
    competencies: ['turunan trigonometri', 'aturan hasil bagi', 'pembuktian'],
    rubric: [
      'Menuliskan tangen sebagai hasil bagi sinus dan kosinus',
      'Menerapkan aturan hasil bagi',
      'Memakai identitas Pythagoras',
      'Menyimpulkan hasilnya sekans kuadrat',
    ],
  },
  {
    id: 'tur-11',
    topicId: 'turunan',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Tentukan turunan $p(x) = e^{3x}$, lalu hitung $p\'(0)$.',
    answer: '3',
    explanation:
      'Dengan aturan rantai, $p\'(x) = e^{3x} \\cdot 3 = 3e^{3x}$. Maka $p\'(0) = 3e^{0} = 3$.',
    hints: ['Turunan $e^{kx}$ adalah $k e^{kx}$.'],
    competencies: ['turunan eksponensial', 'aturan rantai'],
  },
  {
    id: 'tur-12',
    topicId: 'turunan',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'penalaran',
    prompt: 'Tentukan turunan $q(x) = x\\cos x$, lalu hitung $q\'(0)$.',
    answer: '1',
    explanation:
      'Aturan hasil kali: $q\'(x) = 1 \\cdot \\cos x + x \\cdot (-\\sin x) = \\cos x - x\\sin x$. Maka $q\'(0) = \\cos 0 - 0 = 1$.',
    hints: ['Gunakan $\\dfrac{d}{dx}(x\\cos x) = \\cos x - x\\sin x$.'],
    competencies: ['aturan hasil kali', 'turunan trigonometri'],
  },
  {
    id: 'tur-13',
    topicId: 'turunan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Diberikan $f(x)=x^{3}-3x+2$. (a) Tentukan $f\'(x)$ dan titik stasionernya. (b) Tentukan jenis setiap titik stasioner dengan uji turunan kedua. (c) Jelaskan mengapa $f\'(x)=0$ saja belum cukup untuk menyimpulkan maksimum atau minimum.',
    answer:
      '(a) $f\'(x)=3x^{2}-3=3(x-1)(x+1)=0$ memberi $x=-1$ dan $x=1$. (b) $f\'\'(x)=6x$; $f\'\'(-1)=-6<0$ sehingga $x=-1$ maksimum lokal ($f(-1)=4$), dan $f\'\'(1)=6>0$ sehingga $x=1$ minimum lokal ($f(1)=0$). (c) Karena $f\'(x)=0$ juga dapat terjadi pada titik belok, misalnya $g(x)=x^{3}$ di $x=0$ yang memiliki $g\'(0)=0$ tetapi bukan titik ekstrem. Karena itu jenis titik stasioner perlu diperiksa, misalnya dengan turunan kedua atau perubahan tanda $f\'$.',
    explanation:
      'Kunci: menyelesaikan $f\'(x)=0$, memakai tanda $f\'\'$, dan menyadari bahwa titik stasioner bisa berupa titik belok.',
    hints: ['Faktorkan $3x^{2}-3$.', 'Ingat contoh $y=x^{3}$ di titik asal.'],
    competencies: ['titik stasioner', 'uji turunan kedua', 'evaluasi'],
    rubric: [
      'Menentukan turunan pertama',
      'Mencari titik stasioner',
      'Menguji jenis titik dengan turunan kedua',
      'Memberi contoh titik belok',
    ],
  },
  {
    id: 'tur-14',
    topicId: 'turunan',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'pemodelan',
    prompt:
      'Biaya total produksi (juta rupiah) $x$ unit barang dimodelkan $C(x)=x^{2}+4x+16$, $x>0$. Tentukan nilai $x$ agar biaya rata-rata per unit, $\\bar{C}(x)=\\dfrac{C(x)}{x}$, minimum.',
    answer: '4',
    acceptedAnswers: ['4', 'x=4'],
    explanation:
      'Biaya rata-rata $\\bar{C}(x)=x+4+\\dfrac{16}{x}$. Turunannya $\\bar{C}\'(x)=1-\\dfrac{16}{x^{2}}=0$ memberi $x^{2}=16$ sehingga $x=4$ (nilai positif). Uji turunan kedua $\\bar{C}\'\'(x)=\\dfrac{32}{x^{3}}>0$ menandakan minimum. Jadi $x=4$ unit.',
    hints: ['Bagi $C(x)$ dengan $x$ terlebih dahulu.', 'Cari titik stasioner $\\bar{C}\'(x)=0$ dan buang akar negatif.'],
    competencies: ['optimasi', 'biaya rata-rata', 'pemodelan'],
  },
  {
    id: 'tur-15',
    topicId: 'turunan',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Populasi bakteri (dalam ribuan) setelah $t$ jam dimodelkan $P(t)=t^{3}-9t^{2}+24t$. Tentukan laju perubahan populasi pada $t=2$ jam.',
    answer: '0',
    acceptedAnswers: ['0', '0 ribu/jam'],
    explanation:
      'Laju perubahan adalah $P\'(t)=3t^{2}-18t+24$. Pada $t=2$: $P\'(2)=3(4)-18(2)+24=12-36+24=0$. Artinya populasi sedang berhenti berubah sesaat pada $t=2$ jam.',
    hints: ['Turunkan $P(t)$ terhadap $t$.', 'Substitusikan $t=2$ ke $P\'(t)$.'],
    competencies: ['laju perubahan', 'kontekstual'],
  },
];

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
      { key: 'B', text: '$-2$' },
      { key: 'C', text: '$6$' },
      { key: 'D', text: '$0$' },
    ],
    answer: 'D',
    explanation:
      'Dengan aturan pangkat, $f\'(x) = 3x^{2} - 6x$. Maka $f\'(2) = 3(4) - 6(2) = 12 - 12 = 0$. Opsi A, $12$, muncul bila hanya suku $x^{3}$ yang diturunkan menjadi $3x^{2}$ lalu disubstitusikan, sehingga suku $-6x$ terabaikan. Opsi B, $-2$, adalah nilai fungsi $f(2) = 8 - 12 + 2$, bukan nilai turunannya. Opsi C, $6$, muncul bila suku $-6x$ dianggap konstanta $6$ sehingga dihitung $12 - 6$.',
    hints: ['Turunkan suku demi suku, lalu substitusikan $x = 2$.', 'Pastikan setiap suku diturunkan, termasuk konstanta yang menjadi $0$.'],
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
      'Setiap suku diturunkan dengan aturan pangkat dan konstanta: turunan $4x^{5}$ adalah $20x^{4}$, turunan $-2x^{2}$ adalah $-4x$, dan turunan konstanta $7$ adalah $0$. Jadi $y\' = 20x^{4} - 4x$. Opsi A, $20x^{5} - 4x^{2}$, mengalikan koefisien dengan pangkat tetapi lupa mengurangi pangkatnya satu. Opsi B, $4x^{4} - 2x$, mengurangi pangkat tanpa mengalikan koefisien dengan pangkat lama. Opsi C, $20x^{4} - 4x + 7$, benar pada dua suku pertama tetapi tetap membawa konstanta $7$ yang seharusnya menjadi $0$.',
    hints: ['Turunan konstanta adalah nol.', 'Kalikan koefisien dengan pangkatnya, lalu kurangi pangkat satu.'],
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
    hints: ['Turunan $\\sin x$ adalah $\\cos x$ dan turunan $\\cos x$ adalah $-\\sin x$.', 'Substitusikan $x = 0$ setelah menurunkan, bukan sebaliknya.'],
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
    hints: ['Gunakan hasil bagi selisih $\\dfrac{f(b) - f(a)}{b - a}$.', 'Hitung $f(3)$ dan $f(1)$ lebih dahulu.'],
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
      { key: 'B', text: '$8$' },
      { key: 'C', text: '$-2$' },
      { key: 'D', text: '$2$' },
    ],
    answer: 'D',
    explanation:
      'Aturan hasil kali: $f\'(x) = 2x(2x - 3) + (x^{2} + 1)(2) = 6x^{2} - 6x + 2$. Maka $f\'(1) = 6 - 6 + 2 = 2$. Opsi B, $8$, muncul bila aturan hasil kali dilewati: suku pertama ditulis sebagai hasil kali kedua turunan $u\'v\' = (2x)(2) = 4x$ alih-alih $u\'v = 2x(2x-3)$, lalu ditambah $uv\' = (x^{2}+1)(2)$ sehingga di $x=1$ diperoleh $4 + 4 = 8$. Opsi A, $0$, muncul bila turunan $(2x-3)$ dianggap $1$ (bukan $2$), memberi $2x(2x-3) + (x^{2}+1)$ yang bernilai $0$ di $x=1$. Opsi C, $-2$, adalah nilai fungsi $f(1) = (2)(-1)$, bukan nilai turunan.',
    hints: [
      'Gunakan $\\dfrac{d}{dx}(fg) = f\'g + fg\'$.',
      'Turunkan masing-masing faktor lebih dahulu: $u = x^{2}+1$ dan $v = 2x-3$.',
    ],
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
      { key: 'A', text: '$3$' },
      { key: 'B', text: '$2$' },
      { key: 'C', text: '$-2$' },
      { key: 'D', text: '$-3$' },
    ],
    answer: 'D',
    explanation:
      'Aturan hasil bagi: $f\'(x) = \\dfrac{2(x - 1) - (2x + 1)}{(x - 1)^{2}} = \\dfrac{-3}{(x - 1)^{2}}$. Maka $f\'(2) = \\dfrac{-3}{1} = -3$. Opsi A, $3$, muncul bila tanda negatif pembilang dihilangkan sehingga memakai $+3/(x-1)^{2}$. Opsi B, $2$, muncul bila langsung membandingkan koefisien tertinggi pembilang dan penyebut, $\\dfrac{2}{1}$, seakan itu nilai turunan. Opsi C, $-2$, muncul bila hanya menurunkan pembilang $(2x+1)$ menjadi $2$ lalu diberi tanda negatif tanpa memakai rumus hasil bagi.',
    hints: [
      'Gunakan $\\dfrac{d}{dx}\\left(\\dfrac{f}{g}\\right) = \\dfrac{f\'g - fg\'}{g^{2}}$.',
      'Hitung pembilang $2(x-1) - (2x+1)$ dengan hati-hati, terutama tandanya.',
    ],
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
    hints: ['Turunkan fungsi luar, lalu kalikan turunan fungsi dalam.', 'Turunan fungsi dalam $(3x+1)$ adalah $3$.'],
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
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Turunan fungsi $h(x) = 2^{x}$ di $x = 0$ adalah …',
    options: [
      { key: 'A', text: '$2\\ln 2$' },
      { key: 'B', text: '$1$' },
      { key: 'C', text: '$\\dfrac{1}{2}$' },
      { key: 'D', text: '$\\ln 2$' },
    ],
    answer: 'D',
    explanation:
      'Untuk basis $a > 0$, berlaku $\\dfrac{d}{dx}(a^{x}) = a^{x}\\ln a$. Jadi $h\'(x) = 2^{x}\\ln 2$ dan $h\'(0) = 2^{0}\\ln 2 = \\ln 2$. Opsi A, $2\\ln 2$, benar memakai faktor $\\ln 2$ tetapi mengevaluasi di $x = 1$ sehingga faktor depan menjadi $2$. Opsi B, $1$, mengabaikan faktor $\\ln 2$ dan hanya menghitung $2^{0} = 1$. Opsi C, $\\dfrac{1}{2}$, muncul bila aturan pangkat dipakai pada fungsi eksponen sehingga dianggap $2^{x-1}$ dan di $x=0$ memberi $2^{-1} = \\dfrac{1}{2}$.',
    hints: ['Turunan $a^{x}$ menyertakan faktor $\\ln a$.', 'Setelah menurunkan, substitusikan $x = 0$ dengan $2^{0} = 1$.'],
    competencies: ['turunan eksponensial', 'penerapan'],
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
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Tentukan turunan $p(x) = e^{3x}$, lalu hitung $p\'(0)$.',
    answer: '3',
    explanation:
      'Dengan aturan rantai, $p\'(x) = e^{3x} \\cdot 3 = 3e^{3x}$. Maka $p\'(0) = 3e^{0} = 3$.',
    hints: ['Turunan $e^{kx}$ adalah $k e^{kx}$.', 'Faktorkan konstanta $3$ di depan setelah menurunkan fungsi dalam.'],
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
    hints: ['Gunakan $\\dfrac{d}{dx}(x\\cos x) = \\cos x - x\\sin x$.', 'Untuk $x = 0$, suku $x\\sin x$ lenyap sehingga hanya $\\cos 0$ yang tersisa.'],
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
  {
    id: 'tur-16',
    topicId: 'turunan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Sebuah algoritma pembelajaran mesin menyesuaikan satu parameter $w$ dengan aturan $w_{n+1} = w_n - \\eta\\, J\'(w_n)$, dengan fungsi galat $J(w) = w^{2} - 4w + 11$. (a) Tentukan $J\'(w)$. (b) Tentukan nilai $w$ dengan $J\'(w) = 0$ dan jelaskan maknanya bagi algoritma. (c) Jika saat ini $w = 1$ dan laju belajar $\\eta = 0{,}1$, tentukan arah perubahan $w$ dan hitung $w$ berikutnya.',
    answer:
      '(a) $J\'(w) = 2w - 4$. (b) Dari $2w - 4 = 0$ diperoleh $w = 2$. Di titik itu kemiringan galat nol, sehingga $w = 2$ adalah titik terendah $J$ dan menjadi tujuan akhir algoritma; nilai $J(2) = 4 - 8 + 11 = 7$ adalah galat minimum. (c) Pada $w = 1$, $J\'(1) = 2(1) - 4 = -2 < 0$, sehingga gradien negatif menandakan $J$ menurun bila $w$ diperbesar. Aturan pembaruan memberi $w_{n+1} = 1 - 0{,}1(-2) = 1{,}2$, yakni bergerak dari $1$ menuju $2$.',
    explanation:
      'Kunci: menurunkan fungsi galat, menafsirkan $J\'(w)=0$ sebagai titik minimum tujuan, lalu memakai tanda gradien untuk menentukan arah dan menghitung pembaruan parameter.',
    hints: [
      'Turunkan $J(w) = w^{2} - 4w + 11$ terhadap $w$ terlebih dahulu.',
      'Tanda $J\'(w)$ menunjukkan arah yang memperkecil galat: gradien negatif berarti $w$ harus diperbesar.',
    ],
    competencies: ['turunan polinomial', 'interpretasi gradien', 'kontekstual'],
    rubric: [
      'Menentukan $J\'(w)=2w-4$',
      "Menemukan $w=2$ dan menafsirkan $J'(w)=0$ sebagai titik galat minimum",
      'Menentukan arah dari tanda $J\'(1)=-2$',
      'Menghitung $w_{n+1}=1{,}2$',
    ],
  },
  {
    id: 'tur-17',
    topicId: 'turunan',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'evaluasi',
    prompt:
      'Seorang siswa menghitung turunan $y = (2x + 3)^{2}$ lalu menulis $y\' = 2(2x + 3) = 4x + 6$. Pernyataan yang paling tepat mengenai hasil siswa itu adalah …',
    options: [
      { key: 'A', text: 'Benar, karena aturan pangkat cukup diterapkan pada fungsi luar saja' },
      { key: 'B', text: 'Salah, karena aturan rantai menuntut faktor turunan fungsi dalam sehingga $y\' = 2(2x + 3) \\cdot 2 = 8x + 12$' },
      { key: 'C', text: 'Salah, karena turunan $(2x + 3)^{2}$ seharusnya $2x$' },
      { key: 'D', text: 'Benar, karena menurunkan bentuk jabaran $4x^{2} + 12x + 9$ juga menghasilkan $4x + 6$' },
    ],
    answer: 'B',
    explanation:
      'Aturan rantai menuntut perkalian dengan turunan fungsi dalam $(2x+3)\' = 2$, sehingga $y\' = 2(2x+3)\\cdot 2 = 8x + 12$. Opsi A hanya menurunkan fungsi luar tanpa faktor turunan dalam, persis kesalahan siswa. Opsi C salah karena $2x$ bukan turunan yang mungkin dari bentuk kuadrat tersebut. Opsi D salah karena menurunkan jabaran $4x^{2}+12x+9$ memberi $8x + 12$, bukan $4x + 6$.',
    hints: [
      'Tulis $y = u^{2}$ dengan $u = 2x + 3$, lalu gunakan $\\dfrac{dy}{dx} = 2u \\cdot \\dfrac{du}{dx}$.',
      'Periksa hasilmu dengan menjabarkan $(2x+3)^{2}$ lalu menurunkannya suku demi suku.',
    ],
    competencies: ['aturan rantai', 'evaluasi pembuktian'],
  },
];

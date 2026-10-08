import type { Question } from '@/types/content';

export const polinomialQuestions: Question[] = [
  {
    id: 'pl-01',
    topicId: 'polinomial',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Derajat dari polinomial $3x^{4}-2x^{3}+x-7$ adalah …',
    options: [
      { key: 'A', text: '$3$' },
      { key: 'B', text: '$4$' },
      { key: 'C', text: '$5$' },
      { key: 'D', text: '$7$' },
    ],
    answer: 'B',
    explanation:
      'Derajat adalah pangkat tertinggi variabel. Pangkat tertinggi pada $3x^{4}-2x^{3}+x-7$ adalah $4$, sehingga derajatnya $4$.',
    hints: ['Cari pangkat terbesar pada variabel $x$.'],
    competencies: ['derajat polinomial'],
  },
  {
    id: 'pl-02',
    topicId: 'polinomial',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt:
      'Diketahui $P(x)=2x^{3}-3x^{2}+4x-5$ dan $Q(x)=x^{2}+2x+1$. Koefisien $x^{2}$ pada $P(x)+Q(x)$ adalah …',
    options: [
      { key: 'A', text: '$-2$' },
      { key: 'B', text: '$-4$' },
      { key: 'C', text: '$2$' },
      { key: 'D', text: '$6$' },
    ],
    answer: 'A',
    explanation:
      'Jumlahkan suku sejenis: $P(x)+Q(x)=2x^{3}+(-3+1)x^{2}+(4+2)x+(-5+1)=2x^{3}-2x^{2}+6x-4$. Jadi koefisien $x^{2}$ adalah $-2$.',
    hints: ['Gabungkan hanya suku-suku dengan pangkat yang sama.'],
    competencies: ['penjumlahan polinomial'],
  },
  {
    id: 'pl-03',
    topicId: 'polinomial',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'konsep',
    prompt:
      'Polinomial $P(x)$ berderajat $3$ dan $Q(x)$ berderajat $2$. Tentukan derajat dari $P(x)Q(x)$.',
    answer: '5',
    explanation:
      'Derajat hasil kali adalah jumlah derajat kedua polinomial: $\\deg(PQ)=\\deg P+\\deg Q=3+2=5$.',
    hints: ['Saat mengalikan, pangkat suku-suku bertambah.'],
    competencies: ['derajat hasil kali polinomial'],
  },
  {
    id: 'pl-04',
    topicId: 'polinomial',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Tentukan sisa pembagian $P(x)=2x^{3}-5x^{2}+4x-7$ oleh $(x-2)$.',
    answer: '-3',
    explanation:
      'Menurut teorema sisa, sisa pembagian oleh $(x-2)$ adalah $P(2)=2(8)-5(4)+4(2)-7=16-20+8-7=-3$.',
    hints: ['Substitusikan $x=2$ ke polinomial.'],
    competencies: ['teorema sisa'],
  },
  {
    id: 'pl-05',
    topicId: 'polinomial',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Hasil bagi pembagian $x^{3}-4x^{2}+5x-2$ oleh $(x-1)$ adalah …',
    options: [
      { key: 'A', text: '$x^{2}+3x+2$' },
      { key: 'B', text: '$x^{2}-3x+2$' },
      { key: 'C', text: '$x^{2}-3x-2$' },
      { key: 'D', text: '$x^{2}+3x-2$' },
    ],
    answer: 'B',
    explanation:
      'Gunakan Horner dengan $x=1$ pada koefisien $1,-4,5,-2$: turunkan $1$, lalu $1\\cdot1=1$ ditambah $-4$ menjadi $-3$, $-3\\cdot1=-3$ ditambah $5$ menjadi $2$, dan $2\\cdot1=2$ ditambah $-2$ menjadi $0$. Hasil baginya $x^{2}-3x+2$ dengan sisa $0$.',
    hints: ['Gunakan pembagian sintetik (Horner) dengan pembagi $(x-1)$.'],
    competencies: ['pembagian polinomial', 'metode Horner'],
  },
  {
    id: 'pl-06',
    topicId: 'polinomial',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Salah satu faktor dari $P(x)=x^{3}-4x^{2}+x+6$ adalah …',
    options: [
      { key: 'A', text: '$(x-3)$' },
      { key: 'B', text: '$(x-1)$' },
      { key: 'C', text: '$(x+2)$' },
      { key: 'D', text: '$(x+4)$' },
    ],
    answer: 'A',
    explanation:
      'Uji dengan teorema faktor: $P(3)=27-36+3+6=0$, sehingga $(x-3)$ faktor. Opsi lain: $P(1)=4\\neq0$, $P(-2)=-20\\neq0$, dan $P(-4)=-102\\neq0$.',
    hints: ['Faktor $(x-c)$ berlaku bila $P(c)=0$.'],
    competencies: ['teorema faktor'],
  },
  {
    id: 'pl-07',
    topicId: 'polinomial',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Tentukan sisa pembagian $P(x)=x^{3}+2x^{2}-5x+3$ oleh $(x+2)$.',
    answer: '13',
    explanation:
      'Pembagi $(x+2)$ berarti $c=-2$, sehingga sisa $=P(-2)=(-2)^{3}+2(-2)^{2}-5(-2)+3=-8+8+10+3=13$.',
    hints: ['Untuk $(x+2)$, substitusikan $x=-2$.'],
    competencies: ['teorema sisa'],
  },
  {
    id: 'pl-08',
    topicId: 'polinomial',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Tentukan hasil bagi dan sisa pembagian $2x^{3}+x^{2}-3x+4$ oleh $(x-2)$ menggunakan metode Horner. Tunjukkan langkahnya.',
    answer:
      'Koefisiennya $2,1,-3,4$ dan pembagi $x=2$. Turunkan $2$. Kalikan $2\\cdot2=4$ lalu tambahkan ke $1$ menjadi $5$. Kalikan $5\\cdot2=10$ lalu tambahkan ke $-3$ menjadi $7$. Kalikan $7\\cdot2=14$ lalu tambahkan ke $4$ menjadi $18$. Hasil baginya $2x^{2}+5x+7$ dan sisanya $18$, karena $2x^{3}+x^{2}-3x+4=(x-2)(2x^{2}+5x+7)+18$.',
    explanation:
      'Kunci menekankan urutan koefisien, langkah turunkan-kalikan-jumlahkan, serta penulisan bentuk $P(x)=(x-2)H(x)+S$ dengan $S=18$ dan pemeriksaan derajat sisa lebih kecil dari derajat pembagi.',
    hints: ['Tulis semua koefisien, termasuk yang bernilai nol bila ada.'],
    competencies: ['pembagian polinomial', 'metode Horner'],
  },
  {
    id: 'pl-09',
    topicId: 'polinomial',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Nilai $k$ agar $(x-2)$ menjadi faktor dari $x^{3}+kx^{2}-4x+4$ adalah …',
    options: [
      { key: 'A', text: '$k=-1$' },
      { key: 'B', text: '$k=1$' },
      { key: 'C', text: '$k=-2$' },
      { key: 'D', text: '$k=2$' },
    ],
    answer: 'A',
    explanation:
      '$(x-2)$ faktor berarti $P(2)=0$: $8+4k-8+4=4+4k=0$, sehingga $k=-1$. Periksa: $P(x)=x^{3}-x^{2}-4x+4$ dan $P(2)=8-4-8+4=0$.',
    hints: ['Gunakan teorema faktor: $(x-2)$ faktor bila $P(2)=0$.'],
    competencies: ['teorema faktor', 'penalaran aljabar'],
  },
  {
    id: 'pl-10',
    topicId: 'polinomial',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Tentukan nilai $a$, $b$, dan $c$ dari identitas $x^{3}+ax^{2}+bx+c=(x-1)(x+2)(x-3)$.',
    answer:
      'Jabarkan ruas kanan: $(x-1)(x+2)=x^{2}+x-2$, lalu $(x^{2}+x-2)(x-3)=x^{3}-2x^{2}-5x+6$. Menyamakan koefisien suku sejenis memberi $a=-2$, $b=-5$, dan $c=6$.',
    explanation:
      'Kunci menekankan penjabaran bertahap dan penyamaan koefisien suku sejenis pada identitas polinomial.',
    hints: [
      'Jabarkan $(x-1)(x+2)$ terlebih dahulu, lalu kalikan dengan $(x-3)$.',
      'Samakan koefisien $x^{2}$, $x$, dan konstanta di kedua ruas.',
    ],
    competencies: ['identitas polinomial', 'perkalian polinomial'],
  },
  {
    id: 'pl-11',
    topicId: 'polinomial',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Tentukan semua akar dari $P(x)=x^{3}-4x^{2}+x+6$ beserta pemfaktoran lengkapnya.',
    answer:
      'Coba akar bilangan bulat: $P(3)=27-36+3+6=0$, jadi $(x-3)$ faktor. Membagi dengan Horner memberi hasil bagi $x^{2}-x-2=(x-2)(x+1)$. Maka $P(x)=(x-3)(x-2)(x+1)$, sehingga akar-akarnya $x=3$, $x=2$, dan $x=-1$.',
    explanation:
      'Kunci menekankan pencarian satu akar dengan teorema faktor, pembagian untuk menurunkan derajat, lalu pemfaktoran hasil bagi.',
    hints: ['Uji pembagi dari konstanta $6$: $\\pm1, \\pm2, \\pm3, \\pm6$.'],
    competencies: ['faktor polinomial', 'akar polinomial'],
  },
  {
    id: 'pl-12',
    topicId: 'polinomial',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Diketahui $P(x)=2x^{3}-3x^{2}+ax+6$ dan $P(1)=0$. Tentukan nilai $a$, lalu tuliskan bentuk pemfaktoran $P(x)$.',
    answer:
      'Dari $P(1)=0$: $2-3+a+6=a+5=0$, sehingga $a=-5$. Jadi $P(x)=2x^{3}-3x^{2}-5x+6$. Karena $P(1)=0$, $(x-1)$ faktor. Membagi dengan Horner (koefisien $2,-3,-5,6$, $x=1$) memberi hasil bagi $2x^{2}-x-6=(2x+3)(x-2)$. Maka $P(x)=(x-1)(2x+3)(x-2)$.',
    explanation:
      'Kunci menekankan penggunaan teorema faktor untuk menentukan $a$, lalu pembagian Horner dan pemfaktoran hasil bagi kuadrat.',
    hints: [
      'Substitusikan $x=1$ dan samakan dengan nol untuk mencari $a$.',
      'Setelah $a$ diketahui, bagi $P(x)$ oleh $(x-1)$.',
    ],
    competencies: ['teorema faktor', 'pembagian polinomial', 'pemfaktoran'],
  },
];

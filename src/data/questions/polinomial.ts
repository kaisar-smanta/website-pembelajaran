import type { Question } from '@/types/content';

export const polinomialQuestions: Question[] = [
  {
    id: 'pol-01',
    topicId: 'polinomial',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Derajat dari polinomial $3x^{4}-2x^{3}+x-7$ adalah …',
    options: [
      { key: 'A', text: '$3$' },
      { key: 'B', text: '$4$' },
      { key: 'C', text: '$6$' },
      { key: 'D', text: '$7$' },
    ],
    answer: 'B',
    explanation:
      'Derajat adalah pangkat tertinggi variabel. Pangkat tertinggi pada $3x^{4}-2x^{3}+x-7$ adalah $4$, sehingga derajatnya $4$.',
    hints: ['Cari pangkat terbesar pada variabel $x$.'],
    competencies: ['derajat polinomial'],
  },
  {
    id: 'pol-02',
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
    id: 'pol-03',
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
    id: 'pol-04',
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
    id: 'pol-05',
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
    id: 'pol-06',
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
    id: 'pol-07',
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
    id: 'pol-08',
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
    rubric: [
      'Menuliskan semua koefisien secara berurutan',
      'Menjalankan langkah turun, kali, dan jumlah',
      'Menuliskan hasil bagi dan sisa',
      'Memeriksa derajat sisa',
    ],
  },
  {
    id: 'pol-09',
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
    id: 'pol-10',
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
    rubric: [
      'Menjabarkan hasil kali faktor secara bertahap',
      'Mengumpulkan suku sejenis',
      'Menyamakan koefisien kedua ruas',
      'Memperoleh nilai a, b, dan c',
    ],
  },
  {
    id: 'pol-11',
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
    rubric: [
      'Menemukan satu akar dengan teorema faktor',
      'Membagi untuk menurunkan derajat',
      'Memfaktorkan hasil bagi',
      'Menuliskan semua akar',
    ],
  },
  {
    id: 'pol-12',
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
    rubric: [
      'Memakai syarat nilai polinomial sama dengan nol',
      'Menentukan nilai a',
      'Membagi oleh faktor yang diketahui',
      'Memfaktorkan hasil bagi kuadrat',
    ],
  },
  {
    id: 'pol-13',
    topicId: 'polinomial',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Diberikan $P(x)=x^{3}-6x^{2}+11x-6$. (a) Tunjukkan bahwa $(x-1)$ merupakan faktor $P(x)$. (b) Faktorkan $P(x)$ sepenuhnya dan tentukan semua akarnya. (c) Jelaskan hubungan akar-akar itu dengan titik potong grafik terhadap sumbu-$x$.',
    answer:
      '(a) $P(1)=1-6+11-6=0$, sehingga menurut teorema faktor $(x-1)$ adalah faktor. (b) Membagi $P(x)$ oleh $(x-1)$ memberi $x^{2}-5x+6=(x-2)(x-3)$. Jadi $P(x)=(x-1)(x-2)(x-3)$ dengan akar $x=1$, $x=2$, dan $x=3$. (c) Setiap akar real $x=c$ berarti $P(c)=0$, sehingga grafik memotong sumbu-$x$ di titik $(c,0)$. Jadi grafik memotong sumbu-$x$ di $(1,0)$, $(2,0)$, dan $(3,0)$.',
    explanation:
      'Kunci: memakai teorema faktor, membagi untuk menurunkan derajat, memfaktorkan hasil bagi, dan menafsirkan akar sebagai titik potong sumbu-$x$.',
    hints: ['Uji $P(1)$ lebih dahulu.', 'Setelah membagi, faktorkan kuadrat yang tersisa.'],
    competencies: ['teorema faktor', 'akar polinomial', 'evaluasi'],
    rubric: [
      'Menunjukkan nilai polinomial di satu titik nol',
      'Memfaktorkan polinomial sepenuhnya',
      'Menuliskan semua akar',
      'Mengaitkan akar dengan titik potong sumbu-x',
    ],
  },
  {
    id: 'pol-14',
    topicId: 'polinomial',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'pemodelan',
    prompt:
      'Sebuah kotak berbentuk balok memiliki panjang $(x+2)$ cm, lebar $(x-1)$ cm, dan tinggi $x$ cm. (a) Nyatakan volume kotak sebagai polinomial dalam $x$. (b) Tentukan volume kotak bila $x=5$ cm.',
    answer: '140',
    acceptedAnswers: ['140', '140 cm^3', '140 cm3'],
    explanation:
      'Volume $V(x)=x(x+2)(x-1)=x(x^{2}+x-2)=x^{3}+x^{2}-2x$. Untuk $x=5$: $V(5)=125+25-10=140$ cm$^{3}$.',
    hints: ['Kalikan $(x+2)(x-1)$ terlebih dahulu, lalu kalikan dengan $x$.', 'Substitusikan $x=5$ ke polinomial.'],
    competencies: ['perkalian polinomial', 'pemodelan volume'],
  },
  {
    id: 'pol-15',
    topicId: 'polinomial',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Biaya produksi sebuah usaha (ratus ribu rupiah) untuk $x$ ratus unit dimodelkan $C(x)=x^{3}-6x^{2}+13x+5$. (a) Tentukan biaya tetap usaha tersebut. (b) Hitung biaya produksi ketika $x=2$ (yaitu $200$ unit). (c) Tafsirkan hasil (b) dalam rupiah.',
    answer:
      '(a) Biaya tetap adalah nilai saat $x=0$, yaitu $C(0)=5$ ratus ribu rupiah $=$ Rp500.000. (b) $C(2)=2^{3}-6(2^{2})+13(2)+5=8-24+26+5=15$ ratus ribu rupiah. (c) Jadi biaya produksi $200$ unit adalah Rp1.500.000.',
    explanation:
      'Kunci: membaca konstanta sebagai biaya tetap, mensubstitusi $x=2$, lalu mengubah satuan ratus ribu menjadi rupiah.',
    hints: ['Biaya tetap diperoleh pada $x=0$.', 'Hasil $C(2)=15$ masih dalam ratus ribu rupiah.'],
    competencies: ['nilai polinomial', 'kontekstual', 'interpretasi'],
    rubric: [
      'Membaca biaya tetap dari konstanta',
      'Menghitung nilai polinomial pada satu titik',
      'Mengubah satuan ke rupiah',
      'Menafsirkan hasil sesuai konteks',
    ],
  },
  {
    id: 'pol-16',
    topicId: 'polinomial',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Keuntungan harian sebuah usaha (juta rupiah) dimodelkan $P(x)=-x^{3}+7x^{2}-10x$ dengan $x$ menyatakan banyak produksi dalam ratus unit, $x\\geq0$. (a) Faktorkan $P(x)$ lengkap. (b) Tentukan titik impas yang bermakna secara kontekstual. (c) Tentukan rentang $x$ agar usaha tidak merugi.',
    answer:
      '(a) $P(x)=-x(x^{2}-7x+10)=-x(x-2)(x-5)$. (b) $P(x)=0$ pada $x=0$, $x=2$, dan $x=5$. Karena $x=0$ berarti tidak berproduksi, titik impas yang bermakna adalah $x=2$ (200 unit) dan $x=5$ (500 unit). (c) Uji tanda: untuk $2<x<5$, misalnya $x=3$, $P(3)=-3(1)(-2)=6>0$, sedangkan di luar selang itu $P(x)<0$. Jadi usaha tidak merugi pada $2\\leq x\\leq5$, yaitu antara $200$ dan $500$ unit.',
    explanation:
      'Kunci: memfaktorkan polinomial, menentukan akar yang bermakna secara konteks, dan menganalisis tanda polinomial untuk memperoleh selang tidak rugi.',
    hints: [
      'Keluarkan faktor $-x$ terlebih dahulu.',
      'Uji tanda pada selang di antara akar-akarnya.',
    ],
    competencies: ['pemfaktoran polinomial', 'tanda polinomial', 'pemodelan'],
    rubric: [
      'Memfaktorkan polinomial lengkap',
      'Menentukan titik impas yang bermakna',
      'Menganalisis tanda pada tiap selang',
      'Menyimpulkan rentang tidak merugi',
    ],
  },
];

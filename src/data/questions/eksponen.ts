import type { Question } from '@/types/content';

export const eksponenQuestions: Question[] = [
  {
    id: 'eks-01',
    topicId: 'eksponen',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Bentuk sederhana dari $2^{3} \\cdot 2^{5}$ adalah …',
    options: [
      { key: 'A', text: '$2^{15}$' },
      { key: 'B', text: '$2^{8}$' },
      { key: 'C', text: '$4^{8}$' },
      { key: 'D', text: '$4^{15}$' },
    ],
    answer: 'B',
    explanation:
      'Karena basisnya sama, eksponen dijumlahkan: $2^{3} \\cdot 2^{5} = 2^{3+5} = 2^{8}$. Basis tidak berubah.',
    hints: ['Jika basis sama dan dikalikan, apa yang terjadi pada eksponennya?'],
    competencies: ['sifat eksponen'],
  },
  {
    id: 'eks-02',
    topicId: 'eksponen',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Nilai dari $2^{-3}$ adalah …',
    options: [
      { key: 'A', text: '$-8$' },
      { key: 'B', text: '$-\\dfrac{1}{8}$' },
      { key: 'C', text: '$\\dfrac{1}{8}$' },
      { key: 'D', text: '$8$' },
    ],
    answer: 'C',
    explanation:
      'Pangkat negatif berarti kebalikan: $2^{-3} = \\dfrac{1}{2^{3}} = \\dfrac{1}{8}$. Tanda menjadi negatif hanya jika basisnya negatif dan eksponennya ganjil.',
    hints: ['Pangkat negatif bukan berarti hasilnya bilangan negatif.'],
    competencies: ['pangkat negatif'],
  },
  {
    id: 'eks-03',
    topicId: 'eksponen',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Hitung nilai $16^{\\frac{3}{4}}$.',
    answer: '8',
    explanation:
      '$16^{3/4} = (2^{4})^{3/4} = 2^{4 \\cdot 3/4} = 2^{3} = 8$.',
    hints: ['Tulis 16 sebagai $2^{4}$ terlebih dahulu.'],
    competencies: ['pangkat pecahan'],
  },
  {
    id: 'eks-04',
    topicId: 'eksponen',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Bentuk sederhana dari $\\sqrt{75}$ adalah …',
    options: [
      { key: 'A', text: '$3\\sqrt{5}$' },
      { key: 'B', text: '$5\\sqrt{3}$' },
      { key: 'C', text: '$15$' },
      { key: 'D', text: '$25\\sqrt{3}$' },
    ],
    answer: 'B',
    explanation:
      '$\\sqrt{75} = \\sqrt{25 \\cdot 3} = \\sqrt{25}\\,\\sqrt{3} = 5\\sqrt{3}$.',
    hints: ['Cari faktor kuadrat sempurna terbesar dari 75.'],
    competencies: ['bentuk akar'],
  },
  {
    id: 'eks-05',
    topicId: 'eksponen',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Nilai $x$ yang memenuhi $2^{x+1} = 32$ adalah …',
    options: [
      { key: 'A', text: '$4$' },
      { key: 'B', text: '$5$' },
      { key: 'C', text: '$6$' },
      { key: 'D', text: '$16$' },
    ],
    answer: 'A',
    explanation:
      'Karena $32 = 2^{5}$, maka $x + 1 = 5$ sehingga $x = 4$.',
    hints: ['Nyatakan 32 sebagai pangkat dari 2.'],
    competencies: ['persamaan eksponen'],
  },
  {
    id: 'eks-06',
    topicId: 'eksponen',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Sederhanakan $\\dfrac{(3a^{2}b^{3})^{2}}{a^{4}b}$ dan tulis dalam variabel $a$ dan $b$.',
    answer: '9b^5',
    acceptedAnswers: ['9b^{5}', '9 b^5', '9b5'],
    explanation:
      'Pembilang: $(3a^{2}b^{3})^{2} = 9a^{4}b^{6}$. Dibagi $a^{4}b$ menghasilkan $9a^{0}b^{5} = 9b^{5}$.',
    hints: ['Kuadratkan setiap faktor di dalam kurung.'],
    competencies: ['sifat eksponen'],
  },
  {
    id: 'eks-07',
    topicId: 'eksponen',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Populasi bakteri berlipat dua setiap 30 menit. Jika mula-mula ada 200 bakteri, banyak bakteri setelah 2 jam adalah …',
    options: [
      { key: 'A', text: '$800$' },
      { key: 'B', text: '$1.600$' },
      { key: 'C', text: '$3.200$' },
      { key: 'D', text: '$6.400$' },
    ],
    answer: 'C',
    explanation:
      'Dua jam sama dengan 4 selang 30 menit, sehingga $200 \\cdot 2^{4} = 200 \\cdot 16 = 3.200$ bakteri.',
    hints: ['Berapa banyak selang 30 menit dalam 2 jam?'],
    competencies: ['pemodelan eksponen'],
  },
  {
    id: 'eks-08',
    topicId: 'eksponen',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt: 'Manakah pernyataan berikut yang **selalu benar** untuk semua bilangan real $a, b$?',
    options: [
      { key: 'A', text: '$(a+b)^{2} = a^{2} + b^{2}$' },
      { key: 'B', text: '$\\sqrt{a+b} = \\sqrt{a} + \\sqrt{b}$' },
      { key: 'C', text: '$a^{m} \\cdot a^{n} = a^{m+n}$ untuk $a > 0$' },
      { key: 'D', text: '$2^{a} \\cdot 2^{b} = 4^{ab}$' },
    ],
    answer: 'C',
    explanation:
      'Sifat $a^{m} \\cdot a^{n} = a^{m+n}$ benar untuk basis positif. Opsi A salah karena $(a+b)^2 = a^2+2ab+b^2$; opsi B hanya benar pada kasus khusus; opsi D salah karena $2^a \\cdot 2^b = 2^{a+b}$, bukan $4^{ab}$.',
    hints: ['Uji setiap opsi dengan bilangan sederhana.'],
    competencies: ['penalaran sifat eksponen'],
  },
  {
    id: 'eks-09',
    topicId: 'eksponen',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Jelaskan mengapa $a^{0} = 1$ untuk $a \\neq 0$, lalu jelaskan mengapa $\\dfrac{a^{m}}{a^{n}} = a^{m-n}$ juga berlaku ketika $m < n$.',
    answer:
      'Karena $a^{n}/a^{n}=1$ dan dengan sifat pengurangan eksponen $a^{n}/a^{n}=a^{n-n}=a^{0}$, maka $a^{0}=1$. Untuk $m<n$, pengurangan $m-n$ menghasilkan bilangan negatif, sehingga berlaku $a^{m-n}=a^{-(n-m)}=1/a^{n-m}$, yaitu kebalikan — konsisten dengan definisi pangkat negatif.',
    explanation:
      'Kunci jawaban menekankan pendekatan dari kesamaan dua cara menghitung hasil bagi yang sama, lalu perluasan definisi ke eksponen negatif.',
    hints: ['Mulai dari $a^{n}/a^{n}=1$, lalu terapkan sifat pengurangan eksponen pada hasil bagi yang sama.'],
    competencies: ['pembuktian', 'pangkat nol dan negatif'],
  },
  {
    id: 'eks-10',
    topicId: 'eksponen',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Rasionalkan penyebut dari $\\dfrac{6}{\\sqrt{5}-\\sqrt{2}}$ dan tulis hasil akhir dalam bentuk paling sederhana tanpa pecahan.',
    answer: '2(√5+√2)',
    acceptedAnswers: ['2(\\sqrt{5}+\\sqrt{2})', '2√5+2√2', '2\\sqrt{5}+2\\sqrt{2}'],
    explanation:
      'Kalikan pembilang dan penyebut dengan bentuk sekawan $\\sqrt{5}+\\sqrt{2}$: $\\dfrac{6(\\sqrt{5}+\\sqrt{2})}{5-2} = 2(\\sqrt{5}+\\sqrt{2})$.',
    hints: ['Bentuk sekawan dari $\\sqrt{5}-\\sqrt{2}$ adalah $\\sqrt{5}+\\sqrt{2}$.'],
    competencies: ['merasionalkan penyebut'],
  },
  {
    id: 'eks-11',
    topicId: 'eksponen',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Seorang siswa menulis $(a+b)^{2}=a^{2}+b^{2}$ dan menganggap $\\sqrt{a+b}=\\sqrt{a}+\\sqrt{b}$. (a) Tunjukkan dengan satu contoh bilangan bahwa kedua pernyataan itu salah. (b) Tuliskan sifat eksponen yang benar untuk $(ab)^{n}$ dan $\\left(\\dfrac{a}{b}\\right)^{n}$.',
    answer:
      '(a) Untuk $a=3$ dan $b=4$: $(3+4)^{2}=49$, sedangkan $3^{2}+4^{2}=25$, jadi pernyataan pertama salah. Untuk akar: $\\sqrt{9+16}=\\sqrt{25}=5$, sedangkan $\\sqrt{9}+\\sqrt{16}=3+4=7$, jadi pernyataan kedua juga salah. (b) Sifat yang benar adalah $(ab)^{n}=a^{n}b^{n}$ dan $\\left(\\dfrac{a}{b}\\right)^{n}=\\dfrac{a^{n}}{b^{n}}$ untuk $b\\neq0$.',
    explanation:
      'Kunci: menguji klaim dengan bilangan konkret, lalu menyatakan sifat distribusi pangkat atas perkalian dan pembagian.',
    hints: ['Coba bilangan yang membentuk Pythagoras seperti $3$ dan $4$.', 'Pangkat dapat disebar pada perkalian, bukan pada penjumlahan.'],
    competencies: ['sifat eksponen', 'penalaran', 'evaluasi'],
  },
  {
    id: 'eks-12',
    topicId: 'eksponen',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Nilai sebuah perangkat elektronik menyusut mengikuti $V(t)=8.000.000\\times(0{,}8)^{t}$ rupiah, dengan $t$ dalam tahun. (a) Tentukan nilai perangkat setelah $3$ tahun. (b) Jelaskan arti faktor $0{,}8$ pada model tersebut.',
    answer:
      '(a) $V(3)=8.000.000\\times(0{,}8)^{3}=8.000.000\\times0{,}512=4.096.000$. Jadi nilainya sekitar Rp4.096.000. (b) Faktor $0{,}8$ berarti nilai perangkat setiap tahun menjadi $80\\%$ dari nilai tahun sebelumnya, yaitu menyusut $20\\%$ per tahun.',
    explanation:
      'Kunci: mensubstitusi $t=3$ dan menafsirkan basis $0<b<1$ sebagai faktor penyusutan.',
    hints: ['Hitung $(0{,}8)^{3}$ lebih dahulu.', 'Basis kurang dari $1$ menandakan peluruhan.'],
    competencies: ['pemodelan eksponen', 'peluruhan'],
  },
];

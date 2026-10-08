import type { Question } from '@/types/content';

export const aplikasiTurunanQuestions: Question[] = [
  {
    id: 'ap-01',
    topicId: 'aplikasi-turunan',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Gradien garis singgung kurva $y = x^{2}$ di $x = 3$ adalah …',
    options: [
      { key: 'A', text: '$6$' },
      { key: 'B', text: '$9$' },
      { key: 'C', text: '$3$' },
      { key: 'D', text: '$2$' },
    ],
    answer: 'A',
    explanation:
      'Gradien garis singgung adalah turunan $y\' = 2x$. Di $x = 3$ gradiennya $2(3) = 6$.',
    hints: ['Turunan di suatu titik adalah gradien garis singgung di titik itu.'],
    competencies: ['gradien garis singgung'],
  },
  {
    id: 'ap-02',
    topicId: 'aplikasi-turunan',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Tentukan nilai $x$ pada titik stasioner fungsi $f(x) = x^{3} - 3x^{2} + 2$.',
    answer: '0 dan 2',
    acceptedAnswers: ['0, 2', 'x=0 dan x=2', '0,2'],
    explanation:
      'Titik stasioner dicari dari $f\'(x) = 0$. Karena $f\'(x) = 3x^{2} - 6x = 3x(x - 2)$, diperoleh $x = 0$ atau $x = 2$.',
    hints: ['Faktorkan $3x^{2} - 6x$.'],
    competencies: ['titik stasioner'],
  },
  {
    id: 'ap-03',
    topicId: 'aplikasi-turunan',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Posisi partikel adalah $s(t) = t^{3} - 6t^{2} + 9t$ meter. Tentukan fungsi kecepatannya.',
    answer: '3t^2 - 12t + 9',
    acceptedAnswers: ['3t^{2}-12t+9', '3t^2-12t+9', 'v(t)=3t^2-12t+9'],
    explanation:
      'Kecepatan adalah turunan posisi: $v(t) = s\'(t) = 3t^{2} - 12t + 9$.',
    hints: ['Turunkan posisi terhadap waktu.'],
    competencies: ['kecepatan sesaat'],
  },
  {
    id: 'ap-04',
    topicId: 'aplikasi-turunan',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Persamaan garis singgung kurva $y = x^{2}$ di $x = 3$ adalah …',
    options: [
      { key: 'A', text: '$y = 6x - 9$' },
      { key: 'B', text: '$y = 6x + 9$' },
      { key: 'C', text: '$y = 3x - 9$' },
      { key: 'D', text: '$y = 2x - 3$' },
    ],
    answer: 'A',
    explanation:
      'Titik singgung $(3, 9)$ dan gradien $6$, sehingga $y - 9 = 6(x - 3)$, yaitu $y = 6x - 9$.',
    hints: ['Gunakan $y - f(a) = f\'(a)(x - a)$ dengan $a = 3$.'],
    competencies: ['persamaan garis singgung'],
  },
  {
    id: 'ap-05',
    topicId: 'aplikasi-turunan',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Untuk $s(t) = t^{3} - 6t^{2} + 9t$, hitung kecepatan pada $t = 2$ s.',
    answer: '-3',
    acceptedAnswers: ['-3 m/s', '-3m/s', '-3,0', '-3.0'],
    explanation:
      '$v(t) = 3t^{2} - 12t + 9$, maka $v(2) = 3(4) - 12(2) + 9 = 12 - 24 + 9 = -3$ m/s. Tanda negatif berarti partikel bergerak ke arah berlawanan.',
    hints: ['Substitusikan $t = 2$ ke $v(t) = 3t^{2} - 12t + 9$.'],
    competencies: ['kecepatan sesaat'],
  },
  {
    id: 'ap-06',
    topicId: 'aplikasi-turunan',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Masih dengan $s(t) = t^{3} - 6t^{2} + 9t$, hitung percepatan pada $t = 2$ s.',
    answer: '0',
    acceptedAnswers: ['0 m/s^2', '0 m/s2', '0,0', '0.0'],
    explanation:
      'Percepatan adalah turunan kecepatan: $a(t) = v\'(t) = 6t - 12$. Maka $a(2) = 12 - 12 = 0$ m/s$^{2}$.',
    hints: ['Turunkan $v(t) = 3t^{2} - 12t + 9$.'],
    competencies: ['percepatan sesaat'],
  },
  {
    id: 'ap-07',
    topicId: 'aplikasi-turunan',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Diketahui $f(x) = x^{3} - 3x^{2} + 2$ dengan $f\'(0) = 0$. Berdasarkan uji turunan kedua, titik $(0, 2)$ merupakan …',
    options: [
      { key: 'A', text: 'maksimum lokal karena $f\'\'(0) = -6 < 0$' },
      { key: 'B', text: 'minimum lokal karena $f\'\'(0) = -6 < 0$' },
      { key: 'C', text: 'titik belok karena $f\'\'(0) = 0$' },
      { key: 'D', text: 'minimum lokal karena $f\'\'(0) = 6 > 0$' },
    ],
    answer: 'A',
    explanation:
      '$f\'\'(x) = 6x - 6$, sehingga $f\'\'(0) = -6 < 0$. Turunan kedua negatif berarti grafik cekung ke bawah di sekitar titik itu, jadi $(0, 2)$ adalah maksimum lokal.',
    hints: ['Ingat: $f\'\'(c) < 0$ menandakan maksimum lokal.'],
    competencies: ['uji turunan kedua', 'titik stasioner'],
  },
  {
    id: 'ap-08',
    topicId: 'aplikasi-turunan',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Selidiki titik stasioner, jenisnya, dan titik belok fungsi $f(x) = x^{3} - 3x^{2} + 2$, lalu jelaskan bentuk sketsa grafiknya.',
    answer:
      '$f\'(x) = 3x^{2} - 6x = 3x(x - 2)$ memberi titik stasioner $x = 0$ dan $x = 2$ dengan $f(0) = 2$ dan $f(2) = -2$. Turunan kedua $f\'\'(x) = 6x - 6$ memberi $f\'\'(0) = -6 < 0$ sehingga $(0, 2)$ maksimum lokal, dan $f\'\'(2) = 6 > 0$ sehingga $(2, -2)$ minimum lokal. Titik belok terjadi saat $f\'\'(x) = 0$, yaitu $x = 1$, dengan $f(1) = 0$. Grafik naik pada $x < 0$, turun pada $0 < x < 2$, lalu naik lagi pada $x > 2$, cekung ke bawah di kiri $x = 1$ dan cekung ke atas di kanan $x = 1$.',
    explanation:
      'Kunci: menghitung turunan pertama dan kedua, menentukan titik stasioner, menguji jenisnya, lalu menentukan titik belok dan arah kecekungan.',
    hints: [
      'Tentukan $f\'$ lalu selesaikan $f\'(x) = 0$.',
      'Gunakan tanda $f\'\'$ untuk jenis stasioner dan kecekungan.',
    ],
    competencies: ['mensketsa kurva', 'uji turunan kedua', 'titik belok'],
  },
  {
    id: 'ap-09',
    topicId: 'aplikasi-turunan',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'pemodelan',
    prompt:
      'Seorang peternak memakai $40$ m kawat untuk membuat kandang persegi panjang dengan satu sisi memanfaatkan tepi sungai. Tentukan luas maksimum kandang.',
    answer: '200',
    acceptedAnswers: ['200 m^2', '200 m2', '200 m²'],
    explanation:
      'Misalkan sisi tegak lurus sungai berukuran $x$, maka sisi sejajar sungai berukuran $40 - 2x$. Luas $L(x) = x(40 - 2x)$ dengan $L\'(x) = 40 - 4x = 0$, sehingga $x = 10$. Luas maksimum $L(10) = 10 \\cdot 20 = 200$ m$^{2}$.',
    hints: ['Nyatakan luas sebagai fungsi satu variabel, lalu cari titik stasionernya.'],
    competencies: ['optimasi', 'pemodelan'],
  },
  {
    id: 'ap-10',
    topicId: 'aplikasi-turunan',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'pemodelan',
    prompt:
      'Kotak terbuka dibuat dari karton $20 \\text{ cm} \\times 20 \\text{ cm}$ dengan memotong persegi bersisi $x$ di tiap sudut. Tentukan nilai $x$ yang membuat volume maksimum.',
    answer: '10/3',
    acceptedAnswers: ['3,33', '3.33', '3,333', '3.333', '10/3', '10 per 3', '3 1/3'],
    explanation:
      'Volume $V(x) = x(20 - 2x)^{2}$. Turunan $V\'(x) = (20 - 2x)(20 - 6x) = 0$ memberi $x = 10$ atau $x = \\dfrac{10}{3}$. Nilai $x = 10$ tidak sah karena membuat lebar nol, jadi $x = \\dfrac{10}{3} \\approx 3{,}33$ cm.',
    hints: ['Faktorkan $V\'(x)$ dan buang akar yang membuat ukuran tidak positif.'],
    competencies: ['optimasi', 'pemodelan'],
  },
  {
    id: 'ap-11',
    topicId: 'aplikasi-turunan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Jumlah dua bilangan adalah $20$. Tentukan kedua bilangan agar hasil kalinya maksimum, dan buktikan bahwa nilainya memang maksimum.',
    answer:
      'Misalkan kedua bilangan $x$ dan $20 - x$, maka hasil kalinya $P(x) = x(20 - x) = 20x - x^{2}$. Turunan $P\'(x) = 20 - 2x = 0$ memberi $x = 10$, sehingga bilangan lainnya juga $10$. Hasil kali maksimum $P(10) = 10 \\cdot 10 = 100$. Karena $P\'\'(x) = -2 < 0$, titik itu benar-benar maksimum.',
    explanation:
      'Kunci: memodelkan hasil kali sebagai fungsi satu variabel, mencari titik stasioner, lalu memverifikasi jenisnya dengan turunan kedua.',
    hints: [
      'Nyatakan satu bilangan sebagai $20 - x$.',
      '$P\'\'(10) < 0$ menandakan maksimum.',
    ],
    competencies: ['optimasi', 'uji turunan kedua', 'pemodelan'],
  },
  {
    id: 'ap-12',
    topicId: 'aplikasi-turunan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Keuntungan sebuah usaha (juta rupiah) dimodelkan $K(x)=-x^{3}+6x^{2}$ dengan $x$ menyatakan banyak unit produksi (dalam ratusan), $x\\geq0$. (a) Tentukan titik stasionernya. (b) Tentukan titik yang memberi keuntungan maksimum beserta nilainya. (c) Jelaskan mengapa keuntungan menurun setelah titik maksimum.',
    answer:
      '(a) $K\'(x)=-3x^{2}+12x=-3x(x-4)=0$ memberi $x=0$ dan $x=4$. (b) $K\'\'(x)=-6x+12$; $K\'\'(4)=-12<0$ sehingga $x=4$ maksimum lokal. Nilai $K(4)=-64+96=32$ juta rupiah. Titik $x=0$ memberi $K\'\'(0)=12>0$ (minimum lokal). (c) Setelah $x=4$, turunan $K\'(x)<0$ untuk $x>4$, artinya penambahan produksi justru menurunkan keuntungan karena biaya tambahan melebihi tambahan pendapatan.',
    explanation:
      'Kunci: mencari titik stasioner, menguji jenisnya dengan turunan kedua, dan menafsirkan tanda turunan sebagai arah perubahan keuntungan.',
    hints: ['Faktorkan $K\'(x)=-3x(x-4)$.', 'Turunan pertama negatif berarti fungsi menurun.'],
    competencies: ['optimasi', 'uji turunan kedua', 'evaluasi'],
  },
];

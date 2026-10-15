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
      'Gradien garis singgung adalah turunan $y\' = 2x$. Di $x = 3$ gradiennya $2(3) = 6$. Opsi B, $9$, adalah nilai fungsi $y(3)=3^{2}$, bukan gradien. Opsi C, $3$, muncul bila nilai $x$ langsung dipakai sebagai gradien tanpa mengalikan dengan $2$. Opsi D, $2$, muncul bila koefisien atau pangkat dianggap sebagai gradien. ',
    hints: ['Turunan di suatu titik adalah gradien garis singgung di titik itu.', 'Hitung $y\'(x)$ lebih dahulu, baru substitusikan $x=3$.'],
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
    hints: [
      'Faktorkan $3x^{2} - 6x$.',
      'Setelah difaktorkan menjadi $3x(x-2)$, gunakan sifat hasil kali nol.',
      'Titik stasioner diperoleh ketika $f\'(x)=0$, bukan ketika $f(x)=0$.',
    ],
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
    hints: [
      'Turunkan posisi terhadap waktu.',
      'Gunakan aturan pangkat pada setiap suku $s(t)$.',
    ],
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
      'Titik singgung $(3, 9)$ dan gradien $6$, sehingga $y - 9 = 6(x - 3)$, yaitu $y = 6x - 9$. Opsi B, $y = 6x + 9$, memakai gradien yang benar tetapi salah konstanta karena menambahkan $9$ alih-alih mengurangi. Opsi C, $y = 3x - 9$, memakai gradien $3$ (nilai $x$) bukan $2x = 6$. Opsi D, $y = 2x - 3$, memakai gradien $2$ (pangkat) bukan turunan $2x$.',
    hints: ['Gunakan $y - f(a) = f\'(a)(x - a)$ dengan $a = 3$.', 'Hitung titik singgung $(3, f(3))$ dan gradien $f\'(3)$ secara terpisah.'],
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
    hints: ['Substitusikan $t = 2$ ke $v(t) = 3t^{2} - 12t + 9$.', 'Hitung tiap suku secara berurutan agar tidak keliru tanda.'],
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
    hints: ['Turunkan $v(t) = 3t^{2} - 12t + 9$.', 'Percepatan adalah turunan dari fungsi kecepatan, bukan turunan posisi.'],
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
      '$f\'\'(x) = 6x - 6$, sehingga $f\'\'(0) = -6 < 0$. Turunan kedua negatif berarti grafik cekung ke bawah di sekitar titik itu, jadi $(0, 2)$ adalah maksimum lokal. Opsi B membalik makna tanda: $f\'\'(0) < 0$ menandakan maksimum, bukan minimum. Opsi C salah karena $f\'\'(0) = -6 \\neq 0$, jadi bukan titik belok. Opsi D salah pada nilainya, karena $f\'\'(0) = -6$, bukan $6$, sehingga tidak bisa dipakai menyimpulkan minimum.',
    hints: ['Ingat: $f\'\'(c) < 0$ menandakan maksimum lokal.', 'Hitung $f\'\'(0)$ secara langsung dari $f\'\'(x)=6x-6$ sebelum menyimpulkan jenis titiknya.'],
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
    rubric: [
      "Menghitung $f'(x)=3x(x-2)$ dan titik stasioner $x=0$ serta $x=2$",
      "Menguji jenis dengan $f''(x)=6x-6$: maksimum di $(0,2)$, minimum di $(2,-2)$",
      'Menentukan titik belok $x=1$ serta arah naik-turun dan kecekungan grafik',
    ],
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
    hints: ['Nyatakan luas sebagai fungsi satu variabel, lalu cari titik stasionernya.', 'Karena satu sisi memanfaatkan tepi sungai, kawat hanya dipakai untuk tiga sisi.'],
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
    hints: ['Faktorkan $V\'(x)$ dan buang akar yang membuat ukuran tidak positif.', 'Sisi alas menjadi $20 - 2x$, sehingga $x$ harus memenuhi $0 < x < 10$.'],
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
    rubric: [
      'Memodelkan hasil kali $P(x)=x(20-x)$',
      "Mencari titik stasioner $P'(x)=20-2x=0$ sehingga $x=10$",
      "Memverifikasi maksimum dengan $P''(x)=-2<0$ dan menyebut hasil kali $100$",
    ],
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
    rubric: [
      "Memfaktorkan $K'(x)=-3x(x-4)$ dan memperoleh $x=0$ serta $x=4$",
      "Menguji $K''(4)=-12<0$ sebagai maksimum dan menghitung $K(4)=32$ juta",
      "Menjelaskan $K'(x)<0$ untuk $x>4$ sehingga keuntungan menurun",
    ],
  },
  {
    id: 'ap-13',
    topicId: 'aplikasi-turunan',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Diketahui $f\'\'(c)=0$ pada suatu titik stasioner $x=c$. Pernyataan yang paling tepat mengenai titik $(c, f(c))$ adalah …',
    options: [
      { key: 'A', text: 'pasti merupakan titik belok' },
      { key: 'B', text: 'pasti merupakan titik maksimum lokal' },
      { key: 'C', text: 'belum tentu titik belok; perlu diperiksa perubahan tanda $f\'\'$ di sekitar $x=c$' },
      { key: 'D', text: 'pasti merupakan titik minimum lokal' },
    ],
    answer: 'C',
    explanation:
      'Nilai $f\'\'(c)=0$ tidak cukup untuk memutuskan jenis titik. Bila $f\'\'$ berubah tanda di sekitar $x=c$, titik itu titik belok; bila tandanya tidak berubah (misalnya $f(x)=x^{4}$ di $x=0$), titik itu justru minimum lokal. Karena itu perlu uji perubahan tanda $f\'\'$. Opsi A salah karena $f\'\'(c)=0$ tidak otomatis berarti titik belok. Opsi B dan D sama-sama salah karena $f\'\'(c)=0$ tidak menentukan maksimum lokal maupun minimum lokal tanpa pemeriksaan tambahan.',
    hints: [
      'Uji turunan kedua tidak dapat disimpulkan ketika $f\'\'(c)=0$.',
      'Bandingkan perilaku $f(x)=x^{3}$ dan $f(x)=x^{4}$ di sekitar $x=0$.',
    ],
    competencies: ['uji turunan kedua', 'titik belok', 'konsep turunan'],
  },
  {
    id: 'ap-14',
    topicId: 'aplikasi-turunan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Sebuah wadah berbentuk tabung tertutup memiliki volume tetap $V$. Buktikan dengan turunan bahwa luas permukaan wadah minimum ketika tinggi tabung sama dengan diameternya.',
    answer:
      'Misalkan jari-jari $r$ dan tinggi $h$, dengan volume $\\pi r^{2}h=V$ tetap sehingga $h=\\dfrac{V}{\\pi r^{2}}$. Luas permukaan $L=2\\pi r^{2}+2\\pi rh=2\\pi r^{2}+\\dfrac{2V}{r}$. Turunan $L\'(r)=4\\pi r-\\dfrac{2V}{r^{2}}=0$ memberi $4\\pi r^{3}=2V$, yaitu $V=2\\pi r^{3}$. Substitusi ke $h=\\dfrac{V}{\\pi r^{2}}$ menghasilkan $h=\\dfrac{2\\pi r^{3}}{\\pi r^{2}}=2r$, yang tidak lain adalah diameternya. Karena $L\'\'(r)=4\\pi+\\dfrac{4V}{r^{3}}>0$, titik ini benar-benar memberi minimum. Terbukti.',
    explanation:
      'Kunci: menyatakan luas sebagai fungsi satu variabel lewat kendala volume, menurunkan, menyelesaikan syarat stasioner, memeriksa jenisnya dengan turunan kedua, lalu menafsirkan $h=2r$.',
    hints: [
      'Gunakan kendala volume untuk menulis $h$ dalam $r$.',
      'Tunjukkan $L\'\'(r)>0$ supaya titik itu terbukti minimum.',
    ],
    competencies: ['optimasi', 'pemodelan geometri', 'pembuktian'],
    rubric: [
      'Menuliskan $h=\\dfrac{V}{\\pi r^{2}}$ dan luas $L=2\\pi r^{2}+\\dfrac{2V}{r}$',
      "Menyelesaikan $L'(r)=0$ menjadi $V=2\\pi r^{3}$",
      "Menunjukkan $h=2r$ (diameter) dan memverifikasi minimum dengan $L''(r)>0$",
    ],
  },
  {
    id: 'ap-15',
    topicId: 'aplikasi-turunan',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Ketinggian sebuah drone setelah $t$ detik (meter) dimodelkan $h(t) = -t^{3} + 6t^{2} + 15t$ untuk $t \\geq 0$. Tentukan ketinggian maksimum yang dicapai drone.',
    answer: '100',
    acceptedAnswers: ['100', '100 m'],
    explanation:
      'Kecepatan naik adalah $h\'(t) = -3t^{2} + 12t + 15 = -3(t-5)(t+1)$. Karena $t \\geq 0$, titik stasioner yang relevan adalah $t = 5$. Turunan kedua $h\'\'(t) = -6t + 12$ memberi $h\'\'(5) = -18 < 0$, sehingga $t = 5$ adalah maksimum. Ketinggian maksimum $h(5) = -125 + 150 + 75 = 100$ meter.',
    hints: [
      'Cari titik stasioner dari $h\'(t) = 0$ dan buang nilai $t$ yang negatif.',
      'Gunakan $h\'\'(t)$ untuk memastikan titik itu maksimum, lalu substitusikan ke $h(t)$.',
    ],
    competencies: ['optimasi', 'uji turunan kedua', 'kontekstual'],
  },
  {
    id: 'ap-16',
    topicId: 'aplikasi-turunan',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'evaluasi',
    prompt:
      'Diketahui $f(x) = x^{3}$. Pernyataan yang paling tepat mengenai titik $x = 0$ adalah …',
    options: [
      { key: 'A', text: '$f\'(0) = 0$ dan titik $(0,0)$ merupakan titik belok' },
      { key: 'B', text: '$f\'(0) = 0$ dan titik $(0,0)$ merupakan maksimum lokal' },
      { key: 'C', text: '$f\'(0)$ tidak ada karena grafik berbelok tajam di titik asal' },
      { key: 'D', text: '$f\'(0) = 0$ dan titik $(0,0)$ merupakan minimum lokal' },
    ],
    answer: 'A',
    explanation:
      'Turunan $f\'(x) = 3x^{2}$ sehingga $f\'(0) = 0$. Karena $f\'\'(x) = 6x$ berubah tanda di sekitar $x = 0$ dan nilai $f$ terus naik pada kedua sisinya, titik $(0,0)$ adalah titik belok, bukan ekstrem. Opsi B dan D salah karena $f(x)=x^{3}$ tidak memiliki maksimum maupun minimum lokal di titik asal. Opsi C salah karena $f\'(0) = 0$ ada dan terdefinisi; grafik memang mendatar di titik itu, tidak menimbulkan turunan tak ada.',
    hints: [
      'Hitung $f\'(0)$ dan $f\'\'(0)$ terlebih dahulu.',
      'Periksa apakah nilai fungsi di kiri dan kanan $x=0$ lebih kecil atau lebih besar dari $f(0)$.',
    ],
    competencies: ['titik belok', 'evaluasi konsep turunan'],
  },
];

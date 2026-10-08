import type { Question } from '@/types/content';

export const komposisiFungsiQuestions: Question[] = [
  {
    id: 'kf-01',
    topicId: 'komposisi-fungsi',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt:
      'Diketahui $f(x) = x + 2$ dan $g(x) = 3x$. Rumus $(f \\circ g)(x)$ adalah …',
    options: [
      { key: 'A', text: '$3x + 2$' },
      { key: 'B', text: '$3x + 6$' },
      { key: 'C', text: '$4x + 2$' },
      { key: 'D', text: '$3x^{2} + 6x$' },
    ],
    answer: 'A',
    explanation:
      '$(f \\circ g)(x) = f(g(x)) = f(3x) = 3x + 2$. Kerjakan $g$ terlebih dahulu, lalu masukkan hasilnya ke $f$. Opsi B adalah $(g \\circ f)(x)$.',
    hints: ['Kerjakan fungsi yang paling dekat dengan $x$, yaitu $g$, lebih dahulu.'],
    competencies: ['komposisi fungsi'],
  },
  {
    id: 'kf-02',
    topicId: 'komposisi-fungsi',
    difficulty: 'dasar',
    type: 'open-response',
    category: 'konsep',
    prompt:
      'Jelaskan arti notasi $(f \\circ g)(x)$ dan urutan pengerjaan fungsi di dalamnya. Bandingkan dengan $(g \\circ f)(x)$.',
    answer:
      '$(f \\circ g)(x)$ berarti $f(g(x))$: fungsi $g$ dikerjakan lebih dahulu terhadap $x$, lalu hasilnya menjadi masukan bagi $f$. Sebaliknya, $(g \\circ f)(x) = g(f(x))$ berarti $f$ dikerjakan lebih dahulu. Secara umum urutannya tidak boleh ditukar karena $f \\circ g \\neq g \\circ f$, kecuali pada kasus khusus.',
    explanation:
      'Kunci menekankan makna "bundaran" serta urutan pengerjaan dari fungsi yang paling dekat dengan $x$.',
    hints: ['Fungsi yang ditulis lebih dekat ke $x$ dikerjakan lebih dahulu.'],
    competencies: ['konsep komposisi fungsi'],
  },
  {
    id: 'kf-03',
    topicId: 'komposisi-fungsi',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Diketahui $f(x) = x^{2}$ dan $g(x) = x + 1$. Hitunglah $(f \\circ g)(3)$.',
    answer: '16',
    explanation:
      '$(f \\circ g)(3) = f(g(3))$. Karena $g(3) = 3 + 1 = 4$, maka $f(4) = 4^{2} = 16$.',
    hints: ['Hitung $g(3)$ lebih dahulu, lalu masukkan hasilnya ke $f$.'],
    competencies: ['nilai komposisi fungsi'],
  },
  {
    id: 'kf-04',
    topicId: 'komposisi-fungsi',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Diketahui $f(x) = 2x$ dan $g(x) = x - 4$. Hitunglah $(g \\circ f)(5)$.',
    answer: '6',
    explanation:
      '$(g \\circ f)(5) = g(f(5))$. Karena $f(5) = 2(5) = 10$, maka $g(10) = 10 - 4 = 6$.',
    hints: ['Pada $(g \\circ f)$, kerjakan $f$ lebih dahulu.'],
    competencies: ['nilai komposisi fungsi'],
  },
  {
    id: 'kf-05',
    topicId: 'komposisi-fungsi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Diketahui $f(x) = x^{2} + 1$ dan $g(x) = x - 3$. Rumus $(f \\circ g)(x)$ adalah …',
    options: [
      { key: 'A', text: '$x^{2} - 6x + 10$' },
      { key: 'B', text: '$x^{2} - 2$' },
      { key: 'C', text: '$x^{2} + 10$' },
      { key: 'D', text: '$x^{2} - 6x + 9$' },
    ],
    answer: 'A',
    explanation:
      '$(f \\circ g)(x) = f(x-3) = (x-3)^{2} + 1 = x^{2} - 6x + 9 + 1 = x^{2} - 6x + 10$. Opsi B adalah $(g \\circ f)(x) = (x^{2}+1) - 3 = x^{2} - 2$.',
    hints: ['Substitusikan seluruh $g(x)$ ke dalam variabel $x$ pada $f$.'],
    competencies: ['rumus komposisi fungsi'],
  },
  {
    id: 'kf-06',
    topicId: 'komposisi-fungsi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Diketahui $f(x) = \\sqrt{x}$ dan $g(x) = 2x + 4$. Domain dari $(f \\circ g)(x)$ adalah …',
    options: [
      { key: 'A', text: '$x \\geq -2$' },
      { key: 'B', text: '$x \\geq 2$' },
      { key: 'C', text: '$x \\geq -4$' },
      { key: 'D', text: 'semua bilangan real' },
    ],
    answer: 'A',
    explanation:
      '$(f \\circ g)(x) = f(2x+4) = \\sqrt{2x+4}$. Agar terdefinisi, isi akar tidak boleh negatif: $2x + 4 \\geq 0 \\Rightarrow x \\geq -2$. Jadi domainnya $x \\geq -2$.',
    hints: ['Syarat fungsi akar: bentuk di bawah tanda akar $\\geq 0$.'],
    competencies: ['domain komposisi fungsi'],
  },
  {
    id: 'kf-07',
    topicId: 'komposisi-fungsi',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Diketahui $f(x) = 2x + 1$ dan $(f \\circ g)(x) = 4x + 7$. Tentukan rumus $g(x)$.',
    answer: '2x+3',
    acceptedAnswers: ['2x + 3', '2 x + 3'],
    explanation:
      '$(f \\circ g)(x) = f(g(x)) = 2g(x) + 1$. Karena nilainya $4x + 7$, maka $2g(x) + 1 = 4x + 7 \\Rightarrow 2g(x) = 4x + 6 \\Rightarrow g(x) = 2x + 3$. Periksa: $f(2x+3) = 2(2x+3) + 1 = 4x + 7$, benar.',
    hints: ['Tulis $2g(x) + 1$ sama dengan hasil yang diketahui, lalu selesaikan untuk $g(x)$.'],
    competencies: ['menentukan fungsi dalam komposisi'],
  },
  {
    id: 'kf-08',
    topicId: 'komposisi-fungsi',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Diketahui $f(x) = x + 3$ dan $g(x) = x^{2} - 1$. Tentukan $(f \\circ g)(x)$ dan $(g \\circ f)(x)$, lalu jelaskan mengapa komposisi fungsi tidak komutatif.',
    answer:
      '$(f \\circ g)(x) = f(x^{2}-1) = (x^{2}-1) + 3 = x^{2} + 2$. Sedangkan $(g \\circ f)(x) = g(x+3) = (x+3)^{2} - 1 = x^{2} + 6x + 9 - 1 = x^{2} + 6x + 8$. Kedua hasil berbeda, sehingga $f \\circ g \\neq g \\circ f$. Komposisi tidak komutatif karena urutan pengerjaan memengaruhi hasil akhir.',
    explanation:
      'Kunci menekankan substitusi yang benar pada masing-masing urutan dan kesimpulan bahwa hasilnya tidak sama.',
    hints: ['Untuk $(f \\circ g)$, kerjakan $g$ dahulu; untuk $(g \\circ f)$, kerjakan $f$ dahulu.'],
    competencies: ['sifat komposisi', 'penalaran aljabar'],
  },
  {
    id: 'kf-09',
    topicId: 'komposisi-fungsi',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Diketahui $f(x) = 3x + 1$ dan $g(x) = x - 2$. Rumus $(f \\circ g)^{-1}(x)$ adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{x+5}{3}$' },
      { key: 'B', text: '$\\dfrac{x-5}{3}$' },
      { key: 'C', text: '$3x + 5$' },
      { key: 'D', text: '$\\dfrac{x+1}{3}$' },
    ],
    answer: 'A',
    explanation:
      '$(f \\circ g)(x) = 3(x-2) + 1 = 3x - 5$. Inversnya: $y = 3x - 5 \\Rightarrow x = \\dfrac{y+5}{3}$, jadi $(f \\circ g)^{-1}(x) = \\dfrac{x+5}{3}$. Periksa dengan sifat $(f \\circ g)^{-1} = g^{-1} \\circ f^{-1}$: $f^{-1}(x) = \\dfrac{x-1}{3}$ dan $g^{-1}(x) = x+2$, sehingga $g^{-1}\\!\\left(\\dfrac{x-1}{3}\\right) = \\dfrac{x-1}{3} + 2 = \\dfrac{x+5}{3}$, sama.',
    hints: ['Cari dahulu $(f \\circ g)(x)$, lalu tentukan inversnya.'],
    competencies: ['invers komposisi fungsi'],
  },
  {
    id: 'kf-10',
    topicId: 'komposisi-fungsi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah toko memberi diskon $25\\%$ terhadap harga barang, lalu menambahkan biaya layanan tetap sebesar $5$ ribu rupiah. Nyatakan total biaya sebagai komposisi fungsi, lalu hitung total biaya untuk harga awal $40$ ribu rupiah.',
    answer:
      'Diskon memodelkan $f(x) = 0{,}75x$, dan biaya layanan $g(x) = x + 5$ (dalam ribuan rupiah). Total biaya adalah $(g \\circ f)(x) = g(0{,}75x) = 0{,}75x + 5$. Untuk $x = 40$: $0{,}75(40) + 5 = 30 + 5 = 35$. Jadi total biaya $35$ ribu rupiah.',
    explanation:
      'Kunci menekankan pemilihan urutan: diskon dikenakan lebih dahulu, baru biaya layanan ditambahkan, sehingga komposisinya $(g \\circ f)(x)$.',
    hints: ['Diskon $25\\%$ berarti membayar $75\\%$ dari harga awal.'],
    competencies: ['pemodelan komposisi fungsi', 'kontekstual'],
  },
  {
    id: 'kf-11',
    topicId: 'komposisi-fungsi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Diketahui $f(x)=2x-1$ dan $g(x)=x^{2}$. (a) Tentukan $(f\\circ g)(x)$ dan $(g\\circ f)(x)$. (b) Selidiki apakah berlaku $(f\\circ g)(x)=(g\\circ f)(x)$. (c) Jelaskan syarat agar dua komposisi fungsi bernilai sama.',
    answer:
      '(a) $(f\\circ g)(x)=f(x^{2})=2x^{2}-1$ dan $(g\\circ f)(x)=g(2x-1)=(2x-1)^{2}=4x^{2}-4x+1$. (b) Keduanya tidak sama, misalnya pada $x=0$ diperoleh $-1$ dan $1$. Jadi $(f\\circ g)(x)\\neq(g\\circ f)(x)$. (c) Kesamaan hanya berlaku pada kasus khusus, misalnya jika kedua fungsi saling invers atau jika salah satunya fungsi identitas; secara umum komposisi tidak komutatif.',
    explanation:
      'Kunci: menghitung kedua urutan komposisi, mengujinya dengan nilai, dan menyimpulkan sifat tidak komutatif komposisi fungsi.',
    hints: ['Kerjakan fungsi yang lebih dekat dengan $x$ terlebih dahulu.', 'Uji kedua hasil pada satu nilai $x$.'],
    competencies: ['komposisi fungsi', 'sifat tidak komutatif', 'evaluasi'],
  },
  {
    id: 'kf-12',
    topicId: 'komposisi-fungsi',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Sebuah barang diberi diskon $20\\%$, sehingga harga menjadi $h(x)=0{,}8x$. Setelah itu dikenakan pajak $10\\%$ dari harga diskon, yaitu $p(x)=1{,}1x$. (a) Susun komposisi fungsi untuk total harga akhir. (b) Hitung total harga untuk harga awal Rp500.000. (c) Jelaskan apakah hasilnya berubah jika pajak dihitung lebih dahulu, baru didiskon.',
    answer:
      '(a) Pajak dikenakan atas harga setelah diskon, sehingga total $=(p\\circ h)(x)=p(0{,}8x)=1{,}1(0{,}8x)=0{,}88x$. (b) Untuk $x=500.000$: $0{,}88(500.000)=440.000$. Jadi totalnya Rp440.000. (c) Jika pajak lebih dahulu: $(h\\circ p)(x)=0{,}8(1{,}1x)=0{,}88x$, ternyata hasilnya sama. Hal ini karena kedua operasi hanya berupa perkalian dengan konstanta sehingga urutannya tidak mengubah hasil.',
    explanation:
      'Kunci: menyusun komposisi dengan urutan yang benar, menghitung nilai, lalu menguji apakah urutan memengaruhi hasil.',
    hints: ['Diskon berlaku lebih dahulu, baru pajak.', 'Kalikan kedua faktor dan bandingkan urutannya.'],
    competencies: ['pemodelan komposisi fungsi', 'kontekstual'],
  },
  {
    id: 'kf-13',
    topicId: 'komposisi-fungsi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah toko online menerapkan tiga tahap pada harga produk: diskon $30\\%$ yaitu $d(x)=0{,}7x$, lalu ongkos kirim tetap Rp15.000 yaitu $s(x)=x+15.000$, lalu pajak $10\\%$ dari total yaitu $t(x)=1{,}1x$ (semua dalam rupiah). (a) Susun komposisi yang benar untuk total akhir. (b) Hitung total untuk harga produk Rp250.000. (c) Bandingkan dengan urutan yang mengenakan pajak atas harga diskon sebelum ongkos kirim, lalu jelaskan mengapa hasilnya berbeda.',
    answer:
      '(a) Urutan tahapnya diskon, ongkos kirim, baru pajak, sehingga total $=(t\\circ s\\circ d)(x)=t(s(0{,}7x))=t(0{,}7x+15.000)=1{,}1(0{,}7x+15.000)=0{,}77x+16.500$. (b) Untuk $x=250.000$: $0{,}77(250.000)+16.500=192.500+16.500=209.000$, jadi totalnya Rp209.000. (c) Jika pajak dikenakan atas harga diskon lebih dahulu lalu ongkos kirim ditambahkan, hasilnya $=(s\\circ t\\circ d)(x)=1{,}1(0{,}7x)+15.000=0{,}77x+15.000$, yaitu Rp207.500 untuk $x=250.000$. Selisihnya Rp1.500, tepat $10\\%$ dari ongkos kirim Rp15.000, karena pada urutan pertama ongkos kirim ikut kena pajak sedangkan pada urutan kedua tidak.',
    explanation:
      'Kunci: memilih urutan komposisi sesuai alur transaksi, menghitung nilai, lalu menelusuri asal perbedaan Rp1.500 dari pajak atas ongkos kirim.',
    hints: [
      'Kerjakan tahap yang paling dulu terjadi terhadap harga, yaitu diskon.',
      'Selisih kedua urutan hanya terletak pada apakah ongkos kirim terkena pajak.',
    ],
    competencies: ['pemodelan komposisi fungsi', 'kontekstual'],
  },
  {
    id: 'kf-14',
    topicId: 'komposisi-fungsi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Diberikan $f(x)=\\dfrac{x}{x-1}$ untuk $x\\neq1$. (a) Tentukan $(f\\circ f)(x)$. (b) Tentukan $(f\\circ f\\circ f)(x)$. (c) Jelaskan pola yang muncul dan kaitannya dengan fungsi invers.',
    answer:
      '(a) $(f\\circ f)(x)=f\\!\\left(\\dfrac{x}{x-1}\\right)=\\dfrac{\\frac{x}{x-1}}{\\frac{x}{x-1}-1}$. Karena $\\dfrac{x}{x-1}-1=\\dfrac{x-(x-1)}{x-1}=\\dfrac{1}{x-1}$, maka $(f\\circ f)(x)=\\dfrac{\\frac{x}{x-1}}{\\frac{1}{x-1}}=x$. (b) Karena $f\\circ f$ adalah fungsi identitas, $(f\\circ f\\circ f)(x)=f\\big((f\\circ f)(x)\\big)=f(x)=\\dfrac{x}{x-1}$. (c) Polanya bergantian: komposisi genap menghasilkan $x$ dan komposisi ganjil menghasilkan $f(x)$. Hal ini berarti $f$ adalah invers bagi dirinya sendiri, yaitu $f^{-1}=f$, sehingga menerapkan $f$ dua kali mengembalikan nilai semula.',
    explanation:
      'Kunci: menghitung komposisi berulang secara aljabar, mengenali sifat identitas pada komposisi genap, dan menyimpulkan bahwa $f$ adalah involusi (invers dirinya sendiri).',
    hints: [
      'Hitung $f(x)-1$ terlebih dahulu untuk menyederhanakan penyebut.',
      'Perhatikan bahwa menerapkan $f$ dua kali mengembalikan $x$.',
    ],
    competencies: ['komposisi fungsi', 'fungsi invers', 'penalaran'],
  },
];

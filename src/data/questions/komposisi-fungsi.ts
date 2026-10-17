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
    figure: {
      svg: '<svg viewBox="0 0 320 180" role="img" aria-hidden="true"><rect x="60" y="65" width="80" height="50" rx="8" fill="currentColor" opacity="0.08" stroke="currentColor" stroke-width="1.3"/><rect x="180" y="65" width="80" height="50" rx="8" fill="currentColor" opacity="0.08" stroke="currentColor" stroke-width="1.3"/><text x="78" y="95" font-size="12" fill="currentColor">g: ×3</text><text x="198" y="95" font-size="12" fill="currentColor">f: +2</text><text x="24" y="95" font-size="12" fill="currentColor">x</text><line x1="38" y1="90" x2="56" y2="90" stroke="currentColor" stroke-width="1.3"/><polygon points="60,90 50,86 50,94" fill="currentColor"/><line x1="140" y1="90" x2="176" y2="90" stroke="currentColor" stroke-width="1.3"/><polygon points="180,90 170,86 170,94" fill="currentColor"/><line x1="260" y1="90" x2="284" y2="90" stroke="currentColor" stroke-width="1.3"/><polygon points="288,90 278,86 278,94" fill="currentColor"/><text x="262" y="76" font-size="11" fill="currentColor">(f∘g)(x)</text></svg>',
      alt: 'Dua mesin fungsi berurutan. Masukan x dikerjakan fungsi g yang mengalikan tiga, lalu hasilnya dikerjakan fungsi f yang menambah dua, menghasilkan (f komposisi g)(x).',
      caption: 'Alur pengerjaan komposisi $(f\\circ g)(x)$: fungsi $g$ lebih dahulu.',
    },
    options: [
      { key: 'A', text: '$3x + 2$' },
      { key: 'B', text: '$3x + 6$' },
      { key: 'C', text: '$4x + 2$' },
      { key: 'D', text: '$3x^{2} + 6x$' },
    ],
    answer: 'A',
    explanation:
      '$(f \\circ g)(x) = f(g(x)) = f(3x) = 3x + 2$. Kerjakan $g$ terlebih dahulu, lalu masukkan hasilnya ke $f$. Opsi B adalah $(g \\circ f)(x) = g(x+2) = 3(x+2) = 3x + 6$ (urutan dibalik); opsi C menjumlahkan koefisien kedua fungsi menjadi $4x$; opsi D mengalikan $x$ dengan $3x$ sehingga muncul suku $x^{2}$.',
    hints: [
      'Kerjakan fungsi yang paling dekat dengan $x$, yaitu $g$, lebih dahulu.',
      'Setelah memperoleh $g(x) = 3x$, gantikan $x$ pada $f$ dengan seluruh $3x$.',
    ],
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
    hints: [
      'Fungsi yang ditulis lebih dekat ke $x$ dikerjakan lebih dahulu.',
      'Tuliskan arti $(f \\circ g)(x) = f(g(x))$ dan $(g \\circ f)(x) = g(f(x))$.',
      'Bandingkan kedua urutan itu, lalu simpulkan apakah keduanya selalu memberi hasil sama.',
    ],
    competencies: ['konsep komposisi fungsi'],
    rubric: [
      'Menjelaskan $(f\\circ g)(x)=f(g(x))$ sebagai $g$ dikerjakan lebih dahulu',
      'Menjelaskan $(g\\circ f)(x)=g(f(x))$ sebagai $f$ dikerjakan lebih dahulu',
      'Menyimpulkan urutan pengerjaan berbeda sehingga umumnya tidak komutatif',
    ],
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
    hints: [
      'Hitung $g(3)$ lebih dahulu, lalu masukkan hasilnya ke $f$.',
      'Karena $g(3) = 3 + 1 = 4$.',
      'Substitusikan $4$ ke $f(x) = x^{2}$.',
    ],
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
    hints: [
      'Pada $(g \\circ f)$, kerjakan $f$ lebih dahulu.',
      'Hitung $f(5) = 2 \\cdot 5 = 10$.',
      'Lalu hitung $g(10) = 10 - 4$.',
    ],
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
      '$(f \\circ g)(x) = f(x-3) = (x-3)^{2} + 1 = x^{2} - 6x + 9 + 1 = x^{2} - 6x + 10$. Opsi B adalah $(g \\circ f)(x) = (x^{2}+1) - 3 = x^{2} - 2$ (urutan dibalik); opsi C salah karena melupakan suku tengah $-6x$; opsi D berhenti pada $(x-3)^{2}$ tanpa menambahkan $1$.',
    hints: [
      'Substitusikan seluruh $g(x)$ ke dalam variabel $x$ pada $f$.',
      'Jabarkan $(x-3)^{2}$ sebagai $x^{2} - 6x + 9$ lebih dahulu.',
    ],
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
      '$(f \\circ g)(x) = f(2x+4) = \\sqrt{2x+4}$. Agar terdefinisi, isi akar tidak boleh negatif: $2x + 4 \\geq 0 \\Rightarrow x \\geq -2$. Jadi domainnya $x \\geq -2$. Opsi B keliru memindahkan $4$ tanpa membalik tanda; opsi C lupa membagi dengan $2$ setelah memindahkan $4$; opsi D mengabaikan syarat bahwa bentuk di bawah akar harus tidak negatif.',
    hints: [
      'Syarat fungsi akar: bentuk di bawah tanda akar $\\geq 0$.',
      'Selesaikan $2x + 4 \\geq 0$ dengan membagi kedua ruas oleh $2$.',
    ],
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
    hints: [
      'Tulis $2g(x) + 1$ sama dengan hasil yang diketahui, lalu selesaikan untuk $g(x)$.',
      'Kurangi $1$ pada kedua ruas lebih dahulu, baru bagi dengan $2$.',
    ],
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
    hints: [
      'Untuk $(f \\circ g)$, kerjakan $g$ dahulu; untuk $(g \\circ f)$, kerjakan $f$ dahulu.',
      'Jabarkan $(x+3)^{2}$ dengan teliti agar tidak kehilangan suku $6x$.',
    ],
    competencies: ['sifat komposisi', 'penalaran aljabar'],
    rubric: [
      'Menghitung $(f\\circ g)(x)=x^{2}+2$ dengan benar',
      'Menghitung $(g\\circ f)(x)=x^{2}+6x+8$ dengan benar',
      'Menyimpulkan $f\\circ g\\neq g\\circ f$ karena hasil keduanya berbeda',
    ],
  },
  {
    id: 'kf-09',
    topicId: 'komposisi-fungsi',
    difficulty: 'cakap',
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
      '$(f \\circ g)(x) = 3(x-2) + 1 = 3x - 5$. Inversnya: $y = 3x - 5 \\Rightarrow x = \\dfrac{y+5}{3}$, jadi $(f \\circ g)^{-1}(x) = \\dfrac{x+5}{3}$. Periksa dengan sifat $(f \\circ g)^{-1} = g^{-1} \\circ f^{-1}$: $f^{-1}(x) = \\dfrac{x-1}{3}$ dan $g^{-1}(x) = x+2$, sehingga $g^{-1}\\!\\left(\\dfrac{x-1}{3}\\right) = \\dfrac{x-1}{3} + 2 = \\dfrac{x+5}{3}$, sama. Opsi B salah tanda karena menulis $x-5$; opsi C menganggap invers berarti mengubah $f$ saja tanpa membalik operasi; opsi D memakai $f^{-1}(x)$ tanpa mengompensasi pergeseran $g$.',
    hints: [
      'Cari dahulu $(f \\circ g)(x)$, lalu tentukan inversnya.',
      'Untuk $y = 3x - 5$, jadikan $x$ subjek rumus sebelum menukar nama variabel.',
    ],
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
    hints: [
      'Diskon $25\\%$ berarti membayar $75\\%$ dari harga awal.',
      'Diskon dikenakan lebih dahulu, baru biaya layanan ditambahkan sehingga komposisinya $(g \\circ f)(x)$.',
    ],
    competencies: ['pemodelan komposisi fungsi', 'kontekstual'],
    rubric: [
      'Memodelkan diskon sebagai $f(x)=0{,}75x$',
      'Memodelkan biaya layanan sebagai $g(x)=x+5$',
      'Menyusun komposisi $(g\\circ f)(x)=0{,}75x+5$',
      'Menghitung total $0{,}75(40)+5=35$ ribu rupiah',
    ],
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
    rubric: [
      'Menghitung $(f\\circ g)(x)=2x^{2}-1$',
      'Menghitung $(g\\circ f)(x)=4x^{2}-4x+1$',
      'Menguji dengan satu nilai $x$ untuk menunjukkan kedua hasil berbeda',
      'Menyimpulkan secara umum $f\\circ g\\neq g\\circ f$',
    ],
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
    rubric: [
      'Menyusun komposisi $(p\\circ h)(x)=1{,}1(0{,}8x)=0{,}88x$',
      'Menghitung total harga $0{,}88(500.000)=440.000$',
      'Membandingkan dengan urutan terbalik $(h\\circ p)(x)$',
      'Menyimpulkan urutan tidak mengubah hasil karena keduanya perkalian konstanta',
    ],
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
    rubric: [
      'Menyusun komposisi $(t\\circ s\\circ d)(x)=0{,}77x+16.500$',
      'Menghitung total untuk $x=250.000$ sebesar Rp209.000',
      'Membandingkan dengan urutan pajak lebih dahulu Rp207.500',
      'Menjelaskan selisih Rp1.500 berasal dari pajak atas ongkos kirim',
    ],
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
    rubric: [
      'Menyederhanakan $f(x)-1=\\dfrac{1}{x-1}$',
      'Menghitung $(f\\circ f)(x)=x$',
      'Menghitung $(f\\circ f\\circ f)(x)=f(x)$',
      'Menyimpulkan $f$ adalah invers bagi dirinya sendiri',
    ],
  },
  {
    id: 'kf-15',
    topicId: 'komposisi-fungsi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Diketahui $g(x) = x - 2$ dan $(f \\circ g)(x) = x^{2} - 4$. Rumus $f(x)$ adalah …',
    options: [
      { key: 'A', text: '$x^{2} + 4x$' },
      { key: 'B', text: '$x^{2} - 4$' },
      { key: 'C', text: '$x^{2} + 4$' },
      { key: 'D', text: '$x^{2} - 4x$' },
    ],
    answer: 'A',
    explanation:
      'Dari $(f \\circ g)(x) = f(x-2) = x^{2} - 4$. Misalkan $u = x - 2$, maka $x = u + 2$, sehingga $f(u) = (u+2)^{2} - 4 = u^{2} + 4u + 4 - 4 = u^{2} + 4u$. Jadi $f(x) = x^{2} + 4x$. Opsi B mengabaikan pengaruh $g$ dan mengambil $f(x) = (f \\circ g)(x)$; opsi C keliru menghitung $f(u)$ dengan membuang suku $4u$; opsi D salah tanda pada suku $4u$.',
    hints: [
      'Tulis $f(x-2) = x^{2} - 4$, lalu gantikan $x$ dengan $x+2$ agar argumennya menjadi $x$.',
      'Uraikan $(x+2)^{2} - 4$ untuk memperoleh rumus $f(x)$.',
    ],
    competencies: ['menentukan fungsi dalam komposisi', 'penalaran aljabar'],
  },
  {
    id: 'kf-16',
    topicId: 'komposisi-fungsi',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Fungsi $f$ dan $g$ memenuhi $f(x)=x-2$ dan $(f\\circ g)(x)=2x^{2}-3$. Tentukan nilai $g(3)$.',
    answer: '17',
    explanation:
      'Karena $(f\\circ g)(x)=f(g(x))=g(x)-2$ dan nilainya $2x^{2}-3$, maka $g(x)-2=2x^{2}-3$ sehingga $g(x)=2x^{2}-1$. Substitusi $x=3$ memberi $g(3)=2(3)^{2}-1=18-1=17$. Periksa: $f(17)=17-2=15$ dan $2(3)^{2}-3=15$, cocok.',
    hints: [
      'Tulis $(f\\circ g)(x)=f(g(x))$, lalu gantikan $f$ dengan aturannya.',
      'Selesaikan $g(x)-2=2x^{2}-3$ untuk memperoleh rumus $g(x)$ terlebih dahulu.',
      'Setelah rumus $g$ ditemukan, substitusikan $x=3$.',
    ],
    competencies: ['menentukan fungsi dalam komposisi', 'nilai komposisi fungsi'],
  },
];

import type { Question } from '@/types/content';

export const variabelAcakDiskretQuestions: Question[] = [
  {
    id: 'vad-01',
    topicId: 'variabel-acak-diskret',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Manakah yang merupakan variabel acak diskret?',
    options: [
      { key: 'A', text: 'Tinggi badan siswa dalam sentimeter' },
      { key: 'B', text: 'Berat badan siswa dalam kilogram' },
      { key: 'C', text: 'Waktu tunggu bus dalam menit' },
      { key: 'D', text: 'Jumlah mata dua dadu yang dilempar' },
    ],
    answer: 'D',
    explanation:
      'Variabel acak diskret memiliki nilai yang tercacah dan terpisah. Jumlah mata dua dadu hanya bernilai $2, 3, \\ldots, 12$, sehingga diskret. Tinggi, berat, dan waktu adalah besaran kontinu karena dapat bernilai sembarang dalam suatu selang.',
    hints: ['Variabel diskret umumnya bernilai bilangan bulat yang tercacah.'],
    competencies: ['variabel acak diskret'],
  },
  {
    id: 'vad-02',
    topicId: 'variabel-acak-diskret',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'konsep',
    prompt:
      'Distribusi peluang variabel acak $X$ adalah $P(X=1) = 0{,}2$, $P(X=2) = 0{,}3$, $P(X=3) = 0{,}3$, dan $P(X=4) = p$. Tentukan nilai $p$.',
    answer: '0,2',
    acceptedAnswers: ['0.2', '0,20', '0.20', '1/5'],
    explanation:
      'Karena jumlah seluruh peluang harus $1$, maka $p = 1 - (0{,}2 + 0{,}3 + 0{,}3) = 1 - 0{,}8 = 0{,}2$.',
    hints: ['Gunakan syarat $\\sum P(X=x) = 1$.'],
    competencies: ['syarat fungsi peluang'],
  },
  {
    id: 'vad-03',
    topicId: 'variabel-acak-diskret',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Manakah yang **bukan** distribusi peluang yang sah?',
    options: [
      { key: 'A', text: '$P(X=0) = 0{,}4$, $P(X=1) = 0{,}6$' },
      { key: 'B', text: '$P(X=1) = 0{,}5$, $P(X=2) = 0{,}5$' },
      { key: 'C', text: '$P(X=0) = 0{,}5$, $P(X=1) = 0{,}3$, $P(X=2) = 0{,}3$' },
      { key: 'D', text: '$P(X=1) = \\frac{1}{4}$, $P(X=2) = \\frac{3}{4}$' },
    ],
    answer: 'C',
    explanation:
      'Distribusi sah harus berjumlah $1$. Opsi C berjumlah $0{,}5 + 0{,}3 + 0{,}3 = 1{,}1 \\neq 1$, sehingga tidak sah. Opsi A berjumlah $1$, opsi B berjumlah $1$, dan opsi D berjumlah $1$.',
    hints: ['Jumlahkan seluruh peluang; peluang sah harus berjumlah tepat $1$.'],
    competencies: ['syarat fungsi peluang'],
  },
  {
    id: 'vad-04',
    topicId: 'variabel-acak-diskret',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Variabel acak $X$ memiliki distribusi $P(X=0) = 0{,}4$, $P(X=1) = 0{,}3$, $P(X=2) = 0{,}2$, dan $P(X=3) = 0{,}1$. Tentukan nilai harapan $E(X)$.',
    answer: '1',
    acceptedAnswers: ['1,0', '1.0'],
    explanation:
      '$E(X) = 0(0{,}4) + 1(0{,}3) + 2(0{,}2) + 3(0{,}1) = 0 + 0{,}3 + 0{,}4 + 0{,}3 = 1$.',
    hints: ['Kalikan tiap nilai $x$ dengan peluangnya, lalu jumlahkan.'],
    competencies: ['nilai harapan'],
  },
  {
    id: 'vad-05',
    topicId: 'variabel-acak-diskret',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Diketahui $P(X=1) = 0{,}1$, $P(X=2) = 0{,}2$, $P(X=3) = 0{,}3$, dan $P(X=4) = 0{,}4$. Tentukan $E(X)$.',
    answer: '3',
    acceptedAnswers: ['3,0', '3.0'],
    explanation:
      '$E(X) = 1(0{,}1) + 2(0{,}2) + 3(0{,}3) + 4(0{,}4) = 0{,}1 + 0{,}4 + 0{,}9 + 1{,}6 = 3$.',
    hints: ['Periksa dahulu bahwa jumlah peluangnya $1$, lalu hitung nilai harapan.'],
    competencies: ['nilai harapan'],
  },
  {
    id: 'vad-06',
    topicId: 'variabel-acak-diskret',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Untuk distribusi $P(X=1) = 0{,}1$, $P(X=2) = 0{,}2$, $P(X=3) = 0{,}3$, dan $P(X=4) = 0{,}4$, varians $X$ adalah …',
    options: [
      { key: 'A', text: '$0{,}5$' },
      { key: 'B', text: '$3$' },
      { key: 'C', text: '$1{,}5$' },
      { key: 'D', text: '$1$' },
    ],
    answer: 'D',
    explanation:
      '$E(X) = 3$ dan $E(X^{2}) = 1^{2}(0{,}1) + 2^{2}(0{,}2) + 3^{2}(0{,}3) + 4^{2}(0{,}4) = 0{,}1 + 0{,}8 + 2{,}7 + 6{,}4 = 10$. Maka $\\operatorname{Var}(X) = E(X^{2}) - (E(X))^{2} = 10 - 9 = 1$.',
    hints: ['Hitung $E(X^{2})$ lebih dahulu, lalu kurangi kuadrat $E(X)$.'],
    competencies: ['varians variabel acak'],
  },
  {
    id: 'vad-07',
    topicId: 'variabel-acak-diskret',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Tiga koin dilempar dan $X$ menyatakan banyak gambar yang muncul. Tentukan nilai harapan $E(X)$.',
    answer: '1,5',
    acceptedAnswers: ['1.5', '3/2', '1,5', '1,50', '1.50', '1,500'],
    explanation:
      'Distribusinya $P(X=0) = \\frac{1}{8}$, $P(X=1) = \\frac{3}{8}$, $P(X=2) = \\frac{3}{8}$, $P(X=3) = \\frac{1}{8}$. Maka $E(X) = \\frac{0(1) + 1(3) + 2(3) + 3(1)}{8} = \\frac{12}{8} = 1{,}5$.',
    hints: ['Susun dahulu distribusi banyak gambar dengan koefisien binomial.'],
    competencies: ['nilai harapan'],
  },
  {
    id: 'vad-08',
    topicId: 'variabel-acak-diskret',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Dua dadu dilempar bersamaan dan $X$ menyatakan jumlah kedua mata dadu. Uraikan distribusi peluang $X$ secara singkat, hitung $E(X)$, lalu jelaskan maknanya.',
    answer:
      'Ruang sampelnya $36$ hasil sama mungkin. Jumlah $X$ bernilai $2$ sampai $12$ dengan peluang berturut-turut $\\frac{1}{36}, \\frac{2}{36}, \\frac{3}{36}, \\frac{4}{36}, \\frac{5}{36}, \\frac{6}{36}, \\frac{5}{36}, \\frac{4}{36}, \\frac{3}{36}, \\frac{2}{36}, \\frac{1}{36}$ (jumlah seluruhnya $1$). Maka $E(X) = \\frac{2(1) + 3(2) + \\cdots + 12(1)}{36} = \\frac{252}{36} = 7$. Artinya, bila dua dadu dilempar sangat banyak kali, rata-rata jumlah kedua mata dadu mendekati $7$.',
    explanation:
      'Kunci menekankan penurunan distribusi dari $36$ hasil sama mungkin, pemeriksaan jumlah peluang sama dengan $1$, dan penafsiran $E(X)$ sebagai rata-rata jangka panjang.',
    hints: ['Cacah banyak cara tiap jumlah mata, misalnya jumlah $7$ ada $6$ cara.'],
    competencies: ['distribusi peluang', 'nilai harapan', 'pemodelan'],
  },
  {
    id: 'vad-09',
    topicId: 'variabel-acak-diskret',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'penalaran',
    prompt:
      'Dua dadu dilempar dan $X$ menyatakan jumlah mata. Diketahui $E(X) = 7$. Tentukan varians $X$ (tuliskan sebagai pecahan paling sederhana).',
    answer: '35/6',
    acceptedAnswers: ['5,83', '5.83', '5,833', '5.833', '5,8333', '5.8333', '35/6'],
    explanation:
      '$E(X^{2}) = \\frac{1974}{36}$. Maka $\\operatorname{Var}(X) = E(X^{2}) - (E(X))^{2} = \\frac{1974}{36} - 49 = \\frac{1974 - 1764}{36} = \\frac{210}{36} = \\frac{35}{6} \\approx 5{,}83$.',
    hints: ['Hitung $E(X^{2}) = \\sum x^{2} f(x)$, lalu kurangi $7^{2}$.'],
    competencies: ['varians variabel acak', 'penalaran'],
  },
  {
    id: 'vad-10',
    topicId: 'variabel-acak-diskret',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah tempat cuci mobil mencatat banyak mobil yang datang per jam. Distribusi $X$ adalah $P(X=0) = 0{,}4$, $P(X=1) = 0{,}3$, $P(X=2) = 0{,}2$, dan $P(X=3) = 0{,}1$. Hitung $E(X)$ dan $\\operatorname{Var}(X)$, lalu jelaskan arti $E(X)$ bagi pemilik usaha.',
    answer:
      'Periksa jumlah peluang: $0{,}4 + 0{,}3 + 0{,}2 + 0{,}1 = 1$ (sah). Nilai harapan $E(X) = 0(0{,}4) + 1(0{,}3) + 2(0{,}2) + 3(0{,}1) = 0 + 0{,}3 + 0{,}4 + 0{,}3 = 1$. Momen kedua $E(X^{2}) = 0(0{,}4) + 1(0{,}3) + 4(0{,}2) + 9(0{,}1) = 0{,}3 + 0{,}8 + 0{,}9 = 2$, sehingga $\\operatorname{Var}(X) = 2 - 1^{2} = 1$ dan $\\sigma = 1$. Artinya, rata-rata mobil yang datang per jam adalah $1$ mobil; pemilik dapat menyiapkan kapasitas sekitar satu mobil per jam, dengan fluktuasi tipikal sekitar $1$ mobil.',
    explanation:
      'Kunci mencakup pemeriksaan syarat distribusi, perhitungan $E(X)$, $E(X^{2})$, varians, dan penafsiran nilai harapan serta simpangan baku dalam konteks usaha.',
    hints: ['Hitung $E(X^{2}) = \\sum x^{2} f(x)$ untuk memperoleh varians.'],
    competencies: ['nilai harapan', 'varians variabel acak', 'pemodelan'],
  },
  {
    id: 'vad-11',
    topicId: 'variabel-acak-diskret',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Sebuah dadu dilempar. Jika muncul mata $6$ kamu menerima Rp24.000, sedangkan jika muncul mata lain kamu membayar Rp3.000. Nilai harapan keuntunganmu per lemparan adalah …',
    options: [
      { key: 'A', text: '-Rp1.500' },
      { key: 'B', text: 'Rp0' },
      { key: 'C', text: 'Rp1.500' },
      { key: 'D', text: 'Rp3.000' },
    ],
    answer: 'C',
    explanation:
      '$E(X) = \\frac{1}{6}(24.000) + \\frac{5}{6}(-3.000) = 4.000 - 2.500 = 1.500$. Jadi rata-rata keuntungan per lemparan adalah Rp1.500.',
    hints: ['Timbang setiap hasil dengan peluangnya, lalu jumlahkan.'],
    competencies: ['nilai harapan', 'penalaran'],
  },
  {
    id: 'vad-12',
    topicId: 'variabel-acak-diskret',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Sebuah perusahaan menawarkan dua skema bonus tahunan. Skema A memberi bonus acak $X$ (juta rupiah) dengan distribusi $P(X=0)=0{,}5$, $P(X=2)=0{,}3$, dan $P(X=5)=0{,}2$. Skema B memberi bonus tetap $1{,}5$ juta rupiah. (a) Hitung nilai harapan Skema A. (b) Skema mana yang sebaiknya dipilih berdasarkan nilai harapan? (c) Sebutkan satu pertimbangan lain selain nilai harapan.',
    answer:
      '(a) $E(X)=0(0{,}5)+2(0{,}3)+5(0{,}2)=0+0{,}6+1=1{,}6$ juta rupiah. (b) Karena $E(X)=1{,}6>1{,}5$, secara nilai harapan Skema A lebih menguntungkan. (c) Pertimbangan lain adalah risiko: Skema A memiliki peluang $0{,}5$ tidak mendapat bonus sama sekali, sehingga orang yang menghindari risiko mungkin memilih bonus tetap meskipun nilai harapannya sedikit lebih kecil.',
    explanation:
      'Kunci: menghitung nilai harapan dan membandingkannya, serta menyadari bahwa nilai harapan bukan satu-satunya dasar keputusan karena ada risiko.',
    hints: ['Kalikan tiap nilai dengan peluangnya lalu jumlahkan.', 'Pertimbangkan sebaran dan peluang mendapat nol.'],
    competencies: ['nilai harapan', 'risiko', 'evaluasi'],
  },
  {
    id: 'vad-13',
    topicId: 'variabel-acak-diskret',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Sebuah asuransi perjalanan membayar klaim $X$ (juta rupiah) dengan distribusi $P(X=0)=0{,}9$, $P(X=5)=0{,}08$, dan $P(X=20)=0{,}02$. (a) Hitung nilai harapan klaim $E(X)$. (b) Jika premi yang dibayar setiap nasabah Rp1,0 juta, apakah perusahaan untung secara rata-rata? Jelaskan perhitungannya.',
    answer:
      '(a) $E(X)=0(0{,}9)+5(0{,}08)+20(0{,}02)=0+0{,}4+0{,}4=0{,}8$ juta rupiah. (b) Premi Rp1,0 juta lebih besar daripada nilai harapan klaim Rp0,8 juta, sehingga secara rata-rata perusahaan memperoleh selisih $1{,}0-0{,}8=0{,}2$ juta rupiah per nasabah. Jadi perusahaan untung secara rata-rata, meskipun tetap ada risiko membayar klaim besar pada sebagian kecil kasus.',
    explanation:
      'Kunci: menghitung nilai harapan klaim lalu membandingkannya dengan premi, serta menafsirkan selisih sebagai keuntungan rata-rata.',
    hints: ['Nilai $X=0$ tetap disertakan dalam perhitungan meskipun hasilnya nol.', 'Bandingkan premi dengan $E(X)$.'],
    competencies: ['nilai harapan', 'kontekstual', 'interpretasi'],
  },
  {
    id: 'vad-14',
    topicId: 'variabel-acak-diskret',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Sebuah undian menjual $1.000$ kupon seharga Rp5.000 per kupon. Hadiahnya: $1$ kupon berhadiah Rp1.000.000, $5$ kupon berhadiah Rp100.000, dan $20$ kupon berhadiah Rp20.000. Misalkan $X$ adalah keuntungan bersih (nilai hadiah dikurangi harga kupon) bagi pemegang satu kupon. (a) Tentukan distribusi peluang $X$. (b) Hitung $E(X)$. (c) Apakah undian ini adil bagi pembeli? Jelaskan.',
    answer:
      '(a) Keuntungan bersih bernilai $995.000$ dengan peluang $\\dfrac{1}{1.000}$, $95.000$ dengan peluang $\\dfrac{5}{1.000}$, $15.000$ dengan peluang $\\dfrac{20}{1.000}$, dan $-5.000$ dengan peluang $\\dfrac{974}{1.000}$. (b) Nilai harapan hadiah $=\\dfrac{1.000.000+5(100.000)+20(20.000)}{1.000}=\\dfrac{1.900.000}{1.000}=1.900$, sehingga $E(X)=1.900-5.000=-3.100$ rupiah. (c) Karena $E(X)<0$, secara rata-rata pembeli menderita kerugian sekitar Rp3.100 per kupon, sehingga undian tidak adil bagi pembeli dan menguntungkan penyelenggara.',
    explanation:
      'Kunci: menyusun distribusi keuntungan bersih, memakai kelinearan nilai harapan untuk memisahkan hadiah dan biaya, lalu menafsirkan tanda $E(X)$ terhadap keadilan undian.',
    hints: [
      'Keuntungan bersih $=$ nilai hadiah $-$ harga kupon.',
      'Hitung $E(\\text{hadiah})$ lebih dahulu, lalu kurangi Rp5.000.',
      'Nilai harapan negatif berarti pembeli rugi secara rata-rata.',
    ],
    competencies: ['distribusi peluang', 'nilai harapan', 'kontekstual', 'interpretasi'],
  },
];

import type { ElementId, Exploration, Grade } from '@/types/content';

/**
 * Registri eksplorasi interaktif.
 *
 * Ini adalah satu-satunya sumber kebenaran: urutan, pengelompokan kelas, dan
 * metadatanya diatur di sini sehingga halaman `/eksplorasi`, beranda, dan
 * sisipan di halaman materi cukup membaca data ini.
 */
export const explorations: Exploration[] = [
  {
    id: 'eksponen-pertumbuhan',
    title: 'Eksplorasi Pertumbuhan Eksponensial',
    topicId: 'eksponen',
    type: 'function-slider',
    formula: 'exponential',
    grade: 'X',
    element: 'bilangan',
    order: 10,
    description:
      'Ubah nilai awal $a$ dan faktor pengali $b$ pada $f(x)=a\\cdot b^{x}$ untuk melihat perbedaan pertumbuhan ketika $b>1$, $b=1$, dan $0<b<1$.',
    goal: 'Membedakan pertumbuhan, nilai konstan, dan peluruhan dari nilai basis $b$.',
    params: [
      { name: 'a', label: 'Nilai awal a', min: 0.5, max: 5, step: 0.5, value: 1 },
      { name: 'b', label: 'Faktor pengali b', min: 0.25, max: 3, step: 0.05, value: 2 },
    ],
    prompts: {
      predict: 'Sebelum menggeser, tebak: apa yang terjadi pada grafik jika $b$ diperkecil menjadi $0{,}5$?',
      observe: 'Geser $b$ dari $0{,}25$ sampai $3$ dan perhatikan arah serta kecuraman kurva.',
      explain: 'Hubungkan nilai $b$ dengan istilah pertumbuhan ($b>1$), konstan ($b=1$), dan peluruhan ($0<b<1$).',
    },
    cautions: [
      'Mengira grafik memotong sumbu-$x$: nilai $f(x)=a\\cdot b^{x}$ selalu positif.',
      'Lupa bahwa perubahan kecil pada basis berdampak besar pada jangka panjang.',
    ],
    tags: ['eksponen', 'pertumbuhan', 'peluruhan', 'grafik'],
    level: 'dasar',
    estimatedMinutes: 10,
  },
  {
    id: 'kuadrat-parameter',
    title: 'Eksplorasi Parameter Fungsi Kuadrat',
    topicId: 'fungsi-kuadrat',
    type: 'function-slider',
    formula: 'quadratic',
    grade: 'X',
    element: 'aljabar-fungsi',
    order: 20,
    description:
      'Geser nilai $a$, $b$, dan $c$ pada $f(x)=ax^{2}+bx+c$ untuk mengamati pengaruhnya terhadap arah bukaan, sumbu simetri, dan titik puncak parabola.',
    goal: 'Menghubungkan tanda $a$, nilai $b$, dan $c$ dengan bentuk serta posisi parabola.',
    prompts: {
      predict: 'Menurutmu, bagaimana bentuk grafik berubah jika $a$ bernilai negatif?',
      observe: 'Ubah $a$ dan amati titik puncaknya; lalu ubah $c$ dan amati perpotongan dengan sumbu-$y$.',
      explain: 'Rumuskan pengaruh setiap koefisien terhadap bentuk parabola dan nilai diskriminan.',
    },
    cautions: [
      'Menganggap $c$ menentukan titik puncak, padahal $c$ adalah nilai $f(0)$.',
      'Mengira $a$ hanya mengatur lebar, padahal tanda $a$ menentukan arah bukaan.',
    ],
    tags: ['kuadrat', 'parabola', 'titik puncak', 'diskriminan'],
    level: 'dasar',
    estimatedMinutes: 12,
  },
  {
    id: 'trigonometri-gelombang',
    title: 'Eksplorasi Gelombang Sinus',
    topicId: 'trigonometri',
    type: 'function-slider',
    formula: 'sine',
    grade: 'X',
    element: 'geometri',
    order: 40,
    description:
      'Ubah amplitudo $a$ dan bilangan gelombang $k$ pada $f(x)=a\\sin(kx)$ untuk melihat pengaruhnya pada tinggi dan panjang gelombang.',
    goal: 'Mengaitkan $a$ dengan amplitudo dan $k$ dengan periode grafik sinus.',
    params: [
      { name: 'a', label: 'Amplitudo a', min: 0.5, max: 3, step: 0.1, value: 1 },
      { name: 'k', label: 'Bilangan gelombang k', min: 0.5, max: 3, step: 0.1, value: 1 },
    ],
    prompts: {
      predict: 'Jika $k$ diperbesar, apakah gelombang makin rapat atau makin renggang?',
      observe: 'Geser $k$ dan hitung jarak satu puncak ke puncak berikutnya.',
      explain: 'Verkaitkan $a$ dengan amplitudo dan $k$ dengan periode $\\dfrac{2\\pi}{k}$.',
    },
    cautions: [
      'Menukar peran amplitudo dan periode.',
      'Mengukur periode dari puncak ke lembah, bukan puncak ke puncak.',
    ],
    tags: ['trigonometri', 'sinus', 'amplitudo', 'periode'],
    level: 'dasar',
    estimatedMinutes: 12,
  },
  {
    id: 'barisan-pola',
    title: 'Eksplorasi Pola Barisan dan Deret',
    topicId: 'barisan-deret',
    type: 'sequence',
    grade: 'XI',
    element: 'bilangan',
    order: 50,
    description:
      'Bandingkan barisan aritmetika dan geometri: ubah suku awal, beda atau rasio, lalu amati nilai suku dan jumlahnya.',
    goal: 'Membandingkan pola barisan aritmetika dan geometri serta pertumbuhan jumlah sukunya.',
    prompts: {
      predict: 'Barisan mana yang jumlah 10 sukunya lebih besar: aritmetika beda $2$ atau geometri rasio $2$?',
      observe: 'Ubah jenis barisan, suku awal, dan banyak suku; amati tabel serta grafik jumlahnya.',
      explain: 'Jelaskan mengapa jumlah barisan geometri dapat melampaui aritmetika seiring bertambahnya suku.',
    },
    cautions: [
      'Menjumlahkan nilai suku, bukan memperhatikan indeksnya.',
      'Menganggap barisan geometri selalu membesar; jika $0<r<1$ jumlahnya menuju batas tertentu.',
    ],
    tags: ['barisan', 'deret', 'aritmetika', 'geometri'],
    level: 'dasar',
    estimatedMinutes: 12,
  },
  {
    id: 'distribusi-sebaran',
    title: 'Eksplorasi Sebaran dan Pencilan',
    topicId: 'analisis-distribusi-data',
    type: 'distribution',
    grade: 'X',
    element: 'data-peluang',
    order: 60,
    description:
      'Tambahkan atau geser nilai data untuk melihat bagaimana bentuk sebaran dan pencilan memengaruhi mean, median, serta kuartil.',
    goal: 'Melihat bagaimana pencilan memengaruhi mean, median, dan kuartil.',
    prompts: {
      predict: 'Menambah satu nilai yang sangat besar: statistik mana yang paling berubah?',
      observe: 'Tambahkan atau geser nilai ekstrem lalu bandingkan mean dan median.',
      explain: 'Jelaskan mengapa median lebih tahan terhadap pencilan daripada mean.',
    },
    cautions: [
      'Menganggap mean selalu mewakili data dengan baik.',
      'Menghitung kuartil tanpa mengurutkan data lebih dahulu.',
    ],
    tags: ['statistik', 'mean', 'median', 'kuartil', 'pencilan'],
    level: 'cakap',
    estimatedMinutes: 15,
  },
  {
    id: 'bunga-majemuk-sim',
    title: 'Simulasi Bunga Tunggal vs Bunga Majemuk',
    topicId: 'bunga-majemuk',
    type: 'compound-interest',
    featured: true,
    grade: 'XI',
    element: 'bilangan',
    order: 10,
    description:
      'Bandingkan pertumbuhan saldo antara bunga tunggal dan bunga majemuk dengan modal, suku bunga, dan lama menabung yang dapat diatur.',
    goal: 'Membandingkan bunga tunggal dan bunga majemuk serta melihat kapan selisihnya membesar.',
    prompts: {
      predict: 'Pada suku bunga tinggi dan jangka panjang, mana yang tumbuh lebih cepat?',
      observe: 'Ubah modal, suku bunga, dan lama menabung; perhatikan kolom selisih pada tabel.',
      explain: 'Jelaskan mengapa perbedaan keduanya makin besar seiring bertambahnya waktu.',
    },
    cautions: [
      'Menjumlahkan persentase antar periode seolah selalu linear.',
      'Menganggap bunga majemuk sama dengan bunga tunggal untuk jangka pendek.',
    ],
    tags: ['bunga majemuk', 'bunga tunggal', 'investasi'],
    level: 'cakap',
    estimatedMinutes: 15,
  },
  {
    id: 'anuitas-sim',
    title: 'Simulasi Anuitas dan Amortisasi',
    topicId: 'anuitas',
    type: 'compound-interest',
    grade: 'XI',
    element: 'bilangan',
    order: 20,
    description:
      'Atur besar pinjaman, suku bunga, dan lama pinjaman untuk melihat besar angsuran serta komposisi pokok dan bunga pada tabel amortisasi.',
    goal: 'Membaca komposisi pokok dan bunga pada tiap angsuran serta pengaruh suku bunga.',
    prompts: {
      predict: 'Pada angsuran awal, bagian mana yang lebih besar: pokok atau bunga?',
      observe: 'Ubah lama pinjaman dan amati angsuran bulanan serta total bunga.',
      explain: 'Jelaskan mengapa total bunga bertambah saat tenor diperpanjang.',
    },
    cautions: [
      'Menganggap angsuran bulanan sama dengan pokok ditambah bunga yang tetap.',
      'Lupa mengubah suku bunga tahunan menjadi suku bunga bulanan.',
    ],
    tags: ['anuitas', 'amortisasi', 'pinjaman', 'angsuran'],
    level: 'cakap',
    estimatedMinutes: 15,
  },
  {
    id: 'peluang-sim',
    title: 'Simulasi Peluang Empiris vs Teoretis',
    topicId: 'peluang',
    type: 'probability',
    featured: true,
    grade: 'XI',
    element: 'data-peluang',
    order: 30,
    description:
      'Lakukan percobaan pelemparan koin atau dadu berulang kali dan bandingkan peluang empiris dengan peluang teoretis.',
    goal: 'Melihat peluang empiris mendekati peluang teoretis saat percobaan diperbanyak.',
    prompts: {
      predict: 'Jika koin dilempar 50 kali, apakah pasti tepat 25 muncul angka?',
      observe: 'Jalankan simulasi beberapa kali dengan jumlah berbeda dan bandingkan dengan garis teoretis.',
      explain: 'Hubungkan hasil pengamatan dengan Hukum Bilangan Besar.',
    },
    cautions: [
      'Menyimpulkan peluang hanya dari sedikit percobaan.',
      'Menganggap hasil selalu persis rata karena peluangnya seperdua.',
    ],
    tags: ['peluang', 'empiris', 'teoretis', 'koin', 'dadu'],
    level: 'dasar',
    estimatedMinutes: 12,
  },
  {
    id: 'regresi-sim',
    title: 'Visualisasi Regresi Linear',
    topicId: 'regresi',
    type: 'linear-regression',
    featured: true,
    grade: 'XI',
    element: 'data-peluang',
    order: 40,
    description:
      'Tambahkan titik data pada diagram pencar, lalu amati garis regresi dan nilai koefisien yang dihasilkan.',
    goal: 'Mengaitkan arah korelasi dengan tanda gradien dan melihat pengaruh pencilan.',
    prompts: {
      predict: 'Jika satu titik jauh dari pola ditambahkan, ke arah mana garis regresi bergeser?',
      observe: 'Tambahkan titik acak, lalu tambahkan satu titik ekstrem dan amati nilai $r$ serta garisnya.',
      explain: 'Jelaskan hubungan arah sebaran, tanda gradien, dan nilai korelasi $r$.',
    },
    cautions: [
      'Membaca korelasi sebagai hubungan sebab-akibat.',
      'Menganggap $r$ besar berarti garis pasti tepat untuk memprediksi.',
    ],
    tags: ['regresi', 'korelasi', 'diagram pencar', 'pencilan'],
    level: 'cakap',
    estimatedMinutes: 14,
  },
  {
    id: 'transformasi-fungsi-sim',
    title: 'Simulasi Transformasi Fungsi',
    topicId: 'transformasi-fungsi',
    type: 'function-slider',
    formula: 'transform',
    grade: 'XI',
    element: 'aljabar-fungsi',
    order: 50,
    description:
      'Geser $a$, $h$, dan $k$ pada $y=a\\,f(x-h)+k$ dengan $f(x)=x^{2}$ untuk mengamati translasi, dilatasi, dan pencerminan.',
    goal: 'Memisahkan pengaruh $a$ (dilatasi/pencerminan), $h$ (translasi horizontal), dan $k$ (translasi vertikal).',
    params: [
      { name: 'a', label: 'Faktor a', min: -2, max: 2, step: 0.1, value: 1 },
      { name: 'h', label: 'Geser horizontal h', min: -4, max: 4, step: 0.5, value: 0 },
      { name: 'k', label: 'Geser vertikal k', min: -6, max: 6, step: 0.5, value: 0 },
    ],
    prompts: {
      predict: 'Jika $h$ bertambah, ke arah mana grafik bergeser?',
      observe: 'Ubah $h$ dan $k$, amati puncak parabola; lalu ubah $a$ dan perhatikan lebar serta arah bukaan.',
      explain: 'Tuliskan urutan transformasi dari $f(x)$ menjadi $a\\,f(x-h)+k$.',
    },
    cautions: [
      'Membalik arah pergeseran horizontal: $x-h$ menggeser ke kanan untuk $h$ positif.',
      'Menerapkan translasi dan dilatasi tanpa memperhatikan urutannya.',
    ],
    tags: ['transformasi', 'translasi', 'dilatasi', 'pencerminan'],
    level: 'cakap',
    estimatedMinutes: 15,
  },
  {
    id: 'peluang-bersyarat-sim',
    title: 'Simulasi Peluang Bersyarat',
    topicId: 'peluang-bersyarat',
    type: 'conditional-probability',
    grade: 'XII',
    element: 'data-peluang',
    order: 10,
    description:
      'Atur peluang kejadian $A$ dan $B$ untuk melihat hubungan $P(A\\cap B)$, $P(A\\mid B)$, dan $P(B\\mid A)$ beserta pemeriksaan dengan tabel dua arah.',
    goal: 'Menghitung peluang bersyarat dan mengeceknya dengan tabel dua arah serta rumus Bayes.',
    prompts: {
      predict: 'Jika $P(B\\mid A)$ tinggi, apakah $P(A\\mid B)$ juga pasti tinggi?',
      observe: 'Ubah $P(A)$, $P(B\\mid A)$, dan $P(B\\mid A^{c})$; bandingkan nilai $P(A\\mid B)$ hasil perhitungan.',
      explain: 'Jelaskan mengapa $P(A\\mid B)$ dan $P(B\\mid A)$ dapat berbeda.',
    },
    cautions: [
      'Menyamakan $P(A\\mid B)$ dengan $P(B\\mid A)$.',
      'Lupa memperhitungkan peluang kejadian komplemen.',
    ],
    tags: ['peluang bersyarat', 'bayes', 'tabel dua arah'],
    level: 'mahir',
    estimatedMinutes: 18,
  },
  {
    id: 'spltv-perpotongan',
    title: 'Eksplorasi Sistem Persamaan Linear',
    topicId: 'spltv',
    type: 'linear-system',
    grade: 'X',
    element: 'aljabar-fungsi',
    order: 5,
    description:
      'Ubah koefisien dua persamaan linear dan amati titik potong kedua garis. Lihat kapan sistem punya satu solusi, tak punya solusi, atau tak hingga solusi.',
    goal: 'Menghubungkan nilai determinan dengan banyaknya solusi sistem persamaan linear dua variabel.',
    prompts: {
      predict: 'Jika kedua garis sejajar, berapa banyak solusi yang mungkin?',
      observe: 'Ubah koefisien sampai kedua garis sejajar, lalu sampai kedua garis berimpit.',
      explain: 'Jelaskan hubungan determinan nol dengan jumlah solusi sistem.',
    },
    cautions: [
      'Mengira dua garis yang berpotongan selalu tegak lurus.',
      'Lupa memeriksa apakah sistem konsisten sebelum menyimpulkan solusinya.',
    ],
    tags: ['spltv', 'sistem persamaan', 'determinan', 'titik potong'],
    level: 'cakap',
    estimatedMinutes: 14,
  },
  {
    id: 'fungsi-eksponensial-grafik',
    title: 'Eksplorasi Grafik Fungsi Eksponensial',
    topicId: 'fungsi-eksponensial',
    type: 'function-slider',
    formula: 'exponential',
    grade: 'X',
    element: 'aljabar-fungsi',
    order: 30,
    description:
      'Geser nilai awal $a$ dan basis $b$ pada $f(x)=a\\cdot b^{x}$ untuk melihat peran keduanya terhadap perpotongan sumbu-$y$ dan kemiringan grafik.',
    goal: 'Membedakan peran koefisien $a$ dan basis $b$ pada grafik fungsi eksponensial.',
    params: [
      { name: 'a', label: 'Nilai awal a', min: 0.5, max: 4, step: 0.5, value: 1 },
      { name: 'b', label: 'Basis b', min: 0.25, max: 3, step: 0.05, value: 2 },
    ],
    prompts: {
      predict: 'Jika $a$ diperbesar, apakah grafik bergeser atau berubah kecuraman?',
      observe: 'Ubah $a$ lalu $b$ secara terpisah dan amati perubahan grafik.',
      explain: 'Jelaskan mengapa titik potong sumbu-$y$ hanya ditentukan oleh $a$.',
    },
    cautions: [
      'Menukar peran koefisien $a$ dengan basis $b$.',
      'Mengira grafik peluruhan menyentuh sumbu-$x$.',
    ],
    tags: ['eksponensial', 'grafik', 'asimtot', 'fungsi'],
    level: 'dasar',
    estimatedMinutes: 12,
  },
  {
    id: 'data-bivariat-korelasi',
    title: 'Eksplorasi Korelasi Data Bivariat',
    topicId: 'data-bivariat',
    type: 'linear-regression',
    grade: 'XI',
    element: 'data-peluang',
    order: 5,
    description:
      'Tambahkan titik data pada diagram pencar dan amati bagaimana arah sebaran menentukan tanda serta kekuatan korelasi antara dua variabel.',
    goal: 'Menafsirkan arah dan kekuatan korelasi dari diagram pencar serta nilai $r$.',
    prompts: {
      predict: 'Jika titik-titik cenderung menurun ke kanan, bertanda apa nilai $r$?',
      observe: 'Tambahkan titik dan perhatikan bagaimana nilai $r$ berubah.',
      explain: 'Bedakan korelasi kuat, lemah, dan tidak ada korelasi.',
    },
    cautions: [
      'Menyimpulkan sebab-akibat hanya dari korelasi.',
      'Menganggap $r=0$ selalu berarti tidak ada hubungan sama sekali.',
    ],
    tags: ['data bivariat', 'korelasi', 'diagram pencar'],
    level: 'cakap',
    estimatedMinutes: 14,
  },
  {
    id: 'lingkaran-eksplorasi',
    title: 'Eksplorasi Busur dan Juring Lingkaran',
    topicId: 'lingkaran',
    type: 'circle',
    grade: 'XI',
    element: 'geometri',
    order: 15,
    description:
      'Atur jari-jari dan besar sudut pusat, lalu amati panjang busur, luas juring, serta hubungannya dengan keliling dan luas lingkaran.',
    goal: 'Menghubungkan besar sudut pusat dengan panjang busur dan luas juring.',
    params: [
      { name: 'r', label: 'Jari-jari r', min: 1, max: 10, step: 0.5, value: 4 },
      { name: 'sudut', label: 'Sudut pusat (°)', min: 0, max: 360, step: 5, value: 90 },
    ],
    prompts: {
      predict: 'Jika sudut pusat digandakan, apakah luas juring juga digandakan?',
      observe: 'Ubah sudut dan jari-jari, lalu bandingkan panjang busur dan luas juring.',
      explain: 'Rumuskan panjang busur dan luas juring sebagai pecahan dari keliling dan luas lingkaran.',
    },
    cautions: [
      'Menukar rumus panjang busur dengan luas juring.',
      'Menggunakan sudut dalam derajat pada rumus yang memerlukan radian.',
    ],
    tags: ['lingkaran', 'busur', 'juring', 'sudut pusat'],
    level: 'cakap',
    estimatedMinutes: 14,
  },
  {
    id: 'asosiasi-kausalitas-tabel',
    title: 'Simulasi Asosiasi dan Kausalitas',
    topicId: 'asosiasi-kausalitas',
    type: 'conditional-probability',
    grade: 'XI',
    element: 'data-peluang',
    order: 25,
    description:
      'Atur peluang dua kejadian dan periksa tabel dua arah untuk membedakan asosiasi statistik dari hubungan sebab-akibat.',
    goal: 'Membedakan asosiasi antar variabel dari klaim sebab-akibat dan mengenali variabel perancu.',
    prompts: {
      predict: 'Jika dua kejadian saling bebas, seperti apa bentuk tabel dua arahnya?',
      observe: 'Ubah peluang sampai dua kejadian saling bebas, lalu bandingkan baris dan kolomnya.',
      explain: 'Jelaskan mengapa asosiasi saja tidak cukup untuk menyimpulkan sebab-akibat.',
    },
    cautions: [
      'Menyimpulkan sebab-akibat dari data observasional.',
      'Mengabaikan variabel perancu yang mungkin menjelaskan asosiasi.',
    ],
    tags: ['asosiasi', 'kausalitas', 'variabel perancu'],
    level: 'mahir',
    estimatedMinutes: 16,
  },
  {
    id: 'matriks-transformasi',
    title: 'Eksplorasi Operasi dan Determinan Matriks',
    topicId: 'matriks',
    type: 'matrix',
    grade: 'XI',
    element: 'aljabar-fungsi',
    order: 35,
    description:
      'Isi dua matriks $2\\times 2$, hitung hasil kali dan determinannya, lalu selidiki mengapa $AB$ belum tentu sama dengan $BA$.',
    goal: 'Menghitung hasil kali dan determinan matriks serta menyelidiki sifat tak komutatifnya.',
    prompts: {
      predict: 'Apakah $AB$ selalu sama dengan $BA$ untuk matriks?',
      observe: 'Tukar urutan matriks dan bandingkan hasil kalinya.',
      explain: 'Hubungkan determinan hasil kali dengan determinan masing-masing matriks.',
    },
    cautions: [
      'Mengalikan matriks secara bertahap tanpa menjumlahkan hasil baris kali kolom.',
      'Menganggap perkalian matriks selalu komutatif.',
    ],
    tags: ['matriks', 'determinan', 'perkalian matriks'],
    level: 'cakap',
    estimatedMinutes: 15,
  },
  {
    id: 'komposisi-fungsi-sim',
    title: 'Eksplorasi Komposisi Fungsi',
    topicId: 'komposisi-fungsi',
    type: 'function-composition',
    grade: 'XI',
    element: 'aljabar-fungsi',
    order: 45,
    description:
      'Susun dua fungsi linear $f$ dan $g$, lalu bandingkan grafik $(f\\circ g)(x)$ dengan $(g\\circ f)(x)$ dan nilainya di beberapa titik.',
    goal: 'Menghitung komposisi fungsi dan menunjukkan bahwa urutan komposisi itu penting.',
    prompts: {
      predict: 'Apakah $(f\\circ g)(x)$ sama dengan $(g\\circ f)(x)$?',
      observe: 'Tukar urutan komposisi lalu bandingkan grafik dan nilainya.',
      explain: 'Jelaskan mengapa urutan komposisi mengubah hasil akhir.',
    },
    cautions: [
      'Menganggap komposisi fungsi bersifat komutatif.',
      'Menghitung $(f\\circ g)(x)$ sebagai $f(x)\\cdot g(x)$.',
    ],
    tags: ['komposisi fungsi', 'fungsi linear', 'komposisi'],
    level: 'cakap',
    estimatedMinutes: 15,
  },
  {
    id: 'fungsi-invers-sim',
    title: 'Eksplorasi Fungsi Invers',
    topicId: 'fungsi-invers',
    type: 'function-inverse',
    grade: 'XI',
    element: 'aljabar-fungsi',
    order: 55,
    description:
      'Atur fungsi linear $f(x)=ax+b$, lihat grafik $f^{-1}$ sebagai pencerminan $f$ terhadap garis $y=x$, dan verifikasi bahwa $f(f^{-1}(x))=x$.',
    goal: 'Menentukan invers fungsi linear dan menafsirkan sifat pencerminannya.',
    prompts: {
      predict: 'Jika $a$ negatif, bagaimana bentuk grafik inversnya?',
      observe: 'Ubah $a$ dan $b$, lalu amati posisi grafik invers terhadap garis $y=x$.',
      explain: 'Jelaskan mengapa $f$ dan $f^{-1}$ saling mencerminkan terhadap $y=x$.',
    },
    cautions: [
      'Menukar peran $x$ dan $y$ tanpa menyelesaikan fungsi sebaliknya.',
      'Menganggap setiap fungsi selalu memiliki invers tanpa memeriksa korespondensi satu-satu.',
    ],
    tags: ['fungsi invers', 'pencerminan', 'y=x'],
    level: 'mahir',
    estimatedMinutes: 16,
  },
];

const byId = new Map<string, Exploration>(explorations.map((e) => [e.id, e]));

export function getExploration(id: string): Exploration | undefined {
  return byId.get(id);
}

const GRADE_RANK: Record<Grade, number> = { X: 0, XI: 1, XII: 2 };

/** Semua eksplorasi berstatus lengkap, diurutkan berdasarkan kelas lalu `order`. */
export function orderedExplorations(): Exploration[] {
  return explorations
    .filter((e) => (e.status ?? 'lengkap') === 'lengkap')
    .slice()
    .sort(
      (a, b) =>
        (GRADE_RANK[a.grade ?? 'X'] ?? 9) - (GRADE_RANK[b.grade ?? 'X'] ?? 9) ||
        (a.order ?? 999) - (b.order ?? 999) ||
        a.title.localeCompare(b.title),
    );
}

/** Eksplorasi per kelas. */
export function explorationsByGrade(grade: Grade): Exploration[] {
  return orderedExplorations().filter((e) => e.grade === grade);
}

/** Eksplorasi per elemen kurikulum. */
export function explorationsByElement(element: ElementId): Exploration[] {
  return orderedExplorations().filter((e) => e.element === element);
}

/** Eksplorasi unggulan untuk beranda. */
export function featuredExplorations(): Exploration[] {
  return explorations.filter((e) => e.featured);
}

/** Parameter default berdasarkan tipe eksplorasi. */
export function defaultParams(type: Exploration['type']): { a: number; b: number; c: number } {
  switch (type) {
    case 'compound-interest':
      return { a: 10000000, b: 6, c: 10 };
    case 'probability':
      return { a: 100, b: 0.5, c: 0 };
    case 'linear-regression':
      return { a: 0, b: 0, c: 0 };
    case 'sequence':
      return { a: 2, b: 2, c: 10 };
    case 'distribution':
      return { a: 0, b: 0, c: 0 };
    case 'conditional-probability':
      return { a: 0.5, b: 0.5, c: 0.5 };
    default:
      return { a: 1, b: 2, c: 0 };
  }
}

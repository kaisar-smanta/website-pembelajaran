import type { Application, ApplicationCategory } from '@/types/content';

export const applicationCategories: Record<ApplicationCategory, { name: string; description: string }> = {
  keuangan: {
    name: 'Keuangan',
    description: 'Bunga, anuitas, investasi, dan pinjaman dalam keputusan finansial.',
  },
  data: {
    name: 'Data',
    description: 'Survei, statistik di media, regresi, dan pengambilan keputusan berbasis data.',
  },
  pertumbuhan: {
    name: 'Pertumbuhan & Peluruhan',
    description: 'Populasi, investasi, dan peluruhan zat yang mengikuti pola eksponensial.',
  },
  pengukuran: {
    name: 'Pengukuran',
    description: 'Jarak, tinggi, sudut, luas, dan volume yang diukur secara tidak langsung.',
  },
};

export const applications: Application[] = [
  {
    id: 'bunga-investasi',
    title: 'Memilih Tabungan: Bunga Tunggal atau Bunga Majemuk?',
    category: 'keuangan',
    summary:
      'Membandingkan hasil dua produk tabungan dengan modal dan suku bunga yang sama.',
    topicIds: ['eksponen', 'bunga-majemuk', 'barisan-deret'],
    body: `Seorang siswa menerima warisan Rp10.000.000 dan menabung selama **10 tahun**. Bank A menawarkan **bunga tunggal** 6% per tahun dari modal awal, sedangkan Bank B menawarkan **bunga majemuk** 6% per tahun.

Pada bunga tunggal, bunga selalu dihitung dari modal awal, sehingga saldo setelah $n$ tahun:

$$M_n = M_0(1 + i \\cdot n).$$

Pada bunga majemuk, bunga ikut menghasilkan bunga, sehingga:

$$M_n = M_0(1+i)^n.$$`,
    analysis: `Untuk $M_0 = 10.000.000$, $i = 0{,}06$, dan $n = 10$:

- Bank A: $M_{10} = 10.000.000(1 + 0{,}06 \\cdot 10) = 10.000.000(1{,}6) = \\text{Rp}16.000.000$.
- Bank B: $M_{10} = 10.000.000(1{,}06)^{10} = 10.000.000(1{,}7908477) \\approx \\text{Rp}17.908.477$.

Selisihnya sekitar **Rp1.908.477**. Kesimpulannya, untuk jangka panjang bunga majemuk jauh lebih menguntungkan meskipun suku bunga nominalnya sama. Perhatikan bahwa selisih ini tumbuh semakin besar jika jangka waktunya diperpanjang — inilah kekuatan pertumbuhan eksponensial.`,
  },
  {
    id: 'anuitas-pinjaman',
    title: 'Kredit Motor: Berapa Angsuran dan Berapa Total Bunganya?',
    category: 'keuangan',
    summary:
      'Menghitung angsuran tetap bulanan dan total bunga sebuah pinjaman dengan skema anuitas.',
    topicIds: ['anuitas', 'bunga-majemuk', 'barisan-deret'],
    body: `Bu Sari meminjam Rp50.000.000 untuk membeli kendaraan. Suku bunga **12% per tahun** (1% per bulan) dengan skema **anuitas** selama **5 tahun** (60 bulan). Angsuran bulanan tetap, tetapi komposisi pokok dan bunga berubah setiap bulan.

Besar angsuran anuitas dihitung dengan:

$$A = \\frac{M \\cdot i}{1-(1+i)^{-n}}$$

dengan $M$ pokok pinjaman, $i$ suku bunga per periode, dan $n$ banyak periode.`,
    analysis: `Dengan $M = 50.000.000$, $i = 0{,}01$, dan $n = 60$:

$$A = \\frac{50.000.000 \\times 0{,}01}{1-(1{,}01)^{-60}} = \\frac{500.000}{1-0{,}550449} \\approx \\text{Rp}1.112.222.$$

Total pembayaran $= 60 \\times 1.112.222 \\approx \\text{Rp}66.733.343$, sehingga **total bunga sekitar Rp16.733.343**. Pada bulan pertama, bunga menyerap $0{,}01 \\times 50.000.000 = \\text{Rp}500.000$, sedangkan sisanya baru mengangsur pokok. Karena itu saldo pokok turun perlahan pada awal periode — fakta yang penting dipahami sebelum membandingkan penawaran kredit.`,
  },
  {
    id: 'pertumbuhan-populasi',
    title: 'Pertumbuhan Populasi Bakteri di Laboratorium',
    category: 'pertumbuhan',
    summary: 'Memodelkan pertumbuhan populasi yang berlipat dua dengan fungsi eksponensial.',
    topicIds: ['eksponen', 'fungsi-eksponensial', 'barisan-deret'],
    body: `Sebuah kultur bakteri mula-mula berisi 500 sel. Setiap 20 menit, setiap sel membelah menjadi dua sehingga populasi berlipat dua. Jika $t$ dinyatakan dalam menit, populasi setelah $t$ menit adalah:

$$N(t) = 500 \\cdot 2^{t/20}.$$

Perhatikan bahwa eksponen $t/20$ menyatakan **banyak selang 20 menit** yang sudah berlangsung.`,
    analysis: `Setelah 3 jam ($t = 180$ menit) terdapat $180/20 = 9$ selang waktu, sehingga

$$N(180) = 500 \\cdot 2^{9} = 500 \\cdot 512 = 256.000 \\text{ sel}.$$

Jika pertumbuhannya linear (bertambah jumlah tetap), hasilnya akan jauh lebih kecil. Model eksponensial menunjukkan mengapa pengendalian populasi mikroba harus dilakukan cepat. Catatan: model ini mengasumsikan ruang dan nutrisi tak terbatas; pada kenyataannya pertumbuhan akan melambat, sehingga model eksponensial hanya berlaku pada fase awal.`,
  },
  {
    id: 'peluruhan-zat',
    title: 'Peluruhan Zat dalam Darah',
    category: 'pertumbuhan',
    summary: 'Model peluruhan eksponensial dengan waktu paruh.',
    topicIds: ['eksponen', 'fungsi-eksponensial'],
    body: `Konsentrasi sebuah obat dalam darah mula-mula 80 mg/L dan berkurang menjadi setengahnya setiap 4 jam. Konsentrasi setelah $t$ jam adalah:

$$C(t) = 80 \\left(\\tfrac{1}{2}\\right)^{t/4}.$$`,
    analysis: `Konsentrasi akan berada di bawah 5 mg/L ketika

$$80\\left(\\tfrac12\\right)^{t/4} < 5 \\iff \\left(\\tfrac12\\right)^{t/4} < \\tfrac{1}{16} = \\left(\\tfrac12\\right)^{4},$$

karena basis lebih kecil dari 1, tanda pertidaksamaan berbalik saat menyamakan eksponen, sehingga $t/4 > 4$ atau $t > 16$ jam. Pada $t = 16$ jam konsentrasinya tepat 5 mg/L. Ini contoh penting bahwa pada **peluruhan**, grafik menurun dan hubungan "lebih kecil dari" perlu kehati-hatian.`,
  },
  {
    id: 'survei-statistik',
    title: 'Membaca Hasil Survei dengan Kritis',
    category: 'data',
    summary: 'Menafsirkan rata-rata, sebaran, dan ukuran sampel pada laporan survei.',
    topicIds: ['analisis-distribusi-data', 'data-bivariat'],
    body: `Sebuah berita menulis: *"Rata-rata nilai ujian matematika di kota ini 78, naik dari tahun lalu."* Sebelum mempercayai kesimpulan itu, ajukan beberapa pertanyaan:

- Berapa **banyak sampel** yang diambil dan bagaimana cara memilihnya?
- Apakah **rata-rata** cukup, atau ada **data ekstrem** yang menariknya?
- Bagaimana **sebaran** nilainya: apakah seragam atau sangat beragam?
- Apakah **median** dan **kuartil** memberi gambaran yang sama?

Rata-rata mudah dipengaruhi nilai ekstrem. Median dan jangkauan interkuartil (IQR) lebih tahan terhadap nilai ekstrem dan sering memberi gambaran yang lebih jujur.`,
    analysis: `Misalnya hasil dua kelas:

- Kelas A: $70, 72, 75, 76, 77$ → rata-rata $74$, median $75$.
- Kelas B: $40, 55, 60, 100, 115$ → rata-rata $74$, median $60$.

Kedua kelas punya rata-rata sama, tetapi kondisinya sangat berbeda. Median kelas B ($60$) jauh di bawah rata-ratanya karena dua nilai ekstrem $100$ dan $115$ menarik rata-rata ke atas. **Membaca informasi statistik berarti memeriksa lebih dari sekadar satu angka.**`,
  },
  {
    id: 'regresi-nilai-ujian',
    title: 'Apakah Waktu Belajar Berkaitan dengan Nilai?',
    category: 'data',
    summary: 'Menggunakan regresi linear untuk menduga hubungan dua variabel kuantitatif.',
    topicIds: ['data-bivariat', 'regresi'],
    body: `Delapan siswa mencatat rata-rata **waktu belajar** per minggu (jam) dan **nilai** ujian matematika (skala 0–20):

| Waktu belajar $x$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Nilai ujian $y$ | 2 | 4 | 5 | 4 | 7 | 8 | 9 | 11 |`,
    analysis: `Dengan metode kuadrat terkecil diperoleh garis regresi

$$\\hat{y} = 1{,}19x + 0{,}89, \\qquad r \\approx 0{,}97.$$

Karena $r$ sangat dekat dengan 1, hubungan linear positifnya kuat: siswa yang belajar lebih lama cenderung memperoleh nilai lebih tinggi.

Untuk siswa yang belajar 10 jam, perkiraan nilainya $\\hat{y} = 1{,}19(10) + 0{,}89 \\approx 12{,}8$. **Keterbatasan:** nilai dugaan ini adalah **ekstrapolasi** karena $x = 10$ berada di luar rentang data pengamatan ($x$ hanya 1–8), sehingga garis regresi dipaksa berlaku di luar wilayah yang didukung data. Selain itu, kuatnya korelasi **bukan bukti sebab-akibat** — mungkin ada faktor lain seperti kualitas belajar atau latar belakang siswa.`,
  },
  {
    id: 'pengukuran-tinggi-menara',
    title: 'Menaksir Tinggi Menara tanpa Memanjat',
    category: 'pengukuran',
    summary: 'Menggunakan perbandingan trigonometri untuk mengukur tinggi objek dari jarak tertentu.',
    topicIds: ['trigonometri'],
    body: `Pada jarak **50 m** dari kaki sebuah menara, seorang pengamat mengukur sudut elevasi ke puncak menara sebesar **30°**. Dengan mengasumsikan tanah datar dan tinggi mata pengamat diabaikan, tinggi menara $h$ memenuhi:

$$\\tan 30^\\circ = \\frac{h}{50}.$$`,
    analysis: `Karena $\\tan 30^\\circ = \\dfrac{1}{\\sqrt{3}} \\approx 0{,}5774$,

$$h = 50 \\times \\tan 30^\\circ = \\frac{50}{\\sqrt{3}} \\approx 28{,}87 \\text{ m}.$$

Jadi tinggi menara sekitar **28,9 m**. Metode ini disebut **triangulasi** dan dipakai pada survei, navigasi, hingga pengukuran tinggi gunung. Perhatikan bahwa hasil bergantung pada asumsi: jika pengukuran dilakukan dari tempat yang lebih tinggi atau permukaan tanah tidak rata, diperlukan koreksi.`,
  },
  {
    id: 'luas-juring-taman',
    title: 'Merancang Taman Berbentuk Juring',
    category: 'pengukuran',
    summary: 'Menghitung luas juring dan panjang busur untuk kebutuhan material.',
    topicIds: ['lingkaran', 'trigonometri'],
    body: `Sebuah taman berbentuk **juring lingkaran** dengan jari-jari 7 m dan sudut pusat 90°. Akan dipasang rumput di seluruh area juring dan pagar pada sisi lengkungnya.`,
    analysis: `Luas juring:

$$L = \\frac{\\theta}{360^\\circ} \\times \\pi r^{2} = \\frac{90}{360} \\times \\frac{22}{7} \\times 7^{2} = \\frac{1}{4} \\times 154 = 38{,}5 \\text{ m}^2.$$

Panjang busur (untuk pagar):

$$s = \\frac{\\theta}{360^\\circ} \\times 2\\pi r = \\frac{1}{4} \\times 2 \\times \\frac{22}{7} \\times 7 = 11 \\text{ m}.$$

 Jadi dibutuhkan sekitar **38,5 m² rumput** dan **11 m pagar** untuk sisi lengkung.`,
  },
  {
    id: 'optimasi-produksi-bengkel',
    title: 'Optimasi Produksi di Bengkel Kayu',
    category: 'keuangan',
    summary: 'Memilih kombinasi produksi yang memaksimumkan laba dengan sumber daya terbatas.',
    topicIds: ['sistem-pertidaksamaan', 'spltv'],
    body: `Sebuah bengkel membuat dua jenis rak. Rak A memerlukan **2 jam pemotongan** dan **1 jam penghalusan** dengan laba Rp150.000, sedangkan rak B memerlukan **1 jam pemotongan** dan **2 jam penghalusan** dengan laba Rp200.000. Setiap hari tersedia **8 jam pemotongan** dan **10 jam penghalusan**.`,
    analysis: `Misal $x$ banyak rak A dan $y$ banyak rak B. Kendalanya:
$$2x + y \\le 8, \\qquad x + 2y \\le 10, \\qquad x \\ge 0,\\ y \\ge 0.$$
Fungsi objektif laba $f = 150000x + 200000y$. Titik sudut daerah penyelesaian adalah $(0,0)$, $(4,0)$, $(2,4)$, dan $(0,5)$. Nilai $f$ berturut-turut $0$, Rp600.000, Rp1.100.000, dan Rp1.000.000. Jadi laba maksimum **Rp1.100.000** dicapai dengan membuat **2 rak A dan 4 rak B**. Kombinasi ini tidak menghabiskan seluruh kapasitas pemotongan, tetapi tetap optimal — mengejar "semua bahan terpakai" belum tentu memberi laba terbesar.`,
  },
  {
    id: 'dana-pensiun',
    title: 'Dana Pensiun: Kekuatan Menabung Lebih Awal',
    category: 'keuangan',
    summary: 'Membandingkan setoran bulanan untuk target dana yang sama bila mulai lebih lambat.',
    topicIds: ['pinjaman-investasi', 'anuitas', 'bunga-majemuk'],
    body: `Seseorang ingin mengumpulkan **Rp500.000.000** saat pensiun dengan menabung setiap bulan. Dana memberi bunga **0,6% per bulan**. Berapa setoran bulanan yang diperlukan bila mulai **25 tahun** lagi, dan berapa bila menunda sehingga hanya tersisa **15 tahun**?`,
    analysis: `Dengan rumus nilai masa depan anuitas, $A = \\dfrac{FV \\cdot i}{(1+i)^{n}-1}$.
- Mulai 25 tahun lagi ($n = 300$): $(1{,}006)^{300} \\approx 6{,}017$, sehingga $A = \\dfrac{500.000.000 \\times 0{,}006}{5{,}017} \\approx \\text{Rp}598.000$ per bulan.
- Menunda menjadi 15 tahun ($n = 180$): $(1{,}006)^{180} \\approx 2{,}935$, sehingga $A = \\dfrac{3.000.000}{1{,}935} \\approx \\text{Rp}1.550.000$ per bulan.

Menunda 10 tahun membuat setoran bulanan **hampir tiga kali lebih besar**. Waktu adalah variabel paling berpengaruh pada investasi berkala.`,
  },
  {
    id: 'skala-logaritma',
    title: 'Skala Logaritma: Mengukur Gempa dan Keasaman',
    category: 'pengukuran',
    summary: 'Menggunakan logaritma untuk menafsirkan skala kekuatan gempa dan pH.',
    topicIds: ['persamaan-eksponen-logaritma', 'eksponen', 'fungsi-eksponensial'],
    body: `Besaran yang jangkauannya sangat lebar diukur dengan skala logaritma. Kekuatan gempa dinyatakan $M = \\log_{10}\\!\\left(\\dfrac{A}{A_0}\\right)$, sedangkan keasaman larutan dinyatakan $\\mathrm{pH} = -\\log_{10}[\\mathrm{H}^{+}]$.`,
    analysis: `**Gempa.** Selisih satu satuan Richter berarti amplitudo $10$ kali lebih besar. Gempa bermagnitudo $7$ memiliki amplitudo $10^{7-5} = 10^{2} = 100$ kali gempa bermagnitudo $5$. Karena energi sebanding dengan $10^{1{,}5M}$, selisih dua satuan magnitudo menaikkan energi sekitar $10^{3} = 1000$ kali — kenaikan yang terasa kecil pada angka, tetapi sangat besar pada kenyataan.

**pH.** Larutan dengan $\\mathrm{pH}=3$ memiliki konsentrasi ion $\\mathrm{H}^{+}$ sebesar $10^{-3}$ M, sedangkan $\\mathrm{pH}=5$ sebesar $10^{-5}$ M. Selisih dua satuan pH berarti konsentrasinya **100 kali** berbeda. Skala logaritma memampatkan rentang raksasa menjadi angka yang mudah dibaca.`,
  },
  {
    id: 'pemodelan-penyebaran',
    title: 'Memodelkan Penyebaran Kasus di Awal Wabah',
    category: 'pertumbuhan',
    summary: 'Menyusun model eksponensial dari data awal lalu memperkirakan kapan ambang terlampaui.',
    topicIds: ['pemodelan-fungsi', 'fungsi-eksponensial', 'eksponen'],
    body: `Pada awal sebuah wabah tercatat **20 kasus**, dan jumlahnya berlipat sekitar **1,5 kali** setiap pekan. Bila pola ini berlanjut, banyak kasus setelah $t$ pekan dimodelkan $K(t) = 20 \\cdot (1{,}5)^{t}$.`,
    analysis: `Kapan kasus menembus **1.000**? Selesaikan $20 \\cdot (1{,}5)^{t} = 1000$, yaitu $(1{,}5)^{t} = 50$. Dengan logaritma,
$$t = \\frac{\\log 50}{\\log 1{,}5} \\approx \\frac{3{,}912}{0{,}405} \\approx 9{,}7 \\text{ pekan}.$$
Jadi sekitar **10 pekan** setelah pencatatan awal. **Asumsi penting:** model menganggap laju berlipat tetap. Pada kenyataannya jumlah penduduk yang belum terpapar berkurang sehingga pertumbuhan melambat — model eksponensial hanya akurat pada fase awal. Menyadari batas model ini adalah bagian inti dari pemodelan.`,
  },
  {
    id: 'kata-sandi',
    title: 'Menaksir Banyak Kata Sandi dengan Pencacahan',
    category: 'data',
    summary: 'Menggunakan aturan perkalian untuk menilai seberapa kuat sebuah kata sandi.',
    topicIds: ['permutasi-kombinasi', 'peluang'],
    body: `Aturan pencacahan membantu menilai keamanan kata sandi. Jika setiap posisi dipilih bebas dari sekumpulan karakter, banyak kemungkinan diperoleh dari **aturan perkalian**, bukan permutasi tanpa pengulangan.`,
    analysis: `- **PIN 4 angka** ($10$ kemungkinan tiap posisi): $10^{4} = 10.000$ kemungkinan.
- **Kata sandi 6 huruf kecil** ($26$ kemungkinan): $26^{6} = 308.915.776$ kemungkinan.
- **8 karakter huruf kecil dan angka** ($36$ kemungkinan): $36^{8} \\approx 2{,}82 \\times 10^{12}$ kemungkinan.

Setiap tambahan karakter memperbesar kemungkinan secara **perkalian**, bukan penjumlahan. Karena itu menambah panjang kata sandi jauh lebih efektif daripada hanya mengganti huruf dengan angka. Peluang menebaknya secara acak adalah $\\dfrac{1}{\\text{banyak kemungkinan}}$, yang menyusut sangat cepat seiring bertambahnya panjang.`,
  },
];

export function getApplication(id: string): Application | undefined {
  return applications.find((a) => a.id === id);
}

export function applicationsForTopic(topicId: string): Application[] {
  return applications.filter((a) => a.topicIds.includes(topicId));
}

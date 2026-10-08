import type { Application } from '@/types/content';

export const keuanganApplications: Application[] = [
  {
    id: 'bunga-investasi',
    title: 'Memilih Tabungan: Bunga Tunggal atau Bunga Majemuk?',
    category: 'keuangan',
    element: 'bilangan',
    grade: 'XI',
    level: 'dasar',
    estimatedMinutes: 8,
    explorationId: 'bunga-majemuk-sim',
    tags: ['bunga tunggal', 'bunga majemuk', 'tabungan', 'investasi', 'eksponen'],
    summary:
      'Membandingkan hasil dua produk tabungan dengan modal dan suku bunga yang sama.',
    topicIds: ['eksponen', 'bunga-majemuk', 'barisan-deret'],
    body: `Seorang siswa menerima warisan **Rp10.000.000** dan ingin menabungnya selama **10 tahun**. Bank A menawarkan **bunga tunggal** 6% per tahun yang selalu dihitung dari modal awal, sedangkan Bank B menawarkan **bunga majemuk** 6% per tahun yang ikut menghasilkan bunga.

Sepintas kedua penawaran tampak sama karena sama-sama "6% per tahun". Menurutmu, apakah saldo akhir di kedua bank benar-benar sama setelah 10 tahun? Mana yang tumbuh lebih cepat, dan kapan perbedaannya mulai terasa nyata?

Pada bunga tunggal, saldo setelah $n$ tahun mengikuti pola linear:

$$M_n = M_0(1 + i \\cdot n).$$

Pada bunga majemuk, bunga pada tahun berikutnya dihitung dari saldo terkini, sehingga saldonya tumbuh secara eksponensial:

$$M_n = M_0(1+i)^n.$$`,
    analysis: `Dengan $M_0 = 10.000.000$, $i = 0{,}06$, dan $n = 10$:

- Bank A (bunga tunggal): $M_{10} = 10.000.000(1 + 0{,}06 \\cdot 10) = 10.000.000(1{,}6) = \\text{Rp}16.000.000$.
- Bank B (bunga majemuk): $M_{10} = 10.000.000(1{,}06)^{10} = 10.000.000(1{,}7908477) \\approx \\text{Rp}17.908.477$.

Selisihnya sekitar **Rp1.908.477** — cukup untuk membeli laptop atau menambah dana darurat. Kesimpulannya, pada suku bunga yang sama, bunga majemuk selalu lebih menguntungkan untuk jangka panjang karena bunga yang diperoleh ikut "bekerja" menghasilkan bunga berikutnya. Selisih ini akan terus melebar jika jangka waktunya diperpanjang: itulah ciri khas pertumbuhan eksponensial dibanding pertumbuhan linear.`,
    takeaways: [
      'Bunga tunggal tumbuh linear terhadap waktu, sedangkan bunga majemuk tumbuh eksponensial.',
      'Pada suku bunga sama, selisih keduanya membesar seiring bertambahnya jangka waktu.',
      'Untuk tujuan jangka panjang, pilihan jenis bunga jauh lebih penting daripada naik-turun kecil suku bunga.',
    ],
    reflection: [
      'Pada tahun ke berapa selisih kedua tabungan mulai terasa besar, dan mengapa titik itu bukan tahun pertama?',
      'Jika uang itu hanya ditabung 2 tahun, apakah keputusan memilih bank masih benar-benar penting?',
      'Kalau kamu hanya boleh menabung sekali dan tidak bisa menambah setoran, mengapa waktu menjadi sekutu terbaikmu?',
    ],
    source:
      'Data ilustratif berdasarkan produk tabungan bank umum; suku bunga dan saldo dibulatkan untuk pembelajaran.',
  },
  {
    id: 'anuitas-pinjaman',
    title: 'Kredit Motor: Berapa Angsuran dan Berapa Total Bunganya?',
    category: 'keuangan',
    element: 'bilangan',
    grade: 'XI',
    level: 'cakap',
    estimatedMinutes: 12,
    explorationId: 'anuitas-sim',
    tags: ['anuitas', 'pinjaman', 'angsuran', 'bunga', 'kredit', 'amortisasi'],
    summary:
      'Menghitung angsuran tetap bulanan dan total bunga sebuah pinjaman dengan skema anuitas.',
    topicIds: ['anuitas', 'bunga-majemuk', 'barisan-deret'],
    body: `Bu Sari meminjam **Rp50.000.000** untuk membeli kendaraan. Pihak pembiayaan menetapkan suku bunga **12% per tahun**, yaitu **1% per bulan**, dengan skema **anuitas** selama **5 tahun** atau **60 bulan**. Angsuran bulanannya tetap, tetapi komposisi antara pokok dan bunga berubah setiap bulan.

Iklan kredit biasanya hanya menonjolkan "angsuran ringan". Menurutmu, berapa angsuran bulanan yang sebenarnya harus dibayar, dan berapa total bunga yang akhirnya kamu tanggung selama lima tahun?

Besar angsuran anuitas dihitung dengan:

$$A = \\frac{M \\cdot i}{1-(1+i)^{-n}}$$

dengan $M$ pokok pinjaman, $i$ suku bunga per periode, dan $n$ banyak periode.`,
    analysis: `Dengan $M = 50.000.000$, $i = 0{,}01$, dan $n = 60$:

$$A = \\frac{50.000.000 \\times 0{,}01}{1-(1{,}01)^{-60}} = \\frac{500.000}{0{,}449550} \\approx \\text{Rp}1.112.222.$$

Total pembayaran $= 60 \\times 1.112.222{,}4 \\approx \\text{Rp}66.733.342$, sehingga **total bunga sekitar Rp16.733.342** — lebih dari sepertiga nilai pinjaman. Pada bulan pertama, bunga menyerap $0{,}01 \\times 50.000.000 = \\text{Rp}500.000$, sedangkan sisa angsuran barulah $\\text{Rp}1.112.222 - \\text{Rp}500.000 = \\text{Rp}612.222$ yang mengangsur pokok. Karena porsi pokok yang terbayar sangat kecil di awal, saldo pinjaman turun perlahan pada tahun-tahun pertama. Inilah sebabnya memahami tabel amortisasi penting sebelum menandatangani perjanjian kredit: yang tampak "ringan" secara bulanan bisa menjadi biaya total yang besar.`,
    takeaways: [
      'Angsuran tetap, tetapi porsi bunga besar di awal dan mengecil kemudian.',
      'Total bunga adalah biaya riil yang sering terlewat saat melihat iklan kredit.',
      'Memahami tabel amortisasi membantu membandingkan penawaran secara adil.',
    ],
    reflection: [
      'Mengapa porsi pokok yang terbayar pada bulan-bulan awal sangat kecil dibanding bunganya?',
      'Apa yang terjadi pada total bunga jika tenor diperpanjang dari 60 menjadi 72 bulan, padahal angsuran lebih ringan?',
      'Jika kamu punya dana lebih, kapan pelunasan lebih awal paling menghemat bunga?',
    ],
    source:
      'Data ilustratif berdasarkan skema kredit kendaraan bermotor; pokok, bunga, dan tenor dibulatkan untuk pembelajaran.',
  },
  {
    id: 'optimasi-produksi-bengkel',
    title: 'Optimasi Produksi di Bengkel Kayu',
    category: 'keuangan',
    element: 'aljabar-fungsi',
    grade: 'X',
    level: 'cakap',
    estimatedMinutes: 12,
    explorationId: 'spltv-perpotongan',
    tags: ['program linear', 'optimasi', 'sistem pertidaksamaan', 'laba', 'kendala'],
    summary: 'Memilih kombinasi produksi yang memaksimumkan laba dengan sumber daya terbatas.',
    topicIds: ['sistem-pertidaksamaan', 'spltv'],
    body: `Sebuah bengkel kayu membuat dua jenis rak. Setiap **rak A** memerlukan **2 jam pemotongan** dan **1 jam penghalusan** dengan laba Rp150.000, sedangkan setiap **rak B** memerlukan **1 jam pemotongan** dan **2 jam penghalusan** dengan laba Rp200.000. Setiap hari hanya tersedia **8 jam pemotongan** dan **10 jam penghalusan**.

Pemilik bengkel ingin laba harian sebesar mungkin. Berapa rak A dan rak B yang sebaiknya dibuat, dan apakah menghabiskan semua jam kerja selalu berarti laba maksimum?

Kendala sumber daya dapat ditulis sebagai sistem pertidaksamaan, dan laba sebagai fungsi objektif yang harus dimaksimumkan.`,
    analysis: `Misalkan $x$ banyak rak A dan $y$ banyak rak B. Kendalanya:
$$2x + y \\le 8, \\qquad x + 2y \\le 10, \\qquad x \\ge 0,\\ y \\ge 0.$$
Fungsi objektif laba $f = 150000x + 200000y$. Titik sudut daerah penyelesaian diperoleh dari perpotongan garis kendala: $(0,0)$, $(4,0)$, $(2,4)$, dan $(0,5)$. Nilai $f$ berturut-turut $0$, Rp600.000, Rp1.100.000, dan Rp1.000.000. Jadi laba maksimum **Rp1.100.000** dicapai dengan membuat **2 rak A dan 4 rak B**. Perhatikan bahwa kombinasi ini memakai seluruh 10 jam penghalusan tetapi hanya $2(2)+4=8$ jam pemotongan, tepat habis. Namun secara umum, mengejar "semua bahan terpakai" belum tentu optimal — yang menentukan adalah nilai fungsi objektif di titik sudut, bukan seberapa penuh kapasitas terpakai.`,
    takeaways: [
      'Solusi optimum program linear selalu berada di titik sudut daerah layak.',
      'Fungsi objektif, bukan tingkat pemakaian bahan, yang menentukan keputusan akhir.',
      'Setiap tambahan kendala baru dapat mempersempit daerah layak dan mengubah solusi.',
    ],
    reflection: [
      'Mengapa memeriksa titik sudut saja sudah cukup untuk menemukan laba maksimum pada program linear?',
      'Bagaimana solusi berubah jika laba rak B naik menjadi Rp250.000 sementara kendala tetap?',
      'Jika suatu hari jam pemotongan ditambah menjadi 9 jam, apakah laba pasti ikut naik? Jelaskan.',
    ],
    source:
      'Ilustrasi fiktif persoalan program linear pada usaha kecil; angka dibuat agar mudah dihitung.',
  },
  {
    id: 'dana-pensiun',
    title: 'Dana Pensiun: Kekuatan Menabung Lebih Awal',
    category: 'keuangan',
    element: 'bilangan',
    grade: 'XII',
    level: 'mahir',
    estimatedMinutes: 14,
    explorationId: 'anuitas-sim',
    tags: ['nilai masa depan', 'anuitas', 'pensiun', 'investasi berkala', 'bunga majemuk'],
    summary: 'Membandingkan setoran bulanan untuk target dana yang sama bila mulai lebih lambat.',
    topicIds: ['pinjaman-investasi', 'anuitas', 'bunga-majemuk'],
    body: `Seseorang ingin mengumpulkan **Rp500.000.000** saat pensiun dengan menabung jumlah tetap setiap bulan ke produk investasi yang memberi bunga **0,6% per bulan**. Ia punya dua skenario: mulai sekarang sehingga tersedia **25 tahun** (300 bulan), atau menunda sehingga hanya tersisa **15 tahun** (180 bulan).

Target dananya sama, bunganya sama, yang berbeda hanya waktu. Menurutmu, seberapa besar perbedaan setoran bulanan antara kedua skenario — dua kali, atau lebih?

Karena setoran dilakukan berkala, nilai masa depannya mengikuti rumus nilai masa depan anuitas:

$$A = \\dfrac{FV \\cdot i}{(1+i)^{n}-1}.$$`,
    analysis: `Gunakan rumus di atas dengan $FV = 500.000.000$ dan $i = 0{,}006$.

- Mulai sekarang, $n = 300$: $(1{,}006)^{300} \\approx 6{,}017$, sehingga $A = \\dfrac{500.000.000 \\times 0{,}006}{6{,}017-1} = \\dfrac{3.000.000}{5{,}017} \\approx \\text{Rp}598.000$ per bulan.
- Menunda menjadi $n = 180$: $(1{,}006)^{180} \\approx 2{,}935$, sehingga $A = \\dfrac{3.000.000}{1{,}935} \\approx \\text{Rp}1.550.000$ per bulan.

Menunda 10 tahun membuat setoran bulanan naik dari sekitar Rp598.000 menjadi Rp1.550.000, yaitu **sekitar 2,6 kali lipat**. Artinya, selisih waktu jauh lebih menentukan daripada besarnya setoran: uang yang disetor lebih awal punya lebih banyak waktu untuk berbunga, sehingga setiap rupiah bekerja lebih keras. Bagi pelajar, kesimpulan praktisnya sederhana — mulai menabung sedini mungkin, sekalipun jumlahnya kecil.`,
    takeaways: [
      'Waktu menabung berpengaruh lebih besar daripada besarnya setoran.',
      'Menunda 10 tahun bisa melipatgandakan setoran bulanan yang diperlukan untuk target yang sama.',
      'Bunga majemuk memberi hasil terbesar pada dana yang ditanam paling lama.',
    ],
    reflection: [
      'Mengapa menambah 10 tahun waktu menabung berdampak lebih besar daripada menambah nominal setoran bulanan?',
      'Jika setoran bulananmu sekarang kecil, apa cara paling masuk akal untuk mengimbanginya?',
      'Bagaimana hasilnya berubah jika suku bunga bulanan turun menjadi 0,4%? Mana yang lebih sensitif, waktu atau suku bunga?',
    ],
    source:
      'Data ilustratif berdasarkan produk investasi berkala; imbal hasil dan target dana dibulatkan untuk pembelajaran.',
  },
  {
    id: 'diskon-berlapis',
    title: 'Diskon Berlapis: Urutan Diskon yang Menguntungkan',
    category: 'keuangan',
    element: 'aljabar-fungsi',
    grade: 'XI',
    level: 'cakap',
    estimatedMinutes: 13,
    explorationId: 'komposisi-fungsi-sim',
    tags: ['komposisi fungsi', 'diskon', 'fungsi linear', 'persentase', 'fungsi invers'],
    summary:
      'Memodelkan diskon berlapis sebagai komposisi fungsi dan menyelidiki kapan urutannya berpengaruh.',
    topicIds: ['komposisi-fungsi', 'fungsi-invers'],
    body: `Promo belanja sering memakai **diskon berlapis**, misalnya "diskon 20%, lalu tambahan diskon 10%". Banyak pembeli mengira totalnya 30%. Ada juga promo berupa **voucher potongan Rp50.000** yang bisa digabung dengan diskon persen. Toko biasanya menyerahkan urutan penerapannya — tetapi apakah urutan itu benar-benar mengubah harga akhir?

Anggap harga awal sebuah barang adalah $x$. Diskon 20% berarti pembeli membayar 80%, sehingga dapat dimodelkan sebagai fungsi $f(x) = 0{,}8x$, dan diskon 10% sebagai $g(x) = 0{,}9x$. Menumpuk dua diskon berarti mengomposisikan kedua fungsi, misalnya $(g \\circ f)(x) = g(f(x))$. Sementara itu, voucher potongan tetap Rp50.000 dimodelkan sebagai $h(x) = x - 50.000$.`,
    analysis: `Ambil harga awal $x = 500.000$.

**Dua diskon persen.** Terapkan diskon 20% dahulu, lalu 10%:
$$(g \\circ f)(x) = 0{,}9(0{,}8x) = 0{,}72x = 0{,}72 \\times 500.000 = \\text{Rp}360.000.$$
Bila urutan ditukar menjadi $(f \\circ g)(x) = 0{,}8(0{,}9x) = 0{,}72x$, hasilnya tetap Rp360.000. Diskon sebesar $1 - 0{,}72 = 0{,}28$, yaitu **28%**, bukan 30%. Kedua urutan memberi hasil sama karena keduanya hanyalah **perkalian** — dan perkalian bersifat komutatif.

**Tambah voucher nominal tetap.** Bandingkan dua urutan:
- Diskon 20% dahulu, lalu voucher: $(h \\circ f)(500.000) = 0{,}8(500.000) - 50.000 = 400.000 - 50.000 = \\text{Rp}350.000$.
- Voucher dahulu, lalu diskon 20%: $(f \\circ h)(500.000) = 0{,}8(500.000 - 50.000) = 0{,}8 \\times 450.000 = \\text{Rp}360.000$.

Sekarang urutannya penting: selisihnya **Rp10.000**. Kesimpulannya, selama semua potongan berbentuk persen (operasi perkalian), urutan tidak berpengaruh. Begitu ada potongan atau biaya bernilai nominal tetap (operasi penjumlahan/pengurangan), komposisi menjadi tidak komutatif. Untuk pembeli, memakai diskon persen lebih dahulu lalu voucher nominal selalu lebih murah; untuk penjual, urutan sebaliknya lebih menguntungkan.`,
    takeaways: [
      'Dua diskon persen berturut-turut tidak dijumlahkan, melainkan dikalikan.',
      'Diskon berlapis murni persen bersifat komutatif sehingga urutannya tidak mengubah harga.',
      'Kehadiran komponen nominal tetap (voucher atau biaya administrasi) membuat urutan menjadi penting.',
    ],
    reflection: [
      'Mengapa $(g \\circ f)(x)$ dan $(f \\circ g)(x)$ menghasilkan nilai sama untuk dua diskon persen, tetapi berbeda setelah voucher nominal ditambahkan?',
      'Jika kamu boleh memilih urutan, kapan sebaiknya kamu memakai diskon persen dan kapan voucher nominal?',
      'Bagaimana komposisi berubah jika setelah diskon masih dikenakan PPN 11%? Apakah urutan PPN memengaruhi harga akhir?',
    ],
    source:
      'Ilustrasi fiktif pola promo diskon berlapis di ritel; harga dan voucher dibuat agar mudah dihitung.',
  },
  {
    id: 'konversi-mata-uang',
    title: 'Nilai Tukar Mata Uang: Membaca Arah Fungsi Invers',
    category: 'keuangan',
    element: 'aljabar-fungsi',
    grade: 'XI',
    level: 'dasar',
    estimatedMinutes: 9,
    explorationId: 'fungsi-invers-sim',
    tags: ['fungsi invers', 'nilai tukar', 'kurs', 'konversi', 'fungsi linear'],
    summary:
      'Menukar rupiah ke dolar dan sebaliknya dengan memahami hubungan fungsi dan fungsi inversnya.',
    topicIds: ['fungsi-invers', 'komposisi-fungsi'],
    body: `Saat bepergian atau berbelanja daring, kita sering menukar uang: rupiah ke dolar, lalu dolar kembali ke rupiah. Misalkan kurs dinyatakan sebagai **1 USD = Rp16.000**. Jika kita menyebut $x$ sebagai banyak dolar, maka uang dalam rupiah adalah $f(x) = 16.000x$.

Pertanyaan pemicunya: jika kamu menukar **Rp4.000.000** menjadi dolar lalu segera menukarkannya kembali menjadi rupiah, apakah uangmu kembali persis Rp4.000.000? Operasi apa yang "membalikkan" penukaran ini, dan mengapa hasilnya bisa berbeda di dunia nyata?

Proses membalik arah konversi adalah **fungsi invers**. Dari $y = 16.000x$, kita selesaikan untuk $x$ dan memperoleh:

$$f^{-1}(y) = \\frac{y}{16.000}.$$`,
    analysis: `Dengan kurs $f(x) = 16.000x$:

- $250\\ \\text{USD} \\to f(250) = 16.000 \\times 250 = \\text{Rp}4.000.000$.
- Kembali: $f^{-1}(4.000.000) = \\dfrac{4.000.000}{16.000} = 250\\ \\text{USD}$.

Jadi dengan satu kurs yang sama, penukaran bolak-balik mengembalikan nilai semula: $f^{-1}(f(250)) = 250$. Inilah makna fungsi invers sebagai "kebalikan" dari fungsi asal.

Namun di dunia nyata, money changer memakai dua kurs sekaligus: **kurs beli** Rp15.800 dan **kurs jual** Rp16.200. Saat menukar 250 USD menjadi rupiah, kamu memakai kurs beli: $250 \\times 15.800 = \\text{Rp}3.950.000$. Ketika menukarkannya kembali ke dolar, kamu memakai kurs jual: $3.950.000 \\div 16.200 \\approx 243{,}83\\ \\text{USD}$. Kamu kehilangan sekitar $250 - 243{,}83 = 6{,}17\\ \\text{USD}$, setara kurang dari Rp100.000. Selisih kecil ini adalah biaya transaksi yang membuat invers "praktis" tidak persis sama dengan invers matematis.`,
    takeaways: [
      'Membagi dengan kurs adalah fungsi invers dari mengalikan dengan kurs.',
      'Komposisi fungsi dan inversnya mengembalikan nilai semula: $f^{-1}(f(x)) = x$.',
      'Di dunia nyata, selisih kurs beli dan kurs jual membuat hasil bolak-balik tidak pernah persis sama.',
    ],
    reflection: [
      'Mengapa $f^{-1}(f(x)) = x$ berlaku pada kurs tunggal, tetapi tidak persis pada kurs beli-jual?',
      'Jika kurs berubah dari Rp16.000 menjadi Rp17.000 per USD, bagaimana pengaruhnya terhadap jumlah rupiah yang diterima untuk 100 USD?',
      'Dalam situasi apa biaya selisih kurs ini masih sepadan dengan kebutuhanmu?',
    ],
    source:
      'Data ilustratif berdasarkan kurs transaksi bank dan money changer; kurs dibulatkan dan dapat berubah dari waktu ke waktu.',
  },
  {
    id: 'ind-validasi-angsuran',
    title: 'Validasi Pola Angsuran Bertahap dengan Induksi',
    category: 'keuangan',
    element: 'aljabar-fungsi',
    grade: 'XI',
    level: 'mahir',
    estimatedMinutes: 13,
    explorationId: 'anuitas-sim',
    tags: ['induksi matematika', 'pembuktian', 'deret aritmetika', 'angsuran', 'pola'],
    summary:
      'Membuktikan rumus total setoran bertahap berlaku untuk semua bulan dengan induksi matematika.',
    topicIds: ['induksi-matematika', 'barisan-deret', 'bunga-majemuk'],
    body: `Sebuah koperasi menawarkan program simpanan bertahap. Setoran bulan pertama **Rp100.000**, dan setiap bulan berikutnya naik **Rp25.000**. Brosurnya menjanjikan total setoran setelah $n$ bulan mengikuti rumus
$$S_n = 12.500n^{2} + 87.500n.$$

Rumus ini enak dipakai, tetapi dari mana asalnya? Menguji beberapa bulan pertama saja tidak cukup, karena bisa saja rumus itu cocok di awal lalu melenceng pada bulan ke-13. Untuk memastikan rumus benar untuk **semua** $n$ bilangan asli, kita perlu **induksi matematika**.

Pertanyaan pemicunya: bagaimana membuktikan rumus total setoran itu benar untuk setiap bulan, bukan sekadar beberapa bulan pertama?`,
    analysis: `Total setoran setelah $n$ bulan adalah deret aritmetika
$$S_n = 100.000 + 125.000 + \\cdots + \\bigl(100.000 + (n-1)25.000\\bigr).$$

Langkah pertama, **basis**: untuk $n = 1$,
$$S_1 = 100.000 \\quad\\text{dan}\\quad 12.500(1)^{2} + 87.500(1) = 100.000.$$
Basis benar.

Langkah kedua, **langkah induksi**: andaikan rumus benar untuk $n$, yakni $S_n = 12.500n^{2} + 87.500n$. Setoran bulan ke-$(n+1)$ adalah $100.000 + n \\cdot 25.000$, sehingga
$$S_{n+1} = S_n + 100.000 + 25.000n = 12.500n^{2} + 87.500n + 100.000 + 25.000n.$$
Menyederhanakan,
$$S_{n+1} = 12.500n^{2} + 112.500n + 100.000.$$
Sisi lain yang ingin dicapai adalah rumus untuk $n+1$:
$$12.500(n+1)^{2} + 87.500(n+1) = 12.500n^{2} + 112.500n + 100.000.$$
Kedua bentuk **sama persis**, jadi langkah induksi berhasil. Karena basis benar dan langkah induksi benar, rumus $S_n$ terbukti berlaku untuk semua bilangan asli $n$.

Bandingkan dengan pengujian beberapa bulan: memeriksa $n = 1, 2, 3$ memang mencocokkan angka, tetapi hanya induksi yang menjamin tidak ada bulan ke-13 yang melenceng. Inilah yang membedakan **pola yang tampak** dari **pola yang terbukti**.`,
    takeaways: [
      'Induksi matematika butuh dua bagian: basis ($n=1$) dan langkah induksi ($n \\to n+1$).',
      'Menguji beberapa kasus awal tidak pernah cukup untuk membuktikan pola jangka panjang.',
      'Rumus deret aritmetika lebih meyakinkan jika diturunkan dan dibuktikan, bukan sekadar dipercaya.',
    ],
    reflection: [
      'Mengapa memeriksa 10 bulan pertama tetap belum membuktikan rumus angsuran ini benar?',
      'Di mana tepatnya hipotesis induksi dipakai pada langkah $n \\to n+1$?',
      'Jika kenaikan bulanan berubah menjadi Rp50.000, apa yang berubah pada pembuktiannya?',
    ],
    source:
      'Ilustrasi fiktif program simpanan bertahap koperasi; nominal dibuat agar mudah dibuktikan dengan induksi.',
  },
];

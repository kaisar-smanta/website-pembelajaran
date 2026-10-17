import type { Application } from '@/types/content';

export const pertumbuhanApplications: Application[] = [
  {
    id: 'pertumbuhan-populasi',
    title: 'Pertumbuhan Populasi Bakteri di Laboratorium',
    category: 'pertumbuhan',
    element: 'aljabar-fungsi',
    grade: 'X',
    level: 'dasar',
    estimatedMinutes: 9,
    explorationId: 'eksponen-pertumbuhan',
    tags: ['pertumbuhan eksponensial', 'populasi', 'bakteri', 'pemodelan', 'fungsi eksponensial'],
    summary: 'Memodelkan pertumbuhan populasi yang berlipat dua dengan fungsi eksponensial.',
    topicIds: ['eksponen', 'fungsi-eksponensial', 'barisan-deret'],
    body: `Sebuah kultur bakteri mula-mula berisi 500 sel. Setiap 20 menit, setiap sel membelah menjadi dua sehingga populasi berlipat dua. Jika $t$ dinyatakan dalam menit, populasi setelah $t$ menit adalah:
$$N(t) = 500 \\cdot 2^{t/20}.$$

Eksponen $t/20$ menyatakan **banyak selang 20 menit** yang sudah berlangsung, bukan banyak menitnya langsung.

Pertanyaan pemicunya: setelah 3 jam, berapa banyak sel yang ada, dan mengapa hasilnya jauh melampaui dugaan awal kebanyakan orang?`,
    analysis: `Setelah 3 jam ($t = 180$ menit) terdapat $180/20 = 9$ selang waktu, sehingga
$$N(180) = 500 \\cdot 2^{9} = 500 \\cdot 512 = 256.000 \\text{ sel}.$$

Jika pertambahannya linear (bertambah jumlah tetap), hasilnya akan jauh lebih kecil. Model eksponensial menjelaskan mengapa pengendalian populasi mikroba harus dilakukan cepat. Pertanyaan "kapan populasi menembus ambang tertentu" pun diselesaikan dengan persamaan eksponen, bukan dengan menebak satu per satu. **Asumsi penting:** model ini mengandaikan ruang dan nutrisi tak terbatas; pada kenyataannya pertumbuhan melambat ketika sumber daya menipis, sehingga model eksponensial hanya akurat pada fase awal.`,
    takeaways: [
      'Populasi berlipat mengikuti rumus eksponensial, bukan pertambahan tetap.',
      'Model eksponensial hanya berlaku selama sumber daya masih berlimpah.',
      'Waktu menuju ambang tertentu dicari dengan menyelesaikan persamaan eksponen, bukan dengan menghitung satu per satu.',
    ],
    reflection: [
      'Mengapa hasil pertumbuhan eksponensial jauh melampaui pertumbuhan linear?',
      'Kapan model ini berhenti berlaku, dan faktor apa yang membuatnya melambat?',
    ],
    source:
      'Mengacu pada pola pembelahan bakteri yang berlipat dua setiap sekitar 20 menit (waktu generasi yang lazim di laboratorium); populasi awal dan waktu dibulatkan untuk pembelajaran, bukan data satu kultur tertentu.',
  },
  {
    id: 'peluruhan-zat',
    title: 'Peluruhan Zat dalam Darah',
    category: 'pertumbuhan',
    element: 'aljabar-fungsi',
    grade: 'X',
    level: 'cakap',
    estimatedMinutes: 10,
    explorationId: 'fungsi-eksponensial-grafik',
    tags: ['peluruhan', 'waktu paruh', 'eksponen', 'pertidaksamaan', 'farmakokinetik'],
    summary: 'Model peluruhan eksponensial dengan waktu paruh.',
    topicIds: ['eksponen', 'fungsi-eksponensial'],
    body: `Konsentrasi sebuah obat dalam darah mula-mula 80 mg/L dan berkurang menjadi setengahnya setiap 4 jam. Konsentrasi setelah $t$ jam adalah:
$$C(t) = 80 \\left(\\tfrac{1}{2}\\right)^{t/4}.$$

Karena basisnya kurang dari satu, grafiknya menurun dan makin lama makin landai mendekati nol.

Pertanyaan pemicunya: pada jam ke berapa konsentrasi obat pertama kali turun di bawah 5 mg/L?`,
    analysis: `Konsentrasi akan berada di bawah 5 mg/L ketika
$$80\\left(\\tfrac12\\right)^{t/4} < 5 \\iff \\left(\\tfrac12\\right)^{t/4} < \\tfrac{1}{16} = \\left(\\tfrac12\\right)^{4}.$$

Karena basis lebih kecil dari 1, tanda pertidaksamaan berbalik saat menyamakan eksponen, sehingga $t/4 > 4$ atau $t > 16$ jam. Pada $t = 16$ jam konsentrasinya tepat 5 mg/L. Karena itu, pertanyaan "kapan kadar aman" harus diterjemahkan menjadi pertidaksamaan, bukan persamaan. Ini contoh penting bahwa pada **peluruhan**, grafik menurun dan hubungan "lebih kecil dari" perlu kehati-hatian saat basisnya kurang dari satu.`,
    takeaways: [
      'Pada peluruhan, tanda pertidaksamaan berbalik saat basis kurang dari 1 disamakan.',
      'Waktu paruh menentukan seberapa cepat konsentrasi turun.',
      'Ambang kadar ("di bawah 5 mg/L") diselesaikan dengan pertidaksamaan eksponen, bukan persamaan.',
    ],
    reflection: [
      'Mengapa tanda pertidaksamaan berbalik pada peluruhan dengan basis kurang dari 1?',
      'Bagaimana kamu menentukan kapan obat perlu diminum lagi?',
    ],
    source:
      'Mengacu pada konsep waktu paruh (half-life) yang lazim dipakai dalam farmakokinetik; nilai awal 80 mg/L dan waktu paruh 4 jam dipilih untuk ilustrasi dan dibulatkan, bukan rujukan medis.',
  },
  {
    id: 'pemodelan-penyebaran',
    title: 'Memodelkan Pertumbuhan Pengguna Aplikasi',
    category: 'pertumbuhan',
    element: 'aljabar-fungsi',
    grade: 'XI',
    level: 'cakap',
    estimatedMinutes: 12,
    explorationId: 'eksponen-pertumbuhan',
    tags: ['pemodelan', 'eksponen', 'logaritma', 'pertumbuhan pengguna', 'adopsi teknologi'],
    summary: 'Menyusun model eksponensial dari data awal lalu memperkirakan kapan ambang terlampaui.',
    topicIds: ['pemodelan-fungsi', 'fungsi-eksponensial', 'eksponen'],
    body: `Sebuah aplikasi baru memiliki **200 pengguna** pada minggu pertama peluncuran, dan jumlahnya berlipat sekitar **1,5 kali** setiap pekan. Bila pola ini berlanjut, banyak pengguna setelah $t$ pekan dimodelkan
$$K(t) = 200 \\cdot (1{,}5)^{t}.$$

Model ini dibangun dari dua informasi: nilai awal (200) sebagai titik tolak, dan faktor pengali (1,5) sebagai laju pertumbuhan.

Pertanyaan pemicunya: pada pekan ke berapa jumlah pengguna menembus **10.000**, dan seberapa jauh kita boleh mempercayai angka itu?`,
    analysis: `Selesaikan $200 \\cdot (1{,}5)^{t} = 10.000$, yaitu $(1{,}5)^{t} = 50$. Dengan logaritma,
$$t = \\frac{\\log 50}{\\log 1{,}5} \\approx \\frac{3{,}912}{0{,}405} \\approx 9{,}7 \\text{ pekan}.$$

Jadi ambang itu dilewati sekitar **10 pekan** setelah peluncuran. **Asumsi penting:** model menganggap laju berlipat tetap. Pada kenyataannya calon pengguna yang belum terjangkau makin sedikit dan persaingan menekan pertumbuhan, sehingga laju melambat. Model eksponensial hanya akurat pada fase awal. Menyadari batas model ini adalah bagian inti dari pemodelan.`,
    takeaways: [
      'Logaritma dipakai untuk menyelesaikan persamaan eksponensial.',
      'Setiap model punya asumsi; mengenali batasnya sama penting dengan menghitung.',
    ],
    reflection: [
      'Mengapa prediksi model ini cepat melenceng setelah beberapa pekan?',
      'Informasi tambahan apa yang kamu butuhkan agar model lebih realistis?',
    ],
    source:
      'Skenario pengajaran yang dikonstruksi dengan angka realistis mengikuti pola pertumbuhan pengguna aplikasi pada fase awal (adopsi cepat lalu melambat); angka 200 pengguna dan faktor 1,5 per pekan dibulatkan, bukan data produk tertentu.',
  },
  {
    id: 'tabungan-vs-inflasi',
    title: 'Bunga Tabungan vs Inflasi: Apakah Uang Kita Benar Bertumbuh?',
    category: 'pertumbuhan',
    element: 'aljabar-fungsi',
    grade: 'XI',
    level: 'cakap',
    estimatedMinutes: 12,
    explorationId: 'fungsi-eksponensial-grafik',
    tags: ['inflasi', 'bunga majemuk', 'daya beli', 'uang riil', 'fungsi eksponensial'],
    summary: 'Membandingkan pertumbuhan nominal tabungan dengan tergerusnya daya beli akibat inflasi.',
    topicIds: ['fungsi-eksponensial', 'eksponen', 'pemodelan-fungsi'],
    body: `Bayangkan kamu menyimpan Rp10.000.000 di rekening dengan bunga majemuk 4% per tahun. Angka di rekening memang bertambah setiap tahun, yaitu $N(t) = 10.000.000 \\cdot (1{,}04)^{t}$ setelah $t$ tahun. Namun, harga barang dan jasa juga naik. Jika inflasi rata-rata 3% per tahun, harga sekumpulan barang yang semula bernilai 1 satuan naik menjadi $(1{,}03)^{t}$.

Daya beli tabunganmu adalah **hasil bagi** keduanya:
$$D(t) = \\frac{10.000.000 \\cdot (1{,}04)^{t}}{(1{,}03)^{t}} = 10.000.000 \\left(\\dfrac{1{,}04}{1{,}03}\\right)^{t}.$$

Pertanyaan pemicunya: setelah 10 tahun, apakah nilai uangmu benar-benar bertumbuh, dan sebesar apa pertumbuhan nyatanya?`,
    analysis: `Setelah $t = 10$ tahun, saldo nominal menjadi
$$N(10) = 10.000.000 \\cdot (1{,}04)^{10} \\approx 10.000.000 \\cdot 1{,}48024 = 14.802.443.$$

Tetapi harga-harga juga naik, sehingga daya belinya setara
$$D(10) = \\frac{14.802.443}{(1{,}03)^{10}} \\approx \\frac{14.802.443}{1{,}34392} \\approx 11.014.400.$$

Jadi dari sisi daya beli, Rp10.000.000 hanya menjadi sekitar Rp11.014.000, bukan Rp14.802.000. Selisih sekitar Rp3,79 juta itu habis untuk menutup kenaikan harga.

Menariknya, tingkat pertumbuhan riil tidak sama dengan $4\\% - 3\\% = 1\\%$ per tahun, yaitu
$$\\frac{1{,}04}{1{,}03} - 1 \\approx 0{,}97\\% \\text{ per tahun}.$$

Dalam 10 tahun faktor pertumbuhan daya beli adalah $\\left(\\dfrac{1{,}04}{1{,}03}\\right)^{10} \\approx 1{,}1014$, yaitu tumbuh sekitar $10{,}14\\%$, masih positif, tetapi jauh lebih kecil daripada kesan dari angka nominal. Kesimpulannya: yang menentukan kesejahteraan adalah daya beli, bukan angka di rekening.`,
    takeaways: [
      'Saldo nominal dan daya beli tumbuh dengan laju berbeda; inflasi menggerus keduanya secara eksponensial.',
      'Tingkat bunga riil adalah hasil bagi $(1+bunga)/(1+inflasi)$; selisih bunga dan inflasi saja tidak cukup.',
      'Keputusan menabung atau berinvestasi sebaiknya memakai daya beli, bukan angka nominal.',
    ],
    reflection: [
      'Jika bunga tabungan lebih kecil daripada inflasi, apa arti pertumbuhan saldo nominalmu?',
      'Mengapa selisih $4\\%$ dan $3\\%$ tidak sama dengan tingkat bunga riil?',
      'Data suku bunga dan inflasi apa yang perlu kamu cari sebelum memutuskan menyimpan uang?',
    ],
    source:
      'Mengacu pada kisaran umum suku bunga simpanan dan inflasi di Indonesia dalam beberapa tahun terakhir (bunga 4% dan inflasi 3% per tahun, dibulatkan); bukan data satu tahun tertentu.',
  },
  {
    id: 'pertumbuhan-batas-daya-dukung',
    title: 'Ketika Pertumbuhan Eksponensial Mentok: Batas Daya Dukung',
    category: 'pertumbuhan',
    element: 'aljabar-fungsi',
    grade: 'XI',
    level: 'mahir',
    estimatedMinutes: 14,
    explorationId: 'eksponen-pertumbuhan',
    tags: ['pemodelan', 'eksponen', 'logaritma', 'daya dukung', 'pertumbuhan logistik', 'barisan geometri'],
    summary:
      'Menguji asumsi model eksponensial dan memperkenalkan batas daya dukung ketika pertumbuhan mulai melambat.',
    topicIds: ['pemodelan-fungsi', 'fungsi-eksponensial', 'eksponen', 'barisan-deret'],
    body: `Sebuah danau kecil mula-mula dihuni **200 ekor ikan**. Tanpa predator, populasinya berlipat sekitar **1,4 kali setiap tahun** sehingga pada tahun-tahun awal terlihat mengikuti model eksponensial
$$N(t) = 200 \\cdot (1{,}4)^{t}.$$

Namun danau itu hanya mampu menampung sekitar **2.000 ekor** sebelum makanan dan ruang menjadi terbatas. Artinya model eksponensial tidak boleh dipakai selamanya.

Pertanyaan pemicunya: menurut model eksponensial, kapan populasi menembus 2.000? Setelah itu, apakah populasi benar-benar terus berlipat, dan apa yang membuat prediksi eksponensial mulai menyesatkan?`,
    analysis: `Selesaikan $200 \\cdot (1{,}4)^{t} = 2000$, yaitu $(1{,}4)^{t} = 10$. Dengan logaritma,
$$t = \\frac{\\log 10}{\\log 1{,}4} \\approx \\frac{1}{0{,}1461} \\approx 6{,}8 \\text{ tahun}.$$
Jadi model eksponensial memperkirakan ambang 2.000 ekor terlampaui sekitar **tahun ke-7**. Padahal daya dukung danau hanya 2.000 ekor: ketika populasi mendekati batas itu, persaingan makanan menurunkan laju kelahiran dan menaikkan kematian. Pertumbuhan melambat, bukan terus berlipat.

Model yang lebih jujur adalah pertumbuhan logistik, misalnya
$$N(t) = \\frac{K}{1 + \\left(\\dfrac{K-N_0}{N_0}\\right)e^{-rt}}$$
dengan $K = 2000$ daya dukung dan $N_0 = 200$ populasi awal. Grafiknya menyerupai huruf S: cepat pada awalnya (mendekati eksponensial), lalu mendatar mendekati $K$ sebagai asimtot. Pertumbuhan logistik memiliki laju paling cepat di sekitar $N = K/2 = 1000$ ekor, bukan di awal.

Pelajarannya: **setiap model punya rentang keberlakuan**, bukan berarti "eksponensial salah". Model eksponensial akurat selama sumber daya masih berlimpah; setelah itu perlu ditambahkan faktor pembatas.`,
    takeaways: [
      'Model eksponensial hanya berlaku selama sumber daya belum menjadi pembatas.',
      'Daya dukung $K$ membuat pertumbuhan melambat dan menghampiri nilai maksimum sebagai asimtot.',
      'Menentukan kapan model berhenti berlaku sama pentingnya dengan menghitung dari model itu.',
      'Logaritma dipakai untuk menerjemahkan pertanyaan ambang menjadi waktu.',
    ],
    reflection: [
      'Apa bukti nyata di lapangan yang menandakan populasi sudah mendekati daya dukung?',
      'Bagaimana bentuk grafik berubah jika daya dukung dinaikkan menjadi 3.000 ekor?',
      'Sebutkan satu contoh lain (selain populasi) yang tumbuh eksponensial pada awalnya tetapi kemudian melambat.',
    ],
    source:
      'Skenario pengajaran yang dikonstruksi dengan angka realistis mengikuti pola pertumbuhan logistik pada ruang terbatas (misalnya populasi ikan di danau); populasi awal, laju tumbuh, dan daya dukung dirancang agar ambangnya mudah dihitung, bukan data lapangan tertentu.',
  },
  {
    id: 'tbil-jadwal-ronda',
    title: 'Penjadwalan Ronda: Kapan Tiga Kelompok Bertemu Lagi?',
    category: 'pertumbuhan',
    element: 'bilangan',
    grade: 'X',
    level: 'cakap',
    estimatedMinutes: 11,
    explorationId: 'teori-bilangan-pola',
    tags: ['KPK', 'modulo', 'keterbagian', 'penjadwalan', 'siklus'],
    summary:
      'Menggunakan KPK dan aritmetika modulo untuk menentukan kapan beberapa siklus kegiatan berulang bersamaan.',
    topicIds: ['teori-bilangan', 'eksponen', 'barisan-deret'],
    body: `Di sebuah kampung, tiga kelompok ronda bertugas dengan siklus berbeda:
- Kelompok A bertugas setiap **4 malam**,
- Kelompok B setiap **6 malam**,
- Kelompok C setiap **9 malam**.

Malam ini ketiganya bertugas bersama. Pertanyaan pemicunya: berapa malam lagi mereka akan bertugas bersama lagi, dan jika malam ini **Jumat**, kapan pertemuan bersama itu jatuh pada hari Jumat berikutnya? Menjawabnya cukup dengan **kelipatan persekutuan terkecil (KPK)** dan bahasa **modulo**.`,
    analysis: `**Kapan bertemu lagi.** Agar ketiganya bertugas bersama, jumlah malam yang berlalu harus kelipatan 4, kelipatan 6, sekaligus kelipatan 9. Waktu pertemuan berikutnya adalah
$$\\operatorname{lcm}(4,6,9) = 36 \\text{ malam}.$$
Memang $\\operatorname{lcm}(4,6)=12$ dan $\\operatorname{lcm}(12,9)=36$, sehingga setiap 36 malam ketiganya bertemu.

**Jatuh pada hari apa.** Satu minggu ada 7 hari, jadi hari bergeser dengan modulo 7. Jarak 36 malam bersisa $36 \\equiv 1 \\pmod 7$, artinya pertemuan berikutnya jatuh satu hari setelah Jumat, yakni **Sabtu**. Karena itu, agar pertemuannya kembali hari Jumat, jaraknya harus kelipatan dari **kedua** siklus, yaitu
$$\\operatorname{lcm}(36,7) = 252 \\text{ malam}.$$
Dalam 252 malam, $252 = 36 \\times 7$ sehingga ketiganya sudah bertemu $7$ kali, dan $252 \\equiv 0 \\pmod 7$ sehingga harinya kembali Jumat. Jadi pertemuan bersama pada hari Jumat berikutnya terjadi **252 malam** sejak malam ini.

Cara berpikir ini dipakai di dunia nyata untuk menyelaraskan jadwal piket, perawatan mesin, hingga sinkronisasi siaran: jadwal bersamaan selalu muncul pada kelipatan persekutuan.`,
    takeaways: [
      'Dua kegiatan periodik selalu bertemu pada kelipatan persekutuan terkecil periodenya.',
      'Aritmetika modulo 7 menjelaskan pergeseran hari dalam sepekan.',
      'KPK dari siklus gabungan dan 7 memberi waktu pertemuan yang jatuh pada hari yang sama.',
    ],
    reflection: [
      'Mengapa pertemuan berikutnya harus kelipatan 4, 6, dan 9 sekaligus?',
      'Jika kelompok C diganti menjadi setiap 12 malam, bagaimana KPK-nya berubah?',
      'Kegiatan lain apa di sekitarmu yang jadwalnya bisa dianalisis dengan cara ini?',
    ],
    source:
      'Skenario pengajaran yang dikonstruksi mengikuti pola penjadwalan berkala (piket, ronda, atau perawatan mesin); periode 4, 6, dan 9 malam dipilih agar KPK dan aritmetika modulonya mudah dihitung, bukan jadwal satu kampung tertentu.',
  },
  {
    id: 'depresiasi-kendaraan',
    title: 'Nilai Jual Mobil yang Menyusut',
    category: 'pertumbuhan',
    element: 'aljabar-fungsi',
    grade: 'XI',
    level: 'cakap',
    estimatedMinutes: 11,
    explorationId: 'fungsi-eksponensial-grafik',
    tags: ['depresiasi', 'peluruhan eksponensial', 'waktu paruh', 'bunga majemuk', 'fungsi eksponensial', 'nilai jual'],
    summary:
      'Memodelkan penyusutan nilai mobil dengan peluruhan eksponensial lalu membandingkannya dengan klaim penyusutan linear.',
    topicIds: ['bunga-majemuk', 'fungsi-eksponensial'],
    body: `Seorang pemilik mobil membeli kendaraan baru seharga Rp300.000.000. Ia mendengar bahwa mobil kehilangan sekitar 15% nilainya setiap tahun. Dengan pola itu, nilai jual mobil setelah $t$ tahun dimodelkan sebagai peluruhan eksponensial:
$$V(t) = 300.000.000 \\cdot (0{,}85)^{t}.$$
Faktor $0{,}85$ muncul karena nilai yang tersisa tiap tahun adalah $100\\% - 15\\% = 85\\%$ dari nilai tahun sebelumnya.

Di sisi lain, seorang penjual menawarkan model lain: nilai mobil turun Rp45.000.000 setiap tahun, yang berarti penyusutan linear
$$L(t) = 300.000.000 - 45.000.000\\,t.$$

Pertanyaan pemicunya: model mana yang lebih masuk akal setelah beberapa tahun, dan berapa lama nilai mobil menyusut menjadi setengah harga barunya?`,
    analysis: `Perhatikan bahwa pada tahun pertama kedua model memberi hasil yang sama, karena $15\\%$ dari Rp300.000.000 memang Rp45.000.000. Perbedaannya baru muncul setelah itu.

**Model eksponensial.** Setelah 5 tahun,
$$V(5) = 300.000.000 \\cdot (0{,}85)^{5} \\approx 300.000.000 \\cdot 0{,}4437 \\approx 133.111.000.$$
Jadi nilai jualnya masih sekitar **Rp133 juta**.

**Model linear.** Setelah 5 tahun,
$$L(5) = 300.000.000 - 5 \\cdot 45.000.000 = 75.000.000,$$
yaitu hanya **Rp75 juta**. Model linear menyusut terlalu cepat karena memotong jumlah rupiah yang tetap, padahal $15\\%$ dari mobil yang makin murah seharusnya makin kecil juga. Mobil bekas pada kenyataannya memang menyusut makin lambat, sehingga model eksponensial lebih jujur. Model linear bahkan menyatakan mobil bernilai nol pada $t = 300.000.000 / 45.000.000 \\approx 6{,}7$ tahun, yang jelas tidak realistis.

**Waktu paruh.** Waktu agar nilainya menjadi setengah harga awal, yaitu Rp150.000.000, dicari dari
$$300.000.000 \\cdot (0{,}85)^{t} = 150.000.000 \\iff (0{,}85)^{t} = 0{,}5.$$
Dengan logaritma,
$$t = \\frac{\\ln 0{,}5}{\\ln 0{,}85} \\approx \\frac{-0{,}6931}{-0{,}1625} \\approx 4{,}3 \\text{ tahun}.$$
Jadi dibutuhkan sekitar **4,3 tahun** agar nilai mobil turun menjadi setengah. Angka ini adalah waktu paruh penyusutan, sifat yang sama dengan peluruhan zat radioaktif, hanya namanya berbeda.`,
    takeaways: [
      'Penyusutan dengan persentase tetap bersifat multiplikatif, sehingga memakai peluruhan eksponensial, bukan pengurangan rupiah tetap.',
      'Klaim linear hanya cocok pada tahun pertama; setelah itu ia melebih-lebihkan penyusutan karena mengabaikan nilai yang makin kecil.',
      'Waktu paruh, sekitar 4,3 tahun, menyatakan lama waktu nilai turun menjadi setengah.',
      'Frasa "susut 15% per tahun" berarti faktor penyusutan $0{,}85$ tiap tahun.',
    ],
    reflection: [
      'Mengapa pada tahun pertama kedua model memberi angka yang sama, tetapi berbeda setelahnya?',
      'Jika laju penyusutan menjadi 20% per tahun, apakah waktu paruhnya lebih panjang atau lebih pendek?',
      'Data harga pasar apa yang kamu butuhkan sebelum mempercayai salah satu model?',
    ],
    source:
      'Skenario konstruksi dengan angka realistis: mobil baru lazim kehilangan sekitar 15 persen nilainya pada tahun pertama, lalu penyusutan melambat. Harga awal Rp300.000.000 dan laju 15 persen per tahun dipilih agar perhitungan mudah; bukan data penjualan satu merek tertentu.',
  },
  {
    id: 'penanggalan-karbon',
    title: 'Menaksir Usia Fosil dengan Karbon-14',
    category: 'pertumbuhan',
    element: 'aljabar-fungsi',
    grade: 'X',
    level: 'mahir',
    estimatedMinutes: 12,
    explorationId: 'logaritma-invers-grafik',
    tags: ['radiokarbon', 'waktu paruh', 'peluruhan eksponensial', 'logaritma', 'persamaan eksponen', 'karbon-14'],
    summary:
      'Menaksir usia bahan organik dari sisa karbon-14 memakai peluruhan eksponensial dan logaritma, beserta batas metodenya.',
    topicIds: ['persamaan-eksponen-logaritma', 'eksponen'],
    body: `Makhluk hidup terus menyerap karbon dari lingkungan sehingga kadar karbon-14 di tubuhnya tetap selama hidup. Setelah mati, karbon-14 itu meluruh dan tidak bertambah lagi. Peluruhan ini mengikuti waktu paruh, yaitu lama waktu agar separuh karbon-14 tersisa. Nilai yang diterima secara ilmiah untuk waktu paruh karbon-14 adalah sekitar **5.730 tahun**.

Jika sepotong kayu fosil mula-mula memiliki aktivitas karbon-14 sebesar $A_0$, maka setelah $t$ tahun aktivitasnya dimodelkan
$$A(t) = A_0 \\left(\\tfrac{1}{2}\\right)^{t/5730}.$$

Pertanyaan pemicunya: sebuah laboratorium mengukur bahwa kayu fosil hanya menyisakan $40\\%$ aktivitas karbon-14 dibanding kayu hidup. Berapa perkiraan usianya, dan seberapa jauh kita boleh mempercayai angka itu?`,
    analysis: `Kita selesaikan $A(t) = 0{,}4\\,A_0$:
$$\\left(\\tfrac{1}{2}\\right)^{t/5730} = 0{,}4.$$
Ambil logaritma pada kedua ruas:
$$\\frac{t}{5730}\\, \\ln\\!\\left(\\tfrac{1}{2}\\right) = \\ln(0{,}4) \\quad\\Longrightarrow\\quad t = 5730 \\cdot \\frac{\\ln 0{,}4}{\\ln 0{,}5}.$$
Karena $\\ln 0{,}4 \\approx -0{,}9163$ dan $\\ln 0{,}5 \\approx -0{,}6931$,
$$t \\approx 5730 \\cdot \\frac{-0{,}9163}{-0{,}6931} \\approx 5730 \\cdot 1{,}3219 \\approx 7.575 \\text{ tahun}.$$
Jadi perkiraan usianya sekitar **7.575 tahun**, yang biasanya dibulatkan menjadi sekitar 7.600 tahun. Perhatikan bahwa hasil ini adalah pembagian dua logaritma, sehingga basis logaritmanya bebas: memakai $\\log$ basis 10 memberi nilai yang sama karena faktor basis saling menghapus.

**Batas metode.** Penanggalan karbon-14 hanya andal sampai sekitar **50.000 tahun**, kira-kira sembilan sampai sepuluh waktu paruh. Setelah itu sisa karbon-14 terlalu sedikit untuk diukur dengan andal. Metode ini juga hanya berlaku untuk bahan yang pernah hidup seperti tulang, kayu, atau kain, bukan batuan. Karena kadar karbon-14 di atmosfer tidak selalu tetap, hasil usia mentah perlu dikalibrasi, misalnya dengan data lingkaran tahun pohon (dendrokronologi). Uji nuklir pada pertengahan abad ke-20 sempat menaikkan kadar karbon-14 di atmosfer sehingga bahan yang hidup setelahnya tampak lebih muda bila tidak dikoreksi.`,
    takeaways: [
      'Peluruhan karbon-14 bersifat eksponensial dengan waktu paruh sekitar 5.730 tahun.',
      'Logaritma mengubah pertanyaan "berapa lama" menjadi pembagian dua logaritma.',
      'Metode ini hanya andal sampai sekitar 50.000 tahun dan hanya untuk bahan organik.',
      'Kalibrasi dan pencemaran memengaruhi hasil, jadi angka usia selalu berupa taksiran.',
    ],
    reflection: [
      'Mengapa usia fosil dihitung dengan logaritma, bukan dengan membagi sisa aktivitas secara langsung?',
      'Apa yang terjadi pada ketelitian taksiran setelah sekitar sepuluh waktu paruh, dan mengapa?',
      'Faktor apa saja yang dapat membuat hasil penanggalan terlalu tua atau terlalu muda?',
    ],
    source:
      'Prinsip penanggalan radiokarbon dan nilai waktu paruh karbon-14 sekitar 5.730 tahun (konvensi Cambridge; nilai Libby yang lebih lama adalah 5.568 tahun) sesuai dengan literatur ilmiah yang lazim. Fraksi sisa 40 persen dan hasil sekitar 7.575 tahun adalah contoh hitungan untuk latihan, bukan pengukuran satu fosil tertentu.',
  },
];

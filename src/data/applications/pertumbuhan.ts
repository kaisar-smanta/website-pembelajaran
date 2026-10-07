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

Perhatikan bahwa eksponen $t/20$ menyatakan **banyak selang 20 menit** yang sudah berlangsung, bukan banyak menitnya langsung.

Pertanyaan pemicunya: setelah 3 jam, berapa banyak sel yang ada, dan mengapa hasilnya jauh melampaui dugaan awal kebanyakan orang?`,
    analysis: `Setelah 3 jam ($t = 180$ menit) terdapat $180/20 = 9$ selang waktu, sehingga
$$N(180) = 500 \\cdot 2^{9} = 500 \\cdot 512 = 256.000 \\text{ sel}.$$

Jika pertambahannya linear (bertambah jumlah tetap), hasilnya akan jauh lebih kecil. Model eksponensial menjelaskan mengapa pengendalian populasi mikroba harus dilakukan cepat. **Asumsi penting:** model ini mengandaikan ruang dan nutrisi tak terbatas; pada kenyataannya pertumbuhan melambat ketika sumber daya menipis, sehingga model eksponensial hanya akurat pada fase awal.`,
    takeaways: [
      'Populasi berlipat mengikuti rumus eksponensial, bukan pertambahan tetap.',
      'Model eksponensial hanya berlaku selama sumber daya masih berlimpah.',
    ],
    reflection: [
      'Mengapa hasil pertumbuhan eksponensial jauh melampaui pertumbuhan linear?',
      'Kapan model ini berhenti berlaku, dan faktor apa yang membuatnya melambat?',
    ],
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

Karena basis lebih kecil dari 1, tanda pertidaksamaan berbalik saat menyamakan eksponen, sehingga $t/4 > 4$ atau $t > 16$ jam. Pada $t = 16$ jam konsentrasinya tepat 5 mg/L. Ini contoh penting bahwa pada **peluruhan**, grafik menurun dan hubungan "lebih kecil dari" perlu kehati-hatian saat basisnya kurang dari satu.`,
    takeaways: [
      'Pada peluruhan, tanda pertidaksamaan berbalik saat basis kurang dari 1 disamakan.',
      'Waktu paruh menentukan seberapa cepat konsentrasi turun.',
    ],
    reflection: [
      'Mengapa tanda pertidaksamaan berbalik pada peluruhan dengan basis kurang dari 1?',
      'Bagaimana kamu menentukan kapan obat perlu diminum lagi?',
    ],
  },
  {
    id: 'pemodelan-penyebaran',
    title: 'Memodelkan Penyebaran Kasus di Awal Wabah',
    category: 'pertumbuhan',
    element: 'aljabar-fungsi',
    grade: 'XI',
    level: 'cakap',
    estimatedMinutes: 12,
    explorationId: 'eksponen-pertumbuhan',
    tags: ['pemodelan', 'eksponen', 'logaritma', 'wabah', 'pertumbuhan'],
    summary: 'Menyusun model eksponensial dari data awal lalu memperkirakan kapan ambang terlampaui.',
    topicIds: ['pemodelan-fungsi', 'fungsi-eksponensial', 'eksponen'],
    body: `Pada awal sebuah wabah tercatat **20 kasus**, dan jumlahnya berlipat sekitar **1,5 kali** setiap pekan. Bila pola ini berlanjut, banyak kasus setelah $t$ pekan dimodelkan
$$K(t) = 20 \\cdot (1{,}5)^{t}.$$

Model ini dibangun dari dua informasi: nilai awal (20) sebagai titik tolak, dan faktor pengali (1,5) sebagai laju pertumbuhan.

Pertanyaan pemicunya: pada pekan ke berapa jumlah kasus menembus **1.000**, dan seberapa jauh kita boleh mempercayai angka itu?`,
    analysis: `Selesaikan $20 \\cdot (1{,}5)^{t} = 1000$, yaitu $(1{,}5)^{t} = 50$. Dengan logaritma,
$$t = \\frac{\\log 50}{\\log 1{,}5} \\approx \\frac{3{,}912}{0{,}405} \\approx 9{,}7 \\text{ pekan}.$$

Jadi ambang itu dilewati sekitar **10 pekan** setelah pencatatan awal. **Asumsi penting:** model menganggap laju berlipat tetap. Pada kenyataannya jumlah penduduk yang belum terpapar berkurang sehingga pertumbuhan melambat — model eksponensial hanya akurat pada fase awal. Menyadari batas model ini adalah bagian inti dari pemodelan.`,
    takeaways: [
      'Logaritma dipakai untuk menyelesaikan persamaan eksponensial.',
      'Setiap model punya asumsi; mengenali batasnya sama penting dengan menghitung.',
    ],
    reflection: [
      'Mengapa prediksi model ini cepat melenceng setelah beberapa pekan?',
      'Informasi tambahan apa yang kamu butuhkan agar model lebih realistis?',
    ],
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

Menariknya, tingkat pertumbuhan riil **bukan** $4\\% - 3\\% = 1\\%$ per tahun, melainkan
$$\\frac{1{,}04}{1{,}03} - 1 \\approx 0{,}97\\% \\text{ per tahun}.$$

Dalam 10 tahun faktor pertumbuhan daya beli adalah $\\left(\\dfrac{1{,}04}{1{,}03}\\right)^{10} \\approx 1{,}1014$, yaitu tumbuh sekitar $10{,}14\\%$ — masih positif, tetapi jauh lebih kecil daripada kesan dari angka nominal. Kesimpulannya: yang menentukan kesejahteraan bukan angka di rekening, melainkan daya belinya.`,
    takeaways: [
      'Saldo nominal dan daya beli tumbuh dengan laju berbeda; inflasi menggerus keduanya secara eksponensial.',
      'Tingkat bunga riil bukan sekadar selisih bunga dan inflasi, melainkan hasil bagi $(1+bunga)/(1+inflasi)$.',
      'Keputusan menabung atau berinvestasi sebaiknya memakai daya beli, bukan angka nominal.',
    ],
    reflection: [
      'Jika bunga tabungan lebih kecil daripada inflasi, apa arti pertumbuhan saldo nominalmu?',
      'Mengapa selisih $4\\%$ dan $3\\%$ tidak sama dengan tingkat bunga riil?',
      'Data suku bunga dan inflasi apa yang perlu kamu cari sebelum memutuskan menyimpan uang?',
    ],
  },
];

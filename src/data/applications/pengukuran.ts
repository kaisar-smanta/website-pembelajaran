import type { Application } from '@/types/content';

export const pengukuranApplications: Application[] = [
  {
    id: 'pengukuran-tinggi-menara',
    title: 'Menaksir Tinggi Menara tanpa Memanjat',
    category: 'pengukuran',
    element: 'geometri',
    grade: 'X',
    level: 'dasar',
    estimatedMinutes: 8,
    explorationId: 'trigonometri-gelombang',
    tags: ['trigonometri', 'sudut elevasi', 'triangulasi', 'pengukuran', 'tangen'],
    summary: 'Menggunakan perbandingan trigonometri untuk mengukur tinggi objek dari jarak tertentu.',
    topicIds: ['trigonometri'],
    body: `Pada jarak **50 m** dari kaki sebuah menara, seorang pengamat mengukur sudut elevasi ke puncak menara sebesar **30°**. Tanah dianggap datar dan tinggi mata pengamat diabaikan.

Bagaimana menaksir tinggi menara $h$ hanya dari satu sudut dan satu jarak? Perbandingan tangen menghubungkan sudut dengan sisi depan dan sisi samping segitiga siku-siku:

$$\\tan 30^\\circ = \\frac{h}{50}.$$

Dengan menyusun ulang persamaan ini, tinggi menara dapat dihitung tanpa pernah memanjatnya.`,
    analysis: `Karena $\\tan 30^\\circ = \\dfrac{1}{\\sqrt{3}} \\approx 0{,}5774$, maka

$$h = 50 \\times \\tan 30^\\circ = \\frac{50}{\\sqrt{3}} \\approx 28{,}87 \\text{ m}.$$

Jadi tinggi menara sekitar **28,9 m**. Metode ini disebut **triangulasi** dan dipakai pada survei, navigasi, hingga pengukuran tinggi gunung. Hasilnya tetap bergantung pada asumsi: jika pengukuran dilakukan dari tempat yang lebih tinggi atau permukaan tanah tidak rata, diperlukan koreksi. Inilah sebabnya juru ukur mengukur beberapa sudut dari titik berbeda lalu membandingkan hasilnya.`,
    takeaways: [
      'Satu sudut dan satu jarak cukup untuk menaksir tinggi lewat tangen.',
      'Hasil pengukuran bergantung pada asumsi yang dipakai.',
    ],
    reflection: [
      'Asumsi apa yang paling mudah dilanggar saat mengukur di lapangan?',
      'Bagaimana koreksi dilakukan jika tinggi mata pengamat tidak diabaikan?',
    ],
    source:
      'Ilustrasi fiktif berdasarkan metode triangulasi juru ukur; angka dibuat agar mudah dihitung.',
  },
  {
    id: 'luas-juring-taman',
    title: 'Merancang Taman Berbentuk Juring',
    category: 'pengukuran',
    element: 'geometri',
    grade: 'XI',
    level: 'dasar',
    estimatedMinutes: 8,
    explorationId: 'lingkaran-eksplorasi',
    tags: ['lingkaran', 'juring', 'busur', 'luas', 'desain taman'],
    summary: 'Menghitung luas juring dan panjang busur untuk kebutuhan material.',
    topicIds: ['lingkaran', 'trigonometri'],
    body: `Sebuah taman berbentuk **juring lingkaran** dengan jari-jari 7 m dan sudut pusat 90°. Seluruh area juring akan ditanami rumput, sedangkan sisi lengkungnya akan dipagari. Berapa banyak rumput dan pagar yang harus disiapkan?

Bagian yang ditanami berbentuk juring, sedangkan pagar mengikuti busur. Keduanya sebanding dengan sudut pusat terhadap satu putaran penuh:

$$L = \\frac{\\theta}{360^\\circ} \\times \\pi r^{2}, \\qquad s = \\frac{\\theta}{360^\\circ} \\times 2\\pi r.$$`,
    analysis: `Dengan $\\theta = 90^\\circ$ dan $r = 7$ m (memakai $\\pi \\approx \\tfrac{22}{7}$), luas juring:

$$L = \\frac{90}{360} \\times \\frac{22}{7} \\times 7^{2} = \\frac{1}{4} \\times 154 = 38{,}5 \\text{ m}^2.$$

Panjang busur untuk pagar:

$$s = \\frac{90}{360} \\times 2 \\times \\frac{22}{7} \\times 7 = \\frac{1}{4} \\times 44 = 11 \\text{ m}.$$

Jadi dibutuhkan sekitar **38,5 m² rumput** dan **11 m pagar** untuk sisi lengkung. Perhatikan bahwa sisi lurus taman (dua jari-jari) tidak ikut dihitung sebagai busur, sehingga anggaran material memisahkan bagian lurus dan bagian lengkung.`,
    takeaways: [
      'Luas juring dan panjang busur sebanding dengan besar sudut pusat.',
      'Menghitung material berarti memisahkan bagian lurus dan bagian lengkung.',
    ],
    reflection: [
      'Bagaimana hasil berubah jika sudut juring diperbesar dua kali?',
      'Bagian taman mana yang paling mahal, dan mengapa?',
    ],
    source:
      'Ilustrasi fiktif perancangan taman berbentuk juring; ukuran dibuat agar mudah dihitung.',
  },
  {
    id: 'skala-logaritma',
    title: 'Skala Logaritma: Mengukur Gempa dan Keasaman',
    category: 'pengukuran',
    element: 'bilangan',
    grade: 'X',
    level: 'cakap',
    estimatedMinutes: 11,
    explorationId: 'fungsi-eksponensial-grafik',
    tags: ['logaritma', 'skala richter', 'pH', 'gempa', 'skala logaritma'],
    summary: 'Menggunakan logaritma untuk menafsirkan skala kekuatan gempa dan pH.',
    topicIds: ['persamaan-eksponen-logaritma', 'eksponen', 'fungsi-eksponensial'],
    body: `Sebagian besaran memiliki jangkauan yang sangat lebar sehingga diukur dengan skala logaritma. Kekuatan gempa dinyatakan $M = \\log_{10}\\!\\left(\\dfrac{A}{A_0}\\right)$, sedangkan keasaman larutan dinyatakan $\\mathrm{pH} = -\\log_{10}[\\mathrm{H}^{+}]$.

Mengapa gempa bermagnitudo $7$ jauh lebih dahsyat daripada magnitudo $5$, padahal angkanya hanya berbeda dua? Dan mengapa larutan dengan $\\mathrm{pH}$ satu satuan lebih rendah bisa jauh lebih asam? Kunci jawabannya ada pada sifat logaritma yang memampatkan rentang besar menjadi angka kecil.`,
    analysis: `**Gempa.** Selisih satu satuan Richter berarti amplitudo $10$ kali lebih besar. Gempa bermagnitudo $7$ memiliki amplitudo $10^{7-5} = 10^{2} = 100$ kali gempa bermagnitudo $5$. Karena energi sebanding dengan $10^{1{,}5M}$, selisih dua satuan magnitudo menaikkan energi sekitar $10^{3} = 1000$ kali — kenaikan yang terasa kecil pada angka, tetapi sangat besar pada kenyataan.

**pH.** Larutan dengan $\\mathrm{pH}=3$ memiliki konsentrasi ion $\\mathrm{H}^{+}$ sebesar $10^{-3}$ M, sedangkan $\\mathrm{pH}=5$ sebesar $10^{-5}$ M. Selisih dua satuan pH berarti konsentrasinya **100 kali** berbeda. Skala logaritma memampatkan rentang raksasa menjadi angka yang mudah dibaca, tetapi justru menyembunyikan besarnya perbedaan jika hanya angka yang dilihat sekilas.`,
    takeaways: [
      'Selisih satu satuan pada skala logaritma berarti perbedaan kelipatan sepuluh.',
      'Skala logaritma memampatkan rentang besar agar mudah dibaca.',
    ],
    reflection: [
      'Mengapa kenaikan satu angka pada skala Richter terasa jauh lebih dahsyat daripada kelihatannya?',
      'Sebutkan besaran lain yang cocok diukur dengan skala logaritma.',
    ],
    source:
      'Data ilustratif berdasarkan skala Richter dan skala pH; angka dibulatkan untuk pembelajaran.',
  },
  {
    id: 'lintasan-bola',
    title: 'Lintasan Bola: Kapan Mencapai Tinggi Maksimum?',
    category: 'pengukuran',
    element: 'aljabar-fungsi',
    grade: 'X',
    level: 'cakap',
    estimatedMinutes: 10,
    explorationId: 'kuadrat-parameter',
    tags: ['fungsi kuadrat', 'parabola', 'titik puncak', 'lintasan', 'pemodelan'],
    summary: 'Menentukan waktu dan tinggi maksimum lintasan bola dengan titik puncak fungsi kuadrat.',
    topicIds: ['fungsi-kuadrat', 'pemodelan-fungsi'],
    body: `Sebuah tendangan bebas melambungkan bola. Tinggi bola (dalam meter) setelah $t$ detik dimodelkan oleh fungsi kuadrat

$$h(t) = -5t^{2} + 20t + 1.$$

Kapan bola berada di titik tertinggi, dan berapa tinggi maksimumnya? Karena lintasannya berbentuk parabola yang membuka ke bawah, titik tertinggi tepat berada di **titik puncak**. Model ini mengabaikan hambatan udara, jadi hanya berlaku selama bola masih di udara.`,
    analysis: `Koefisien $t^{2}$ bernilai negatif, sehingga grafik membuka ke bawah dan puncaknya adalah nilai maksimum. Waktu saat mencapai puncak:

$$t = -\\frac{b}{2a} = -\\frac{20}{2 \\cdot (-5)} = 2 \\text{ detik}.$$

Substitusi $t = 2$ ke model:

$$h(2) = -5(2)^{2} + 20(2) + 1 = -20 + 40 + 1 = 21 \\text{ m}.$$

Jadi bola mencapai tinggi maksimum **21 m** pada detik ke-**2**. Setelah itu bola mulai turun. Bola kembali menyentuh tanah ketika $h(t) = 0$, yaitu $t \\approx 4{,}05$ detik. Titik puncak memberi dua informasi sekaligus — kapan dan setinggi apa — sehingga jauh lebih cepat daripada menguji satu per satu nilai $t$.`,
    takeaways: [
      'Titik puncak parabola $y = ax^{2} + bx + c$ terjadi pada $x = -\\dfrac{b}{2a}$.',
      'Tanda koefisien $a$ menentukan arah bukaan lintasan.',
      'Model matematika tetap dibatasi asumsi, seperti pengabaian hambatan udara.',
    ],
    reflection: [
      'Apa arti fisis dari angka $1$ pada model $h(t)$?',
      'Bagaimana bentuk parabola berubah jika tendangan lebih kuat?',
      'Pada detik ke berapa bola menyentuh tanah, dan bagaimana kamu menghitungnya?',
    ],
    source:
      'Ilustrasi fiktif lintasan gerak peluru; angka dibuat agar mudah dihitung.',
  },
  {
    id: 'transformasi-matriks',
    title: 'Menggeser dan Memutar Bentuk dengan Matriks',
    category: 'pengukuran',
    element: 'aljabar-fungsi',
    grade: 'XI',
    level: 'mahir',
    estimatedMinutes: 12,
    explorationId: 'matriks-transformasi',
    tags: ['matriks', 'transformasi geometri', 'pencerminan', 'rotasi', 'determinan'],
    summary: 'Menerapkan matriks transformasi pada koordinat bangun dan menaksir perubahan luasnya.',
    topicIds: ['matriks'],
    body: `Sebuah motif berbentuk segitiga memiliki titik sudut $A(1,1)$, $B(3,1)$, dan $C(1,2)$ pada bidang koordinat. Motif itu akan dicerminkan terhadap sumbu-$x$ dan juga diputar $90^\\circ$ berlawanan arah jarum jam. Kedua operasi ini dapat ditulis sebagai matriks:

$$R = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}, \\qquad P = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}.$$

Bagaimana menentukan koordinat bayangan setiap titik, dan apakah luas segitiga berubah setelah ditransformasi?`,
    analysis: `Bayangan sebuah titik diperoleh dengan mengalikan matriks ke vektor kolom koordinatnya. Untuk titik $A(1,1)$:

$$R \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}, \\qquad P \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} -1 \\\\ 1 \\end{pmatrix}.$$

Melanjutkan cara yang sama, pencerminan memberi $A'(1,-1)$, $B'(3,-1)$, $C'(1,-2)$, sedangkan pemutaran memberi $A''(-1,1)$, $B''(-1,3)$, $C''(-2,1)$.

Determinan mengungkap sifat tiap transformasi. Untuk $R$, $\\det R = 1 \\cdot (-1) - 0 \\cdot 0 = -1$; untuk $P$, $\\det P = 0 \\cdot 0 - (-1)(1) = 1$. Nilai mutlak determinan yang sama dengan $1$ berarti **luas segitiga tidak berubah** pada kedua transformasi. Namun $\\det R$ bertanda negatif, menandakan orientasi bangun terbalik karena pencerminan, sedangkan $\\det P$ positif sehingga pemutaran mempertahankan orientasi.`,
    takeaways: [
      'Pencerminan dan pemutaran pada bidang dapat dinyatakan sebagai perkalian matriks.',
      'Nilai mutlak determinan adalah faktor pengali luas bangun.',
      'Determinan negatif menandakan orientasi bangun terbalik.',
    ],
    reflection: [
      'Mengapa pemutaran lalu pencerminan dapat memberi hasil berbeda dari urutan sebaliknya?',
      'Transformasi seperti apa yang akan mengubah luas bangun, dan bergantung pada besaran apa?',
    ],
    source:
      'Ilustrasi fiktif berdasarkan transformasi pada grafika komputer; koordinat dibuat agar mudah dihitung.',
  },
  {
    id: 'peta-dan-skala',
    title: 'Peta, Skala, dan Transformasi Grafik',
    category: 'pengukuran',
    element: 'aljabar-fungsi',
    grade: 'XI',
    level: 'cakap',
    estimatedMinutes: 12,
    explorationId: 'transformasi-fungsi-sim',
    tags: ['skala', 'peta', 'transformasi fungsi', 'translasi', 'dilatasi'],
    summary: 'Menghitung jarak sebenarnya dari skala peta dan memodelkan perubahan gambarnya sebagai transformasi fungsi.',
    topicIds: ['transformasi-fungsi', 'lingkaran'],
    body: `Peta desa digambar dengan skala **1 : 20.000**, artinya $1 \\text{ cm}$ pada peta mewakili $200 \\text{ m}$ di lapangan. Dua lokasi terletak di $A(0,0)$ dan $B(3,4)$ dengan satuan sentimeter pada peta.

Berapa jarak sebenarnya kedua lokasi? Ketika peta diperbesar dan titik acuannya digeser, bagaimana persamaan sebuah jalan yang semula berbentuk $y = x^{2}$ berubah? Memperbesar peta adalah **dilatasi**, sedangkan menggeser acuan adalah **translasi** — dua transformasi yang dapat dipelajari langsung melalui fungsi.`,
    analysis: `Jarak pada peta dihitung dengan rumus jarak:

$$AB = \\sqrt{3^{2} + 4^{2}} = \\sqrt{25} = 5 \\text{ cm}.$$

Skala $1 : 20.000$ berarti setiap $1 \\text{ cm}$ mewakili $20.000 \\text{ cm} = 200 \\text{ m}$, sehingga jarak sebenarnya:

$$5 \\times 200 = 1000 \\text{ m} = 1 \\text{ km}.$$

Peta itu juga menampilkan danau berbentuk lingkaran berjari-jari $2 \\text{ cm}$. Jari-jari sebenarnya $2 \\times 200 = 400 \\text{ m}$, sehingga luasnya $L = \\pi r^{2} = 3{,}14 \\times 400^{2} = 502.400 \\text{ m}^{2} \\approx 0{,}50 \\text{ km}^{2}$. Luas berubah mengikuti **kuadrat** faktor skala, bukan sekadar dikalikan faktor skala.

Untuk jalan $y = x^{2}$, andaikan peta diperbesar dua kali lalu acuannya digeser sehingga koordinat baru memenuhi $X = 2x + 1$ dan $Y = 2y + 3$. Maka $x = \\dfrac{X-1}{2}$ dan $y = \\dfrac{Y-3}{2}$, sehingga

$$\\frac{Y-3}{2} = \\left(\\frac{X-1}{2}\\right)^{2} = \\frac{(X-1)^{2}}{4} \\quad \\Rightarrow \\quad Y = \\frac{1}{2}(X-1)^{2} + 3.$$

Bentuk akhirnya adalah $Y = a\\,f(X-h)+k$ dengan $a = \\frac{1}{2}$, $h = 1$, dan $k = 3$. Faktor $a$ berasal dari perubahan skala, sedangkan $h$ dan $k$ adalah pergeseran titik acuan peta.`,
    takeaways: [
      'Skala peta adalah faktor pengali yang mengubah jarak gambar menjadi jarak sebenarnya.',
      'Memperbesar peta adalah dilatasi, sedangkan menggeser acuan adalah translasi.',
      'Bentuk $y = a\\,f(x-h)+k$ memisahkan pengaruh skala dan pergeseran.',
    ],
    reflection: [
      'Apa yang terjadi pada jarak sebenarnya jika skala diubah menjadi 1 : 40.000?',
      'Bagaimana menentukan persamaan jalan jika peta diputar, bukan hanya digeser?',
    ],
    source:
      'Ilustrasi fiktif pengukuran peta berskala; jarak dan skala dibuat agar mudah dihitung.',
  },
  {
    id: 'tgeo-motif-batik',
    title: 'Menata Motif Batik dengan Komposisi Transformasi',
    category: 'pengukuran',
    element: 'geometri',
    grade: 'XII',
    level: 'cakap',
    estimatedMinutes: 11,
    explorationId: 'matriks-transformasi',
    tags: ['transformasi geometri', 'rotasi', 'dilatasi', 'komposisi', 'motif'],
    summary:
      'Menggabungkan rotasi dan dilatasi menjadi satu matriks untuk menata motif pada bidang koordinat.',
    topicIds: ['transformasi-geometri', 'matriks'],
    body: `Sebuah motif batik diawali dari segitiga dengan titik sudut $A(1,1)$, $B(3,1)$, dan $C(1,2)$. Untuk membuat variasi, motif itu diputar $90^\\circ$ berlawanan arah jarum jam terhadap titik asal, lalu diperbesar dua kali dari titik asal.

Bagaimana menentukan koordinat bayangan ketiga titik, dan berapa luas segitiga hasilnya? Alih-alih mengerjakan dua langkah terpisah, kedua transformasi dapat digabung menjadi satu matriks, sehingga penggandaan motif pada kain tidak perlu menghitung titik demi titik.`,
    analysis: `Matriks rotasi $90^\\circ$ berlawanan arah jarum jam dan matriks dilatasi faktor $2$ adalah
$$R = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}, \\qquad S = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}.$$
Karena rotasi dikerjakan lebih dulu, matriks gabungannya
$$SR = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & -2 \\\\ 2 & 0 \\end{pmatrix}.$$
Menerapkannya pada tiap titik:
$$A(1,1) \\to (-2,2),\\quad B(3,1) \\to (-2,6),\\quad C(1,2) \\to (-4,2).$$
Luas segitiga awal
$$L = \\frac{1}{2}\\left| (3-1)(2-1) - (1-1)(1-1) \\right| = 1.$$
Karena $\\lvert\\det(SR)\\rvert = \\lvert 0 \\cdot 0 - (-2)(2)\\rvert = 4$, luas segitiga hasil adalah $4 \\times 1 = 4$ satuan luas. Hasil ini dapat diperiksa dengan rumus luas pada titik bayangan $(-2,2)$, $(-2,6)$, $(-4,2)$ yang memberi nilai yang sama. Determinan positif menunjukkan orientasi bangun tetap, karena rotasi dan dilatasi tidak membalik arah seperti pencerminan.`,
    takeaways: [
      'Rotasi dan dilatasi terhadap titik asal dapat digabung menjadi satu matriks $2 \\times 2$.',
      'Urutan perkalian penting: $SR$ berarti rotasi dahulu, baru dilatasi.',
      'Nilai mutlak determinan adalah faktor pengali luas bangun.',
      'Determinan positif menandakan orientasi bangun tidak terbalik.',
    ],
    reflection: [
      'Bagaimana hasilnya berbeda bila dilatasi dikerjakan sebelum rotasi?',
      'Transformasi mana yang mengubah luas, dan seberapa besar pengaruhnya?',
      'Mengapa penggandaan motif lebih efisien memakai matriks gabungan?',
    ],
    source:
      'Ilustrasi fiktif penataan motif pada bidang koordinat; koordinat dibuat agar mudah dihitung.',
  },
  {
    id: 'ktk-optimasi-pagar-taman',
    title: 'Merancang Taman: Luas Terbesar dengan Pagar Terbatas',
    category: 'pengukuran',
    element: 'aljabar-fungsi',
    grade: 'X',
    level: 'cakap',
    estimatedMinutes: 12,
    explorationId: 'kuadrat-parameter',
    tags: ['ketaksamaan', 'AM-GM', 'optimasi', 'luas maksimum', 'desain'],
    summary:
      'Memakai ketaksamaan AM-GM untuk menentukan ukuran taman dengan luas terbesar pada panjang pagar yang tetap.',
    topicIds: ['ketaksamaan', 'fungsi-kuadrat', 'sistem-pertidaksamaan'],
    body: `Panitia lingkungan memiliki pagar sepanjang **40 m** untuk memagari taman berbentuk persegi panjang. Salah satu sisi taman menempel pada dinding yang sudah ada, sehingga pagar hanya dipasang pada **tiga sisi**. Sementara itu, dana yang tersedia adalah **Rp6.000.000**, dan harga pagar **Rp150.000 per meter**, tepat cukup untuk 40 m.

Pertanyaan pemicunya: berapa ukuran taman agar **luasnya maksimum**, dan berapa luas maksimum itu? Menariknya, ketaksamaan **AM-GM** menjawabnya tanpa perlu menggambar grafik.`,
    analysis: `Misalkan sisi taman yang tegak lurus dinding berukuran $x$ meter (ada dua sisi) dan sisi yang sejajar dinding berukuran $y$ meter (ada satu sisi). Panjang pagar yang tersedia memberi kendala
$$2x + y = 40, \\qquad x > 0,\\ y > 0,$$
sedangkan luas taman adalah $L = xy$. Kita ingin memaksimalkan $xy$.

Terapkan ketaksamaan **AM-GM** pada bilangan positif $2x$ dan $y$:
$$\\frac{2x + y}{2} \\ge \\sqrt{(2x)(y)}.$$
Karena $2x + y = 40$, maka
$$20 \\ge \\sqrt{2xy} \\quad\\Longrightarrow\\quad 400 \\ge 2xy \\quad\\Longrightarrow\\quad xy \\le 200.$$
Jadi luas taman tidak pernah melebihi $200\\ \\text{m}^2$.

Kesamaan AM-GM tercapai ketika kedua bilangan sama, yaitu $2x = y$. Gabungkan dengan kendala:
$$2x + y = 40 \\Rightarrow 2x + 2x = 40 \\Rightarrow x = 10,\\quad y = 20.$$
Ukuran optimal adalah $10\\ \\text{m} \\times 20\\ \\text{m}$ dengan luas maksimum $L = 10 \\times 20 = 200\\ \\text{m}^2$.

Cara ini menghemat langkah dibandingkan memeriksa satu per satu nilai $x$. Perhatikan juga bahwa $x = 5$ memberi luas $5 \\times 30 = 150\\ \\text{m}^2$ dan $x = 15$ memberi $15 \\times 10 = 150\\ \\text{m}^2$ — keduanya sama-sama di bawah $200\\ \\text{m}^2$. Anggaran yang terbatas justru memaksa kita memilih proporsi yang paling efisien.`,
    takeaways: [
      'AM-GM mengubah masalah optimasi menjadi penentuan syarat kesamaan.',
      'Kesamaan AM-GM tercapai saat suku-suku yang dibandingkan sama besar.',
      'Batasan sumber daya (panjang pagar) tidak menghalangi nilai optimum, asalkan proporsinya tepat.',
    ],
    reflection: [
      'Mengapa kesamaan AM-GM menuntut $2x = y$, bukan $x = y$?',
      'Bagaimana hasilnya berubah jika pagar dipasang pada keempat sisi dengan panjang total 40 m?',
      'Sebutkan satu situasi lain yang dapat dioptimalkan dengan pola yang sama.',
    ],
    source:
      'Ilustrasi fiktif desain taman dengan pagar terbatas; ukuran dan harga dibuat agar mudah dihitung.',
  },
];

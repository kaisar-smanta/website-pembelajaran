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
  },
];

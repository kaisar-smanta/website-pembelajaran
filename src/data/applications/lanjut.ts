import type { Application } from '@/types/content';

/**
 * Studi kasus Matematika Tingkat Lanjut (Fase F): penerapan polinomial,
 * transformasi, trigonometri lanjut, vektor, irisan kerucut, turunan, integral,
 * dan variabel acak diskret.
 */
export const lanjutApplications: Application[] = [
  {
    id: 'mtl-optimasi-produksi',
    title: 'Menekan Biaya Produksi dengan Turunan',
    category: 'keuangan',
    subject: 'matematika-lanjut',
    element: 'kalkulus',
    grade: 'XII',
    level: 'mahir',
    estimatedMinutes: 12,
    tags: ['optimasi', 'turunan', 'biaya', 'produksi'],
    summary:
      'Mencari banyak produksi yang meminimumkan biaya rata-rata menggunakan turunan.',
    topicIds: ['aplikasi-turunan', 'turunan', 'polinomial'],
    body: `Sebuah usaha kecil memproduksi $x$ lusin kue per hari. Total biaya harian (dalam ribuan rupiah) dimodelkan
$$C(x) = 2x^{2} + 40x + 800,\\qquad x > 0.$$
Manajer ingin mengetahui berapa lusin yang sebaiknya diproduksi agar **biaya rata-rata per lusin** $\\bar{C}(x) = \\dfrac{C(x)}{x}$ paling kecil.`,
    analysis: `Tulis $\\bar{C}(x) = 2x + 40 + \\dfrac{800}{x}$. Turunannya
$$\\bar{C}'(x) = 2 - \\frac{800}{x^{2}}.$$
Titik stasioner ketika $2 - \\dfrac{800}{x^{2}} = 0$, yaitu $x^{2} = 400$ sehingga $x = 20$ (nilai positif). Uji turunan kedua
$$\\bar{C}''(x) = \\frac{1600}{x^{3}} > 0,$$
jadi $x = 20$ memberi minimum. Biaya rata-rata minimum adalah $\\bar{C}(20) = 2(20) + 40 + \\dfrac{800}{20} = 120$ ribu rupiah per lusin.`,
    takeaways: [
      'Turunan mengubah masalah optimasi menjadi persamaan $\\bar{C}\'(x)=0$.',
      'Uji turunan kedua memastikan jenis titik stasioner (minimum/maksimum).',
      'Model biaya rata-rata $2x + 40 + 800/x$ menggabungkan biaya variabel dan tetap.',
    ],
    reflection: [
      'Apa yang terjadi pada biaya rata-rata bila produksi terlalu kecil?',
      'Mengapa solusi negatif dari persamaan kuadrat diabaikan di sini?',
    ],
  },
  {
    id: 'mtl-gerak-kecepatan',
    title: 'Kecepatan Sesaat pada Gerak Peluru',
    category: 'pertumbuhan',
    subject: 'matematika-lanjut',
    element: 'kalkulus',
    grade: 'XII',
    level: 'cakap',
    estimatedMinutes: 10,
    tags: ['kecepatan sesaat', 'turunan', 'gerak'],
    summary: 'Menghitung kecepatan sesaat dari fungsi posisi memakai turunan.',
    topicIds: ['aplikasi-turunan', 'integral'],
    body: `Posisi sebuah bola yang dilempar vertikal (dalam meter) mengikuti
$$s(t) = 20t - 5t^{2}.$$
Berapa kecepatan sesaat bola pada $t = 1$ detik dan $t = 3$ detik? Kapan bola berhenti sesaat?`,
    analysis: `Kecepatan adalah turunan posisi: $v(t) = s'(t) = 20 - 10t$ (m/detik).
Pada $t = 1$: $v(1) = 10$ m/detik. Pada $t = 3$: $v(3) = -10$ m/detik, artinya bola bergerak turun.
Bola berhenti sesaat ketika $v(t) = 0$, yaitu $20 - 10t = 0 \\Rightarrow t = 2$ detik.`,
    takeaways: [
      'Kecepatan sesaat = turunan pertama fungsi posisi.',
      'Tanda kecepatan menunjukkan arah gerak.',
      'Titik balik gerak terjadi saat kecepatan nol.',
    ],
    reflection: ['Bagaimana menentukan percepatan dari fungsi posisi?'],
  },
  {
    id: 'mtl-transformasi-citra',
    title: 'Transformasi Citra Digital dengan Matriks',
    category: 'pengukuran',
    subject: 'matematika-lanjut',
    element: 'aljabar-fungsi',
    grade: 'XI',
    level: 'cakap',
    estimatedMinutes: 10,
    tags: ['transformasi', 'matriks', 'rotasi', 'grafika'],
    summary: 'Menggunakan matriks rotasi danrefleksi untuk memindahkan titik pada bidang.',
    topicIds: ['matriks-transformasi'],
    body: `Sebuah titik sudut logo berada di $P(4, 2)$. Untuk menyesuaikan tata letak, citra diputar $90^\\circ$ berlawanan arah jarum jam terhadap titik asal, lalu dicerminkan terhadap sumbu-$x$.
Nyatakan hasil akhirnya sebagai matriks transformasi tunggal dan tentukan koordinat bayangannya.`,
    analysis: `Matriks rotasi $90^\\circ$: $R = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$.
Matriks refleksi terhadap sumbu-$x$: $M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$.
Komposisi "putar lalu cermin" adalah
$$M R = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}.$$
Maka
$$\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}\\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ -4 \\end{pmatrix}.$$
Bayangannya adalah $(-2, -4)$.`,
    takeaways: [
      'Komposisi transformasi sepadan dengan perkalian matriks.',
      'Urutan perkalian penting karena matriks tidak komutatif.',
      'Satu matriks tunggal dapat mewakili rangkaian transformasi.',
    ],
    reflection: ['Bagaimana hasilnya berbeda bila pencerminan dilakukan lebih dulu?'],
  },
  {
    id: 'mtl-navigasi-vektor',
    title: 'Navigasi Kapal dengan Vektor',
    category: 'pengukuran',
    subject: 'matematika-lanjut',
    element: 'geometri',
    grade: 'XI',
    level: 'cakap',
    estimatedMinutes: 10,
    tags: ['vektor', 'navigasi', 'resultan'],
    summary: 'Menentukan arah dan besar perpindahan resultan kapal dengan penjumlahan vektor.',
    topicIds: ['vektor', 'trigonometri-lanjut'],
    body: `Sebuah kapal bergerak $\\vec{a} = (30, 40)$ km (satuan dianggap sama) lalu berbelok dan bergerak $\\vec{b} = (20, -10)$ km.
Tentukan perpindahan total kapal dan besar perpindahannya.`,
    analysis: `Perpindahan total $\\vec{r} = \\vec{a} + \\vec{b} = (30+20,\\ 40-10) = (50, 30)$ km.
Besarnya
$$\\lvert\\vec{r}\\rvert = \\sqrt{50^{2} + 30^{2}} = \\sqrt{2500 + 900} = \\sqrt{3400} = 10\\sqrt{34}\\approx 58{,}3\\ \\text{km}.$$`,
    takeaways: [
      'Perpindahan resultan diperoleh dengan menjumlahkan komponen vektor.',
      'Besar perpindahan dihitung dengan teorema Pythagoras komponen.',
    ],
    reflection: ['Bagaimana menentukan arah perpindahan resultan terhadap sumbu-$x$?'],
  },
  {
    id: 'mtl-antena-elips',
    title: 'Antena Parabolik dan Sifat Elips',
    category: 'pengukuran',
    subject: 'matematika-lanjut',
    element: 'geometri',
    grade: 'XI',
    level: 'dasar',
    estimatedMinutes: 9,
    tags: ['elips', 'irisan kerucut', 'fokus', 'reflektor'],
    summary: 'Membaca unsur elips (fokus dan sumbu) pada desain penampang reflector.',
    topicIds: ['irisan-kerucut'],
    body: `Penampang sebuah lensa berbentuk elips
$$\\frac{x^{2}}{169} + \\frac{y^{2}}{25} = 1.$$
Tentukan panjang sumbu mayor, sumbu minor, dan jarak titik fokus dari pusat.`,
    analysis: `Karena $a^{2} = 169$ dan $b^{2} = 25$, diperoleh $a = 13$ dan $b = 5$.
Sumbu mayor $= 2a = 26$ dan sumbu minor $= 2b = 10$.
Jarak fokus $c = \\sqrt{a^{2}-b^{2}} = \\sqrt{169-25} = \\sqrt{144} = 12$.
Jadi fokusnya di $(-12, 0)$ dan $(12, 0)$.`,
    takeaways: [
      'Untuk elips horizontal, $a^{2}$ menyertai suku $x$.',
      'Hubungan unsur elips: $c^{2} = a^{2} - b^{2}$.',
      'Eksentrisitas $e = c/a = 12/13$ mengukur "kepipihan" elips.',
    ],
    reflection: ['Mengapa reflector dirancang dengan sifat fokus?'],
  },
  {
    id: 'mtl-ekspektasi-risiko',
    title: 'Ekspektasi dan Risiko dalam Keputusan',
    category: 'data',
    subject: 'matematika-lanjut',
    element: 'data-peluang',
    grade: 'XII',
    level: 'mahir',
    estimatedMinutes: 12,
    tags: ['variabel acak', 'ekspektasi', 'risiko', 'data'],
    summary: 'Menghitung nilai harapan dan simpangan baku untuk menimbang risiko.',
    topicIds: ['variabel-acak-diskret'],
    body: `Sebuah usaha memperkirakan laba harian $X$ (dalam juta rupiah) dengan distribusi
$$P(X=0)=0{,}2,\\quad P(X=2)=0{,}5,\\quad P(X=5)=0{,}3.$$
Hitung nilai harapan laba dan simpangan bakunya, lalu tafsirkan.`,
    analysis: `Nilai harapan
$$E(X) = 0(0{,}2) + 2(0{,}5) + 5(0{,}3) = 2{,}5\\ \\text{juta}.$$
Untuk varians:
$$E(X^{2}) = 0^{2}(0{,}2) + 2^{2}(0{,}5) + 5^{2}(0{,}3) = 2 + 7{,}5 = 9{,}5.$$
$$\\operatorname{Var}(X) = E(X^{2}) - [E(X)]^{2} = 9{,}5 - 6{,}25 = 3{,}25.$$
Simpangan baku $\\sigma = \\sqrt{3{,}25} \\approx 1{,}80$ juta rupiah.
Artinya laba rata-rata jangka panjang sekitar $2{,}5$ juta dengan ketersebaran sekitar $1{,}8$ juta.`,
    takeaways: [
      'Nilai harapan adalah rata-rata berbobot peluang.',
      'Varians dan simpangan baku mengukur risiko/ketersebaran.',
      'Identitas $\\operatorname{Var}(X) = E(X^{2}) - [E(X)]^{2}$ memudahkan perhitungan.',
    ],
    reflection: ['Bagaimana keputusan berubah bila simpangan baku lebih besar?'],
  },
];

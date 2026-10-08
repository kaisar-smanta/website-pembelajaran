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
Manajer ingin mengetahui berapa lusin yang sebaiknya diproduksi agar **biaya rata-rata per lusin** $\\bar{C}(x) = \\dfrac{C(x)}{x}$ paling kecil.

Biaya tetap sebesar $800$ ribu rupiah harus ditanggung berapa pun jumlah produksi, sehingga memproduksi lebih banyak dapat menekan bagian biaya tetap per unit. Namun biaya variabel $2x^{2} + 40x$ justru tumbuh makin cepat. Keputusan ini menuntut keseimbangan, dan turunan menjadi alat untuk menemukan titik seimbang tersebut.`,
    analysis: `Tulis $\\bar{C}(x) = 2x + 40 + \\dfrac{800}{x}$. Turunannya
$$\\bar{C}'(x) = 2 - \\frac{800}{x^{2}}.$$
Titik stasioner ketika $2 - \\dfrac{800}{x^{2}} = 0$, yaitu $x^{2} = 400$ sehingga $x = 20$ (nilai positif). Uji turunan kedua
$$\\bar{C}''(x) = \\frac{1600}{x^{3}} > 0,$$
jadi $x = 20$ memberi minimum. Biaya rata-rata minimum adalah $\\bar{C}(20) = 2(20) + 40 + \\dfrac{800}{20} = 120$ ribu rupiah per lusin.

Perilaku model menjelaskan mengapa nilai itu muncul. Untuk $x$ kecil, suku $\\dfrac{800}{x}$ mendominasi sehingga biaya rata-rata tinggi; untuk $x$ besar, suku $2x$ yang mendominasi sehingga biaya rata-rata kembali naik. Titik $x = 20$ adalah titik seimbang di antara kedua pengaruh itu. Karena $x$ harus positif, solusi negatif dari persamaan kuadrat diabaikan, dan hasilnya dapat disesuaikan dengan kapasitas produksi nyata.`,
    takeaways: [
      'Turunan mengubah masalah optimasi menjadi persamaan $\\bar{C}\'(x)=0$.',
      'Uji turunan kedua memastikan jenis titik stasioner (minimum/maksimum).',
      'Model biaya rata-rata $2x + 40 + 800/x$ menggabungkan biaya variabel dan tetap.',
      'Kesimpulan model tetap perlu disesuaikan dengan batas kapasitas dan kelayakan produksi.',
    ],
    reflection: [
      'Apa yang terjadi pada biaya rata-rata bila produksi terlalu kecil?',
      'Mengapa solusi negatif dari persamaan kuadrat diabaikan di sini?',
      'Bagaimana kesimpulan berubah bila biaya tetap naik dua kali lipat?',
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
Berapa kecepatan sesaat bola pada $t = 1$ detik dan $t = 3$ detik? Kapan bola berhenti sesaat?

Model ini mengabaikan hambatan udara dan menganggap percepatan gravitasi tetap, sehingga posisi berupa fungsi kuadrat terhadap waktu. Kecepatan diperoleh dari turunan posisi, sedangkan percepatan adalah turunan berikutnya — inilah inti penggunaan kalkulus pada gerak.`,
    analysis: `Kecepatan adalah turunan posisi: $v(t) = s'(t) = 20 - 10t$ (m/detik).
Pada $t = 1$: $v(1) = 10$ m/detik. Pada $t = 3$: $v(3) = -10$ m/detik, artinya bola bergerak turun.
Bola berhenti sesaat ketika $v(t) = 0$, yaitu $20 - 10t = 0 \\Rightarrow t = 2$ detik.

Percepatan adalah turunan kecepatan, $a(t) = v'(t) = -10$ m/detik$^{2}$, yang bernilai tetap dan negatif ke bawah. Tanda kecepatan memberi arah gerak, sedangkan besar kecepatan menunjukkan seberapa cepat posisi berubah. Dengan mengintegralkan kecepatan dari $t = 0$ sampai $t = 2$ kita juga dapat memperoleh ketinggian maksimum, yaitu $\\displaystyle\\int_{0}^{2}(20 - 10t)\\,dt = \\left[20t - 5t^{2}\\right]_{0}^{2} = 20$ m.`,
    takeaways: [
      'Kecepatan sesaat = turunan pertama fungsi posisi.',
      'Tanda kecepatan menunjukkan arah gerak.',
      'Titik balik gerak terjadi saat kecepatan nol.',
      'Percepatan tetap memberi grafik posisi berbentuk parabola.',
    ],
    reflection: [
      'Bagaimana menentukan percepatan dari fungsi posisi?',
      'Apa makna fisis dari kecepatan bernilai nol pada $t = 2$?',
      'Mengapa tinggi maksimum dapat dihitung lewat integral kecepatan?',
    ],
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
    summary: 'Menggunakan matriks rotasi dan refleksi untuk memindahkan titik pada bidang.',
    topicIds: ['matriks-transformasi'],
    body: `Sebuah titik sudut logo berada di $P(4, 2)$. Untuk menyesuaikan tata letak, citra diputar $90^\\circ$ berlawanan arah jarum jam terhadap titik asal, lalu dicerminkan terhadap sumbu-$x$.
Nyatakan hasil akhirnya sebagai matriks transformasi tunggal dan tentukan koordinat bayangannya.

Pada grafika komputer, setiap titik dipandang sebagai vektor kolom, sehingga rangkaian transformasi dapat ditulis sebagai perkalian matriks. Cara ini jauh lebih ringkas daripada menghitung koordinat satu per satu, terutama ketika ada ribuan titik yang harus dipindahkan.`,
    analysis: `Matriks rotasi $90^\\circ$: $R = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$.
Matriks refleksi terhadap sumbu-$x$: $M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$.
Komposisi "putar lalu cermin" adalah
$$M R = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}.$$
Maka
$$\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}\\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ -4 \\end{pmatrix}.$$
Bayangannya adalah $(-2, -4)$.

Matriks hasil $\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$ sebenarnya mewakili pencerminan terhadap garis $y = -x$, yaitu transformasi tunggal yang setara dengan kedua langkah sebelumnya. Determinannya bernilai $-1$, menandakan luas tetap namun orientasi bangun terbalik setelah komposisi.`,
    takeaways: [
      'Komposisi transformasi sepadan dengan perkalian matriks.',
      'Urutan perkalian penting karena matriks tidak komutatif.',
      'Satu matriks tunggal dapat mewakili rangkaian transformasi.',
      'Tanda determinan menunjukkan apakah orientasi bangun berubah.',
    ],
    reflection: [
      'Bagaimana hasilnya berbeda bila pencerminan dilakukan lebih dulu?',
      'Transformasi tunggal apa yang setara dengan matriks hasil di atas?',
      'Mengapa prosesor grafika lebih memilih perkalian matriks daripada hitungan manual?',
    ],
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
Tentukan perpindahan total kapal dan besar perpindahannya.

Vektor perpindahan mencatat besar sekaligus arah, sehingga penjumlahan dua segmen perjalanan cukup dilakukan pada komponen-komponennya. Cara ini juga dipakai untuk memperhitungkan arus laut pada perhitungan navigasi yang lebih lengkap.`,
    analysis: `Perpindahan total $\\vec{r} = \\vec{a} + \\vec{b} = (30+20,\\ 40-10) = (50, 30)$ km.
Besarnya
$$\\lvert\\vec{r}\\rvert = \\sqrt{50^{2} + 30^{2}} = \\sqrt{2500 + 900} = \\sqrt{3400} = 10\\sqrt{34}\\approx 58{,}3\\ \\text{km}.$$

Arah perpindahan terhadap sumbu-$x$ dapat dihitung dengan $\\tan\\theta = \\dfrac{30}{50} = 0{,}6$, sehingga $\\theta \\approx 31^\\circ$. Perhatikan bahwa besar perpindahan $58{,}3$ km lebih kecil daripada jumlah panjang $30 + 40 + 20 + 10$ karena komponen vektor saling memperkuat atau memperlemah, bukan sekadar dijumlahkan panjangnya.`,
    takeaways: [
      'Perpindahan resultan diperoleh dengan menjumlahkan komponen vektor.',
      'Besar perpindahan dihitung dengan teorema Pythagoras komponen.',
      'Arah resultan ditentukan dari perbandingan komponen melalui tangen.',
      'Penjumlahan vektor mempertimbangkan arah, bukan hanya panjang.',
    ],
    reflection: [
      'Bagaimana menentukan arah perpindahan resultan terhadap sumbu-$x$?',
      'Mengapa besar perpindahan tidak sama dengan jumlah panjang tiap segmen?',
      'Bagaimana arus laut dapat dimodelkan sebagai vektor tambahan?',
    ],
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
Tentukan panjang sumbu mayor, sumbu minor, dan jarak titik fokus dari pusat.

Bentuk elips dipilih karena sifat pemantulannya: berkas yang berasal dari satu titik fokus akan dipantulkan menuju fokus yang lain. Karena itu, memahami letak fokus dan ukuran sumbu menjadi dasar sebelum merancang alat optik maupun akustik.`,
    analysis: `Karena $a^{2} = 169$ dan $b^{2} = 25$, diperoleh $a = 13$ dan $b = 5$.
Sumbu mayor $= 2a = 26$ dan sumbu minor $= 2b = 10$.
Jarak fokus $c = \\sqrt{a^{2}-b^{2}} = \\sqrt{169-25} = \\sqrt{144} = 12$.
Jadi fokusnya di $(-12, 0)$ dan $(12, 0)$.

Karena penyebut $169$ menempel pada suku $x$, sumbu mayor elips ini sejajar sumbu-$x$. Eksentrisitas $e = \\dfrac{c}{a} = \\dfrac{12}{13} \\approx 0{,}92$ mendekati $1$, sehingga elips ini cukup pipih. Makin besar eksentrisitas, makin jauh fokus dari pusat relatif terhadap panjang sumbu mayor.`,
    takeaways: [
      'Untuk elips horizontal, $a^{2}$ menyertai suku $x$.',
      'Hubungan unsur elips: $c^{2} = a^{2} - b^{2}$.',
      'Eksentrisitas $e = c/a = 12/13$ mengukur "kepipihan" elips.',
      'Sifat dua fokus dimanfaatkan pada perancangan lensa dan reflektor.',
    ],
    reflection: [
      'Mengapa reflector dirancang dengan sifat fokus?',
      'Apa yang terjadi pada bentuk elips bila eksentrisitasnya mendekati nol?',
      'Bagaimana posisi fokus berubah jika sumbu mayor dan minor ditukar?',
    ],
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
Hitung nilai harapan laba dan simpangan bakunya, lalu tafsirkan.

Nilai harapan memberi gambaran laba rata-rata jangka panjang, tetapi dua usaha dengan nilai harapan sama dapat memiliki tingkat risiko berbeda. Simpangan baku menjelaskan seberapa jauh hasil harian biasanya menyimpang dari rata-ratanya, sehingga keputusan usaha sebaiknya mempertimbangkan keduanya.`,
    analysis: `Nilai harapan
$$E(X) = 0(0{,}2) + 2(0{,}5) + 5(0{,}3) = 2{,}5\\ \\text{juta}.$$
Untuk varians:
$$E(X^{2}) = 0^{2}(0{,}2) + 2^{2}(0{,}5) + 5^{2}(0{,}3) = 2 + 7{,}5 = 9{,}5.$$
$$\\operatorname{Var}(X) = E(X^{2}) - [E(X)]^{2} = 9{,}5 - 6{,}25 = 3{,}25.$$
Simpangan baku $\\sigma = \\sqrt{3{,}25} \\approx 1{,}80$ juta rupiah.
Artinya laba rata-rata jangka panjang sekitar $2{,}5$ juta dengan ketersebaran sekitar $1{,}8$ juta.

Perhatikan juga peluang merugi: hasil terendah adalah $X = 0$ dengan peluang $0{,}2$, sehingga usaha tetap punya peluang $20\\%$ tidak memperoleh laba pada suatu hari. Nilai harapan yang positif tidak menjamin hasil tiap hari positif.`,
    takeaways: [
      'Nilai harapan adalah rata-rata berbobot peluang.',
      'Varians dan simpangan baku mengukur risiko/ketersebaran.',
      'Identitas $\\operatorname{Var}(X) = E(X^{2}) - [E(X)]^{2}$ memudahkan perhitungan.',
      'Keputusan usaha sebaiknya mempertimbangkan nilai harapan sekaligus peluang hasil terburuk.',
    ],
    reflection: [
      'Bagaimana keputusan berubah bila simpangan baku lebih besar?',
      'Mengapa nilai harapan positif belum tentu berarti selalu untung?',
      'Ukuran tambahan apa yang membantu memahami risiko di luar simpangan baku?',
    ],
  },
];

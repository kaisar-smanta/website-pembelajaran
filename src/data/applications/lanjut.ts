import type { Application } from '@/types/content';

/**
 * Studi kasus Matematika Tingkat Lanjut (Fase F): penerapan polinomial,
 * matriks dan transformasi geometri, trigonometri lanjut, vektor, irisan
 * kerucut, limit, turunan, integral, variabel acak diskret, dan distribusi
 * binomial. Setiap sumber ditulis jujur: menyebut dasar realistis bila ada,
 * atau menandai skenario pengajaran yang direkonstruksi dengan besaran wajar.
 */
export const lanjutApplications: Application[] = [
  {
    id: 'mtl-optimasi-produksi',
    title: 'Titik Impas Produksi dengan Teorema Faktor',
    category: 'keuangan',
    subject: 'matematika-lanjut',
    element: 'aljabar-fungsi',
    grade: 'XI',
    level: 'mahir',
    estimatedMinutes: 12,
    explorationId: 'mtl-polinomial-akar',
    tags: ['polinomial', 'teorema faktor', 'teorema sisa', 'titik impas', 'produksi'],
    summary:
      'Menentukan titik impas dan daerah laba usaha dari model laba polinomial memakai teorema faktor dan uji tanda.',
    topicIds: ['polinomial', 'turunan', 'aplikasi-turunan'],
    body: `Sebuah usaha rumahan memproduksi $x$ lusin kue per hari. Laba harian (dalam ratusan ribu rupiah) dimodelkan
$$P(x) = x^{3} - 12x^{2} + 47x - 60, \\qquad x \\ge 0.$$
Pemilik ingin tahu pada banyak produksi berapa usahanya **tepat impas**, kapan benar-benar untung, dan berapa laba bila memproduksi $6$ lusin per hari.

Model laba ini bukan fungsi linear: biaya tetap dan biaya variabel yang tumbuh membuat laba dapat naik lalu turun lagi. Karena $P$ berbentuk polinomial kubik, akar-akarnya menandai titik impas, dan teorema faktor menjadi jalan cepat menemukan akar tersebut tanpa menebak sembarangan.`,
    analysis: `Cari akar rasional dengan menguji faktor dari suku tetap $-60$. Uji $x = 3$:
$$P(3) = 27 - 108 + 141 - 60 = 0.$$
Jadi $(x-3)$ adalah faktor. Bagi dengan metode Horner:
$$P(x) = (x-3)(x^{2} - 9x + 20) = (x-3)(x-4)(x-5).$$
Titik impas terjadi pada $x = 3$, $x = 4$, dan $x = 5$ lusin. Uji tanda tiap selang:
- $0 \\le x < 3$: $P(0) = -60 < 0$ (rugi);
- $3 < x < 4$: $P(3{,}5) = (0{,}5)(-0{,}5)(-1{,}5) = 0{,}375 > 0$ (untung);
- $4 < x < 5$: $P(4{,}5) = (1{,}5)(0{,}5)(-0{,}5) = -0{,}375 < 0$ (rugi);
- $x > 5$: $P(6) = 6 > 0$ (untung).

Teorema sisa memberi nilai laba tanpa pembagian penuh: $P(6) = 6$, yaitu sekitar Rp600.000. Memproduksi $6$ lusin menguntungkan, sedangkan $4{,}5$ lusin justru merugi. Pola laba bergelombang; makin banyak belum tentu makin untung. Daerah produksi yang menguntungkan adalah $3 \\le x \\le 4$ atau $x \\ge 5$.`,
    takeaways: [
      'Teorema faktor mengubah pencarian akar polinomial menjadi pengujian nilai di kandidat faktor suku tetap.',
      'Titik impas adalah akar-akar $P(x)=0$; uji tanda antar akar memisahkan daerah untung dan rugi.',
      'Teorema sisa, yaitu nilai $P(a)$, memberi laba pada $x=a$ tanpa pembagian penuh.',
      'Kesimpulan model tetap diselaraskan dengan kapasitas dan pesanan nyata.',
    ],
    reflection: [
      'Mengapa kandidat akar rasional dibatasi pada faktor dari suku tetap?',
      'Bagaimana pola untung dan rugi berubah bila suku tetap polinomial dinaikkan?',
      'Apakah "memproduksi sebanyak mungkin" selalu memaksimumkan laba pada model ini?',
    ],
    source:
      'Skenario pengajaran yang dikonstruksi dengan angka realistis: model laba polinomial usaha kecil dengan struktur biaya tetap dan variabel, angka dipilih agar akarnya bulat; bukan data perusahaan tertentu.',
  },
  {
    id: 'mtl-gerak-kecepatan',
    title: 'Perpindahan dan Jarak Tempuh lewat Integral',
    category: 'kalkulus',
    subject: 'matematika-lanjut',
    element: 'kalkulus',
    grade: 'XII',
    level: 'cakap',
    estimatedMinutes: 12,
    explorationId: 'mtl-integral-riemann',
    tags: ['integral', 'akumulasi', 'perpindahan', 'jarak tempuh', 'gerak'],
    summary:
      'Menghitung perpindahan dan jarak total bola dari fungsi kecepatan memakai integral tentu.',
    topicIds: ['aplikasi-turunan', 'integral'],
    body: `Sebuah bola dilempar vertikal ke atas. Kecepatannya (meter per detik) terhadap waktu $t$ (detik) adalah
$$v(t) = 20 - 10t, \\qquad 0 \\le t \\le 3.$$
Berapa **perpindahan** bola dari $t=0$ sampai $t=3$, dan berapa **jarak total** yang ditempuhnya?

Turunan posisi memberi kecepatan, tetapi di sini kecepatan yang diketahui dan posisi justru dicari. Proses kebalikannya, yaitu mengakumulasi kecepatan sepanjang waktu, dikerjakan oleh integral tentu. Karena kecepatan sempat bernilai negatif, perpindahan dan jarak total bisa berbeda.`,
    analysis: `Bola berbalik arah saat $v(t)=0$, yaitu $t=2$ detik. Integral tentu kecepatan memberi **perpindahan** (perubahan posisi):
$$\\int_{0}^{3} (20 - 10t)\\,dt = \\left[20t - 5t^{2}\\right]_{0}^{3} = (60 - 45) - 0 = 15\\ \\text{m}.$$
Jadi posisi akhir 15 m di atas titik lempar. Untuk **jarak total**, pisahkan pada saat arah berubah ($t=2$) lalu jumlahkan nilai mutlak kedua bagian:
$$\\int_{0}^{2}(20-10t)\\,dt = \\left[20t-5t^{2}\\right]_{0}^{2} = 40-20 = 20\\ \\text{m},$$
$$\\int_{2}^{3}(20-10t)\\,dt = \\left[20t-5t^{2}\\right]_{2}^{3} = (60-45)-(40-20) = 15-20 = -5\\ \\text{m}.$$
Bagian kedua bernilai negatif karena bola sudah bergerak turun. Maka jarak tempuhnya $20 + 5 = 25$ m, sedangkan perpindahannya hanya $15$ m. Integral bertanda menghitung arah, sedangkan jarak total menghitung seluruh lintasan tanpa memperhatikan arah. Karena $\\int v\\,dt$ mengembalikan posisi $s(t) = 20t - 5t^{2} + C$, integral tentu memang akumulasi laju terhadap waktu.`,
    takeaways: [
      'Integral tentu kecepatan memberi perpindahan, bukan panjang lintasan.',
      'Jarak total dihitung dengan memisahkan integral pada saat kecepatan berubah tanda.',
      'Perpindahan memperhatikan arah (bertanda), jarak total selalu positif.',
      'Teorema dasar kalkulus menghubungkan laju (turunan) dan akumulasi (integral).',
    ],
    reflection: [
      'Mengapa perpindahan pada $0 \\le t \\le 3$ lebih kecil daripada jarak total?',
      'Apa arti fisis integral kecepatan yang bernilai negatif pada selang $[2,3]$?',
      'Bagaimana caramu menentukan batas pemisah sebelum menghitung jarak total?',
    ],
    source:
      'Mengacu pada model gerak vertikal tanpa hambatan udara dengan percepatan gravitasi dibulatkan 10 m/s²; angka dipilih agar integralnya bulat, bukan data percobaan tertentu.',
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
    explorationId: 'mtl-matriks-transformasi',
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

Matriks hasil $\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$ mewakili pencerminan terhadap garis $y = -x$, yaitu transformasi tunggal yang setara dengan kedua langkah sebelumnya. Determinannya bernilai $-1$, menandakan luas tetap namun orientasi bangun terbalik setelah komposisi.`,
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
    source:
      'Mengacu pada matriks rotasi dan refleksi baku yang dipakai dalam grafika komputer; angka dipilih agar hasil komposisinya mudah diperiksa, bukan data perangkat lunak tertentu.',
  },
  {
    id: 'mtl-navigasi-vektor',
    title: 'Menentukan Arah Kapal dengan Aturan Sinus dan Kosinus',
    category: 'pengukuran',
    subject: 'matematika-lanjut',
    element: 'geometri',
    grade: 'XI',
    level: 'cakap',
    estimatedMinutes: 12,
    explorationId: 'mtl-vektor-bidang',
    tags: ['aturan kosinus', 'aturan sinus', 'trigonometri', 'navigasi', 'resultan'],
    summary:
      'Menghitung jarak dan arah resultan dua haluan kapal memakai aturan kosinus dan aturan sinus.',
    topicIds: ['vektor', 'trigonometri-lanjut'],
    body: `Sebuah kapal berlayar $30$ km pada haluan $040^\\circ$, lalu berbelok dan berlayar $20$ km pada haluan $100^\\circ$. Haluan diukur searah jarum jam dari utara. Berapa jarak kapal dari titik awal, dan pada haluan berapa posisinya terlihat dari titik awal?

Dua segmen perjalanan membentuk sisi-sisi sebuah segitiga. Alih-alih menguraikan vektor menjadi komponen satu per satu, besar dan arah perpindahan dapat dibaca langsung dengan aturan kosinus dan aturan sinus. Cara ini penting ketika yang diketahui adalah sudut, bukan komponen vektor.`,
    analysis: `Sudut antara kedua haluan adalah $100^\\circ - 40^\\circ = 60^\\circ$. Karena kedua vektor perpindahan disusun ujung-ke-pangkal, sudut dalam segitiga di titik belok adalah $180^\\circ - 60^\\circ = 120^\\circ$.

**Jarak dari titik awal** ($d = OB$) dihitung dengan aturan kosinus:
$$d^{2} = 30^{2} + 20^{2} - 2(30)(20)\\cos 120^\\circ.$$
Karena $\\cos 120^\\circ = -\\cos 60^\\circ = -\\tfrac{1}{2}$,
$$d^{2} = 900 + 400 + 600 = 1900, \\qquad d = \\sqrt{1900} = 10\\sqrt{19} \\approx 43{,}6\\ \\text{km}.$$

**Arah** haluan $OB$ di titik awal, sebut $\\beta$, dihitung dengan aturan sinus:
$$\\frac{\\sin \\beta}{20} = \\frac{\\sin 120^\\circ}{d} = \\frac{\\tfrac{1}{2}\\sqrt{3}}{10\\sqrt{19}}.$$
Maka $\\sin \\beta = \\dfrac{20 \\cdot \\tfrac{1}{2}\\sqrt{3}}{10\\sqrt{19}} = \\dfrac{\\sqrt{3}}{\\sqrt{19}} \\approx 0{,}397$, sehingga $\\beta \\approx 23{,}4^\\circ$. Haluan posisi akhir dari titik awal adalah $40^\\circ + 23{,}4^\\circ \\approx 63{,}4^\\circ$.

Perhitungan ini memanfaatkan identitas sudut berpelurus dan nilai sudut istimewa, sehingga tidak menuntut penguraian menjadi komponen vektor.`,
    takeaways: [
      'Sudut dalam segitiga perpindahan adalah suplemen dari selisih haluan.',
      'Aturan kosinus memberi panjang resultan bila dua sisi dan sudut apitnya diketahui.',
      'Aturan sinus menentukan arah resultan dari sisi di hadapannya.',
      'Identitas $\\cos(180^\\circ-\\theta) = -\\cos\\theta$ menyederhanakan sudut apit tumpul.',
    ],
    reflection: [
      'Mengapa sudut dalam segitiga $120^\\circ$, bukan $60^\\circ$?',
      'Kapan aturan sinus lebih praktis daripada menguraikan vektor atas komponen?',
      'Bagaimana arah resultan berubah bila haluan kedua diperbesar?',
    ],
    source:
      'Mengacu pada penggunaan aturan sinus dan kosinus dalam navigasi; pola haluan dan jarak mengikuti latihan navigasi umum, bukan log pelayaran tertentu.',
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
    explorationId: 'mtl-irisan-kerucut-sim',
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
      'Eksentrisitas $e = c/a = 12/13$ mengukur kepipihan elips.',
      'Sifat dua fokus dimanfaatkan pada perancangan lensa dan reflektor.',
    ],
    reflection: [
      'Mengapa reflector dirancang dengan sifat fokus?',
      'Apa yang terjadi pada bentuk elips bila eksentrisitasnya mendekati nol?',
      'Bagaimana posisi fokus berubah jika sumbu mayor dan minor ditukar?',
    ],
    source:
      'Mengacu pada bentuk baku persamaan elips pada rancangan reflektor; angka dipilih agar fokus bernilai bulat, bukan spesifikasi produk tertentu.',
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
    explorationId: 'mtl-variabel-acak-pmf',
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
    source:
      'Skenario pengajaran yang dikonstruksi dengan angka realistis: distribusi laba harian usaha mikro; rentang nilai dan peluang bersifat ilustratif, bukan hasil survei tertentu.',
  },
  {
    id: 'mtl-limit-kadar-obat',
    title: 'Kadar Obat dalam Darah yang Menuju Stabil',
    category: 'kalkulus',
    subject: 'matematika-lanjut',
    element: 'kalkulus',
    grade: 'XII',
    level: 'mahir',
    estimatedMinutes: 12,
    explorationId: 'mtl-limit-numerik',
    tags: ['limit', 'limit tak hingga', 'kestabilan', 'obat', 'laju'],
    summary:
      'Memakai limit di tak hingga untuk memprediksi kadar obat yang stabil dan limit bentuk nol per nol untuk membaca laju awalnya.',
    topicIds: ['limit-fungsi', 'aplikasi-turunan'],
    body: `Setelah satu dosis diminum, kadar obat dalam darah (mg/L) pada jam ke-$t$ dimodelkan
$$C(t) = 8 - \\frac{16}{t+2},\\qquad t \\ge 0.$$
Dokter ingin mengetahui kadar yang bertahan dalam jangka panjang, serta seberapa cepat kadar berubah saat memasuki jam ke-$2$.

Kadar awal $C(0) = 0$ karena obat belum terserap, lalu naik dan makin melambat. Pertanyaan "berapa kadar jangka panjangnya?" sebenarnya menanyakan nilai yang **didekati** $C(t)$ ketika $t$ membesar tanpa batas, tepatnya sebuah limit di tak hingga. Sementara pertanyaan laju perubahan pada satu saat menuntut limit bentuk $\\tfrac{0}{0}$ yang dihitung lewat pemfaktoran.`,
    analysis: `**Kadar jangka panjang.** Bagi pembilang dan penyebut suku pecahan dengan $t$:
$$\\lim_{t \\to \\infty}\\left(8 - \\frac{16}{t+2}\\right) = 8 - 0 = 8\\ \\text{mg/L}.$$
Suku $\\dfrac{16}{t+2}$ menuju nol, sehingga kadar obat mendatar menuju $8$ mg/L. Nilai ini adalah kadar stabil (steady state) yang menjadi acuan dosis berikutnya.

**Laju pada jam ke-$2$.** Kadar saat $t = 2$ adalah $C(2) = 8 - \\dfrac{16}{4} = 4$ mg/L. Laju perubahan sesaat dihitung lewat limit hasil bagi selisih:
$$\\lim_{t \\to 2}\\frac{C(t) - C(2)}{t - 2}
= \\lim_{t \\to 2}\\frac{\\left(8 - \\frac{16}{t+2}\\right) - 4}{t-2}
= \\lim_{t \\to 2}\\frac{4 - \\frac{16}{t+2}}{t-2}.$$
Penyebut dan pembilang sama-sama menuju nol (bentuk $\\tfrac{0}{0}$). Dengan menyamakan penyebut pada pembilang:
$$4 - \\frac{16}{t+2} = \\frac{4(t+2) - 16}{t+2} = \\frac{4t - 8}{t+2} = \\frac{4(t-2)}{t+2},$$
sehingga
$$\\lim_{t \\to 2}\\frac{4(t-2)}{t+2} \\cdot \\frac{1}{t-2} = \\lim_{t \\to 2}\\frac{4}{t+2} = \\frac{4}{4} = 1.$$
Jadi pada jam ke-$2$ kadar bertambah sekitar $1$ mg/L per jam. Bentuk tak tentu $\\tfrac{0}{0}$ ternyata menyimpan laju yang berhingga setelah pembilang difaktorkan.`,
    takeaways: [
      'Limit di tak hingga memberi kadar stabil, yaitu nilai yang didekati fungsi untuk waktu yang panjang.',
      'Limit bentuk $\\tfrac{0}{0}$ tidak otomatis tak ada; pemfaktoran dapat menyederhanakannya.',
      'Laju perubahan sesaat adalah limit hasil bagi selisih, jembatan menuju turunan.',
      'Kesimpulan model tetap dibatasi asumsi penyerapan dan metabolisme yang disederhanakan.',
    ],
    reflection: [
      'Mengapa membagi dengan $t$ membantu menghitung limit di tak hingga?',
      'Apa yang terjadi bila kadar stabil diinginkan lebih tinggi, misalnya $10$ mg/L?',
      'Bagaimana grafik $C(t)$ menjelaskan bahwa kadar tidak pernah melampaui $8$ mg/L?',
    ],
    source:
      'Mengacu pada model farmakokinetik satu kompartemen yang disederhanakan (kadar menuju keadaan tunak); nilai kadar dan waktu dipilih agar limitnya mudah dihitung, bukan data uji klinis.',
  },
  {
    id: 'mtl-binomial-kendali-mutu',
    title: 'Kendali Mutu Produk Cacat dengan Distribusi Binomial',
    category: 'data',
    subject: 'matematika-lanjut',
    element: 'data-peluang',
    grade: 'XII',
    level: 'mahir',
    estimatedMinutes: 12,
    explorationId: 'mtl-binomial-distribusi',
    tags: ['distribusi binomial', 'kendali mutu', 'peluang', 'nilai harapan'],
    summary:
      'Menghitung peluang banyaknya produk cacat pada sampel memakai distribusi binomial.',
    topicIds: ['distribusi-binomial', 'variabel-acak-diskret'],
    body: `Sebuah pabrik mengklaim hanya $5\\%$ produknya cacat. Tim kendali mutu mengambil sampel $20$ produk secara acak dan menganggap cacat atau tidak cacat sebagai percobaan binomial saling bebas dengan $p = 0{,}05$.

Berapa peluang menemukan **paling banyak satu** produk cacat? Jika ternyata ditemukan lebih banyak, apakah klaim $5\\%$ patut diragukan?

Setiap produk dalam sampel hanya punya dua hasil (cacat atau baik), peluang cacat dianggap tetap, dan antarproduk saling bebas. Inilah syarat percobaan binomial, sehingga banyak produk cacat $X$ pada $20$ percobaan menyebar binomial $X \\sim B(20,\\ 0{,}05)$.`,
    analysis: `Peluang tepat $k$ cacat mengikuti
$$P(X = k) = \\binom{20}{k}(0{,}05)^{k}(0{,}95)^{20-k}.$$
Untuk paling banyak satu cacat:
$$P(X \\le 1) = P(X=0) + P(X=1).$$
$$P(X=0) = (0{,}95)^{20} \\approx 0{,}3585.$$
$$P(X=1) = \\binom{20}{1}(0{,}05)(0{,}95)^{19} = 20(0{,}05)(0{,}3774) \\approx 0{,}3774.$$
Jadi $P(X \\le 1) \\approx 0{,}3585 + 0{,}3774 = 0{,}7359$. Sekitar $73{,}6\\%$ sampel berisi paling banyak satu produk cacat.

Sebaliknya, peluang menemukan **dua atau lebih** cacat adalah komplemennya:
$$P(X \\ge 2) = 1 - P(X \\le 1) \\approx 0{,}2641,$$
cukup besar untuk muncul sesekali. Nilai harapan $E(X) = np = 20(0{,}05) = 1$ produk cacat per sampel, dengan simpangan baku
$$\\sigma = \\sqrt{np(1-p)} = \\sqrt{20(0{,}05)(0{,}95)} = \\sqrt{0{,}95} \\approx 0{,}975.$$
Karena menyebar normal secara kasar, menemukan $4$ cacat (jauh di atas rata-rata $1$) jarang terjadi pada $p = 0{,}05$; justru itu petunjuk bahwa peluang cacat sesungguhnya mungkin lebih tinggi.`,
    takeaways: [
      'Ciri percobaan binomial: dua hasil, peluang tetap, dan antarpercobaan saling bebas.',
      'Peluang kumulatif dihitung dengan menjumlahkan $P(X=k)$ atau memakai komplemen.',
      'Nilai harapan binomial $E(X)=np$ memberi banyak cacat yang diharapkan per sampel.',
      'Hasil jauh di atas $np$ menjadi sinyal untuk memeriksa kembali klaim kualitas.',
    ],
    reflection: [
      'Mengapa asumsi peluang tetap dan saling bebas penting sebelum memakai rumus binomial?',
      'Bagaimana keputusan berubah bila ukuran sampel diperbesar menjadi $50$?',
      'Ukuran apa yang lebih meyakinkan untuk menilai klaim, rata-rata atau peluang kejadian ekstrem?',
    ],
    source:
      'Skenario pengajaran yang dikonstruksi mengikuti gagasan pengambilan sampel pada kendali mutu (misalnya standar penerimaan ISO/SNI); tingkat cacat 5% dan ukuran sampel 20 adalah besaran latihan yang wajar, bukan hasil audit nyata.',
  },
  {
    id: 'mtl-radar-lingkaran',
    title: 'Jangkauan Radar melalui Persamaan Lingkaran',
    category: 'pengukuran',
    subject: 'matematika-lanjut',
    element: 'geometri',
    grade: 'XI',
    level: 'cakap',
    estimatedMinutes: 11,
    explorationId: 'mtl-konik-fokus',
    tags: ['lingkaran', 'persamaan lingkaran', 'garis singgung', 'jangkauan', 'radar'],
    summary:
      'Menentukan pusat, jari-jari, dan garis singgung lingkaran jangkauan dari tiga titik yang dilalui batasnya.',
    topicIds: ['lingkaran', 'irisan-kerucut'],
    body: `Batas jangkauan sebuah pemancar berbentuk lingkaran dan melewati tiga titik pengukur: $A(0,0)$, $B(8,0)$, dan $C(0,6)$ (satuan kilometer pada denah). Tentukan persamaan lingkaran jangkauan, lalu tentukan persamaan jalan lurus yang menyinggung batas itu di titik $B$.

Tiga titik yang tidak segaris menentukan satu lingkaran. Karena $A$, $B$, dan $C$ membentuk sudut siku-siku di $A$, lingkaran itu berpusat di titik tengah sisi miring $BC$, petunjuk yang mempercepat penentuan pusat dan jari-jari sebelum menulis persamaannya.`,
    analysis: `Karena sudut $A$ siku-siku, $BC$ adalah diameter lingkaran (sudut keliling $90^\\circ$ menghadap diameter). Maka pusatnya titik tengah $BC$:
$$O\\left(\\frac{0+8}{2},\\ \\frac{6+0}{2}\\right) = (4, 3),$$
dan jari-jarinya setengah $BC$:
$$r = \\tfrac{1}{2}\\sqrt{(8-0)^{2}+(0-6)^{2}} = \\tfrac{1}{2}(10) = 5\\ \\text{km}.$$
Persamaan lingkaran:
$$(x-4)^{2} + (y-3)^{2} = 25.$$

Garis singgung di titik $B(8,0)$ tegak lurus jari-jari $OB$. Vektor $OB = (8-4,\\ 0-3) = (4,-3)$, sehingga garis singgung bergradien $\\tfrac{4}{3}$ (kebalikan negatif dari $-\\tfrac{3}{4}$):
$$y - 0 = \\tfrac{4}{3}(x - 8) \\quad\\Longleftrightarrow\\quad 4x - 3y = 32.$$
Sebagai pemeriksaan, $B$ memenuhi $4(8) - 3(0) = 32$. Sebuah titik $(x,y)$ berada dalam jangkauan bila $(x-4)^{2} + (y-3)^{2} \\le 25$; misalnya $(7,6)$ memberi $9 + 9 = 18 < 25$ sehingga terjangkau, sedangkan $(9,3)$ memberi tepat $25$ sehingga berada di batas.`,
    takeaways: [
      'Sudut keliling $90^\\circ$ menandakan sisi miring segitiga sebagai diameter lingkaran.',
      'Persamaan baku $(x-h)^{2}+(y-k)^{2}=r^{2}$ langsung memberi pusat dan jari-jari.',
      'Garis singgung tegak lurus jari-jari di titik singgungnya.',
      'Uji pertidaksamaan lingkaran menentukan apakah suatu titik terjangkau.',
    ],
    reflection: [
      'Mengapa lingkaran melalui $A$, $B$, dan $C$ berpusat di titik tengah $BC$?',
      'Bagaimana persamaan berubah bila sensor $C$ dipindah ke $(0,8)$?',
      'Apa arti pertidaksamaan $(x-4)^{2}+(y-3)^{2} \\le 25$ bagi keputusan pemasangan alat?',
    ],
    source:
      'Skenario pengajaran yang dikonstruksi dengan angka realistis: persamaan lingkaran melalui tiga titik untuk tata letak sensor; koordinat dipilih agar pusat, jari-jari, dan garis singgungnya mudah dihitung, bukan denah proyek nyata.',
  },
  {
    id: 'mtl-integral-luas-daerah',
    title: 'Menaksir Bahan Kanopi dengan Luas Antara Dua Kurva',
    category: 'kalkulus',
    subject: 'matematika-lanjut',
    element: 'kalkulus',
    grade: 'XII',
    level: 'cakap',
    estimatedMinutes: 11,
    explorationId: 'mtl-integral-riemann',
    tags: ['integral', 'luas antara dua kurva', 'titik potong', 'kanopi', 'akumulasi'],
    summary:
      'Menghitung luas bahan kanopi dari daerah yang dibatasi lengkung parabola dan palang lurus memakai integral tentu.',
    topicIds: ['integral'],
    body: `Sebuah kanopi kain diberi rangka lengkung yang mengikuti parabola $y = 4 - x^{2}$ (meter) dan ditopang palang lurus $y = 1$. Berapa luas kain yang diperlukan untuk menutup daerah di antara lengkung dan palang itu?

Luas kain tidak dapat dicari dengan rumus bangun datar sederhana karena salah satu batasnya melengkung. Integral tentu memecah daerah menjadi potongan tipis tegak, lalu mengakumulasi luas tiap potongan, persis gagasan jumlah Riemann yang menjadi dasar integral.`,
    analysis: `Cari titik potong kedua kurva:
$$4 - x^{2} = 1 \\quad\\Longrightarrow\\quad x^{2} = 3 \\quad\\Longrightarrow\\quad x = \\pm\\sqrt{3}.$$
Pada selang $[-\\sqrt{3}, \\sqrt{3}]$, lengkung $y = 4-x^{2}$ berada di atas garis $y = 1$ karena $4-x^{2} - 1 = 3 - x^{2} \\ge 0$. Luas daerah:
$$L = \\int_{-\\sqrt{3}}^{\\sqrt{3}}\\bigl[(4-x^{2}) - 1\\bigr]\\,dx = \\int_{-\\sqrt{3}}^{\\sqrt{3}}(3 - x^{2})\\,dx.$$
Karena daerahnya simetris terhadap sumbu-$y$,
$$L = 2\\int_{0}^{\\sqrt{3}}(3 - x^{2})\\,dx = 2\\left[3x - \\frac{x^{3}}{3}\\right]_{0}^{\\sqrt{3}} = 2\\left(3\\sqrt{3} - \\sqrt{3}\\right) = 4\\sqrt{3} \\approx 6{,}93\\ \\text{m}^{2}.$$
Jadi kain yang diperlukan sekitar $6{,}93\\ \\text{m}^{2}$; dalam praktik ditambah sedikit untuk kelim. Integral di sini mengakumulasi lebar potongan tipis dari kiri ke kanan, bukan menghitung perubahan laju.`,
    takeaways: [
      'Luas antara dua kurva dihitung dari integral selisih kurva atas dan bawah.',
      'Batas integral ditentukan oleh titik potong kedua kurva.',
      'Simetri daerah dapat memangkas perhitungan integral.',
      'Integral tentu mengakumulasi potongan tipis menjadi luas yang eksak.',
    ],
    reflection: [
      'Mengapa selisih $(4-x^{2}) - 1$ yang diintegralkan, bukan $4-x^{2}$ saja?',
      'Bagaimana batas integral berubah bila palang dinaikkan menjadi $y=2$?',
      'Kapan simetri daerah boleh dipakai untuk menyederhanakan integral?',
    ],
    source:
      'Mengacu pada konsep luas daerah antara dua kurva pada buku kalkulus tingkat SMA; profil kanopi dimodelkan sebagai parabola sederhana dengan angka pilihan, bukan hasil pengukuran lapangan.',
  },
  {
    id: 'mtl-skala-logaritma',
    title: 'Skala Desibel: Mengukur Kebisingan dengan Logaritma',
    category: 'pengukuran',
    subject: 'matematika-lanjut',
    element: 'aljabar-fungsi',
    grade: 'XI',
    level: 'cakap',
    estimatedMinutes: 11,
    explorationId: 'logaritma-fungsi',
    tags: ['fungsi logaritma', 'desibel', 'intensitas bunyi', 'skala logaritmik', 'pemodelan'],
    summary:
      'Membaca taraf intensitas bunyi pada skala desibel dan menghitung pengaruh penggandaan sumber bunyi.',
    topicIds: ['fungsi-logaritma'],
    body: `Taraf intensitas bunyi (desibel) diukur pada **skala logaritmik**, bukan linear. Tarafnya didefinisikan
$$L = 10\\log_{10}\\!\\left(\\frac{I}{I_0}\\right)\\ \\text{dB},$$
dengan $I_0 = 10^{-12}\\ \\text{W/m}^2$ sebagai ambang pendengaran. Sebuah mesin menghasilkan intensitas $I = 10^{-5}\\ \\text{W/m}^2$.

Pertanyaan pemicunya: berapa taraf intensitas mesin itu, mengapa menambah satu mesin identik tidak menggandakan nilainya dalam desibel, dan berapa mesin yang dibutuhkan agar tarafnya menembus $80$ dB?`,
    analysis: `**Taraf satu mesin.** Rasio intensitasnya
$$\\frac{I}{I_0} = \\frac{10^{-5}}{10^{-12}} = 10^{7}.$$
Maka
$$L = 10\\log_{10}(10^{7}) = 10 \\cdot 7 = 70\\ \\text{dB},$$
yakni setara percakapan ramai.

**Dua mesin identik.** Intensitas total menjadi $2I$, sehingga
$$\\Delta L = 10\\log_{10}\\!\\left(\\frac{2I}{I}\\right) = 10\\log_{10}2 \\approx 3{,}0\\ \\text{dB}.$$
Taraf totalnya hanya $70 + 3 = 73\\ \\text{dB}$, bukan $140$ dB. Logaritma mengubah **perkalian** intensitas menjadi **penjumlahan** taraf.

**Menembus 80 dB.** Misalkan $n$ mesin identik dipakai, maka intensitas total $nI$ dan
$$L_n = 70 + 10\\log_{10} n.$$
Agar $L_n \\ge 80$, perlu $10\\log_{10} n \\ge 10$, yaitu $\\log_{10} n \\ge 1$ atau $n \\ge 10$. Jadi dibutuhkan **10 mesin identik** untuk menembus $80$ dB. Menambah sumber bunyi secara berlipat hanya menaikkan taraf sedikit; inilah alasan kebisingan diukur dengan skala logaritma.`,
    takeaways: [
      'Skala logaritma memampatkan rentang intensitas yang sangat lebar menjadi bilangan yang mudah dibaca.',
      'Logaritma mengubah perkalian intensitas menjadi penjumlahan taraf.',
      'Menggandakan intensitas menambah sekitar 3 dB, sedangkan menaikkan 10 dB berarti intensitas sepuluh kali lipat.',
    ],
    reflection: [
      'Mengapa menambah 10 dB berarti intensitas naik sepuluh kali, bukan bertambah sedikit?',
      'Jika dua mesin identik berbunyi bersamaan, apakah taraf totalnya dua kali taraf satu mesin?',
      'Mengapa skala logaritmik cocok untuk besaran dengan rentang sangat lebar?',
    ],
    source:
      'Mengacu pada definisi baku taraf intensitas bunyi (desibel) dan ambang pendengaran 10^-12 W/m^2; nilai intensitas dipilih bulat agar logaritmanya mudah dihitung, bukan hasil pengukuran laboratorium tertentu.',
  },
  {
    id: 'mtl-biaya-rata-rasional',
    title: 'Biaya Rata-Rata Produksi: Ketika Fungsi Rasional Menuju Batas',
    category: 'keuangan',
    subject: 'matematika-lanjut',
    element: 'aljabar-fungsi',
    grade: 'XI',
    level: 'cakap',
    estimatedMinutes: 12,
    explorationId: 'rasional-akar-sim',
    tags: ['fungsi rasional', 'biaya rata-rata', 'asimtot', 'perilaku ujung', 'skala produksi'],
    summary:
      'Memodelkan biaya rata-rata per satuan sebagai fungsi rasional, lalu membaca asimtot datarnya sebagai batas bawah biaya saat produksi diperbesar.',
    topicIds: ['fungsi-rasional-akar'],
    body: `Sebuah usaha kecil memiliki biaya tetap Rp6.000.000 per bulan (sewa, listrik, perawatan) dan biaya variabel Rp40.000 per unit yang diproduksi. Jika $x$ unit diproduksi, total biaya adalah
$$C(x) = 40.000x + 6.000.000.$$
Manajer ingin mengetahui **biaya rata-rata per unit**, yaitu $\\bar{C}(x) = \\dfrac{C(x)}{x}$. Berapa biaya rata-rata bila memproduksi $100$ unit dan $1.000$ unit, dan berapa batas bawahnya bila produksi terus diperbesar?

Biaya rata-rata adalah fungsi rasional: makin besar produksi, biaya tetap yang tersebar makin kecil per unit. Perilaku inilah yang dijelaskan oleh asimtot datar.`,
    analysis: `Bagi pembilang dengan $x$:
$$\\bar{C}(x) = \\frac{40.000x + 6.000.000}{x} = 40.000 + \\frac{6.000.000}{x}.$$

**Pada $x = 100$:**
$$\\bar{C}(100) = 40.000 + \\frac{6.000.000}{100} = 40.000 + 60.000 = 100.000\\ \\text{rupiah/unit}.$$

**Pada $x = 1.000$:**
$$\\bar{C}(1.000) = 40.000 + \\frac{6.000.000}{1.000} = 40.000 + 6.000 = 46.000\\ \\text{rupiah/unit}.$$

**Batas bawah saat $x \\to \\infty$:** suku $\\dfrac{6.000.000}{x}$ menuju nol, sehingga
$$\\lim_{x \\to \\infty} \\bar{C}(x) = 40.000.$$
Jadi grafik $\\bar{C}$ memiliki asimtot datar $y = 40.000$, yaitu biaya variabel per unit. Berapa pun besarnya produksi, biaya rata-rata tidak akan turun di bawah Rp40.000; ia hanya mendekati nilai itu. Menambah produksi menurunkan biaya rata-rata, tetapi dengan penghematan yang makin kecil.`,
    takeaways: [
      'Biaya rata-rata per unit adalah fungsi rasional dari banyak produksi.',
      'Asimtot datar memberi batas bawah biaya rata-rata, yaitu biaya variabel per unit.',
      'Kenaikan produksi menurunkan biaya rata-rata, tetapi penghematannya makin kecil.',
      'Perilaku ujung fungsi rasional menafsirkan skala ekonomi secara kuantitatif.',
    ],
    reflection: [
      'Mengapa biaya rata-rata tidak pernah lebih kecil daripada biaya variabel per unit?',
      'Jika biaya tetap dinaikkan, bagaimana grafik biaya rata-rata berubah?',
      'Pada tingkat produksi berapa biaya rata-rata sudah cukup dekat dengan Rp40.000?',
    ],
    source:
      'Skenario pengajaran yang dikonstruksi dengan angka realistis: biaya usaha dengan struktur biaya tetap dan variabel; angka bulat dipilih agar perilaku asimtot mudah dibaca, bukan laporan keuangan usaha tertentu.',
  },
  {
    id: 'mtl-kendali-mutu-normal',
    title: 'Kendali Mutu Volume Isi dengan Distribusi Normal',
    category: 'data',
    subject: 'matematika-lanjut',
    element: 'data-peluang',
    grade: 'XII',
    level: 'mahir',
    estimatedMinutes: 12,
    explorationId: 'normal-distribusi-sim',
    tags: ['distribusi normal', 'skor baku', 'kendali mutu', 'peluang', 'standar deviasi'],
    summary:
      'Menaksir peluang botol terisi di luar batas toleransi memakai model normal, lalu menilai apakah mesin bekerja sesuai spesifikasi.',
    topicIds: ['distribusi-normal'],
    body: `Sebuah mesin pengisi botol diatur mengisi rata-rata $\\mu = 500\\ \\text{mL}$ dengan simpangan baku $\\sigma = 4\\ \\text{mL}$. Volume isi dianggap menyebar normal. Spesifikasi menuntut isi berada dalam selang $496$–$504$ mL.

Berapa peluang satu botol memenuhi spesifikasi, dan berapa peluang isinya kurang dari $492$ mL sehingga dianggap cacat? Model normal memungkinkan kita menghitung peluang ini lewat skor baku $z = \\dfrac{x-\\mu}{\\sigma}$.`,
    analysis: `**Memenuhi spesifikasi ($496 \\le X \\le 504$).** Ubah batas menjadi skor baku:
$$z_1 = \\frac{496-500}{4} = -1, \\qquad z_2 = \\frac{504-500}{4} = 1.$$
Maka
$$P(496 \\le X \\le 504) = P(-1 \\le z \\le 1) \\approx 0{,}6827.$$
Sekitar $68{,}3\\%$ botol memenuhi spesifikasi. Artinya hampir sepertiga berada di luar selang $\\pm\\sigma$.

**Isi kurang dari $492$ mL.** Skor bakunya
$$z = \\frac{492-500}{4} = -2,$$
sehingga
$$P(X < 492) = P(z < -2) \\approx 0{,}0228.$$
Jadi sekitar $2{,}3\\%$ botol terlalu sedikit terisi dan perlu ditolak.

**Membaca hasil.** Karena hampir $32\\%$ botol jatuh di luar $\\pm\\sigma$, selang toleransi $496$–$504$ terlalu ketat untuk $\\sigma = 4$. Mesin perlu dikalibrasi (memperkecil $\\sigma$) atau toleransi disesuaikan, sebab menuntut semua botol di dalam $\\pm\\sigma$ bertentangan dengan sifat distribusi normal itu sendiri.`,
    takeaways: [
      'Peluang pada distribusi normal dihitung melalui skor baku dan tabel/sebaran normal baku.',
      'Kaidah empiris: sekitar 68% data jatuh dalam $\\mu \\pm \\sigma$.',
      'Peluang ekor jauh dari rata-rata menaksir tingkat cacat produksi.',
      'Toleransi yang lebih sempit daripada $\\pm\\sigma$ menuntut pengurangan simpangan baku mesin.',
    ],
    reflection: [
      'Mengapa menentukan toleransi hanya dari rata-rata tanpa melihat simpangan baku bisa menyesatkan?',
      'Bagaimana peluang cacat berubah bila simpangan baku mesin diperkecil menjadi $2$ mL?',
      'Mengapa model normal masuk akal untuk volume isi yang berasal dari banyak faktor kecil?',
    ],
    source:
      'Skenario pengajaran yang dikonstruksi mengikuti kendali mutu statistik (model normal dan kaidah empiris); volume isi dan simpangan baku dipilih bulat agar skor bakunya mudah, bukan hasil pengukuran satu mesin tertentu.',
  },
  {
    id: 'mtl-triangulasi-jarak',
    title: 'Mengukur Jarak yang Tak Terjangkau dengan Aturan Sinus',
    category: 'pengukuran',
    subject: 'matematika-lanjut',
    element: 'aljabar-fungsi',
    grade: 'XI',
    level: 'cakap',
    estimatedMinutes: 11,
    explorationId: 'trigonometri-segitiga',
    tags: ['aturan sinus', 'triangulasi', 'segitiga sembarang', 'pengukuran tidak langsung'],
    summary:
      'Menentukan jarak ke titik yang tak terjangkau dari sebuah garis dasar dan dua sudut ukur memakai aturan sinus.',
    topicIds: ['trigonometri-lanjut'],
    body: `Sebuah tim survei ingin mengetahui jarak ke sebuah menara di seberang sungai yang tidak dapat diseberangi. Mereka memasang **garis dasar** $AB$ sepanjang $120$ meter di tepi yang dapat diakses, lalu mengukur sudut dari tiap ujung:
- Dari $A$, arah ke menara $C$ membentuk sudut $\\angle BAC = 65^\\circ$ terhadap garis dasar.
- Dari $B$, arah ke menara $C$ membentuk sudut $\\angle ABC = 70^\\circ$.

Berapa jarak $AC$ dan $BC$ dari masing-masing ujung garis dasar ke menara? Karena hanya satu sisi dan sudut-sudutnya yang diketahui, aturan sinus menjadi alat yang tepat.`,
    analysis: `Jumlah sudut segitiga $180^\\circ$, sehingga sudut di menara
$$\\angle ACB = 180^\\circ - 65^\\circ - 70^\\circ = 45^\\circ.$$

Aturan sinus menyatakan
$$\\frac{AC}{\\sin \\angle ABC} = \\frac{BC}{\\sin \\angle BAC} = \\frac{AB}{\\sin \\angle ACB}.$$

**Jarak dari $A$ (sisi $AC$).** Sisi $AC$ berhadapan dengan sudut $B = 70^\\circ$:
$$AC = \\frac{AB \\cdot \\sin 70^\\circ}{\\sin 45^\\circ} = \\frac{120 \\times 0{,}9397}{0{,}7071} \\approx 159{,}5\\ \\text{m}.$$

**Jarak dari $B$ (sisi $BC$).** Sisi $BC$ berhadapan dengan sudut $A = 65^\\circ$:
$$BC = \\frac{AB \\cdot \\sin 65^\\circ}{\\sin 45^\\circ} = \\frac{120 \\times 0{,}9063}{0{,}7071} \\approx 153{,}8\\ \\text{m}.$$

Jadi menara berjarak sekitar $159{,}5$ m dari $A$ dan $153{,}8$ m dari $B$. Karena menara paling dekat ke $B$, arah dari $B$ memang membentuk sudut yang lebih besar.

Sebagai pemeriksaan, aturan kosinus pada segitiga yang sama, $AC^2 = 120^2 + 153{,}8^2 - 2(120)(153{,}8)\\cos 70^\\circ$, memberi $AC \\approx 159{,}5$ m, konsisten dengan hasil aturan sinus.`,
    takeaways: [
      'Aturan sinus menyelesaikan segitiga bila diketahui dua sudut dan satu sisi.',
      'Sudut ketiga diperoleh dari jumlah sudut segitiga, lalu sisi dicari lewat perbandingan sinus.',
      'Triangulasi mengubah jarak yang tak terjangkau menjadi pengukuran sudut yang mudah.',
      'Aturan sinus dan aturan kosinus saling memverifikasi hasil pada segitiga yang sama.',
    ],
    reflection: [
      'Mengapa memilih garis dasar yang panjangnya diketahui lebih mudah daripada mengukur jarak ke menara secara langsung?',
      'Bagaimana hasilnya berubah bila sudut di $B$ diperbesar menjadi $80^\\circ$?',
      'Praktik pengukuran mana yang paling menentukan ketelitian hasil: panjang garis dasar atau ketelitian sudut?',
    ],
    source:
      'Mengacu pada metode triangulasi dengan garis dasar dan dua sudut ukur; garis dasar dan sudut realistis, tetapi bukan data survei lapangan tertentu.',
  },
  {
    id: 'kunci-publik-modulo',
    title: 'Kunci Publik Sederhana dengan Aritmetika Modulo',
    category: 'data',
    element: 'bilangan',
    grade: 'XI',
    level: 'mahir',
    estimatedMinutes: 13,
    tags: ['aritmetika modulo', 'kunci publik', 'FPB', 'kongruensi', 'RSA sederhana', 'kriptografi'],
    summary:
      'Membangun pertukaran kunci publik bergaya RSA dengan bilangan kecil melalui FPB, kongruensi, dan perpangkatan modular, sekaligus mengenali batas penyederhanaannya.',
    topicIds: ['teori-bilangan', 'matriks'],
    body: `Sekolah ingin mengirim pesan angka rahasia antarkelas. Ali membangun kunci publik sederhana: ia memilih dua bilangan prima kecil $p = 5$ dan $q = 11$, lalu menghitung $n = p \\cdot q = 55$ dan $\\varphi(n) = (p-1)(q-1) = 40$. Ia memilih kunci publik $e = 3$ karena $\\gcd(3, 40) = 1$, sehingga pasangan kunci publiknya $(e, n) = (3, 55)$. Kunci privatnya adalah $d$ dengan $3d \\equiv 1 \\pmod{40}$.

Pesan yang dikirim berupa satu angka $m = 9$, cukup kecil agar seluruh hitungan dapat dikerjakan dengan tangan. Bagaimana pesan itu disandikan, mengapa penerima dapat memulihkannya kembali, dan mengapa skema sekecil ini tidak layak dipakai untuk keamanan sungguhan?`,
    analysis: `**Menentukan kunci privat.** Cari invers dari $3$ modulo $40$ dengan algoritma Euklides:
$$40 = 13 \\cdot 3 + 1.$$
Maka $1 = 40 - 13 \\cdot 3$, sehingga $3(-13) \\equiv 1 \\pmod{40}$. Karena $-13 \\equiv 27 \\pmod{40}$, kunci privatnya $d = 27$.

**Menyandikan pesan.** Pesan $m = 9$ dienkripsi dengan $c \\equiv m^{e} \\pmod{n}$:
$$c \\equiv 9^{3} = 729 \\equiv 14 \\pmod{55},$$
karena $55 \\cdot 13 = 715$. Jadi sandi yang dikirim adalah $c = 14$.

**Memulihkan pesan.** Penerima menghitung $m \\equiv c^{d} = 14^{27} \\pmod{55}$ dengan perpangkatan berulang:
$$14^{2} \\equiv 31, \\quad 14^{4} \\equiv 26, \\quad 14^{8} \\equiv 16, \\quad 14^{16} \\equiv 36 \\pmod{55}.$$
Karena $27 = 16 + 8 + 2 + 1$,
$$14^{27} \\equiv 36 \\cdot 16 \\cdot 31 \\cdot 14 \\equiv 9 \\pmod{55}.$$
Pesan $m = 9$ kembali utuh.

**Mengapa berhasil.** Teorema Euler (dengan $\\gcd(m, n) = 1$) memberi $m^{\\varphi(n)} \\equiv 1 \\pmod{n}$. Karena $ed = 3 \\cdot 27 = 81 = 1 + 2 \\cdot 40$, maka $m^{ed} = m^{1 + 2\\varphi(n)} \\equiv m \\pmod{n}$. Penerima dapat membalik enkripsi karena memegang $d$, sedangkan $d$ sulit dicari tanpa memfaktorkan $n$.

**Kaitan dengan blok dan vektor.** Pesan yang lebih panjang daripada $n$ dipecah menjadi blok angka. Tiap blok diperlakukan sebagai deretan komponen dan dikenai peta modular yang sama, sehingga pengelolaan banyak komponen menyerupai operasi pada vektor dan matriks.

**Batas penyederhanaan.** Angka $n = 55$ dapat difaktorkan seketika, sehingga kunci privat $d = 27$ mudah ditemukan. RSA sungguhan memakai modulus sekitar $2048$ bit, menambah pengacakan (padding), dan memilih $e$ serta $d$ dengan prosedur yang jauh lebih ketat. Skema di atas hanya laboratorium konsep, bukan alat pengamanan.`,
    takeaways: [
      'Kunci publik dapat dibuka siapa saja; keamanannya bergantung pada kerumitan memperoleh kunci privat dari kunci publik.',
      'Algoritma Euklides memberi FPB sekaligus invers modulo yang dipakai sebagai kunci privat.',
      'Perpangkatan modular memakai pengkuadratan berulang agar eksponen besar dapat dihitung langkah demi langkah.',
      'Skema dengan bilangan kecil hanya alat belajar; RSA sungguhan memakai modulus ratusan digit.',
    ],
    reflection: [
      'Mengapa $n = 55$ terlalu kecil untuk dianggap aman, dan apa yang berubah bila bilangan primanya jauh lebih besar?',
      'Apa peran $\\gcd(e, \\varphi(n)) = 1$ dalam pemilihan kunci publik?',
      'Mengapa penerima dapat membalik enkripsi sementara penyadap tidak?',
    ],
    source:
      'Skenario pengajaran yang dikonstruksi mengikuti gagasan kunci publik RSA (Rivest, Shamir, Adleman, 1977); bilangan prima dan eksponen dipilih sangat kecil agar FPB, invers modulo, dan perpangkatan modular dapat dihitung dengan tangan, sehingga bukan parameter kriptografi yang aman.',
  },
  {
    id: 'jaringan-rute-matriks',
    title: 'Jaringan Rute dan Perkalian Matriks',
    category: 'data',
    element: 'aljabar-fungsi',
    grade: 'XI',
    level: 'cakap',
    estimatedMinutes: 11,
    tags: ['matriks', 'perkalian matriks', 'matriks ketetanggaan', 'jaringan berarah', 'lintasan', 'vektor baris'],
    summary:
      'Membaca jaringan rute berarah sebagai matriks ketetanggaan, mengalikan matriks untuk menghitung banyak rute dua langkah, lalu menafsirkan tiap entrinya.',
    topicIds: ['matriks', 'vektor'],
    body: `Sebuah layanan kurir memiliki empat simpul $A$, $B$, $C$, dan $D$. Rute bersifat satu arah:
- $A \\to B$ dan $A \\to C$;
- $B \\to C$ dan $B \\to D$;
- $C \\to D$;
- $D \\to A$.

Jaringan ini disusun sebagai matriks ketetanggaan $M$, dengan entri $M_{ij}$ menyatakan banyak rute langsung dari simpul $i$ ke simpul $j$. Berapa banyak rute **dua langkah** dari $A$ ke $D$, dan bagaimana menafsirkan entri pada $M^{2}$?`,
    analysis: `Urutkan simpul $A, B, C, D$ sebagai baris dan kolom. Matriks ketetanggaan jaringan adalah
$$M = \\begin{pmatrix} 0 & 1 & 1 & 0 \\\\ 0 & 0 & 1 & 1 \\\\ 0 & 0 & 0 & 1 \\\\ 1 & 0 & 0 & 0 \\end{pmatrix}.$$

**Mengapa $M^{2}$ menghitung rute dua langkah.** Entri $(M^{2})_{ij} = \\sum_{k} M_{ik} M_{kj}$ menjumlahkan seluruh simpul perantara $k$: dari $i$ ke $k$, lalu dari $k$ ke $j$. Setiap pasangan rute langsung yang bersambung menyumbang satu.

**Menghitung satu entri.** Untuk rute dari $A$ ke $D$:
$$(M^{2})_{AD} = M_{AB}M_{BD} + M_{AC}M_{CD} = 1 \\cdot 1 + 1 \\cdot 1 = 2,$$
yaitu $A \\to B \\to D$ dan $A \\to C \\to D$.

**Hasil lengkap.**
$$M^{2} = \\begin{pmatrix} 0 & 0 & 1 & 2 \\\\ 1 & 0 & 0 & 1 \\\\ 1 & 0 & 0 & 0 \\\\ 0 & 1 & 1 & 0 \\end{pmatrix}.$$
Baris $A$ menyatakan tiga rute dua langkah dari $A$ (satu ke $C$, dua ke $D$); baris $B$ menyatakan dua (satu ke $A$, satu ke $D$); baris $C$ menyatakan satu (ke $A$); baris $D$ menyatakan dua (ke $B$ dan ke $C$). Entri diagonal semuanya nol, menandakan tidak ada rute dua langkah yang kembali ke simpul asal.

**Sudut pandang vektor.** Bila perjalanan dimulai di $A$, tulis vektor baris $v_0 = (1, 0, 0, 0)$. Setelah satu langkah $v_1 = v_0 M = (0, 1, 1, 0)$, dan setelah dua langkah $v_2 = v_1 M = (0, 0, 1, 2)$, sama dengan baris $A$ pada $M^{2}$. Cara ini memperlihatkan bahwa $v_k = v_0 M^{k}$ menyebarkan banyak rute ke tiap simpul.

Sebagai catatan, $M^{k}$ menghitung lintasan sepanjang $k$ langkah dan mengizinkan simpul dikunjungi ulang. Urutan perkalian tetap penting karena matriks tidak komutatif.`,
    takeaways: [
      'Matriks ketetanggaan mencatat banyak rute langsung antarsimpul.',
      'Entri $M^{2}$ menghitung rute dua langkah dengan menjumlahkan seluruh simpul perantara.',
      'Vektor baris dikalikan matriks menyebarkan banyak rute ke tiap simpul.',
      'Urutan perkalian matriks penting karena matriks tidak komutatif.',
    ],
    reflection: [
      'Mengapa entri $(M^{2})_{ij}$ berupa jumlahan atas simpul perantara, bukan hasil kali biasa?',
      'Apa yang berubah bila sebuah rute dua arah ditambahkan pada jaringan?',
      'Bagaimana kamu memperoleh banyak rute tiga langkah dari matriks ini?',
    ],
    source:
      'Skenario pengajaran yang dikonstruksi mengikuti metode baku matriks ketetanggaan pada teori graf, dengan entri pangkat matriks menghitung banyak lintasan sepanjang sejumlah langkah; jaringan dan simpulnya dipilih kecil agar hasil perkalian mudah diperiksa, bukan data layanan logistik tertentu.',
  },
  {
    id: 'energi-dari-daya',
    title: 'Energi Listrik dari Grafik Daya',
    category: 'kalkulus',
    subject: 'matematika-lanjut',
    element: 'kalkulus',
    grade: 'XII',
    level: 'cakap',
    estimatedMinutes: 12,
    tags: ['integral', 'daya', 'energi', 'luas di bawah kurva', 'grafik sepotong', 'laju perubahan'],
    summary:
      'Menghitung energi listrik sebagai luas di bawah grafik daya sepotong garis lurus, lalu membandingkannya dengan daya rata-rata.',
    topicIds: ['integral', 'aplikasi-turunan'],
    body: `Sebuah alat elektronik mengonsumsi daya yang berubah terhadap waktu. Daya sesaat $P(t)$ dalam watt dicatat selama $6$ jam dan membentuk grafik garis lurus:
- pada $0 \\le t \\le 2$, daya naik dari $0$ ke $400$ W;
- pada $2 \\le t \\le 4$, daya tetap $400$ W;
- pada $4 \\le t \\le 6$, daya turun dari $400$ ke $0$ W.

Energi listrik yang terpakai adalah **luas di bawah grafik daya**, yaitu $E = \\int P(t)\\,dt$. Berapa energi total dalam Wh dan kWh, dan berapa daya rata-rata selama $6$ jam?`,
    analysis: `Tulis daya sebagai fungsi sepotong-sepotong:
$$P(t) = \\begin{cases} 200t, & 0 \\le t \\le 2 \\\\ 400, & 2 \\le t \\le 4 \\\\ 1200 - 200t, & 4 \\le t \\le 6 \\end{cases}$$
Periksa titik sambungnya: $P(2) = 400$ dari kedua aturan, lalu $P(4) = 400$ serta $P(6) = 0$, sehingga grafiknya tersambung.

**Energi lewat luas bangun.** Grafik terbagi menjadi dua segitiga dan satu persegi panjang:
$$E = \\tfrac{1}{2}(2)(400) + (2)(400) + \\tfrac{1}{2}(2)(400) = 400 + 800 + 400 = 1600\\ \\text{Wh}.$$
Dalam kWh, $E = 1{,}6\\ \\text{kWh}$.

**Energi lewat integral.** Setiap penggal garis lurus membentuk trapesium, sehingga
$$\\int_{0}^{2} 200t\\,dt = 400, \\qquad \\int_{2}^{4} 400\\,dt = 800, \\qquad \\int_{4}^{6}(1200 - 200t)\\,dt = 400,$$
dengan jumlah yang sama, $1600\\ \\text{Wh}$.

**Daya rata-rata.**
$$\\bar{P} = \\frac{E}{\\Delta t} = \\frac{1600}{6} = \\frac{800}{3} \\approx 266{,}7\\ \\text{W}.$$
Daya rata-rata ini jauh di bawah puncak $400$ W karena alat menghabiskan waktu untuk menanjak dan menurun.

**Sudut pandang turunan.** Kemiringan tiap penggal adalah laju perubahan daya $P'(t)$. Pada penggal pertama $P'(t) = 200$ W per jam (daya menanjak), pada penggal kedua $P'(t) = 0$ (daya mendatar), dan pada penggal ketiga $P'(t) = -200$ W per jam (daya menurun). Turunan membaca kemiringan grafik, sedangkan integral membaca luas di bawahnya.

Sebagai gambaran tagihan, bila tarif listrik sekitar Rp1.500 per kWh, pemakaian $1{,}6$ kWh setara sekitar Rp2.400.`,
    takeaways: [
      'Energi adalah akumulasi daya terhadap waktu, yaitu $E = \\int P(t)\\,dt$.',
      'Luas di bawah grafik garis lurus dapat dihitung sebagai bangun datar atau lewat integral tentu.',
      'Daya rata-rata sama dengan energi total dibagi selang waktu, bukan rata-rata nilai puncak.',
      'Turunan membaca kemiringan (laju perubahan daya), integral membaca luas (energi).',
    ],
    reflection: [
      'Mengapa daya rata-rata lebih rendah daripada daya puncak $400$ W?',
      'Bagaimana energi total berubah bila penggal daya tetap diperpanjang dua jam?',
      'Mengapa luas di bawah grafik daya, bukan tinggi puncaknya, yang menentukan biaya listrik?',
    ],
    source:
      'Skenario pengajaran yang dikonstruksi mengikuti hubungan baku energi sebagai integral daya terhadap waktu pada rangkaian listrik; profil daya disusun dari penggal garis lurus dengan angka bulat agar luas di bawah grafik mudah dihitung, bukan data pengukuran alat tertentu.',
  },
];

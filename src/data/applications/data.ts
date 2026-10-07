import type { Application } from '@/types/content';

export const dataApplications: Application[] = [
  {
    id: 'survei-statistik',
    title: 'Membaca Hasil Survei dengan Kritis',
    category: 'data',
    element: 'data-peluang',
    grade: 'X',
    level: 'dasar',
    estimatedMinutes: 9,
    explorationId: 'distribusi-sebaran',
    tags: ['statistika', 'rata-rata', 'median', 'sebaran', 'survei'],
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
    takeaways: [
      'Rata-rata mudah ditarik oleh nilai ekstrem; median lebih tahan.',
      'Sebaran dan ukuran sampel sama pentingnya dengan nilai pusat.',
    ],
    reflection: [
      'Bagaimana kamu akan memeriksa klaim "rata-rata naik" sebelum mempercayainya?',
      'Ukuran statistik mana yang paling jujur untuk data dengan nilai ekstrem?',
    ],
  },
  {
    id: 'regresi-nilai-ujian',
    title: 'Apakah Waktu Belajar Berkaitan dengan Nilai?',
    category: 'data',
    element: 'data-peluang',
    grade: 'XI',
    level: 'cakap',
    estimatedMinutes: 13,
    explorationId: 'regresi-sim',
    tags: ['regresi linear', 'korelasi', 'data bivariat', 'ekstrapolasi', 'pemodelan'],
    summary: 'Menggunakan regresi linear untuk menduga hubungan dua variabel kuantitatif.',
    topicIds: ['data-bivariat', 'regresi'],
    body: `Delapan siswa mencatat rata-rata **waktu belajar** per minggu (jam) dan **nilai** ujian matematika (skala 0–20):

| Waktu belajar $x$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Nilai ujian $y$ | 2 | 4 | 5 | 4 | 7 | 8 | 9 | 11 |

Pertanyaan pemicunya: jika seorang siswa belajar 10 jam seminggu, berapa nilai yang wajar kita duga, dan seberapa jauh dugaan itu boleh dipercaya?`,
    analysis: `Dengan metode kuadrat terkecil diperoleh garis regresi

$$\\hat{y} = 1{,}19x + 0{,}89, \\qquad r \\approx 0{,}97.$$

Karena $r$ sangat dekat dengan 1, hubungan linear positifnya kuat: siswa yang belajar lebih lama cenderung memperoleh nilai lebih tinggi.

Untuk siswa yang belajar 10 jam, perkiraan nilainya $\\hat{y} = 1{,}19(10) + 0{,}89 \\approx 12{,}8$. **Keterbatasan:** nilai dugaan ini adalah **ekstrapolasi** karena $x = 10$ berada di luar rentang data pengamatan ($x$ hanya 1–8), sehingga garis regresi dipaksa berlaku di luar wilayah yang didukung data. Selain itu, kuatnya korelasi **bukan bukti sebab-akibat** — mungkin ada faktor lain seperti kualitas belajar atau latar belakang siswa.`,
    takeaways: [
      'Koefisien korelasi mengukur kekuatan hubungan linear, bukan sebab-akibat.',
      'Menduga di luar rentang data (ekstrapolasi) berisiko menyesatkan.',
    ],
    reflection: [
      'Mengapa korelasi kuat tidak cukup untuk menyimpulkan sebab-akibat?',
      'Sejauh mana kamu boleh memakai garis regresi ini untuk membuat prediksi?',
    ],
  },
  {
    id: 'kata-sandi',
    title: 'Menaksir Banyak Kata Sandi dengan Pencacahan',
    category: 'data',
    element: 'data-peluang',
    grade: 'XII',
    level: 'dasar',
    estimatedMinutes: 8,
    explorationId: 'peluang-sim',
    tags: ['pencacahan', 'permutasi', 'kombinasi', 'kata sandi', 'keamanan'],
    summary: 'Menggunakan aturan perkalian untuk menilai seberapa kuat sebuah kata sandi.',
    topicIds: ['permutasi-kombinasi', 'peluang'],
    body: `Aturan pencacahan membantu menilai keamanan kata sandi. Jika setiap posisi dipilih bebas dari sekumpulan karakter, banyak kemungkinan diperoleh dari **aturan perkalian**, bukan permutasi tanpa pengulangan. Mari bandingkan beberapa bentuk kata sandi yang umum dipakai.`,
    analysis: `- **PIN 4 angka** ($10$ kemungkinan tiap posisi): $10^{4} = 10.000$ kemungkinan.
- **Kata sandi 6 huruf kecil** ($26$ kemungkinan): $26^{6} = 308.915.776$ kemungkinan.
- **8 karakter huruf kecil dan angka** ($36$ kemungkinan): $36^{8} \\approx 2{,}82 \\times 10^{12}$ kemungkinan.

Setiap tambahan karakter memperbesar kemungkinan secara **perkalian**, bukan penjumlahan. Karena itu menambah panjang kata sandi jauh lebih efektif daripada hanya mengganti huruf dengan angka. Peluang menebaknya secara acak adalah $\\dfrac{1}{\\text{banyak kemungkinan}}$, yang menyusut sangat cepat seiring bertambahnya panjang.`,
    takeaways: [
      'Aturan perkalian: panjang lebih menentukan kekuatan daripada variasi karakter.',
      'Peluang menebak adalah kebalikan dari banyaknya kemungkinan.',
    ],
    reflection: [
      'Mengapa menambah satu karakter lebih ampuh daripada mengganti huruf dengan angka?',
      'Bagaimana kamu memakai pencacahan untuk menilai kata sandi milikmu sendiri?',
    ],
  },
  {
    id: 'tes-kesehatan',
    title: 'Tes Kesehatan: Ketika Hasil Positif Belum Tentu Sakit',
    category: 'data',
    element: 'data-peluang',
    grade: 'XII',
    level: 'mahir',
    estimatedMinutes: 12,
    explorationId: 'peluang-bersyarat-sim',
    tags: ['peluang bersyarat', 'teorema Bayes', 'sensitivitas', 'spesifisitas', 'prevalensi'],
    summary: 'Menghitung peluang benar-benar sakit setelah hasil tes positif, dan mengapa akurasi tes saja menyesatkan.',
    topicIds: ['peluang-bersyarat', 'peluang'],
    body: `Sebuah berita menulis: *"Tes ini 95% akurat, jadi kalau hasilmu positif, hampir pasti kamu sakit."* Pernyataan itu terdengar masuk akal, tetapi bisa sangat menyesatkan. Kuncinya bukan hanya akurasi tes, melainkan seberapa banyak orang di populasi yang benar-benar sakit (**prevalensi**).

Misalkan sebuah penyakit hanya diderita $1\\%$ penduduk. Tes memiliki **sensitivitas** $95\\%$ (memberi hasil positif pada orang sakit) dan **spesifisitas** $95\\%$ (memberi hasil negatif pada orang sehat).

Pertanyaan pemicunya: dari semua orang yang hasil tesnya positif, berapa proporsi yang benar-benar sakit?`,
    analysis: `Bayangkan $10.000$ orang dites. Dari $1\\%$ prevalensi, sekitar $100$ orang sakit dan $9.900$ orang sehat.

| | Hasil positif | Hasil negatif | Total |
|---|---|---|---|
| Sakit | $95$ | $5$ | $100$ |
| Sehat | $495$ | $9.405$ | $9.900$ |
| Total | $590$ | $9.410$ | $10.000$ |

Dari $9.900$ orang sehat, $5\\%$ (yakni $495$ orang) tetap mendapat hasil positif palsu. Jadi total hasil positif adalah $95 + 495 = 590$, tetapi hanya $95$ di antaranya benar-benar sakit:

$$P(\\text{sakit} \\mid \\text{positif}) = \\frac{0{,}95 \\times 0{,}01}{0{,}95 \\times 0{,}01 + 0{,}05 \\times 0{,}99} = \\frac{0{,}0095}{0{,}059} \\approx 0{,}161.$$

Meski tes "95% akurat", hanya sekitar $16{,}1\\%$ orang dengan hasil positif yang benar-benar sakit. Karena penyakitnya jarang, hasil positif palsu dari kelompok sehat yang besar justru jauh lebih banyak daripada hasil positif yang benar. Inilah yang disebut **kekeliruan angka dasar** (base rate fallacy).`,
    takeaways: [
      'Hasil tes harus dibaca bersama prevalensi, bukan dari akurasi tes saja.',
      'Saat prevalensi rendah, sebagian besar hasil positif bisa jadi positif palsu.',
    ],
    reflection: [
      'Jika prevalensi naik menjadi $10\\%$, apakah peluang di atas lebih besar atau lebih kecil? Perkirakan dulu sebelum menghitung.',
      'Mengapa dokter tetap memesan tes lanjutan walau hasil pertama positif?',
    ],
  },
  {
    id: 'korelasi-sebab-akibat',
    title: 'Korelasi atau Sebab-Akibat?',
    category: 'data',
    element: 'data-peluang',
    grade: 'XII',
    level: 'cakap',
    estimatedMinutes: 11,
    explorationId: 'asosiasi-kausalitas-tabel',
    tags: ['asosiasi', 'kausalitas', 'variabel perancu', 'korelasi palsu', 'penalaran'],
    summary: 'Membedakan hubungan yang benar-benar sebab-akibat dari korelasi yang hanya dibawa variabel lain.',
    topicIds: ['asosiasi-kausalitas', 'regresi', 'data-bivariat'],
    body: `Sebuah artikel menyimpulkan: *"Remaja yang sering bermain gim memiliki nilai matematika lebih rendah. Jadi bermain gim merusak nilai."* Sebuah studi terhadap $500$ remaja memang menemukan korelasi $r = -0{,}45$ antara jam bermain gim dan nilai matematika.

Tetapi korelasi bukan otomatis sebab-akibat. Banyak faktor dapat memengaruhi kedua variabel sekaligus, sehingga menciptakan hubungan yang tampak padahal bukan penyebab langsung. Faktor semacam ini disebut **variabel perancu** (confounder).

Pertanyaan pemicunya: sebelum menyimpulkan "gim merusak nilai", variabel lain apa yang perlu diperiksa lebih dulu?`,
    analysis: `Kandidat perancu yang kuat adalah **jam belajar** dan **jam tidur**. Remaja yang menghabiskan lebih banyak waktu bermain gim cenderung juga belajar lebih sedikit, dan kurang tidur juga menurunkan nilai. Jika kita kelompokkan siswa menurut jam belajar per hari:

- Kurang dari $1$ jam: korelasi gim–nilai sekitar $r = -0{,}08$.
- $1$–$2$ jam: korelasi sekitar $r = -0{,}07$.
- Lebih dari $2$ jam: korelasi sekitar $r = -0{,}09$.

Korelasi yang semula $r = -0{,}45$ menyusut mendekati nol di dalam tiap kelompok. Artinya, sebagian besar hubungan tadi dijelaskan oleh variabel perancu, bukan oleh gim itu sendiri. Ada dua jebakan lain:

- **Arah terbalik:** mungkin siswa yang nilainya sudah rendah justru lebih banyak bermain gim untuk pelarian.
- **Korelasi palsu:** dua hal bisa bergerak bersama karena satu penyebab bersama. Penjualan es krim dan kejadian tenggelam berkorelasi tinggi, padahal penyebabnya musim panas, bukan es krim.

Menyimpulkan sebab-akibat menuntut bukti yang lebih kuat, misalnya eksperimen dengan kelompok pembanding atau kontrol variabel perancu.`,
    takeaways: [
      'Korelasi hanya menunjukkan gerak bersama, bukan arah sebab-akibat.',
      'Variabel perancu dapat menciptakan hubungan yang tampak nyata tetapi menyesatkan.',
      'Uji sebab-akibat butuh eksperimen atau kontrol variabel, bukan sekadar angka korelasi.',
    ],
    reflection: [
      'Untuk klaim "siswa yang sarapan nilainya lebih baik", variabel perancu apa yang mungkin berperan?',
      'Carilah satu judul berita yang mengubah korelasi menjadi klaim sebab-akibat, lalu susun sanggahanmu.',
    ],
  },
  {
    id: 'statistik-harian',
    title: 'Statistik di Balik Angka Sehari-hari',
    category: 'data',
    element: 'data-peluang',
    grade: 'X',
    level: 'dasar',
    estimatedMinutes: 8,
    explorationId: 'distribusi-sebaran',
    tags: ['persentase', 'diskon', 'rata-rata', 'indeks', 'literasi angka'],
    summary: 'Menafsirkan persentase, diskon bertingkat, dan klaim pertumbuhan yang muncul tiap hari.',
    topicIds: ['statistik-dalam-kehidupan', 'analisis-distribusi-data'],
    body: `Angka statistik ada di mana-mana: label diskon, berita pertumbuhan ekonomi, hingga peringkat di media sosial. Banyak di antaranya sengaja dibaca sekilas sehingga terasa lebih mengesankan daripada kenyataan.

Contoh sehari-hari: sebuah toko memasang spanduk *"DISKON 50% + 20%"*. Banyak pembeli mengira total diskonnya $70\\%$. Ada juga klaim *"nilai rata-rata kelas naik 5 poin"* tanpa menyebut basisnya.

Pertanyaan pemicunya: berapa diskon sebenarnya pada spanduk itu, dan apa yang harus dicermati sebelum mempercayai klaim persentase?`,
    analysis: `**Diskon bertingkat.** Misalkan harga awal Rp200.000. Diskon $50\\%$ menyisakan $200.000 \\times 0{,}5 = 100.000$. Diskon $20\\%$ berikutnya dihitung dari harga yang sudah disurutkan, bukan dari harga awal: $100.000 \\times 0{,}8 = 80.000$. Jadi pembeli membayar $80.000$, yaitu $40\\%$ dari harga awal, sehingga diskon totalnya $60\\%$, bukan $70\\%$. Secara umum dua diskon dikalikan: $1 - 0{,}5 \\times 0{,}8 = 0{,}6$.

**Persen naik dan turun tidak simetris.** Harga naik $20\\%$ lalu turun $20\\%$ tidak kembali ke semula: $100 \\times 1{,}2 \\times 0{,}8 = 96$, yaitu $4\\%$ lebih rendah dari awal.

**Basis persen penting.** Naik dari $40$ ke $45$ adalah kenaikan $5$ poin, tetapi bila dinyatakan sebagai persen terhadap nilai awal sama dengan $\\frac{45-40}{40} = 0{,}125 = 12{,}5\\%$. Angka "naik 5" dan "naik $12{,}5\\%$" menggambarkan kejadian yang sama dengan kesan berbeda.`,
    takeaways: [
      'Persen bertingkat dikalikan, bukan dijumlahkan.',
      'Kenaikan dan penurunan persen tidak saling meniadakan.',
      'Selalu tanyakan "persen dari apa" sebelum menilai sebuah klaim.',
    ],
    reflection: [
      'Sebuah barang didiskon $30\\%$ lalu didiskon lagi $10\\%$. Berapa diskon totalnya?',
      'Klaim "penjualan naik 5" bisa terdengar hebat atau biasa. Data tambahan apa yang kamu butuhkan?',
    ],
  },
];

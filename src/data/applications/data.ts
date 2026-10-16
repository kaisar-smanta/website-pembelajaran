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

Kedua kelas punya rata-rata sama, tetapi kondisinya sangat berbeda. Median kelas B ($60$) jauh di bawah rata-ratanya karena dua nilai ekstrem $100$ dan $115$ menarik rata-rata ke atas. Ukuran sampel juga menentukan: rata-rata dari lima nilai jauh lebih mudah tergeser daripada rata-rata dari ribuan nilai. **Membaca informasi statistik berarti memeriksa lebih dari sekadar satu angka.**`,
    takeaways: [
      'Rata-rata mudah ditarik oleh nilai ekstrem; median lebih tahan.',
      'Sebaran dan ukuran sampel sama pentingnya dengan nilai pusat.',
      'Median dan jangkauan interkuartil (IQR) memberi gambaran yang lebih jujur pada data yang memuat nilai ekstrem.',
    ],
    reflection: [
      'Bagaimana kamu akan memeriksa klaim "rata-rata naik" sebelum mempercayainya?',
      'Ukuran statistik mana yang paling jujur untuk data dengan nilai ekstrem?',
    ],
    source:
      'Skenario pengajaran yang dikonstruksi dengan angka realistis mengikuti pola pelaporan survei di media; dua kumpulan nilai dirancang agar rata-ratanya sama tetapi mediannya berbeda, bukan data survei tertentu.',
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

Untuk siswa yang belajar 10 jam, perkiraan nilainya $\\hat{y} = 1{,}19(10) + 0{,}89 \\approx 12{,}8$. **Keterbatasan:** nilai dugaan ini adalah **ekstrapolasi** karena $x = 10$ berada di luar rentang data pengamatan ($x$ hanya 1–8), sehingga garis regresi dipaksa berlaku di luar wilayah yang didukung data. Selain itu, kuatnya korelasi **bukan bukti sebab-akibat**. Mungkin ada faktor lain seperti kualitas belajar atau latar belakang siswa.`,
    takeaways: [
      'Koefisien korelasi mengukur kekuatan hubungan linear, bukan sebab-akibat.',
      'Menduga di luar rentang data (ekstrapolasi) berisiko menyesatkan.',
    ],
    reflection: [
      'Mengapa korelasi kuat tidak cukup untuk menyimpulkan sebab-akibat?',
      'Sejauh mana kamu boleh memakai garis regresi ini untuk membuat prediksi?',
    ],
    source:
      'Skenario pengajaran yang dikonstruksi dengan angka realistis: pasangan data jam belajar dan nilai dirancang agar garis regresi serta korelasinya mudah dihitung; arah hubungan positif konsisten dengan temuan umum, bukan data siswa tertentu.',
  },
  {
    id: 'pemilihan-tim-lomba',
    title: 'Menyusun Tim Lomba: Permutasi atau Kombinasi?',
    category: 'data',
    element: 'data-peluang',
    grade: 'XII',
    level: 'dasar',
    estimatedMinutes: 8,
    explorationId: 'permutasi-kombinasi-hitung',
    tags: ['pencacahan', 'permutasi', 'kombinasi', 'aturan perkalian', 'pemilihan tim'],
    summary:
      'Membedakan kapan urutan penting (permutasi) dan kapan tidak (kombinasi) dalam pemilihan pengurus dan tim.',
    topicIds: ['permutasi-kombinasi', 'peluang'],
    body: `Seorang guru membentuk pengurus kelas dan tim lomba dari **8 siswa** yang tersedia. Ada dua hal yang harus dihitung:

- Memilih **ketua dan wakil ketua**. Di sini urutan penting: susunan (Ani, Budi) berbeda dari (Budi, Ani).
- Memilih **3 anggota tim** untuk mewakili kelas. Di sini urutan tidak penting: tim {Ani, Budi, Citra} sama saja dengan {Budi, Citra, Ani}.

Pertanyaan pemicunya: mengapa jumlah cara memilih ketua-wakil lebih banyak daripada memilih 3 anggota, dan kapan kita memakai **permutasi** alih-alih **kombinasi**?`,
    analysis: `**Ketua dan wakil (urutan penting).** Memilih 2 dari 8 dengan memperhatikan urutan adalah permutasi:
$$P(8,2) = 8 \\times 7 = 56 \\text{ cara}.$$

**Tiga anggota tim (urutan tidak penting).** Memilih 3 dari 8 tanpa memperhatikan urutan adalah kombinasi:
$$C(8,3) = \\binom{8}{3} = \\frac{8 \\times 7 \\times 6}{3!} = 56 \\text{ cara}.$$
Kedua jawaban kebetulan sama-sama 56, tetapi alasannya berbeda: $P(8,2)$ menghitung susunan dua orang, sedangkan $C(8,3)$ menghitung tiga orang tanpa urutan. Angka yang sama jangan sampai membuat kita salah memilih rumus.

**Apa peran urutan.** Jika 3 anggota terpilih itu kemudian diberi tiga tugas berbeda (misalnya ketua tim, pencatat, dan pembicara), setiap tim dapat disusun dalam $3! = 6$ cara, sehingga totalnya
$$C(8,3) \\times 3! = 56 \\times 6 = 336 = P(8,3).$$
Jadi $P(8,3)$ dapat dipandang sebagai "pilih 3 orang lalu urutkan mereka". Kalimat kuncinya: pakai **kombinasi** bila urutan tidak dibedakan, dan **permutasi** bila urutan membedakan hasil.`,
    takeaways: [
      'Permutasi dipakai saat urutan penting, kombinasi saat urutan tidak penting.',
      'Kombinasi dapat diubah menjadi permutasi dengan mengalikan faktorial banyak objek yang dipilih.',
      'Hubungan keduanya: $P(n,k) = C(n,k) \\cdot k!$.',
    ],
    reflection: [
      'Bagaimana kamu memutuskan antara permutasi dan kombinasi pada soal pemilihan pengurus?',
      'Mengapa $C(8,3) \\times 3! = P(8,3)$? Jelaskan makna tiap langkahnya.',
      'Beri satu contoh dari kehidupanmu yang memakai kombinasi, bukan permutasi.',
    ],
    source:
      'Skenario pengajaran yang dikonstruksi mengikuti praktik umum pemilihan pengurus kelas dan tim lomba; banyaknya siswa dipilih agar perhitungan pencacahan mudah diperiksa, bukan data satu kelas tertentu.',
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
    body: `Sebuah berita menulis: *"Tes ini 95% akurat, jadi kalau hasilmu positif, hampir pasti kamu sakit."* Pernyataan itu terdengar masuk akal, tetapi bisa sangat menyesatkan. Kuncinya adalah seberapa banyak orang di populasi yang benar-benar sakit (**prevalensi**), bukan hanya akurasi tes.

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
    source:
      'Mengacu pada konsep sensitivitas, spesifisitas, dan prevalensi pada uji saring penyakit (prinsip yang lazim dirujuk WHO); dibulatkan untuk pembelajaran dan bukan rujukan medis maupun data satu penyakit tertentu.',
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

- Kurang dari $1$ jam: korelasi gim-nilai sekitar $r = -0{,}08$.
- $1$–$2$ jam: korelasi sekitar $r = -0{,}07$.
- Lebih dari $2$ jam: korelasi sekitar $r = -0{,}09$.

Korelasi yang semula $r = -0{,}45$ menyusut mendekati nol di dalam tiap kelompok. Artinya, sebagian besar hubungan tadi dijelaskan oleh variabel perancu, bukan oleh gim itu sendiri. Ada dua jebakan lain:

- **Arah terbalik:** mungkin siswa yang nilainya sudah rendah justru lebih banyak bermain gim untuk pelarian.
- **Korelasi palsu:** dua hal bisa bergerak bersama karena satu penyebab bersama. Penjualan es krim dan kejadian tenggelam berkorelasi tinggi, padahal penyebabnya musim panas, bukan es krim.

Menyimpulkan sebab-akibat menuntut bukti yang lebih kuat, misalnya eksperimen dengan kelompok pembanding atau kontrol variabel perancu.`,
    takeaways: [
      'Korelasi hanya menunjukkan gerak bersama, bukan arah sebab-akibat.',
      'Variabel perancu dapat menciptakan hubungan yang tampak nyata tetapi menyesatkan.',
      'Uji sebab-akibat butuh eksperimen atau kontrol variabel; angka korelasi saja tidak cukup.',
    ],
    reflection: [
      'Untuk klaim "siswa yang sarapan nilainya lebih baik", variabel perancu apa yang mungkin berperan?',
      'Carilah satu judul berita yang mengubah korelasi menjadi klaim sebab-akibat, lalu susun sanggahanmu.',
    ],
    source:
      'Skenario pengajaran yang dikonstruksi dengan angka realistis mengikuti pola laporan gaya hidup remaja; korelasi awal dan penyusutannya setelah mengontrol variabel dirancang untuk melatih penalaran kausal, bukan data studi tertentu.',
  },
  {
    id: 'statistik-harian',
    title: 'Rata-rata Berbobot: Menghitung Nilai Akhir Rapor',
    category: 'data',
    element: 'data-peluang',
    grade: 'X',
    level: 'dasar',
    estimatedMinutes: 8,
    explorationId: 'distribusi-sebaran',
    tags: ['rata-rata berbobot', 'mean', 'persentase', 'literasi angka', 'penilaian'],
    summary:
      'Menggunakan rata-rata berbobot untuk nilai akhir dan mengenali kapan rata-rata biasa menyesatkan.',
    topicIds: ['statistik-dalam-kehidupan', 'analisis-distribusi-data'],
    body: `Nilai akhir sebuah mata pelajaran tidak dihitung dengan rata-rata biasa, karena setiap komponen punya **bobot** berbeda. Misalkan komposisinya **tugas 20%**, **ulangan 30%**, dan **ujian akhir 50%**. Nilai seorang siswa adalah tugas $80$, ulangan $70$, dan ujian $60$.

Pertanyaan pemicunya: berapa nilai akhirnya, dan jika ia ingin menaikkannya, komponen mana yang paling menguntungkan diperbaiki lebih dahulu? Rata-rata biasa $\\frac{80+70+60}{3} = 70$ akan memberi jawaban yang **keliru** karena mengabaikan bobot.`,
    analysis: `**Rata-rata berbobot.** Setiap nilai dikalikan bobotnya dalam bentuk desimal, lalu dijumlahkan:
$$\\bar{x} = 0{,}20(80) + 0{,}30(70) + 0{,}50(60) = 16 + 21 + 30 = 67.$$
Jadi nilai akhirnya **67**, bukan $70$. Rata-rata biasa hanya benar bila semua komponen berbobot sama.

**Komponen mana yang paling berpengaruh?** Karena bobot ujian terbesar, kenaikan 10 poin pada ujian menambah $0{,}50 \\times 10 = 5$ poin, sedangkan kenaikan 10 poin pada tugas hanya menambah $0{,}20 \\times 10 = 2$ poin:
- Ujian $60 \\to 70$: nilai akhir $16 + 21 + 35 = 72$.
- Tugas $80 \\to 90$: nilai akhir $18 + 21 + 30 = 69$.

**Pelajaran umum.** Bobot menentukan besarnya dampak tiap komponen, sehingga memperbaiki komponen dengan bobot terbesar paling efisien. Prinsip yang sama berlaku untuk rata-rata gabungan dua kelompok berbeda ukuran, yang harus dibobot banyak anggotanya, bukan dihitung sebagai rata-rata kedua rata-rata. Karena itu biasakan bertanya "**persen dari apa**" dan "**seberapa besar bobotnya**" sebelum menafsirkan sebuah angka.`,
    takeaways: [
      'Rata-rata berbobot mengalikan setiap nilai dengan bobotnya, lalu menjumlahkan hasilnya.',
      'Komponen dengan bobot terbesar paling menentukan nilai akhir.',
      'Rata-rata gabungan dua kelompok berbeda ukuran harus dibobot ukuran kelompoknya.',
    ],
    reflection: [
      'Mengapa rata-rata biasa memberi hasil berbeda dari rata-rata berbobot pada contoh ini?',
      'Jika seluruh bobot diubah menjadi sama, berapa nilai akhirnya? Jelaskan.',
      'Di mana lagi kamu menemukan rata-rata berbobot dalam kehidupan sehari-hari?',
    ],
    source:
      'Skenario pengajaran yang dikonstruksi berdasarkan praktik penilaian di sekolah (bobot tugas, ulangan, dan ujian); angka dibulatkan agar mudah dihitung, bukan kebijakan sekolah tertentu.',
  },
  {
    id: 'komb-sandi-dan-pin',
    title: 'Sandi Portal: Mencacah dengan Batasan dan Prinsip Sarang Merpati',
    category: 'data',
    element: 'data-peluang',
    grade: 'XII',
    level: 'mahir',
    estimatedMinutes: 13,
    explorationId: 'peluang-sim',
    tags: ['pencacahan', 'inkluksi-eksklusi', 'sarang merpati', 'kata sandi', 'kombinatorika'],
    summary:
      'Menghitung banyak kata sandi yang memenuhi syarat dengan komplemen, lalu menjamin tabrakan PIN lewat prinsip sarang merpati.',
    topicIds: ['kombinatorika-lanjut', 'permutasi-kombinasi', 'peluang'],
    body: `Sebuah portal sekolah mewajibkan **kata sandi 6 karakter** dari 26 huruf kecil dan 10 angka (total 36 karakter), dengan syarat **paling sedikit satu angka**. Di sisi lain, tiap siswa memakai **PIN 4 angka** untuk masuk ke perangkat.

Pertanyaan pemicunya: berapa banyak kata sandi yang sah menurut aturan itu, dan berapa banyak siswa minimal harus ada agar **pasti** ada dua siswa dengan PIN yang sama? Kedua pertanyaan menuntut alat kombinatorika yang berbeda: yang pertama **pencacahan dengan batasan**, yang kedua **prinsip sarang merpati**.`,
    analysis: `**Banyak kata sandi sah.** Menghitung langsung "paling sedikit satu angka" merepotkan, jadi pakai **komplemen**. Tanpa batasan, banyak kata sandi 6 karakter adalah
$$36^{6} = 2.176.782.336.$$
Kata sandi yang **tidak** memuat angka berarti seluruhnya huruf kecil:
$$26^{6} = 308.915.776.$$
Maka kata sandi yang memuat paling sedikit satu angka adalah
$$36^{6} - 26^{6} = 2.176.782.336 - 308.915.776 = 1.867.866.560.$$
Inilah contoh **inklusi-eksklusi** sederhana: hitung semuanya, lalu kurangi yang tidak diinginkan. Aturan "semua huruf" mengurangkan sekitar seper tujuh dari total, jadi menambahkan syarat satu angka tetap menyisakan lebih dari **1,86 miliar** kata sandi.

**Menjamin PIN kembar.** PIN 4 angka memiliki $10^{4} = 10.000$ kemungkinan. Bayangkan setiap siswa sebagai "merpati" dan setiap PIN sebagai "sarang". Jika ada $10.000$ siswa, secara logika mereka masih bisa menempati seluruh sarang tanpa tabrakan. Begitu ada **10.001 siswa**, prinsip sarang merpati menjamin **pasti** ada dua siswa dengan PIN yang sama, karena terdapat lebih banyak merpati daripada sarang. Jadi jawabannya $10.000 + 1 = 10.001$ siswa.

Kedua teknik saling melengkapi: pencacahan menghitung **berapa banyak** kemungkinan, sedangkan prinsip sarang merpati menjamin **kapan** suatu tabrakan pasti terjadi, bahkan tanpa mengetahui PIN siapa pun.`,
    takeaways: [
      'Pencacahan dengan batasan sering paling mudah dikerjakan lewat komplemen (hitung semua, kurangi yang dilarang).',
      'Prinsip sarang merpati menjamin keberadaan tabrakan ketika jumlah objek melebihi jumlah wadah.',
      'Untuk $N$ kemungkinan PIN, cukup $N+1$ siswa agar dua PIN pasti sama.',
    ],
    reflection: [
      'Mengapa menghitung "paling sedikit satu angka" lebih mudah lewat komplemen ketimbang langsung?',
      'Berapa banyak siswa yang menjamin dua orang lahir pada bulan yang sama, dan mengapa?',
      'Jika syarat berubah menjadi "paling sedikit dua angka", bagaimana bentuk perhitungannya?',
    ],
    source:
      'Skenario pengajaran yang dikonstruksi mengikuti praktik keamanan informasi pada umumnya (kata sandi enam karakter dari huruf kecil dan angka, serta PIN empat angka); angka dibulatkan agar perhitungan inklusi-eksklusi dan prinsip sarang merpati mudah diperiksa, bukan kebijakan satu layanan tertentu.',
  },
  {
    id: 'cacat-dua-tahap',
    title: 'Menyaring Pesan Phishing Dua Tahap',
    category: 'data',
    element: 'data-peluang',
    grade: 'XII',
    level: 'cakap',
    estimatedMinutes: 11,
    explorationId: 'peluang-bersyarat-sim',
    tags: ['peluang bersyarat', 'penyaringan bertahap', 'keamanan surel', 'pohon peluang'],
    summary:
      'Menghitung peluang surel phishing yang lolos dua lapis filter dan menilai manfaat lapis kedua.',
    topicIds: ['peluang-bersyarat', 'peluang'],
    body: `Sebuah sekolah menerima banyak surel setiap hari dan memperkirakan **4%** di antaranya adalah phishing (penipuan). Untuk menyaringnya dipakai dua lapis filter:

- **Filter 1** menangkap 90% surel phishing dan meloloskan sisanya.
- **Filter 2** memeriksa ulang surel yang lolos filter 1 dan menangkap 80% phishing yang masih tersisa.

Anggap kedua filter tidak pernah salah menandai surel yang aman. Pertanyaan pemicunya: dari semua surel yang akhirnya sampai ke kotak masuk, berapa peluangnya phishing, dan apakah menambah lapis kedua sepadan dengan biayanya?`,
    analysis: `Bayangkan **10.000** surel. Sekitar $4\\%$ atau $400$ surel phishing, dan $9.600$ surel aman.

**Filter 1.** Dari $400$ surel phishing, $90\\%$ tertangkap: $0{,}9 \\times 400 = 360$, sehingga $40$ phishing lolos. Seluruh $9.600$ surel aman lolos.

**Filter 2.** Dari $40$ phishing yang lolos, $80\\%$ tertangkap: $0{,}8 \\times 40 = 32$, sehingga hanya $8$ phishing yang akhirnya sampai ke kotak masuk bersama $9.600$ surel aman.

Maka peluang surel yang sampai benar-benar phishing adalah
$$P(\\text{phishing} \\mid \\text{lolos}) = \\frac{8}{9.600 + 8} \\approx 0{,}083\\%.$$
Tanpa filter kedua, peluang phishing yang lolos adalah $\\frac{40}{10.000} = 0{,}4\\%$. Jadi filter kedua menurunkan phishing yang sampai dari $0{,}4\\%$ menjadi sekitar $0{,}083\\%$, yaitu **lima kali lebih kecil** karena menyaring 80% dari sisa.

**Keputusan.** Manfaat filter kedua dibandingkan dengan biayanya: filter ini layak ditambahkan bila kerugian rata-rata akibat satu surel phishing yang sampai lebih besar daripada $\\frac{\\text{biaya filter 2}}{32\\ \\text{phishing yang tertangkap}}$. Filter kedua bekerja pada populasi kecil (hanya $40$ phishing yang lolos), sehingga jumlah yang diselamatkan tidak sebanding dengan memeriksa seluruh surel. Inilah sebabnya penyaringan disusun berlapis dan berfokus, bukan seragam.`,
    takeaways: [
      'Peluang bersyarat memakai informasi tahap sebelumnya, bukan lagi peluang awal.',
      'Penyaringan bertahap menurunkan phishing yang lolos secara berlipat, tetapi bekerja pada populasi yang makin kecil.',
      'Keputusan menambah lapis filter membandingkan manfaat (phishing yang tertangkap) dengan biayanya.',
    ],
    reflection: [
      'Mengapa filter kedua hanya perlu memeriksa surel yang lolos filter pertama?',
      'Jika filter 2 hanya mendeteksi 50%, berapa peluang phishing yang akhirnya sampai?',
      'Mengapa memeriksa seluruh surel dua kali bisa lebih mahal tanpa menangkap banyak tambahan?',
    ],
    source:
      'Skenario pengajaran yang dikonstruksi mengikuti gagasan penyaringan dua tahap (dua lapis filter) yang lazim dipakai pada penyaring surel; angka 4%, 90%, dan 80% dibulatkan agar peluang bersyaratnya mudah dihitung, bukan data sistem tertentu.',
  },
];

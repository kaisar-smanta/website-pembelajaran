import type { Topic } from '@/types/content';

export const statistikDalamKehidupan: Topic = {
  id: 'statistik-dalam-kehidupan',
  slug: 'statistik-dalam-kehidupan',
  title: 'Statistik dalam Kehidupan',
  subtitle: 'Membaca data dan mengevaluasi klaim',
  grade: 'X',
  phase: 'E',
  element: 'data-peluang',
  status: 'lengkap',
  estimatedMinutes: 80,
  summary:
    'Membaca dan mengevaluasi informasi statistik di media, memilih ukuran pemusatan yang tepat, mengenali grafik yang menyesatkan, serta menarik kesimpulan yang sahih.',
  description:
    'Setiap hari kita disuguhi angka dalam berita, iklan, dan laporan. Angka yang benar sekalipun dapat disajikan secara menyesatkan bila ukuran pemusatan dipilih dengan keliru atau grafiknya dipotong. Pada topik ini kita belajar memilih mean, median, atau modus yang sesuai, memahami pengaruh pencilan, mengenali penyajian yang menyesatkan, dan menyusun kesimpulan yang benar-benar didukung data.',
  keywords: [
    'statistik',
    'mean',
    'median',
    'modus',
    'pencilan',
    'klaim',
    'grafik',
    'rata-rata gabungan',
    'kesimpulan',
    'matriks',
  ],
  prerequisites: ['analisis-distribusi-data'],
  relatedTopics: ['data-bivariat'],
  explorations: ['distribusi-sebaran'],
  prerequisiteKnowledge: [
    'Menghitung mean, median, dan modus data tunggal',
    'Menentukan kuartil dan jangkauan data terurut',
    'Membaca tabel dan diagram',
  ],
  objectives: [
    { text: 'Membaca dan menafsirkan informasi statistik dari tabel, diagram, dan pemberitaan.' },
    { text: 'Memilih ukuran pemusatan (mean, median, modus) yang tepat sesuai bentuk data dan tujuan.' },
    { text: 'Menganalisis pengaruh pencilan terhadap mean dan median.' },
    { text: 'Mengenali penyajian grafik dan klaim statistik yang menyesatkan.' },
    { text: 'Menafsirkan data yang disajikan dalam bentuk matriks (baris sebagai objek, kolom sebagai variabel) untuk menilai klaim media.' },
    { text: 'Menyusun kesimpulan yang sahih berdasarkan data dan sampel yang memadai.' },
  ],
  sections: [
    {
      id: 'tujuan',
      kind: 'tujuan',
      title: 'Tujuan Pembelajaran',
      body: `Setelah mempelajari topik ini, peserta didik dapat membaca dan menafsirkan informasi statistik dari media, memilih ukuran pemusatan yang tepat sesuai konteks, mengenali grafik dan klaim yang menyesatkan, serta menyusun kesimpulan yang sahih berdasarkan data.`,
    },
    {
      id: 'pemantik',
      kind: 'pemantik',
      title: 'Pertanyaan Pemantik',
      body: `Sebuah berita menulis, "Rata-rata penghasilan warga Desa Makmur mencapai Rp8 juta per bulan." Beberapa warga justru merasa penghasilan mereka jauh di bawah angka itu.

- Mengapa "rata-rata" bisa terasa tidak mewakili banyak orang?
- Informasi tambahan apa yang sebaiknya diminta sebelum mempercayai angka itu?`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat jawaban pertanyaan pemantik',
          text: `Mean mudah ditarik ke atas oleh sedikit nilai yang sangat besar. Jika beberapa warga berpenghasilan sangat tinggi, mean dapat melampaui penghasilan mayoritas warga. **Median** (nilai tengah) biasanya lebih menggambarkan warga tipikal. Karena itu, sebelum menerima klaim, kita perlu menanyakan ukuran apa yang dipakai, bagaimana sebarannya, dan siapa yang disurvei.`,
        },
      ],
    },
    {
      id: 'prasyarat',
      kind: 'prasyarat',
      title: 'Prasyarat',
      body: `Sebelum melanjutkan, pastikan kamu dapat:

- menghitung mean, median, dan modus dari sekumpulan data;
- menentukan kuartil dan jangkauan data terurut;
- membaca serta menafsirkan tabel dan diagram.`,
    },
    {
      id: 'konteks',
      kind: 'konteks',
      title: 'Situasi dan Konteks',
      body: `Setiap hari kita bertemu angka: rata-rata nilai ujian, persentase pertumbuhan, indeks kepuasan, hingga grafik penjualan. Angka-angka ini sering dipakai untuk meyakinkan kita. Namun angka yang benar pun dapat disajikan secara menyesatkan — misalnya dengan hanya menonjolkan rata-rata, memotong sumbu grafik, atau membandingkan dua kelompok yang ukurannya berbeda jauh.

Kemampuan statistik yang paling berguna di kehidupan sehari-hari bukan sekadar menghitung, melainkan **bertanya kritis**: ukuran apa yang dipakai, seberapa besar sampelnya, dan apakah kesimpulan yang ditarik memang didukung data.`,
    },
    {
      id: 'konsep',
      kind: 'konsep',
      title: 'Konsep Inti: Memilih Ukuran dan Membaca Klaim',
      body: `Data dapat diringkas dengan ukuran pemusatan. Tidak ada satu ukuran yang selalu terbaik; pilihannya bergantung pada bentuk data dan tujuan.

- **Mean** memanfaatkan semua nilai dan mudah dihitung, tetapi **peka terhadap pencilan**.
- **Median** adalah nilai tengah data terurut dan **tahan terhadap pencilan**, sehingga baik untuk data yang condong atau memuat nilai ekstrem.
- **Modus** adalah nilai yang paling sering muncul, berguna terutama untuk data kategorik.

**Rata-rata gabungan.** Bila dua kelompok berbeda ukuran digabung, kita tidak boleh merata-ratakan kedua mean begitu saja; gunakan bobot ukuran kelompok:
$$\\bar{x}_{gab}=\\frac{n_1\\bar{x}_1+n_2\\bar{x}_2}{n_1+n_2}.$$

**Pencilan** adalah nilai yang jauh dari kelompok utama. Satu pencilan besar dapat menaikkan mean secara drastis sementara median hampir tidak berubah. Karena itu, ketika membaca klaim "rata-rata", selalu tanyakan apakah ada nilai ekstrem yang menyeretnya.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'concept',
          title: 'Inti yang perlu diingat',
          text: 'Angka yang benar belum tentu jujur. Perhitungan dapat tepat, tetapi pemilihan ukuran atau penyajian grafik tetap bisa menyesatkan.',
        },
        {
          kind: 'table',
          caption: 'Memilih ukuran pemusatan',
          headers: ['Ukuran', 'Kapan tepat dipakai'],
          rows: [
            ['Mean', 'Data menyebar wajar tanpa pencilan dan semua nilai ingin dimanfaatkan'],
            ['Median', 'Ada pencilan atau data condong; ingin gambaran nilai tipikal'],
            ['Modus', 'Data kategorik atau ingin tahu nilai yang paling sering muncul'],
          ],
        },
      ],
    },
    {
      id: 'representasi',
      kind: 'representasi',
      title: 'Representasi: Cara Grafik Menyesatkan',
      body: `Informasi statistik hadir dalam banyak bentuk. Memahami cara penyajian membantu kita menilai apakah pesannya jujur. Beberapa manipulasi penyajian yang umum:`,
      blocks: [
        {
          kind: 'table',
          caption: 'Penyajian yang menyesatkan dan tandanya',
          headers: ['Cara grafik menyesatkan', 'Tanda yang perlu dicermati'],
          rows: [
            ['Sumbu tidak dimulai dari nol', 'Perbedaan kecil tampak besar dan dramatis'],
            ['Ukuran sampel diabaikan', 'Persentase dari kelompok berbeda dibandingkan langsung'],
            ['Gambar tiga dimensi berlebihan', 'Luas atau volume menonjolkan perbedaan'],
            ['Hanya menyebut rata-rata', 'Sebaran dan pencilan disembunyikan'],
            ['Korelasi dianggap sebab-akibat', 'Hubungan sebab-akibat tidak terbukti'],
          ],
        },
      ],
    },
    {
      id: 'matriks',
      kind: 'representasi',
      title: 'Data dalam Bentuk Matriks',
      body: `Selain tabel dan diagram, data sering disusun sebagai **matriks**: susunan bilangan dalam baris dan kolom. Kesepakatan yang lazim adalah **baris menyatakan objek** (orang, sekolah, atau bulan) dan **kolom menyatakan variabel** (nilai, tinggi badan, atau penjualan). Dengan begitu, satu baris merangkum seluruh informasi tentang satu objek, sedangkan satu kolom merangkum satu variabel untuk semua objek.

Membaca klaim media dari penyajian seperti ini menuntut kehati-hatian. Periksa apakah baris dan kolomnya jelas, apakah satuannya seragam, dan apakah angka yang dibandingkan memang berasal dari kolom yang sama. Menyamakan angka dari kolom berbeda, atau membandingkan objek yang jumlah datanya tidak sama, adalah cara umum klaim menyesatkan muncul.

Penyajian matriks ini dikembangkan lebih lanjut pada topik **Matriks** di kelas XI, tempat operasi seperti penjumlahan, perkalian, dan determinan dipelajari. Di sini kita cukup memakainya sebagai cara membaca dan menyusun data secara rapi.`,
      blocks: [
        {
          kind: 'table',
          caption: 'Nilai dua mata pelajaran tiga siswa sebagai matriks $3 \\times 2$',
          headers: ['Siswa', 'Matematika', 'Fisika'],
          rows: [
            ['Ayu', '80', '75'],
            ['Bima', '70', '85'],
            ['Citra', '90', '80'],
          ],
        },
      ],
    },
    {
      id: 'eksplorasi',
      kind: 'eksplorasi',
      title: 'Eksplorasi Sebaran dan Pencilan',
      body: `Ukuran statistik berubah secara berbeda ketika data ekstrem masuk. Gunakan eksplorasi berikut untuk mengamati perilaku mean dan median.

Pada eksplorasi **Eksplorasi Sebaran dan Pencilan**, mulailah dengan data yang menyebar wajar, kemudian tambahkan satu nilai yang sangat besar. Amati bahwa **mean bergerak mengikuti pencilan**, sedangkan **median berpindah hanya satu posisi**. Geser nilai ekstrem tersebut dan bandingkan keduanya lagi. Kesimpulannya: untuk data yang memuat pencilan, median biasanya lebih mewakili nilai tipikal, sedangkan mean lebih cocok bila data relatif simetris tanpa nilai ekstrem.`,
      blocks: [{ kind: 'exploration', explorationId: 'distribusi-sebaran' }],
    },
    {
      id: 'contoh',
      kind: 'contoh',
      title: 'Contoh Terbimbing',
      body: `**Contoh 1 (mean atau median?).** Tim survei mencatat lama menunggu (menit) di sebuah klinik: $15, 18, 20, 21, 22, 95$. Tentukan mean dan median, lalu tentukan ukuran yang lebih mewakili.

*Penyelesaian.* Jumlah data $=15+18+20+21+22+95=191$, sehingga
$$\\bar{x}=\\frac{191}{6}\\approx 31{,}83.$$
Karena $n=6$ genap, median adalah rata-rata data ke-3 dan ke-4:
$$\\text{Median}=\\frac{20+21}{2}=20{,}5.$$
Nilai $95$ adalah pencilan yang menarik mean jauh ke atas. Median $20{,}5$ menit lebih menggambarkan pengalaman pasien yang tipikal.

**Contoh 2 (rata-rata gabungan).** Kelas A berisi $30$ siswa dengan rata-rata nilai $72$, sedangkan Kelas B berisi $20$ siswa dengan rata-rata $84$. Tentukan rata-rata nilai gabungan.

*Penyelesaian.*
$$\\bar{x}_{gab}=\\frac{30\\cdot 72+20\\cdot 84}{30+20}=\\frac{2160+1680}{50}=\\frac{3840}{50}=76{,}8.$$
Rata-rata gabungan bukan $(72+84)/2=78$, karena kedua kelas berukuran berbeda.

**Contoh 3 (grafik menyesatkan).** Sebuah iklan menampilkan batang penjualan $100$ unit dan $105$ unit, tetapi sumbu vertikalnya dimulai dari $95$. Akibatnya batang kedua tampak dua kali lebih tinggi. Grafik itu menyesatkan karena memotong skala, bukan karena angkanya salah. Penyajian yang jujur memulai sumbu dari $0$ atau mencantumkan angka dengan jelas.`,
    },
    {
      id: 'latihan-dasar',
      kind: 'latihan-dasar',
      title: 'Latihan Dasar',
      level: 'dasar',
      body: `Perhatikan data berikut (misalnya banyak buku yang dibaca sekelompok siswa dalam sebulan):
$$5,\\ 6,\\ 6,\\ 7,\\ 7,\\ 7,\\ 8,\\ 10.$$

1. Tentukan mean data tersebut.
2. Tentukan mediannya.
3. Tentukan modusnya.
4. Tentukan jangkauannya.
5. Jika nilai $10$ digantikan oleh $50$, tentukan mean dan median yang baru, lalu jelaskan mana yang lebih berubah.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. Jumlah $=5+6+6+7+7+7+8+10=56$, sehingga mean $=\\dfrac{56}{8}=7$.
2. $n=8$ genap, median $=\\dfrac{7+7}{2}=7$.
3. Modus $=7$ (muncul tiga kali).
4. Jangkauan $=10-5=5$.
5. Data baru: $5, 6, 6, 7, 7, 7, 8, 50$. Mean $=\\dfrac{5+6+6+7+7+7+8+50}{8}=\\dfrac{96}{8}=12$, sedangkan median tetap $7$. Mean berubah dari $7$ menjadi $12$, sedangkan median tidak berubah — mean jauh lebih terpengaruh pencilan.`,
        },
      ],
    },
    {
      id: 'latihan-cakap',
      kind: 'latihan-cakap',
      title: 'Latihan Cakap',
      level: 'cakap',
      body: `1. Waktu layar harian (jam) delapan siswa: $2, 3, 3, 4, 4, 4, 5, 15$. Tentukan mean dan median, lalu tentukan ukuran yang lebih mewakili kebiasaan siswa.

2. Data usia (tahun) peserta sebuah lomba: $12, 15, 15, 16, 18, 20, 22, 45$. Tentukan $Q_1$, $Q_3$, dan IQR, lalu selidiki apakah $45$ merupakan pencilan.

3. Sebuah sekolah menggabungkan dua kelas. Kelas A berisi $30$ siswa dengan rata-rata $72$; Kelas B berisi $20$ siswa dengan rata-rata $84$. Tentukan rata-rata gabungan.

4. Nilai sepuluh siswa: $60, 65, 70, 70, 75, 80, 85, 90, 95, 100$. Tentukan mean dan median. Sebuah artikel menulis "rata-rata nilai 79". Berikan tanggapan kritis terhadap pernyataan itu.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. Jumlah $=40$, mean $=\\dfrac{40}{8}=5$. Median $=\\dfrac{4+4}{2}=4$. Karena ada pencilan $15$, median $4$ jam lebih mewakili kebiasaan siswa, sedangkan mean tertarik ke atas oleh nilai ekstrem.

2. $Q_1=$ median dari $12, 15, 15, 16$ $=15$; $Q_3=$ median dari $18, 20, 22, 45$ $=21$; IQR $=21-15=6$. Batas atas $=21+1{,}5(6)=30$. Karena $45>30$, nilai $45$ adalah pencilan.

3. $\\bar{x}_{gab}=\\dfrac{30\\cdot 72+20\\cdot 84}{50}=\\dfrac{2160+1680}{50}=\\dfrac{3840}{50}=76{,}8$.

4. Jumlah $=790$, mean $=\\dfrac{790}{10}=79$; median $=\\dfrac{75+80}{2}=77{,}5$. Pernyataan itu benar secara hitung, tetapi perlu dilengkapi: tidak ada siswa yang nilainya tepat $79$, dan sebaiknya disebutkan juga sebaran atau median agar gambaran lebih lengkap. Klaim rata-rata tunggal tanpa sebaran berpotensi menyesatkan.`,
        },
      ],
    },
    {
      id: 'latihan-mahir',
      kind: 'latihan-mahir',
      title: 'Latihan Mahir',
      level: 'mahir',
      body: `1. Sebuah perusahaan memiliki $9$ karyawan bergaji Rp4.000.000 per bulan dan $1$ direktur bergaji Rp40.000.000. Tentukan mean dan median gaji, lalu tentukan angka yang lebih jujur untuk menggambarkan gaji karyawan biasa.

2. Rata-rata delapan bilangan adalah $12$. Setelah satu bilangan baru ditambahkan, rata-ratanya menjadi $13$. Tentukan bilangan baru tersebut.

3. Sebuah grafik batang menunjukkan penjualan Januari $100$ unit dan Februari $105$ unit, tetapi sumbu vertikalnya dimulai dari $95$ sehingga batang Februari tampak dua kali batang Januari. Jelaskan mengapa grafik ini menyesatkan dan bagaimana cara menyajikannya dengan jujur.

4. Sebuah artikel menyimpulkan "minum kopi menurunkan nilai ujian" berdasarkan survei terhadap $12$ siswa. Berikan kritik terhadap kesimpulan tersebut dan sebutkan informasi tambahan yang diperlukan.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat pembahasan',
          text: `1. Mean $=\\dfrac{9\\times 4.000.000+40.000.000}{10}=\\dfrac{76.000.000}{10}=7.600.000$. Data terurut memuat sembilan nilai Rp4.000.000 dan satu nilai Rp40.000.000; karena $n=10$, median $=\\dfrac{4.000.000+4.000.000}{2}=4.000.000$. Median Rp4.000.000 lebih jujur menggambarkan karyawan biasa; mean Rp7.600.000 terangkat oleh gaji direktur.

2. Jumlah delapan bilangan $=8\\times 12=96$. Jumlah sembilan bilangan $=9\\times 13=117$. Bilangan baru $=117-96=21$.

3. Perbedaan sebenarnya hanya $5$ unit dari $100$, yaitu $5\\%$, tetapi karena skala dimulai dari $95$, tinggi batang Januari hanya $5$ satuan dan batang Februari menjadi $10$ satuan — tampak dua kali lipat. Ini menyesatkan karena memotong sumbu. Penyajian jujur memulai sumbu dari $0$ atau menuliskan angka sebenarnya secara jelas.

4. Kesimpulan itu lemah karena (a) sampel hanya $12$ siswa, terlalu kecil untuk menyimpulkan hubungan umum; (b) tidak jelas apakah siswa dibandingkan pada kondisi lain yang setara; (c) korelasi antara kebiasaan minum kopi dan nilai ujian tidak membuktikan sebab-akibat. Informasi tambahan yang diperlukan: ukuran sampel lebih besar, cara pemilihan sampel, definisi dan pengukuran variabel, serta faktor lain seperti jam belajar dan waktu tidur.`,
        },
      ],
    },
    {
      id: 'dunia-nyata',
      kind: 'dunia-nyata',
      title: 'Penerapan di Dunia Nyata',
      body: `Statistik dipakai untuk mengambil keputusan publik: alokasi anggaran, kebijakan kesehatan, hingga penetapan harga. Di dunia kerja, laporan penjualan sering menyajikan rata-rata tanpa sebaran; di media sosial, grafik pertumbuhan kadang memotong sumbu agar terlihat dramatis.

Sebagai warga yang cermat, biasakan menanyakan tiga hal sebelum mempercayai sebuah statistik: **siapa yang diukur**, **ukuran apa yang dipakai**, dan **apakah penyajiannya adil**. Statistik yang baik membantu kita memahami dunia, bukan sekadar meyakinkan kita.`,
    },
    {
      id: 'kesalahan-umum',
      kind: 'kesalahan-umum',
      title: 'Kesalahan Umum',
      body: `**1. Menganggap mean selalu mewakili.** Bila ada pencilan, mean dapat menjauh dari nilai kebanyakan orang. Periksa apakah median lebih tepat.

**2. Membandingkan persentase dari kelompok berbeda ukuran.** Kenaikan $10\\%$ pada kelompok kecil bisa berarti lebih sedikit orang daripada kenaikan $5\\%$ pada kelompok besar.

**3. Mempercayai grafik tanpa memeriksa sumbu.** Grafik dengan sumbu yang tidak dimulai dari nol membesar-besarkan perbedaan kecil.

**4. Menyimpulkan sebab-akibat dari korelasi.** Dua hal bisa bergerak bersamaan tanpa salah satunya menyebabkan yang lain.

**5. Mengabaikan ukuran sampel.** Kesimpulan dari beberapa orang tidak dapat digeneralisasi ke seluruh populasi.`,
    },
    {
      id: 'refleksi',
      kind: 'refleksi',
      title: 'Refleksi',
      body: `Jawab dengan jujur:

1. Kapan kamu akan memilih median daripada mean untuk mewakili data? Jelaskan alasannya.
2. Sebutkan dua cara grafik dapat menyesatkan meskipun angkanya benar.
3. Mengapa ukuran sampel penting sebelum menyimpulkan sesuatu tentang populasi besar?`,
    },
    {
      id: 'rangkuman',
      kind: 'rangkuman',
      title: 'Rangkuman',
      blocks: [
        {
          kind: 'table',
          headers: ['Aspek', 'Penjelasan'],
          rows: [
            ['Mean', 'Jumlah semua data dibagi banyak data; peka terhadap pencilan'],
            ['Median', 'Nilai tengah data terurut; tahan terhadap pencilan'],
            ['Modus', 'Nilai paling sering muncul; berguna untuk data kategorik'],
            ['Rata-rata gabungan', 'Gabungan dua kelompok memakai bobot ukuran kelompok'],
            ['Pencilan', 'Nilai jauh dari kelompok utama; mengubah mean lebih besar daripada median'],
            ['Grafik jujur', 'Sumbu mulai dari nol, skala konsisten, sebaran ditampilkan'],
            ['Klaim sahih', 'Berdasarkan sampel memadai, ukuran tepat, sebab-akibat tidak diasumsikan'],
          ],
        },
      ],
    },
    {
      id: 'evaluasi',
      kind: 'evaluasi',
      title: 'Evaluasi',
      body: `Kerjakan kuis topik ini untuk memeriksa pemahamanmu. Buka halaman [Latihan & Asesmen](/latihan) lalu pilih topik **Statistik dalam Kehidupan**.`,
    },
  ],
};

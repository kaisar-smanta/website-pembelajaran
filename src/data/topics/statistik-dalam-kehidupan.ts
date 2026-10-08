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
  applications: ['statistik-harian'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat membaca dan menafsirkan informasi statistik dari media, memilih ukuran pemusatan yang tepat sesuai konteks, mengenali grafik dan klaim yang menyesatkan, serta menyusun kesimpulan yang sahih berdasarkan data.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      blocks: [
        {
          kind: "prediction",
          prompt: `Sebuah berita menulis, "Rata-rata penghasilan warga Desa Makmur mencapai Rp8 juta per bulan." Beberapa warga justru merasa penghasilan mereka jauh di bawah angka itu.

- Mengapa "rata-rata" bisa terasa tidak mewakili banyak orang?
- Informasi tambahan apa yang sebaiknya diminta sebelum mempercayai angka itu?`,
          reveal: "Mean mudah ditarik ke atas oleh sedikit nilai yang sangat besar. Jika beberapa warga berpenghasilan sangat tinggi, mean dapat melampaui penghasilan mayoritas warga. **Median** (nilai tengah) biasanya lebih menggambarkan warga tipikal. Karena itu, sebelum menerima klaim, kita perlu menanyakan ukuran apa yang dipakai, bagaimana sebarannya, dan siapa yang disurvei.",
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu dapat:

- menghitung mean, median, dan modus dari sekumpulan data;
- menentukan kuartil dan jangkauan data terurut;
- membaca serta menafsirkan tabel dan diagram.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Setiap hari kita bertemu angka: rata-rata nilai ujian, persentase pertumbuhan, indeks kepuasan, hingga grafik penjualan. Angka-angka ini sering dipakai untuk meyakinkan kita. Namun angka yang benar pun dapat disajikan secara menyesatkan — misalnya dengan hanya menonjolkan rata-rata, memotong sumbu grafik, atau membandingkan dua kelompok yang ukurannya berbeda jauh.

Kemampuan statistik yang paling berguna di kehidupan sehari-hari bukan sekadar menghitung, melainkan **bertanya kritis**: ukuran apa yang dipakai, seberapa besar sampelnya, dan apakah kesimpulan yang ditarik memang didukung data.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Memilih Ukuran dan Membaca Klaim",
      body: `Data dapat diringkas dengan ukuran pemusatan. Tidak ada satu ukuran yang selalu terbaik; pilihannya bergantung pada bentuk data dan tujuan.

- **Mean** memanfaatkan semua nilai dan mudah dihitung, tetapi **peka terhadap pencilan**.
- **Median** adalah nilai tengah data terurut dan **tahan terhadap pencilan**, sehingga baik untuk data yang condong atau memuat nilai ekstrem.
- **Modus** adalah nilai yang paling sering muncul, berguna terutama untuk data kategorik.

**Rata-rata gabungan.** Bila dua kelompok berbeda ukuran digabung, kita tidak boleh merata-ratakan kedua mean begitu saja; gunakan bobot ukuran kelompok:
$$\\bar{x}_{gab}=\\frac{n_1\\bar{x}_1+n_2\\bar{x}_2}{n_1+n_2}.$$

**Pencilan** adalah nilai yang jauh dari kelompok utama. Satu pencilan besar dapat menaikkan mean secara drastis sementara median hampir tidak berubah. Karena itu, ketika membaca klaim "rata-rata", selalu tanyakan apakah ada nilai ekstrem yang menyeretnya.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Inti yang perlu diingat",
          text: "Angka yang benar belum tentu jujur. Perhitungan dapat tepat, tetapi pemilihan ukuran atau penyajian grafik tetap bisa menyesatkan.",
        },
        {
          kind: "table",
          caption: "Memilih ukuran pemusatan",
          headers: [
            "Ukuran",
            "Kapan tepat dipakai",
          ],
          rows: [
            [
              "Mean",
              "Data menyebar wajar tanpa pencilan dan semua nilai ingin dimanfaatkan",
            ],
            [
              "Median",
              "Ada pencilan atau data condong; ingin gambaran nilai tipikal",
            ],
            [
              "Modus",
              "Data kategorik atau ingin tahu nilai yang paling sering muncul",
            ],
          ],
        },
        {
          kind: "match",
          intro: "Cocokkan ukuran pemusatan dengan maknanya.",
          pairs: [
            {
              left: "Mean",
              right: "Jumlah data dibagi banyak data",
            },
            {
              left: "Median",
              right: "Nilai tengah data terurut",
            },
            {
              left: "Modus",
              right: "Nilai yang paling sering muncul",
            },
            {
              left: "Kuartil",
              right: "Nilai yang membagi data terurut menjadi empat bagian",
            },
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi: Cara Grafik Menyesatkan",
      body: "Informasi statistik hadir dalam banyak bentuk. Memahami cara penyajian membantu kita menilai apakah pesannya jujur. Beberapa manipulasi penyajian yang umum:",
      blocks: [
        {
          kind: "table",
          caption: "Penyajian yang menyesatkan dan tandanya",
          headers: [
            "Cara grafik menyesatkan",
            "Tanda yang perlu dicermati",
          ],
          rows: [
            [
              "Sumbu tidak dimulai dari nol",
              "Perbedaan kecil tampak besar dan dramatis",
            ],
            [
              "Ukuran sampel diabaikan",
              "Persentase dari kelompok berbeda dibandingkan langsung",
            ],
            [
              "Gambar tiga dimensi berlebihan",
              "Luas atau volume menonjolkan perbedaan",
            ],
            [
              "Hanya menyebut rata-rata",
              "Sebaran dan pencilan disembunyikan",
            ],
            [
              "Korelasi dianggap sebab-akibat",
              "Hubungan sebab-akibat tidak terbukti",
            ],
          ],
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Tabel",
              body: "Angka mentah paling jujur: setiap nilai ditulis apa adanya sehingga sebaran dan pencilan tidak tersembunyi.",
            },
            {
              label: "Diagram batang",
              body: "Tinggi batang harus proporsional; memotong sumbu vertikal membuat perbedaan kecil tampak besar.",
            },
            {
              label: "Diagram garis",
              body: "Baik untuk menunjukkan tren waktu, tetapi pilihan rentang sumbu tetap dapat membesar-besarkan perubahan.",
            },
          ],
        },
      ],
    },
    {
      id: "matriks",
      kind: "representasi",
      title: "Data dalam Bentuk Matriks",
      body: `Selain tabel dan diagram, data sering disusun sebagai **matriks**: susunan bilangan dalam baris dan kolom. Kesepakatan yang lazim adalah **baris menyatakan objek** (orang, sekolah, atau bulan) dan **kolom menyatakan variabel** (nilai, tinggi badan, atau penjualan). Dengan begitu, satu baris merangkum seluruh informasi tentang satu objek, sedangkan satu kolom merangkum satu variabel untuk semua objek.

Membaca klaim media dari penyajian seperti ini menuntut kehati-hatian. Periksa apakah baris dan kolomnya jelas, apakah satuannya seragam, dan apakah angka yang dibandingkan memang berasal dari kolom yang sama. Menyamakan angka dari kolom berbeda, atau membandingkan objek yang jumlah datanya tidak sama, adalah cara umum klaim menyesatkan muncul.

Penyajian matriks ini dikembangkan lebih lanjut pada topik **Matriks** di kelas XI, tempat operasi seperti penjumlahan, perkalian, dan determinan dipelajari. Di sini kita cukup memakainya sebagai cara membaca dan menyusun data secara rapi.`,
      blocks: [
        {
          kind: "table",
          caption: "Nilai dua mata pelajaran tiga siswa sebagai matriks $3 \\times 2$",
          headers: [
            "Siswa",
            "Matematika",
            "Fisika",
          ],
          rows: [
            [
              "Ayu",
              "80",
              "75",
            ],
            [
              "Bima",
              "70",
              "85",
            ],
            [
              "Citra",
              "90",
              "80",
            ],
          ],
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi Sebaran dan Pencilan",
      body: `Ukuran statistik berubah secara berbeda ketika data ekstrem masuk. Gunakan eksplorasi berikut untuk mengamati perilaku mean dan median.

Pada eksplorasi **Eksplorasi Sebaran dan Pencilan**, mulailah dengan data yang menyebar wajar, kemudian tambahkan satu nilai yang sangat besar. Amati bahwa **mean bergerak mengikuti pencilan**, sedangkan **median berpindah hanya satu posisi**. Geser nilai ekstrem tersebut dan bandingkan keduanya lagi. Kesimpulannya: untuk data yang memuat pencilan, median biasanya lebih mewakili nilai tipikal, sedangkan mean lebih cocok bila data relatif simetris tanpa nilai ekstrem.`,
      blocks: [
        {
          kind: "exploration",
          explorationId: "distribusi-sebaran",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Prinsip Umum: Ukuran yang Tahan dan Penyajian yang Jujur",
      body: `Dari contoh-contoh di atas muncul satu prinsip yang berulang: **setiap ukuran punya kepekaan berbeda terhadap pencilan**. Mean memakai seluruh nilai sehingga sangat terpengaruh nilai ekstrem, sedangkan median dan modus lebih tahan karena hanya bergantung pada posisi atau frekuensi. Karena itu mean lebih tepat untuk data yang relatif simetris, sedangkan median lebih mewakili nilai tipikal ketika ada pencilan atau data condong.

Prinsip serupa berlaku saat menggabungkan kelompok. Mean gabungan harus dibobot ukuran kelompok:

$$\\bar{x}_{\\text{gab}} = \\frac{n_1\\bar{x}_1 + n_2\\bar{x}_2}{n_1 + n_2},$$

bukan rata-rata dari kedua mean. Terakhir, penyajian grafis yang memotong sumbu atau menyembunyikan sebaran dapat membuat perbedaan kecil tampak dramatis. Sebab itu angka yang benar belum tentu jujur: periksa ukuran, skala, dan sebaran sebelum mempercayai sebuah klaim.`,
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      blocks: [
        {
          kind: "step-reveal",
          steps: [
            {
              title: "Contoh 1",
              text: `Tim survei mencatat lama menunggu (menit) di sebuah klinik: $15, 18, 20, 21, 22, 95$. Tentukan mean dan median, lalu tentukan ukuran yang lebih mewakili.

*Penyelesaian.* Jumlah data $=15+18+20+21+22+95=191$, sehingga
$$\\bar{x}=\\frac{191}{6}\\approx 31{,}83.$$
Karena $n=6$ genap, median adalah rata-rata data ke-3 dan ke-4:
$$\\text{Median}=\\frac{20+21}{2}=20{,}5.$$
Nilai $95$ adalah pencilan yang menarik mean jauh ke atas. Median $20{,}5$ menit lebih menggambarkan pengalaman pasien yang tipikal.`,
            },
            {
              title: "Contoh 2",
              text: `Kelas A berisi $30$ siswa dengan rata-rata nilai $72$, sedangkan Kelas B berisi $20$ siswa dengan rata-rata $84$. Tentukan rata-rata nilai gabungan.

*Penyelesaian.*
$$\\bar{x}_{gab}=\\frac{30\\cdot 72+20\\cdot 84}{30+20}=\\frac{2160+1680}{50}=\\frac{3840}{50}=76{,}8.$$
Rata-rata gabungan bukan $(72+84)/2=78$, karena kedua kelas berukuran berbeda.`,
            },
            {
              title: "Contoh 3",
              text: "Sebuah iklan menampilkan batang penjualan $100$ unit dan $105$ unit, tetapi sumbu vertikalnya dimulai dari $95$. Akibatnya batang kedua tampak dua kali lebih tinggi. Grafik itu menyesatkan karena memotong skala, bukan karena angkanya salah. Penyajian yang jujur memulai sumbu dari $0$ atau mencantumkan angka dengan jelas.",
            },
          ],
        },
      ],
    },
    {
      id: "latihan-dasar",
      kind: "latihan-dasar",
      title: "Latihan Dasar",
      level: "dasar",
    },
    {
      id: "latihan-cakap",
      kind: "latihan-cakap",
      title: "Latihan Cakap",
      level: "cakap",
    },
    {
      id: "latihan-mahir",
      kind: "latihan-mahir",
      title: "Latihan Mahir",
      level: "mahir",
    },
    {
      id: "dunia-nyata",
      kind: "dunia-nyata",
      title: "Penerapan di Dunia Nyata",
      body: `Statistik dipakai untuk mengambil keputusan publik: alokasi anggaran, kebijakan kesehatan, hingga penetapan harga. Di dunia kerja, laporan penjualan sering menyajikan rata-rata tanpa sebaran; di media sosial, grafik pertumbuhan kadang memotong sumbu agar terlihat dramatis.

Sebagai warga yang cermat, biasakan menanyakan tiga hal sebelum mempercayai sebuah statistik: **siapa yang diukur**, **ukuran apa yang dipakai**, dan **apakah penyajiannya adil**. Statistik yang baik membantu kita memahami dunia, bukan sekadar meyakinkan kita.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menganggap mean selalu mewakili.** Bila ada pencilan, mean dapat menjauh dari nilai kebanyakan orang. Periksa apakah median lebih tepat.

**2. Membandingkan persentase dari kelompok berbeda ukuran.** Kenaikan $10\\%$ pada kelompok kecil bisa berarti lebih sedikit orang daripada kenaikan $5\\%$ pada kelompok besar.

**3. Mempercayai grafik tanpa memeriksa sumbu.** Grafik dengan sumbu yang tidak dimulai dari nol membesar-besarkan perbedaan kecil.

**4. Menyimpulkan sebab-akibat dari korelasi.** Dua hal bisa bergerak bersamaan tanpa salah satunya menyebabkan yang lain.

**5. Mengabaikan ukuran sampel.** Kesimpulan dari beberapa orang tidak dapat digeneralisasi ke seluruh populasi.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Renungkan bagaimana angka statistik di sekitarmu bisa menyesatkan bila dibaca sekilas.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Kapan kamu akan memilih median daripada mean untuk mewakili data? Jelaskan alasannya.",
            "Sebutkan dua cara grafik dapat menyesatkan meskipun angkanya benar.",
            "Mengapa ukuran sampel penting sebelum menyimpulkan sesuatu tentang populasi besar?",
          ],
          confidenceLabel: "Seberapa yakin kamu dengan jawaban refleksimu?",
        },
      ],
    },
    {
      id: "rangkuman",
      kind: "rangkuman",
      title: "Rangkuman",
      blocks: [
        {
          kind: "table",
          headers: [
            "Aspek",
            "Penjelasan",
          ],
          rows: [
            [
              "Mean",
              "Jumlah semua data dibagi banyak data; peka terhadap pencilan",
            ],
            [
              "Median",
              "Nilai tengah data terurut; tahan terhadap pencilan",
            ],
            [
              "Modus",
              "Nilai paling sering muncul; berguna untuk data kategorik",
            ],
            [
              "Rata-rata gabungan",
              "Gabungan dua kelompok memakai bobot ukuran kelompok",
            ],
            [
              "Pencilan",
              "Nilai jauh dari kelompok utama; mengubah mean lebih besar daripada median",
            ],
            [
              "Grafik jujur",
              "Sumbu mulai dari nol, skala konsisten, sebaran ditampilkan",
            ],
            [
              "Klaim sahih",
              "Berdasarkan sampel memadai, ukuran tepat, sebab-akibat tidak diasumsikan",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Tiket keluar.** (1) Mengapa mean lebih berubah daripada median ketika sebuah pencilan ditambahkan? (2) Mengapa mean gabungan dua kelompok harus dibobot ukurannya? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Statistik dalam Kehidupan** untuk latihan tambahan.`,
    },
  ],
};

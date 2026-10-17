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
    { text: 'Membandingkan dua kelompok melalui box plot dan jangkauan interkuartil untuk menilai klaim media secara adil.' },
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
      body: `Setiap hari kita bertemu angka: rata-rata nilai ujian, persentase pertumbuhan, indeks kepuasan, hingga grafik penjualan. Angka-angka ini sering dipakai untuk meyakinkan kita. Namun angka yang benar pun dapat disajikan secara menyesatkan: misalnya dengan hanya menonjolkan rata-rata, memotong sumbu grafik, atau membandingkan dua kelompok yang ukurannya berbeda jauh.

Kemampuan statistik yang paling berguna di kehidupan sehari-hari adalah **bertanya kritis**: ukuran apa yang dipakai, seberapa besar sampelnya, dan apakah kesimpulan yang ditarik memang didukung data.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Memilih Ukuran dan Membaca Klaim",
      questionIds: ['sdk-02'],
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
          title: "Angka benar belum tentu jujur",
          text: "Perhitungan dapat tepat, tetapi pemilihan ukuran atau penyajian grafik tetap bisa menyesatkan. Karena itu, periksa ukuran, sebaran, dan sampel sebelum mempercayai sebuah klaim.",
        },
        {
          kind: "figure",
          alt: "Histogram data yang condong ke kanan; sebuah garis putus-putus menandai median dan garis putus berbeda menandai mean yang lebih besar.",
          caption: "Karena data condong ke kanan, mean bergeser ke kanan median. Keduanya ditandai pada sumbu nilai.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><defs><marker id="fig-stat-axis" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><line x1="45" y1="200" x2="305" y2="200" stroke="currentColor" stroke-width="1.2" marker-end="url(#fig-stat-axis)"/><line x1="45" y1="200" x2="45" y2="30" stroke="currentColor" stroke-width="1.2" marker-end="url(#fig-stat-axis)"/><rect x="56" y="80" width="12" height="120" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="1"/><rect x="73" y="100" width="12" height="100" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="1"/><rect x="90" y="140" width="12" height="60" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="1"/><rect x="107" y="160" width="12" height="40" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="1"/><rect x="124" y="160" width="12" height="40" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="1"/><rect x="141" y="180" width="12" height="20" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="1"/><rect x="277" y="180" width="12" height="20" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="1"/><line x1="79" y1="200" x2="79" y2="62" stroke="currentColor" stroke-width="1.6" stroke-dasharray="4 3"/><line x1="99" y1="200" x2="99" y2="62" stroke="currentColor" stroke-width="1.6" stroke-dasharray="2 3"/><text x="77" y="56" font-size="11" fill="currentColor" text-anchor="end">median</text><text x="103" y="56" font-size="11" fill="currentColor" text-anchor="start">mean</text><text x="300" y="220" font-size="11" fill="currentColor">nilai</text><text x="14" y="120" font-size="11" fill="currentColor" transform="rotate(-90 14 120)" text-anchor="middle">frekuensi</text></svg>',
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
        {
          kind: "flip-cards",
          intro: "Hafalkan istilah statistik yang sering muncul di berita.",
          cards: [
            {
              front: "Mean",
              back: "Jumlah semua data dibagi banyak data; mudah tertarik pencilan",
            },
            {
              front: "Median",
              back: "Nilai tengah data terurut; lebih mewakili data yang condong",
            },
            {
              front: "Modus",
              back: "Nilai yang paling sering muncul; berguna untuk data kategorik",
            },
            {
              front: "Rata-rata gabungan",
              back: "Gabungan dua kelompok memakai bobot ukuran masing-masing kelompok",
            },
            {
              front: "Pencilan",
              back: "Nilai jauh dari kelompok utama yang dapat menggeser mean",
            },
            {
              front: "Grafik menyesatkan",
              back: "Sumbu tidak dari nol atau sebaran disembunyikan agar perbedaan tampak besar",
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
      id: "boxplot-iqr",
      kind: "representasi",
      title: "Representasi: Box Plot dan IQR",
      body: `Ketika dua kelompok dibandingkan, **box plot** meringkas sekaligus pusat, sebaran, dan pencilan tiap kelompok, sehingga klaim "kelompok A lebih baik" mudah diperiksa. Di sini penekanannya bukan lagi menghitung kuartil (itu dibahas pada topik Analisis Distribusi Data), tetapi **memakai** lebar kotak untuk menilai penyajian data secara adil. Kotak membentang dari $Q_1$ sampai $Q_3$ dengan garis median di dalamnya, sedangkan garis kumis membentang sampai nilai terkecil dan terbesar yang bukan pencilan. Lebar kotak sama dengan **jangkauan interkuartil** $\\text{IQR}=Q_3-Q_1$, yaitu lebar separuh data yang paling rapat.

Amati box plot dua kelas berikut. Keduanya bisa saja punya median berdekatan, tetapi box yang jauh lebih lebar menandakan hasil yang tidak merata.`,
      blocks: [
        {
          kind: "figure",
          alt: "Dua box plot sejajar. Kelas A memiliki kotak sempit dengan median sekitar 74, sedangkan Kelas B memiliki kotak sangat lebar dengan median sekitar 60 dan sebaran jauh lebih besar.",
          caption: "Box plot Kelas A dan Kelas B pada skala nilai yang sama: Kelas A rapat di sekitar median, Kelas B menyebar lebar sehingga IQR-nya jauh lebih besar.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="40" y1="200" x2="304" y2="200" stroke="currentColor" stroke-width="1.2"/><line x1="40" y1="200" x2="40" y2="204" stroke="currentColor" stroke-width="1"/><line x1="105" y1="200" x2="105" y2="204" stroke="currentColor" stroke-width="1"/><line x1="170" y1="200" x2="170" y2="204" stroke="currentColor" stroke-width="1"/><line x1="235" y1="200" x2="235" y2="204" stroke="currentColor" stroke-width="1"/><line x1="300" y1="200" x2="300" y2="204" stroke="currentColor" stroke-width="1"/><rect x="137.5" y="60" width="22.75" height="40" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.6"/><line x1="150.5" y1="60" x2="150.5" y2="100" stroke="currentColor" stroke-width="2"/><line x1="124.5" y1="80" x2="137.5" y2="80" stroke="currentColor" stroke-width="1.4"/><line x1="124.5" y1="71" x2="124.5" y2="89" stroke="currentColor" stroke-width="1.4"/><line x1="160.25" y1="80" x2="166.75" y2="80" stroke="currentColor" stroke-width="1.4"/><line x1="166.75" y1="71" x2="166.75" y2="89" stroke="currentColor" stroke-width="1.4"/><rect x="88.75" y="130" width="146.25" height="40" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.6"/><line x1="105" y1="130" x2="105" y2="170" stroke="currentColor" stroke-width="2"/><line x1="40" y1="150" x2="88.75" y2="150" stroke="currentColor" stroke-width="1.4"/><line x1="40" y1="141" x2="40" y2="159" stroke="currentColor" stroke-width="1.4"/><line x1="235" y1="150" x2="283.75" y2="150" stroke="currentColor" stroke-width="1.4"/><line x1="283.75" y1="141" x2="283.75" y2="159" stroke="currentColor" stroke-width="1.4"/><text x="12" y="84" font-size="11" fill="currentColor">A</text><text x="12" y="154" font-size="11" fill="currentColor">B</text><text x="34" y="214" font-size="10" fill="currentColor">40</text><text x="99" y="214" font-size="10" fill="currentColor">60</text><text x="164" y="214" font-size="10" fill="currentColor">80</text><text x="229" y="214" font-size="10" fill="currentColor">100</text><text x="294" y="214" font-size="10" fill="currentColor">120</text><text x="196" y="56" font-size="10" fill="currentColor">nilai</text></svg>',
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Yang terbaca dari box plot",
          text: "Median menunjukkan pusat, lebar kotak menunjukkan keragaman separuh data tengah, dan titik di luar kumis menandakan pencilan. Bandingkan median **dan** lebar kotak sebelum menyimpulkan satu kelompok lebih baik.",
        },
      ],
    },
    {
      id: "data-matriks",
      kind: "representasi",
      title: "Data dalam Bentuk Matriks",
      body: `Selain tabel dan diagram, data sering disusun sebagai **matriks**: susunan bilangan dalam baris dan kolom. Kesepakatan yang lazim adalah **baris menyatakan objek** (orang, sekolah, atau bulan) dan **kolom menyatakan variabel** (nilai, tinggi badan, atau penjualan). Dengan begitu, satu baris merangkum seluruh informasi tentang satu objek, sedangkan satu kolom merangkum satu variabel untuk semua objek.

Membaca klaim media dari penyajian seperti ini menuntut kehati-hatian. Periksa apakah baris dan kolomnya jelas, apakah satuannya seragam, dan apakah angka yang dibandingkan memang berasal dari kolom yang sama. Menyamakan angka dari kolom berbeda, atau membandingkan objek yang jumlah datanya tidak sama, adalah cara umum klaim menyesatkan muncul.

Penyajian matriks ini dikembangkan lebih lanjut pada topik **Matriks** di kelas XI, tempat operasi seperti penjumlahan, perkalian, dan determinan dipelajari. Di sini kita cukup memakainya sebagai cara membaca dan menyusun data secara rapi.`,
      blocks: [
        {
          kind: "table",
          caption: "Nilai dua mata pelajaran tiga siswa sebagai matriks $3 \\times 2$",
          headers: ["Siswa", "Matematika", "Fisika"],
          rows: [
            ["Ayu", "80", "75"],
            ["Bima", "70", "85"],
            ["Citra", "90", "80"],
          ],
        },
        {
          kind: "details",
          summary: "Contoh terbimbing: membaca matriks nilai $3 \\times 2$",
          text: `Dari matriks di atas, hitung **jumlah tiap baris** (total dua mapel per siswa) dan **jumlah tiap kolom** (total satu mapel untuk semua siswa), lalu tafsirkan.

- **Baris (per siswa):** Ayu $80+75=155$, Bima $70+85=155$, Citra $90+80=170$. Total tertinggi dimiliki Citra, sedangkan Ayu dan Bima sama.
- **Kolom (per mapel):** Matematika $80+70+90=240$; Fisika $75+85+80=240$. Dengan $3$ siswa, rata-rata tiap mapel adalah $\\dfrac{240}{3}=80$.
- **Keseluruhan:** jumlah seluruh entri $80+75+70+85+90+80=480$, sehingga rata-rata keenam nilai adalah $\\dfrac{480}{6}=80$.

Baris dan kolom tidak boleh tertukar: menjumlahkan sepanjang baris memberi total **per siswa**, sedangkan sepanjang kolom memberi total **per variabel**. Menukar tafsir keduanya adalah salah satu sumber klaim menyesatkan.`,
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi Ketahanan Mean dan Median",
      body: `Eksplorasi ini memusatkan perhatian pada **ukuran pemusatan**: kapan mean dan median sepakat, dan kapan keduanya berpisah. Mulailah dari data yang menyebar wajar, catat mean dan median, lalu tambahkan satu nilai yang sangat besar.

Amati bahwa **mean bergerak mengikuti nilai ekstrem**, sedangkan **median berpindah hanya satu posisi** karena hanya bergantung pada urutan. Geser nilai ekstrem itu dan bandingkan lagi. Kesimpulannya: untuk data yang memuat pencilan, median lebih mewakili nilai tipikal, sedangkan mean lebih cocok ketika data relatif simetris tanpa nilai ekstrem.`,
      blocks: [
        {
          kind: "exploration",
          explorationId: "statistik-sebaran-ukuran",
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
      id: "rumus",
      kind: "rumus",
      title: "Rumus dan Prosedur",
      body: `**Ukuran pemusatan.**
$$\\bar{x}=\\frac{\\sum x_{i}}{n}, \\qquad \\text{Median}=\\text{nilai tengah data terurut}, \\qquad \\text{Modus}=\\text{nilai paling sering muncul}.$$

**Rata-rata gabungan.** Untuk dua kelompok berukuran $n_1$ dan $n_2$,
$$\\bar{x}_{gab}=\\frac{n_1\\bar{x}_1+n_2\\bar{x}_2}{n_1+n_2}.$$

**Pengaruh pencilan.** Menambah atau mengubah satu nilai ekstrem menggeser mean, sedangkan median hampir tidak berubah.

**Batas pencilan.**
$$Q_1-1{,}5\\,\\text{IQR} \\qquad \\text{dan} \\qquad Q_3+1{,}5\\,\\text{IQR}, \\qquad \\text{IQR}=Q_3-Q_1.$$

**Penyajian jujur.** Mulai sumbu dari nol, gunakan skala konsisten, cantumkan ukuran sampel, dan jangan menyimpulkan sebab-akibat dari korelasi.`,
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      blocks: [
        {
          kind: "step-reveal",
          intro: "Contoh 1 sampai 3 berlatih memilih ukuran, menghitung rata-rata gabungan, dan menandai pencilan. Contoh 4 menyoroti grafik yang menyesatkan.",
          steps: [
            {
              title: "Contoh 1: memilih ukuran yang mewakili",
              text: `**Diketahui.** Lama menunggu (menit) enam pasien di klinik: $15, 18, 20, 21, 22, 95$.

**Ide.** Hitung mean dari seluruh data dan median dari rata-rata dua data tengah, lalu bandingkan keduanya untuk menilai kehadiran nilai ekstrem.

**Langkah.** Jumlah data $=15+18+20+21+22+95=191$, sehingga $\\bar{x}=\\dfrac{191}{6}\\approx 31{,}83$. Karena $n=6$ genap, median $=\\dfrac{20+21}{2}=20{,}5$.

**Verifikasi.** Median $20{,}5$ terletak di antara data ke-3 dan ke-4, sedangkan mean lebih besar lebih dari $11$ menit. Jarak sebesar itu menandakan nilai ekstrem $95$.

**Kesimpulan.** Median $20{,}5$ menit lebih mewakili pengalaman pasien tipikal; mean $31{,}83$ tertarik ke atas oleh pencilan.`,
            },
            {
              title: "Contoh 2: rata-rata gabungan berbobot",
              text: `**Diketahui.** Kelas A berisi $30$ siswa dengan rata-rata $72$; Kelas B berisi $20$ siswa dengan rata-rata $84$.

**Ide.** Gabungkan kedua kelompok dengan bobot ukuran kelompok, bukan merata-ratakan kedua mean.

**Langkah.** $\\bar{x}_{gab}=\\dfrac{30\\cdot 72+20\\cdot 84}{30+20}=\\dfrac{2160+1680}{50}=76{,}8$.

**Verifikasi.** Kelas A lebih banyak anggotanya, jadi rata-rata gabungan harus lebih dekat ke $72$ daripada ke $84$. Memang $76{,}8$ lebih dekat ke $72$, sedangkan $(72+84)/2=78$ tidak memenuhi syarat itu.

**Kesimpulan.** Rata-rata gabungannya $76{,}8$, bukan $78$.`,
            },
            {
              title: "Contoh 3: IQR dan pencilan pada klaim",
              text: `**Diketahui.** Pengeluaran harian (ribu rupiah) delapan siswa: $15, 18, 18, 20, 22, 24, 25, 90$ (sudah terurut).

**Ide.** Tentukan $Q_1$, $Q_3$, dan IQR, lalu bandingkan data terbesar dengan batas atas $Q_3+1{,}5\\times\\text{IQR}$.

**Langkah.** Separuh bawah $15,18,18,20$ memberi $Q_1=\\dfrac{18+18}{2}=18$; separuh atas $22,24,25,90$ memberi $Q_3=\\dfrac{24+25}{2}=24{,}5$. Maka $\\text{IQR}=24{,}5-18=6{,}5$ dan batas atas $=24{,}5+1{,}5(6{,}5)=34{,}25$.

**Verifikasi.** Karena $90>34{,}25$, nilai $90$ adalah pencilan. Perhatikan IQR $6{,}5$ jauh lebih kecil daripada jangkauan $90-15=75$, tanda sebarannya sangat miring.

**Kesimpulan.** Sebagian besar siswa berbelanja dekat nilai tengah, sementara $90$ adalah pencilan yang perlu diperiksa sebelum dipakai untuk klaim "rata-rata pengeluaran".`,
            },
            {
              title: "Contoh 4: grafik yang menyesatkan",
              text: `**Diketahui.** Penjualan dua bulan berturut-turut $100$ unit dan $105$ unit, tetapi diagram batangnya memulai sumbu vertikal dari $95$.

**Ide.** Bandingkan selisih nyata dengan kesan visual yang ditimbulkan skala yang dipotong.

**Langkah.** Selisih nyata $105-100=5$ unit, yaitu kenaikan $\\dfrac{5}{100}=5\\%$. Dengan sumbu mulai dari $95$, tinggi batang hanya berselisih $105-95=10$ pada rentang $100-95=5$, sehingga batang kedua tampak dua kali lebih tinggi.

**Verifikasi.** Jika sumbu dimulai dari $0$, perbandingan tinggi $100:105$ hampir sama, bukan dua kali.

**Kesimpulan.** Grafik itu menyesatkan karena memotong sumbu, bukan karena angkanya salah. Penyajian yang jujur memulai sumbu dari $0$ atau menuliskan angkanya secara jelas.`,
            },
          ],
        },
        {
          kind: "details",
          summary: "Coba sendiri: menilai klaim rata-rata gaji",
          text: `Sebuah artikel menulis, "Rata-rata gaji karyawan di kantor ini Rp7 juta". Data sembilan karyawan (juta rupiah) adalah $3, 3, 4, 4, 5, 5, 6, 7, 55$.

*Langkah 1.* Hitung jumlahnya: $3+3+4+4+5+5+6+7+55=92$, sehingga mean $=\\dfrac{92}{9}\\approx 10{,}2$ juta.

*Langkah 2.* Karena $n=9$ ganjil, median adalah data ke-5, yaitu $5$ juta.

*Langkah 3.* Nilai $55$ juta jauh dari kelompok utama. Separuh bawah $3,3,4,4$ memberi $Q_1=3{,}5$ dan separuh atas $5,6,7,55$ memberi $Q_3=\\dfrac{6+7}{2}=6{,}5$, sehingga IQR $=6{,}5-3{,}5=3$ dan batas atas $=6{,}5+1{,}5(3)=11$. Karena $55>11$, nilai itu adalah pencilan.

*Langkah 4.* Klaim "rata-rata Rp7 juta" tidak cocok dengan data mana pun di atas; mean sebenarnya sekitar Rp10,2 juta karena satu nilai ekstrem, sedangkan median Rp5 juta lebih mewakili karyawan tipikal. Sebelum mempercayai klaim, tanyakan ukuran apa yang dipakai dan tanyakan apakah ada nilai ekstrem.`,
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
      body: `Statistik dipakai untuk mengambil keputusan publik: alokasi anggaran, kebijakan kesehatan, hingga penetapan harga. Sebuah laporan penjualan bisa menulis "rata-rata pesanan Rp43,5 ribu" padahal $9$ dari $10$ pembeli berbelanja Rp15 ribu dan satu pemborong berbelanja Rp300 ribu; totalnya $9\\cdot15+300=435$ ribu sehingga mean $43{,}5$ ribu, sedangkan mediannya hanya Rp15 ribu. Di media sosial, grafik pertumbuhan yang dimulai dari angka $1.000$ alih-alih nol membuat kenaikan $1.000$ menjadi $1.100$ tampak naik $10$ kali lipat padahal sesungguhnya hanya $10\\%$.

Sebagai warga yang cermat, biasakan menanyakan tiga hal sebelum mempercayai sebuah statistik: **siapa yang diukur**, **ukuran apa yang dipakai**, dan **apakah penyajiannya adil**. Statistik yang baik membantu kita memahami dunia, bukan alat untuk meyakinkan kita.`,
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
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Penjualan dua bulan berturut-turut $100$ dan $105$ unit ditampilkan pada diagram batang yang sumbunya dimulai dari $95$. Klik langkah yang keliru.",
          steps: [
            "Selisih penjualan kedua bulan adalah $105-100=5$ unit.",
            "Pada diagram, batang kedua tampak dua kali lebih tinggi, jadi penjualan naik dua kali lipat.",
            "Jadi kenaikannya $100\\%$.",
          ],
          wrongIndex: 1,
          explanation: "Kenaikan sebenarnya hanya $\\dfrac{5}{100}=5\\%$. Batang kedua tampak dua kali lebih tinggi karena sumbu dipotong, yaitu beda tampilan, bukan beda nilai. Menyimpulkan dua kali lipat dari tinggi batang adalah kekeliruan membaca grafik.",
        },
        {
          kind: "figure",
          alt: "Dua box plot sejajar membandingkan Kelas A dan Kelas B pada skala nilai yang sama. Kotak Kelas A sempit dengan median di 68, sedangkan kotak Kelas B lebar dengan median di 58 dan sebuah pencilan di 99.",
          caption: "Membandingkan dua kelompok hanya lewat median dapat menyesatkan. Median Kelas A (68) sedikit lebih tinggi, tetapi Kelas B memiliki IQR yang jauh lebih lebar dan sebuah pencilan di 99, tanda hasil yang tidak merata. Box plot memperlihatkan pusat, sebaran, dan pencilan sekaligus.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="40" y1="200" x2="304" y2="200" stroke="currentColor" stroke-width="1.2"/><line x1="40" y1="200" x2="40" y2="204" stroke="currentColor" stroke-width="1"/><line x1="83.3" y1="200" x2="83.3" y2="204" stroke="currentColor" stroke-width="1"/><line x1="126.7" y1="200" x2="126.7" y2="204" stroke="currentColor" stroke-width="1"/><line x1="170" y1="200" x2="170" y2="204" stroke="currentColor" stroke-width="1"/><line x1="213.3" y1="200" x2="213.3" y2="204" stroke="currentColor" stroke-width="1"/><line x1="256.7" y1="200" x2="256.7" y2="204" stroke="currentColor" stroke-width="1"/><line x1="300" y1="200" x2="300" y2="204" stroke="currentColor" stroke-width="1"/><rect x="135.3" y="60" width="52" height="40" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.6"/><line x1="161.3" y1="60" x2="161.3" y2="100" stroke="currentColor" stroke-width="2"/><line x1="105" y1="80" x2="135.3" y2="80" stroke="currentColor" stroke-width="1.4"/><line x1="105" y1="71" x2="105" y2="89" stroke="currentColor" stroke-width="1.4"/><line x1="187.3" y1="80" x2="222" y2="80" stroke="currentColor" stroke-width="1.4"/><line x1="222" y1="71" x2="222" y2="89" stroke="currentColor" stroke-width="1.4"/><rect x="83.3" y="130" width="164.7" height="40" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.6"/><line x1="118" y1="130" x2="118" y2="170" stroke="currentColor" stroke-width="2"/><line x1="57.3" y1="150" x2="83.3" y2="150" stroke="currentColor" stroke-width="1.4"/><line x1="57.3" y1="141" x2="57.3" y2="159" stroke="currentColor" stroke-width="1.4"/><line x1="248" y1="150" x2="265.3" y2="150" stroke="currentColor" stroke-width="1.4"/><line x1="265.3" y1="141" x2="265.3" y2="159" stroke="currentColor" stroke-width="1.4"/><circle cx="295.7" cy="150" r="3.4" fill="currentColor"/><text x="12" y="84" font-size="11" fill="currentColor">A</text><text x="12" y="154" font-size="11" fill="currentColor">B</text><text x="40" y="216" font-size="10" fill="currentColor">40</text><text x="80" y="216" font-size="10" fill="currentColor">50</text><text x="123" y="216" font-size="10" fill="currentColor">60</text><text x="166" y="216" font-size="10" fill="currentColor">70</text><text x="209" y="216" font-size="10" fill="currentColor">80</text><text x="253" y="216" font-size="10" fill="currentColor">90</text><text x="293" y="216" font-size="10" fill="currentColor">100</text><text x="262" y="130" font-size="10" fill="currentColor">pencilan</text></svg>',
        },
      ],
    },
    {
      id: "tantangan",
      kind: "tantangan",
      title: "Rata-Rata Kelas yang Hilang",
      body: `**Soal.** Tiga kelas mengikuti ujian yang sama. Kelas A berisi $24$ siswa dengan rata-rata $70$, Kelas B berisi $36$ siswa dengan rata-rata $80$, dan Kelas C berisi $40$ siswa. Rata-rata gabungan ketiga kelas adalah $77$.

(a) Tentukan rata-rata nilai Kelas C.
(b) Seorang siswa menghitung rata-rata gabungan dengan cara $\\dfrac{70+80+x}{3}$ dan memperoleh angka yang berbeda. Bandingkan hasil cara itu dengan jawabanmu, lalu jelaskan mengapa cara tersebut keliru.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Kerjakan lewat jumlah nilai, bukan dengan merata-ratakan rata-rata antarkelompok.",
          steps: [
            {
              title: "Hitung banyak siswa seluruhnya",
              text: "Banyak siswa $=24+36+40=100$.",
            },
            {
              title: "Hitung jumlah nilai seluruhnya",
              text: "Karena rata-rata gabungan $77$, jumlah seluruh nilai $=100\\times77=7700$.",
            },
            {
              title: "Hitung jumlah nilai Kelas A dan B",
              text: "Kelas A: $24\\times70=1680$; Kelas B: $36\\times80=2880$; jumlahnya $1680+2880=4560$.",
            },
            {
              title: "Tentukan rata-rata Kelas C",
              text: "Jumlah nilai Kelas C $=7700-4560=3140$, sehingga rata-ratanya $=\\dfrac{3140}{40}=78{,}5$.",
            },
            {
              title: "Bandingkan dengan rata-rata antarkelompok",
              text: "Cara $\\dfrac{70+80+78{,}5}{3}=\\dfrac{228{,}5}{3}\\approx76{,}17$ berbeda dari $77$. Cara itu memberi bobot sama pada setiap kelas, padahal jumlah siswanya berbeda.",
            },
            {
              title: "Simpulkan",
              text: "Rata-rata gabungan harus dibobot ukuran kelas. Rata-rata Kelas C adalah $78{,}5$, dan rata-rata sederhana dari ketiga nilai kelas tidak sahih ketika ukuran kelasnya tidak sama.",
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Membaca Keadaan Negara",
      body: `Kata "statistik" berasal dari bahasa Latin *status* (keadaan) dan pada abad ke-18 dipakai di Eropa untuk mencatat keadaan negara: jumlah penduduk, hasil panen, dan pajak. Dari kebutuhan itu lahir kebiasaan menyajikan data dalam tabel dan grafik. Florence Nightingale pada 1850-an memakai diagram untuk meyakinkan pemerintah tentang buruknya sanitasi rumah sakit, sedangkan John Snow pada 1854 memetakan kasus kolera di London untuk menelusuri sumber wabah. Keduanya menunjukkan bahwa penyajian data yang jujur dapat mengubah kebijakan. Sejak itu, membaca grafik secara kritis menjadi keterampilan warga yang penting.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Satu ukuran pemusatan tidak pernah bercerita lengkap; mean, median, dan penyajian grafik dapat memberi kesan yang berbeda dari data yang sama. Gunakan refleksi berikut untuk melatih kebiasaan bertanya sebelum menerima klaim statistik, seperti pada iklan, berita, atau laporan penjualan di sekitarmu.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Kapan kamu akan memilih median daripada mean untuk mewakili data? Jelaskan alasannya.",
            "Sebutkan dua cara grafik dapat menyesatkan meskipun angkanya benar.",
            "Mengapa ukuran sampel penting sebelum menyimpulkan sesuatu tentang populasi besar?",
          ],
          confidenceLabel: "Seberapa yakin kamu menilai sebuah klaim statistik secara kritis?",
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
          caption: "Ringkasan ukuran, penyajian, dan penilaian klaim statistik",
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
        {
          kind: "callout",
          variant: "concept",
          title: "Benang merah: angka benar belum tentu jujur",
          text: "Satu pertanyaan menyatukan seluruh topik ini: apakah angka yang disajikan benar-benar mewakili datanya? Mean bisa tertarik pencilan, grafik bisa dipotong sumbunya, dan persentase bisa dibandingkan dari kelompok yang tidak sebanding. Kebiasaan bertanya (siapa yang diukur, ukuran apa yang dipakai, dan apakah penyajiannya adil) adalah keterampilan yang berlanjut ke **Data Bivariat**, ketika dua variabel dibandingkan dan bahaya membaca hubungan sebagai sebab-akibat muncul kembali.",
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      questionIds: ['sdk-09'],
      body: `**Tutup pelajaran.** Ambil satu klaim statistik dari iklan atau berita, lalu tuliskan tiga pertanyaan kritis yang perlu diajukan dan ukuran alternatif yang lebih jujur untuk klaim itu. Jelaskan pula mengapa mean gabungan dua kelompok berukuran berbeda tidak boleh dihitung sebagai rata-rata kedua mean. Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Statistik dalam Kehidupan** untuk latihan tambahan.`,
    },
  ],
};

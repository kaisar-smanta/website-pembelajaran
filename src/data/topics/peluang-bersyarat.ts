import type { Topic } from '@/types/content';

export const peluangBersyarat: Topic = {
  id: 'peluang-bersyarat',
  slug: 'peluang-bersyarat',
  title: 'Peluang Bersyarat',
  subtitle: 'Peluang ketika sebagian informasi sudah diketahui',
  grade: 'XII',
  phase: 'F',
  element: 'data-peluang',
  featured: true,
  status: 'lengkap',
  estimatedMinutes: 90,
  summary:
    'Menghitung peluang bersyarat, menggunakan aturan perkalian dan aturan Bayes, membaca tabel kontingensi, serta memakai permutasi dan kombinasi sebagai alat pencacahan.',
  description:
    'Peluang bersyarat menjawab pertanyaan "berapa peluang $A$ jika kita tahu $B$ sudah terjadi?". Topik ini membangun rumus $P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}$, aturan perkalian dan aturan Bayes sederhana, serta melatih pembacaan tabel kontingensi. Permutasi dan kombinasi dipakai sebagai alat mencacah ketika ruang sampel perlu dihitung dengan cermat.',
  keywords: [
    'peluang bersyarat',
    'aturan perkalian',
    'aturan Bayes',
    'saling bebas',
    'tabel kontingensi',
    'permutasi',
    'kombinasi',
  ],
  prerequisites: ['peluang'],
  relatedTopics: ['peluang', 'asosiasi-kausalitas'],
  prerequisiteKnowledge: [
    'Ruang sampel, kejadian, dan peluang teoretis',
    'Aturan komplemen dan aturan penjumlahan',
    'Notasi himpunan: irisan $A \\cap B$ dan komplemen $A^c$',
  ],
  objectives: [
    { text: 'Menghitung peluang bersyarat $P(A \\mid B)$ dari data maupun tabel kontingensi.' },
    { text: 'Menggunakan aturan perkalian $P(A \\cap B) = P(A \\mid B)P(B)$.' },
    { text: 'Menentukan apakah dua kejadian saling bebas melalui peluang bersyarat.' },
    { text: 'Menerapkan aturan Bayes sederhana untuk memperbarui peluang.' },
    { text: 'Menggunakan permutasi dan kombinasi untuk mencacah ruang sampel.' },
  ],
  applications: ['tes-kesehatan'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menghitung peluang bersyarat, menerapkan aturan perkalian dan aturan Bayes sederhana, memeriksa kebebasan dua kejadian, membaca tabel kontingensi, serta menggunakan permutasi dan kombinasi sebagai alat pencacahan dalam masalah peluang.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      body: `Sebuah keluarga memiliki **dua anak**. Kita tahu bahwa **paling sedikit satu di antaranya laki-laki**. Berapa peluang keduanya laki-laki?

Banyak orang spontan menjawab $\\tfrac12$ dengan alasan "anak lainnya pasti laki-laki atau perempuan, peluangnya separuh". Ternyata jawabannya bukan $\\tfrac12$.

- Mengapa informasi "paling sedikit satu laki-laki" mengubah ruang sampel?
- Bagaimana informasi tambahan mengubah peluang?

Hitung dulu dengan menuliskan seluruh kemungkinan jenis kelamin dua anak secara berurutan.`,
      blocks: [
        {
          kind: "prediction",
          prompt: "Sebuah keluarga memiliki dua anak dan diketahui paling sedikit satu di antaranya laki-laki. Berapa peluang keduanya laki-laki?",
          options: [
            "$\\tfrac12$",
            "$\\tfrac13$",
            "$\\tfrac14$",
            "$\\tfrac23$",
          ],
          reveal: "Ruang sampel: $\\{LL, LP, PL, PP\\}$. Informasi \"paling sedikit satu laki-laki\" menyisakan $\\{LL, LP, PL\\}$ — tiga hasil sama mungkin. Dari ketiganya, hanya $LL$ yang memenuhi \"keduanya laki-laki\", sehingga peluangnya $\\tfrac13$, bukan $\\tfrac12$. Inilah inti **peluang bersyarat**: ruang sampel dipersempit oleh informasi yang sudah diketahui.",
          saveLabel: "Simpan dugaan",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu menguasai:

- rumus peluang teoretis $P(A) = \\dfrac{n(A)}{n(S)}$;
- irisan dan komplemen kejadian: $A \\cap B$ dan $A^c$;
- aturan komplemen $P(A^c) = 1 - P(A)$.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Sering kali kita memiliki informasi tambahan sebelum menghitung peluang. Seorang dokter mengetahui hasil tes sebelum menaksir peluang penyakit. Sebuah tim pemasaran mengetahui bahwa pelanggan pernah membeli produk A sebelum memprediksi pembelian produk B. Sebuah algoritma mengetahui bahwa pengguna mengklik iklan sebelum memperkirakan pembelian.

Pertanyaan seperti "berapa peluang hujan **jika** pagi berawan?" atau "berapa peluang lulus **jika** sudah mengikuti bimbingan?" menuntut **peluang bersyarat**. Kita juga akan belajar mencacah dengan **permutasi** dan **kombinasi** ketika ruang sampelnya besar, misalnya banyaknya cara memilih kartu dari satu set.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Peluang Bersyarat",
      body: `Peluang kejadian $A$ **dengan syarat** kejadian $B$ terjadi ditulis $P(A \\mid B)$, dibaca "peluang $A$ jika $B$". Karena kita sudah tahu $B$ terjadi, ruang sampel dipersempit menjadi $B$ saja:

$$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}, \\qquad P(B) > 0.$$

Rumus ini masuk akal: dari seluruh peluang yang dimiliki $B$, kita hanya menghitung bagian yang **juga** termasuk $A$, yaitu irisan $A \\cap B$.

Contoh: pada satu lemparan dadu, misalkan $B$ = "mata genap" $= \\{2,4,6\\}$ dan $A$ = "mata lebih dari 3" $= \\{4,5,6\\}$. Maka $A \\cap B = \\{4,6\\}$ dengan $P(A \\cap B) = \\tfrac{2}{6} = \\tfrac13$, dan $P(B) = \\tfrac12$, sehingga

$$P(A \\mid B) = \\frac{1/3}{1/2} = \\frac{2}{3}.$$

Memang, jika kita tahu muncul mata genap, peluang mata lebih dari 3 adalah $\\tfrac23$.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Inti yang perlu diingat",
          text: "Peluang bersyarat **mempersempit ruang sampel**. Penyebut $P(B)$ memastikan peluang dihitung ulang relatif terhadap informasi baru.",
        },
        {
          kind: "match",
          intro: "Pasangkan istilah dengan maknanya.",
          pairs: [
            {
              left: "Peluang bersyarat",
              right: "Peluang $A$ dengan syarat $B$ sudah terjadi",
            },
            {
              left: "Aturan perkalian",
              right: "$P(A\\cap B) = P(A\\mid B)P(B)$",
            },
            {
              left: "Aturan Bayes",
              right: "Membalik arah peluang bersyarat dengan memperbarui dugaan awal",
            },
            {
              left: "Saling bebas",
              right: "Terjadinya $B$ tidak mengubah peluang $A$",
            },
            {
              left: "Tabel kontingensi",
              right: "Tabel silang dua kategori untuk membaca peluang dari proporsi",
            },
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi: Tabel Kontingensi",
      body: `Data dua kategori sering disajikan sebagai **tabel kontingensi**. Misalkan dari 200 siswa diketahui apakah mereka menyukai Matematika dan Fisika:

| | Suka Matematika | Tidak Suka Matematika | Total |
|---|---|---|---|
| Suka Fisika | 40 | 30 | 70 |
| Tidak Suka Fisika | 20 | 110 | 130 |
| Total | 60 | 140 | 200 |

Dari tabel ini kita bisa membaca peluang langsung dari proporsi **baris** atau **kolom**. Misalkan $F$ = "suka Fisika" dan $M$ = "suka Matematika". Maka

$$P(M \\mid F) = \\frac{n(F \\cap M)}{n(F)} = \\frac{40}{70} = \\frac47 \\approx 0{,}571,$$

sedangkan

$$P(F \\mid M) = \\frac{n(F \\cap M)}{n(M)} = \\frac{40}{60} = \\frac23 \\approx 0{,}667.$$

Perhatikan bahwa $P(M \\mid F) \\neq P(F \\mid M)$ — peluang bersyarat bergantung pada **kondisi mana yang diketahui**.`,
      blocks: [
        {
          kind: "callout",
          variant: "tip",
          text: "Untuk $P(A \\mid B)$, bagi irisan dengan **total baris/kolom milik $B$**, bukan dengan total keseluruhan.",
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Simbolik",
              body: "$P(M\\mid F)=\\dfrac{P(M\\cap F)}{P(F)}$ dan $P(F\\mid M)=\\dfrac{P(F\\cap M)}{P(M)}$.",
            },
            {
              label: "Tabel",
              body: "Dari tabel: $P(M\\mid F)=\\dfrac{40}{70}=\\dfrac47\\approx 0{,}571$.",
            },
            {
              label: "Perbandingan",
              body: "$P(F\\mid M)=\\dfrac{40}{60}=\\dfrac23\\approx 0{,}667$, berbeda dari $P(M\\mid F)$ karena kondisi yang diketahui berbeda.",
            },
          ],
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Aturan Perkalian",
      body: `Dari definisi peluang bersyarat kita bisa menurunkan **aturan perkalian**:

$$P(A \\cap B) = P(A \\mid B) \\cdot P(B) = P(B \\mid A) \\cdot P(A).$$

Aturan ini sangat berguna untuk kejadian yang terjadi **berurutan**. Contoh: sebuah kantong berisi 3 bola merah dan 2 bola putih (total 5). Diambil dua bola **tanpa pengembalian**.

- Peluang bola pertama merah: $P(M_1) = \\tfrac35$.
- Jika bola pertama merah, tersisa 2 merah dan 2 putih, sehingga $P(M_2 \\mid M_1) = \\tfrac24 = \\tfrac12$.
- Peluang kedua-duanya merah: $P(M_1 \\cap M_2) = \\tfrac35 \\cdot \\tfrac12 = \\tfrac{3}{10}$.

Aturan ini juga memungkinkan kita menghitung peluang bersyarat yang sulit secara langsung, bila irisan dan peluang syarat lain lebih mudah dihitung.`,
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Saling Bebas dan Aturan Bayes",
      body: `**Kejadian saling bebas.** $A$ dan $B$ saling bebas bila terjadinya $B$ tidak mengubah peluang $A$:

$$P(A \\mid B) = P(A) \\quad \\Longleftrightarrow \\quad P(A \\cap B) = P(A) \\cdot P(B).$$

Contoh: melempar koin dua kali. Peluang gambar pada koin kedua tetap $\\tfrac12$ meskipun koin pertama gambar, sehingga kedua lemparan saling bebas.

**Aturan Bayes** membalik arah peluang bersyarat:

$$P(A \\mid B) = \\frac{P(B \\mid A)\\,P(A)}{P(B)},$$

dengan, untuk dua kejadian $A$ dan $A^c$ yang menutupi seluruh kemungkinan,

$$P(B) = P(B \\mid A)\\,P(A) + P(B \\mid A^c)\\,P(A^c).$$

Aturan Bayes dipakai untuk **memperbarui** dugaan awal $P(A)$ setelah melihat bukti $B$.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "Jangan menyamakan \"bebas\" dengan \"lepas\". Bila $A$ dan $B$ saling **lepas** dan keduanya berpeluang positif, maka $P(A \\cap B) = 0 \\neq P(A)P(B)$, sehingga justru **tidak bebas**.",
        },
      ],
    },
    {
      id: "pencacahan",
      kind: "konsep",
      title: "Permutasi dan Kombinasi sebagai Alat Pencacahan",
      body: `Ketika setiap hasil berpeluang sama, peluang adalah rasio banyaknya cara. Untuk kejadian dengan banyak kemungkinan, kita cacah dengan:

**Permutasi** (urutan diperhatikan):

$$P(n, k) = \\frac{n!}{(n-k)!}.$$

**Kombinasi** (urutan tidak diperhatikan):

$$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}.$$

Contoh: banyak cara memilih **3 dari 10** siswa untuk sebuah tim (tanpa jabatan) adalah $\\binom{10}{3} = 120$. Bila ketiganya diberi jabatan berbeda (ketua, sekretaris, bendahara), maka urutan penting dan hasilnya $P(10,3) = 10 \\cdot 9 \\cdot 8 = 720$.

Banyak konteks peluang bersyarat memerlukan pencacahan ini, misalnya menghitung peluang mengambil kartu tertentu dari satu set.`,
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi Peluang Bersyarat",
      body: "Ubah peluang kejadian $A$ dan $B$, lalu bandingkan $P(A\\mid B)$ dengan $P(B\\mid A)$. Apakah keduanya selalu sama?",
      blocks: [
        {
          kind: "exploration",
          explorationId: "peluang-bersyarat-sim",
        },
      ],
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      body: `**Contoh 1 — Dari tabel kontingensi.** Dengan tabel pada bagian representasi dan $F \\cup M$:

$$P(F \\cup M) = P(F) + P(M) - P(F \\cap M) = \\frac{70}{200} + \\frac{60}{200} - \\frac{40}{200} = \\frac{90}{200} = 0{,}45.$$

**Contoh 2 — Aturan perkalian dan Bayes.** Dua kantong: Kantong A berisi 3 merah dan 2 putih; Kantong B berisi 1 merah dan 4 putih. Sebuah kantong dipilih secara acak, lalu satu bola diambil dan ternyata merah. Berapa peluang kantong yang terpilih adalah A?

Karena kantong dipilih acak, $P(A) = P(B) = \\tfrac12$. Peluang mengambil merah:

$$P(\\text{merah}) = \\tfrac12 \\cdot \\tfrac35 + \\tfrac12 \\cdot \\tfrac15 = \\tfrac{3}{10} + \\tfrac{1}{10} = \\tfrac{4}{10} = \\tfrac25.$$

Dengan aturan Bayes:

$$P(A \\mid \\text{merah}) = \\frac{\\tfrac12 \\cdot \\tfrac35}{\\tfrac25} = \\frac{3/10}{2/5} = \\frac34.$$

Jadi setelah melihat bola merah, peluang memilih Kantong A naik menjadi $\\tfrac34$.

**Contoh 3 — Kartu tanpa pengembalian.** Dua kartu diambil berturut-turut dari 52 kartu tanpa pengembalian.

- Peluang keduanya As: $P(\\text{As}_1) = \\tfrac{4}{52} = \\tfrac{1}{13}$ dan $P(\\text{As}_2 \\mid \\text{As}_1) = \\tfrac{3}{51} = \\tfrac{1}{17}$, sehingga $P(\\text{As}_1 \\cap \\text{As}_2) = \\tfrac{1}{13} \\cdot \\tfrac{1}{17} = \\tfrac{1}{221}$.
- Peluang kartu kedua As **jika** kartu pertama As adalah $\\tfrac{1}{17} \\approx 0{,}0588$.

**Contoh 4 — Pencacahan.** Dari 8 siswa akan dipilih 3 untuk mewakili kelas. Banyak susunan tim (urutan tidak penting) adalah $\\binom{8}{3} = 56$.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Mari hitung peluang dua kartu As diambil berturut-turut tanpa pengembalian, satu langkah sekaligus.",
          steps: [
            {
              title: "Kartu pertama",
              text: "Ada $4$ As dari $52$ kartu, sehingga $P(\\text{As}_1)=\\dfrac{4}{52}=\\dfrac{1}{13}$.",
            },
            {
              title: "Kondisi setelah pengambilan",
              text: "Karena tanpa pengembalian, tersisa $51$ kartu dan $3$ As.",
            },
            {
              title: "Peluang bersyarat",
              text: "$P(\\text{As}_2\\mid\\text{As}_1)=\\dfrac{3}{51}=\\dfrac{1}{17}$.",
            },
            {
              title: "Aturan perkalian",
              text: "$P(\\text{As}_1\\cap\\text{As}_2)=\\dfrac{1}{13}\\cdot\\dfrac{1}{17}=\\dfrac{1}{221}$.",
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
      body: `Peluang bersyarat dan aturan Bayes dipakai luas: menafsirkan hasil tes medis, memfilter email spam, memperbarui ramalan cuaca, dan memprediksi perilaku pelanggan. Pesan pentingnya adalah **bukti mengubah peluang, tetapi seberapa besar bergantung pada peluang awal**.

Contoh tes penyakit pada latihan menegaskan bahwa hasil positif belum tentu berarti besar kemungkinan sakit, terlebih jika penyakitnya langka. Penalaran seperti ini melindungi kita dari kesimpulan yang menakutkan atau menyesatkan.

Topik ini juga menjadi jembatan ke penalaran tentang **asosiasi dan kausalitas**: peluang bersyarat membantu mengukur seberapa besar informasi baru mengubah dugaan kita.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menukar $P(A \\mid B)$ dengan $P(B \\mid A)$.** $P(\\text{suka Fisika} \\mid \\text{suka Matematika}) = \\tfrac23$, sedangkan $P(\\text{suka Matematika} \\mid \\text{suka Fisika}) = \\tfrac47$. Keduanya berbeda.

**2. Membagi dengan total keseluruhan saat menghitung peluang bersyarat.** Untuk $P(A \\mid B)$, gunakan total milik $B$, bukan total seluruh sampel.

**3. Menganggap "saling bebas" sama dengan "saling lepas".** Kejadian saling lepas dengan peluang positif justru saling **bergantung**.

**4. Mengabaikan peluang awal pada aturan Bayes.** Hasil positif pada penyakit langka tetap bisa berarti peluang sakit kecil. Peluang awal sangat menentukan.

**5. Salah memilih permutasi atau kombinasi.** Gunakan kombinasi bila urutan **tidak** penting (memilih tim), dan permutasi bila urutan **penting** (menyusun jabatan atau kata sandi).`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Seorang siswa membaca tabel kontingensi dengan $n(F\\cap M)=40$, $n(F)=70$, dan $n(M)=60$. Klik langkah yang keliru.",
          steps: [
            "Untuk $P(M\\mid F)$, bagi irisan dengan total milik $F$: $P(M\\mid F)=\\dfrac{40}{70}=\\dfrac47$.",
            "Karena $P(F\\mid M)$ memakai angka irisan yang sama, hasilnya juga $\\dfrac47$.",
            "Jadi $P(F\\mid M)=\\dfrac47$.",
          ],
          wrongIndex: 1,
          explanation: "Untuk $P(F\\mid M)$ pembaginya adalah total milik $M$, bukan total milik $F$. Seharusnya $P(F\\mid M)=\\dfrac{40}{60}=\\dfrac23$. Jangan menukar kondisi yang diketahui.",
        },
      ],
    },
    {
      id: "tantangan",
      kind: "tantangan",
      title: "Tantangan",
      body: `Ini masalah klasik yang jawabannya sering mengejutkan.

Di dalam sebuah kotak terdapat tiga kartu yang tak dapat dibedakan dari belakang:
- kartu pertama berwarna merah pada **kedua** sisinya;
- kartu kedua berwarna putih pada **kedua** sisinya;
- kartu ketiga berwarna merah pada satu sisi dan putih pada sisi lainnya.

Sebuah kartu diambil secara acak, lalu diletakkan di atas meja. Ternyata sisi kartu yang tampak **berwarna merah**.

Berapa peluang sisi balik kartu itu juga berwarna merah?`,
      blocks: [
        {
          kind: "callout",
          variant: "tip",
          title: "Petunjuk",
          text: `Jangan berpikir dalam satuan **kartu**, melainkan dalam satuan **muka (sisi)** kartu. Kedua sisi tiap kartu sama mungkin muncul di atas.`,
        },
        {
          kind: "step-reveal",
          intro: "Hitung berdasarkan muka kartu, bukan kartu.",
          steps: [
            {
              title: "Daftar seluruh muka",
              text: `Ada $6$ muka yang sama mungkin: dua merah milik kartu merah-merah, dua putih milik kartu putih-putih, serta satu merah dan satu putih milik kartu campuran.`,
            },
            {
              title: "Batasi pada muka merah",
              text: `Diketahui muka yang tampak merah. Ada $3$ muka merah yang sama mungkin. Inilah peluang bersyarat yang mempersempit ruang sampel.`,
            },
            {
              title: "Hitung muka merah yang balikannya merah",
              text: `Dari $3$ muka merah itu, $2$ di antaranya berasal dari kartu merah-merah, dan $1$ berasal dari kartu campuran.`,
            },
            {
              title: "Simpulkan",
              text: `Jadi $P(\\text{balikan merah}\\mid\\text{tampak merah})=\\dfrac{2}{3}$, bukan $\\dfrac{1}{2}$.`,
            },
          ],
        },
      ],
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Renungkan bagaimana informasi tambahan mengubah cara kamu menilai peluang.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Bagaimana informasi tambahan mempersempit ruang sampel, dan mengapa itu mengubah peluang?",
            "Kapan kamu harus memakai aturan Bayes, dan mengapa peluang awal begitu penting?",
            "Mengapa $P(A\\mid B)$ dan $P(B\\mid A)$ umumnya tidak sama? Berikan satu contoh untuk menjelaskan perbedaannya.",
            "Apa perbedaan mendasar antara permutasi dan kombinasi, serta bagaimana kamu memutuskan mana yang dipakai?",
          ],
          confidenceLabel: "Seberapa yakin kamu menghitung peluang bersyarat dari tabel dan rumus?",
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
            "Konsep",
            "Bentuk",
          ],
          rows: [
            [
              "Peluang bersyarat",
              "$P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}$",
            ],
            [
              "Aturan perkalian",
              "$P(A \\cap B) = P(A \\mid B)P(B)$",
            ],
            [
              "Saling bebas",
              "$P(A \\mid B) = P(A)$ atau $P(A \\cap B) = P(A)P(B)$",
            ],
            [
              "Aturan Bayes",
              "$P(A \\mid B) = \\dfrac{P(B \\mid A)P(A)}{P(B)}$",
            ],
            [
              "Permutasi",
              "$P(n,k) = \\dfrac{n!}{(n-k)!}$",
            ],
            [
              "Kombinasi",
              "$\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Tiket keluar.** (1) Bagaimana aturan perkalian $P(A\\cap B)=P(A\\mid B)\\,P(B)$ membantu menghitung kejadian yang berurutan? (2) Kapan $P(A\\mid B)$ sama dengan $P(A)$? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Peluang Bersyarat** untuk latihan tambahan.`,
    },
  ],
};

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
    'Peluang bersyarat menjawab pertanyaan "berapa peluang $A$ jika kita tahu $B$ sudah terjadi?". Topik ini membangun rumus $P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}$, aturan perkalian,dan aturan Bayes sederhana, serta melatih pembacaan tabel kontingensi. Permutasi dan kombinasi dipakai sebagai alat mencacah ketika ruang sampel perlu dihitung dengan cermat.',
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
  sections: [
    {
      id: 'tujuan',
      kind: 'tujuan',
      title: 'Tujuan Pembelajaran',
      body: `Setelah mempelajari topik ini, peserta didik dapat menghitung peluang bersyarat, menerapkan aturan perkalian dan aturan Bayes sederhana, memeriksa kebebasan dua kejadian, membaca tabel kontingensi, serta menggunakan permutasi dan kombinasi sebagai alat pencacahan dalam masalah peluang.`,
    },
    {
      id: 'pemantik',
      kind: 'pemantik',
      title: 'Pertanyaan Pemantik',
      body: `Sebuah keluarga memiliki **dua anak**. Kita tahu bahwa **paling sedikit satu di antaranya laki-laki**. Berapa peluang keduanya laki-laki?

Banyak orang spontan menjawab $\\tfrac12$ dengan alasan "anak lainnya pasti laki-laki atau perempuan, peluangnya separuh". Ternyata jawabannya bukan $\\tfrac12$.

- Mengapa informasi "paling sedikit satu laki-laki" mengubah ruang sampel?
- Bagaimana informasi tambahan mengubah peluang?

Hitung dulu dengan menuliskan seluruh kemungkinan jenis kelamin dua anak secara berurutan.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat arah jawaban',
          text: `Ruang sampel: $\\{LL, LP, PL, PP\\}$. Informasi "paling sedikit satu laki-laki" menyisakan $\\{LL, LP, PL\\}$ — tiga hasil sama mungkin. Dari ketiganya, hanya $LL$ yang memenuhi "keduanya laki-laki", sehingga peluangnya $\\tfrac13$, bukan $\\tfrac12$. Inilah inti **peluang bersyarat**: ruang sampel dipersempit oleh informasi yang sudah diketahui.`,
        },
      ],
    },
    {
      id: 'prasyarat',
      kind: 'prasyarat',
      title: 'Prasyarat',
      body: `Sebelum melanjutkan, pastikan kamu menguasai:

- rumus peluang teoretis $P(A) = \\dfrac{n(A)}{n(S)}$;
- irisan dan komplemen kejadian: $A \\cap B$ dan $A^c$;
- aturan komplemen $P(A^c) = 1 - P(A)$.`,
    },
    {
      id: 'konteks',
      kind: 'konteks',
      title: 'Situasi dan Konteks',
      body: `Sering kali kita memiliki informasi tambahan sebelum menghitung peluang. Seorang dokter mengetahui hasil tes sebelum menaksir peluang penyakit. Sebuah tim pemasaran mengetahui bahwa pelanggan pernah membeli produk A sebelum memprediksi pembelian produk B. Sebuah algoritma mengetahui bahwa pengguna mengklik iklan sebelum memperkirakan pembelian.

Pertanyaan seperti "berapa peluang hujan **jika** pagi berawan?" atau "berapa peluang lulus **jika** sudah mengikuti bimbingan?" menuntut **peluang bersyarat**. Kita juga akan belajar mencacah dengan **permutasi** dan **kombinasi** ketika ruang sampelnya besar, misalnya banyaknya cara memilih kartu dari satu set.`,
    },
    {
      id: 'konsep',
      kind: 'konsep',
      title: 'Konsep Inti: Peluang Bersyarat',
      body: `Peluang kejadian $A$ **dengan syarat** kejadian $B$ terjadi ditulis $P(A \\mid B)$, dibaca "peluang $A$ jika $B$". Karena kita sudah tahu $B$ terjadi, ruang sampel dipersempit menjadi $B$ saja:

$$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}, \\qquad P(B) > 0.$$

Rumus ini masuk akal: dari seluruh peluang yang dimiliki $B$, kita hanya menghitung bagian yang **juga** termasuk $A$, yaitu irisan $A \\cap B$.

Contoh: pada satu lemparan dadu, misalkan $B$ = "mata genap" $= \\{2,4,6\\}$ dan $A$ = "mata lebih dari 3" $= \\{4,5,6\\}$. Maka $A \\cap B = \\{4,6\\}$ dengan $P(A \\cap B) = \\tfrac{2}{6} = \\tfrac13$, dan $P(B) = \\tfrac12$, sehingga

$$P(A \\mid B) = \\frac{1/3}{1/2} = \\frac{2}{3}.$$

Memang, jika kita tahu muncul mata genap, peluang mata lebih dari 3 adalah $\\tfrac23$.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'concept',
          title: 'Inti yang perlu diingat',
          text: 'Peluang bersyarat **mempersempit ruang sampel**. Penyebut $P(B)$ memastikan peluang dihitung ulang relatif terhadap informasi baru.',
        },
      ],
    },
    {
      id: 'representasi',
      kind: 'representasi',
      title: 'Representasi: Tabel Kontingensi',
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
          kind: 'callout',
          variant: 'tip',
          text: 'Untuk $P(A \\mid B)$, bagi irisan dengan **total baris/kolom milik $B$**, bukan dengan total keseluruhan.',
        },
      ],
    },
    {
      id: 'generalisasi',
      kind: 'generalisasi',
      title: 'Aturan Perkalian',
      body: `Dari definisi peluang bersyarat kita bisa menurunkan **aturan perkalian**:

$$P(A \\cap B) = P(A \\mid B) \\cdot P(B) = P(B \\mid A) \\cdot P(A).$$

Aturan ini sangat berguna untuk kejadian yang terjadi **berurutan**. Contoh: sebuah kantong berisi 3 bola merah dan 2 bola putih (total 5). Diambil dua bola **tanpa pengembalian**.

- Peluang bola pertama merah: $P(M_1) = \\tfrac35$.
- Jika bola pertama merah, tersisa 2 merah dan 2 putih, sehingga $P(M_2 \\mid M_1) = \\tfrac24 = \\tfrac12$.
- Peluang kedua-duanya merah: $P(M_1 \\cap M_2) = \\tfrac35 \\cdot \\tfrac12 = \\tfrac{3}{10}$.

Aturan ini juga memungkinkan kita menghitung peluang bersyarat yang sulit secara langsung, bila irisan dan peluang syarat lain lebih mudah dihitung.`,
    },
    {
      id: 'rumus',
      kind: 'rumus',
      title: 'Saling Bebas dan Aturan Bayes',
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
          kind: 'callout',
          variant: 'warning',
          title: 'Hati-hati',
          text: 'Jangan menyamakan "bebas" dengan "lepas". Bila $A$ dan $B$ saling **lepas** dan keduanya berpeluang positif, maka $P(A \\cap B) = 0 \\neq P(A)P(B)$, sehingga justru **tidak bebas**.',
        },
      ],
    },
    {
      id: 'pencacahan',
      kind: 'konsep',
      title: 'Permutasi dan Kombinasi sebagai Alat Pencacahan',
      body: `Ketika setiap hasil berpeluang sama, peluang adalah rasio banyaknya cara. Untuk kejadian dengan banyak kemungkinan, kita cacah dengan:

**Permutasi** (urutan diperhatikan):

$$P(n, k) = \\frac{n!}{(n-k)!}.$$

**Kombinasi** (urutan tidak diperhatikan):

$$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}.$$

Contoh: banyak cara memilih **3 dari 10** siswa untuk sebuah tim (tanpa jabatan) adalah $\\binom{10}{3} = 120$. Bila ketiganya diberi jabatan berbeda (ketua, sekretaris, bendahara), maka urutan penting dan hasilnya $P(10,3) = 10 \\cdot 9 \\cdot 8 = 720$.

Banyak konteks peluang bersyarat memerlukan pencacahan ini, misalnya menghitung peluang mengambil kartu tertentu dari satu set.`,
    },
    {
      id: 'contoh',
      kind: 'contoh',
      title: 'Contoh Terbimbing',
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
    },
    {
      id: 'latihan-dasar',
      kind: 'latihan-dasar',
      title: 'Latihan Dasar',
      level: 'dasar',
      body: `Diketahui $P(A) = 0{,}5$, $P(B) = 0{,}4$, dan $P(A \\cap B) = 0{,}2$.

1. Hitung $P(A \\mid B)$.
2. Hitung $P(B \\mid A)$.
3. Periksa apakah $A$ dan $B$ saling bebas.
4. Hitung $P(A \\cup B)$.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. $P(A \\mid B) = \\dfrac{0{,}2}{0{,}4} = 0{,}5$.
2. $P(B \\mid A) = \\dfrac{0{,}2}{0{,}5} = 0{,}4$.
3. Karena $P(A \\cap B) = 0{,}2 = P(A)P(B) = 0{,}5 \\cdot 0{,}4$, maka $A$ dan $B$ **saling bebas** (dan $P(A \\mid B) = P(A) = 0{,}5$).
4. $P(A \\cup B) = 0{,}5 + 0{,}4 - 0{,}2 = 0{,}7$.`,
        },
      ],
    },
    {
      id: 'latihan-cakap',
      kind: 'latihan-cakap',
      title: 'Latihan Cakap',
      level: 'cakap',
      body: `1. Dua anak dipilih dari keluarga yang memiliki dua anak. Diketahui paling sedikit satu anak laki-laki. Berapa peluang kedua anak laki-laki?
2. Sebuah tes penyakit memiliki sensitivitas $P(+ \\mid D) = 0{,}9$ dan spesifisitas $P(- \\mid D^c) = 0{,}9$. Jika prevalensi penyakit $P(D) = 0{,}01$, hitung $P(D \\mid +)$.
3. Dua bola diambil tanpa pengembalian dari kantong berisi 5 merah dan 3 biru. Tentukan peluang bola kedua merah jika bola pertama merah.
4. Hitung $\\binom{6}{2}$ dan $P(6,2)$. Jelaskan mengapa keduanya berbeda.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. Ruang sampel $\\{LL, LP, PL, PP\\}$; syarat "paling sedikit satu laki-laki" menyisakan $\\{LL, LP, PL\\}$, sehingga $P = \\tfrac13$.
2. $P(+) = P(+ \\mid D)P(D) + P(+ \\mid D^c)P(D^c) = 0{,}9(0{,}01) + 0{,}1(0{,}99) = 0{,}009 + 0{,}099 = 0{,}108$. Maka $P(D \\mid +) = \\dfrac{0{,}009}{0{,}108} = \\dfrac{1}{12} \\approx 0{,}083$. Meski tes "90% akurat", sebagian besar hasil positif justru berasal dari orang sehat karena penyakitnya jarang.
3. Setelah satu merah terambil, tersisa 4 merah dan 3 biru dari 7 bola, sehingga $P(M_2 \\mid M_1) = \\tfrac47$.
4. $\\binom{6}{2} = 15$ (urutan tidak penting) dan $P(6,2) = 30$ (urutan penting), tepat dua kali lipat karena 2 objek memiliki $2! = 2$ susunan.`,
        },
      ],
    },
    {
      id: 'latihan-mahir',
      kind: 'latihan-mahir',
      title: 'Latihan Mahir',
      level: 'mahir',
      body: `1. Kantong A dipilih dengan peluang $\\tfrac23$ dan Kantong B dengan peluang $\\tfrac13$. Kantong A berisi 3 merah dan 2 putih; Kantong B berisi 1 merah dan 4 putih. Jika terambil bola merah, tentukan $P(A \\mid \\text{merah})$.
2. Dari 6 siswa laki-laki dan 4 siswa perempuan akan dipilih 3 orang. Tentukan peluang terpilih tepat 2 siswa laki-laki.
3. Buktikan bahwa bila $P(A) > 0$, $P(B) > 0$, dan $A$, $B$ saling lepas, maka $A$ dan $B$ **tidak** saling bebas.
4. Dari kantong berisi 5 merah dan 3 biru, dua bola diambil tanpa pengembalian. Hitung peluang kedua bola merah, lalu bandingkan dengan hasil aturan perkalian $P(M_1)P(M_2 \\mid M_1)$.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat pembahasan',
          text: `1. $P(\\text{merah}) = \\tfrac23 \\cdot \\tfrac35 + \\tfrac13 \\cdot \\tfrac15 = \\tfrac25 + \\tfrac{1}{15} = \\tfrac{6}{15} + \\tfrac{1}{15} = \\tfrac{7}{15}$. Maka $P(A \\mid \\text{merah}) = \\dfrac{\\tfrac23 \\cdot \\tfrac35}{\\tfrac{7}{15}} = \\dfrac{2/5}{7/15} = \\dfrac{6}{7}$.
2. Banyak cara memilih 3 dari 10 adalah $\\binom{10}{3} = 120$. Cara memilih tepat 2 laki-laki dan 1 perempuan adalah $\\binom{6}{2}\\binom{4}{1} = 15 \\cdot 4 = 60$. Jadi $P = \\tfrac{60}{120} = \\tfrac12$.
3. Karena saling lepas, $A \\cap B = \\varnothing$ sehingga $P(A \\cap B) = 0$. Padahal $P(A)P(B) > 0$ (keduanya positif). Karena $0 \\neq P(A)P(B)$, kedua kejadian tidak saling bebas.
4. $P(M_1 \\cap M_2) = \\dfrac{\\binom{5}{2}}{\\binom{8}{2}} = \\dfrac{10}{28} = \\dfrac{5}{14}$. Dengan aturan perkalian: $P(M_1) = \\tfrac58$ dan $P(M_2 \\mid M_1) = \\tfrac47$, sehingga $\\tfrac58 \\cdot \\tfrac47 = \\tfrac{20}{56} = \\tfrac{5}{14}$. Keduanya cocok.`,
        },
      ],
    },
    {
      id: 'dunia-nyata',
      kind: 'dunia-nyata',
      title: 'Penerapan di Dunia Nyata',
      body: `Peluang bersyarat dan aturan Bayes dipakai luas: menafsirkan hasil tes medis, memfilter email spam, memperbarui ramalan cuaca, dan memprediksi perilaku pelanggan. Pesan pentingnya adalah **bukti mengubah peluang, tetapi seberapa besar bergantung pada peluang awal**.

Contoh tes penyakit pada latihan menegaskan bahwa hasil positif belum tentu berarti besar kemungkinan sakit, terlebih jika penyakitnya langka. Penalaran seperti ini melindungi kita dari kesimpulan yang menakutkan atau menyesatkan.

Topik ini juga menjadi jembatan ke penalaran tentang **asosiasi dan kausalitas**: peluang bersyarat membantu mengukur seberapa besar informasi baru mengubah dugaan kita.`,
    },
    {
      id: 'kesalahan-umum',
      kind: 'kesalahan-umum',
      title: 'Kesalahan Umum',
      body: `**1. Menukar $P(A \\mid B)$ dengan $P(B \\mid A)$.** $P(\\text{suka Fisika} \\mid \\text{suka Matematika}) = \\tfrac23$, sedangkan $P(\\text{suka Matematika} \\mid \\text{suka Fisika}) = \\tfrac47$. Keduanya berbeda.

**2. Membagi dengan total keseluruhan saat menghitung peluang bersyarat.** Untuk $P(A \\mid B)$, gunakan total milik $B$, bukan total seluruh sampel.

**3. Menganggap "saling bebas" sama dengan "saling lepas".** Kejadian saling lepas dengan peluang positif justru saling **bergantung**.

**4. Mengabaikan peluang awal pada aturan Bayes.** Hasil positif pada penyakit langka tetap bisa berarti peluang sakit kecil. Peluang awal sangat menentukan.

**5. Salah memilih permutasi atau kombinasi.** Gunakan kombinasi bila urutan **tidak** penting (memilih tim), dan permutasi bila urutan **penting** (menyusun jabatan atau kata sandi).`,
    },
    {
      id: 'refleksi',
      kind: 'refleksi',
      title: 'Refleksi',
      body: `Jawab dengan jujur:

1. Bagaimana informasi tambahan "mempersempit" ruang sampel, dan mengapa itu mengubah peluang?
2. Kapan kamu harus memakai aturan Bayes, dan mengapa peluang awal begitu penting?
3. Apa perbedaan mendasar antara permutasi dan kombinasi, serta bagaimana kamu memutuskan mana yang dipakai?`,
    },
    {
      id: 'rangkuman',
      kind: 'rangkuman',
      title: 'Rangkuman',
      blocks: [
        {
          kind: 'table',
          headers: ['Konsep', 'Bentuk'],
          rows: [
            ['Peluang bersyarat', '$P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}$'],
            ['Aturan perkalian', '$P(A \\cap B) = P(A \\mid B)P(B)$'],
            ['Saling bebas', '$P(A \\mid B) = P(A)$ atau $P(A \\cap B) = P(A)P(B)$'],
            ['Aturan Bayes', '$P(A \\mid B) = \\dfrac{P(B \\mid A)P(A)}{P(B)}$'],
            ['Permutasi', '$P(n,k) = \\dfrac{n!}{(n-k)!}$'],
            ['Kombinasi', '$\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$'],
          ],
        },
      ],
    },
    {
      id: 'evaluasi',
      kind: 'evaluasi',
      title: 'Evaluasi',
      body: `Kerjakan kuis topik ini untuk memeriksa pemahamanmu. Buka halaman [Latihan & Asesmen](/latihan) lalu pilih topik **Peluang Bersyarat**.`,
    },
  ],
};

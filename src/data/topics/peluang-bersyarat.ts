import type { Topic } from '@/types/content';

export const peluangBersyarat: Topic = {
  id: 'peluang-bersyarat',
  slug: 'peluang-bersyarat',
  title: 'Peluang Bersyarat',
  subtitle: 'Peluang ketika sebagian informasi sudah diketahui',
  grade: 'XII',
  phase: 'F',
  element: 'data-peluang',
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
          reveal: "Ruang sampel: $\\{LL, LP, PL, PP\\}$. Informasi \"paling sedikit satu laki-laki\" menyisakan $\\{LL, LP, PL\\}$, yaitu tiga hasil sama mungkin. Dari ketiganya, hanya $LL$ yang memenuhi \"keduanya laki-laki\", sehingga peluangnya $\\tfrac13$, bukan $\\tfrac12$. Inilah inti **peluang bersyarat**: ruang sampel dipersempit oleh informasi yang sudah diketahui.",
          saveLabel: "Simpan dugaan",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Topik ini memperdalam Peluang, jadi pastikan dahulu kamu dapat:

- memakai rumus peluang teoretis $P(A) = \\dfrac{n(A)}{n(S)}$;
- menuliskan irisan dan komplemen kejadian: $A \\cap B$ dan $A^c$;
- menerapkan aturan komplemen $P(A^c) = 1 - P(A)$.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Sering kali kita memiliki informasi tambahan sebelum menghitung peluang. Seorang dokter mengetahui hasil tes sebelum menaksir peluang penyakit. Sebuah tim pemasaran mengetahui bahwa pelanggan pernah membeli produk A sebelum memprediksi pembelian produk B. Sebuah algoritma mengetahui bahwa pengguna mengklik iklan sebelum memperkirakan pembelian.

Pertanyaan seperti "berapa peluang hujan **jika** pagi berawan?" atau "berapa peluang lulus **jika** sudah mengikuti bimbingan?" menuntut **peluang bersyarat**. Kita juga akan belajar mencacah dengan **permutasi** dan **kombinasi** ketika ruang sampelnya besar, seperti banyaknya cara memilih kartu dari satu set.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Peluang Bersyarat",
      questionIds: ['pb-01'],
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
          title: "Kunci: ruang sampel menyempit",
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
        {
          kind: "flip-cards",
          intro: "Latih istilah kunci peluang bersyarat dan pencacahan.",
          cards: [
            {
              front: "Peluang bersyarat",
              back: "Peluang $A$ dengan syarat $B$ sudah terjadi: $P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}$",
            },
            {
              front: "Ruang sampel menyempit",
              back: "Karena $B$ diketahui, peluang dihitung ulang relatif terhadap $B$",
            },
            {
              front: "Aturan perkalian",
              back: "Peluang dua kejadian berurutan: $P(A\\cap B)=P(A\\mid B)\\,P(B)$",
            },
            {
              front: "Kejadian saling bebas",
              back: "Terjadinya $B$ tidak mengubah peluang $A$: $P(A\\mid B)=P(A)$",
            },
            {
              front: "Aturan Bayes",
              back: "Memperbarui peluang awal $P(A)$ setelah melihat bukti $B$",
            },
            {
              front: "Permutasi",
              back: "Menyusun dengan urutan diperhatikan: $P(n,k)=\\dfrac{n!}{(n-k)!}$",
            },
            {
              front: "Kombinasi",
              back: "Memilih dengan urutan tidak diperhatikan: $\\binom{n}{k}=\\dfrac{n!}{k!\\,(n-k)!}$",
            },
          ],
        },
        {
          kind: "figure",
          alt: "Diagram pohon peluang bersyarat: dari titik awal bercabang hujan dengan peluang 0,3 atau tidak hujan 0,7, lalu tiap cabang bercabang lagi membawa payung atau tidak.",
          caption: "Diagram pohon: $P(\\text{hujan})=0{,}3$; jika hujan $P(\\text{payung}\\mid\\text{hujan})=0{,}8$; jika tidak hujan $P(\\text{payung}\\mid\\text{tidak hujan})=0{,}1$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><defs><marker id="fig-pb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><g fill="none" stroke="currentColor" stroke-width="1.6"><line x1="26" y1="120" x2="120" y2="62" marker-end="url(#fig-pb-arrow)"/><line x1="26" y1="120" x2="120" y2="178" marker-end="url(#fig-pb-arrow)"/><line x1="120" y1="62" x2="232" y2="32" marker-end="url(#fig-pb-arrow)"/><line x1="120" y1="62" x2="232" y2="92" marker-end="url(#fig-pb-arrow)"/><line x1="120" y1="178" x2="232" y2="148" marker-end="url(#fig-pb-arrow)"/><line x1="120" y1="178" x2="232" y2="208" marker-end="url(#fig-pb-arrow)"/></g><circle cx="26" cy="120" r="3" fill="currentColor"/><circle cx="120" cy="62" r="3" fill="currentColor"/><circle cx="120" cy="178" r="3" fill="currentColor"/><circle cx="232" cy="32" r="3" fill="currentColor"/><circle cx="232" cy="92" r="3" fill="currentColor"/><circle cx="232" cy="148" r="3" fill="currentColor"/><circle cx="232" cy="208" r="3" fill="currentColor"/><text x="26" y="140" font-size="11" fill="currentColor" text-anchor="middle">Awal</text><text x="120" y="50" font-size="12" fill="currentColor" text-anchor="middle">Hujan</text><text x="120" y="196" font-size="12" fill="currentColor" text-anchor="middle">Tidak hujan</text><text x="68" y="86" font-size="11" fill="currentColor" text-anchor="end">0,3</text><text x="68" y="158" font-size="11" fill="currentColor" text-anchor="end">0,7</text><text x="166" y="44" font-size="11" fill="currentColor" text-anchor="end">0,8</text><text x="166" y="78" font-size="11" fill="currentColor" text-anchor="end">0,2</text><text x="166" y="160" font-size="11" fill="currentColor" text-anchor="end">0,1</text><text x="166" y="194" font-size="11" fill="currentColor" text-anchor="end">0,9</text><text x="238" y="36" font-size="11" fill="currentColor">Payung</text><text x="238" y="96" font-size="11" fill="currentColor">Tidak payung</text><text x="238" y="152" font-size="11" fill="currentColor">Payung</text><text x="238" y="212" font-size="11" fill="currentColor">Tidak payung</text></svg>',
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

Tampak bahwa $P(M \\mid F) \\neq P(F \\mid M)$: peluang bersyarat bergantung pada **kondisi mana yang diketahui**.`,
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
        {
          kind: "figure",
          alt: "Diagram Venn kejadian M suka Matematika dan F suka Fisika; irisan M dan F berisi 40, M saja 20, F saja 30, dan 110 siswa di luar keduanya.",
          caption: "Diagram Venn memperjelas peluang bersyarat: dari 70 siswa yang suka Fisika, 40 juga suka Matematika sehingga $P(M\\mid F)=\\tfrac{40}{70}$. Peluang dibaca dari total milik kejadian yang diketahui, bukan total seluruh sampel.",
          svg: '<svg viewBox="0 0 320 220" aria-hidden="true" role="presentation"><rect x="20" y="20" width="280" height="180" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="130" cy="105" r="62" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="196" cy="105" r="62" fill="none" stroke="currentColor" stroke-width="2"/><text x="30" y="42" font-size="11" fill="currentColor">S</text><text x="52" y="52" font-size="13" fill="currentColor">M</text><text x="264" y="52" font-size="13" fill="currentColor">F</text><text x="96" y="110" font-size="13" text-anchor="middle" fill="currentColor">20</text><text x="163" y="110" font-size="13" text-anchor="middle" fill="currentColor">40</text><text x="230" y="110" font-size="13" text-anchor="middle" fill="currentColor">30</text><text x="160" y="190" font-size="12" text-anchor="middle" fill="currentColor">110</text></svg>',
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
          text: "Jangan menyamakan \"bebas\" dengan \"lepas\". Bila $A$ dan $B$ saling **lepas** dan keduanya berpeluang positif, maka $P(A \\cap B) = 0 \\neq P(A)P(B)$, sehingga **tidak bebas**.",
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

Banyak konteks peluang bersyarat memerlukan pencacahan ini, contohnya menghitung peluang mengambil kartu tertentu dari satu set.`,
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
      blocks: [
        {
          kind: "step-reveal",
          intro: "Enam contoh berikut dikerjakan langkah demi langkah, dari membaca tabel hingga memeriksa kebebasan dan mencacah.",
          steps: [
            {
              title: "Contoh 1: gabungan dua kejadian dari tabel",
              text: `Dari tabel diketahui $n(F)=70$, $n(M)=60$, $n(F\\cap M)=40$, dan total $200$ siswa. Hitung $P(F\\cup M)$.

*Penyelesaian.* Gunakan aturan penjumlahan:
$$P(F\\cup M)=P(F)+P(M)-P(F\\cap M)=\\frac{70}{200}+\\frac{60}{200}-\\frac{40}{200}=\\frac{90}{200}=0{,}45=\\frac{9}{20}.$$
Irisan $F\\cap M$ dikurangkan agar siswa yang menyukai keduanya tidak terhitung dua kali.`,
            },
            {
              title: "Contoh 2: aturan perkalian dan aturan Bayes",
              text: `Kantong A berisi 3 merah dan 2 putih; Kantong B berisi 1 merah dan 4 putih. Sebuah kantong dipilih acak, lalu satu bola diambil dan ternyata merah. Berapa peluang kantong terpilih adalah A?

*Penyelesaian.* Karena pemilihan acak, $P(A)=P(B)=\\tfrac12$. Peluang mengambil bola merah:
$$P(\\text{merah})=P(\\text{merah}\\mid A)P(A)+P(\\text{merah}\\mid B)P(B)=\\tfrac35\\cdot\\tfrac12+\\tfrac15\\cdot\\tfrac12=\\tfrac{4}{10}=\\tfrac25.$$
Dengan aturan Bayes:
$$P(A\\mid\\text{merah})=\\frac{P(\\text{merah}\\mid A)P(A)}{P(\\text{merah})}=\\frac{\\tfrac35\\cdot\\tfrac12}{\\tfrac25}=\\frac{3}{4}.$$
Jadi setelah melihat bola merah, peluang memilih Kantong A naik dari $\\tfrac12$ menjadi $\\tfrac34$.`,
            },
            {
              title: "Contoh 3: dua kartu As tanpa pengembalian",
              text: `Dua kartu diambil berturut-turut dari 52 kartu tanpa pengembalian. Berapa peluang keduanya As, dan berapa peluang kartu kedua As jika kartu pertama As?

*Penyelesaian.* Kartu pertama: $P(\\text{As}_1)=\\tfrac{4}{52}=\\tfrac{1}{13}$. Setelah satu As terambil, tersisa 51 kartu dengan 3 As, sehingga $P(\\text{As}_2\\mid\\text{As}_1)=\\tfrac{3}{51}=\\tfrac{1}{17}\\approx 0{,}0588$. Dengan aturan perkalian:
$$P(\\text{As}_1\\cap\\text{As}_2)=P(\\text{As}_2\\mid\\text{As}_1)\\,P(\\text{As}_1)=\\tfrac{1}{17}\\cdot\\tfrac{1}{13}=\\tfrac{1}{221}.$$`,
            },
            {
              title: "Contoh 4: mencacah banyak tim (kombinasi)",
              text: `Dari 8 siswa akan dipilih 3 untuk mewakili kelas. Berapa banyak susunan tim bila urutan tidak penting?

*Penyelesaian.* Karena urutan tidak diperhatikan, gunakan kombinasi:
$$\\binom{8}{3}=\\frac{8!}{3!\\,5!}=\\frac{8\\cdot 7\\cdot 6}{3\\cdot 2\\cdot 1}=56.$$
Jadi ada $56$ susunan tim yang mungkin.`,
            },
            {
              title: "Contoh 5: memeriksa kebebasan dua kejadian",
              text: `Pada tabel kontingensi di atas, $P(F)=\\dfrac{70}{200}=0{,}35$ dan $P(F\\mid M)=\\dfrac{40}{60}=\\dfrac23\\approx 0{,}667$. Apakah "suka Fisika" dan "suka Matematika" saling bebas?

*Penyelesaian.* Dua kejadian saling bebas hanya jika $P(F\\mid M)=P(F)$. Di sini $0{,}667 \\neq 0{,}35$, sehingga keduanya **tidak saling bebas**: mengetahui seseorang suka Matematika mengubah peluang ia suka Fisika.`,
            },
            {
              title: "Contoh 6: susunan berjabatan (permutasi)",
              text: `Dari 8 siswa akan dipilih 3 orang untuk jabatan ketua, sekretaris, dan bendahara. Berapa banyak susunan yang mungkin?

*Penyelesaian.* Kali ini urutan penting karena tiap jabatan berbeda, jadi gunakan permutasi:
$$P(8,3)=\\frac{8!}{(8-3)!}=8\\cdot 7\\cdot 6=336.$$
Bandingkan dengan Contoh 4: memilih 3 orang tanpa jabatan hanya $56$ cara, sedangkan memberi jabatan berbeda menambah urutan menjadi $336$ cara.`,
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
      body: `Peluang bersyarat dan aturan Bayes dipakai luas, dan angkanya sering mengejutkan. Bayangkan sebuah penyakit yang menyerang 1 dari 1.000 orang. Sebuah tes benar mendeteksi $99\\%$ penderita, tetapi keliru menandai $5\\%$ orang sehat sebagai positif. Jika seseorang dinyatakan positif, berapa peluang ia benar-benar sakit?

Misalkan $P(\\text{sakit})=0{,}001$, $P(\\text{positif}\\mid\\text{sakit})=0{,}99$, dan $P(\\text{positif}\\mid\\text{sehat})=0{,}05$. Maka
$$P(\\text{positif})=0{,}99\\cdot 0{,}001+0{,}05\\cdot 0{,}999=0{,}05094,$$
$$P(\\text{sakit}\\mid\\text{positif})=\\frac{0{,}00099}{0{,}05094}\\approx 0{,}0194\\approx 1{,}94\\%.$$

Jadi meskipun hasil tesnya positif, peluang benar-benar sakit hanya sekitar $2\\%$ karena penyakitnya langka. Penalaran serupa dipakai untuk menyaring spam, memperbarui ramalan cuaca, dan memperkirakan perilaku pelanggan. Pesan pentingnya: bukti mengubah peluang, tetapi seberapa besar perubahan itu bergantung pada peluang awal.

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
      title: "Tantangan: Tiga Kartu Dua Warna",
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
          text: `Jangan berpikir dalam satuan **kartu**; berpikirlah dalam satuan **muka (sisi)** kartu. Kedua sisi tiap kartu sama mungkin muncul di atas.`,
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
      id: "sejarah",
      kind: "sejarah",
      title: "Dari Bayes ke Peluang Invers",
      body: `Aturan Bayes berasal dari sebuah karangan Thomas Bayes yang diterbitkan secara anumerta pada 1763 berkat usaha Richard Price. Pierre-Simon Laplace kemudian merumuskannya lebih umum dan sistematis dalam *Théorie analytique des probabilités* (1812) sebagai bagian dari apa yang disebut peluang invers. Gagasan memperbarui peluang ketika informasi baru tersedia inilah inti peluang bersyarat. Istilah "Bayes" untuk pendekatan ini baru populer pada abad ke-20, ketika metode itu dipakai luas dalam statistika, pengambilan keputusan, dan pembelajaran mesin.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Satu petunjuk baru dapat mengubah penilaian kita secara drastis. Renungan berikut menuntunmu memeriksa kapan perubahan itu besar dan kapan hampir tak berarti.",
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
      questionIds: ['pb-09'],
      body: `**Tiket keluar.** (1) Ketika sebuah petunjuk baru tersedia, mengapa kita membagi dengan $P(B)$ alih-alih memakai total seluruh ruang sampel? (2) Berikan satu contoh ketika $P(A\\mid B)$ dan $P(B\\mid A)$ sangat berbeda, lalu jelaskan penyebabnya. Setelah menjawab, lanjutkan berlatih pada [Latihan & Asesmen](/latihan) topik **Peluang Bersyarat**.`,
    },
  ],
};

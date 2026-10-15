import type { Topic } from '@/types/content';

export const peluang: Topic = {
  id: 'peluang',
  slug: 'peluang',
  title: 'Peluang',
  subtitle: 'Mengukur kemungkinan dengan ruang sampel dan aturan hitung',
  grade: 'XI',
  phase: 'F',
  element: 'data-peluang',
  status: 'lengkap',
  estimatedMinutes: 90,
  summary:
    'Menghitung peluang teoretis dan empiris dari ruang sampel, menggunakan aturan penjumlahan dan perkalian, serta menentukan frekuensi harapan.',
  description:
    'Peluang adalah ukuran seberapa mungkin suatu kejadian terjadi. Topik ini dimulai dari ruang sampel dan kejadian, membandingkan peluang teoretis dengan peluang empiris hasil percobaan, lalu membangun aturan komplemen, aturan penjumlahan untuk kejadian saling lepas, aturan perkalian untuk kejadian saling bebas, dan frekuensi harapan. Semua konsep diterapkan pada dadu, koin, dan situasi nyata.',
  keywords: [
    'peluang',
    'ruang sampel',
    'kejadian',
    'komplemen',
    'saling lepas',
    'saling bebas',
    'frekuensi harapan',
    'kejadian majemuk',
  ],
  prerequisites: [],
  relatedTopics: ['peluang-bersyarat'],
  prerequisiteKnowledge: [
    'Himpunan, anggota himpunan, dan operasi gabungan/irisan',
    'Pecahan, desimal, dan persen',
    'Menyusun daftar hasil yang mungkin secara sistematis',
  ],
  objectives: [
    { text: 'Menentukan ruang sampel dan kejadian dari suatu percobaan acak.' },
    { text: 'Membedakan peluang teoretis dan peluang empiris serta kaitannya dengan hukum bilangan besar.' },
    { text: 'Menggunakan aturan komplemen dan aturan penjumlahan (termasuk kejadian saling lepas).' },
    { text: 'Menggunakan aturan perkalian untuk kejadian saling bebas.' },
    { text: 'Menghitung frekuensi harapan dan menafsirkannya dalam konteks.' },
    { text: 'Menghitung frekuensi harapan kejadian majemuk, seperti jumlah tertentu pada dua dadu atau hasil pada dua koin.' },
  ],
  applications: ['pemilihan-tim-lomba'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menentukan ruang sampel dan kejadian, menghitung peluang teoretis dan empiris, menerapkan aturan komplemen, penjumlahan, dan perkalian, serta menghitung frekuensi harapan pada percobaan maupun situasi nyata.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      body: `Sebuah koin dilempar **10 kali** dan hasilnya: angka, angka, angka, gambar, angka, gambar, angka, angka, angka, gambar. Tujuh dari sepuluh lemparan muncul angka.

- Apakah koin ini "cenderung angka"?
- Jika dilempar 1000 kali, apakah angka akan tetap mendominasi?
- Apa yang kita maksud ketika mengatakan peluang muncul angka adalah $\\tfrac12$?

Peluang teoretis $\\tfrac12$ tidak menjanjikan hasil seimbang pada percobaan singkat, tetapi hasil percobaan akan makin mendekati $\\tfrac12$ ketika banyak percobaan diperbesar.`,
      blocks: [
        {
          kind: "prediction",
          prompt: "Koin dilempar $1000$ kali. Apakah jumlah muncul angka pasti tepat $500$?",
          options: [
            "Ya, pasti tepat $500$",
            "Tidak, tetapi proporsinya cenderung mendekati $\\tfrac12$",
            "Tidak, berarti koin pasti tidak seimbang",
            "Tidak dapat diprediksi sama sekali",
          ],
          reveal: "Banyaknya lemparan yang sedikit membuat hasil mudah \"menyimpang\" dari $\\tfrac12$ hanya karena kebetulan. Ini bukan bukti koin tidak seimbang. Ketika percobaan diulang sangat banyak, **peluang empiris** (frekuensi relatif) cenderung mendekati **peluang teoretis**. Sifat ini disebut **hukum bilangan besar**.",
          saveLabel: "Simpan dugaan",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Peluang memakai bahasa himpunan, jadi pastikan dahulu kamu dapat:

- menulis himpunan hasil dengan notasi seperti $A = \\{2, 4, 6\\}$;
- menggunakan gabungan $A \\cup B$ dan irisan $A \\cap B$;
- mengubah pecahan menjadi desimal dan persen, misalnya $\\tfrac{1}{6} \\approx 0{,}167 \\approx 16{,}7\\%$.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Peluang membantu kita mengambil keputusan dalam ketidakpastian: memperkirakan peluang hujan, menaksir risiko investasi, menilai hasil tes kesehatan, sampai merancang permainan yang adil.

Dalam permainan dadu, pemain bertanya: seberapa besar kemungkinan jumlah dua dadu sama dengan 7? Berapa peluang munculnya mata genap? Jika permainan diulang 90 kali, berapa kali kita *mengharapkan* muncul mata 6? Untuk menjawab semua itu, kita perlu mendefinisikan **ruang sampel** lebih dahulu.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Ruang Sampel dan Kejadian",
      body: `**Ruang sampel** $S$ adalah himpunan semua hasil yang mungkin dari suatu percobaan acak. Banyak anggotanya ditulis $n(S)$.

- Pelemparan satu dadu: $S = \\{1, 2, 3, 4, 5, 6\\}$, $n(S) = 6$.
- Pelemparan dua dadu: $n(S) = 6 \\times 6 = 36$.
- Pelemparan tiga koin: $n(S) = 2^3 = 8$.

**Kejadian** $A$ adalah himpunan bagian dari ruang sampel. Pada percobaan dengan hasil yang **sama mungkin**, peluang teoretis dirumuskan sebagai

$$P(A) = \\frac{n(A)}{n(S)},$$

dengan $n(A)$ menyatakan banyak anggota kejadian $A$. Karena $A \\subseteq S$, selalu berlaku $0 \\leq P(A) \\leq 1$. Nilai $P(A) = 0$ berarti mustahil dan $P(A) = 1$ berarti pasti.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Syarat hasil sama mungkin",
          text: "Rumus $P(A) = \\dfrac{n(A)}{n(S)}$ hanya berlaku bila setiap hasil pada ruang sampel berpeluang sama. Mendaftar ruang sampel dengan benar adalah langkah paling penting.",
        },
        {
          kind: "match",
          intro: "Pasangkan istilah peluang dengan maknanya.",
          pairs: [
            {
              left: "Ruang sampel",
              right: "Himpunan semua hasil yang mungkin dari suatu percobaan",
            },
            {
              left: "Kejadian",
              right: "Himpunan bagian dari ruang sampel",
            },
            {
              left: "Peluang teoretis",
              right: "Rasio banyak anggota kejadian dengan ruang sampel",
            },
            {
              left: "Peluang empiris",
              right: "Frekuensi relatif yang diperoleh dari percobaan nyata",
            },
            {
              left: "Frekuensi harapan",
              right: "Perkiraan banyak munculnya kejadian pada $N$ percobaan",
            },
          ],
        },
        {
          kind: "figure",
          alt: "Grid berukuran enam kali enam sebagai ruang sampel pelemparan dua dadu, dengan enam sel diagonal ditandai.",
          caption: "Ruang sampel dua dadu memuat $6 \\times 6 = 36$ hasil. Sel bertanda adalah pasangan berjumlah $7$, yaitu $6$ dari $36$ kemungkinan sehingga $P=\\tfrac{6}{36}=\\tfrac16$.",
          svg: '<svg viewBox="0 0 320 260" aria-hidden="true" role="presentation"><line x1="55" y1="55" x2="55" y2="235" stroke="currentColor" stroke-width="1"/><line x1="85" y1="55" x2="85" y2="235" stroke="currentColor" stroke-width="1"/><line x1="115" y1="55" x2="115" y2="235" stroke="currentColor" stroke-width="1"/><line x1="145" y1="55" x2="145" y2="235" stroke="currentColor" stroke-width="1"/><line x1="175" y1="55" x2="175" y2="235" stroke="currentColor" stroke-width="1"/><line x1="205" y1="55" x2="205" y2="235" stroke="currentColor" stroke-width="1"/><line x1="235" y1="55" x2="235" y2="235" stroke="currentColor" stroke-width="1"/><line x1="55" y1="55" x2="235" y2="55" stroke="currentColor" stroke-width="1"/><line x1="55" y1="85" x2="235" y2="85" stroke="currentColor" stroke-width="1"/><line x1="55" y1="115" x2="235" y2="115" stroke="currentColor" stroke-width="1"/><line x1="55" y1="145" x2="235" y2="145" stroke="currentColor" stroke-width="1"/><line x1="55" y1="175" x2="235" y2="175" stroke="currentColor" stroke-width="1"/><line x1="55" y1="205" x2="235" y2="205" stroke="currentColor" stroke-width="1"/><line x1="55" y1="235" x2="235" y2="235" stroke="currentColor" stroke-width="1"/><circle cx="220" cy="70" r="7" fill="currentColor"/><circle cx="190" cy="100" r="7" fill="currentColor"/><circle cx="160" cy="130" r="7" fill="currentColor"/><circle cx="130" cy="160" r="7" fill="currentColor"/><circle cx="100" cy="190" r="7" fill="currentColor"/><circle cx="70" cy="220" r="7" fill="currentColor"/><text x="70" y="50" font-size="11" text-anchor="middle" fill="currentColor">1</text><text x="100" y="50" font-size="11" text-anchor="middle" fill="currentColor">2</text><text x="130" y="50" font-size="11" text-anchor="middle" fill="currentColor">3</text><text x="160" y="50" font-size="11" text-anchor="middle" fill="currentColor">4</text><text x="190" y="50" font-size="11" text-anchor="middle" fill="currentColor">5</text><text x="220" y="50" font-size="11" text-anchor="middle" fill="currentColor">6</text><text x="48" y="74" font-size="11" text-anchor="end" fill="currentColor">1</text><text x="48" y="104" font-size="11" text-anchor="end" fill="currentColor">2</text><text x="48" y="134" font-size="11" text-anchor="end" fill="currentColor">3</text><text x="48" y="164" font-size="11" text-anchor="end" fill="currentColor">4</text><text x="48" y="194" font-size="11" text-anchor="end" fill="currentColor">5</text><text x="48" y="224" font-size="11" text-anchor="end" fill="currentColor">6</text><text x="110" y="252" font-size="11" fill="currentColor">dadu 1</text><text x="6" y="150" font-size="11" fill="currentColor">dadu 2</text></svg>',
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi: Teoretis dan Empiris",
      body: "Peluang dapat dipandang dari dua sisi. Bandingkan keduanya pada pelemparan satu dadu.",
      blocks: [
        {
          kind: "table",
          caption: "Peluang teoretis vs peluang empiris muncul mata 6",
          headers: [
            "Aspek",
            "Peluang teoretis",
            "Peluang empiris",
          ],
          rows: [
            [
              "Dasar",
              "Analisis ruang sampel",
              "Hasil percobaan nyata",
            ],
            [
              "Rumus",
              "$P = \\dfrac{1}{6}$",
              "$P \\approx \\dfrac{\\text{mata 6 muncul}}{\\text{banyak lemparan}}$",
            ],
            [
              "Setelah 6 lemparan",
              "tetap $\\tfrac16$",
              "bisa jauh dari $\\tfrac16$",
            ],
            [
              "Setelah 6000 lemparan",
              "tetap $\\tfrac16$",
              "mendekati $\\tfrac16$",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "tip",
          text: "Gunakan simulasi pada bagian berikutnya untuk melihat sendiri bagaimana peluang empiris \"merapat\" ke peluang teoretis ketika banyak percobaan diperbesar.",
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Simbolik",
              body: "Peluang teoretis $P(A) = \\dfrac{n(A)}{n(S)}$; peluang empiris $\\approx \\dfrac{\\text{kejadian muncul}}{\\text{banyak percobaan}}$.",
            },
            {
              label: "Tabel",
              body: "Setelah $6$ lemparan peluang empiris bisa jauh dari $\\tfrac16$; setelah $6000$ lemparan nilainya mendekati $\\tfrac16$.",
            },
            {
              label: "Grafik",
              body: "Jika frekuensi relatif digambar terhadap banyak lemparan, grafiknya berayun lalu merapat ke garis mendatar $\\tfrac16$.",
            },
          ],
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi",
      body: "Lempar koin atau dadu berulang kali pada simulasi ini. Amati bagaimana frekuensi relatif berubah dan apakah ia makin dekat ke peluang teoretis saat jumlah percobaan ditambah.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "peluang-sim",
        },
      ],
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Aturan Komplemen dan Penjumlahan",
      body: `**Komplemen.** Kejadian $A^c$ (bukan $A$) adalah semua hasil di $S$ yang tidak termasuk $A$. Karena $A$ dan $A^c$ menutupi seluruh ruang sampel:

$$P(A^c) = 1 - P(A).$$

**Aturan penjumlahan.** Untuk dua kejadian $A$ dan $B$:

$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B).$$

Pengurangan $P(A \\cap B)$ dilakukan agar anggota yang dihitung dua kali (irisan) tidak berlebihan.

**Kejadian saling lepas** (mutually exclusive) adalah dua kejadian yang tidak dapat terjadi bersamaan, sehingga $A \\cap B = \\varnothing$ dan $P(A \\cap B) = 0$. Untuk kejadian saling lepas:

$$P(A \\cup B) = P(A) + P(B).$$

Contoh: pada satu lemparan dadu, kejadian "muncul angka genap" dan "muncul angka 1" saling lepas karena tidak ada irisan.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "Aturan $P(A \\cup B) = P(A) + P(B)$ hanya boleh dipakai bila $A$ dan $B$ **saling lepas**. Jika beririsan, hasilnya akan melebihi nilai sebenarnya.",
        },
        {
          kind: "figure",
          alt: "Diagram Venn dua lingkaran A dan B yang saling tumpang tindih di dalam ruang sampel S; daerah tumpang tindih menandai irisan, sedangkan daerah di dalam S di luar lingkaran A menandai komplemennya.",
          caption: "Diagram Venn: $A \\cup B$ adalah seluruh daerah berwarna, $A \\cap B$ daerah tumpang tindih yang lebih gelap, dan $A^{c}$ daerah di dalam $S$ tetapi di luar lingkaran $A$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><rect x="20" y="20" width="280" height="190" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="125" cy="112" r="68" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.8"/><circle cx="195" cy="112" r="68" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.8"/><text x="30" y="40" font-size="12" fill="currentColor">S</text><text x="92" y="72" font-size="12" fill="currentColor">A</text><text x="222" y="72" font-size="12" fill="currentColor">B</text><text x="150" y="116" font-size="10" fill="currentColor">A &cap; B</text><text x="118" y="200" font-size="10" fill="currentColor">A &cup; B</text><text x="246" y="200" font-size="10" fill="currentColor">A&#7488;</text></svg>',
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Aturan Perkalian dan Kejadian Saling Bebas",
      body: `Dua kejadian $A$ dan $B$ disebut **saling bebas** (independent) bila terjadi atau tidaknya $A$ tidak mengubah peluang $B$, dan sebaliknya. Untuk kejadian saling bebas:

$$P(A \\cap B) = P(A) \\cdot P(B).$$

Contoh: melempar koin dua kali. Hasil lemparan pertama tidak memengaruhi lemparan kedua, sehingga peluang dua-duanya gambar adalah

$$P(GG) = \\tfrac12 \\cdot \\tfrac12 = \\tfrac14.$$

**Frekuensi harapan** adalah perkiraan banyak munculnya kejadian $A$ jika percobaan dilakukan $N$ kali:

$$F_h = N \\cdot P(A).$$

Jika dadu dilempar $90$ kali, frekuensi harapan muncul mata 6 adalah $90 \\cdot \\tfrac16 = 15$ kali. Ini adalah **nilai harapan**, bukan jaminan; hasil nyata dapat berbeda.

**Frekuensi harapan kejadian majemuk.** Percobaan sering melibatkan lebih dari satu benda, seperti dua dadu atau dua koin sekaligus. Langkahnya sama: hitung dahulu peluang kejadian majemuk dari ruang sampel gabungan, baru kalikan dengan banyak percobaan.

$$F_h = N \\cdot P(\\text{kejadian majemuk}).$$

Contoh: dua dadu dilempar $180$ kali. Peluang jumlah mata $7$ adalah $P=\\tfrac{6}{36}=\\tfrac16$ dan peluang jumlah mata minimal $10$ juga $\\tfrac{6}{36}=\\tfrac16$, sehingga frekuensi harapan masing-masing adalah $180 \\cdot \\tfrac16 = 30$ kali. Untuk dua koin, peluang muncul dua gambar adalah $\\tfrac14$, jadi dari $200$ lemparan diharapkan $200 \\cdot \\tfrac14 = 50$ kali muncul dua gambar.`,
      blocks: [
        {
          kind: "figure",
          alt: "Diagram pohon dua kali pelemparan koin: dari titik awal bercabang angka atau gambar dengan peluang 1/2, lalu tiap cabang bercabang lagi menjadi angka atau gambar dengan peluang 1/2, menghasilkan empat hasil AA, AG, GA, dan GG.",
          caption: "Diagram pohon dua lemparan koin. Setiap cabang berpeluang $\\tfrac12$; dengan aturan perkalian, peluang tiap hasil adalah $\\tfrac12 \\cdot \\tfrac12 = \\tfrac14$, misalnya $P(GG)=\\tfrac14$.",
          svg: '<svg viewBox="0 0 320 200" aria-hidden="true" role="presentation"><g fill="none" stroke="currentColor" stroke-width="1.5"><line x1="30" y1="100" x2="110" y2="55"/><line x1="30" y1="100" x2="110" y2="145"/><line x1="110" y1="55" x2="210" y2="25"/><line x1="110" y1="55" x2="210" y2="85"/><line x1="110" y1="145" x2="210" y2="115"/><line x1="110" y1="145" x2="210" y2="175"/></g><circle cx="30" cy="100" r="3" fill="currentColor"/><circle cx="110" cy="55" r="3" fill="currentColor"/><circle cx="110" cy="145" r="3" fill="currentColor"/><circle cx="210" cy="25" r="3" fill="currentColor"/><circle cx="210" cy="85" r="3" fill="currentColor"/><circle cx="210" cy="115" r="3" fill="currentColor"/><circle cx="210" cy="175" r="3" fill="currentColor"/><text x="30" y="120" font-size="11" text-anchor="middle" fill="currentColor">Awal</text><text x="110" y="46" font-size="12" text-anchor="middle" fill="currentColor">A</text><text x="110" y="164" font-size="12" text-anchor="middle" fill="currentColor">G</text><text x="64" y="74" font-size="11" text-anchor="middle" fill="currentColor">1/2</text><text x="64" y="130" font-size="11" text-anchor="middle" fill="currentColor">1/2</text><text x="158" y="32" font-size="11" text-anchor="middle" fill="currentColor">1/2</text><text x="158" y="66" font-size="11" text-anchor="middle" fill="currentColor">1/2</text><text x="158" y="124" font-size="11" text-anchor="middle" fill="currentColor">1/2</text><text x="158" y="158" font-size="11" text-anchor="middle" fill="currentColor">1/2</text><text x="220" y="29" font-size="12" fill="currentColor">AA</text><text x="220" y="89" font-size="12" fill="currentColor">AG</text><text x="220" y="119" font-size="12" fill="currentColor">GA</text><text x="220" y="179" font-size="12" fill="currentColor">GG</text></svg>',
        },
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "\"Saling bebas\" berbeda dari \"saling lepas\". Kejadian saling lepas tidak dapat terjadi bersamaan ($P(A\\cap B)=0$), sedangkan kejadian saling bebas mengalikan peluang ($P(A\\cap B)=P(A)P(B)$).",
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
          intro: "Lima contoh berikut melatih aturan penjumlahan, ruang sampel dua dadu, komplemen tiga koin, frekuensi harapan, dan aturan perkalian untuk kejadian saling bebas.",
          steps: [
            {
              title: "Contoh 1 (aturan penjumlahan)",
              text: `Pada satu lemparan dadu, $A$ = "mata genap" $= \\{2,4,6\\}$ dan $B$ = "mata prima" $= \\{2,3,5\\}$. Tentukan $P(A\\cup B)$.

*Penyelesaian.* Karena $n(S)=6$, maka $P(A) = \\tfrac{3}{6} = \\tfrac12$ dan $P(B) = \\tfrac{3}{6} = \\tfrac12$. Irisannya $A \\cap B = \\{2\\}$ sehingga $P(A \\cap B) = \\tfrac16$. Dengan aturan penjumlahan:
$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = \\tfrac12 + \\tfrac12 - \\tfrac16 = \\tfrac56.$$`,
            },
            {
              title: "Contoh 2 (dua dadu)",
              text: `Dua dadu dilempar sekali. Tentukan peluang jumlah mata $7$ dan peluang jumlah mata $\\geq 10$.

*Penyelesaian.* Ruang sampelnya $36$ hasil. Jumlah $7$ muncul dari $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$, yaitu $6$ cara, sehingga $P(\\text{jumlah }7) = \\tfrac{6}{36} = \\tfrac16$. Adapun jumlah $\\geq 10$ muncul dari $3 + 2 + 1 = 6$ cara, sehingga peluangnya juga $\\tfrac{6}{36} = \\tfrac16$.`,
            },
            {
              title: "Contoh 3 (tiga koin dan komplemen)",
              text: `Tiga koin dilempar sekali. Tentukan peluang "tepat dua gambar" dan "paling sedikit satu gambar".

*Penyelesaian.* Ruang sampel berukuran $2^{3} = 8$. Kejadian "tepat dua gambar" memiliki $\\binom{3}{2} = 3$ anggota, sehingga $P = \\tfrac38$. Kejadian "paling sedikit satu gambar" adalah komplemen dari "tidak ada gambar" (yaitu $AAA$ dengan peluang $\\tfrac18$), maka $P = 1 - \\tfrac18 = \\tfrac78$.`,
            },
            {
              title: "Contoh 4 (frekuensi harapan)",
              text: `Dua dadu dilempar $180$ kali. Berapa frekuensi harapan muncul jumlah mata $7$?

*Penyelesaian.* Dari Contoh 2, $P(\\text{jumlah }7) = \\tfrac16$. Maka $F_h = N \\cdot P = 180 \\cdot \\tfrac16 = 30$ kali. Angka ini perkiraan jangka panjang, bukan jaminan hasil nyata.`,
            },
            {
              title: "Contoh 5 (kejadian saling bebas)",
              text: `Sebuah dadu dan sebuah koin dilempar bersama. Tentukan peluang muncul mata dadu $6$ sekaligus gambar pada koin.

*Penyelesaian.* Hasil dadu tidak memengaruhi hasil koin, jadi kedua kejadian **saling bebas**. Dengan $P(\\text{dadu }6)=\\tfrac16$ dan $P(\\text{gambar})=\\tfrac12$:
$$P(\\text{dadu }6 \\cap \\text{gambar}) = \\tfrac16 \\cdot \\tfrac12 = \\tfrac{1}{12}.$$`,
            },
          ],
        },
      ],
    },
    {
      id: "contoh-majemuk",
      kind: "contoh",
      title: "Contoh: Frekuensi Harapan Kejadian Majemuk",
      blocks: [
        {
          kind: "step-reveal",
          intro: "Hitung frekuensi harapan kejadian majemuk dengan menaksir peluangnya lebih dahulu.",
          steps: [
            {
              title: "Contoh (kejadian majemuk)",
              text: `Tiga koin dilempar $240$ kali. Tentukan frekuensi harapan muncul tepat dua gambar.

*Penyelesaian.* Ruang sampelnya $n(S) = 2^{3} = 8$. Kejadian "tepat dua gambar" memiliki $\\binom{3}{2} = 3$ anggota, sehingga $P = \\tfrac38$. Maka
$$F_h = N \\cdot P(\\text{kejadian majemuk}) = 240 \\cdot \\tfrac38 = 90.$$
Jadi kita mengharapkan sekitar $90$ dari $240$ pelemparan menghasilkan tepat dua gambar.`,
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
      body: `Peluang dipakai untuk menaksir risiko, mengukur ketidakpastian dalam survei, dan menilai hasil tes kesehatan. Dari survei $500$ responden, peluang empiris "responden setuju" hanyalah proporsi jawaban setuju, misalnya $320$ dari $500$ memberi nilai $0{,}64$.

Tes kesehatan memberi contoh yang lebih tajam. Bila suatu penyakit diderita $1\\%$ populasi, kepekaan tes $90\\%$, dan tingkat positif palsu $10\\%$, maka peluang seseorang benar-benar sakit setelah hasilnya positif hanyalah
$$P = \\frac{0{,}009}{0{,}009 + 0{,}99 \\times 0{,}1} \\approx 8{,}3\\%,$$
jauh lebih kecil daripada dugaan banyak orang. Untuk memahami bagaimana peluang dan statistik dipakai membaca laporan survei secara kritis, buka studi kasus [Membaca Hasil Survei dengan Kritis](/aplikasi/survei-statistik).

Ingat: frekuensi harapan hanyalah **perkiraan jangka panjang**. Dalam jumlah percobaan yang sedikit, hasil nyata bisa menyimpang jauh.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menganggap peluang teoretis sama dengan hasil pasti.** Peluang $\\tfrac12$ pada koin tidak berarti 10 lemparan pasti menghasilkan 5 angka. Itu hanya nilai harapan jangka panjang.

**2. Menjumlahkan peluang kejadian beririsan.** Menulis $P(A \\cup B) = P(A) + P(B)$ padahal $A \\cap B \\neq \\varnothing$ akan melebih-lebihkan hasil. Kurangi $P(A \\cap B)$.

**3. Menyamakan "saling lepas" dengan "saling bebas".** Keduanya berbeda. Saling lepas berarti tidak bisa terjadi bersamaan; saling bebas berarti hasil satu tidak memengaruhi yang lain.

**4. Salah menghitung ruang sampel.** Untuk dua dadu, satu dadu punya 6 hasil sehingga dua dadu punya $36$ hasil, bukan $12$. Hasil $(1,2)$ dan $(2,1)$ adalah dua hasil berbeda.

**5. Mengabaikan syarat hasil sama mungkin.** Rumus $\\tfrac{n(A)}{n(S)}$ hanya sah bila setiap anggota ruang sampel berpeluang sama.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Seorang siswa menghitung $P(A\\cup B)$ untuk satu dadu dengan $A=\\{2,4,6\\}$ dan $B=\\{2,3,5\\}$. Klik langkah yang keliru.",
          steps: [
            "Diketahui $P(A)=\\dfrac{3}{6}=\\dfrac12$ dan $P(B)=\\dfrac{3}{6}=\\dfrac12$.",
            "Karena $A$ dan $B$ beririsan, jumlahkan langsung: $P(A\\cup B)=\\dfrac12+\\dfrac12=1$.",
            "Jadi peluang gabungannya $1$, artinya pasti terjadi.",
          ],
          wrongIndex: 1,
          explanation: "Menjumlahkan langsung hanya sah untuk kejadian saling lepas. Karena $A\\cap B=\\{2\\}$ dengan $P(A\\cap B)=\\tfrac16$, seharusnya $P(A\\cup B)=\\dfrac12+\\dfrac12-\\dfrac16=\\dfrac56$.",
        },
      ],
    },
    {
      id: "tantangan",
      kind: "tantangan",
      title: "Tantangan",
      body: `**Soal.** Empat surat akan dimasukkan ke empat amplop yang sudah dialamatkan berbeda-beda. Karena tergesa-gesa, surat-surat itu dimasukkan ke amplop **secara acak**. Berapa peluang bahwa **tidak ada satu pun** surat yang masuk ke amplop yang benar? (Susunan semacam ini disebut *derangement*.)`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Hitung peluang komplemennya memakai prinsip inklusi–eksklusi, lalu kurangkan dari $1$.",
          steps: [
            {
              title: "Ruang sampel",
              text: "Banyak cara menempatkan $4$ surat ke $4$ amplop adalah $4! = 24$, dan setiap susunan berpeluang sama.",
            },
            {
              title: "Definisikan kejadian",
              text: "Misalkan $A_i$ menyatakan kejadian \"surat ke-$i$ masuk ke amplop yang benar\". Yang dicari adalah peluang tidak ada $A_i$ yang terjadi, yaitu $1 - P(A_1 \\cup A_2 \\cup A_3 \\cup A_4)$.",
            },
            {
              title: "Kejadian tunggal",
              text: "Bila satu surat sudah benar, tiga surat sisanya bebas: $\\lvert A_i \\rvert = 3! = 6$. Untuk $4$ pilihan $i$, jumlahnya $\\sum \\lvert A_i \\rvert = 4 \\cdot 6 = 24$.",
            },
            {
              title: "Irisan dua kejadian",
              text: "Bila dua surat sudah benar, dua sisanya bebas: $\\lvert A_i \\cap A_j \\rvert = 2! = 2$. Ada $\\binom{4}{2} = 6$ pasangan, sehingga jumlahnya $6 \\cdot 2 = 12$.",
            },
            {
              title: "Irisan tiga dan empat kejadian",
              text: "Dengan cara sama, $\\lvert A_i \\cap A_j \\cap A_k \\rvert = 1! = 1$ untuk $\\binom{4}{3} = 4$ pilihan, dan $\\lvert A_1 \\cap A_2 \\cap A_3 \\cap A_4 \\rvert = 1$.",
            },
            {
              title: "Terapkan inklusi–eksklusi",
              text: "$\\lvert A_1 \\cup A_2 \\cup A_3 \\cup A_4 \\rvert = 24 - 12 + 4 - 1 = 15$.",
            },
            {
              title: "Hitung peluang",
              text: "Banyak susunan tanpa satu pun surat yang benar $= 24 - 15 = 9$, sehingga $P = \\dfrac{9}{24} = \\dfrac{3}{8} = 37{,}5\\%$.",
            },
            {
              title: "Tafsirkan",
              text: "Dalam jangka panjang, sekitar $3$ dari $8$ pengisian acak tidak menyisipkan satu pun surat dengan benar. Perhatikan kesamaan dengan bentuk umum derangement: $9 = 4!\\left(1 - 1 + \\tfrac{1}{2!} - \\tfrac{1}{3!} + \\tfrac{1}{4!}\\right)$.",
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Jejak Sejarah",
      body: `Teori peluang tidak dimulai dari rumus, tetapi dari sebuah pertanyaan tentang permainan. Sekitar 1654, Antoine Gombaud (Chevalier de Méré) menanyakan kepada Blaise Pascal bagaimana membagi taruhan secara adil ketika sebuah permainan harus dihentikan sebelum selesai. Pascal lalu berkorespondensi dengan Pierre de Fermat; keduanya menyelesaikan *masalah pembagian taruhan* dengan dua pendekatan berbeda dan memperoleh jawaban yang sama. Korespondensi inilah yang biasanya dianggap sebagai titik tolak teori peluang.

Gagasan itu tumbuh cepat. Christiaan Huygens menerbitkan buku pertama tentang peluang, *De ratiociniis in ludo aleae* (1657). Jacob Bernoulli dalam *Ars Conjectandi* (1713) merumuskan apa yang kemudian dikenal sebagai **hukum bilangan besar**, yaitu penjelasan mengapa peluang empiris merapat ke peluang teoretis pada percobaan yang panjang. Pierre-Simon Laplace dalam *Théorie analytique des probabilités* (1812) merapikan definisi klasiknya sebagai perbandingan kasus yang menguntungkan terhadap seluruh kasus yang sama mungkin. Definisi itulah yang kita pakai sebagai $P(A) = \\dfrac{n(A)}{n(S)}$, sehingga mendata ruang sampel dengan benar menjadi langkah pertama setiap perhitungan.`,
      blocks: [
        {
          kind: "table",
          caption: "Tonggak perkembangan teori peluang",
          headers: [
            "Tokoh",
            "Sumbangan",
          ],
          rows: [
            [
              "Pascal dan Fermat (1654)",
              "Menyelesaikan masalah pembagian taruhan lewat korespondensi.",
            ],
            [
              "Christiaan Huygens (1657)",
              "Menulis buku pertama tentang peluang.",
            ],
            [
              "Jacob Bernoulli (1713)",
              "Merumuskan hukum bilangan besar.",
            ],
            [
              "Pierre-Simon Laplace (1812)",
              "Merapikan definisi klasik peluang.",
            ],
          ],
        },
      ],
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Latih kepekaan menimbang risiko: pikirkan satu keputusan nyata yang kamu ambil berdasar peluang, lalu nilai apakah taksiranmu masuk akal.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Apa perbedaan utama antara peluang teoretis dan peluang empiris?",
            "Kapan aturan penjumlahan boleh disederhanakan menjadi $P(A) + P(B)$, dan kapan tidak boleh?",
            "Berikan satu contoh dari kehidupanmu di mana frekuensi harapan membantu mengambil keputusan.",
          ],
          confidenceLabel: "Seberapa yakin kamu membedakan kejadian saling lepas dan saling bebas?",
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
              "Peluang teoretis",
              "$P(A) = \\dfrac{n(A)}{n(S)}$",
            ],
            [
              "Komplemen",
              "$P(A^c) = 1 - P(A)$",
            ],
            [
              "Penjumlahan umum",
              "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$",
            ],
            [
              "Saling lepas",
              "$P(A \\cup B) = P(A) + P(B)$",
            ],
            [
              "Saling bebas",
              "$P(A \\cap B) = P(A) \\cdot P(B)$",
            ],
            [
              "Frekuensi harapan",
              "$F_h = N \\cdot P(A)$",
            ],
            [
              "Frekuensi harapan majemuk",
              "$F_h = N \\cdot P(\\text{kejadian majemuk})$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Uji pemahaman.** (1) Tuliskan syarat agar $P(A\\cup B)$ cukup dihitung sebagai $P(A)+P(B)$. (2) Jelaskan dengan kata-katamu sendiri beda kejadian saling lepas dan saling bebas, lengkap dengan satu contoh masing-masing. Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Peluang** untuk latihan tambahan.`,
    },
  ],
};

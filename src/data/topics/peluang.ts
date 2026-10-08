import type { Topic } from '@/types/content';

export const peluang: Topic = {
  id: 'peluang',
  slug: 'peluang',
  title: 'Peluang',
  subtitle: 'Mengukur kemungkinan dengan ruang sampel dan aturan hitung',
  grade: 'XI',
  phase: 'F',
  element: 'data-peluang',
  featured: true,
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
  explorations: ['peluang-sim'],
  applications: ['survei-statistik'],
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
      body: `Sebelum melanjutkan, pastikan kamu menguasai:

- notasi himpunan, misalnya $A = \\{2, 4, 6\\}$;
- gabungan $A \\cup B$ dan irisan $A \\cap B$;
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

**Frekuensi harapan kejadian majemuk.** Percobaan sering melibatkan lebih dari satu benda, misalnya dua dadu atau dua koin sekaligus. Langkahnya sama: hitung dahulu peluang kejadian majemuk dari ruang sampel gabungan, baru kalikan dengan banyak percobaan.

$$F_h = N \\cdot P(\\text{kejadian majemuk}).$$

Contoh: dua dadu dilempar $180$ kali. Peluang jumlah mata $7$ adalah $P=\\tfrac{6}{36}=\\tfrac16$ dan peluang jumlah mata minimal $10$ juga $\\tfrac{6}{36}=\\tfrac16$, sehingga frekuensi harapan masing-masing adalah $180 \\cdot \\tfrac16 = 30$ kali. Untuk dua koin, peluang muncul dua gambar adalah $\\tfrac14$, jadi dari $200$ lemparan diharapkan $200 \\cdot \\tfrac14 = 50$ kali muncul dua gambar.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "\"Saling bebas\" berbeda dari \"saling lepas\". Kejadian saling lepas tidak dapat terjadi bersamaan ($P(A\\cap B)=0$), sedangkan kejadian saling bebas justru mengalikan peluang ($P(A\\cap B)=P(A)P(B)$).",
        },
      ],
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      body: `**Contoh 1 — Dadu.** Pada satu lemparan dadu, misalkan $A$ = "mata genap" $= \\{2,4,6\\}$ dan $B$ = "mata prima" $= \\{2,3,5\\}$. Maka $P(A) = \\tfrac{3}{6} = \\tfrac12$ dan $P(B) = \\tfrac{3}{6} = \\tfrac12$. Karena $A \\cap B = \\{2\\}$, maka $P(A \\cap B) = \\tfrac16$, sehingga

$$P(A \\cup B) = \\tfrac12 + \\tfrac12 - \\tfrac16 = \\tfrac56.$$

**Contoh 2 — Dua dadu.** Ruang sampelnya $36$ hasil. Jumlah $7$ dapat muncul dari $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$, yaitu $6$ cara, sehingga $P(\\text{jumlah }7) = \\tfrac{6}{36} = \\tfrac16$. Adapun jumlah $\\geq 10$ muncul dari $3 + 2 + 1 = 6$ cara, sehingga peluangnya juga $\\tfrac{6}{36} = \\tfrac16$.

**Contoh 3 — Tiga koin.** Ruang sampel berukuran $8$. Kejadian "tepat dua gambar" memiliki $\\binom{3}{2} = 3$ anggota, sehingga $P = \\tfrac38$. Kejadian "paling sedikit satu gambar" adalah komplemen dari "tidak ada gambar" (yaitu $GGG$ dengan peluang $\\tfrac18$), maka $P = 1 - \\tfrac18 = \\tfrac78$.

**Contoh 4 — Frekuensi harapan.** Dua dadu dilempar $180$ kali. Karena $P(\\text{jumlah }7) = \\tfrac16$, frekuensi harapan muncul jumlah $7$ adalah $180 \\cdot \\tfrac16 = 30$ kali.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Mari hitung peluang jumlah dua dadu sama dengan $7$, satu langkah sekaligus.",
          steps: [
            {
              title: "Tentukan ruang sampel",
              text: "Setiap dadu memiliki $6$ hasil, sehingga $n(S)=6\\times6=36$.",
            },
            {
              title: "Daftar hasil yang menguntungkan",
              text: "Jumlah $7$ muncul dari $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$, yaitu $6$ cara.",
            },
            {
              title: "Hitung peluang",
              text: "$P(\\text{jumlah }7)=\\dfrac{n(A)}{n(S)}=\\dfrac{6}{36}=\\dfrac{1}{6}$.",
            },
            {
              title: "Tafsirkan",
              text: "Pada percobaan panjang, sekitar satu dari enam lemparan diperkirakan berjumlah $7$.",
            },
          ],
        },
      ],
    },
    {
      id: "contoh-majemuk",
      kind: "contoh",
      title: "Contoh: Frekuensi Harapan Kejadian Majemuk",
      body: `**Contoh (kejadian majemuk).** Tiga koin dilempar $240$ kali. Tentukan frekuensi harapan muncul tepat dua gambar.

*Penyelesaian.* Ruang sampelnya $n(S) = 2^{3} = 8$. Kejadian "tepat dua gambar" memiliki $\\binom{3}{2} = 3$ anggota, sehingga $P = \\tfrac38$. Maka
$$F_h = N \\cdot P(\\text{kejadian majemuk}) = 240 \\cdot \\tfrac{3}{8} = 90.$$
Jadi kita mengharapkan sekitar $90$ dari $240$ pelemparan menghasilkan tepat dua gambar.`,
    },
    {
      id: "latihan-dasar",
      kind: "latihan-dasar",
      title: "Latihan Dasar",
      level: "dasar",
      body: `1. Sebuah dadu dilempar sekali. Tentukan peluang muncul mata lebih dari 4.
2. Pada percobaan yang sama, tentukan peluang muncul mata **bukan** bilangan prima.
3. Sebuah koin dilempar tiga kali. Tentukan peluang muncul tiga-tiganya gambar.
4. Tentukan banyak anggota ruang sampel pelemparan dua koin.`,
      blocks: [
        {
          kind: "details",
          summary: "Lihat kunci dan pembahasan",
          text: `1. Mata lebih dari 4 adalah $\\{5,6\\}$, sehingga $P = \\tfrac{2}{6} = \\tfrac13$.
2. Prima $= \\{2,3,5\\}$ sehingga $P(\\text{prima}) = \\tfrac36 = \\tfrac12$; maka $P(\\text{bukan prima}) = 1 - \\tfrac12 = \\tfrac12$.
3. $n(S) = 2^3 = 8$ dan hanya ada satu hasil $GGG$, sehingga $P = \\tfrac18$.
4. $n(S) = 2 \\times 2 = 4$, yaitu $\\{AA, AG, GA, GG\\}$.`,
        },
      ],
    },
    {
      id: "latihan-cakap",
      kind: "latihan-cakap",
      title: "Latihan Cakap",
      level: "cakap",
      body: `1. Dua dadu dilempar bersama. Tentukan peluang jumlah kedua mata dadu sama dengan 7 atau 11.
2. Dua dadu dilempar $108$ kali. Berapa frekuensi harapan munculnya jumlah 7 atau 11 berdasarkan hasil nomor 1?
3. Sebuah kotak berisi 4 bola merah dan 6 bola biru. Diambil satu bola. Tentukan peluang terambil bola merah atau bola biru.
4. Dua koin dilempar bersamaan. Apakah kejadian "koin pertama gambar" dan "koin kedua gambar" saling bebas? Jelaskan.`,
      blocks: [
        {
          kind: "details",
          summary: "Lihat kunci dan pembahasan",
          text: `1. Jumlah $7$ ada $6$ cara dan jumlah $11$ ada $2$ cara ($(5,6),(6,5)$), keduanya saling lepas, sehingga $P = \\tfrac{6+2}{36} = \\tfrac{8}{36} = \\tfrac29$.
2. $F_h = 108 \\cdot \\tfrac29 = 24$ kali.
3. Kedua kejadian saling lepas dan menutupi seluruh ruang sampel, sehingga $P = \\tfrac{4}{10} + \\tfrac{6}{10} = 1$ (pasti terambil salah satunya).
4. Ya, saling bebas, karena hasil satu koin tidak memengaruhi koin lain: $P(\\text{keduanya gambar}) = \\tfrac12 \\cdot \\tfrac12 = \\tfrac14$.`,
        },
      ],
    },
    {
      id: "latihan-mahir",
      kind: "latihan-mahir",
      title: "Latihan Mahir",
      level: "mahir",
      body: `1. Sebuah dadu dilempar dua kali. Tentukan peluang munculnya **paling sedikit satu** mata 6.
2. Pada satu lemparan dadu, $A = \\{2,4,6\\}$ (genap) dan $B = \\{2,3,5\\}$ (prima). Periksa apakah $A$ dan $B$ saling bebas. Apa kesimpulanmu?
3. Tiga koin dilempar. Hitung peluang muncul tepat dua gambar **atau** tepat satu gambar.`,
      blocks: [
        {
          kind: "details",
          summary: "Lihat pembahasan",
          text: `1. Gunakan komplemen. $P(\\text{tidak ada 6}) = \\tfrac56 \\cdot \\tfrac56 = \\tfrac{25}{36}$, maka $P(\\text{paling sedikit satu 6}) = 1 - \\tfrac{25}{36} = \\tfrac{11}{36} \\approx 0{,}306$.
2. $P(A) = \\tfrac12$, $P(B) = \\tfrac12$, dan $P(A \\cap B) = P(\\{2\\}) = \\tfrac16$. Karena $P(A)P(B) = \\tfrac14 \\neq \\tfrac16$, maka $A$ dan $B$ **tidak saling bebas**. Mengetahui muncul mata genap mengubah peluang muncul mata prima.
3. Tepat dua gambar: $\\binom32 = 3$ cara; tepat satu gambar: $\\binom31 = 3$ cara. Keduanya saling lepas, sehingga $P = \\tfrac{3+3}{8} = \\tfrac68 = \\tfrac34$.`,
        },
      ],
    },
    {
      id: "dunia-nyata",
      kind: "dunia-nyata",
      title: "Penerapan di Dunia Nyata",
      body: `Peluang dipakai untuk menaksir risiko, mengukur ketidakpastian dalam survei, dan menilai hasil tes kesehatan. Misalnya, dari survei dengan banyak responden, peluang empiris "responden setuju" dihitung sebagai proporsi jawaban setuju — sebuah peluang yang lahir dari data nyata.

Untuk memahami bagaimana peluang dan statistik dipakai membaca laporan survei secara kritis, buka studi kasus [Membaca Hasil Survei dengan Kritis](/aplikasi/survei-statistik).

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
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Jawab dengan jujur:",
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
      body: "Kerjakan kuis topik ini untuk memeriksa pemahamanmu. Buka halaman [Latihan & Asesmen](/latihan) lalu pilih topik **Peluang**.",
    },
  ],
};

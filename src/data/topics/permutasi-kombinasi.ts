import type { Topic } from '@/types/content';

export const permutasiKombinasi: Topic = {
  id: 'permutasi-kombinasi',
  slug: 'permutasi-kombinasi',
  title: 'Permutasi dan Kombinasi',
  subtitle: 'Aturan pencacahan untuk menghitung banyak cara',
  grade: 'XII',
  phase: 'F',
  element: 'data-peluang',
  status: 'lengkap',
  estimatedMinutes: 90,
  summary:
    'Menggunakan aturan pencacahan, faktorial, permutasi, dan kombinasi untuk menghitung banyak cara serta peluang suatu kejadian.',
  description:
    'Banyak situasi menuntut kita menghitung banyak cara sesuatu dapat terjadi, dari menyusun kata sandi hingga memilih anggota tim. Aturan pencacahan menyediakan cara sistematis untuk melakukannya. Pada topik ini kita mempelajari aturan perkalian dan penjumlahan, faktorial, permutasi (saat urutan diperhatikan), kombinasi (saat urutan tidak diperhatikan), cara membedakan keduanya dari konteks soal, serta penerapan pencacahan untuk menghitung peluang.',
  keywords: [
    'aturan pencacahan',
    'faktorial',
    'permutasi',
    'kombinasi',
    'banyak cara',
  ],
  prerequisites: ['peluang'],
  relatedTopics: ['peluang-bersyarat'],
  prerequisiteKnowledge: [
    'Aturan perkalian dan aturan penjumlahan pada proses bertahap',
    'Operasi bilangan bulat dan pecahan',
    'Konsep peluang teoretis $P(A) = \\dfrac{n(A)}{n(S)}$',
    'Notasi faktorial $n!$ dan nilainya',
  ],
  objectives: [
    { text: 'Menggunakan aturan perkalian dan aturan penjumlahan untuk mencacah banyak cara.' },
    { text: 'Menghitung nilai faktorial dan menerapkannya pada pencacahan.' },
    { text: 'Menentukan banyak permutasi untuk semua unsur, sebagian unsur, dan unsur yang sama.' },
    { text: 'Menentukan banyak kombinasi dan membedakan kapan memakai permutasi atau kombinasi.' },
    { text: 'Menggunakan pencacahan untuk menghitung peluang suatu kejadian.' },
  ],
  applications: ['kata-sandi'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menggunakan aturan perkalian dan penjumlahan untuk mencacah, menghitung nilai faktorial, menentukan banyak permutasi (semua unsur, sebagian unsur, dan unsur sama), menentukan banyak kombinasi, membedakan kapan memakai permutasi atau kombinasi dari konteks soal, serta menggunakan pencacahan untuk menghitung peluang suatu kejadian.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      body: `Dari $5$ siswa akan dipilih seorang **ketua** dan seorang **wakil ketua**. Berapa banyak susunan pengurus yang mungkin?

Sekarang bandingkan dengan pertanyaan berikut: dari $5$ siswa yang sama akan dipilih **dua orang** untuk mengikuti lomba tanpa jabatan apa pun. Berapa banyak pilihan yang mungkin?

- Mengapa dua pertanyaan yang mirip menghasilkan jawaban berbeda?
- Pada pertanyaan mana urutan penting, dan pada pertanyaan mana urutan tidak penting?

Coba daftarkan beberapa kemungkinan terlebih dahulu sebelum memakai rumus.`,
      blocks: [
        {
          kind: "prediction",
          prompt: "Dari $5$ siswa akan dipilih seorang ketua dan seorang wakil ketua. Berapa banyak susunan pengurus yang mungkin?",
          options: [
            "$10$ susunan",
            "$20$ susunan",
            "$25$ susunan",
            "$120$ susunan",
          ],
          reveal: "Untuk pemilihan ketua dan wakil, urutan **penting** karena (Ani, Budi) berbeda dari (Budi, Ani). Ada $5$ pilihan ketua dan $4$ sisa pilihan wakil, sehingga $5 \\cdot 4 = 20$ susunan. Bandingkan dengan memilih dua orang tanpa jabatan: urutan tidak penting, setiap pasangan terhitung dua kali, dan hasilnya $20 : 2 = 10$ pilihan. Inilah perbedaan **permutasi** dan **kombinasi**.",
          saveLabel: "Simpan dugaan",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- aturan perkalian dan aturan penjumlahan pada proses bertahap;
- operasi bilangan bulat dan pecahan;
- konsep peluang teoretis $P(A) = \\dfrac{n(A)}{n(S)}$;
- notasi faktorial $n!$ dan nilainya.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Banyak masalah sehari-hari menuntut kita menghitung banyak cara: menyusun kata sandi, mengatur urutan pemenang lomba, menyusun jadwal, memilih anggota tim, atau memperkirakan peluang menang undian. Ketika pilihannya sedikit, kita bisa mendaftar satu per satu; ketika pilihannya mencapai ribuan atau jutaan, kita perlu **aturan pencacahan**.

Dua pertanyaan dasar yang selalu muncul adalah: apakah **urutan** hasil penting? Jika ya, kita memakai **permutasi**; jika tidak, kita memakai **kombinasi**. Topik ini melatih kita mengenali perbedaan itu dan menghitung dengan tepat, termasuk saat menghitung peluang.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Aturan Pencacahan, Permutasi, dan Kombinasi",
      body: `**Aturan perkalian.** Jika suatu kejadian terdiri atas tahapan berurutan dengan $n_1$ cara pada tahap pertama, $n_2$ cara pada tahap kedua, dan seterusnya, maka total cara adalah hasil kalinya:
$$n_1 \\cdot n_2 \\cdots n_k.$$
Aturan ini dipakai ketika tahapan terjadi bersama-sama (dan/atau).

**Aturan penjumlahan.** Jika suatu tugas dapat diselesaikan melalui $n_1$ cara pada pilihan pertama **atau** $n_2$ cara pada pilihan kedua yang saling lepas, maka totalnya $n_1 + n_2$.

**Faktorial.** Untuk bilangan bulat $n \\ge 0$,
$$n! = n \\cdot (n-1) \\cdot (n-2) \\cdots 3 \\cdot 2 \\cdot 1, \\qquad 0! = 1.$$
Misalnya $5! = 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120$.

**Permutasi (urutan diperhatikan).**
- Semua unsur: $n!$ cara menyusun $n$ objek berbeda.
- Sebagian unsur: menyusun $k$ objek dari $n$ objek berbeda,
$$P(n,k) = \\frac{n!}{(n-k)!}.$$
- Unsur sama: bila terdapat unsur yang berulang, bagi dengan faktorial setiap kelompok,
$$\\frac{n!}{k_1!\\,k_2!\\cdots k_m!}.$$

**Kombinasi (urutan tidak diperhatikan).** Memilih $k$ objek dari $n$ objek berbeda:
$$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}.$$

Hubungan keduanya adalah $\\binom{n}{k} = \\dfrac{P(n,k)}{k!}$, karena setiap pilihan $k$ objek memiliki $k!$ susunan.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Inti yang perlu diingat",
          text: "Aturan perkalian dan penjumlahan adalah pondasi. Sebelum memakai rumus, tentukan dahulu apakah urutan penting, apakah ada unsur yang sama, dan apakah objek boleh dipakai berulang.",
        },
        {
          kind: "match",
          intro: "Pasangkan istilah pencacahan dengan maknanya.",
          pairs: [
            {
              left: "Aturan perkalian",
              right: "Tahapan berurutan: kalikan banyak cara tiap tahap",
            },
            {
              left: "Aturan penjumlahan",
              right: "Pilihan saling lepas: jumlahkan banyak caranya",
            },
            {
              left: "Faktorial",
              right: "$n! = n(n-1)\\cdots1$ dengan $0!=1$",
            },
            {
              left: "Permutasi",
              right: "Susunan dengan urutan diperhatikan",
            },
            {
              left: "Kombinasi",
              right: "Pemilihan dengan urutan tidak diperhatikan",
            },
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi: Kotak Pengisian dan Tabel Pembanding",
      body: `Dua cara memandang pencacahan membantu kita memilih rumus yang tepat.

**Mengisi kotak (slots).** Menyusun $3$ huruf berbeda dari $5$ huruf yang tersedia dapat dibayangkan sebagai mengisi $3$ kotak kosong:
$$\\underline{5} \\; \\underline{4} \\; \\underline{3} = 60,$$
yaitu $5$ pilihan untuk kotak pertama, $4$ untuk kedua, dan $3$ untuk ketiga. Cara ini menegaskan bahwa urutan penting.

**Tabel pembanding.** Perhatikan perbedaan permutasi dan kombinasi berikut.`,
      blocks: [
        {
          kind: "table",
          caption: "Perbandingan permutasi dan kombinasi",
          headers: [
            "Aspek",
            "Permutasi",
            "Kombinasi",
          ],
          rows: [
            [
              "Urutan",
              "diperhatikan",
              "tidak diperhatikan",
            ],
            [
              "Notasi",
              "$P(n,k) = \\dfrac{n!}{(n-k)!}$",
              "$\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$",
            ],
            [
              "Contoh pemakaian",
              "kata sandi, jabatan",
              "anggota tim, kartu",
            ],
            [
              "Contoh nilai",
              "$P(5,2) = 20$",
              "$\\binom{5}{2} = 10$",
            ],
          ],
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Simbolik",
              body: "$P(n,k)=\\dfrac{n!}{(n-k)!}$ untuk urutan penting dan $\\binom{n}{k}=\\dfrac{n!}{k!(n-k)!}$ untuk urutan tidak penting.",
            },
            {
              label: "Kotak pengisian",
              body: "Menyusun $3$ huruf dari $5$ huruf: $\\underline{5}\\;\\underline{4}\\;\\underline{3}=60$, menunjukkan urutan penting.",
            },
            {
              label: "Tabel",
              body: "$P(5,2)=20$ sedangkan $\\binom{5}{2}=10$; hasil kombinasi selalu $k!$ kali lebih kecil dari permutasi.",
            },
          ],
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi: Peluang Empiris dan Teoretis",
      body: `Pada eksplorasi ini kita membandingkan **peluang teoretis** hasil pencacahan dengan **peluang empiris** yang diperoleh dari simulasi.

Misalkan sebuah kotak berisi $4$ bola merah dan $6$ bola biru, lalu diambil $3$ bola sekaligus. Peluang terambilnya tepat $2$ bola merah dapat dihitung dengan pencacahan:
$$P = \\frac{\\binom{4}{2}\\binom{6}{1}}{\\binom{10}{3}} = \\frac{6 \\cdot 6}{120} = \\frac{36}{120} = \\frac{3}{10}.$$
Jalankan simulasi berkali-kali. Apakah frekuensi relatif kejadian ini mendekati $0{,}3$? Semakin banyak percobaan, frekuensi empiris biasanya makin dekat dengan nilai teoretis. Pencacahan memberi nilai **teoretis** yang menjadi acuan.`,
      blocks: [
        {
          kind: "exploration",
          explorationId: "peluang-sim",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Aturan Umum Pencacahan",
      body: `Semua rumus di atas tumbuh dari satu prinsip: **aturan perkalian**. Bila suatu proses berlangsung dalam tahap-tahap berurutan, banyak cara total adalah hasil kali banyak cara tiap tahap. Rumus permutasi dan kombinasi hanyalah bentuk ringkas dari aturan itu ketika beberapa tahap memiliki pola yang sama.

Yang menentukan pilihan rumus bukan panjangnya rumus, melainkan pertanyaan: **apakah urutan penting?**

$$\\text{urutan penting} \\Rightarrow P(n,k) = \\frac{n!}{(n-k)!}, \\qquad \\text{urutan tidak penting} \\Rightarrow \\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}.$$

Karena menyusun ulang $k$ objek dapat dilakukan dalam $k!$ cara, setiap kombinasi bersesuaian dengan $k!$ permutasi, sehingga $\\binom{n}{k} = \\dfrac{P(n,k)}{k!}$ dan hasil kombinasi selalu $k!$ kali lebih kecil. Untuk keperluan peluang, banyak cara yang menguntungkan dibagi banyak cara seluruhnya.`,
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      body: `**Contoh 1 (aturan perkalian).** Sebuah kata sandi terdiri atas $4$ angka berbeda yang dipilih dari angka $0$ sampai $9$. Berapa banyak kata sandi yang mungkin?

*Penyelesaian.* Isi empat kotak: $10$ pilihan untuk angka pertama, lalu $9$, $8$, dan $7$ karena angka tidak boleh berulang:
$$10 \\cdot 9 \\cdot 8 \\cdot 7 = 5040.$$

**Contoh 2 (faktorial dan unsur sama).** Berapa banyak susunan huruf dari kata "BUKU"?

*Penyelesaian.* Kata "BUKU" tersusun dari $4$ huruf dengan huruf U muncul $2$ kali. Bila semua huruf berbeda akan ada $4! = 24$ susunan, tetapi menukar posisi kedua huruf U menghasilkan susunan yang sama. Jadi
$$\\frac{4!}{2!} = \\frac{24}{2} = 12.$$

**Contoh 3 (permutasi sebagian).** Dari $5$ siswa akan dipilih ketua, sekretaris, dan bendahara. Berapa banyak susunan yang mungkin?

*Penyelesaian.* Urutan penting, sehingga
$$P(5,3) = \\frac{5!}{(5-3)!} = \\frac{120}{2} = 60.$$

**Contoh 4 (kombinasi).** Dari $10$ siswa akan dipilih $3$ orang untuk sebuah tim tanpa jabatan. Berapa banyak susunan tim?

*Penyelesaian.* Urutan tidak penting, sehingga
$$\\binom{10}{3} = \\frac{10!}{3!\\,7!} = \\frac{10 \\cdot 9 \\cdot 8}{3 \\cdot 2 \\cdot 1} = 120.$$

**Contoh 5 (pencacahan untuk peluang).** Sebuah kotak berisi $5$ bola merah dan $3$ bola putih. Dua bola diambil sekaligus. Tentukan peluang keduanya merah.

*Penyelesaian.* Banyak cara mengambil $2$ dari $8$ bola adalah $\\binom{8}{2} = 28$. Cara mendapat dua merah adalah $\\binom{5}{2} = 10$. Jadi
$$P = \\frac{\\binom{5}{2}}{\\binom{8}{2}} = \\frac{10}{28} = \\frac{5}{14}.$$`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Mari hitung banyak susunan huruf kata \"BUKU\", satu langkah sekaligus.",
          steps: [
            {
              title: "Hitung seolah berbeda",
              text: "Kata \"BUKU\" memiliki $4$ huruf, sehingga jika semua berbeda ada $4!=24$ susunan.",
            },
            {
              title: "Kenali unsur sama",
              text: "Huruf U muncul $2$ kali, dan menukar posisi kedua huruf U menghasilkan susunan yang sama.",
            },
            {
              title: "Bagi dengan faktorial unsur sama",
              text: "Banyak susunan $=\\dfrac{4!}{2!}=\\dfrac{24}{2}=12$.",
            },
            {
              title: "Tafsirkan",
              text: "Jadi hanya ada $12$ susunan huruf yang berbeda.",
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
      body: `Aturan pencacahan membantu kita memahami skala kemungkinan di sekitar kita. Banyaknya kata sandi yang mungkin menentukan seberapa kuat sebuah akun; banyaknya susunan kartu menentukan peluang kombinasi tertentu; banyaknya urutan penjadwalan menentukan seberapa besar ruang pencarian yang harus dijelajahi komputer.

Pencacahan juga menjadi dasar banyak perhitungan peluang, mulai dari undian, lotere, hingga pengambilan sampel acak dalam penelitian. Prinsipnya sederhana: bila setiap hasil sama mungkin, peluang adalah **perbandingan banyak cara**.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Tertukar permutasi dan kombinasi.** Tanyakan lebih dahulu: apakah urutan penting? Memilih pengurus (urutan penting) memakai permutasi, sedangkan memilih tim (urutan tidak penting) memakai kombinasi.

**2. Lupa membagi dengan faktorial unsur yang sama.** Untuk kata seperti "BUKU", jawaban $4! = 24$ salah karena huruf U yang kembar membuat banyak susunan terhitung berulang.

**3. Salah menghitung faktorial.** Ingat $0! = 1$ dan $1! = 1$. Faktorial tumbuh sangat cepat, jadi hitung dengan teliti.

**4. Memakai aturan penjumlahan padahal perkalian, atau sebaliknya.** Gunakan **perkalian** bila tahapan terjadi berurutan (dan), serta **penjumlahan** bila pilihannya saling lepas (atau).

**5. Mengabaikan syarat pengulangan.** Kata sandi dengan "angka boleh berulang" dan "angka tidak boleh berulang" memberi hasil berbeda. Baca soal dengan cermat.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Seorang siswa menghitung banyak susunan huruf kata \"BUKU\". Klik langkah yang keliru.",
          steps: [
            "Kata \"BUKU\" memiliki $4$ huruf.",
            "Karena keempatnya dianggap berbeda, banyak susunan $=4!=24$.",
            "Jadi ada $24$ susunan huruf.",
          ],
          wrongIndex: 1,
          explanation: "Huruf U muncul $2$ kali, sehingga banyak susunan terhitung berulang. Seharusnya dibagi dengan $2!$: $\\dfrac{4!}{2!}=\\dfrac{24}{2}=12$.",
        },
      ],
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Dari sebuah soal cerita, bagaimana kamu memutuskan apakah urutan penting atau tidak?",
            "Kapan kamu harus membagi dengan faktorial unsur yang sama, dan mengapa?",
            "Bagaimana pencacahan membantumu menghitung peluang suatu kejadian?",
          ],
          confidenceLabel: "Seberapa yakin kamu memilih permutasi atau kombinasi dengan tepat?",
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
              "Aturan perkalian",
              "tahapan berurutan: $n_1 \\cdot n_2 \\cdots n_k$",
            ],
            [
              "Aturan penjumlahan",
              "pilihan saling lepas: $n_1 + n_2$",
            ],
            [
              "Faktorial",
              "$n! = n(n-1)\\cdots 1$ dan $0! = 1$",
            ],
            [
              "Permutasi semua unsur",
              "$n!$ susunan $n$ objek berbeda",
            ],
            [
              "Permutasi sebagian",
              "$P(n,k) = \\dfrac{n!}{(n-k)!}$",
            ],
            [
              "Permutasi unsur sama",
              "$\\dfrac{n!}{k_1!\\,k_2!\\cdots}$",
            ],
            [
              "Kombinasi",
              "$\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$",
            ],
            [
              "Pencacahan untuk peluang",
              "$P(A) = \\dfrac{n(A)}{n(S)}$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Tiket keluar.** (1) Apa satu pertanyaan penentu yang memisahkan permutasi dari kombinasi? (2) Mengapa hasil kombinasi selalu $k!$ kali lebih kecil daripada permutasi? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Permutasi dan Kombinasi** untuk latihan tambahan.`,
    },
  ],
};

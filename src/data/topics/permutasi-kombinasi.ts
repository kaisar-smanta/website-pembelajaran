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
  applications: ['pemilihan-tim-lomba'],
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
      body: `Pencacahan bertumpu pada aturan dasar dan faktorial, jadi pastikan dahulu bekal berikut sudah siap:
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
      questionIds: ['perkom-08'],
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
          title: "Kunci memilih permutasi atau kombinasi",
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
        {
          kind: "figure",
          alt: "Diagram yang mengelompokkan enam permutasi dua huruf menjadi tiga kombinasi; setiap kombinasi berasal dari dua permutasi.",
          caption: "Setiap kombinasi bersesuaian dengan $2!$ permutasi. Contohnya, $\\{A,B\\}$ berasal dari $AB$ dan $BA$. Karena itu $\\binom{3}{2} = \\dfrac{P(3,2)}{2!} = \\dfrac{6}{2} = 3$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><defs><marker id="fig-pk-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><text x="20" y="26" font-size="12" fill="currentColor">P(3,2) = 6</text><text x="216" y="26" font-size="12" fill="currentColor">C(3,2) = 3</text><rect x="20" y="40" width="54" height="24" rx="4" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="20" y="72" width="54" height="24" rx="4" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="20" y="104" width="54" height="24" rx="4" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="20" y="136" width="54" height="24" rx="4" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="20" y="168" width="54" height="24" rx="4" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="20" y="200" width="54" height="24" rx="4" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="34" y="57" font-size="13" fill="currentColor">AB</text><text x="34" y="89" font-size="13" fill="currentColor">BA</text><text x="34" y="121" font-size="13" fill="currentColor">AC</text><text x="34" y="153" font-size="13" fill="currentColor">CA</text><text x="34" y="185" font-size="13" fill="currentColor">BC</text><text x="34" y="217" font-size="13" fill="currentColor">CB</text><rect x="216" y="39" width="86" height="26" rx="4" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="216" y="103" width="86" height="26" rx="4" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="216" y="167" width="86" height="26" rx="4" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="224" y="57" font-size="12" fill="currentColor">{A, B}</text><text x="224" y="121" font-size="12" fill="currentColor">{A, C}</text><text x="224" y="185" font-size="12" fill="currentColor">{B, C}</text><line x1="76" y1="52" x2="212" y2="52" stroke="currentColor" stroke-width="1" marker-end="url(#fig-pk-arrow)"/><line x1="76" y1="84" x2="212" y2="52" stroke="currentColor" stroke-width="1" marker-end="url(#fig-pk-arrow)"/><line x1="76" y1="116" x2="212" y2="116" stroke="currentColor" stroke-width="1" marker-end="url(#fig-pk-arrow)"/><line x1="76" y1="148" x2="212" y2="116" stroke="currentColor" stroke-width="1" marker-end="url(#fig-pk-arrow)"/><line x1="76" y1="180" x2="212" y2="180" stroke="currentColor" stroke-width="1" marker-end="url(#fig-pk-arrow)"/><line x1="76" y1="212" x2="212" y2="180" stroke="currentColor" stroke-width="1" marker-end="url(#fig-pk-arrow)"/></svg>',
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
        {
          kind: "flip-cards",
          intro: "Balik kartu untuk mengingat istilah kunci pencacahan.",
          cards: [
            {
              front: "Permutasi",
              back: "Susunan dengan urutan diperhatikan: $P(n,k)=\\dfrac{n!}{(n-k)!}$",
            },
            {
              front: "Kombinasi",
              back: "Pemilihan dengan urutan tidak diperhatikan: $\\binom{n}{k}=\\dfrac{n!}{k!(n-k)!}$",
            },
            {
              front: "Faktorial",
              back: "$n!=n(n-1)\\cdots1$ dan $0!=1$",
            },
            {
              front: "Unsur sama",
              back: "Bagi $n!$ dengan faktorial tiap kelompok: $\\dfrac{n!}{k_1!\\,k_2!\\cdots}$",
            },
          ],
        },
        {
          kind: "figure",
          alt: "Diagram pohon dengan dua cabang di tahap pertama dan masing-masing dua cabang lagi di tahap kedua.",
          caption: "Diagram pohon aturan perkalian: $2$ pilihan pada tahap pertama dan $2$ pilihan pada tahap kedua memberi $2 \\times 2 = 4$ hasil. Banyaknya daun menyatakan banyak cara.",
          svg: '<svg viewBox="0 0 320 220" aria-hidden="true" role="presentation"><line x1="34" y1="110" x2="126" y2="55" stroke="currentColor" stroke-width="1.5"/><line x1="34" y1="110" x2="126" y2="165" stroke="currentColor" stroke-width="1.5"/><line x1="134" y1="55" x2="246" y2="25" stroke="currentColor" stroke-width="1.5"/><line x1="134" y1="55" x2="246" y2="85" stroke="currentColor" stroke-width="1.5"/><line x1="134" y1="165" x2="246" y2="135" stroke="currentColor" stroke-width="1.5"/><line x1="134" y1="165" x2="246" y2="195" stroke="currentColor" stroke-width="1.5"/><circle cx="30" cy="110" r="4" fill="currentColor"/><circle cx="130" cy="55" r="4" fill="currentColor"/><circle cx="130" cy="165" r="4" fill="currentColor"/><circle cx="250" cy="25" r="4" fill="currentColor"/><circle cx="250" cy="85" r="4" fill="currentColor"/><circle cx="250" cy="135" r="4" fill="currentColor"/><circle cx="250" cy="195" r="4" fill="currentColor"/><text x="106" y="48" font-size="12" fill="currentColor">A1</text><text x="106" y="182" font-size="12" fill="currentColor">A2</text><text x="260" y="28" font-size="12" fill="currentColor">B1</text><text x="260" y="88" font-size="12" fill="currentColor">B2</text><text x="260" y="138" font-size="12" fill="currentColor">B1</text><text x="260" y="198" font-size="12" fill="currentColor">B2</text></svg>',
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
          explorationId: "permutasi-kombinasi-hitung",
        },
      ],
    },
    {
      id: "eksplorasi-pohon-keputusan",
      kind: "eksplorasi",
      title: "Eksplorasi Pohon Keputusan",
      body: `Gunakan pohon keputusan untuk mencacah secara visual. Nyalakan atau matikan sakelar **urutan diperhatikan** dan **boleh berulang**, lalu bandingkan banyaknya daun pohon dengan nilai rumus $P(n,k)$, $\\binom{n}{k}$, $n^{k}$, dan $\\binom{n+k-1}{k}$.`,
      blocks: [
        {
          kind: "exploration",
          explorationId: "pencacahan-pohon-keputusan",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Aturan Umum Pencacahan",
      body: `Semua rumus di atas tumbuh dari satu prinsip: **aturan perkalian**. Bila suatu proses berlangsung dalam tahap-tahap berurutan, banyak cara total adalah hasil kali banyak cara tiap tahap. Rumus permutasi dan kombinasi hanyalah bentuk ringkas dari aturan itu ketika beberapa tahap memiliki pola yang sama.

Yang menentukan pilihan rumus bukan panjangnya rumus, tetapi pertanyaannya: **apakah urutan penting?**

$$\\text{urutan penting} \\Rightarrow P(n,k) = \\frac{n!}{(n-k)!}, \\qquad \\text{urutan tidak penting} \\Rightarrow \\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}.$$

Karena menyusun ulang $k$ objek dapat dilakukan dalam $k!$ cara, setiap kombinasi bersesuaian dengan $k!$ permutasi, sehingga $\\binom{n}{k} = \\dfrac{P(n,k)}{k!}$ dan hasil kombinasi selalu $k!$ kali lebih kecil. Untuk keperluan peluang, banyak cara yang menguntungkan dibagi banyak cara seluruhnya.`,
      blocks: [
        {
          kind: "figure",
          alt: "Diagram pohon permutasi tiga objek A, B, dan C; tiga pilihan pada posisi pertama, dua pada posisi kedua, dan satu pada posisi ketiga, menghasilkan enam susunan berbeda.",
          caption: "Pohon permutasi $3$ objek: $3$ pilihan pada posisi pertama, $2$ pada posisi kedua, dan $1$ pada posisi ketiga, sehingga banyak daun $3 \\times 2 \\times 1 = 3! = 6$.",
          svg: '<svg viewBox="0 0 320 230" aria-hidden="true" role="presentation"><line x1="24" y1="110" x2="76" y2="50" stroke="currentColor" stroke-width="1.2"/><line x1="24" y1="110" x2="76" y2="110" stroke="currentColor" stroke-width="1.2"/><line x1="24" y1="110" x2="76" y2="170" stroke="currentColor" stroke-width="1.2"/><line x1="82" y1="48" x2="138" y2="28" stroke="currentColor" stroke-width="1.1"/><line x1="82" y1="50" x2="138" y2="68" stroke="currentColor" stroke-width="1.1"/><line x1="82" y1="110" x2="138" y2="90" stroke="currentColor" stroke-width="1.1"/><line x1="82" y1="110" x2="138" y2="130" stroke="currentColor" stroke-width="1.1"/><line x1="82" y1="170" x2="138" y2="152" stroke="currentColor" stroke-width="1.1"/><line x1="82" y1="172" x2="138" y2="192" stroke="currentColor" stroke-width="1.1"/><line x1="144" y1="28" x2="200" y2="28" stroke="currentColor" stroke-width="1"/><line x1="144" y1="68" x2="200" y2="68" stroke="currentColor" stroke-width="1"/><line x1="144" y1="90" x2="200" y2="90" stroke="currentColor" stroke-width="1"/><line x1="144" y1="130" x2="200" y2="130" stroke="currentColor" stroke-width="1"/><line x1="144" y1="152" x2="200" y2="152" stroke="currentColor" stroke-width="1"/><line x1="144" y1="192" x2="200" y2="192" stroke="currentColor" stroke-width="1"/><circle cx="22" cy="110" r="3" fill="currentColor"/><circle cx="78" cy="48" r="3" fill="currentColor"/><circle cx="78" cy="110" r="3" fill="currentColor"/><circle cx="78" cy="172" r="3" fill="currentColor"/><circle cx="140" cy="28" r="2.5" fill="currentColor"/><circle cx="140" cy="68" r="2.5" fill="currentColor"/><circle cx="140" cy="90" r="2.5" fill="currentColor"/><circle cx="140" cy="130" r="2.5" fill="currentColor"/><circle cx="140" cy="152" r="2.5" fill="currentColor"/><circle cx="140" cy="192" r="2.5" fill="currentColor"/><text x="88" y="52" font-size="12" fill="currentColor">A</text><text x="88" y="114" font-size="12" fill="currentColor">B</text><text x="88" y="176" font-size="12" fill="currentColor">C</text><text x="206" y="32" font-size="11" fill="currentColor">ABC</text><text x="206" y="72" font-size="11" fill="currentColor">ACB</text><text x="206" y="94" font-size="11" fill="currentColor">BAC</text><text x="206" y="134" font-size="11" fill="currentColor">BCA</text><text x="206" y="156" font-size="11" fill="currentColor">CAB</text><text x="206" y="196" font-size="11" fill="currentColor">CBA</text><text x="150" y="222" font-size="12" text-anchor="middle" fill="currentColor">3 \u00d7 2 \u00d7 1 = 6</text></svg>',
        },
      ],
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Rumus dan Prosedur",
      body: `**Aturan perkalian.** Tahapan berurutan: $n_1 \\cdot n_2 \\cdots n_k$.

**Aturan penjumlahan.** Pilihan saling lepas: $n_1 + n_2$.

**Faktorial.** $n! = n(n-1)\\cdots 2 \\cdot 1$ dan $0! = 1$.

**Permutasi (urutan diperhatikan).**
- Semua unsur dari $n$ objek berbeda: $n!$.
- Sebagian unsur: $P(n,k) = \\dfrac{n!}{(n-k)!}$.
- Unsur yang sama: $\\dfrac{n!}{k_1!\\,k_2!\\cdots k_m!}$.

**Kombinasi (urutan tidak diperhatikan).**
$$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}.$$

**Hubungan keduanya.** $\\binom{n}{k} = \\dfrac{P(n,k)}{k!}$.

**Prosedur memilih rumus.**
1. Tentukan objek yang dihitung dan apakah tahapannya berurutan (perkalian) atau saling lepas (penjumlahan).
2. Tanyakan: **apakah urutan penting?** Jika ya, pakai permutasi; jika tidak, pakai kombinasi.
3. Periksa apakah unsur boleh berulang atau ada unsur yang sama; bila ada unsur sama, bagi dengan faktorial pengulangannya.
4. Untuk peluang, bandingkan banyak cara menguntungkan dengan banyak cara seluruhnya, $P(A) = \\dfrac{n(A)}{n(S)}$.`,
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      blocks: [
        {
          kind: "step-reveal",
          intro: "Enam contoh berikut dikerjakan langkah demi langkah, dari aturan perkalian sampai pencacahan untuk peluang.",
          steps: [
            {
              title: "Contoh 1: aturan perkalian pada kata sandi",
              text: `Sebuah kata sandi terdiri atas $4$ angka berbeda yang dipilih dari angka $0$ sampai $9$. Berapa banyak kata sandi yang mungkin?

*Langkah 1: kenali tahapannya.* Ada $4$ kotak berurutan yang harus diisi, jadi kita memakai aturan perkalian.

*Langkah 2: isi tiap kotak.* Kotak pertama punya $10$ pilihan. Karena angka tidak boleh berulang, kotak kedua $9$, ketiga $8$, dan keempat $7$.

*Langkah 3: kalikan dan verifikasi.*
$$10 \\cdot 9 \\cdot 8 \\cdot 7 = 5040.$$
Hasil ini sama dengan permutasi sebagian $P(10,4) = \\dfrac{10!}{6!} = 5040$, karena urutan angka memang penting. Jadi ada $5040$ kata sandi.`,
            },
            {
              title: "Contoh 2: permutasi dengan unsur sama",
              text: `Berapa banyak susunan huruf dari kata "BUKU"?

*Langkah 1: anggap dahulu semua huruf berbeda.* Ada $4$ huruf, sehingga sementara $4! = 24$ susunan.

*Langkah 2: koreksi unsur yang sama.* Huruf U muncul $2$ kali. Menukar posisi kedua huruf U tidak menghasilkan susunan baru, dan setiap susunan terhitung $2!$ kali. Jadi bagi dengan $2!$:
$$\\frac{4!}{2!} = \\frac{24}{2} = 12.$$
*Verifikasi.* Hasil $12$ tepat setengah dari $24$, sesuai pengulangan dua huruf U yang sama. Jadi ada $12$ susunan berbeda.`,
            },
            {
              title: "Contoh 3: permutasi semua unsur",
              text: `Empat buku berbeda akan disusun berjajar di rak. Berapa banyak susunan yang mungkin?

*Penyelesaian.* Keempat buku berbeda dan urutannya diperhatikan, sehingga banyak susunannya adalah $4! = 4 \\cdot 3 \\cdot 2 \\cdot 1 = 24$.

*Verifikasi.* Lewat kotak pengisian: $4$ pilihan untuk posisi pertama, lalu $3$, $2$, dan $1$; hasil kalinya $24$, sama dengan $4!$.`,
            },
            {
              title: "Contoh 4: permutasi sebagian",
              text: `Dari $5$ siswa akan dipilih ketua, sekretaris, dan bendahara. Berapa banyak susunan pengurus yang mungkin?

*Langkah 1: tentukan apakah urutan penting.* Ketua dan sekretaris jabatannya berbeda, jadi urutan penting dan kita memakai permutasi.

*Langkah 2: pakai rumus permutasi sebagian.*
$$P(5,3) = \\frac{5!}{(5-3)!} = \\frac{120}{2} = 60.$$
*Verifikasi.* Lewat kotak pengisian: $5 \\cdot 4 \\cdot 3 = 60$, cocok. Jadi ada $60$ susunan pengurus.`,
            },
            {
              title: "Contoh 5: kombinasi",
              text: `Dari $10$ siswa akan dipilih $3$ orang untuk sebuah tim tanpa jabatan. Berapa banyak susunan tim?

*Langkah 1: tentukan apakah urutan penting.* Tim tidak punya jabatan, jadi urutan tidak penting dan kita memakai kombinasi.

*Langkah 2: pakai rumus kombinasi.*
$$\\binom{10}{3} = \\frac{10!}{3!\\,7!} = \\frac{10 \\cdot 9 \\cdot 8}{3 \\cdot 2 \\cdot 1} = 120.$$
*Verifikasi.* Bandingkan dengan permutasi: $P(10,3) = 10 \\cdot 9 \\cdot 8 = 720$, lalu $720 : 3! = 720 : 6 = 120$, cocok. Jadi ada $120$ susunan tim.`,
            },
            {
              title: "Contoh 6: pencacahan untuk peluang",
              text: `Sebuah kotak berisi $5$ bola merah dan $3$ bola putih. Dua bola diambil sekaligus. Tentukan peluang keduanya merah.

*Langkah 1: hitung ruang sampel.* Banyak cara mengambil $2$ dari $8$ bola tanpa memperhatikan urutan adalah $\\binom{8}{2} = 28$.

*Langkah 2: hitung cara yang menguntungkan.* Cara mendapat dua merah dari $5$ merah adalah $\\binom{5}{2} = 10$.

*Langkah 3: bagi dan verifikasi.*
$$P = \\frac{\\binom{5}{2}}{\\binom{8}{2}} = \\frac{10}{28} = \\frac{5}{14} \\approx 0{,}357.$$
Hasilnya antara $0$ dan $1$, dan lebih kecil dari $0{,}5$ karena bola putih masih cukup banyak.`,
            },
          ],
        },
        {
          kind: "details",
          summary: "Coba sendiri: menyusun urutan tiga mata pelajaran",
          text: `Seorang siswa harus menyusun urutan tiga mata pelajaran berbeda dari lima pilihan untuk jadwal pagi. Berapa banyak urutan yang mungkin, dan berapa banyak bila urutan tidak penting?

*Penyelesaian.* Urutan diperhatikan karena urutan mata pelajaran menghasilkan jadwal berbeda, sehingga $P(5,3) = 5 \\cdot 4 \\cdot 3 = 60$ urutan. Bila yang dihitung hanya kumpulan tiga mata pelajaran tanpa urutan, pakai kombinasi: $\\binom{5}{3} = \\dfrac{5 \\cdot 4 \\cdot 3}{3!} = 10$ pilihan. Perhatikan bahwa $60 = 6 \\cdot 10$, sesuai hubungan $P(n,k) = k!\\,\\binom{n}{k}$.`,
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
      body: `Aturan pencacahan membantu kita memahami skala kemungkinan di sekitar kita, dan angkanya sering mengejutkan. Sebuah PIN bank empat angka memiliki $10^{4} = 10.000$ kemungkinan, sedangkan kata sandi delapan karakter dari huruf besar, huruf kecil, dan angka (total $62$ karakter) memiliki $62^{8} \\approx 2{,}18 \\times 10^{14}$ kemungkinan, jauh lebih sulit ditebak. Pada undian "6 dari 49", banyak susunan angka yang mungkin adalah $\\binom{49}{6} = 13.983.816$.

Banyaknya susunan kartu, urutan penjadwalan, dan pengambilan sampel acak dalam penelitian juga dihitung dengan cara yang sama. Prinsipnya sederhana: bila setiap hasil sama mungkin, peluang adalah **perbandingan banyak cara**.`,
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
      id: "tantangan",
      kind: "tantangan",
      title: "Tantangan: Empat Angka Habis Dibagi 5",
      body: `**Soal.** Berapa banyak bilangan empat angka berbeda yang **lebih besar dari 5000** dan **habis dibagi 5**, yang dibentuk dari angka $1, 2, 3, 4, 5, 6, 7$ tanpa pengulangan?`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Pecah syaratnya menjadi beberapa tahap, lalu pakai aturan perkalian.",
          steps: [
            {
              title: "Langkah 1: Syarat habis dibagi 5",
              text: "Bilangan habis dibagi 5 bila angka terakhirnya $0$ atau $5$. Karena tidak tersedia angka $0$, angka terakhir **harus $5$**. Jadi posisi terakhir sudah pasti, tinggal mengatur tiga posisi lain.",
            },
            {
              title: "Langkah 2: Syarat lebih besar dari 5000",
              text: "Agar bilangan lebih besar dari 5000, angka pertama harus $5$, $6$, atau $7$. Karena angka $5$ sudah dipakai di posisi terakhir, pilihan angka pertama tinggal $6$ atau $7$, yaitu $2$ cara.",
            },
            {
              title: "Langkah 3: Mengisi dua posisi tengah",
              text: "Tersisa $7 - 2 = 5$ angka yang belum dipakai. Dua posisi tengah diisi dari $5$ angka itu dengan urutan diperhatikan, sehingga ada $P(5,2) = \\dfrac{5!}{3!} = 20$ cara.",
            },
            {
              title: "Langkah 4: Aturan perkalian",
              text: "Totalnya $2 \\times 20 = 40$ bilangan.",
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Pencacahan Sebelum Notasi Modern",
      body: `Pencacahan sudah dipelajari jauh sebelum notasi modern. Teks India kuno membahas banyak susunan dan pilihan, dan segitiga koefisien yang kini disebut segitiga Pascal sudah dikenal di Persia dan Tiongkok sekitar abad ke-11, jauh sebelum Blaise Pascal. Notasi faktorial serta aturan permutasi dan kombinasi mulai tertata pada abad ke-17, seiring berkembangnya teori peluang awal yang tonggaknya diuraikan pada topik [Peluang](/matematika/kelas/XI/data-peluang/peluang). Simbol $\\binom{n}{k}$ yang kita pakai sekarang mulai dibakukan pada abad ke-19.`,
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
          caption: "Ringkasan aturan pencacahan, faktorial, permutasi, dan kombinasi",
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
        {
          kind: "callout",
          variant: "concept",
          title: "Benang merah: satu pertanyaan menentukan seluruh rumus",
          text: "Seluruh rumus pada topik ini tumbuh dari aturan perkalian. Permutasi dan kombinasi hanya berbeda pada satu hal, yaitu apakah urutan penting. Saat ragu, bayangkan kotak pengisian: jika menukar dua pilihan menghasilkan susunan baru, pakai permutasi; jika tidak, bagi dengan $k!$ dan pakai kombinasi.",
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      questionIds: ['perkom-09'],
      body: `**Tiket keluar.** (1) Apa satu pertanyaan penentu yang memisahkan permutasi dari kombinasi? (2) Mengapa hasil kombinasi selalu $k!$ kali lebih kecil daripada permutasi? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Permutasi dan Kombinasi** untuk latihan tambahan.`,
    },
  ],
};

import type { Topic } from '@/types/content';

export const polinomial: Topic = {
  id: 'polinomial',
  slug: 'polinomial',
  title: 'Polinomial',
  subtitle: 'Operasi, pembagian, dan faktor suku banyak',
  grade: 'XI',
  phase: 'F',
  element: 'aljabar-fungsi',
  subject: 'matematika-lanjut',
  status: 'lengkap',
  estimatedMinutes: 100,
  summary:
    'Melakukan operasi aritmetika polinomial, membagi dengan cara bersusun atau Horner, serta menerapkan teorema sisa dan teorema faktor untuk menentukan akar.',
  description:
    'Polinomial atau suku banyak adalah bentuk aljabar dengan pangkat bilangan bulat tak negatif. Topik ini dimulai dari notasi, derajat, dan operasi penjumlahan, pengurangan, serta perkalian. Setelah itu kita mempelajari pembagian polinomial dengan cara bersusun dan metode Horner, lalu menurunkan teorema sisa dan teorema faktor. Kedua teorema itu menjadi alat utama untuk menentukan faktor dan akar polinomial, serta menuntaskan masalah identitas polinomial melalui penyamaan koefisien.',
  keywords: [
    'polinomial',
    'suku banyak',
    'derajat polinomial',
    'metode horner',
    'teorema sisa',
    'teorema faktor',
    'akar polinomial',
    'identitas polinomial',
  ],
  prerequisites: ['fungsi-kuadrat'],
  relatedTopics: ['matriks-transformasi'],
  prerequisiteKnowledge: [
    'Operasi bentuk aljabar dan perkalian dua binomial',
    'Fungsi kuadrat, akar-akar, dan diskriminan',
    'Aturan tanda pada operasi bilangan bulat',
  ],
  objectives: [
    { text: 'Peserta didik dapat menyatakan polinomial beserta derajat dan koefisien utamanya.' },
    { text: 'Peserta didik dapat melakukan penjumlahan, pengurangan, dan perkalian polinomial.' },
    { text: 'Peserta didik dapat membagi polinomial dengan cara bersusun dan metode Horner.' },
    { text: 'Peserta didik dapat menerapkan teorema sisa dan teorema faktor.' },
    { text: 'Peserta didik dapat menentukan faktor dan akar polinomial serta menyelesaikan identitas polinomial.' },
  ],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat melakukan operasi aritmetika pada polinomial, membagi polinomial dengan cara bersusun atau metode Horner, menerapkan teorema sisa dan teorema faktor, serta menentukan faktor, akar, dan identitas polinomial.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      blocks: [
        {
          kind: "prediction",
          prompt: `Perhatikan polinomial $P(x) = x^{3} - 4x^{2} + 5x - 2$. Nilai $P(1) = 1 - 4 + 5 - 2 = 0$ dan $P(2) = 8 - 16 + 10 - 2 = 0$. Kedua fakta ini bukan kebetulan.

Pertanyaannya: apa hubungan antara nilai $P(c)$ dan sisa pembagian $P(x)$ oleh $(x-c)$?`,
          reveal: "Sisa pembagian $P(x)$ oleh $(x-c)$ tepat sama dengan $P(c)$. Ini adalah **teorema sisa**. Karena $P(1)=0$ dan $P(2)=0$, baik $(x-1)$ maupun $(x-2)$ membagi habis $P(x)$. Memang $P(x) = (x-1)(x-1)(x-2)$, sehingga akar-akarnya $x=1$ (kembar) dan $x=2$. Gagasan inilah yang menjadi inti topik polinomial.",
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- operasi bentuk aljabar, termasuk mengalikan dua binomial;
- fungsi kuadrat beserta akar-akarnya;
- aturan tanda pada penjumlahan dan perkalian bilangan.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: "Polinomial muncul ketika suatu besaran bergantung pada pangkat lebih tinggi dari satu: volume balok sebagai fungsi panjang, lintasan proyektil, atau perkiraan biaya produksi. Membagi polinomial memungkinkan kita menyederhanakan bentuk dan menemukan faktor, sedangkan teorema sisa memberi cara cepat menghitung nilai tanpa substitusi panjang. Keterampilan ini juga fondasi bagi analisis fungsi pada topik lanjutan.",
    },
    {
      id: "operasi",
      kind: "konsep",
      title: "Notasi dan Operasi Aritmetika Polinomial",
      body: `Polinomial (suku banyak) dalam variabel $x$ berderajat $n$ berbentuk
$$P(x) = a_{n}x^{n} + a_{n-1}x^{n-1} + \\cdots + a_{1}x + a_{0},$$
dengan $a_{n} \\neq 0$. Bilangan $a_{n}$ disebut **koefisien utama**, $a_{0}$ disebut **konstanta**, dan $n$ adalah **derajat**. Sebagai contoh, $P(x)=2x^{3}-3x^{2}+4x-5$ berderajat $3$ dengan koefisien utama $2$.

Penjumlahan dan pengurangan dilakukan dengan menggabungkan **suku-suku sejenis**. Untuk $P(x)=2x^{3}-3x^{2}+4x-5$ dan $Q(x)=x^{2}+2x+1$:
$$P(x)+Q(x) = 2x^{3} - 2x^{2} + 6x - 4, \\qquad P(x)-Q(x) = 2x^{3} - 4x^{2} + 2x - 6.$$

Perkalian dilakukan dengan **sifat distributif**: setiap suku $P$ dikalikan setiap suku $Q$, lalu suku sejenis digabung. Hasilnya
$$P(x)Q(x) = 2x^{5} + x^{4} - 6x - 5.$$`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Inti yang perlu diingat",
          text: "Saat menjumlahkan atau mengurangkan, tandai suku-suku **sejenis**. Saat mengalikan, derajat suku-suku bertambah sehingga derajat hasil kali sama dengan jumlah derajat kedua polinomial.",
        },
        {
          kind: "match",
          intro: "Cocokkan teorema polinomial dengan maknanya.",
          pairs: [
            {
              left: "Teorema sisa",
              right: "Sisa bagi $P(x)$ oleh $(x-k)$ adalah $P(k)$",
            },
            {
              left: "Teorema faktor",
              right: "$(x-k)$ faktor $P(x)$ jika dan hanya jika $P(k)=0$",
            },
            {
              left: "Skema Horner",
              right: "Cara efisien membagi polinomial oleh $(x-k)$",
            },
            {
              left: "Derajat hasil bagi",
              right: "Derajat $P$ dikurangi derajat pembagi",
            },
          ],
        },
      ],
    },
    {
      id: "derajat",
      kind: "representasi",
      title: "Derajat Hasil Operasi",
      body: "Derajat memberi gambaran cepat tentang hasil suatu operasi.",
      blocks: [
        {
          kind: "table",
          caption: "Aturan derajat pada operasi polinomial",
          headers: [
            "Operasi",
            "Derajat hasil",
            "Contoh",
          ],
          rows: [
            [
              "$P+Q$",
              "$\\max(\\deg P, \\deg Q)$",
              "$3$ dan $2$ menghasilkan derajat $3$",
            ],
            [
              "$P-Q$",
              "$\\max(\\deg P, \\deg Q)$",
              "$3$ dan $2$ menghasilkan derajat $3$",
            ],
            [
              "$P \\cdot Q$",
              "$\\deg P + \\deg Q$",
              "$3$ dan $2$ menghasilkan derajat $5$",
            ],
            [
              "$P^{k}$",
              "$k \\cdot \\deg P$",
              "$P^{2}$ berderajat $6$",
            ],
          ],
        },
      ],
    },
    {
      id: "pembagian",
      kind: "rumus",
      title: "Pembagian Polinomial: Bersusun dan Horner",
      body: `Pembagian polinomial mengikuti **algoritma pembagian**: jika $P(x)$ dibagi oleh $Q(x)$ menghasilkan hasil bagi $H(x)$ dan sisa $S(x)$, maka
$$P(x) = Q(x)\\,H(x) + S(x), \\qquad \\deg S < \\deg Q.$$

**Cara bersusun** mirip pembagian bilangan: bagi suku berderajat tertinggi, kalikan, kurangkan, lalu ulangi. Sebagai contoh, bagi $x^{3}+2x^{2}-5x-6$ oleh $(x+2)$:
- $x^{3} \\div x = x^{2}$, lalu $x^{2}(x+2) = x^{3}+2x^{2}$; mengurangkan memberi sisa sementara $-5x-6$;
- $(-5x) \\div x = -5$, lalu $-5(x+2) = -5x-10$; mengurangkan memberi sisa $4$.

Jadi
$$x^{3}+2x^{2}-5x-6 = (x+2)(x^{2}-5) + 4,$$
dengan hasil bagi $x^{2}-5$ dan sisa $4$. Sisa itu juga sama dengan $P(-2) = -8 + 8 + 10 - 6 = 4$, sesuai teorema sisa.

**Metode Horner** lebih ringkas untuk pembagi linear. Untuk membagi $2x^{3}+x^{2}-3x+4$ oleh $(x-2)$, tulis koefisien $2, 1, -3, 4$, turunkan $2$, lalu secara bergantian kalikan dengan $2$ dan jumlahkan ke koefisien berikut. Diperoleh
$$2x^{3}+x^{2}-3x+4 = (x-2)(2x^{2}+5x+7) + 18,$$
sehingga hasil baginya $2x^{2}+5x+7$ dan sisanya $18$.

Operasi yang sama dapat diverifikasi dengan teorema sisa: nilai $P(2)$ memang $18$.`,
    },
    {
      id: "teorema",
      kind: "konsep",
      title: "Teorema Sisa dan Teorema Faktor",
      body: `**Teorema sisa.** Sisa pembagian $P(x)$ oleh $(x-c)$ adalah $P(c)$. Secara umum, sisa pembagian $P(x)$ oleh $(ax+b)$ adalah $P\\left(-\\dfrac{b}{a}\\right)$.

Sebagai contoh, untuk $P(x)=2x^{3}-5x^{2}+4x-7$:
$$P(2) = 16 - 20 + 8 - 7 = -3, \\qquad P(-1) = -2 - 5 - 4 - 7 = -18.$$
Jadi sisa pembagian oleh $(x-2)$ adalah $-3$ dan oleh $(x+1)$ adalah $-18$.

**Teorema faktor.** $(x-c)$ adalah faktor dari $P(x)$ jika dan hanya jika $P(c)=0$. Karena $P(3)=27-36+3+6=0$ untuk $P(x)=x^{3}-4x^{2}+x+6$, maka $(x-3)$ adalah faktor. Membagi lebih lanjut memberi
$$x^{3}-4x^{2}+x+6 = (x-3)(x-2)(x+1),$$
sehingga akar-akarnya $x=3$, $x=2$, dan $x=-1$.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "Teorema sisa memakai $(x-c)$, sehingga yang disubstitusi adalah $c$ (lawan dari angka pada kurung). Untuk pembagi $(ax+b)$, substitusikan $x=-\\dfrac{b}{a}$, bukan $\\dfrac{b}{a}$.",
        },
      ],
    },
    {
      id: "identitas",
      kind: "konsep",
      title: "Identitas Polinomial",
      body: `Dua polinomial **identik** jika koefisien suku-suku sejenisnya sama. Sifat ini dipakai untuk menentukan koefisien yang belum diketahui.

Sebagai contoh, tentukan $a$ dan $b$ dari kesamaan
$$x^{3} + ax^{2} - 5x + b = (x-1)(x+2)(x-3).$$
Jabarkan ruas kanan:
$$(x-1)(x+2) = x^{2}+x-2, \\qquad (x^{2}+x-2)(x-3) = x^{3}-2x^{2}-5x+6.$$
Menyamakan koefisien suku sejenis memberi $a=-2$ dan $b=6$.`,
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi Grafik Polinomial",
      body: `Sebelum terbiasa membaca bentuk polinomial dari koefisiennya, ada baiknya kamu melihat langsung bagaimana setiap koefisien mengubah kurvanya. Pada simulasi berikut, koefisien $a$, $b$, $c$, dan $d$ dapat kamu geser satu per satu. Amati berapa kali kurva memotong sumbu-$x$ (yaitu banyak akar real) dan di mana kurva berbelok (titik stasioner).`,
      blocks: [
        {
          kind: "exploration",
          explorationId: "mtl-polinomial-grafik",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Algoritma Pembagian sebagai Induk Teorema",
      body: `Semua sifat pada topik ini mengalir dari satu identitas, yaitu **algoritma pembagian**. Jika $P(x)$ dibagi oleh $Q(x)$, selalu ada hasil bagi $H(x)$ dan sisa $S(x)$ berderajat lebih kecil daripada derajat $Q$ sehingga

$$P(x) = Q(x)\\,H(x) + S(x), \\qquad \\deg S < \\deg Q.$$

Ketika pembaginya linear, $Q(x)=x-c$, sisanya berderajat nol, yaitu sebuah konstanta. Menyubstitusi $x=c$ menghapus suku $Q(c)H(c)$ sehingga tersisa $S(c)=P(c)$ — itulah **teorema sisa**. Bila $P(c)=0$, sisa menjadi nol dan $P(x)$ habis dibagi $(x-c)$ — itulah **teorema faktor**. Jadi kedua teorema itu bukan rumus terpisah, melainkan akibat langsung dari algoritma pembagian.`,
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
              text: `Diketahui $P(x)=2x^{3}-3x^{2}+4x-5$ dan $Q(x)=x^{2}+2x+1$. Hitunglah $P(x)+Q(x)$ dan $P(x)Q(x)$.

*Penyelesaian.* Gabungkan suku sejenis:
$$P(x)+Q(x) = 2x^{3} - 2x^{2} + 6x - 4.$$
Untuk perkalian, kalikan setiap suku lalu gabungkan:
$$P(x)Q(x) = 2x^{5} + x^{4} - 6x - 5.$$`,
            },
            {
              title: "Contoh 2",
              text: `Tentukan sisa pembagian $P(x)=2x^{3}-5x^{2}+4x-7$ oleh $(x-2)$.

*Penyelesaian.* Menurut teorema sisa, sisa sama dengan $P(2)$:
$$P(2) = 2(8) - 5(4) + 4(2) - 7 = 16 - 20 + 8 - 7 = -3.$$
Jadi sisanya $-3$.`,
            },
            {
              title: "Contoh 3",
              text: `Tunjukkan bahwa $(x-3)$ adalah faktor dari $P(x)=x^{3}-4x^{2}+x+6$, lalu tentukan semua akarnya.

*Penyelesaian.* Hitung $P(3) = 27 - 36 + 3 + 6 = 0$, jadi $(x-3)$ faktor. Membagi dengan Horner memberi hasil bagi $x^{2}-x-2=(x-2)(x+1)$. Maka
$$x^{3}-4x^{2}+x+6 = (x-3)(x-2)(x+1),$$
dengan akar $x=3$, $x=2$, dan $x=-1$.`,
            },
            {
              title: "Contoh 4",
              text: `Tentukan $a$, $b$, dan $c$ dari kesamaan $x^{3}+ax^{2}+bx+c = (x-1)(x^{2}+4x+3)$.

*Penyelesaian.* Jabarkan ruas kanan:
$$(x-1)(x^{2}+4x+3) = x^{3}+4x^{2}+3x - x^{2}-4x-3 = x^{3}+3x^{2}-x-3.$$
Menyamakan koefisien suku sejenis memberi $a=3$, $b=-1$, dan $c=-3$.`,
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
      body: `Polinomial dipakai untuk memodelkan volume, lintasan, dan biaya. Menentukan akar polinomial membantu mencari titik saat suatu besaran bernilai nol, misalnya waktu sebuah proyektil menyentuh tanah atau ukuran kemasan dengan volume tertentu.

Dalam teknologi, kurva Bézier pada desain grafis dan animasi dibangun dari polinomial. Kode pemeriksa galat pada transmisi data juga menggunakan aritmetika polinomial di atas bilangan biner.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Salah tanda pada teorema sisa.** Untuk pembagi $(x+1)$, substitusikan $x=-1$; untuk $(ax+b)$, substitusikan $x=-\\dfrac{b}{a}$.
**2. Menyamakan suku tidak sejenis.** Hanya koefisien dari pangkat yang sama boleh disamakan pada identitas polinomial.
**3. Berhenti saat menemukan satu faktor.** Setelah $(x-c)$ diperoleh, hasil bagi masih perlu difaktorkan untuk menemukan akar lainnya.
**4. Mengabaikan derajat hasil bagi.** Derajat hasil bagi adalah derajat $P$ dikurangi derajat pembagi; periksa kembali agar tidak ada suku yang hilang.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Perhatikan penentuan sisa pembagian $P(x)=x^{3}-4x^{2}+x+6$ oleh $(x+1)$ dengan teorema sisa. Ada satu langkah yang keliru. Klik langkah itu.",
          steps: [
            "Menurut teorema sisa, sisa pembagian $P(x)$ oleh $(x-c)$ adalah $P(c)$.",
            "Pembagi $(x+1)$ berarti $c=1$, sehingga sisa $=P(1)$.",
            "Hitung $P(1)=1-4+1+6=4$.",
            "Jadi sisanya $4$.",
          ],
          wrongIndex: 1,
          explanation: "Langkah kedua keliru. Pembagi $(x+1)$ sama dengan $(x-(-1))$, sehingga $c=-1$, bukan $1$. Sisa yang benar adalah $P(-1)=-1-4-1+6=0$.",
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
            "Mengapa teorema sisa membuat perhitungan nilai polinomial menjadi lebih cepat?",
            "Bagaimana kamu memeriksa kebenaran hasil pembagian polinomial?",
            "Kapan penyamaan koefisien lebih mudah daripada menyubstitusi nilai $x$ tertentu?",
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
            "Konsep",
            "Bentuk / Aturan",
          ],
          rows: [
            [
              "Bentuk polinomial",
              "$P(x)=a_{n}x^{n}+\\cdots+a_{1}x+a_{0}$",
            ],
            [
              "Penjumlahan / pengurangan",
              "gabungkan suku sejenis",
            ],
            [
              "Perkalian",
              "$\\deg(PQ)=\\deg P+\\deg Q$",
            ],
            [
              "Algoritma pembagian",
              "$P(x)=Q(x)H(x)+S(x)$",
            ],
            [
              "Teorema sisa",
              "sisa oleh $(x-c)$ adalah $P(c)$",
            ],
            [
              "Teorema faktor",
              "$(x-c)$ faktor $\\Leftrightarrow$ $P(c)=0$",
            ],
            [
              "Identitas polinomial",
              "koefisien suku sejenis sama",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Tiket keluar.** (1) Bagaimana algoritma pembagian melahirkan teorema sisa dan teorema faktor? (2) Mengapa derajat sisa selalu lebih kecil daripada derajat pembagi? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Polinomial** untuk latihan tambahan.`,
    },
  ],
};

import type { Topic } from '@/types/content';

export const distribusiBinomial: Topic = {
  id: 'distribusi-binomial',
  slug: 'distribusi-binomial',
  title: 'Distribusi Binomial',
  subtitle: 'Peluang pada percobaan berulang dua hasil',
  grade: 'XII',
  phase: 'F',
  element: 'data-peluang',
  subject: 'matematika-lanjut',
  status: 'lengkap',
  supplementary: true,
  cpNote:
    'Distribusi binomial memperluas CP FL-DAT-1 tentang variabel acak diskret dan fungsi peluang ke percobaan berulang dengan dua hasil yang saling bebas, sehingga peluang, nilai harapan, dan variansnya dapat dihitung langsung dari banyak percobaan $n$ dan peluang sukses $p$.',
  estimatedMinutes: 95,
  summary:
    'Memodelkan percobaan berulang dengan dua hasil memakai distribusi binomial, menghitung peluang tepat $k$ sukses, peluang kumulatif, serta nilai harapan dan simpangan bakunya.',
  description:
    'Banyak percobaan nyata berupa pengulangan kegiatan yang hanya punya dua hasil: berhasil atau gagal, gambar atau angka, produk baik atau cacat. Distribusi binomial merangkum peluang banyaknya keberhasilan dari $n$ percobaan saling bebas dengan peluang sukses $p$ yang tetap. Topik ini membangun rumus $P(X=k)=\\binom{n}{k}p^{k}(1-p)^{n-k}$, menunjukkan kaitannya dengan kombinasi dan segitiga Pascal, lalu memakainya untuk menghitung peluang kumulatif melalui komplemen. Dari sana diturunkan nilai harapan $E(X)=np$, varians $np(1-p)$, dan simpangan baku $\\sqrt{np(1-p)}$ yang berguna untuk memodelkan dan menafsirkan data nyata seperti pengendalian mutu, survei, dan olahraga.',
  keywords: [
    'distribusi binomial',
    'percobaan binomial',
    'peluang sukses',
    'koefisien binomial',
    'segitiga pascal',
    'nilai harapan binomial',
    'simpangan baku binomial',
  ],
  prerequisites: ['variabel-acak-diskret'],
  relatedTopics: ['peluang', 'permutasi-kombinasi', 'variabel-acak-diskret'],
  prerequisiteKnowledge: [
    'Variabel acak diskret dan distribusi peluangnya',
    'Aturan perkalian untuk kejadian saling bebas',
    'Kombinasi $\\binom{n}{k}=\\dfrac{n!}{k!(n-k)!}$',
    'Peluang komplemen $P(X \\geq a) = 1 - P(X < a)$',
  ],
  objectives: [
    { text: 'Peserta didik dapat menjelaskan ciri percobaan binomial dan membedakannya dari percobaan non-binomial.' },
    { text: 'Peserta didik dapat menghitung peluang tepat $k$ sukses dengan rumus distribusi binomial.' },
    { text: 'Peserta didik dapat menentukan peluang kumulatif dengan memakai prinsip komplemen.' },
    { text: 'Peserta didik dapat menghitung nilai harapan, varians, dan simpangan baku distribusi binomial.' },
    { text: 'Peserta didik dapat memodelkan dan menafsirkan masalah nyata memakai distribusi binomial.' },
  ],
  applications: ['mtl-binomial-kendali-mutu'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat mengenali percobaan binomial, menghitung peluang tepat $k$ sukses dan peluang kumulatifnya, serta menentukan nilai harapan, varians, dan simpangan baku untuk memodelkan dan menafsirkan masalah nyata.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      blocks: [
        {
          kind: "prediction",
          prompt: `Seorang pemain basket mencetak lemparan bebas dengan peluang $0{,}7$. Ia akan melempar **5 kali**, dan tiap lemparan saling bebas.

Manakah yang peluangnya lebih besar: berhasil **tepat 3 kali**, atau berhasil **kelima-limanya**?`,
          options: [
            "Berhasil tepat 3 kali",
            "Berhasil kelima-limanya",
            "Sama besar",
            "Tidak dapat ditentukan",
          ],
          reveal: `Kita bandingkan keduanya dengan aturan perkalian peluang.

$$P(X=3)=\\binom{5}{3}(0{,}7)^{3}(0{,}3)^{2}=10(0{,}343)(0{,}09)=0{,}3087.$$
$$P(X=5)=0{,}7^{5}=0{,}16807.$$

Ternyata **tepat 3 kali** lebih besar peluangnya daripada kelima-limanya. Alasannya, banyak susunan cara memperoleh 3 keberhasilan ($10$ cara) jauh lebih banyak daripada cara memperoleh 5 keberhasilan (hanya $1$ cara). Inilah inti **distribusi binomial**: peluang bergantung pada **banyak cara** dan **peluang tiap hasil**.`,
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu menguasai:

- menyusun distribusi peluang variabel acak diskret dan memeriksa jumlah peluangnya $1$;
- aturan perkalian untuk kejadian saling bebas $P(A \\cap B) = P(A)\\,P(B)$;
- kombinasi $\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$, misalnya $\\binom{5}{2} = 10$;
- peluang komplemen $P(A^c) = 1 - P(A)$ dan notasi penjumlahan.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Banyak keputusan diambil dari percobaan yang **diulang berkali-kali dengan dua kemungkinan hasil**. Sebuah pabrik memeriksa $20$ komponen dan ingin tahu peluang menemukan sejumlah komponen cacat. Sebuah survei mewawancarai $10$ orang dan menghitung banyak yang mendukung kebijakan tertentu. Pelatih sepak bola menghitung peluang memenangkan $4$ dari $6$ tendangan penalti.

Pada semua contoh itu, tiap percobaan hanya memberi dua hasil — biasanya disebut **sukses** dan **gagal** — dilakukan $n$ kali secara terpisah, dan peluang suksesnya tetap sama. Pola seperti ini dimodelkan oleh **distribusi binomial**, yang memungkinkan kita menghitung peluang tiap banyaknya kesuksesan tanpa harus mendaftar seluruh ruang sampel satu per satu.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Percobaan Binomial",
      body: `Sebuah **percobaan binomial** adalah percobaan yang tersusun atas $n$ percobaan kecil (biasa disebut ulangan) dengan syarat berikut.

1. Percobaan dilakukan **$n$ kali tetap**.
2. Setiap ulangan hanya punya **dua hasil**: sukses atau gagal.
3. Peluang sukses $p$ **tetap** pada setiap ulangan.
4. Setiap ulangan **saling bebas**; hasil satu ulangan tidak memengaruhi yang lain.

Variabel acak $X$ menyatakan **banyak sukses** dari $n$ ulangan, dan kita menulis $X \\sim B(n, p)$.

**Mengapa peluangnya berkoefisien binomial.** Untuk memperoleh tepat $k$ sukses dari $n$ ulangan, hasilnya dapat tersusun dalam $\\binom{n}{k}$ cara. Setiap susunan memiliki peluang $p^{k}(1-p)^{n-k}$, karena $k$ kali sukses dan $n-k$ kali gagal. Karena susunan-susunan itu saling lepas, peluangnya dijumlahkan sehingga muncul koefisien $\\binom{n}{k}$.

**Syarat fungsi peluang tetap berlaku.** Setiap nilai $0 \\leq p^{k}(1-p)^{n-k} \\leq 1$, dan jumlah seluruh peluang $\\sum_{k=0}^{n} \\binom{n}{k}p^{k}(1-p)^{n-k} = (p + (1-p))^{n} = 1$ sesuai penjabaran binomial Newton.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Inti yang perlu diingat",
          text: "Binomial $=$ **$n$ tetap**, **dua hasil**, **peluang sukses tetap $p$**, dan **saling bebas**. Jika salah satu syarat tidak dipenuhi, distribusinya bukan binomial.",
        },
        {
          kind: "flip-cards",
          intro: "Ingat kembali istilah penting distribusi binomial.",
          cards: [
            {
              front: "Percobaan binomial",
              back: "$n$ ulangan tetap, dua hasil, saling bebas, peluang sukses tetap",
            },
            {
              front: "Parameter",
              back: "$n$ = banyak ulangan, $p$ = peluang sukses",
            },
            {
              front: "Koefisien binomial",
              back: "$\\binom{n}{k}$ = banyak cara memilih $k$ sukses dari $n$",
            },
            {
              front: "Rumus peluang",
              back: "$P(X=k)=\\binom{n}{k}p^{k}(1-p)^{n-k}$",
            },
            {
              front: "Nilai harapan",
              back: "$E(X)=np$",
            },
          ],
        },
        {
          kind: "match",
          intro: "Pasangkan istilah dengan maknanya.",
          pairs: [
            {
              left: "Sukses",
              right: "Hasil yang dihitung banyaknya, berpeluang $p$",
            },
            {
              left: "Peluang sukses $p$",
              right: "Peluang berhasil pada satu ulangan",
            },
            {
              left: "Koefisien binomial",
              right: "Banyak susunan $k$ sukses dalam $n$ ulangan",
            },
            {
              left: "Distribusi binomial",
              right: "Sebaran banyak sukses dari $n$ ulangan saling bebas",
            },
            {
              left: "Komplemen",
              right: "Peluang kumulatif dihitung lewat $1-P(X<k)$",
            },
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi: Tabel dan Diagram Distribusi Binomial",
      body: `Distribusi binomial dapat disajikan sebagai tabel atau diagram batang. Ambil contoh pelemparan **4 koin seimbang**, dengan $X$ = banyak gambar dan $p = \\tfrac12$.

| $k$ | 0 | 1 | 2 | 3 | 4 |
| :--: | :--: | :--: | :--: | :--: | :--: |
| $\\binom{4}{k}$ | 1 | 4 | 6 | 4 | 1 |
| $P(X=k)$ | $\\frac{1}{16}$ | $\\frac{4}{16}$ | $\\frac{6}{16}$ | $\\frac{4}{16}$ | $\\frac{1}{16}$ |

Jumlah seluruh peluang $\\frac{1+4+6+4+1}{16} = 1$, jadi tabel ini sah. Perhatikan bahwa koefisien $1, 4, 6, 4, 1$ adalah baris keempat **segitiga Pascal**, yang sama dengan $\\binom{4}{k}$.

Bentuk distribusi bergantung pada $p$. Bila $p = 0{,}5$ distribusinya **simetris**; bila $p > 0{,}5$ puncaknya bergeser ke kanan; bila $p < 0{,}5$ puncaknya bergeser ke kiri.`,
      blocks: [
        {
          kind: "tabs",
          items: [
            {
              label: "Simbolik",
              body: "$P(X=k) = \\binom{n}{k}p^{k}(1-p)^{n-k}$ dengan $k = 0, 1, \\ldots, n$.",
            },
            {
              label: "Tabel",
              body: "Untuk $n=4$ dan $p=\\tfrac12$: peluangnya $\\frac{1}{16}, \\frac{4}{16}, \\frac{6}{16}, \\frac{4}{16}, \\frac{1}{16}$ dan jumlahnya $1$.",
            },
            {
              label: "Grafik",
              body: "Diagram batangnya simetris untuk $p=\\tfrac12$; makin besar $n$, bentuknya makin menyerupai kurva lonceng.",
            },
          ],
        },
        {
          kind: "callout",
          variant: "tip",
          text: "Baris ke-$n$ **segitiga Pascal** memberi koefisien binomial $\\binom{n}{0}, \\binom{n}{1}, \\ldots, \\binom{n}{n}$ secara cepat, misalnya baris $n=5$ adalah $1, 5, 10, 10, 5, 1$.",
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi Distribusi Peluang",
      body: `Sebelum berlatih menghitung, amati bagaimana bentuk sebaran berubah ketika peluang tiap hasil diubah. Pada simulasi berikut, atur nilai $x$ dan peluang $P(X=x)$ tiap hasil, lalu perhatikan tinggi batang dan letak garis nilai harapan. Bandingkan pula bentuk sebaran yang simetris (misalnya peluang sama besar) dengan yang miring, sebagai gambaran mengapa parameter $p$ menentukan bentuk distribusi binomial.`,
      blocks: [
        {
          kind: "exploration",
          explorationId: "mtl-binomial-distribusi",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Pola Umum Distribusi Binomial",
      body: `Distribusi binomial lahir dari **penjabaran binomial** $(p + q)^{n}$ dengan $q = 1 - p$. Setiap suku penjabarannya adalah peluang tepat $k$ sukses:

$$(p + q)^{n} = \\sum_{k=0}^{n} \\binom{n}{k} p^{k} q^{n-k}, \\qquad q = 1 - p.$$

Karena $(p+q)^n = 1^n = 1$, jumlah seluruh peluang otomatis sama dengan $1$. Suku $\\binom{n}{k} p^{k} q^{n-k}$ menjelaskan dua hal sekaligus: **banyak cara** ($\\binom{n}{k}$) dan **peluang satu susunan** ($p^{k}q^{n-k}$).

Dari pola yang sama diturunkan besaran ringkas:

$$E(X) = np, \\qquad \\operatorname{Var}(X) = np(1-p), \\qquad \\sigma = \\sqrt{np(1-p)}.$$

Nilai harapan $np$ masuk akal: jika tiap ulangan menyumbang peluang sukses $p$, maka $n$ ulangan menyumbang rata-rata $np$ sukses. Varians $np(1-p)$ paling besar ketika $p = \\tfrac12$ (ketidakpastian terbesar) dan mengecil ketika $p$ mendekati $0$ atau $1$ (hasilnya hampir pasti).`,
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Rumus-Rumus Penting",
      body: `**Peluang tepat $k$ sukses.** Untuk $X \\sim B(n, p)$ dengan $k = 0, 1, \\ldots, n$:

$$P(X = k) = \\binom{n}{k} p^{k} (1-p)^{n-k}, \\qquad \\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}.$$

**Peluang kumulatif.** Untuk kejadian "paling banyak" atau "paling sedikit", jumlahkan peluang satu per satu atau pakai komplemen:

$$P(X \\leq a) = \\sum_{k=0}^{a} P(X=k), \\qquad P(X \\geq a) = 1 - P(X \\leq a-1).$$

**Nilai harapan, varians, dan simpangan baku.**

$$E(X) = np, \\qquad \\operatorname{Var}(X) = np(1-p), \\qquad \\sigma = \\sqrt{np(1-p)}.$$

**Tafsir.** $E(X)$ adalah rata-rata banyak sukses jangka panjang; $\\sigma$ menunjukkan seberapa jauh banyak sukses biasanya menyimpang dari rata-rata itu.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "Bedakan **tepat** dan **paling sedikit**. $P(X = 3)$ hanya satu suku, sedangkan $P(X \\geq 3) = P(X=3) + P(X=4) + \\cdots$; sering lebih cepat dihitung dengan komplemen.",
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
          intro: "Hitung peluang tepat 2 gambar dari 5 lemparan koin seimbang, satu langkah sekaligus.",
          steps: [
            {
              title: "Tentukan parameter",
              text: "Banyak ulangan $n = 5$, peluang sukses (gambar) $p = \\tfrac12$, sehingga $1-p=\\tfrac12$.",
            },
            {
              title: "Tulis rumus binomial",
              text: "$P(X=2)=\\binom{5}{2}\\left(\\tfrac12\\right)^{2}\\left(\\tfrac12\\right)^{3}$.",
            },
            {
              title: "Hitung koefisien",
              text: "$\\binom{5}{2}=\\dfrac{5!}{2!\\,3!}=10$.",
            },
            {
              title: "Hitung peluang",
              text: "$P(X=2)=10 \\cdot \\dfrac{1}{4} \\cdot \\dfrac{1}{8} = \\dfrac{10}{32} = \\dfrac{5}{16} = 0{,}3125$.",
            },
            {
              title: "Tafsirkan",
              text: "Pada percobaan panjang, sekitar $31{,}25\\%$ dari tiap 5 lemparan menghasilkan tepat 2 gambar.",
            },
          ],
        },
        {
          kind: "step-reveal",
          intro: "Sebuah dadu dilempar 4 kali. Hitung peluang muncul mata 6 paling sedikit sekali.",
          steps: [
            {
              title: "Kenali kejadian komplemen",
              text: "\"Paling sedikit sekali muncul 6\" adalah komplemen dari \"tidak muncul 6 sama sekali\", yaitu $X = 0$.",
            },
            {
              title: "Hitung peluang komplemen",
              text: "$P(X=0)=\\binom{4}{0}\\left(\\dfrac16\\right)^{0}\\left(\\dfrac56\\right)^{4}=\\left(\\dfrac56\\right)^{4}=\\dfrac{625}{1296}$.",
            },
            {
              title: "Pakai komplemen",
              text: "$P(X \\geq 1) = 1 - \\dfrac{625}{1296} = \\dfrac{671}{1296} \\approx 0{,}518$.",
            },
          ],
        },
      ],
      body: `**Contoh nilai harapan.** Sebuah mesin membuat produk dengan peluang cacat $0{,}05$. Jika diperiksa $20$ produk, maka $X \\sim B(20; 0{,}05)$ dan

$$E(X) = np = 20(0{,}05) = 1, \\qquad \\sigma = \\sqrt{np(1-p)} = \\sqrt{20(0{,}05)(0{,}95)} = \\sqrt{0{,}95} \\approx 0{,}97.$$

Jadi rata-rata ada sekitar $1$ produk cacat per $20$ produk, dengan fluktuasi tipikal sekitar $1$ produk.`,
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
      body: `Distribusi binomial dipakai luas untuk menakar peluang pada percobaan berulang.

- **Pengendalian mutu.** Pabrik memakai $X \\sim B(n, p)$ untuk menaksir banyak produk cacat dalam satu batch dan menetapkan ambang pemeriksaan.
- **Survei dan pemilu.** Banyak responden yang mendukung suatu pilihan dapat dimodelkan binomial bila sampel acak dan jawabannya dua pilihan.
- **Kesehatan.** Peluang sebuah obat berhasil pada sejumlah pasien dari $n$ pasien percobaan mengikuti pola yang sama.
- **Olahraga.** Peluang mencetak sejumlah gol dari sejumlah tendangan penalti dengan peluang sukses tetap dimodelkan binomial.

Ingat, model ini tetap **perkiraan**. Ia hanya sah bila asumsi $n$ tetap, dua hasil, peluang tetap, dan saling bebas benar-benar terpenuhi. Bila peluang berubah antaruulangan atau ulangan saling memengaruhi, distribusi binomial tidak tepat dipakai.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Mengabaikan faktor $(1-p)^{n-k}$.** Kesalahan tersering: menulis $P(X=k)=\\binom{n}{k}p^{k}$ dan lupa peluang kegagalan. Rumus lengkapnya memuat $p^{k}(1-p)^{n-k}$.

**2. Tertukar antara "tepat" dan "paling sedikit/paling banyak".** $P(X=2)$ hanya satu suku, sedangkan $P(X \\geq 2)$ menjumlahkan beberapa suku. Gunakan komplemen bila lebih singkat.

**3. Memakai binomial padahal $p$ berubah.** Bila mengambil bola **tanpa pengembalian**, peluang sukses tiap pengambilan berubah sehingga percobaan bukan binomial.

**4. Menganggap ulangan tidak bebas.** Menanyakan hasil satu ulangan karena sudah mengetahui ulangan lain dapat melanggar asumsi saling bebas.

**5. Menukar $p$ dan $1-p$.** Tetapkan dahulu dengan jelas mana yang disebut sukses, lalu jaga konsistensi $p$ dan $q = 1-p$.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Seorang siswa menghitung peluang tepat 2 gambar dari 4 lemparan koin seimbang. Klik langkah yang keliru.",
          steps: [
            "Gunakan rumus binomial: $P(X=2)=\\binom{4}{2}(0{,}5)^{2}$.",
            "$\\binom{4}{2}=6$ dan $(0{,}5)^{2}=0{,}25$.",
            "Maka $P(X=2)=6 \\times 0{,}25 = 1{,}5$.",
          ],
          wrongIndex: 0,
          explanation: "Rumus yang benar adalah $P(X=k)=\\binom{n}{k}p^{k}(1-p)^{n-k}$. Faktor $(1-p)^{n-k}=(0{,}5)^{2}$ terlewat, sehingga hasilnya membesar menjadi $1{,}5$ (mustahil karena peluang tidak boleh melebihi $1$). Seharusnya $P(X=2)=6(0{,}25)(0{,}25)=0{,}375$.",
        },
      ],
    },
    {
      id: "tantangan",
      kind: "tantangan",
      title: "Tantangan",
      body: `Rumus $E(X)=np$ biasanya diterima begitu saja. Mari kita buktikan.

Misalkan $X\\sim B(n,p)$ dengan fungsi peluang
$$P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k},\\qquad k=0,1,\\dots,n.$$

Buktikan bahwa nilai harapannya $E(X)=np$ dengan memanfaatkan identitas
$$k\\binom{n}{k}=n\\binom{n-1}{k-1}.$$`,
      blocks: [
        {
          kind: "callout",
          variant: "tip",
          title: "Petunjuk",
          text: `Tulis $E(X)=\\sum_{k=0}^{n}k\\,P(X=k)$, keluarkan faktor $p$, lalu pakai identitas yang diberikan agar penjumlahan berubah menjadi penjabaran binomial $(p+(1-p))^{n-1}$.`,
        },
        {
          kind: "details",
          summary: "Pembahasan lengkap",
          text: `Mulailah dari definisi nilai harapan:
$$E(X)=\\sum_{k=0}^{n}k\\binom{n}{k}p^k(1-p)^{n-k}.$$

Suku $k=0$ bernilai nol, sehingga penjumlahan dapat dimulai dari $k=1$. Dengan identitas $k\\binom{n}{k}=n\\binom{n-1}{k-1}$,
$$E(X)=\\sum_{k=1}^{n}n\\binom{n-1}{k-1}p^k(1-p)^{n-k}.$$

Keluarkan faktor $np$:
$$E(X)=np\\sum_{k=1}^{n}\\binom{n-1}{k-1}p^{k-1}(1-p)^{n-k}.$$

Ganti indeks $j=k-1$ (dari $0$ sampai $n-1$):
$$E(X)=np\\sum_{j=0}^{n-1}\\binom{n-1}{j}p^{j}(1-p)^{(n-1)-j}=np\\big(p+(1-p)\\big)^{n-1}=np\\cdot 1=np.$$

Terbukti.`,
        },
      ],
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Renungkan bagaimana peluang pada percobaan berulang membantumu memperkirakan hasil.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Sebutkan empat syarat percobaan binomial, lalu berikan satu contoh percobaan yang **bukan** binomial beserta alasannya.",
            "Mengapa muncul faktor $\\binom{n}{k}$ pada rumus $P(X=k)$? Apa maknanya?",
            "Kapan lebih mudah memakai komplemen untuk menghitung peluang kumulatif? Berikan contohnya.",
            "Bagaimana nilai $p$ memengaruhi bentuk distribusi binomial dan besarnya varians $np(1-p)$?",
          ],
          confidenceLabel: "Seberapa yakin kamu membedakan percobaan binomial dan bukan binomial?",
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
            "Bentuk / Rumus",
          ],
          rows: [
            [
              "Syarat binomial",
              "$n$ tetap, dua hasil, $p$ tetap, saling bebas",
            ],
            [
              "Notasi",
              "$X \\sim B(n, p)$",
            ],
            [
              "Peluang tepat $k$ sukses",
              "$P(X=k)=\\binom{n}{k}p^{k}(1-p)^{n-k}$",
            ],
            [
              "Koefisien binomial",
              "$\\binom{n}{k}=\\dfrac{n!}{k!(n-k)!}$",
            ],
            [
              "Peluang kumulatif kanan",
              "$P(X \\geq a)=1-P(X \\leq a-1)$",
            ],
            [
              "Nilai harapan",
              "$E(X)=np$",
            ],
            [
              "Varians",
              "$\\operatorname{Var}(X)=np(1-p)$",
            ],
            [
              "Simpangan baku",
              "$\\sigma=\\sqrt{np(1-p)}$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Tiket keluar.** (1) Sebutkan empat syarat percobaan binomial dan jelaskan mengapa pengambilan tanpa pengembalian bukan percobaan binomial. (2) Tuliskan rumus $P(X=k)$ serta $E(X)$ dan variansnya, lalu jelaskan makna setiap lambang. Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Distribusi Binomial** untuk latihan tambahan.`,
    },
  ],
};

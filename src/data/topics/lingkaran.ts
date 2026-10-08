import type { Topic } from '@/types/content';

export const lingkaran: Topic = {
  id: 'lingkaran',
  slug: 'lingkaran',
  title: 'Lingkaran',
  subtitle: 'Sudut, busur, juring, dan garis singgung',
  grade: 'XI',
  phase: 'F',
  element: 'geometri',
  status: 'lengkap',
  estimatedMinutes: 90,
  summary:
    'Mempelajari unsur lingkaran, hubungan sudut pusat dan sudut keliling, panjang busur, luas juring dan tembereng, serta garis singgung.',
  description:
    'Lingkaran adalah himpunan titik yang berjarak sama dari sebuah pusat. Dari sifat jarak ini lahir banyak hubungan menarik: sudut pusat dua kali sudut keliling yang menghadap busur sama, panjang busur dan luas juring yang sebanding dengan besar sudut, serta garis singgung yang selalu tegak lurus jari-jari. Topik ini menghubungkan geometri dengan pengukuran nyata, seperti merancang taman berbentuk juring atau menghitung panjang sabuk yang melilit dua roda.',
  keywords: [
    'lingkaran',
    'sudut pusat',
    'sudut keliling',
    'busur',
    'juring',
    'tembereng',
    'garis singgung',
    'tali busur',
  ],
  prerequisites: [],
  relatedTopics: ['trigonometri'],
  prerequisiteKnowledge: [
    'Teorema Pythagoras',
    'Sifat segitiga sama kaki',
    'Operasi pecahan dan bentuk akar',
  ],
  objectives: [
    { text: 'Mengidentifikasi unsur-unsur lingkaran seperti pusat, jari-jari, busur, tali busur, juring, dan tembereng.' },
    { text: 'Menggunakan hubungan sudut pusat dan sudut keliling yang menghadap busur yang sama.' },
    { text: 'Menghitung panjang busur dan luas juring.' },
    { text: 'Menghitung luas tembereng.' },
    { text: 'Menentukan panjang garis singgung lingkaran dan garis singgung persekutuan dua lingkaran.' },
  ],
  applications: ['luas-juring-taman'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat mengidentifikasi unsur-unsur lingkaran, menerapkan hubungan sudut pusat dan sudut keliling, menghitung panjang busur, luas juring, dan tembereng, serta menentukan panjang garis singgung lingkaran.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      body: `Sebuah taman berbentuk juring lingkaran berjari-jari $7$ m dengan sudut pusat $90^\\circ$. Pengelola ingin memasang rumput di seluruh area juring dan pagar pada sisi lengkungnya.

Berapa luas rumput dan berapa panjang pagar yang dibutuhkan? Bisakah kamu menghitungnya hanya dengan mengetahui jari-jari dan sudut pusat?`,
      blocks: [
        {
          kind: "prediction",
          prompt: "Taman berbentuk juring berjari-jari $7$ m dengan sudut pusat $90^\\circ$. Berapa luas rumput dan panjang pagar pada sisi lengkungnya?",
          options: [
            "Luas $38{,}5$ m² dan pagar $11$ m",
            "Luas $154$ m² dan pagar $22$ m",
            "Luas $19{,}25$ m² dan pagar $5{,}5$ m",
            "Luas $49$ m² dan pagar $14$ m",
          ],
          reveal: "Juring $90^\\circ$ adalah $\\dfrac{1}{4}$ lingkaran. Luas juring $=\\dfrac{1}{4}\\pi r^{2}=\\dfrac{1}{4}\\cdot\\dfrac{22}{7}\\cdot49=38{,}5$ m². Panjang busur $=\\dfrac{1}{4}\\cdot2\\pi r=\\dfrac{1}{4}\\cdot2\\cdot\\dfrac{22}{7}\\cdot7=11$ m. Jadi dibutuhkan **38,5 m² rumput** dan **11 m pagar**.",
          saveLabel: "Simpan dugaan",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu menguasai:

- teorema Pythagoras, misalnya $5^{2}+12^{2}=13^{2}$;
- luas segitiga $=\\dfrac{1}{2}\\times\\text{alas}\\times\\text{tinggi}$;
- sifat segitiga sama kaki: dua sudut di hadapan sisi yang sama panjang besarnya sama.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: "Lingkaran muncul pada roda, jam dinding, piringan, hingga orbit planet. Sifat-sifatnya membuat lingkaran efisien: tidak memiliki sudut, sehingga tekanan dan gerak terbagi merata. Dalam teknik, pengetahuan tentang busur, juring, dan garis singgung dipakai untuk merancang jalan melingkar, lengkungan jembatan, dan sistem transmisi sabuk.",
    },
    {
      id: "unsur",
      kind: "konsep",
      title: "Unsur-Unsur Lingkaran",
      body: `Perhatikan istilah berikut:

- **pusat** $(O)$: titik tetap yang menjadi acuan;
- **jari-jari** $(r)$: ruas garis dari pusat ke titik pada lingkaran;
- **diameter** $(d=2r)$: tali busur yang melalui pusat;
- **busur**: bagian lengkung lingkaran;
- **tali busur**: ruas garis yang menghubungkan dua titik pada lingkaran;
- **juring**: daerah yang dibatasi dua jari-jari dan satu busur;
- **tembereng**: daerah yang dibatasi tali busur dan busur;
- **apotema**: jarak terpendek dari pusat ke tali busur.

Diameter selalu $2$ kali jari-jari, sehingga $r=\\dfrac{d}{2}$.`,
      blocks: [
        {
          kind: "flip-cards",
          intro: "Balik tiap kartu untuk menguji istilah unsur lingkaran.",
          cards: [
            {
              front: "Pusat",
              back: "Titik tetap yang menjadi acuan semua titik lingkaran.",
            },
            {
              front: "Jari-jari",
              back: "Ruas garis dari pusat ke titik pada lingkaran, panjangnya $r$.",
            },
            {
              front: "Diameter",
              back: "Tali busur yang melalui pusat, panjangnya $d=2r$.",
            },
            {
              front: "Juring",
              back: "Daerah yang dibatasi dua jari-jari dan satu busur.",
            },
            {
              front: "Tembereng",
              back: "Daerah yang dibatasi tali busur dan busur.",
            },
            {
              front: "Apotema",
              back: "Jarak terpendek dari pusat ke tali busur.",
            },
          ],
        },
      ],
    },
    {
      id: "sudut",
      kind: "konsep",
      title: "Sudut Pusat dan Sudut Keliling",
      body: `**Sudut pusat** adalah sudut yang titik sudutnya di pusat lingkaran, sedangkan **sudut keliling** titik sudutnya pada lingkaran.

Ketika keduanya menghadap **busur yang sama**, berlaku:

$$\\angle AOB = 2\\times\\angle ACB,$$

dengan $O$ pusat dan $A,B,C$ pada lingkaran. Jadi sudut pusat dua kali sudut keliling.

Dua akibat penting:

1. Sudut keliling yang menghadap **diameter** selalu $90^\\circ$ (karena sudut pusatnya $180^\\circ$).
2. Sudut-sudut keliling yang menghadap **busur yang sama** besarnya sama.

Sebagai contoh, jika $\\angle AOB=80^\\circ$, maka $\\angle ACB=40^\\circ$; jika $\\angle AOB=120^\\circ$, maka $\\angle ACB=60^\\circ$.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "Hubungan $\\angle AOB=2\\angle ACB$ hanya berlaku jika kedua sudut **menghadap busur yang sama**. Jika menghadap busur berbeda, hubungan itu tidak berlaku.",
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Simbolik",
              body: "$\\angle AOB=2\\angle ACB$ untuk kedua sudut yang menghadap busur $AB$.",
            },
            {
              label: "Tabel",
              body: "Sudut pusat $80^\\circ$ memberi sudut keliling $40^\\circ$; sudut pusat $120^\\circ$ memberi sudut keliling $60^\\circ$.",
            },
            {
              label: "Kasus khusus",
              body: "Jika sudut pusat menghadap diameter, besarnya $180^\\circ$, sehingga sudut kelilingnya selalu $90^\\circ$.",
            },
          ],
        },
      ],
    },
    {
      id: "busur-juring",
      kind: "rumus",
      title: "Panjang Busur dan Luas Juring",
      body: `Bagian lingkaran sebanding dengan besar sudut pusatnya. Untuk sudut pusat $\\theta$ dan jari-jari $r$:

$$s=\\frac{\\theta}{360^\\circ}\\times 2\\pi r, \\qquad L_{\\text{juring}}=\\frac{\\theta}{360^\\circ}\\times \\pi r^{2}.$$

Sebagai contoh, untuk $r=14$ dan $\\theta=90^\\circ$ dengan $\\pi=\\dfrac{22}{7}$:

$$s=\\frac{1}{4}\\times 2\\times\\frac{22}{7}\\times14=22, \\qquad L=\\frac{1}{4}\\times\\frac{22}{7}\\times14^{2}=154.$$

Perhatikan bahwa keduanya diperoleh dari perbandingan $\\dfrac{\\theta}{360^\\circ}$.`,
    },
    {
      id: "tembereng",
      kind: "konsep",
      title: "Luas Tembereng",
      body: `Tembereng adalah daerah juring **dikurangi** segitiga yang dibentuk dua jari-jari dan tali busurnya:

$$L_{\\text{tembereng}}=L_{\\text{juring}}-L_{\\text{segitiga}}.$$

Contoh: untuk $r=14$, $\\theta=90^\\circ$, dan $\\pi=\\dfrac{22}{7}$. Luas juring $=154$ dan luas segitiga siku-siku (kaki $14$ dan $14$):

$$L_{\\text{segitiga}}=\\frac{1}{2}\\times14\\times14=98, \\qquad L_{\\text{tembereng}}=154-98=56.$$

Perhatikan bahwa tembereng selalu lebih kecil daripada juring karena sebagian daerah telah ditempati segitiga.`,
    },
    {
      id: "garis-singgung",
      kind: "rumus",
      title: "Garis Singgung Lingkaran",
      body: `Garis singgung menyentuh lingkaran pada **tepat satu titik** dan selalu **tegak lurus** terhadap jari-jari di titik singgung.

**Panjang garis singgung dari titik luar.** Jika titik $P$ berjarak $d$ dari pusat $O$ dan jari-jari lingkaran $r$, maka
$$\\ell=\\sqrt{d^{2}-r^{2}}.$$
Contoh: $d=13$ dan $r=5$ memberi $\\ell=\\sqrt{169-25}=12$.

**Garis singgung persekutuan luar** dua lingkaran berjari-jari $R$ dan $r$ dengan jarak pusat $d$:
$$\\ell_{\\text{luar}}=\\sqrt{d^{2}-(R-r)^{2}}.$$

**Garis singgung persekutuan dalam:**
$$\\ell_{\\text{dalam}}=\\sqrt{d^{2}-(R+r)^{2}}.$$

Semua rumus ini berasal dari teorema Pythagoras pada segitiga yang dibentuk garis singgung, jari-jari, dan garis pusat.`,
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi Unsur dan Sudut Lingkaran",
      body: "Geser titik pada lingkaran dan ubah besar sudut untuk melihat bagaimana sudut pusat, sudut keliling, panjang busur, dan luas juring saling berkaitan. Amati kapan hubungan sudut pusat dua kali sudut keliling tetap berlaku.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "lingkaran-eksplorasi",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Benang Merah Rumus Lingkaran",
      body: `Hampir semua rumus pada topik ini berasal dari dua gagasan sederhana. Pertama, **bagian lingkaran sebanding dengan sudut pusatnya**. Karena satu putaran penuh $360^\\circ$, setiap besaran diperoleh dengan mengalikan nilai penuh dengan pecahan $\\dfrac{\\theta}{360^\\circ}$:

$$s=\\frac{\\theta}{360^\\circ}\\cdot 2\\pi r, \\qquad L_{\\text{juring}}=\\frac{\\theta}{360^\\circ}\\cdot \\pi r^{2}.$$

Kedua, **garis singgung selalu tegak lurus jari-jari**, sehingga jari-jari, garis singgung, dan garis dari pusat ke titik luar membentuk segitiga siku-siku. Dari Pythagoras itulah muncul $\\ell=\\sqrt{d^{2}-r^{2}}$, sedangkan untuk dua lingkaran jari-jari $R$ dan $r$ cukup mengganti $r$ dengan selisih atau jumlah jari-jarinya:

$$\\ell_{\\text{luar}}=\\sqrt{d^{2}-(R-r)^{2}}, \\qquad \\ell_{\\text{dalam}}=\\sqrt{d^{2}-(R+r)^{2}}.$$`,
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      body: `**Contoh 1.** Pada lingkaran berpusat $O$, $\\angle AOB=80^\\circ$ dan titik $C$ berada pada lingkaran sehingga $A,B,C$ pada busur yang sama. Tentukan $\\angle ACB$.

*Penyelesaian.* Karena sudut keliling setengah sudut pusat yang menghadap busur sama,
$$\\angle ACB=\\frac{1}{2}\\times80^\\circ=40^\\circ.$$

**Contoh 2.** Tentukan panjang busur dan luas juring lingkaran berjari-jari $14$ cm dengan sudut pusat $90^\\circ$ dan $\\pi=\\dfrac{22}{7}$.

*Penyelesaian.*
$$s=\\frac{90}{360}\\times2\\times\\frac{22}{7}\\times14=22 \\text{ cm}, \\qquad L=\\frac{90}{360}\\times\\frac{22}{7}\\times14^{2}=154 \\text{ cm}^{2}.$$

**Contoh 3.** Titik $P$ berada $13$ cm dari pusat lingkaran berjari-jari $5$ cm. Tentukan panjang garis singgung dari $P$.

*Penyelesaian.*
$$\\ell=\\sqrt{13^{2}-5^{2}}=\\sqrt{169-25}=\\sqrt{144}=12 \\text{ cm}.$$`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Mari hitung panjang busur dan luas juring untuk $r=14$ cm dan sudut pusat $90^\\circ$, satu langkah sekaligus.",
          steps: [
            {
              title: "Tentukan pecahan sudut",
              text: "Sudut $90^\\circ$ adalah $\\dfrac{90}{360}=\\dfrac{1}{4}$ dari satu putaran penuh.",
            },
            {
              title: "Panjang busur",
              text: "$s=\\dfrac{1}{4}\\times2\\pi r=\\dfrac{1}{4}\\times2\\times\\dfrac{22}{7}\\times14=22$ cm.",
            },
            {
              title: "Luas juring",
              text: "$L=\\dfrac{1}{4}\\times\\pi r^{2}=\\dfrac{1}{4}\\times\\dfrac{22}{7}\\times196=154$ cm².",
            },
            {
              title: "Tafsirkan",
              text: "Juring $90^\\circ$ dari lingkaran berjari-jari $14$ cm memiliki busur $22$ cm dan luas $154$ cm².",
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
      body: `Busur dan juring dipakai merancang taman, kolam, dan arena; garis singgung persekutuan dipakai menghitung panjang **sabuk** atau rantai yang melilit dua roda mesin. Ketika dua roda berjari-jari berbeda dihubungkan sabuk, panjang sabuk merupakan gabungan dua garis singgung persekutuan luar dan dua busur.

Untuk latihan, lihat [Merancang Taman Berbentuk Juring](/aplikasi/luas-juring-taman).`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Memakai diameter sebagai jari-jari.** Jika yang diketahui diameter, bagi dahulu dengan $2$ sebelum memasukkannya ke rumus $\\pi r^{2}$.

**2. Menganggap sudut keliling selalu $\\dfrac{1}{2}$ sudut pusat untuk busur berbeda.** Hubungan itu hanya sah jika kedua sudut menghadap **busur yang sama**.

**3. Lupa bahwa sudut keliling menghadap diameter $90^\\circ$.** Ini kesalahan klasik yang menutup jalan menuju teorema Pythagoras.

**4. Menyamakan tembereng dengan juring.** Tembereng $=$ juring $-$ segitiga. Untuk sudut $90^\\circ$ dan $r=14$, juringnya $154$ tetapi temberengnya hanya $56$.

**5. Salah memasukkan tanda kurung pada garis singgung persekutuan.** Luar memakai $(R-r)^{2}$, dalam memakai $(R+r)^{2}$.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Seorang siswa menghitung luas lingkaran berdiameter $14$ cm dengan $\\pi=\\dfrac{22}{7}$. Klik langkah yang keliru.",
          steps: [
            "Diketahui diameter $d=14$ cm.",
            "Jari-jari adalah $r=\\dfrac{d}{2}=\\dfrac{14}{2}=7$ cm.",
            "Luas $=\\pi r^{2}=\\dfrac{22}{7}\\times14^{2}=\\dfrac{22}{7}\\times196=616$ cm².",
          ],
          wrongIndex: 2,
          explanation: "Langkah terakhir memakai $14$ sebagai jari-jari, padahal $r=7$. Seharusnya luas $=\\dfrac{22}{7}\\times7^{2}=\\dfrac{22}{7}\\times49=154$ cm².",
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
            "Bagaimana kamu membedakan soal yang memerlukan sudut pusat dan sudut keliling?",
            "Kapan kamu memakai $\\pi=\\dfrac{22}{7}$ dan kapan $3{,}14$? Apa pertimbanganmu?",
            "Mengapa panjang busur dan luas juring sebanding dengan besar sudut pusatnya? Jelaskan dengan perbandingan pecahan.",
            "Sebutkan satu benda nyata yang bentuknya melibatkan garis singgung dua lingkaran.",
          ],
          confidenceLabel: "Seberapa yakin kamu menghitung busur, juring, dan garis singgung?",
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
              "Sudut pusat dan keliling",
              "$\\angle AOB=2\\,\\angle ACB$",
            ],
            [
              "Panjang busur",
              "$s=\\dfrac{\\theta}{360^\\circ}\\,2\\pi r$",
            ],
            [
              "Luas juring",
              "$L=\\dfrac{\\theta}{360^\\circ}\\,\\pi r^{2}$",
            ],
            [
              "Luas tembereng",
              "$L_{\\text{juring}}-L_{\\text{segitiga}}$",
            ],
            [
              "Garis singgung dari titik luar",
              "$\\ell=\\sqrt{d^{2}-r^{2}}$",
            ],
            [
              "Singgung persekutuan luar",
              "$\\sqrt{d^{2}-(R-r)^{2}}$",
            ],
            [
              "Singgung persekutuan dalam",
              "$\\sqrt{d^{2}-(R+r)^{2}}$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Tiket keluar.** (1) Kapan sudut pusat sama dengan dua kali sudut keliling, dan mengapa syarat busur yang sama penting? (2) Dari mana asal rumus panjang garis singgung dari sebuah titik di luar lingkaran? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Lingkaran** untuk latihan tambahan.`,
    },
  ],
};

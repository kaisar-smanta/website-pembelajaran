import type { Topic } from '@/types/content';

export const dataBivariat: Topic = {
  id: 'data-bivariat',
  slug: 'data-bivariat',
  title: 'Data Bivariat',
  subtitle: 'Membaca hubungan dua variabel lewat diagram pencar',
  grade: 'XI',
  phase: 'F',
  element: 'data-peluang',
  featured: true,
  status: 'lengkap',
  estimatedMinutes: 80,
  summary:
    'Menyajikan dua variabel kuantitatif pada diagram pencar dan menafsirkan pola, tren, serta kekuatan hubungannya secara kritis.',
  description:
    'Ketika kita mengamati dua hal sekaligus — misalnya lama belajar dan nilai ujian — muncul pertanyaan apakah keduanya berkaitan. Diagram pencar (scatter plot) menampilkan setiap pasangan data sebagai satu titik, sehingga pola hubungan terlihat secara visual: naik, turun, melengkung, atau tidak berpola. Topik ini melatih membaca arah dan kekuatan hubungan serta menyadari keterbatasan diagram pencar, termasuk bahaya menyimpulkan sebab-akibat dari korelasi semata.',
  keywords: [
    'data bivariat',
    'diagram pencar',
    'scatter plot',
    'korelasi',
    'tren',
    'hubungan positif',
    'hubungan negatif',
  ],
  prerequisites: ['analisis-distribusi-data'],
  relatedTopics: ['regresi', 'asosiasi-kausalitas'],
  prerequisiteKnowledge: [
    'Membaca dan menyajikan data tunggal',
    'Konsep variabel bebas dan variabel terikat',
    'Membaca grafik pada bidang koordinat',
  ],
  objectives: [
    { text: 'Membedakan variabel bebas dan variabel terikat pada data bivariat.' },
    { text: 'Menyajikan data bivariat dalam diagram pencar.' },
    { text: 'Menafsirkan arah pola hubungan: positif, negatif, nonlinear, atau tidak ada.' },
    { text: 'Menilai kekuatan hubungan secara visual dan menyebut korelasinya.' },
    { text: 'Menyadari keterbatasan diagram pencar dan membedakan korelasi dari sebab-akibat.' },
  ],
  explorations: ['regresi-sim'],
  applications: ['regresi-nilai-ujian', 'survei-statistik'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menyajikan data dua variabel pada diagram pencar, mengenali arah dan kekuatan polanya, serta menafsirkan hubungan tersebut secara hati-hati tanpa melompat ke kesimpulan sebab-akibat.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      body: `Seorang siswa percaya bahwa "semakin lama belajar, semakin tinggi nilai". Untuk mengujinya, ia mencatat **lama belajar per minggu** dan **nilai ujian** delapan temannya.

Data apa yang sebaiknya ia kumpulkan, dan bagaimana cara menampilkannya agar pola hubungan terlihat dalam sekali pandang?`,
      blocks: [
        {
          kind: "prediction",
          prompt: "Cara apa yang paling tepat menampilkan pasangan data dua variabel agar pola hubungan terlihat dalam sekali pandang?",
          options: [
            "Diagram batang",
            "Diagram pencar",
            "Diagram lingkaran",
            "Tabel frekuensi",
          ],
          reveal: "Ia perlu mengumpulkan **pasangan** data (lama belajar, nilai) untuk setiap orang, lalu menampilkan setiap pasangan sebagai satu titik pada bidang koordinat. Penyajian inilah yang disebut **diagram pencar**. Dari sebaran titiknya kita dapat melihat arah dan kekuatan hubungan.",
          saveLabel: "Simpan dugaan",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu dapat:

- membaca titik pada bidang koordinat, misalnya $(3,5)$;
- membedakan **variabel bebas** (yang diatur atau dianggap penyebab) dan **variabel terikat** (yang diukur sebagai akibat);
- mengenali pola naik dan turun pada grafik.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: "Banyak keputusan melibatkan dua variabel sekaligus: apakah harga berkaitan dengan permintaan? Apakah jumlah pupuk berkaitan dengan hasil panen? Apakah suhu berkaitan dengan penjualan es? Diagram pencar adalah langkah pertama dan paling jujur untuk melihat apakah ada kaitan, sebelum rumus regresi dipakai untuk memodelkannya.",
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Variabel Bivariat",
      body: `**Data bivariat** adalah data yang memuat **dua variabel kuantitatif** untuk setiap objek yang sama. Setiap pengamatan berupa pasangan terurut $(x, y)$.

Kita biasanya menyebut:

- $x$ sebagai **variabel bebas** (variabel penjelas), dan
- $y$ sebagai **variabel terikat** (variabel respons).

Sebagai contoh, untuk data lama belajar dan nilai ujian, $x$ adalah lama belajar (jam) dan $y$ adalah nilai. Perhatikan bahwa setiap orang menyumbang **satu titik**, bukan dua grafik terpisah.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Inti yang perlu diingat",
          text: "Pada data bivariat, satu titik merepresentasikan **satu objek** dengan dua nilai sekaligus. Menempatkan $x$ dan $y$ dengan benar penting untuk menafsirkan arah hubungan.",
        },
        {
          kind: "match",
          intro: "Pasangkan istilah dengan maknanya.",
          pairs: [
            {
              left: "Data bivariat",
              right: "Pasangan dua variabel kuantitatif untuk objek yang sama",
            },
            {
              left: "Variabel bebas",
              right: "Variabel penjelas $x$ yang diatur atau diduga sebagai penyebab",
            },
            {
              left: "Variabel terikat",
              right: "Variabel respons $y$ yang diukur sebagai akibat",
            },
            {
              left: "Diagram pencar",
              right: "Setiap pasangan $(x,y)$ digambar sebagai satu titik",
            },
            {
              left: "Korelasi",
              right: "Ukuran arah dan kekuatan hubungan linear, diringkas oleh $r$",
            },
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Diagram Pencar",
      body: `Diagram pencar menempatkan setiap pasangan $(x, y)$ sebagai satu titik. Sumbu mendatar menunjukkan variabel bebas, sumbu tegak menunjukkan variabel terikat.

Berikut data lama belajar per minggu (jam) dan nilai ujian delapan siswa:

| Lama belajar $x$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ |
|---|---|---|---|---|---|---|---|---|
| Nilai $y$ | $2$ | $4$ | $5$ | $4$ | $7$ | $8$ | $9$ | $11$ |

Saat titik-titik di atas digambar pada bidang koordinat, tampak kecenderungan **menaik dari kiri bawah ke kanan atas**: siswa yang belajar lebih lama cenderung memperoleh nilai lebih tinggi.`,
      blocks: [
        {
          kind: "table",
          caption: "Cara membaca diagram pencar",
          headers: [
            "Yang diamati",
            "Pertanyaan",
            "Contoh jawaban",
          ],
          rows: [
            [
              "Arah",
              "Naik, turun, atau melengkung?",
              "Menaik (positif)",
            ],
            [
              "Bentuk",
              "Lurus atau melengkung?",
              "Cenderung lurus",
            ],
            [
              "Kekuatan",
              "Titik mengumpul atau menyebar?",
              "Cukup rapat (kuat)",
            ],
            [
              "Pencilan",
              "Ada titik yang jauh menyimpang?",
              "Tidak tampak mencolok",
            ],
          ],
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Tabel",
              body: "Data lama belajar $x$ dan nilai $y$ disusun berpasangan: $(1,2),(2,4),(3,5),\\dots,(8,11)$.",
            },
            {
              label: "Diagram",
              body: "Titik-titik digambar pada bidang koordinat; sebaran menanjak dari kiri bawah ke kanan atas.",
            },
            {
              label: "Tafsiran",
              body: "Arah menaik (positif), bentuk cenderung lurus, kekuatan cukup rapat, dan tidak tampak pencilan mencolok.",
            },
          ],
        },
      ],
    },
    {
      id: "pola",
      kind: "konsep",
      title: "Pola Hubungan",
      body: `Pola hubungan dua variabel secara umum terbagi menjadi beberapa jenis:

- **Positif (searah).** Ketika $x$ bertambah, $y$ cenderung bertambah. Titik-titik menanjak ke kanan.
- **Negatif (berlawanan arah).** Ketika $x$ bertambah, $y$ cenderung berkurang. Titik-titik menurun ke kanan.
- **Nonlinear.** Pola mengikuti lengkung, misalnya menaik lalu mendatar, atau membentuk parabola.
- **Tidak ada hubungan.** Titik-titik menyebar tanpa arah yang jelas.

Menentukan jenis pola adalah langkah pertama sebelum menghitung ukuran hubungan secara numerik.`,
      blocks: [
        {
          kind: "callout",
          variant: "tip",
          title: "Cara mengingat arah",
          text: "Bayangkan berjalan dari kiri ke kanan: jika titik-titik **menanjak**, hubungan positif; jika **menurun**, hubungan negatif.",
        },
      ],
    },
    {
      id: "kekuatan",
      kind: "konsep",
      title: "Tren dan Kekuatan Hubungan",
      body: `Setelah arah ditentukan, kita menilai **kekuatan** hubungan:

- **Kuat**, jika titik-titik rapat mengikuti satu pola yang jelas;
- **Lemah**, jika titik-titik menyebar lebar di sekitar pola meskipun arahnya masih tampak.

Kekuatan hubungan linear diringkas oleh **koefisien korelasi** $r$ dengan $-1 \\le r \\le 1$:

- $r$ dekat $1$: hubungan linear positif kuat;
- $r$ dekat $-1$: hubungan linear negatif kuat;
- $r$ dekat $0$: hubungan linear lemah atau tidak ada.

Untuk data lama belajar dan nilai di atas, koefisien korelasinya sekitar $r \\approx 0{,}97$, menandakan hubungan linear positif yang **sangat kuat**. Namun ingat: nilai $r$ hanya mengukur hubungan **linear**.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Penting",
          text: "Korelasi yang kuat **bukan** bukti sebab-akibat. Bisa jadi ada variabel ketiga (perantara) yang memengaruhi keduanya, atau hubungannya kebetulan.",
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi",
      body: "Gunakan alat berikut untuk menambah titik data pada diagram pencar dan mengamati bagaimana garis tren serta koefisien yang dihasilkan berubah. Mulailah dengan beberapa titik yang membentuk pola jelas, lalu tambahkan pencilan dan perhatikan efeknya.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "data-bivariat-korelasi",
        },
      ],
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      body: `**Contoh 1.** Sebuah toko mengamati harga sebuah produk $(x$, dalam ribuan rupiah$)$ dan banyak penjualan $(y$, dalam unit$)$. Setelah titik-titik digambar, terlihat pola menurun dari kiri atas ke kanan bawah. Tentukan jenis hubungannya.

*Penyelesaian.* Karena $y$ cenderung berkurang saat $x$ bertambah, hubungannya **negatif**. Ini masuk akal: harga naik membuat penjualan menurun.

**Contoh 2.** Dua pasang data menghasilkan diagram pencar berikut: himpunan A titiknya rapat membentuk garis menanjak, sedangkan himpunan B titiknya menyebar tanpa arah jelas. Bandingkan kekuatan hubungan keduanya.

*Penyelesaian.* Himpunan A memiliki hubungan positif **kuat** karena titik-titik rapat; himpunan B tidak menunjukkan hubungan yang berarti.

**Contoh 3.** Pada data lama belajar dan nilai, apakah wajar memperkirakan nilai siswa yang belajar $20$ jam per minggu?

*Penyelesaian.* Tidak wajar. Data hanya mencakup $x$ dari $1$ hingga $8$ jam, sedangkan nilai maksimumnya $11$. Memperkirakan di luar rentang data disebut **ekstrapolasi** dan sangat berisiko: pola linear belum tentu berlaku pada jam belajar yang jauh lebih banyak.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Mari menilai apakah wajar memperkirakan nilai siswa yang belajar $20$ jam per minggu.",
          steps: [
            {
              title: "Periksa rentang data",
              text: "Data lama belajar hanya mencakup $x$ dari $1$ sampai $8$ jam.",
            },
            {
              title: "Bandingkan dengan pertanyaan",
              text: "$20$ jam berada jauh di luar rentang data, sehingga perkiraan itu termasuk ekstrapolasi.",
            },
            {
              title: "Periksa kewajaran nilai",
              text: "Nilai terbesar pada data hanya $11$, sedangkan prediksi untuk $20$ jam bisa melampaui skala nilai yang masuk akal.",
            },
            {
              title: "Simpulkan",
              text: "Perkiraan itu tidak wajar; prediksi paling aman berada di dalam rentang data ($1$ sampai $8$ jam).",
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
      body: `1. Data bivariat memiliki dua variabel. Sebutkan mana yang lazim menjadi variabel bebas: (a) jumlah pupuk dan hasil panen; (b) lama menabung dan saldo tabungan.

2. Deskripsikan arah hubungan jika titik-titik diagram pencar menanjak dari kiri bawah ke kanan atas.

3. Deskripsikan arah hubungan antara suhu udara dan penjualan jaket tebal.

4. Sebuah diagram pencar berbentuk lengkung menaik lalu mendatar. Termasuk pola apa?

5. Jika titik-titik menyebar tanpa arah, apa yang dapat disimpulkan mengenai hubungan kedua variabel?`,
      blocks: [
        {
          kind: "details",
          summary: "Lihat kunci dan pembahasan",
          text: `1. (a) jumlah pupuk; (b) lama menabung.
2. Hubungan **positif**: ketika $x$ bertambah, $y$ cenderung bertambah.
3. Hubungan **negatif**: makin tinggi suhu, makin sedikit orang membeli jaket tebal.
4. Pola **nonlinear**.
5. Tidak ada hubungan linear yang jelas antara kedua variabel.`,
        },
      ],
    },
    {
      id: "latihan-cakap",
      kind: "latihan-cakap",
      title: "Latihan Cakap",
      level: "cakap",
      body: `1. Perhatikan data berikut.

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|
| $y$ | $10$ | $8$ | $7$ | $4$ | $3$ |

Tentukan arah hubungan dan perkirakan kekuatannya.

2. Untuk data $x: 1,2,3,4,5$ dan $y: 1,4,9,16,25$, jelaskan mengapa hubungannya **bukan** linear meskipun $y$ selalu naik.

3. Sebuah penelitian menemukan korelasi positif kuat antara jumlah kembang api yang dinyalakan dan penjualan es krim. Apakah ini berarti kembang api menyebabkan penjualan es krim naik? Jelaskan.

4. Dua variabel memiliki $r=-0{,}85$. Tafsirkan arah dan kekuatannya.`,
      blocks: [
        {
          kind: "details",
          summary: "Lihat kunci dan pembahasan",
          text: `1. Arah **negatif**: setiap kenaikan $x$ diikuti penurunan $y$ yang cukup teratur, sehingga hubungannya cenderung kuat.
2. Nilai $y$ mengikuti $y=x^{2}$, yang merupakan **lengkung** (parabola), bukan garis lurus. Kenaikan $y$ makin cepat, sehingga hubungannya nonlinear.
3. Tidak. Keduanya dipengaruhi faktor ketiga, yaitu **cuaca panas**: saat panas orang menyalakan kembang api sekaligus membeli es krim. Ini contoh korelasi tanpa sebab-akibat.
4. $r=-0{,}85$ berarti hubungan linear **negatif yang kuat**: ketika satu variabel naik, variabel lain cenderung turun secara cukup konsisten.`,
        },
      ],
    },
    {
      id: "latihan-mahir",
      kind: "latihan-mahir",
      title: "Latihan Mahir",
      level: "mahir",
      body: `1. Pada data lama belajar dan nilai (rentang $x=1$ sampai $8$), seseorang menyimpulkan bahwa belajar $30$ jam menjamin nilai $35$ pada skala $0$--$10$. Jelaskan dua kesalahan penalaran dalam kesimpulan itu.

2. Sebuah diagram pencar menunjukkan hubungan positif kuat antara banyak sepatu yang dijual dan banyak payung yang terjual di sebuah mal. Usulkan satu variabel perantara yang masuk akal dan jelaskan.

3. Dua himpunan data sama-sama memiliki $r \\approx 0{,}6$. Himpunan pertama mengikuti garis lurus dengan beberapa pencilan jauh; himpunan kedua melengkung. Mengapa satu nilai $r$ saja tidak cukup untuk menjelaskan keduanya?

4. Rancang langkah-langkah yang tepat untuk menyelidiki apakah "waktu belajar" benar-benar memengaruhi "nilai", bukan sekadar berkorelasi.`,
      blocks: [
        {
          kind: "details",
          summary: "Lihat pembahasan",
          text: `1. Pertama, ini **ekstrapolasi** jauh di luar rentang data ($x$ hanya sampai $8$) sehingga model linear belum tentu berlaku. Kedua, nilai $35$ **melampaui skala** yang mungkin ($0$--$10$), jadi tidak bermakna.
2. Banyak pengunjung mal (misalnya hari hujan atau musim liburan). Peningkatan pengunjung menaikkan penjualan sepatu **dan** payung sekaligus, tanpa salah satu menyebabkan yang lain.
3. Koefisien $r$ hanya mengukur seberapa dekat titik dengan **garis lurus**. Pencilan jauh dapat menekan $r$ meski bagian utama data sangat linear, sedangkan data melengkung dapat menghasilkan $r$ sedang meski polanya teratur. Bentuk diagram pencar tetap perlu dilihat.
4. Bandingkan kelompok dengan waktu belajar berbeda, jaga faktor lain tetap (kualitas materi, kehadiran, latihan soal), dan bila memungkinkan gunakan **percobaan terkontrol** atau perlakuan acak, bukan sekadar pengamatan korelasi.`,
        },
      ],
    },
    {
      id: "dunia-nyata",
      kind: "dunia-nyata",
      title: "Penerapan di Dunia Nyata",
      body: `Diagram pencar dipakai di bidang kesehatan (dosis obat dan tekanan darah), ekonomi (pendapatan dan konsumsi), serta olahraga (jumlah latihan dan performa). Ia menjadi jembatan menuju **regresi**, yaitu membuat garis atau kurva terbaik yang merangkum tren data.

Untuk latihan, lihat [Apakah Waktu Belajar Berkaitan dengan Nilai?](/aplikasi/regresi-nilai-ujian) dan [Membaca Hasil Survei dengan Kritis](/aplikasi/survei-statistik).`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menyimpulkan sebab-akibat dari korelasi.** Dua variabel yang berkorelasi belum tentu satu menyebabkan yang lain. Selalu tanyakan kemungkinan variabel perantara.

**2. Menukar sumbu $x$ dan $y$.** Menempatkan variabel terikat di sumbu mendatar dapat membuat arah hubungan tampak berbeda dan menyesatkan penafsiran.

**3. Mengabaikan bentuk lengkung.** Koefisien korelasi mendekati $0$ tidak selalu berarti "tidak ada hubungan"; bisa jadi hubungannya **nonlinear** yang kuat.

**4. Mempercayai ekstrapolasi jauh.** Memperkirakan nilai di luar rentang data berbahaya karena tren bisa berubah.

**5. Menganggap satu pencilan sebagai pola.** Satu titik menyimpang dapat menarik garis tren. Periksa apakah titik itu sah atau kesalahan pencatatan.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Seorang siswa menafsirkan diagram pencar antara penjualan es krim dan angka kejahatan. Klik langkah yang keliru.",
          steps: [
            "Kedua variabel naik-turun bersama, jadi di antara keduanya ada korelasi positif.",
            "Karena berkorelasi, membeli es krim menyebabkan orang berbuat kejahatan.",
            "Maka untuk menekan kejahatan, cukup kurangi penjualan es krim.",
          ],
          wrongIndex: 1,
          explanation: "Korelasi tidak menyiratkan sebab-akibat. Kedua variabel dipengaruhi faktor ketiga, yaitu suhu panas, sehingga hubungannya semu.",
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
            "Apa perbedaan antara \"berkorelasi\" dan \"menyebabkan\"?",
            "Ketika melihat diagram pencar, informasi apa yang paling dulu kamu perhatikan?",
            "Sebutkan satu pasangan variabel di sekitarmu yang mungkin berkorelasi karena faktor ketiga, bukan karena sebab-akibat langsung.",
          ],
          confidenceLabel: "Seberapa yakin kamu menafsirkan arah, kekuatan, dan pencilan pada diagram pencar?",
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
            "Penjelasan",
          ],
          rows: [
            [
              "Data bivariat",
              "Pasangan $(x,y)$ dari dua variabel kuantitatif",
            ],
            [
              "Diagram pencar",
              "Setiap pasangan digambar sebagai satu titik",
            ],
            [
              "Hubungan positif",
              "$y$ cenderung naik saat $x$ naik",
            ],
            [
              "Hubungan negatif",
              "$y$ cenderung turun saat $x$ naik",
            ],
            [
              "Nonlinear",
              "Pola membentuk lengkung",
            ],
            [
              "Kekuatan",
              "Kerapatan titik terhadap pola; diringkas oleh $r$",
            ],
            [
              "Peringatan",
              "Korelasi $\\neq$ sebab-akibat",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `Kerjakan kuis topik ini untuk memeriksa pemahamanmu. Buka halaman [Latihan & Asesmen](/latihan) lalu pilih topik **Data Bivariat**.
`,
    },
  ],
};

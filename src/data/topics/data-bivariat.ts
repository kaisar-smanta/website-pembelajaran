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
      id: "generalisasi",
      kind: "generalisasi",
      title: "Membaca Hubungan Secara Umum",
      body: `Dari contoh-contoh di atas, cara membaca data bivariat selalu mengikuti urutan yang sama: tentukan dulu **arah** (menanjak, menurun, atau tanpa arah), lalu **kekuatan** (rapat atau menyebar), baru diringkas dengan bilangan. Koefisien korelasi $r$ menempatkan kekuatan itu pada skala tetap:

$$-1 \\le r \\le 1.$$

Tanda $r$ menyatakan arah, sedangkan besarnya menyatakan keeratan hubungan linear. Karena $r$ hanya mengukur kedekatan titik pada sebuah garis lurus, pola melengkung yang jelas pun dapat menghasilkan $r$ yang kecil.

Setiap kesimpulan tetap dibatasi rentang data. Pola yang teramati pada $x$ dari $1$ sampai $8$ belum tentu berlaku di luar rentang itu.`,
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
      body: "Renungkan bagaimana hubungan dua variabel membantumu menafsirkan data berpasangan.",
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
      body: `**Tiket keluar.** (1) Apa perbedaan antara arah dan kekuatan hubungan pada diagram pencar? (2) Mengapa nilai $r$ tidak cukup untuk menyimpulkan sebab-akibat? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Data Bivariat** untuk latihan tambahan.`,
    },
  ],
};

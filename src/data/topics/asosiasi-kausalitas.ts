import type { Topic } from '@/types/content';

export const asosiasiKausalitas: Topic = {
  id: 'asosiasi-kausalitas',
  slug: 'asosiasi-kausalitas',
  title: 'Asosiasi dan Kausalitas',
  subtitle: 'Ketika dua hal bergerak bersama belum tentu yang satu menyebabkan yang lain',
  grade: 'XII',
  phase: 'F',
  element: 'data-peluang',
  featured: true,
  status: 'lengkap',
  estimatedMinutes: 70,
  summary:
    'Membedakan asosiasi (korelasi) dari kausalitas, mengenali variabel perancu dan korelasi semu, serta menyimpulkan hubungan antar-variabel secara hati-hati.',
  description:
    'Dua variabel yang bergerak bersama belum tentu memiliki hubungan sebab-akibat. Topik ini melatih penalaran kritis: membedakan asosiasi dari kausalitas, mengenali variabel perancu yang menciptakan hubungan semu, memahami perbedaan studi observasional dengan eksperimen terkontrol, serta merumuskan kesimpulan yang jujur dan tidak berlebihan dari data.',
  keywords: [
    'asosiasi',
    'kausalitas',
    'variabel perancu',
    'korelasi semu',
    'studi observasional',
    'eksperimen',
    'sebab-akibat',
  ],
  prerequisites: ['regresi'],
  relatedTopics: ['regresi', 'data-bivariat'],
  prerequisiteKnowledge: [
    'Membaca diagram pencar dan arah hubungan dua variabel',
    'Memahami makna koefisien korelasi $r$',
    'Berpikir kritis terhadap klaim berbasis data di media',
  ],
  objectives: [
    { text: 'Membedakan asosiasi (korelasi) dari hubungan sebab-akibat (kausalitas).' },
    { text: 'Mengidentifikasi variabel perancu yang menjelaskan korelasi semu.' },
    { text: 'Membandingkan kekuatan bukti dari studi observasional dan eksperimen terkontrol.' },
    { text: 'Menyimpulkan hubungan antar-variabel dengan hati-hati dan tanpa berlebihan.' },
  ],
  applications: ['korelasi-sebab-akibat'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat membedakan asosiasi dari kausalitas, mengidentifikasi variabel perancu dan korelasi semu, membedakan kekuatan bukti studi observasional dan eksperimen, serta menyusun kesimpulan yang hati-hati dari data.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      blocks: [
        {
          kind: "prediction",
          prompt: `Seorang peneliti menemukan bahwa **penjualan es krim** dan **angka kejahatan** di sebuah kota naik-turun bersama sepanjang tahun. Korelasinya cukup kuat.

- Apakah membeli es krim membuat orang cenderung berbuat kejahatan?
- Apakah kejahatan mendorong orang membeli es krim?
- Adakah penjelasan lain yang lebih masuk akal?

Sebelum menuduh es krim sebagai penyebab, pikirkan apa yang sama-sama berubah pada musim tertentu.`,
          reveal: "Penjelasan paling wajar bukanlah sebab-akibat langsung, melainkan **variabel ketiga**: suhu udara. Saat cuaca panas, orang lebih banyak membeli es krim **dan** lebih banyak beraktivitas di luar rumah sehingga peluang kejahatan naik. Suhu adalah **variabel perancu** yang membuat dua hal tampak berkaitan padahal tidak saling menyebabkan.",
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu menguasai:

- membaca arah dan kekuatan hubungan dari diagram pencar;
- menafsirkan koefisien korelasi $r$: positif, negatif, kuat, lemah;
- membedakan **dua variabel** yang diamati dengan **faktor lain** yang mungkin ikut berperan.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Setiap hari kita disuguhi klaim berbasis data: "minuman manis meningkatkan risiko penyakit", "siswa yang sarapan nilainya lebih tinggi", "pengguna media sosial lebih mudah cemas". Sebagian klaim didukung bukti kuat, sebagian hanya **asosiasi** yang dibungkus seolah-olah sebab-akibat.

Kemampuan membedakan keduanya adalah keterampilan berpikir kritis yang sangat berharga, sebab keputusan kesehatan, kebijakan, dan keuangan sering diambil berdasarkan klaim semacam itu.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Asosiasi vs Kausalitas",
      body: `**Asosiasi** (korelasi) berarti dua variabel cenderung berubah bersama: ketika $x$ naik, $y$ cenderung naik (asosiasi positif) atau turun (asosiasi negatif). Ini adalah pernyataan **statistik** tentang pola data.

**Kausalitas** berarti perubahan pada satu variabel **menyebabkan** perubahan pada variabel lain. Ini adalah pernyataan tentang **mekanisme**, bukan sekadar pola.

Asosiasi adalah **syarat perlu** tetapi **bukan syarat cukup** untuk kausalitas. Artinya:

- jika $A$ menyebabkan $B$, biasanya ada asosiasi di antara keduanya;
- tetapi adanya asosiasi **tidak otomatis** berarti ada kausalitas.

Semboyan klasiknya: **"korelasi tidak menyiratkan kausalitas"**.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Inti yang perlu diingat",
          text: "Data hanya dapat menunjukkan **bahwa** dua hal bergerak bersama. Menjawab **mengapa** memerlukan penalaran tambahan: variabel perancu, urutan waktu, dan eksperimen.",
        },
        {
          kind: "flip-cards",
          intro: "Bedakan asosiasi dari sebab-akibat.",
          cards: [
            {
              front: "Asosiasi",
              back: "Kecenderungan dua variabel berubah bersama",
            },
            {
              front: "Kausalitas",
              back: "Satu variabel benar-benar menyebabkan perubahan variabel lain",
            },
            {
              front: "Variabel perancu",
              back: "Faktor tersembunyi yang dapat menjelaskan asosiasi",
            },
            {
              front: "Eksperimen",
              back: "Menguji sebab-akibat dengan mengendalikan variabel",
            },
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi: Ciri Asosiasi dan Kausalitas",
      blocks: [
        {
          kind: "table",
          caption: "Membedakan dua jenis klaim",
          headers: [
            "Aspek",
            "Asosiasi",
            "Kausalitas",
          ],
          rows: [
            [
              "Pernyataan",
              "$x$ dan $y$ berubah bersama",
              "$x$ menyebabkan $y$",
            ],
            [
              "Jenis bukti",
              "statistik (diagram pencar, $r$)",
              "statistik + mekanisme + waktu",
            ],
            [
              "Contoh",
              "es krim dan angka kejahatan",
              "merokok dan kanker paru",
            ],
            [
              "Bahaya",
              "diberi label sebab-akibat",
              "perlu bukti kuat, bukan dugaan",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "tip",
          text: "Ubah klaim menjadi pertanyaan: \"Apa buktinya bahwa $x$ menyebabkan $y$, dan bukan sekadar keduanya dipengaruhi faktor yang sama?\"",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Menyimpulkan dengan Hati-Hati",
      body: `Bila menemukan asosiasi kuat, ujilah beberapa pertanyaan berikut sebelum menyimpulkan kausalitas.

1. **Urutan waktu.** Apakah dugaan penyebab benar-benar terjadi sebelum akibat? Bila tidak, mungkin ada **kausalitas terbalik** (reverse causation).
2. **Variabel perancu.** Adakah variabel ketiga yang memengaruhi keduanya sekaligus? Bila ada, asosiasi itu **semu** (spurious).
3. **Kekuatan dan konsistensi.** Apakah pola bertahan pada berbagai sampel dan konteks, atau hanya muncul sekali?
4. **Hubungan dosis-respons.** Apakah makin banyak "sebab", makin besar "akibat"?
5. **Eksperimen.** Bukti terkuat datang dari percobaan di mana peneliti **mengendalikan** variabel dan melakukan **pengacakan** (randomisasi), sehingga pengaruh variabel perancu dapat ditekan.

Semakin banyak pertanyaan di atas terjawab "ya", semakin masuk akal kesimpulan kausalnya. Sebaliknya, bila hanya satu asosiasi yang dimiliki, kesimpulan harus dinyatakan dengan sangat hati-hati.`,
    },
    {
      id: "perancu",
      kind: "konsep",
      title: "Variabel Perancu",
      body: `**Variabel perancu** (confounding variable) adalah variabel yang:

- berkaitan dengan variabel "penyebab" yang diduga, **dan**
- berkaitan dengan variabel "akibat" yang diduga.

Kehadirannya dapat menciptakan asosiasi yang tidak mencerminkan sebab-akibat langsung. Contoh **ukuran sepatu dan kemampuan membaca** pada anak:

- anak yang kakinya lebih besar cenderung lebih pandai membaca;
- namun **usia** memengaruhi keduanya: anak lebih tua berkaki lebih besar sekaligus lebih mahir membaca.

Jadi ukuran sepatu tidak menyebabkan kemampuan membaca; usia adalah variabel perancunya. Bila kita membandingkan anak **pada usia yang sama**, hubungan tadi menghilang. Mengendalikan variabel perancu seperti ini disebut **mengontrol** variabel tersebut.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "Variabel perancu tidak selalu terlihat di data. Ia bisa tersembunyi, sehingga asosiasi kuat sekalipun belum cukup untuk menyimpulkan kausalitas.",
        },
      ],
    },
    {
      id: "spurious",
      kind: "konsep",
      title: "Korelasi Semu dan Kausalitas Terbalik",
      body: `**Korelasi semu** (spurious correlation) adalah asosiasi yang muncul tanpa hubungan kausal, biasanya karena **variabel perancu** atau **kebetulan**. Contoh terkenal: penjualan es krim dan angka kejahatan (perancu: suhu). Contoh yang tampak mengesankan padahal kebetulan: jumlah film yang dibintangi sebuah aktor tahun tertentu dan harga tiket bioskop — keduanya kebetulan naik bersama.

**Kausalitas terbalik** terjadi ketika kita menukar arah sebab-akibat. Misalnya, data menunjukkan "orang yang rutin berolahraga lebih jarang stres". Mungkin benar olahraga mengurangi stres, tetapi bisa juga **stres yang rendah membuat orang lebih mampu berolahraga**. Data korelasi sering tidak dapat menentukan arah ini sendiri.

Karena itu, jangan langsung menyimpulkan arah sebab-akibat hanya dari kuatnya korelasi.`,
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi",
      body: "Selidiki data yang tampak berkaitan untuk melihat kapan hubungan itu benar-benar sebab-akibat.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "asosiasi-kausalitas-tabel",
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
          steps: [
            {
              title: "Contoh 1",
              text: "Korelasi positif kuat antara penjualan es krim dan angka kejahatan. **Analisis:** keduanya meningkat pada musim panas. Variabel perancu = suhu/iklim. **Kesimpulan:** asosiasi saja, bukan kausalitas.",
            },
            {
              title: "Contoh 2",
              text: "Anak berkaki besar lebih mahir membaca. **Analisis:** usia memengaruhi ukuran kaki dan kemampuan membaca. **Kesimpulan:** korelasi semu; variabel perancu = usia.",
            },
            {
              title: "Contoh 3",
              text: "Studi observasional menemukan siswa yang sarapan berprestasi lebih baik. Namun siswa yang sarapan mungkin juga berasal dari keluarga dengan dukungan belajar lebih besar (perancu). Untuk menguji kausalitas, peneliti dapat melakukan **eksperimen acak**: sebagian siswa diberi sarapan, sebagian tidak, dengan pembagian acak. Bila kelompok yang diberi sarapan meningkat secara signifikan, bukti kausalnya jauh lebih kuat.",
            },
            {
              title: "Contoh 4",
              text: "Data: \"pegawai yang lebih sering lembur melaporkan produktivitas lebih rendah.\" Bisa jadi lembur menurunkan produktivitas, atau **beban kerja yang tinggi** menyebabkan keduanya — atau pegawai kurang produktif justru harus lembur. Arah penyebabnya tidak jelas dari korelasi.",
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
      body: `Berpikir kritis tentang asosiasi dan kausalitas membantu kita menilai berita, iklan, dan kebijakan. Ketika membaca "orang yang mengonsumsi X lebih berisiko Y", tanyakan: siapa yang diteliti, bagaimana desainnya (observasional atau eksperimen), dan variabel apa yang mungkin ikut berperan.

Topik ini melengkapi temuan **regresi**: garis regresi dapat mengukur asosiasi dengan tepat, tetapi tidak dengan sendirinya membuktikan sebab-akibat. Koefisien korelasi yang tinggi adalah awal penyelidikan, bukan akhir kesimpulan.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. "Korelasi berarti kausalitas".** Kesalahan paling sering. Asosiasi kuat tetap bisa semu karena variabel perancu.

**2. Mengabaikan arah waktu.** Menyimpulkan $A$ menyebabkan $B$ padahal $B$ mungkin terjadi lebih dahulu (kausalitas terbalik).

**3. Melupakan variabel perancu.** Suhu, usia, pendapatan, dan motivasi sering menjelaskan asosiasi tanpa perlu kausalitas langsung.

**4. Menyamakan studi observasional dengan eksperimen.** Studi observasional mengamati tanpa mengendalikan variabel; eksperimen acak jauh lebih kuat untuk menetapkan sebab-akibat.

**5. Menggeneralisasi dari satu studi kecil.** Satu temuan lemah belum cukup menjadi dasar kebijakan atau keyakinan kuat.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Renungkan bagaimana kamu membedakan asosiasi dari sebab-akibat saat membaca klaim.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Mengapa asosiasi merupakan syarat perlu tetapi bukan syarat cukup untuk kausalitas?",
            "Ketika membaca klaim berbasis data di media, tiga pertanyaan kritis apa yang akan kamu ajukan?",
            "Sebutkan satu keyakinanmu sendiri yang mungkin dibentuk oleh asosiasi, bukan bukti kausal.",
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
            "Istilah",
            "Makna",
          ],
          rows: [
            [
              "Asosiasi",
              "dua variabel berubah bersama secara statistik",
            ],
            [
              "Kausalitas",
              "satu variabel menyebabkan perubahan pada variabel lain",
            ],
            [
              "Variabel perancu",
              "variabel ketiga yang memengaruhi keduanya",
            ],
            [
              "Korelasi semu",
              "asosiasi tanpa hubungan kausal",
            ],
            [
              "Kausalitas terbalik",
              "arah sebab-akibat terbalik dari dugaan",
            ],
            [
              "Eksperimen acak",
              "bukti terkuat untuk kausalitas",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Tiket keluar.** (1) Bukti apa yang perlu dikumpulkan sebelum mengubah asosiasi menjadi klaim sebab-akibat? (2) Bagaimana sebuah variabel perancu dapat menciptakan korelasi semu? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Asosiasi dan Kausalitas** untuk latihan tambahan.`,
    },
  ],
};

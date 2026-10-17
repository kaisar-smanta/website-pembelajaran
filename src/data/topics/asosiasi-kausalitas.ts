import type { Topic } from '@/types/content';

export const asosiasiKausalitas: Topic = {
  id: 'asosiasi-kausalitas',
  slug: 'asosiasi-kausalitas',
  title: 'Asosiasi dan Kausalitas',
  subtitle: 'Ketika dua hal bergerak bersama belum tentu yang satu menyebabkan yang lain',
  grade: 'XII',
  phase: 'F',
  element: 'data-peluang',
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
    { text: 'Menjelaskan kausalitas terbalik dan cara mengontrol variabel perancu.' },
    { text: 'Menyimpulkan hubungan antar-variabel dengan hati-hati dan tanpa berlebihan.' },
  ],
  applications: ['korelasi-sebab-akibat'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat membedakan asosiasi dari kausalitas, mengidentifikasi variabel perancu dan korelasi semu, menjelaskan kausalitas terbalik, membedakan kekuatan bukti studi observasional dan eksperimen, serta menyusun kesimpulan yang hati-hati dari data.",
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
          reveal: "Penjelasan paling wajar bukan sebab-akibat langsung; yang berperan adalah **variabel ketiga**: suhu udara. Saat cuaca panas, orang lebih banyak membeli es krim **dan** lebih banyak beraktivitas di luar rumah sehingga peluang kejahatan naik. Suhu adalah **variabel perancu** yang membuat dua hal tampak berkaitan padahal tidak saling menyebabkan.",
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Topik ini menuntut kejelian membaca data, jadi segarkan dahulu bekal berikut:

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
      questionIds: ['ak-01'],
      body: `**Asosiasi** (korelasi) berarti dua variabel cenderung berubah bersama: ketika $x$ naik, $y$ cenderung naik (asosiasi positif) atau turun (asosiasi negatif). Ini pernyataan **statistik** tentang pola data.

**Kausalitas** berarti perubahan pada satu variabel **menyebabkan** perubahan pada variabel lain. Ini pernyataan tentang **mekanisme**, bukan pola semata.

Asosiasi adalah **syarat perlu** tetapi **bukan syarat cukup** untuk kausalitas. Artinya:

- jika $A$ menyebabkan $B$, biasanya ada asosiasi di antara keduanya;
- tetapi adanya asosiasi **tidak otomatis** berarti ada kausalitas.

Semboyan klasiknya: **"korelasi tidak menyiratkan kausalitas"**.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Ingat: pola belum tentu sebab",
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
        {
          kind: "match",
          intro: "Pasangkan istilah dengan maknanya.",
          pairs: [
            {
              left: "Asosiasi",
              right: "Dua variabel cenderung berubah bersama",
            },
            {
              left: "Kausalitas",
              right: "Perubahan satu variabel menyebabkan perubahan variabel lain",
            },
            {
              left: "Variabel perancu",
              right: "Faktor ketiga yang memengaruhi keduanya",
            },
            {
              left: "Korelasi semu",
              right: "Asosiasi tanpa hubungan sebab-akibat",
            },
            {
              left: "Kausalitas terbalik",
              right: "Arah sebab-akibat berlawanan dari dugaan",
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
          kind: "figure",
          alt: "Tiga diagram pencar yang menunjukkan asosiasi positif, negatif, dan tanpa korelasi.",
          caption: "Arah asosiasi pada diagram pencar: titik naik bersama (positif), turun bersama (negatif), dan menyebar tanpa pola (tanpa korelasi).",
          svg: '<svg viewBox="0 0 320 200" aria-hidden="true" role="presentation"><line x1="15" y1="95" x2="95" y2="95" stroke="currentColor" stroke-width="1.5"/><line x1="15" y1="95" x2="15" y2="20" stroke="currentColor" stroke-width="1.5"/><circle cx="22" cy="86" r="2.5" fill="currentColor"/><circle cx="34" cy="74" r="2.5" fill="currentColor"/><circle cx="46" cy="62" r="2.5" fill="currentColor"/><circle cx="58" cy="48" r="2.5" fill="currentColor"/><circle cx="70" cy="36" r="2.5" fill="currentColor"/><circle cx="84" cy="26" r="2.5" fill="currentColor"/><text x="36" y="116" font-size="11" fill="currentColor">positif</text><line x1="117" y1="95" x2="197" y2="95" stroke="currentColor" stroke-width="1.5"/><line x1="117" y1="95" x2="117" y2="20" stroke="currentColor" stroke-width="1.5"/><circle cx="122" cy="28" r="2.5" fill="currentColor"/><circle cx="133" cy="40" r="2.5" fill="currentColor"/><circle cx="145" cy="52" r="2.5" fill="currentColor"/><circle cx="157" cy="63" r="2.5" fill="currentColor"/><circle cx="169" cy="75" r="2.5" fill="currentColor"/><circle cx="181" cy="86" r="2.5" fill="currentColor"/><text x="138" y="116" font-size="11" fill="currentColor">negatif</text><line x1="219" y1="95" x2="299" y2="95" stroke="currentColor" stroke-width="1.5"/><line x1="219" y1="95" x2="219" y2="20" stroke="currentColor" stroke-width="1.5"/><circle cx="226" cy="42" r="2.5" fill="currentColor"/><circle cx="238" cy="80" r="2.5" fill="currentColor"/><circle cx="250" cy="32" r="2.5" fill="currentColor"/><circle cx="262" cy="68" r="2.5" fill="currentColor"/><circle cx="274" cy="45" r="2.5" fill="currentColor"/><circle cx="286" cy="78" r="2.5" fill="currentColor"/><circle cx="296" cy="55" r="2.5" fill="currentColor"/><text x="230" y="116" font-size="10" fill="currentColor">tanpa korelasi</text></svg>',
        },
        {
          kind: "callout",
          variant: "tip",
          text: "Ubah klaim menjadi pertanyaan: \"Apa buktinya bahwa $x$ menyebabkan $y$, dan bukan karena keduanya dipengaruhi faktor yang sama?\"",
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Statistik",
              body: "Asosiasi diukur dari data: arah dan kekuatan hubungan, misalnya diagram pencar dan koefisien $r$.",
            },
            {
              label: "Mekanisme",
              body: "Kausalitas menuntut penjelasan **mengapa**: jalur sebab-akibat yang masuk akal, bukan sekadar pola.",
            },
            {
              label: "Waktu",
              body: "Urutan waktu harus benar: dugaan penyebab mesti terjadi sebelum akibat agar kausalitas masuk akal.",
            },
            {
              label: "Perancu",
              body: "Periksa apakah ada variabel ketiga yang memengaruhi keduanya sekaligus, sehingga asosiasinya semu.",
            },
          ],
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
      blocks: [
        {
          kind: "figure",
          alt: "Peta mosaik dua arah satu tabel kontingensi. Kolom sarapan lebih lebar dan bagian lulusnya mencapai delapan puluh persen tinggi, sedangkan kolom tidak sarapan lebih sempit dengan bagian lulus enam puluh persen.",
          caption: "Peta mosaik (asosiasi dua arah). Lebar kolom mengikuti ukuran kelompok ($60$ dan $40$), sedangkan tinggi bagian lulus dalam tiap kolom adalah proporsi $P(\\text{lulus}\\mid\\text{sarapan})=0{,}8$ dan $P(\\text{lulus}\\mid\\text{tidak sarapan})=0{,}6$. Selisih tinggi kedua kolom menunjukkan besarnya asosiasi, bukan bukti sebab-akibat.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><rect x="50" y="30" width="150" height="136" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="1.6"/><rect x="50" y="166" width="150" height="34" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.6"/><rect x="200" y="30" width="100" height="102" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="1.6"/><rect x="200" y="132" width="100" height="68" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.6"/><text x="125" y="24" font-size="11" text-anchor="middle" fill="currentColor">Sarapan (60)</text><text x="250" y="24" font-size="11" text-anchor="middle" fill="currentColor">Tidak sarapan (40)</text><text x="92" y="102" font-size="11" fill="currentColor">lulus 0,8</text><text x="228" y="86" font-size="11" fill="currentColor">lulus 0,6</text><text x="106" y="188" font-size="10" fill="currentColor">tidak lulus</text><text x="236" y="170" font-size="10" fill="currentColor">tidak lulus</text></svg>',
        },
      ],
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
          title: "Perancu yang tak terlihat",
          text: "Variabel perancu tidak selalu terlihat di data. Ia bisa tersembunyi, sehingga asosiasi kuat sekalipun belum cukup untuk menyimpulkan kausalitas.",
        },
        {
          kind: "figure",
          alt: "Dua gugus titik pada diagram pencar; secara gabungan titik cenderung naik ke kanan, tetapi di dalam setiap kelompok tidak ada kecenderungan, menggambarkan asosiasi semu akibat variabel perancu.",
          caption: "Variabel perancu: garis putus-putus menggambarkan asosiasi gabungan yang tampak positif, padahal di dalam kelompok A (titik penuh) maupun B (titik kosong) tidak ada kecenderungan.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="40" y1="200" x2="300" y2="200" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="200" x2="40" y2="40" stroke="currentColor" stroke-width="1.5"/><line x1="58" y1="186" x2="292" y2="54" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><circle cx="70" cy="168" r="4" fill="currentColor"/><circle cx="88" cy="178" r="4" fill="currentColor"/><circle cx="104" cy="160" r="4" fill="currentColor"/><circle cx="120" cy="172" r="4" fill="currentColor"/><circle cx="136" cy="158" r="4" fill="currentColor"/><circle cx="150" cy="176" r="4" fill="currentColor"/><circle cx="190" cy="96" r="4" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="210" cy="84" r="4" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="228" cy="100" r="4" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="244" cy="72" r="4" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="262" cy="88" r="4" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="278" cy="76" r="4" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="150" font-size="12" fill="currentColor">A</text><text x="184" y="66" font-size="12" fill="currentColor">B</text></svg>',
        },
      ],
    },
    {
      id: "spurious",
      kind: "konsep",
      title: "Korelasi Semu dan Kausalitas Terbalik",
      body: `**Korelasi semu** (spurious correlation) adalah asosiasi yang muncul tanpa hubungan kausal, biasanya karena **variabel perancu** atau **kebetulan**. Contoh terkenal: penjualan es krim dan angka kejahatan (perancu: suhu). Contoh yang tampak mengesankan padahal kebetulan: jumlah film yang dibintangi sebuah aktor tahun tertentu dan harga tiket bioskop. Keduanya kebetulan naik bersama.

**Kausalitas terbalik** terjadi ketika kita menukar arah sebab-akibat. Misalnya, data menunjukkan "orang yang rutin berolahraga lebih jarang stres". Mungkin benar olahraga mengurangi stres, tetapi bisa juga **stres yang rendah membuat orang lebih mampu berolahraga**. Data korelasi sering tidak dapat menentukan arah ini sendiri.

Karena itu, jangan langsung menyimpulkan arah sebab-akibat hanya dari kuatnya korelasi.`,
    },
    {
      id: "asosiasi-kausalitas-rumus",
      kind: "rumus",
      title: "Rumus: Proporsi Bersyarat dan Selisihnya",
      body: `Untuk mengukur asosiasi antara dua kejadian dari data, kita memakai **proporsi bersyarat**. Bila dari kelompok $B$ yang berjumlah $n_B$ anggota terdapat $a$ yang juga mengalami $A$, maka

$$P(A \\mid B) = \\frac{a}{n_B}, \\qquad P(A \\mid B^{c}) = \\frac{c}{n_{B^{c}}}.$$

**Selisih proporsi** (*difference in proportions*) mengukur seberapa besar kedua kelompok berbeda:

$$\\Delta = P(A \\mid B) - P(A \\mid B^{c}).$$

Bila $\\Delta \\approx 0$, kedua kelompok hampir sama sehingga asosiasinya lemah; makin jauh dari nol, makin besar perbedaannya. Untuk perbandingan **relatif** dipakai **risiko relatif**:

$$\\text{RR} = \\frac{P(A \\mid B)}{P(A \\mid B^{c})}.$$

Hati-hati: rumus-rumus ini hanya mengukur **kekuatan asosiasi**. Rumus itu tidak dengan sendirinya membuktikan kausalitas, sebab variabel perancu dan urutan waktu tidak terlihat di dalamnya.`,
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
      id: "eksplorasi-paradoks-simpson",
      kind: "eksplorasi",
      title: "Eksplorasi Paradoks Simpson",
      body: "Setelah memeriksa tabel dua arah, susunlah data menjadi dua strata. Ubah ukuran dan tingkat keberhasilan tiap kelompok sampai arah kesimpulan gabungan berbalik terhadap tiap strata, lalu jelaskan mengapa variabel perancu harus dikendalikan.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "asosiasi-simpson",
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
          intro: "Tiap contoh dipreteli langkah demi langkah: kenali klaimnya, cari penjelasan alternatif, lalu simpulkan.",
          steps: [
            {
              title: "Contoh 1: banyak petugas pemadam dan besar kerusakan",
              text: `Data kota menunjukkan: makin banyak petugas yang dikerahkan, makin besar kerusakan akibat kebakaran.

*Analisis.* Ini korelasi positif yang menyesatkan bila dibaca sebagai sebab-akibat. **Variabel perancu**-nya adalah **besar kebakaran**: kebakaran besar memanggil lebih banyak petugas sekaligus menimbulkan kerusakan lebih besar. Jadi bukan petugas yang memperparah kerusakan.

*Kesimpulan.* Yang ada hanya **asosiasi** yang dijelaskan faktor ketiga, bukan kausalitas langsung. Bila dibandingkan pada ukuran kebakaran yang setara, hubungan itu melemah.`,
            },
            {
              title: "Contoh 2: ukuran sepatu dan kemampuan membaca",
              text: `Anak berkaki lebih besar rata-rata lebih mahir membaca.

*Analisis.* **Usia** memengaruhi keduanya: anak yang lebih tua berkaki lebih besar sekaligus lebih mahir membaca. Bila dibandingkan pada usia yang sama, hubungan itu menghilang.

*Kesimpulan.* Ini **korelasi semu** dengan variabel perancu usia, bukan sebab-akibat langsung.`,
            },
            {
              title: "Contoh 3: sarapan dan prestasi belajar",
              text: `Studi observasional menemukan siswa yang sarapan berprestasi lebih baik.

*Analisis.* Siswa yang sarapan mungkin berasal dari keluarga dengan dukungan belajar lebih besar, yaitu sebuah **variabel perancu**. Untuk menguji kausalitas, peneliti dapat melakukan **eksperimen acak**: sebagian siswa diberi sarapan, sebagian tidak, dengan pembagian yang ditentukan acak.

*Kesimpulan.* Bukti observasional saja lemah; bila kelompok yang diberi sarapan meningkat secara signifikan dalam eksperimen, klaim kausal menjadi jauh lebih kuat.`,
            },
            {
              title: "Contoh 4: lembur dan produktivitas",
              text: `Data menunjukkan pegawai yang lebih sering lembur melaporkan produktivitas lebih rendah. Ada tiga penjelasan yang mungkin.

*Analisis.* Pertama, lembur menurunkan produktivitas. Kedua, **beban kerja tinggi** menyebabkan keduanya sekaligus. Ketiga, pegawai yang kurang produktif justru harus lembur. Inilah **kausalitas terbalik**.

*Kesimpulan.* Arah sebab-akibatnya tidak dapat ditentukan dari korelasi saja; diperlukan data urutan waktu dan pengendalian variabel.`,
            },
          ],
        },
        {
          kind: "details",
          summary: "Coba sendiri: memilah penjelasan dari sebuah asosiasi",
          text: `Sebuah studi melaporkan siswa yang memiliki lebih banyak buku di rumah cenderung bernilai lebih tinggi.

*Langkah 1.* Kenali jenis buktinya. Studi ini **observasional**: peneliti hanya mengamati buku dan nilai, tanpa mengendalikan apa pun, sehingga bukti yang dihasilkan adalah **asosiasi**.

*Langkah 2.* Cari variabel perancu. Pendidikan orang tua dan pendapatan keluarga berkaitan dengan jumlah buku **dan** dengan nilai anak. Keduanya dapat menjelaskan asosiasi itu tanpa perlu hubungan sebab-akibat langsung.

*Langkah 3.* Periksa urutan waktu dan arah. Tidak ada mekanisme jelas yang membuat rak buku menaikkan nilai begitu saja, dan data tidak menunjukkan bagian mana yang berubah lebih dahulu.

*Langkah 4.* Rancang pembanding yang lebih kuat. Bila ingin menaksir kausalitas, bandingkan siswa **pada tingkat pendidikan orang tua yang setara**, atau lakukan eksperimen pemberian buku secara acak. Tanpa pengendalian variabel perancu, kesimpulan yang jujur hanya berkata "berkaitan", bukan "menyebabkan".`,
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
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Sebuah survei observasional menemukan pengguna media sosial lebih sering melaporkan rasa cemas. Klik langkah yang keliru.",
          steps: [
            "Survei ini mengamati tanpa mengendalikan variabel, jadi hasilnya berupa asosiasi.",
            "Karena keduanya berkaitan, bermedia sosial pasti menyebabkan kecemasan.",
            "Jadi mengurangi media sosial akan menghilangkan kecemasan semua orang.",
          ],
          wrongIndex: 1,
          explanation: "Asosiasi dari survei observasional tidak membuktikan sebab-akibat. Beban kerja, usia, atau kondisi sosial bisa menjadi variabel perancu. Arah pun bisa terbalik: orang yang cemas mungkin mencari pelarian di media sosial.",
        },
      ],
    },
    {
      id: "tantangan",
      kind: "tantangan",
      title: "Paradoks dalam Data Gabungan",
      body: `**Soal.** Sebuah studi membandingkan dua program belajar, P dan Q. Peserta dikelompokkan menurut tingkat kesulitan materi yang dipelajari. Pada materi mudah, $10$ peserta program P lulus $9$ kali, sedangkan $100$ peserta program Q lulus $89$ kali. Pada materi sulit, $10$ peserta program P lulus $4$ kali, sedangkan $10$ peserta program Q lulus $1$ kali.

(a) Hitung persentase kelulusan tiap program pada masing-masing tingkat kesulitan.
(b) Hitung persentase kelulusan gabungan kedua program.
(c) Jelaskan mengapa kesimpulan gabungan dapat berbalik, dan sebutkan ukuran yang perlu dikendalikan.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Bandingkan data per strata, lalu data gabungan, dan jelaskan mengapa arahnya dapat berbalik.",
          steps: [
            {
              title: "Persentase pada materi mudah",
              text: "Program P: $\\dfrac{9}{10}=90\\%$. Program Q: $\\dfrac{89}{100}=89\\%$. Pada tingkat ini P unggul tipis.",
            },
            {
              title: "Persentase pada materi sulit",
              text: "Program P: $\\dfrac{4}{10}=40\\%$. Program Q: $\\dfrac{1}{10}=10\\%$. Pada tingkat ini P unggul jauh.",
            },
            {
              title: "Persentase gabungan",
              text: "Program P: $\\dfrac{9+4}{10+10}=\\dfrac{13}{20}=65\\%$. Program Q: $\\dfrac{89+1}{100+10}=\\dfrac{90}{110}\\approx81{,}8\\%$. Secara gabungan Q justru tampak lebih baik.",
            },
            {
              title: "Mengapa arahnya berbalik",
              text: "Hampir semua peserta Q mengerjakan materi mudah ($100$ dari $110$), yang tingkat kelulusannya tinggi, sedangkan peserta P terbagi rata antara materi mudah dan sulit. Komposisi yang tidak sebanding membuat angka gabungan menyesatkan.",
            },
            {
              title: "Kendalikan variabel perancu",
              text: "Tingkat kesulitan materi adalah **variabel perancu**. Perbandingan yang adil dilakukan dengan memisahkan tiap tingkat seperti pada bagian (a), atau membakukan komposisi kedua kelompok.",
            },
            {
              title: "Simpulkan",
              text: "Pada kedua tingkat, P lebih baik, sehingga kesimpulan yang sahih adalah P unggul. Angka gabungan yang menempatkan Q di atas hanya muncul karena komposisi peserta yang berbeda, bukan karena Q lebih efektif.",
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Dari Korelasi ke Kriteria Kausal",
      body: `Pertanyaan "apakah yang satu menyebabkan yang lain?" menuntut perangkat berpikir yang berbeda dari sekadar mengukur keeratan hubungan. Perumusan koefisien korelasi dan garis regresi dibahas pada topik **Regresi Linear**; di sini perhatian kita tertuju pada upaya menetapkan sebab-akibat. Sebelum korelasi dirumuskan, pada 1843 John Stuart Mill menyusun metode penalaran untuk menetapkan sebab-akibat. Pada 1920-an Ronald Fisher mengembangkan percobaan dengan pengacakan sebagai cara mengendalikan variabel pengganggu, dasar bagi eksperimen acak modern. Pada 1965 Austin Bradford Hill menyusun kriteria penilaian bukti kausal, seperti asosiasi, urutan waktu, dan hubungan dosis-respons, yang antara lain dipakai untuk menetapkan hubungan merokok dan kanker paru.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Setiap klaim berbasis data menyimpan satu pertanyaan besar: benarkah ini sebab-akibat? Renungan berikut melatihmu memeriksanya sebelum percaya.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Mengapa asosiasi merupakan syarat perlu tetapi bukan syarat cukup untuk kausalitas?",
            "Ketika membaca klaim berbasis data di media, tiga pertanyaan kritis apa yang akan kamu ajukan?",
            "Sebutkan satu keyakinanmu sendiri yang mungkin dibentuk oleh asosiasi, bukan bukti kausal.",
          ],
          confidenceLabel: "Seberapa yakin kamu membedakan asosiasi dari kausalitas dan mengenali variabel perancu?",
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
          caption: "Ringkasan istilah asosiasi dan kausalitas",
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
        {
          kind: "callout",
          variant: "concept",
          title: "Benang merah: pola bukan mekanisme",
          text: "Satu kesadaran menyatukan seluruh topik ini: data dapat menunjukkan **bahwa** dua hal bergerak bersama, tetapi tidak pernah cukup untuk menjelaskan **mengapa**. Menjawab mengapa menuntut mekanisme, urutan waktu, dan pengendalian variabel perancu. Karena itu langkah paling jujur setelah menemukan asosiasi kuat adalah bertanya lebih dahulu, bukan menyimpulkan sebab-akibat. Kebiasaan ini menutup rangkaian topik data: dari merangkum satu variabel, membaca dua variabel, memodelkannya, sampai menimbang kausalitasnya.",
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      questionIds: ['ak-08'],
      body: `**Tiket keluar.** (1) Sebuah berita menulis "pengguna media sosial lebih mudah cemas"; langkah apa yang kamu ambil sebelum mempercayai klaim itu sebagai sebab-akibat? (2) Jelaskan bagaimana satu variabel perancu dapat membuat dua hal tampak berkaitan padahal tidak. Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Asosiasi dan Kausalitas** untuk latihan tambahan.`,
    },
  ],
};

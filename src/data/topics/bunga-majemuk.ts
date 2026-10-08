import type { Topic } from '@/types/content';

export const bungaMajemuk: Topic = {
  id: 'bunga-majemuk',
  slug: 'bunga-majemuk',
  title: 'Bunga Majemuk',
  subtitle: 'Ketika bunga ikut menghasilkan bunga',
  grade: 'XI',
  phase: 'F',
  element: 'bilangan',
  featured: true,
  status: 'lengkap',
  estimatedMinutes: 80,
  summary:
    'Memodelkan pertumbuhan saldo tabungan atau pinjaman ketika bunga dihitung dari saldo terbaru, bukan dari modal awal.',
  description:
    'Bunga majemuk adalah penerapan eksponen yang paling dekat dengan kehidupan: tabungan, deposito, dan pinjaman. Topik ini menghubungkan barisan geometri dengan model eksponensial, serta menekankan perbedaan antara suku bunga nominal dan suku bunga per periode.',
  keywords: ['bunga majemuk', 'suku bunga', 'nominal', 'periode', 'pertumbuhan saldo', 'eksponen'],
  prerequisites: ['eksponen', 'barisan-deret'],
  relatedTopics: ['anuitas', 'fungsi-eksponensial'],
  prerequisiteKnowledge: [
    'Sifat-sifat eksponen dan pangkat pecahan',
    'Barisan geometri dan rasio',
    'Persentase dan konversi pecahan',
  ],
  objectives: [
    { text: 'Menjelaskan perbedaan bunga tunggal dan bunga majemuk melalui situasi nyata.' },
    { text: 'Menghitung saldo akhir dengan bunga tunggal menggunakan rumus $M_n = M_0(1 + i\\,n)$.' },
    { text: 'Menurunkan rumus saldo bunga majemuk dari pola barisan geometri.' },
    { text: 'Membedakan suku bunga nominal per tahun dan suku bunga per periode.' },
    { text: 'Menghitung saldo akhir, suku bunga efektif, dan lama waktu menabung.' },
    { text: 'Mengenali kesalahan umum dalam menyelesaikan masalah bunga majemuk.' },
  ],
  applications: ['bunga-investasi'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Peserta didik dapat memodelkan pertumbuhan saldo dengan bunga majemuk, menghitung saldo akhir dengan bunga tunggal maupun bunga majemuk, menentukan suku bunga efektif, serta menggunakan model tersebut untuk membandingkan pilihan menabung atau meminjam secara kritis.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      body: `Seorang siswa menabung **Rp5.000.000** dengan bunga **8% per tahun**. Apakah setiap tahun ia menerima bunga Rp400.000, atau apakah besar bunganya berubah?

Diskusikan: jika bunga tahun pertama ditambahkan ke saldo, apakah bunga tahun kedua dihitung dari Rp5.000.000 atau dari saldo yang sudah bertambah? Jawaban pertanyaan ini membedakan **bunga tunggal** dan **bunga majemuk**.`,
      blocks: [
        {
          kind: "prediction",
          prompt: "Setiap tahun, apakah ia menerima bunga Rp400.000 yang sama, atau besar bunganya berubah? Pilih dugaanmu, lalu bandingkan dengan penjelasan.",
          options: [
            "Bunga tetap Rp400.000 setiap tahun",
            "Bunga makin besar setiap tahun",
            "Bunga makin kecil setiap tahun",
            "Bunga tidak dapat diperkirakan",
          ],
          reveal: "Pada **bunga tunggal**, bunga selalu dihitung dari modal awal, sehingga tiap tahun tetap Rp400.000. Pada **bunga majemuk**, bunga dihitung dari saldo terbaru yang sudah termasuk bunga sebelumnya, sehingga bunganya makin besar setiap tahun.",
          saveLabel: "Simpan dugaan",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Pastikan kamu sudah memahami:

- sifat eksponen, terutama $(1+i)^n$ dan pangkat bilangan rasional;
- barisan geometri dengan rasio tetap $(1+i)$;
- mengubah persen menjadi desimal, misalnya $8\\% = 0{,}08$.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Bank menghitung bunga tabungan berdasarkan **saldo terkini**, bukan saldo awal. Karena itu saldo tumbuh mengikuti pola perkalian berulang — inilah bunga majemuk. Prinsip yang sama dipakai pada pinjaman: sisa utang pun dikenai bunga, sehingga utang dapat membengkak bila tidak dibayar.

Memahami bunga majemuk membantu kita membandingkan produk keuangan, memahami inflasi, dan memutuskan antara menabung sekarang atau kemudian.`,
    },
    {
      id: "bunga-tunggal",
      kind: "konsep",
      title: "Mengenal Bunga Tunggal",
      body: `Sebelum mendalami bunga majemuk, ingat kembali **bunga tunggal**. Pada bunga tunggal, bunga selalu dihitung dari modal awal, bukan dari saldo terbaru. Jika modal awal $M_0$, suku bunga $i$ per periode, dan lama $n$ periode, saldo akhirnya adalah

$$M_n = M_0(1 + i\\,n).$$

Karena setiap periode menambah besar bunga yang sama, pertumbuhannya **linear**. Berbeda dari bunga majemuk yang memakai pangkat $(1+i)^n$ sehingga bunganya makin besar setiap periode.

Contoh: modal Rp5.000.000 dengan bunga tunggal $8\\%$ per tahun selama $5$ tahun memberi
$$M_5 = 5.000.000(1 + 0{,}08 \\cdot 5) = \\text{Rp}7.000.000,$$
sedangkan bunga majemuk dengan suku bunga yang sama menghasilkan $5.000.000(1{,}08)^{5} \\approx \\text{Rp}7.346.640$. Selisih Rp346.640 itulah bunga atas bunga yang hanya muncul pada bunga majemuk.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti",
      body: `Misalkan modal awal $M_0$ dan suku bunga $i$ per periode. Setelah satu periode:

$$M_1 = M_0(1+i).$$

Bunga periode kedua dihitung dari $M_1$, sehingga

$$M_2 = M_1(1+i) = M_0(1+i)^2.$$

Pola ini berlanjut dan menghasilkan rumus umum:

$$M_n = M_0(1+i)^n$$

dengan $M_n$ saldo setelah $n$ periode. Barisan saldo $M_0, M_1, M_2, \\dots$ adalah **barisan geometri** dengan rasio $(1+i)$.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Hubungan dengan barisan geometri",
          text: "Rumus bunga majemuk identik dengan suku ke-$n$ barisan geometri: $U_n = a r^{n-1}$. Di sini $a = M_0(1+i)$ dan $r = (1+i)$.",
        },
        {
          kind: "flip-cards",
          intro: "Bolak-balik kartu untuk memeriksa istilah kunci bunga majemuk.",
          cards: [
            {
              front: "Modal awal ($M_0$)",
              back: "Saldo mula-mula sebelum bunga dihitung.",
            },
            {
              front: "Suku bunga per periode ($i$)",
              back: "Bunga untuk satu periode, misalnya $8\\%$ per tahun atau $1\\%$ per bulan.",
            },
            {
              front: "Banyak periode ($n$)",
              back: "Banyaknya selang waktu perhitungan bunga.",
            },
            {
              front: "Saldo ($M_n$)",
              back: "Nilai tabungan atau pinjaman setelah $n$ periode.",
            },
            {
              front: "Rasio $(1+i)$",
              back: "Faktor pengali tetap sehingga saldo membentuk barisan geometri.",
            },
          ],
        },
      ],
    },
    {
      id: "suku-bunga",
      kind: "representasi",
      title: "Suku Bunga Nominal dan Suku Bunga per Periode",
      body: `Bank biasanya menyebut **suku bunga nominal per tahun**, tetapi bunga dapat dihitung beberapa kali dalam setahun. Jika nominal tahunan $j$ dan bunga dihitung $m$ kali per tahun, maka suku bunga **per periode** adalah

$$i = \\frac{j}{m}.$$

Karena $n$ menyatakan banyak periode, lamanya $t$ tahun setara dengan $n = m \\cdot t$ periode. Sebagai contoh, nominal $12\\%$ dengan perhitungan bulanan berarti $i = \\dfrac{0{,}12}{12} = 0{,}01$ per bulan.`,
      blocks: [
        {
          kind: "table",
          caption: "Contoh nominal tahunan 12% dan suku bunga per periode",
          headers: [
            "Frekuensi",
            "m",
            "i per periode",
            "n untuk 1 tahun",
          ],
          rows: [
            [
              "Tahunan",
              "1",
              "$0{,}12$",
              "1",
            ],
            [
              "Semesteran",
              "2",
              "$0{,}06$",
              "2",
            ],
            [
              "Kuartalan",
              "4",
              "$0{,}03$",
              "4",
            ],
            [
              "Bulanan",
              "12",
              "$0{,}01$",
              "12",
            ],
          ],
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Nominal tahunan",
              body: "Bunga dinyatakan untuk satu tahun penuh, misalnya $j = 12\\%$ per tahun.",
            },
            {
              label: "Per periode",
              body: "Bagi nominal dengan frekuensi: $i = j/m$, misalnya $12\\% / 12 = 1\\%$ per bulan.",
            },
            {
              label: "Efektif",
              body: "Pertumbuhan nyata selama setahun: $i_{\\text{efektif}} = (1 + j/m)^{m} - 1 \\approx 12{,}68\\%$.",
            },
          ],
        },
      ],
    },
    {
      id: "efektif",
      kind: "konsep",
      title: "Suku Bunga Efektif",
      body: `Suku bunga efektif adalah pertumbuhan saldo sebenarnya selama satu tahun. Karena bunga dihitung majemuk, suku bunga efektif biasanya **lebih besar** daripada nominal. Untuk nominal $j$ dengan $m$ periode per tahun:

$$i_{\\text{efektif}} = \\left(1 + \\frac{j}{m}\\right)^{m} - 1.$$

Contoh: nominal $12\\%$ dihitung bulanan memberi $i_{\\text{efektif}} = (1{,}01)^{12} - 1 \\approx 0{,}126825$, yaitu sekitar **12,68%** per tahun — lebih tinggi daripada nominalnya.`,
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi",
      body: "Bandingkan pertumbuhan bunga tunggal dan bunga majemuk dengan mengubah modal, suku bunga, dan lama menabung.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "bunga-majemuk-sim",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Menggeneralisasi Pertumbuhan Majemuk",
      body: `Setiap penambahan periode mengalikan saldo dengan faktor tetap $(1+i)$. Karena itu saldo setelah $n$ periode selalu berbentuk pangkat:

$$M_n = M_0(1+i)^n.$$

Sifat faktor tetap ini membuat saldo menjadi barisan geometri, sehingga pertumbuhan hanya bergantung pada **panjang selang**: $M_{n+k} = M_n(1+i)^k$.

Ketika bunga dihitung $m$ kali setahun dengan nominal $j$, faktor pengali setahun menjadi $(1+j/m)^m$, sehingga suku bunga efektif setahun adalah

$$i_{\\text{efektif}} = \\left(1+\\frac{j}{m}\\right)^m - 1.$$

Memperbesar $m$ menaikkan $i_{\\text{efektif}}$, tetapi tambahannya makin lama makin kecil.`,
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      body: `**Contoh 1.** Ibu menabung Rp5.000.000 dengan bunga majemuk 8% per tahun. Berapa saldo setelah 5 tahun?

*Penyelesaian.* Dengan $M_0 = 5.000.000$, $i = 0{,}08$, dan $n = 5$:

$$M_5 = 5.000.000(1{,}08)^{5} = 5.000.000(1{,}469328) \\approx \\text{Rp}7.346.640.$$

Sebagai perbandingan, dengan bunga tunggal saldonya hanya $5.000.000(1 + 0{,}08 \\cdot 5) = \\text{Rp}7.000.000$. Selisihnya sekitar **Rp346.640** berasal dari bunga atas bunga.

**Contoh 2.** Modal Rp2.000.000 dibungakan majemuk 6% per tahun selama 4 tahun. Tentukan saldo akhir.

*Penyelesaian.* $M_4 = 2.000.000(1{,}06)^{4} = 2.000.000(1{,}262477) \\approx \\text{Rp}2.524.954$.

**Contoh 3.** Suku bunga nominal 12% per tahun dihitung bulanan. Tentukan suku bunga efektif per tahun.

*Penyelesaian.* $i = 0{,}01$ dan $m = 12$, sehingga $(1{,}01)^{12} - 1 \\approx 0{,}126825$, yaitu **12,68%** per tahun.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Ikuti langkah menghitung saldo Rp5.000.000 dengan bunga majemuk 8% per tahun selama 5 tahun.",
          steps: [
            {
              title: "Langkah 1",
              text: "Catat besaran yang diketahui: $M_0 = 5.000.000$, $i = 0{,}08$, dan $n = 5$.",
            },
            {
              title: "Langkah 2",
              text: "Gunakan rumus saldo: $M_5 = 5.000.000(1{,}08)^{5}$.",
            },
            {
              title: "Langkah 3",
              text: "Hitung faktor pangkatnya: $(1{,}08)^{5} \\approx 1{,}469328$.",
            },
            {
              title: "Langkah 4",
              text: "Kalikan dengan modal: $M_5 \\approx 5.000.000 \\times 1{,}469328 \\approx \\text{Rp}7.346.640$.",
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
      body: "Bunga majemuk menjelaskan mengapa menabung lebih awal sangat menguntungkan, dan mengapa utang kartu kredit bisa cepat membengkak. Bandingkan dua studi kasus pada halaman [Memilih Tabungan](/aplikasi/bunga-investasi) dan [Kredit Motor](/aplikasi/anuitas-pinjaman).",
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menggunakan penalaran bunga tunggal.** Menghitung $5.000.000 \\times 8\\% \\times 5 = \\text{Rp}2.000.000$ lalu menambahkan ke modal memberi Rp7.000.000. Cara ini **salah** untuk bunga majemuk karena mengabaikan bunga atas bunga; hasil yang benar Rp7.346.640.

**2. Mencampur suku bunga nominal dan per periode.** Memakai 12% langsung untuk perhitungan bulanan, padahal $i = 1\\%$ per bulan. Akibatnya saldo terhitung jauh lebih besar dari seharusnya.

**3. Salah menentukan $n$.** Menulis $n = 5$ untuk "5 tahun" meskipun bunga dihitung bulanan; seharusnya $n = 60$ periode.

**4. Membulatkan terlalu awal.** Membulatkan $(1{,}06)^4 = 1{,}26$ sebelum mengalikan membuat hasil meleset. Simpan angka desimal sampai langkah akhir.

**5. Menganggap suku bunga efektif sama dengan nominal.** Karena efek majemuk, efektif selalu $\\ge$ nominal (sama hanya jika dihitung sekali setahun).`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Perhatikan cara menghitung saldo Rp5.000.000 dengan bunga majemuk 8% per tahun selama 5 tahun. Ada satu langkah keliru. Klik langkah yang salah.",
          steps: [
            "Modal awal Rp5.000.000 dan suku bunga $8\\%$ per tahun selama $5$ tahun.",
            "Hitung bunga tiap tahun tetap dari modal **awal**: $5.000.000 \\times 8\\% = \\text{Rp}400.000$.",
            "Kalikan banyak tahun: $5 \\times 400.000 = \\text{Rp}2.000.000$.",
            "Saldo akhir $= 5.000.000 + 2.000.000 = \\text{Rp}7.000.000$.",
          ],
          wrongIndex: 1,
          explanation: "Langkah kedua keliru karena bunga majemuk dihitung dari **saldo terbaru**, bukan modal awal. Saldo yang benar adalah $5.000.000(1{,}08)^{5} \\approx \\text{Rp}7.346.640$, bukan Rp7.000.000. Selisihnya berasal dari bunga atas bunga.",
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
            "Mengapa menabung lebih awal lebih menguntungkan daripada menabung dengan jumlah sama tetapi lebih lambat?",
            "Dalam situasi apa bunga tunggal lebih tepat dipakai daripada bunga majemuk?",
            "Kesalahan mana yang paling mungkin kamu lakukan, dan bagaimana cara memeriksanya?",
          ],
          confidenceLabel: "Seberapa yakin kamu dengan materi bunga majemuk ini?",
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
            "Rumus",
          ],
          rows: [
            [
              "Saldo bunga majemuk",
              "$M_n = M_0(1+i)^n$",
            ],
            [
              "Suku bunga per periode",
              "$i = \\dfrac{j}{m}$",
            ],
            [
              "Banyak periode",
              "$n = m \\cdot t$",
            ],
            [
              "Suku bunga efektif",
              "$i_{\\text{efektif}} = \\left(1+\\dfrac{j}{m}\\right)^{m} - 1$",
            ],
            [
              "Bunga tunggal (pembanding)",
              "$M_n = M_0(1 + i\\,n)$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Tiket keluar.** (1) Mengapa saldo pada bunga majemuk membentuk barisan geometri? (2) Mengapa suku bunga efektif selalu lebih besar daripada suku bunga nominal? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Bunga Majemuk** untuk latihan tambahan.`,
    },
  ],
};

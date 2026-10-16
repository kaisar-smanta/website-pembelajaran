import type { Topic } from '@/types/content';

export const bungaMajemuk: Topic = {
  id: 'bunga-majemuk',
  slug: 'bunga-majemuk',
  title: 'Bunga Majemuk',
  subtitle: 'Ketika bunga ikut menghasilkan bunga',
  grade: 'XI',
  phase: 'F',
  element: 'bilangan',
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
      body: `Bunga majemuk berdiri di atas eksponen dan barisan geometri. Sebelum mulai, pastikan kamu sudah bisa:

- memakai sifat eksponen, terutama $(1+i)^n$ dan pangkat bilangan rasional;
- menuliskan barisan geometri dengan rasio tetap $(1+i)$;
- mengubah persen menjadi desimal, seperti $8\\% = 0{,}08$.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Bank menghitung bunga tabungan berdasarkan **saldo terkini**, bukan saldo awal. Karena itu saldo tumbuh mengikuti pola perkalian berulang. Inilah bunga majemuk. Prinsip yang sama dipakai pada pinjaman: sisa utang pun dikenai bunga, sehingga utang dapat membengkak bila tidak dibayar.

Memahami bunga majemuk membantu kita membandingkan produk keuangan, memahami inflasi, dan memutuskan antara menabung sekarang atau kemudian.`,
    },
    {
      id: "bunga-tunggal",
      kind: "konsep",
      title: "Mengenal Bunga Tunggal",
      questionIds: ['bm-04'],
      body: `Sebelum mendalami bunga majemuk, ingat kembali **bunga tunggal**. Pada bunga tunggal, bunga selalu dihitung dari modal awal, bukan dari saldo terbaru. Jika modal awal $M_0$, suku bunga $i$ per periode, dan lama $n$ periode, saldo akhirnya adalah

$$M_n = M_0(1 + i\\,n).$$

Karena setiap periode menambah besar bunga yang sama, pertumbuhannya **linear**. Berbeda dari bunga majemuk yang memakai pangkat $(1+i)^n$ sehingga bunganya makin besar setiap periode.

Contoh: modal Rp5.000.000 dengan bunga tunggal $8\\%$ per tahun selama $5$ tahun memberi
$$M_5 = 5.000.000(1 + 0{,}08 \\cdot 5) = \\text{Rp}7.000.000,$$
sedangkan bunga majemuk dengan suku bunga yang sama menghasilkan $5.000.000(1{,}08)^{5} \\approx \\text{Rp}7.346.640$. Selisih Rp346.640 itulah bunga atas bunga yang hanya muncul pada bunga majemuk.`,
      blocks: [
        {
          kind: "figure",
          alt: "Grafik yang membandingkan saldo bunga tunggal berupa garis lurus dengan saldo bunga majemuk berupa kurva yang makin menanjak seiring bertambahnya periode.",
          caption: "Pertumbuhan bunga tunggal (garis putus-putus, linear) dibandingkan bunga majemuk (kurva melengkung ke atas). Keduanya mulai dari nilai yang sama, tetapi selisihnya makin lebar setiap periode.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="45" y1="190" x2="300" y2="190" stroke="currentColor" stroke-width="1.5"/><line x1="45" y1="190" x2="45" y2="25" stroke="currentColor" stroke-width="1.5"/><polyline points="45,181 69,172 93,162 117,152 141,140 165,127 189,113 213,97 237,80 261,61 285,39" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="45" y1="181" x2="285" y2="92" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><text x="292" y="208" font-size="12" fill="currentColor">n</text><text x="8" y="30" font-size="12" fill="currentColor">saldo</text><text x="246" y="34" font-size="12" fill="currentColor">majemuk</text><text x="248" y="116" font-size="12" fill="currentColor">tunggal</text><text x="40" y="206" font-size="11" fill="currentColor">0</text><text x="276" y="206" font-size="11" fill="currentColor">10</text></svg>',
        },
      ],
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
              back: "Bunga untuk satu periode, seperti $8\\%$ per tahun atau $1\\%$ per bulan.",
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

Karena $n$ menyatakan banyak periode, lamanya $t$ tahun setara dengan $n = m \\cdot t$ periode. Ambil nominal $12\\%$ dengan perhitungan bulanan, yang berarti $i = \\dfrac{0{,}12}{12} = 0{,}01$ per bulan.`,
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
              body: "Bunga dinyatakan untuk satu tahun penuh, contohnya $j = 12\\%$ per tahun.",
            },
            {
              label: "Per periode",
              body: "Bagi nominal dengan frekuensi: $i = j/m$, seperti $12\\% / 12 = 1\\%$ per bulan.",
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

Contoh: nominal $12\\%$ dihitung bulanan memberi $i_{\\text{efektif}} = (1{,}01)^{12} - 1 \\approx 0{,}126825$, yaitu sekitar **12,68%** per tahun, lebih tinggi daripada nominalnya.`,
      blocks: [
        {
          kind: "figure",
          alt: "Kurva suku bunga efektif yang menanjak lalu mendatar menuju batas 12,75 persen seiring bertambahnya frekuensi pemajemukan.",
          caption: "Kurva suku bunga efektif untuk nominal $12\\%$ per tahun: $i_{\\text{efektif}} = \\left(1+\\dfrac{0{,}12}{m}\\right)^{m}-1$. Nilai menanjak seiring frekuensi $m$, tetapi tambahannya makin kecil dan mendekati $12{,}75\\%$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="50" y1="210" x2="300" y2="210" stroke="currentColor" stroke-width="1.2"/><line x1="50" y1="210" x2="50" y2="45" stroke="currentColor" stroke-width="1.2"/><line x1="55" y1="60" x2="300" y2="60" stroke="currentColor" stroke-width="1.2" stroke-dasharray="6 4"/><polyline points="74,190 93,128 113,106 132,95 170,83 285,72" fill="none" stroke="currentColor" stroke-width="2.4"/><circle cx="74" cy="190" r="2.8" fill="currentColor"/><circle cx="93" cy="128" r="2.8" fill="currentColor"/><circle cx="113" cy="106" r="2.8" fill="currentColor"/><circle cx="132" cy="95" r="2.8" fill="currentColor"/><circle cx="170" cy="83" r="2.8" fill="currentColor"/><circle cx="285" cy="72" r="2.8" fill="currentColor"/><text x="292" y="226" font-size="12" fill="currentColor">m</text><text x="30" y="52" font-size="12" fill="currentColor">i</text><text x="198" y="53" font-size="11" fill="currentColor">batas 12,75%</text><text x="62" y="206" font-size="10" fill="currentColor">1</text><text x="270" y="206" font-size="10" fill="currentColor">12</text></svg>',
        },
      ],
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
      id: "rumus",
      kind: "rumus",
      title: "Rumus dan Prosedur",
      body: `**Bunga tunggal.** $M_n = M_0(1 + i\\,n)$.

**Bunga majemuk.** Saldo setelah $n$ periode:
$$M_n = M_0(1+i)^n.$$

**Beberapa kali setahun.** Nominal tahunan $j$ dengan $m$ periode per tahun memberi suku bunga per periode $i = \\dfrac{j}{m}$ dan banyak periode $n = m \\cdot t$.

**Suku bunga efektif per tahun:**
$$i_{\\text{efektif}} = \\left(1+\\frac{j}{m}\\right)^{m}-1.$$

**Prosedur.** (1) Catat modal awal $M_0$. (2) Ubah suku bunga menjadi suku bunga per periode. (3) Tentukan banyak periode dari lamanya waktu. (4) Substitusikan ke $M_n = M_0(1+i)^n$, dan simpan angka desimal sampai langkah akhir.`,
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      blocks: [
        {
          kind: "step-reveal",
          intro: "Empat contoh berikut melatih perhitungan saldo tahunan, suku bunga efektif, dan perhitungan beberapa kali setahun. Kerjakan bertahap.",
          steps: [
            {
              title: "Contoh 1 (saldo tahunan)",
              text: `Ibu menabung Rp5.000.000 dengan bunga majemuk $8\\%$ per tahun. Berapa saldo setelah $5$ tahun?

*Penyelesaian.* Catat $M_0 = 5.000.000$, $i = 0{,}08$, dan $n = 5$, lalu gunakan $M_n = M_0(1+i)^n$:
$$M_5 = 5.000.000(1{,}08)^{5} = 5.000.000(1{,}469328) \\approx \\text{Rp}7.346.640.$$
Sebagai pembanding, bunga tunggal hanya memberi $5.000.000(1 + 0{,}08 \\cdot 5) = \\text{Rp}7.000.000$. Selisih sekitar **Rp346.640** berasal dari bunga atas bunga.

*Verifikasi.* Telusuri baris per tahun: $5.000.000 \\to 5.400.000 \\to 5.832.000 \\to 6.298.560 \\to 6.802.445 \\to 7.346.640$. Cocok dengan hasil pangkat.`,
            },
            {
              title: "Contoh 2 (bunga tunggal sebagai pembanding)",
              text: `Modal Rp2.000.000 dibungakan **tunggal** $6\\%$ per tahun selama $4$ tahun. Tentukan saldo akhirnya, lalu bandingkan dengan bunga majemuk berperiode sama.

*Penyelesaian.* Pada bunga tunggal, bunga selalu dihitung dari modal awal:
$$M_4 = 2.000.000(1 + 0{,}06 \\cdot 4) = 2.000.000(1{,}24) = \\text{Rp}2.480.000.$$
Sebagai pembanding, bunga majemuk memberi $2.000.000(1{,}06)^{4} \\approx \\text{Rp}2.524.954$. Selisih Rp44.954 itulah bunga atas bunga.

*Verifikasi.* Bunga tunggal bertambah tetap $2.000.000 \\times 6\\% = \\text{Rp}120.000$ setiap tahun; setelah $4$ tahun totalnya Rp480.000, sehingga saldo Rp2.480.000. Cocok.`,
            },
            {
              title: "Contoh 3 (suku bunga efektif)",
              text: `Suku bunga nominal $12\\%$ per tahun dihitung bulanan. Tentukan suku bunga efektif per tahun.

*Penyelesaian.* Bunga per bulan $i = \\dfrac{0{,}12}{12} = 0{,}01$ dengan $m = 12$ periode per tahun. Maka
$$i_{\\text{efektif}} = (1{,}01)^{12} - 1 \\approx 0{,}126825,$$
yaitu sekitar **12,68%** per tahun, lebih tinggi daripada nominalnya.

*Verifikasi.* Faktor tahunan $(1{,}01)^{12} \\approx 1{,}126825$ berarti pertumbuhan nyata $12{,}68\\%$, memang melebihi nominal $12\\%$. Cocok.`,
            },
            {
              title: "Contoh 4 (perhitungan kuartalan)",
              text: `Suku bunga nominal $9\\%$ per tahun dihitung setiap kuartal. Tentukan saldo Rp4.000.000 setelah $2$ tahun.

*Penyelesaian.* Bunga per kuartal $i = \\dfrac{0{,}09}{4} = 0{,}0225$ dan banyak periode $n = 4 \\times 2 = 8$, sehingga
$$M_8 = 4.000.000(1{,}0225)^{8} \\approx 4.000.000(1{,}194831) \\approx \\text{Rp}4.779.324.$$
Jadi saldonya sekitar **Rp4.779.324**.

*Verifikasi.* Setiap kuartal saldo dikali $1{,}0225$; delapan kali pengalian setara dengan $(1{,}0225)^{8} \\approx 1{,}194831$. Cocok.`,
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
      body: `Bunga majemuk menjelaskan mengapa menabung lebih awal sangat menguntungkan, dan mengapa utang kartu kredit bisa cepat membengkak. Bandingkan angkanya: uang Rp1.000.000 yang ditabung dengan bunga $8\\%$ per tahun menjadi $1.000.000(1{,}08)^{10} \\approx \\text{Rp}2.158.925$ setelah $10$ tahun, hampir dua kali lipat. Sebaliknya, sisa utang kartu Rp1.000.000 dengan bunga $2\\%$ per bulan membengkak menjadi $1.000.000(1{,}02)^{12} \\approx \\text{Rp}1.268.242$ hanya dalam satu tahun bila tidak dibayar. Bandingkan dua studi kasus pada halaman [Memilih Tabungan](/aplikasi/bunga-investasi) dan [Kredit Motor](/aplikasi/anuitas-pinjaman).`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menggunakan penalaran bunga tunggal.** Menghitung $5.000.000 \\times 8\\% \\times 5 = \\text{Rp}2.000.000$ lalu menambahkan ke modal memberi Rp7.000.000. Cara ini **salah** untuk bunga majemuk karena mengabaikan bunga atas bunga; hasil yang benar Rp7.346.640.

**2. Mencampur suku bunga nominal dan per periode.** Memakai 12% langsung untuk perhitungan bulanan, padahal $i = 1\\%$ per bulan. Akibatnya saldo terhitung jauh lebih besar dari seharusnya.

**3. Salah menentukan $n$.** Menulis $n = 5$ untuk "5 tahun" meskipun bunga dihitung bulanan; seharusnya $n = 60$ periode.

**4. Membulatkan terlalu awal.** Membulatkan $(1{,}06)^4 = 1{,}26$ sebelum mengalikan membuat hasil meleset. Simpan angka desimal sampai langkah akhir.

**5. Menganggap suku bunga efektif sama dengan nominal.** Karena efek majemuk, efektif selalu $\\ge$ nominal (sama hanya jika dihitung sekali setahun).

**6. Mengalikan suku bunga per periode dengan banyak periode.** Untuk saldo kuartalan, menghitung $1 + 0{,}03 \\times 8 = 1{,}24$ keliru karena bunga majemuk berlipat, bukan bertambah linear. Yang benar $(1{,}03)^{8} \\approx 1{,}2668$.`,
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
      id: "tantangan",
      kind: "tantangan",
      title: "Tantangan",
      body: `**Soal.** Modal Rp2.000.000 dibungakan majemuk $8\\%$ per tahun. Setelah berapa tahun penuh saldo menjadi paling sedikit **dua kali** modal? Kerjakan tanpa kalkulator logaritma dengan memeriksa tahun demi tahun.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Kita perlu mencari $n$ terkecil dengan $(1{,}08)^n \\ge 2$.",
          steps: [
            {
              title: "Langkah 1",
              text: "Syarat berlipat dua: $2.000.000(1{,}08)^n \\ge 4.000.000$, yaitu $(1{,}08)^n \\ge 2$.",
            },
            {
              title: "Langkah 2",
              text: "Periksa tahun ke-9: $(1{,}08)^{9} \\approx 1{,}999$, yang masih **kurang** dari $2$.",
            },
            {
              title: "Langkah 3",
              text: "Periksa tahun ke-10: $(1{,}08)^{10} = (1{,}08)^{9}\\times1{,}08 \\approx 1{,}999\\times1{,}08 \\approx 2{,}159 \\ge 2$.",
            },
            {
              title: "Langkah 4",
              text: "Jadi setelah **10 tahun** saldo mencapai paling sedikit dua kali modal, yaitu sekitar $2.000.000\\times2{,}159 = \\text{Rp}4.318.000$.",
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Jejak Sejarah",
      body: `Bunga majemuk sudah dikenal sejak lama di dunia perdagangan. Dokumen kuno dari Mesopotamia dan India menunjukkan perhitungan bunga, termasuk bunga atas bunga, untuk mencatat utang dan hasil panen. Pengetahuan itu masuk ke Eropa melalui para pedagang Italia; Leonardo dari Pisa (Fibonacci), dalam *Liber Abaci* (1202), memuat soal-soal pertumbuhan uang. Tabel bunga dan gagasan suku bunga efektif berkembang bersama berdirinya bank-bank modern pada abad ke-16 sampai ke-18. Gagasan kunci yang kita pakai sekarang, yaitu saldo tumbuh sebagai barisan geometri dengan rasio $(1+i)$, sudah tampak pada tabel perhitungan para bankir sejak berabad-abad lalu.`,
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
          confidenceLabel: "Seberapa yakin kamu membedakan bunga tunggal dan majemuk serta menghitung saldo akhir?",
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
      questionIds: ['bm-09'],
      body: `**Uji diri sebentar.** (1) Apa yang membuat saldo bunga majemuk tumbuh sebagai barisan geometri, bukan garis lurus? (2) Tunjukkan dengan contoh angka mengapa suku bunga efektif tidak pernah lebih kecil daripada nominal. Setelah itu, lanjut ke [Latihan & Asesmen](/latihan) topik **Bunga Majemuk** untuk latihan tambahan.`,
    },
  ],
};

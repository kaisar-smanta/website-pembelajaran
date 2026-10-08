import type { Topic } from '@/types/content';

export const anuitas: Topic = {
  id: 'anuitas',
  slug: 'anuitas',
  title: 'Anuitas',
  subtitle: 'Angsuran tetap dengan komposisi bunga yang berubah',
  grade: 'XI',
  phase: 'F',
  element: 'bilangan',
  featured: true,
  status: 'lengkap',
  estimatedMinutes: 90,
  summary:
    'Memahami pembayaran berkala dengan besar tetap, serta menghitung nilai sekarang, nilai masa depan, dan tabel amortisasi pinjaman.',
  description:
    'Anuitas adalah rangkaian pembayaran sama besar yang dilakukan secara berkala. Skema ini mendasari kredit kendaraan, KPR, dan program pensiun. Topik ini menggabungkan barisan geometri, bunga majemuk, dan penalaran keuangan untuk membaca tabel amortisasi secara kritis.',
  keywords: ['anuitas', 'amortisasi', 'pinjaman', 'nilai sekarang', 'nilai masa depan', 'angsuran', 'bunga'],
  prerequisites: ['bunga-majemuk', 'barisan-deret'],
  relatedTopics: ['bunga-majemuk', 'fungsi-eksponensial'],
  prerequisiteKnowledge: [
    'Rumus bunga majemuk $M_n = M_0(1+i)^n$',
    'Rumus jumlah deret geometri',
    'Pengertian persentase per periode',
  ],
  objectives: [
    { text: 'Menjelaskan pengertian anuitas dan membedakannya dari bunga majemuk biasa.' },
    { text: 'Menurunkan rumus besar angsuran anuitas dari jumlah deret geometri.' },
    { text: 'Menghitung besar angsuran, total pembayaran, dan total bunga.' },
    { text: 'Menghitung nilai sekarang dan nilai masa depan suatu anuitas.' },
    { text: 'Membaca dan menafsirkan tabel amortisasi, termasuk komposisi pokok dan bunga.' },
  ],
  applications: ['anuitas-pinjaman'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Peserta didik dapat menghitung besar angsuran anuitas, menyusun tabel amortisasi, serta menilai secara kritis penawaran pinjaman berdasarkan total bunga dan beban awal yang harus dibayar.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      body: `Pak Budi meminjam Rp10.000.000 dan mengangsur **Rp500.000 setiap bulan** selama 24 bulan. Total yang ia bayar Rp12.000.000, sehingga bunganya Rp2.000.000.

Pertanyaan: apakah setiap bulan ia membayar bunga yang sama? Jika bunga per bulan 1,5%, berapa bagian angsuran yang benar-benar mengurangi utang pada **bulan pertama**? Jawaban ini menunjukkan mengapa saldo utang turun perlahan di awal.`,
      blocks: [
        {
          kind: "prediction",
          prompt: "Jika bunga per bulan $1{,}5\\%$, berapa bagian dari angsuran Rp500.000 pada **bulan pertama** yang benar-benar mengurangi utang pokok? Pilih dugaanmu, lalu bandingkan.",
          options: [
            "Rp500.000 (seluruhnya)",
            "Rp350.000",
            "Rp150.000",
            "Rp50.000",
          ],
          reveal: "Pada bulan pertama, bunga $= 0{,}015 \\times 10.000.000 = \\text{Rp}150.000$. Karena angsuran Rp500.000, yang mengurangi pokok hanya Rp350.000. Bunga bulan berikutnya dihitung dari sisa utang yang lebih kecil, sehingga porsi pokok makin besar dan porsi bunga makin kecil — meskipun angsurannya tetap.",
          saveLabel: "Simpan dugaan",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu menguasai:

- rumus bunga majemuk dan cara menyesuaikan suku bunga per periode;
- jumlah $n$ suku pertama deret geometri;
- operasi bentuk pangkat dengan eksponen negatif.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Saat membeli kendaraan atau rumah dengan kredit, pembeli membayar sejumlah uang tetap setiap bulan. Besar angsuran dirancang agar utang beserta bunganya **lunas tepat** pada akhir periode. Rangkaian pembayaran tetap inilah yang disebut **anuitas**.

Memahami anuitas membantu kita menghitung kemampuan membayar, membandingkan penawaran, dan menyadari bahwa angsuran "terjangkau" belum tentu totalnya murah.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti",
      body: `**Anuitas** adalah rangkaian pembayaran sebesar $A$ yang dilakukan secara berkala (misalnya tiap bulan) untuk melunasi pinjaman atau mengumpulkan dana. Ciri utamanya: **besar setoran tetap**, tetapi **komposisinya berubah** dari periode ke periode — porsi bunga menyusut dan porsi pokok membesar.

Ide kuncinya adalah **menyetarakan nilai waktu uang**. Pokok pinjaman $M$ diterima hari ini, sedangkan seluruh angsuran dibayar pada masa mendatang. Agar adil, nilai sekarang seluruh angsuran harus sama dengan $M$. Karena angsuran ke-$k$ baru dibayar setelah $k$ periode, nilainya didiskontokan dengan faktor $\\dfrac{1}{(1+i)^k}$.

Dari kesetaraan nilai sekarang itulah lahir **rumus angsuran anuitas**:

$$A = M \\cdot \\frac{i(1+i)^n}{(1+i)^n - 1}.$$

Rumus ini setara dengan $A = \\dfrac{M \\cdot i}{1-(1+i)^{-n}}$: cukup membagi pembilang dan penyebut dengan $(1+i)^n$. Artinya, jika pokok $M$, suku bunga per periode $i$, dan banyak periode $n$ diketahui, besar angsuran tunggal yang **tepat melunasi** utang pada waktunya dapat dihitung.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Inti anuitas",
          text: "Semua angsuran sama besar, tetapi tiap angsuran menyatukan **angsuran bunga** (dihitung dari sisa utang) dan **angsuran pokok** (sisanya). Karena sisa utang selalu menurun, bunga tiap periode ikut menurun dan porsi pokok makin besar.",
        },
        {
          kind: "table",
          caption: "Membaca besaran pada rumus $A = M \\cdot \\dfrac{i(1+i)^n}{(1+i)^n - 1}$",
          headers: ["Lambang", "Arti", "Satuan"],
          rows: [
            ["$A$", "besar angsuran tetap tiap periode", "rupiah"],
            ["$M$", "pokok pinjaman awal", "rupiah"],
            ["$i$", "suku bunga per periode", "desimal"],
            ["$n$", "banyak periode pembayaran", "periode"],
          ],
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Menurunkan Rumus Anuitas",
      body: `Misalkan pokok pinjaman $M$, suku bunga per periode $i$, dan $n$ periode. Misalkan besar angsuran tetap $A$ dibayar di **akhir** setiap periode. Nilai tunai seluruh angsuran harus sama dengan pokok pinjaman:

$$M = \\frac{A}{1+i} + \\frac{A}{(1+i)^2} + \\cdots + \\frac{A}{(1+i)^n}.$$

Ruas kanan adalah deret geometri dengan suku pertama $\\dfrac{A}{1+i}$ dan rasio $\\dfrac{1}{1+i}$. Dengan rumus jumlah deret geometri diperoleh

$$M = A \\cdot \\frac{1-(1+i)^{-n}}{i}.$$

Menyusun ulang untuk $A$:

$$A = \\frac{M \\cdot i}{1-(1+i)^{-n}}.$$

Inilah **rumus angsuran anuitas**. Angsuran $A$ terdiri atas **angsuran bunga** $i \\times \\text{sisa utang}$ dan **angsuran pokok**, yaitu sisanya.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Anuitas vs bunga majemuk",
          text: "Pada bunga majemuk, kita mencari saldo **akhir**. Pada anuitas, kita mencari pembayaran tetap yang membuat saldo akhir menjadi **nol**. Keduanya memakai basis $(1+i)^n$, tetapi tujuannya berbeda.",
        },
        {
          kind: "match",
          intro: "Pasangkan setiap istilah anuitas dengan maknanya.",
          pairs: [
            {
              left: "Anuitas",
              right: "Rangkaian pembayaran sama besar secara berkala",
            },
            {
              left: "Angsuran pokok",
              right: "Bagian angsuran yang mengurangi sisa utang",
            },
            {
              left: "Angsuran bunga",
              right: "$i \\times$ sisa utang pada periode itu",
            },
            {
              left: "Nilai sekarang (PV)",
              right: "Nilai tunai seluruh angsuran saat ini",
            },
            {
              left: "Nilai masa depan (FV)",
              right: "Saldo terkumpul dari setoran rutin",
            },
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi Nilai Sekarang dan Nilai Masa Depan",
      body: `Nilai sekarang (present value) dari $n$ angsuran sebesar $A$ adalah

$$PV = A \\cdot \\frac{1-(1+i)^{-n}}{i}.$$

Nilai masa depan (future value) dari $n$ angsuran $A$ yang diinvestasikan adalah

$$FV = A \\cdot \\frac{(1+i)^{n}-1}{i}.$$

Rumus $PV$ menjawab "berapa pinjaman yang setara dengan angsuran ini", sedangkan $FV$ menjawab "berapa saldo terkumpul dari menabung rutin".`,
      blocks: [
        {
          kind: "tabs",
          items: [
            {
              label: "Simbolik",
              body: "$PV = A \\cdot \\frac{1-(1+i)^{-n}}{i}$ dan $FV = A \\cdot \\frac{(1+i)^{n}-1}{i}$ merangkum hubungan antara angsuran, bunga, dan waktu.",
            },
            {
              label: "Tabel",
              body: "Tabel amortisasi mencatat angsuran, bunga, pokok, dan sisa utang pada setiap periode.",
            },
            {
              label: "Grafik",
              body: "Dari periode ke periode, porsi bunga menurun dan porsi pokok meningkat meskipun besar angsuran tetap.",
            },
          ],
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi",
      body: "Gunakan simulasi berikut untuk menghitung angsuran dan melihat tabel amortisasi. Perhatikan bagaimana porsi bunga menurun dan porsi pokok meningkat dari bulan ke bulan.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "anuitas-sim",
        },
      ],
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      body: `**Contoh 1.** Pinjaman Rp10.000.000 akan dilunasi dengan anuitas 24 bulan dan bunga 1,5% per bulan. Tentukan besar angsuran.

*Penyelesaian.* Dengan $M = 10.000.000$, $i = 0{,}015$, dan $n = 24$:

$$A = \\frac{10.000.000 \\times 0{,}015}{1-(1{,}015)^{-24}}.$$

Karena $(1{,}015)^{24} \\approx 1{,}429503$, maka $(1{,}015)^{-24} \\approx 0{,}699544$, sehingga

$$A = \\frac{150.000}{1-0{,}699544} = \\frac{150.000}{0{,}300456} \\approx \\text{Rp}499.241.$$

Total pembayaran $= 24 \\times 499.241 = \\text{Rp}11.981.784$, dengan **total bunga sekitar Rp1.981.784**.

**Contoh 2 (tabel amortisasi awal).** Berdasarkan Contoh 1, tentukan komposisi angsuran bulan pertama dan sisa utang setelahnya.

*Penyelesaian.* Bunga bulan 1 $= 0{,}015 \\times 10.000.000 = \\text{Rp}150.000$. Angsuran pokok $= 499.241 - 150.000 = \\text{Rp}349.241$. Sisa utang $= 10.000.000 - 349.241 = \\text{Rp}9.650.759$.

Bulan 2: bunga $= 0{,}015 \\times 9.650.759 \\approx \\text{Rp}144.761$; angsuran pokok $\\approx \\text{Rp}354.480$. Terlihat porsi pokok meningkat.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Ikuti langkah menghitung besar angsuran pinjaman Rp10.000.000 dengan anuitas 24 bulan dan bunga 1,5% per bulan.",
          steps: [
            {
              title: "Langkah 1",
              text: "Catat besaran yang diketahui: $M = 10.000.000$, $i = 0{,}015$, dan $n = 24$.",
            },
            {
              title: "Langkah 2",
              text: "Hitung faktor diskon: $(1{,}015)^{24} \\approx 1{,}429503$, sehingga $(1{,}015)^{-24} \\approx 0{,}699544$.",
            },
            {
              title: "Langkah 3",
              text: "Substitusi ke rumus: $A = \\frac{10.000.000 \\times 0{,}015}{1 - 0{,}699544} = \\frac{150.000}{0{,}300456}$.",
            },
            {
              title: "Langkah 4",
              text: "Bagi dan bulatkan: $A \\approx \\text{Rp}499.241$ per bulan.",
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
      body: "Anuitas dipakai pada KPR, kredit kendaraan, dan dana pensiun. Lihat analisis lengkap pada halaman [Kredit Motor](/aplikasi/anuitas-pinjaman) untuk memahami mengapa saldo pokok turun perlahan di awal periode.",
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menganggap bunga setiap periode sama.** Bunga dihitung dari sisa utang, sehingga menurun setiap periode meskipun angsuran tetap.

**2. Menjumlahkan suku bunga secara salah.** Untuk 5 tahun pada 12% per tahun, tidak benar memakai $i = 12\\%$ dan $n=5$; jika dihitung bulanan, gunakan $i = 1\\%$ dan $n = 60$.

**3. Lupa mengubah tenor menjadi jumlah periode.** "5 tahun" harus dikonversi ke 60 bulan.

**4. Membandingkan hanya besar angsuran.** Angsuran kecil karena tenor panjang belum tentu murah; bandingkan **total bunga**.

**5. Membulatkan angsuran terlalu awal.** Membulatkan $A$ ke ribuan sebelum menghitung total membuat kesalahan menumpuk.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Perhatikan perhitungan angsuran pinjaman dengan bunga tahunan yang dihitung bulanan. Ada satu langkah keliru. Klik langkah yang salah.",
          steps: [
            "Pinjaman Rp10.000.000 dengan bunga $12\\%$ per tahun, dihitung bulanan, tenor $5$ tahun.",
            "Gunakan suku bunga $i = 12\\% = 0{,}12$ untuk **setiap bulan**.",
            "Gunakan $n = 5 \\times 12 = 60$ periode.",
            "Hitung $A = \\frac{10.000.000(0{,}12)}{1-(1{,}12)^{-60}}$.",
          ],
          wrongIndex: 1,
          explanation: "Langkah kedua keliru. Suku bunga tahunan harus diubah ke per periode: $i = 12\\% / 12 = 1\\% = 0{,}01$ per bulan. Memakai $i = 0{,}12$ per bulan membuat angsuran tampak jauh lebih besar daripada seharusnya.",
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
            "Mengapa porsi bunga besar pada awal periode tetapi kecil pada akhir periode?",
            "Informasi apa yang paling penting diminta sebelum menyetujui pinjaman?",
            "Bagaimana kamu menjelaskan arti \"total bunga\" kepada orang yang hanya melihat besar angsuran?",
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
            "Rumus",
          ],
          rows: [
            [
              "Angsuran anuitas",
              "$A = \\dfrac{M \\cdot i}{1-(1+i)^{-n}}$",
            ],
            [
              "Nilai sekarang",
              "$PV = A \\cdot \\dfrac{1-(1+i)^{-n}}{i}$",
            ],
            [
              "Nilai masa depan",
              "$FV = A \\cdot \\dfrac{(1+i)^{n}-1}{i}$",
            ],
            [
              "Bunga periode ke-$k$",
              "$i \\times \\text{sisa utang}_{k-1}$",
            ],
            [
              "Total pembayaran",
              "$n \\times A$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Tiket keluar.** (1) Mengapa bunga tiap periode berbeda meskipun besar angsuran tetap? (2) Jika tenor diperpanjang, mengapa angsuran bulanan turun tetapi total bunga justru naik? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Anuitas** untuk latihan tambahan.`,
    },
  ],
};

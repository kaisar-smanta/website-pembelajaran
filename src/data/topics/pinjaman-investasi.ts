import type { Topic } from '@/types/content';

export const pinjamanInvestasi: Topic = {
  id: 'pinjaman-investasi',
  slug: 'pinjaman-investasi',
  title: 'Pinjaman dan Investasi',
  subtitle: 'Membandingkan alternatif dan mengambil keputusan',
  grade: 'XII',
  phase: 'F',
  element: 'bilangan',
  status: 'lengkap',
  estimatedMinutes: 95,
  summary:
    'Membangun model pinjaman dan investasi, menghitung total pembayaran serta total bunga, membandingkan beberapa penawaran, dan mengambil keputusan finansial berdasarkan perhitungan.',
  description:
    'Keputusan finansial sehari-hari sering berupa pilihan: melunasi dengan tenor pendek atau panjang, membeli tunai atau kredit, menabung rutin atau menunda. Topik ini membangun model matematika untuk pinjaman anuitas dan investasi berkala, lalu memakainya untuk menghitung total pembayaran, total bunga, nilai masa depan, dan nilai sekarang. Dengan membandingkan beberapa penawaran secara kuantitatif, kita belajar mengambil keputusan yang masuk akal sekaligus menyadari risiko sederhana seperti kenaikan suku bunga dan biaya administrasi.',
  keywords: [
    'pinjaman',
    'investasi',
    'anuitas',
    'bunga',
    'nilai waktu uang',
    'keputusan',
  ],
  prerequisites: ['anuitas', 'bunga-majemuk'],
  relatedTopics: ['barisan-deret'],
  prerequisiteKnowledge: [
    'Rumus bunga majemuk $M_n = M_0(1+i)^n$',
    'Konsep anuitas dan tabel amortisasi',
    'Operasi persentase per periode',
    'Gagasan nilai uang terhadap waktu',
  ],
  objectives: [
    { text: 'Membangun model matematika untuk pinjaman anuitas dan investasi berkala.' },
    { text: 'Menghitung besar angsuran, total pembayaran, dan total bunga suatu pinjaman.' },
    { text: 'Menghitung nilai masa depan dan nilai sekarang dari rangkaian setoran tetap.' },
    { text: 'Membandingkan dua penawaran pinjaman berdasarkan total bunga dan total biaya.' },
    { text: 'Mengambil keputusan finansial dan menilai risiko sederhana seperti kenaikan suku bunga serta biaya administrasi.' },
  ],
  applications: ['dana-pensiun'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Peserta didik dapat menyusun model matematika untuk pinjaman dan investasi, menghitung besar angsuran, total pembayaran, dan total bunga, membandingkan beberapa penawaran secara kuantitatif, serta mengambil keputusan finansial yang masuk akal berdasarkan perhitungan.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      blocks: [
        {
          kind: "prediction",
          prompt: `Pak Rudi dan Pak Soni sama-sama meminjam Rp10.000.000 untuk membeli motor.

- **Penawaran A**: bunga $1{,}25\\%$ per bulan, tenor $36$ bulan.
- **Penawaran B**: bunga $1{,}5\\%$ per bulan, tenor $24$ bulan.

Pak Rudi memilih B agar cepat selesai. Pak Soni memilih A karena angsuran bulanannya lebih kecil. Menurutmu, penawaran mana yang **total bunganya** lebih kecil? Coba duga dahulu, baru hitung.`,
          reveal: `Penawaran A: $A = \\dfrac{10.000.000 \\times 0{,}0125}{1-(1{,}0125)^{-36}} \\approx \\text{Rp}346.653{,}29$, total $36 \\times 346.653{,}29 \\approx \\text{Rp}12.479.518$, sehingga total bunga $\\approx \\text{Rp}2.479.518$.

Penawaran B: $A = \\dfrac{10.000.000 \\times 0{,}015}{1-(1{,}015)^{-24}} \\approx \\text{Rp}499.241$, total $\\approx \\text{Rp}11.981.784$, sehingga total bunga $\\approx \\text{Rp}1.981.784$.

Ternyata **B** total bunganya lebih kecil meskipun suku bunga per bulannya lebih tinggi, karena tenornya lebih pendek. Angsuran bulanan yang lebih kecil tidak otomatis berarti lebih murah.`,
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- rumus bunga majemuk dan penyesuaian suku bunga per periode;
- rumus angsuran anuitas $A = \\dfrac{M \\cdot i}{1-(1+i)^{-n}}$;
- pembacaan tabel amortisasi (komposisi pokok dan bunga);
- operasi persentase dan pembulatan uang.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Setiap hari kita berhadapan dengan keputusan uang: memilih KPR dengan tenor $15$ atau $20$ tahun, membeli barang secara tunai atau kredit, atau menabung rutin untuk dana pendidikan. Setiap pilihan punya konsekuensi berbeda.

Pinjaman anuitas memberi kita sejumlah uang sekarang dan meminta pembayaran tetap di masa depan. Investasi berkala melakukan kebalikannya: kita menyetor sejumlah tetap sekarang agar memperoleh saldo di masa depan. Keduanya berkaitan melalui **nilai waktu uang** — uang yang dibayar atau diterima pada waktu berbeda tidak dapat langsung dibandingkan.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Model Pinjaman dan Investasi",
      body: `Misalkan pokok pinjaman $M$, suku bunga per periode $i$, dan banyak periode $n$.

**Pinjaman.** Besar angsuran tetap (anuitas) dihitung dengan
$$A = \\frac{M \\cdot i}{1-(1+i)^{-n}}.$$
Dari sini kita memperoleh
$$\\text{total pembayaran} = n \\cdot A, \\qquad \\text{total bunga} = n \\cdot A - M.$$
Total bunga adalah **biaya meminjam**. Semakin panjang tenor, semakin kecil $A$ tetapi semakin besar total bunga.

**Investasi.** Jika kita menyetor sebesar $A$ setiap periode, saldo akhir (nilai masa depan) adalah
$$FV = A \\cdot \\frac{(1+i)^{n}-1}{i},$$
sedangkan nilai sekarang dari rangkaian pembayaran itu adalah
$$PV = A \\cdot \\frac{1-(1+i)^{-n}}{i}.$$
Dengan membalik rumus $FV$, kita dapat menentukan setoran yang diperlukan untuk mencapai target tabungan.

**Membandingkan penawaran.** Dua penawaran tidak dibandingkan dari besar angsuran saja, melainkan dari **total pembayaran** dan **biaya tambahan** seperti biaya administrasi.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Inti yang perlu diingat",
          text: "Angsuran kecil sering berasal dari tenor panjang. Karena itu bandingkan **total bunga** atau **total biaya**, bukan hanya angka angsuran per bulan.",
        },
        {
          kind: "match",
          intro: "Cocokkan istilah pinjaman dengan maknanya.",
          pairs: [
            {
              left: "Anuitas",
              right: "Pembayaran tetap yang dilakukan berkala",
            },
            {
              left: "Pokok",
              right: "Bagian angsuran yang mengurangi utang",
            },
            {
              left: "Bunga",
              right: "Biaya atas sisa utang",
            },
            {
              left: "Tenor",
              right: "Lama waktu pinjaman",
            },
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi Rumus",
      body: "Setiap besaran finansial dapat diringkas sebagai satu rumus. Tabel berikut merangkum hubungannya.",
      blocks: [
        {
          kind: "table",
          caption: "Rumus pokok pinjaman dan investasi",
          headers: [
            "Besaran",
            "Rumus",
            "Makna",
          ],
          rows: [
            [
              "Angsuran anuitas",
              "$A = \\dfrac{M \\cdot i}{1-(1+i)^{-n}}$",
              "pembayaran tetap tiap periode",
            ],
            [
              "Total pembayaran",
              "$n \\cdot A$",
              "seluruh uang yang dikeluarkan",
            ],
            [
              "Total bunga",
              "$n \\cdot A - M$",
              "biaya meminjam",
            ],
            [
              "Nilai masa depan",
              "$FV = A \\cdot \\dfrac{(1+i)^{n}-1}{i}$",
              "saldo akhir dari setoran rutin",
            ],
            [
              "Nilai sekarang",
              "$PV = A \\cdot \\dfrac{1-(1+i)^{-n}}{i}$",
              "nilai rangkaian pembayaran saat ini",
            ],
          ],
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi",
      body: "Gunakan simulasi berikut untuk mengubah besar pinjaman, suku bunga, dan tenor. Amati bagaimana angsuran, total bunga, serta komposisi pokok dan bunga berubah.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "anuitas-sim",
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Cara membaca tabel amortisasi",
          text: "Setiap baris mewakili satu periode. Kolom **bunga** diisi $i \\times$ sisa utang periode sebelumnya. Kolom **pokok** adalah $A$ dikurangi bunga tersebut. Kolom **sisa utang** berkurang sebesar angsuran pokok. Di awal, komposisi bunga besar; di akhir, hampir seluruh angsuran adalah pokok. Jumlahkan kolom pokok untuk memastikan hasilnya sama dengan pokok pinjaman.",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Hubungan Umum Pinjaman dan Investasi",
      body: `Pinjaman dan investasi ternyata dua sisi dari hubungan yang sama. Pada pinjaman, nilai sekarang seluruh angsuran harus sama dengan pokok yang diterima:

$$M = A \\cdot \\frac{1-(1+i)^{-n}}{i}.$$

Pada investasi, nilai masa depan dari setoran rutin adalah $FV = A \\cdot \\frac{(1+i)^{n}-1}{i}$. Keduanya berasal dari jumlah deret geometri berasio $(1+i)$; yang berbeda hanya arah waktunya.

Dari sana muncul ukuran pembanding yang jujur: **total pembayaran** $nA$ dan **total bunga** $nA-M$. Karena memperpanjang tenor memperkecil $A$ tetapi menambah banyak periode, total bunga bisa justru bertambah. Sebab itu penawaran dibandingkan dari total biaya, bukan besar angsuran bulanan.`,
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
              text: `Pinjaman Rp10.000.000 akan dilunasi dengan anuitas $24$ bulan dan bunga $1{,}5\\%$ per bulan. Tentukan besar angsuran, total pembayaran, dan total bunga.

*Penyelesaian.* Dengan $M = 10.000.000$, $i = 0{,}015$, dan $n = 24$:
$$A = \\frac{10.000.000 \\times 0{,}015}{1-(1{,}015)^{-24}} = \\frac{150.000}{1-0{,}699544} = \\frac{150.000}{0{,}300456} \\approx \\text{Rp}499.241.$$
Total pembayaran $= 24 \\times 499.241 \\approx \\text{Rp}11.981.784$, sehingga total bunga $\\approx \\text{Rp}1.981.784$.`,
            },
            {
              title: "Contoh 2",
              text: `Tentukan komposisi angsuran bulan pertama dan kedua pada Contoh 1.

*Penyelesaian.* Bulan 1: bunga $= 0{,}015 \\times 10.000.000 = \\text{Rp}150.000$; pokok $= 499.241 - 150.000 = \\text{Rp}349.241$; sisa utang $= \\text{Rp}9.650.759$. Bulan 2: bunga $= 0{,}015 \\times 9.650.759 \\approx \\text{Rp}144.761$; pokok $\\approx \\text{Rp}354.480$. Porsi pokok makin besar dari bulan ke bulan.`,
            },
            {
              title: "Contoh 3",
              text: `Seseorang menabung Rp500.000 tiap bulan dengan bunga $0{,}5\\%$ per bulan. Berapa saldo akhir setelah $24$ bulan?

*Penyelesaian.*
$$FV = 500.000 \\cdot \\frac{(1{,}005)^{24}-1}{0{,}005} \\approx 500.000 \\cdot \\frac{0{,}127160}{0{,}005} \\approx \\text{Rp}12.715.978.$$
Saldo akhirnya sekitar Rp12.715.978, yaitu sekitar Rp715.978 lebih besar daripada total setoran Rp12.000.000.`,
            },
          ],
        },
        {
          kind: "table",
          caption: "Amortisasi dua bulan pertama (Contoh 1)",
          headers: [
            "Bulan",
            "Angsuran",
            "Bunga",
            "Pokok",
            "Sisa utang",
          ],
          rows: [
            [
              "1",
              "499.241,02",
              "150.000,00",
              "349.241,02",
              "9.650.758,98",
            ],
            [
              "2",
              "499.241,02",
              "144.761,38",
              "354.479,64",
              "9.296.279,34",
            ],
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
      body: `Model pinjaman dan investasi dipakai pada KPR, kredit kendaraan, kartu kredit, dana pensiun, dan reksa dana. Pola pengambilan keputusan selalu sama: tentukan tujuan, susun model, hitung total biaya atau hasil, bandingkan alternatif, lalu putuskan.

Lihat analisis penerapan pada halaman [Kredit Motor](/aplikasi/anuitas-pinjaman) untuk melihat bagaimana total bunga dihitung dari tabel amortisasi.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menilai pinjaman hanya dari angsuran bulanan.** Angsuran kecil bisa berasal dari tenor panjang dengan total bunga besar.

**2. Lupa mengubah tenor menjadi jumlah periode.** "5 tahun" dengan bunga bulanan berarti $n = 60$ dan $i$ per bulan.

**3. Mencampur suku bunga tahunan dan bulanan.** Jangan memakai $i = 12\\%$ per tahun dengan $n$ dalam bulan; ubah menjadi $i = 1\\%$ per bulan.

**4. Mengabaikan biaya administrasi dan denda.** Total biaya yang dibandingkan harus mencakup seluruh biaya, bukan hanya angsuran.

**5. Membandingkan nilai uang pada waktu berbeda tanpa menyesuaikan.** Rp1.000.000 sekarang tidak sama nilainya dengan Rp1.000.000 dua tahun lagi; gunakan konsep nilai sekarang.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati promosi \"bunga rendah\"",
          text: "Suku bunga yang terlihat kecil bisa disertai biaya administrasi, asuransi, atau denda yang membuat total pembayaran jauh lebih besar. Selalu hitung **total biaya**.",
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
            "Informasi apa yang paling menentukan ketika kamu membandingkan dua penawaran pinjaman?",
            "Kapan memperpanjang tenor masuk akal, dan kapan justru merugikan?",
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
            "Aspek",
            "Penjelasan",
          ],
          rows: [
            [
              "Angsuran anuitas",
              "$A = \\dfrac{M \\cdot i}{1-(1+i)^{-n}}$",
            ],
            [
              "Total pembayaran",
              "$n \\cdot A$",
            ],
            [
              "Total bunga",
              "$n \\cdot A - M$",
            ],
            [
              "Nilai masa depan",
              "$FV = A \\cdot \\dfrac{(1+i)^{n}-1}{i}$",
            ],
            [
              "Nilai sekarang",
              "$PV = A \\cdot \\dfrac{1-(1+i)^{-n}}{i}$",
            ],
            [
              "Membandingkan penawaran",
              "hitung total pembayaran dan total bunga, bukan hanya angsuran",
            ],
            [
              "Keputusan",
              "pertimbangkan total bunga, tenor, biaya administrasi, dan risiko suku bunga",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Tiket keluar.** (1) Mengapa total pembayaran pinjaman selalu lebih besar daripada pokoknya? (2) Ukuran apa yang paling jujur untuk membandingkan dua penawaran pinjaman? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Pinjaman dan Investasi** untuk latihan tambahan.`,
    },
  ],
};

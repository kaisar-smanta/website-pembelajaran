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
          prompt: `Bu Sari membutuhkan pinjaman Rp25.000.000 untuk merenovasi rumah. Ia menerima dua penawaran.

- **Penawaran A**: bunga $1{,}1\\%$ per bulan, tenor $18$ bulan, tanpa biaya tambahan.
- **Penawaran B**: bunga $0{,}9\\%$ per bulan, tenor $24$ bulan, dikenakan biaya administrasi Rp400.000 dibayar di muka.

Penawaran B berbunga lebih rendah, tetapi tenornya lebih panjang. Menurutmu, penawaran mana yang **total biayanya** lebih kecil? Duga dahulu, lalu hitung.`,
          reveal: `Penawaran A: $A = \\dfrac{25.000.000 \\times 0{,}011}{1-(1{,}011)^{-18}} \\approx \\text{Rp}1.538.524$, total $18 \\times 1.538.524 \\approx \\text{Rp}27.693.426$, sehingga total bunga $\\approx \\text{Rp}2.693.426$.

Penawaran B: $A = \\dfrac{25.000.000 \\times 0{,}009}{1-(1{,}009)^{-24}} \\approx \\text{Rp}1.162.876$, total $24 \\times 1.162.876 \\approx \\text{Rp}27.909.023$, sehingga total bunga $\\approx \\text{Rp}2.909.023$. Dengan biaya administrasi Rp400.000, total biaya B $\\approx \\text{Rp}3.309.023$.

Ternyata **A** lebih murah, meskipun suku bunganya lebih tinggi. Tenor B yang lebih panjang menambah banyak periode bunga, dan biaya administrasi memperlebar selisihnya.`,
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Topik ini berangkat dari anuitas, jadi pastikan dahulu kamu menguasai:
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

Pinjaman anuitas memberi kita sejumlah uang sekarang dan meminta pembayaran tetap di masa depan. Investasi berkala melakukan kebalikannya: kita menyetor sejumlah tetap sekarang agar memperoleh saldo di masa depan. Keduanya berkaitan melalui **nilai waktu uang**: uang yang dibayar atau diterima pada waktu berbeda tidak dapat langsung dibandingkan.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Membandingkan Penawaran dan Hasil",
      questionIds: ['pinv-05'],
      body: `Dua penawaran pinjaman hampir tidak pernah bisa dibandingkan hanya dari besar angsuran bulanan. Ketika tenornya berbeda, angsuran yang lebih kecil justru sering berasal dari tenor panjang yang menambah banyak periode bunga. Ukuran yang jujur adalah **total biaya**, bukan angka angsuran.

Besar angsuran tetap pada tiap penawaran dihitung dengan rumus anuitas yang sudah kamu pelajari di topik **Anuitas**. Dari sana kita menyusun dua besaran pembanding:

$$\\text{total pembayaran} = n \\cdot A, \\qquad \\text{total bunga} = n \\cdot A - M,$$

dengan $M$ pokok pinjaman, $A$ angsuran tetap, dan $n$ banyak periode. **Total biaya** adalah total bunga ditambah biaya tambahan seperti administrasi, asuransi, atau provisi.

Untuk investasi, arahnya berlawanan: menyetor sebesar $A$ tiap periode menumbuhkan saldo akhir. Membandingkan uang pada waktu berbeda memakai konsep nilai sekarang dan nilai masa depan yang diturunkan di topik **Anuitas**.

Keputusan yang baik dibuat dengan urutan sederhana: tetapkan tujuan, susun model, ubah setiap alternatif menjadi ukuran yang sebanding, lalu pilih yang paling masuk akal.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Fokus: bandingkan total biaya",
          text: "Angsuran kecil sering berasal dari tenor panjang. Karena itu bandingkan **total bunga** atau **total biaya**, bukan hanya angka angsuran per bulan.",
        },
        {
          kind: "match",
          intro: "Cocokkan istilah pembanding penawaran dengan maknanya.",
          pairs: [
            {
              left: "Total biaya",
              right: "Total bunga ditambah biaya administrasi dan biaya lain",
            },
            {
              left: "Tenor",
              right: "Lama waktu pinjaman dalam bulan atau tahun",
            },
            {
              left: "Angsuran tetap",
              right: "Pembayaran sama besar setiap periode",
            },
            {
              left: "Suku bunga efektif",
              right: "Bunga setahun setelah memperhitungkan frekuensi pemajemukan",
            },
          ],
        },
        {
          kind: "flip-cards",
          intro: "Ulangi istilah yang dipakai saat mengambil keputusan.",
          cards: [
            {
              front: "Total biaya",
              back: "Seluruh biaya di luar pokok: total bunga ditambah biaya tambahan",
            },
            {
              front: "Biaya administrasi",
              back: "Biaya di muka yang tidak masuk angsuran, tetapi menambah total biaya",
            },
            {
              front: "Tenor",
              back: "Lama waktu pinjaman, biasanya dihitung dalam bulan",
            },
            {
              front: "Angsuran tetap",
              back: "Pembayaran sama besar tiap periode pada skema anuitas",
            },
            {
              front: "Suku bunga efektif",
              back: "Bunga setahun setelah memperhitungkan frekuensi pemajemukan",
            },
            {
              front: "Nilai waktu uang",
              back: "Uang pada waktu berbeda tidak dapat dibandingkan langsung",
            },
            {
              front: "Pembayaran di muka",
              back: "Uang yang dibayar di awal, misalnya biaya administrasi, ikut menambah total biaya",
            },
            {
              front: "Denda",
              back: "Biaya tambahan bila pembayaran terlambat, ikut menambah total biaya",
            },
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi: Ukuran Pembanding",
      body: "Beberapa ukuran finansial berperan sebagai alat pembanding. Tabel berikut merangkum cara memperoleh dan pemakaiannya.",
      blocks: [
        {
          kind: "table",
          caption: "Ukuran pembanding penawaran dan investasi",
          headers: [
            "Ukuran",
            "Cara memperoleh",
            "Dipakai untuk",
          ],
          rows: [
            [
              "Total pembayaran",
              "$n \\cdot A$",
              "melihat seluruh uang yang keluar",
            ],
            [
              "Total bunga",
              "$n \\cdot A - M$",
              "menilai biaya meminjam",
            ],
            [
              "Total biaya",
              "total bunga $+$ biaya tambahan",
              "membandingkan penawaran secara adil",
            ],
            [
              "Nilai masa depan ($FV$)",
              "saldo dari setoran rutin",
              "merencanakan target investasi",
            ],
            [
              "Nilai sekarang ($PV$)",
              "nilai rangkaian pembayaran saat ini",
              "menyetarakan uang pada waktu berbeda",
            ],
          ],
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi",
      body: "Gunakan dua simulasi berikut. Yang pertama memperlihatkan bagaimana total kewajiban bertumbuh bila bunga berbunga dibandingkan bunga tunggal. Yang kedua menyusun jadwal amortisasi sehingga kamu dapat mengamati pemisahan pokok dan bunga tiap periode serta pengaruh angsuran tambahan.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "pinjaman-angsuran-sim",
        },
        {
          kind: "exploration",
          explorationId: "pinjaman-jadwal-amortisasi",
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Cara membaca tabel amortisasi",
          text: "Setiap baris mewakili satu periode. Kolom **bunga** diisi $i \\times$ sisa utang periode sebelumnya. Kolom **pokok** adalah $A$ dikurangi bunga tersebut. Kolom **sisa utang** berkurang sebesar angsuran pokok. Di awal, komposisi bunga besar; di akhir, hampir seluruh angsuran adalah pokok. Jumlahkan kolom pokok untuk memastikan hasilnya sama dengan pokok pinjaman.",
        },
        {
          kind: "figure",
          alt: "Diagram amortisasi memperlihatkan kurva sisa pinjaman yang menurun dari waktu ke waktu dan garis datar besar angsuran yang tetap sepanjang tenor.",
          caption: "Sisa pinjaman menyusut tiap periode, sedangkan besar angsuran tetap sepanjang tenor.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><defs><marker id="fig-pin-axis" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><line x1="45" y1="200" x2="305" y2="200" stroke="currentColor" stroke-width="1.2" marker-end="url(#fig-pin-axis)"/><line x1="45" y1="200" x2="45" y2="20" stroke="currentColor" stroke-width="1.2" marker-end="url(#fig-pin-axis)"/><line x1="107" y1="200" x2="107" y2="67" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><line x1="170" y1="200" x2="170" y2="107" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><line x1="232" y1="200" x2="232" y2="152" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><polyline points="45,30 107,67 170,107 232,152 295,197" fill="none" stroke="currentColor" stroke-width="2.4"/><line x1="45" y1="191" x2="295" y2="191" stroke="currentColor" stroke-width="2" stroke-dasharray="7 3"/><circle cx="45" cy="30" r="2.6" fill="currentColor"/><circle cx="295" cy="197" r="2.6" fill="currentColor"/><text x="52" y="24" font-size="12" fill="currentColor">Sisa pinjaman</text><text x="150" y="184" font-size="11" fill="currentColor">angsuran tetap</text><text x="200" y="224" font-size="11" fill="currentColor" text-anchor="middle">periode</text><text x="42" y="215" font-size="11" fill="currentColor">0</text></svg>',
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Pola Umum: Keputusan Berbasis Total Biaya",
      body: `Membandingkan penawaran bukan pekerjaan menghafal rumus, tetapi menyetarakan besaran yang sebanding. Besar angsuran dari dua tenor yang berbeda tidak sebanding; yang sebanding adalah **total biaya** sepanjang pinjaman.

Pola ini muncul berulang. Karena memperpanjang tenor memperkecil angsuran tetapi menambah banyak periode bunga, total bunga dapat bertambah. Biaya administrasi, asuransi, dan denda ikut menambah total biaya meskipun tidak tampak pada angka angsuran. Sebab itu, ketika dua penawaran punya tenor dan biaya berbeda, ubah keduanya menjadi satu ukuran yang sama: total biaya untuk pinjaman, atau saldo akhir untuk investasi. Bila waktu pembayarannya berbeda, setarakan dengan nilai sekarang. Prinsip yang sama berlaku untuk memilih pinjaman maupun menilai hasil investasi.`,
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Rumus dan Prosedur",
      body: `Angsuran tetap pada tiap penawaran memakai rumus anuitas dari topik **Anuitas**. Di sini kita menekankan ukuran pembanding dan langkah keputusan.

**Ukuran pembanding.**
$$\\text{total pembayaran} = n \\cdot A, \\qquad \\text{total bunga} = n \\cdot A - M, \\qquad \\text{total biaya} = \\text{total bunga} + \\text{biaya tambahan}.$$

**Setoran untuk mencapai target investasi.** Membalik rumus nilai masa depan dari topik **Anuitas**:
$$A = \\frac{FV \\cdot i}{(1+i)^{n}-1}.$$

**Prosedur mengambil keputusan.**
1. Samakan satuan periode suku bunga dan tenor (misalnya keduanya bulanan).
2. Ubah setiap penawaran menjadi **total biaya** untuk pinjaman, atau **saldo akhir** untuk investasi.
3. Bila waktu pembayarannya berbeda, setarakan dengan nilai sekarang.
4. Pilih alternatif dengan total biaya terkecil atau hasil terbesar, sekaligus perhatikan risikonya.`,
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
              title: "Contoh 1 (membandingkan dua penawaran)",
              text: `Kembali ke penawaran Bu Sari: pinjaman Rp25.000.000. Penawaran A bunga $1{,}1\\%$ per bulan, tenor $18$ bulan; Penawaran B bunga $0{,}9\\%$ per bulan, tenor $24$ bulan, biaya administrasi Rp400.000. Tentukan penawaran dengan total biaya terkecil.

*Penyelesaian.* Penawaran A:
$$A_A = \\frac{25.000.000 \\times 0{,}011}{1-(1{,}011)^{-18}} \\approx \\text{Rp}1.538.524,$$
total $= 18 \\times 1.538.524 \\approx \\text{Rp}27.693.426$, sehingga total biaya A $\\approx \\text{Rp}2.693.426$ (tanpa biaya tambahan).

Penawaran B:
$$A_B = \\frac{25.000.000 \\times 0{,}009}{1-(1{,}009)^{-24}} \\approx \\text{Rp}1.162.876,$$
total $= 24 \\times 1.162.876 \\approx \\text{Rp}27.909.023$, sehingga total bunga $\\approx \\text{Rp}2.909.023$. Total biaya B $= 2.909.023 + 400.000 = \\text{Rp}3.309.023$.

Karena Rp2.693.426 < Rp3.309.023, penawaran **A** lebih murah. Suku bunga A memang lebih tinggi, tetapi tenor B yang lebih panjang dan biaya administrasinya membuat total biaya B lebih besar.`,
            },
            {
              title: "Contoh 2 (setoran untuk mencapai target)",
              text: `Bu Sari ingin mengumpulkan Rp20.000.000 dalam $30$ bulan melalui tabungan rutin berbunga $0{,}6\\%$ per bulan. Berapa setoran bulanan yang diperlukan?

*Penyelesaian.* Membalik rumus nilai masa depan:
$$A = \\frac{20.000.000 \\times 0{,}006}{(1{,}006)^{30}-1} \\approx \\text{Rp}610.458.$$
Dengan menyetor sekitar Rp610.458 setiap bulan, saldo akan mencapai sekitar Rp20.000.000 pada bulan ke-$30$.`,
            },
            {
              title: "Contoh 3 (hasil investasi berkala)",
              text: `Seseorang menyetor Rp300.000 setiap bulan dengan bunga $0{,}5\\%$ per bulan selama $30$ bulan. Berapa saldo akhirnya?

*Penyelesaian.*
$$FV = 300.000 \\cdot \\frac{(1{,}005)^{30}-1}{0{,}005} \\approx \\text{Rp}9.684.005.$$
Total setoran $= 30 \\times 300.000 = \\text{Rp}9.000.000$, sehingga bunga yang terkumpul sekitar Rp684.005. Menyetor rutin menumbuhkan saldo, bukan hanya menjumlahkan setoran.`,
            },
          ],
        },
        {
          kind: "table",
          caption: "Perbandingan dua penawaran pinjaman Rp25.000.000",
          headers: [
            "Penawaran",
            "Angsuran per bulan",
            "Total pembayaran",
            "Total bunga",
            "Biaya tambahan",
            "Total biaya",
          ],
          rows: [
            [
              "A (1,1%, 18 bulan)",
              "Rp1.538.524",
              "Rp27.693.426",
              "Rp2.693.426",
              "Rp0",
              "Rp2.693.426",
            ],
            [
              "B (0,9%, 24 bulan)",
              "Rp1.162.876",
              "Rp27.909.023",
              "Rp2.909.023",
              "Rp400.000",
              "Rp3.309.023",
            ],
          ],
        },
        {
          kind: "figure",
          alt: "Diagram batang bertumpuk membandingkan total biaya dua penawaran; penawaran B memiliki total lebih tinggi karena bunganya ditambah biaya administrasi.",
          caption: "Total biaya dua penawaran. Penawaran $A$ (bunga $1{,}1\\%$, tenor $18$ bulan) seluruhnya bunga sebesar Rp2.693.426, sedangkan penawaran $B$ (bunga $0{,}9\\%$, tenor $24$ bulan) terdiri atas bunga Rp2.909.023 ditambah administrasi Rp400.000, sehingga totalnya Rp3.309.023. Meskipun angsuran $B$ lebih kecil, total biaya $A$ lebih murah.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><rect x="55" y="25" width="16" height="11" fill="currentColor" opacity="0.7" stroke="currentColor" stroke-width="0.8"/><text x="77" y="35" font-size="11" fill="currentColor">bunga</text><rect x="150" y="25" width="16" height="11" fill="currentColor" opacity="0.35" stroke="currentColor" stroke-width="0.8"/><text x="172" y="35" font-size="11" fill="currentColor">administrasi</text><line x1="50" y1="200" x2="300" y2="200" stroke="currentColor" stroke-width="1.4"/><rect x="80" y="78" width="60" height="122" fill="currentColor" opacity="0.7" stroke="currentColor" stroke-width="0.8"/><rect x="180" y="68" width="60" height="132" fill="currentColor" opacity="0.7" stroke="currentColor" stroke-width="0.8"/><rect x="180" y="50" width="60" height="18" fill="currentColor" opacity="0.35" stroke="currentColor" stroke-width="0.8"/><text x="76" y="72" font-size="10" fill="currentColor">Rp2.693.426</text><text x="176" y="44" font-size="10" fill="currentColor">Rp3.309.023</text><text x="98" y="216" font-size="12" fill="currentColor">A</text><text x="198" y="216" font-size="12" fill="currentColor">B</text><text x="76" y="232" font-size="10" fill="currentColor">1,1% / 18 bln</text><text x="176" y="232" font-size="10" fill="currentColor">0,9% / 24 bln</text></svg>',
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
      body: `Model ini dipakai setiap kali kita menimbang kredit kendaraan, KPR, atau menabung untuk dana pendidikan. Perhatikan pinjaman Rp25.000.000 dengan dua penawaran:

- **Penawaran A:** bunga $1{,}1\\%$ per bulan, tenor $18$ bulan, angsuran $\\approx$ Rp1.538.524, total bunga $\\approx$ Rp2.693.426.
- **Penawaran B:** bunga $0{,}9\\%$ per bulan, tenor $24$ bulan, biaya administrasi Rp400.000, angsuran $\\approx$ Rp1.162.876, total bunga $\\approx$ Rp2.909.023.

Meskipun angsuran A lebih besar, total biaya A $=$ Rp2.693.426 lebih kecil daripada total biaya B $=$ Rp2.909.023 $+$ Rp400.000 $=$ Rp3.309.023. Sebaliknya, dalam berinvestasi arahnya berlawanan: menyetor Rp300.000 setiap bulan dengan bunga $0{,}5\\%$ per bulan selama $30$ bulan menghasilkan saldo $\\approx$ Rp9.684.005 dari total setoran Rp9.000.000, selisih $\\approx$ Rp684.005 sebagai hasil bunga majemuk.

Pola keputusannya tetap: tetapkan tujuan, susun model, ubah setiap alternatif menjadi ukuran yang sebanding, lalu putuskan berdasarkan total biaya atau hasil akhir. Lihat juga analisis penerapan pada halaman [Kredit Motor](/aplikasi/anuitas-pinjaman).`,
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
      id: "tantangan",
      kind: "tantangan",
      title: "Dua Penawaran, Total Biaya Terkecil",
      body: `**Soal.** Pak Andi membutuhkan pinjaman Rp20.000.000 dan menerima dua penawaran.
- **Penawaran A:** bunga $0{,}8\\%$ per bulan, tenor $36$ bulan, tanpa biaya tambahan.
- **Penawaran B:** bunga $0{,}6\\%$ per bulan, tenor $48$ bulan, dikenakan biaya administrasi Rp500.000 dibayar di muka.

Meskipun suku bunga B lebih rendah, tentukan penawaran yang **total biayanya** lebih kecil, lalu jelaskan mengapa.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Hitung total biaya tiap penawaran, bukan hanya angsuran bulanannya.",
          steps: [
            {
              title: "Langkah 1: Angsuran penawaran A",
              text: `Dengan $M = 20.000.000$, $i = 0{,}008$, dan $n = 36$:
$$A_A = \\frac{20.000.000 \\times 0{,}008}{1-(1{,}008)^{-36}} \\approx \\text{Rp}641.594{,}31.$$`,
            },
            {
              title: "Langkah 2: Total biaya penawaran A",
              text: `Total pembayaran $= 36 \\times 641.594{,}31 \\approx \\text{Rp}23.097.395$, sehingga total bunga $\\approx \\text{Rp}3.097.395$. Karena tanpa biaya tambahan, total biaya A $\\approx \\text{Rp}3.097.395$.`,
            },
            {
              title: "Langkah 3: Angsuran penawaran B",
              text: `Dengan $i = 0{,}006$ dan $n = 48$:
$$A_B = \\frac{20.000.000 \\times 0{,}006}{1-(1{,}006)^{-48}} \\approx \\text{Rp}480.782{,}88.$$`,
            },
            {
              title: "Langkah 4: Total biaya penawaran B",
              text: `Total pembayaran $= 48 \\times 480.782{,}88 \\approx \\text{Rp}23.077.578$, sehingga total bunga $\\approx \\text{Rp}3.077.578$. Tambahkan biaya administrasi Rp500.000, sehingga total biaya B $\\approx \\text{Rp}3.577.578$.`,
            },
            {
              title: "Langkah 5: Kesimpulan",
              text: `Karena Rp3.097.395 < Rp3.577.578, penawaran **A** lebih murah. Suku bunga B memang lebih rendah, tetapi tenor yang lebih panjang menambah banyak periode bunga dan biaya administrasi membuat total biayanya lebih besar.`,
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Anuitas Jiwa dan Risiko Kredit",
      body: `Banyak akar matematika keuangan sudah diuraikan pada topik lain. Asal perhitungan bunga majemuk, termasuk soal dari *Liber Abaci* Leonardo dari Pisa (1202), dibahas pada topik **Bunga Majemuk**, sedangkan kisah bilangan $e$ dari pemajemukan yang makin sering diuraikan pada topik **Fungsi Eksponensial**; keduanya tidak diulang di sini. Sudut khas topik ini adalah penilaian risiko pembayaran berkala. Pada 1671 pemerintah Belanda meminta Johan de Witt menghitung nilai anuitas jiwa, salah satu kajian kuantitatif pertama tentang rangkaian pembayaran. Setelah Edmond Halley menerbitkan tabel kematian pada 1693, perusahaan asuransi jiwa dan lembaga kredit tumbuh, dan perbandingan penawaran pinjaman maupun hasil investasi menjadi makin terukur.`,
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
            "Kapan memperpanjang tenor masuk akal, dan kapan merugikan?",
            "Bagaimana kamu menjelaskan arti \"total bunga\" kepada orang yang hanya melihat besar angsuran?",
          ],
          confidenceLabel: "Seberapa yakin kamu membandingkan dua penawaran berdasarkan total biaya?",
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
              "Membandingkan penawaran",
              "bandingkan total biaya, bukan angsuran bulanan",
            ],
            [
              "Total biaya",
              "total bunga ditambah biaya administrasi dan biaya lain",
            ],
            [
              "Tenor",
              "semakin panjang, angsuran mengecil tetapi total bunga bisa membesar",
            ],
            [
              "Biaya tambahan",
              "administrasi, asuransi, dan denda ikut menambah total biaya",
            ],
            [
              "Investasi berkala",
              "setoran tetap menumbuhkan saldo akhir; gunakan nilai masa depan",
            ],
            [
              "Nilai waktu uang",
              "uang pada waktu berbeda disetarakan lewat nilai sekarang",
            ],
            [
              "Keputusan",
              "tetapkan tujuan, hitung tiap alternatif, pilih berdasarkan total biaya atau hasil",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      questionIds: ['pinv-09'],
      body: `**Tiket keluar.** (1) Mengapa angsuran bulanan yang lebih kecil belum tentu berarti pinjaman yang lebih murah? (2) Jika dua penawaran berbeda tenor dan suku bunga, ukuran apa yang paling jujur untuk membandingkannya? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Pinjaman dan Investasi** untuk latihan tambahan.`,
    },
  ],
};

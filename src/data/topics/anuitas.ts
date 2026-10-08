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
  explorations: ['anuitas-sim'],
  applications: ['anuitas-pinjaman'],
  sections: [
    {
      id: 'tujuan',
      kind: 'tujuan',
      title: 'Tujuan Pembelajaran',
      body: `Peserta didik dapat menghitung besar angsuran anuitas, menyusun tabel amortisasi, serta menilai secara kritis penawaran pinjaman berdasarkan total bunga dan beban awal yang harus dibayar.`,
    },
    {
      id: 'pemantik',
      kind: 'pemantik',
      title: 'Pertanyaan Pemantik',
      body: `Pak Budi meminjam Rp10.000.000 dan mengangsur **Rp500.000 setiap bulan** selama 24 bulan. Total yang ia bayar Rp12.000.000, sehingga bunganya Rp2.000.000.

Pertanyaan: apakah setiap bulan ia membayar bunga yang sama? Jika bunga per bulan 1,5%, berapa bagian angsuran yang benar-benar mengurangi utang pada **bulan pertama**? Jawaban ini menunjukkan mengapa saldo utang turun perlahan di awal.`,
      blocks: [
        {
          kind: 'prediction',
          prompt: `Jika bunga per bulan $1{,}5\\%$, berapa bagian dari angsuran Rp500.000 pada **bulan pertama** yang benar-benar mengurangi utang pokok? Pilih dugaanmu, lalu bandingkan.`,
          options: [
            'Rp500.000 (seluruhnya)',
            'Rp350.000',
            'Rp150.000',
            'Rp50.000',
          ],
          reveal: `Pada bulan pertama, bunga $= 0{,}015 \\times 10.000.000 = \\text{Rp}150.000$. Karena angsuran Rp500.000, yang mengurangi pokok hanya Rp350.000. Bunga bulan berikutnya dihitung dari sisa utang yang lebih kecil, sehingga porsi pokok makin besar dan porsi bunga makin kecil — meskipun angsurannya tetap.`,
          saveLabel: 'Simpan dugaan',
        },
      ],
    },
    {
      id: 'prasyarat',
      kind: 'prasyarat',
      title: 'Prasyarat',
      body: `Sebelum melanjutkan, pastikan kamu menguasai:

- rumus bunga majemuk dan cara menyesuaikan suku bunga per periode;
- jumlah $n$ suku pertama deret geometri;
- operasi bentuk pangkat dengan eksponen negatif.`,
    },
    {
      id: 'konteks',
      kind: 'konteks',
      title: 'Situasi dan Konteks',
      body: `Saat membeli kendaraan atau rumah dengan kredit, pembeli membayar sejumlah uang tetap setiap bulan. Besar angsuran dirancang agar utang beserta bunganya **lunas tepat** pada akhir periode. Rangkaian pembayaran tetap inilah yang disebut **anuitas**.

Memahami anuitas membantu kita menghitung kemampuan membayar, membandingkan penawaran, dan menyadari bahwa angsuran "terjangkau" belum tentu totalnya murah.`,
    },
    {
      id: 'konsep',
      kind: 'konsep',
      title: 'Konsep Inti: Menurunkan Rumus Anuitas',
      body: `Misalkan pokok pinjaman $M$, suku bunga per periode $i$, dan $n$ periode. Misalkan besar angsuran tetap $A$ dibayar di **akhir** setiap periode. Nilai tunai seluruh angsuran harus sama dengan pokok pinjaman:

$$M = \\frac{A}{1+i} + \\frac{A}{(1+i)^2} + \\cdots + \\frac{A}{(1+i)^n}.$$

Ruas kanan adalah deret geometri dengan suku pertama $\\dfrac{A}{1+i}$ dan rasio $\\dfrac{1}{1+i}$. Dengan rumus jumlah deret geometri diperoleh

$$M = A \\cdot \\frac{1-(1+i)^{-n}}{i}.$$

Menyusun ulang untuk $A$:

$$A = \\frac{M \\cdot i}{1-(1+i)^{-n}}.$$

Inilah **rumus angsuran anuitas**. Angsuran $A$ terdiri atas **angsuran bunga** $i \\times \\text{sisa utang}$ dan **angsuran pokok**, yaitu sisanya.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'concept',
          title: 'Anuitas vs bunga majemuk',
          text: 'Pada bunga majemuk, kita mencari saldo **akhir**. Pada anuitas, kita mencari pembayaran tetap yang membuat saldo akhir menjadi **nol**. Keduanya memakai basis $(1+i)^n$, tetapi tujuannya berbeda.',
        },
        {
          kind: 'match',
          intro: 'Pasangkan setiap istilah anuitas dengan maknanya.',
          pairs: [
            { left: 'Anuitas', right: 'Rangkaian pembayaran sama besar secara berkala' },
            { left: 'Angsuran pokok', right: 'Bagian angsuran yang mengurangi sisa utang' },
            { left: 'Angsuran bunga', right: '$i \\times$ sisa utang pada periode itu' },
            { left: 'Nilai sekarang (PV)', right: 'Nilai tunai seluruh angsuran saat ini' },
            { left: 'Nilai masa depan (FV)', right: 'Saldo terkumpul dari setoran rutin' },
          ],
        },
      ],
    },
    {
      id: 'representasi',
      kind: 'representasi',
      title: 'Representasi Nilai Sekarang dan Nilai Masa Depan',
      body: `Nilai sekarang (present value) dari $n$ angsuran sebesar $A$ adalah

$$PV = A \\cdot \\frac{1-(1+i)^{-n}}{i}.$$

Nilai masa depan (future value) dari $n$ angsuran $A$ yang diinvestasikan adalah

$$FV = A \\cdot \\frac{(1+i)^{n}-1}{i}.$$

Rumus $PV$ menjawab "berapa pinjaman yang setara dengan angsuran ini", sedangkan $FV$ menjawab "berapa saldo terkumpul dari menabung rutin".`,
      blocks: [
        {
          kind: 'tabs',
          items: [
            { label: 'Simbolik', body: '$PV = A \\cdot \\frac{1-(1+i)^{-n}}{i}$ dan $FV = A \\cdot \\frac{(1+i)^{n}-1}{i}$ merangkum hubungan antara angsuran, bunga, dan waktu.' },
            { label: 'Tabel', body: 'Tabel amortisasi mencatat angsuran, bunga, pokok, dan sisa utang pada setiap periode.' },
            { label: 'Grafik', body: 'Dari periode ke periode, porsi bunga menurun dan porsi pokok meningkat meskipun besar angsuran tetap.' },
          ],
        },
      ],
    },
    {
      id: 'eksplorasi',
      kind: 'eksplorasi',
      title: 'Eksplorasi',
      body: `Gunakan simulasi berikut untuk menghitung angsuran dan melihat tabel amortisasi. Perhatikan bagaimana porsi bunga menurun dan porsi pokok meningkat dari bulan ke bulan.`,
      blocks: [{ kind: 'exploration', explorationId: 'anuitas-sim' }],
    },
    {
      id: 'contoh',
      kind: 'contoh',
      title: 'Contoh Terbimbing',
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
          kind: 'step-reveal',
          intro: 'Ikuti langkah menghitung besar angsuran pinjaman Rp10.000.000 dengan anuitas 24 bulan dan bunga 1,5% per bulan.',
          steps: [
            { title: 'Langkah 1', text: 'Catat besaran yang diketahui: $M = 10.000.000$, $i = 0{,}015$, dan $n = 24$.' },
            { title: 'Langkah 2', text: 'Hitung faktor diskon: $(1{,}015)^{24} \\approx 1{,}429503$, sehingga $(1{,}015)^{-24} \\approx 0{,}699544$.' },
            { title: 'Langkah 3', text: 'Substitusi ke rumus: $A = \\frac{10.000.000 \\times 0{,}015}{1 - 0{,}699544} = \\frac{150.000}{0{,}300456}$.' },
            { title: 'Langkah 4', text: 'Bagi dan bulatkan: $A \\approx \\text{Rp}499.241$ per bulan.' },
          ],
        },
      ],
    },
    {
      id: 'latihan-dasar',
      kind: 'latihan-dasar',
      title: 'Latihan Dasar',
      level: 'dasar',
      body: `1. Pinjaman Rp6.000.000, bunga 2% per bulan, 12 bulan. Hitung angsuran bunga pada bulan pertama.

2. Untuk pinjaman pada soal 1, tentukan angsuran pokok bulan pertama jika angsurannya Rp567.000.

3. Jelaskan dengan kalimatmu sendiri mengapa total pembayaran selalu lebih besar daripada pokok pinjaman.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. Bunga bulan pertama $= 0{,}02 \\times 6.000.000 = \\text{Rp}120.000$.
2. Angsuran pokok $= 567.000 - 120.000 = \\text{Rp}447.000$.
3. Karena setiap angsuran mencakup bunga atas sisa pinjaman, jumlah seluruh angsuran melampaui pokok sebesar total bunga.`,
        },
      ],
    },
    {
      id: 'latihan-cakap',
      kind: 'latihan-cakap',
      title: 'Latihan Cakap',
      level: 'cakap',
      body: `1. Hitung angsuran bulanan pinjaman Rp8.000.000 dengan bunga 1% per bulan selama 18 bulan (bulatkan ke rupiah terdekat).

2. Tentukan total bunga yang dibayar pada soal 1.

3. Seseorang menabung Rp1.000.000 setiap tahun selama 5 tahun dengan bunga 6% per tahun. Gunakan rumus nilai masa depan untuk menentukan saldo akhirnya.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. $A = \\dfrac{8.000.000(0{,}01)}{1-(1{,}01)^{-18}} = \\dfrac{80.000}{1-0{,}836017} = \\dfrac{80.000}{0{,}163983} \\approx \\text{Rp}487.960$.
2. Total $\\approx 18 \\times 487.960 = \\text{Rp}8.783.280$, sehingga bunga $\\approx \\text{Rp}783.280$.
3. $FV = 1.000.000 \\cdot \\dfrac{(1{,}06)^5-1}{0{,}06} = 1.000.000 \\cdot \\dfrac{0{,}338226}{0{,}06} \\approx \\text{Rp}5.637.093$.`,
        },
      ],
    },
    {
      id: 'latihan-mahir',
      kind: 'latihan-mahir',
      title: 'Latihan Mahir',
      level: 'mahir',
      body: `1. Bandingkan dua penawaran pinjaman Rp30.000.000: (A) bunga 1% per bulan, 36 bulan; (B) bunga 1,2% per bulan, 30 bulan. Manakah yang total bunganya lebih kecil? Jelaskan.

2. Pinjaman Rp20.000.000 dengan anuitas bulanan. Jelaskan mengapa memperpanjang tenor (misalnya dari 24 menjadi 48 bulan) menurunkan angsuran bulanan tetapi menaikkan total bunga.

3. Sebuah pinjaman menetapkan angsuran dari aplikasi sebesar Rp1.500.000 per bulan selama 12 bulan untuk pinjaman Rp16.000.000. Taksirlah suku bunga bulanannya dan nilai wajar angsuran jika suku bunga 1,5% per bulan. Berikan penilaian kritis.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat pembahasan',
          text: `1. A: $i=0{,}01, n=36$: $A = \\dfrac{300.000}{1-(1{,}01)^{-36}} \\approx \\dfrac{300.000}{0{,}301075} = \\text{Rp}996.429$; total $\\approx 36 \\times 996.429 = \\text{Rp}35.871.455$; bunga $\\approx 5,87$ juta. B: $i=0{,}012, n=30$: $A = \\dfrac{360.000}{1-(1{,}012)^{-30}} \\approx \\dfrac{360.000}{0{,}300827} \\approx \\text{Rp}1.196.701$; total $\\approx 30 \\times 1.196.701 = \\text{Rp}35.901.028$; bunga $\\approx 5,90$ juta. Penawaran A **sedikit** lebih murah; perbedaannya kecil sehingga perlu mempertimbangkan besar angsuran bulanan.
2. Memperpanjang tenor memperkecil $i$ pada setiap periode sekaligus memperbanyak periode. Angsuran turun, tetapi bunga berjalan lebih lama, sehingga total bunga naik.
3. Angsuran total $= 18.000.000$ untuk pokok 16.000.000, bunga total Rp2.000.000. Untuk $n=12$, angsuran $1.500.000$ menghasilkan $i$ sekitar $1{,}5\\%$–$1{,}8\\%$ per bulan. Pada $1{,}5\\%$ per bulan, nilai wajar $A \\approx \\dfrac{16.000.000(0{,}015)}{1-(1{,}015)^{-12}} \\approx \\dfrac{240.000}{0{,}163584} \\approx \\text{Rp}1.467.135$. Karena penawaran Rp1.500.000 lebih tinggi, tersangka menawarkan bunga efektif lebih besar — perlu kehati-hatian.`,
        },
      ],
    },
    {
      id: 'dunia-nyata',
      kind: 'dunia-nyata',
      title: 'Penerapan di Dunia Nyata',
      body: `Anuitas dipakai pada KPR, kredit kendaraan, dan dana pensiun. Lihat analisis lengkap pada halaman [Kredit Motor](aplikasi/anuitas-pinjaman) untuk memahami mengapa saldo pokok turun perlahan di awal periode.`,
    },
    {
      id: 'kesalahan-umum',
      kind: 'kesalahan-umum',
      title: 'Kesalahan Umum',
      body: `**1. Menganggap bunga setiap periode sama.** Bunga dihitung dari sisa utang, sehingga menurun setiap periode meskipun angsuran tetap.

**2. Menjumlahkan suku bunga secara salah.** Untuk 5 tahun pada 12% per tahun, tidak benar memakai $i = 12\\%$ dan $n=5$; jika dihitung bulanan, gunakan $i = 1\\%$ dan $n = 60$.

**3. Lupa mengubah tenor menjadi jumlah periode.** "5 tahun" harus dikonversi ke 60 bulan.

**4. Membandingkan hanya besar angsuran.** Angsuran kecil karena tenor panjang belum tentu murah; bandingkan **total bunga**.

**5. Membulatkan angsuran terlalu awal.** Membulatkan $A$ ke ribuan sebelum menghitung total membuat kesalahan menumpuk.`,
      blocks: [
        {
          kind: 'spot-mistake',
          intro: 'Perhatikan perhitungan angsuran pinjaman dengan bunga tahunan yang dihitung bulanan. Ada satu langkah keliru. Klik langkah yang salah.',
          steps: [
            'Pinjaman Rp10.000.000 dengan bunga $12\\%$ per tahun, dihitung bulanan, tenor $5$ tahun.',
            'Gunakan suku bunga $i = 12\\% = 0{,}12$ untuk **setiap bulan**.',
            'Gunakan $n = 5 \\times 12 = 60$ periode.',
            'Hitung $A = \\frac{10.000.000(0{,}12)}{1-(1{,}12)^{-60}}$.',
          ],
          wrongIndex: 1,
          explanation: 'Langkah kedua keliru. Suku bunga tahunan harus diubah ke per periode: $i = 12\\% / 12 = 1\\% = 0{,}01$ per bulan. Memakai $i = 0{,}12$ per bulan membuat angsuran tampak jauh lebih besar daripada seharusnya.',
        },
      ],
    },
    {
      id: 'refleksi',
      kind: 'refleksi',
      title: 'Refleksi',
      body: `1. Mengapa porsi bunga besar pada awal periode tetapi kecil pada akhir periode?
2. Informasi apa yang paling penting diminta sebelum menyetujui pinjaman?
3. Bagaimana kamu menjelaskan arti "total bunga" kepada orang yang hanya melihat besar angsuran?`,
    },
    {
      id: 'rangkuman',
      kind: 'rangkuman',
      title: 'Rangkuman',
      blocks: [
        {
          kind: 'table',
          headers: ['Konsep', 'Rumus'],
          rows: [
            ['Angsuran anuitas', '$A = \\dfrac{M \\cdot i}{1-(1+i)^{-n}}$'],
            ['Nilai sekarang', '$PV = A \\cdot \\dfrac{1-(1+i)^{-n}}{i}$'],
            ['Nilai masa depan', '$FV = A \\cdot \\dfrac{(1+i)^{n}-1}{i}$'],
            ['Bunga periode ke-$k$', '$i \\times \\text{sisa utang}_{k-1}$'],
            ['Total pembayaran', '$n \\times A$'],
          ],
        },
      ],
    },
    {
      id: 'evaluasi',
      kind: 'evaluasi',
      title: 'Evaluasi',
      body: `Uji pemahamanmu pada halaman [Latihan & Asesmen](/latihan) topik **Anuitas**.`,
    },
  ],
};

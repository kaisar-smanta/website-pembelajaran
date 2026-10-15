import type { Topic } from '@/types/content';

export const anuitas: Topic = {
  id: 'anuitas',
  slug: 'anuitas',
  title: 'Anuitas',
  subtitle: 'Angsuran tetap dengan komposisi bunga yang berubah',
  grade: 'XI',
  phase: 'F',
  element: 'bilangan',
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
          reveal: "Pada bulan pertama, bunga $= 0{,}015 \\times 10.000.000 = \\text{Rp}150.000$. Karena angsuran Rp500.000, yang mengurangi pokok hanya Rp350.000. Bunga bulan berikutnya dihitung dari sisa utang yang lebih kecil, sehingga porsi pokok makin besar dan porsi bunga makin kecil, meskipun angsurannya tetap.",
          saveLabel: "Simpan dugaan",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum menghitung anuitas, mantapkan dahulu dasar-dasar berikut:

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
      body: `**Anuitas** adalah rangkaian pembayaran sebesar $A$ yang dilakukan secara berkala (contohnya tiap bulan) untuk melunasi pinjaman atau mengumpulkan dana. Ciri utamanya: **besar setoran tetap**, tetapi **komposisinya berubah** dari periode ke periode: porsi bunga menyusut dan porsi pokok membesar.

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
      id: "rumus",
      kind: "rumus",
      title: "Rumus dan Prosedur",
      body: `**Angsuran anuitas** untuk pokok $M$, suku bunga per periode $i$, dan $n$ periode:
$$A = \\frac{M\\,i}{1-(1+i)^{-n}} = M \\cdot \\frac{i(1+i)^n}{(1+i)^n-1}.$$

**Nilai sekarang dan nilai masa depan:**
$$PV = A \\cdot \\frac{1-(1+i)^{-n}}{i}, \\qquad FV = A \\cdot \\frac{(1+i)^n-1}{i}.$$

**Tabel amortisasi.** Pada periode ke-$k$:
- bunga $= i \\times \\text{sisa utang}_{k-1}$;
- angsuran pokok $= A - \\text{bunga}$;
- sisa utang $= \\text{sisa utang}_{k-1} - \\text{angsuran pokok}$.

**Prosedur.** (1) Sesuaikan suku bunga per periode dan banyak periode. (2) Hitung besar angsuran $A$. (3) Pisahkan bunga dan pokok pada setiap baris tabel. (4) Total pembayaran $= nA$ dan total bunga $= nA - M$.`,
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
        {
          kind: "figure",
          alt: "Diagram batang bertumpuk yang menunjukkan komposisi angsuran tetap tiap periode: porsi bunga yang menyusut berada di bawah dan porsi pokok yang membesar berada di atas.",
          caption: "Karena angsuran $A$ tetap, tinggi total batang tetap. Namun porsi bunga (bawah) menyusut dari periode ke periode, sedangkan porsi pokok (atas) makin besar, sejalan dengan hubungan $A = \\text{bunga} + \\text{pokok}$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><rect x="46" y="28" width="16" height="11" fill="currentColor" opacity="0.3" stroke="currentColor" stroke-width="0.8"/><text x="68" y="38" font-size="11" fill="currentColor">bunga</text><rect x="146" y="28" width="16" height="11" fill="currentColor" opacity="0.7" stroke="currentColor" stroke-width="0.8"/><text x="168" y="38" font-size="11" fill="currentColor">pokok</text><rect x="50" y="140" width="26" height="60" fill="currentColor" opacity="0.3" stroke="currentColor" stroke-width="0.8"/><rect x="50" y="100" width="26" height="40" fill="currentColor" opacity="0.7" stroke="currentColor" stroke-width="0.8"/><rect x="90" y="150" width="26" height="50" fill="currentColor" opacity="0.3" stroke="currentColor" stroke-width="0.8"/><rect x="90" y="100" width="26" height="50" fill="currentColor" opacity="0.7" stroke="currentColor" stroke-width="0.8"/><rect x="130" y="158" width="26" height="42" fill="currentColor" opacity="0.3" stroke="currentColor" stroke-width="0.8"/><rect x="130" y="100" width="26" height="58" fill="currentColor" opacity="0.7" stroke="currentColor" stroke-width="0.8"/><rect x="170" y="165" width="26" height="35" fill="currentColor" opacity="0.3" stroke="currentColor" stroke-width="0.8"/><rect x="170" y="100" width="26" height="65" fill="currentColor" opacity="0.7" stroke="currentColor" stroke-width="0.8"/><rect x="210" y="172" width="26" height="28" fill="currentColor" opacity="0.3" stroke="currentColor" stroke-width="0.8"/><rect x="210" y="100" width="26" height="72" fill="currentColor" opacity="0.7" stroke="currentColor" stroke-width="0.8"/><rect x="250" y="178" width="26" height="22" fill="currentColor" opacity="0.3" stroke="currentColor" stroke-width="0.8"/><rect x="250" y="100" width="26" height="78" fill="currentColor" opacity="0.7" stroke="currentColor" stroke-width="0.8"/><line x1="35" y1="200" x2="300" y2="200" stroke="currentColor" stroke-width="1.4"/><text x="60" y="216" font-size="11" fill="currentColor">1</text><text x="100" y="216" font-size="11" fill="currentColor">2</text><text x="140" y="216" font-size="11" fill="currentColor">3</text><text x="180" y="216" font-size="11" fill="currentColor">4</text><text x="220" y="216" font-size="11" fill="currentColor">5</text><text x="260" y="216" font-size="11" fill="currentColor">6</text><text x="150" y="234" font-size="11" fill="currentColor">periode pembayaran</text></svg>',
        },
        {
          kind: "figure",
          alt: "Garis waktu anuitas: pembayaran sama besar A digambarkan sebagai panah ke bawah yang sama panjang pada setiap periode, serta panah nilai sekarang yang menjumlahkan nilai tunai seluruh angsuran.",
          caption: "Setiap angsuran $A$ dibayar pada akhir periode. Nilai sekarang (PV) menjumlahkan nilai tunai semua angsuran: $PV = A\\cdot\\dfrac{1-(1+i)^{-n}}{i}$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><defs><marker id="fig-anu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><line x1="40" y1="110" x2="300" y2="110" stroke="currentColor" stroke-width="1.5" marker-end="url(#fig-anu-arrow)"/><line x1="60" y1="110" x2="60" y2="165" stroke="currentColor" stroke-width="2" marker-end="url(#fig-anu-arrow)"/><line x1="106" y1="110" x2="106" y2="165" stroke="currentColor" stroke-width="2" marker-end="url(#fig-anu-arrow)"/><line x1="152" y1="110" x2="152" y2="165" stroke="currentColor" stroke-width="2" marker-end="url(#fig-anu-arrow)"/><line x1="198" y1="110" x2="198" y2="165" stroke="currentColor" stroke-width="2" marker-end="url(#fig-anu-arrow)"/><line x1="244" y1="110" x2="244" y2="165" stroke="currentColor" stroke-width="2" marker-end="url(#fig-anu-arrow)"/><circle cx="40" cy="110" r="3" fill="currentColor"/><line x1="285" y1="205" x2="45" y2="205" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4" marker-end="url(#fig-anu-arrow)"/><text x="18" y="106" font-size="12" fill="currentColor">0</text><text x="51" y="128" font-size="12" fill="currentColor">1</text><text x="97" y="128" font-size="12" fill="currentColor">2</text><text x="143" y="128" font-size="12" fill="currentColor">3</text><text x="189" y="128" font-size="12" fill="currentColor">4</text><text x="235" y="128" font-size="12" fill="currentColor">5</text><text x="63" y="158" font-size="12" fill="currentColor">A</text><text x="250" y="100" font-size="12" fill="currentColor">periode</text><text x="58" y="222" font-size="11" fill="currentColor">PV: jumlah nilai tunai tiap angsuran</text></svg>',
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
      blocks: [
        {
          kind: "step-reveal",
          intro: "Tiga contoh berikut menuntun dari menghitung angsuran, menyusun komposisi bunga dan pokok, sampai menilai dana masa depan.",
          steps: [
            {
              title: "Contoh 1 (besar angsuran)",
              text: `Pinjaman Rp10.000.000 dilunasi dengan anuitas $24$ bulan dan bunga $1{,}5\\%$ per bulan. Tentukan besar angsuran.

*Penyelesaian.* Catat $M = 10.000.000$, $i = 0{,}015$, dan $n = 24$. Hitung dahulu faktornya: $(1{,}015)^{24} \\approx 1{,}429503$ sehingga $(1{,}015)^{-24} \\approx 0{,}699544$. Substitusi ke rumus:
$$A = \\frac{10.000.000 \\times 0{,}015}{1-(1{,}015)^{-24}} = \\frac{150.000}{0{,}300456} \\approx \\text{Rp}499.241.$$
Total pembayaran $= 24 \\times 499.241 = \\text{Rp}11.981.784$, dengan **total bunga sekitar Rp1.981.784**.`,
            },
            {
              title: "Contoh 2 (komposisi angsuran awal)",
              text: `Berdasarkan Contoh 1, tentukan komposisi angsuran bulan pertama dan sisa utang setelahnya.

*Penyelesaian.* Bunga bulan $1 = 0{,}015 \\times 10.000.000 = \\text{Rp}150.000$. Angsuran pokok $= 499.241 - 150.000 = \\text{Rp}349.241$, sehingga sisa utang $= 10.000.000 - 349.241 = \\text{Rp}9.650.759$. Bulan $2$: bunga $= 0{,}015 \\times 9.650.759 \\approx \\text{Rp}144.761$ dan angsuran pokok $\\approx \\text{Rp}354.480$. Terlihat porsi pokok makin besar setiap bulan.`,
            },
            {
              title: "Contoh 3 (nilai masa depan)",
              text: `Seseorang menabung Rp500.000 setiap bulan dengan bunga $0{,}8\\%$ per bulan selama $3$ tahun. Berapa saldo yang terkumpul?

*Penyelesaian.* Karena mengumpulkan dana, gunakan rumus nilai masa depan dengan $A = 500.000$, $i = 0{,}008$, dan $n = 36$:
$$FV = 500.000 \\cdot \\frac{(1{,}008)^{36}-1}{0{,}008}.$$
Karena $(1{,}008)^{36} \\approx 1{,}332225$, maka $\\dfrac{0{,}332225}{0{,}008} \\approx 41{,}528$, sehingga $FV \\approx 500.000 \\times 41{,}528 \\approx \\text{Rp}20.764.000$. Total setoran $= \\text{Rp}18.000.000$, jadi bunga yang terkumpul sekitar **Rp2.764.000**.`,
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
      body: `Anuitas adalah alat untuk menilai waktu uang: satu angsuran hari ini tidak setara dengan satu angsuran setahun lagi. Rumus nilai sekarang $PV = A\\cdot\\dfrac{1-(1+i)^{-n}}{i}$ mengubah rangkaian pembayaran menjadi satu angka hari ini. Misalnya, pembayaran Rp500.000 per bulan selama $24$ bulan pada bunga $1\\%$ per bulan setara dengan $500.000\\cdot\\dfrac{1-(1{,}01)^{-24}}{0{,}01} \\approx \\text{Rp}10.621.700$. Sebaliknya, rumus nilai masa depan $FV = A\\cdot\\dfrac{(1+i)^{n}-1}{i}$ menaksir dana terkumpul: setoran Rp1.000.000 per bulan berbunga $0{,}6\\%$ per bulan selama $5$ tahun menghasilkan sekitar $\\text{Rp}71.966.000$. Kedua rumus itu hanya berbeda sudut pandang waktu: satu mendiskontokan, yang lain memajemukkan. Perhitungan lengkap beserta tabel amortisasi dapat dilatih dengan simulasi dan soal berikutnya.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menganggap bunga setiap periode sama.** Bunga dihitung dari sisa utang, sehingga menurun setiap periode meskipun angsuran tetap.

**2. Menjumlahkan suku bunga secara salah.** Untuk 5 tahun pada 12% per tahun, tidak benar memakai $i = 12\\%$ dan $n=5$; jika dihitung bulanan, gunakan $i = 1\\%$ dan $n = 60$.

**3. Lupa mengubah tenor menjadi jumlah periode.** "5 tahun" harus dikonversi ke 60 bulan.

**4. Membandingkan hanya besar angsuran.** Angsuran kecil karena tenor panjang belum tentu murah; bandingkan **total bunga**.

**5. Membulatkan angsuran terlalu awal.** Membulatkan $A$ ke ribuan sebelum menghitung total membuat kesalahan menumpuk.

**6. Mengira total bunga $= i \\times M \\times n$.** Untuk pinjaman Contoh 1, cara keliru $0{,}015 \\times 10.000.000 \\times 24 = \\text{Rp}3.600.000$ terlalu besar, karena bunga dihitung dari sisa utang yang terus menurun. Total bunga yang benar adalah $nA - M \\approx \\text{Rp}1.981.784$.`,
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
      id: "tantangan",
      kind: "tantangan",
      title: "Tantangan",
      body: `**Soal.** Misalkan pinjaman $M$ dilunasi dengan angsuran tetap $A$ setiap periode dan suku bunga per periode $i$. Buktikan bahwa sisa utang setelah $k$ angsuran adalah
$$S_k = M(1+i)^k - A\\,\\frac{(1+i)^k-1}{i}.$$
Gunakan hasil itu untuk menunjukkan bahwa setelah $n$ angsuran utangnya lunas.`,
      blocks: [
        {
          kind: "callout",
          variant: "tip",
          title: "Petunjuk",
          text: "Mulailah dari hubungan tiap periode: sisa utang berbunga, lalu dikurangi angsuran, yaitu $S_k = S_{k-1}(1+i) - A$ dengan $S_0 = M$.",
        },
        {
          kind: "step-reveal",
          intro: "Kita lacak sisa utang periode demi periode, lalu mengenali polanya.",
          steps: [
            {
              title: "Langkah 1",
              text: "Setiap periode utang berbunga lalu dikurangi angsuran: $S_k = S_{k-1}(1+i) - A$, dengan $S_0 = M$.",
            },
            {
              title: "Langkah 2",
              text: "Hitung beberapa suku: $S_1 = M(1+i)-A$ dan $S_2 = M(1+i)^2 - A(1+i) - A$.",
            },
            {
              title: "Langkah 3",
              text: "Pola yang tampak: $S_k = M(1+i)^k - A\\big[1+(1+i)+\\cdots+(1+i)^{k-1}\\big]$.",
            },
            {
              title: "Langkah 4",
              text: "Jumlah deret geometri dalam kurung adalah $\\dfrac{(1+i)^k-1}{i}$, sehingga $S_k = M(1+i)^k - A\\,\\dfrac{(1+i)^k-1}{i}$.",
            },
            {
              title: "Langkah 5",
              text: "Untuk $k=n$, gunakan $A = \\dfrac{M\\,i\\,(1+i)^n}{(1+i)^n-1}$. Substitusi memberi $S_n = M(1+i)^n - M(1+i)^n = 0$, jadi utang lunas.",
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Jejak Sejarah",
      body: `Kata *anuitas* berasal dari bahasa Latin *annus* ("tahun"), karena pembayaran berkala pada awalnya dilakukan setiap tahun. Bangsa Romawi sudah mengenal kontrak pembayaran tahunan, dan pada abad pertengahan lembaga keuangan Eropa mengembangkan skema serupa untuk membiayai kota maupun perang. Abraham de Moivre pada awal abad ke-18 merumuskan teori anuitas dalam bukunya *Annuities upon Lives* (1725), dengan menyertakan perhitungan nilai sekarang. Sejak itu anuitas menjadi alat baku keuangan: kredit, dana pensiun, dan asuransi memakai gagasan angsuran tetap yang komposisinya berubah dari waktu ke waktu.`,
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
          confidenceLabel: "Seberapa yakin kamu membaca komposisi bunga dan pokok pada anuitas?",
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
      body: `**Renungan angka.** (1) Jelaskan mengapa porsi bunga menyusut sementara porsi pokok membesar walau angsuran tidak berubah. (2) Dengan rumus nilai sekarang, tunjukkan mengapa memperpanjang tenor menurunkan angsuran sekaligus menaikkan total bunga. Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Anuitas** untuk latihan tambahan.`,
    },
  ],
};

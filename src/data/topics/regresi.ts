import type { Topic } from '@/types/content';

export const regresi: Topic = {
  id: 'regresi',
  slug: 'regresi',
  title: 'Regresi Linear',
  subtitle: 'Menaksir hubungan dua variabel dengan garis terbaik',
  grade: 'XI',
  phase: 'F',
  element: 'data-peluang',
  status: 'lengkap',
  estimatedMinutes: 90,
  summary:
    'Menentukan garis regresi linear dengan metode kuadrat terkecil, menafsirkan gradien, intersep, dan koefisien determinasi, serta membuat prediksi secara bertanggung jawab.',
  description:
    'Regresi linear adalah alat untuk memodelkan hubungan antara dua variabel kuantitatif. Dari diagram pencar, kita mencari garis lurus yang paling dekat dengan seluruh titik data, lalu menggunakan garis itu untuk menaksir nilai. Pada topik ini kita menurunkan rumus gradien dan intersep melalui metode kuadrat terkecil, menafsirkan gradien serta intersep dalam konteks, memakai koefisien determinasi $r^2$ untuk menilai kualitas model, serta memahami keterbatasan model seperti interpolasi, ekstrapolasi, dan korelasi yang bukan sebab-akibat.',
  keywords: [
    'regresi linear',
    'garis regresi',
    'kuadrat terkecil',
    'korelasi',
    'determinasi',
    'prediksi',
    'ekstrapolasi',
  ],
  prerequisites: ['data-bivariat'],
  relatedTopics: ['asosiasi-kausalitas', 'data-bivariat'],
  prerequisiteKnowledge: [
    'Membaca dan membuat diagram pencar (scatter plot)',
    'Rata-rata (mean) suatu kumpulan data',
    'Operasi pecahan, desimal, dan notasi sigma sederhana',
  ],
  objectives: [
    { text: 'Menjelaskan makna garis regresi linear sebagai model hubungan dua variabel kuantitatif.' },
    { text: 'Menghitung gradien dan intersep garis regresi menggunakan metode kuadrat terkecil.' },
    { text: 'Menghitung dan menafsirkan koefisien determinasi $r^2$ sebagai ukuran kualitas model, dengan merujuk koefisien korelasi $r$ pada topik Data Bivariat.' },
    { text: 'Membuat prediksi dari garis regresi dan membedakan interpolasi dengan ekstrapolasi.' },
    { text: 'Menilai keterbatasan model regresi dan menghindari penafsiran yang berlebihan.' },
  ],
  applications: ['regresi-nilai-ujian'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menentukan garis regresi linear dari data bivariat dengan metode kuadrat terkecil, menafsirkan gradien dan intersep dalam konteks, menghitung serta menafsirkan koefisien determinasi $r^2$, membuat prediksi, dan menilai keterbatasan model.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      body: `Seorang pemilik toko menduga bahwa menambah biaya iklan menaikkan penjualan. Ia mencatat biaya iklan dan penjualan selama delapan minggu, lalu menggambar titik-titik data. Ketika diminta memperkirakan penjualan pada biaya iklan 10 juta rupiah, ia menarik garis lurus dengan penggaris **sekadar "yang kelihatan pas"**.

- Apakah garis "yang kelihatan pas" cukup untuk mengambil keputusan?
- Bagaimana cara menentukan garis lurus yang **terbaik secara matematis**?
- Seberapa besar biaya iklan menjelaskan penjualan, dan dapatkah kita menyatakannya dalam satu angka?

Dugalah dulu sebelum melanjutkan. Bandingkan dugaan awalmu dengan hasil perhitungan pada bagian konsep.`,
      blocks: [
        {
          kind: "prediction",
          prompt: "Bagaimana menentukan garis lurus terbaik untuk mewakili sebaran titik data secara matematis?",
          options: [
            "Garis yang melewati titik terbanyak",
            "Garis yang membuat jumlah kuadrat residu minimum",
            "Garis yang melewati titik pertama dan terakhir",
            "Garis dengan gradien terbesar",
          ],
          reveal: "Garis \"kelihatan pas\" bersifat subjektif dan dapat berbeda antar orang. Regresi linear memberi aturan objektif: pilih garis yang membuat **jumlah kuadrat selisih** antara nilai amatan dan nilai garis sekecil mungkin. Kekuatan hubungan diringkas oleh koefisien korelasi $r$, sedangkan seberapa besar variasi yang dijelaskan dinyatakan oleh $r^2$.",
          saveLabel: "Simpan dugaan",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Topik ini melanjutkan Data Bivariat, jadi pastikan dahulu kamu dapat:

- membuat dan membaca **diagram pencar** dari pasangan data $(x_i, y_i)$;
- menghitung rata-rata: $\\bar{x} = \\dfrac{\\sum x_i}{n}$ dan $\\bar{y} = \\dfrac{\\sum y_i}{n}$;
- menghitung $\\sum x_i$, $\\sum y_i$, $\\sum x_i y_i$, dan $\\sum x_i^2$ dengan teliti sebelum memasukkannya ke rumus.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Banyak keputusan berbasis data melibatkan dua besaran yang diduga berkaitan. Seorang pelatih ingin tahu apakah jumlah latihan memengaruhi waktu lari; guru ingin melihat kaitan waktu belajar dengan nilai ujian; pemilik toko ingin menaksir penjualan dari anggaran iklan.

Data yang dipakai pada topik ini adalah **biaya iklan per minggu** (juta rupiah) dan **penjualan** (puluhan unit) sebuah toko selama delapan minggu:

| Biaya iklan $x$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Penjualan $y$ | 5 | 7 | 9 | 8 | 12 | 13 | 15 | 17 |

Muncul kecenderungan naik, tetapi titik-titiknya tidak tepat segaris. Pertanyaannya: garis lurus seperti apa yang paling mewakili pola ini, dan seberapa besar biaya iklan menjelaskan penjualan?`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Garis Regresi",
      questionIds: ['rg-01'],
      body: `Garis regresi linear memodelkan nilai rata-rata $y$ sebagai fungsi linear dari $x$:

$$\\hat{y} = bx + a$$

dengan $\\hat{y}$ dibaca "y topi" adalah **nilai dugaan**, $b$ adalah **gradien** (kemiringan), dan $a$ adalah **intersep** (nilai $\\hat{y}$ saat $x = 0$).

Untuk setiap titik data, selisih $y_i - \\hat{y}_i$ disebut **residu**. Garis regresi dipilih agar residu-residunya sekecil mungkin. Karena residu bisa positif dan negatif lalu saling menghapus, kita menggunakan **jumlah kuadrat residu**:

$$\\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2.$$

Metode yang meminimumkan besaran ini disebut **metode kuadrat terkecil** (least squares). Garis yang dihasilkan tunggal, sehingga dua orang yang menghitung dari data yang sama akan memperoleh garis yang sama.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Garis rata-rata terbaik",
          text: "Garis regresi adalah **garis rata-rata terbaik**, bukan garis yang harus dilalui setiap titik. Kualitasnya dinilai dari seberapa kecil kuadrat residu totalnya.",
        },
        {
          kind: "match",
          intro: "Pasangkan istilah regresi dengan maknanya.",
          pairs: [
            {
              left: "Garis regresi",
              right: "Garis lurus yang paling mewakili pola data",
            },
            {
              left: "Gradien $b$",
              right: "Perubahan rata-rata $y$ untuk setiap tambahan satu satuan $x$",
            },
            {
              left: "Intersep $a$",
              right: "Nilai dugaan $\\hat{y}$ ketika $x=0$",
            },
            {
              left: "Residu",
              right: "Selisih antara nilai amatan dan nilai dugaan",
            },
            {
              left: "Determinasi $r^2$",
              right: "Proporsi variasi $y$ yang dijelaskan oleh model",
            },
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi: Data, Garis, dan Residu",
      body: "Setelah dihitung (lihat bagian Contoh), garis regresi untuk data di atas adalah $\\hat{y} = 1{,}667x + 3{,}25$. Tabel berikut membandingkan nilai amatan dengan nilai garis serta residunya.",
      blocks: [
        {
          kind: "figure",
          alt: "Diagram pencar delapan titik biaya iklan dan penjualan dengan garis regresi kuadrat terkecil menanjak, dan ruas garis putus-putus yang menunjukkan residu tiap titik terhadap garis.",
          caption: "Titik data, garis regresi $\\hat{y} = 1{,}667x + 3{,}25$, dan residu sebagai ruas garis putus-putus dari setiap titik ke garis. Titik-titik rapat pada garis menandakan hubungan linear positif kuat dengan $r \\approx 0{,}98$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="40" y1="200" x2="300" y2="200" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="200" x2="40" y2="25" stroke="currentColor" stroke-width="1.5"/><text x="292" y="216" font-size="12" fill="currentColor">x</text><text x="24" y="34" font-size="12" fill="currentColor">y</text><line x1="45" y1="158.2" x2="290" y2="59" stroke="currentColor" stroke-width="2"/><line x1="80" y1="140.5" x2="80" y2="144" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/><line x1="115" y1="123.5" x2="115" y2="129.9" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/><line x1="150" y1="132" x2="150" y2="115.7" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/><line x1="185" y1="98" x2="185" y2="101.5" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/><line x1="220" y1="89.5" x2="220" y2="87.4" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/><line x1="255" y1="72.5" x2="255" y2="73.2" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/><line x1="290" y1="55.5" x2="290" y2="59" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/><circle cx="45" cy="157.5" r="3" fill="currentColor"/><circle cx="80" cy="140.5" r="3" fill="currentColor"/><circle cx="115" cy="123.5" r="3" fill="currentColor"/><circle cx="150" cy="132" r="3" fill="currentColor"/><circle cx="185" cy="98" r="3" fill="currentColor"/><circle cx="220" cy="89.5" r="3" fill="currentColor"/><circle cx="255" cy="72.5" r="3" fill="currentColor"/><circle cx="290" cy="55.5" r="3" fill="currentColor"/><text x="110" y="106" font-size="11" fill="currentColor">garis regresi</text><text x="152" y="140" font-size="11" fill="currentColor">residu</text><text x="48" y="64" font-size="11" fill="currentColor">r &asymp; 0,98</text></svg>',
        },
        {
          kind: "table",
          caption: "Nilai dugaan dan residu untuk $\\hat{y} = 1{,}667x + 3{,}25$",
          headers: [
            "$x$",
            "$y$",
            "$\\hat{y}$",
            "Residu $y-\\hat{y}$",
          ],
          rows: [
            [
              "$1$",
              "$5$",
              "$4{,}92$",
              "$0{,}08$",
            ],
            [
              "$2$",
              "$7$",
              "$6{,}58$",
              "$0{,}42$",
            ],
            [
              "$3$",
              "$9$",
              "$8{,}25$",
              "$0{,}75$",
            ],
            [
              "$4$",
              "$8$",
              "$9{,}92$",
              "$-1{,}92$",
            ],
            [
              "$5$",
              "$12$",
              "$11{,}58$",
              "$0{,}42$",
            ],
            [
              "$6$",
              "$13$",
              "$13{,}25$",
              "$-0{,}25$",
            ],
            [
              "$7$",
              "$15$",
              "$14{,}92$",
              "$0{,}08$",
            ],
            [
              "$8$",
              "$17$",
              "$16{,}58$",
              "$0{,}42$",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "tip",
          text: "Jumlah residu mendekati nol. Sifat ini selalu berlaku pada garis kuadrat terkecil dan menjadi tanda bahwa perhitunganmu konsisten.",
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi",
      body: "Tambahkan dan geser titik data pada simulasi berikut. Amati bagaimana garis regresi bergeser serta bagaimana nilai $r$ berubah ketika titik-titik makin menyebar atau makin mendekati garis.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "regresi-sim",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Menemukan Rumus Gradien dan Intersep",
      body: `Dengan notasi $n$ = banyak data, $\\bar{x} = \\dfrac{\\sum x_i}{n}$, dan $\\bar{y} = \\dfrac{\\sum y_i}{n}$, gradien garis kuadrat terkecil adalah

$$b = \\frac{\\displaystyle\\sum (x_i-\\bar{x})(y_i-\\bar{y})}{\\displaystyle\\sum (x_i-\\bar{x})^2}.$$

Bentuk ini lebih mudah dihitung dengan rumus ekuivalen berikut:

$$b = \\frac{n\\sum x_i y_i - \\left(\\sum x_i\\right)\\left(\\sum y_i\\right)}{n\\sum x_i^2 - \\left(\\sum x_i\\right)^2}.$$

Setelah $b$ diperoleh, intersep dihitung dengan

$$a = \\bar{y} - b\\,\\bar{x}.$$

Tanda gradien memberi tahu arah hubungan: $b > 0$ berarti $y$ cenderung naik saat $x$ naik, $b < 0$ berarti sebaliknya. Satuan $b$ adalah satuan $y$ per satuan $x$, seperti "puluhan unit penjualan per juta rupiah iklan".`,
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Rumus: Koefisien Determinasi",
      body: `**Koefisien determinasi** $r^2$ menyatakan proporsi variasi $y$ yang dijelaskan oleh model linear:

$$r^2 = \\frac{\\text{variasi yang dijelaskan}}{\\text{variasi total}}, \\qquad 0 \\leq r^2 \\leq 1.$$

Koefisien korelasi $r$ mengukur arah dan kekuatan hubungan linear dengan $-1 \\leq r \\leq 1$; rumus dan tafsirnya dibahas pada topik **Data Bivariat**, dan koefisien determinasi diperoleh dari $r^2 = r \\cdot r$ sehingga tidak pernah negatif. Makin dekat $r^2$ ke $1$, makin besar bagian variasi $y$ yang diterangkan garis regresi.

Jika $r = 0{,}9$, maka $r^2 = 0{,}81$, artinya sekitar **81%** variasi $y$ dijelaskan oleh model linear, sedangkan 19% sisanya dipengaruhi faktor lain atau sekadar variasi acak. Gradien $b$ dan intersep $a$ dihitung dengan rumus yang sudah diturunkan pada bagian generalisasi.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "$r^2$ mengukur seberapa besar variasi yang dijelaskan, bukan persentase prediksi yang tepat. Nilai $r^2$ tinggi pun tidak menjamin setiap titik dekat garis; periksa selalu diagram pencar dan residunya.",
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
          intro: "Contoh 1 sampai 4 memakai data biaya iklan dan penjualan, sedangkan Contoh 5 memakai lima pasangan data kecil. Setiap langkah memuat yang diketahui, ide, langkah, verifikasi, dan kesimpulan.",
          steps: [
            {
              title: "Contoh 1: gradien garis regresi",
              text: `**Diketahui.** $n=8$, $\\sum x_i=36$, $\\sum y_i=86$, $\\sum x_i y_i=457$, dan $\\sum x_i^2=204$.

**Ide.** Pakai rumus gradien kuadrat terkecil dari data mentah.

**Langkah.** $b = \\dfrac{8(457) - (36)(86)}{8(204) - 36^2} = \\dfrac{3656 - 3096}{1632 - 1296} = \\dfrac{560}{336} = \\dfrac{5}{3} \\approx 1{,}667$.

**Verifikasi.** Karena data menaik, $b$ harus positif, dan memang $b>0$. Nilainya masuk akal: tiap tambahan $1$ juta iklan menaikkan penjualan sekitar $1{,}7$ puluhan unit.

**Kesimpulan.** Gradien $b = \\dfrac{5}{3} \\approx 1{,}667$.`,
            },
            {
              title: "Contoh 2: intersep dan persamaan garis",
              text: `**Diketahui.** $\\bar{x}=\\dfrac{36}{8}=4{,}5$, $\\bar{y}=\\dfrac{86}{8}=10{,}75$, dan $b\\approx1{,}667$.

**Ide.** Gunakan $a=\\bar{y}-b\\,\\bar{x}$ agar garis melewati titik rata-rata $(\\bar{x},\\bar{y})$.

**Langkah.** $a = 10{,}75 - 1{,}667(4{,}5) = 10{,}75 - 7{,}5 = 3{,}25$, sehingga $\\hat{y}=1{,}667x+3{,}25$.

**Verifikasi.** Substitusi $x=4{,}5$: $\\hat{y}=1{,}667(4{,}5)+3{,}25=7{,}5+3{,}25=10{,}75=\\bar{y}$. Garis memang melewati titik rata-rata.

**Kesimpulan.** Intersep $a=3{,}25$. Persamaan garisnya $\\hat{y}=1{,}667x+3{,}25$.`,
            },
            {
              title: "Contoh 3: korelasi dan determinasi",
              text: `**Diketahui.** $n=8$, $\\sum x_i y_i=457$, $\\sum x_i=36$, $\\sum y_i=86$, $\\sum x_i^2=204$, dan $\\sum y_i^2=1046$.

**Ide.** Hitung $r$ (lihat topik Data Bivariat), lalu kuadratkan untuk memperoleh $r^2$.

**Langkah.** $r = \\dfrac{8(457)-(36)(86)}{\\sqrt{(8(204)-36^2)(8(1046)-86^2)}} = \\dfrac{560}{\\sqrt{336 \\cdot 972}} = \\dfrac{560}{\\sqrt{326\\,592}} \\approx \\dfrac{560}{571{,}48} \\approx 0{,}980$.

**Verifikasi.** $r^2 = 0{,}980^2 \\approx 0{,}960$, dan $r^2$ harus di antara $0$ dan $1$. Memang demikian.

**Kesimpulan.** $r \\approx 0{,}98$ dan $r^2 \\approx 0{,}96$: sekitar $96\\%$ variasi penjualan dijelaskan biaya iklan, hubungan linear positif yang kuat.`,
            },
            {
              title: "Contoh 4: prediksi dan ekstrapolasi",
              text: `**Diketahui.** $\\hat{y}=1{,}667x+3{,}25$; data $x$ hanya meliputi $1$ sampai $8$.

**Ide.** Substitusi nilai $x$, lalu periksa apakah $x$ masih berada dalam rentang data.

**Langkah.** Untuk $x=6$ (di dalam rentang): $\\hat{y}=1{,}667(6)+3{,}25=10+3{,}25=13{,}25$. Untuk $x=10$: $\\hat{y}=1{,}667(10)+3{,}25=16{,}67+3{,}25=19{,}92$.

**Verifikasi.** Prediksi $x=6$ dekat dengan nilai amatan $y=13$, sehingga wajar. Prediksi $x=10$ jauh di luar rentang sehingga risikonya lebih besar.

**Kesimpulan.** $x=6$ memberi prediksi $13{,}25$ (interpolasi), sedangkan $x=10$ memberi $19{,}92$ sebagai **ekstrapolasi** yang perlu ditafsirkan hati-hati.`,
            },
            {
              title: "Contoh 5: data kecil",
              text: `**Diketahui.** Lima pasangan data $(1,3)$, $(2,5)$, $(3,4)$, $(4,6)$, $(5,7)$.

**Ide.** Hitung gradien dan intersep seperti biasa, lalu gunakan garisnya untuk menaksir.

**Langkah.** Dengan $n=5$: $\\sum x_i=15$, $\\sum y_i=25$, $\\sum x_i y_i=84$, dan $\\sum x_i^2=55$. Maka $b=\\dfrac{5(84)-(15)(25)}{5(55)-15^2}=\\dfrac{45}{50}=0{,}9$. Karena $\\bar{x}=3$ dan $\\bar{y}=5$, $a=5-0{,}9(3)=2{,}3$, sehingga $\\hat{y}=0{,}9x+2{,}3$.

**Verifikasi.** Substitusi $x=3$: $\\hat{y}=0{,}9(3)+2{,}3=5=\\bar{y}$, jadi garis melewati titik rata-rata.

**Kesimpulan.** $\\hat{y}=0{,}9x+2{,}3$. Untuk $x=6$ diperoleh $\\hat{y}=0{,}9(6)+2{,}3=7{,}7$; karena $x=6$ sedikit di luar rentang $1$ sampai $5$, angka ini termasuk ekstrapolasi.`,
            },
          ],
        },
        {
          kind: "callout",
          variant: "warning",
          title: "Batas prediksi",
          text: "Prediksi paling dapat dipercaya berada **di dalam** rentang data (interpolasi). Semakin jauh di luar rentang itu, semakin besar risiko model linear tidak lagi berlaku.",
        },
        {
          kind: "figure",
          alt: "Diagram pencar dengan garis regresi; satu titik prediksi di dalam rentang data dan satu di luarnya ditandai untuk membandingkan interpolasi dan ekstrapolasi.",
          caption: "Garis regresi $\\hat{y}=1{,}667x+3{,}25$ dihitung dari data $x=1$ sampai $8$. Prediksi di dalam rentang data (contohnya $x=6$ memberi $13{,}25$) lebih dapat dipercaya daripada prediksi di luar rentang ($x=10$ memberi $19{,}9$, ekstrapolasi).",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="40" y1="200" x2="300" y2="200" stroke="currentColor" stroke-width="1.4"/><line x1="40" y1="200" x2="40" y2="30" stroke="currentColor" stroke-width="1.4"/><line x1="228.8" y1="200" x2="228.8" y2="64" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/><line x1="63.6" y1="160.7" x2="228.8" y2="67.3" stroke="currentColor" stroke-width="2.2"/><line x1="228.8" y1="67.3" x2="276" y2="40.7" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><circle cx="63.6" cy="160" r="3" fill="currentColor"/><circle cx="87.2" cy="144" r="3" fill="currentColor"/><circle cx="110.8" cy="128" r="3" fill="currentColor"/><circle cx="134.4" cy="136" r="3" fill="currentColor"/><circle cx="158" cy="104" r="3" fill="currentColor"/><circle cx="181.6" cy="96" r="3" fill="currentColor"/><circle cx="205.2" cy="80" r="3" fill="currentColor"/><circle cx="228.8" cy="64" r="3" fill="currentColor"/><circle cx="181.6" cy="94" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="276" cy="40.7" r="4" fill="none" stroke="currentColor" stroke-width="2"/><text x="292" y="216" font-size="12" fill="currentColor">x</text><text x="24" y="38" font-size="12" fill="currentColor">y</text><text x="232" y="152" font-size="11" fill="currentColor">batas data</text><text x="118" y="88" font-size="11" fill="currentColor">x=6: 13,25</text><text x="206" y="32" font-size="11" fill="currentColor">x=10: 19,9</text></svg>',
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
      body: `Regresi linear dipakai untuk menaksir harga rumah dari luas bangunan, memprediksi penjualan dari anggaran iklan, dan memantau tren pertumbuhan. Sebagai gambaran, jika hubungan luas rumah $x$ (m$^2$) dan harga $\\hat{y}$ (juta rupiah) mengikuti $\\hat{y} = 5x + 150$, rumah seluas $120$ m$^2$ ditaksir bernilai $5(120) + 150 = 750$ juta rupiah. Namun sebuah garis yang cocok secara statistik **belum tentu** memberi penjelasan sebab-akibat.

Pada data biaya iklan dan penjualan di atas, prediksi untuk $x = 10$ juta rupiah menjadi $\\hat{y} \\approx 19{,}9$ puluhan unit. Angka itu berada di luar rentang data ($1$ sampai $8$), sehingga termasuk ekstrapolasi yang harus ditafsirkan hati-hati, bukan angka pasti.

Untuk melihat penerapan lengkap pada data nilai ujian, buka studi kasus [Apakah Waktu Belajar Berkaitan dengan Nilai?](/aplikasi/regresi-nilai-ujian).`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menyimpulkan sebab-akibat dari korelasi.** $r \\approx 0{,}98$ antara biaya iklan dan penjualan **bukan bukti** bahwa menambah iklan *menyebabkan* penjualan naik; bisa jadi musim ramai menaikkan keduanya, atau penjualan yang tinggi mendorong pemilik menambah iklan.

**2. Menukar gradien dan intersep.** Persamaan berbentuk $\\hat{y} = bx + a$, bukan $\\hat{y} = ax + b$. Menukarnya mengubah arti kemiringan sepenuhnya.

**3. Menganggap $r^2$ selalu "persen benar".** $r^2$ mengukur variasi yang dijelaskan, bukan persentase prediksi yang tepat.

**4. Berprediksi jauh di luar rentang data tanpa peringatan.** Model dari $x = 1$ sampai $8$ tidak otomatis berlaku untuk $x = 100$.

**5. Mengabaikan residu besar.** Nilai $r$ tinggi bisa menyembunyikan beberapa titik yang menyimpang jauh (pencilan). Periksa selalu diagram pencarnya, bukan hanya angkanya.

**6. Menafsirkan intersep tanpa memperhatikan konteks.** Intersep $a$ adalah nilai dugaan saat $x=0$, padahal $x=0$ sering tidak bermakna dalam konteks nyata (misalnya "tinggi $0$ cm" atau "belajar $0$ jam"). Karena itu intersep biasanya lebih bermakna sebagai penyusun persamaan daripada sebagai prediksi yang dapat dipercaya.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Perhatikan perhitungan gradien regresi dari data $n=8$, $\\sum x_i=36$, $\\sum y_i=86$, $\\sum x_i y_i=457$, dan $\\sum x_i^2=204$. Ada satu langkah yang keliru. Klik langkah itu.",
          steps: [
            "Gunakan rumus $b = \\dfrac{n\\sum x_i y_i - \\left(\\sum x_i\\right)\\left(\\sum y_i\\right)}{n\\sum x_i^2 - \\left(\\sum x_i\\right)^2}$.",
            "Substitusi angka: $b = \\dfrac{8(457) - (36)(86)}{8(204) - (36)}$.",
            "Hitung pembilang: $3656 - 3096 = 560$.",
            "Sederhanakan: $b = \\dfrac{560}{1632 - 36} = \\dfrac{560}{1596} \\approx 0{,}351$.",
          ],
          wrongIndex: 1,
          explanation: "Langkah kedua keliru. Suku $(\\sum x_i)^2$ berarti $36^2 = 1296$, bukan $36$. Penyebut yang benar adalah $8(204) - 1296 = 336$, sehingga $b = \\dfrac{560}{336} = \\dfrac{5}{3} \\approx 1{,}667$.",
        },
      ],
    },
    {
      id: "regresi-tantangan",
      kind: "tantangan",
      title: "Dua Garis Regresi yang Berbeda",
      body: `**Soal.** Empat pengamatan $(x,y)$ adalah $(1,2)$, $(2,3)$, $(3,5)$, dan $(4,6)$. Seorang analis menyimpulkan bahwa satu garis regresi sudah cukup untuk mewakili hubungan keduanya. Tentukan garis regresi $y$ terhadap $x$ dan garis regresi $x$ terhadap $y$, lalu jelaskan mengapa keduanya tidak sama. Periksa pula hubungan antara kedua gradien itu dengan koefisien korelasi.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Hitung kedua arah regresi dari data yang sama, lalu bandingkan.",
          steps: [
            {
              title: "Hitung jumlah yang diperlukan",
              text: "Dengan $n=4$: $\\sum x_i=10$, $\\sum y_i=16$, $\\sum x_iy_i=47$, $\\sum x_i^2=30$, dan $\\sum y_i^2=74$.",
            },
            {
              title: "Garis $y$ terhadap $x$",
              text: "Gradien $b=\\dfrac{4(47)-(10)(16)}{4(30)-10^2}=\\dfrac{188-160}{120-100}=\\dfrac{28}{20}=1{,}4$. Karena $\\bar{x}=2{,}5$ dan $\\bar{y}=4$, intersep $a=4-1{,}4(2{,}5)=0{,}5$, sehingga $\\hat{y}=1{,}4x+0{,}5$.",
            },
            {
              title: "Garis $x$ terhadap $y$",
              text: "Gradien $b'=\\dfrac{4(47)-(16)(10)}{4(74)-16^2}=\\dfrac{188-160}{296-256}=\\dfrac{28}{40}=0{,}7$. Intersep $a'=\\bar{x}-b'\\bar{y}=2{,}5-0{,}7(4)=-0{,}3$, sehingga $x=0{,}7y-0{,}3$.",
            },
            {
              title: "Mengapa keduanya berbeda",
              text: "Kedua garis dioptimalkan untuk arah galat yang berbeda: garis $y$ terhadap $x$ meminimumkan jumlah kuadrat residu **tegak**, sedangkan garis $x$ terhadap $y$ meminimumkan residu **mendatar**. Keduanya baru berimpit ketika titik-titik tepat segaris sempurna.",
            },
            {
              title: "Hubungan kedua gradien",
              text: "Koefisien korelasinya $r=\\dfrac{28}{\\sqrt{(120-100)(296-256)}}=\\dfrac{28}{\\sqrt{20\\cdot40}}=\\dfrac{28}{\\sqrt{800}}\\approx0{,}99$. Perhatikan $b\\cdot b'=1{,}4\\times0{,}7=0{,}98=r^2$: garis balik membagi kembali kuadrat korelasi, bukan menggantikan garis semula.",
            },
            {
              title: "Simpulkan",
              text: "Untuk hubungan yang tidak sempurna, garis regresi $y$ terhadap $x$ dan $x$ terhadap $y$ memang berbeda. Kesimpulan analis bahwa satu garis cukup adalah keliru bila arah prediksinya ditukar.",
            },
          ],
        },
      ],
    },
    {
      id: "regresi-sejarah",
      kind: "sejarah",
      title: "Kuadrat Terkecil dan Kelahiran Regresi",
      body: `Metode kuadrat terkecil tumbuh dari kebutuhan astronomi untuk mencocokkan pengamatan yang mengandung galat. Pada 1805 Adrien-Marie Legendre menerbitkannya secara terbuka, sedangkan Carl Friedrich Gauss mengaku telah memakainya sejak 1795 dan memberinya dasar yang lebih ketat. Gauss memakai metode ini untuk menghitung kembali orbit Ceres dari sekumpulan kecil pengamatan yang tersebar, sebuah keberhasilan yang membuat metode tersebut cepat dikenal. Istilah "regresi" kemudian dipopulerkan Francis Galton pada akhir abad ke-19 ketika menelaah tinggi badan orang tua dan anak: tinggi anak cenderung kembali (regress) ke arah rata-rata populasi, sehingga garis yang menggambarkan kecenderungan itu ia sebut garis regresi. Pada awal abad ke-20 Karl Pearson merumuskan kaitan yang rapi antara garis regresi dan koefisien korelasi, sehingga prediksi dan ukuran kekuatan hubungan dapat dipakai bersama sebagai satu kerangka. Sejak itu garis kuadrat terkecil menjadi langkah baku setelah diagram pencar diperiksa, dan kini metode ini menjadi salah satu alat pemodelan data yang paling luas digunakan.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Timbang kapan sebuah garis tren layak dipercaya: pikirkan satu prediksi yang pernah kamu buat dari data, lalu periksa apakah rentang datanya cukup mendukung.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Kapan garis regresi boleh dipakai untuk memprediksi, dan kapan sebaiknya tidak?",
            "Apa perbedaan peran $r$ dan $r^2$ dalam menilai sebuah model?",
            "Berikan satu contoh hubungan yang berkorelasi kuat di sekitarmu, lalu pikirkan satu variabel perancu yang mungkin menjelaskannya.",
          ],
          confidenceLabel: "Seberapa yakin kamu menilai kelayakan sebuah prediksi regresi?",
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
            "Bentuk / Makna",
          ],
          rows: [
            [
              "Garis regresi",
              "$\\hat{y} = bx + a$",
            ],
            [
              "Gradien",
              "$b = \\dfrac{n\\sum x_i y_i - \\sum x_i \\sum y_i}{n\\sum x_i^2 - (\\sum x_i)^2}$",
            ],
            [
              "Intersep",
              "$a = \\bar{y} - b\\bar{x}$",
            ],
            [
              "Korelasi",
              "$-1 \\leq r \\leq 1$; kekuatan dan arah hubungan linear",
            ],
            [
              "Determinasi",
              "$r^2$; proporsi variasi $y$ yang dijelaskan",
            ],
            [
              "Interpolasi",
              "prediksi di dalam rentang data",
            ],
            [
              "Ekstrapolasi",
              "prediksi di luar rentang data, lebih berisiko",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      questionIds: ['rg-09'],
      body: `**Tutup pelajaran.** (1) Bedakan tugas $r$ dan $r^2$ saat menilai sebuah model linear. (2) Jelaskan mengapa prediksi jauh di luar rentang data tidak dapat dipercaya. Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Regresi Linear** untuk latihan tambahan.`,
    },
  ],
};

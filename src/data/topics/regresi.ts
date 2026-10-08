import type { Topic } from '@/types/content';

export const regresi: Topic = {
  id: 'regresi',
  slug: 'regresi',
  title: 'Regresi Linear',
  subtitle: 'Menaksir hubungan dua variabel dengan garis terbaik',
  grade: 'XI',
  phase: 'F',
  element: 'data-peluang',
  featured: true,
  status: 'lengkap',
  estimatedMinutes: 90,
  summary:
    'Menentukan garis regresi linear dengan metode kuadrat terkecil, menafsirkan koefisien korelasi dan determinasi, serta membuat prediksi secara bertanggung jawab.',
  description:
    'Regresi linear adalah alat untuk memodelkan hubungan antara dua variabel kuantitatif. Dari diagram pencar, kita mencari garis lurus yang paling dekat dengan seluruh titik data, lalu menggunakan garis itu untuk menaksir nilai. Pada topik ini kita menurunkan rumus gradien dan intersep melalui metode kuadrat terkecil, mempelajari koefisien korelasi $r$ dan determinasi $r^2$, serta memahami keterbatasan model seperti interpolasi, ekstrapolasi, dan korelasi yang bukan sebab-akibat.',
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
    { text: 'Menghitung dan menafsirkan koefisien korelasi $r$ serta koefisien determinasi $r^2$.' },
    { text: 'Membuat prediksi dari garis regresi dan membedakan interpolasi dengan ekstrapolasi.' },
    { text: 'Menilai keterbatasan model regresi dan menghindari penafsiran yang berlebihan.' },
  ],
  applications: ['regresi-nilai-ujian'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menentukan garis regresi linear dari data bivariat dengan metode kuadrat terkecil, menafsirkan gradien dan intersep dalam konteks, menghitung serta menafsirkan koefisien korelasi $r$ dan koefisien determinasi $r^2$, membuat prediksi, dan menilai keterbatasan model.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      body: `Seorang siswa yakin bahwa semakin lama belajar, semakin tinggi nilainya. Ia mencatat waktu belajar dan nilai delapan temannya, lalu menggambar titik-titik data. Ketika diminta memperkirakan nilai seseorang yang belajar 10 jam, ia menarik garis lurus dengan penggaris **sekadar "yang kelihatan pas"**.

- Apakah garis "yang kelihatan pas" cukup untuk mengambil keputusan?
- Bagaimana cara menentukan garis lurus yang **terbaik secara matematis**?
- Seberapa kuat hubungan itu, dan dapatkah kita menyatakannya dalam satu angka?

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
      body: `Sebelum melanjutkan, pastikan kamu menguasai:

- membuat dan membaca **diagram pencar** dari pasangan data $(x_i, y_i)$;
- menghitung rata-rata: $\\bar{x} = \\dfrac{\\sum x_i}{n}$ dan $\\bar{y} = \\dfrac{\\sum y_i}{n}$;
- menghitung $\\sum x_i$, $\\sum y_i$, $\\sum x_i y_i$, dan $\\sum x_i^2$ dengan teliti.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Banyak keputusan berbasis data melibatkan dua besaran yang diduga berkaitan. Seorang pelatih ingin tahu apakah jumlah latihan memengaruhi waktu lari; sebuah toko ingin menaksir penjualan dari anggaran iklan; guru ingin melihat kaitan waktu belajar dengan nilai ujian.

Data yang dipakai pada topik ini adalah **waktu belajar per minggu** (jam) dan **nilai ujian** (skala 0–20) dari delapan siswa:

| Waktu belajar $x$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Nilai ujian $y$ | 2 | 4 | 5 | 4 | 7 | 8 | 9 | 11 |

Muncul kecenderungan naik, tetapi titik-titiknya tidak tepat segaris. Pertanyaannya: garis lurus seperti apa yang paling mewakili pola ini, dan seberapa kuat polanya?`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Garis Regresi",
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
          title: "Inti yang perlu diingat",
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
      body: "Setelah dihitung (lihat bagian Contoh), garis regresi untuk data di atas adalah $\\hat{y} = 1{,}190x + 0{,}893$. Tabel berikut membandingkan nilai amatan dengan nilai garis serta residunya.",
      blocks: [
        {
          kind: "table",
          caption: "Nilai dugaan dan residu untuk $\\hat{y} = 1{,}190x + 0{,}893$",
          headers: [
            "$x$",
            "$y$",
            "$\\hat{y}$",
            "Residu $y-\\hat{y}$",
          ],
          rows: [
            [
              "$1$",
              "$2$",
              "$2{,}08$",
              "$-0{,}08$",
            ],
            [
              "$2$",
              "$4$",
              "$3{,}27$",
              "$0{,}73$",
            ],
            [
              "$3$",
              "$5$",
              "$4{,}46$",
              "$0{,}54$",
            ],
            [
              "$4$",
              "$4$",
              "$5{,}65$",
              "$-1{,}65$",
            ],
            [
              "$5$",
              "$7$",
              "$6{,}85$",
              "$0{,}15$",
            ],
            [
              "$6$",
              "$8$",
              "$8{,}04$",
              "$-0{,}04$",
            ],
            [
              "$7$",
              "$9$",
              "$9{,}23$",
              "$-0{,}23$",
            ],
            [
              "$8$",
              "$11$",
              "$10{,}42$",
              "$0{,}58$",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "tip",
          text: "Perhatikan bahwa jumlah residu mendekati nol. Sifat ini selalu berlaku pada garis kuadrat terkecil dan menjadi tanda bahwa perhitunganmu konsisten.",
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

Tanda gradien memberi tahu arah hubungan: $b > 0$ berarti $y$ cenderung naik saat $x$ naik, $b < 0$ berarti sebaliknya. Satuan $b$ adalah satuan $y$ per satuan $x$, misalnya "poin nilai per jam belajar".`,
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Rumus: Koefisien Korelasi dan Determinasi",
      body: `**Koefisien korelasi** $r$ mengukur kekuatan dan arah hubungan linear, dengan $-1 \\leq r \\leq 1$:

$$r = \\frac{n\\sum x_i y_i - \\left(\\sum x_i\\right)\\left(\\sum y_i\\right)}{\\sqrt{\\left[n\\sum x_i^2 - \\left(\\sum x_i\\right)^2\\right]\\left[n\\sum y_i^2 - \\left(\\sum y_i\\right)^2\\right]}}.$$

Nilai $r$ dekat $\\pm 1$ berarti titik-titik rapat pada garis; $r$ dekat $0$ berarti hubungan linear lemah. Tanda $r$ selalu sama dengan tanda gradien $b$.

**Koefisien determinasi** $r^2$ menyatakan proporsi variasi $y$ yang dapat dijelaskan oleh $x$:

$$r^2 = \\frac{\\text{variasi yang dijelaskan}}{\\text{variasi total}}, \\qquad 0 \\leq r^2 \\leq 1.$$

Jika $r = 0{,}9$, maka $r^2 = 0{,}81$, artinya sekitar **81%** variasi $y$ dijelaskan oleh model linear, sedangkan 19% sisanya dipengaruhi faktor lain atau sekadar variasi acak.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "$r = 0$ berarti **tidak ada hubungan linear**, bukan tidak ada hubungan sama sekali. Dua variabel bisa punya hubungan melengkung yang kuat namun menghasilkan $r \\approx 0$.",
        },
      ],
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      body: "Kita gunakan data delapan siswa: $\\sum x_i = 36$, $\\sum y_i = 50$, $\\sum x_i y_i = 275$, $\\sum x_i^2 = 204$, $\\sum y_i^2 = 376$, dan $n = 8$.",
      blocks: [
        {
          kind: "step-reveal",
          intro: "Kita gunakan data delapan siswa: $\\sum x_i = 36$, $\\sum y_i = 50$, $\\sum x_i y_i = 275$, $\\sum x_i^2 = 204$, $\\sum y_i^2 = 376$, dan $n = 8$.",
          steps: [
            {
              title: "Langkah 1",
              text: "$$b = \\frac{8(275) - (36)(50)}{8(204) - (36)^2} = \\frac{2200 - 1800}{1632 - 1296} = \\frac{400}{336} = \\frac{25}{21} \\approx 1{,}190.$$",
            },
            {
              title: "Langkah 2",
              text: `Dengan $\\bar{x} = \\dfrac{36}{8} = 4{,}5$ dan $\\bar{y} = \\dfrac{50}{8} = 6{,}25$:

$$a = 6{,}25 - 1{,}190(4{,}5) \\approx 6{,}25 - 5{,}357 = 0{,}893.$$

Jadi $\\hat{y} = 1{,}190x + 0{,}893$. Artinya, **setiap tambahan 1 jam belajar dikaitkan dengan kenaikan nilai sekitar 1,19 poin**, dan siswa tanpa waktu belajar diprediksi bernilai sekitar 0,89.`,
            },
            {
              title: "Langkah 3",
              text: `$$r = \\frac{400}{\\sqrt{(336)(8 \\cdot 376 - 50^2)}}.$$

Karena $8 \\cdot 376 - 2500 = 3008 - 2500 = 508$, maka

$$r = \\frac{400}{\\sqrt{336 \\cdot 508}} = \\frac{400}{\\sqrt{170\\,688}} \\approx \\frac{400}{413{,}14} \\approx 0{,}968.$$

Karena $\\sqrt{336 \\cdot 508} \\approx 413{,}14$, diperoleh $r \\approx 0{,}968$, sehingga $r^2 \\approx 0{,}968^2 \\approx 0{,}937$. Sekitar **93,7%** variasi nilai dapat dijelaskan oleh waktu belajar — hubungan linear positif yang kuat.`,
            },
            {
              title: "Langkah 4",
              text: "Untuk $x = 10$ jam: $\\hat{y} = 1{,}190(10) + 0{,}893 = 12{,}79$. Karena data hanya mencakup $x = 1$ sampai $8$, nilai ini adalah **ekstrapolasi** yang harus ditafsirkan hati-hati; nilainya bahkan melewati skala maksimum 10.",
            },
          ],
        },
        {
          kind: "callout",
          variant: "warning",
          title: "Batas prediksi",
          text: "Prediksi paling dapat dipercaya berada **di dalam** rentang data (interpolasi). Semakin jauh di luar rentang itu, semakin besar risiko model linear tidak lagi berlaku.",
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
      body: `Regresi linear dipakai untuk menaksir harga rumah dari luas bangunan, memprediksi penjualan dari anggaran iklan, dan memantau tren pertumbuhan. Namun sebuah garis yang cocok secara statistik **belum tentu** memberi penjelasan sebab-akibat.

Untuk melihat penerapan lengkap pada data nilai ujian, buka studi kasus [Apakah Waktu Belajar Berkaitan dengan Nilai?](/aplikasi/regresi-nilai-ujian). Di sana prediksi $x = 10$ menjadi $\\hat{y} \\approx 12{,}8$ dan dibahas mengapa angka itu melampaui skala nilai yang wajar.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menyimpulkan sebab-akibat dari korelasi.** $r = 0{,}97$ antara waktu belajar dan nilai **bukan bukti** bahwa belajar lebih lama *menyebabkan* nilai naik; mungkin ada variabel lain seperti motivasi atau kualitas pengajaran.

**2. Menukar gradien dan intersep.** Persamaan berbentuk $\\hat{y} = bx + a$, bukan $\\hat{y} = ax + b$. Menukarnya mengubah arti kemiringan sepenuhnya.

**3. Menganggap $r^2$ selalu "persen benar".** $r^2$ mengukur variasi yang dijelaskan, bukan persentase prediksi yang tepat.

**4. Berprediksi jauh di luar rentang data tanpa peringatan.** Model dari $x = 1$ sampai $8$ tidak otomatis berlaku untuk $x = 100$.

**5. Mengabaikan residu besar.** Nilai $r$ tinggi bisa menyembunyikan beberapa titik yang menyimpang jauh (pencilan). Periksa selalu diagram pencarnya, bukan hanya angkanya.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Perhatikan perhitungan gradien regresi dari data $n=8$, $\\sum x_i=36$, $\\sum y_i=50$, $\\sum x_i y_i=275$, dan $\\sum x_i^2=204$. Ada satu langkah yang keliru. Klik langkah itu.",
          steps: [
            "Gunakan rumus $b = \\dfrac{n\\sum x_i y_i - \\left(\\sum x_i\\right)\\left(\\sum y_i\\right)}{n\\sum x_i^2 - \\left(\\sum x_i\\right)^2}$.",
            "Substitusi angka: $b = \\dfrac{8(275) - (36)(50)}{8(204) - (36)}$.",
            "Hitung pembilang: $2200 - 1800 = 400$.",
            "Sederhanakan: $b = \\dfrac{400}{1632 - 36} = \\dfrac{400}{1596} \\approx 0{,}251$.",
          ],
          wrongIndex: 1,
          explanation: "Langkah kedua keliru. Suku $(\\sum x_i)^2$ berarti $36^2 = 1296$, bukan $36$. Penyebut yang benar adalah $8(204) - 1296 = 336$, sehingga $b = \\dfrac{400}{336} = \\dfrac{25}{21} \\approx 1{,}190$.",
        },
      ],
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Jawab dengan jujur:",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Kapan garis regresi boleh dipakai untuk memprediksi, dan kapan sebaiknya tidak?",
            "Apa perbedaan peran $r$ dan $r^2$ dalam menilai sebuah model?",
            "Berikan satu contoh hubungan yang berkorelasi kuat di sekitarmu, lalu pikirkan satu variabel perancu yang mungkin menjelaskannya.",
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
      body: `**Tiket keluar.** (1) Apa perbedaan peran $r$ dan $r^2$ dalam menilai sebuah model? (2) Mengapa prediksi jauh di luar rentang data berisiko? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Regresi Linear** untuk latihan tambahan.`,
    },
  ],
};

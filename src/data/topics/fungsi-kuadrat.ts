import type { Topic } from '@/types/content';

export const fungsiKuadrat: Topic = {
  id: 'fungsi-kuadrat',
  slug: 'fungsi-kuadrat',
  title: 'Fungsi Kuadrat',
  subtitle: 'Parabola, akar, dan titik puncak',
  grade: 'X',
  phase: 'E',
  element: 'aljabar-fungsi',
  featured: true,
  status: 'lengkap',
  estimatedMinutes: 90,
  summary:
    'Memahami bentuk fungsi kuadrat, grafik parabola, akar, sumbu simetri, titik puncak, serta hubungan koefisien dengan bentuk grafik.',
  description:
    'Fungsi kuadrat adalah model paling sederhana untuk perubahan yang melengkung: lintasan bola, luas maksimum, dan laba penjualan. Pada topik ini kita mempelajari bentuk umum $f(x)=ax^2+bx+c$, menggambar parabola, menemukan akar dan titik puncak, memahami peran koefisien $a$, $b$, dan $c$, lalu menggunakan fungsi kuadrat untuk memodelkan dan menyelesaikan masalah optimasi sederhana.',
  keywords: [
    'fungsi kuadrat',
    'parabola',
    'sumbu simetri',
    'titik puncak',
    'diskriminan',
    'akar',
    'akar imajiner',
    'bilangan kompleks',
  ],
  prerequisites: [],
  relatedTopics: ['fungsi-eksponensial', 'fungsi-invers'],
  prerequisiteKnowledge: [
    'Pemfaktoran bentuk $x^2+bx+c$',
    'Melengkapi kuadrat sempurna',
    'Menggambar titik pada bidang koordinat',
  ],
  objectives: [
    { text: 'Menjelaskan bentuk umum fungsi kuadrat dan peran koefisiennya.' },
    { text: 'Menentukan akar, sumbu simetri, dan titik puncak fungsi kuadrat.' },
    { text: 'Menggambar grafik fungsi kuadrat berdasarkan ciri-cirinya.' },
    { text: 'Menganalisis hubungan tanda diskriminan dan koefisien dengan bentuk grafik.' },
    { text: 'Menentukan akar real fungsi kuadrat sebagai target utama, dengan kasus akar imajiner sebagai pengayaan opsional.' },
    { text: 'Memodelkan dan menyelesaikan masalah optimasi dengan fungsi kuadrat.' },
  ],
  applications: ['lintasan-bola'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menjelaskan bentuk umum fungsi kuadrat, menentukan akar, sumbu simetri, dan titik puncak, menggambar grafik parabola, menganalisis pengaruh koefisien dan diskriminan terhadap grafik, serta memodelkan masalah kontekstual seperti luas dan laba maksimum.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      body: `Sebuah bola ditendang sehingga ketinggiannya (dalam meter) setelah $t$ detik mengikuti

$$h(t) = -5t^{2} + 20t.$$

Pada awalnya bola naik, lalu mencapai titik tertinggi, kemudian turun. Pada detik ke berapa bola berada di titik tertinggi, dan berapa tingginya? Berapa lama bola berada di udara?`,
      blocks: [
        {
          kind: "prediction",
          prompt: "Pada detik ke berapa bola berada di titik tertinggi?",
          options: [
            "Detik ke-1",
            "Detik ke-2",
            "Detik ke-3",
            "Detik ke-4",
          ],
          reveal: "Lengkapi kuadrat: $h(t)=-5(t^{2}-4t)=-5\\big((t-2)^{2}-4\\big)=-5(t-2)^{2}+20$. Karena $(t-2)^{2}\\geq 0$, nilai terbesar $h$ adalah $20$ pada $t=2$. Jadi bola tertinggi $20$ m pada detik ke-$2$. Bola menyentuh tanah saat $h(t)=0$: $-5t(t-4)=0$, sehingga $t=0$ atau $t=4$; bola berada di udara selama $4$ detik.",
          saveLabel: "Simpan dugaan",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Fungsi kuadrat bertumpu pada aljabar dasar: pemfaktoran dan melengkapi kuadrat. Pastikan kamu sudah menguasai:
- pemfaktoran, seperti $x^{2}-5x+6=(x-2)(x-3)$;
- melengkapi kuadrat sempurna seperti $x^{2}+4x+1=(x+2)^{2}-3$;
- menggambar titik $(x,y)$ pada bidang koordinat.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Lintasan bola, semprotan air mancur, dan lengkung jembatan berbentuk parabola. Dalam bisnis, laba sebagai fungsi banyak barang sering membentuk parabola yang naik lalu turun. Semua itu dimodelkan oleh fungsi kuadrat.

Kata kunci pada fungsi kuadrat adalah **titik puncak**: nilai terbesar (maksimum) atau terkecil (minimum). Menemukannya memungkinkan kita menjawab pertanyaan seperti "berapa harga yang memberi laba terbesar?"`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Bentuk Fungsi Kuadrat",
      body: `Fungsi kuadrat adalah fungsi yang dapat ditulis dalam bentuk

$$f(x) = ax^{2} + bx + c, \\qquad a \\neq 0.$$

Grafiknya berupa **parabola**. Tanda $a$ menentukan arah bukaan:
- jika $a > 0$, parabola terbuka **ke atas** dan memiliki titik puncak **minimum**;
- jika $a < 0$, parabola terbuka **ke bawah** dan memiliki titik puncak **maksimum**.

Nilai $c = f(0)$ adalah titik potong grafik dengan sumbu-$y$. Semakin besar $\\lvert a \\rvert$, semakin "sempit" parabolanya.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Peran setiap koefisien",
          text: "$a$ mengatur arah dan lebar parabola, sedangkan $b$ dan $c$ menggeser posisinya. Parabola selalu simetris terhadap garis vertikal yang melalui titik puncaknya.",
        },
        {
          kind: "figure",
          alt: "Dua parabola berdampingan: parabola terbuka ke atas dengan titik puncak terendah ketika a positif, dan parabola terbuka ke bawah dengan titik puncak tertinggi ketika a negatif.",
          caption: "Tanda $a$ menentukan arah bukaan: $a>0$ membuka ke atas dengan titik puncak minimum, sedangkan $a<0$ membuka ke bawah dengan titik puncak maksimum.",
          svg: '<svg viewBox="0 0 330 150" aria-hidden="true" role="presentation"><line x1="18" y1="88" x2="150" y2="88" stroke="currentColor" stroke-width="1.1"/><line x1="80" y1="128" x2="80" y2="24" stroke="currentColor" stroke-width="1.1"/><polyline points="34,28 52,58 66,80 80,100 94,80 108,58 126,28" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="80" cy="100" r="3" fill="currentColor"/><text x="32" y="144" font-size="11" fill="currentColor">a &gt; 0: minimum</text><line x1="188" y1="88" x2="320" y2="88" stroke="currentColor" stroke-width="1.1"/><line x1="250" y1="128" x2="250" y2="24" stroke="currentColor" stroke-width="1.1"/><polyline points="204,124 222,94 236,72 250,52 264,72 278,94 296,124" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="250" cy="52" r="3" fill="currentColor"/><text x="198" y="144" font-size="11" fill="currentColor">a &lt; 0: maksimum</text></svg>',
        },
        {
          kind: "flip-cards",
          intro: "Balik tiap kartu untuk menguji istilah kunci fungsi kuadrat.",
          cards: [
            {
              front: "Parabola",
              back: "Grafik fungsi kuadrat, berupa kurva simetris.",
            },
            {
              front: "Titik puncak",
              back: "Titik tertinggi atau terendah pada parabola.",
            },
            {
              front: "Sumbu simetri",
              back: "Garis vertikal $x=-\\dfrac{b}{2a}$ yang membagi parabola menjadi dua bagian cermin.",
            },
            {
              front: "Diskriminan",
              back: "$D=b^{2}-4ac$, penentu banyaknya akar real.",
            },
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi",
      body: `Untuk $f(x)=x^{2}-6x+8$, kita dapat menyajikan fungsi melalui tabel nilai, grafik, dan bentuk aljabar yang setara.

$$f(x) = x^{2}-6x+8 = (x-2)(x-4) = (x-3)^{2}-1.$$

Ketiga bentuk itu menyingkap informasi berbeda: bentuk faktor menunjukkan akar, sedangkan bentuk kuadrat sempurna menunjukkan titik puncak.`,
      blocks: [
        {
          kind: "table",
          caption: "Tabel nilai $f(x)=x^{2}-6x+8$",
          headers: [
            "$x$",
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
          ],
          rows: [
            [
              "$f(x)$",
              "8",
              "3",
              "0",
              "-1",
              "0",
              "3",
            ],
          ],
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Simbolik",
              body: "$f(x)=x^{2}-6x+8=(x-2)(x-4)=(x-3)^{2}-1$. Bentuk faktor menyingkap akar, sedangkan bentuk puncak menyingkap titik puncak.",
            },
            {
              label: "Tabel",
              body: "Baris nilai menunjukkan $f$ turun sampai $x=3$ lalu naik kembali. Nilai terkecil $-1$ muncul pada $x=3$.",
            },
            {
              label: "Grafik",
              body: "Parabola terbuka ke atas, memotong sumbu-$x$ di $(2,0)$ dan $(4,0)$, serta berpuncak di $(3,-1)$.",
            },
          ],
        },
        {
          kind: "figure",
          alt: "Parabola terbuka ke atas dengan titik puncak di bawah sumbu-x, garis putus-putus vertikal sebagai sumbu simetri, dua titik potong pada sumbu-x, dan satu titik potong pada sumbu-y.",
          caption: "Grafik $f(x)=x^{2}-6x+8$: titik puncak $(3,-1)$, sumbu simetri $x=3$ (garis putus-putus), akar $x=2$ dan $x=4$ pada sumbu-$x$, serta titik potong sumbu-$y$ di $(0,8)$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="25" y1="190" x2="310" y2="190" stroke="currentColor" stroke-width="1"/><line x1="60" y1="20" x2="60" y2="225" stroke="currentColor" stroke-width="1"/><line x1="180" y1="25" x2="180" y2="220" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><polyline points="60,46 80,95.5 100,136 120,167.5 140,190 160,203.5 180,208 200,203.5 220,190 240,167.5 260,136 280,95.5 300,46" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="180" cy="208" r="3.5" fill="currentColor"/><circle cx="140" cy="190" r="3.5" fill="currentColor"/><circle cx="220" cy="190" r="3.5" fill="currentColor"/><circle cx="60" cy="46" r="3.5" fill="currentColor"/><text x="304" y="205" font-size="12" fill="currentColor">x</text><text x="66" y="30" font-size="12" fill="currentColor">y</text><text x="184" y="224" font-size="12" fill="currentColor">puncak</text><text x="108" y="214" font-size="12" fill="currentColor">x = 2</text><text x="234" y="214" font-size="12" fill="currentColor">x = 4</text><text x="66" y="60" font-size="11" fill="currentColor">potong sumbu-y</text><text x="118" y="40" font-size="11" fill="currentColor">sumbu simetri</text></svg>',
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi",
      body: "Gunakan penggeser untuk mengubah nilai $a$, $b$, dan $c$ pada $f(x)=ax^{2}+bx+c$. Amati bagaimana arah bukaan, lebar parabola, sumbu simetri, dan titik puncak berubah. Catat pola hubungan antara koefisien dan bentuk grafik.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "kuadrat-parameter",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Menemukan Sumbu Simetri dan Titik Puncak",
      body: `Kita ubah bentuk umum menjadi bentuk kuadrat sempurna (bentuk puncak). Keluarkan $a$ dari dua suku pertama:

$$f(x) = a\\left(x^{2}+\\frac{b}{a}x\\right)+c = a\\left(x+\\frac{b}{2a}\\right)^{2} - \\frac{b^{2}}{4a} + c.$$

Karena $\\left(x+\\frac{b}{2a}\\right)^{2} \\geq 0$, nilai $f$ paling kecil (bila $a>0$) atau paling besar (bila $a<0$) tercapai ketika $x = -\\frac{b}{2a}$. Inilah **sumbu simetri**, dan titik puncaknya adalah

$$\\left(-\\frac{b}{2a},\\ f\\!\\left(-\\frac{b}{2a}\\right)\\right).$$

Bentuk puncak fungsi kuadrat ditulis $f(x)=a(x-h)^{2}+k$ dengan $h=-\\dfrac{b}{2a}$ dan $k=f(h)$.`,
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Akar dan Diskriminan",
      body: `Akar fungsi kuadrat adalah nilai $x$ dengan $f(x)=0$, yaitu titik potong grafik dengan sumbu-$x$. Dengan melengkapi kuadrat pada $ax^{2}+bx+c=0$ diperoleh rumus abc:

$$x_{1,2} = \\frac{-b \\pm \\sqrt{b^{2}-4ac}}{2a}.$$

Bilangan $D = b^{2}-4ac$ disebut **diskriminan** dan menentukan banyak akar real:
- $D > 0$: dua akar real berbeda (grafik memotong sumbu-$x$ di dua titik);
- $D = 0$: satu akar real kembar (grafik menyinggung sumbu-$x$);
- $D < 0$: tidak ada akar real (grafik tidak menyentuh sumbu-$x$).

Meskipun $D < 0$ tidak memberi akar real, persamaan tetap memiliki **dua akar kompleks konjugat**. Dengan mengenalkan bilangan imajiner $i$ yang memenuhi $i^{2} = -1$, akarnya adalah

$$x_{1,2} = \\frac{-b \\pm i\\sqrt{\\lvert D \\rvert}}{2a}.$$

Kedua akar ini berbentuk $p \\pm qi$ dengan $p=-\\dfrac{b}{2a}$ dan $q=\\dfrac{\\sqrt{\\lvert D \\rvert}}{2a}$, sehingga parabolanya tidak pernah memotong sumbu-$x$.

Nilai puncak juga dapat dinyatakan dengan diskriminan: $k = -\\dfrac{D}{4a}$.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "Sumbu simetri adalah garis $x=-\\dfrac{b}{2a}$, bukan nilai $x$ itu saja. Tanda negatif di depan $b$ sering terlewat; periksa kembali sebelum menggambar.",
        },
        {
          kind: "table",
          caption: "Tiga kasus diskriminan $D = b^{2} - 4ac$",
          headers: [
            "Diskriminan",
            "Akar real",
            "Grafik terhadap sumbu-$x$",
            "Contoh",
          ],
          rows: [
            [
              "$D > 0$",
              "dua akar real berbeda",
              "memotong sumbu-$x$ di dua titik",
              "$x^{2}-6x+8$: akar $2$ dan $4$",
            ],
            [
              "$D = 0$",
              "satu akar real kembar",
              "menyinggung sumbu-$x$ di satu titik",
              "$x^{2}-4x+4$: akar $2$",
            ],
            [
              "$D < 0$",
              "tidak ada akar real",
              "tidak memotong sumbu-$x$",
              "$x^{2}+2x+5$ (pengayaan)",
            ],
          ],
        },
        {
          kind: "figure",
          alt: "Tiga sketsa parabola terhadap sumbu x: D lebih besar dari nol memotong sumbu x di dua titik, D sama dengan nol menyinggung sumbu x di satu titik, dan D kurang dari nol tidak menyentuh sumbu x.",
          caption: "Tanda diskriminan $D$ menentukan posisi parabola terhadap sumbu-$x$: dua titik potong ($D>0$), satu titik singgung ($D=0$), atau tidak berpotongan ($D<0$).",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="8" y1="150" x2="102" y2="150" stroke="currentColor" stroke-width="1"/><polyline points="15,80 28,140 40,165 55,175 70,165 82,140 95,80" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="32" cy="150" r="2.8" fill="currentColor"/><circle cx="79" cy="150" r="2.8" fill="currentColor"/><text x="34" y="182" font-size="12" fill="currentColor">D &gt; 0</text><line x1="112" y1="150" x2="218" y2="150" stroke="currentColor" stroke-width="1"/><polyline points="125,60 140,110 152,140 165,150 178,140 190,110 205,60" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="165" cy="150" r="2.8" fill="currentColor"/><text x="140" y="182" font-size="12" fill="currentColor">D = 0</text><line x1="228" y1="150" x2="315" y2="150" stroke="currentColor" stroke-width="1"/><polyline points="235,40 250,65 262,82 275,90 288,82 300,65 315,40" fill="none" stroke="currentColor" stroke-width="2.2"/><text x="256" y="182" font-size="12" fill="currentColor">D &lt; 0</text></svg>',
        },
      ],
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      body: `Empat contoh berikut mencakup pembacaan ciri grafik, penentuan titik puncak, optimasi luas, dan kasus diskriminan nol. Buka setiap panel untuk mengikuti langkahnya.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Contoh 1: telusuri ciri grafik $f(x)=x^{2}-6x+8$ satu langkah sekaligus.",
          steps: [
            {
              title: "Faktorkan",
              text: "$f(x)=x^{2}-6x+8=(x-2)(x-4)$.",
            },
            {
              title: "Tentukan akar",
              text: "Dari bentuk faktor, akarnya $x=2$ dan $x=4$.",
            },
            {
              title: "Sumbu simetri",
              text: "$x=-\\dfrac{b}{2a}=-\\dfrac{-6}{2\\cdot1}=3$.",
            },
            {
              title: "Titik puncak",
              text: "$f(3)=9-18+8=-1$, sehingga titik puncaknya $(3,-1)$.",
            },
            {
              title: "Arah dan potongan sumbu-y",
              text: "Karena $a=1>0$ parabola terbuka ke atas, dan $c=8$ memberi titik potong $(0,8)$.",
            },
          ],
        },
        {
          kind: "step-reveal",
          intro: "Contoh 2: tentukan titik puncak $f(x)=-2x^{2}+4x+6$.",
          steps: [
            {
              title: "Baca koefisiennya",
              text: "Di sini $a=-2$, $b=4$, dan $c=6$.",
            },
            {
              title: "Sumbu simetri",
              text: "$x=-\\dfrac{b}{2a}=-\\dfrac{4}{2\\cdot(-2)}=1$.",
            },
            {
              title: "Nilai puncak",
              text: "$f(1)=-2(1)^{2}+4(1)+6=-2+4+6=8$, jadi titik puncaknya $(1,8)$.",
            },
            {
              title: "Arah dan akar",
              text: "Karena $a<0$ parabola terbuka ke bawah. Akarnya dari $-2(x^{2}-2x-3)=-2(x-3)(x+1)=0$, yaitu $x=3$ dan $x=-1$.",
            },
          ],
        },
        {
          kind: "step-reveal",
          intro: "Contoh 3 (optimasi): seutas kawat $40$ m dibuat pagar persegi panjang agar luasnya maksimum.",
          steps: [
            {
              title: "Pilih variabel",
              text: "Misalkan panjang $x$ meter. Karena keliling $2(x+\\text{lebar})=40$, lebarnya $20-x$ meter.",
            },
            {
              title: "Susun fungsi luas",
              text: "Luas $L(x)=x(20-x)=20x-x^{2}$, yaitu fungsi kuadrat dengan $a=-1<0$ sehingga puncaknya maksimum.",
            },
            {
              title: "Cari titik puncak",
              text: "$x=-\\dfrac{b}{2a}=-\\dfrac{20}{2\\cdot(-1)}=10$, maka lebarnya $20-10=10$.",
            },
            {
              title: "Hitung luas maksimum",
              text: "$L(10)=10\\cdot10=100$. Jadi ukuran terbaik adalah $10 \\times 10$ m dengan luas maksimum $100\\ \\text{m}^{2}$.",
            },
          ],
        },
        {
          kind: "step-reveal",
          intro: "Contoh 4 (kasus $D=0$): tentukan akar dan titik puncak $f(x)=x^{2}-4x+4$.",
          steps: [
            {
              title: "Baca koefisien dan diskriminan",
              text: "$a=1$, $b=-4$, $c=4$, sehingga $D=(-4)^{2}-4\\cdot1\\cdot4=16-16=0$.",
            },
            {
              title: "Tentukan akar kembar",
              text: "Karena $D=0$, hanya ada satu akar real kembar: $x=-\\dfrac{b}{2a}=\\dfrac{4}{2}=2$.",
            },
            {
              title: "Tulis bentuk kuadrat sempurna",
              text: "$f(x)=(x-2)^{2}\\ge0$, sehingga grafik tidak pernah bernilai negatif.",
            },
            {
              title: "Simpulkan",
              text: "Grafik menyentuh sumbu-$x$ tepat di titik $(2,0)$ tanpa memotongnya. Titik puncaknya pun $(2,0)$, tepat pada sumbu-$x$; inilah arti parabola menyinggung sumbu-$x$.",
            },
          ],
        },
      ],
    },
    {
      id: "contoh-imajiner",
      kind: "contoh",
      title: "Pengayaan: Akar Imajiner (opsional)",
      body: `**Contoh (akar imajiner).** Tentukan akar-akar $x^{2}+2x+5=0$.

*Penyelesaian.* Di sini $a=1$, $b=2$, dan $c=5$, sehingga diskriminannya
$$D = b^{2}-4ac = 2^{2}-4\\cdot1\\cdot5 = 4-20 = -16 < 0.$$
Karena $D<0$ tidak ada akar real, tetapi ada dua akar kompleks konjugat:
$$x_{1,2} = \\frac{-2 \\pm i\\sqrt{\\lvert -16 \\rvert}}{2\\cdot1} = \\frac{-2 \\pm 4i}{2} = -1 \\pm 2i.$$
Periksa $x=-1+2i$: $(-1+2i)^{2}+2(-1+2i)+5 = (-3-4i)+(-2+4i)+5 = 0$, sehingga benar.`,
      blocks: [
        {
          kind: "callout",
          variant: "info",
          title: "Pengayaan opsional",
          text: "Akar imajiner berada di luar CP Fase E dan boleh dilewati. Target inti topik ini adalah akar real; bahasan ini disediakan sebagai pengayaan bagi yang ingin melangkah lebih jauh.",
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
      body: `Fungsi kuadrat dipakai untuk menentukan tinggi maksimum proyektil, luas lahan maksimum dengan keliling tetap, serta harga jual yang memberi laba terbesar. Bola dengan ketinggian $h(t)=-5t^{2}+20t$ mencapai tinggi maksimum $20$ m pada $t=2$ detik; kawat $40$ m menghasilkan luas pagar maksimum $100\\ \\text{m}^{2}$ pada ukuran $10\\times10$ m; dan laba $P(x)=-3x^{2}+36x-60$ mencapai puncak $48$ pada $x=6$ unit. Prinsipnya sama: susun model kuadrat, temukan titik puncaknya, lalu periksa apakah jawabnya masuk akal dalam konteks.

Untuk melihat contoh data nyata, lihat [Apakah Waktu Belajar Berkaitan dengan Nilai?](/aplikasi/regresi-nilai-ujian).`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Salah menentukan sumbu simetri.** Nilainya $x=-\\dfrac{b}{2a}$, bukan $x=\\dfrac{b}{2a}$. Perhatikan tanda negatifnya.

**2. Menukar peran $a$ dan tanda diskriminan.** Arah bukaan ditentukan $a$, sedangkan banyak akar ditentukan $D$. Keduanya saling bebas.

**3. Menganggap titik puncak selalu maksimum.** Titik puncak maksimum hanya bila $a<0$; bila $a>0$ titik puncak adalah minimum.

**4. Menyamakan nilai puncak dengan nilai $c$.** Nilai $c=f(0)$ hanyalah titik potong sumbu-$y$, belum tentu puncak.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Seorang siswa menentukan sumbu simetri $f(x)=x^{2}-6x+8$. Klik langkah yang keliru.",
          steps: [
            "Tulis $a=1$, $b=-6$, dan $c=8$.",
            "Gunakan rumus sumbu simetri $x=-\\dfrac{b}{2a}$.",
            "Substitusi: $x=\\dfrac{-6}{2\\cdot1}=-3$, jadi sumbu simetri $x=-3$.",
          ],
          wrongIndex: 2,
          explanation: "Substitusinya keliru karena tanda negatif di depan rumus ikut terlewat. Seharusnya $x=-\\dfrac{-6}{2\\cdot1}=3$, sehingga sumbu simetri $x=3$.",
        },
      ],
    },
    {
      id: "tantangan",
      kind: "tantangan",
      title: "Tantangan",
      body: `**Soal.** Seorang peternak ingin membuat dua kandang persegi panjang berdampingan yang berbagi satu sekat di tengah. Seluruh pagar yang tersedia panjangnya $60$ m, termasuk sekat pemisah itu. Tentukan ukuran kandang agar **luas total** kedua kandang maksimum, lalu hitung luas maksimumnya.`,
      blocks: [
        {
          kind: "callout",
          variant: "tip",
          title: "Petunjuk",
          text: "Misalkan lebar total $x$ dan tinggi $y$. Pagar yang dipakai adalah dua sisi lebar, dua sisi tinggi, dan satu sekat sepanjang $y$, sehingga $2x+3y=60$. Susun luas $L=x y$ sebagai fungsi kuadrat satu variabel.",
        },
        {
          kind: "step-reveal",
          intro: "Ubah kendala menjadi fungsi kuadrat, lalu cari titik puncaknya.",
          steps: [
            {
              title: "Tentukan variabel",
              text: "Misalkan lebar total $x$ meter dan tinggi $y$ meter. Luas total $L=xy$.",
            },
            {
              title: "Susun kendala pagar",
              text: "Pagar terdiri dari $2x$ (dua sisi lebar) ditambah $3y$ (dua sisi tinggi dan satu sekat), sehingga $2x+3y=60$.",
            },
            {
              title: "Nyatakan $x$ dalam $y$",
              text: "Dari kendala, $2x=60-3y$, sehingga $x=\\dfrac{60-3y}{2}=30-1{,}5y$.",
            },
            {
              title: "Bentuk fungsi luas",
              text: "$L(y)=y(30-1{,}5y)=30y-1{,}5y^{2}$, yaitu fungsi kuadrat terbuka ke bawah.",
            },
            {
              title: "Cari titik puncak",
              text: "Sumbu simetri $y=-\\dfrac{30}{2\\cdot(-1{,}5)}=\\dfrac{30}{3}=10$. Maka $x=30-1{,}5(10)=15$.",
            },
            {
              title: "Hitung luas maksimum",
              text: "$L(10)=15\\cdot 10=150$. Jadi ukuran terbaik adalah lebar $15$ m dan tinggi $10$ m, dengan luas maksimum $150\\ \\text{m}^{2}$. Periksa pagar: $2(15)+3(10)=30+30=60$ m, sesuai.",
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Jejak Sejarah",
      body: `Penyelesaian soal yang setara dengan persamaan kuadrat sudah tercatat pada lempeng tanah liat Babilonia kuno, ribuan tahun sebelum Masehi, meskipun disajikan sebagai resep hitung dan hanya untuk akar positif. Di India, Brahmagupta pada abad ke-7 memberi aturan penyelesaian yang lebih umum, termasuk penanganan akar negatif. Al-Khwarizmi dalam *Al-Jabr* (sekitar 820) menyusun metode sistematis lengkap dengan langkah melengkapi kuadrat, dan karyanya menjadi rujukan aljabar di dunia Islam lalu Eropa. Kedua akar persamaan kuadrat dihubungkan dengan koefisiennya melalui rumus jumlah dan hasil kali yang kemudian dikembangkan François Viète. Adapun kurva parabolanya baru dipahami sebagai grafik fungsi setelah geometri koordinat Descartes dan Fermat pada abad ke-17.

Dari sinilah istilah "akar" (solusi) dan "diskriminan" yang membedakan banyaknya akar real tumbuh menjadi bagian baku aljabar.`,
      blocks: [
        {
          kind: "table",
          caption: "Tokoh kunci dalam perkembangan persamaan kuadrat",
          headers: [
            "Tokoh",
            "Sumbangan",
          ],
          rows: [
            [
              "Babilonia kuno",
              "Resep menyelesaikan soal setara persamaan kuadrat untuk akar positif.",
            ],
            [
              "Brahmagupta (abad ke-7)",
              "Aturan penyelesaian yang lebih umum, termasuk akar negatif.",
            ],
            [
              "Al-Khwarizmi (sekitar 820)",
              "Metode sistematis dengan melengkapi kuadrat.",
            ],
            [
              "François Viète (abad ke-16)",
              "Hubungan akar dengan koefisien.",
            ],
          ],
        },
      ],
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Titik puncak sering menjadi tempat \"terbaik\" dalam persoalan nyata: tinggi maksimum, luas terbesar, atau biaya terkecil. Pikirkan satu persoalan optimasi di sekitarmu, lalu terangkan mengapa jawabannya berada di titik puncak dan bukan di ujung-ujung selang.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Informasi apa yang langsung kamu peroleh dari tanda $a$ dan nilai $c$ sebelum menghitung?",
            "Bagaimana bentuk kuadrat sempurna membantumu menemukan titik puncak tanpa rumus?",
            "Berikan satu situasi nyata yang titik puncaknya berarti \"terbaik\".",
          ],
          confidenceLabel: "Seberapa yakin kamu menentukan titik puncak fungsi kuadrat?",
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
              "Bentuk umum",
              "$f(x)=ax^{2}+bx+c,\\ a\\neq0$",
            ],
            [
              "Sumbu simetri",
              "$x=-\\dfrac{b}{2a}$",
            ],
            [
              "Titik puncak",
              "$\\left(-\\dfrac{b}{2a},\\ -\\dfrac{D}{4a}\\right)$",
            ],
            [
              "Bentuk puncak",
              "$f(x)=a(x-h)^{2}+k$",
            ],
            [
              "Akar (rumus abc)",
              "$x_{1,2}=\\dfrac{-b\\pm\\sqrt{b^{2}-4ac}}{2a}$",
            ],
            [
              "Akar kompleks ($D<0$)",
              "$x_{1,2}=\\dfrac{-b\\pm i\\sqrt{\\lvert D \\rvert}}{2a}$",
            ],
            [
              "Diskriminan",
              "$D=b^{2}-4ac$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Tiket keluar.** (1) Tanpa menggambar, tentukan banyak akar real dari $f(x)=2x^{2}-4x+5$ dengan menghitung $D$. (2) Tentukan titik puncak $f(x)=x^{2}+6x+5$, lalu jelaskan apakah puncaknya maksimum atau minimum. Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Fungsi Kuadrat** untuk latihan tambahan.`,
    },
  ],
};

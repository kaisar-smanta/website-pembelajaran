import type { Topic } from '@/types/content';

export const barisanDeret: Topic = {
  id: 'barisan-deret',
  slug: 'barisan-deret',
  title: 'Barisan dan Deret',
  subtitle: 'Pola, aritmetika, dan geometri dalam satu kerangka',
  grade: 'XI',
  phase: 'F',
  element: 'bilangan',
  status: 'lengkap',
  cpNote:
    'CP Fase F (Kelas XI) menempatkan barisan dan deret pada elemen Bilangan — lihat F-BIL-1.',
  estimatedMinutes: 90,
  summary:
    'Mengenali pola bilangan serta menentukan suku ke-$n$ dan jumlah suku pada barisan dan deret aritmetika maupun geometri.',
  description:
    'Barisan dan deret adalah bahasa untuk menuliskan pola yang tumbuh secara teratur. Pada topik ini kita mulai dari mengenali pola bilangan, lalu menurunkan rumus suku ke-$n$ dan jumlah $n$ suku pertama barisan aritmetika dan geometri. Rumus-rumus ini menjadi bekal untuk memodelkan tabungan berbunga, pertumbuhan populasi, dan banyak masalah nyata lain.',
  keywords: [
    'pola bilangan',
    'barisan aritmetika',
    'deret aritmetika',
    'barisan geometri',
    'deret geometri',
    'deret tak hingga',
  ],
  prerequisites: ['eksponen'],
  relatedTopics: ['fungsi-eksponensial', 'bunga-majemuk'],
  explorations: ['barisan-pola'],
  prerequisiteKnowledge: [
    'Operasi bilangan bulat, pecahan, dan desimal',
    'Sifat-sifat eksponen dan bentuk pangkat',
    'Menyelesaikan persamaan linear satu variabel',
  ],
  objectives: [
    { text: 'Menjelaskan perbedaan barisan dan deret serta mengenali pola bilangan sederhana.' },
    { text: 'Menentukan suku ke-$n$ dan jumlah $n$ suku pertama barisan aritmetika.' },
    { text: 'Menentukan suku ke-$n$ dan jumlah $n$ suku pertama barisan geometri.' },
    { text: 'Menghitung jumlah deret geometri tak hingga yang konvergen.' },
    { text: 'Memodelkan dan menyelesaikan masalah nyata menggunakan barisan dan deret.' },
  ],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat mengenali pola bilangan, membedakan barisan aritmetika dan geometri, menentukan suku ke-$n$ beserta jumlah $n$ suku pertama masing-masing, menghitung deret geometri tak hingga yang konvergen, serta menerapkan konsep tersebut untuk memodelkan situasi nyata.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      body: `Seorang guru meminta muridnya menjumlahkan semua bilangan dari $1$ sampai $100$: $1+2+3+\\cdots+100$. Menjumlahkan satu per satu tentu melelahkan.

Carl Friedrich Gauss kecil melihat siasat cerdik. Ia memasangkan bilangan dari ujung ke ujung:

$$1+100=101,\\quad 2+99=101,\\quad 3+98=101,\\quad \\dots,\\quad 50+51=101.$$

Ada berapa pasangan yang masing-masing berjumlah $101$? Berapa jumlah seluruhnya?`,
      blocks: [
        {
          kind: "prediction",
          prompt: "Berapa jumlah semua bilangan dari $1$ sampai $100$? Pilih dugaanmu, lalu bandingkan dengan siasat Gauss.",
          options: [
            "$505$",
            "$5050$",
            "$5500$",
            "$10100$",
          ],
          reveal: "Terdapat $50$ pasangan yang masing-masing berjumlah $101$, sehingga jumlahnya $50 \\times 101 = 5050$. Cara Gauss ini adalah inti dari rumus jumlah deret aritmetika: pasangkan suku pertama dengan suku terakhir, lalu kalikan banyaknya pasangan.",
          saveLabel: "Simpan dugaan",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- operasi penjumlahan, pengurangan, perkalian, dan pembagian bilangan;
- sifat eksponen, khususnya $r^{n}$ untuk menghitung perkalian berulang;
- menyelesaikan persamaan linear satu variabel, misalnya $3+(n-1)4=63$.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Pola beraturan muncul di mana-mana. Susunan kursi di gedung pertunjukan sering bertambah dengan jumlah tetap setiap barisnya. Gaji yang naik dengan nominal tetap setiap tahun mengikuti pola aritmetika. Sebaliknya, tabungan berbunga majemuk dan populasi bakteri yang berlipat dua mengikuti pola geometri.

Membedakan kedua pola ini penting: menambah tetap memberi pertumbuhan **linear**, sedangkan mengalikan tetap memberi pertumbuhan **eksponensial**. Topik ini menyediakan alat untuk menghitung keduanya secara ringkas.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Barisan dan Deret",
      body: `**Barisan** adalah urutan bilangan yang disusun menurut suatu aturan. Setiap bilangan disebut **suku** dan dituliskan $U_1, U_2, U_3, \\dots, U_n$, dengan $U_n$ menyatakan suku ke-$n$.

**Deret** adalah jumlah suku-suku suatu barisan:

$$S_n = U_1 + U_2 + U_3 + \\cdots + U_n.$$

Jadi barisan mendaftar (dipisah koma), sedangkan deret menjumlahkan (dihubungkan tanda tambah). Pada barisan aritmetika, selisih dua suku berdekatan selalu tetap dan disebut **beda** $b$. Pada barisan geometri, rasio dua suku berdekatan selalu tetap dan disebut **rasio** $r$.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Inti yang perlu diingat",
          text: "Aritmetika memakai **selisih tetap** ($U_{n}-U_{n-1}=b$), geometri memakai **rasio tetap** ($U_{n}/U_{n-1}=r$). Kedua rumus suku ke-$n$ berbeda dan tidak boleh tertukar.",
        },
        {
          kind: "flip-cards",
          intro: "Bolak-balik kartu untuk mengingat istilah dasar barisan dan deret.",
          cards: [
            {
              front: "Barisan",
              back: "Urutan bilangan menurut aturan tertentu, ditulis dengan pemisah koma.",
            },
            {
              front: "Deret",
              back: "Jumlah suku-suku suatu barisan, ditulis dengan tanda tambah.",
            },
            {
              front: "Beda ($b$)",
              back: "Selisih tetap dua suku berdekatan pada barisan aritmetika.",
            },
            {
              front: "Rasio ($r$)",
              back: "Hasil bagi tetap dua suku berdekatan pada barisan geometri.",
            },
            {
              front: "Suku ke-$n$ ($U_n$)",
              back: "Suku pada posisi ke-$n$ dalam suatu barisan.",
            },
          ],
        },
        {
          kind: "match",
          intro: "Pasangkan istilah dan rumus dengan maknanya.",
          pairs: [
            {
              left: "Barisan aritmetika",
              right: "Selisih dua suku berurutan tetap",
            },
            {
              left: "Barisan geometri",
              right: "Rasio dua suku berurutan tetap",
            },
            {
              left: "$U_{n} = a+(n-1)b$",
              right: "Rumus suku ke-$n$ aritmetika",
            },
            {
              left: "$S_{n} = \\dfrac{n}{2}(2a+(n-1)b)$",
              right: "Jumlah $n$ suku pertama aritmetika",
            },
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi",
      body: "Cobalah mengenali jenis suatu barisan dengan memeriksa selisih atau rasionya.",
      blocks: [
        {
          kind: "table",
          caption: "Mengenali pola barisan",
          headers: [
            "Barisan",
            "Selisih / Rasio",
            "Jenis",
          ],
          rows: [
            [
              "$2, 5, 8, 11, \\dots$",
              "selisih $+3$",
              "Aritmetika",
            ],
            [
              "$3, 6, 12, 24, \\dots$",
              "rasio $\\times 2$",
              "Geometri",
            ],
            [
              "$1, 1, 2, 3, 5, 8, \\dots$",
              "selisih berubah",
              "Bukan keduanya",
            ],
            [
              "$80, 40, 20, 10, \\dots$",
              "rasio $\\times \\tfrac12$",
              "Geometri",
            ],
          ],
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Simbolik",
              body: "Rumus suku ke-$n$: aritmetika $U_n = a + (n-1)b$, geometri $U_n = a r^{\\,n-1}$.",
            },
            {
              label: "Tabel",
              body: "Aritmetika $2, 5, 8, 11$ bertambah $3$; geometri $3, 6, 12, 24$ dikali $2$.",
            },
            {
              label: "Grafik",
              body: "Suku aritmetika membentuk titik pada garis lurus, sedangkan suku geometri menanjak makin cepat membentuk lengkungan.",
            },
          ],
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Menurunkan Rumus Barisan dan Deret Aritmetika",
      body: `Misalkan suku pertama $a$ dan beda $b$. Maka

$$U_1=a,\\quad U_2=a+b,\\quad U_3=a+2b,\\quad \\dots$$

Setiap langkah menambah satu $b$, sehingga suku ke-$n$ memuat $(n-1)$ tambahan $b$:

$$U_n = a + (n-1)b.$$

Untuk jumlahnya, tuliskan $S_n$ dua arah lalu jumlahkan:

$$S_n = a + (a+b) + \\cdots + \\big(a+(n-1)b\\big)$$

$$S_n = \\big(a+(n-1)b\\big) + \\cdots + (a+b) + a$$

Setiap pasangan berjumlah $2a+(n-1)b$ dan ada $n$ pasangan, sehingga $2S_n = n\\big(2a+(n-1)b\\big)$:

$$S_n = \\frac{n}{2}\\big(2a+(n-1)b\\big) = \\frac{n}{2}(a+U_n).$$`,
    },
    {
      id: "rumus-geometri",
      kind: "rumus",
      title: "Rumus Barisan dan Deret Geometri",
      body: `Dengan suku pertama $a$ dan rasio $r$, setiap suku diperoleh dengan mengalikan $r$:

$$U_n = a \\cdot r^{\\,n-1}.$$

Jumlah $n$ suku pertama diperoleh dengan trik yang sama seperti aritmetika. Kurangkan $S_n$ dengan $rS_n$: suku-suku yang sama saling menghapus, menyisakan

$$S_n = \\frac{a\\big(r^{n}-1\\big)}{r-1}, \\qquad r \\neq 1.$$

Khusus untuk $r=1$, seluruh suku sama sehingga $S_n = na$.

**Deret geometri tak hingga.** Jika $\\lvert r\\rvert < 1$, maka $r^{n} \\to 0$ saat $n$ membesar sehingga deret **konvergen** menuju

$$S_\\infty = \\frac{a}{1-r}.$$

Jika $\\lvert r\\rvert \\geq 1$, suku-sukunya tidak menuju nol dan deret **divergen** (jumlahnya tidak berhingga).`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "Rumus $S_\\infty = \\dfrac{a}{1-r}$ hanya berlaku bila $\\lvert r\\rvert < 1$. Periksa dulu rasionya sebelum memakainya.",
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi Pola Barisan dan Deret",
      body: "Sebelum menghafal rumus, bandingkan bagaimana barisan aritmetika dan geometri bertumbuh. Amati kapan jumlah suku barisan geometri melampaui barisan aritmetika.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "barisan-pola",
        },
      ],
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      body: `**Contoh 1 (aritmetika).** Barisan $4, 9, 14, 19, \\dots$ memiliki $a=4$ dan $b=5$. Tentukan $U_{20}$ dan $S_{20}$.

*Penyelesaian.*
$$U_{20} = 4 + (20-1)\\cdot 5 = 4 + 95 = 99.$$
$$S_{20} = \\frac{20}{2}(4+99) = 10 \\cdot 103 = 1030.$$

**Contoh 2 (geometri).** Barisan $5, 15, 45, \\dots$ memiliki $a=5$ dan $r=3$. Tentukan $U_7$ dan $S_7$.

*Penyelesaian.*
$$U_7 = 5\\cdot 3^{6} = 5 \\cdot 729 = 3645.$$
$$S_7 = \\frac{5(3^{7}-1)}{3-1} = \\frac{5(2187-1)}{2} = \\frac{5 \\cdot 2186}{2} = 5465.$$

**Contoh 3 (tak hingga).** Hitung $18 + 6 + 2 + \\tfrac{2}{3} + \\cdots$.

*Penyelesaian.* Di sini $a=18$ dan $r=\\tfrac13$ dengan $\\lvert r\\rvert<1$, maka
$$S_\\infty = \\frac{18}{1-\\tfrac13} = \\frac{18}{\\tfrac23} = 27.$$`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Ikuti langkah menentukan $U_{20}$ dan $S_{20}$ dari barisan $4, 9, 14, 19, \\dots$.",
          steps: [
            {
              title: "Langkah 1",
              text: "Tentukan suku pertama dan beda: $a = 4$ dan $b = 5$ karena selisihnya tetap $5$.",
            },
            {
              title: "Langkah 2",
              text: "Gunakan rumus suku ke-$n$: $U_{20} = 4 + (20-1) \\cdot 5 = 4 + 95 = 99$.",
            },
            {
              title: "Langkah 3",
              text: "Gunakan rumus jumlah: $S_{20} = \\dfrac{20}{2}(4 + 99) = 10 \\cdot 103$.",
            },
            {
              title: "Langkah 4",
              text: "Hitung hasilnya: $S_{20} = 1030$.",
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
      body: `1. Tentukan suku ke-$15$ dari barisan aritmetika $4, 9, 14, 19, \\dots$.

2. Tentukan suku ke-$8$ dari barisan geometri $5, 10, 20, 40, \\dots$.

3. Hitung jumlah $20$ suku pertama deret aritmetika $2 + 5 + 8 + \\cdots$.

4. Diketahui barisan geometri dengan $U_1 = 3$ dan $U_4 = 24$. Tentukan rasionya.

5. Suku keberapakah $47$ pada barisan aritmetika $3, 7, 11, 15, \\dots$?`,
      blocks: [
        {
          kind: "details",
          summary: "Lihat kunci dan pembahasan",
          text: `1. $a=4$, $b=5$, maka $U_{15}=4+(15-1)\\cdot5=4+70=74$.
2. $a=5$, $r=2$, maka $U_8=5\\cdot2^{7}=5\\cdot128=640$.
3. $a=2$, $b=3$, $U_{20}=2+19\\cdot3=59$, sehingga $S_{20}=\\dfrac{20}{2}(2+59)=10\\cdot61=610$.
4. $U_4=3r^{3}=24 \\Rightarrow r^{3}=8 \\Rightarrow r=2$.
5. $47=3+(n-1)\\cdot4 \\Rightarrow 44=4(n-1) \\Rightarrow n-1=11 \\Rightarrow n=12$.`,
        },
      ],
    },
    {
      id: "latihan-cakap",
      kind: "latihan-cakap",
      title: "Latihan Cakap",
      level: "cakap",
      body: `1. Suku ke-$3$ dan suku ke-$7$ suatu barisan aritmetika berturut-turut adalah $11$ dan $27$. Tentukan $U_{20}$ dan $S_{20}$.

2. Pada barisan geometri diketahui $U_2 = 6$ dan $U_5 = 48$. Tentukan $U_{10}$.

3. Hitung jumlah deret geometri tak hingga $12 + 6 + 3 + \\cdots$.

4. Gaji awal seorang karyawan Rp3.000.000 per bulan dan naik Rp250.000 setiap tahun. Berapa total gaji yang diterima selama $10$ tahun pertama?`,
      blocks: [
        {
          kind: "details",
          summary: "Lihat kunci dan pembahasan",
          text: `1. $U_3=a+2b=11$ dan $U_7=a+6b=27$. Kurangkan: $4b=16 \\Rightarrow b=4$, lalu $a=11-8=3$. Jadi $U_{20}=3+19\\cdot4=79$ dan $S_{20}=\\dfrac{20}{2}(3+79)=10\\cdot82=820$.
2. $\\dfrac{U_5}{U_2}=r^{3}=\\dfrac{48}{6}=8 \\Rightarrow r=2$. Karena $U_2=ar=6$, maka $a=3$. Jadi $U_{10}=3\\cdot2^{9}=3\\cdot512=1536$.
3. $a=12$, $r=\\tfrac12$, maka $S_\\infty=\\dfrac{12}{1-\\tfrac12}=24$.
4. $a=3.000.000$, $b=250.000$. $U_{10}=3.000.000+9\\cdot250.000=5.250.000$. Total $S_{10}=\\dfrac{10}{2}(3.000.000+5.250.000)=5\\cdot8.250.000=\\text{Rp}41.250.000$.`,
        },
      ],
    },
    {
      id: "latihan-mahir",
      kind: "latihan-mahir",
      title: "Latihan Mahir",
      level: "mahir",
      body: `1. Buktikan bahwa $S_n=\\dfrac{n}{2}\\big(2a+(n-1)b\\big)$ dengan menjumlahkan barisan dari urutan terbalik.

2. Sebuah gedung pertunjukan memiliki $25$ baris kursi. Baris pertama $20$ kursi dan setiap baris berikutnya bertambah $3$ kursi. Berapa kapasitas gedung itu?

3. Sebuah bola dijatuhkan dari ketinggian $3$ m. Setiap kali memantul, bola mencapai $\\tfrac23$ dari ketinggian sebelumnya. Berapa total jarak yang ditempuh bola sampai berhenti?

4. Sebuah perusahaan menargetkan penjualan bulan pertama $200$ unit, dan setiap bulan naik $50$ unit. Setelah berapa bulan total penjualan mencapai $4.250$ unit?`,
      blocks: [
        {
          kind: "details",
          summary: "Lihat pembahasan",
          text: `1. Tulis $S_n=a+(a+b)+\\cdots+\\big(a+(n-1)b\\big)$ dan kebalikannya $S_n=\\big(a+(n-1)b\\big)+\\cdots+a$. Jumlahkan kedua baris: setiap kolom berjumlah $2a+(n-1)b$ dan ada $n$ kolom, sehingga $2S_n=n\\big(2a+(n-1)b\\big)$. Terbukti.
2. $a=20$, $b=3$, $n=25$. $S_{25}=\\dfrac{25}{2}\\big(2\\cdot20+24\\cdot3\\big)=\\dfrac{25}{2}(40+72)=\\dfrac{25}{2}\\cdot112=25\\cdot56=1400$ kursi.
3. Turun pertama $3$ m, lalu setiap pantulan naik-turun. Pantulan berurutan $3\\cdot\\tfrac23=2$, $2\\cdot\\tfrac23=\\tfrac43,\\dots$ membentuk geometri $a=2$, $r=\\tfrac23$. Total pantulan dua arah: $2\\cdot\\dfrac{2}{1-\\tfrac23}=2\\cdot\\dfrac{2}{\\tfrac13}=12$. Ditambah jatuh awal: $3+12=15$ m.
4. $S_n=\\dfrac{n}{2}\\big(2\\cdot200+(n-1)\\cdot50\\big)=4250$, sehingga $n(400+50n-50)=8500$, yaitu $50n^{2}+350n-8500=0$ atau $n^{2}+7n-170=0$. Faktorkan: $(n+17)(n-10)=0$, jadi $n=10$ bulan.`,
        },
      ],
    },
    {
      id: "dunia-nyata",
      kind: "dunia-nyata",
      title: "Penerapan di Dunia Nyata",
      body: `Barisan aritmetika muncul pada pengaturan kursi, tumpukan barang, dan tangga dengan anak tangga seragam. Barisan geometri muncul pada tabungan berbunga majemuk, pertumbuhan populasi, dan peluruhan zat.

Sebagai gambaran, tabungan awal $M_0$ yang berbunga majemuk tetap $i$ per tahun setelah $n$ tahun bernilai $M_0(1+i)^n$, yang merupakan suku ke-$(n+1)$ sebuah barisan geometri dengan rasio $r=1+i$. Untuk pembahasan lebih lanjut, lihat topik [Bunga dan Investasi](/aplikasi/bunga-investasi) serta [Pertumbuhan Populasi](/aplikasi/pertumbuhan-populasi).`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Tertukar antara beda dan rasio.** Barisan $2, 6, 18, 54$ bukan aritmetika dengan beda $4$; ia geometri dengan rasio $3$. Selalu periksa: apakah selisihnya tetap, atau rasionya tetap?

**2. Salah indeks pada $U_n$. ** Menulis $U_n = a + nb$ atau $U_n = ar^{n}$ adalah keliru. Selisih dan rasio muncul pertama kali pada suku kedua, sehingga eksponennya $(n-1)$.

**3. Menggunakan rumus jumlah aritmetika untuk geometri.** $S_n$ aritmetika memuat $b$, sedangkan geometri memuat $r^{n}$. Pastikan jenis barisannya lebih dahulu.

**4. Memakai deret tak hingga tanpa memeriksa syarat konvergen.** $2+4+8+\\cdots$ tidak memiliki jumlah; $\\lvert r\\rvert = 2 \\geq 1$. Hanya deret dengan $\\lvert r\\rvert<1$ yang konvergen.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Perhatikan penentuan suku ke-$8$ barisan geometri $5, 10, 20, 40, \\dots$. Ada satu langkah keliru. Klik langkah yang salah.",
          steps: [
            "Tentukan suku pertama dan rasio: $a = 5$ dan $r = 2$.",
            "Gunakan rumus suku ke-$n$, yaitu $U_n = a r^{n}$.",
            "Substitusi $n = 8$: $U_8 = 5 \\cdot 2^{8} = 1280$.",
            "Jadi suku ke-$8$ adalah $1280$.",
          ],
          wrongIndex: 1,
          explanation: "Rumus suku ke-$n$ barisan geometri adalah $U_n = a r^{\\,n-1}$, bukan $a r^{n}$. Eksponennya $(n-1)$ karena rasio pertama kali muncul pada suku kedua. Maka $U_8 = 5 \\cdot 2^{7} = 640$.",
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
            "Bagaimana caramu memutuskan suatu barisan termasuk aritmetika atau geometri?",
            "Kapan deret geometri tak hingga punya jumlah berhingga, dan kapan tidak?",
            "Berikan satu contoh pola di sekitarmu yang bersifat aritmetika dan satu yang bersifat geometri.",
          ],
          confidenceLabel: "Seberapa yakin kamu dengan barisan dan deret ini?",
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
            "Aritmetika",
            "Geometri",
          ],
          rows: [
            [
              "Hubungan antar suku",
              "$U_{n}=U_{n-1}+b$",
              "$U_{n}=U_{n-1}\\cdot r$",
            ],
            [
              "Suku ke-$n$",
              "$U_n=a+(n-1)b$",
              "$U_n=ar^{n-1}$",
            ],
            [
              "Jumlah $n$ suku",
              "$S_n=\\dfrac{n}{2}\\big(2a+(n-1)b\\big)$",
              "$S_n=\\dfrac{a(r^{n}-1)}{r-1}$",
            ],
            [
              "Jumlah tak hingga",
              "divergen",
              "$S_\\infty=\\dfrac{a}{1-r},\\ \\lvert r\\rvert<1$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: "Kerjakan kuis topik ini untuk memeriksa pemahamanmu. Buka halaman [Latihan & Asesmen](/latihan) lalu pilih topik **Barisan dan Deret**.",
    },
  ],
};

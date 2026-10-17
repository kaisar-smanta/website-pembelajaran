import type { Topic } from '@/types/content';

export const eksponen: Topic = {
  id: 'eksponen',
  slug: 'eksponen',
  title: 'Eksponen dan Bentuk Akar',
  subtitle: 'Dari perkalian berulang sampai pangkat pecahan',
  grade: 'X',
  phase: 'E',
  element: 'bilangan',
  featured: true,
  status: 'lengkap',
  estimatedMinutes: 90,
  summary:
    'Memahami eksponen sebagai perkalian berulang, sifat-sifatnya, pangkat negatif dan pecahan, serta bentuk akar.',
  description:
    'Eksponen adalah cara ringkas menuliskan perkalian berulang dan menjadi dasar bagi fungsi eksponensial, barisan geometri, pertumbuhan, hingga matematika keuangan. Pada topik ini kita membangun makna eksponen terlebih dahulu, kemudian menurunkan sifat-sifatnya, memperluas ke pangkat nol, negatif, dan pecahan, lalu menyederhanakan bentuk akar.',
  keywords: [
    'eksponen',
    'pangkat',
    'bentuk akar',
    'pangkat negatif',
    'pangkat pecahan',
    'sifat eksponen',
  ],
  prerequisites: [],
  relatedTopics: ['barisan-deret', 'fungsi-eksponensial', 'bunga-majemuk'],
  prerequisiteKnowledge: [
    'Operasi bilangan bulat dan pecahan',
    'Faktorisasi bilangan prima',
    'Konsep variabel dan bentuk aljabar sederhana',
  ],
  objectives: [
    { text: 'Menjelaskan makna eksponen sebagai perkalian berulang dan kaitannya dengan notasi.' },
    { text: 'Menggunakan sifat-sifat eksponen untuk menyederhanakan bentuk aljabar.' },
    { text: 'Menyatakan dan menghitung pangkat nol, pangkat negatif, dan pangkat pecahan.' },
    { text: 'Menyederhanakan bentuk akar dan merasionalkan penyebut.' },
    { text: 'Memodelkan situasi pertumbuhan sederhana menggunakan eksponen.' },
  ],
  applications: ['pertumbuhan-populasi', 'bunga-investasi'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat memahami eksponen sebagai perkalian berulang, menerapkan sifat-sifat eksponen, bekerja dengan pangkat negatif dan pecahan, menyederhanakan bentuk akar, serta menggunakan eksponen untuk memodelkan pertumbuhan sederhana.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      body: `Bayangkan selembar kertas yang tebalnya $0{,}1$ mm. Kertas itu dilipat dua terus-menerus. Setelah dilipat **10 kali**, berapa tebal tumpukannya?

Banyak siswa memperkirakan tebalnya hanya beberapa milimeter. Hitunglah secara bertahap:

- setelah 1 lipatan: $0{,}1 \\times 2 = 0{,}2$ mm;
- setelah 2 lipatan: $0{,}2 \\times 2 = 0{,}4$ mm;
- setiap lipatan berikutnya mengalikan tebal dengan 2.

Setelah 10 lipatan tebalnya adalah $0{,}1 \\times 2^{10}$ mm. Berapa hasilnya? Bandingkan dugaanmu sebelum menekan tombol hitung.`,
      blocks: [
        {
          kind: "prediction",
          prompt: "Setelah dilipat $10$ kali, berapa tebal tumpukan kertas $0{,}1$ mm itu? Pilih dugaanmu, lalu bandingkan dengan perhitungan sebenarnya.",
          options: [
            "Sekitar $10$ mm",
            "Sekitar $100$ mm (10 cm)",
            "Sekitar $1.000$ mm (1 m)",
            "Lebih dari $1$ m",
          ],
          reveal: "Karena $2^{10} = 1024$, maka tebalnya $0{,}1 \\times 1024 = 102{,}4$ mm, yaitu sekitar $10{,}24$ cm. Jauh lebih besar daripada dugaan awal. Di sinilah pentingnya memahami **perkalian berulang yang tumbuh cepat**.",
          saveLabel: "Simpan dugaan",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Eksponen banyak bertumpu pada kelincahan berhitung, jadi pastikan tiga hal berikut sudah kamu kuasai:

- operasi perkalian dan pembagian bilangan;
- faktorisasi prima, misalnya $36 = 2^{2} \\cdot 3^{2}$;
- sifat komutatif, asosiatif, dan distributif pada bentuk aljabar.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Perkalian berulang muncul di banyak tempat. Sebuah bakteri membelah menjadi dua setiap 20 menit, sehingga populasinya menjadi $2$ kali lipat pada setiap selang 20 menit. Nilai tabungan berbunga majemuk juga berlipat dengan faktor tetap setiap periode.

Menuliskan $2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2$ jelas tidak praktis. Notasi eksponen mempersingkatnya menjadi $2^{10}$. Topik ini membangun aturan agar kita dapat menghitung bentuk seperti itu dengan cepat dan tepat.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Makna Eksponen",
      questionIds: ['eks-01'],
      body: `Untuk bilangan real $a$ dan bilangan bulat positif $n$,

$$a^{n} = \\underbrace{a \\cdot a \\cdot a \\cdots a}_{n \\text{ faktor}}$$

Pada notasi $a^{n}$, bilangan $a$ disebut **basis** (bilangan pokok) dan $n$ disebut **eksponen** (pangkat). Misalnya,

$$5^{3} = 5 \\cdot 5 \\cdot 5 = 125.$$

Eksponen di sini berfungsi sebagai **penghitung banyaknya faktor**, bukan sebagai pengali biasa. Inilah alasan $2^{5} \\neq 2 \\times 5$.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Eksponen sebagai penghitung faktor",
          text: "Eksponen menyatakan berapa kali basis dijadikan faktor. Menambah eksponen berarti **mengalikan**, bukan menjumlahkan basis.",
        },
        {
          kind: "figure",
          alt: "Diagram notasi pangkat a pangkat n: huruf a besar sebagai basis dengan huruf n kecil di kanan atas sebagai eksponen.",
          caption: "Pada $a^{n}$, $a$ adalah **basis** dan $n$ adalah **eksponen** yang menghitung banyaknya faktor $a$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><text x="118" y="132" font-size="66" fill="currentColor">a</text><text x="168" y="96" font-size="38" fill="currentColor">n</text><line x1="132" y1="142" x2="104" y2="182" stroke="currentColor" stroke-width="1.5"/><text x="50" y="200" font-size="14" fill="currentColor">basis</text><line x1="190" y1="84" x2="234" y2="62" stroke="currentColor" stroke-width="1.5"/><text x="232" y="54" font-size="14" fill="currentColor">eksponen</text></svg>',
        },
        {
          kind: "flip-cards",
          intro: "Bolak-balik kartu untuk memeriksa istilah kunci pada topik ini.",
          cards: [
            {
              front: "Basis",
              back: "Bilangan yang dipangkatkan, misalnya $a$ pada $a^{n}$.",
            },
            {
              front: "Eksponen",
              back: "Banyaknya faktor basis, misalnya $n$ pada $a^{n}$.",
            },
            {
              front: "Pangkat nol",
              back: "$a^{0} = 1$ untuk $a \\neq 0$.",
            },
            {
              front: "Pangkat negatif",
              back: "$a^{-n} = \\dfrac{1}{a^{n}}$ untuk $a \\neq 0$.",
            },
            {
              front: "Pangkat pecahan",
              back: "$a^{m/n} = \\sqrt[n]{a^{m}}$; $n$ genap: $a \\ge 0$; $n$ ganjil: $a<0$ boleh; pangkat irasional: $a>0$. Misalnya $27^{2/3} = 9$.",
            },
          ],
        },
        {
          kind: "match",
          intro: "Cocokkan setiap bentuk dengan aturan yang tepat.",
          pairs: [
            {
              left: "$a^{m} \\cdot a^{n}$",
              right: "$a^{m+n}$",
            },
            {
              left: "$\\dfrac{a^{m}}{a^{n}}$",
              right: "$a^{m-n}$",
            },
            {
              left: "$(a^{m})^{n}$",
              right: "$a^{mn}$",
            },
            {
              left: "$a^{-n}$",
              right: "$\\dfrac{1}{a^{n}}$",
            },
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi",
      body: "Satu gagasan yang sama dapat dinyatakan dengan cara berbeda:",
      blocks: [
        {
          kind: "table",
          caption: "Tiga representasi untuk $2^{5}$",
          headers: [
            "Representasi",
            "Bentuk",
          ],
          rows: [
            [
              "Perkalian berulang",
              "$2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2$",
            ],
            [
              "Notasi eksponen",
              "$2^{5}$",
            ],
            [
              "Hasil",
              "$32$",
            ],
          ],
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Simbolik",
              body: "Bentuk ringkasnya $2^{5}$, yang berarti basis $2$ dipangkatkan $5$.",
            },
            {
              label: "Perkalian",
              body: "Dijabarkan menjadi $2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2$, yaitu lima faktor yang sama.",
            },
            {
              label: "Tabel",
              body: "Nilainya tumbuh cepat: $2^{1}=2$, $2^{2}=4$, $2^{3}=8$, $2^{4}=16$, $2^{5}=32$.",
            },
          ],
        },
        {
          kind: "figure",
          alt: "Grafik fungsi eksponen yang naik makin cepat membentuk lengkung ke atas.",
          caption: "Grafik $y=2^{n}$: nilai tumbuh makin cepat ketika $n$ bertambah.",
          svg: '<svg viewBox="0 0 320 200" aria-hidden="true" role="presentation"><line x1="40" y1="170" x2="300" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="170" x2="40" y2="18" stroke="currentColor" stroke-width="1.5"/><polyline points="40,170 82,165 124,152 166,124 208,80 250,30 276,20" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="292" y="188" font-size="12" fill="currentColor">n</text><text x="18" y="24" font-size="12" fill="currentColor">y</text></svg>',
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi",
      body: "Gunakan penggeser berikut untuk menyelidiki bagaimana nilai $a^{m}$ dan $a^{n}$ berubah ketika basis dan eksponen diubah, lalu periksa aturan hasil kali, hasil bagi, dan pangkat dari pangkatnya pada tabel.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "eksponen-aturan",
        },
      ],
    },
    {
      id: "sifat",
      kind: "generalisasi",
      title: "Menemukan Sifat-Sifat Eksponen",
      body: `Coba amati pola berikut. Dari $2^{3}\\cdot 2^{4} = (2\\cdot2\\cdot2)(2\\cdot2\\cdot2\\cdot2) = 2^{7}$ kita melihat bahwa eksponen **bertambah**. Pola ini berlaku umum.

Untuk $a \\neq 0$ dan bilangan bulat $m, n$:

$$a^{m} \\cdot a^{n} = a^{m+n} \\qquad \\frac{a^{m}}{a^{n}} = a^{m-n}$$

$$(a^{m})^{n} = a^{mn} \\qquad (ab)^{n} = a^{n}b^{n} \\qquad \\left(\\frac{a}{b}\\right)^{n} = \\frac{a^{n}}{b^{n}},\\quad b \\neq 0$$

Setiap sifat dapat dibuktikan dengan menuliskan kembali definisi perkalian berulang. Misalnya $(a^{m})^{n}$ berarti $a^{m}$ dikalikan sebanyak $n$ kali, sehingga total ada $mn$ faktor $a$.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Basis harus sama",
          text: "Sifat $a^{m}\\cdot a^{n}=a^{m+n}$ hanya berlaku jika **basisnya sama**. Bentuk $2^{3}\\cdot 3^{3}$ tidak dapat disatukan menjadi $6^{6}$; gunakan $(ab)^n=a^n b^n$ sehingga $2^3\\cdot 3^3=(2\\cdot3)^3=6^3$.",
        },
      ],
    },
    {
      id: "pangkat-khusus",
      kind: "konsep",
      title: "Pangkat Nol, Negatif, dan Pecahan",
      body: `**Pangkat nol.** Dari $\\dfrac{a^{n}}{a^{n}} = a^{n-n} = a^{0}$ dan karena $\\dfrac{a^{n}}{a^{n}} = 1$, maka untuk $a \\neq 0$:

$$a^{0} = 1.$$

**Pangkat negatif.** Dari $\\dfrac{a^{0}}{a^{n}} = a^{-n}$ dan $\\dfrac{1}{a^{n}} = a^{0-n}$, maka:

$$a^{-n} = \\frac{1}{a^{n}}, \\qquad a \\neq 0.$$

**Pangkat pecahan.** Karena $(a^{1/2})^{2} = a^{1} = a$, maka $a^{1/2}$ haruslah akar kuadrat dari $a$. Secara umum:

$$a^{\\frac{m}{n}} = \\sqrt[n]{a^{m}},$$
dengan syarat: untuk $n$ genap, $a \\ge 0$; untuk $n$ ganjil, $a$ boleh negatif; untuk pangkat irasional atau negatif, $a > 0$.

Contohnya $27^{\\frac{2}{3}} = \\left(\\sqrt[3]{27}\\right)^{2} = 3^{2} = 9$.`,
    },
    {
      id: "bentuk-akar",
      kind: "konsep",
      title: "Bentuk Akar",
      body: `Bentuk akar $\\sqrt[n]{a}$ adalah cara lain menuliskan $a^{1/n}$. Untuk menyederhanakan bentuk akar, keluarkan faktor kuadrat sempurna:

$$\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}.$$

Merasionalkan penyebut dilakukan dengan mengalikan bentuk sekawan. Contoh:

$$\\frac{6}{\\sqrt{5}-\\sqrt{2}} = \\frac{6(\\sqrt{5}+\\sqrt{2})}{(\\sqrt{5}-\\sqrt{2})(\\sqrt{5}+\\sqrt{2})} = \\frac{6(\\sqrt{5}+\\sqrt{2})}{5-2} = 2(\\sqrt{5}+\\sqrt{2}).$$`,
      blocks: [
        {
          kind: "figure",
          alt: "Pohon faktorisasi bilangan 72 bercabang menjadi 2 dan 36, lalu 36 menjadi 2 dan 18, 18 menjadi 2 dan 9, dan 9 menjadi 3 dan 3, sehingga 72 sama dengan 2 pangkat 3 dikali 3 pangkat 2.",
          caption: "Pohon faktorisasi $72 = 2^{3} \\cdot 3^{2}$. Faktor kuadrat sempurna $2^{2} \\cdot 3^{2} = 36$ dapat dikeluarkan dari akar, sehingga $\\sqrt{72} = 6\\sqrt{2}$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="75" y1="30" x2="35" y2="80" stroke="currentColor" stroke-width="1.5"/><line x1="75" y1="30" x2="115" y2="80" stroke="currentColor" stroke-width="1.5"/><line x1="115" y1="80" x2="75" y2="125" stroke="currentColor" stroke-width="1.5"/><line x1="115" y1="80" x2="155" y2="125" stroke="currentColor" stroke-width="1.5"/><line x1="155" y1="125" x2="115" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="155" y1="125" x2="195" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="195" y1="170" x2="165" y2="215" stroke="currentColor" stroke-width="1.5"/><line x1="195" y1="170" x2="225" y2="215" stroke="currentColor" stroke-width="1.5"/><text x="75" y="35" font-size="15" text-anchor="middle" fill="currentColor">72</text><text x="35" y="85" font-size="15" text-anchor="middle" fill="currentColor">2</text><text x="115" y="85" font-size="15" text-anchor="middle" fill="currentColor">36</text><text x="75" y="130" font-size="15" text-anchor="middle" fill="currentColor">2</text><text x="155" y="130" font-size="15" text-anchor="middle" fill="currentColor">18</text><text x="115" y="175" font-size="15" text-anchor="middle" fill="currentColor">2</text><text x="195" y="175" font-size="15" text-anchor="middle" fill="currentColor">9</text><text x="165" y="220" font-size="15" text-anchor="middle" fill="currentColor">3</text><text x="225" y="220" font-size="15" text-anchor="middle" fill="currentColor">3</text></svg>',
        },
        {
          kind: "callout",
          variant: "warning",
          title: "Kesalahan yang sering terjadi",
          text: "Secara umum $\\sqrt{a+b} \\neq \\sqrt{a}+\\sqrt{b}$. Periksa dengan $a=b=4$: $\\sqrt{8} \\approx 2{,}83$ sedangkan $\\sqrt{4}+\\sqrt{4}=4$.",
        },
      ],
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Rumus dan Prosedur",
      body: `Ringkasan sifat eksponen dan bentuk akar yang dipakai sepanjang topik ini.

**Definisi.** Untuk bilangan real $a$ dan bilangan bulat positif $n$,
$$a^{n}=\\underbrace{a\\cdot a\\cdots a}_{n \\text{ faktor}}.$$

**Sifat dasar** (untuk $a\\neq0$, $b\\neq0$, dan $m,n$ bilangan bulat):
$$a^{m}\\cdot a^{n}=a^{m+n}, \\qquad \\frac{a^{m}}{a^{n}}=a^{m-n}, \\qquad (a^{m})^{n}=a^{mn},$$
$$(ab)^{n}=a^{n}b^{n}, \\qquad \\left(\\frac{a}{b}\\right)^{n}=\\frac{a^{n}}{b^{n}}.$$

**Pangkat khusus.**
$$a^{0}=1, \\qquad a^{-n}=\\frac{1}{a^{n}}, \\qquad a^{\\frac{m}{n}}=\\sqrt[n]{a^{m}}.$$

**Bentuk akar.**
$$\\sqrt[n]{a^{m}}=a^{\\frac{m}{n}}, \\qquad \\sqrt{ab}=\\sqrt{a}\\,\\sqrt{b}, \\qquad \\sqrt{\\frac{a}{b}}=\\frac{\\sqrt{a}}{\\sqrt{b}}.$$

Merasionalkan penyebut dilakukan dengan mengalikan bentuk sekawan, misalnya
$$\\frac{1}{\\sqrt{a}-\\sqrt{b}}=\\frac{\\sqrt{a}+\\sqrt{b}}{a-b}.$$

**Prosedur menyederhanakan.** (1) Samakan basis bila memungkinkan; (2) gabungkan pangkat dengan sifat dasar; (3) ubah pangkat negatif menjadi pecahan; (4) sederhanakan bentuk akar dengan mengeluarkan faktor kuadrat sempurna.`,
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      body: `Enam contoh berikut mencakup penyederhanaan pangkat, pangkat khusus, pangkat pecahan, bentuk akar, merasionalkan penyebut, dan persamaan eksponen. Buka setiap langkah untuk mengikuti penalaran dan pemeriksaannya.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Buka setiap contoh untuk melihat penyelesaian lengkap beserta cara memeriksanya.",
          steps: [
            {
              title: "Contoh 1: menyederhanakan bentuk pangkat",
              text: `Sederhanakan $(2x^{3}y^{-2})^{2} \\cdot (x^{-2}y^{3})$.

*Penyelesaian.* Terapkan $(ab)^n = a^n b^n$ pada faktor pertama:
$$(2x^{3}y^{-2})^{2} = 2^{2}(x^{3})^{2}(y^{-2})^{2} = 4x^{6}y^{-4}.$$
Kalikan dengan $x^{-2}y^{3}$, lalu jumlahkan eksponen basis yang sama (basisnya tidak ikut berubah):
$$4x^{6}y^{-4} \\cdot x^{-2}y^{3} = 4x^{6+(-2)}y^{-4+3} = 4x^{4}y^{-1} = \\frac{4x^{4}}{y}.$$

*Verifikasi.* Uji dengan $x=2$ dan $y=1$. Ruas asal: $(2 \\cdot 8 \\cdot 1)^{2} \\cdot (2^{-2} \\cdot 1) = 16^{2} \\cdot \\tfrac14 = 64$. Hasil akhir: $\\dfrac{4 \\cdot 16}{1} = 64$. Cocok.`,
            },
            {
              title: "Contoh 2: pangkat nol dan pangkat negatif",
              text: `Hitung nilai dari $\\left(\\dfrac{2}{3}\\right)^{-2} + 5^{0}$.

*Penyelesaian.* Pangkat negatif membalik pecahan, sedangkan pangkat nol bernilai $1$ selama basisnya tidak nol:
$$\\left(\\frac{2}{3}\\right)^{-2} = \\left(\\frac{3}{2}\\right)^{2} = \\frac{9}{4}, \\qquad 5^{0} = 1.$$
Jumlahnya $\\dfrac94 + 1 = \\dfrac{13}{4} = 3{,}25$.

*Verifikasi.* Membalik pecahan dua kali mengembalikan bentuk semula, sehingga $\\left(\\frac23\\right)^{-2} \\cdot \\left(\\frac23\\right)^{2} = 1$: $\\dfrac94 \\cdot \\dfrac49 = 1$. Cocok.`,
            },
            {
              title: "Contoh 3: pangkat pecahan",
              text: `Hitung $81^{3/4}$ dan $(-8)^{1/3}$.

*Penyelesaian.* Gunakan $a^{m/n} = \\sqrt[n]{a^{m}}$. Untuk yang pertama, kerjakan akarnya lebih dulu agar angkanya kecil:
$$81^{3/4} = \\left(\\sqrt[4]{81}\\right)^{3} = 3^{3} = 27.$$
Untuk yang kedua, indeks $3$ ganjil sehingga basis negatif dibolehkan:
$$(-8)^{1/3} = \\sqrt[3]{-8} = -2.$$

*Verifikasi.* $27^{4/3} = \\left(\\sqrt[3]{27}\\right)^{4} = 3^{4} = 81$ benar, dan $(-2)^{3} = -8$ benar.`,
            },
            {
              title: "Contoh 4: menyederhanakan bentuk akar",
              text: `Sederhanakan $\\sqrt{12} + \\sqrt{27} - \\sqrt{48}$.

*Penyelesaian.* Faktorkan setiap akar dengan mengeluarkan kuadrat sempurna:
$$\\sqrt{12} = 2\\sqrt{3}, \\qquad \\sqrt{27} = 3\\sqrt{3}, \\qquad \\sqrt{48} = 4\\sqrt{3}.$$
Karena ketiganya sejenis, jumlahkan koefisiennya saja:
$$2\\sqrt{3} + 3\\sqrt{3} - 4\\sqrt{3} = (2 + 3 - 4)\\sqrt{3} = \\sqrt{3}.$$

*Verifikasi.* Secara numerik $\\sqrt{3} \\approx 1{,}732$, sedangkan $3{,}464 + 5{,}196 - 6{,}928 = 1{,}732$. Cocok.`,
            },
            {
              title: "Contoh 5: merasionalkan penyebut",
              text: `Rasionalkan penyebut $\\dfrac{6}{\\sqrt{5} - \\sqrt{2}}$.

*Penyelesaian.* Kalikan pembilang dan penyebut dengan sekawan $\\sqrt{5} + \\sqrt{2}$ agar penyebut memuat selisih kuadrat:
$$\\frac{6}{\\sqrt{5} - \\sqrt{2}} = \\frac{6(\\sqrt{5} + \\sqrt{2})}{(\\sqrt{5} - \\sqrt{2})(\\sqrt{5} + \\sqrt{2})} = \\frac{6(\\sqrt{5} + \\sqrt{2})}{5 - 2} = 2(\\sqrt{5} + \\sqrt{2}).$$

*Verifikasi.* Nilai asal $\\dfrac{6}{2{,}236 - 1{,}414} = \\dfrac{6}{0{,}822} \\approx 7{,}30$, dan hasil $2(2{,}236 + 1{,}414) = 7{,}30$. Cocok.`,
            },
            {
              title: "Contoh 6: menyelesaikan persamaan eksponen",
              text: `Tentukan $x$ dari $2^{x+1} = 32$.

*Penyelesaian.* Nyatakan kedua ruas dengan basis yang sama, yaitu $2$, sebab $32 = 2^{5}$:
$$2^{x+1} = 2^{5} \\Rightarrow x+1 = 5 \\Rightarrow x = 4.$$

*Verifikasi.* $2^{4+1} = 2^{5} = 32$ benar. Penyetaraan eksponen sah karena fungsi $2^{x}$ selalu naik, jadi setiap nilai hanya dicapai sekali.`,
            },
          ],
        },
        {
          kind: "details",
          summary: "Coba sendiri: menyederhanakan pangkat bercampur",
          text: `Sederhanakan $\\dfrac{(3a^{2}b^{-1})^{2}\\cdot a^{-3}b^{4}}{9ab}$.

*Langkah 1.* Kuadratkan faktor pertama dengan $(ab)^{n}=a^{n}b^{n}$:
$$(3a^{2}b^{-1})^{2}=9a^{4}b^{-2}.$$

*Langkah 2.* Kalikan dengan $a^{-3}b^{4}$, lalu jumlahkan eksponen basis yang sama:
$$9a^{4}b^{-2}\\cdot a^{-3}b^{4}=9a^{4-3}b^{-2+4}=9a^{1}b^{2}.$$

*Langkah 3.* Bagi dengan $9ab$:
$$\\frac{9a^{1}b^{2}}{9ab}=a^{1-1}b^{2-1}=a^{0}b^{1}=b.$$

Jadi bentuk sederhananya adalah $b$. Periksa dengan $a=2$ dan $b=3$: ruas asal bernilai $\\dfrac{(3\\cdot4\\cdot\\tfrac13)^{2}\\cdot2^{-3}\\cdot81}{9\\cdot2\\cdot3}=\\dfrac{16\\cdot\\tfrac{81}{8}}{54}=3$, sama dengan $b=3$. Cocok.`,
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
      body: `Eksponen muncul setiap kali suatu besaran berlipat dengan faktor tetap. Selembar kertas setebal $0{,}1$ mm yang dilipat $10$ kali menjadi $0{,}1 \\cdot 2^{10} = 102{,}4$ mm, dan satu sel bakteri yang membelah setiap $20$ menit menjadi $2^{6} = 64$ sel setelah $2$ jam. Di bidang keuangan, tabungan Rp1.000.000 dengan bunga majemuk $8\\%$ per tahun tumbuh menjadi $1.000.000(1{,}08)^{10} \\approx \\text{Rp}2.158.925$ setelah $10$ tahun.

Untuk latihan pemodelan, lihat topik [Pertumbuhan Populasi](/aplikasi/pertumbuhan-populasi) dan [Bunga dan Investasi](/aplikasi/bunga-investasi).`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menjumlahkan basis saat mengalikan.** Menulis $2^{3}\\cdot2^{5}=4^{8}$ adalah salah. Mengapa? Karena basis tidak berubah; yang bertambah adalah banyaknya faktor, sehingga hasilnya $2^{8}=256$. Jika kamu jumlahkan basisnya, kamu mengubah bilangan yang dipakai sebagai faktor.

**2. Menganggap pangkat negatif menghasilkan bilangan negatif.** $2^{-3}\\neq-8$. Pangkat negatif berarti **kebalikan**, sehingga $2^{-3}=\\dfrac{1}{2^{3}}=\\dfrac{1}{8}$.

**3. Mengalikan eksponen saat menjumlahkan basis.** $(a+b)^{2}\\neq a^{2}+b^{2}$. Sifat $(ab)^n=a^nb^n$ berlaku untuk **perkalian**, bukan penjumlahan. Coba $a=b=1$: $(1+1)^2=4$ sedangkan $1^2+1^2=2$.

**4. Menjumlahkan akar berbeda.** $\\sqrt{2}+\\sqrt{8}=3\\sqrt{2}$, bukan $\\sqrt{10}$.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Perhatikan penyelesaian $2^{3} \\cdot 2^{5}$. Salah satu langkah keliru. Klik langkah yang salah.",
          steps: [
            "Kalikan basisnya: $2 \\times 2 = 4$.",
            "Jumlahkan eksponennya: $3 + 5 = 8$.",
            "Tuliskan hasil sebagai $2^{8}$.",
            "Hitung nilainya: $2^{8} = 256$.",
          ],
          wrongIndex: 0,
          explanation: "Langkah pertama keliru. Saat mengalikan bilangan berpangkat dengan **basis sama**, basis tidak berubah; yang bertambah adalah eksponennya. Jadi $2^{3} \\cdot 2^{5} = 2^{8} = 256$, bukan $4^{8}$.",
        },
      ],
    },
    {
      id: "tantangan",
      kind: "tantangan",
      title: "Faktor Pangkat yang Saling Menghapus",
      body: `**Soal.** Tentukan nilai dari
$$\\frac{2^{2026}+2^{2024}}{2^{2024}+2^{2022}}$$
tanpa menghitung nilai setiap pangkat secara langsung. Jelaskan pola yang membuat jawabannya sederhana.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Faktorkan pangkat terkecil pada pembilang dan penyebut, lalu perhatikan faktor yang saling menghapus.",
          steps: [
            {
              title: "Faktorkan pembilang",
              text: "Suku dengan pangkat terkecil adalah $2^{2024}$, sehingga $2^{2026}+2^{2024}=2^{2024}(2^{2}+1)=2^{2024}\\cdot 5$.",
            },
            {
              title: "Faktorkan penyebut",
              text: "Dengan cara sama, $2^{2024}+2^{2022}=2^{2022}(2^{2}+1)=2^{2022}\\cdot 5$.",
            },
            {
              title: "Bentuk pecahannya",
              text: "Pecahan menjadi $\\dfrac{2^{2024}\\cdot 5}{2^{2022}\\cdot 5}=\\dfrac{2^{2024}}{2^{2022}}$.",
            },
            {
              title: "Gunakan sifat hasil bagi",
              text: "$\\dfrac{2^{2024}}{2^{2022}}=2^{2024-2022}=2^{2}=4$.",
            },
            {
              title: "Kesimpulan",
              text: "Faktor $5$ saling menghapus dan selisih pangkat menyisakan $2^{2}=4$. Pola ini berlaku setiap kali pangkat pada pembilang dan penyebut berjarak sama.",
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Menyusun Notasi Pangkat",
      body: `Notasi pangkat yang kita pakai hari ini lahir dari upaya mempersingkat penulisan yang panjang. Pada abad ke-14, Nicole Oresme sudah menyinggung gagasan pangkat dengan eksponen pecahan. Baru pada 1544 Michael Stifel, dalam *Arithmetica Integra*, memakai istilah *exponent* dan menyusun tabel pangkat bilangan bulat. Puncaknya, René Descartes dalam *La Géométrie* (1637) memperkenalkan bentuk superskrip $a^{n}$ yang kita kenal sekarang, jauh lebih ringkas daripada menuliskan faktor berulang secara penuh.

Mula-mula eksponen hanya dibatasi pada bilangan bulat positif, sebab gagasan "mengalikan sebanyak setengah kali" sulit dibayangkan. John Wallis dalam *Arithmetica Infinitorum* (1655) dan kemudian Isaac Newton memperluas makna eksponen ke bilangan nol, negatif, dan pecahan dengan menjaga agar sifat $a^{m} \\cdot a^{n} = a^{m+n}$ tetap berlaku. Perluasan itulah yang membuat aturan seperti $a^{-n} = \\dfrac{1}{a^{n}}$ dan $a^{1/2} = \\sqrt{a}$ terasa wajar, sebab mengikuti sifat yang telah ada, bukan kesepakatan yang dipaksakan. Notasi yang lahir untuk menyingkat perkalian berulang justru membuka pintu bagi bentuk akar, logaritma, dan fungsi eksponensial.`,
      blocks: [
        {
          kind: "table",
          caption: "Tokoh kunci dalam perkembangan notasi eksponen",
          headers: [
            "Tokoh",
            "Sumbangan",
          ],
          rows: [
            [
              "Nicole Oresme (abad ke-14)",
              "Menyinggung pangkat dengan eksponen pecahan.",
            ],
            [
              "Michael Stifel (1544)",
              "Memakai istilah *exponent* dan tabel pangkat bilangan bulat.",
            ],
            [
              "René Descartes (1637)",
              "Memperkenalkan notasi superskrip $a^{n}$.",
            ],
            [
              "John Wallis (1655)",
              "Memperluas eksponen ke pangkat negatif dan pecahan.",
            ],
            [
              "Isaac Newton (1676)",
              "Merumuskan eksponen rasional secara umum.",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "info",
          title: "Mengapa perluasan itu penting",
          text: "Setiap perluasan eksponen ke bilangan baru selalu dijaga agar sifat $a^{m} \\cdot a^{n} = a^{m+n}$ tetap berlaku. Aturan itulah yang menuntun mengapa $a^{0} = 1$ dan $a^{-n} = \\dfrac{1}{a^{n}}$; keduanya mengikuti sifat tersebut, bukan ditetapkan begitu saja.",
        },
      ],
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Eksponen adalah bahasa untuk perubahan yang berlipat: dari bunga tabungan, penyebaran informasi, sampai peluruhan zat. Coba temukan satu situasi di sekitarmu yang berubah dengan faktor tetap, lalu tuliskan modelnya sebagai $a \\cdot b^{n}$.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Kapan kamu perlu menggunakan sifat eksponen, dan kapan sifat itu **tidak** berlaku?",
            "Kesalahan apa yang paling sering kamu lakukan saat bekerja dengan pangkat, dan bagaimana cara menghindarinya?",
            "Berikan satu contoh pertumbuhan yang bersifat \"berlipat\" di sekitarmu.",
            "Mengapa $(ab)^{n}=a^{n}b^{n}$, tetapi $(a+b)^{n}\\neq a^{n}+b^{n}$? Berikan contoh untuk menjelaskannya.",
            "Sifat mana yang kamu pakai pada $\\dfrac{2^{7}}{2^{3}}$, dan bagaimana kamu memeriksa bahwa hasilnya benar?",
          ],
          confidenceLabel: "Seberapa yakin kamu memakai sifat eksponen dan menyederhanakan bentuk akar?",
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
          caption: "Ringkasan aturan eksponen: dari definisi sampai pangkat pecahan",
          headers: [
            "Konsep",
            "Bentuk",
          ],
          rows: [
            [
              "Definisi",
              "$a^{n}=\\underbrace{a\\cdots a}_{n}$",
            ],
            [
              "Hasil kali basis sama",
              "$a^{m}\\cdot a^{n}=a^{m+n}$",
            ],
            [
              "Hasil bagi basis sama",
              "$\\dfrac{a^{m}}{a^{n}}=a^{m-n}$",
            ],
            [
              "Pangkat dari pangkat",
              "$(a^{m})^{n}=a^{mn}$",
            ],
            [
              "Pangkat nol",
              "$a^{0}=1,\\ a\\neq0$",
            ],
            [
              "Pangkat negatif",
              "$a^{-n}=\\dfrac{1}{a^{n}}$",
            ],
            [
              "Pangkat pecahan",
              "$a^{m/n}=\\sqrt[n]{a^{m}}$ ($n$ genap: $a\\ge0$; $n$ ganjil: $a<0$ boleh; pangkat irasional: $a>0$)",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "concept",
          title: "Benang merah: satu gagasan, banyak aturan",
          text: "Semua aturan di atas bertumpu pada satu gagasan: eksponen **menghitung banyaknya faktor**, sehingga mengalikan pangkat sama dengan menjumlahkan eksponennya. Karena setiap aturan dijaga konsisten dengan gagasan itu, pangkat nol, negatif, dan pecahan terasa wajar, bukan hafalan. Kebiasaan menyamakan basis lalu menyederhanakan inilah yang kamu pakai lagi pada **barisan geometri**, **fungsi eksponensial**, dan **bunga majemuk**, ketika bentuk $a\\cdot b^{n}$ menggantikan perkalian berulang yang panjang.",
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      questionIds: ['eks-08'],
      body: `**Tiket keluar.** (1) Hitung $2^{3} \\cdot 2^{5}$ dan $2^{3} + 2^{5}$, lalu jelaskan mengapa hasil keduanya berbeda. (2) Ubah $\\sqrt[3]{x^{2}}$ menjadi bentuk pangkat dan sebutkan nilai $x$ yang membuatnya terdefinisi. Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Eksponen dan Bentuk Akar** untuk latihan tambahan.`,
    },
  ],
};

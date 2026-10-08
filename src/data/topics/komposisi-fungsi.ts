import type { Topic } from '@/types/content';

export const komposisiFungsi: Topic = {
  id: 'komposisi-fungsi',
  slug: 'komposisi-fungsi',
  title: 'Komposisi Fungsi',
  subtitle: 'Merangkai dua fungsi menjadi satu',
  grade: 'XI',
  phase: 'F',
  element: 'aljabar-fungsi',
  status: 'lengkap',
  estimatedMinutes: 80,
  summary:
    'Memahami komposisi dua fungsi, notasi $(f \\circ g)(x)$, syarat terdefinisi, operasi aljabar fungsi, dan kaitannya dengan invers.',
  description:
    'Komposisi fungsi adalah proses merangkai dua fungsi: hasil fungsi pertama langsung menjadi masukan fungsi kedua. Topik ini membangun gagasan komposisi melalui model mesin dan diagram, menurunkan aturan $(f \\circ g)(x) = f(g(x))$, menelusuri syarat terdefinisi dan domain komposisi, memeriksa bahwa komposisi tidak komutatif tetapi asosiatif, serta menghubungkannya dengan fungsi invers melalui identitas $(f^{-1} \\circ f)(x)=x$.',
  keywords: [
    'komposisi fungsi',
    'f bundaran g',
    'domain komposisi',
    'operasi fungsi',
    'fungsi invers',
    'asosiatif',
  ],
  prerequisites: ['fungsi-invers'],
  relatedTopics: ['transformasi-fungsi', 'fungsi-invers'],
  prerequisiteKnowledge: [
    'Pengertian fungsi, domain, dan range',
    'Mensubstitusi nilai atau bentuk aljabar ke dalam fungsi',
    'Menyederhanakan bentuk aljabar',
  ],
  objectives: [
    { text: 'Peserta didik dapat menjelaskan makna komposisi dua fungsi melalui model mesin.' },
    { text: 'Peserta didik dapat menentukan rumus $(f \\circ g)(x)$ dan $(g \\circ f)(x)$ serta membedakannya.' },
    { text: 'Peserta didik dapat menentukan domain hasil komposisi berdasarkan syarat terdefinisi.' },
    { text: 'Peserta didik dapat melakukan operasi penjumlahan, pengurangan, perkalian, dan pembagian dua fungsi.' },
    { text: 'Peserta didik dapat menggunakan sifat $(f \\circ g)^{-1} = g^{-1} \\circ f^{-1}$ pada masalah sederhana.' },
  ],
  applications: ['diskon-berlapis', 'konversi-mata-uang'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menjelaskan makna komposisi fungsi, menentukan rumus komposisi baik $(f \\circ g)(x)$ maupun $(g \\circ f)(x)$, menentukan domain hasil komposisi, melakukan operasi aljabar pada fungsi, serta menggunakan hubungan komposisi dengan fungsi invers.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      body: `Sebuah toko memberi **diskon 20%** terhadap harga barang, lalu pembeli tetap dikenakan **pajak 10%** dari harga setelah diskon.
Jika harga awal sebuah barang $x$, berapa total yang harus dibayar?

Bandingkan dua urutan:
- diskon dahulu: $0{,}8x$, lalu dipajaki menjadi $0{,}8x \\cdot 1{,}1$;
- tentukan dahulu hasil akhirnya secara langsung.

Rangkaian dua proses seperti ini adalah contoh **komposisi fungsi**.`,
      blocks: [
        {
          kind: "prediction",
          prompt: "Jika harga awal $x$, berapa bagian dari harga awal yang harus dibayar setelah diskon $20\\%$ lalu pajak $10\\%$?",
          options: [
            "$0{,}88x$",
            "$0{,}90x$",
            "$1{,}10x$",
            "$0{,}98x$",
          ],
          reveal: `Jika $f(x)=0{,}8x$ (diskon) dan $g(x)=1{,}1x$ (pajak), maka urutan diskon lalu pajak menghasilkan
$$(g \\circ f)(x) = g(f(x)) = 1{,}1(0{,}8x) = 0{,}88x.$$
Jadi pembeli membayar $88\\%$ dari harga awal, yaitu setara diskon total $12\\%$. Pada contoh ini urutan terbalik pun memberi nilai sama, yaitu $(f \\circ g)(x)=0{,}8(1{,}1x)=0{,}88x$, karena kedua fungsi hanya berupa perkalian dengan skalar. Namun secara umum komposisi **tidak komutatif**, seperti akan kita lihat pada fungsi yang melibatkan pergeseran.`,
          saveLabel: "Simpan dugaan",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- pengertian fungsi beserta domain dan range;
- mensubstitusi bentuk aljabar, misalnya $f(x+1)$ untuk $f(x)=x^2$ menghasilkan $(x+1)^2$;
- menyederhanakan bentuk aljabar seperti $(x+3)^2-1$;
- menyelesaikan pertidaksamaan linear sederhana, misalnya $2x+4 \\geq 0$.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Di banyak proses, keluaran satu tahap menjadi masukan tahap berikutnya. Harga barang didiskon, lalu hasil diskon dikenai pajak. Suhu diukur, lalu dikonversi dua kali. Sebuah pabrik mengubah biji menjadi tepung, lalu tepung menjadi roti.
Masing-masing tahap dapat dimodelkan sebagai fungsi, dan keseluruhan proses adalah komposisi fungsi-fungsi tersebut. Memahami komposisi memungkinkan kita menghitung hasil akhir secara langsung maupun menelusuri arah sebaliknya.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Notasi Komposisi",
      body: `Komposisi fungsi $f$ dan $g$, ditulis $f \\circ g$ (dibaca "f bundaran g"), didefinisikan sebagai

$$(f \\circ g)(x) = f(g(x)).$$

Artinya, kita mengerjakan $g$ terlebih dahulu, kemudian hasilnya dimasukkan ke $f$. Perhatikan urutan: $g$ berada di dalam.

Kebalikannya, $(g \\circ f)(x) = g(f(x))$ berarti $f$ dikerjakan lebih dahulu. Pada umumnya

$$f \\circ g \\neq g \\circ f,$$

sehingga komposisi **tidak komutatif**.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Inti yang perlu diingat",
          text: "Pada $(f \\circ g)(x)=f(g(x))$, fungsi yang ditulis lebih dekat ke $x$ (yaitu $g$) dikerjakan lebih dahulu. Urutan sangat menentukan hasil.",
        },
        {
          kind: "match",
          intro: "Cocokkan notasi komposisi dengan maknanya.",
          pairs: [
            {
              left: "$(f \\circ g)(x)$",
              right: "Sama dengan $f(g(x))$; kerjakan $g$ lebih dahulu",
            },
            {
              left: "$(g \\circ f)(x)$",
              right: "Sama dengan $g(f(x))$; kerjakan $f$ lebih dahulu",
            },
            {
              left: "Tidak komutatif",
              right: "Secara umum $f \\circ g \\neq g \\circ f$",
            },
            {
              left: "Asosiatif",
              right: "Pengelompokan tidak mengubah hasil, $(f \\circ g) \\circ h = f \\circ (g \\circ h)$",
            },
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi dengan Model Mesin",
      body: `Bayangkan dua mesin yang dihubungkan. Mesin $g$ menerima $x$ dan menghasilkan $g(x)$; keluaran itu langsung masuk ke mesin $f$ dan menghasilkan $f(g(x))$.

Sebagai contoh, ambil $g(x)=x+1$ dan $f(x)=x^2$:
- masukan $x=2 \\to g(2)=3 \\to f(3)=9$, jadi $(f \\circ g)(2)=9$;
- bandingkan $(g \\circ f)(2)$: $f(2)=4 \\to g(4)=5$, jadi $(g \\circ f)(2)=5$.

Hasil $9$ dan $5$ berbeda, meskipun masukan keduanya sama, yaitu $2$.`,
      blocks: [
        {
          kind: "table",
          caption: "Penelusuran dua urutan komposisi untuk $f(x)=x^2$ dan $g(x)=x+1$",
          headers: [
            "x",
            "$g(x)$",
            "$(f \\circ g)(x)=f(g(x))$",
            "$(g \\circ f)(x)=g(f(x))$",
          ],
          rows: [
            [
              "$1$",
              "$2$",
              "$4$",
              "$2$",
            ],
            [
              "$2$",
              "$3$",
              "$9$",
              "$5$",
            ],
            [
              "$3$",
              "$4$",
              "$16$",
              "$10$",
            ],
          ],
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Simbolik",
              body: "Untuk $f(x)=x^2$ dan $g(x)=x+1$: $(f \\circ g)(x)=(x+1)^2$ dan $(g \\circ f)(x)=x^2+1$.",
            },
            {
              label: "Tabel",
              body: "Baris tabel memperlihatkan nilai $(f \\circ g)$ dan $(g \\circ f)$ berbeda untuk masukan yang sama.",
            },
            {
              label: "Alur",
              body: "Model mesin: masukan $x$ diproses $g$, lalu hasil $g(x)$ diproses $f$ sehingga keluarannya $f(g(x))$.",
            },
          ],
        },
      ],
    },
    {
      id: "rumus",
      kind: "generalisasi",
      title: "Sifat-Sifat Komposisi",
      body: `Komposisi fungsi memiliki tiga sifat penting.

**1. Tidak komutatif.** Secara umum $f \\circ g \\neq g \\circ f$.

**2. Asosiatif.** Pengelompokan tidak mengubah hasil:

$$(f \\circ g) \\circ h = f \\circ (g \\circ h).$$

**3. Identitas.** Terdapat fungsi identitas $I(x)=x$ sehingga

$$f \\circ I = I \\circ f = f.$$

Sifat asosiatif memungkinkan kita menuliskan komposisi tiga fungsi tanpa tanda kurung, yaitu $f \\circ g \\circ h$.`,
    },
    {
      id: "operasi-dan-domain",
      kind: "konsep",
      title: "Operasi Aljabar Fungsi dan Domain Komposisi",
      body: `Dua fungsi dapat dioperasikan seperti bilangan. Untuk $f$ dan $g$ yang terdefinisi pada domain yang sama:

$$(f+g)(x)=f(x)+g(x), \\quad (f-g)(x)=f(x)-g(x),$$
$$(f \\cdot g)(x)=f(x)\\cdot g(x), \\quad \\left(\\frac{f}{g}\\right)(x)=\\frac{f(x)}{g(x)}, \\quad g(x) \\neq 0.$$

**Domain komposisi.** Agar $(f \\circ g)(x)$ terdefinisi, dua syarat harus dipenuhi:
1. $x$ berada di domain $g$;
2. $g(x)$ berada di domain $f$.

Contoh: $f(x)=\\sqrt{x}$ dan $g(x)=2x+4$. Maka $(f \\circ g)(x)=\\sqrt{2x+4}$, sehingga $2x+4 \\geq 0$, yaitu $x \\geq -2$. Jadi domainnya $x \\geq -2$.
Sebaliknya, $(g \\circ f)(x)=2\\sqrt{x}+4$ terdefinisi untuk $x \\geq 0$. Domain keduanya berbeda.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "Rumus $(f \\circ g)(x)$ yang sudah disederhanakan tidak selalu memperlihatkan batasan aslinya. Selalu periksa domain $g$ **dan** syarat $g(x)$ masuk domain $f$.",
        },
      ],
    },
    {
      id: "komposisi-invers",
      kind: "konsep",
      title: "Komposisi dengan Fungsi Invers",
      body: `Komposisi fungsi dengan inversnya menghasilkan fungsi identitas:

$$(f \\circ f^{-1})(x) = x \\qquad \\text{dan} \\qquad (f^{-1} \\circ f)(x) = x.$$

Untuk komposisi dua fungsi berlaku sifat penting berikut:

$$(f \\circ g)^{-1} = g^{-1} \\circ f^{-1}.$$

Perhatikan bahwa urutannya **berbalik**: invers dari $g$ dikerjakan lebih dahulu. Sebagai contoh, jika $f(x)=3x+1$ dan $g(x)=x-2$, maka $(f \\circ g)(x)=3(x-2)+1=3x-5$ sehingga $(f \\circ g)^{-1}(x)=\\dfrac{x+5}{3}$.
Dengan cara lain, $f^{-1}(x)=\\dfrac{x-1}{3}$ dan $g^{-1}(x)=x+2$, sehingga
$$(g^{-1} \\circ f^{-1})(x) = g^{-1}\\!\\left(\\frac{x-1}{3}\\right) = \\frac{x-1}{3}+2 = \\frac{x+5}{3}.$$
Hasilnya sama, membenarkan sifat tersebut.`,
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi Komposisi Fungsi",
      body: "Gunakan simulator untuk menggabungkan dua fungsi $f$ dan $g$. Bandingkan hasil $(f \\circ g)(x)$ dengan $(g \\circ f)(x)$ saat kamu menukar urutan atau mengubah koefisien. Amati kapan kedua komposisi memberi nilai sama dan kapan berbeda.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "komposisi-fungsi-sim",
        },
      ],
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      body: `**Contoh 1.** Diketahui $f(x)=x+3$ dan $g(x)=x^2-1$. Tentukan $(f \\circ g)(x)$ dan $(g \\circ f)(x)$.

*Penyelesaian.* Untuk $(f \\circ g)(x)=f(g(x))$, masukkan $g(x)$ ke $f$:

$$(f \\circ g)(x) = (x^2-1)+3 = x^2+2.$$

Untuk $(g \\circ f)(x)=g(f(x))$, masukkan $f(x)$ ke $g$:

$$(g \\circ f)(x) = (x+3)^2-1 = x^2+6x+9-1 = x^2+6x+8.$$

Kedua hasil berbeda, menegaskan komposisi tidak komutatif.

**Contoh 2.** Diketahui $f(x)=2x+1$ dan $g(x)=x^2$. Tentukan nilai $(f \\circ g)(2)$ dan $(g \\circ f)(2)$.

*Penyelesaian.* Langsung dari definisi:
- $(f \\circ g)(2)=f(g(2))=f(4)=2(4)+1=9$;
- $(g \\circ f)(2)=g(f(2))=g(5)=5^2=25$.

**Contoh 3.** Diketahui $f(x)=\\sqrt{x}$ dan $g(x)=2x+4$. Tentukan $(f \\circ g)(x)$ beserta domainnya.

*Penyelesaian.* $(f \\circ g)(x)=f(2x+4)=\\sqrt{2x+4}$. Syarat di bawah akar tidak boleh negatif: $2x+4 \\geq 0 \\Rightarrow x \\geq -2$. Jadi domainnya adalah $x \\geq -2$.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Mari tentukan $(f \\circ g)(x)$ dan $(g \\circ f)(x)$ untuk $f(x)=x+3$ dan $g(x)=x^2-1$, satu langkah sekaligus.",
          steps: [
            {
              title: "Pahami urutan",
              text: "Pada $(f \\circ g)(x)=f(g(x))$, fungsi $g$ dikerjakan lebih dahulu, lalu hasilnya dimasukkan ke $f$.",
            },
            {
              title: "Substitusi g ke f",
              text: "$(f \\circ g)(x)=f(x^2-1)=(x^2-1)+3=x^2+2$.",
            },
            {
              title: "Substitusi f ke g",
              text: "$(g \\circ f)(x)=g(x+3)=(x+3)^2-1=x^2+6x+8$.",
            },
            {
              title: "Bandingkan",
              text: "$x^2+2$ dan $x^2+6x+8$ berbeda, menegaskan komposisi tidak komutatif.",
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
      body: `Komposisi muncul setiap kali proses berlangsung bertahap. Harga yang didiskon lalu dikenai pajak, jarak yang dikonversi dari kilometer ke meter lalu ke sentimeter, atau gaji yang dipotong pajak lalu ditambah tunjangan.
Pada pemrograman, sebuah nilai sering melewati beberapa fungsi secara berurutan, dan itulah komposisi. Dengan memodelkan setiap tahap sebagai fungsi, kita dapat menghitung total pengaruh seluruh tahap dengan satu rumus komposisi.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menganggap $f \\circ g$ sama dengan $g \\circ f$.** Untuk $f(x)=x+3$ dan $g(x)=x^2-1$, $(f \\circ g)(x)=x^2+2$ sedangkan $(g \\circ f)(x)=x^2+6x+8$. Keduanya berbeda.
**2. Salah urutan pengerjaan.** Pada $(f \\circ g)(x)$, yang dikerjakan lebih dahulu adalah $g$, bukan $f$.
**3. Lupa menentukan domain.** Rumus $\\sqrt{2x+4}$ terdefinisi hanya untuk $x \\geq -2$; mengabaikan syarat ini membuat jawaban tidak lengkap.
**4. Membalik urutan pada invers komposisi.** Sifat yang benar adalah $(f \\circ g)^{-1}=g^{-1} \\circ f^{-1}$, bukan $f^{-1} \\circ g^{-1}$.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Seorang siswa menentukan $(f \\circ g)(x)$ untuk $f(x)=x+3$ dan $g(x)=x^2-1$. Klik langkah yang keliru.",
          steps: [
            "Notasi $(f \\circ g)(x)$ berarti $f(g(x))$.",
            "Kerjakan $f$ lebih dahulu, lalu masukkan hasilnya ke $g$.",
            "Hasilnya $(f \\circ g)(x)=(x+3)^2-1=x^2+6x+8$.",
          ],
          wrongIndex: 1,
          explanation: "Urutannya terbalik. Pada $(f \\circ g)(x)=f(g(x))$, fungsi $g$ dikerjakan lebih dahulu. Hasil yang benar adalah $(x^2-1)+3=x^2+2$.",
        },
      ],
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Renungkan bagaimana dua proses yang digabung berubah ketika urutannya ditukar.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Bagaimana kamu menjelaskan perbedaan $(f \\circ g)(x)$ dan $(g \\circ f)(x)$ kepada temanmu?",
            "Mengapa domain hasil komposisi tidak boleh diabaikan meskipun rumusnya tampak sederhana?",
            "Berikan satu contoh proses dua tahap di sekitarmu yang dapat dimodelkan sebagai komposisi fungsi.",
          ],
          confidenceLabel: "Seberapa yakin kamu menentukan komposisi dua fungsi?",
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
            "Bentuk / Rumus",
          ],
          rows: [
            [
              "Definisi komposisi",
              "$(f \\circ g)(x)=f(g(x))$",
            ],
            [
              "Urutan pengerjaan",
              "kerjakan $g$ lebih dahulu, lalu $f$",
            ],
            [
              "Tidak komutatif",
              "$f \\circ g \\neq g \\circ f$",
            ],
            [
              "Asosiatif",
              "$(f \\circ g) \\circ h = f \\circ (g \\circ h)$",
            ],
            [
              "Operasi fungsi",
              "$(f+g)(x)=f(x)+g(x)$ dan sejenisnya",
            ],
            [
              "Syarat domain",
              "$x$ di domain $g$ dan $g(x)$ di domain $f$",
            ],
            [
              "Invers komposisi",
              "$(f \\circ g)^{-1}=g^{-1} \\circ f^{-1}$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Tiket keluar.** (1) Mengapa $(f\\circ g)(x)$ umumnya berbeda dari $(g\\circ f)(x)$? (2) Syarat apa saja yang harus dipenuhi agar domain komposisi terdefinisi? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Komposisi Fungsi** untuk latihan tambahan.`,
    },
  ],
};

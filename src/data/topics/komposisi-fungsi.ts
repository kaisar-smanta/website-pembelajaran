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
    'Komposisi fungsi adalah proses merangkai dua fungsi: hasil fungsi pertama langsung menjadi masukan fungsi kedua. Topik ini membangun gagasan komposisi melalui model mesin dan diagram, menurunkan aturan $(f \\circ g)(x) = f(g(x))$, menelusuri syarat terdefinisi dan domain komposisi, memeriksa bahwa komposisi tidak komutatif tetapi asosiatif, serta menentukan invers dari suatu komposisi melalui sifat $(f \\circ g)^{-1} = g^{-1} \\circ f^{-1}$.',
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
  applications: ['diskon-berlapis'],
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

Rangkaian dua proses seperti ini disebut **komposisi fungsi**.`,
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
      body: `Komposisi fungsi bertumpu pada keterampilan menyubstitusi dan menyederhanakan bentuk aljabar. Pastikan kamu sudah menguasai:
- pengertian fungsi beserta domain dan range;
- mensubstitusi bentuk aljabar, seperti $f(x+1)$ untuk $f(x)=x^2$ menghasilkan $(x+1)^2$;
- menyederhanakan bentuk aljabar seperti $(x+3)^2-1$;
- menyelesaikan pertidaksamaan linear sederhana seperti $2x+4 \\geq 0$.`,
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
      questionIds: ['kf-02'],
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
          title: "Gagasan kunci",
          text: "Pada $(f \\circ g)(x)=f(g(x))$, fungsi yang ditulis lebih dekat ke $x$ (yaitu $g$) dikerjakan lebih dahulu. Urutan sangat menentukan hasil.",
        },
        {
          kind: "figure",
          alt: "Diagram panah tiga himpunan A, B, dan C. Fungsi f memetakan anggota A ke B, fungsi g memetakan anggota B ke C, dan komposisi g bundaran f memetakan A langsung ke C.",
          caption: "Diagram panah: $f$ memetakan himpunan $A$ ke $B$, lalu $g$ memetakan $B$ ke $C$. Rangkaian keduanya, $g \\circ f$, memetakan $A$ langsung ke $C$.",
          svg: '<svg viewBox="0 0 340 200" aria-hidden="true" role="presentation"><defs><marker id="fig-komp-map" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><ellipse cx="60" cy="95" rx="34" ry="58" fill="none" stroke="currentColor" stroke-width="1.4"/><ellipse cx="172" cy="95" rx="34" ry="58" fill="none" stroke="currentColor" stroke-width="1.4"/><ellipse cx="284" cy="95" rx="34" ry="58" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="56" y="22" font-size="13" fill="currentColor">A</text><text x="168" y="22" font-size="13" fill="currentColor">B</text><text x="280" y="22" font-size="13" fill="currentColor">C</text><circle cx="48" cy="62" r="2.8" fill="currentColor"/><circle cx="48" cy="128" r="2.8" fill="currentColor"/><text x="28" y="60" font-size="11" fill="currentColor">a1</text><text x="30" y="138" font-size="11" fill="currentColor">a2</text><circle cx="160" cy="52" r="2.8" fill="currentColor"/><circle cx="160" cy="95" r="2.8" fill="currentColor"/><circle cx="160" cy="138" r="2.8" fill="currentColor"/><text x="166" y="48" font-size="11" fill="currentColor">b1</text><text x="166" y="91" font-size="11" fill="currentColor">b2</text><text x="166" y="142" font-size="11" fill="currentColor">b3</text><circle cx="272" cy="62" r="2.8" fill="currentColor"/><circle cx="272" cy="128" r="2.8" fill="currentColor"/><text x="256" y="58" font-size="11" fill="currentColor">c1</text><text x="256" y="138" font-size="11" fill="currentColor">c2</text><line x1="57" y1="66" x2="150" y2="93" stroke="currentColor" stroke-width="1.5" marker-end="url(#fig-komp-map)"/><line x1="57" y1="124" x2="150" y2="55" stroke="currentColor" stroke-width="1.5" marker-end="url(#fig-komp-map)"/><line x1="169" y1="92" x2="262" y2="65" stroke="currentColor" stroke-width="1.5" marker-end="url(#fig-komp-map)"/><line x1="169" y1="49" x2="262" y2="124" stroke="currentColor" stroke-width="1.5" marker-end="url(#fig-komp-map)"/><text x="94" y="68" font-size="12" fill="currentColor">f</text><text x="208" y="56" font-size="12" fill="currentColor">g</text><path d="M 62,158 Q 172,208 282,158" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4" marker-end="url(#fig-komp-map)"/><text x="150" y="199" font-size="12" fill="currentColor">g bundaran f</text></svg>',
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

Misalnya, ambil $g(x)=x+1$ dan $f(x)=x^2$:
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
        {
          kind: "figure",
          alt: "Diagram mesin dua tahap: masukan x melewati kotak f menghasilkan f dari x, lalu hasil itu melewati kotak g menghasilkan g dari f dari x.",
          caption: "Model mesin komposisi $(g \\circ f)(x)=g(f(x))$: nilai $x$ diproses $f$ lebih dahulu, lalu hasilnya diproses $g$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><defs><marker id="fig-komp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><text x="18" y="125" font-size="13" fill="currentColor">x</text><line x1="34" y1="120" x2="76" y2="120" stroke="currentColor" stroke-width="1.8" marker-end="url(#fig-komp-arrow)"/><rect x="78" y="94" width="56" height="52" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="101" y="125" font-size="14" fill="currentColor">f</text><line x1="136" y1="120" x2="188" y2="120" stroke="currentColor" stroke-width="1.8" marker-end="url(#fig-komp-arrow)"/><text x="142" y="110" font-size="12" fill="currentColor">f(x)</text><rect x="190" y="94" width="56" height="52" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="213" y="125" font-size="14" fill="currentColor">g</text><line x1="248" y1="120" x2="292" y2="120" stroke="currentColor" stroke-width="1.8" marker-end="url(#fig-komp-arrow)"/><text x="244" y="108" font-size="12" fill="currentColor">g(f(x))</text><text x="24" y="152" font-size="11" fill="currentColor">masuk</text><text x="250" y="152" font-size="11" fill="currentColor">hasil</text></svg>',
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
      title: "Invers dari Komposisi",
      body: `Saat dua fungsi dirangkai, kita dapat membalik seluruh rangkaian sekaligus. Untuk fungsi yang dapat dibalik berlaku

$$(f \\circ g)^{-1} = g^{-1} \\circ f^{-1}.$$

Urutannya **berbalik**: pada $f \\circ g$ fungsi $g$ dikerjakan lebih dahulu, sehingga pada inversnya $g^{-1}$ dikerjakan paling akhir. Identitas komposisi sebuah fungsi dengan inversnya, yaitu $(f^{-1} \\circ f)(x)=x$, dibahas tuntas pada topik **Fungsi Invers**; di sini kita fokus pada pembalikan suatu komposisi.

Ambil $f(x)=x+1$ dan $g(x)=2x$. Maka $(f \\circ g)(x)=2x+1$ dengan invers $\\dfrac{x-1}{2}$, sedangkan $g^{-1}(x)=\\dfrac{x}{2}$ dan $f^{-1}(x)=x-1$ memberi $(g^{-1} \\circ f^{-1})(x)=\\dfrac{x-1}{2}$. Kedua hasil sama, seperti diharapkan. Contoh lengkapnya ada di bagian Contoh Terbimbing.`,
    },
    {
      id: "komposisi-fungsi-rumus",
      kind: "rumus",
      title: "Rumus Komposisi dan Domainnya",
      body: `**Definisi komposisi.** Menggabungkan dua fungsi $f$ dan $g$ menghasilkan
$$(f \\circ g)(x) = f(g(x)), \\qquad (g \\circ f)(x) = g(f(x)).$$

**Syarat terdefinisi.** Agar $(f \\circ g)(x)$ terdefinisi, masukan harus sah di $g$ dan hasil $g(x)$ harus sah di $f$:
$$x \\in D_{g} \\quad \\text{dan} \\quad g(x) \\in D_{f},$$
sehingga domainnya
$$D_{f \\circ g} = \\{\\, x \\in D_{g} : g(x) \\in D_{f} \\,\\}.$$

**Contoh.** Untuk $f(x)=\\sqrt{x}$ dan $g(x)=2x+4$: $(f \\circ g)(x)=\\sqrt{2x+4}$ dengan domain $x \\ge -2$, sedangkan $(g \\circ f)(x)=2\\sqrt{x}+4$ dengan domain $x \\ge 0$. Domain keduanya berbeda meski fungsi yang dikomposisikan sama.

**Invers komposisi.** $(f \\circ g)^{-1} = g^{-1} \\circ f^{-1}$, urutannya berbalik.`,
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
      blocks: [
        {
          kind: "step-reveal",
          intro: "Kerjakan empat contoh komposisi berikut satu langkah sekaligus.",
          steps: [
            {
              title: "Contoh 1: dua rumus komposisi",
              text: `Diketahui $f(x)=x+3$ dan $g(x)=x^2-1$. Tentukan $(f \\circ g)(x)$ dan $(g \\circ f)(x)$, lalu periksa salah satunya di $x=2$.

*Penyelesaian.* Untuk $(f \\circ g)(x)=f(g(x))$, masukkan seluruh $g(x)$ ke dalam $f$:
$$(f \\circ g)(x) = (x^2-1)+3 = x^2+2.$$
Untuk $(g \\circ f)(x)=g(f(x))$, masukkan seluruh $f(x)$ ke dalam $g$:
$$(g \\circ f)(x) = (x+3)^2-1 = x^2+6x+9-1 = x^2+6x+8.$$
Kedua hasil berbeda, menegaskan komposisi tidak komutatif. *Periksa* di $x=2$: $g(2)=3$ sehingga $f(3)=6$, dan $f(2)=5$ sehingga $g(5)=24$. Rumus memberi $(f \\circ g)(2)=4+2=6$ dan $(g \\circ f)(2)=4+12+8=24$. Cocok.`,
            },
            {
              title: "Contoh 2: nilai di satu titik",
              text: `Diketahui $f(x)=2x+1$ dan $g(x)=x^2$. Tentukan $(f \\circ g)(x)$ dan $(g \\circ f)(x)$, lalu hitung nilainya di $x=-3$.

*Penyelesaian.* Susun dahulu rumusnya: $(f \\circ g)(x)=f(x^2)=2x^2+1$ dan $(g \\circ f)(x)=(2x+1)^2=4x^2+4x+1$.
Di $x=-3$: $(f \\circ g)(-3)=2(9)+1=19$ dan $(g \\circ f)(-3)=4(9)+4(-3)+1=36-12+1=25$.
*Periksa* dengan urutan langsung: $g(-3)=9$ lalu $f(9)=19$, sedangkan $f(-3)=-5$ lalu $g(-5)=25$. Nilai berbeda karena urutannya berbeda.`,
            },
            {
              title: "Contoh 3: komposisi dengan domain",
              text: `Diketahui $f(x)=\\sqrt{x}$ dan $g(x)=2x+4$. Tentukan $(f \\circ g)(x)$ dan $(g \\circ f)(x)$ beserta domainnya.

*Penyelesaian.* $(f \\circ g)(x)=f(2x+4)=\\sqrt{2x+4}$. Isi akar harus tidak negatif: $2x+4 \\geq 0 \\Rightarrow x \\geq -2$, jadi domain $(f \\circ g)$ adalah $x \\geq -2$.
Sebaliknya $(g \\circ f)(x)=2\\sqrt{x}+4$ hanya terdefinisi ketika $x \\geq 0$, jadi domain $(g \\circ f)$ adalah $x \\geq 0$.
*Periksa* di $x=-1$: bentuk $\\sqrt{2x+4}=\\sqrt{2}$ sah, sedangkan $2\\sqrt{x}+4$ tidak terdefinisi. Kedua domain memang berbeda.`,
            },
            {
              title: "Contoh 4: membalik suatu komposisi",
              text: `Diketahui $f(x)=x+3$ dan $g(x)=2x$. Tentukan $(f \\circ g)^{-1}(x)$ dengan dua cara, lalu periksa nilainya di $x=5$.

*Penyelesaian.* Cara pertama, susun komposisinya: $(f \\circ g)(x)=f(2x)=2x+3$. Balik langsung: dari $y=2x+3$ diperoleh $x=\\dfrac{y-3}{2}$, sehingga $(f \\circ g)^{-1}(x)=\\dfrac{x-3}{2}$.
Cara kedua, gunakan $(f \\circ g)^{-1}=g^{-1} \\circ f^{-1}$. Karena $f^{-1}(x)=x-3$ dan $g^{-1}(x)=\\dfrac{x}{2}$, maka
$$(g^{-1} \\circ f^{-1})(x)=g^{-1}(x-3)=\\frac{x-3}{2}.$$
Kedua cara memberi hasil sama. *Periksa* di $x=5$: $(f \\circ g)(5)=13$ dan $(f \\circ g)^{-1}(13)=\\dfrac{13-3}{2}=5$, kembali ke nilai semula.`,
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
      id: "tantangan",
      kind: "tantangan",
      title: "Tantangan",
      body: `**Soal.** Diketahui $f(x)=2x+3$ dan $(f \\circ g)(x)=6x-1$. Tentukan rumus $g(x)$ beserta inversnya $g^{-1}(x)$.`,
      blocks: [
        {
          kind: "callout",
          variant: "tip",
          title: "Petunjuk",
          text: "Gunakan definisi $(f \\circ g)(x)=f(g(x))$. Karena $f$ diketahui, kita dapat membaca $g(x)$ dari dalam komposisi.",
        },
        {
          kind: "step-reveal",
          intro: "Kita uraikan komposisinya lalu membalik $g$.",
          steps: [
            {
              title: "Langkah 1",
              text: "Tulis definisinya: $(f \\circ g)(x)=f(g(x))=2g(x)+3$.",
            },
            {
              title: "Langkah 2",
              text: "Samakan dengan yang diketahui: $2g(x)+3=6x-1$.",
            },
            {
              title: "Langkah 3",
              text: "Kurangi $3$ lalu bagi $2$: $2g(x)=6x-4$, sehingga $g(x)=3x-2$.",
            },
            {
              title: "Langkah 4",
              text: "Balik $g$: dari $y=3x-2$ diperoleh $x=\\dfrac{y+2}{3}$, jadi $g^{-1}(x)=\\dfrac{x+2}{3}$.",
            },
            {
              title: "Langkah 5",
              text: "Periksa: $g(1)=1$ dan $g^{-1}(1)=\\dfrac{3}{3}=1$. Benar.",
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Jejak Sejarah",
      body: `Gagasan merangkai dua fungsi, yaitu keluaran satu fungsi menjadi masukan fungsi berikutnya, tumbuh bersama notasi fungsi itu sendiri. Leonhard Euler pada abad ke-18 sudah memakai $f(x)$ dan menghitung nilai fungsi dari fungsi lain, meskipun lambang khusus untuk komposisi belum ada. Selama bertahun-tahun komposisi ditulis dengan tanda kurung seperti $f(g(x))$ untuk menghindari kerancuan. Lambang bundaran $\\circ$ baru lahir pada abad ke-20 dan menyebar luas melalui buku teks aljabar. Gagasan ini menjadi penting ketika matematikawan mempelajari struktur aljabar dan pemetaan, termasuk sifat bahwa urutan pengerjaan mengubah hasil dan bahwa $(f\\circ g)^{-1}=g^{-1}\\circ f^{-1}$.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Telaah kembali bagaimana urutan dua proses menentukan hasil akhirnya.",
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
      questionIds: ['kf-09'],
      body: `**Penutup.** (1) Mengapa $(f\\circ g)(x)$ umumnya berbeda dari $(g\\circ f)(x)$? (2) Syarat apa saja yang harus dipenuhi agar domain komposisi terdefinisi? Setelah menjawab, uji pemahamanmu lewat [Latihan & Asesmen](/latihan) topik **Komposisi Fungsi**.`,
    },
  ],
};

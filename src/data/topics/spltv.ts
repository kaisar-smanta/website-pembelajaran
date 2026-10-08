import type { Topic } from '@/types/content';

export const spltv: Topic = {
  id: 'spltv',
  slug: 'spltv',
  title: 'Sistem Persamaan Linear Tiga Variabel',
  subtitle: 'Menyelesaikan dan menafsirkan tiga persamaan sekaligus',
  grade: 'X',
  phase: 'E',
  element: 'aljabar-fungsi',
  status: 'lengkap',
  supplementary: true,
  cpNote:
    'Pengayaan: CP SMA tidak lagi memuat SPLTV secara eksplisit. Dipertahankan sebagai jembatan menuju sistem pertidaksamaan dan matriks.',
  estimatedMinutes: 90,
  summary:
    'Menyusun dan menyelesaikan sistem persamaan linear tiga variabel dengan eliminasi dan substitusi, serta menafsirkan solusinya.',
  description:
    'Banyak situasi nyata menuntut penentuan tiga besaran sekaligus, misalnya harga tiga jenis barang atau komposisi tiga bahan. Sistem persamaan linear tiga variabel (SPLTV) menyediakan cara sistematis untuk menemukannya. Pada topik ini kita belajar merepresentasikan SPLTV, menyelesaikannya dengan eliminasi dan substitusi, memodelkan masalah nyata, serta menafsirkan solusinya — termasuk kemungkinan tidak ada solusi atau tak berhingga banyak solusi.',
  keywords: [
    'SPLTV',
    'tiga variabel',
    'eliminasi',
    'substitusi',
    'pemodelan',
    'solusi',
  ],
  prerequisites: [],
  relatedTopics: ['fungsi-kuadrat'],
  prerequisiteKnowledge: [
    'Persamaan linear dua variabel dan penyelesaiannya',
    'Operasi bentuk aljabar dan menyederhanakan suku sejenis',
    'Menyelesaikan persamaan linear satu variabel',
  ],
  objectives: [
    { text: 'Menyatakan situasi tiga besaran yang tidak diketahui sebagai SPLTV.' },
    { text: 'Menyelesaikan SPLTV dengan metode eliminasi.' },
    { text: 'Menyelesaikan SPLTV dengan metode substitusi dan gabungan.' },
    { text: 'Memodelkan masalah kontekstual ke dalam SPLTV.' },
    { text: 'Menafsirkan solusi serta mengenali kasus tanpa solusi atau tak berhingga banyak solusi.' },
  ],
  applications: ['optimasi-produksi-bengkel'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat merepresentasikan hubungan tiga besaran linear, menyelesaikan sistem persamaan linear tiga variabel dengan metode eliminasi dan substitusi, memodelkan masalah nyata ke dalam SPLTV, serta menafsirkan solusi termasuk kemungkinan sistem yang tidak memiliki solusi atau memiliki tak berhingga banyak solusi.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      blocks: [
        {
          kind: "prediction",
          prompt: `Ani dan Budi menimbang buah secara berpasangan:
- berat Ani dan Budi bersama $10$ kg;
- berat Budi dan Cita bersama $12$ kg;
- berat Ani dan Cita bersama $8$ kg.

Dapatkah kamu menentukan berat masing-masing anak? Jumlahkan ketiga informasi itu: dua kali total berat mereka adalah $10+12+8=30$ kg. Berapa berat Ani, Budi, dan Cita?`,
          reveal: "Jumlahkan ketiga persamaan: $2(A+B+C)=30$, jadi $A+B+C=15$. Karena $A+B=10$, maka $C=5$. Karena $B+C=12$, maka $A=3$. Karena $A+C=8$, maka $B=7$. Jadi Ani $3$ kg, Budi $7$ kg, dan Cita $5$ kg. Periksa: $3+7=10$, $7+5=12$, $3+5=8$. Semua terpenuhi.",
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- menyelesaikan sistem persamaan linear dua variabel dengan eliminasi atau substitusi;
- menyederhanakan bentuk aljabar dengan suku sejenis;
- operasi bilangan bulat dan pecahan.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Di kantin sekolah, tiga siswa berbelanja dengan kombinasi barang yang berbeda. Dari total belanja masing-masing kita dapat menebak harga satuan setiap barang. Hal serupa muncul pada campuran bahan, komposisi gizi, hingga penentuan tiga bilangan yang hanya diketahui jumlah dan hubungannya.

Ketika banyak besaran yang dicari bertambah menjadi tiga, menyelesaikan secara coba-coba menjadi tidak praktis. Kita memerlukan prosedur yang rapi: mengubah tiga persamaan menjadi dua, lalu menjadi satu.`,
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi",
      body: `Satu SPLTV dapat disajikan dalam beberapa bentuk. Misalnya untuk sistem

$$\\begin{cases} 2x + y - z = 3 \\\\ x - y + 2z = 4 \\\\ x + 2y + z = 7 \\end{cases}$$

bentuk aljabarnya adalah himpunan tiga persamaan di atas, sedangkan tiap persamaan dapat ditandai agar mudah dirujuk saat eliminasi.`,
      blocks: [
        {
          kind: "table",
          caption: "Tiga cara memandang SPLTV",
          headers: [
            "Representasi",
            "Bentuk",
          ],
          rows: [
            [
              "Aljabar",
              "tiga persamaan linear dengan $x, y, z$",
            ],
            [
              "Matriks",
              "tabel koefisien $3 \\times 4$ (termasuk konstanta)",
            ],
            [
              "Geometri",
              "tiga bidang yang berpotongan di satu titik",
            ],
          ],
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Substitusi",
              body: "Nyatakan satu variabel lalu substitusikan ke persamaan lain.",
            },
            {
              label: "Eliminasi",
              body: "Jumlahkan atau kurangkan persamaan untuk menghilangkan variabel.",
            },
            {
              label: "Grafik",
              body: "Titik potong dua garis adalah solusi sistem.",
            },
          ],
        },
      ],
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: SPLTV dan Jenis Solusinya",
      body: `SPLTV adalah himpunan tiga persamaan linear yang memuat tiga variabel, misalnya

$$\\begin{cases} a_1x + b_1y + c_1z = d_1 \\\\ a_2x + b_2y + c_2z = d_2 \\\\ a_3x + b_3y + c_3z = d_3 \\end{cases}$$

Solusinya adalah pasangan terurut $(x,y,z)$ yang memenuhi **ketiga** persamaan sekaligus. Secara geometris, solusi adalah titik potong tiga bidang.

Ada tiga kemungkinan:
- **solusi tunggal** — ketiga bidang berpotongan di satu titik;
- **tak berhingga banyak solusi** — bidang-bidang berpotongan pada satu garis (persamaan tidak saling bebas);
- **tidak ada solusi** — bidang-bidang sejajar atau bertemu sepanjang garis yang tidak memenuhi salah satu persamaan.

Metode penyelesaian yang umum adalah **eliminasi** (mengurangkan atau menjumlahkan persamaan) dan **substitusi** (mengganti satu variabel dengan bentuk dari variabel lain).`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Inti yang perlu diingat",
          text: "Tujuan eliminasi adalah mereduksi tiga variabel menjadi dua, lalu menjadi satu. Setiap langkah harus menghasilkan persamaan baru yang tetap benar untuk solusi yang sama.",
        },
        {
          kind: "match",
          intro: "Cocokkan jenis sistem dengan banyak solusinya.",
          pairs: [
            {
              left: "Sistem konsisten",
              right: "Punya tepat satu solusi",
            },
            {
              left: "Sistem tak konsisten",
              right: "Tidak punya solusi",
            },
            {
              left: "Sistem bergantung",
              right: "Punya tak hingga banyak solusi",
            },
            {
              left: "Determinan nol",
              right: "Garis sejajar atau berimpit",
            },
          ],
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi",
      body: `Ambil sistem berikut dan coba variasikan caranya:

$$\\begin{cases} x + y + z = 6 \\\\ x - y + z = 2 \\\\ x + y - z = 4 \\end{cases}$$

Kurangkan persamaan (1) dengan (2). Variabel apa yang hilang? Lalu kurangkan persamaan (1) dengan (3). Apakah kamu memperoleh nilai $y$ dan $z$ secara terpisah? Dari sini, berapa $x$? Diskusikan mengapa cara ini lebih cepat daripada mengeliminasi satu variabel berulang kali.`,
      blocks: [
        {
          kind: "exploration",
          explorationId: "spltv-perpotongan",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Pola Umum Eliminasi dan Substitusi",
      body: `Baik eliminasi maupun substitusi bermuara pada satu ide yang sama: **kurangi banyak variabel satu per satu sampai tersisa satu**. Setiap langkah memilih dua persamaan, menyetel koefisien satu variabel agar berlawanan atau sama, lalu menjumlahkan atau mengurangkannya. Hasilnya adalah sistem baru dengan satu variabel lebih sedikit yang memiliki solusi sama.

Pola ini menjelaskan mengapa SPLTV selalu dapat diredam menjadi dua persamaan dua variabel, lalu menjadi satu. Setelah satu nilai diperoleh, nilainya disubstitusi kembali ke belakang. Hasil akhirnya hanya mungkin salah satu dari tiga kemungkinan: solusi tunggal, tak berhingga banyak solusi, atau tidak ada solusi, bergantung pada apakah tiga bidangnya berpotongan di satu titik, sepanjang garis, atau tidak bertemu.`,
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
              title: "Contoh 1",
              text: `Selesaikan

$$\\begin{cases} x + y + z = 6 & (1) \\\\ x - y + z = 2 & (2) \\\\ x + y - z = 4 & (3) \\end{cases}$$

*Penyelesaian.* Kurangkan (1) dan (2) untuk menghilangkan $x$ dan $z$:
$$(x+y+z)-(x-y+z)=6-2 \\Rightarrow 2y=4 \\Rightarrow y=2.$$
Kurangkan (1) dan (3):
$$(x+y+z)-(x+y-z)=6-4 \\Rightarrow 2z=2 \\Rightarrow z=1.$$
Substitusikan ke (1): $x+2+1=6 \\Rightarrow x=3$.

Periksa (2): $3-2+1=2$ ✓ dan (3): $3+2-1=4$ ✓. Solusinya $(x,y,z)=(3,2,1)$.`,
            },
            {
              title: "Contoh 2",
              text: `Selesaikan

$$\\begin{cases} y = x + 1 \\\\ x + y + z = 8 \\\\ 2x - y + z = 3 \\end{cases}$$

*Penyelesaian.* Substitusikan $y=x+1$ ke persamaan kedua:
$$x+(x+1)+z=8 \\Rightarrow 2x+z=7.$$
Substitusikan juga ke persamaan ketiga:
$$2x-(x+1)+z=3 \\Rightarrow x+z=4 \\Rightarrow z=4-x.$$
Masukkan $z=4-x$ ke $2x+z=7$: $2x+(4-x)=7 \\Rightarrow x=3$. Maka $y=4$ dan $z=1$. Solusinya $(3,4,1)$.`,
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
      body: `SPLTV dipakai untuk menetapkan harga satuan dari beberapa paket belanja, menyusun campuran bahan dengan komposisi tertentu, dan menganalisis rangkaian listrik sederhana. Pola pikirnya sama: ubah situasi menjadi persamaan, selesaikan, lalu periksa apakah jawabnya masuk akal.

Langkah pemodelan yang baik: (1) tentukan variabel dan artinya, (2) susun tiga persamaan dari informasi, (3) selesaikan, (4) periksa pada ketiga persamaan, dan (5) tafsirkan dalam konteks asal.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Salah tanda saat mengurangkan persamaan.** Setelah memperoleh $2y=4$, pastikan seluruh ruas dikurangkan, termasuk konstantanya. Kesalahan tanda adalah penyebab paling umum.

**2. Berhenti pada dua persamaan dua variabel.** Menemukan $y$ dan $z$ belum selesai; kamu masih harus menentukan $x$ dari salah satu persamaan awal.

**3. Tidak memeriksa solusi pada semua persamaan.** Solusi harus memenuhi **ketiga** persamaan. Periksa selalu agar kesalahan aritmetika terdeteksi.

**4. Mengira setiap SPLTV punya solusi tunggal.** Bisa saja sistem konsisten dengan tak berhingga solusi, atau tidak punya solusi sama sekali.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Bagaimana kamu memutuskan akan memakai eliminasi atau substitusi pada suatu SPLTV?",
            "Kesalahan tanda paling sering muncul di langkah mana, dan bagaimana kamu menghindarinya?",
            "Mengapa menafsirkan solusi dalam konteks soal sama pentingnya dengan menghitungnya?",
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
            "Aspek",
            "Penjelasan",
          ],
          rows: [
            [
              "Bentuk umum",
              "tiga persamaan linear dengan variabel $x, y, z$",
            ],
            [
              "Metode eliminasi",
              "menjumlah/mengurangkan persamaan untuk menghapus variabel",
            ],
            [
              "Metode substitusi",
              "mengganti variabel dengan bentuk variabel lain",
            ],
            [
              "Solusi tunggal",
              "ketiga bidang berpotongan di satu titik",
            ],
            [
              "Tak berhingga solusi",
              "salah satu persamaan bergantung pada yang lain",
            ],
            [
              "Tanpa solusi",
              "tidak ada titik yang memenuhi ketiga persamaan",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Tiket keluar.** (1) Mengapa tujuan utama eliminasi adalah menurunkan banyak variabel satu per satu? (2) Apa perbedaan sistem dengan solusi tunggal, tak berhingga banyak solusi, dan tanpa solusi? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Sistem Persamaan Linear Tiga Variabel** untuk latihan tambahan.`,
    },
  ],
};

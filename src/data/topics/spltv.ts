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
  sections: [
    {
      id: 'tujuan',
      kind: 'tujuan',
      title: 'Tujuan Pembelajaran',
      body: `Setelah mempelajari topik ini, peserta didik dapat merepresentasikan hubungan tiga besaran linear, menyelesaikan sistem persamaan linear tiga variabel dengan metode eliminasi dan substitusi, memodelkan masalah nyata ke dalam SPLTV, serta menafsirkan solusi termasuk kemungkinan sistem yang tidak memiliki solusi atau memiliki tak berhingga banyak solusi.`,
    },
    {
      id: 'pemantik',
      kind: 'pemantik',
      title: 'Pertanyaan Pemantik',
      body: `Ani dan Budi menimbang buah secara berpasangan:
- berat Ani dan Budi bersama $10$ kg;
- berat Budi dan Cita bersama $12$ kg;
- berat Ani dan Cita bersama $8$ kg.

Dapatkah kamu menentukan berat masing-masing anak? Jumlahkan ketiga informasi itu: dua kali total berat mereka adalah $10+12+8=30$ kg. Berapa berat Ani, Budi, dan Cita?`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat jawaban pertanyaan pemantik',
          text: `Jumlah Ketiga persamaan: $2(A+B+C)=30$, jadi $A+B+C=15$. Karena $A+B=10$, maka $C=5$. Karena $B+C=12$, maka $A=3$. Karena $A+C=8$, maka $B=7$. Jadi Ani $3$ kg, Budi $7$ kg, dan Cita $5$ kg. Periksa: $3+7=10$, $7+5=12$, $3+5=8$. Semua terpenuhi.`,
        },
      ],
    },
    {
      id: 'prasyarat',
      kind: 'prasyarat',
      title: 'Prasyarat',
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- menyelesaikan sistem persamaan linear dua variabel dengan eliminasi atau substitusi;
- menyederhanakan bentuk aljabar dengan suku sejenis;
- operasi bilangan bulat dan pecahan.`,
    },
    {
      id: 'konteks',
      kind: 'konteks',
      title: 'Situasi dan Konteks',
      body: `Di kantin sekolah, tiga siswa berbelanja dengan kombinasi barang yang berbeda. Dari total belanja masing-masing kita dapat menebak harga satuan setiap barang. Hal serupa muncul pada campuran bahan, komposisi gizi, hingga penentuan tiga bilangan yang hanya diketahui jumlah dan hubungannya.

Ketika banyak besaran yang dicari bertambah menjadi tiga, menyelesaikan secara coba-coba menjadi tidak praktis. Kita memerlukan prosedur yang rapi: mengubah tiga persamaan menjadi dua, lalu menjadi satu.`,
    },
    {
      id: 'representasi',
      kind: 'representasi',
      title: 'Representasi',
      body: `Satu SPLTV dapat disajikan dalam beberapa bentuk. Misalnya untuk sistem

$$\\begin{cases} 2x + y - z = 3 \\\\ x - y + 2z = 4 \\\\ x + 2y + z = 7 \\end{cases}$$

bentuk aljabarnya adalah himpunan tiga persamaan di atas, sedangkan tiap persamaan dapat ditandai agar mudah dirujuk saat eliminasi.`,
      blocks: [
        {
          kind: 'table',
          caption: 'Tiga cara memandang SPLTV',
          headers: ['Representasi', 'Bentuk'],
          rows: [
            ['Aljabar', 'tiga persamaan linear dengan $x, y, z$'],
            ['Matriks', 'tabel koefisien $3 \\times 4$ (termasuk konstanta)'],
            ['Geometri', 'tiga bidang yang berpotongan di satu titik'],
          ],
        },
      ],
    },
    {
      id: 'konsep',
      kind: 'konsep',
      title: 'Konsep Inti: SPLTV dan Jenis Solusinya',
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
          kind: 'callout',
          variant: 'concept',
          title: 'Inti yang perlu diingat',
          text: 'Tujuan eliminasi adalah mereduksi tiga variabel menjadi dua, lalu menjadi satu. Setiap langkah harus menghasilkan persamaan baru yang tetap benar untuk solusi yang sama.',
        },
      ],
    },
    {
      id: 'eksplorasi',
      kind: 'eksplorasi',
      title: 'Eksplorasi',
      body: `Ambil sistem berikut dan coba variasikan caranya:

$$\\begin{cases} x + y + z = 6 \\\\ x - y + z = 2 \\\\ x + y - z = 4 \\end{cases}$$

Kurangkan persamaan (1) dengan (2). Variabel apa yang hilang? Lalu kurangkan persamaan (1) dengan (3). Apakah kamu memperoleh nilai $y$ dan $z$ secara terpisah? Dari sini, berapa $x$? Diskusikan mengapa cara ini lebih cepat daripada mengeliminasi satu variabel berulang kali.`,
    },
    {
      id: 'contoh',
      kind: 'contoh',
      title: 'Contoh Terbimbing',
      body: `**Contoh 1 (eliminasi).** Selesaikan

$$\\begin{cases} x + y + z = 6 & (1) \\\\ x - y + z = 2 & (2) \\\\ x + y - z = 4 & (3) \\end{cases}$$

*Penyelesaian.* Kurangkan (1) dan (2) untuk menghilangkan $x$ dan $z$:
$$(x+y+z)-(x-y+z)=6-2 \\Rightarrow 2y=4 \\Rightarrow y=2.$$
Kurangkan (1) dan (3):
$$(x+y+z)-(x+y-z)=6-4 \\Rightarrow 2z=2 \\Rightarrow z=1.$$
Substitusikan ke (1): $x+2+1=6 \\Rightarrow x=3$.

Periksa (2): $3-2+1=2$ ✓ dan (3): $3+2-1=4$ ✓. Solusinya $(x,y,z)=(3,2,1)$.

**Contoh 2 (substitusi).** Selesaikan

$$\\begin{cases} y = x + 1 \\\\ x + y + z = 8 \\\\ 2x - y + z = 3 \\end{cases}$$

*Penyelesaian.* Substitusikan $y=x+1$ ke persamaan kedua:
$$x+(x+1)+z=8 \\Rightarrow 2x+z=7.$$
Substitusikan juga ke persamaan ketiga:
$$2x-(x+1)+z=3 \\Rightarrow x+z=4 \\Rightarrow z=4-x.$$
Masukkan $z=4-x$ ke $2x+z=7$: $2x+(4-x)=7 \\Rightarrow x=3$. Maka $y=4$ dan $z=1$. Solusinya $(3,4,1)$.`,
    },
    {
      id: 'latihan-dasar',
      kind: 'latihan-dasar',
      title: 'Latihan Dasar',
      level: 'dasar',
      body: `1. Selesaikan $x+y+z=9$, $2x+y+z=12$, $x+y+2z=11$.

2. Selesaikan $x-y+z=4$, $x+y-z=2$, $2x+y+z=9$.

3. Diketahui $y=x+1$, $z=2x$, dan $x+y+z=9$. Tentukan $x$, $y$, dan $z$.

4. Selesaikan $x+y+z=0$, $x-y+z=-2$, $x+y-z=2$.

5. Diketahui $z=4$, $x+y+z=10$, dan $x-y=2$. Tentukan $x$ dan $y$.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. Kurangkan persamaan 2 dengan 1: $x=3$. Kurangkan persamaan 3 dengan 1: $z=2$. Maka $y=9-3-2=4$. Solusi $(3,4,2)$.
2. Jumlahkan persamaan 1 dan 2: $2x=6 \\Rightarrow x=3$. Sisa $y-z=-1$ dan $y+z=3$ (dari $6+y+z=9$). Maka $y=1$, $z=2$. Solusi $(3,1,2)$.
3. $x+(x+1)+2x=9 \\Rightarrow 4x=8 \\Rightarrow x=2$, lalu $y=3$, $z=4$.
4. Kurangkan 1 dengan 2: $2y=2 \\Rightarrow y=1$. Kurangkan 1 dengan 3: $2z=-2 \\Rightarrow z=-1$. Maka $x=0$. Solusi $(0,1,-1)$.
5. $x+y=10-4=6$ dan $x-y=2$. Jumlahkan: $2x=8 \\Rightarrow x=4$, lalu $y=2$. Solusi $(4,2,4)$.`,
        },
      ],
    },
    {
      id: 'latihan-cakap',
      kind: 'latihan-cakap',
      title: 'Latihan Cakap',
      level: 'cakap',
      body: `1. Selesaikan $x+2y+z=8$, $2x+y-z=1$, $x-y+2z=5$.

2. Sebuah kotak berisi $30$ keping uang logam terdiri dari pecahan Rp100, Rp200, dan Rp500. Nilai totalnya Rp9.000 dan banyak koin Rp500 adalah dua kali banyak koin Rp100. Tentukan banyak masing-masing koin.

3. Selesaikan $x+y+z=7$, $2x-y+z=7$, $x-y+2z=9$.

4. Harga $2$ buku, $1$ pena, dan $1$ pensil adalah Rp13.000. Harga $1$ buku, $2$ pena, dan $1$ pensil Rp17.000. Harga $1$ buku, $1$ pena, dan $2$ pensil Rp12.000. Tentukan harga satuan setiap barang.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. Eliminasi menghasilkan solusi $(1,2,3)$. Periksa: $1+4+3=8$, $2+2-3=1$, $1-2+6=5$.
2. Misal $a,b,c$ banyak koin Rp100, Rp200, Rp500. Maka $a+b+c=30$, $a+2b+5c=90$ (dibagi 100), dan $c=2a$. Substitusi: $3a+b=30$ dan $11a+2b=90$. Dari $b=30-3a$: $11a+60-6a=90 \\Rightarrow 5a=30 \\Rightarrow a=6$. Maka $b=12$ dan $c=12$. Jadi $6$ koin Rp100, $12$ koin Rp200, $12$ koin Rp500.
3. Solusi $(2,1,4)$. Periksa: $2+1+4=7$, $4-1+4=7$, $2-1+8=9$.
4. Misal harga buku $x$, pena $y$, pensil $z$. Jumlahkan ketiga persamaan: $4x+4y+4z=42000 \\Rightarrow x+y+z=10500$. Kurangkan dengan tiap persamaan: $x=2500$, $y=6500$, $z=1500$. Jadi buku Rp2.500, pena Rp6.500, pensil Rp1.500.`,
        },
      ],
    },
    {
      id: 'latihan-mahir',
      kind: 'latihan-mahir',
      title: 'Latihan Mahir',
      level: 'mahir',
      body: `1. Selidiki banyak solusi sistem $x+y+z=6$, $2x+2y+2z=12$, $x-y=0$. Tafsirkan secara geometris.

2. Jumlah tiga bilangan adalah $24$. Bilangan kedua dua kali bilangan pertama, dan bilangan ketiga $4$ lebihnya dari bilangan kedua. Tentukan ketiga bilangan itu.

3. Selesaikan $x+y+z=6$, $x+2y+3z=14$, $x+4y+9z=36$.

4. Dari Contoh 2, jelaskan mengapa memilih persamaan yang sudah menyatakan satu variabel (misalnya $y=x+1$) mempermudah substitusi. Kapan metode eliminasi lebih menguntungkan?`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat pembahasan',
          text: `1. Persamaan kedua sama dengan dua kali persamaan pertama, sehingga tidak memberi informasi baru. Dari $x-y=0$ diperoleh $x=y$, lalu $2x+z=6$ atau $z=6-2x$. Jadi ada tak berhingga banyak solusi $(x,x,6-2x)$. Secara geometris ketiga bidang berpotongan pada satu garis.
2. Misal bilangan itu $x, 2x, 2x+4$. Maka $x+2x+(2x+4)=24 \\Rightarrow 5x=20 \\Rightarrow x=4$. Bilangan itu $4, 8, 12$. Periksa: $8=2\\cdot4$ dan $12=8+4$.
3. Kurangkan persamaan 1 dari 2: $y+2z=8$. Kurangkan persamaan 1 dari 3: $3y+8z=30$. Dari $y=8-2z$: $3(8-2z)+8z=30 \\Rightarrow 24+2z=30 \\Rightarrow z=3$. Maka $y=2$ dan $x=1$. Solusi $(1,2,3)$.
4. Persamaan yang sudah berbentuk eksplisit mengurangi langkah karena satu variabel langsung diganti tanpa perlu mengeliminasi lebih dahulu. Eliminasi lebih menguntungkan bila koefisien variabel mudah dibuat sama atau berlawanan, misalnya kelipatan sederhana.`,
        },
      ],
    },
    {
      id: 'dunia-nyata',
      kind: 'dunia-nyata',
      title: 'Penerapan di Dunia Nyata',
      body: `SPLTV dipakai untuk menetapkan harga satuan dari beberapa paket belanja, menyusun campuran bahan dengan komposisi tertentu, dan menganalisis rangkaian listrik sederhana. Pola pikirnya sama: ubah situasi menjadi persamaan, selesaikan, lalu periksa apakah jawabnya masuk akal.

Langkah pemodelan yang baik: (1) tentukan variabel dan artinya, (2) susun tiga persamaan dari informasi, (3) selesaikan, (4) periksa pada ketiga persamaan, dan (5) tafsirkan dalam konteks asal.`,
    },
    {
      id: 'kesalahan-umum',
      kind: 'kesalahan-umum',
      title: 'Kesalahan Umum',
      body: `**1. Salah tanda saat mengurangkan persamaan.** Setelah memperoleh $2y=4$, pastikan seluruh ruas dikurangkan, termasuk konstantanya. Kesalahan tanda adalah penyebab paling umum.

**2. Berhenti pada dua persamaan dua variabel.** Menemukan $y$ dan $z$ belum selesai; kamu masih harus menentukan $x$ dari salah satu persamaan awal.

**3. Tidak memeriksa solusi pada semua persamaan.** Solusi harus memenuhi **ketiga** persamaan. Periksa selalu agar kesalahan aritmetika terdeteksi.

**4. Mengira setiap SPLTV punya solusi tunggal.** Bisa saja sistem konsisten dengan tak berhingga solusi, atau tidak punya solusi sama sekali.`,
    },
    {
      id: 'refleksi',
      kind: 'refleksi',
      title: 'Refleksi',
      body: `1. Bagaimana kamu memutuskan akan memakai eliminasi atau substitusi pada suatu SPLTV?
2. Kesalahan tanda paling sering muncul di langkah mana, dan bagaimana kamu menghindarinya?
3. Mengapa menafsirkan solusi dalam konteks soal sama pentingnya dengan menghitungnya?`,
    },
    {
      id: 'rangkuman',
      kind: 'rangkuman',
      title: 'Rangkuman',
      blocks: [
        {
          kind: 'table',
          headers: ['Aspek', 'Penjelasan'],
          rows: [
            ['Bentuk umum', 'tiga persamaan linear dengan variabel $x, y, z$'],
            ['Metode eliminasi', 'menjumlah/mengurangkan persamaan untuk menghapus variabel'],
            ['Metode substitusi', 'mengganti variabel dengan bentuk variabel lain'],
            ['Solusi tunggal', 'ketiga bidang berpotongan di satu titik'],
            ['Tak berhingga solusi', 'salah satu persamaan bergantung pada yang lain'],
            ['Tanpa solusi', 'tidak ada titik yang memenuhi ketiga persamaan'],
          ],
        },
      ],
    },
    {
      id: 'evaluasi',
      kind: 'evaluasi',
      title: 'Evaluasi',
      body: `Kerjakan kuis topik ini untuk memeriksa pemahamanmu. Buka halaman [Latihan & Asesmen](/latihan) lalu pilih topik **Sistem Persamaan Linear Tiga Variabel**.`,
    },
  ],
};

import type { Topic } from '@/types/content';

export const analisisDistribusiData: Topic = {
  id: 'analisis-distribusi-data',
  slug: 'analisis-distribusi-data',
  title: 'Analisis Distribusi Data',
  subtitle: 'Merangkum dan membaca sebaran data dengan jujur',
  grade: 'X',
  phase: 'E',
  element: 'data-peluang',
  status: 'lengkap',
  estimatedMinutes: 90,
  summary:
    'Merangkum data tunggal dan kelompok dengan mean, median, modus, kuartil, serta membaca sebaran melalui histogram, dot plot, dan box plot.',
  description:
    'Satu angka rata-rata sering dianggap mewakili seluruh data, padahal dua kumpulan data dengan rata-rata sama bisa sangat berbeda sebarannya. Pada topik ini kita mempelajari ukuran pemusatan (mean, median, modus) dan ukuran penyebaran (jangkauan, kuartil, jangkauan interkuartil), lalu menyajikannya dengan histogram, dot plot, dan box plot untuk mengenali pencilan dan menafsirkan distribusi secara kritis.',
  keywords: [
    'mean',
    'median',
    'modus',
    'kuartil',
    'jangkauan',
    'jangkauan interkuartil',
    'histogram',
    'box plot',
    'pencilan',
  ],
  prerequisites: [],
  relatedTopics: ['data-bivariat', 'statistik-dalam-kehidupan'],
  explorations: ['distribusi-sebaran'],
  prerequisiteKnowledge: [
    'Membaca tabel dan diagram',
    'Operasi bilangan bulat dan pecahan',
    'Mengurutkan sekumpulan data',
  ],
  objectives: [
    { text: 'Menentukan mean, median, dan modus dari data tunggal dan data berkelompok.' },
    { text: 'Menentukan kuartil, jangkauan, dan jangkauan interkuartil (IQR).' },
    { text: 'Menyajikan data dengan dot plot, histogram, dan box plot.' },
    { text: 'Mengenali dan menafsirkan pencilan (outlier) dengan aturan $1{,}5\\times\\text{IQR}$.' },
    { text: 'Membandingkan dua distribusi dan menarik kesimpulan yang wajar.' },
  ],
  sections: [
    {
      id: 'tujuan',
      kind: 'tujuan',
      title: 'Tujuan Pembelajaran',
      body: `Setelah mempelajari topik ini, peserta didik dapat merangkum data menggunakan ukuran pemusatan dan penyebaran, menyajikannya dalam bentuk diagram yang sesuai, serta menafsirkan sebaran dan pencilan secara kritis.`,
    },
    {
      id: 'pemantik',
      kind: 'pemantik',
      title: 'Pertanyaan Pemantik',
      body: `Dua kelas mengikuti ujian yang sama. Rata-rata nilai keduanya **sama**, yaitu $74$. Namun hasilnya:

- Kelas A: $70, 72, 75, 76, 77$;
- Kelas B: $40, 55, 60, 100, 115$.

Apakah kedua kelas benar-benar "sama baik"? Angka apa yang dapat membedakan keduanya?`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat jawaban pertanyaan pemantik',
          text: `Rata-ratanya sama ($74$), tetapi **median** berbeda: Kelas A bermedian $75$, sedangkan Kelas B bermedian $60$. Kelas B memiliki dua nilai ekstrem ($100$ dan $115$) yang menarik rata-rata ke atas. Rata-rata saja menyesatkan; kita perlu ukuran **penyebaran**.`,
        },
      ],
    },
    {
      id: 'prasyarat',
      kind: 'prasyarat',
      title: 'Prasyarat',
      body: `Sebelum melanjutkan, pastikan kamu dapat:

- mengurutkan data dari kecil ke besar;
- menghitung rata-rata sederhana, misalnya rata-rata $2, 4, 6$ adalah $\\dfrac{2+4+6}{3}=4$;
- membaca tabel frekuensi.`,
    },
    {
      id: 'konteks',
      kind: 'konteks',
      title: 'Situasi dan Konteks',
      body: `Laporan survei, nilai rapor, dan data cuaca sering diringkas menjadi beberapa angka. Namun ringkasan yang baik harus menjawab **dua pertanyaan sekaligus**: *di mana pusat datanya* dan *seberapa menyebar datanya*. Nilai ulangan yang rata-ratanya tinggi tetapi sebarannya sangat lebar menandakan pemahaman siswa tidak merata — informasi yang penting bagi guru.`,
    },
    {
      id: 'konsep',
      kind: 'konsep',
      title: 'Ukuran Pemusatan: Mean, Median, Modus',
      body: `Untuk data tunggal berukuran $n$:

- **Mean (rata-rata)** adalah jumlah semua data dibagi banyak data:
$$\\bar{x}=\\frac{x_1+x_2+\\cdots+x_n}{n}.$$
- **Median** adalah nilai tengah setelah data diurutkan. Jika $n$ ganjil, median adalah data ke-$\\dfrac{n+1}{2}$. Jika $n$ genap, median adalah rata-rata dua data tengah.
- **Modus** adalah nilai yang paling sering muncul.

**Ilustrasi.** Untuk data $2, 3, 4, 4, 6, 6, 6, 7, 9, 13$ dengan $n=10$:

- mean $=\\dfrac{2+3+4+4+6+6+6+7+9+13}{10}=\\dfrac{60}{10}=6$;
- median $=\\dfrac{6+6}{2}=6$;
- modus $=6$ (muncul paling sering, yaitu tiga kali).`,
      blocks: [
        {
          kind: 'callout',
          variant: 'concept',
          title: 'Inti yang perlu diingat',
          text: 'Mean memanfaatkan **semua** nilai sehingga sangat peka terhadap data ekstrem. Median hanya bergantung pada posisi tengah sehingga lebih **tahan** terhadap pencilan.',
        },
      ],
    },
    {
      id: 'representasi',
      kind: 'representasi',
      title: 'Representasi Data',
      body: `Data yang sama dapat disajikan dengan berbagai cara. Setiap penyajian menonjolkan aspek yang berbeda.`,
      blocks: [
        {
          kind: 'table',
          caption: 'Jenis penyajian data dan kegunaannya',
          headers: ['Penyajian', 'Cocok untuk', 'Menonjolkan'],
          rows: [
            ['Dot plot', 'Data tunggal berukuran kecil', 'Nilai yang sering muncul'],
            ['Histogram', 'Data berkelompok', 'Bentuk sebaran dan interval terpadat'],
            ['Box plot', 'Membandingkan dua kelompok', 'Median, kuartil, dan pencilan'],
          ],
        },
      ],
    },
    {
      id: 'sebaran',
      kind: 'konsep',
      title: 'Ukuran Penyebaran: Jangkauan dan Kuartil',
      body: `**Jangkauan** adalah selisih data terbesar dan terkecil:
$$\\text{Jangkauan}=x_{\\max}-x_{\\min}.$$

Setelah data diurutkan, **kuartil** membaginya menjadi empat bagian sama banyak:

- $Q_1$ = median separuh data bawah;
- $Q_2$ = median seluruh data;
- $Q_3$ = median separuh data atas.

**Jangkauan interkuartil (IQR)** mengukur lebar "separuh data tengah":
$$\\text{IQR}=Q_3-Q_1.$$

Pada data $2, 3, 4, 4, 6, 6, 6, 7, 9, 13$:
$Q_1=4$ (median dari $2,3,4,4,6$) dan $Q_3=7$ (median dari $6,6,7,9,13$), sehingga $\\text{IQR}=7-4=3$, sedangkan jangkauannya $13-2=11$.`,
    },
    {
      id: 'pencilan',
      kind: 'konsep',
      title: 'Pencilan (Outlier)',
      body: `Nilai data yang jauh dari kelompok utama disebut **pencilan**. Salah satu aturan untuk mengenalinya menggunakan IQR:

- batas bawah $= Q_1-1{,}5\\times\\text{IQR}$;
- batas atas $= Q_3+1{,}5\\times\\text{IQR}$.

Data di luar rentang ini dianggap pencilan. Untuk data di atas, IQR $=3$, sehingga batas bawah $=4-4{,}5=-0{,}5$ dan batas atas $=7+4{,}5=11{,}5$. Karena $13>11{,}5$, nilai $13$ adalah **pencilan**.

Pencilan tidak otomatis dibuang — ia bisa menandakan kesalahan pengukuran **atau** kejadian penting yang nyata.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Perhatikan',
          text: 'Pencilan tetap bagian dari data. Membuangnya tanpa alasan dapat menyesatkan kesimpulan. Periksa dahulu asal-usul nilai tersebut.',
        },
      ],
    },
    {
      id: 'data-kelompok',
      kind: 'konsep',
      title: 'Mean dan Median Data Berkelompok',
      body: `Untuk data berkelompok, nilai asli sudah tidak diketahui sehingga digunakan **titik tengah** kelas. Mean diperkirakan dengan
$$\\bar{x}=\\frac{\\sum f_i x_i}{\\sum f_i},$$
dengan $x_i$ titik tengah dan $f_i$ frekuensi kelas ke-$i$. Median dan kuartil data berkelompok dihitung dengan interpolasi pada kelas yang memuat posisi tersebut:
$$\\text{Median}=L+\\left(\\frac{\\tfrac{n}{2}-F}{f}\\right)c,$$
dengan $L$ tepi bawah kelas median, $F$ frekuensi kumulatif sebelum kelas median, $f$ frekuensi kelas median, dan $c$ panjang kelas.`,
      blocks: [
        {
          kind: 'table',
          caption: 'Data nilai ujian ($n=20$)',
          headers: ['Kelas', '$f$', 'Titik tengah $x$', '$f \\cdot x$'],
          rows: [
            ['$50$–$59$', '$2$', '$54{,}5$', '$109$'],
            ['$60$–$69$', '$5$', '$64{,}5$', '$322{,}5$'],
            ['$70$–$79$', '$8$', '$74{,}5$', '$596$'],
            ['$80$–$89$', '$4$', '$84{,}5$', '$338$'],
            ['$90$–$99$', '$1$', '$94{,}5$', '$94{,}5$'],
            ['Jumlah', '$20$', '', '$1460$'],
          ],
        },
      ],
    },
    {
      id: 'eksplorasi',
      kind: 'eksplorasi',
      title: 'Eksplorasi Sebaran dan Pencilan',
      body: `Dua kumpulan data dengan mean sama bisa sangat berbeda sebarannya. Tambahkan atau geser nilai ekstrem untuk melihat ukuran mana yang paling terpengaruh.`,
      blocks: [{ kind: 'exploration', explorationId: 'distribusi-sebaran' }],
    },
    {
      id: 'contoh',
      kind: 'contoh',
      title: 'Contoh Terbimbing',
      body: `**Contoh 1.** Tentukan mean data berkelompok pada tabel di atas.

*Penyelesaian.*
$$\\bar{x}=\\frac{1460}{20}=73.$$

**Contoh 2.** Tentukan median data berkelompok yang sama.

*Penyelesaian.* Karena $\\dfrac{n}{2}=10$, kelas median adalah $70$–$79$ (kumulatifnya mencapai $15$). Dengan $L=69{,}5$, $F=2+5=7$, $f=8$, dan $c=10$:

$$\\text{Median}=69{,}5+\\left(\\frac{10-7}{8}\\right)(10)=69{,}5+3{,}75=73{,}25.$$

**Contoh 3.** Tentukan $Q_1$ dan $Q_3$ data di atas.

*Penyelesaian.* Posisi $Q_1$ adalah $\\dfrac{n}{4}=5$, berada di kelas $60$–$69$ ($L=59{,}5$, $F=2$, $f=5$):

$$Q_1=59{,}5+\\left(\\frac{5-2}{5}\\right)(10)=65{,}5.$$

Posisi $Q_3$ adalah $\\dfrac{3n}{4}=15$, berada di kelas $70$–$79$ ($L=69{,}5$, $F=7$, $f=8$):

$$Q_3=69{,}5+\\left(\\frac{15-7}{8}\\right)(10)=79{,}5.$$

Maka $\\text{IQR}=79{,}5-65{,}5=14$.`,
    },
    {
      id: 'latihan-dasar',
      kind: 'latihan-dasar',
      title: 'Latihan Dasar',
      level: 'dasar',
      body: `Diberikan data tunggal: $4, 5, 5, 6, 6, 6, 7, 9$.

1. Tentukan mean data tersebut.
2. Tentukan mediannya.
3. Tentukan modusnya.
4. Tentukan jangkauannya.
5. Tentukan $Q_1$ dan $Q_3$.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. Mean $=\\dfrac{4+5+5+6+6+6+7+9}{8}=\\dfrac{48}{8}=6$.
2. $n=8$ genap, median $=\\dfrac{6+6}{2}=6$.
3. Modus $=6$ (muncul tiga kali).
4. Jangkauan $=9-4=5$.
5. $Q_1=$ median dari $4,5,5,6$ $=5$; $Q_3=$ median dari $6,6,7,9$ $=6{,}5$.`,
        },
      ],
    },
    {
      id: 'latihan-cakap',
      kind: 'latihan-cakap',
      title: 'Latihan Cakap',
      level: 'cakap',
      body: `1. Untuk data $5, 6, 6, 7, 8, 9, 10, 12$, tentukan mean, median, $Q_1$, $Q_3$, dan IQR.

2. Gunakan tabel data nilai ujian di bagian konsep. Tentukan mean data berkelompok tersebut.

3. Dengan data yang sama, tentukan median data berkelompok.

4. Pada data soal nomor 1, selidiki apakah nilai $14$ merupakan pencilan.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. Mean $=\\dfrac{63}{8}=7{,}875$; median $=\\dfrac{7+8}{2}=7{,}5$; $Q_1=$ median dari $5,6,6,7$ $=6$; $Q_3=$ median dari $8,9,10,12$ $=9{,}5$; IQR $=3{,}5$.
2. Mean $=\\dfrac{1460}{20}=73$.
3. Kelas median $70$–$79$, sehingga median $=69{,}5+\\left(\\dfrac{10-7}{8}\\right)(10)=73{,}25$.
4. Batas bawah $=6-1{,}5(3{,}5)=0{,}75$; batas atas $=9{,}5+5{,}25=14{,}75$. Karena $14<14{,}75$, nilai $14$ **bukan** pencilan.`,
        },
      ],
    },
    {
      id: 'latihan-mahir',
      kind: 'latihan-mahir',
      title: 'Latihan Mahir',
      level: 'mahir',
      body: `1. Diberikan data $3, 4, 5, 5, 6, 6, 7, 8, 10, 16$. Tentukan mean, median, $Q_1$, $Q_3$, IQR, dan identifikasi pencilan. Bandingkan mean dengan dan tanpa pencilan.

2. Rata-rata lima bilangan adalah $8$. Setelah satu bilangan baru ditambahkan, rata-ratanya menjadi $9$. Tentukan bilangan baru itu.

3. Jelaskan mengapa median lebih stabil daripada mean ketika ada data ekstrem.

4. Sebuah kotak data memiliki $Q_1=20$, median $=28$, dan $Q_3=34$. Tentukan IQR dan batas atas untuk pencilan.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat pembahasan',
          text: `1. Mean $=\\dfrac{70}{10}=7$; median $=\\dfrac{6+6}{2}=6$; $Q_1=5$ (median dari $3,4,5,5,6$); $Q_3=8$ (median dari $6,7,8,10,16$); IQR $=3$. Batas atas $=8+1{,}5(3)=12{,}5$, jadi $16$ adalah pencilan. Tanpa $16$: mean $=\\dfrac{54}{9}=6$ — turun dari $7$ menjadi $6$, menunjukkan mean sangat terpengaruh pencilan.
2. Jumlah lima bilangan $=5\\times8=40$. Jumlah enam bilangan $=6\\times9=54$. Bilangan baru $=54-40=14$.
3. Median hanya bergantung pada **posisi tengah** setelah data diurutkan, sehingga satu nilai ekstrem cukup menggeser posisi tanpa mengubah nilai tengah secara besar. Mean menjumlahkan seluruh nilai, sehingga nilai ekstrem menariknya langsung.
4. IQR $=34-20=14$; batas atas $=34+1{,}5(14)=55$.`,
        },
      ],
    },
    {
      id: 'dunia-nyata',
      kind: 'dunia-nyata',
      title: 'Penerapan di Dunia Nyata',
      body: `Box plot sering dipakai membandingkan sebaran gaji di dua kota, sedangkan histogram membantu melihat apakah berat badan bayi berada pada rentang normal. Pemerintah dan perusahaan memakai ukuran penyebaran untuk menilai pemerataan, bukan sekadar rata-rata.

Untuk contoh membaca berita statistik secara kritis, lihat [Membaca Hasil Survei dengan Kritis](/aplikasi/survei-statistik).`,
    },
    {
      id: 'kesalahan-umum',
      kind: 'kesalahan-umum',
      title: 'Kesalahan Umum',
      body: `**1. Menghitung median sebelum mengurutkan data.** Median adalah **nilai tengah data terurut**. Data $3, 9, 5, 1, 7$ harus diurutkan dahulu menjadi $1, 3, 5, 7, 9$; mediannya $5$, bukan $5$ dari urutan aslinya $3,9,5,1,7$ yang kebetulan sama.

**2. Menganggap semua data selalu punya satu modus.** Data bisa tidak punya modus sama sekali (semua nilai berbeda) atau punya beberapa modus.

**3. Menyamakan kuartil dengan membagi data menjadi empat sama besar tanpa aturan.** Untuk $n$ kecil, $Q_1$ dan $Q_3$ ditentukan sebagai median separuh data, bukan dengan mencari persentil secara sembarangan.

**4. Langsung membuang pencilan.** Pencilan dapat berasal dari kesalahan pencatatan, tetapi bisa juga peristiwa nyata. Selidiki dahulu sebelum mengambil keputusan.`,
    },
    {
      id: 'refleksi',
      kind: 'refleksi',
      title: 'Refleksi',
      body: `Jawab dengan jujur:

1. Kapan mean lebih tepat digunakan, dan kapan median lebih jujur?
2. Apa yang dapat kamu simpulkan dari sebuah box plot yang lebar bagian tengahnya?
3. Menurutmu, mengapa berita sering hanya menyebut rata-rata tanpa menyebut sebaran?`,
    },
    {
      id: 'rangkuman',
      kind: 'rangkuman',
      title: 'Rangkuman',
      blocks: [
        {
          kind: 'table',
          headers: ['Ukuran', 'Rumus / Pengertian'],
          rows: [
            ['Mean', '$\\bar{x}=\\dfrac{\\sum x_i}{n}$'],
            ['Median', 'Nilai tengah data terurut'],
            ['Modus', 'Nilai paling sering muncul'],
            ['Kuartil', '$Q_1, Q_2, Q_3$ membagi data menjadi empat bagian'],
            ['Jangkauan', '$x_{\\max}-x_{\\min}$'],
            ['IQR', '$Q_3-Q_1$'],
            ['Batas pencilan', '$Q_1-1{,}5\\,\\text{IQR}$ dan $Q_3+1{,}5\\,\\text{IQR}$'],
          ],
        },
      ],
    },
    {
      id: 'evaluasi',
      kind: 'evaluasi',
      title: 'Evaluasi',
      body: `Kerjakan kuis topik ini untuk memeriksa pemahamanmu. Buka halaman [Latihan & Asesmen](/latihan) lalu pilih topik **Analisis Distribusi Data**.
`,
    },
  ],
};

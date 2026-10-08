import type { Topic } from '@/types/content';

export const induksiMatematika: Topic = {
  id: 'induksi-matematika',
  slug: 'induksi-matematika',
  title: 'Induksi Matematika',
  subtitle: 'Membuktikan pernyataan untuk semua bilangan asli',
  grade: 'XI',
  phase: 'F',
  element: 'aljabar-fungsi',
  subject: 'matematika',
  status: 'lengkap',
  supplementary: true,
  cpNote:
    'Induksi matematika adalah pengayaan pembuktian di luar tuntutan CP Fase F elemen Aljabar dan Fungsi. Kemampuan ini memperkuat penalaran deduktif, menutup pembuktian rumus barisan dan deret, serta menjadi bekal penting untuk olimpiade matematika.',
  estimatedMinutes: 80,
  summary:
    'Menggunakan prinsip induksi matematika untuk membuktikan rumus jumlah, ketaksamaan, dan keterbagian yang berlaku bagi semua bilangan asli.',
  description:
    'Induksi matematika adalah cara membuktikan bahwa suatu pernyataan benar untuk **semua** bilangan asli tanpa harus memeriksa satu per satu. Gagasan intinya mirip deretan domino: jika domino pertama jatuh (basis) dan setiap domino yang jatuh pasti menjatuhkan domino berikutnya (langkah induksi), maka seluruh baris domino akan jatuh. Pada topik ini kita membuktikan rumus jumlah, ketaksamaan, dan keterbagian dengan cara yang runtut.',
  keywords: [
    'induksi matematika',
    'basis induksi',
    'langkah induksi',
    'hipotesis induksi',
    'pembuktian',
    'keterbagian',
  ],
  prerequisites: ['barisan-deret'],
  relatedTopics: ['barisan-deret', 'polinomial'],
  prerequisiteKnowledge: [
    'Operasi bilangan bulat dan manipulasi aljabar',
    'Konsep barisan dan deret serta notasi jumlah',
    'Sifat-sifat bentuk pangkat dan perkalian',
  ],
  objectives: [
    { text: 'Menjelaskan prinsip induksi matematika beserta syarat basis dan langkah induksi.' },
    { text: 'Membuktikan rumus jumlah, seperti $1+2+\\cdots+n=\\dfrac{n(n+1)}{2}$, dengan induksi.' },
    { text: 'Membuktikan ketaksamaan sederhana dengan induksi matematika.' },
    { text: 'Membuktikan pernyataan keterbagian dengan induksi matematika.' },
    { text: 'Menilai benar atau kelirunya suatu pembuktian induksi yang diajukan.' },
  ],
  applications: ['bunga-investasi', 'pertumbuhan-populasi'],
  sections: [
    {
      id: 'tujuan',
      kind: 'tujuan',
      title: 'Tujuan Pembelajaran',
      body: 'Setelah mempelajari topik ini, peserta didik dapat menjelaskan prinsip induksi matematika, membuktikan rumus jumlah dan sifat keterbagian bagi semua bilangan asli, membuktikan ketaksamaan sederhana, serta menilai letak kesalahan pada pembuktian induksi yang belum lengkap.',
    },
    {
      id: 'pemantik',
      kind: 'pemantik',
      title: 'Pertanyaan Pemantik',
      body: `Bayangkan deretan domino yang disusun berjajar rapat. Domino pertama cukup besar untuk menjatuhkan domino kedua, domino kedua menjatuhkan domino ketiga, dan seterusnya tanpa henti.

Jika kita mendorong **domino pertama**, apa yang terjadi pada seluruh barisan?`,
      blocks: [
        {
          kind: 'prediction',
          prompt: 'Apa yang terjadi pada seluruh barisan domino jika domino pertama dijatuhkan dan setiap domino pasti menjatuhkan domino berikutnya?',
          options: [
            'Seluruh domino jatuh',
            'Hanya domino pertama yang jatuh',
            'Hanya separuh domino yang jatuh',
            'Tidak dapat ditentukan',
          ],
          reveal: 'Seluruh baris domino akan jatuh. Ada dua syarat yang menjaminnya: domino pertama jatuh (basis) dan setiap domino menjatuhkan domino berikutnya (langkah induksi). Inilah gagasan induksi matematika.',
          saveLabel: 'Simpan dugaan',
        },
      ],
    },
    {
      id: 'prasyarat',
      kind: 'prasyarat',
      title: 'Prasyarat',
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- operasi bilangan bulat, pecahan, dan manipulasi aljabar;
- notasi jumlah, misalnya $1+2+\\cdots+n$;
- sifat bentuk pangkat, seperti $a^{m+n}=a^m a^n$.`,
    },
    {
      id: 'konteks',
      kind: 'konteks',
      title: 'Situasi dan Konteks',
      body: `Pola muncul terus-menerus dalam matematika: rumus jumlah, rumus suku barisan, dan aturan keterbagian. Memeriksa satu contoh memang mudah, tetapi matematika menuntut kepastian bahwa pola itu berlaku untuk **semua** bilangan asli.

Induksi matematika memberi cara membuktikan klaim "berlaku untuk setiap $n$" dengan dua langkah saja. Cara ini juga menopang penalaran algoritmik, misalnya ketika program komputer mengulang tindakan yang sama untuk semua data.`,
    },
    {
      id: 'konsep',
      kind: 'konsep',
      title: 'Konsep Inti: Prinsip Induksi Matematika',
      body: `Misalkan $P(n)$ adalah pernyataan tentang bilangan asli $n$. Untuk membuktikan $P(n)$ benar bagi semua $n \\ge n_0$, cukup dibuktikan dua hal:

**1. Basis (langkah dasar).** Periksa bahwa $P(n_0)$ benar. Biasanya $n_0 = 1$.

**2. Langkah induksi.** Andaikan $P(k)$ benar untuk suatu $k \\ge n_0$ (disebut **hipotesis induksi**), lalu buktikan bahwa $P(k+1)$ juga benar.

Jika keduanya berhasil, maka $P(n)$ benar untuk setiap $n \\ge n_0$.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'concept',
          title: 'Inti yang perlu diingat',
          text: 'Basis membuktikan "domino pertama jatuh", sedangkan langkah induksi membuktikan "setiap domino menjatuhkan domino berikutnya". Keduanya wajib ada; bila salah satu hilang, kesimpulan tidak sah.',
        },
        {
          kind: 'flip-cards',
          intro: 'Bolak-balik kartu untuk mengingat istilah dasar induksi matematika.',
          cards: [
            {
              front: 'Basis',
              back: 'Langkah memeriksa bahwa pernyataan benar untuk nilai awal $n_0$.',
            },
            {
              front: 'Hipotesis induksi',
              back: 'Pengandaian bahwa pernyataan benar untuk $n=k$, dipakai untuk melangkah ke $n=k+1$.',
            },
            {
              front: 'Langkah induksi',
              back: 'Membuktikan bahwa bila $P(k)$ benar, maka $P(k+1)$ juga benar.',
            },
            {
              front: 'Kesimpulan',
              back: 'Setelah basis dan langkah induksi benar, $P(n)$ benar untuk semua $n \\ge n_0$.',
            },
          ],
        },
      ],
    },
    {
      id: 'representasi',
      kind: 'representasi',
      title: 'Representasi',
      body: 'Bandingkan peran basis dan langkah induksi melalui tabel berikut.',
      blocks: [
        {
          kind: 'table',
          caption: 'Dua pilar induksi matematika',
          headers: ['Bagian', 'Yang dibuktikan', 'Peran'],
          rows: [
            ['Basis', '$P(n_0)$ benar', 'Menyalakan rantai domino'],
            ['Hipotesis', 'Andaikan $P(k)$ benar', 'Batu loncatan menuju $k+1$'],
            ['Langkah induksi', '$P(k) \\Rightarrow P(k+1)$', 'Menjalarkan kebenaran'],
          ],
        },
        {
          kind: 'tabs',
          items: [
            {
              label: 'Simbolik',
              body: 'Basis $P(n_0)$, lalu tunjukkan $P(k) \\Rightarrow P(k+1)$ untuk setiap $k \\ge n_0$.',
            },
            {
              label: 'Domino',
              body: 'Domino pertama jatuh, dan setiap domino menjatuhkan domino berikutnya; seluruh baris pun jatuh.',
            },
            {
              label: 'Tangga',
              body: 'Bila kita bisa naik ke anak tangga pertama dan selalu bisa naik satu langkah, maka setiap anak tangga dapat dicapai.',
            },
          ],
        },
      ],
    },
    {
      id: 'eksplorasi',
      kind: 'eksplorasi',
      title: 'Eksplorasi Pola yang Diinduksi',
      body: 'Sebelum membuktikan, amati pola yang ingin dibuktikan. Eksplorasi barisan membantu melihat dugaan rumus, sedangkan induksi memberi bukti bahwa dugaan itu benar untuk semua bilangan asli.',
      blocks: [
        {
          kind: 'exploration',
          explorationId: 'barisan-pola',
        },
      ],
    },
    {
      id: 'generalisasi',
      kind: 'generalisasi',
      title: 'Menurunkan Rumus Jumlah dengan Induksi',
      body: `Kita buktikan $P(n): 1+2+3+\\cdots+n=\\dfrac{n(n+1)}{2}$ untuk setiap $n \\ge 1$.

**Basis.** Untuk $n=1$: ruas kiri $=1$, sedangkan ruas kanan $=\\dfrac{1\\cdot 2}{2}=1$. Benar.

**Langkah induksi.** Andaikan $P(k)$ benar, yaitu $1+2+\\cdots+k=\\dfrac{k(k+1)}{2}$. Kita tunjukkan $P(k+1)$:

$$1+2+\\cdots+k+(k+1)=\\frac{k(k+1)}{2}+(k+1).$$

Samakan penyebut:

$$=\\frac{k(k+1)}{2}+\\frac{2(k+1)}{2}=\\frac{(k+1)(k+2)}{2}=\\frac{(k+1)\\big((k+1)+1\\big)}{2}.$$

Bentuk terakhir tepat $P(k+1)$. Karena basis dan langkah induksi benar, rumus terbukti untuk semua $n \\ge 1$.`,
    },
    {
      id: 'rumus',
      kind: 'rumus',
      title: 'Rumus yang Sering Dibuktikan',
      body: `**Jumlah $n$ bilangan asli:**
$$1+2+\\cdots+n=\\frac{n(n+1)}{2}.$$

**Jumlah $n$ bilangan kuadrat:**
$$1^2+2^2+\\cdots+n^2=\\frac{n(n+1)(2n+1)}{6}.$$

**Jumlah $n$ bilangan ganjil pertama:**
$$1+3+5+\\cdots+(2n-1)=n^2.$$

**Jumlah $n$ suku deret geometri ($r \\neq 1$):**
$$1+r+r^2+\\cdots+r^{n-1}=\\frac{r^{n}-1}{r-1}.$$`,
      blocks: [
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Hati-hati',
          text: 'Rumus-rumus ini adalah **target** pembuktian, bukan alat yang boleh dipakai sebelum terbukti. Saat membuktikan dengan induksi, gunakan hipotesis induksi, bukan rumus itu sendiri.',
        },
      ],
    },
    {
      id: 'contoh',
      kind: 'contoh',
      title: 'Contoh Terbimbing',
      body: `**Contoh 1.** Buktikan dengan induksi bahwa $1+3+5+\\cdots+(2n-1)=n^2$ untuk setiap $n \\ge 1$.

*Penyelesaian.* Basis $n=1$: ruas kiri $=1=1^2$, benar. Andaikan benar untuk $n=k$, yaitu $1+3+\\cdots+(2k-1)=k^2$. Maka

$$1+3+\\cdots+(2k-1)+(2k+1)=k^2+(2k+1)=(k+1)^2.$$

Jadi $P(k+1)$ benar dan rumus terbukti.

**Contoh 2.** Buktikan bahwa $6^n-1$ habis dibagi $5$ untuk setiap $n \\ge 1$.

*Penyelesaian.* Basis $n=1$: $6^1-1=5$ habis dibagi $5$. Andaikan $6^k-1$ habis dibagi $5$. Perhatikan

$$6^{k+1}-1=6\\cdot 6^k-1=6(6^k-1)+5.$$

Karena $6(6^k-1)$ habis dibagi $5$ (dari hipotesis) dan $5$ juga habis dibagi $5$, maka $6^{k+1}-1$ habis dibagi $5$. Terbukti.`,
      blocks: [
        {
          kind: 'step-reveal',
          intro: 'Ikuti langkah pembuktian $P(n): 1+3+5+\\cdots+(2n-1)=n^2$ satu per satu.',
          steps: [
            {
              title: 'Langkah 1: Basis',
              text: 'Untuk $n=1$, ruas kiri $=1$ dan ruas kanan $=1^2=1$. Basis benar.',
            },
            {
              title: 'Langkah 2: Hipotesis',
              text: 'Andaikan $1+3+\\cdots+(2k-1)=k^2$ benar untuk suatu $k \\ge 1$.',
            },
            {
              title: 'Langkah 3: Tambahkan suku berikutnya',
              text: 'Suku ke-$(k+1)$ adalah $2(k+1)-1=2k+1$. Maka $1+3+\\cdots+(2k-1)+(2k+1)=k^2+(2k+1)$.',
            },
            {
              title: 'Langkah 4: Sederhanakan',
              text: '$k^2+2k+1=(k+1)^2$, tepat bentuk $P(k+1)$. Dengan demikian $P(n)$ benar untuk semua $n \\ge 1$.',
            },
          ],
        },
      ],
    },
    {
      id: 'latihan-dasar',
      kind: 'latihan-dasar',
      title: 'Latihan Dasar',
      level: 'dasar',
    },
    {
      id: 'latihan-cakap',
      kind: 'latihan-cakap',
      title: 'Latihan Cakap',
      level: 'cakap',
    },
    {
      id: 'latihan-mahir',
      kind: 'latihan-mahir',
      title: 'Latihan Mahir',
      level: 'mahir',
    },
    {
      id: 'dunia-nyata',
      kind: 'dunia-nyata',
      title: 'Penerapan di Dunia Nyata',
      body: `Induksi matematika muncul saat kita yakin bahwa suatu pola berlanjut tanpa batas. Dalam ilmu komputer, induksi dipakai membuktikan bahwa algoritma berulang (rekursif) selalu berhenti dan memberi hasil benar untuk setiap ukuran masukan.

Dalam kehidupan sehari-hari, penalaran berantai seperti ini terlihat pada ramalan pertumbuhan bertahap, penyusunan jadwal berulang, dan penataan benda yang mengikuti aturan tetap. Intinya sama: sekali langkah awal benar dan langkah peralihannya terjamin, seluruh rangkaian menjadi pasti.`,
    },
    {
      id: 'kesalahan-umum',
      kind: 'kesalahan-umum',
      title: 'Kesalahan Umum',
      body: `**1. Melupakan basis.** Membuktikan langkah induksi saja tidak cukup. Tanpa basis, pernyataan yang salah pun bisa "terbuktikan" langkahnya.

**2. Tidak memakai hipotesis induksi.** Pada langkah $k \\to k+1$, hipotesis $P(k)$ harus digunakan. Bila tidak, yang dikerjakan hanyalah perhitungan ulang, bukan langkah induksi.

**3. Salah arah.** Mengandaikan $P(k+1)$ lalu menurunkan $P(k)$ bukanlah bukti yang sah. Arah induksi selalu dari $P(k)$ menuju $P(k+1)$.

**4. Menyamakan variabel.** Hindari memakai $n$ sekaligus $k$ pada langkah induksi; gunakan $k$ untuk hipotesis dan target $k+1$.`,
      blocks: [
        {
          kind: 'spot-mistake',
          intro: 'Perhatikan "pembuktian" bahwa $1+2+\\cdots+n=\\dfrac{n(n+1)}{2}$. Satu langkah keliru. Klik langkah itu.',
          steps: [
            'Basis $n=1$: ruas kiri $=1$ dan ruas kanan $=\\dfrac{1\\cdot2}{2}=1$, benar.',
            'Andaikan $1+2+\\cdots+k=\\dfrac{k(k+1)}{2}$ benar untuk suatu $k$.',
            'Akan dibuktikan $1+2+\\cdots+(k+1)=\\dfrac{(k+1)(k+2)}{2}$.',
            'Karena bentuk target sudah tertulis benar, maka rumus terbukti.',
          ],
          wrongIndex: 3,
          explanation: 'Langkah keempat keliru karena target belum dibuktikan; ia baru dinyatakan. Bukti harus menunjukkan bahwa hipotesis $P(k)$ menghasilkan $P(k+1)$, yaitu $\\dfrac{k(k+1)}{2}+(k+1)=\\dfrac{(k+1)(k+2)}{2}$.',
        },
      ],
    },
    {
      id: 'tantangan',
      kind: 'tantangan',
      title: 'Tantangan',
      body: `Ketaksamaan Bernoulli menyatakan bahwa untuk setiap bilangan real $x \\ge -1$ dan setiap bilangan bulat $n \\ge 1$ berlaku

$$(1+x)^n \\ge 1+nx.$$

Buktikan ketaksamaan ini dengan induksi matematika.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'tip',
          title: 'Petunjuk',
          text: 'Setelah menuliskan $(1+x)^{k+1}=(1+x)^k(1+x)$, manfaatkan bahwa $1+x \\ge 0$ sehingga tanda ketaksamaan tidak berubah saat kedua ruas dikalikan. Perhatikan suku $kx^2$ yang muncul dan selalu bernilai tak negatif.',
        },
        {
          kind: 'step-reveal',
          intro: 'Ikuti langkah pembuktian ketaksamaan Bernoulli.',
          steps: [
            {
              title: 'Basis',
              text: 'Untuk $n=1$: $(1+x)^1=1+x$ dan $1+1\\cdot x=1+x$. Kedua ruas sama, sehingga ketaksamaan benar (berlaku sebagai kesamaan).',
            },
            {
              title: 'Hipotesis',
              text: 'Andaikan benar untuk $n=k$, yaitu $(1+x)^k \\ge 1+kx$.',
            },
            {
              title: 'Kalikan dengan $(1+x)$',
              text: 'Karena $x \\ge -1$, maka $1+x \\ge 0$, jadi arah ketaksamaan tetap: $(1+x)^{k+1}=(1+x)^k(1+x) \\ge (1+kx)(1+x)$.',
            },
            {
              title: 'Jabarkan',
              text: '$(1+kx)(1+x)=1+x+kx+kx^2=1+(k+1)x+kx^2$.',
            },
            {
              title: 'Buang suku tak negatif',
              text: 'Karena $kx^2 \\ge 0$, maka $1+(k+1)x+kx^2 \\ge 1+(k+1)x$. Jadi $(1+x)^{k+1} \\ge 1+(k+1)x$, yaitu $P(k+1)$.',
            },
            {
              title: 'Kesimpulan',
              text: 'Basis dan langkah induksi benar, sehingga $(1+x)^n \\ge 1+nx$ untuk semua $n \\ge 1$. Terbukti.',
            },
          ],
        },
      ],
    },
    {
      id: 'refleksi',
      kind: 'refleksi',
      title: 'Refleksi',
      blocks: [
        {
          kind: 'reflection',
          prompts: [
            'Mengapa induksi matematika memerlukan basis **dan** langkah induksi? Apa yang bisa salah bila salah satunya hilang?',
            'Bagaimana kamu tahu bahwa hipotesis induksi sudah benar-benar dipakai pada langkah $k \\to k+1$?',
            'Kapan induksi lebih tepat daripada memeriksa kasus satu per satu?',
          ],
          confidenceLabel: 'Seberapa yakin kamu menyusun langkah induksi dengan benar?',
        },
      ],
    },
    {
      id: 'rangkuman',
      kind: 'rangkuman',
      title: 'Rangkuman',
      blocks: [
        {
          kind: 'table',
          headers: ['Langkah', 'Isi', 'Tujuan'],
          rows: [
            ['Basis', 'Periksa $P(n_0)$', 'Memulai rantai'],
            ['Hipotesis', 'Andaikan $P(k)$ benar', 'Batu loncatan'],
            ['Langkah induksi', 'Buktikan $P(k+1)$ dari $P(k)$', 'Menjalarkan kebenaran'],
            ['Kesimpulan', '$P(n)$ benar untuk semua $n \\ge n_0$', 'Hasil akhir'],
          ],
        },
        {
          kind: 'table',
          caption: 'Rumus yang lazim dibuktikan',
          math: true,
          headers: ['Jumlah', 'Hasil'],
          rows: [
            ['1+2+\\cdots+n', '\\dfrac{n(n+1)}{2}'],
            ['1^2+2^2+\\cdots+n^2', '\\dfrac{n(n+1)(2n+1)}{6}'],
            ['1+3+\\cdots+(2n-1)', 'n^2'],
          ],
        },
      ],
    },
    {
      id: 'evaluasi',
      kind: 'evaluasi',
      title: 'Evaluasi',
      body: '**Tiket keluar.** (1) Tuliskan dua syarat yang harus dipenuhi agar induksi matematika sah. (2) Jelaskan peran hipotesis induksi pada langkah $k \\to k+1$. Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Induksi Matematika** untuk latihan tambahan.',
    },
  ],
};

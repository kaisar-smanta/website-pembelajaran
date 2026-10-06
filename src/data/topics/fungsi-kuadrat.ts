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
    { text: 'Memodelkan dan menyelesaikan masalah optimasi dengan fungsi kuadrat.' },
  ],
  explorations: ['kuadrat-parameter'],
  applications: ['regresi-nilai-ujian'],
  sections: [
    {
      id: 'tujuan',
      kind: 'tujuan',
      title: 'Tujuan Pembelajaran',
      body: `Setelah mempelajari topik ini, peserta didik dapat menjelaskan bentuk umum fungsi kuadrat, menentukan akar, sumbu simetri, dan titik puncak, menggambar grafik parabola, menganalisis pengaruh koefisien dan diskriminan terhadap grafik, serta memodelkan masalah kontekstual seperti luas dan laba maksimum.`,
    },
    {
      id: 'pemantik',
      kind: 'pemantik',
      title: 'Pertanyaan Pemantik',
      body: `Sebuah bola ditendang sehingga ketinggiannya (dalam meter) setelah $t$ detik mengikuti

$$h(t) = -5t^{2} + 20t.$$

Pada awalnya bola naik, lalu mencapai titik tertinggi, kemudian turun. Pada detik ke berapa bola berada di titik tertinggi, dan berapa tingginya? Berapa lama bola berada di udara?`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat jawaban pertanyaan pemantik',
          text: `Lengkapi kuadrat: $h(t)=-5(t^{2}-4t)=-5\\big((t-2)^{2}-4\\big)=-5(t-2)^{2}+20$. Karena $(t-2)^{2}\\geq 0$, nilai terbesar $h$ adalah $20$ pada $t=2$. Jadi bola tertinggi $20$ m pada detik ke-$2$. Bola menyentuh tanah saat $h(t)=0$: $-5t(t-4)=0$, sehingga $t=0$ atau $t=4$; bola berada di udara selama $4$ detik.`,
        },
      ],
    },
    {
      id: 'prasyarat',
      kind: 'prasyarat',
      title: 'Prasyarat',
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- pemfaktoran, misalnya $x^{2}-5x+6=(x-2)(x-3)$;
- melengkapi kuadrat sempurna, misalnya $x^{2}+4x+1=(x+2)^{2}-3$;
- menggambar titik $(x,y)$ pada bidang koordinat.`,
    },
    {
      id: 'konteks',
      kind: 'konteks',
      title: 'Situasi dan Konteks',
      body: `Lintasan bola, semprotan air mancur, dan lengkung jembatan berbentuk parabola. Dalam bisnis, laba sebagai fungsi banyak barang sering membentuk parabola yang naik lalu turun. Semua itu dimodelkan oleh fungsi kuadrat.

Kata kunci pada fungsi kuadrat adalah **titik puncak**: nilai terbesar (maksimum) atau terkecil (minimum). Menemukannya memungkinkan kita menjawab pertanyaan seperti "berapa harga yang memberi laba terbesar?"`,
    },
    {
      id: 'konsep',
      kind: 'konsep',
      title: 'Konsep Inti: Bentuk Fungsi Kuadrat',
      body: `Fungsi kuadrat adalah fungsi yang dapat ditulis dalam bentuk

$$f(x) = ax^{2} + bx + c, \\qquad a \\neq 0.$$

Grafiknya berupa **parabola**. Tanda $a$ menentukan arah bukaan:
- jika $a > 0$, parabola terbuka **ke atas** dan memiliki titik puncak **minimum**;
- jika $a < 0$, parabola terbuka **ke bawah** dan memiliki titik puncak **maksimum**.

Nilai $c = f(0)$ adalah titik potong grafik dengan sumbu-$y$. Semakin besar $\\lvert a \\rvert$, semakin "sempit" parabolanya.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'concept',
          title: 'Inti yang perlu diingat',
          text: '$a$ mengatur arah dan lebar parabola, sedangkan $b$ dan $c$ menggeser posisinya. Parabola selalu simetris terhadap garis vertikal yang melalui titik puncaknya.',
        },
      ],
    },
    {
      id: 'representasi',
      kind: 'representasi',
      title: 'Representasi',
      body: `Untuk $f(x)=x^{2}-6x+8$, kita dapat menyajikan fungsi melalui tabel nilai, grafik, dan bentuk aljabar yang setara.

$$f(x) = x^{2}-6x+8 = (x-2)(x-4) = (x-3)^{2}-1.$$

Ketiga bentuk itu menyingkap informasi berbeda: bentuk faktor menunjukkan akar, sedangkan bentuk kuadrat sempurna menunjukkan titik puncak.`,
      blocks: [
        {
          kind: 'table',
          caption: 'Tabel nilai $f(x)=x^{2}-6x+8$',
          headers: ['$x$', '0', '1', '2', '3', '4', '5'],
          rows: [
            ['$f(x)$', '8', '3', '0', '-1', '0', '3'],
          ],
        },
      ],
    },
    {
      id: 'eksplorasi',
      kind: 'eksplorasi',
      title: 'Eksplorasi',
      body: `Gunakan penggeser untuk mengubah nilai $a$, $b$, dan $c$ pada $f(x)=ax^{2}+bx+c$. Amati bagaimana arah bukaan, lebar parabola, sumbu simetri, dan titik puncak berubah. Catat pola hubungan antara koefisien dan bentuk grafik.`,
      blocks: [{ kind: 'exploration', explorationId: 'kuadrat-parameter' }],
    },
    {
      id: 'generalisasi',
      kind: 'generalisasi',
      title: 'Menemukan Sumbu Simetri dan Titik Puncak',
      body: `Kita ubah bentuk umum menjadi bentuk kuadrat sempurna (bentuk puncak). Keluarkan $a$ dari dua suku pertama:

$$f(x) = a\\left(x^{2}+\\frac{b}{a}x\\right)+c = a\\left(x+\\frac{b}{2a}\\right)^{2} - \\frac{b^{2}}{4a} + c.$$

Karena $\\left(x+\\frac{b}{2a}\\right)^{2} \\geq 0$, nilai $f$ paling kecil (bila $a>0$) atau paling besar (bila $a<0$) tercapai ketika $x = -\\frac{b}{2a}$. Inilah **sumbu simetri**, dan titik puncaknya adalah

$$\\left(-\\frac{b}{2a},\\ f\\!\\left(-\\frac{b}{2a}\\right)\\right).$$

Bentuk puncak fungsi kuadrat ditulis $f(x)=a(x-h)^{2}+k$ dengan $h=-\\dfrac{b}{2a}$ dan $k=f(h)$.`,
    },
    {
      id: 'rumus',
      kind: 'rumus',
      title: 'Akar dan Diskriminan',
      body: `Akar fungsi kuadrat adalah nilai $x$ dengan $f(x)=0$, yaitu titik potong grafik dengan sumbu-$x$. Dengan melengkapi kuadrat pada $ax^{2}+bx+c=0$ diperoleh rumus abc:

$$x_{1,2} = \\frac{-b \\pm \\sqrt{b^{2}-4ac}}{2a}.$$

Bilangan $D = b^{2}-4ac$ disebut **diskriminan** dan menentukan banyak akar real:
- $D > 0$: dua akar real berbeda (grafik memotong sumbu-$x$ di dua titik);
- $D = 0$: satu akar real kembar (grafik menyinggung sumbu-$x$);
- $D < 0$: tidak ada akar real (grafik tidak menyentuh sumbu-$x$).

Nilai puncak juga dapat dinyatakan dengan diskriminan: $k = -\\dfrac{D}{4a}$.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Hati-hati',
          text: 'Sumbu simetri adalah garis $x=-\\dfrac{b}{2a}$, bukan nilai $x$ itu saja. Tanda negatif di depan $b$ sering terlewat; periksa kembali sebelum menggambar.',
        },
      ],
    },
    {
      id: 'contoh',
      kind: 'contoh',
      title: 'Contoh Terbimbing',
      body: `**Contoh 1.** Gambarkan ciri-ciri grafik $f(x)=x^{2}-6x+8$.

*Penyelesaian.* Faktorkan: $f(x)=(x-2)(x-4)$, sehingga akarnya $x=2$ dan $x=4$. Sumbu simetri $x=-\\dfrac{-6}{2\\cdot1}=3$. Nilai puncak $f(3)=9-18+8=-1$. Titik puncaknya $(3,-1)$, terbuka ke atas karena $a=1>0$. Titik potong sumbu-$y$ adalah $(0,8)$.

**Contoh 2.** Tentukan titik puncak $f(x)=-2x^{2}+4x+6$.

*Penyelesaian.* Sumbu simetri $x=-\\dfrac{4}{2\\cdot(-2)}=1$. Nilai puncak $f(1)=-2+4+6=8$. Jadi titik puncak $(1,8)$, parabola terbuka ke bawah. Akarnya: $-2(x^{2}-2x-3)=-2(x-3)(x+1)=0$, yaitu $x=3$ dan $x=-1$.

**Contoh 3 (optimasi).** Seutas kawat panjang $40$ m akan dibuat pagar persegi panjang. Tentukan ukuran agar luasnya maksimum.

*Penyelesaian.* Misal panjang $x$, maka lebarnya $20-x$ (karena keliling $2(x+\\text{lebar})=40$). Luas $L(x)=x(20-x)=20x-x^{2}$, yaitu fungsi kuadrat dengan $a=-1<0$. Puncaknya di $x=-\\dfrac{20}{2\\cdot(-1)}=10$, sehingga $L(10)=10\\cdot10=100$. Luas maksimum $100$ m² dicapai saat persegi berukuran $10 \\times 10$ m.`,
    },
    {
      id: 'latihan-dasar',
      kind: 'latihan-dasar',
      title: 'Latihan Dasar',
      level: 'dasar',
      body: `1. Tentukan akar-akar $f(x)=x^{2}-5x+6$.

2. Tentukan sumbu simetri $f(x)=x^{2}-8x+7$.

3. Tentukan titik puncak $f(x)=x^{2}+2x-3$.

4. Hitung diskriminan $f(x)=2x^{2}-3x+5$ dan tentukan banyak akar realnya.

5. Tentukan akar dan titik puncak $f(x)=-x^{2}+4$.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. $x^{2}-5x+6=(x-2)(x-3)$, akarnya $x=2$ dan $x=3$.
2. $x=-\\dfrac{-8}{2}=4$.
3. $x=-\\dfrac{2}{2}=-1$, $f(-1)=1-2-3=-4$, jadi titik puncak $(-1,-4)$.
4. $D=(-3)^{2}-4\\cdot2\\cdot5=9-40=-31<0$, sehingga tidak ada akar real.
5. $-x^{2}+4=0 \\Rightarrow x^{2}=4 \\Rightarrow x=\\pm2$. Sumbu simetri $x=0$, titik puncak $(0,4)$ (maksimum).`,
        },
      ],
    },
    {
      id: 'latihan-cakap',
      kind: 'latihan-cakap',
      title: 'Latihan Cakap',
      level: 'cakap',
      body: `1. Tentukan fungsi kuadrat yang grafiknya memotong sumbu-$x$ di $x=2$ dan $x=3$ serta melalui $(0,6)$.

2. Tentukan fungsi kuadrat dengan titik puncak $(2,-1)$ yang melalui $(0,3)$.

3. Tentukan nilai minimum dan daerah hasil $f(x)=x^{2}-6x+10$.

4. Untuk $-1 \\leq x \\leq 3$, tentukan daerah hasil $f(x)=x^{2}-2x-3$.

5. Laba suatu usaha (dalam ribu rupiah) mengikuti $P(x)=-x^{2}+40x-300$ dengan $x$ banyak barang. Tentukan laba maksimum dan rentang $x$ agar usaha tidak merugi.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. $f(x)=a(x-2)(x-3)$. Substitusi $(0,6)$: $6=a\\cdot(-2)(-3)=6a \\Rightarrow a=1$. Jadi $f(x)=x^{2}-5x+6$.
2. $f(x)=a(x-2)^{2}-1$. Substitusi $(0,3)$: $3=4a-1 \\Rightarrow a=1$. Jadi $f(x)=(x-2)^{2}-1=x^{2}-4x+3$.
3. $x=-\\dfrac{-6}{2}=3$, $f(3)=9-18+10=1$. Minimum $1$, daerah hasil $y\\geq1$.
4. $f(-1)=1+2-3=0$, $f(3)=9-6-3=0$, dan titik puncak di $x=1$ dengan $f(1)=1-2-3=-4$. Jadi daerah hasil $-4 \\leq y \\leq 0$.
5. Puncak $x=-\\dfrac{40}{2\\cdot(-1)}=20$, $P(20)=-400+800-300=100$. Laba maksimum Rp100.000. Tidak merugi saat $P(x)\\geq0$: $x^{2}-40x+300\\leq0 \\Rightarrow (x-10)(x-30)\\leq0$, jadi $10\\leq x\\leq30$.`,
        },
      ],
    },
    {
      id: 'latihan-mahir',
      kind: 'latihan-mahir',
      title: 'Latihan Mahir',
      level: 'mahir',
      body: `1. Tentukan nilai $m$ agar $f(x)=x^{2}+(m-2)x+9$ memiliki tepat satu akar real.

2. Buktikan dengan melengkapi kuadrat bahwa titik puncak $f(x)=ax^{2}+bx+c$ terletak di $x=-\\dfrac{b}{2a}$.

3. Ketinggian sebuah roket mainan $h(t)=-5t^{2}+30t$ meter pada detik ke-$t$. Tentukan tinggi maksimum dan selang waktu ketika roket berada pada ketinggian minimal $40$ m.

4. Jika $a>0$ dan $D<0$, jelaskan mengapa $f(x)=ax^{2}+bx+c$ selalu bernilai positif untuk setiap $x$.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat pembahasan',
          text: `1. Tepat satu akar berarti $D=0$: $(m-2)^{2}-4\\cdot1\\cdot9=0 \\Rightarrow (m-2)^{2}=36 \\Rightarrow m-2=\\pm6$. Jadi $m=8$ atau $m=-4$.
2. Tulis $f(x)=a\\left(x^{2}+\\dfrac{b}{a}x\\right)+c=a\\left(x+\\dfrac{b}{2a}\\right)^{2}-\\dfrac{b^{2}}{4a}+c$. Karena $(x+\\frac{b}{2a})^{2}\\geq0$, untuk $a>0$ nilai terkecil terjadi saat $x+\\frac{b}{2a}=0$, yaitu $x=-\\frac{b}{2a}$ (untuk $a<0$ ini nilai terbesar). Terbukti.
3. Puncak $t=-\\dfrac{30}{2\\cdot(-5)}=3$, $h(3)=-45+90=45$ m. Untuk $h\\geq40$: $-5t^{2}+30t\\geq40 \\Rightarrow t^{2}-6t+8\\leq0 \\Rightarrow (t-2)(t-4)\\leq0$, jadi $2\\leq t\\leq4$ detik.
4. Dengan melengkapi kuadrat, $f(x)=a\\left(x+\\dfrac{b}{2a}\\right)^{2}-\\dfrac{D}{4a}$. Karena $a>0$, suku pertama $\\geq0$; karena $D<0$ maka $-\\dfrac{D}{4a}>0$. Jumlah keduanya selalu positif.`,
        },
      ],
    },
    {
      id: 'dunia-nyata',
      kind: 'dunia-nyata',
      title: 'Penerapan di Dunia Nyata',
      body: `Fungsi kuadrat dipakai untuk menentukan tinggi maksimum proyektil, jari-jari kolam, luas lahan maksimum dengan keliling tetap, serta harga jual yang memberi laba terbesar. Prinsipnya sama: susun model kuadrat, temukan titik puncaknya, lalu periksa apakah jawabnya masuk akal dalam konteks.

Untuk melihat contoh data nyata, lihat [Apakah Waktu Belajar Berkaitan dengan Nilai?](/aplikasi/regresi-nilai-ujian).`,
    },
    {
      id: 'kesalahan-umum',
      kind: 'kesalahan-umum',
      title: 'Kesalahan Umum',
      body: `**1. Salah menentukan sumbu simetri.** Nilainya $x=-\\dfrac{b}{2a}$, bukan $x=\\dfrac{b}{2a}$. Perhatikan tanda negatifnya.

**2. Menukar peran $a$ dan tanda diskriminan.** Arah bukaan ditentukan $a$, sedangkan banyak akar ditentukan $D$. Keduanya saling bebas.

**3. Menganggap titik puncak selalu maksimum.** Titik puncak maksimum hanya bila $a<0$; bila $a>0$ titik puncak adalah minimum.

**4. Menyamakan nilai puncak dengan nilai $c$.** Nilai $c=f(0)$ hanyalah titik potong sumbu-$y$, belum tentu puncak.`,
    },
    {
      id: 'refleksi',
      kind: 'refleksi',
      title: 'Refleksi',
      body: `1. Informasi apa yang langsung kamu peroleh dari tanda $a$ dan nilai $c$ sebelum menghitung?
2. Bagaimana bentuk kuadrat sempurna membantumu menemukan titik puncak tanpa rumus?
3. Berikan satu situasi nyata yang titik puncaknya berarti "terbaik".`,
    },
    {
      id: 'rangkuman',
      kind: 'rangkuman',
      title: 'Rangkuman',
      blocks: [
        {
          kind: 'table',
          headers: ['Konsep', 'Rumus'],
          rows: [
            ['Bentuk umum', '$f(x)=ax^{2}+bx+c,\\ a\\neq0$'],
            ['Sumbu simetri', '$x=-\\dfrac{b}{2a}$'],
            ['Titik puncak', '$\\left(-\\dfrac{b}{2a},\\ -\\dfrac{D}{4a}\\right)$'],
            ['Bentuk puncak', '$f(x)=a(x-h)^{2}+k$'],
            ['Akar (rumus abc)', '$x_{1,2}=\\dfrac{-b\\pm\\sqrt{b^{2}-4ac}}{2a}$'],
            ['Diskriminan', '$D=b^{2}-4ac$'],
          ],
        },
      ],
    },
    {
      id: 'evaluasi',
      kind: 'evaluasi',
      title: 'Evaluasi',
      body: `Kerjakan kuis topik ini untuk memeriksa pemahamanmu. Buka halaman [Latihan & Asesmen](/latihan) lalu pilih topik **Fungsi Kuadrat**.`,
    },
  ],
};

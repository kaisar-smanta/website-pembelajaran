import type { Topic } from '@/types/content';

export const transformasiFungsi: Topic = {
  id: 'transformasi-fungsi',
  slug: 'transformasi-fungsi',
  title: 'Transformasi Fungsi',
  subtitle: 'Menggeser, mencerminkan, dan meregangkan grafik',
  grade: 'XI',
  phase: 'F',
  element: 'aljabar-fungsi',
  status: 'lengkap',
  estimatedMinutes: 80,
  summary:
    'Mempelajari translasi, refleksi, dan dilatasi grafik fungsi serta pengaruh perubahan parameter terhadap bentuk kurva.',
  description:
    'Transformasi fungsi menjelaskan bagaimana grafik berubah ketika rumusnya dimodifikasi. Mengganti $f(x)$ menjadi $f(x)+k$ menggeser grafik secara vertikal, sedangkan $f(x-h)$ menggesernya secara horizontal. Tanda negatif mencerminkan grafik terhadap sumbu, dan faktor pengali meregangkan atau memampatkannya. Topik ini menurunkan aturan-aturan tersebut, menelusuri perubahan koordinat titik, membahas urutan transformasi, lalu menggunakannya untuk memodelkan situasi nyata.',
  keywords: [
    'transformasi fungsi',
    'translasi',
    'refleksi',
    'dilatasi',
    'peregangan grafik',
    'penyusutan',
    'pergeseran',
  ],
  prerequisites: ['fungsi-kuadrat'],
  relatedTopics: ['komposisi-fungsi', 'fungsi-invers'],
  prerequisiteKnowledge: [
    'Menggambar grafik fungsi dasar seperti $y=x^2$, $y=x^3$, dan $y=2x+1$',
    'Mensubstitusi bentuk aljabar ke dalam fungsi',
    'Membaca koordinat titik pada bidang Cartesius',
  ],
  objectives: [
    { text: 'Peserta didik dapat menjelaskan pengaruh translasi $f(x)+k$ dan $f(x-h)$ pada grafik fungsi.' },
    { text: 'Peserta didik dapat menentukan hasil refleksi grafik terhadap sumbu-$x$ dan sumbu-$y$.' },
    { text: 'Peserta didik dapat menjelaskan pengaruh dilatasi vertikal $a f(x)$ dan horizontal $f(kx)$.' },
    { text: 'Peserta didik dapat menentukan urutan transformasi yang menghasilkan grafik tertentu.' },
    { text: 'Peserta didik dapat memodelkan situasi nyata menggunakan transformasi fungsi.' },
  ],
  applications: ['peta-dan-skala'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menjelaskan pengaruh translasi, refleksi, dan dilatasi pada grafik fungsi, menentukan rumus fungsi hasil transformasi, menelusuri perubahan koordinat titik, serta memodelkan situasi sederhana menggunakan transformasi fungsi.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      body: `Perhatikan grafik $y=x^2$ yang berbentuk parabola dengan titik puncak di $(0,0)$.
Sekarang bayangkan grafik itu digeser ke kanan sejauh $2$ satuan dan ke atas sejauh $3$ satuan. Di manakah titik puncaknya sekarang?

Seorang siswa menebak bahwa rumusnya menjadi $y=(x+2)^2+3$ karena "kanan dan atas berarti positif". Apakah tebakan ini benar? Mari kita periksa bersama.`,
      blocks: [
        {
          kind: "prediction",
          prompt: "Setelah digeser ke kanan $2$ satuan lalu ke atas $3$ satuan, rumus dan titik puncak manakah yang benar?",
          options: [
            "$y=(x+2)^2+3$ dengan puncak $(-2,3)$",
            "$y=(x-2)^2+3$ dengan puncak $(2,3)$",
            "$y=(x-2)^2-3$ dengan puncak $(2,-3)$",
          ],
          reveal: `Tebakan "kanan dan atas berarti positif" itu **salah**. Menggeser ke kanan sejauh $2$ satuan menghasilkan $y=(x-2)^2$, bukan $(x+2)^2$. Selanjutnya digeser ke atas $3$ satuan menjadi
$$y = (x-2)^2 + 3.$$
Titik puncaknya berada di $(2,3)$. Periksa: untuk $x=2$ diperoleh $y=0+3=3$. Inilah alasan pergeseran horizontal "berlawanan tanda" dari yang diduga.`,
          saveLabel: "Simpan dugaan",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- menggambar grafik fungsi dasar seperti $y=x^2$ dan $y=x^3$;
- membaca koordinat titik pada bidang Cartesius;
- mensubstitusi bentuk aljabar, misalnya menghitung $f(x-2)$ untuk $f(x)=x^2$;
- mengembangkan bentuk $(x-h)^2$ menjadi bentuk umum kuadrat.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Desainer sering menggeser dan meregangkan kurva untuk menyesuaikan tampilan. Insinyur memodelkan lintasan bola dengan menggeser dan meregangkan parabola dasar. Ketika sebuah gelombang dinaikkan, direntangkan, atau dibalik, kita sedang menerapkan transformasi fungsi.
Dengan memahami aturan transformasi, kita dapat menuliskan rumus baru tanpa harus menghitung ulang setiap titik. Cukup mengenali bagaimana grafik dasar berubah.`,
    },
    {
      id: "translasi",
      kind: "konsep",
      title: "Translasi: Pergeseran Grafik",
      body: `Translasi adalah pergeseran grafik tanpa mengubah bentuknya.

**Geser vertikal.** Grafik $y=f(x)+k$ diperoleh dari $y=f(x)$ dengan menggeser ke atas sejauh $k$ satuan bila $k>0$, dan ke bawah sejauh $\\lvert k\\rvert$ satuan bila $k<0$. Setiap titik $(a,b)$ berpindah menjadi $(a, b+k)$.

**Geser horizontal.** Grafik $y=f(x-h)$ diperoleh dari $y=f(x)$ dengan menggeser ke kanan sejauh $h$ satuan bila $h>0$, dan ke kiri sejauh $\\lvert h\\rvert$ satuan bila $h<0$. Setiap titik $(a,b)$ berpindah menjadi $(a+h, b)$.

Perhatikan bahwa pada pergeseran horizontal, tanda di dalam rumus **berlawanan** dengan arah pergeseran. Menggeser ke kanan berarti mengurangi $x$ di dalam fungsi.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "Menggeser ke kanan $h$ satuan memakai $f(x-h)$, bukan $f(x+h)$. Inilah sumber kesalahan yang paling sering terjadi.",
        },
      ],
    },
    {
      id: "pencerminan",
      kind: "konsep",
      title: "Refleksi: Pencerminan Grafik",
      body: `Refleksi membalik grafik terhadap sebuah sumbu.

**Terhadap sumbu-$x$.** Grafik $y=-f(x)$ adalah cerminan $y=f(x)$ terhadap sumbu-$x$. Setiap titik $(a,b)$ menjadi $(a,-b)$. Nilai fungsi berganti tanda.

**Terhadap sumbu-$y$.** Grafik $y=f(-x)$ adalah cerminan $y=f(x)$ terhadap sumbu-$y$. Setiap titik $(a,b)$ menjadi $(-a,b)$. Variabel $x$ berganti tanda.

Contoh dengan $f(x)=2x+1$:
- $y=-f(x)=-2x-1$ (dicerminkan terhadap sumbu-$x$);
- $y=f(-x)=-2x+1$ (dicerminkan terhadap sumbu-$y$).

Kedua hasil tersebut berbeda, sehingga kedua jenis refleksi tidak boleh dipertukarkan.`,
    },
    {
      id: "dilatasi",
      kind: "konsep",
      title: "Dilatasi: Peregangan dan Penyusutan",
      body: `Dilatasi mengubah ukuran grafik tanpa memindahkannya dari titik acuan.

**Dilatasi vertikal.** Grafik $y=a\\,f(x)$ diperoleh dengan mengalikan setiap nilai fungsi dengan $a$. Jika $a>1$ grafik meregang vertikal; jika $0<a<1$ grafik menyusut vertikal. Setiap titik $(a,b)$ menjadi $(a, a\\,b)$.

**Dilatasi horizontal.** Grafik $y=f(kx)$ diperoleh dengan mengganti $x$ menjadi $kx$. Jika $k>1$ grafik menyusut horizontal (memampat); jika $0<k<1$ grafik meregang horizontal. Setiap titik $(p,q)$ menjadi $\\left(\\dfrac{p}{k}, q\\right)$.

Sebagai contoh, dengan $f(x)=x^2$:
- $y=2f(x)=2x^2$ meregang vertikal dengan faktor $2$;
- $y=f(2x)=(2x)^2=4x^2$ menyusut horizontal dengan faktor $\\dfrac{1}{2}$.

Perhatikan bahwa $y=2x^2$ dan $y=4x^2$ memiliki bentuk berbeda: yang pertama lebih landai, yang kedua lebih sempit.`,
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Perubahan Koordinat Titik",
      body: "Transformasi dapat dilacak melalui perubahan titik. Misalkan titik $(a,b)$ terletak pada grafik $y=f(x)$.",
      blocks: [
        {
          kind: "table",
          caption: "Pemetaan titik $(a,b)$ pada grafik $y=f(x)$",
          headers: [
            "Bentuk baru",
            "Jenis transformasi",
            "Titik baru",
          ],
          rows: [
            [
              "$y=f(x)+k$",
              "geser vertikal $k$",
              "$(a,\\,b+k)$",
            ],
            [
              "$y=f(x-h)$",
              "geser horizontal $h$",
              "$(a+h,\\,b)$",
            ],
            [
              "$y=-f(x)$",
              "refleksi sumbu-$x$",
              "$(a,\\,-b)$",
            ],
            [
              "$y=f(-x)$",
              "refleksi sumbu-$y$",
              "$(-a,\\,b)$",
            ],
            [
              "$y=a\\,f(x)$",
              "dilatasi vertikal $a$",
              "$(a,\\,a\\,b)$",
            ],
            [
              "$y=f(kx)$",
              "dilatasi horizontal $\\tfrac{1}{k}$",
              "$\\left(\\tfrac{a}{k},\\,b\\right)$",
            ],
          ],
        },
        {
          kind: "match",
          intro: "Cocokkan setiap bentuk hasil transformasi dengan jenisnya.",
          pairs: [
            {
              left: "$y=f(x)+k$",
              right: "Geser vertikal sejauh $k$",
            },
            {
              left: "$y=f(x-h)$",
              right: "Geser horizontal sejauh $h$",
            },
            {
              left: "$y=-f(x)$",
              right: "Refleksi terhadap sumbu-$x$",
            },
            {
              left: "$y=f(kx)$",
              right: "Dilatasi horizontal dengan faktor $\\tfrac{1}{k}$",
            },
          ],
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Simbolik",
              body: "Hasil translasi $y=x^2$ ditulis $y=(x-2)^2+3=x^2-4x+7$.",
            },
            {
              label: "Tabel",
              body: "Setiap titik $(a,b)$ pada $y=x^2$ berpindah menjadi $(a+2,\\,b+3)$ pada grafik baru.",
            },
            {
              label: "Grafik",
              body: "Parabola dasar digeser ke kanan $2$ satuan lalu ke atas $3$ satuan, dengan puncak baru di $(2,3)$.",
            },
          ],
        },
      ],
    },
    {
      id: "rumus-urutan",
      kind: "generalisasi",
      title: "Bentuk Umum dan Urutan Transformasi",
      body: `Berbagai transformasi dapat digabungkan dalam satu bentuk umum:

$$y = a\\,f\\big(k(x-h)\\big) + c.$$

Di sini $a$ mengatur peregangan vertikal dan refleksi terhadap sumbu-$x$, $k$ mengatur peregangan horizontal, $h$ menggeser horizontal, dan $c$ menggeser vertikal.

**Urutan transformasi penting diperhatikan.** Menggeser lalu meregangkan tidak sama dengan meregangkan lalu menggeser. Sebagai contoh, mulai dari $f(x)=x^2$:
- meregangkan vertikal dengan faktor $2$ lalu menggeser ke atas $3$ menghasilkan $2x^2+3$;
- menggeser ke atas $3$ lalu meregangkan vertikal dengan faktor $2$ menghasilkan $2(x^2+3)=2x^2+6$.

Kedua hasil berbeda. Karena itu, transformasi pada sumbu yang sama sebaiknya dikerjakan dengan urutan yang jelas.`,
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi Transformasi Fungsi",
      body: "Selidiki bagaimana $a$, $h$, dan $k$ pada $y=a\\,f(x-h)+k$ menggeser, mencerminkan, dan meregangkan grafik dasar $f(x)=x^{2}$.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "transformasi-fungsi-sim",
        },
      ],
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      body: `**Contoh 1 (translasi).** Sketsakan grafik $y=(x-2)^2+3$ dari grafik dasar $y=x^2$, lalu tentukan titik puncaknya.

*Penyelesaian.* Grafik $y=x^2$ digeser ke kanan $2$ satuan karena bentuk $x-2$, kemudian ke atas $3$ satuan. Titik puncak $(0,0)$ berpindah menjadi $(2,3)$. Periksa dengan mengembangkan bentuknya:
$$(x-2)^2+3 = x^2-4x+4+3 = x^2-4x+7.$$
Sumbu simetrinya $x=\\dfrac{4}{2}=2$ dan nilai minimumnya $y=2^2-4(2)+7=3$. Benar.

**Contoh 2 (refleksi).** Tentukan hasil pencerminan $y=2x+1$ terhadap sumbu-$x$ dan terhadap sumbu-$y$.

*Penyelesaian.* Terhadap sumbu-$x$: $y=-(2x+1)=-2x-1$. Terhadap sumbu-$y$: $y=2(-x)+1=-2x+1$.

**Contoh 3 (dilatasi).** Grafik $y=x^2$ melalui titik $(2,4)$. Tentukan titik padanannya pada grafik $y=2f(x)$ dan pada grafik $y=f(2x)$.

*Penyelesaian.*
- $y=2f(x)=2x^2$: titik $(2,4)$ menjadi $(2,\\,2\\cdot4)=(2,8)$. Periksa: $2(2)^2=8$.
- $y=f(2x)=4x^2$: titik $(2,4)$ menjadi $\\left(\\dfrac{2}{2},\\,4\\right)=(1,4)$. Periksa: $4(1)^2=4$.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Mari sketsakan $y=(x-2)^2+3$ dari grafik dasar $y=x^2$, satu langkah sekaligus.",
          steps: [
            {
              title: "Kenali bentuknya",
              text: "Bentuk $y=(x-2)^2+3$ berasal dari $y=x^2$ dengan $h=2$ dan $k=3$.",
            },
            {
              title: "Geser horizontal",
              text: "Faktor $x-2$ berarti grafik digeser ke kanan $2$ satuan, sehingga puncak $(0,0)$ menjadi $(2,0)$.",
            },
            {
              title: "Geser vertikal",
              text: "Tambahan $+3$ menggeser grafik ke atas $3$ satuan, sehingga puncak menjadi $(2,3)$.",
            },
            {
              title: "Periksa dengan bentuk umum",
              text: "Dikembangkan: $(x-2)^2+3=x^2-4x+7$. Sumbu simetri $x=2$ dan nilai minimum $f(2)=3$, cocok dengan puncak $(2,3)$.",
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
      body: `Transformasi fungsi dipakai untuk menyesuaikan model dengan data nyata. Lintasan bola di udara menyerupai parabola dasar yang digeser dan diregangkan. Grafik pendapatan dapat digeser naik saat biaya tetap berkurang. Desain logo dan animasi memanfaatkan peregangan serta pencerminan bentuk dasar.
Dengan menguasai transformasi, kita dapat menyusun model yang tepat tanpa harus membangun grafik dari nol setiap kali parameter berubah.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Salah tanda pada pergeseran horizontal.** Menggeser ke kanan $2$ satuan memakai $(x-2)^2$, bukan $(x+2)^2$.
**2. Menukar refleksi sumbu-$x$ dan sumbu-$y$.** $y=-f(x)$ mencerminkan terhadap sumbu-$x$, sedangkan $y=f(-x)$ terhadap sumbu-$y$. Keduanya berbeda untuk $f(x)=2x+1$.
**3. Menganggap $a f(x)$ selalu meregang horizontal.** Faktor di luar fungsi, yaitu $a f(x)$, mengubah arah **vertikal**; faktor di dalam fungsi, yaitu $f(kx)$, mengubah arah **horizontal**.
**4. Mengabaikan urutan transformasi.** Menggeser lalu meregangkan tidak sama dengan meregangkan lalu menggeser.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Seorang siswa menggeser grafik $y=x^2$ ke kanan $2$ satuan. Klik langkah yang keliru.",
          steps: [
            "Grafik $y=x^2$ akan digeser ke kanan sejauh $2$ satuan.",
            "Geser horizontal ke kanan berarti mengganti $x$ dengan $x+2$ di dalam fungsi.",
            "Jadi rumus grafik barunya $y=(x+2)^2$.",
          ],
          wrongIndex: 1,
          explanation: "Pergeseran ke kanan \"berlawanan tanda\": ganti $x$ dengan $x-h$, yaitu $x-2$. Rumus yang benar $y=(x-2)^2$.",
        },
      ],
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Renungkan bagaimana menggeser dan meregangkan grafik mengubah tampilan sebuah fungsi.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Mengapa pergeseran horizontal \"berlawanan tanda\" dari yang mungkin kamu duga?",
            "Bagaimana kamu membedakan dilatasi vertikal dan horizontal hanya dari posisi angka pada rumus?",
            "Berikan contoh nyata di sekitarmu yang bentuknya dapat dijelaskan sebagai hasil transformasi bentuk dasar.",
          ],
          confidenceLabel: "Seberapa yakin kamu menentukan rumus hasil transformasi?",
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
            "Transformasi",
            "Bentuk",
            "Pengaruh pada titik $(a,b)$",
          ],
          rows: [
            [
              "Geser vertikal",
              "$y=f(x)+k$",
              "$(a,\\,b+k)$",
            ],
            [
              "Geser horizontal",
              "$y=f(x-h)$",
              "$(a+h,\\,b)$",
            ],
            [
              "Refleksi sumbu-$x$",
              "$y=-f(x)$",
              "$(a,\\,-b)$",
            ],
            [
              "Refleksi sumbu-$y$",
              "$y=f(-x)$",
              "$(-a,\\,b)$",
            ],
            [
              "Dilatasi vertikal",
              "$y=a\\,f(x)$",
              "$(a,\\,a\\,b)$",
            ],
            [
              "Dilatasi horizontal",
              "$y=f(kx)$",
              "$\\left(\\tfrac{a}{k},\\,b\\right)$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Tiket keluar.** (1) Bagaimana bentuk umum $y=a\\,f\\big(k(x-h)\\big)+c$ menunjukkan jenis transformasi yang terjadi? (2) Mengapa urutan langkah transformasi dapat mengubah hasil akhir? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Transformasi Fungsi** untuk latihan tambahan.`,
    },
  ],
};

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
      body: `Transformasi fungsi menuntut kenyamanan membaca grafik dasar dan mengganti variabel di dalam rumus. Pastikan kamu sudah menguasai:
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

Pada pergeseran horizontal, tanda di dalam rumus **berlawanan** dengan arah pergeseran. Menggeser ke kanan berarti mengurangi $x$ di dalam fungsi.`,
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
      blocks: [
        {
          kind: "figure",
          alt: "Grafik garis f(x) sama dengan 2x ditambah 1, hasil pencerminannya terhadap sumbu-x berupa garis putus-putus menurun, dan hasil pencerminannya terhadap sumbu-y berupa garis titik-titik yang berbeda, semuanya pada satu bidang koordinat.",
          caption: "Pencerminan $f(x)=2x+1$ terhadap sumbu-$x$ memberi $-f(x)=-2x-1$ (putus-putus), sedangkan terhadap sumbu-$y$ memberi $f(-x)=-2x+1$ (titik-titik). Keduanya garis yang berbeda.",
          svg: '<svg viewBox="0 0 320 230" aria-hidden="true" role="presentation"><defs><marker id="fig-trf-reflect" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><line x1="30" y1="150" x2="300" y2="150" stroke="currentColor" stroke-width="1.3" marker-end="url(#fig-trf-reflect)"/><line x1="160" y1="225" x2="160" y2="20" stroke="currentColor" stroke-width="1.3" marker-end="url(#fig-trf-reflect)"/><polyline points="130,190 180,90" fill="none" stroke="currentColor" stroke-width="2.4"/><polyline points="130,110 180,210" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 3"/><polyline points="140,90 190,190" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="2 3"/><text x="184" y="86" font-size="12" fill="currentColor">f(x)</text><text x="110" y="118" font-size="12" fill="currentColor">−f(x)</text><text x="192" y="206" font-size="12" fill="currentColor">f(−x)</text><text x="296" y="168" font-size="11" fill="currentColor">x</text><text x="166" y="30" font-size="11" fill="currentColor">y</text></svg>',
        },
      ],
    },
    {
      id: "dilatasi",
      kind: "konsep",
      title: "Dilatasi: Peregangan dan Penyusutan",
      body: `Dilatasi mengubah ukuran grafik tanpa memindahkannya dari titik acuan.

**Dilatasi vertikal.** Grafik $y=a\\,f(x)$ diperoleh dengan mengalikan setiap nilai fungsi dengan $a$. Jika $a>1$ grafik meregang vertikal; jika $0<a<1$ grafik menyusut vertikal. Setiap titik $(a,b)$ menjadi $(a, a\\,b)$.

**Dilatasi horizontal.** Grafik $y=f(kx)$ diperoleh dengan mengganti $x$ menjadi $kx$. Jika $k>1$ grafik menyusut horizontal (memampat); jika $0<k<1$ grafik meregang horizontal. Setiap titik $(p,q)$ menjadi $\\left(\\dfrac{p}{k}, q\\right)$.

Contohnya, dengan $f(x)=x^2$:
- $y=2f(x)=2x^2$ meregang vertikal dengan faktor $2$;
- $y=f(2x)=(2x)^2=4x^2$ menyusut horizontal dengan faktor $\\dfrac{1}{2}$.

Bentuk $y=2x^2$ dan $y=4x^2$ berbeda: yang pertama lebih landai, yang kedua lebih sempit.`,
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
        {
          kind: "figure",
          alt: "Grafik parabola dasar f(x) sama dengan x kuadrat dengan tiga grafik hasil transformasi: digeser ke atas, digeser ke kanan, dan diregang vertikal, masing-masing dibedakan oleh gaya garis.",
          caption: "Grafik dasar $f(x)=x^{2}$ dan hasil transformasinya: $f(x)+2$ (putus-putus), $f(x-2)$ (titik-garis), serta $2f(x)$ (titik-titik).",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><defs><marker id="fig-trf-axis" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><line x1="14" y1="178" x2="300" y2="178" stroke="currentColor" stroke-width="1.2" marker-end="url(#fig-trf-axis)"/><line x1="150" y1="190" x2="150" y2="55" stroke="currentColor" stroke-width="1.2" marker-end="url(#fig-trf-axis)"/><polyline points="58.2,68.7 82,118 99,144.3 116,163 133,174.3 150,178 167,174.3 184,163 201,144.3 218,118 241.8,68.7" fill="none" stroke="currentColor" stroke-width="2.2"/><polyline points="65,54.3 82,88 116,133 150,148 184,133 218,88 235,54.3" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 3"/><polyline points="150,118 167,144.3 184,163 201,174.3 218,178 235,174.3 252,163 269,144.3 286,118 303,84.3" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="8 3 2 3"/><polyline points="85.4,69.7 99,110.5 116,148 133,170.5 150,178 167,170.5 184,148 201,110.5 214.6,69.7" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="2 3"/><line x1="20" y1="22" x2="44" y2="22" stroke="currentColor" stroke-width="2.2"/><text x="50" y="26" font-size="11" fill="currentColor">f(x) = x²</text><line x1="160" y1="22" x2="184" y2="22" stroke="currentColor" stroke-width="2" stroke-dasharray="6 3"/><text x="190" y="26" font-size="11" fill="currentColor">f(x) + 2</text><line x1="20" y1="40" x2="44" y2="40" stroke="currentColor" stroke-width="2" stroke-dasharray="8 3 2 3"/><text x="50" y="44" font-size="11" fill="currentColor">f(x − 2)</text><line x1="160" y1="40" x2="184" y2="40" stroke="currentColor" stroke-width="2" stroke-dasharray="2 3"/><text x="190" y="44" font-size="11" fill="currentColor">2f(x)</text><text x="296" y="172" font-size="11" fill="currentColor">x</text><text x="156" y="62" font-size="11" fill="currentColor">y</text></svg>',
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

**Urutan transformasi penting diperhatikan.** Menggeser lalu meregangkan tidak sama dengan meregangkan lalu menggeser. Mulai dari $f(x)=x^2$:
- meregangkan vertikal dengan faktor $2$ lalu menggeser ke atas $3$ menghasilkan $2x^2+3$;
- menggeser ke atas $3$ lalu meregangkan vertikal dengan faktor $2$ menghasilkan $2(x^2+3)=2x^2+6$.

Kedua hasil berbeda. Karena itu, transformasi pada sumbu yang sama sebaiknya dikerjakan dengan urutan yang jelas.`,
      blocks: [
        {
          kind: "figure",
          alt: "Empat parabola pada satu bidang koordinat: parabola dasar f(x)=x kuadrat, parabola hasil pencerminan terhadap sumbu x, parabola hasil peregangan vertikal dua kali, dan parabola hasil pergeseran ke kanan dua satuan.",
          caption: "Satu grafik dasar $f(x)=x^{2}$ dan tiga transformasinya: refleksi sumbu-$x$ memberi $y=-x^{2}$, dilatasi vertikal memberi $y=2x^{2}$, dan translasi horizontal memberi $y=(x-2)^{2}$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><defs><marker id="fig-trf-parab" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><line x1="20" y1="170" x2="300" y2="170" stroke="currentColor" stroke-width="1.2" marker-end="url(#fig-trf-parab)"/><line x1="150" y1="205" x2="150" y2="25" stroke="currentColor" stroke-width="1.2" marker-end="url(#fig-trf-parab)"/><polyline points="72,35 98,110 111,136 124,155 137,166 150,170 163,166 176,155 189,136 202,110 228,35" fill="none" stroke="currentColor" stroke-width="2.2"/><polyline points="98,230 124,185 150,170 176,185 202,230" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 3"/><polyline points="98,50 111,102 124,140 137,162 150,170 163,162 176,140 189,102 202,50" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="8 3 2 3"/><polyline points="124,35 150,110 176,155 202,170 228,155 254,110 280,35" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="2 3"/><line x1="20" y1="22" x2="44" y2="22" stroke="currentColor" stroke-width="2.2"/><text x="50" y="26" font-size="10" fill="currentColor">f(x) = x²</text><line x1="164" y1="22" x2="188" y2="22" stroke="currentColor" stroke-width="2" stroke-dasharray="2 3"/><text x="194" y="26" font-size="10" fill="currentColor">y = (x−2)²</text><line x1="20" y1="40" x2="44" y2="40" stroke="currentColor" stroke-width="2" stroke-dasharray="6 3"/><text x="50" y="44" font-size="10" fill="currentColor">y = −x²</text><line x1="164" y1="40" x2="188" y2="40" stroke="currentColor" stroke-width="2" stroke-dasharray="8 3 2 3"/><text x="194" y="44" font-size="10" fill="currentColor">y = 2x²</text><text x="296" y="164" font-size="11" fill="currentColor">x</text><text x="156" y="32" font-size="11" fill="currentColor">y</text></svg>',
        },
      ],
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Rumus dan Prosedur",
      body: `Untuk grafik $y=f(x)$:

**Translasi.** $y=f(x)+k$ menggeser naik sejauh $k$; $y=f(x-h)$ menggeser kanan sejauh $h$.

**Refleksi.** $y=-f(x)$ mencerminkan terhadap sumbu-$x$; $y=f(-x)$ mencerminkan terhadap sumbu-$y$.

**Dilatasi.** $y=a\\,f(x)$ meregang vertikal dengan faktor $a$; $y=f(kx)$ menyusut horizontal dengan faktor $\\dfrac{1}{k}$.

**Bentuk umum:**
$$y = a\\,f\\big(k(x-h)\\big)+c.$$

**Prosedur.** (1) Kenali grafik dasarnya. (2) Kerjakan transformasi horizontal (di dalam fungsi) lebih dahulu, lalu vertikal (di luar fungsi). (3) Lacak perpindahan titik kunci seperti puncak. (4) Periksa hasilnya dengan mensubstitusi satu titik.`,
      blocks: [
        {
          kind: "flip-cards",
          intro: "Balik tiap kartu untuk menguji istilah transformasi.",
          cards: [
            {
              front: "Translasi",
              back: "Pergeseran grafik tanpa mengubah bentuknya.",
            },
            {
              front: "Refleksi",
              back: "Pencerminan grafik terhadap sebuah sumbu.",
            },
            {
              front: "Dilatasi",
              back: "Peregangan atau penyusutan grafik terhadap acuan.",
            },
            {
              front: "Refleksi sumbu-$x$",
              back: "Memakai $y=-f(x)$; tiap titik $(a,b)$ menjadi $(a,-b)$.",
            },
          ],
        },
      ],
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
      blocks: [
        {
          kind: "step-reveal",
          intro: "Kerjakan empat contoh transformasi berikut satu langkah sekaligus.",
          steps: [
            {
              title: "Contoh 1: translasi",
              text: `Sketsakan grafik $y=(x-2)^2+3$ dari grafik dasar $y=x^2$, lalu tentukan titik puncaknya.

*Penyelesaian.* Grafik $y=x^2$ digeser ke kanan $2$ satuan karena bentuk $x-2$, kemudian ke atas $3$ satuan. Titik puncak $(0,0)$ berpindah menjadi $(2,3)$. Periksa dengan mengembangkan bentuknya:
$$(x-2)^2+3 = x^2-4x+4+3 = x^2-4x+7.$$
Sumbu simetrinya $x=\\dfrac{4}{2}=2$ dan nilai minimumnya $y=2^2-4(2)+7=3$. Benar.`,
            },
            {
              title: "Contoh 2: refleksi",
              text: `Diketahui $f(x)=2x+1$. Tentukan hasil pencerminan grafiknya terhadap sumbu-$x$ dan terhadap sumbu-$y$, lalu lacak titik $(1,3)$.

*Penyelesaian.* Terhadap sumbu-$x$, nilai fungsi berganti tanda: $y=-f(x)=-(2x+1)=-2x-1$. Terhadap sumbu-$y$, variabel $x$ berganti tanda: $y=f(-x)=2(-x)+1=-2x+1$.
Titik $(1,3)$ terletak pada grafik $f$ karena $f(1)=3$. Cerminannya terhadap sumbu-$x$ adalah $(1,-3)$; periksa: $-2(1)-1=-3$. Cerminannya terhadap sumbu-$y$ adalah $(-1,3)$; periksa: $-2(-1)+1=3$. Kedua hasil berbeda, jadi kedua refleksi tidak boleh dipertukarkan.`,
            },
            {
              title: "Contoh 3: dilatasi vertikal dan horizontal",
              text: `Grafik $y=x^2$ melalui titik $(2,4)$. Tentukan titik padanannya pada grafik $y=2f(x)$ dan pada grafik $y=f(2x)$, lalu jelaskan arah regangannya.

*Penyelesaian.*
- $y=2f(x)=2x^2$: seluruh nilai fungsi dikalikan $2$. Titik $(2,4)$ menjadi $(2,\\,2\\cdot4)=(2,8)$. Periksa: $2(2)^2=8$. Faktor $2$ di luar fungsi meregang **vertikal**.
- $y=f(2x)=(2x)^2=4x^2$: variabel $x$ diganti $2x$, sehingga absis terbagi dua. Titik $(2,4)$ menjadi $\\left(\\dfrac{2}{2},\\,4\\right)=(1,4)$. Periksa: $4(1)^2=4$. Faktor $2$ di dalam fungsi memampat **horizontal** dengan faktor $\\dfrac{1}{2}$.`,
            },
            {
              title: "Contoh 4: urutan transformasi",
              text: `Mulai dari $f(x)=x^2$, bandingkan "meregang vertikal dengan faktor $2$ lalu menggeser ke atas $3$" dengan "menggeser ke atas $3$ lalu meregang vertikal dengan faktor $2$". Periksa keduanya di $x=1$.

*Penyelesaian.* Urutan pertama: meregang dulu memberi $2x^2$, lalu digeser ke atas $3$ menjadi $2x^2+3$. Urutan kedua: menggeser dulu memberi $x^2+3$, lalu diregang menjadi $2(x^2+3)=2x^2+6$.
Kedua hasil berbeda. *Periksa* di $x=1$: urutan pertama $2(1)+3=5$, sedangkan urutan kedua $2(1)+6=8$. Jadi urutan transformasi pada arah yang sama perlu diperhatikan.`,
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
      id: "tantangan",
      kind: "tantangan",
      title: "Tantangan",
      body: `**Soal.** Grafik $y=x^{2}$ digeser sehingga titik puncaknya berada di $(-3,2)$ dan grafiknya melalui titik $(-1,10)$. Tentukan rumus fungsi hasil transformasi itu.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Kita gunakan bentuk puncak dan satu titik untuk menentukan faktor regangannya.",
          steps: [
            {
              title: "Langkah 1",
              text: "Puncak di $(-3,2)$ memberi bentuk $y = a(x+3)^2 + 2$.",
            },
            {
              title: "Langkah 2",
              text: "Grafik melalui $(-1,10):$ substitusi $x=-1$ dan $y=10$.",
            },
            {
              title: "Langkah 3",
              text: "$10 = a(-1+3)^2 + 2 = a(2)^2 + 2 = 4a + 2$, sehingga $4a = 8$ dan $a = 2$.",
            },
            {
              title: "Langkah 4",
              text: "Jadi rumusnya $y = 2(x+3)^2 + 2 = 2x^2 + 12x + 20$.",
            },
            {
              title: "Langkah 5",
              text: "Periksa titik $(-1,10)$: $2(-1+3)^2+2 = 2(4)+2 = 10$. Benar.",
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Jejak Sejarah",
      body: `Pergeseran, pencerminan, dan perputaran bangun telah dibahas sejak lama, tetapi baru pada abad ke-19 transformasi dipelajari sebagai objek aljabar tersendiri. Pada 1872 Felix Klein dalam *Erlanger Programm*-nya mengusulkan agar setiap cabang geometri dikenali dari jenis transformasi yang membiarkan sifat tertentu tetap. Gagasan bahwa grafik fungsi dapat digeser dan diregangkan dengan mengganti $x$ menjadi $x-h$ atau $f(x)$ menjadi $a\\,f(x)$ menjadi bahasa baku di sekolah pada abad ke-20. Aturan yang sama kini dipakai ketika menyesuaikan kurva dengan data atau merancang animasi.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Telaah kembali bagaimana perubahan rumus mengubah tampilan grafik tanpa menghitung ulang tiap titik.",
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
      body: `**Refleksi akhir.** (1) Bagaimana bentuk umum $y=a\\,f\\big(k(x-h)\\big)+c$ menunjukkan jenis transformasi yang terjadi? (2) Mengapa urutan langkah transformasi dapat mengubah hasil akhir? Setelah menjawab, uji kemampuanmu pada [Latihan & Asesmen](/latihan) topik **Transformasi Fungsi**.`,
    },
  ],
};

import type { Topic } from '@/types/content';

export const irisanKerucut: Topic = {
  id: 'irisan-kerucut',
  slug: 'irisan-kerucut',
  title: 'Irisan Kerucut',
  subtitle: 'Lingkaran dan elips beserta garis singgungnya',
  grade: 'XI',
  phase: 'F',
  element: 'geometri',
  subject: 'matematika-lanjut',
  status: 'lengkap',
  estimatedMinutes: 120,
  summary:
    'Menyatakan persamaan lingkaran bentuk baku dan umum, menentukan garis singgung lingkaran, serta menganalisis unsur elips dan persamaan garis singgungnya.',
  description:
    'Irisan kerucut adalah kurva yang terbentuk ketika sebuah bidang memotong kerucut ganda. Dua anggotanya yang paling penting di tingkat ini adalah lingkaran dan elips. Dari definisi jarak, lingkaran menghasilkan persamaan baku $(x-a)^{2}+(y-b)^{2}=r^{2}$ dan bentuk umum $x^{2}+y^{2}+Dx+Ey+F=0$. Elips lahir dari jumlah jarak ke dua titik fokus yang tetap, sehingga memiliki sumbu mayor, sumbu minor, fokus, dan eksentrisitas. Topik ini juga membahas garis singgung, baik pada lingkaran maupun pada elips, sebagai penerapan langsung dari sifat-sifat jarak dan simetri.',
  keywords: [
    'lingkaran',
    'persamaan lingkaran',
    'bentuk baku',
    'bentuk umum',
    'garis singgung lingkaran',
    'elips',
    'fokus elips',
    'sumbu mayor',
    'sumbu minor',
    'eksentrisitas',
    'garis singgung elips',
    'irisan kerucut',
  ],
  prerequisites: ['lingkaran', 'fungsi-kuadrat'],
  relatedTopics: ['vektor'],
  prerequisiteKnowledge: [
    'Persamaan garis lurus dan gradien',
    'Melengkapkan kuadrat sempurna',
    'Jarak dua titik dan teorema Pythagoras',
    'Operasi bentuk akar dan pecahan',
  ],
  objectives: [
    { text: 'Menentukan pusat dan jari-jari lingkaran dari persamaan bentuk baku maupun bentuk umum.' },
    { text: 'Mengubah persamaan umum lingkaran menjadi bentuk baku dengan melengkapkan kuadrat.' },
    { text: 'Menentukan persamaan garis singgung lingkaran di sebuah titik pada lingkaran.' },
    { text: 'Mengidentifikasi unsur elips: pusat, fokus, sumbu mayor, sumbu minor, dan eksentrisitas.' },
    { text: 'Menentukan persamaan garis singgung elips di sebuah titik.' },
  ],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menyatakan persamaan lingkaran dalam bentuk baku dan umum, menentukan garis singgung lingkaran, mengidentifikasi unsur-unsur elips, serta menentukan persamaan garis singgung elips.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      blocks: [
        {
          kind: "prediction",
          prompt: `Sebuah lampu taman berada $4$ m di atas permukaan tanah. Cahayanya jatuh pada dinding yang permukaannya berupa elips dengan bentuk yang tampak lebih panjang daripada lebarnya.

Mengapa bayangan lingkaran pada dinding miring dapat berubah menjadi **elips**? Apa hubungan antara lingkaran, elips, dan garis singgung yang menempel pada tepinya? Pertanyaan inilah yang dijawab oleh **irisan kerucut**.`,
          reveal: `Lingkaran adalah irisan kerucut dengan bidang potong **tegak lurus** sumbu kerucut. Ketika bidang potong **dimiringkan** (tetapi tidak melewati titik puncak dan tidak sejajar sisi kerucut), irisan yang terbentuk adalah **elips**. Karena dinding memotong kerucut cahaya secara miring, tepinya tampak sebagai elips, bukan lingkaran.

Garis singgung adalah garis yang menyentuh kurva di tepat satu titik. Pada lingkaran, garis singgung tegak lurus jari-jari di titik singgung; pada elips, garis singgung memuat titik yang bersangkutan dan mengikuti arah kemiringan elips di titik itu.`,
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- persamaan garis lurus dan gradien, misalnya $y = mx + c$;
- melengkapkan kuadrat sempurna, misalnya $x^{2} - 6x = (x-3)^{2} - 9$;
- jarak dua titik dan teorema Pythagoras;
- operasi bentuk akar dan pecahan.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Irisan kerucut ada di banyak tempat: gelombang air melingkar, orbit planet yang elips, lengkungan jembatan, hingga ruang sidang berkubah. Lingkaran dan elips adalah dua bentuk paling dasar. Memahami persamaannya memungkinkan kita merancang lintasan, menghitung jarak fokus, dan menentukan letak garis singgung.

Sifat fokus elips juga menjelaskan mengapa ruangan berkubah berbentuk elips mampu menyebarkan bisikan dari satu fokus ke fokus lain: setiap gelombang dari satu titik fokus akan dipantulkan menuju titik fokus lainnya.`,
    },
    {
      id: "lingkaran-baku",
      kind: "konsep",
      title: "Persamaan Lingkaran Bentuk Baku",
      body: `**Lingkaran** adalah himpunan titik yang berjarak sama ($r$) dari sebuah titik tetap (pusat). Jika pusatnya $(a,b)$ dan jari-jarinya $r$, maka setiap titik $(x,y)$ pada lingkaran memenuhi

$$(x-a)^{2} + (y-b)^{2} = r^{2}.$$

Ini adalah **bentuk baku**. Dari bentuk ini pusat dan jari-jari langsung terbaca.

Sebagai contoh:
- $(x-2)^{2} + (y+3)^{2} = 16$ berpusat $(2,-3)$ dan berjari-jari $r = \\sqrt{16} = 4$;
- $x^{2} + y^{2} = 49$ berpusat $(0,0)$ dan berjari-jari $r = 7$.

Perhatikan bahwa tanda di dalam kurung **berlawanan** dengan tanda koordinat pusat: $(y+3)^{2}$ berarti ordinat pusat $-3$, bukan $+3$.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "Jari-jari diperoleh dari $\\sqrt{r^{2}}$, bukan $r^{2}$ itu sendiri. Jika tertulis $=16$, maka $r=4$, bukan $16$.",
        },
        {
          kind: "flip-cards",
          intro: "Uji ingatanmu tentang unsur lingkaran.",
          cards: [
            {
              front: "Bentuk baku",
              back: "$(x-a)^{2} + (y-b)^{2} = r^{2}$",
            },
            {
              front: "Pusat lingkaran",
              back: "$(a, b)$",
            },
            {
              front: "Jari-jari",
              back: "Akar dari ruas kanan, $r = \\sqrt{r^{2}}$",
            },
            {
              front: "Bentuk umum",
              back: "$x^{2} + y^{2} + Dx + Ey + F = 0$",
            },
          ],
        },
      ],
    },
    {
      id: "lingkaran-umum",
      kind: "rumus",
      title: "Persamaan Lingkaran Bentuk Umum",
      body: `Dengan menjabarkan bentuk baku, kita memperoleh **bentuk umum** persamaan lingkaran:

$$x^{2} + y^{2} + Dx + Ey + F = 0.$$

Untuk menemukan pusat dan jari-jarinya, kita **melengkapkan kuadrat**:

$$\\left(x + \\frac{D}{2}\\right)^{2} + \\left(y + \\frac{E}{2}\\right)^{2} = \\frac{D^{2}}{4} + \\frac{E^{2}}{4} - F.$$

Jadi pusatnya adalah $\\left(-\\dfrac{D}{2},\\ -\\dfrac{E}{2}\\right)$ dan jari-jarinya

$$r = \\sqrt{\\left(\\frac{D}{2}\\right)^{2} + \\left(\\frac{E}{2}\\right)^{2} - F}.$$

Sebagai contoh, $x^{2} + y^{2} - 6x + 4y - 12 = 0$ memiliki $D = -6$, $E = 4$, dan $F = -12$, sehingga pusatnya $\\left(3, -2\\right)$ dan

$$r = \\sqrt{9 + 4 + 12} = \\sqrt{25} = 5.$$

Persamaan lingkaran itu dapat ditulis kembali sebagai $(x-3)^{2} + (y+2)^{2} = 25$.`,
    },
    {
      id: "garis-singgung-lingkaran",
      kind: "rumus",
      title: "Garis Singgung Lingkaran",
      body: `Garis singgung menyentuh lingkaran di **tepat satu titik** dan tegak lurus jari-jari di titik singgung itu.

**Di titik pada lingkaran.** Untuk lingkaran $x^{2} + y^{2} = r^{2}$ yang berpusat di $(0,0)$, garis singgung di titik $(x_{1}, y_{1})$ pada lingkaran adalah

$$x\\,x_{1} + y\\,y_{1} = r^{2}.$$

Untuk lingkaran berpusat $(a,b)$, aturannya serupa:

$$(x_{1}-a)(x-a) + (y_{1}-b)(y-b) = r^{2}.$$

Sebagai contoh, pada lingkaran $x^{2} + y^{2} = 25$ di titik $(3,4)$:

$$3x + 4y = 25.$$

Periksa bahwa titik $(3,4)$ memenuhi: $3(3) + 4(4) = 9 + 16 = 25$. Benar.

Contoh lain, pada lingkaran $(x-2)^{2} + (y-1)^{2} = 25$ di titik $(5,5)$ (yang memenuhi $(5-2)^{2} + (5-1)^{2} = 9 + 16 = 25$):

$$3(x-2) + 4(y-1) = 25 \\quad\\Longrightarrow\\quad 3x + 4y = 35.$$

**Bentuk umum.** Untuk $x^{2} + y^{2} + Dx + Ey + F = 0$, garis singgung di $(x_{1}, y_{1})$ pada lingkaran adalah

$$x\\,x_{1} + y\\,y_{1} + \\frac{D(x + x_{1})}{2} + \\frac{E(y + y_{1})}{2} + F = 0.$$`,
    },
    {
      id: "elips",
      kind: "konsep",
      title: "Persamaan dan Unsur Elips",
      body: `**Elips** adalah himpunan titik yang jumlah jaraknya ke dua titik tetap (**fokus**) selalu sama. Bentuk bakunya berpusat di $(h,k)$ dengan sumbu mayor sejajar sumbu-$x$ adalah

$$\\frac{(x-h)^{2}}{a^{2}} + \\frac{(y-k)^{2}}{b^{2}} = 1, \\qquad a > b > 0.$$

Unsur-unsurnya:
- **pusat**: $(h,k)$;
- **sumbu mayor** (terpanjang) sepanjang $2a$, terletak pada garis $y = k$;
- **sumbu minor** (terpendek) sepanjang $2b$, terletak pada garis $x = h$;
- **fokus**: $(h \\pm c,\\, k)$ dengan $c^{2} = a^{2} - b^{2}$;
- **eksentrisitas**: $e = \\dfrac{c}{a}$, dengan $0 < e < 1$.

Jika sumbu mayor sejajar sumbu-$y$, pertukar peran $a$ dan $b$: $\\dfrac{(x-h)^{2}}{b^{2}} + \\dfrac{(y-k)^{2}}{a^{2}} = 1$ dan fokusnya $(h,\\, k \\pm c)$.

Sebagai contoh, untuk $\\dfrac{x^{2}}{25} + \\dfrac{y^{2}}{9} = 1$: $a = 5$, $b = 3$, $c = \\sqrt{25 - 9} = 4$. Fokusnya $(\\pm 4, 0)$, sumbu mayor $2a = 10$, sumbu minor $2b = 6$, dan $e = \\dfrac{4}{5} = 0{,}8$.

Untuk $\\dfrac{(x-2)^{2}}{25} + \\dfrac{(y-1)^{2}}{16} = 1$: pusat $(2,1)$, $a = 5$, $b = 4$, $c = \\sqrt{25 - 16} = 3$. Fokusnya $(-1,1)$ dan $(5,1)$, dengan $e = \\dfrac{3}{5} = 0{,}6$.`,
      blocks: [
        {
          kind: "table",
          caption: "Unsur elips $\\dfrac{(x-h)^{2}}{a^{2}} + \\dfrac{(y-k)^{2}}{b^{2}} = 1$ dengan $a > b$",
          headers: [
            "Unsur",
            "Nilai",
          ],
          rows: [
            [
              "Pusat",
              "$(h, k)$",
            ],
            [
              "Sumbu mayor",
              "$2a$, sejajar sumbu-$x$",
            ],
            [
              "Sumbu minor",
              "$2b$, sejajar sumbu-$y$",
            ],
            [
              "Fokus",
              "$(h \\pm c,\\, k)$ dengan $c^{2} = a^{2} - b^{2}$",
            ],
            [
              "Eksentrisitas",
              "$e = \\dfrac{c}{a}$",
            ],
          ],
        },
        {
          kind: "flip-cards",
          intro: "Uji ingatanmu tentang unsur elips.",
          cards: [
            {
              front: "Sumbu mayor",
              back: "Ruas terpanjang melalui pusat; panjangnya $2a$",
            },
            {
              front: "Sumbu minor",
              back: "Ruas terpendek melalui pusat; panjangnya $2b$",
            },
            {
              front: "Fokus",
              back: "Dua titik berjarak $c=\\sqrt{a^{2}-b^{2}}$ dari pusat",
            },
            {
              front: "Eksentrisitas",
              back: "$e=\\dfrac{c}{a}$, bernilai $0<e<1$",
            },
          ],
        },
      ],
    },
    {
      id: "garis-singgung-elips",
      kind: "rumus",
      title: "Garis Singgung Elips",
      body: `Untuk elips berpusat di $(0,0)$ dengan persamaan $\\dfrac{x^{2}}{a^{2}} + \\dfrac{y^{2}}{b^{2}} = 1$, garis singgung di titik $(x_{1}, y_{1})$ pada elips adalah

$$\\frac{x\\,x_{1}}{a^{2}} + \\frac{y\\,y_{1}}{b^{2}} = 1.$$

Sebagai contoh, pada elips $\\dfrac{x^{2}}{25} + \\dfrac{y^{2}}{9} = 1$ di titik $\\left(4, \\tfrac{9}{5}\\right)$. Periksa dahulu titik itu pada elips:

$$\\frac{16}{25} + \\frac{(9/5)^{2}}{9} = \\frac{16}{25} + \\frac{9}{25} = 1.$$

Maka garis singgungnya adalah

$$\\frac{4x}{25} + \\frac{(9/5)y}{9} = 1 \\quad\\Longrightarrow\\quad \\frac{4x}{25} + \\frac{y}{5} = 1 \\quad\\Longrightarrow\\quad 4x + 5y = 25.$$

Periksa: $4(4) + 5\\left(\\tfrac{9}{5}\\right) = 16 + 9 = 25$. Benar.

Untuk elips yang lebih umum, aturan yang sama diterapkan setelah menggeser pusat, atau dengan menuliskan bentuk baku terlebih dahulu.`,
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi Elips dan Keluarga Irisan Kerucut",
      body: `Topik ini menitikberatkan lingkaran dan elips, sesuai capaian pembelajaran. Simulasi berikut membantumu melihat bagaimana perubahan setengah sumbu $a$ dan $b$ mengubah bentuk elips serta memindahkan kedua fokusnya, dan bagaimana titik pusat menggeser seluruh kurva. Pilihan parabola dan hiperbola disediakan sebagai jendela pengayaan agar kamu mengenali keluarganya, tetapi keduanya tidak menjadi tuntutan penilaian pada topik ini.`,
      blocks: [
        {
          kind: "exploration",
          explorationId: "mtl-irisan-kerucut-sim",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Pola Bentuk Baku Irisan Kerucut",
      body: `Lingkaran dan elips menunjukkan pola yang sama: setelah ditulis dalam **bentuk baku** yang berpusat di $(h,k)$, posisi setiap unsur dapat dibaca langsung dari koefisiennya. Lingkaran hanyalah kejadian khusus elips ketika kedua setengah sumbu sama, $a=b=r$, sehingga $c^{2}=a^{2}-b^{2}=0$ dan kedua fokus berimpit di pusat.

Pola ini meluas ke seluruh keluarga irisan kerucut. Setiap irisan kerucut dapat dinyatakan dalam bentuk baku berpusat di $(h,k)$, dan hubungan antar unsurnya mengikuti aturan tetap. Untuk elips:

$$c^{2}=a^{2}-b^{2}, \\qquad e=\\frac{c}{a}.$$

Dari bentuk baku pula rumus garis singgung dibentuk: setiap suku pangkat dua diganti dengan bentuk rata-rata di titik singgung, misalnya $x^{2} \\to x\\,x_{1}$, sehingga menghasilkan rumus $x\\,x_{1}+y\\,y_{1}=r^{2}$ pada lingkaran.`,
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
              text: `Tentukan pusat dan jari-jari lingkaran $x^{2} + y^{2} - 6x + 4y - 12 = 0$.

*Penyelesaian.* Lengkapi kuadrat: $(x-3)^{2} - 9 + (y+2)^{2} - 4 - 12 = 0$, sehingga $(x-3)^{2} + (y+2)^{2} = 25$. Jadi pusatnya $(3,-2)$ dan $r = 5$.`,
            },
            {
              title: "Contoh 2",
              text: `Tentukan garis singgung lingkaran $x^{2} + y^{2} = 25$ di titik $(3,4)$.

*Penyelesaian.* Dengan rumus $x\\,x_{1} + y\\,y_{1} = r^{2}$: $3x + 4y = 25$.`,
            },
            {
              title: "Contoh 3",
              text: `Tentukan pusat, fokus, sumbu mayor, sumbu minor, dan eksentrisitas elips $\\dfrac{(x-2)^{2}}{25} + \\dfrac{(y-1)^{2}}{16} = 1$.

*Penyelesaian.* Pusat $(2,1)$, $a = 5$, $b = 4$, sehingga $c = \\sqrt{25-16} = 3$. Fokus $(-1,1)$ dan $(5,1)$; sumbu mayor $2a = 10$; sumbu minor $2b = 8$; eksentrisitas $e = \\dfrac{3}{5} = 0{,}6$.`,
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
      body: `Lingkaran dipakai pada roda, piringan, dan jangkauan sinyal pemancar. Elips muncul pada orbit planet dan satelit, lengkungan jembatan, serta ruang sidang berkubah yang memanfaatkan dua titik fokus.

Dalam astronomi, hukum Kepler menyatakan orbit planet berbentuk elips dengan Matahari di salah satu titik fokus. Eksentrisitas mengukur seberapa "lonjong" orbit itu. Pada olahraga, lapangan dan lintasan lari dirancang dari gabungan setengah lingkaran dan garis lurus. Garis singgung penting pada mesin: roda gigi dan sabuk harus menyinggung lingkaran secara tepat agar tidak tergelincir.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Salah membaca tanda pusat.** Pada $(x-2)^{2} + (y+3)^{2} = 16$, pusatnya $(2,-3)$, bukan $(2,3)$ atau $(-2,3)$.

**2. Mengambil $r^{2}$ sebagai jari-jari.** Jika bentuk bakunya $=16$, maka $r = 4$. Jari-jari adalah akar dari ruas kanan.

**3. Lupa membagi persamaan umum dengan koefisien $x^{2}$ dan $y^{2}$.** Untuk $2x^{2} + 2y^{2} + \\dots = 0$, bagi dulu dengan $2$ sebelum memakai rumus pusat dan jari-jari.

**4. Menukar sumbu mayor dan minor pada elips.** Sumbu mayor berkaitan dengan $a$ (penyebut terbesar), dan fokus selalu berada pada sumbu mayor. Pastikan letak $a$ dan $b$ benar.

**5. Menghitung $c$ dengan menjumlah.** Untuk elips selalu berlaku $c^{2} = a^{2} - b^{2}$, bukan $a^{2} + b^{2}$. Pastikan operasi pengurangan yang dipakai sebelum menentukan fokus.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Seorang siswa menentukan jari-jari lingkaran $(x-1)^{2} + (y+4)^{2} = 36$. Klik langkah yang keliru.",
          steps: [
            "Bentuk bakunya $(x-1)^{2} + (y+4)^{2} = 36$.",
            "Pusatnya $(1,-4)$.",
            "Maka jari-jarinya $r = 36$.",
          ],
          wrongIndex: 2,
          explanation: "Jari-jari adalah akar dari $36$, yaitu $r = 6$, bukan $36$. Angka $36$ adalah $r^{2}$.",
        },
      ],
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Jawab dengan jujur:",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Apa ciri yang membedakan persamaan lingkaran dan persamaan elips?",
            "Mengapa fokus elips selalu terletak pada sumbu mayor?",
            "Bagaimana kamu memeriksa bahwa sebuah titik benar-benar berada pada lingkaran atau elips sebelum menulis garis singgungnya?",
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
            "Konsep",
            "Bentuk / Rumus",
          ],
          rows: [
            [
              "Lingkaran bentuk baku",
              "$(x-a)^{2} + (y-b)^{2} = r^{2}$",
            ],
            [
              "Pusat & jari-jari (umum)",
              "pusat $\\left(-\\dfrac{D}{2}, -\\dfrac{E}{2}\\right)$, $r = \\sqrt{\\left(\\dfrac{D}{2}\\right)^{2} + \\left(\\dfrac{E}{2}\\right)^{2} - F}$",
            ],
            [
              "Garis singgung lingkaran di $(x_{1},y_{1})$",
              "$x\\,x_{1} + y\\,y_{1} = r^{2}$",
            ],
            [
              "Elips (sumbu mayor-$x$)",
              "$\\dfrac{(x-h)^{2}}{a^{2}} + \\dfrac{(y-k)^{2}}{b^{2}} = 1$, $a > b$",
            ],
            [
              "Fokus elips",
              "$c^{2} = a^{2} - b^{2}$, fokus $(h \\pm c,\\, k)$",
            ],
            [
              "Eksentrisitas",
              "$e = \\dfrac{c}{a}$, $0 < e < 1$",
            ],
            [
              "Garis singgung elips di $(x_{1},y_{1})$",
              "$\\dfrac{x\\,x_{1}}{a^{2}} + \\dfrac{y\\,y_{1}}{b^{2}} = 1$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Tiket keluar.** (1) Mengapa bentuk umum lingkaran perlu diubah ke bentuk baku, dan bagaimana caranya? (2) Pada elips $\\dfrac{x^{2}}{a^{2}}+\\dfrac{y^{2}}{b^{2}}=1$, bagaimana kamu menentukan letak kedua fokus? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Irisan Kerucut** untuk latihan tambahan.`,
    },
  ],
};

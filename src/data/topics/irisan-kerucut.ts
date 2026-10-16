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
  applications: ['mtl-antena-elips'],
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
      body: `Topik ini menggabungkan koordinat, bentuk kuadrat, dan jarak, sehingga ketelitian aljabar sangat membantu. Bekal yang membantu di sini:
- persamaan garis lurus dan gradien, seperti $y = mx + c$;
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
      questionIds: ['ik-01'],
      body: `**Lingkaran** adalah himpunan titik yang berjarak sama ($r$) dari sebuah titik tetap (pusat). Jika pusatnya $(a,b)$ dan jari-jarinya $r$, maka setiap titik $(x,y)$ pada lingkaran memenuhi

$$(x-a)^{2} + (y-b)^{2} = r^{2}.$$

Ini **bentuk baku**. Dari bentuk ini pusat dan jari-jari langsung terbaca.

Contohnya:
- $(x-2)^{2} + (y+3)^{2} = 16$ berpusat $(2,-3)$ dan berjari-jari $r = \\sqrt{16} = 4$;
- $x^{2} + y^{2} = 49$ berpusat $(0,0)$ dan berjari-jari $r = 7$.

Tanda di dalam kurung **berlawanan** dengan tanda koordinat pusat: $(y+3)^{2}$ berarti ordinat pusat $-3$, bukan $+3$.`,
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

Contohnya, $x^{2} + y^{2} - 6x + 4y - 12 = 0$ memiliki $D = -6$, $E = 4$, dan $F = -12$, sehingga pusatnya $\\left(3, -2\\right)$ dan

$$r = \\sqrt{9 + 4 + 12} = \\sqrt{25} = 5.$$

Persamaan lingkaran itu dapat ditulis kembali sebagai $(x-3)^{2} + (y+2)^{2} = 25$.`,
    },
    {
      id: "garis-singgung-lingkaran",
      kind: "rumus",
      title: "Garis Singgung Lingkaran",
      body: `Garis singgung lingkaran sudah dibahas tuntas pada topik **Lingkaran**, termasuk alasan garis singgung selalu tegak lurus jari-jari di titik singgungnya. Di sini kita cukup mengingat bentuk dasarnya: untuk lingkaran $x^{2} + y^{2} = r^{2}$ berpusat di titik asal, garis singgung di titik $(x_{1}, y_{1})$ pada lingkaran adalah

$$x\\,x_{1} + y\\,y_{1} = r^{2}.$$

Pola inilah yang kita pakai ulang untuk elips: setiap suku pangkat dua diganti bentuk rata-rata di titik singgung, $x^{2} \\to x\\,x_{1}$ dan $y^{2} \\to y\\,y_{1}$. Jadi garis singgung elips mengikuti gagasan yang sama seperti garis singgung lingkaran.`,
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

Contohnya, untuk $\\dfrac{x^{2}}{25} + \\dfrac{y^{2}}{9} = 1$: $a = 5$, $b = 3$, $c = \\sqrt{25 - 9} = 4$. Fokusnya $(\\pm 4, 0)$, sumbu mayor $2a = 10$, sumbu minor $2b = 6$, dan $e = \\dfrac{4}{5} = 0{,}8$.

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
        {
          kind: "figure",
          alt: "Elips mendatar dengan pusat di tengah, dua titik fokus pada sumbu mayor, serta sumbu mayor dan sumbu minor yang saling tegak lurus.",
          caption: "Elips $\\dfrac{x^{2}}{25}+\\dfrac{y^{2}}{9}=1$ berpusat di titik asal, dengan fokus $F_{1}(-4,0)$ dan $F_{2}(4,0)$. Sumbu mayor sepanjang $2a=10$ dan sumbu minor sepanjang $2b=6$.",
          svg: '<svg viewBox="0 0 320 220" aria-hidden="true" role="presentation"><ellipse cx="160" cy="110" rx="110" ry="66" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="50" y1="110" x2="270" y2="110" stroke="currentColor" stroke-width="1.5"/><line x1="160" y1="44" x2="160" y2="176" stroke="currentColor" stroke-width="1.5"/><circle cx="72" cy="110" r="3.5" fill="currentColor"/><circle cx="248" cy="110" r="3.5" fill="currentColor"/><circle cx="160" cy="110" r="3" fill="currentColor"/><text x="60" y="100" font-size="12" fill="currentColor">F&#8321;</text><text x="252" y="100" font-size="12" fill="currentColor">F&#8322;</text><text x="164" y="126" font-size="12" fill="currentColor">pusat</text><text x="66" y="130" font-size="11" fill="currentColor">sumbu mayor</text><text x="164" y="58" font-size="11" fill="currentColor">sumbu minor</text></svg>',
        },
        {
          kind: "figure",
          alt: "Tiga elips dengan panjang sumbu mayor sama tetapi kelonjongan berbeda: sebuah lingkaran, sebuah elips sedang, dan sebuah elips sangat lonjong yang kedua fokusnya makin jauh dari pusat.",
          caption: "Dengan sumbu mayor tetap, makin besar eksentrisitas $e=\\dfrac{c}{a}$ makin lonjong elips dan makin jauh kedua fokus dari pusat; ketika $e=0$ elips menjadi lingkaran.",
          svg: '<svg viewBox="0 0 380 200" aria-hidden="true" role="presentation"><line x1="15" y1="105" x2="365" y2="105" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/><ellipse cx="70" cy="105" rx="46" ry="46" fill="none" stroke="currentColor" stroke-width="2"/><ellipse cx="190" cy="105" rx="46" ry="30" fill="none" stroke="currentColor" stroke-width="2"/><ellipse cx="310" cy="105" rx="46" ry="15" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="155" cy="105" r="3" fill="currentColor"/><circle cx="225" cy="105" r="3" fill="currentColor"/><circle cx="267" cy="105" r="3" fill="currentColor"/><circle cx="353" cy="105" r="3" fill="currentColor"/><text x="46" y="168" font-size="12" fill="currentColor">e = 0</text><text x="158" y="168" font-size="12" fill="currentColor">0 &lt; e &lt; 1</text><text x="256" y="168" font-size="12" fill="currentColor">e mendekati 1</text><text x="300" y="62" font-size="11" fill="currentColor">fokus</text><text x="252" y="87" font-size="11" fill="currentColor">F</text><text x="350" y="87" font-size="11" fill="currentColor">F</text></svg>',
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi",
      body: `Setiap irisan kerucut dapat dikenali dari **bentuk aljabar** persamaannya maupun dari **bentuk grafik**nya. Membandingkan keduanya membantu kita memindai ciri: variabel mana yang dikuadratkan, bagaimana tanda tiap suku, dan berapa penyebut masing-masing. Lingkaran dan elips adalah keluarga terdekat; parabola dan hiperbola disertakan sebagai pengayaan.`,
      blocks: [
        {
          kind: "table",
          caption: "Perbandingan bentuk aljabar irisan kerucut",
          headers: ["Kurva", "Bentuk baku", "Ciri grafik"],
          rows: [
            ["Lingkaran", "$(x-a)^2 + (y-b)^2 = r^2$", "Semua titik berjarak sama dari pusat"],
            ["Elips", "$\\dfrac{(x-h)^2}{a^2} + \\dfrac{(y-k)^2}{b^2} = 1$", "Kurva tertutup lonjong dengan dua fokus"],
            ["Parabola", "$(x-h)^2 = 4p(y-k)$", "Terbuka satu arah menuju satu fokus"],
            ["Hiperbola", "$\\dfrac{(x-h)^2}{a^2} - \\dfrac{(y-k)^2}{b^2} = 1$", "Dua cabang terpisah dengan dua fokus"],
          ],
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Lingkaran & elips",
              body: "Lingkaran adalah elips khusus dengan $a = b = r$. Keduanya kurva tertutup, sehingga kedua suku pangkat dua bertanda positif.",
            },
            {
              label: "Parabola",
              body: "Hanya satu variabel yang dikuadratkan. Grafiknya terbuka ke satu arah dan hanya memiliki satu titik fokus.",
            },
            {
              label: "Hiperbola",
              body: "Kedua variabel dikuadratkan, tetapi tandanya berlawanan. Grafiknya terdiri atas dua cabang yang saling menjauh.",
            },
          ],
        },
        {
          kind: "figure",
          alt: "Parabola vertikal dengan puncak di titik asal, titik fokus di atas puncak pada sumbu simetri, dan garis direktriks mendatar di bawah puncak.",
          caption: "Parabola $x^{2}=4py$: puncak di titik asal, fokus terletak pada sumbu simetri, dan direktriks berupa garis mendatar. Setiap titik pada parabola berjarak sama ke fokus dan ke direktriks.",
          svg: '<svg viewBox="0 0 320 220" aria-hidden="true" role="presentation"><line x1="40" y1="130" x2="295" y2="130" stroke="currentColor" stroke-width="1"/><line x1="160" y1="15" x2="160" y2="205" stroke="currentColor" stroke-width="1"/><polyline points="70,62.5 100,100 130,122.5 160,130 190,122.5 220,100 250,62.5" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="85" y1="160" x2="235" y2="160" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><circle cx="160" cy="130" r="3.5" fill="currentColor"/><circle cx="160" cy="100" r="3.5" fill="currentColor"/><text x="290" y="145" font-size="12" fill="currentColor">x</text><text x="166" y="20" font-size="12" fill="currentColor">y</text><text x="166" y="148" font-size="12" fill="currentColor">puncak</text><text x="166" y="96" font-size="12" fill="currentColor">fokus</text><text x="112" y="176" font-size="12" fill="currentColor">direktriks</text></svg>',
        },
        {
          kind: "figure",
          alt: "Hiperbola mendatar dua cabang terpisah, berpusat di tengah, dengan dua titik fokus pada sumbu mendatar dan dua garis asimtot putus-putus yang bersilangan di pusat.",
          caption: "Hiperbola $\\dfrac{x^{2}}{9}-\\dfrac{y^{2}}{16}=1$: dua cabang terpisah, puncak $(\\pm 3,0)$, fokus $F_{1}(-5,0)$ dan $F_{2}(5,0)$, serta dua asimtot $y=\\pm\\dfrac{4}{3}x$ yang makin didekati cabang pada jarak jauh.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="64" y1="56" x2="256" y2="184" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><line x1="64" y1="184" x2="256" y2="56" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><polyline points="268.6,180.4 246,161.1 231.1,145.5 222.7,132.2 220,120 222.7,107.8 231.1,94.5 246,78.9 268.6,59.6" fill="none" stroke="currentColor" stroke-width="2.2"/><polyline points="51.4,180.4 74,161.1 88.9,145.5 97.3,132.2 100,120 97.3,107.8 88.9,94.5 74,78.9 51.4,59.6" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="160" cy="120" r="3" fill="currentColor"/><circle cx="88" cy="120" r="3.5" fill="currentColor"/><circle cx="232" cy="120" r="3.5" fill="currentColor"/><text x="80" y="112" font-size="11" fill="currentColor">F&#8321;</text><text x="236" y="112" font-size="11" fill="currentColor">F&#8322;</text><text x="164" y="136" font-size="11" fill="currentColor">pusat</text><text x="198" y="86" font-size="11" fill="currentColor">asimtot</text></svg>',
        },
      ],
    },
    {
      id: "garis-singgung-elips",
      kind: "rumus",
      title: "Garis Singgung Elips",
      body: `Untuk elips berpusat di $(0,0)$ dengan persamaan $\\dfrac{x^{2}}{a^{2}} + \\dfrac{y^{2}}{b^{2}} = 1$, garis singgung di titik $(x_{1}, y_{1})$ pada elips adalah

$$\\frac{x\\,x_{1}}{a^{2}} + \\frac{y\\,y_{1}}{b^{2}} = 1.$$

Contohnya, pada elips $\\dfrac{x^{2}}{25} + \\dfrac{y^{2}}{9} = 1$ di titik $\\left(4, \\tfrac{9}{5}\\right)$. Periksa dahulu titik itu pada elips:

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
      id: "eksplorasi-fokus",
      kind: "eksplorasi",
      title: "Eksplorasi Fokus dan Eksentrisitas",
      body: "Selidiki bagaimana perubahan setengah sumbu $a$ dan $b$ menggeser kedua fokus dan mengubah eksentrisitas elips.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "mtl-konik-fokus",
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

Dari bentuk baku pula rumus garis singgung dibentuk: setiap suku pangkat dua diganti dengan bentuk rata-rata di titik singgung, seperti $x^{2} \\to x\\,x_{1}$, sehingga menghasilkan rumus $x\\,x_{1}+y\\,y_{1}=r^{2}$ pada lingkaran.`,
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
              text: `Tentukan pusat dan jari-jari lingkaran $x^{2} + y^{2} - 4x + 6y - 3 = 0$.

*Penyelesaian.* Lengkapi kuadrat: $(x-2)^{2} - 4 + (y+3)^{2} - 9 - 3 = 0$, sehingga $(x-2)^{2} + (y+3)^{2} = 16$. Jadi pusatnya $(2,-3)$ dan $r = \\sqrt{16} = 4$.`,
            },
            {
              title: "Contoh 2",
              text: `Tentukan garis singgung lingkaran $x^{2} + y^{2} = 25$ di titik $(3,4)$.

*Penyelesaian.* Titik $(3,4)$ memenuhi $3^{2}+4^{2}=25$, jadi ia berada pada lingkaran. Dengan rumus $x\\,x_{1} + y\\,y_{1} = r^{2}$: $3x + 4y = 25$. Periksa: $3(3)+4(4)=9+16=25$. Benar.`,
            },
            {
              title: "Contoh 3",
              text: `Tentukan pusat, fokus, sumbu mayor, sumbu minor, dan eksentrisitas elips $\\dfrac{(x-1)^{2}}{169} + \\dfrac{(y+2)^{2}}{25} = 1$.

*Penyelesaian.* Pusat $(1,-2)$. Penyebut terbesar ada pada suku-$x$, jadi $a = 13$ dan $b = 5$, sehingga $c = \\sqrt{169-25} = 12$. Fokus $(1-12,-2)=(-11,-2)$ dan $(1+12,-2)=(13,-2)$; sumbu mayor $2a = 26$; sumbu minor $2b = 10$; eksentrisitas $e = \\dfrac{12}{13} \\approx 0{,}92$.`,
            },
            {
              title: "Contoh 4: parabola",
              text: `Tentukan puncak, fokus, dan direktriks parabola $x^{2} = 8(y-1)$, lalu periksa sifat fokus dan direktriks pada satu titik.

*Penyelesaian.* Bandingkan dengan bentuk baku $x^{2} = 4p\\,(y-k)$, sehingga puncaknya $(h,k) = (0,1)$ dan $4p = 8$, yaitu $p = 2$. Parabola terbuka ke atas, jadi fokusnya $(0,\\,k+p) = (0,3)$ dan direktriksnya $y = k-p = -1$.

Periksa titik $(4,3)$: ruas kiri $4^{2} = 16$ dan ruas kanan $8(3-1) = 16$, jadi titik itu berada pada parabola. Jaraknya ke fokus $(0,3)$ adalah $4$, dan jarak tegaknya ke direktriks $y = -1$ juga $4$. Sifat "jarak ke fokus sama dengan jarak ke direktriks" terpenuhi.`,
            },
            {
              title: "Contoh 5: hiperbola",
              text: `Tentukan puncak, fokus, dan asimtot hiperbola $\\dfrac{x^{2}}{9} - \\dfrac{y^{2}}{16} = 1$, lalu verifikasi definisinya.

*Penyelesaian.* Bentuk bakunya $\\dfrac{x^{2}}{a^{2}} - \\dfrac{y^{2}}{b^{2}} = 1$ dengan $a = 3$ dan $b = 4$, sehingga kurva terbuka ke kiri dan ke kanan. Puncaknya $(\\pm 3, 0)$, sedangkan fokusnya $(\\pm c, 0)$ dengan $c^{2} = a^{2} + b^{2} = 9 + 16 = 25$, jadi $c = 5$ dan fokusnya $(-5,0)$ serta $(5,0)$. Asimtotnya $y = \\pm \\dfrac{b}{a}x = \\pm \\dfrac{4}{3}x$.

Periksa definisi dengan titik $P\\left(5, \\tfrac{16}{3}\\right)$: substitusi memberi $\\dfrac{25}{9} - \\dfrac{(16/3)^{2}}{16} = \\dfrac{25}{9} - \\dfrac{16}{9} = 1$, jadi $P$ berada pada hiperbola. Jarak ke fokus dekat $F_{2}(5,0)$ adalah $PF_{2} = \\dfrac{16}{3}$, sedangkan jarak ke fokus jauh $F_{1}(-5,0)$ adalah $PF_{1} = \\sqrt{10^{2} + (16/3)^{2}} = \\dfrac{34}{3}$. Selisihnya $PF_{1} - PF_{2} = \\dfrac{34}{3} - \\dfrac{16}{3} = 6 = 2a$, sesuai definisi hiperbola.`,
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
      id: "tantangan",
      kind: "tantangan",
      title: "Membuktikan Sifat Fokus Elips",
      body: `Sifat paling khas elips ternyata sekaligus dapat dibuktikan dari persamaannya.

Diberikan elips dengan persamaan
$$\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1,\\qquad a>b>0,$$
dengan fokus $F_1(-c,0)$ dan $F_2(c,0)$, di mana $c^2=a^2-b^2$.

Buktikan bahwa untuk **setiap** titik $P(x,y)$ pada elips berlaku
$$PF_1+PF_2=2a.$$`,
      blocks: [
        {
          kind: "callout",
          variant: "tip",
          title: "Petunjuk",
          text: `Tulis $PF_1^2=(x+c)^2+y^2$, lalu ganti $y^2$ dari persamaan elips dan lengkapkan kuadrat. Bandingkan hasilnya dengan bentuk $\\left(a+\\tfrac{c}{a}x\\right)^2$.`,
        },
        {
          kind: "step-reveal",
          intro: "Bukti berjalan melalui manipulasi aljabar pada jarak ke kedua fokus.",
          steps: [
            {
              title: "Pakai persamaan elips",
              text: `Karena $P$ pada elips, $\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1$, sehingga $y^2=b^2\\left(1-\\dfrac{x^2}{a^2}\\right)=b^2-\\dfrac{b^2x^2}{a^2}$.`,
            },
            {
              title: "Susun $PF_1^2$",
              text: `$PF_1^2=(x+c)^2+y^2=x^2+2cx+c^2+b^2-\\dfrac{b^2x^2}{a^2}$.`,
            },
            {
              title: "Sederhanakan koefisien",
              text: `Karena $c^2=a^2-b^2$, maka $b^2+c^2=a^2$ dan $1-\\dfrac{b^2}{a^2}=\\dfrac{c^2}{a^2}$. Jadi $PF_1^2=a^2+2cx+\\dfrac{c^2x^2}{a^2}$.`,
            },
            {
              title: "Kenali kuadrat sempurna",
              text: `Ruas kanan dapat ditulis $\\left(a+\\dfrac{c}{a}x\\right)^2$. Karena $a+\\dfrac{c}{a}x>0$ pada $-a\\le x\\le a$, diperoleh $PF_1=a+\\dfrac{c}{a}x$.`,
            },
            {
              title: "Fokus kedua",
              text: `Dengan cara serupa, $PF_2^2=(x-c)^2+y^2=\\left(a-\\dfrac{c}{a}x\\right)^2$, sehingga $PF_2=a-\\dfrac{c}{a}x$.`,
            },
            {
              title: "Jumlahkan",
              text: `$PF_1+PF_2=\\left(a+\\dfrac{c}{a}x\\right)+\\left(a-\\dfrac{c}{a}x\\right)=2a$. Terbukti.`,
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Menaechmus sampai Kepler",
      body: `Irisan kerucut sudah dipelajari sejak zaman Yunani kuno. Menaechmus pada abad ke-4 SM menemukannya ketika mencari cara memperbesar kubus, dan Apollonius dari Perga dalam karyanya *Conics* (sekitar 200 SM) menamai serta mengkaji elips, parabola, dan hiperbola secara sistematis. Berabad-abad kemudian, Johannes Kepler pada 1609 menunjukkan bahwa orbit planet berbentuk elips dengan Matahari di salah satu fokusnya, sebuah penemuan yang mengubah astronomi. Galileo juga menjelaskan lintasan proyektil sebagai parabola. Sifat fokus elips kemudian dijelaskan secara geometris melalui bola-bola Dandelin pada abad ke-19.`,
      blocks: [
        {
          kind: "table",
          caption: "Tokoh dalam sejarah irisan kerucut",
          headers: [
            "Tokoh",
            "Tahun",
            "Kontribusi",
          ],
          rows: [
            [
              "Menaechmus",
              "abad ke-4 SM",
              "Menemukan irisan kerucut saat memecahkan masalah penggandaan kubus.",
            ],
            [
              "Apollonius dari Perga",
              "sekitar 200 SM",
              "Menulis Conics dan menamai elips, parabola, serta hiperbola.",
            ],
            [
              "Johannes Kepler",
              "1609",
              "Menunjukkan orbit planet berbentuk elips dengan Matahari di salah satu fokus.",
            ],
            [
              "Germinal Pierre Dandelin",
              "1822",
              "Menjelaskan sifat fokus elips melalui bola-bola Dandelin.",
            ],
          ],
        },
      ],
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Pikirkan bagaimana persamaan yang sederhana dapat mewakili bentuk kurva di sekitarmu.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Apa ciri yang membedakan persamaan lingkaran dan persamaan elips?",
            "Mengapa fokus elips selalu terletak pada sumbu mayor?",
            "Bagaimana kamu memeriksa bahwa sebuah titik benar-benar berada pada lingkaran atau elips sebelum menulis garis singgungnya?",
          ],
          confidenceLabel: "Seberapa yakin kamu menentukan pusat, fokus, dan eksentrisitas irisan kerucut?",
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
      questionIds: ['ik-09'],
      body: `Tinjau ulang: apa yang membedakan persamaan lingkaran dari persamaan elips, dan bagaimana kamu menemukan letak fokus pada elips sebarang? Tuliskan jawabanmu, lalu lanjut ke [Latihan & Asesmen](/latihan) topik **Irisan Kerucut**.`,
    },
  ],
};

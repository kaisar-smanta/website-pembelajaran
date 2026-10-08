import type { Topic } from '@/types/content';

export const trigonometriLanjut: Topic = {
  id: 'trigonometri-lanjut',
  slug: 'trigonometri-lanjut',
  title: 'Trigonometri Lanjut',
  subtitle: 'Fenomena periodik, identitas, dan aturan sinus-kosinus',
  grade: 'XI',
  phase: 'F',
  element: 'aljabar-fungsi',
  subject: 'matematika-lanjut',
  status: 'lengkap',
  estimatedMinutes: 100,
  summary:
    'Memodelkan fenomena periodik dengan fungsi trigonometri serta menggunakan identitas jumlah-sudut, sudut rangkap, aturan sinus, aturan kosinus, dan luas segitiga.',
  description:
    'Trigonometri lanjut memperluas perbandingan trigonometri pada segitiga siku-siku ke fenomena periodik dan segitiga sebarang. Kita mempelajari amplitudo, periode, dan fase fungsi sinus-kosinus, lalu menurunkan identitas jumlah dan selisih sudut serta sudut rangkap. Identitas itu dipakai untuk menghitung nilai sudut tidak istimewa. Selanjutnya aturan sinus, aturan kosinus, dan rumus luas segitiga menyelesaikan masalah pada segitiga sebarang, termasuk pengukuran di dunia nyata.',
  keywords: [
    'trigonometri lanjut',
    'fungsi periodik',
    'amplitudo',
    'periode',
    'identitas trigonometri',
    'sudut rangkap',
    'aturan sinus',
    'aturan kosinus',
    'luas segitiga',
  ],
  prerequisites: ['trigonometri'],
  relatedTopics: ['vektor'],
  prerequisiteKnowledge: [
    'Perbandingan trigonometri pada segitiga siku-siku',
    'Nilai trigonometri sudut istimewa',
    'Identitas dasar $\\sin^{2}\\alpha+\\cos^{2}\\alpha=1$',
  ],
  objectives: [
    { text: 'Peserta didik dapat menentukan amplitudo, periode, dan fase fungsi trigonometri.' },
    { text: 'Peserta didik dapat menggunakan identitas jumlah dan selisih sudut.' },
    { text: 'Peserta didik dapat menggunakan identitas sudut rangkap.' },
    { text: 'Peserta didik dapat menerapkan aturan sinus dan aturan kosinus.' },
    { text: 'Peserta didik dapat menghitung luas segitiga sebarang.' },
  ],
  sections: [
    {
      id: 'tujuan',
      kind: 'tujuan',
      title: 'Tujuan Pembelajaran',
      body: `Setelah mempelajari topik ini, peserta didik dapat memodelkan fenomena periodik dengan fungsi trigonometri, membuktikan dan menggunakan identitas jumlah-sudut serta sudut rangkap, serta menerapkan aturan sinus, aturan kosinus, dan rumus luas untuk menyelesaikan masalah segitiga sebarang.`,
    },
    {
      id: 'pemantik',
      kind: 'pemantik',
      title: 'Pertanyaan Pemantik',
      body: `Suara gitar, pasang surut laut, dan arus listrik bolak-balik semuanya berulang secara teratur. Fenomena seperti ini dimodelkan dengan fungsi sinus atau kosinus.

Pertanyaannya: nilai trigonometri sudut istimewa hanya untuk $30^\\circ$, $45^\\circ$, dan $60^\\circ$. Bagaimana caranya menghitung $\\sin 75^\\circ$ tanpa kalkulator?`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat jawaban pertanyaan pemantik',
          text: `Tulis $75^\\circ = 45^\\circ + 30^\\circ$, lalu pakai identitas jumlah sudut:
$$\\sin 75^\\circ = \\sin(45^\\circ+30^\\circ) = \\sin 45^\\circ\\cos 30^\\circ + \\cos 45^\\circ\\sin 30^\\circ.$$
Substitusi nilai sudut istimewa memberi
$$\\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2}\\cdot\\frac{1}{2} = \\frac{\\sqrt{6}+\\sqrt{2}}{4}.$$
Jadi identitas trigonometri memungkinkan kita menghitung nilai sudut tidak istimewa dari sudut-sudut istimewa.`,
        },
      ],
    },
    {
      id: 'prasyarat',
      kind: 'prasyarat',
      title: 'Prasyarat',
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- perbandingan sinus, kosinus, dan tangen pada segitiga siku-siku;
- nilai trigonometri sudut istimewa $0^\\circ$ sampai $90^\\circ$;
- identitas dasar $\\sin^{2}\\alpha+\\cos^{2}\\alpha=1$ dan $\\tan\\alpha=\\dfrac{\\sin\\alpha}{\\cos\\alpha}$.`,
    },
    {
      id: 'konteks',
      kind: 'konteks',
      title: 'Situasi dan Konteks',
      body: `Banyak gejala alam bersifat **periodik**: berulang pada selang waktu tetap. Tinggi gelombang laut, tegangan listrik, dan getaran pegas dapat dinyatakan dengan fungsi sinus atau kosinus. Dengan mengenali amplitudo dan periode, kita dapat memprediksi nilai pada waktu tertentu.

Sementara itu, tidak semua segitiga memiliki sudut siku-siku. Aturan sinus dan aturan kosinus memperluas trigonometri ke segitiga sebarang, sehingga pengukuran jarak dan sudut di lapangan dapat diselesaikan.`,
    },
    {
      id: 'periodik',
      kind: 'konsep',
      title: 'Fungsi Trigonometri dan Fenomena Periodik',
      body: `Fungsi trigonometri memodelkan gejala yang berulang. Bentuk umumnya
$$f(x) = A\\sin\\big(B(x-C)\\big) + D.$$
Setiap parameter memiliki makna:
- $\\lvert A \\rvert$ adalah **amplitudo**, yaitu setengah selisih nilai maksimum dan minimum;
- periode adalah $\\dfrac{360^\\circ}{\\lvert B \\rvert}$ (atau $\\dfrac{2\\pi}{\\lvert B \\rvert}$ dalam radian);
- $C$ adalah **pergeseran fase** (geser mendatar);
- $D$ adalah **pergeseran tegak** yang menggeser garis tengah grafik.

Nilai maksimum adalah $D+\\lvert A \\rvert$ dan nilai minimum $D-\\lvert A \\rvert$. Sebagai contoh, $f(x)=3\\sin\\big(2(x-45^\\circ)\\big)-1$ memiliki amplitudo $3$, periode $\\dfrac{360^\\circ}{2}=180^\\circ$, pergeseran fase $45^\\circ$, nilai maksimum $2$, dan nilai minimum $-4$.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'concept',
          title: 'Inti yang perlu diingat',
          text: 'Amplitudo mengatur **tinggi** gelombang, periode mengatur **panjang** satu siklus, dan pergeseran fase mengatur **titik awal** gelombang.',
        },
      ],
    },
    {
      id: 'parameter',
      kind: 'representasi',
      title: 'Membaca Parameter Fungsi Periodik',
      body: `Perhatikan bagaimana setiap parameter mengubah grafik melalui contoh $f(x)=2\\sin\\big(3(x-30^\\circ)\\big)+1$.`,
      blocks: [
        {
          kind: 'table',
          caption: 'Parameter pada $f(x)=2\\sin(3(x-30^\\circ))+1$',
          headers: ['Parameter', 'Nilai', 'Makna'],
          rows: [
            ['Amplitudo $\\lvert A \\rvert$', '$2$', 'gelombang naik-turun sejauh $2$ dari garis tengah'],
            ['Periode', '$\\dfrac{360^\\circ}{3} = 120^\\circ$', 'satu siklus penuh setiap $120^\\circ$'],
            ['Pergeseran fase $C$', '$30^\\circ$', 'grafik digeser $30^\\circ$ ke kanan'],
            ['Pergeseran tegak $D$', '$1$', 'garis tengah berada di $y=1$'],
            ['Nilai maksimum', '$2+1 = 3$', 'puncak tertinggi gelombang'],
            ['Nilai minimum', '$-2+1 = -1$', 'lembah terendah gelombang'],
          ],
        },
      ],
    },
    {
      id: 'jumlah-selisih',
      kind: 'rumus',
      title: 'Identitas Jumlah dan Selisih Sudut',
      body: `Identitas berikut berlaku untuk semua sudut $\\alpha$ dan $\\beta$:
$$\\sin(\\alpha\\pm\\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta,$$
$$\\cos(\\alpha\\pm\\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta,$$
$$\\tan(\\alpha\\pm\\beta) = \\frac{\\tan\\alpha \\pm \\tan\\beta}{1 \\mp \\tan\\alpha\\tan\\beta}.$$
Perhatikan bahwa pada kosinus tandanya **berlawanan**, sedangkan pada sinus tandanya **searah**.

Sebagai contoh,
$$\\sin 75^\\circ = \\sin(45^\\circ+30^\\circ) = \\frac{\\sqrt{6}+\\sqrt{2}}{4}.$$`,
    },
    {
      id: 'sudut-rangkap',
      kind: 'konsep',
      title: 'Identitas Sudut Rangkap',
      body: `Dengan mengambil $\\beta=\\alpha$ pada identitas jumlah sudut, diperoleh identitas **sudut rangkap**:
$$\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha,$$
$$\\cos 2\\alpha = \\cos^{2}\\alpha - \\sin^{2}\\alpha = 2\\cos^{2}\\alpha - 1 = 1 - 2\\sin^{2}\\alpha,$$
$$\\tan 2\\alpha = \\frac{2\\tan\\alpha}{1-\\tan^{2}\\alpha}.$$
Karena $\\cos 2\\alpha$ memiliki beberapa bentuk, pilih bentuk yang paling sesuai dengan data yang diketahui.

Sebagai contoh, jika $\\sin\\alpha=\\dfrac{3}{5}$ dan $\\alpha$ lancip, maka $\\cos\\alpha=\\dfrac{4}{5}$ sehingga
$$\\sin 2\\alpha = 2\\cdot\\frac{3}{5}\\cdot\\frac{4}{5} = \\frac{24}{25}, \\qquad \\cos 2\\alpha = 1 - 2\\left(\\frac{3}{5}\\right)^{2} = 1-\\frac{18}{25} = \\frac{7}{25}.$$`,
    },
    {
      id: 'aturan',
      kind: 'rumus',
      title: 'Aturan Sinus dan Aturan Kosinus',
      body: `Pada segitiga sebarang $ABC$ dengan sisi $a, b, c$ yang berhadapan dengan sudut $A, B, C$:

**Aturan sinus**
$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}.$$

**Aturan kosinus**
$$a^{2} = b^{2} + c^{2} - 2bc\\cos A.$$

Aturan sinus dipakai bila diketahui dua sudut dan satu sisi, atau dua sisi dan satu sudut di hadapannya. Aturan kosinus dipakai bila diketahui dua sisi dan sudut apitnya, atau ketiga sisinya. Bila $A=90^\\circ$, maka $\\cos A=0$ sehingga aturan kosinus kembali menjadi teorema Pythagoras.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Hati-hati',
          text: 'Pasangan sudut dan sisi harus benar: sisi $a$ selalu berhadapan dengan sudut $A$. Menukar pasangan ini adalah penyebab kesalahan paling umum.',
        },
      ],
    },
    {
      id: 'luas',
      kind: 'rumus',
      title: 'Luas Segitiga',
      body: `Jika dua sisi dan sudut apitnya diketahui, luas segitiga $ABC$ adalah
$$L = \\frac{1}{2}bc\\sin A = \\frac{1}{2}ac\\sin B = \\frac{1}{2}ab\\sin C.$$
Sebagai contoh, untuk $b=5$, $c=8$, dan $A=60^\\circ$:
$$L = \\frac{1}{2}\\cdot5\\cdot8\\cdot\\sin 60^\\circ = 20\\cdot\\frac{\\sqrt{3}}{2} = 10\\sqrt{3} \\approx 17{,}32.$$`,
    },
    {
      id: 'contoh',
      kind: 'contoh',
      title: 'Contoh Terbimbing',
      body: `**Contoh 1 (fungsi periodik).** Diketahui $f(x)=3\\sin\\big(2(x-45^\\circ)\\big)-1$. Tentukan amplitudo, periode, pergeseran fase, serta nilai maksimum dan minimumnya.

*Penyelesaian.* Amplitudo $\\lvert A \\rvert=3$. Periode $\\dfrac{360^\\circ}{2}=180^\\circ$. Pergeseran fase $45^\\circ$ ke kanan dan pergeseran tegak $-1$. Nilai maksimum $3-1=2$ dan nilai minimum $-3-1=-4$.

**Contoh 2 (jumlah sudut).** Hitunglah $\\sin 75^\\circ$.

*Penyelesaian.*
$$\\sin 75^\\circ = \\sin(45^\\circ+30^\\circ) = \\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2}\\cdot\\frac{1}{2} = \\frac{\\sqrt{6}+\\sqrt{2}}{4} \\approx 0{,}966.$$

**Contoh 3 (sudut rangkap).** Diketahui $\\sin\\alpha=\\dfrac{3}{5}$ dengan $\\alpha$ lancip. Tentukan $\\sin 2\\alpha$ dan $\\cos 2\\alpha$.

*Penyelesaian.* Karena $\\alpha$ lancip, $\\cos\\alpha=\\sqrt{1-\\dfrac{9}{25}}=\\dfrac{4}{5}$. Maka
$$\\sin 2\\alpha = 2\\cdot\\frac{3}{5}\\cdot\\frac{4}{5} = \\frac{24}{25}, \\qquad \\cos 2\\alpha = 1 - 2\\left(\\frac{3}{5}\\right)^{2} = \\frac{7}{25}.$$

**Contoh 4 (aturan kosinus dan luas).** Pada segitiga $ABC$ diketahui $b=5$, $c=8$, dan $A=60^\\circ$. Tentukan panjang $a$ dan luas segitiga.

*Penyelesaian.* Dengan aturan kosinus,
$$a^{2} = b^{2}+c^{2}-2bc\\cos A = 25+64-2\\cdot5\\cdot8\\cdot\\frac{1}{2} = 89-40 = 49,$$
sehingga $a=7$. Luasnya
$$L = \\frac{1}{2}bc\\sin A = 20\\cdot\\frac{\\sqrt{3}}{2} = 10\\sqrt{3} \\approx 17{,}32.$$`,
    },
    {
      id: 'latihan-dasar',
      kind: 'latihan-dasar',
      title: 'Latihan Dasar',
      level: 'dasar',
      body: `1. Tentukan amplitudo dan periode $y=4\\sin(2x)$.
2. Hitung $\\sin 30^\\circ\\cos 60^\\circ+\\cos 30^\\circ\\sin 60^\\circ$.
3. Diketahui $\\sin\\alpha=\\dfrac{3}{5}$ dan $\\alpha$ lancip. Tentukan $\\cos\\alpha$.
4. Hitung $1-2\\sin^{2}30^\\circ$.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. Amplitudo $4$ dan periode $\\dfrac{360^\\circ}{2}=180^\\circ$.
2. Bentuk itu sama dengan $\\sin(30^\\circ+60^\\circ)=\\sin 90^\\circ=1$.
3. $\\cos\\alpha=\\sqrt{1-\\dfrac{9}{25}}=\\dfrac{4}{5}$.
4. $1-2\\left(\\dfrac{1}{2}\\right)^{2}=1-\\dfrac{1}{2}=\\dfrac{1}{2}$, sesuai $\\cos 60^\\circ=\\dfrac{1}{2}$.`,
        },
      ],
    },
    {
      id: 'latihan-cakap',
      kind: 'latihan-cakap',
      title: 'Latihan Cakap',
      level: 'cakap',
      body: `1. Tentukan $\\cos 75^\\circ$ menggunakan identitas jumlah sudut.
2. Diketahui $\\tan\\alpha=\\dfrac{1}{2}$. Tentukan $\\tan 2\\alpha$.
3. Pada segitiga $ABC$ diketahui $b=5$, $c=8$, dan $A=60^\\circ$. Tentukan panjang $a$ dan luas segitiga.
4. Pada segitiga $ABC$ diketahui $a=8$, $A=30^\\circ$, dan $B=45^\\circ$. Tentukan panjang sisi $b$.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. $\\cos 75^\\circ = \\cos(45^\\circ+30^\\circ) = \\dfrac{\\sqrt{6}-\\sqrt{2}}{4} \\approx 0{,}259$.
2. $\\tan 2\\alpha = \\dfrac{2\\tan\\alpha}{1-\\tan^{2}\\alpha} = \\dfrac{2(1/2)}{1-1/4} = \\dfrac{1}{3/4} = \\dfrac{4}{3}$.
3. $a^{2}=25+64-40=49$, jadi $a=7$; luas $=10\\sqrt{3}\\approx 17{,}32$.
4. $\\dfrac{a}{\\sin A}=\\dfrac{8}{1/2}=16$, maka $b=16\\sin 45^\\circ = 8\\sqrt{2}\\approx 11{,}31$.`,
        },
      ],
    },
    {
      id: 'latihan-mahir',
      kind: 'latihan-mahir',
      title: 'Latihan Mahir',
      level: 'mahir',
      body: `1. Tentukan amplitudo, periode, dan nilai maksimum $f(x)=2\\sin\\big(3(x-30^\\circ)\\big)+1$.
2. Sederhanakan $\\cos(\\alpha+\\beta)\\cos\\beta+\\sin(\\alpha+\\beta)\\sin\\beta$.
3. Pada segitiga $ABC$ dengan $a=5$, $b=7$, dan $c=8$, tentukan besar sudut $B$.
4. Buktikan $\\sin 2\\alpha=2\\sin\\alpha\\cos\\alpha$ dengan identitas jumlah sudut, lalu hitung $\\sin 2\\alpha$ untuk $\\alpha=30^\\circ$.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat pembahasan',
          text: `1. Amplitudo $2$, periode $\\dfrac{360^\\circ}{3}=120^\\circ$, nilai maksimum $2+1=3$.
2. Bentuk itu sama dengan $\\cos\\big((\\alpha+\\beta)-\\beta\\big)=\\cos\\alpha$.
3. $\\cos B = \\dfrac{a^{2}+c^{2}-b^{2}}{2ac} = \\dfrac{25+64-49}{2\\cdot5\\cdot8} = \\dfrac{40}{80} = \\dfrac{1}{2}$, sehingga $B=60^\\circ$.
4. $\\sin 2\\alpha = \\sin(\\alpha+\\alpha) = \\sin\\alpha\\cos\\alpha+\\cos\\alpha\\sin\\alpha = 2\\sin\\alpha\\cos\\alpha$. Untuk $\\alpha=30^\\circ$: $2\\cdot\\dfrac{1}{2}\\cdot\\dfrac{\\sqrt{3}}{2} = \\dfrac{\\sqrt{3}}{2}$.`,
        },
      ],
    },
    {
      id: 'dunia-nyata',
      kind: 'dunia-nyata',
      title: 'Penerapan di Dunia Nyata',
      body: `Fungsi trigonometri memodelkan pasang surut air laut, suhu musiman, gelombang bunyi, dan arus listrik bolak-balik. Amplitudo menentukan besar simpangan, sedangkan periode menentukan seberapa cepat gejala berulang.

Aturan sinus dan kosinus dipakai dalam **triangulasi** untuk mengukur jarak antartitik yang sulit dijangkau, misalnya lebar danau atau tinggi puncak. Teknik yang sama digunakan pada navigasi, survei tanah, dan penentuan posisi satelit.`,
    },
    {
      id: 'kesalahan-umum',
      kind: 'kesalahan-umum',
      title: 'Kesalahan Umum',
      body: `**1. Salah tanda pada identitas sudut.** Untuk kosinus, tanda pada identitas jumlah/selisih **berlawanan** dengan tanda di dalam kurung: $\\cos(\\alpha+\\beta)=\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta$.
**2. Menganggap $\\sin 2\\alpha=2\\sin\\alpha$.** Sudut rangkap bukan kelipatan biasa; gunakan $\\sin 2\\alpha=2\\sin\\alpha\\cos\\alpha$.
**3. Tertukar periode dan amplitudo.** Amplitudo mengatur tinggi gelombang, periode mengatur panjang satu siklus.
**4. Salah memasangkan sisi dan sudut pada aturan sinus.** Sisi $a$ selalu berhadapan dengan sudut $A$.`,
    },
    {
      id: 'refleksi',
      kind: 'refleksi',
      title: 'Refleksi',
      body: `Jawab dengan jujur:
1. Bagaimana kamu membaca amplitudo dan periode langsung dari rumus fungsi periodik?
2. Kapan aturan sinus lebih tepat dipakai, dan kapan aturan kosinus?
3. Mengapa identitas sudut memudahkan menghitung nilai sudut yang bukan sudut istimewa?`,
    },
    {
      id: 'rangkuman',
      kind: 'rangkuman',
      title: 'Rangkuman',
      blocks: [
        {
          kind: 'table',
          headers: ['Konsep', 'Bentuk / Rumus'],
          rows: [
            ['Fungsi periodik', '$f(x)=A\\sin(B(x-C))+D$'],
            ['Amplitudo', '$\\lvert A \\rvert$'],
            ['Periode', '$\\dfrac{360^\\circ}{\\lvert B \\rvert}$'],
            ['Jumlah sudut sinus', '$\\sin(\\alpha+\\beta)=\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta$'],
            ['Jumlah sudut kosinus', '$\\cos(\\alpha+\\beta)=\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta$'],
            ['Sudut rangkap', '$\\sin 2\\alpha=2\\sin\\alpha\\cos\\alpha$'],
            ['Aturan sinus', '$\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}$'],
            ['Aturan kosinus', '$a^{2}=b^{2}+c^{2}-2bc\\cos A$'],
            ['Luas segitiga', '$L=\\dfrac{1}{2}bc\\sin A$'],
          ],
        },
      ],
    },
    {
      id: 'evaluasi',
      kind: 'evaluasi',
      title: 'Evaluasi',
      body: `Kerjakan kuis topik ini untuk memeriksa pemahamanmu. Buka halaman [Latihan & Asesmen](/latihan) lalu pilih topik **Trigonometri Lanjut**.
`,
    },
  ],
};

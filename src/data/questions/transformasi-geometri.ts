import type { Question } from '@/types/content';

export const transformasiGeometriQuestions: Question[] = [
  {
    id: 'tgeo-01',
    topicId: 'transformasi-geometri',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Titik $A(2,-3)$ ditranslasi oleh $\\binom{4}{1}$. Bayangan titik $A$ adalah …',
    options: [
      { key: 'A', text: '$(6,-2)$' },
      { key: 'B', text: '$(-2,-4)$' },
      { key: 'C', text: '$(6,-4)$' },
      { key: 'D', text: '$(2,-2)$' },
    ],
    answer: 'A',
    explanation:
      'Translasi $\\binom{4}{1}$ memetakan $(x,y)\\rightarrow(x+4,\\,y+1)$, sehingga $(2,-3)\\rightarrow(2+4,\\,-3+1)=(6,-2)$ (A). Opsi B mengurangkan vektor translasi; opsi C menjumlahkan pada absis tetapi mengurangkan pada ordinat; opsi D hanya mengubah ordinat dan mengabaikan translasi absis.',
    hints: [
      'Jumlahkan vektor translasi dengan koordinat titik.',
      'Hitung $(2+4,\\,-3+1)$ komponen per komponen.',
    ],
    competencies: ['translasi'],
  },
  {
    id: 'tgeo-02',
    topicId: 'transformasi-geometri',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Bayangan titik $B(-5,2)$ oleh refleksi terhadap sumbu-$y$ adalah …',
    options: [
      { key: 'A', text: '$(5,2)$' },
      { key: 'B', text: '$(-5,-2)$' },
      { key: 'C', text: '$(2,-5)$' },
      { key: 'D', text: '$(-2,5)$' },
    ],
    answer: 'A',
    explanation:
      'Refleksi terhadap sumbu-$y$ mengubah tanda absis: $(x,y)\\rightarrow(-x,y)$. Maka $(-5,2)\\rightarrow(5,2)$ (A). Opsi B membalik tanda kedua koordinat (refleksi terhadap titik asal); opsi C menukar koordinat saja; opsi D menukar koordinat sekaligus membalik tanda.',
    hints: [
      'Sumbu-$y$ membuat nilai $x$ berubah tanda, sedangkan $y$ tetap.',
      'Ubah $x=-5$ menjadi $x=5$ dan biarkan $y=2$.',
    ],
    competencies: ['refleksi terhadap sumbu $y$'],
  },
  {
    id: 'tgeo-03',
    topicId: 'transformasi-geometri',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Titik $C(3,-4)$ didilatasi dengan pusat titik asal $O$ dan faktor skala $2$. Tentukan ordinat bayangan titik $C$.',
    answer: '-8',
    explanation:
      'Dilatasi $k=2$ memetakan $(x,y)\\rightarrow(2x,2y)$, sehingga $(3,-4)\\rightarrow(6,-8)$. Ordinat bayangannya adalah $-8$.',
    hints: [
      'Kalikan setiap koordinat dengan faktor skala $2$.',
      'Bayangan $(3,-4)$ adalah $(6,-8)$; ambil ordinatnya.',
    ],
    competencies: ['dilatasi'],
  },
  {
    id: 'tgeo-04',
    topicId: 'transformasi-geometri',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Titik $D(2,5)$ dirotasi $90^\\circ$ berlawanan arah jarum jam terhadap titik asal $O$. Bayangannya adalah …',
    options: [
      { key: 'A', text: '$(-5,2)$' },
      { key: 'B', text: '$(5,-2)$' },
      { key: 'C', text: '$(-2,5)$' },
      { key: 'D', text: '$(2,-5)$' },
    ],
    answer: 'A',
    explanation:
      'Rotasi $90^\\circ$ berlawanan arah jarum jam memetakan $(x,y)\\rightarrow(-y,x)$, sehingga $(2,5)\\rightarrow(-5,2)$ (A). Opsi B memakai rotasi $90^\\circ$ searah jarum jam; opsi C hanya membalik tanda absis; opsi D hanya membalik tanda ordinat.',
    hints: [
      'Gunakan $R_{90^\\circ}=\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$.',
      'Rotasi $90^\\circ$ berlawanan arah jarum jam memetakan $(x,y)\\to(-y,x)$.',
    ],
    competencies: ['rotasi'],
  },
  {
    id: 'tgeo-05',
    topicId: 'transformasi-geometri',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'konsep',
    prompt: 'Titik $E(3,-1)$ dicerminkan terhadap garis $y=x$. Tentukan koordinat bayangannya.',
    answer: '(-1,3)',
    acceptedAnswers: ['(-1, 3)', '(-1;3)', 'x=-1, y=3', 'x = -1, y = 3'],
    explanation:
      'Refleksi terhadap garis $y=x$ menukar absis dan ordinat: $(x,y)\\rightarrow(y,x)$. Maka $(3,-1)\\rightarrow(-1,3)$.',
    hints: [
      'Pencerminan terhadap $y=x$ menukar nilai $x$ dan $y$.',
      'Setelah menukar, pastikan koordinat $(x,y)$ menjadi $(y,x)$ dengan urutan yang benar.',
    ],
    competencies: ['refleksi terhadap garis $y=x$'],
  },
  {
    id: 'tgeo-06',
    topicId: 'transformasi-geometri',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penerapan',
    prompt:
      'Titik $F(4,2)$ dirotasi $270^\\circ$ berlawanan arah jarum jam terhadap titik asal $O$. (a) Tentukan bayangannya. (b) Tuliskan matriks rotasi yang dipakai.',
    answer:
      '(a) Rotasi $270^\\circ$ memetakan $(x,y)\\rightarrow(y,-x)$, sehingga $(4,2)\\rightarrow(2,-4)$. Jadi bayangannya $F\'(2,-4)$. (b) Matriksnya $R_{270^\\circ}=\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$.',
    explanation:
      'Kunci menekankan pemetaan rotasi $270^\\circ$ dan penulisan matriksnya dengan benar.',
    hints: [
      'Rotasi $270^\\circ$ berlawanan arah jarum jam sama dengan rotasi $90^\\circ$ searah jarum jam.',
      'Gunakan $R_{270^\\circ}=\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$.',
    ],
    competencies: ['rotasi', 'matriks transformasi'],
    rubric: [
      'Menerapkan pemetaan $(x,y)\\to(y,-x)$ untuk rotasi $270^\\circ$',
      'Memperoleh bayangan $F\'(2,-4)$',
      'Menuliskan matriks $R_{270^\\circ}=\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$',
      'Menyadari $270^\\circ$ berlawanan arah sama dengan $90^\\circ$ searah jarum jam',
    ],
  },
  {
    id: 'tgeo-07',
    topicId: 'transformasi-geometri',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Titik $G(2,3)$ direfleksikan terhadap sumbu-$x$, lalu hasilnya direfleksikan terhadap sumbu-$y$. Bayangan akhirnya adalah …',
    options: [
      { key: 'A', text: '$(-2,-3)$' },
      { key: 'B', text: '$(2,-3)$' },
      { key: 'C', text: '$(-2,3)$' },
      { key: 'D', text: '$(3,2)$' },
    ],
    answer: 'A',
    explanation:
      'Refleksi sumbu-$x$: $(2,3)\\rightarrow(2,-3)$. Refleksi sumbu-$y$: $(2,-3)\\rightarrow(-2,-3)$ (A). Opsi B berhenti setelah refleksi pertama; opsi C hanya menerapkan refleksi terhadap sumbu-$y$; opsi D menukar koordinat.',
    hints: [
      'Kerjakan berurutan sesuai urutan yang diberikan.',
      'Terapkan refleksi sumbu-$x$ lebih dahulu, lalu sumbu-$y$ pada hasilnya.',
    ],
    competencies: ['komposisi transformasi', 'refleksi'],
  },
  {
    id: 'tgeo-08',
    topicId: 'transformasi-geometri',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Sebuah segitiga seluas $12$ satuan luas ditransformasi oleh matriks $\\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix}$. Tentukan luas bayangannya.',
    answer: '108',
    explanation:
      'Determinan matriks $=\\det\\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix}=3(3)-0(0)=9$, sehingga luas bayangan $=9\\times12=108$ satuan luas.',
    hints: [
      'Determinan matriks memberi faktor skala luas.',
      'Luas bayangan $=|\\det M|\\times$ luas awal.',
    ],
    competencies: ['determinan sebagai faktor skala luas', 'dilatasi'],
  },
  {
    id: 'tgeo-09',
    topicId: 'transformasi-geometri',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Sebuah motif diputar $90^\\circ$ berlawanan arah jarum jam terhadap titik asal, lalu dicerminkan terhadap sumbu-$y$. (a) Tentukan bayangan titik $H(3,-1)$. (b) Tentukan matriks transformasi tunggal yang setara.',
    answer:
      '(a) Rotasi $90^\\circ$: $(3,-1)\\rightarrow(1,3)$. Refleksi sumbu-$y$: $(1,3)\\rightarrow(-1,3)$. Jadi bayangannya $(-1,3)$. (b) Matriks gabungan $M=\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}=\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$, yaitu refleksi terhadap garis $y=x$; memang $(3,-1)\\rightarrow(-1,3)$.',
    explanation:
      'Kunci menekankan urutan komposisi, perkalian matriks yang benar, dan pengenalan matriks hasil sebagai refleksi terhadap garis $y=x$.',
    hints: [
      'Kerjakan rotasi lebih dahulu, baru refleksi.',
      'Matriks $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ menukar koordinat titik.',
    ],
    competencies: ['komposisi transformasi', 'kontekstual'],
    rubric: [
      'Menerapkan rotasi $90^\\circ$ terlebih dahulu',
      'Menerapkan refleksi sumbu-$y$ pada hasil rotasi',
      'Memperoleh bayangan akhir $(-1,3)$',
      'Menyusun matriks gabungan dan mengenalinya sebagai refleksi $y=x$',
    ],
  },
  {
    id: 'tgeo-10',
    topicId: 'transformasi-geometri',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Titik $P(x,y)$ direfleksikan terhadap sumbu-$x$, lalu hasilnya direfleksikan terhadap sumbu-$y$. Tentukan matriks gabungannya dan jelaskan transformasi tunggal yang setara.',
    answer:
      'Refleksi sumbu-$x$: $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$. Refleksi sumbu-$y$: $\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$. Matriks gabungan $M=\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}=\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$. Matriks ini memetakan $(x,y)\\rightarrow(-x,-y)$, yaitu rotasi $180^\\circ$ terhadap titik asal, yang setara pula dengan refleksi terhadap titik asal.',
    explanation:
      'Kunci: mengalikan matriks dengan urutan "kedua" $\\times$ "pertama", lalu membaca hasil $\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ sebagai rotasi $180^\\circ$.',
    hints: [
      'Matriks gabungan adalah hasil kali matriks kedua dengan matriks pertama.',
      'Perhatikan bahwa $\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ membalik tanda kedua koordinat.',
    ],
    competencies: ['komposisi transformasi', 'penalaran'],
    rubric: [
      'Menuliskan matriks refleksi sumbu-$x$ dan sumbu-$y$',
      'Mengalikan matriks dengan urutan kedua $\\times$ pertama',
      'Memperoleh $\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$',
      'Mengenali hasilnya sebagai rotasi $180^\\circ$',
    ],
  },
  {
    id: 'tgeo-11',
    topicId: 'transformasi-geometri',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah pola pada papan koordinat dirotasi $180^\\circ$ terhadap titik asal, lalu diperbesar dengan faktor skala $2$ berpusat $O$. (a) Tentukan bayangan titik $Q(-2,3)$. (b) Tentukan matriks gabungannya. (c) Berapa kali luas pola berubah?',
    answer:
      '(a) Rotasi $180^\\circ$: $(-2,3)\\rightarrow(2,-3)$. Dilatasi $2$: $(2,-3)\\rightarrow(4,-6)$. Jadi bayangannya $(4,-6)$. (b) $M=\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}=\\begin{pmatrix} -2 & 0 \\\\ 0 & -2 \\end{pmatrix}$. (c) $\\lvert\\det(M)\\rvert=\\lvert(-2)(-2)-0(0)\\rvert=4$, sehingga luas pola menjadi $4$ kali semula.',
    explanation:
      'Kunci: mengerjakan komposisi rotasi lalu dilatasi, menyusun matriks gabungan, dan menghubungkan determinan dengan faktor skala luas.',
    hints: [
      'Rotasi $180^\\circ$ membalik tanda kedua koordinat.',
      'Faktor skala luas adalah $\\lvert\\det(M)\\rvert$.',
    ],
    competencies: ['komposisi transformasi', 'dilatasi', 'pemodelan'],
    rubric: [
      'Memetakan titik $Q(-2,3)$ menjadi $(4,-6)$',
      'Menyusun matriks gabungan $\\begin{pmatrix} -2 & 0 \\\\ 0 & -2 \\end{pmatrix}$',
      'Menghitung $\\lvert\\det M\\rvert=4$',
      'Menyimpulkan luas pola menjadi $4$ kali semula',
    ],
  },
  {
    id: 'tgeo-12',
    topicId: 'transformasi-geometri',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Titik $(1,2)$ dikenai refleksi terhadap sumbu-$y$ dilanjutkan rotasi $90^\\circ$ berlawanan arah jarum jam terhadap titik asal. Bayangannya adalah …',
    options: [
      { key: 'A', text: '$(-2,-1)$' },
      { key: 'B', text: '$(2,1)$' },
      { key: 'C', text: '$(-1,-2)$' },
      { key: 'D', text: '$(2,-1)$' },
    ],
    answer: 'A',
    explanation:
      'Refleksi sumbu-$y$: $(1,2)\\rightarrow(-1,2)$. Rotasi $90^\\circ$: $(-1,2)\\rightarrow(-2,-1)$ (A). Opsi B adalah hasil bila urutan dibalik; opsi C menerapkan pemetaan $(x,y)\\to(-y,-x)$; opsi D hanya membalik tanda ordinat setelah refleksi. Hal ini menunjukkan urutan transformasi memang memengaruhi hasil.',
    hints: [
      'Kerjakan refleksi lebih dahulu, baru rotasi.',
      'Bandingkan hasilmu dengan keadaan bila urutan dibalik.',
    ],
    competencies: ['komposisi transformasi', 'penalaran'],
  },
  {
    id: 'tgeo-13',
    topicId: 'transformasi-geometri',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      "Segitiga $ABC$ dengan $A(1,1)$, $B(3,1)$, dan $C(1,2)$ dirotasi $90^\\circ$ berlawanan arah jarum jam terhadap titik asal. (a) Tentukan koordinat $A'$, $B'$, dan $C'$. (b) Tentukan luas segitiga $ABC$ dan luas bayangannya. (c) Jelaskan mengapa luasnya sama.",
    answer:
      "(a) Rotasi $90^\\circ$: $(x,y)\\rightarrow(-y,x)$, sehingga $A(1,1)\\rightarrow A'(-1,1)$, $B(3,1)\\rightarrow B'(-1,3)$, dan $C(1,2)\\rightarrow C'(-2,1)$. (b) Luas $ABC=\\dfrac{1}{2}\\times AB\\times AC=\\dfrac{1}{2}\\times2\\times1=1$; luas $A'B'C'=\\dfrac{1}{2}\\times2\\times1=1$. (c) Matriks rotasi memiliki $\\det=1$, sehingga luas bangun tidak berubah; rotasi hanya memindahkan dan memutar bangun tanpa mengubah ukurannya.",
    explanation:
      "Kunci: menerapkan pemetaan rotasi $90^\\circ$ pada setiap titik sudut, menghitung luas segitiga siku-siku, dan menjelaskan bahwa determinan $1$ menjaga luas.",
    hints: [
      'Gunakan pemetaan rotasi $90^\\circ$ untuk setiap titik sudut.',
      'Luas segitiga siku-siku $=\\dfrac{1}{2}\\times$ alas $\\times$ tinggi.',
    ],
    competencies: ['rotasi', 'luas bangun', 'evaluasi'],
    rubric: [
      'Menerapkan $(x,y)\\to(-y,x)$ pada setiap titik sudut',
      "Menuliskan $A'(-1,1)$, $B'(-1,3)$, dan $C'(-2,1)$",
      'Menghitung luas $ABC$ dan luas bayangan sama dengan $1$',
      'Menjelaskan determinan $1$ menjaga luas bangun',
    ],
  },
  {
    id: 'tgeo-14',
    topicId: 'transformasi-geometri',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      "Titik $P(a,b)$ diputar $90^\\circ$ berlawanan arah jarum jam terhadap titik asal $O$, lalu hasilnya dicerminkan terhadap sumbu-$x$. Jika bayangan akhirnya $P''(-3,4)$, tentukan koordinat titik $P$ dan matriks transformasi tunggalnya.",
    answer:
      "Rotasi $90^\\circ$ memetakan $(a,b)\\to(-b,a)$, lalu refleksi terhadap sumbu-$x$ memetakan $(x,y)\\to(x,-y)$, sehingga bayangan akhirnya $(-b,-a)$. Dari $(-b,-a)=(-3,4)$ diperoleh $b=3$ dan $a=-4$, jadi $P(-4,3)$. Matriks gabungannya $M=\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}=\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$, yaitu refleksi terhadap garis $y=-x$. Periksa: $M\\begin{pmatrix} -4 \\\\ 3 \\end{pmatrix}=\\begin{pmatrix} -3 \\\\ 4 \\end{pmatrix}$, benar.",
    explanation:
      'Kunci: menuliskan pemetaan tiap tahap, menyusun persamaan dari bayangan akhir, mengalikan matriks dengan urutan yang tepat, lalu mengenali hasilnya sebagai refleksi $y=-x$.',
    hints: [
      'Tuliskan pemetaan rotasi $90^\\circ$ lebih dahulu, baru refleksi sumbu-$x$.',
      'Bayangan akhir $(-b,-a)$ dapat dipakai untuk mencari $a$ dan $b$.',
      'Matriks gabungan adalah matriks kedua dikali matriks pertama.',
    ],
    competencies: ['komposisi transformasi', 'matriks transformasi', 'penalaran'],
    rubric: [
      'Menuliskan pemetaan rotasi $90^\\circ$ dan refleksi sumbu-$x$',
      'Menyusun matriks gabungan $\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$',
      'Menemukan koordinat awal $P(-4,3)$',
      'Mengenali matriks gabungan sebagai refleksi terhadap garis $y=-x$',
    ],
  },
  {
    id: 'tgeo-15',
    topicId: 'transformasi-geometri',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Pada sebuah animasi komputer, sebuah objek di titik $(2,1)$ diputar $90^\\circ$ berlawanan arah jarum jam terhadap titik asal, lalu digeser oleh translasi $\\binom{3}{-2}$. Tentukan koordinat akhir objek.',
    answer: '(2,0)',
    acceptedAnswers: ['(2,0)', '(2, 0)', '(2;0)', 'x=2, y=0', 'x = 2, y = 0'],
    explanation:
      'Rotasi $90^\\circ$ berlawanan arah jarum jam memetakan $(x,y)\\rightarrow(-y,x)$, sehingga $(2,1)\\rightarrow(-1,2)$. Translasi $\\binom{3}{-2}$ lalu memberi $(-1+3,\\,2-2)=(2,0)$. Jadi koordinat akhir objek adalah $(2,0)$.',
    hints: [
      'Terapkan rotasi $90^\\circ$ lebih dahulu: $(x,y)\\rightarrow(-y,x)$.',
      'Setelah rotasi, jumlahkan vektor translasi $\\binom{3}{-2}$ pada hasilnya.',
    ],
    competencies: ['rotasi', 'translasi', 'kontekstual'],
  },
  {
    id: 'tgeo-16',
    topicId: 'transformasi-geometri',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Segitiga $ABC$ dengan $A(1,0)$, $B(0,2)$, dan $C(2,2)$ dikenai dilatasi berpusat di titik asal dengan faktor skala $k>0$. (a) Hitung luas segitiga $ABC$. (b) Tentukan matriks dilatasinya dan jelaskan bagaimana luas berubah. (c) Tentukan $k$ jika luas bayangan menjadi $12$ satuan luas.',
    answer:
      '(a) Luas $ABC=\\tfrac{1}{2}\\left|1(2-2)+0(2-0)+2(0-2)\\right|=\\tfrac{1}{2}|-4|=2$ satuan luas. (b) Matriks dilatasi $\\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix}$ dengan $\\det=k^2$, sehingga luas bayangan sama dengan $k^2$ kali luas awal. (c) Dari $k^2\\times2=12$ diperoleh $k^2=6$, jadi $k=\\sqrt{6}$ karena $k>0$.',
    explanation:
      'Kunci: menghitung luas dengan rumus koordinat, memakai determinan dilatasi untuk skala luas, lalu menyelesaikan $k^2=6$.',
    hints: [
      'Gunakan rumus luas $\\tfrac{1}{2}\\left|x_A(y_B-y_C)+x_B(y_C-y_A)+x_C(y_A-y_B)\\right|$.',
      'Dilatasi faktor $k$ mengalikan luas dengan $k^2$ karena determinannya $k^2$.',
    ],
    competencies: ['dilatasi', 'determinan', 'luas bangun', 'penalaran'],
    rubric: [
      'Menghitung luas awal $2$ satuan luas',
      'Menuliskan matriks dilatasi dan $\\det=k^2$',
      'Menyimpulkan luas bayangan sama dengan $k^2$ kali luas awal',
      'Menyelesaikan $k=\\sqrt{6}$',
    ],
  },
];

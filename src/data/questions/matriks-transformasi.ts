import type { Question } from '@/types/content';

export const matriksTransformasiQuestions: Question[] = [
  {
    id: 'mtf-01',
    topicId: 'matriks-transformasi',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt:
      'Bayangan titik $A(3,-2)$ oleh refleksi terhadap sumbu $x$ adalah …',
    options: [
      { key: 'A', text: '$(-3,-2)$' },
      { key: 'B', text: '$(3,2)$' },
      { key: 'C', text: '$(-3,2)$' },
      { key: 'D', text: '$(2,3)$' },
    ],
    answer: 'B',
    explanation:
      'Refleksi terhadap sumbu $x$ mengubah tanda ordinat: $(x,y)\\rightarrow(x,-y)$. Maka $(3,-2)\\rightarrow(3,2)$.',
    hints: ['Sumbu $x$ membuat nilai $y$ berubah tanda.'],
    competencies: ['refleksi terhadap sumbu $x$'],
  },
  {
    id: 'mtf-02',
    topicId: 'matriks-transformasi',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Bayangan titik $B(1,3)$ oleh translasi $\\binom{-2}{5}$ adalah …',
    options: [
      { key: 'A', text: '$(-1,8)$' },
      { key: 'B', text: '$(3,-2)$' },
      { key: 'C', text: '$(-1,-2)$' },
      { key: 'D', text: '$(3,8)$' },
    ],
    answer: 'A',
    explanation:
      'Translasi $\\binom{-2}{5}$ memetakan $(x,y)\\rightarrow(x-2, y+5)$. Maka $(1,3)\\rightarrow(-1,8)$.',
    hints: ['Jumlahkan vektor translasi dengan koordinat titik.'],
    competencies: ['translasi'],
  },
  {
    id: 'mtf-03',
    topicId: 'matriks-transformasi',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Tentukan determinan matriks $\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$.',
    answer: '6',
    explanation:
      '$\\det = 2(3) - 0(0) = 6$. Determinan ini juga berarti luas bangun menjadi $6$ kali semula.',
    hints: ['Untuk matriks diagonal, determinan adalah hasil kali entri diagonalnya.'],
    competencies: ['determinan matriks $2 \\times 2$'],
  },
  {
    id: 'mtf-04',
    topicId: 'matriks-transformasi',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'konsep',
    prompt:
      'Titik $(3,1)$ dirotasi $90^\\circ$ berlawanan arah jarum jam terhadap titik asal menjadi $(a,b)$. Tentukan nilai $a$.',
    answer: '-1',
    explanation:
      'Rotasi $90^\\circ$ memakai $(x,y)\\rightarrow(-y,x)$, sehingga $(3,1)\\rightarrow(-1,3)$. Jadi $a=-1$.',
    hints: ['Gunakan matriks $R_{90^\\circ}=\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$.'],
    competencies: ['rotasi'],
  },
  {
    id: 'mtf-05',
    topicId: 'matriks-transformasi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Bayangan titik $(-2,5)$ oleh rotasi $180^\\circ$ terhadap titik asal adalah …',
    options: [
      { key: 'A', text: '$(2,5)$' },
      { key: 'B', text: '$(2,-5)$' },
      { key: 'C', text: '$(-2,-5)$' },
      { key: 'D', text: '$(5,-2)$' },
    ],
    answer: 'B',
    explanation:
      'Rotasi $180^\\circ$ memetakan $(x,y)\\rightarrow(-x,-y)$, sehingga $(-2,5)\\rightarrow(2,-5)$.',
    hints: ['Rotasi $180^\\circ$ mengubah tanda kedua koordinat.'],
    competencies: ['rotasi'],
  },
  {
    id: 'mtf-06',
    topicId: 'matriks-transformasi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Matriks yang mewakili refleksi terhadap garis $y=x$ adalah …',
    options: [
      { key: 'A', text: '$\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$' },
      { key: 'B', text: '$\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$' },
      { key: 'C', text: '$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$' },
      { key: 'D', text: '$\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$' },
    ],
    answer: 'C',
    explanation:
      'Refleksi terhadap garis $y=x$ menukar koordinat: $(x,y)\\rightarrow(y,x)$, diwakili $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$.',
    hints: ['Pencerminan terhadap $y=x$ menukar absis dan ordinat.'],
    competencies: ['refleksi terhadap garis $y=x$'],
  },
  {
    id: 'mtf-07',
    topicId: 'matriks-transformasi',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'konsep',
    prompt:
      'Tentukan determinan matriks rotasi sebesar sudut apa pun, $\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$.',
    answer: '1',
    explanation:
      '$\\det = \\cos\\theta\\cdot\\cos\\theta - (-\\sin\\theta)(\\sin\\theta) = \\cos^{2}\\theta+\\sin^{2}\\theta = 1$. Karena determinannya $1$, rotasi tidak mengubah luas bangun.',
    hints: ['Gunakan identitas $\\sin^{2}\\theta+\\cos^{2}\\theta=1$.'],
    competencies: ['rotasi', 'determinan matriks'],
  },
  {
    id: 'mtf-08',
    topicId: 'matriks-transformasi',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penerapan',
    prompt:
      'Titik $(1,-2)$ ditransformasi oleh matriks $D=\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$. Tentukan bayangannya, lalu tentukan peta baliknya menggunakan matriks invers.',
    answer:
      'Bayangan: $D\\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ -6 \\end{pmatrix}$. Determinan $\\det(D)=6$, maka $D^{-1}=\\dfrac{1}{6}\\begin{pmatrix} 3 & 0 \\\\ 0 & 2 \\end{pmatrix}$. Menerapkannya pada $(2,-6)$: $D^{-1}\\begin{pmatrix} 2 \\\\ -6 \\end{pmatrix} = \\dfrac{1}{6}\\begin{pmatrix} 6 \\\\ -12 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}$, kembali ke titik asal.',
    explanation:
      'Kunci menekankan penerapan matriks pada vektor kolom, perhitungan determinan, penurunan invers, dan pemeriksaan bahwa invers mengembalikan titik asal.',
    hints: [
      'Kalikan matriks dengan vektor kolom $\\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}$.',
      'Untuk matriks diagonal, invers diperoleh dengan membalik tiap entri diagonal.',
    ],
    competencies: ['dilatasi', 'invers matriks'],
  },
  {
    id: 'mtf-09',
    topicId: 'matriks-transformasi',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Komposisi refleksi terhadap sumbu $x$ dilanjutkan refleksi terhadap sumbu $y$ sama dengan …',
    options: [
      { key: 'A', text: 'refleksi terhadap titik asal' },
      { key: 'B', text: 'rotasi $180^\\circ$ terhadap titik asal' },
      { key: 'C', text: 'rotasi $90^\\circ$ berlawanan arah jarum jam' },
      { key: 'D', text: 'refleksi terhadap garis $y=x$' },
    ],
    answer: 'B',
    explanation:
      'Refleksi sumbu $x$: $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$, refleksi sumbu $y$: $\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$. Hasil kalinya $\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$, yaitu rotasi $180^\\circ$ (sekaligus sama dengan refleksi terhadap titik asal).',
    hints: ['Kalikan matriks kedua komposisi dengan urutan yang benar.'],
    competencies: ['komposisi transformasi', 'penalaran'],
  },
  {
    id: 'mtf-10',
    topicId: 'matriks-transformasi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Titik $G(2,1)$ dirotasi $90^\\circ$ berlawanan arah jarum jam, lalu direfleksikan terhadap sumbu $x$. Tentukan bayangannya dan identifikasi transformasi tunggal yang setara.',
    answer:
      'Rotasi $90^\\circ$: $(2,1)\\rightarrow(-1,2)$. Refleksi terhadap sumbu $x$: $(-1,2)\\rightarrow(-1,-2)$. Jadi bayangannya $(-1,-2)$. Matriks gabungan $M=\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}=\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$, yaitu refleksi terhadap garis $y=-x$.',
    explanation:
      'Kunci menekankan urutan komposisi, perkalian matriks yang benar, dan pengenalan matriks hasil sebagai refleksi terhadap garis $y=-x$.',
    hints: [
      'Kerjakan rotasi lebih dahulu, baru refleksi.',
      'Matriks $\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$ memetakan $(x,y)\\rightarrow(-y,-x)$.',
    ],
    competencies: ['komposisi transformasi', 'rotasi', 'refleksi'],
  },
  {
    id: 'mtf-11',
    topicId: 'matriks-transformasi',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Sebuah persegi satuan (luas $1$) ditransformasi oleh matriks $\\begin{pmatrix} 3 & 0 \\\\ 0 & 2 \\end{pmatrix}$. Luas bayangannya adalah …',
    options: [
      { key: 'A', text: '$1$' },
      { key: 'B', text: '$5$' },
      { key: 'C', text: '$6$' },
      { key: 'D', text: '$9$' },
    ],
    answer: 'C',
    explanation:
      'Luas bayangan $=|\\det(M)|\\times$ luas awal. $\\det(M)=3(2)-0(0)=6$, sehingga luas bayangannya $6\\times1=6$.',
    hints: ['Determinan matriks adalah faktor skala luas.'],
    competencies: ['determinan sebagai faktor skala luas'],
  },
  {
    id: 'mtf-12',
    topicId: 'matriks-transformasi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Titik $P(4,-3)$ dirotasi $90^\\circ$ berlawanan arah jarum jam terhadap titik asal, lalu direfleksikan terhadap sumbu-$y$. (a) Tentukan bayangan akhirnya. (b) Tuliskan matriks transformasi tunggalnya. (c) Jelaskan mengapa hasilnya berbeda jika urutan kedua transformasi dibalik.',
    answer:
      '(a) Rotasi $90^\\circ$: $(4,-3)\\rightarrow(3,4)$. Refleksi terhadap sumbu-$y$: $(3,4)\\rightarrow(-3,4)$. Jadi bayangan akhirnya $(-3,4)$. (b) Matriks gabungan $M=\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}=\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$, yaitu refleksi terhadap garis $y=x$. (c) Jika urutan dibalik, refleksi lebih dahulu lalu rotasi, matriksnya menjadi $\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$ (refleksi terhadap garis $y=-x$) sehingga bayangannya berbeda. Perkalian matriks tidak komutatif.',
    explanation:
      'Kunci: mengerjakan komposisi sesuai urutan, menyusun matriks gabungan, dan menjelaskan pengaruh urutan karena matriks tidak komutatif.',
    hints: ['Kalikan matriks dengan urutan "kedua" $\\times$ "pertama".', 'Bandingkan $(-3,4)$ dengan hasil urutan terbalik.'],
    competencies: ['komposisi transformasi', 'matriks transformasi', 'evaluasi'],
  },
  {
    id: 'mtf-13',
    topicId: 'matriks-transformasi',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah motif pada papan koordinat diperbesar $2$ kali pada arah-$x$ dan $3$ kali pada arah-$y$ terhadap titik asal. (a) Tuliskan matriks transformasinya. (b) Tentukan bayangan titik $(2,1)$. (c) Berapa kali luas motif berubah?',
    answer:
      '(a) Matriksnya $\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$. (b) $\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}=\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$, jadi bayangannya $(4,3)$. (c) Determinan $\\det=2(3)-0(0)=6$, sehingga luas motif menjadi $6$ kali luas semula.',
    explanation:
      'Kunci: menyusun matriks dilatasi tak seragam, menerapkannya pada titik, dan menghubungkan determinan dengan faktor skala luas.',
    hints: ['Faktor arah-$x$ dan arah-$y$ menjadi entri diagonal.', 'Faktor skala luas adalah $|\\det|$.'],
    competencies: ['dilatasi', 'determinan', 'pemodelan'],
  },
  {
    id: 'mtf-14',
    topicId: 'matriks-transformasi',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Sebuah pola hiasan diputar $180^\\circ$ terhadap titik asal, lalu digeser oleh translasi $(2,-1)$. (a) Nyatakan transformasi ini pada koordinat. (b) Tentukan bayangan titik $(3,2)$. (c) Jelaskan mengapa transformasi ini bukan transformasi linear murni.',
    answer:
      '(a) Rotasi $180^\\circ$ memetakan $(x,y)\\rightarrow(-x,-y)$, lalu translasi menambah: $(x,y)\\rightarrow(-x+2,\\,-y-1)$. (b) Untuk $(3,2)$: $(-3+2,\\,-2-1)=(-1,-3)$. (c) Transformasi ini bukan linear murni karena adanya pergeseran konstanta $(2,-1)$ yang tidak dapat dinyatakan sebagai perkalian matriks $2\\times2$ terhadap titik asal; translasi memindahkan titik asal.',
    explanation:
      'Kunci: menggabungkan rotasi dan translasi pada koordinat, menerapkannya, serta membedakan transformasi linear (melalui titik asal) dari translasi.',
    hints: ['Rotasi $180^\\circ$ membalik tanda kedua koordinat.', 'Translasi menambahkan konstanta, bukan mengalikan matriks.'],
    competencies: ['rotasi', 'translasi', 'kontekstual'],
  },
];

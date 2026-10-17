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
      'Refleksi terhadap sumbu $x$ mengubah tanda ordinat: $(x,y)\\rightarrow(x,-y)$. Maka $(3,-2)\\rightarrow(3,2)$. Opsi A dan C keliru mengubah tanda absis sehingga menyerupai refleksi terhadap sumbu $y$ atau rotasi $180^\\circ$; opsi D menukar kedua koordinat, yang justru refleksi terhadap garis $y=x$.',
    hints: [
      'Sumbu $x$ membuat nilai $y$ berubah tanda.',
      'Refleksi terhadap sumbu $x$: $(x,y)\\rightarrow(x,-y)$.',
    ],
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
      'Translasi $\\binom{-2}{5}$ memetakan $(x,y)\\rightarrow(x-2, y+5)$. Maka $(1,3)\\rightarrow(-1,8)$. Opsi B dan D keliru menerapkan tanda pada komponen $x$; opsi C salah menerapkan tanda pada komponen $y$ dengan mengurangi $5$ alih-alih menambahkannya.',
    hints: [
      'Jumlahkan vektor translasi dengan koordinat titik.',
      'Komponen pertama menggeser absis; komponen kedua menggeser ordinat.',
    ],
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
    hints: [
      'Untuk matriks diagonal, determinan adalah hasil kali entri diagonalnya.',
      'Kalikan $2$ dengan $3$.',
      'Determinan ini juga berarti luas bangun menjadi $6$ kali semula.',
    ],
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
    hints: [
      'Gunakan matriks $R_{90^\\circ}=\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$.',
      'Kalikan matriks itu dengan vektor kolom $\\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}$.',
      'Rotasi memberi $(-y, x) = (-1, 3)$, sehingga $a = -1$.',
    ],
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
      'Rotasi $180^\\circ$ memetakan $(x,y)\\rightarrow(-x,-y)$, sehingga $(-2,5)\\rightarrow(2,-5)$. Opsi A hanya mengubah tanda absis (refleksi terhadap sumbu $y$); opsi C hanya mengubah tanda ordinat (refleksi terhadap sumbu $x$); opsi D menukar koordinat seperti refleksi terhadap garis $y=x$.',
    hints: [
      'Rotasi $180^\\circ$ mengubah tanda kedua koordinat.',
      'Gunakan $R_{180^\\circ}=\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$.',
    ],
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
      'Refleksi terhadap garis $y=x$ menukar koordinat: $(x,y)\\rightarrow(y,x)$, diwakili $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$. Opsi A adalah refleksi terhadap sumbu $x$; opsi B adalah refleksi terhadap sumbu $y$; opsi D adalah refleksi terhadap garis $y=-x$.',
    hints: [
      'Pencerminan terhadap $y=x$ menukar absis dan ordinat.',
      'Kolom matriks adalah bayangan vektor basis $(1,0)$ dan $(0,1)$.',
    ],
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
    hints: [
      'Gunakan identitas $\\sin^{2}\\theta+\\cos^{2}\\theta=1$.',
      'Hitung $\\cos\\theta\\cdot\\cos\\theta - (-\\sin\\theta)(\\sin\\theta)$.',
    ],
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
    rubric: [
      'Menghitung bayangan $D\\begin{pmatrix}1\\\\-2\\end{pmatrix}=\\begin{pmatrix}2\\\\-6\\end{pmatrix}$',
      'Menghitung $\\det(D)=6$ dan $D^{-1}=\\dfrac{1}{6}\\begin{pmatrix}3&0\\\\0&2\\end{pmatrix}$',
      'Menerapkan $D^{-1}$ untuk mengembalikan titik ke $(1,-2)$',
    ],
  },
  {
    id: 'mtf-09',
    topicId: 'matriks-transformasi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Dua garis melalui titik asal membentuk sudut $\\theta$ satu sama lain. Garis pertama membentuk sudut $\\alpha$ terhadap sumbu-$x$ positif dan garis kedua bersudut $\\beta=\\alpha+\\theta$. (a) Tuliskan matriks refleksi terhadap garis bersudut $\\phi$, yaitu $R_\\phi=\\begin{pmatrix}\\cos 2\\phi & \\sin 2\\phi \\\\ \\sin 2\\phi & -\\cos 2\\phi\\end{pmatrix}$. (b) Hitung hasil kali $R_\\beta R_\\alpha$ dan tunjukkan bahwa hasilnya adalah matriks rotasi sebesar $2\\theta$. (c) Jelaskan mengapa komposisi dua refleksi yang garisnya berpotongan di titik asal tidak pernah menghasilkan refleksi.',
    answer:
      '(a) Dengan $R_\\phi=\\begin{pmatrix}\\cos 2\\phi & \\sin 2\\phi \\\\ \\sin 2\\phi & -\\cos 2\\phi\\end{pmatrix}$, untuk garis pertama $\\phi=\\alpha$ dan garis kedua $\\phi=\\beta$. (b) $R_\\beta R_\\alpha=\\begin{pmatrix}\\cos 2\\beta & \\sin 2\\beta \\\\ \\sin 2\\beta & -\\cos 2\\beta\\end{pmatrix}\\begin{pmatrix}\\cos 2\\alpha & \\sin 2\\alpha \\\\ \\sin 2\\alpha & -\\cos 2\\alpha\\end{pmatrix}$. Entri $(1,1)=\\cos 2\\beta\\cos 2\\alpha+\\sin 2\\beta\\sin 2\\alpha=\\cos(2\\beta-2\\alpha)=\\cos 2\\theta$. Entri $(1,2)=\\cos 2\\beta\\sin 2\\alpha-\\sin 2\\beta\\cos 2\\alpha=\\sin(2\\alpha-2\\beta)=-\\sin 2\\theta$. Entri $(2,1)=\\sin 2\\beta\\cos 2\\alpha-\\cos 2\\beta\\sin 2\\alpha=\\sin 2\\theta$, dan entri $(2,2)=\\sin 2\\beta\\sin 2\\alpha+\\cos 2\\beta\\cos 2\\alpha=\\cos 2\\theta$. Jadi $R_\\beta R_\\alpha=\\begin{pmatrix}\\cos 2\\theta & -\\sin 2\\theta \\\\ \\sin 2\\theta & \\cos 2\\theta\\end{pmatrix}$, yaitu rotasi sebesar $2\\theta$. (c) Determinan setiap refleksi adalah $-1$, sedangkan determinan $R_\\beta R_\\alpha$ adalah $(\\det R_\\beta)(\\det R_\\alpha)=(-1)(-1)=1$, sama seperti determinan rotasi. Matriks refleksi selalu berdeterminan $-1$, sehingga komposisi dua refleksi tidak mungkin berupa refleksi.',
    explanation:
      'Kunci: menyusun matriks refleksi bersudut, mengalikan dua matriks dengan identitas sudut, mengenali matriks hasil sebagai rotasi $2\\theta$, lalu memakai argumen determinan untuk menyingkirkan kemungkinan refleksi.',
    hints: [
      'Gunakan identitas $\\cos(A-B)=\\cos A\\cos B+\\sin A\\sin B$ dan $\\sin(A-B)=\\sin A\\cos B-\\cos A\\sin B$.',
      'Determinan matriks refleksi adalah $-1$, sedangkan determinan rotasi $1$.',
    ],
    competencies: ['komposisi transformasi', 'matriks refleksi', 'pembuktian', 'determinan'],
    rubric: [
      'Menuliskan matriks refleksi $R_\\phi$ untuk $\\phi=\\alpha$ dan $\\phi=\\beta$',
      'Mengalikan $R_\\beta R_\\alpha$ dan memakai identitas sudut',
      'Memperoleh matriks rotasi sebesar $2\\theta$',
      'Memakai argumen determinan: refleksi $-1$ sedangkan rotasi $1$',
    ],
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
    rubric: [
      'Menerapkan rotasi $90^\\circ$ pada $(2,1)$ menjadi $(-1,2)$',
      'Menerapkan refleksi sumbu-$x$ menjadi $(-1,-2)$',
      'Mengalikan matriks gabungan menjadi $\\begin{pmatrix}0&-1\\\\-1&0\\end{pmatrix}$',
      'Mengenali hasilnya sebagai refleksi terhadap $y=-x$',
    ],
  },
  {
    id: 'mtf-11',
    topicId: 'matriks-transformasi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Sebuah transformasi linear $T$ memetakan persegi satuan menjadi jajar genjang berluas $5$. Diketahui $T(1,0)=(2,1)$ dan $T(0,1)=(1,c)$. (a) Tentukan semua nilai $c$ yang mungkin. (b) Tuliskan matriks $T$ untuk setiap nilai $c$. (c) Tentukan luas bayangan segitiga bertitik sudut $(0,0)$, $(3,0)$, dan $(0,2)$.',
    answer:
      'Kolom-kolom $T$ adalah bayangan vektor basis, sehingga $T=\\begin{pmatrix} 2 & 1 \\\\ 1 & c \\end{pmatrix}$ dan $\\det(T)=2c-1$. Persegi satuan berluas $1$, dan luas bayangannya $|\\det(T)|=5$, sehingga $2c-1=5$ atau $2c-1=-5$. Dari situ $c=3$ atau $c=-2$; keduanya memenuhi. (b) Untuk $c=3$: $T=\\begin{pmatrix} 2 & 1 \\\\ 1 & 3 \\end{pmatrix}$; untuk $c=-2$: $T=\\begin{pmatrix} 2 & 1 \\\\ 1 & -2 \\end{pmatrix}$. (c) Luas segitiga awal $=\\dfrac{1}{2}\\cdot3\\cdot2=3$. Karena $|\\det(T)|=5$, luas bayangannya $5\\times3=15$ satuan luas, sama untuk kedua nilai $c$.',
    explanation:
      'Kunci: membaca kolom matriks dari bayangan vektor basis, memakai $|\\det|$ sebagai faktor skala luas, menyelesaikan persamaan nilai mutlak (dua kemungkinan), lalu menerapkan faktor skala pada luas segitiga.',
    hints: [
      'Bayangan $(1,0)$ dan $(0,1)$ menjadi kolom-kolom matriks $T$.',
      'Luas bayangan $=|\\det(T)|\\times$ luas bangun awal; ingat determinan boleh negatif.',
    ],
    competencies: ['matriks transformasi', 'determinan sebagai faktor luas', 'penalaran'],
    rubric: [
      'Menyusun $T=\\begin{pmatrix}2&1\\\\1&c\\end{pmatrix}$ dari bayangan vektor basis',
      'Memakai $|\\det(T)|=|2c-1|=5$',
      'Menyelesaikan sehingga $c=3$ atau $c=-2$',
      'Menghitung luas bayangan segitiga $5\\times3=15$',
    ],
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
    rubric: [
      'Menerapkan rotasi dan refleksi sehingga bayangan akhir $(-3,4)$',
      'Menyusun matriks tunggal $\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$',
      'Mengenali matriks itu sebagai refleksi $y=x$',
      'Menjelaskan urutan terbalik memberi matriks berbeda karena tidak komutatif',
    ],
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
    rubric: [
      'Menulis matriks $\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}$',
      'Menghitung bayangan $(2,1)$ menjadi $(4,3)$',
      'Menghubungkan $\\det=6$ dengan luas menjadi $6$ kali semula',
    ],
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
    rubric: [
      'Menulis pemetaan $(x,y)\\to(-x+2,\\,-y-1)$',
      'Menghitung bayangan $(3,2)$ menjadi $(-1,-3)$',
      'Menjelaskan pergeseran konstanta membuatnya bukan transformasi linear murni',
    ],
  },
  {
    id: 'mtf-15',
    topicId: 'matriks-transformasi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah persegi memiliki titik sudut $A(1,1)$, $B(3,1)$, $C(3,3)$, dan $D(1,3)$. Persegi itu dicerminkan terhadap garis $y=x$, lalu ukurannya dilipatgandakan $2$ kali terhadap titik asal. (a) Tentukan matriks transformasi tunggalnya. (b) Tentukan bayangan titik $A$. (c) Tentukan luas persegi bayangan.',
    answer:
      '(a) Matriks refleksi terhadap $y=x$ adalah $R=\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ dan matriks dilatasi faktor $2$ adalah $D=\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$. Transformasi tunggalnya $M=D\\,R=\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}=\\begin{pmatrix} 0 & 2 \\\\ 2 & 0 \\end{pmatrix}$. (b) $M\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}=\\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix}$, jadi bayangan $A$ adalah $A\'(2,2)$. (c) Persegi awal bersisi $2$ sehingga luasnya $4$. Karena $|\\det(M)|=|0-4|=4$, luas bayangannya $4\\times4=16$ satuan luas.',
    explanation:
      'Kunci: menyusun matriks tiap transformasi, mengalikannya dengan urutan benar (dilatasi setelah refleksi), menerapkannya pada titik, dan memakai determinan sebagai faktor skala luas.',
    hints: [
      'Susun matriks gabungan sebagai matriks "kedua" dikali "pertama".',
      'Faktor skala luas adalah $|\\det(M)|$.',
    ],
    competencies: ['komposisi transformasi', 'determinan sebagai faktor luas', 'pemodelan'],
    rubric: [
      'Menyusun matriks tunggal $M=DR=\\begin{pmatrix}0&2\\\\2&0\\end{pmatrix}$',
      'Menghitung bayangan $A(1,1)$ menjadi $(2,2)$',
      'Menghitung $|\\det(M)|=4$',
      'Menyimpulkan luas persegi bayangan $4\\times4=16$',
    ],
  },
  {
    id: 'mtf-16',
    topicId: 'matriks-transformasi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Transformasi linear $T=\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ memetakan titik $(1,1)$ ke $(3,4)$ dan titik $(2,-1)$ ke $(3,-1)$. (a) Tentukan nilai $a,b,c,d$. (b) Tentukan $\\det(T)$. (c) Jelaskan arti determinan itu terhadap luas bangun yang ditransformasi.',
    answer:
      '(a) Dari $T(1,1)=(a+b,\\,c+d)=(3,4)$ diperoleh $a+b=3$ dan $c+d=4$. Dari $T(2,-1)=(2a-b,\\,2c-d)=(3,-1)$ diperoleh $2a-b=3$ dan $2c-d=-1$. Jumlahkan: $3a=6$ sehingga $a=2$ dan $b=1$; lalu $3c=3$ sehingga $c=1$ dan $d=3$. Jadi $T=\\begin{pmatrix} 2 & 1 \\\\ 1 & 3 \\end{pmatrix}$. (b) $\\det(T)=2(3)-1(1)=5$. (c) Karena $|\\det(T)|=5$, setiap bangun yang ditransformasi berubah luas menjadi $5$ kali luas semula, dan bangun tidak terbalik karena determinannya positif.',
    explanation:
      'Kunci: menerjemahkan syarat pemetaan menjadi sistem persamaan bagi entri matriks, menyelesaikannya, lalu menghubungkan determinan dengan faktor skala luas.',
    hints: [
      'Tulis $T(1,1)$ dan $T(2,-1)$ sebagai pasangan persamaan.',
      'Selesaikan $a,b$ dan $c,d$ secara terpisah.',
    ],
    competencies: ['matriks transformasi', 'determinan', 'penalaran'],
    rubric: [
      'Menyusun sistem $a+b=3$, $2a-b=3$ sehingga $a=2$, $b=1$',
      'Menemukan $c=1$, $d=3$ dari $c+d=4$, $2c-d=-1$',
      'Menghitung $\\det(T)=5$',
      'Menjelaskan $|\\det(T)|=5$ membuat luas menjadi $5$ kali semula',
    ],
  },
  {
    id: 'mtf-17',
    topicId: 'matriks-transformasi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Perhatikan gambar. Segitiga putus-putus adalah bangun awal dengan titik sudut $A(1,1)$, $B(3,1)$, dan $C(1,2)$, sedangkan segitiga penuh adalah bayangannya. Transformasi yang memetakan bangun awal ke bayangannya adalah …',
    figure: {
      svg: '<svg viewBox="0 0 320 200" aria-hidden="true" role="presentation"><line x1="40" y1="180" x2="300" y2="180" stroke="currentColor" stroke-width="1.2"/><line x1="50" y1="15" x2="50" y2="185" stroke="currentColor" stroke-width="1.2"/><polygon points="110,142 230,142 110,104" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.65"/><polygon points="110,142 110,66 170,142" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="110" cy="142" r="2.5" fill="currentColor"/><circle cx="230" cy="142" r="2.5" fill="currentColor"/><circle cx="110" cy="104" r="2.5" fill="currentColor"/><circle cx="110" cy="66" r="2.5" fill="currentColor"/><circle cx="170" cy="142" r="2.5" fill="currentColor"/><text x="292" y="195" font-size="11" fill="currentColor">x</text><text x="30" y="22" font-size="11" fill="currentColor">y</text></svg>',
      alt: 'Bidang koordinat dengan segitiga putus-putus bertitik sudut (1,1), (3,1), (1,2) dan segitiga penuh sebagai bayangannya bertitik sudut (1,1), (1,3), (2,1).',
      caption: 'Bangun awal (putus-putus) dan bayangannya (penuh).',
    },
    options: [
      { key: 'A', text: 'Refleksi terhadap sumbu $x$' },
      { key: 'B', text: 'Refleksi terhadap garis $y=x$' },
      { key: 'C', text: 'Rotasi $90^\\circ$ berlawanan arah jarum jam' },
      { key: 'D', text: 'Translasi $\\begin{pmatrix} 0 \\\\ 2 \\end{pmatrix}$' },
    ],
    answer: 'B',
    explanation:
      'Bayangan diperoleh dengan menukar koordinat setiap titik: $B(3,1)\\rightarrow(1,3)$ dan $C(1,2)\\rightarrow(2,1)$, sedangkan $A(1,1)$ tetap. Pertukaran $(x,y)\\rightarrow(y,x)$ adalah refleksi terhadap garis $y=x$. Opsi A akan memindahkan bangun ke bawah sumbu $x$; opsi C memetakan $B(3,1)\\rightarrow(-1,3)$ yang tidak sesuai gambar; opsi D hanya menggeser bangun ke atas sejauh $2$ satuan tanpa menukar koordinat.',
    hints: [
      'Bandingkan koordinat tiap titik awal dengan bayangannya.',
      'Refleksi terhadap $y=x$ menukar absis dan ordinat titik.',
    ],
    competencies: ['refleksi terhadap garis $y=x$', 'membaca grafik'],
  },
  {
    id: 'mtf-18',
    topicId: 'matriks-transformasi',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'penalaran',
    prompt:
      'Sebuah bangun datar berluas $3$ satuan luas dikenai transformasi linear dengan matriks $A$ yang memiliki $\\det(A)=-4$. Bayangannya kemudian diperbesar $3$ kali terhadap titik asal. Tentukan luas bangun akhir.',
    answer: '108',
    explanation:
      'Transformasi linear mengubah luas sebesar $|\\det(A)|=|-4|=4$, sehingga luas setelah transformasi pertama $3\\times4=12$. Dilatasi terhadap titik asal dengan faktor $3$ mengalikan luas dengan $3^{2}=9$, sehingga luas akhir $12\\times9=108$ satuan luas. Tanda negatif pada determinan hanya membalik orientasi, tidak mengubah luas.',
    hints: [
      'Luas berubah sebesar $|\\det(A)|$, bukan $\\det(A)$ mentah, karena luas selalu positif.',
      'Dilatasi faktor $k$ pada bidang mengalikan luas dengan $k^{2}$, bukan $k$.',
    ],
    competencies: ['determinan sebagai faktor luas', 'dilatasi'],
  },
];

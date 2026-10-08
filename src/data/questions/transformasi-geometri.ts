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
      { key: 'D', text: '$(-2,-2)$' },
    ],
    answer: 'A',
    explanation:
      'Translasi $\\binom{4}{1}$ memetakan $(x,y)\\rightarrow(x+4,\\,y+1)$, sehingga $(2,-3)\\rightarrow(2+4,\\,-3+1)=(6,-2)$.',
    hints: ['Jumlahkan vektor translasi dengan koordinat titik.'],
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
      'Refleksi terhadap sumbu-$y$ mengubah tanda absis: $(x,y)\\rightarrow(-x,y)$. Maka $(-5,2)\\rightarrow(5,2)$.',
    hints: ['Sumbu-$y$ membuat nilai $x$ berubah tanda, sedangkan $y$ tetap.'],
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
    hints: ['Kalikan setiap koordinat dengan faktor skala $2$.'],
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
      'Rotasi $90^\\circ$ berlawanan arah jarum jam memetakan $(x,y)\\rightarrow(-y,x)$, sehingga $(2,5)\\rightarrow(-5,2)$.',
    hints: ['Gunakan $R_{90^\\circ}=\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$.'],
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
    hints: ['Pencerminan terhadap $y=x$ menukar nilai $x$ dan $y$.'],
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
      'Refleksi sumbu-$x$: $(2,3)\\rightarrow(2,-3)$. Refleksi sumbu-$y$: $(2,-3)\\rightarrow(-2,-3)$. Jadi bayangan akhirnya $(-2,-3)$.',
    hints: ['Kerjakan berurutan sesuai urutan yang diberikan.'],
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
    hints: ['Determinan matriks memberi faktor skala luas.'],
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
  },
  {
    id: 'tgeo-12',
    topicId: 'transformasi-geometri',
    difficulty: 'mahir',
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
      'Refleksi sumbu-$y$: $(1,2)\\rightarrow(-1,2)$. Rotasi $90^\\circ$: $(-1,2)\\rightarrow(-2,-1)$. Jika urutan dibalik, hasilnya $(2,1)$, sehingga urutan transformasi memang memengaruhi hasil.',
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
  },
];

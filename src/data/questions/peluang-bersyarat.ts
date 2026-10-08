import type { Question } from '@/types/content';

export const peluangBersyaratQuestions: Question[] = [
  {
    id: 'pb-01',
    topicId: 'peluang-bersyarat',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Diketahui $P(A) = 0{,}5$, $P(B) = 0{,}4$, dan $P(A \\cap B) = 0{,}2$. Nilai $P(A \\mid B)$ adalah …',
    options: [
      { key: 'A', text: '$0{,}2$' },
      { key: 'B', text: '$0{,}4$' },
      { key: 'C', text: '$0{,}5$' },
      { key: 'D', text: '$0{,}8$' },
    ],
    answer: 'C',
    explanation:
      'Dengan rumus peluang bersyarat, $P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)} = \\dfrac{0{,}2}{0{,}4} = 0{,}5$.',
    hints: ['Bagi peluang irisan dengan peluang kejadian syaratnya, bukan total keseluruhan.'],
    competencies: ['peluang bersyarat'],
  },
  {
    id: 'pb-02',
    topicId: 'peluang-bersyarat',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt:
      'Sebuah keluarga memiliki dua anak. Diketahui paling sedikit satu di antaranya laki-laki. Peluang keduanya laki-laki adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{1}{4}$' },
      { key: 'B', text: '$\\dfrac{1}{3}$' },
      { key: 'C', text: '$\\dfrac{1}{2}$' },
      { key: 'D', text: '$\\dfrac{2}{3}$' },
    ],
    answer: 'B',
    explanation:
      'Ruang sampel $\\{LL, LP, PL, PP\\}$. Informasi "paling sedikit satu laki-laki" menyisakan $\\{LL, LP, PL\\}$ yang sama mungkin. Dari tiga hasil itu, hanya $LL$ yang memenuhi, sehingga $P = \\dfrac{1}{3}$.',
    hints: ['Informasi baru mempersempit ruang sampel menjadi tiga hasil.'],
    competencies: ['peluang bersyarat', 'ruang sampel'],
  },
  {
    id: 'pb-03',
    topicId: 'peluang-bersyarat',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Dari 200 siswa, 70 siswa suka Fisika dan di antaranya 40 siswa juga suka Matematika. Jika $F$ = suka Fisika dan $M$ = suka Matematika, tentukan $P(M \\mid F)$.',
    answer: '4/7',
    acceptedAnswers: ['4/7', '40/70', '0,57', '0.57', '0,571', '0.571', '0,5714', '0.5714'],
    explanation:
      'Karena yang diketahui adalah suka Fisika, gunakan total milik $F$: $P(M \\mid F) = \\dfrac{n(M \\cap F)}{n(F)} = \\dfrac{40}{70} = \\dfrac{4}{7}$.',
    hints: ['Untuk $P(M \\mid F)$, bagi irisan dengan total siswa yang suka Fisika.'],
    competencies: ['peluang bersyarat', 'tabel kontingensi'],
  },
  {
    id: 'pb-04',
    topicId: 'peluang-bersyarat',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Sebuah kantong berisi 5 bola merah dan 3 bola biru. Dua bola diambil satu per satu tanpa pengembalian. Jika bola pertama terambil merah, peluang bola kedua juga merah adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{5}{8}$' },
      { key: 'B', text: '$\\dfrac{4}{7}$' },
      { key: 'C', text: '$\\dfrac{5}{14}$' },
      { key: 'D', text: '$\\dfrac{2}{7}$' },
    ],
    answer: 'B',
    explanation:
      'Setelah satu bola merah terambil, tersisa 4 merah dan 3 biru dari total 7 bola. Jadi $P(M_2 \\mid M_1) = \\dfrac{4}{7}$.',
    hints: ['Kurangi satu bola merah dan satu bola dari total sebelum mengambil bola kedua.'],
    competencies: ['aturan perkalian', 'peluang bersyarat'],
  },
  {
    id: 'pb-05',
    topicId: 'peluang-bersyarat',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Dari 6 siswa laki-laki dan 4 siswa perempuan akan dipilih 3 orang secara acak. Tentukan peluang terpilih tepat 2 siswa laki-laki.',
    answer: '1/2',
    acceptedAnswers: ['1/2', '60/120', '0,5', '0.5', '0,50', '0.50'],
    explanation:
      'Banyak cara memilih 3 dari 10 siswa adalah $\\binom{10}{3} = 120$. Cara memilih tepat 2 laki-laki dan 1 perempuan adalah $\\binom{6}{2}\\binom{4}{1} = 15 \\cdot 4 = 60$. Jadi $P = \\dfrac{60}{120} = \\dfrac{1}{2}$.',
    hints: ['Gunakan kombinasi karena urutan pemilihan tidak diperhatikan.'],
    competencies: ['kombinasi', 'peluang bersyarat'],
  },
  {
    id: 'pb-06',
    topicId: 'peluang-bersyarat',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Sebuah tes penyakit memiliki sensitivitas $P(+ \\mid D) = 0{,}9$ dan spesifisitas $P(- \\mid D^c) = 0{,}9$. Jika prevalensi penyakit $P(D) = 0{,}01$, nilai $P(D \\mid +)$ adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{1}{12}$' },
      { key: 'B', text: '$\\dfrac{1}{10}$' },
      { key: 'C', text: '$\\dfrac{9}{10}$' },
      { key: 'D', text: '$\\dfrac{1}{100}$' },
    ],
    answer: 'A',
    explanation:
      '$P(+) = P(+ \\mid D)P(D) + P(+ \\mid D^c)P(D^c) = 0{,}9(0{,}01) + 0{,}1(0{,}99) = 0{,}009 + 0{,}099 = 0{,}108$. Maka $P(D \\mid +) = \\dfrac{0{,}009}{0{,}108} = \\dfrac{1}{12}$.',
    hints: ['Hitung peluang total hasil positif terlebih dahulu.'],
    competencies: ['aturan Bayes', 'peluang total'],
  },
  {
    id: 'pb-07',
    topicId: 'peluang-bersyarat',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Dua kartu diambil berturut-turut dari 52 kartu tanpa pengembalian. Tentukan peluang kedua kartu tersebut As.',
    answer: '1/221',
    acceptedAnswers: ['1/221', '4/2652', '0,0045', '0.0045', '0,00452', '0.00452', '0,004525', '0.004525'],
    explanation:
      '$P(\\text{As}_1) = \\dfrac{4}{52} = \\dfrac{1}{13}$ dan $P(\\text{As}_2 \\mid \\text{As}_1) = \\dfrac{3}{51} = \\dfrac{1}{17}$, sehingga $P(\\text{As}_1 \\cap \\text{As}_2) = \\dfrac{1}{13} \\cdot \\dfrac{1}{17} = \\dfrac{1}{221}$.',
    hints: ['Gunakan aturan perkalian $P(A \\cap B) = P(A \\mid B)P(B)$.'],
    competencies: ['aturan perkalian', 'peluang bersyarat'],
  },
  {
    id: 'pb-08',
    topicId: 'peluang-bersyarat',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Jelaskan mengapa $P(A \\mid B)$ umumnya tidak sama dengan $P(B \\mid A)$. Berikan contoh pada satu lemparan dadu.',
    answer:
      'Karena $P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}$ dan $P(B \\mid A) = \\dfrac{P(A \\cap B)}{P(A)}$, kedua peluang memiliki pembilang yang sama tetapi penyebut berbeda, sehingga nilainya umumnya berbeda. Contoh: misalkan $A$ = "muncul mata 6" $= \\{6\\}$ dan $B$ = "muncul mata genap" $= \\{2,4,6\\}$. Maka $P(A \\mid B) = \\dfrac{1/6}{1/2} = \\dfrac{1}{3}$, sedangkan $P(B \\mid A) = \\dfrac{1/6}{1/6} = 1$. Jika diketahui muncul mata 6, kejadian "genap" pasti terjadi; tetapi jika diketahui muncul mata genap, peluang muncul mata 6 hanya $\\dfrac{1}{3}$.',
    explanation:
      'Jawaban benar menekankan perbedaan penyebut ($P(B)$ versus $P(A)$) dan memberi contoh yang menunjukkan nilainya berbeda.',
    hints: ['Tuliskan kedua rumusnya berdampingan dan bandingkan penyebutnya.'],
    competencies: ['peluang bersyarat', 'penalaran'],
  },
  {
    id: 'pb-09',
    topicId: 'peluang-bersyarat',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Kantong A dipilih dengan peluang $\\dfrac{2}{3}$ dan berisi 3 merah serta 2 putih. Kantong B dipilih dengan peluang $\\dfrac{1}{3}$ dan berisi 1 merah serta 4 putih. Jika terambil bola merah, tentukan $P(A \\mid \\text{merah})$ menggunakan aturan Bayes.',
    answer:
      'Diketahui $P(A) = \\dfrac{2}{3}$, $P(B) = \\dfrac{1}{3}$, $P(\\text{merah} \\mid A) = \\dfrac{3}{5}$, dan $P(\\text{merah} \\mid B) = \\dfrac{1}{5}$. Peluang total mengambil merah adalah $P(\\text{merah}) = \\dfrac{2}{3} \\cdot \\dfrac{3}{5} + \\dfrac{1}{3} \\cdot \\dfrac{1}{5} = \\dfrac{2}{5} + \\dfrac{1}{15} = \\dfrac{7}{15}$. Dengan aturan Bayes, $P(A \\mid \\text{merah}) = \\dfrac{\\tfrac{2}{3} \\cdot \\tfrac{3}{5}}{\\tfrac{7}{15}} = \\dfrac{2/5}{7/15} = \\dfrac{6}{7}$. Jadi setelah melihat bola merah, peluang memilih Kantong A naik menjadi $\\dfrac{6}{7}$.',
    explanation:
      'Kunci jawaban menuntut perhitungan peluang total yang benar ($7/15$) dan penerapan Bayes hingga hasil $6/7$.',
    hints: [
      'Hitung $P(\\text{merah})$ sebagai jumlah dua jalur.',
      'Bagi peluang jalur A-merah dengan peluang total merah.',
    ],
    competencies: ['aturan Bayes', 'peluang total', 'penalaran'],
  },
  {
    id: 'pb-10',
    topicId: 'peluang-bersyarat',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Jelaskan perbedaan mendasar antara permutasi dan kombinasi, lalu hitung $\\binom{6}{2}$ dan $P(6,2)$ serta jelaskan mengapa keduanya berbeda.',
    answer:
      'Permutasi memperhatikan urutan, sedangkan kombinasi tidak memperhatikan urutan. Nilai $\\binom{6}{2} = \\dfrac{6!}{2!\\,4!} = 15$ dan $P(6,2) = \\dfrac{6!}{4!} = 6 \\cdot 5 = 30$. Keduanya berbeda karena untuk setiap pasangan 2 objek terdapat $2! = 2$ susunan berbeda, sehingga $P(6,2) = 2 \\cdot \\binom{6}{2} = 30$; permutasi menghitung setiap susunan sebagai hasil yang berbeda, sedangkan kombinasi tidak.',
    explanation:
      'Jawaban benar menekankan peran urutan dan menunjukkan hubungan $P(n,k) = k! \\, \\binom{n}{k}$.',
    hints: ['Tanyakan apakah urutan pemilihan penting atau tidak.'],
    competencies: ['permutasi', 'kombinasi', 'penalaran'],
  },
  {
    id: 'pb-11',
    topicId: 'peluang-bersyarat',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Sebuah pabrik memproduksi barang dengan tiga mesin. Mesin A menghasilkan $30\\%$ produk dengan tingkat cacat $2\\%$, mesin B menghasilkan $30\\%$ produk dengan tingkat cacat $3\\%$, dan mesin C menghasilkan $40\\%$ produk dengan tingkat cacat $5\\%$. Jika sebuah produk terpilih acak ternyata cacat, peluang produk itu berasal dari mesin C adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{6}{35}$' },
      { key: 'B', text: '$\\dfrac{9}{35}$' },
      { key: 'C', text: '$\\dfrac{4}{7}$' },
      { key: 'D', text: '$\\dfrac{5}{7}$' },
    ],
    answer: 'C',
    explanation:
      'Peluang total produk cacat $P(D) = 0{,}3(0{,}02) + 0{,}3(0{,}03) + 0{,}4(0{,}05) = 0{,}006 + 0{,}009 + 0{,}020 = 0{,}035$. Menurut aturan Bayes, $P(C \\mid D) = \\dfrac{P(D \\mid C)P(C)}{P(D)} = \\dfrac{0{,}05 \\cdot 0{,}4}{0{,}035} = \\dfrac{0{,}020}{0{,}035} = \\dfrac{4}{7}$. Opsi A dan B berturut-turut adalah peluang posterior untuk mesin A dan B, bukan mesin C.',
    hints: [
      'Hitung peluang total produk cacat dari ketiga mesin lebih dahulu.',
      'Bagi kontribusi mesin C terhadap total cacat dengan $P(D)$.',
    ],
    competencies: ['aturan Bayes', 'peluang total', 'penalaran'],
  },
  {
    id: 'pb-12',
    topicId: 'peluang-bersyarat',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Sebuah tes cepat penyakit memiliki sensitivitas $P(+\\mid D)=0{,}95$ dan spesifisitas $P(-\\mid D^{c})=0{,}90$. Prevalensi penyakit $P(D)=0{,}02$. (a) Hitung $P(D\\mid+)$ menggunakan aturan Bayes. (b) Jelaskan mengapa hasil positif belum tentu berarti benar-benar sakit.',
    answer:
      '(a) $P(+)=P(+\\mid D)P(D)+P(+\\mid D^{c})P(D^{c})=0{,}95(0{,}02)+0{,}10(0{,}98)=0{,}019+0{,}098=0{,}117$. Maka $P(D\\mid+)=\\dfrac{0{,}019}{0{,}117}\\approx0{,}162$, yaitu sekitar $16\\%$. (b) Karena prevalensinya rendah, banyak orang sehat yang keliru dinyatakan positif (positif palsu) sehingga mendominasi seluruh hasil positif. Akibatnya, meskipun tesnya akurat, peluang seseorang benar-benar sakit setelah hasil positif tetap kecil.',
    explanation:
      'Kunci: menghitung peluang total hasil positif lalu menerapkan Bayes, serta menafsirkan pengaruh prevalensi rendah terhadap nilai prediktif positif.',
    hints: ['Hitung $P(+)$ sebagai jumlah dua jalur.', 'Perhatikan peran besar kelompok sehat pada prevalensi rendah.'],
    competencies: ['aturan Bayes', 'nilai prediktif', 'evaluasi'],
  },
  {
    id: 'pb-13',
    topicId: 'peluang-bersyarat',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah kotak berisi $8$ kelereng merah dan $4$ kelereng putih. Dua kelereng diambil satu per satu tanpa pengembalian. (a) Susun model peluang bersyarat untuk menghitung peluang kedua kelereng merah. (b) Hitung nilai peluang tersebut.',
    answer:
      'Peluang kelereng pertama merah adalah $P(M_1)=\\dfrac{8}{12}=\\dfrac{2}{3}$. Setelah satu merah terambil, tersisa $7$ merah dari $11$ kelereng, sehingga $P(M_2\\mid M_1)=\\dfrac{7}{11}$. Dengan aturan perkalian, $P(M_1\\cap M_2)=P(M_1)\\cdot P(M_2\\mid M_1)=\\dfrac{2}{3}\\cdot\\dfrac{7}{11}=\\dfrac{14}{33}\\approx0{,}424$.',
    explanation:
      'Kunci: memodelkan pengambilan tanpa pengembalian sebagai peluang bersyarat dan menerapkan aturan perkalian.',
    hints: ['Setelah pengambilan pertama, jumlah kelereng berkurang satu.', 'Gunakan $P(A\\cap B)=P(A)\\cdot P(B\\mid A)$.'],
    competencies: ['peluang bersyarat', 'aturan perkalian', 'pemodelan'],
  },
];

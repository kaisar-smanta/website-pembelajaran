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
      'Dengan rumus peluang bersyarat, $P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)} = \\dfrac{0{,}2}{0{,}4} = 0{,}5$ (C). Opsi A ($0{,}2$) menyalin $P(A\\cap B)$ tanpa membagi; opsi B ($0{,}4$) memakai $P(B)$ sebagai hasil akhir; opsi D ($0{,}8$) menghitung keliru dengan membagi $P(A)$ oleh sesuatu selain $P(B)$.',
    hints: [
      'Bagi peluang irisan dengan peluang kejadian syaratnya, bukan total keseluruhan.',
      'Rumusnya $P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}$.',
      'Substitusikan $0{,}2$ dibagi $0{,}4$.',
    ],
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
      'Ruang sampel $\\{LL, LP, PL, PP\\}$. Informasi "paling sedikit satu laki-laki" menyisakan $\\{LL, LP, PL\\}$, sehingga $P = \\dfrac{1}{3}$ (B). Opsi A ($\\frac14$) mengabaikan informasi dan memakai seluruh ruang sampel; opsi C ($\\frac12$) menganggap jenis kelamin kedua anak tidak saling bergantung pada informasi itu; opsi D ($\\frac23$) keliru menempatkan $LL$ sebagai komplemen dari satu kejadian.',
    hints: [
      'Informasi baru mempersempit ruang sampel menjadi tiga hasil.',
      'Hasil yang tersisa adalah $\\{LL, LP, PL\\}$ dari semula $\\{LL, LP, PL, PP\\}$.',
      'Bagi banyak hasil "keduanya laki-laki" dengan $3$.',
    ],
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
    hints: [
      'Untuk $P(M \\mid F)$, bagi irisan dengan total siswa yang suka Fisika.',
      'Irisan $M \\cap F$ ada $40$ siswa, sedangkan $n(F) = 70$.',
      'Hitung $\\dfrac{40}{70}$ lalu sederhanakan.',
    ],
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
      'Setelah satu bola merah terambil, tersisa $4$ merah dan $3$ biru dari total $7$ bola, sehingga $P(M_2 \\mid M_1) = \\dfrac{4}{7}$ (B). Opsi A ($\\frac58$) tidak mengurangi jumlah bola; opsi C ($\\frac5{14}$) menghitung $P(M_1\\cap M_2)$ alih-alih peluang bersyarat; opsi D ($\\frac27$) memakai komponen bola biru secara keliru.',
    hints: [
      'Kurangi satu bola merah dan satu bola dari total sebelum mengambil bola kedua.',
      'Setelah pengambilan pertama, jumlah bola merah dan total keduanya berkurang satu.',
    ],
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
    hints: [
      'Gunakan kombinasi karena urutan pemilihan tidak diperhatikan.',
      'Hitung $\\binom{10}{3}$ sebagai penyebut dan $\\binom{6}{2}\\binom{4}{1}$ sebagai pembilang.',
    ],
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
      '$P(+) = P(+ \\mid D)P(D) + P(+ \\mid D^c)P(D^c) = 0{,}9(0{,}01) + 0{,}1(0{,}99) = 0{,}009 + 0{,}099 = 0{,}108$. Maka $P(D \\mid +) = \\dfrac{0{,}009}{0{,}108} = \\dfrac{1}{12}$ (A). Opsi B ($\\frac1{10}$) memakai spesifisitas $0{,}9$ sebagai penyebut sederhana; opsi C ($\\frac9{10}$) menyalin sensitivitas $P(+\\mid D)$; opsi D ($\\frac1{100}$) menyalin prevalensi.',
    hints: [
      'Hitung peluang total hasil positif terlebih dahulu.',
      'Setelah memperoleh $P(+)=0{,}108$, bagi jalur $D$ positif $0{,}009$ dengan $P(+)$.',
    ],
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
    hints: [
      'Gunakan aturan perkalian $P(A \\cap B) = P(A \\mid B)P(B)$.',
      'Setelah As pertama terambil, tersisa $3$ As dari $51$ kartu.',
    ],
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
    hints: [
      'Tuliskan kedua rumusnya berdampingan dan bandingkan penyebutnya.',
      'Bandingkan penyebut $P(B)$ pada $P(A\\mid B)$ dengan $P(A)$ pada $P(B\\mid A)$.',
    ],
    competencies: ['peluang bersyarat', 'penalaran'],
    rubric: [
      'Menuliskan kedua rumus berdampingan',
      'Membandingkan penyebut tiap rumus',
      'Memberi contoh pada dadu',
      'Menghitung peluang contoh dengan benar',
    ],
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
    rubric: [
      'Menuliskan peluang awal tiap kantong',
      'Menghitung peluang total terambil merah',
      'Menerapkan aturan Bayes',
      'Memperoleh hasil akhir',
    ],
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
    hints: [
      'Tanyakan apakah urutan pemilihan penting atau tidak.',
      'Ingat hubungan $P(n,k)=k!\\,\\binom{n}{k}$ saat membandingkan kedua hasil.',
    ],
    competencies: ['permutasi', 'kombinasi', 'penalaran'],
    rubric: [
      'Menjelaskan peran urutan',
      'Menghitung kombinasi enam pilih dua',
      'Menghitung permutasi enam pilih dua',
      'Menjelaskan hubungan permutasi dan kombinasi',
    ],
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
      'Peluang total produk cacat $P(D) = 0{,}3(0{,}02) + 0{,}3(0{,}03) + 0{,}4(0{,}05) = 0{,}035$. Menurut aturan Bayes, $P(C \\mid D) = \\dfrac{0{,}05 \\cdot 0{,}4}{0{,}035} = \\dfrac{0{,}020}{0{,}035} = \\dfrac{4}{7}$ (C). Opsi A ($\\frac6{35}$) adalah peluang posterior mesin A, bukan mesin C; opsi B ($\\frac9{35}$) adalah peluang posterior mesin B; opsi D ($\\frac57$) memakai komplemen yang keliru.',
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
      'Sebuah tes antidoping pada sekelompok atlet memiliki sensitivitas $P(+\\mid D)=0{,}95$ dan spesifisitas $P(-\\mid D^{c})=0{,}90$, dengan prevalensi doping $P(D)=0{,}02$. (a) Hitung peluang seorang atlet yang dinyatakan **negatif** benar-benar bersih, yaitu $P(D^{c}\\mid-)$. (b) Jelaskan mengapa hasil negatif lebih dapat diandalkan pada prevalensi rendah.',
    answer:
      '(a) $P(-)=P(-\\mid D)P(D)+P(-\\mid D^{c})P(D^{c})=0{,}05(0{,}02)+0{,}90(0{,}98)=0{,}001+0{,}882=0{,}883$. Maka $P(D^{c}\\mid-)=\\dfrac{P(-\\mid D^{c})P(D^{c})}{P(-)}=\\dfrac{0{,}882}{0{,}883}\\approx0{,}9989$, yaitu sekitar $99{,}9\\%$. (b) Karena prevalensinya rendah, sebagian besar atlet memang bersih, sehingga kelompok besar yang bersih mendominasi hasil negatif. Akibatnya peluang hasil negatif benar-benar bersih menjadi sangat tinggi, jauh lebih besar daripada nilai prediktif positif pada data yang sama.',
    explanation:
      'Kunci: memusatkan perhatian pada hasil negatif, menghitung peluang total $P(-)$ dari dua jalur, menerapkan Bayes untuk $P(D^{c}\\mid-)$, lalu menafsirkan mengapa nilai prediktif negatif tinggi ketika prevalensi rendah.',
    hints: [
      'Hitung $P(-)$ sebagai jumlah jalur sakit dan jalur sehat.',
      'Gunakan Bayes dengan fokus pada $D^{c}$: $P(D^{c}\\mid-)=\\dfrac{P(-\\mid D^{c})P(D^{c})}{P(-)}$.',
    ],
    competencies: ['aturan Bayes', 'nilai prediktif negatif', 'evaluasi'],
    rubric: [
      'Menghitung peluang total hasil negatif',
      'Menerapkan aturan Bayes untuk $P(D^{c}\\mid-)$',
      'Memperoleh nilai sekitar $0{,}999$',
      'Menjelaskan pengaruh prevalensi rendah terhadap nilai prediktif negatif',
    ],
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
    rubric: [
      'Menentukan peluang kelereng pertama merah',
      'Menyesuaikan jumlah setelah pengambilan',
      'Menerapkan aturan perkalian',
      'Menghitung peluang akhir',
    ],
  },
  {
    id: 'pb-14',
    topicId: 'peluang-bersyarat',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah filter surel menandai $98\\%$ surel spam dengan benar, tetapi juga keliru menandai $1\\%$ surel bukan spam sebagai spam. Diketahui $20\\%$ surel yang masuk adalah spam. (a) Susun model peluang total untuk surel yang ditandai spam. (b) Tentukan peluang surel yang ditandai spam benar-benar spam. (c) Berikan rekomendasi apakah filter layak digunakan.',
    answer:
      'Misal $S$ = surel spam dan $F$ = ditandai spam. Diketahui $P(S)=0{,}2$, $P(F\\mid S)=0{,}98$, dan $P(F\\mid S^{c})=0{,}01$. (a) $P(F)=P(F\\mid S)P(S)+P(F\\mid S^{c})P(S^{c})=0{,}98(0{,}2)+0{,}01(0{,}8)=0{,}196+0{,}008=0{,}204$. (b) Dengan aturan Bayes, $P(S\\mid F)=\\dfrac{0{,}196}{0{,}204}\\approx0{,}9608$, yaitu sekitar $96{,}1\\%$. (c) Sekitar $96\\%$ surel yang ditandai memang spam, dan hanya $4\\%$ yang salah tandai, sehingga filter cukup akurat dan layak dipakai; meski begitu, tetap perlu ruang pemeriksaan agar surel sah yang tersaring tidak hilang.',
    explanation:
      'Kunci: memisahkan dua jalur (spam dan bukan spam) pada peluang total, menerapkan Bayes, lalu menafsirkan hasilnya menjadi rekomendasi.',
    hints: [
      'Hitung $P(F)$ sebagai jumlah jalur spam dan jalur bukan spam.',
      'Bagi jalur spam terhadap $P(F)$ untuk memperoleh $P(S\\mid F)$.',
    ],
    competencies: ['aturan Bayes', 'peluang total', 'pemodelan'],
    rubric: [
      'Memisahkan jalur spam dan bukan spam',
      'Menghitung peluang total ditandai spam',
      'Menerapkan aturan Bayes',
      'Memberi rekomendasi yang beralasan',
    ],
  },
  {
    id: 'pb-15',
    topicId: 'peluang-bersyarat',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Dua kejadian $A$ dan $B$ disebut saling bebas jika $P(A\\cap B)=P(A)P(B)$, yang ekuivalen dengan $P(A\\mid B)=P(A)$ ketika $P(B)>0$. (a) Jelaskan mengapa kedua rumus itu ekuivalen. (b) Periksa apakah kejadian "terambil kartu merah" dan "terambil kartu As" pada pengambilan satu kartu dari $52$ kartu saling bebas. (c) Simpulkan hasilnya.',
    answer:
      '(a) Jika $P(A\\cap B)=P(A)P(B)$, bagi kedua ruas dengan $P(B)$, diperoleh $\\dfrac{P(A\\cap B)}{P(B)}=P(A)$, yaitu $P(A\\mid B)=P(A)$. Sebaliknya, dari $P(A\\mid B)=P(A)$ dan definisi $P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}$, kalikan dengan $P(B)$ untuk memperoleh $P(A\\cap B)=P(A)P(B)$. (b) Ruang sampel adalah $52$ kartu. Kejadian $A=$ kartu merah memuat $26$ kartu sehingga $P(A)=\\dfrac{26}{52}=\\dfrac12$, dan $B=$ kartu As memuat $4$ kartu sehingga $P(B)=\\dfrac{4}{52}=\\dfrac{1}{13}$. Kartu As merah (As hati dan As wajik) ada $2$, sehingga $P(A\\cap B)=\\dfrac{2}{52}=\\dfrac{1}{26}$. Di sisi lain $P(A)P(B)=\\dfrac12\\cdot\\dfrac1{13}=\\dfrac1{26}$, sehingga keduanya sama. (c) Karena $P(A\\cap B)=P(A)P(B)$, kejadian "terambil kartu merah" dan "terambil kartu As" saling bebas; mengetahui kartu yang terambil berwarna merah tidak mengubah peluang kartu itu sebuah As.',
    explanation:
      'Kunci: menurunkan ekuivalensi dua definisi saling bebas secara aljabar, lalu mengujinya pada ruang sampel $52$ kartu dengan perhitungan pecahan yang tepat.',
    hints: [
      'Gunakan definisi $P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}$ untuk menjembatani kedua rumus.',
      'Hitung banyak kartu merah ($26$), kartu As ($4$), dan As merah ($2$) dari $52$ kartu.',
    ],
    competencies: ['kejadian saling bebas', 'peluang bersyarat', 'penalaran'],
    rubric: [
      'Menurunkan ekuivalensi kedua rumus',
      'Menentukan $P(A)=\\dfrac12$ dan $P(B)=\\dfrac{1}{13}$',
      'Menghitung $P(A\\cap B)=\\dfrac{1}{26}$ dan membandingkannya dengan $P(A)P(B)$',
      'Menyimpulkan kedua kejadian saling bebas',
    ],
  },
  {
    id: 'pb-16',
    topicId: 'peluang-bersyarat',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Diagram pohon berikut menunjukkan pengambilan dua bola satu per satu **tanpa pengembalian** dari kantong berisi $5$ bola merah dan $3$ bola biru. Berdasarkan diagram, peluang bola kedua merah (tanpa memperhatikan warna bola pertama) adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{5}{8}$' },
      { key: 'B', text: '$\\dfrac{4}{7}$' },
      { key: 'C', text: '$\\dfrac{5}{7}$' },
      { key: 'D', text: '$\\dfrac{15}{56}$' },
    ],
    answer: 'A',
    explanation:
      'Dengan aturan peluang total, $P(M_2)=P(M_1)P(M_2\\mid M_1)+P(B_1)P(M_2\\mid B_1)=\\dfrac58\\cdot\\dfrac47+\\dfrac38\\cdot\\dfrac57=\\dfrac{20}{56}+\\dfrac{15}{56}=\\dfrac{35}{56}=\\dfrac58$ (A). Opsi B ($\\frac47$) hanya peluang bersyarat setelah bola pertama merah; opsi C ($\\frac57$) hanya peluang bersyarat setelah bola pertama biru; opsi D ($\\frac{15}{56}$) hanya menghitung jalur biru lalu merah tanpa menjumlahkan jalur merah lalu merah.',
    figure: {
      svg: '<svg viewBox="0 0 300 180" role="img" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="90" x2="118" y2="40" stroke="currentColor" stroke-width="1.8"/><line x1="20" y1="90" x2="118" y2="140" stroke="currentColor" stroke-width="1.8"/><line x1="118" y1="40" x2="248" y2="18" stroke="currentColor" stroke-width="1.8"/><line x1="118" y1="40" x2="248" y2="58" stroke="currentColor" stroke-width="1.8"/><line x1="118" y1="140" x2="248" y2="122" stroke="currentColor" stroke-width="1.8"/><line x1="118" y1="140" x2="248" y2="162" stroke="currentColor" stroke-width="1.8"/><circle cx="20" cy="90" r="3" fill="currentColor"/><text x="42" y="58" fill="currentColor" font-size="12">M 5/8</text><text x="42" y="132" fill="currentColor" font-size="12">B 3/8</text><text x="150" y="20" fill="currentColor" font-size="12">M 4/7</text><text x="150" y="52" fill="currentColor" font-size="12">B 3/7</text><text x="150" y="122" fill="currentColor" font-size="12">M 5/7</text><text x="150" y="158" fill="currentColor" font-size="12">B 2/7</text></svg>',
      alt: 'Diagram pohon dua tahap pengambilan bola tanpa pengembalian: tahap pertama merah 5 per 8 atau biru 3 per 8, lalu tahap kedua bergantung pada warna bola pertama yang terambil.',
      caption: 'Diagram pohon pengambilan dua bola tanpa pengembalian.',
    },
    hints: [
      'Jumlahkan peluang kedua jalur yang berakhir dengan bola kedua merah.',
      'Gunakan peluang total: jalur merah lalu merah ditambah jalur biru lalu merah.',
    ],
    competencies: ['peluang total', 'peluang bersyarat', 'diagram pohon'],
  },
];

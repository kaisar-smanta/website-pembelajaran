import type { Question } from '@/types/content';

export const trigonometriQuestions: Question[] = [
  {
    id: 'tr-01',
    topicId: 'trigonometri',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Nilai dari $\\sin 30^\\circ + \\cos 60^\\circ$ adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{1}{2}$' },
      { key: 'B', text: '$1$' },
      { key: 'C', text: '$\\dfrac{\\sqrt{3}}{2}$' },
      { key: 'D', text: '$2$' },
    ],
    answer: 'B',
    explanation:
      'Dari tabel sudut istimewa, $\\sin 30^\\circ=\\dfrac{1}{2}$ dan $\\cos 60^\\circ=\\dfrac{1}{2}$, sehingga jumlahnya $\\dfrac{1}{2}+\\dfrac{1}{2}=1$. Opsi A ($\\dfrac{1}{2}$) hanya mengambil satu nilai dan mengabaikan suku lainnya. Opsi C ($\\dfrac{\\sqrt{3}}{2}$) memakai nilai sudut $60^\\circ$ untuk sinus sehingga tertukar. Opsi D ($2$) mengalikan kedua nilai, bukan menjumlahkannya.',
    hints: [
      'Gunakan tabel sudut istimewa untuk $30^\\circ$ dan $60^\\circ$.',
      '$\\sin 30^\\circ=\\dfrac{1}{2}$ dan $\\cos 60^\\circ=\\dfrac{1}{2}$; jumlahkan keduanya.',
    ],
    competencies: ['sudut istimewa'],
  },
  {
    id: 'tr-02',
    topicId: 'trigonometri',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Diketahui $\\cos\\alpha=\\dfrac{4}{5}$ dan $\\alpha$ lancip. Nilai $\\sin\\alpha$ adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{3}{5}$' },
      { key: 'B', text: '$\\dfrac{4}{3}$' },
      { key: 'C', text: '$-\\dfrac{3}{5}$' },
      { key: 'D', text: '$\\dfrac{5}{3}$' },
    ],
    answer: 'A',
    explanation:
      'Dari identitas $\\sin^{2}\\alpha=1-\\cos^{2}\\alpha=1-\\dfrac{16}{25}=\\dfrac{9}{25}$. Karena $\\alpha$ lancip, $\\sin\\alpha>0$, jadi $\\sin\\alpha=\\dfrac{3}{5}$ (segitiga $3$-$4$-$5$). Opsi B ($\\dfrac{4}{3}$) membalik perbandingan menjadi sisi samping per sisi depan. Opsi C ($-\\dfrac{3}{5}$) memberi tanda negatif padahal $\\alpha$ lancip sehingga sinus positif. Opsi D ($\\dfrac{5}{3}$) memakai sisi miring dibagi sisi depan, kebalikan dari sinus.',
    hints: ['Gunakan identitas $\\sin^{2}\\alpha+\\cos^{2}\\alpha=1$.', 'Karena $\\alpha$ lancip, nilai sinus positif.'],
    competencies: ['identitas trigonometri'],
  },
  {
    id: 'tr-03',
    topicId: 'trigonometri',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Hitung nilai $\\sin 60^\\circ \\cdot \\cos 30^\\circ$.',
    answer: '3/4',
    acceptedAnswers: ['0,75', '0.75', '0,750', '0.750', '\\dfrac{3}{4}'],
    explanation:
      '$\\sin 60^\\circ=\\dfrac{\\sqrt{3}}{2}$ dan $\\cos 30^\\circ=\\dfrac{\\sqrt{3}}{2}$, sehingga hasilnya $\\dfrac{\\sqrt{3}}{2}\\cdot\\dfrac{\\sqrt{3}}{2}=\\dfrac{3}{4}$.',
    hints: [
      'Perhatikan bahwa nilai $\\sin 60^\\circ$ dan $\\cos 30^\\circ$ sama.',
      'Keduanya $\\dfrac{\\sqrt{3}}{2}$, sehingga hasilnya $\\dfrac{\\sqrt{3}}{2}\\cdot\\dfrac{\\sqrt{3}}{2}$.',
    ],
    competencies: ['sudut istimewa'],
  },
  {
    id: 'tr-04',
    topicId: 'trigonometri',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Pada segitiga $ABC$ diketahui $a=12$, $A=30^\\circ$, dan $B=60^\\circ$. Tentukan panjang sisi $b$ menggunakan aturan sinus.',
    answer: '12√3',
    acceptedAnswers: ['12\\sqrt{3}', '12√3', '12 akar 3'],
    explanation:
      'Aturan sinus: $\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}$, maka $\\dfrac{12}{1/2}=\\dfrac{b}{\\sqrt{3}/2}$. Diperoleh $24=\\dfrac{b}{\\sqrt{3}/2}$ sehingga $b=24\\cdot\\dfrac{\\sqrt{3}}{2}=12\\sqrt{3}$.',
    hints: [
      'Gunakan $\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}$ dan pasangkan sisi dengan sudut di hadapannya.',
      'Substitusikan $a=12$, $\\sin30^\\circ=\\dfrac{1}{2}$, dan $\\sin60^\\circ=\\dfrac{\\sqrt{3}}{2}$.',
    ],
    competencies: ['aturan sinus'],
  },
  {
    id: 'tr-05',
    topicId: 'trigonometri',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Tentukan panjang sisi $a$ pada segitiga dengan $b=3$, $c=5$, dan $A=120^\\circ$.',
    answer: '7',
    explanation:
      'Aturan kosinus: $a^{2}=b^{2}+c^{2}-2bc\\cos A=9+25-2\\cdot3\\cdot5\\cdot\\left(-\\dfrac{1}{2}\\right)=34+15=49$, sehingga $a=7$.',
    hints: ['Gunakan aturan kosinus $a^{2}=b^{2}+c^{2}-2bc\\cos A$.', 'Ingat $\\cos 120^\\circ=-\\dfrac{1}{2}$.'],
    competencies: ['aturan kosinus'],
  },
  {
    id: 'tr-06',
    topicId: 'trigonometri',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Sebuah rampa akses untuk kursi roda panjangnya $6$ m dan membentuk sudut $60^\\circ$ dengan tanah. Jarak horizontal yang ditempuh rampa itu adalah …',
    options: [
      { key: 'A', text: '$3$ m' },
      { key: 'B', text: '$3\\sqrt{3}$ m' },
      { key: 'C', text: '$3\\sqrt{2}$ m' },
      { key: 'D', text: '$6\\sqrt{3}$ m' },
    ],
    answer: 'A',
    explanation:
      'Panjang rampa adalah sisi miring dan jarak horizontal adalah sisi samping sudut, sehingga $x=6\\cos60^\\circ=6\\cdot\\dfrac{1}{2}=3$ m. Opsi B ($3\\sqrt{3}$) memakai sinus sehingga menghasilkan ketinggian vertikal, bukan jarak horizontal. Opsi C ($3\\sqrt{2}$) memakai nilai $\\cos45^\\circ$, bukan $\\cos60^\\circ$. Opsi D ($6\\sqrt{3}$) memakai tangen $60^\\circ$ sehingga hasilnya terlalu besar.',
    hints: [
      'Jarak horizontal adalah sisi samping sudut, sedangkan panjang rampa adalah sisi miring.',
      'Gunakan kosinus: $\\cos60^\\circ=\\dfrac{\\text{sisi samping}}{\\text{sisi miring}}$.',
    ],
    competencies: ['penerapan trigonometri'],
  },
  {
    id: 'tr-07',
    topicId: 'trigonometri',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt: 'Dari jarak $30$ m, sudut elevasi ke puncak tiang bendera adalah $30^\\circ$. Tentukan tinggi tiang.',
    answer: '10√3',
    acceptedAnswers: ['10\\sqrt{3}', '10√3', '17,32', '17.32'],
    explanation:
      '$\\tan 30^\\circ=\\dfrac{h}{30}$ sehingga $h=30\\tan 30^\\circ=30\\cdot\\dfrac{\\sqrt{3}}{3}=10\\sqrt{3}$ m $\\approx 17{,}32$ m.',
    hints: [
      'Sisi depan adalah tinggi tiang, sisi samping adalah jarak $30$ m.',
      'Gunakan $\\tan30^\\circ=\\dfrac{\\sqrt{3}}{3}$ secara langsung.',
    ],
    competencies: ['sudut elevasi'],
  },
  {
    id: 'tr-08',
    topicId: 'trigonometri',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Sederhanakan $(\\sin\\alpha+\\cos\\alpha)^{2}+(\\sin\\alpha-\\cos\\alpha)^{2}$ dan jelaskan mengapa hasilnya selalu konstan untuk setiap $\\alpha$.',
    answer:
      'Hasil penjabaran: $(\\sin^{2}\\alpha+2\\sin\\alpha\\cos\\alpha+\\cos^{2}\\alpha)+(\\sin^{2}\\alpha-2\\sin\\alpha\\cos\\alpha+\\cos^{2}\\alpha)=2\\sin^{2}\\alpha+2\\cos^{2}\\alpha=2(\\sin^{2}\\alpha+\\cos^{2}\\alpha)=2$. Hasilnya konstan karena identitas $\\sin^{2}\\alpha+\\cos^{2}\\alpha=1$ berlaku untuk semua $\\alpha$.',
    explanation:
      'Kunci: kedua suku silang $2\\sin\\alpha\\cos\\alpha$ dan $-2\\sin\\alpha\\cos\\alpha$ saling menghapus, menyisakan dua kali identitas dasar.',
    hints: ['Jabarkan tiap kuadrat lalu jumlahkan.', 'Perhatikan suku $2\\sin\\alpha\\cos\\alpha$ dan $-2\\sin\\alpha\\cos\\alpha$.'],
    competencies: ['identitas trigonometri', 'pembuktian'],
    rubric: [
      'Menjabarkan $(\\sin\\alpha\\pm\\cos\\alpha)^{2}$ dengan benar',
      'Menunjukkan suku silang $\\pm2\\sin\\alpha\\cos\\alpha$ saling menghapus',
      'Memakai identitas $\\sin^{2}\\alpha+\\cos^{2}\\alpha=1$',
      'Menyimpulkan hasilnya konstan yaitu $2$',
    ],
  },
  {
    id: 'tr-09',
    topicId: 'trigonometri',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Diketahui $\\sin\\alpha=\\dfrac{5}{13}$ dan $\\alpha$ lancip. Tentukan $\\cos\\alpha$ dan $\\tan\\alpha$, lalu hitung $\\dfrac{\\cos\\alpha}{1-\\sin\\alpha}$.',
    answer:
      '$\\cos\\alpha=\\sqrt{1-\\dfrac{25}{169}}=\\sqrt{\\dfrac{144}{169}}=\\dfrac{12}{13}$ dan $\\tan\\alpha=\\dfrac{\\sin\\alpha}{\\cos\\alpha}=\\dfrac{5/13}{12/13}=\\dfrac{5}{12}$. Kemudian $\\dfrac{\\cos\\alpha}{1-\\sin\\alpha}=\\dfrac{12/13}{1-5/13}=\\dfrac{12/13}{8/13}=\\dfrac{12}{8}=\\dfrac{3}{2}$.',
    explanation:
      'Gunakan identitas Pythagoras untuk mencari kosinus, definisi tangen, lalu substitusikan ke bentuk pecahan.',
    hints: ['Gunakan $\\cos^{2}\\alpha=1-\\sin^{2}\\alpha$.', 'Setelah $\\cos\\alpha$ dan $\\sin\\alpha$ diketahui, substitusikan langsung.'],
    competencies: ['identitas trigonometri'],
    rubric: [
      'Menghitung $\\cos\\alpha=\\dfrac{12}{13}$ dari identitas Pythagoras',
      'Menghitung $\\tan\\alpha=\\dfrac{5}{12}$',
      'Menyederhanakan $\\dfrac{\\cos\\alpha}{1-\\sin\\alpha}$',
      'Memperoleh hasil akhir $\\dfrac{3}{2}$',
    ],
  },
  {
    id: 'tr-10',
    topicId: 'trigonometri',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Jelaskan mengapa aturan kosinus $a^{2}=b^{2}+c^{2}-2bc\\cos A$ berubah menjadi teorema Pythagoras ketika $A=90^\\circ$. Lalu gunakan hasil itu untuk menentukan $a$ bila $b=5$, $c=12$, dan $A=90^\\circ$.',
    answer:
      'Karena $\\cos 90^\\circ=0$, suku $-2bc\\cos A$ menjadi nol sehingga $a^{2}=b^{2}+c^{2}$, yaitu teorema Pythagoras. Untuk $b=5$, $c=12$: $a^{2}=25+144=169$ sehingga $a=13$.',
    explanation:
      'Kunci: aturan kosinus adalah generalisasi teorema Pythagoras; Pythagoras adalah kasus khusus saat sudutnya siku-siku.',
    hints: ['Berapa nilai $\\cos 90^\\circ$?', 'Setelah $a^{2}$ diperoleh, ambil akar positif.'],
    competencies: ['aturan kosinus', 'penalaran'],
    rubric: [
      'Menjelaskan $\\cos90^\\circ=0$ menghapus suku $-2bc\\cos A$',
      'Menyimpulkan $a^{2}=b^{2}+c^{2}$ sebagai teorema Pythagoras',
      'Menghitung $a^{2}=25+144=169$',
      'Menyimpulkan $a=13$',
    ],
  },
  {
    id: 'tr-11',
    topicId: 'trigonometri',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Sebuah tiang ditopang kabel dari puncak tiang ke titik di tanah sejauh $12$ m dari kaki tiang. Sudut antara kabel dan tanah $50^\\circ$ (gunakan $\\sin50^\\circ\\approx0{,}766$, $\\cos50^\\circ\\approx0{,}643$, $\\tan50^\\circ\\approx1{,}192$). (a) Tentukan tinggi tiang. (b) Tentukan panjang kabel. (c) Jelaskan mengapa tangen, bukan kosinus, dipakai untuk mencari tinggi tiang.',
    answer:
      '(a) $\\tan50^\\circ=\\dfrac{h}{12}$, sehingga $h=12\\tan50^\\circ\\approx12(1{,}192)=14{,}30$ m. (b) $\\cos50^\\circ=\\dfrac{12}{L}$, sehingga $L=\\dfrac{12}{0{,}643}\\approx18{,}66$ m. (c) Tinggi tiang adalah sisi depan sudut, sedangkan $12$ m adalah sisi samping; perbandingan yang menghubungkan sisi depan dan sisi samping adalah tangen. Kosinus menghubungkan sisi samping dengan sisi miring sehingga tidak langsung memberi tinggi.',
    explanation:
      'Kunci: memilih perbandingan trigonometri yang tepat sesuai sisi yang diketahui, menghitung tinggi dan panjang kabel, lalu menjelaskan alasan pemilihannya.',
    hints: ['Sisi $12$ m berperan sebagai sisi samping sudut.', 'Gunakan tangen untuk depan-samping dan kosinus untuk samping-miring.'],
    competencies: ['trigonometri', 'sudut elevasi', 'evaluasi'],
    rubric: [
      'Memilih tangen karena sisi $12$ m adalah sisi samping',
      'Menghitung tinggi tiang sekitar $14{,}30$ m',
      'Menghitung panjang kabel dengan kosinus sekitar $18{,}66$ m',
      'Menjelaskan alasan tangen lebih tepat daripada kosinus',
    ],
  },
  {
    id: 'tr-12',
    topicId: 'trigonometri',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Seorang pendaki melihat puncak gunung dengan sudut elevasi $30^\\circ$. Setelah berjalan mendekat sejauh $200$ m, sudut elevasi menjadi $45^\\circ$. (a) Susun model untuk menentukan tinggi gunung. (b) Hitung tinggi gunung tersebut.',
    answer:
      '(a) Misal tinggi gunung $h$ dan jarak dari posisi kedua ke kaki gunung $x$. Dari sudut $45^\\circ$: $h=x$. Dari sudut $30^\\circ$: $h=(x+200)\\tan30^\\circ=\\dfrac{x+200}{\\sqrt{3}}$. Menyamakan: $x=\\dfrac{x+200}{\\sqrt{3}}$, sehingga $\\sqrt{3}\\,x=x+200$ dan $x(\\sqrt{3}-1)=200$. (b) Maka $x=\\dfrac{200}{\\sqrt{3}-1}=\\dfrac{200(\\sqrt{3}+1)}{2}=100(\\sqrt{3}+1)\\approx273{,}2$ m. Karena $h=x$, tinggi gunung sekitar $273$ m.',
    explanation:
      'Kunci: menyusun dua persamaan tangen dari dua sudut elevasi, mengeliminasi jarak, lalu menghitung tinggi.',
    hints: ['Tulis tinggi dalam dua cara memakai $\\tan30^\\circ$ dan $\\tan45^\\circ$.', 'Rasionalkan penyebut $\\sqrt{3}-1$ dengan bentuk sekawan.'],
    competencies: ['pemodelan trigonometri', 'sudut elevasi'],
    rubric: [
      'Menuliskan $h=x$ dari sudut elevasi $45^\\circ$',
      'Menuliskan $h=(x+200)\\tan30^\\circ$',
      'Mengeliminasi $h$ dan menyelesaikan $x$',
      'Menghitung tinggi gunung sekitar $273$ m',
    ],
  },
  {
    id: 'tr-13',
    topicId: 'trigonometri',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Buktikan bahwa $\\tan\\theta+\\cot\\theta=\\dfrac{1}{\\sin\\theta\\cos\\theta}$ untuk setiap $\\theta$ yang membuat bentuk itu terdefinisi, lalu gunakan hasilnya untuk menentukan $\\tan\\theta+\\cot\\theta$ ketika $\\sin\\theta\\cos\\theta=\\dfrac{1}{4}$.',
    answer:
      'Tulis $\\tan\\theta=\\dfrac{\\sin\\theta}{\\cos\\theta}$ dan $\\cot\\theta=\\dfrac{\\cos\\theta}{\\sin\\theta}$. Maka $\\tan\\theta+\\cot\\theta=\\dfrac{\\sin\\theta}{\\cos\\theta}+\\dfrac{\\cos\\theta}{\\sin\\theta}=\\dfrac{\\sin^{2}\\theta+\\cos^{2}\\theta}{\\sin\\theta\\cos\\theta}=\\dfrac{1}{\\sin\\theta\\cos\\theta}$. Terbukti. Jika $\\sin\\theta\\cos\\theta=\\dfrac{1}{4}$, maka $\\tan\\theta+\\cot\\theta=\\dfrac{1}{1/4}=4$.',
    explanation:
      'Kunci: menyamakan penyebut kedua perbandingan, memakai identitas Pythagoras pada pembilang, lalu mensubstitusikan nilai yang diketahui.',
    hints: [
      'Ubah tangen dan kotangen ke bentuk sinus dan kosinus.',
      'Pembilangnya menjadi $\\sin^{2}\\theta+\\cos^{2}\\theta=1$.',
    ],
    competencies: ['identitas trigonometri', 'pembuktian', 'penalaran'],
    rubric: [
      'Mengubah tangen dan kotangen menjadi sinus dan kosinus',
      'Menyamakan penyebut dan memakai identitas Pythagoras',
      'Membuktikan $\\tan\\theta+\\cot\\theta=\\dfrac{1}{\\sin\\theta\\cos\\theta}$',
      'Mensubstitusikan $\\sin\\theta\\cos\\theta=\\dfrac{1}{4}$ untuk memperoleh $4$',
    ],
  },
  {
    id: 'tr-14',
    topicId: 'trigonometri',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Diketahui sudut lancip $\\alpha$ dengan $\\tan\\alpha=\\dfrac{3}{4}$. Nilai $\\sin\\alpha+\\cos\\alpha$ adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{7}{5}$' },
      { key: 'B', text: '$\\dfrac{3}{5}$' },
      { key: 'C', text: '$\\dfrac{12}{25}$' },
      { key: 'D', text: '$1$' },
    ],
    answer: 'A',
    explanation:
      'Karena $\\tan\\alpha=\\dfrac{3}{4}$, sisi depan $3$, sisi samping $4$, dan sisi miring $\\sqrt{3^{2}+4^{2}}=5$. Maka $\\sin\\alpha=\\dfrac{3}{5}$ dan $\\cos\\alpha=\\dfrac{4}{5}$, sehingga $\\sin\\alpha+\\cos\\alpha=\\dfrac{3}{5}+\\dfrac{4}{5}=\\dfrac{7}{5}$. Opsi B ($\\dfrac{3}{5}$) hanya mengambil nilai $\\sin\\alpha$. Opsi C ($\\dfrac{12}{25}$) mengalikan sinus dengan kosinus. Opsi D ($1$) mengira jumlahnya sama dengan identitas Pythagoras.',
    hints: [
      'Gunakan segitiga siku-siku bantu bersisi $3$ dan $4$.',
      'Hitung sisi miring, lalu tentukan sinus dan kosinus.',
    ],
    competencies: ['perbandingan trigonometri', 'penalaran'],
  },
  {
    id: 'tr-15',
    topicId: 'trigonometri',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Dua pemain sepak bola berlari dari titik yang sama. Pemain pertama menempuh $8$ m dan pemain kedua $5$ m, dengan sudut antara arah lari keduanya $60^\\circ$. Jarak kedua pemain itu adalah …',
    options: [
      { key: 'A', text: '$7$ m' },
      { key: 'B', text: '$\\sqrt{89}$ m' },
      { key: 'C', text: '$3$ m' },
      { key: 'D', text: '$\\sqrt{129}$ m' },
    ],
    answer: 'A',
    explanation:
      'Gunakan aturan kosinus: $d^{2}=8^{2}+5^{2}-2\\cdot8\\cdot5\\cos60^\\circ=64+25-80\\cdot\\dfrac{1}{2}=89-40=49$, sehingga $d=7$ m. Opsi B ($\\sqrt{89}$) lupa mengurangkan suku kosinus sehingga seperti memakai Pythagoras untuk sudut $90^\\circ$. Opsi C ($3$) mengurangkan kedua jarak karena menganggap arahnya berlawanan. Opsi D ($\\sqrt{129}$) menjumlahkan suku kosinus, seolah sudutnya $120^\\circ$.',
    hints: [
      'Diketahui dua sisi dan sudut apitnya, jadi gunakan aturan kosinus.',
      'Ingat $\\cos60^\\circ=\\dfrac{1}{2}$ sehingga suku $-2bc\\cos A$ menjadi $-40$.',
    ],
    competencies: ['aturan kosinus', 'kontekstual'],
  },
];

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
      'Dari tabel sudut istimewa, $\\sin 30^\\circ=\\dfrac{1}{2}$ dan $\\cos 60^\\circ=\\dfrac{1}{2}$, sehingga jumlahnya $\\dfrac{1}{2}+\\dfrac{1}{2}=1$.',
    hints: ['Gunakan tabel sudut istimewa untuk $30^\\circ$ dan $60^\\circ$.'],
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
      { key: 'C', text: '$\\dfrac{1}{5}$' },
      { key: 'D', text: '$\\dfrac{5}{3}$' },
    ],
    answer: 'A',
    explanation:
      'Dari identitas $\\sin^{2}\\alpha=1-\\cos^{2}\\alpha=1-\\dfrac{16}{25}=\\dfrac{9}{25}$. Karena $\\alpha$ lancip, $\\sin\\alpha>0$, jadi $\\sin\\alpha=\\dfrac{3}{5}$ (segitiga $3$-$4$-$5$).',
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
    acceptedAnswers: ['0,75', '0.75', '\\dfrac{3}{4}'],
    explanation:
      '$\\sin 60^\\circ=\\dfrac{\\sqrt{3}}{2}$ dan $\\cos 30^\\circ=\\dfrac{\\sqrt{3}}{2}$, sehingga hasilnya $\\dfrac{\\sqrt{3}}{2}\\cdot\\dfrac{\\sqrt{3}}{2}=\\dfrac{3}{4}$.',
    hints: ['Perhatikan bahwa nilai $\\sin 60^\\circ$ dan $\\cos 30^\\circ$ sama.'],
    competencies: ['sudut istimewa'],
  },
  {
    id: 'tr-04',
    topicId: 'trigonometri',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Pada segitiga $ABC$ diketahui $a=8$, $A=30^\\circ$, dan $B=45^\\circ$. Tentukan panjang sisi $b$ menggunakan aturan sinus.',
    answer: '8√2',
    acceptedAnswers: ['8\\sqrt{2}', '8√2', '8 akar 2'],
    explanation:
      'Aturan sinus: $\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}$, maka $\\dfrac{8}{1/2}=\\dfrac{b}{\\sqrt{2}/2}$. Diperoleh $16=\\dfrac{b}{\\sqrt{2}/2}$ sehingga $b=16\\cdot\\dfrac{\\sqrt{2}}{2}=8\\sqrt{2}$.',
    hints: ['Gunakan $\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}$ dan pasangkan sisi dengan sudut di hadapannya.'],
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
      'Sebuah tangga bersandar pada dinding dan membentuk sudut $60^\\circ$ dengan tanah. Jika panjang tangga $6$ m, tinggi ujung tangga dari tanah adalah …',
    options: [
      { key: 'A', text: '$3$ m' },
      { key: 'B', text: '$3\\sqrt{3}$ m' },
      { key: 'C', text: '$3\\sqrt{2}$ m' },
      { key: 'D', text: '$6\\sqrt{3}$ m' },
    ],
    answer: 'B',
    explanation:
      'Tinggi adalah sisi depan sudut $60^\\circ$ terhadap sisi miring (tangga), sehingga $h=6\\sin 60^\\circ=6\\cdot\\dfrac{\\sqrt{3}}{2}=3\\sqrt{3}$ m.',
    hints: ['Sisi miring adalah panjang tangga; tinggi adalah sisi depan sudut.'],
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
    hints: ['Sisi depan adalah tinggi tiang, sisi samping adalah jarak $30$ m.'],
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
    hints: ['Sisi $12$ m berperan sebagai sisi samping sudut.', 'Gunakan tangen untuk depan–samping dan kosinus untuk samping–miring.'],
    competencies: ['trigonometri', 'sudut elevasi', 'evaluasi'],
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
  },
];

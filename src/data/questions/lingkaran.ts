import type { Question } from '@/types/content';

export const lingkaranQuestions: Question[] = [
  {
    id: 'lk-01',
    topicId: 'lingkaran',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Sudut pusat sebuah lingkaran $70^\\circ$. Tentukan besar sudut keliling yang menghadap busur yang sama.',
    answer: '35',
    acceptedAnswers: ['35°', '35^\\circ', '35 derajat'],
    explanation:
      'Sudut keliling $=\\dfrac{1}{2}\\times$ sudut pusat $=\\dfrac{1}{2}\\times70^\\circ=35^\\circ$.',
    hints: [
      'Sudut keliling adalah setengah sudut pusat yang menghadap busur sama.',
      'Sudut pusatnya $70^\\circ$.',
      'Hitung $\\dfrac{1}{2} \\times 70^\\circ$.',
    ],
    competencies: ['sudut pusat dan sudut keliling'],
  },
  {
    id: 'lk-02',
    topicId: 'lingkaran',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Besarnya sudut keliling yang menghadap diameter lingkaran adalah …',
    options: [
      { key: 'A', text: '$45^\\circ$' },
      { key: 'B', text: '$60^\\circ$' },
      { key: 'C', text: '$90^\\circ$' },
      { key: 'D', text: '$180^\\circ$' },
    ],
    answer: 'C',
    explanation:
      'Sudut pusat yang menghadap diameter adalah $180^\\circ$, dan sudut keliling setengah darinya, yaitu $\\dfrac{1}{2}\\times180^\\circ=90^\\circ$. Opsi A dan B keliru karena membagi sudut pusat dengan $4$ atau $3$; opsi D menyamakan sudut keliling dengan sudut pusat, padahal nilainya setengahnya.',
    hints: [
      'Diameter adalah busur dengan sudut pusat $180^\\circ$.',
      'Sudut keliling selalu setengah sudut pusat yang menghadap busur sama.',
    ],
    competencies: ['sudut keliling'],
  },
  {
    id: 'lk-03',
    topicId: 'lingkaran',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Lingkaran berjari-jari $14$ cm dan $\\pi=\\dfrac{22}{7}$. Tentukan panjang busur untuk sudut pusat $90^\\circ$.',
    answer: '22',
    acceptedAnswers: ['22 cm', '22\\text{ cm}'],
    explanation:
      '$s=\\dfrac{\\theta}{360^\\circ}\\times2\\pi r=\\dfrac{90}{360}\\times2\\times\\dfrac{22}{7}\\times14=22$ cm.',
    hints: [
      'Gunakan rumus panjang busur $s=\\dfrac{\\theta}{360^\\circ}\\cdot2\\pi r$.',
      'Substitusikan $\\theta = 90^\\circ$, $r = 14$, dan $\\pi = \\dfrac{22}{7}$.',
      'Karena $\\dfrac{90}{360} = \\dfrac{1}{4}$, hitung $\\dfrac{1}{4} \\times 2 \\times \\dfrac{22}{7} \\times 14$.',
    ],
    competencies: ['panjang busur'],
  },
  {
    id: 'lk-04',
    topicId: 'lingkaran',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Lingkaran berjari-jari $10$ cm dan $\\pi=3{,}14$. Panjang busur untuk sudut pusat $90^\\circ$ adalah …',
    options: [
      { key: 'A', text: '$7{,}85$ cm' },
      { key: 'B', text: '$15{,}7$ cm' },
      { key: 'C', text: '$31{,}4$ cm' },
      { key: 'D', text: '$78{,}5$ cm' },
    ],
    answer: 'B',
    explanation:
      '$s=\\dfrac{90}{360}\\times2\\times3{,}14\\times10=\\dfrac{1}{4}\\times62{,}8=15{,}7$ cm. Opsi A memakai diameter $2r=20$ sebagai jari-jari atau salah membagi; opsi C menghitung untuk sudut $180^\\circ$ (setengah lingkaran); opsi D menghitung keliling penuh $2\\pi r=62{,}8$ lalu menambah, bukan luas maupun busur yang diminta.',
    hints: [
      'Sudut $90^\\circ$ berarti seperempat lingkaran.',
      'Gunakan $s=\\dfrac{\\theta}{360^\\circ}\\times2\\pi r$ dengan $r=10$.',
    ],
    competencies: ['panjang busur'],
  },
  {
    id: 'lk-05',
    topicId: 'lingkaran',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penerapan',
    prompt:
      'Tentukan luas tembereng lingkaran berjari-jari $14$ cm dengan sudut pusat $90^\\circ$ dan $\\pi=\\dfrac{22}{7}$.',
    answer:
      'Luas juring $=\\dfrac{90}{360}\\times\\dfrac{22}{7}\\times14^{2}=154$ cm². Luas segitiga siku-siku $=\\dfrac{1}{2}\\times14\\times14=98$ cm². Luas tembereng $=$ luas juring $-$ luas segitiga $=154-98=56$ cm².',
    explanation:
      'Tembereng selalu lebih kecil daripada juring karena sebagian daerah ditempati segitiga yang dibentuk dua jari-jari dan tali busurnya.',
    hints: ['Hitung luas juring dan luas segitiga lebih dahulu.', 'Tembereng $=$ juring $-$ segitiga.'],
    competencies: ['luas tembereng'],
    rubric: [
      'Menghitung luas juring $\\dfrac{90}{360}\\times\\dfrac{22}{7}\\times14^{2}=154$ cm²',
      'Menghitung luas segitiga $\\dfrac{1}{2}\\times14\\times14=98$ cm²',
      'Mengurangkan segitiga dari juring sehingga tembereng $154-98=56$ cm²',
    ],
  },
  {
    id: 'lk-06',
    topicId: 'lingkaran',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Dua lingkaran berjari-jari $5$ cm dan $1$ cm dengan jarak pusat $10$ cm. Panjang garis singgung persekutuan dalamnya adalah …',
    options: [
      { key: 'A', text: '$6$ cm' },
      { key: 'B', text: '$8$ cm' },
      { key: 'C', text: '$10$ cm' },
      { key: 'D', text: '$12$ cm' },
    ],
    answer: 'B',
    explanation:
      '$\\ell_{\\text{dalam}}=\\sqrt{d^{2}-(R+r)^{2}}=\\sqrt{10^{2}-(5+1)^{2}}=\\sqrt{100-36}=8$ cm. Opsi A hanya menjumlahkan jari-jari $R+r=6$ tanpa teorema Pythagoras; opsi C menyamakannya dengan jarak pusat $d=10$; opsi D keliru memakai $2(R+r)=12$.',
    hints: [
      'Garis singgung persekutuan dalam memakai $(R+r)^{2}$.',
      'Hitung $\\sqrt{d^{2}-(R+r)^{2}}$ dengan $d=10$.',
    ],
    competencies: ['garis singgung persekutuan'],
  },
  {
    id: 'lk-07',
    topicId: 'lingkaran',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Dua lingkaran berjari-jari $8$ cm dan $3$ cm dengan jarak pusat $13$ cm. Tentukan panjang garis singgung persekutuan luarnya.',
    answer: '12',
    acceptedAnswers: ['12 cm', '12\\text{ cm}'],
    explanation:
      '$\\ell_{\\text{luar}}=\\sqrt{d^{2}-(R-r)^{2}}=\\sqrt{13^{2}-(8-3)^{2}}=\\sqrt{169-25}=12$ cm.',
    hints: [
      'Garis singgung persekutuan luar memakai $(R-r)^{2}$.',
      'Untuk luar, gunakan $(R-r)$; untuk dalam, gunakan $(R+r)$.',
    ],
    competencies: ['garis singgung persekutuan'],
  },
  {
    id: 'lk-08',
    topicId: 'lingkaran',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Sebuah lingkaran berjari-jari $21$ cm memiliki panjang busur $22$ cm dengan $\\pi=\\dfrac{22}{7}$. Tentukan besar sudut pusatnya.',
    answer: '60',
    acceptedAnswers: ['60°', '60^\\circ', '60 derajat'],
    explanation:
      '$\\dfrac{\\theta}{360^\\circ}\\times2\\times\\dfrac{22}{7}\\times21=22$. Karena $2\\times\\dfrac{22}{7}\\times21=132$, maka $\\dfrac{\\theta}{360^\\circ}=\\dfrac{22}{132}=\\dfrac{1}{6}$, sehingga $\\theta=60^\\circ$.',
    hints: ['Substitusikan $s$, $r$, dan $\\pi$ ke rumus panjang busur.', 'Selesaikan untuk $\\theta$.'],
    competencies: ['panjang busur'],
  },
  {
    id: 'lk-09',
    topicId: 'lingkaran',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Jelaskan mengapa besar sudut keliling sama dengan setengah sudut pusat yang menghadap busur yang sama. Gunakan bantuan segitiga sama kaki yang dibentuk oleh jari-jari.',
    answer:
      'Hubungkan pusat $O$ dengan titik sudut keliling $C$ serta titik $A$ dan $B$ pada lingkaran. Segitiga $OAC$ dan $OBC$ sama kaki karena $OA=OC=OB=r$. Misalkan $\\angle OAC=\\angle OCA=a$ dan $\\angle OBC=\\angle OCB=b$. Sudut luar di $O$ pada $\\triangle OAC$ besarnya $2a$ dan pada $\\triangle OBC$ besarnya $2b$, sehingga $\\angle AOB=2a+2b=2(a+b)=2\\angle ACB$. Terbukti.',
    explanation:
      'Kunci: sifat dua sudut alas segitiga sama kaki dan sifat sudut luar segitiga.',
    hints: ['Manfaatkan $OA=OC=OB=r$.', 'Sudut luar segitiga sama dengan jumlah dua sudut dalam yang tidak berdekatan.'],
    competencies: ['pembuktian', 'sudut pusat dan sudut keliling'],
    rubric: [
      'Menyebut $OA=OC=OB=r$ sehingga terbentuk segitiga sama kaki',
      'Menamai sudut alas $\\angle OAC=\\angle OCA$ dan $\\angle OBC=\\angle OCB$',
      'Memakai sifat sudut luar untuk memperoleh $\\angle AOB=2a+2b$',
      'Menyimpulkan $\\angle AOB=2\\angle ACB$',
    ],
  },
  {
    id: 'lk-10',
    topicId: 'lingkaran',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah lingkaran berjari-jari $7$ cm berada di dalam persegi berukuran $14\\times14$ cm dan menyinggung keempat sisinya. Dengan $\\pi=\\dfrac{22}{7}$, tentukan luas daerah persegi di luar lingkaran.',
    answer:
      'Luas persegi $=14\\times14=196$ cm². Luas lingkaran $=\\dfrac{22}{7}\\times7^{2}=154$ cm². Luas daerah persegi di luar lingkaran $=196-154=42$ cm².',
    explanation:
      'Karena lingkaran menyinggung keempat sisi, diameternya sama dengan panjang sisi persegi ($14$ cm).',
    hints: [
      'Hitung luas persegi dan luas lingkaran, lalu kurangkan.',
      'Karena lingkaran menyinggung keempat sisi, diameter lingkaran sama dengan sisi persegi.',
    ],
    competencies: ['luas lingkaran', 'pemodelan'],
    rubric: [
      'Menyimpulkan diameter lingkaran $14$ cm sama dengan sisi persegi',
      'Menghitung luas persegi $14\\times14=196$ cm²',
      'Menghitung luas lingkaran $\\dfrac{22}{7}\\times7^{2}=154$ cm²',
      'Mengurangkan sehingga luas di luar lingkaran $42$ cm²',
    ],
  },
  {
    id: 'lk-11',
    topicId: 'lingkaran',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Dari titik $P$ di luar lingkaran berpusat $O$ dan berjari-jari $6$ cm, ditarik dua garis singgung $PA$ dan $PB$ dengan titik singgung $A$ dan $B$. Jika $OP=10$ cm, tentukan panjang $PA$ dan luas segi empat $OAPB$.',
    answer:
      'Karena $PA$ menyinggung lingkaran, $OA \\perp PA$ sehingga segitiga $OAP$ siku-siku di $A$. Dengan teorema Pythagoras, $PA = \\sqrt{OP^{2}-OA^{2}} = \\sqrt{10^{2}-6^{2}} = \\sqrt{100-36} = 8$ cm. Segi empat $OAPB$ tersusun dari dua segitiga siku-siku kongruen $OAP$ dan $OBP$, sehingga luasnya $= 2 \\cdot \\dfrac{1}{2} \\cdot OA \\cdot PA = 6 \\cdot 8 = 48$ cm².',
    explanation:
      'Kunci jawaban: memanfaatkan sifat garis singgung tegak lurus jari-jari di titik singgung, teorema Pythagoras, dan dekomposisi luas menjadi dua segitiga siku-siku.',
    hints: [
      'Garis singgung selalu tegak lurus jari-jari di titik singgung.',
      'Luas $OAPB$ sama dengan dua kali luas segitiga siku-siku $OAP$.',
    ],
    competencies: ['garis singgung lingkaran', 'teorema Pythagoras', 'luas'],
    rubric: [
      'Memakai $OA\\perp PA$ sehingga segitiga $OAP$ siku-siku di $A$',
      'Menghitung $PA=\\sqrt{10^{2}-6^{2}}=8$ cm',
      'Membagi $OAPB$ menjadi dua segitiga siku-siku kongruen',
      'Menghitung luas $6\\times8=48$ cm²',
    ],
  },
  {
    id: 'lk-12',
    topicId: 'lingkaran',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Dua lingkaran masing-masing berjari-jari $8$ cm dan $2$ cm memiliki jarak pusat $10$ cm. (a) Tentukan panjang garis singgung persekutuan luarnya. (b) Tentukan panjang garis singgung persekutuan dalamnya. (c) Jelaskan kapan garis singgung persekutuan dalam tidak ada.',
    answer:
      '(a) $\\ell_{\\text{luar}}=\\sqrt{d^{2}-(R-r)^{2}}=\\sqrt{10^{2}-(8-2)^{2}}=\\sqrt{100-36}=8$ cm. (b) $\\ell_{\\text{dalam}}=\\sqrt{d^{2}-(R+r)^{2}}=\\sqrt{100-(8+2)^{2}}=\\sqrt{100-100}=0$ cm; kedua lingkaran bersinggungan luar sehingga garis singgung dalamnya berimpit di satu titik. (c) Garis singgung persekutuan dalam tidak ada jika $d<R+r$, yaitu ketika kedua lingkaran saling berpotongan sehingga tidak ada garis yang menyinggung keduanya secara bersamaan di sisi dalam.',
    explanation:
      'Kunci: memakai rumus garis singgung persekutuan luar dan dalam dengan benar, serta menafsirkan syarat keberadaannya.',
    hints: ['Gunakan $(R-r)$ untuk singgung luar dan $(R+r)$ untuk singgung dalam.', 'Periksa nilai di bawah akar.'],
    competencies: ['garis singgung persekutuan', 'evaluasi'],
    rubric: [
      'Menghitung garis singgung luar $\\sqrt{10^{2}-(8-2)^{2}}=8$ cm',
      'Menghitung garis singgung dalam $\\sqrt{10^{2}-(8+2)^{2}}=0$ cm',
      'Menyimpulkan kedua lingkaran bersinggungan luar',
      'Menjelaskan garis singgung dalam tidak ada saat $d<R+r$',
    ],
  },
  {
    id: 'lk-13',
    topicId: 'lingkaran',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Sebuah taman berbentuk juring lingkaran berjari-jari $10$ m dengan sudut pusat $120^\\circ$ dan $\\pi=3{,}14$. (a) Tentukan panjang busur taman. (b) Tentukan luas juringnya. (c) Jika seluruh tepi juring (dua jari-jari dan busur) dipagari, tentukan total panjang pagar.',
    answer:
      '(a) $s=\\dfrac{120}{360}\\times2\\times3{,}14\\times10=\\dfrac{1}{3}\\times62{,}8\\approx20{,}93$ m. (b) $L=\\dfrac{120}{360}\\times3{,}14\\times10^{2}=\\dfrac{1}{3}\\times314\\approx104{,}67$ m$^{2}$. (c) Total pagar $=2r+s=20+20{,}93=40{,}93$ m.',
    explanation:
      'Kunci: membedakan panjang busur dari keliling tepi, menghitung luas juring, dan menjumlahkan dua jari-jari untuk total pagar.',
    hints: ['Sudut $120^\\circ$ sama dengan sepertiga putaran.', 'Total pagar mencakup dua jari-jari lurus dan satu busur.'],
    competencies: ['panjang busur', 'luas juring', 'kontekstual'],
    rubric: [
      'Menghitung panjang busur $\\dfrac13\\times2\\times3{,}14\\times10\\approx20{,}93$ m',
      'Menghitung luas juring $\\dfrac13\\times3{,}14\\times100\\approx104{,}67$ m$^{2}$',
      'Menjumlahkan dua jari-jari dan busur menjadi $40{,}93$ m',
    ],
  },
  {
    id: 'lk-14',
    topicId: 'lingkaran',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Dua lingkaran berjari-jari $15$ cm dan $8$ cm memiliki panjang garis singgung persekutuan luar $24$ cm. Tentukan jarak antara kedua pusat lingkaran.',
    answer: '25',
    acceptedAnswers: ['25', '25 cm', '25\\text{ cm}'],
    explanation:
      'Gunakan hubungan $\\ell_{\\text{luar}}^{2}=d^{2}-(R-r)^{2}$. Substitusi memberi $24^{2}=d^{2}-(15-8)^{2}$, yaitu $576=d^{2}-49$, sehingga $d^{2}=625$ dan $d=25$ cm.',
    hints: ['Gunakan $(R-r)$ untuk garis singgung persekutuan luar.', 'Selesaikan $24^{2}=d^{2}-7^{2}$.'],
    competencies: ['garis singgung persekutuan', 'teorema Pythagoras'],
  },
  {
    id: 'lk-15',
    topicId: 'lingkaran',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Pada gambar, $AB$ adalah diameter lingkaran berpusat $O$ dan besar $\\angle BAC = 30^\\circ$. Besar $\\angle ABC$ adalah …',
    figure: {
      svg: '<svg viewBox="0 0 320 220" aria-hidden="true" role="presentation"><circle cx="160" cy="110" r="70" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="90" y1="110" x2="230" y2="110" stroke="currentColor" stroke-width="1.6"/><line x1="90" y1="110" x2="195" y2="49" stroke="currentColor" stroke-width="1.6"/><line x1="230" y1="110" x2="195" y2="49" stroke="currentColor" stroke-width="1.6"/><circle cx="160" cy="110" r="2.5" fill="currentColor"/><circle cx="90" cy="110" r="2.5" fill="currentColor"/><circle cx="230" cy="110" r="2.5" fill="currentColor"/><circle cx="195" cy="49" r="2.5" fill="currentColor"/><text x="163" y="124" font-size="11" fill="currentColor">O</text><text x="78" y="124" font-size="11" fill="currentColor">A</text><text x="233" y="124" font-size="11" fill="currentColor">B</text><text x="198" y="43" font-size="11" fill="currentColor">C</text><text x="100" y="108" font-size="10" fill="currentColor">30°</text></svg>',
      alt: 'Lingkaran berpusat O dengan diameter AB mendatar dan titik C pada lingkaran. Ruas AC dan BC membentuk segitiga siku-siku di C, dengan sudut BAC sebesar 30 derajat.',
      caption: 'Segitiga $ABC$ dengan $AB$ sebagai diameter dan $\\angle BAC=30^\\circ$.',
    },
    options: [
      { key: 'A', text: '$60^\\circ$' },
      { key: 'B', text: '$30^\\circ$' },
      { key: 'C', text: '$90^\\circ$' },
      { key: 'D', text: '$120^\\circ$' },
    ],
    answer: 'A',
    explanation:
      'Karena $AB$ adalah diameter, sudut keliling $\\angle ACB$ yang menghadapnya besarnya $90^\\circ$. Jumlah sudut segitiga $ABC$ adalah $180^\\circ$, sehingga $\\angle ABC = 180^\\circ - 90^\\circ - 30^\\circ = 60^\\circ$. Opsi B menyamakan $\\angle ABC$ dengan $\\angle BAC$; opsi C menempatkan sudut siku-siku di $B$, padahal siku-siku di $C$; opsi D menjumlahkan $90^\\circ + 30^\\circ$ alih-alih menguranginya dari $180^\\circ$.',
    hints: [
      'Sudut keliling yang menghadap diameter besarnya $90^\\circ$.',
      'Gunakan jumlah sudut dalam segitiga sama dengan $180^\\circ$.',
    ],
    competencies: ['sudut keliling', 'jumlah sudut segitiga'],
  },
];

import type { Question } from '@/types/content';

export const trigonometriLanjutQuestions: Question[] = [
  {
    id: 'tl-01',
    topicId: 'trigonometri-lanjut',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Amplitudo dari fungsi $y=4\\sin(3x)$ adalah …',
    options: [
      { key: 'A', text: '$2$' },
      { key: 'B', text: '$3$' },
      { key: 'C', text: '$4$' },
      { key: 'D', text: '$6$' },
    ],
    answer: 'C',
    explanation:
      'Pada $y=A\\sin(Bx)$, amplitudo adalah $|A|$. Karena $A=4$, amplitudonya $4$.',
    hints: ['Amplitudo adalah koefisien di depan fungsi sinus.'],
    competencies: ['amplitudo fungsi trigonometri'],
  },
  {
    id: 'tl-02',
    topicId: 'trigonometri-lanjut',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Periode dari fungsi $y=\\sin(2x)$ adalah …',
    options: [
      { key: 'A', text: '$90^\\circ$' },
      { key: 'B', text: '$180^\\circ$' },
      { key: 'C', text: '$360^\\circ$' },
      { key: 'D', text: '$720^\\circ$' },
    ],
    answer: 'B',
    explanation:
      'Periode fungsi $y=\\sin(Bx)$ adalah $\\dfrac{360^\\circ}{|B|}$. Untuk $B=2$ diperoleh $\\dfrac{360^\\circ}{2}=180^\\circ$.',
    hints: ['Bagi $360^\\circ$ dengan koefisien $x$ di dalam sinus.'],
    competencies: ['periode fungsi trigonometri'],
  },
  {
    id: 'tl-03',
    topicId: 'trigonometri-lanjut',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Diketahui $\\sin\\alpha=\\dfrac{3}{5}$ dan $\\alpha$ lancip. Tentukan $\\sin 2\\alpha$.',
    answer: '24/25',
    acceptedAnswers: ['24/25', '0,96'],
    explanation:
      'Karena $\\alpha$ lancip, $\\cos\\alpha=\\dfrac{4}{5}$. Maka $\\sin 2\\alpha=2\\sin\\alpha\\cos\\alpha=2\\cdot\\dfrac{3}{5}\\cdot\\dfrac{4}{5}=\\dfrac{24}{25}$.',
    hints: ['Cari $\\cos\\alpha$ dengan identitas Pythagoras, lalu pakai $\\sin 2\\alpha=2\\sin\\alpha\\cos\\alpha$.'],
    competencies: ['identitas sudut rangkap'],
  },
  {
    id: 'tl-04',
    topicId: 'trigonometri-lanjut',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Diketahui $\\cos\\alpha=\\dfrac{4}{5}$ dan $\\alpha$ lancip. Tentukan $\\cos 2\\alpha$.',
    answer: '7/25',
    acceptedAnswers: ['7/25', '0,28'],
    explanation:
      'Gunakan $\\cos 2\\alpha=2\\cos^{2}\\alpha-1 = 2\\left(\\dfrac{4}{5}\\right)^{2}-1 = 2\\cdot\\dfrac{16}{25}-1=\\dfrac{32}{25}-1=\\dfrac{7}{25}$.',
    hints: ['Pilih bentuk $\\cos 2\\alpha=2\\cos^{2}\\alpha-1$ karena $\\cos\\alpha$ diketahui.'],
    competencies: ['identitas sudut rangkap'],
  },
  {
    id: 'tl-05',
    topicId: 'trigonometri-lanjut',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Nilai dari $\\cos 75^\\circ$ adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{\\sqrt{6}+\\sqrt{2}}{4}$' },
      { key: 'B', text: '$\\dfrac{\\sqrt{6}-\\sqrt{2}}{4}$' },
      { key: 'C', text: '$\\dfrac{\\sqrt{2}}{2}$' },
      { key: 'D', text: '$\\dfrac{\\sqrt{3}}{2}$' },
    ],
    answer: 'B',
    explanation:
      '$\\cos 75^\\circ=\\cos(45^\\circ+30^\\circ)=\\cos 45^\\circ\\cos 30^\\circ-\\sin 45^\\circ\\sin 30^\\circ=\\dfrac{\\sqrt{2}}{2}\\cdot\\dfrac{\\sqrt{3}}{2}-\\dfrac{\\sqrt{2}}{2}\\cdot\\dfrac{1}{2}=\\dfrac{\\sqrt{6}-\\sqrt{2}}{4}$.',
    hints: ['Tulis $75^\\circ=45^\\circ+30^\\circ$ dan perhatikan tanda kurang pada kosinus.'],
    competencies: ['identitas jumlah sudut'],
  },
  {
    id: 'tl-06',
    topicId: 'trigonometri-lanjut',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Pada segitiga $ABC$ diketahui $a=8$, $A=30^\\circ$, dan $B=45^\\circ$. Panjang sisi $b$ adalah …',
    options: [
      { key: 'A', text: '$4\\sqrt{2}$' },
      { key: 'B', text: '$8\\sqrt{2}$' },
      { key: 'C', text: '$8\\sqrt{3}$' },
      { key: 'D', text: '$16$' },
    ],
    answer: 'B',
    explanation:
      'Aturan sinus: $\\dfrac{a}{\\sin A}=\\dfrac{8}{1/2}=16$, sehingga $b=16\\sin 45^\\circ=16\\cdot\\dfrac{\\sqrt{2}}{2}=8\\sqrt{2}$.',
    hints: ['Gunakan $\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}$.'],
    competencies: ['aturan sinus'],
  },
  {
    id: 'tl-07',
    topicId: 'trigonometri-lanjut',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Pada segitiga $ABC$ diketahui $b=3$, $c=5$, dan $A=120^\\circ$. Tentukan panjang sisi $a$.',
    answer: '7',
    explanation:
      '$a^{2}=b^{2}+c^{2}-2bc\\cos A=9+25-2\\cdot3\\cdot5\\cdot\\left(-\\dfrac{1}{2}\\right)=34+15=49$, sehingga $a=7$.',
    hints: ['Gunakan aturan kosinus dan ingat $\\cos 120^\\circ=-\\dfrac{1}{2}$.'],
    competencies: ['aturan kosinus'],
  },
  {
    id: 'tl-08',
    topicId: 'trigonometri-lanjut',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penerapan',
    prompt:
      'Pada segitiga $ABC$ diketahui $b=5$, $c=8$, dan $A=60^\\circ$. Tentukan luas segitiga tersebut.',
    answer:
      'Luas $=\\dfrac{1}{2}bc\\sin A=\\dfrac{1}{2}\\cdot5\\cdot8\\cdot\\sin 60^\\circ=20\\cdot\\dfrac{\\sqrt{3}}{2}=10\\sqrt{3}\\approx 17{,}32$ satuan luas.',
    explanation:
      'Kunci menekankan pemilihan rumus luas dengan dua sisi dan sudut apit, serta substitusi nilai $\\sin 60^\\circ$.',
    hints: ['Gunakan $L=\\dfrac{1}{2}bc\\sin A$.'],
    competencies: ['luas segitiga'],
  },
  {
    id: 'tl-09',
    topicId: 'trigonometri-lanjut',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Diketahui $\\tan\\alpha=\\dfrac{1}{2}$. Nilai $\\tan 2\\alpha$ adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{4}{3}$' },
      { key: 'B', text: '$\\dfrac{3}{4}$' },
      { key: 'C', text: '$\\dfrac{1}{2}$' },
      { key: 'D', text: '$1$' },
    ],
    answer: 'A',
    explanation:
      '$\\tan 2\\alpha=\\dfrac{2\\tan\\alpha}{1-\\tan^{2}\\alpha}=\\dfrac{2\\cdot\\frac{1}{2}}{1-\\frac{1}{4}}=\\dfrac{1}{\\frac{3}{4}}=\\dfrac{4}{3}$.',
    hints: ['Substitusikan $\\tan\\alpha=\\dfrac{1}{2}$ ke identitas sudut rangkap tangen.'],
    competencies: ['identitas sudut rangkap'],
  },
  {
    id: 'tl-10',
    topicId: 'trigonometri-lanjut',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Diketahui $f(x)=2\\sin\\big(3(x-30^\\circ)\\big)+1$. Tentukan amplitudo, periode, dan nilai maksimum fungsi tersebut.',
    answer:
      'Bandingkan dengan $f(x)=A\\sin(B(x-C))+D$: diperoleh $A=2$, $B=3$, $C=30^\\circ$, dan $D=1$. Amplitudo $|A|=2$. Periode $\\dfrac{360^\\circ}{|B|}=\\dfrac{360^\\circ}{3}=120^\\circ$. Nilai maksimum $D+|A|=1+2=3$.',
    explanation:
      'Kunci menekankan pengenalan parameter dari bentuk umum, perhitungan periode, dan penentuan nilai maksimum dari amplitudo serta pergeseran tegak.',
    hints: [
      'Amplitudo adalah $|A|$ dan periode adalah $\\dfrac{360^\\circ}{|B|}$.',
      'Nilai maksimum adalah $D+|A|$.',
    ],
    competencies: ['fungsi periodik', 'amplitudo dan periode'],
  },
  {
    id: 'tl-11',
    topicId: 'trigonometri-lanjut',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Pada segitiga $ABC$ diketahui $a=5$, $b=7$, dan $c=8$. Tentukan besar sudut $B$.',
    answer:
      'Sudut $B$ menghadap sisi $b=7$, sehingga $\\cos B=\\dfrac{a^{2}+c^{2}-b^{2}}{2ac}=\\dfrac{25+64-49}{2\\cdot5\\cdot8}=\\dfrac{40}{80}=\\dfrac{1}{2}$. Maka $B=60^\\circ$.',
    explanation:
      'Kunci menekankan penulisan aturan kosinus untuk sudut yang dicari, identifikasi sisi yang benar, lalu penentuan sudut dari nilai kosinus.',
    hints: ['Gunakan $b^{2}=a^{2}+c^{2}-2ac\\cos B$ lalu selesaikan untuk $\\cos B$.'],
    competencies: ['aturan kosinus', 'penalaran'],
  },
  {
    id: 'tl-12',
    topicId: 'trigonometri-lanjut',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Pada segitiga $ABC$ diketahui $a=6$, $b=8$, dan $c=10$. (a) Hitung $\\cos C$ lalu tentukan besar sudut $C$. (b) Jelaskan jenis segitiga berdasarkan hasil itu. (c) Tentukan luas segitiga $ABC$.',
    answer:
      '(a) $\\cos C=\\dfrac{a^{2}+b^{2}-c^{2}}{2ab}=\\dfrac{36+64-100}{2\\cdot6\\cdot8}=\\dfrac{0}{96}=0$, sehingga $C=90^\\circ$. (b) Karena salah satu sudutnya siku-siku, segitiga $ABC$ adalah segitiga siku-siku di $C$. (c) Luas $=\\dfrac{1}{2}ab\\sin C=\\dfrac{1}{2}(6)(8)(1)=24$ satuan luas.',
    explanation:
      'Kunci: menerapkan aturan kosinus, mengenali $\\cos C=0$ sebagai sudut siku-siku, lalu menghitung luas dengan dua sisi dan sudut apit.',
    hints: ['Gunakan aturan kosinus untuk sudut $C$ yang menghadap sisi $c$.', 'Jika $\\cos C=0$, maka $C=90^\\circ$.'],
    competencies: ['aturan kosinus', 'luas segitiga', 'evaluasi'],
  },
  {
    id: 'tl-13',
    topicId: 'trigonometri-lanjut',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah jalan menanjak membentuk sudut $12^\\circ$ terhadap horizontal. Panjang jalan dari kaki sampai puncak adalah $500$ m. (a) Susun model trigonometri yang menghubungkan tinggi puncak dengan panjang jalan. (b) Hitung tinggi puncak (gunakan $\\sin12^\\circ\\approx0{,}2079$). (c) Sebutkan satu asumsi model.',
    answer:
      '(a) Tinggi puncak $h$ adalah sisi depan sudut $12^\\circ$ dan panjang jalan adalah sisi miring, sehingga $\\sin12^\\circ=\\dfrac{h}{500}$ atau $h=500\\sin12^\\circ$. (b) $h=500\\times0{,}2079\\approx103{,}95$ m, jadi tinggi puncaknya sekitar $104$ m. (c) Asumsinya jalan berupa garis lurus dengan kemiringan tetap dan permukaan tanah rata.',
    explanation:
      'Kunci: mengidentifikasi sisi depan dan sisi miring untuk memakai sinus, menghitung nilai, dan menyebutkan asumsi.',
    hints: ['Tinggi adalah sisi depan; panjang jalan adalah sisi miring.', 'Gunakan $\\sin\\theta=\\dfrac{\\text{sisi depan}}{\\text{sisi miring}}$.'],
    competencies: ['pemodelan trigonometri', 'sudut elevasi'],
  },
  {
    id: 'tl-14',
    topicId: 'trigonometri-lanjut',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Dua kapal berangkat dari pelabuhan yang sama. Kapal P bergerak $20$ km ke arah timur, sedangkan kapal Q bergerak $15$ km pada arah $60^\\circ$ dari timur. Tentukan jarak antara kedua kapal.',
    answer:
      'Posisi Kapal P: $(20,0)$. Posisi Kapal Q: $(15\\cos60^\\circ,\\,15\\sin60^\\circ)=\\left(7{,}5,\\,15\\cdot\\dfrac{\\sqrt{3}}{2}\\right)\\approx(7{,}5,\\,12{,}99)$. Jarak $=\\sqrt{(20-7{,}5)^{2}+(0-12{,}99)^{2}}=\\sqrt{156{,}25+168{,}75}=\\sqrt{325}\\approx18{,}03$ km. Jadi jarak kedua kapal sekitar $18$ km.',
    explanation:
      'Kunci: menguraikan vektor perpindahan menjadi komponen, menentukan posisi tiap kapal, lalu menghitung jarak dengan rumus jarak.',
    hints: ['Uraikan perpindahan $15$ km menjadi komponen $x$ dan $y$.', 'Gunakan rumus jarak antara dua titik.'],
    competencies: ['vektor', 'aturan kosinus', 'kontekstual'],
  },
];

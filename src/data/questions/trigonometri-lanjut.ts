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
      'Pada $y=A\\sin(Bx)$, amplitudo adalah $|A|$. Karena $A=4$, amplitudonya $4$ (C). Opsi A ($2$) membagi $4$ dengan $2$; opsi B ($3$) membaca koefisien $x$ di dalam sinus; opsi D ($6$) mencampur amplitudo dengan koefisien sehingga keliru mengalikannya.',
    hints: [
      'Amplitudo adalah koefisien di depan fungsi sinus.',
      'Pada $y=A\\sin(Bx)$, amplitudo $=|A|$; koefisien $3$ di dalam sinus bukan amplitudo.',
    ],
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
      'Periode fungsi $y=\\sin(Bx)$ adalah $\\dfrac{360^\\circ}{|B|}$. Untuk $B=2$ diperoleh $\\dfrac{360^\\circ}{2}=180^\\circ$ (B). Opsi A ($90^\\circ$) memakai $B=4$; opsi C ($360^\\circ$) mengabaikan koefisien $B$; opsi D ($720^\\circ$) justru mengalikan $360^\\circ$ dengan $B$.',
    hints: [
      'Bagi $360^\\circ$ dengan koefisien $x$ di dalam sinus.',
      'Periode $=\\dfrac{360^\\circ}{|B|}$ dengan $B=2$.',
    ],
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
    acceptedAnswers: ['24/25', '0,96', '0.96', '0,960', '0.960'],
    explanation:
      'Karena $\\alpha$ lancip, $\\cos\\alpha=\\dfrac{4}{5}$. Maka $\\sin 2\\alpha=2\\sin\\alpha\\cos\\alpha=2\\cdot\\dfrac{3}{5}\\cdot\\dfrac{4}{5}=\\dfrac{24}{25}$.',
    hints: [
      'Cari $\\cos\\alpha$ dengan identitas Pythagoras, lalu pakai $\\sin 2\\alpha=2\\sin\\alpha\\cos\\alpha$.',
      'Karena $\\alpha$ lancip, segitiga $3$-$4$-$5$ memberi $\\cos\\alpha=\\dfrac{4}{5}$.',
    ],
    competencies: ['identitas sudut rangkap'],
  },
  {
    id: 'tl-04',
    topicId: 'trigonometri-lanjut',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Diketahui $\\tan\\alpha=\\dfrac{3}{4}$ dan $\\alpha$ lancip. Tentukan $\\cos 2\\alpha$.',
    answer: '7/25',
    acceptedAnswers: ['7/25', '0,28', '0.28', '0,280', '0.280'],
    explanation:
      'Gunakan identitas sudut rangkap dalam bentuk tangen: $\\cos 2\\alpha=\\dfrac{1-\\tan^{2}\\alpha}{1+\\tan^{2}\\alpha}=\\dfrac{1-\\frac{9}{16}}{1+\\frac{9}{16}}=\\dfrac{7/16}{25/16}=\\dfrac{7}{25}$.',
    hints: [
      'Pilih bentuk $\\cos 2\\alpha=\\dfrac{1-\\tan^{2}\\alpha}{1+\\tan^{2}\\alpha}$ karena $\\tan\\alpha$ diketahui.',
      'Hitung $\\tan^{2}\\alpha=\\dfrac{9}{16}$ lebih dahulu sebelum menyederhanakan.',
    ],
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
      '$\\cos 75^\\circ=\\cos(45^\\circ+30^\\circ)=\\cos 45^\\circ\\cos 30^\\circ-\\sin 45^\\circ\\sin 30^\\circ=\\dfrac{\\sqrt{6}-\\sqrt{2}}{4}$ (B). Opsi A memakai tanda tambah sehingga menghasilkan $\\cos 15^\\circ$; opsi C memakai $\\cos 45^\\circ$ dan mengabaikan suku kedua; opsi D memakai $\\cos 30^\\circ$ saja.',
    hints: [
      'Tulis $75^\\circ=45^\\circ+30^\\circ$ dan perhatikan tanda kurang pada kosinus.',
      'Gunakan $\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B$.',
    ],
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
      'Aturan sinus: $\\dfrac{a}{\\sin A}=\\dfrac{8}{1/2}=16$, sehingga $b=16\\sin 45^\\circ=16\\cdot\\dfrac{\\sqrt{2}}{2}=8\\sqrt{2}$ (B). Opsi A membagi dua kali lagi; opsi C memakai $\\sin 60^\\circ$; opsi D berhenti pada nilai $16$ tanpa mengalikan dengan $\\sin 45^\\circ$.',
    hints: [
      'Gunakan $\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}$.',
      'Setelah memperoleh $\\dfrac{a}{\\sin A}=16$, kalikan dengan $\\sin 45^\\circ$.',
    ],
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
    hints: [
      'Gunakan aturan kosinus dan ingat $\\cos 120^\\circ=-\\dfrac{1}{2}$.',
      'Hitung $b^{2}+c^{2}$ lebih dahulu, lalu tambahkan suku $-2bc\\cos A$ yang bernilai positif.',
    ],
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
    hints: [
      'Gunakan $L=\\dfrac{1}{2}bc\\sin A$.',
      'Nilai $\\sin 60^\\circ=\\dfrac{\\sqrt{3}}{2}$.',
    ],
    competencies: ['luas segitiga'],
    rubric: [
      'Memilih rumus luas $L=\\dfrac{1}{2}bc\\sin A$',
      'Mensubstitusikan $b=5$, $c=8$, dan $A=60^\\circ$',
      'Memakai $\\sin60^\\circ=\\dfrac{\\sqrt{3}}{2}$',
      'Memperoleh luas $10\\sqrt{3}\\approx17{,}32$ satuan luas',
    ],
  },
  {
    id: 'tl-09',
    topicId: 'trigonometri-lanjut',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Diketahui $\\tan\\alpha=\\dfrac{1}{2}$. Nilai $\\tan 2\\alpha$ adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{4}{3}$' },
      { key: 'B', text: '$\\dfrac{3}{4}$' },
      { key: 'C', text: '$\\dfrac{1}{2}$' },
      { key: 'D', text: '$-\\dfrac{4}{3}$' },
    ],
    answer: 'A',
    explanation:
      '$\\tan 2\\alpha=\\dfrac{2\\tan\\alpha}{1-\\tan^{2}\\alpha}=\\dfrac{2\\cdot\\frac{1}{2}}{1-\\frac{1}{4}}=\\dfrac{1}{\\frac{3}{4}}=\\dfrac{4}{3}$ (A). Opsi B ($\\frac{3}{4}$) membalik hasil akhir; opsi C ($\\frac12$) menyalin nilai $\\tan\\alpha$ tanpa memakai sudut rangkap; opsi D ($-\\frac43$) salah tanda pada penyebut $1-\\tan^{2}\\alpha$.',
    hints: [
      'Substitusikan $\\tan\\alpha=\\dfrac{1}{2}$ ke identitas sudut rangkap tangen.',
      'Hitung $\\tan^{2}\\alpha=\\dfrac{1}{4}$ lebih dahulu, lalu sederhanakan $\\dfrac{1}{3/4}$.',
    ],
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
    rubric: [
      'Mengenali $A=2$, $B=3$, $C=30^\\circ$, dan $D=1$',
      'Menghitung periode $120^\\circ$',
      'Menentukan amplitudo $2$',
      'Menentukan nilai maksimum $3$',
    ],
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
    hints: [
      'Gunakan $b^{2}=a^{2}+c^{2}-2ac\\cos B$ lalu selesaikan untuk $\\cos B$.',
      'Setelah $\\cos B=\\dfrac{1}{2}$, tentukan besar sudut pada kuadran pertama.',
    ],
    competencies: ['aturan kosinus', 'penalaran'],
    rubric: [
      'Menuliskan aturan kosinus untuk sudut $B$ yang menghadap $b=7$',
      'Menghitung $\\cos B=\\dfrac{1}{2}$',
      'Menyimpulkan $B=60^\\circ$',
      'Mengidentifikasi sisi $b$ sebagai sisi di hadapan sudut $B$',
    ],
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
    rubric: [
      'Menghitung $\\cos C=0$ dengan aturan kosinus',
      'Menyimpulkan $C=90^\\circ$',
      'Mengenali segitiga siku-siku di $C$',
      'Menghitung luas segitiga $24$ satuan luas',
    ],
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
    rubric: [
      'Menyusun model $\\sin12^\\circ=\\dfrac{h}{500}$',
      'Menghitung tinggi puncak sekitar $104$ m',
      'Menyebut satu asumsi seperti jalan lurus atau kemiringan tetap',
      'Menyajikan hasil dengan satuan meter',
    ],
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
    rubric: [
      'Menguraikan perpindahan $15$ km menjadi komponen $x$ dan $y$',
      'Menentukan posisi kedua kapal',
      'Menghitung jarak dengan rumus jarak antara dua titik',
      'Memperoleh jarak sekitar $18{,}03$ km',
    ],
  },
  {
    id: 'tl-15',
    topicId: 'trigonometri-lanjut',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Kedalaman air di sebuah pelabuhan mengikuti pola sinusoidal. Saat surut pada $t=0$ kedalamannya $2$ m, sedangkan saat pasang pada $t=6$ jam kedalamannya $8$ m. Pola ini berulang setiap $12$ jam. (a) Susun model kedalaman $h(t)$ dalam bentuk kosinus. (b) Tentukan kedalaman air pada $t=4$ jam. (c) Tentukan waktu pertama setelah surut ketika kedalaman mencapai $6{,}5$ m.',
    answer:
      'Amplitudo $A=\\dfrac{8-2}{2}=3$ dan nilai tengah $D=\\dfrac{8+2}{2}=5$. Karena $t=0$ adalah nilai minimum, gunakan $h(t)=D-A\\cos(30^\\circ t)=5-3\\cos(30^\\circ t)$ dengan periode $12$ jam. (b) $h(4)=5-3\\cos120^\\circ=5-3\\left(-\\dfrac{1}{2}\\right)=6{,}5$ m. (c) Selesaikan $5-3\\cos(30^\\circ t)=6{,}5$, yaitu $\\cos(30^\\circ t)=-\\dfrac{1}{2}$. Maka $30^\\circ t=120^\\circ$ sehingga $t=4$ jam. Jadi kedalaman $6{,}5$ m pertama kali tercapai pada $t=4$ jam.',
    explanation:
      'Kunci: menentukan amplitudo dan nilai tengah dari data surut-pasang, memilih bentuk kosinus bertanda negatif agar $t=0$ menjadi minimum, lalu menyelesaikan persamaan trigonometri.',
    hints: [
      'Amplitudo adalah setengah selisih kedalaman pasang dan surut.',
      'Karena $t=0$ surut (minimum), pakai bentuk $-\\cos$.',
      'Selesaikan $\\cos(30^\\circ t)=-\\dfrac{1}{2}$.',
    ],
    competencies: ['pemodelan fungsi trigonometri', 'persamaan trigonometri', 'amplitudo dan periode'],
    rubric: [
      'Menentukan amplitudo $3$ dan nilai tengah $5$',
      'Memilih bentuk $h(t)=5-3\\cos(30^\\circ t)$',
      'Menghitung $h(4)=6{,}5$ m',
      'Menyelesaikan $\\cos(30^\\circ t)=-\\dfrac{1}{2}$ sehingga $t=4$ jam',
    ],
  },
  {
    id: 'tl-16',
    topicId: 'trigonometri-lanjut',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Diketahui $\\sin\\theta+\\cos\\theta=\\dfrac{1}{2}$. Nilai $\\sin\\theta\\cos\\theta$ adalah …',
    options: [
      { key: 'A', text: '$-\\dfrac{3}{8}$' },
      { key: 'B', text: '$\\dfrac{3}{8}$' },
      { key: 'C', text: '$-\\dfrac{3}{4}$' },
      { key: 'D', text: '$\\dfrac{5}{8}$' },
    ],
    answer: 'A',
    explanation:
      'Kuadratkan kedua ruas: $(\\sin\\theta+\\cos\\theta)^{2}=\\sin^{2}\\theta+2\\sin\\theta\\cos\\theta+\\cos^{2}\\theta=1+2\\sin\\theta\\cos\\theta=\\dfrac{1}{4}$. Maka $2\\sin\\theta\\cos\\theta=-\\dfrac{3}{4}$ dan $\\sin\\theta\\cos\\theta=-\\dfrac{3}{8}$ (A). Opsi B ($\\frac38$) menghilangkan tanda negatif; opsi C ($-\\frac34$) lupa membagi dengan $2$; opsi D ($\\frac58$) memakai $1-\\frac38$ alih-alih menghitung $\\frac14-1$.',
    hints: [
      'Kuadratkan kedua ruas persamaan.',
      'Gunakan identitas $\\sin^{2}\\theta+\\cos^{2}\\theta=1$.',
    ],
    competencies: ['identitas trigonometri', 'penalaran'],
  },
];

import type { Question } from '@/types/content';

export const pemodelanFungsiQuestions: Question[] = [
  {
    id: 'pmf-01',
    topicId: 'pemodelan-fungsi',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'pemodelan',
    prompt:
      'Biaya tetap sebuah jasa antar adalah Rp5.000 ditambah Rp2.000 per kilometer. Jika $x$ menyatakan jarak dalam km, model biaya $B(x)$ dalam rupiah adalah …',
    options: [
      { key: 'A', text: '$B(x)=5000x+2000$' },
      { key: 'B', text: '$B(x)=2000x+5000$' },
      { key: 'C', text: '$B(x)=7000x$' },
      { key: 'D', text: '$B(x)=2000x-5000$' },
    ],
    answer: 'B',
    explanation:
      'Biaya per km menjadi koefisien $x$, sedangkan biaya tetap menjadi konstanta. Jadi $B(x)=2000x+5000$.',
    hints: ['Biaya tetap adalah nilai saat $x=0$, bukan pengali $x$.'],
    competencies: ['pemodelan linear', 'interpretasi parameter'],
  },
  {
    id: 'pmf-02',
    topicId: 'pemodelan-fungsi',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Perhatikan data $x=0,1,2,3$ dengan $y=4,7,10,13$. Jenis fungsi yang paling tepat untuk memodelkan data ini adalah …',
    options: [
      { key: 'A', text: 'Linear' },
      { key: 'B', text: 'Kuadrat' },
      { key: 'C', text: 'Eksponensial' },
      { key: 'D', text: 'Konstan' },
    ],
    answer: 'A',
    explanation:
      'Selisih nilai $y$ selalu $3$, yaitu $7-4=10-7=13-10=3$. Beda tetap menandakan pola linear, dengan model $y=3x+4$.',
    hints: ['Hitung selisih antar nilai $y$ yang berurutan.'],
    competencies: ['memilih jenis fungsi', 'pola data'],
  },
  {
    id: 'pmf-03',
    topicId: 'pemodelan-fungsi',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Diberikan model linear $y=3x+2$. Tentukan nilai $y$ saat $x=4$.',
    answer: '14',
    acceptedAnswers: ['14'],
    explanation: 'Substitusi $x=4$: $y=3\\cdot4+2=12+2=14$.',
    hints: ['Ganti setiap $x$ pada rumus dengan bilangan $4$.'],
    competencies: ['substitusi model linear'],
  },
  {
    id: 'pmf-04',
    topicId: 'pemodelan-fungsi',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'konsep',
    prompt:
      'Fungsi kuadrat $f(x)=(x-3)^2+4$ memiliki titik puncak $(3,4)$. Tentukan nilai minimum fungsi tersebut.',
    answer: '4',
    acceptedAnswers: ['4'],
    explanation:
      'Karena $(x-3)^2\\geq0$, nilai terkecil $f(x)$ tercapai saat $x=3$, yaitu $f(3)=0+4=4$. Nilai minimumnya $4$.',
    hints: ['Suku $(x-3)^2$ selalu tidak negatif.'],
    competencies: ['bentuk puncak', 'nilai minimum'],
  },
  {
    id: 'pmf-05',
    topicId: 'pemodelan-fungsi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Ongkos perjalanan pada jarak $2$ km adalah Rp16.000 dan pada jarak $5$ km adalah Rp28.000. Dengan model linear, ongkos untuk jarak $9$ km adalah …',
    options: [
      { key: 'A', text: 'Rp36.000' },
      { key: 'B', text: 'Rp40.000' },
      { key: 'C', text: 'Rp44.000' },
      { key: 'D', text: 'Rp48.000' },
    ],
    answer: 'C',
    explanation:
      'Laju per km: $m=\\dfrac{28000-16000}{5-2}=\\dfrac{12000}{3}=4000$. Biaya tetap: $c=16000-4000\\cdot2=8000$. Model $C(s)=4000s+8000$. Untuk $s=9$: $C(9)=4000\\cdot9+8000=36000+8000=44000$, yaitu Rp44.000.',
    hints: ['Tentukan laju per km dari dua titik, lalu biaya tetapnya.'],
    competencies: ['pemodelan linear dari dua titik'],
  },
  {
    id: 'pmf-06',
    topicId: 'pemodelan-fungsi',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'pemodelan',
    prompt:
      'Populasi mengikuti model $N(t)=N_0\\cdot b^{t}$ dengan $N(0)=400$ dan $N(3)=3200$. Tentukan nilai $b$.',
    answer: '2',
    acceptedAnswers: ['2'],
    explanation:
      'Dari $N(0)=400$ diperoleh $N_0=400$. Maka $400\\,b^{3}=3200 \\Rightarrow b^{3}=8 \\Rightarrow b=2$.',
    hints: ['Gunakan $N_0=N(0)$ terlebih dahulu, lalu selesaikan $b^{3}$.'],
    competencies: ['pemodelan eksponensial', 'mencari basis'],
  },
  {
    id: 'pmf-07',
    topicId: 'pemodelan-fungsi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Data $x=0,1,2,3$ dengan $y=3,6,12,24$ paling tepat dimodelkan oleh …',
    options: [
      { key: 'A', text: '$y=3x+3$' },
      { key: 'B', text: '$y=x^2+3$' },
      { key: 'C', text: '$y=3\\cdot2^{x}$' },
      { key: 'D', text: '$y=2\\cdot3^{x}$' },
    ],
    answer: 'C',
    explanation:
      'Rasio antar nilai berurutan tetap: $\\dfrac{6}{3}=\\dfrac{12}{6}=\\dfrac{24}{12}=2$. Nilai awal $y=3$ saat $x=0$, sehingga modelnya $y=3\\cdot2^{x}$. Periksa: $x=3$ memberi $3\\cdot8=24$.',
    hints: ['Periksa rasio, bukan selisih, untuk mengenali pola eksponensial.'],
    competencies: ['memilih jenis fungsi', 'pemodelan eksponensial'],
  },
  {
    id: 'pmf-08',
    topicId: 'pemodelan-fungsi',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Ketinggian sebuah bola dimodelkan $h(t)=a(t-p)^2+q$ dengan titik puncak $(2,10)$ dan pada $t=0$ bola berada pada ketinggian $2$ meter. Tentukan model lengkapnya dan tinggi maksimum bola.',
    answer:
      'Dari puncak $(p,q)=(2,10)$ diperoleh $p=2$ dan $q=10$, sehingga $h(t)=a(t-2)^2+10$. Substitusi titik $(0,2)$: $a(0-2)^2+10=2 \\Rightarrow 4a=-8 \\Rightarrow a=-2$. Jadi $h(t)=-2(t-2)^2+10$. Tinggi maksimum adalah $10$ m, tercapai pada $t=2$ karena $a<0$. Periksa: $h(0)=-2(4)+10=2$.',
    explanation:
      'Kunci menekankan pembacaan puncak dari bentuk $a(t-p)^2+q$ dan penentuan $a$ melalui substitusi satu titik lain.',
    hints: ['Puncak $(p,q)$ langsung terbaca dari bentuk fungsi.', 'Gunakan titik $(0,2)$ untuk mencari $a$.'],
    competencies: ['pemodelan kuadrat', 'bentuk puncak', 'interpretasi maksimum'],
  },
  {
    id: 'pmf-09',
    topicId: 'pemodelan-fungsi',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Populasi mengikuti model eksponensial $N(t)=N_0\\cdot b^{t}$ dengan $N(1)=150$ dan $N(3)=1350$. Nilai $N(0)$ adalah …',
    options: [
      { key: 'A', text: '$50$' },
      { key: 'B', text: '$100$' },
      { key: 'C', text: '$75$' },
      { key: 'D', text: '$150$' },
    ],
    answer: 'A',
    explanation:
      'Bagi kedua nilai: $\\dfrac{N(3)}{N(1)}=b^{2}=\\dfrac{1350}{150}=9$, sehingga $b=3$. Lalu $N(1)=N_0\\cdot3=150 \\Rightarrow N_0=50$. Jadi $N(0)=50$.',
    hints: ['Selisih waktu $2$ langkah, jadi $b$ diperoleh dari akar kuadrat rasio.'],
    competencies: ['pemodelan eksponensial', 'mencari nilai awal'],
  },
  {
    id: 'pmf-10',
    topicId: 'pemodelan-fungsi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Laba harian sebuah usaha (juta rupiah) dimodelkan $P(x)=-3x^2+36x-60$ dengan $x$ banyak produksi (ratus unit). Tentukan laba maksimum dan rentang $x$ agar usaha tidak merugi.',
    answer:
      'Titik puncak di $x=-\\dfrac{b}{2a}=-\\dfrac{36}{2\\cdot(-3)}=6$, sehingga laba maksimum $P(6)=-3(36)+36(6)-60=-108+216-60=48$ juta rupiah. Tidak merugi saat $P(x)\\geq0$: $-3x^2+36x-60\\geq0$. Bagi dengan $-3$ dan balik tanda: $x^2-12x+20\\leq0$, yaitu $(x-2)(x-10)\\leq0$. Jadi $2\\leq x\\leq10$ (ratus unit).',
    explanation:
      'Kunci menekankan penentuan puncak parabola dan penyelesaian pertidaksamaan kuadrat untuk rentang tidak rugi.',
    hints: ['Laba maksimum ada di sumbu simetri $x=-\\dfrac{b}{2a}$.', 'Perhatikan tanda saat membagi pertidaksamaan dengan bilangan negatif.'],
    competencies: ['optimasi kuadrat', 'pertidaksamaan kuadrat', 'interpretasi kontekstual'],
  },
  {
    id: 'pmf-11',
    topicId: 'pemodelan-fungsi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Sebuah modal investasi Rp10.000.000 tumbuh $20\\%$ per tahun. Susun model nilainya, ramalkan nilainya setelah $3$ tahun, dan sebutkan satu asumsi yang mendasari model tersebut.',
    answer:
      'Karena tumbuh $20\\%$ per tahun, faktor pengalinya $b=1+0{,}20=1{,}2$, sehingga $M(t)=10.000.000\\cdot(1{,}2)^{t}$ rupiah dengan $t$ tahun. Setelah $3$ tahun: $M(3)=10.000.000\\cdot(1{,}2)^{3}=10.000.000\\cdot1{,}728=17.280.000$. Jadi nilainya sekitar Rp17.280.000. Asumsinya pertumbuhan berlangsung tetap $20\\%$ per tahun, tanpa penyetoran atau penarikan tambahan, dan model berlaku untuk jangka menengah.',
    explanation:
      'Kunci menekankan penerapan faktor pertumbuhan $1+ r$ pada model eksponensial, perhitungan nilai masa depan, serta penyadaran akan asumsi.',
    hints: ['Persen pertumbuhan $r$ memberi faktor $b=1+r$.', 'Tanyakan: apa yang dianggap konstan selama periode itu?'],
    competencies: ['pemodelan eksponensial', 'pertumbuhan persen', 'asumsi model'],
  },
  {
    id: 'pmf-12',
    topicId: 'pemodelan-fungsi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Jumlah penderita suatu wabah dicatat tiap minggu: minggu ke-$0$ ada $20$ orang, minggu ke-$1$ ada $30$, minggu ke-$2$ ada $45$, dan minggu ke-$3$ ada $67{,}5$ (dibulatkan). (a) Tentukan jenis model yang paling tepat (linear, kuadrat, atau eksponensial) dan jelaskan alasannya. (b) Tuliskan modelnya, lalu ramalkan jumlah penderita pada minggu ke-$4$. (c) Sebutkan satu keterbatasan model ini.',
    answer:
      '(a) Rasio antar minggu tetap: $\\dfrac{30}{20}=\\dfrac{45}{30}=\\dfrac{67{,}5}{45}=1{,}5$, sehingga model yang tepat adalah eksponensial. (b) Modelnya $N(t)=20(1{,}5)^{t}$. Maka $N(4)=20(1{,}5)^{4}=20(5{,}0625)=101{,}25$, diperkirakan sekitar $101$ orang. (c) Model ini mengasumsikan pertumbuhan terus berlipat tanpa batas, padahal pada kenyataannya jumlah penduduk, sumber daya, atau intervensi kesehatan akan memperlambat penyebaran sehingga pertumbuhan tidak mungkin berlangsung selamanya.',
    explanation:
      'Kunci: mengenali pola eksponensial dari rasio tetap, menyusun model dan prediksi, serta menyadari batas keberlakuan model.',
    hints: ['Periksa rasio, bukan selisih, antar nilai berurutan.', 'Pertimbangkan batas populasi atau sumber daya.'],
    competencies: ['pemodelan eksponensial', 'evaluasi', 'interpretasi'],
  },
];

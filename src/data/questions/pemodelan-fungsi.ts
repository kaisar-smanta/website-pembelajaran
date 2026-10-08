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
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Populasi suatu jenis ikan di sebuah danau dimodelkan $N(t)=N_0\\cdot b^{t}$ dengan $t$ dalam tahun. Diketahui $N(1)=150$ dan $N(3)=1350$. (a) Tentukan $b$ dan $N_0$. (b) Ramalkan populasi pada $t=5$. (c) Tentukan tahun pertama (bilangan bulat) ketika populasi melebihi $100.000$, dengan menghitung nilai tiap tahun.',
    answer:
      '(a) Bagi kedua nilai: $\\dfrac{N(3)}{N(1)}=b^{3-1}=b^{2}=\\dfrac{1350}{150}=9$, sehingga $b=3$ (basis positif). Lalu $N(1)=N_0\\cdot3=150$, jadi $N_0=50$. Modelnya $N(t)=50\\cdot3^{t}$. (b) $N(5)=50\\cdot3^{5}=50\\cdot243=12.150$. (c) Perlu $50\\cdot3^{t}>100.000$, yaitu $3^{t}>2000$. Uji: $3^{6}=729$; $3^{7}=2187>2000$. Jadi populasi melebihi $100.000$ pada $t=7$ tahun. Periksa $N(7)=50\\cdot2187=109.350>100.000$, sedangkan $N(6)=50\\cdot729=36.450$.',
    explanation:
      'Kunci: memakai rasio dua nilai untuk memperoleh basis, menentukan nilai awal dari satu titik, lalu menyelesaikan pertidaksamaan eksponen dengan menguji nilai tahun.',
    hints: [
      'Selisih $t$ dari $1$ ke $3$ adalah $2$, sehingga $\\dfrac{N(3)}{N(1)}=b^{2}$.',
      'Untuk bagian (c), cari pangkat $3$ terkecil yang melebihi $2000$.',
    ],
    competencies: ['pemodelan eksponensial', 'pertidaksamaan eksponen', 'pemodelan'],
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
    category: 'pemodelan',
    prompt:
      'Sebuah modal investasi Rp10.000.000 tumbuh $20\\%$ setiap tahun. (a) Susun model nilai investasi $M(t)$ setelah $t$ tahun. (b) Tentukan nilainya setelah $3$ tahun. (c) Tentukan tahun pertama (bilangan bulat) ketika nilai investasi melebihi Rp50.000.000, dengan menghitung tiap tahun. (d) Sebutkan satu asumsi yang mendasari model ini.',
    answer:
      '(a) Faktor pertumbuhan $b=1+0{,}20=1{,}2$, sehingga $M(t)=10.000.000(1{,}2)^{t}$ rupiah. (b) $M(3)=10.000.000(1{,}2)^{3}=10.000.000(1{,}728)=\\text{Rp}17.280.000$. (c) Perlu $10.000.000(1{,}2)^{t}>50.000.000$, yaitu $(1{,}2)^{t}>5$. Uji: $(1{,}2)^{8}\\approx4{,}2998$ (masih di bawah $5$) dan $(1{,}2)^{9}\\approx5{,}1598$ (di atas $5$). Jadi nilai investasi pertama kali melebihi Rp50.000.000 pada tahun ke-$9$. (d) Model mengasumsikan pertumbuhan tetap $20\\%$ per tahun tanpa penyetoran atau penarikan tambahan serta tanpa perubahan kondisi pasar; dalam jangka panjang asumsi ini bisa tidak realistis.',
    explanation:
      'Kunci: menyusun model $M(t)=M_0(1+r)^t$, menghitung nilai pada waktu tertentu, menyelesaikan pertidaksamaan eksponen dengan uji nilai, dan menyadari keterbatasan asumsi.',
    hints: [
      'Faktor pertumbuhan adalah $1+r$ dengan $r=0{,}20$.',
      'Untuk bagian (c), cari pangkat bulat terkecil dari $1{,}2$ yang melebihi $5$.',
    ],
    competencies: ['pemodelan eksponen', 'pertidaksamaan eksponen', 'asumsi model'],
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
  {
    id: 'pmf-13',
    topicId: 'pemodelan-fungsi',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt:
      'Sebuah populasi mengikuti model $N(t)=100\\cdot 3^{t}$. Banyak populasi saat $t=2$ adalah …',
    options: [
      { key: 'A', text: '$300$' },
      { key: 'B', text: '$600$' },
      { key: 'C', text: '$900$' },
      { key: 'D', text: '$1200$' },
    ],
    answer: 'C',
    explanation: 'Substitusi $t=2$: $N(2)=100\\cdot 3^{2}=100\\cdot 9=900$.',
    hints: ['Hitung $3^{2}$ lebih dahulu, lalu kalikan dengan $100$.'],
    competencies: ['substitusi model eksponensial'],
  },
  {
    id: 'pmf-14',
    topicId: 'pemodelan-fungsi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Massa sebuah zat radioaktif berkurang menjadi setengah setiap $5$ tahun. Mula-mula tersedia $800$ gram. (a) Susun model massa $M(t)$ (gram) sebagai fungsi waktu $t$ (tahun). (b) Tentukan massa zat setelah $15$ tahun. (c) Tentukan setelah berapa tahun massa zat tersisa $200$ gram.',
    answer:
      '(a) Karena berkurang setengah tiap $5$ tahun, pangkatnya adalah $t/5$, sehingga $M(t)=800\\left(\\dfrac{1}{2}\\right)^{t/5}$. (b) $M(15)=800\\left(\\dfrac{1}{2}\\right)^{3}=800\\cdot\\dfrac{1}{8}=100$ gram. (c) Selesaikan $800\\left(\\dfrac{1}{2}\\right)^{t/5}=200$, maka $\\left(\\dfrac{1}{2}\\right)^{t/5}=\\dfrac{1}{4}=\\left(\\dfrac{1}{2}\\right)^{2}$, sehingga $\\dfrac{t}{5}=2$ dan $t=10$ tahun.',
    explanation:
      'Kunci: menerjemahkan konsep waktu paruh menjadi eksponen $t/5$, menghitung nilai model, dan menyelesaikan persamaan eksponensial dengan menyamakan pangkat.',
    hints: [
      'Waktu paruh $5$ tahun berarti pangkatnya $t/5$, bukan $t$.',
      'Nyatakan $\\dfrac{1}{4}$ sebagai pangkat dari $\\dfrac{1}{2}$.',
    ],
    competencies: ['pemodelan eksponensial', 'waktu paruh', 'persamaan eksponensial'],
  },
];

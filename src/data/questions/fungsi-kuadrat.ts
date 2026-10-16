import type { Question } from '@/types/content';

export const fungsiKuadratQuestions: Question[] = [
  {
    id: 'fk-01',
    topicId: 'fungsi-kuadrat',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Akar-akar dari $f(x)=x^{2}-5x+6$ adalah …',
    options: [
      { key: 'A', text: '$x=2$ dan $x=3$' },
      { key: 'B', text: '$x=-2$ dan $x=-3$' },
      { key: 'C', text: '$x=1$ dan $x=6$' },
      { key: 'D', text: '$x=-1$ dan $x=-6$' },
    ],
    answer: 'A',
    explanation:
      '$x^{2}-5x+6=(x-2)(x-3)$, sehingga $f(x)=0$ ketika $x=2$ atau $x=3$. Opsi B ($x=-2$ dan $x=-3$) memfaktorkan menjadi $(x+2)(x+3)$ sehingga tanda akarnya terbalik. Opsi C ($x=1$ dan $x=6$) memakai dua bilangan yang hasil kalinya $6$ tetapi jumlahnya $7$, bukan $-5$. Opsi D ($x=-1$ dan $x=-6$) memakai hasil kali $6$ dengan jumlah $-7$, bukan $-5$.',
    hints: [
      'Cari dua bilangan yang jumlahnya $-5$ dan hasil kalinya $6$.',
      'Kedua bilangan itu adalah akar, sehingga bentuk faktornya $(x-2)(x-3)$.',
    ],
    competencies: ['akar fungsi kuadrat'],
  },
  {
    id: 'fk-02',
    topicId: 'fungsi-kuadrat',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Sumbu simetri grafik $f(x)=x^{2}-8x+7$ adalah …',
    options: [
      { key: 'A', text: '$x=4$' },
      { key: 'B', text: '$x=-4$' },
      { key: 'C', text: '$x=8$' },
      { key: 'D', text: '$x=2$' },
    ],
    answer: 'A',
    explanation:
      'Sumbu simetri $x=-\\dfrac{b}{2a}=-\\dfrac{-8}{2\\cdot1}=4$. Opsi B ($-4$) lupa membalik tanda setelah menghitung $-\\dfrac{-8}{2}$. Opsi C ($8$) memakai $|b|$ tanpa membaginya dengan $2a$. Opsi D ($2$) membagi $8$ dengan $4$, padahal $2a=2$.',
    hints: [
      'Gunakan $x=-\\dfrac{b}{2a}$ dan jangan lupa tanda negatifnya.',
      'Substitusikan $a=1$ dan $b=-8$ secara hati-hati ke dalam $-\\dfrac{b}{2a}$.',
    ],
    competencies: ['sumbu simetri'],
  },
  {
    id: 'fk-03',
    topicId: 'fungsi-kuadrat',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Diskriminan $f(x)=2x^{2}-3x+5$ beserta banyak akar realnya adalah …',
    options: [
      { key: 'A', text: '$D=-31$ dan tidak ada akar real' },
      { key: 'B', text: '$D=31$ dan dua akar real berbeda' },
      { key: 'C', text: '$D=-31$ dan dua akar real berbeda' },
      { key: 'D', text: '$D=49$ dan dua akar real berbeda' },
    ],
    answer: 'A',
    explanation:
      '$D=b^{2}-4ac=(-3)^{2}-4\\cdot2\\cdot5=9-40=-31$. Karena $D<0$, tidak ada akar real. Opsi B ($D=31$) mengabaikan bahwa $9-40$ bernilai negatif. Opsi C benar nilai $D=-31$ tetapi keliru mengaitkan $D<0$ dengan dua akar real. Opsi D ($D=49$) menghitung $9+40$ karena salah tanda, seolah memakai $+4ac$.',
    hints: [
      'Hitung $D=b^{2}-4ac$ dengan teliti, termasuk tanda pada $b$.',
      'Ingat bahwa suku $4ac$ dikurangkan sehingga $D$ dapat bernilai negatif.',
    ],
    competencies: ['diskriminan'],
  },
  {
    id: 'fk-04',
    topicId: 'fungsi-kuadrat',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Tentukan titik puncak grafik $f(x)=x^{2}+2x-3$.',
    answer: '(-1,-4)',
    acceptedAnswers: ['(-1,-4)', '-1,-4'],
    explanation: 'Sumbu simetri $x=-\\dfrac{2}{2\\cdot1}=-1$. Nilai puncak $f(-1)=1-2-3=-4$. Jadi titik puncaknya $(-1,-4)$.',
    hints: [
      'Hitung absis puncak $x=-\\dfrac{b}{2a}$ lebih dahulu.',
      'Setelah absis diperoleh, substitusikan ke $f(x)$ untuk mendapatkan ordinatnya.',
    ],
    competencies: ['titik puncak'],
  },
  {
    id: 'fk-05',
    topicId: 'fungsi-kuadrat',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Tentukan fungsi kuadrat yang grafiknya memotong sumbu-$x$ di $x=2$ dan $x=3$ serta melalui titik $(0,6)$.',
    answer: 'x^2-5x+6',
    acceptedAnswers: ['x^2-5x+6', 'x^{2}-5x+6'],
    explanation:
      'Bentuk faktornya $f(x)=a(x-2)(x-3)$. Substitusi $(0,6)$: $6=a(0-2)(0-3)=6a$, jadi $a=1$. Maka $f(x)=(x-2)(x-3)=x^{2}-5x+6$.',
    hints: [
      'Gunakan bentuk $f(x)=a(x-x_1)(x-x_2)$ dengan akar yang diketahui.',
      'Substitusikan titik $(0,6)$ untuk menentukan nilai $a$.',
    ],
    competencies: ['menyusun fungsi kuadrat'],
  },
  {
    id: 'fk-06',
    topicId: 'fungsi-kuadrat',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Laba suatu usaha (dalam ribu rupiah) mengikuti $P(x)=-x^{2}+40x-300$ dengan $x$ banyak barang terjual. Tentukan laba maksimum dalam rupiah.',
    answer: '100000',
    acceptedAnswers: ['100000', '100.000', '100.000,00', '100000,00', 'Rp100.000', 'Rp100.000,00'],
    explanation:
      'Sumbu simetri $x=-\\dfrac{40}{2\\cdot(-1)}=20$. Laba maksimum $P(20)=-400+800-300=100$ (dalam ribu rupiah), yaitu Rp100.000.',
    hints: [
      'Karena $a<0$, laba maksimum berada di titik puncak.',
      'Hitung absis puncak $x=-\\dfrac{b}{2a}$ terlebih dahulu.',
    ],
    competencies: ['optimasi fungsi kuadrat'],
  },
  {
    id: 'fk-07',
    topicId: 'fungsi-kuadrat',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Tentukan nilai minimum dari $f(x)=x^{2}-6x+10$.',
    answer: '1',
    acceptedAnswers: ['1'],
    explanation: 'Sumbu simetri $x=-\\dfrac{-6}{2}=3$. Nilai minimum $f(3)=9-18+10=1$.',
    hints: [
      'Karena $a>0$, titik puncaknya memberi nilai minimum.',
      'Absis puncak $x=-\\dfrac{-6}{2}=3$; hitung nilai $f(3)$.',
    ],
    competencies: ['nilai minimum fungsi kuadrat'],
  },
  {
    id: 'fk-08',
    topicId: 'fungsi-kuadrat',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Seutas kawat panjangnya $40$ m akan dibuat pagar persegi panjang. Tentukan ukuran panjang dan lebar agar luasnya maksimum, serta luas maksimum tersebut. Jelaskan pemodelannya.',
    answer:
      'Misal panjang $x$, maka lebarnya $20-x$ karena keliling $2(x+\\text{lebar})=40$. Luas $L(x)=x(20-x)=20x-x^{2}$, yaitu fungsi kuadrat dengan $a=-1<0$ sehingga titik puncaknya maksimum. Absis puncak $x=-\\dfrac{20}{2\\cdot(-1)}=10$, maka lebar $=20-10=10$ dan $L(10)=10\\cdot10=100$. Jadi ukurannya $10 \\times 10$ m dengan luas maksimum $100$ m$^2$.',
    explanation: 'Kunci jawaban: menyusun fungsi luas, lalu mencari titik puncaknya.',
    hints: ['Nyatakan lebar dalam $x$ menggunakan keliling.', 'Luas maksimum terjadi di titik puncak parabola.'],
    competencies: ['pemodelan optimasi'],
    rubric: [
      'Menyatakan lebar sebagai $20-x$ dari keliling $40$',
      'Menyusun fungsi luas $L(x)=x(20-x)$',
      'Menentukan absis puncak $x=10$',
      'Menyimpulkan ukuran $10\\times10$ m dan luas $100$ m$^2$',
    ],
  },
  {
    id: 'fk-09',
    topicId: 'fungsi-kuadrat',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Buktikan dengan melengkapi kuadrat sempurna bahwa titik puncak $f(x)=ax^{2}+bx+c$ terletak pada $x=-\\dfrac{b}{2a}$.',
    answer:
      'Tulis $f(x)=a\\left(x^{2}+\\dfrac{b}{a}x\\right)+c=a\\left(x+\\dfrac{b}{2a}\\right)^{2}-\\dfrac{b^{2}}{4a}+c$. Karena $\\left(x+\\dfrac{b}{2a}\\right)^{2}\\geq0$, untuk $a>0$ nilai terkecil tercapai saat $x+\\dfrac{b}{2a}=0$, yaitu $x=-\\dfrac{b}{2a}$ (untuk $a<0$ ini nilai terbesar). Jadi titik puncaknya berabsis $-\\dfrac{b}{2a}$. Terbukti.',
    explanation: 'Pembuktian memanfaatkan sifat kuadrat setiap bilangan real selalu tak negatif.',
    hints: ['Faktorkan $a$ dari dua suku pertama.', 'Ingat bahwa $(x+p)^{2}\\geq0$ untuk setiap $x$.'],
    competencies: ['pembuktian', 'melengkapi kuadrat'],
    rubric: [
      'Memfaktorkan $a$ dari suku $x^2$ dan $x$',
      'Menulis bentuk kuadrat sempurna $a\\left(x+\\dfrac{b}{2a}\\right)^2-\\dfrac{b^2}{4a}+c$',
      'Menggunakan sifat $\\left(x+\\dfrac{b}{2a}\\right)^2\\ge0$',
      'Menyimpulkan absis puncak $x=-\\dfrac{b}{2a}$',
    ],
  },
  {
    id: 'fk-10',
    topicId: 'fungsi-kuadrat',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Jika $a>0$ dan diskriminan $D<0$, jelaskan mengapa $f(x)=ax^{2}+bx+c$ selalu bernilai positif untuk setiap bilangan real $x$.',
    answer:
      'Dengan melengkapi kuadrat, $f(x)=a\\left(x+\\dfrac{b}{2a}\\right)^{2}-\\dfrac{D}{4a}$. Karena $a>0$, suku $a\\left(x+\\dfrac{b}{2a}\\right)^{2}\\geq0$. Karena $D<0$ dan $a>0$, maka $-\\dfrac{D}{4a}>0$. Jumlah suku tak negatif dan suku positif selalu positif, sehingga $f(x)>0$ untuk semua $x$.',
    explanation: 'Kunci jawaban menghubungkan bentuk puncak dengan tanda $a$ dan $D$.',
    hints: [
      'Gunakan bentuk puncak $f(x)=a\\left(x+\\dfrac{b}{2a}\\right)^{2}-\\dfrac{D}{4a}$.',
      'Karena $D<0$, suku $-\\dfrac{D}{4a}$ bernilai positif.',
    ],
    competencies: ['penalaran diskriminan'],
    rubric: [
      'Menggunakan bentuk puncak yang memuat $-\\dfrac{D}{4a}$',
      'Menyatakan suku kuadrat selalu $\\ge0$ karena $a>0$',
      'Menunjukkan $-\\dfrac{D}{4a}>0$ ketika $D<0$',
      'Menyimpulkan $f(x)>0$ untuk semua bilangan real $x$',
    ],
  },
  {
    id: 'fk-11',
    topicId: 'fungsi-kuadrat',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Diketahui $f(x)=x^{2}-4x+3$. (a) Tentukan titik potong grafik dengan sumbu-$x$ dan titik puncaknya. (b) Tentukan selang nilai $x$ yang membuat $f(x)<0$. (c) Jelaskan hubungan tanda diskriminan dengan banyaknya titik potong sumbu-$x$.',
    answer:
      '(a) $f(x)=(x-1)(x-3)$ sehingga memotong sumbu-$x$ di $x=1$ dan $x=3$. Titik puncak pada $x=-\\dfrac{-4}{2}=2$ dengan $f(2)=4-8+3=-1$, yaitu $(2,-1)$. (b) Karena parabola membuka ke atas dan akarnya $1$ dan $3$, nilai $f(x)<0$ pada selang $1<x<3$. (c) Diskriminan $D=b^{2}-4ac=16-12=4>0$ menandakan dua titik potong sumbu-$x$. Secara umum $D>0$ berarti dua akar real, $D=0$ satu akar, dan $D<0$ tidak ada akar real.',
    explanation:
      'Kunci: memfaktorkan untuk akar, menemukan puncak, membaca selang tanda dari posisi akar, dan mengaitkan $D$ dengan banyak titik potong.',
    hints: ['Faktorkan $x^{2}-4x+3$.', 'Parabola membuka ke atas karena koefisien $x^{2}$ positif.'],
    competencies: ['akar fungsi kuadrat', 'diskriminan', 'evaluasi'],
    rubric: [
      'Menentukan akar $x=1$ dan $x=3$ serta puncak $(2,-1)$',
      'Menetapkan selang $1<x<3$ sebagai tempat $f(x)<0$',
      'Menghitung $D=4>0$ dan menafsirkannya dua titik potong',
      'Membandingkan $D>0$, $D=0$, dan $D<0$ dengan banyak titik potong',
    ],
  },
  {
    id: 'fk-12',
    topicId: 'fungsi-kuadrat',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Diketahui $f(x)=ax^{2}+bx+c$ dengan $a>0$ dan diskriminan $D=b^{2}-4ac=0$. Pernyataan yang benar tentang grafiknya adalah …',
    options: [
      { key: 'A', text: 'terbuka ke atas dan menyinggung sumbu-$x$ di tepat satu titik' },
      { key: 'B', text: 'terbuka ke atas dan memotong sumbu-$x$ di dua titik' },
      { key: 'C', text: 'terbuka ke bawah dan menyinggung sumbu-$x$ di tepat satu titik' },
      { key: 'D', text: 'terbuka ke atas dan tidak memotong sumbu-$x$' },
    ],
    answer: 'A',
    explanation:
      '$a>0$ membuat parabola terbuka ke atas. Diskriminan $D=0$ berarti $ax^{2}+bx+c=0$ memiliki satu akar kembar, sehingga grafik hanya menyinggung sumbu-$x$ di satu titik, yaitu titik puncaknya. Opsi B salah karena $D=0$ tidak menghasilkan dua titik potong. Opsi C salah karena $a>0$ membuka ke atas, bukan ke bawah. Opsi D salah karena $D=0$ justru menyentuh sumbu-$x$.',
    hints: [
      'Tanda $a$ menentukan arah bukaan parabola.',
      '$D=0$ berarti akar kembar, yaitu grafik menyinggung sumbu-$x$.',
    ],
    competencies: ['diskriminan', 'bentuk grafik fungsi kuadrat'],
  },
  {
    id: 'fk-13',
    topicId: 'fungsi-kuadrat',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penalaran',
    prompt:
      'Grafik $f(x)=x^{2}+bx+c$ menyinggung sumbu-$x$ tepat di $x=3$. Tentukan nilai $c$.',
    answer: '9',
    acceptedAnswers: ['9'],
    explanation:
      'Menyinggung sumbu-$x$ di $x=3$ berarti titik puncaknya $(3,0)$, sehingga sumbu simetri $x=-\\dfrac{b}{2}=3$ memberi $b=-6$. Substitusi $f(3)=9-18+c=0$ menghasilkan $c=9$. Periksa: $D=b^{2}-4c=36-36=0$, benar menyinggung.',
    hints: [
      'Menyinggung berarti diskriminan nol dan puncak berada di sumbu-$x$.',
      'Gunakan sumbu simetri $x=-\\dfrac{b}{2a}$ untuk menemukan $b$.',
    ],
    competencies: ['diskriminan', 'titik puncak', 'penalaran'],
  },
  {
    id: 'fk-14',
    topicId: 'fungsi-kuadrat',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah bola dilempar ke atas sehingga tingginya (meter) setelah $t$ detik dimodelkan $h(t)=-5t^{2}+20t+1$. (a) Tentukan tinggi maksimum bola. (b) Tentukan selang waktu ketika bola berada di atas $16$ m.',
    answer:
      '(a) Karena $a=-5<0$, tinggi maksimum di titik puncak: $t=-\\dfrac{20}{2\\cdot(-5)}=2$, sehingga $h(2)=-20+40+1=21$ m. (b) Selesaikan $h(t)>16$: $-5t^{2}+20t+1>16 \\Rightarrow -5t^{2}+20t-15>0 \\Rightarrow t^{2}-4t+3<0 \\Rightarrow (t-1)(t-3)<0$. Karena parabola terbuka ke atas, ketaksamaan berlaku pada $1<t<3$. Jadi bola berada di atas $16$ m selama $1<t<3$ detik.',
    explanation:
      'Kunci: mengambil titik puncak untuk tinggi maksimum, lalu menyelesaikan pertidaksamaan kuadrat melalui pemfaktoran dan uji tanda.',
    hints: [
      'Tinggi maksimum ada di titik puncak karena koefisien $t^{2}$ negatif.',
      'Untuk $h(t)>16$, susun ulang menjadi $t^{2}-4t+3<0$ lalu faktorkan.',
    ],
    competencies: ['titik puncak', 'pertidaksamaan kuadrat', 'pemodelan'],
    rubric: [
      'Menentukan absis puncak $t=2$',
      'Menghitung tinggi maksimum $h(2)=21$ m',
      'Menyusun pertidaksamaan $t^{2}-4t+3<0$',
      'Menyimpulkan selang $1<t<3$',
    ],
  },
  {
    id: 'fk-15',
    topicId: 'fungsi-kuadrat',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Sebuah bola ditendang dari tanah sehingga tingginya (meter) setelah $t$ detik dimodelkan $h(t)=-t^{2}+6t$. Bola kembali menyentuh tanah setelah … detik.',
    options: [
      { key: 'A', text: '$3$' },
      { key: 'B', text: '$6$' },
      { key: 'C', text: '$9$' },
      { key: 'D', text: '$12$' },
    ],
    answer: 'B',
    explanation:
      'Bola menyentuh tanah saat $h(t)=0$: $-t^{2}+6t=0 \\Rightarrow -t(t-6)=0$, sehingga $t=0$ (saat ditendang) atau $t=6$. Jadi bola menyentuh tanah lagi setelah $6$ detik. Opsi A ($3$) adalah waktu saat bola mencapai tinggi maksimum (sumbu simetri), bukan saat mendarat. Opsi C ($9$) dan D ($12$) berasal dari keliru menggandakan atau menjumlahkan waktu tempuh.',
    hints: [
      'Bola menyentuh tanah ketika $h(t)=0$.',
      'Faktorkan $-t^{2}+6t=-t(t-6)$ untuk menemukan kedua waktunya.',
    ],
    competencies: ['akar fungsi kuadrat', 'kontekstual'],
  },
  {
    id: 'fk-16',
    topicId: 'fungsi-kuadrat',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Perhatikan grafik fungsi kuadrat berikut. Akar-akar dan titik puncak fungsi itu berturut-turut adalah …',
    figure: {
      svg: '<svg viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="100" x2="245" y2="100" stroke="currentColor" stroke-width="1.5"/><line x1="105" y1="30" x2="105" y2="210" stroke="currentColor" stroke-width="1.5"/><path d="M52.5 46 Q140 346 227.5 46" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="70" cy="100" r="3.2" fill="currentColor"/><circle cx="210" cy="100" r="3.2" fill="currentColor"/><circle cx="140" cy="196" r="3.2" fill="currentColor"/><text x="58" y="118" font-size="11" fill="currentColor">-1</text><text x="203" y="118" font-size="11" fill="currentColor">3</text><text x="146" y="211" font-size="11" fill="currentColor">(1,-4)</text></svg>',
      alt: 'Grafik parabola terbuka ke atas yang memotong sumbu-x di x = -1 dan x = 3 dengan titik puncak di (1, -4).',
      caption: 'Grafik fungsi kuadrat dengan dua titik potong sumbu-$x$.',
    },
    options: [
      { key: 'A', text: '$x=-1,\\ x=3$ dan $(1,-4)$' },
      { key: 'B', text: '$x=1,\\ x=-3$ dan $(-1,4)$' },
      { key: 'C', text: '$x=-1,\\ x=3$ dan $(-4,1)$' },
      { key: 'D', text: '$x=1,\\ x=3$ dan $(1,-4)$' },
    ],
    answer: 'A',
    explanation:
      'Grafik memotong sumbu-$x$ di $x=-1$ dan $x=3$, sehingga akar-akarnya $-1$ dan $3$. Titik terendah (puncak) berada di $(1,-4)$. Opsi B menukar tanda akar dan koordinat titik puncak. Opsi C benar akarnya tetapi menukar koordinat titik puncak menjadi $(-4,1)$. Opsi D salah menuliskan salah satu akar menjadi $x=1$.',
    hints: [
      'Baca titik potong grafik dengan sumbu-$x$.',
      'Titik puncak adalah titik balik terendah pada grafik.',
    ],
    competencies: ['membaca grafik fungsi kuadrat', 'akar fungsi kuadrat'],
  },
];

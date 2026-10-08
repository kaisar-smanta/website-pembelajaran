import type { Question } from '@/types/content';

export const fungsiEksponensialQuestions: Question[] = [
  {
    id: 'fe-01',
    topicId: 'fungsi-eksponensial',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Diketahui $f(x)=4^{x}$. Nilai $f(3)$ adalah …',
    options: [
      { key: 'A', text: '$12$' },
      { key: 'B', text: '$256$' },
      { key: 'C', text: '$81$' },
      { key: 'D', text: '$64$' },
    ],
    answer: 'D',
    explanation:
      '$f(3)=4^{3}=4\\cdot4\\cdot4=64$. Ini perkalian berulang, bukan $4\\cdot3=12$.',
    hints: ['$4^{3}$ berarti $4\\times4\\times4$.'],
    competencies: ['nilai fungsi eksponensial'],
  },
  {
    id: 'fe-02',
    topicId: 'fungsi-eksponensial',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Nilai $x$ yang memenuhi $5^{x}=125$ adalah …',
    options: [
      { key: 'A', text: '$2$' },
      { key: 'B', text: '$25$' },
      { key: 'C', text: '$4$' },
      { key: 'D', text: '$3$' },
    ],
    answer: 'D',
    explanation: 'Karena $125=5^{3}$, maka $5^{x}=5^{3}$ sehingga $x=3$.',
    hints: ['Nyatakan $125$ sebagai pangkat dari $5$.'],
    competencies: ['persamaan eksponen'],
  },
  {
    id: 'fe-03',
    topicId: 'fungsi-eksponensial',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Manakah pernyataan yang benar tentang sifat grafik fungsi eksponensial berikut?',
    options: [
      { key: 'A', text: '$f(x)=0{,}6^{x}$ adalah pertumbuhan dan $g(x)=1{,}5^{x}$ adalah peluruhan.' },
      { key: 'B', text: '$f(x)=0{,}6^{x}$ dan $g(x)=1{,}5^{x}$ keduanya peluruhan.' },
      { key: 'C', text: '$f(x)=0{,}6^{x}$ dan $g(x)=1{,}5^{x}$ keduanya pertumbuhan.' },
      { key: 'D', text: '$f(x)=0{,}6^{x}$ adalah peluruhan dan $g(x)=1{,}5^{x}$ adalah pertumbuhan.' },
    ],
    answer: 'D',
    explanation:
      'Basis $0<b<1$ memberi peluruhan, sedangkan $b>1$ memberi pertumbuhan. Karena $0{,}6<1$, $f$ adalah peluruhan; karena $1{,}5>1$, $g$ adalah pertumbuhan.',
    hints: ['Perhatikan apakah nilai basis kurang dari atau lebih dari $1$.'],
    competencies: ['pertumbuhan dan peluruhan'],
  },
  {
    id: 'fe-04',
    topicId: 'fungsi-eksponensial',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Selesaikan $9^{x+1}=27^{x}$.',
    answer: '2',
    acceptedAnswers: ['2'],
    explanation:
      'Ubah ke basis $3$: $9^{x+1}=(3^{2})^{x+1}=3^{2x+2}$ dan $27^{x}=(3^{3})^{x}=3^{3x}$. Maka $2x+2=3x$, sehingga $x=2$. Periksa: $9^{3}=729$ dan $27^{2}=729$.',
    hints: ['Nyatakan $9$ dan $27$ sebagai pangkat dari $3$.'],
    competencies: ['persamaan eksponen'],
  },
  {
    id: 'fe-05',
    topicId: 'fungsi-eksponensial',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Tentukan jumlah semua nilai $x$ yang memenuhi $2^{x^{2}-3x}=16$.',
    answer: '3',
    acceptedAnswers: ['3'],
    explanation:
      'Karena $16=2^{4}$, maka $x^{2}-3x=4 \\Rightarrow x^{2}-3x-4=0 \\Rightarrow (x-4)(x+1)=0$, sehingga $x=4$ atau $x=-1$. Jumlahnya $4+(-1)=3$.',
    hints: ['Samakan basisnya, lalu selesaikan persamaan kuadrat yang muncul.'],
    competencies: ['persamaan eksponen'],
  },
  {
    id: 'fe-06',
    topicId: 'fungsi-eksponensial',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Populasi sebuah kota $500$ jiwa tumbuh $8\\%$ per tahun. Tentukan populasi setelah $10$ tahun (bulatkan ke satuan terdekat, gunakan $1{,}08^{10}\\approx2{,}1589$).',
    answer: '1079',
    acceptedAnswers: ['1079', '1.079'],
    explanation:
      'Model pertumbuhan $N(t)=500(1{,}08)^{t}$. Untuk $t=10$: $N(10)=500\\cdot1{,}08^{10}\\approx500\\cdot2{,}1589=1079{,}45$, dibulatkan menjadi $1079$ jiwa.',
    hints: ['Faktor pertumbuhan $b=1+r=1+0{,}08=1{,}08$.'],
    competencies: ['pemodelan pertumbuhan'],
  },
  {
    id: 'fe-07',
    topicId: 'fungsi-eksponensial',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Konsentrasi obat $120$ mg/L berkurang setengah setiap $6$ jam. Tentukan konsentrasinya setelah $18$ jam.',
    answer: '15',
    acceptedAnswers: ['15'],
    explanation:
      'Model peluruhan $C(t)=120\\left(\\tfrac12\\right)^{t/6}$. Untuk $t=18$: $120\\left(\\tfrac12\\right)^{3}=120\\cdot\\tfrac18=15$ mg/L.',
    hints: ['$18$ jam sama dengan berapa selang paruh $6$ jam?'],
    competencies: ['pemodelan peluruhan'],
  },
  {
    id: 'fe-08',
    topicId: 'fungsi-eksponensial',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Modal Rp5.000.000 ditabung dengan bunga majemuk $6\\%$ per tahun. Setelah berapa tahun nilainya menjadi dua kali lipat? (Gunakan $1{,}06^{11}\\approx1{,}90$ dan $1{,}06^{12}\\approx2{,}01$.) Jelaskan pemodelanmu.',
    answer:
      'Model saldo $M(t)=5.000.000(1{,}06)^{t}$. Nilai dua kali lipat berarti $M(t)=10.000.000$, sehingga $(1{,}06)^{t}=2$. Karena $1{,}06^{11}\\approx1{,}90<2$ dan $1{,}06^{12}\\approx2{,}01>2$, nilai dua kali lipat tercapai pada tahun ke-$12$.',
    explanation: 'Kunci jawaban: menyusun model eksponensial lalu mencari periode saat faktor mencapai $2$.',
    hints: ['Bagi kedua ruas dengan modal awal untuk memperoleh $(1{,}06)^{t}=2$.'],
    competencies: ['pemodelan bunga majemuk'],
  },
  {
    id: 'fe-09',
    topicId: 'fungsi-eksponensial',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Jelaskan mengapa $f(x)=b^{x}$ dengan $b>0$ selalu bernilai positif untuk setiap bilangan real $x$.',
    answer:
      'Untuk $x$ bilangan bulat, $b^{x}$ adalah hasil perkalian bilangan positif sehingga hasilnya positif. Untuk $x=\\dfrac{m}{n}$, berlaku $b^{m/n}=\\sqrt[n]{b^{m}}$; karena $b^{m}>0$, akarnya juga positif. Untuk $x$ real, $b^{x}$ didefinisikan sebagai limit nilai-nilai positif tersebut, sehingga tetap positif. Jadi $b^{x}>0$ untuk semua $x$.',
    explanation: 'Kunci jawaban: memperluas kesimpulan dari eksponen bulat ke rasional, lalu ke real.',
    hints: ['Mulai dari kasus $x$ bilangan bulat, lalu perluas ke rasional.'],
    competencies: ['pembuktian', 'sifat eksponen'],
  },
  {
    id: 'fe-10',
    topicId: 'fungsi-eksponensial',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Jelaskan transformasi grafik $f(x)=2^{x+1}-3$ dari grafik dasar $y=2^{x}$, lalu tentukan asimtot horizontal dan titik potong sumbu-$y$-nya.',
    answer:
      'Dari $y=2^{x}$, grafik bergeser ke kiri $1$ satuan karena eksponen $x+1$, lalu turun $3$ satuan karena $-3$. Asimtot horizontalnya menjadi $y=-3$ (bergeser turun dari $y=0$). Titik potong sumbu-$y$: $f(0)=2^{1}-3=2-3=-1$, yaitu $(0,-1)$.',
    explanation: 'Kunci jawaban: membedakan pergeseran horizontal dan vertikal serta menyesuaikan asimtot.',
    hints: ['$b^{x+1}$ menggeser grafik secara horizontal, sedangkan $-3$ menggesernya secara vertikal.'],
    competencies: ['transformasi grafik eksponensial'],
  },
  {
    id: 'fe-11',
    topicId: 'fungsi-eksponensial',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Dua zat memiliki nilai awal sama, $100$ satuan. Zat A mengikuti $A(t)=100(1{,}2)^{t}$ dan zat B mengikuti $B(t)=100(0{,}8)^{t}$. (a) Manakah yang tumbuh dan manakah yang meluruh? (b) Bandingkan nilainya pada $t=5$, lalu jelaskan mengapa keduanya berbeda meskipun nilai awalnya sama.',
    answer:
      '(a) Zat A tumbuh karena basis $1{,}2>1$, sedangkan zat B meluruh karena basis $0{,}8<1$. (b) $A(5)=100(1{,}2)^{5}\\approx100(2{,}488)=248{,}8$ dan $B(5)=100(0{,}8)^{5}\\approx100(0{,}328)=32{,}8$. Keduanya berbeda karena setiap langkah zat A dikalikan faktor lebih dari $1$ sedangkan zat B dikalikan faktor kurang dari $1$; perbedaan kecil pada basis terakumulasi menjadi perbedaan besar setelah beberapa periode.',
    explanation:
      'Kunci: mengenali basis sebagai penentu pertumbuhan/peluruhan dan menunjukkan efek akumulasi basis terhadap nilai jangka panjang.',
    hints: ['Periksa apakah basis lebih besar atau lebih kecil dari $1$.', 'Bandingkan hasil perpangkatan pada $t=5$.'],
    competencies: ['pertumbuhan dan peluruhan', 'evaluasi'],
  },
  {
    id: 'fe-12',
    topicId: 'fungsi-eksponensial',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Diketahui $f(x)=3^{x}$. Nilai $f(2)$ adalah …',
    options: [
      { key: 'A', text: '$6$' },
      { key: 'B', text: '$8$' },
      { key: 'C', text: '$12$' },
      { key: 'D', text: '$9$' },
    ],
    answer: 'D',
    explanation:
      '$f(2)=3^{2}=3\\cdot3=9$. Ini perkalian berulang, bukan $3\\cdot2=6$ atau penjumlahan $3+2$.',
    hints: ['$3^{2}$ berarti $3\\times3$.'],
    competencies: ['nilai fungsi eksponensial'],
  },
  {
    id: 'fe-13',
    topicId: 'fungsi-eksponensial',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Dua kultur bakteri diamati. Kultur P dimulai dengan $200$ bakteri dan berlipat dua setiap $3$ jam. Kultur Q dimulai dengan $800$ bakteri dan berkurang setengah setiap $2$ jam. (a) Susun model $P(t)$ dan $Q(t)$ untuk $t$ jam. (b) Tentukan saat keduanya berjumlah sama. (c) Jelaskan mengapa setelah saat itu jumlah kultur P selalu lebih besar daripada kultur Q.',
    answer:
      '(a) Kultur P berlipat dua tiap $3$ jam, sehingga $P(t)=200\\cdot 2^{t/3}$. Kultur Q berkurang setengah tiap $2$ jam, sehingga $Q(t)=800\\cdot 2^{-t/2}$. (b) Samakan: $200\\cdot 2^{t/3}=800\\cdot 2^{-t/2} \\Rightarrow 2^{t/3}=4\\cdot 2^{-t/2}=2^{2-t/2}$. Maka $\\dfrac{t}{3}=2-\\dfrac{t}{2} \\Rightarrow \\dfrac{5t}{6}=2 \\Rightarrow t=\\dfrac{12}{5}=2{,}4$ jam. Periksa: $P(2{,}4)=200\\cdot 2^{0{,}8}\\approx348{,}2$ dan $Q(2{,}4)=800\\cdot 2^{-1{,}2}\\approx348{,}2$. (c) Setelah $t=2{,}4$, faktor $2^{t/3}$ terus bertambah sedangkan $2^{-t/2}$ terus mengecil, sehingga P bertambah dan Q berkurang. Karena keduanya hanya bersilangan sekali, P akan selamanya lebih besar.',
    explanation:
      'Kunci: menyusun model pertumbuhan dan peluruhan, menyelesaikan persamaan eksponen dengan menyamakan basis $2$, lalu menafsirkan perilaku jangka panjang.',
    hints: [
      'Pertumbuhan berlipat dua tiap $3$ jam memberi eksponen $t/3$.',
      'Peluruhan setengah tiap $2$ jam memberi faktor $2^{-t/2}$.',
      'Nyatakan $4$ sebagai $2^{2}$ agar basisnya sama.',
    ],
    competencies: ['pemodelan pertumbuhan', 'pemodelan peluruhan', 'persamaan eksponen'],
  },
  {
    id: 'fe-14',
    topicId: 'fungsi-eksponensial',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Jelaskan mengapa $f(x)=2^{x}$ akhirnya tumbuh lebih cepat daripada $g(x)=x^{10}$ untuk $x$ yang cukup besar, meskipun pada $x$ kecil (misalnya $x=10$) nilai $x^{10}$ justru jauh lebih besar. Gunakan perbandingan rasio $\\dfrac{f(x+1)}{f(x)}$ dan $\\dfrac{g(x+1)}{g(x)}$.',
    answer:
      'Untuk fungsi eksponen, $\\dfrac{f(x+1)}{f(x)}=\\dfrac{2^{x+1}}{2^{x}}=2$, yaitu rasio tetap. Untuk polinomial, $\\dfrac{g(x+1)}{g(x)}=\\left(\\dfrac{x+1}{x}\\right)^{10}$, yang nilainya makin mendekati $1$ ketika $x$ membesar. Karena pertumbuhan eksponen selalu mengalikan dengan $2$ setiap langkah, sedangkan pertumbuhan polinomial relatifnya menyusut menuju $1$, maka untuk $x$ yang cukup besar laju eksponen melampaui polinomial dan selisihnya terus melebar. Sebagai ilustrasi, pada $x=10$ nilai $x^{10}=10^{10}$ masih mengalahkan $2^{10}=1024$, tetapi pada $x=100$ nilai $2^{100}\\approx1{,}27\\times10^{30}$ sudah mengalahkan $100^{10}=10^{20}$.',
    explanation:
      'Kunci: membandingkan rasio pertumbuhan (konstan $2$ versus menuju $1$) dan memberi ilustrasi numerik bahwa eksponen akhirnya menyalip polinomial.',
    hints: [
      'Hitung rasio $f(x+1)/f(x)$ untuk fungsi eksponen.',
      'Hitung rasio $g(x+1)/g(x)$ untuk polinomial dan lihat kecenderungannya saat $x$ besar.',
    ],
    competencies: ['perbandingan pertumbuhan', 'penalaran'],
  },
];

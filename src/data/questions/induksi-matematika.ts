import type { Question } from '@/types/content';

export const induksiMatematikaQuestions: Question[] = [
  {
    id: 'ind-01',
    topicId: 'induksi-matematika',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt:
      'Langkah pertama induksi matematika, yaitu memeriksa bahwa pernyataan benar untuk nilai awal (biasanya $n=1$), disebut …',
    options: [
      { key: 'A', text: 'Langkah induksi' },
      { key: 'B', text: 'Basis induksi' },
      { key: 'C', text: 'Hipotesis induksi' },
      { key: 'D', text: 'Kontraposisi' },
    ],
    answer: 'B',
    explanation:
      'Basis induksi adalah pemeriksaan nilai awal, misalnya $P(1)$ benar. Langkah induksi adalah pembuktian $P(k) \\Rightarrow P(k+1)$, sedangkan hipotesis induksi adalah pengandaian $P(k)$ yang dipakai pada langkah tersebut.',
    hints: ['Basis berarti "dasar", yaitu titik awal rantai induksi.'],
    competencies: ['prinsip induksi matematika'],
  },
  {
    id: 'ind-02',
    topicId: 'induksi-matematika',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Pernyataan $1+3+5+\\cdots+(2n-1)=n^2$ akan dibuktikan dengan induksi. Manakah yang merupakan langkah induksi yang benar?',
    options: [
      {
        key: 'A',
        text: 'Andaikan $1+3+\\cdots+(2k-1)=k^2$, lalu buktikan $1+3+\\cdots+(2k+1)=(k+1)^2$.',
      },
      {
        key: 'B',
        text: 'Andaikan $1+3+\\cdots+(2k-1)=k^2$, lalu buktikan $1+3+\\cdots+(2k-1)=k^2$ untuk semua $k$.',
      },
      {
        key: 'C',
        text: 'Cukup memeriksa $n=1$ dan $n=2$.',
      },
      {
        key: 'D',
        text: 'Andaikan kebenaran berlaku untuk $n=k+1$, lalu turunkan kebenaran untuk $n=k$.',
      },
    ],
    answer: 'A',
    explanation:
      'Langkah induksi mengandaikan $P(k)$ benar lalu membuktikan $P(k+1)$ benar. Suku ke-$(k+1)$ pada barisan ganjil adalah $2k+1$, sehingga targetnya $1+3+\\cdots+(2k+1)=(k+1)^2$.',
    hints: ['Suku ganjil ke-$m$ adalah $2m-1$; untuk $m=k+1$ diperoleh $2k+1$.', 'Arah induksi selalu dari $k$ ke $k+1$, bukan sebaliknya.'],
    competencies: ['langkah induksi'],
  },
  {
    id: 'ind-03',
    topicId: 'induksi-matematika',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Hitung jumlah $1+2+3+\\cdots+10$.',
    answer: '55',
    acceptedAnswers: ['55'],
    explanation:
      'Gunakan $1+2+\\cdots+n=\\dfrac{n(n+1)}{2}$ dengan $n=10$: $\\dfrac{10\\cdot 11}{2}=55$.',
    hints: ['Gunakan rumus jumlah $n$ bilangan asli pertama.'],
    competencies: ['rumus jumlah bilangan asli'],
  },
  {
    id: 'ind-04',
    topicId: 'induksi-matematika',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Tentukan bilangan bulat positif terkecil $n_0$ sehingga $2^n > n^2$ berlaku untuk semua $n \\ge n_0$.',
    answer: '5',
    acceptedAnswers: ['5'],
    explanation:
      'Nilai $n=1$ memenuhi, tetapi $n=2$ memberi $4=4$, $n=3$ memberi $8<9$, dan $n=4$ memberi $16=16$. Baru mulai $n=5$ ketaksamaan bertahan, yaitu $32>25$, dan langkah induksi menjaganya untuk semua $n \\ge 5$. Jadi $n_0=5$.',
    hints: ['Periksa nilai $n$ satu per satu sampai ketaksamaan mulai bertahan terus.'],
    competencies: ['basis induksi', 'ketaksamaan'],
  },
  {
    id: 'ind-05',
    topicId: 'induksi-matematika',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Gunakan rumus jumlah untuk menghitung $1+2+3+\\cdots+50$.',
    answer: '1275',
    acceptedAnswers: ['1275'],
    explanation:
      '$\\dfrac{50\\cdot 51}{2}=25\\cdot 51=1275$.',
    hints: ['Substitusi $n=50$ ke $\\dfrac{n(n+1)}{2}$.'],
    competencies: ['rumus jumlah bilangan asli'],
  },
  {
    id: 'ind-06',
    topicId: 'induksi-matematika',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'konsep',
    prompt:
      'Jelaskan mengapa induksi matematika memerlukan dua langkah, yaitu basis dan langkah induksi. Berikan contoh akibatnya bila salah satu langkah tidak dipenuhi.',
    answer:
      'Basis menjamin pernyataan benar pada titik awal, sedangkan langkah induksi menjamin kebenaran menjalar dari satu bilangan ke bilangan berikutnya. Bila basis tidak diperiksa, rantai tidak pernah dimulai; contohnya pernyataan "$n=n+1$" dapat "dibuktikan" langkahnya tetapi basisnya tidak pernah benar. Bila langkah induksi tidak diperiksa, kebenaran hanya berlaku pada kasus awal dan tidak menjalar; contohnya pernyataan "$n<100$" benar untuk $n=1$ tetapi gagal pada $n=100$. Jadi keduanya wajib ada.',
    explanation:
      'Kunci jawaban menekankan peran basis sebagai titik awal dan langkah induksi sebagai penjalar kebenaran, disertai contoh tandingan untuk masing-masing.',
    hints: [
      'Kaitkan dengan analogi deretan domino: dorongan pertama dan penjalaran antar domino.',
      'Untuk tiap langkah yang hilang, cari pernyataan yang tampak benar tetapi gagal.'],
    competencies: ['prinsip induksi matematika', 'penalaran'],
  },
  {
    id: 'ind-07',
    topicId: 'induksi-matematika',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'konsep',
    prompt:
      'Pada pembuktian $6^n-1$ habis dibagi $5$, langkah induksi menulis $6^{k+1}-1=6\\cdot 6^k-1$. Bentuk ini diubah menjadi $6(6^k-1)+c$. Nilai $c$ adalah …',
    answer: '5',
    acceptedAnswers: ['5'],
    explanation:
      'Jabarkan: $6(6^k-1)+c=6\\cdot 6^k-6+c=6^{k+1}-1$ bila $-6+c=-1$, yaitu $c=5$. Dengan begitu $6^{k+1}-1=6(6^k-1)+5$, yang tetap habis dibagi $5$.',
    hints: ['Samakan $6(6^k-1)+c$ dengan $6^{k+1}-1$, lalu bandingkan konstanta.'],
    competencies: ['keterbagian', 'langkah induksi'],
  },
  {
    id: 'ind-08',
    topicId: 'induksi-matematika',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Buktikan dengan induksi matematika bahwa $1+3+5+\\cdots+(2n-1)=n^2$ untuk setiap bilangan asli $n$.',
    answer:
      'Basis $n=1$: ruas kiri $=1$ dan ruas kanan $=1^2=1$, benar. Hipotesis: andaikan $1+3+\\cdots+(2k-1)=k^2$. Maka $1+3+\\cdots+(2k-1)+(2k+1)=k^2+(2k+1)=(k+1)^2$, tepat bentuk $P(k+1)$. Karena basis dan langkah induksi benar, rumus berlaku untuk semua $n \\ge 1$.',
    explanation:
      'Kunci jawaban: memeriksa basis, mengasumsikan $P(k)$, lalu menambahkan suku berikutnya $2k+1$ dan mengenali $k^2+2k+1=(k+1)^2$.',
    hints: ['Suku setelah $(2k-1)$ adalah $2k+1$.', 'Ingat $k^2+2k+1=(k+1)^2$.'],
    competencies: ['pembuktian induksi', 'jumlah bilangan ganjil'],
  },
  {
    id: 'ind-09',
    topicId: 'induksi-matematika',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Hitung $1^2+2^2+3^2+\\cdots+10^2$.',
    answer: '385',
    acceptedAnswers: ['385'],
    explanation:
      'Gunakan $1^2+2^2+\\cdots+n^2=\\dfrac{n(n+1)(2n+1)}{6}$: $\\dfrac{10\\cdot 11\\cdot 21}{6}=\\dfrac{2310}{6}=385$.',
    hints: ['Gunakan rumus jumlah kuadrat $\\dfrac{n(n+1)(2n+1)}{6}$.'],
    competencies: ['rumus jumlah kuadrat'],
  },
  {
    id: 'ind-10',
    topicId: 'induksi-matematika',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Buktikan bahwa $2^n > n^2$ untuk setiap bilangan bulat $n \\ge 5$.',
    answer:
      'Basis $n=5$: $2^5=32>25=5^2$, benar. Hipotesis: andaikan $2^k>k^2$ untuk suatu $k \\ge 5$. Maka $2^{k+1}=2\\cdot 2^k>2k^2$. Karena $k \\ge 5$, berlaku $k^2-2k-1>0$, sehingga $2k^2=k^2+(k^2)>k^2+2k+1=(k+1)^2$. Jadi $2^{k+1}>(k+1)^2$, yaitu $P(k+1)$. Terbukti untuk semua $n \\ge 5$.',
    explanation:
      'Kunci jawaban: basis $n=5$, lalu pada langkah induksi memakai $2k^2>(k+1)^2$, yang berlaku untuk $k \\ge 3$.',
    hints: [
      'Setelah mengalikan dengan $2$, bandingkan $2k^2$ dengan $(k+1)^2$.',
      'Periksa untuk nilai $k$ berapa $k^2-2k-1$ bernilai positif.',
    ],
    competencies: ['pembuktian induksi', 'ketaksamaan'],
  },
  {
    id: 'ind-11',
    topicId: 'induksi-matematika',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Buktikan dengan induksi bahwa $3^{2n}-1$ habis dibagi $8$ untuk setiap bilangan asli $n$.',
    answer:
      'Basis $n=1$: $3^2-1=9-1=8$ habis dibagi $8$. Hipotesis: andaikan $3^{2k}-1$ habis dibagi $8$. Maka $3^{2(k+1)}-1=3^{2k+2}-1=9\\cdot 3^{2k}-1=9(3^{2k}-1)+8$. Karena $8 \\mid 3^{2k}-1$ (hipotesis) dan $8 \\mid 8$, maka $3^{2(k+1)}-1$ habis dibagi $8$. Terbukti.',
    explanation:
      'Kunci jawaban: menulis $3^{2k+2}-1$ sebagai $9(3^{2k}-1)+8$, lalu memakai hipotesis dan fakta $8 \\mid 8$.',
    hints: ['Kelompokkan agar muncul bentuk $3^{2k}-1$ dari hipotesis.', 'Perhatikan $9\\cdot 3^{2k}-1=9(3^{2k}-1)+8$.'],
    competencies: ['pembuktian induksi', 'keterbagian'],
  },
  {
    id: 'ind-12',
    topicId: 'induksi-matematika',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Suatu barisan didefinisikan oleh $a_1=1$ dan $a_{n+1}=a_n+2$ untuk setiap $n \\ge 1$. Buktikan dengan induksi bahwa $a_n=2n-1$ untuk semua $n \\ge 1$.',
    answer:
      'Basis $n=1$: rumus memberi $a_1=2\\cdot 1-1=1$, cocok dengan definisi. Hipotesis: andaikan $a_k=2k-1$. Maka $a_{k+1}=a_k+2=(2k-1)+2=2k+1=2(k+1)-1$, tepat bentuk rumus untuk $n=k+1$. Jadi $a_n=2n-1$ untuk semua $n \\ge 1$.',
    explanation:
      'Kunci jawaban: memeriksa suku pertama, lalu memakai relasi rekursif bersama hipotesis untuk memperoleh bentuk $n=k+1$.',
    hints: ['Gunakan definisi $a_{k+1}=a_k+2$.', 'Targetnya $2(k+1)-1=2k+1$.'],
    competencies: ['pemodelan barisan', 'pembuktian induksi'],
  },
  {
    id: 'ind-13',
    topicId: 'induksi-matematika',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Sebuah perusahaan memberi bonus bulanan. Bulan pertama bonusnya Rp100.000, dan setiap bulan berikutnya bertambah Rp50.000. Buktikan dengan induksi bahwa total bonus sampai bulan ke-$n$ adalah Rp$25.000\\,n(n+3)$.',
    answer:
      'Basis $n=1$: total $=$ Rp$25.000\\cdot 1\\cdot 4=$ Rp100.000, sama dengan bonus bulan pertama. Hipotesis: andaikan total sampai bulan ke-$k$ adalah Rp$25.000\\,k(k+3)$. Bonus bulan ke-$(k+1)$ adalah $100.000+50.000k=$ Rp$50.000(k+2)$. Maka total sampai bulan ke-$(k+1)$: $25.000k(k+3)+50.000(k+2)=25.000[k(k+3)+2(k+2)]=25.000(k^2+5k+4)=25.000(k+1)(k+4)=25.000(k+1)\\big((k+1)+3\\big)$. Ini tepat rumus untuk $n=k+1$, sehingga terbukti.',
    explanation:
      'Kunci jawaban: mengubah situasi menjadi relasi rekursif, memakai hipotesis, lalu mengfaktorkan agar berbentuk rumus pada $n=k+1$.',
    hints: ['Bonus bulan ke-$(k+1)$ adalah Rp$50.000(k+2)$.', 'Faktorkan $k^2+5k+4=(k+1)(k+4)$.'],
    competencies: ['pemodelan', 'pembuktian induksi', 'kontekstual'],
  },
  {
    id: 'ind-14',
    topicId: 'induksi-matematika',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'evaluasi',
    prompt:
      'Ada "pembuktian" terkenal yang tampak menyatakan semua kuda berwarna sama: basis $n=1$ benar (satu kuda pasti berwarna sama), lalu pada langkah induksi dua himpunan berukuran $k$ "beririsan" sehingga dianggap mewarisi warna yang sama. Di manakah letak kesalahannya?',
    options: [
      { key: 'A', text: 'Basis $n=1$ salah karena warna kuda tidak dapat dibandingkan.' },
      { key: 'B', text: 'Langkah dari $k=1$ ke $k+1=2$ tidak sah, sebab dua himpunan berukuran $1$ belum tentu beririsan.' },
      { key: 'C', text: 'Pembuktian benar sehingga semua kuda memang berwarna sama.' },
      { key: 'D', text: 'Kesalahannya karena tidak memakai dua basis.' },
    ],
    answer: 'B',
    explanation:
      'Langkah induksi mengandaikan dua himpunan berukuran $k$ saling beririsan sebagai jembatan menuju $k+1$. Jembatan itu baru terjamin bila $k \\ge 2$. Untuk $k=1$ menuju $k=2$, dua himpunan berukuran satu (dua kuda berbeda) tidak beririsan, sehingga sifat warna tidak dapat diwariskan. Basis benar, tetapi langkahnya gagal tepat pada transisi pertama.',
    hints: ['Periksa apakah langkah induksi berlaku untuk semua $k$, khususnya dari $k=1$.'],
    competencies: ['evaluasi pembuktian', 'prinsip induksi matematika'],
  },
  {
    id: 'ind-15',
    topicId: 'induksi-matematika',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Buktikan dengan induksi bahwa untuk setiap bilangan asli $n$ dan $r \\neq 1$ berlaku $1+r+r^2+\\cdots+r^{n-1}=\\dfrac{r^{n}-1}{r-1}$.',
    answer:
      'Basis $n=1$: ruas kiri $=1$ dan ruas kanan $=\\dfrac{r-1}{r-1}=1$, benar. Hipotesis: andaikan $1+r+\\cdots+r^{k-1}=\\dfrac{r^{k}-1}{r-1}$. Maka $1+r+\\cdots+r^{k-1}+r^{k}=\\dfrac{r^{k}-1}{r-1}+r^{k}=\\dfrac{r^{k}-1+r^{k}(r-1)}{r-1}=\\dfrac{r^{k}-1+r^{k+1}-r^{k}}{r-1}=\\dfrac{r^{k+1}-1}{r-1}$. Ini tepat rumus untuk $n=k+1$, sehingga terbukti.',
    explanation:
      'Kunci jawaban: basis $n=1$, lalu menambahkan suku $r^{k}$ pada hipotesis dan menyederhanakan menuju bentuk $n=k+1$.',
    hints: ['Suku setelah $r^{k-1}$ adalah $r^{k}$.', 'Samakan penyebut $r-1$ saat menambahkan $r^k$.'],
    competencies: ['pemodelan deret geometri', 'pembuktian induksi'],
  },
];

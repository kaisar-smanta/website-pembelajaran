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
      'Basis induksi adalah pemeriksaan nilai awal, misalnya $P(1)$ benar. Opsi A, langkah induksi, adalah pembuktian $P(k) \\Rightarrow P(k+1)$, bukan pemeriksaan nilai awal. Opsi C, hipotesis induksi, adalah pengandaian $P(k)$ yang dipakai pada langkah tersebut. Opsi D, kontraposisi, adalah bentuk pernyataan logika $\\neg Q \\Rightarrow \\neg P$ yang tidak berkaitan dengan langkah awal induksi.',
    hints: ['Basis berarti "dasar", yaitu titik awal rantai induksi.', 'Bandingkan dengan langkah induksi yang menghubungkan dua nilai berurutan.'],
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
      'Langkah induksi mengandaikan $P(k)$ benar lalu membuktikan $P(k+1)$ benar. Suku ke-$(k+1)$ pada barisan ganjil adalah $2k+1$, sehingga targetnya $1+3+\\cdots+(2k+1)=(k+1)^2$. Opsi B hanya mengulang pengandaian $P(k)$ tanpa membuktikan $P(k+1)$, sehingga tidak menambah apa pun. Opsi C salah karena memeriksa dua nilai awal saja tidak menggantikan langkah umum untuk semua $k$. Opsi D membalik arah induksi, dari $k+1$ ke $k$, padahal arah yang benar selalu dari $k$ ke $k+1$.',
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
    hints: [
      'Gunakan rumus jumlah $n$ bilangan asli pertama.',
      'Rumusnya $1+2+\\cdots+n=\\dfrac{n(n+1)}{2}$.',
      'Substitusikan $n=10$ lalu hitung $\\dfrac{10\\cdot 11}{2}$.',
    ],
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
    hints: [
      'Periksa nilai $n$ satu per satu sampai ketaksamaan mulai bertahan terus.',
      'Bandingkan $2^{n}$ dengan $n^{2}$ mulai dari $n=2$.',
      'Cari titik awal ketika ketaksamaan bertahan untuk semua nilai berikutnya.',
    ],
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
    hints: ['Substitusi $n=50$ ke $\\dfrac{n(n+1)}{2}$.', 'Hitung $\\dfrac{50 \\cdot 51}{2}$ dengan menyederhanakan $50/2$ terlebih dahulu.'],
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
    figure: {
      svg: '<svg viewBox="0 0 320 170" role="img" aria-hidden="true"><line x1="20" y1="130" x2="300" y2="130" stroke="currentColor" stroke-width="1.2"/><rect x="70" y="80" width="14" height="50" rx="2" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1.2"/><rect x="120" y="80" width="14" height="50" rx="2" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1.2"/><rect x="170" y="80" width="14" height="50" rx="2" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1.2"/><rect x="220" y="80" width="14" height="50" rx="2" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1.2"/><rect x="270" y="80" width="14" height="50" rx="2" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1.2"/><line x1="30" y1="92" x2="60" y2="92" stroke="currentColor" stroke-width="1.4"/><polygon points="68,92 56,87 56,97" fill="currentColor"/><path d="M92 78 Q112 56 116 76" fill="none" stroke="currentColor" stroke-width="1.1"/><polygon points="116,76 110,64 120,66" fill="currentColor"/><path d="M142 78 Q162 56 166 76" fill="none" stroke="currentColor" stroke-width="1.1"/><polygon points="166,76 160,64 170,66" fill="currentColor"/><path d="M192 78 Q212 56 216 76" fill="none" stroke="currentColor" stroke-width="1.1"/><polygon points="216,76 210,64 220,66" fill="currentColor"/><path d="M242 78 Q262 56 266 76" fill="none" stroke="currentColor" stroke-width="1.1"/><polygon points="266,76 260,64 270,66" fill="currentColor"/><text x="76" y="64" font-size="10" fill="currentColor">basis</text></svg>',
      alt: 'Deretan lima domino berjajar. Sebuah dorongan pada domino pertama membuatnya jatuh, lalu setiap domino yang jatuh menjatuhkan domino berikutnya, menggambarkan basis dan langkah induksi.',
      caption: 'Analogi domino: dorongan pertama adalah basis, penjalaran antar domino adalah langkah induksi.',
    },
    answer:
      'Basis menjamin pernyataan benar pada titik awal, sedangkan langkah induksi menjamin kebenaran menjalar dari satu bilangan ke bilangan berikutnya. Bila basis tidak diperiksa, rantai tidak pernah dimulai; contohnya pernyataan "$n=n+1$" dapat "dibuktikan" langkahnya tetapi basisnya tidak pernah benar. Bila langkah induksi tidak diperiksa, kebenaran hanya berlaku pada kasus awal dan tidak menjalar; contohnya pernyataan "$n<100$" benar untuk $n=1$ tetapi gagal pada $n=100$. Jadi keduanya wajib ada.',
    explanation:
      'Kunci jawaban menekankan peran basis sebagai titik awal dan langkah induksi sebagai penjalar kebenaran, disertai contoh tandingan untuk masing-masing.',
    hints: [
      'Kaitkan dengan analogi deretan domino: dorongan pertama dan penjalaran antar domino.',
      'Untuk tiap langkah yang hilang, cari pernyataan yang tampak benar tetapi gagal.'],
    competencies: ['prinsip induksi matematika', 'penalaran'],
    rubric: [
      'Menjelaskan basis sebagai titik awal kebenaran',
      'Menjelaskan langkah induksi sebagai penjalar kebenaran',
      'Memberi contoh kegagalan bila basis tidak diperiksa',
      'Memberi contoh kegagalan bila langkah induksi tidak diperiksa',
    ],
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
    hints: ['Samakan $6(6^k-1)+c$ dengan $6^{k+1}-1$, lalu bandingkan konstanta.', 'Bandingkan koefisien konstanta: $-6+c=-1$.'],
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
    rubric: [
      'Memeriksa basis $n=1$: kedua ruas bernilai $1$',
      'Menulis hipotesis induksi $1+3+\\cdots+(2k-1)=k^2$',
      'Menambahkan suku berikutnya $2k+1$ pada kedua ruas',
      'Menyederhanakan $k^2+2k+1=(k+1)^2$',
      'Menyimpulkan rumus berlaku untuk semua $n\\ge1$',
    ],
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
    hints: ['Gunakan rumus jumlah kuadrat $\\dfrac{n(n+1)(2n+1)}{6}$.', 'Substitusikan $n=10$ lalu hitung $10 \\cdot 11 \\cdot 21$ sebelum dibagi $6$.'],
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
    rubric: [
      'Memeriksa basis $n=5$: $2^5=32>25=5^2$',
      'Mengandaikan $2^k>k^2$ untuk suatu $k\\ge5$',
      'Menunjukkan $2^{k+1}=2\\cdot2^k>2k^2$',
      'Membuktikan $2k^2>(k+1)^2$ untuk $k\\ge5$',
      'Menyimpulkan pertidaksamaan berlaku untuk semua $n\\ge5$',
    ],
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
    rubric: [
      'Memeriksa basis $n=1$: $3^2-1=8$ habis dibagi $8$',
      'Mengandaikan $8\\mid 3^{2k}-1$',
      'Menulis $3^{2(k+1)}-1=9(3^{2k}-1)+8$',
      'Memakai hipotesis keterbagian pada $3^{2k}-1$',
      'Menyimpulkan $8\\mid 3^{2(k+1)}-1$',
    ],
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
    rubric: [
      'Memeriksa basis $n=1$: $a_1=2(1)-1=1$',
      'Mengandaikan $a_k=2k-1$',
      'Memakai relasi $a_{k+1}=a_k+2$',
      'Menyederhanakan menjadi $a_{k+1}=2k+1=2(k+1)-1$',
      'Menyimpulkan $a_n=2n-1$ untuk semua $n\\ge1$',
    ],
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
    rubric: [
      'Memeriksa basis $n=1$: total Rp100.000 cocok',
      'Mengandaikan total sampai bulan ke-$k$ adalah Rp$25.000\\,k(k+3)$',
      'Menulis bonus bulan ke-$(k+1)$ sebesar Rp$50.000(k+2)$',
      'Menjumlahkan lalu memfaktorkan menjadi $25.000(k+1)(k+4)$',
      'Mengenali bentuk itu sebagai rumus untuk $n=k+1$',
    ],
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
      'Langkah induksi mengandaikan dua himpunan berukuran $k$ saling beririsan sebagai jembatan menuju $k+1$. Jembatan itu baru terjamin bila $k \\ge 2$. Untuk $k=1$ menuju $k=2$, dua himpunan berukuran satu (dua kuda berbeda) tidak beririsan, sehingga sifat warna tidak dapat diwariskan. Basis benar, tetapi langkahnya gagal tepat pada transisi pertama. Opsi A salah karena basis $n=1$ justru benar. Opsi C salah karena pembuktiannya memang cacat pada transisi $k=1$ ke $k=2$. Opsi D salah karena masalahnya bukan pada banyaknya basis, melainkan pada keabsahan langkah untuk $k=1$.',
    hints: ['Periksa apakah langkah induksi berlaku untuk semua $k$, khususnya dari $k=1$.', 'Uji transisi terkecil: apakah dua himpunan berukuran $1$ pasti beririsan?'],
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
    rubric: [
      'Memeriksa basis $n=1$: kedua ruas bernilai $1$',
      'Mengandaikan $1+r+\\cdots+r^{k-1}=\\dfrac{r^k-1}{r-1}$',
      'Menambahkan suku $r^k$ pada hipotesis',
      'Menyamakan penyebut $r-1$ lalu menyederhanakan',
      'Memperoleh $\\dfrac{r^{k+1}-1}{r-1}$ untuk $n=k+1$',
    ],
  },
  {
    id: 'ind-16',
    topicId: 'induksi-matematika',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Dalam ilmu komputer, sebuah pohon biner penuh dengan tinggi $n$ (tingkat $0$ sampai tingkat $n$) memiliki $N(n) = 2^{n+1} - 1$ simpul. Buktikan dengan induksi matematika bahwa rumus ini benar untuk setiap bilangan bulat $n \\ge 0$.',
    answer:
      'Basis $n=0$: rumus memberi $N(0)=2^{0+1}-1=2-1=1$ simpul, yaitu hanya simpul akar, benar. Hipotesis: andaikan $N(k)=2^{k+1}-1$ untuk suatu $k \\ge 0$. Menambah tingkat ke-$(k+1)$ menambah $2^{k+1}$ simpul baru (karena tiap simpul di tingkat ke-$k$ bercabang dua). Maka $N(k+1)=N(k)+2^{k+1}=(2^{k+1}-1)+2^{k+1}=2 \\cdot 2^{k+1}-1=2^{k+2}-1$, tepat bentuk rumus untuk $n=k+1$. Karena basis dan langkah induksi benar, rumus berlaku untuk semua $n \\ge 0$.',
    explanation:
      'Kunci: memeriksa basis $n=0$, mengasumsikan $N(k)$, menambahkan $2^{k+1}$ simpul pada tingkat baru, lalu menyederhanakan menjadi $2^{k+2}-1$.',
    hints: [
      'Mulai basis dari $n=0$, bukan $n=1$, karena tinggi pohon dimulai dari $0$.',
      'Tingkat baru menambah $2^{k+1}$ simpul; gunakan $2^{k+1}+2^{k+1}=2^{k+2}$.',
    ],
    competencies: ['pembuktian induksi', 'pemodelan', 'kontekstual'],
    rubric: [
      'Memeriksa basis $n=0$: $N(0)=1$',
      'Mengandaikan $N(k)=2^{k+1}-1$',
      'Menambahkan $2^{k+1}$ simpul pada tingkat baru',
      'Memperoleh $N(k+1)=2^{k+2}-1$ sebagai bentuk umum',
      'Menyimpulkan rumus berlaku untuk semua $n\\ge0$',
    ],
  },
  {
    id: 'ind-17',
    topicId: 'induksi-matematika',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'evaluasi',
    prompt:
      'Seorang siswa membuktikan $1+3+5+\\cdots+(2n-1)=n^{2}$ dan pada langkah induksi menulis $1+3+\\cdots+(2k-1)+(2k-1)=k^{2}+(2k-1)=(k+1)^{2}$. Pernyataan yang paling tepat mengenai langkah tersebut adalah …',
    options: [
      { key: 'A', text: 'Benar, karena $k^{2}+2k-1=(k+1)^{2}$' },
      {
        key: 'B',
        text: 'Keliru pada suku yang ditambahkan; suku berikutnya harusnya $2k+1$ sehingga $k^{2}+2k+1=(k+1)^{2}$',
      },
      { key: 'C', text: 'Keliru karena pada langkah induksi tidak perlu menambahkan suku apa pun' },
      { key: 'D', text: 'Benar, karena identitas $(k+1)^{2}=k^{2}+2k-1$ memang selalu berlaku' },
    ],
    answer: 'B',
    explanation:
      'Suku setelah $(2k-1)$ pada barisan bilangan ganjil adalah $2k+1$, bukan $2k-1$. Dengan suku yang benar, $k^{2}+(2k+1)=k^{2}+2k+1=(k+1)^{2}$, sehingga langkah induksi sah. Opsi A dan D salah karena mengklaim identitas keliru $k^{2}+2k-1=(k+1)^{2}$, padahal ruas kanan sebenarnya $k^{2}+2k+1$. Opsi C salah karena langkah induksi memang mengharuskan menambahkan suku berikutnya untuk memperoleh $P(k+1)$.',
    hints: [
      'Tuliskan suku ganjil ke-$(k+1)$ secara eksplisit dari pola $2m-1$.',
      'Periksa kembali identitas kuadrat $(k+1)^{2}=k^{2}+2k+1$.',
    ],
    competencies: ['evaluasi pembuktian', 'langkah induksi'],
  },
];

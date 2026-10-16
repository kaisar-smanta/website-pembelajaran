import type { Question } from '@/types/content';

export const transformasiFungsiQuestions: Question[] = [
  {
    id: 'tf-01',
    topicId: 'transformasi-fungsi',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Jika grafik $y = f(x)$ digeser ke atas sejauh $4$ satuan, rumus grafik barunya adalah …',
    options: [
      { key: 'A', text: '$y = f(x) + 4$' },
      { key: 'B', text: '$y = f(x) - 4$' },
      { key: 'C', text: '$y = f(x+4)$' },
      { key: 'D', text: '$y = f(x-4)$' },
    ],
    answer: 'A',
    explanation:
      'Pergeseran vertikal ke atas sejauh $k$ satuan menambahkan $k$ pada nilai fungsi: $y = f(x) + k$. Karena $k = 4$, rumusnya $y = f(x) + 4$. Opsi B menggeser ke bawah karena mengurangi $4$; opsi C dan D mengubah argumen $f$ sehingga justru pergeseran horizontal, bukan vertikal.',
    hints: [
      'Pergeseran vertikal mengubah nilai fungsi di luar, bukan argumen $x$.',
      'Pergeseran ke atas menambah konstanta: $y = f(x) + 4$.',
    ],
    competencies: ['translasi vertikal'],
  },
  {
    id: 'tf-02',
    topicId: 'transformasi-fungsi',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Grafik $y = x^{2}$ digeser ke kiri sejauh $5$ satuan. Tuliskan rumus grafik barunya.',
    answer: '(x+5)^2',
    acceptedAnswers: ['(x+5)^{2}', 'y=(x+5)^2', 'y=(x+5)^{2}', 'x^2+10x+25'],
    explanation:
      'Geser ke kiri $5$ satuan berarti $h = -5$, sehingga $y = (x - (-5))^{2} = (x+5)^{2}$. Perhatikan tandanya berlawanan dengan arah geser.',
    hints: [
      'Geser ke kiri berarti menambahkan $5$ di dalam tanda kurung.',
      'Rumusnya $y=(x-(-5))^{2}=(x+5)^{2}$.',
    ],
    competencies: ['translasi horizontal'],
  },
  {
    id: 'tf-03',
    topicId: 'transformasi-fungsi',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Tentukan hasil refleksi grafik $y = x^{2}$ terhadap sumbu-$x$.',
    answer: '-x^2',
    acceptedAnswers: ['y=-x^2', '-x^{2}', 'y=-x^{2}'],
    explanation:
      'Refleksi terhadap sumbu-$x$ mengubah tanda nilai fungsi: $y = -f(x) = -x^{2}$.',
    hints: [
      'Pencerminan terhadap sumbu-$x$ memberi tanda negatif di depan fungsi.',
      'Nilai fungsi tiap $x$ berubah tanda, sehingga $y=-x^{2}$.',
    ],
    competencies: ['refleksi terhadap sumbu-$x$'],
  },
  {
    id: 'tf-04',
    topicId: 'transformasi-fungsi',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Diketahui $f(3) = 7$. Tentukan nilai fungsi $y = -f(x)$ pada $x = 3$.',
    answer: '-7',
    explanation:
      'Karena $y = -f(x)$, maka pada $x = 3$ nilainya $-f(3) = -7$. Refleksi terhadap sumbu-$x$ membalik tanda nilai fungsi.',
    hints: [
      'Substitusikan $f(3) = 7$ ke dalam $-f(3)$.',
      'Refleksi terhadap sumbu-$x$ hanya membalik tanda nilai fungsi.',
    ],
    competencies: ['refleksi terhadap sumbu-$x$'],
  },
  {
    id: 'tf-05',
    topicId: 'transformasi-fungsi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Titik puncak grafik $y = (x+1)^{2} - 4$ adalah …',
    options: [
      { key: 'A', text: '$(-1, -4)$' },
      { key: 'B', text: '$(1, -4)$' },
      { key: 'C', text: '$(-1, 4)$' },
      { key: 'D', text: '$(1, 4)$' },
    ],
    answer: 'A',
    explanation:
      'Bentuk $y = (x+1)^{2} - 4$ berasal dari $y = x^{2}$ yang digeser ke kiri $1$ satuan dan ke bawah $4$ satuan. Titik puncak $(0,0)$ berpindah menjadi $(-1, -4)$. Opsi B salah tanda pergeseran horizontal; opsi C salah tanda pergeseran vertikal; opsi D salah tanda pada kedua arah pergeseran.',
    hints: [
      'Tulis $x+1$ sebagai $x - (-1)$ untuk membaca pergeseran horizontal.',
      'Konstanta di luar kuadrat menentukan pergeseran vertikal.',
    ],
    competencies: ['translasi grafik', 'titik puncak'],
  },
  {
    id: 'tf-06',
    topicId: 'transformasi-fungsi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Grafik $y = 2x + 1$ dicerminkan terhadap sumbu-$y$, lalu digeser ke atas sejauh $3$ satuan. Rumus akhirnya adalah …',
    options: [
      { key: 'A', text: '$y = -2x + 4$' },
      { key: 'B', text: '$y = 2x + 4$' },
      { key: 'C', text: '$y = -2x - 2$' },
      { key: 'D', text: '$y = -2x + 1$' },
    ],
    answer: 'A',
    explanation:
      'Refleksi terhadap sumbu-$y$: $y = 2(-x) + 1 = -2x + 1$. Lalu digeser ke atas $3$ satuan: $y = -2x + 1 + 3 = -2x + 4$. Opsi B lupa mencerminkan sehingga tetap $2x$; opsi C salah menghitung $1+3$ menjadi $-2$; opsi D lupa melakukan pergeseran ke atas.',
    hints: [
      'Refleksi sumbu-$y$ mengganti $x$ menjadi $-x$; geser ke atas menambah $3$ pada nilai fungsi.',
      'Kerjakan refleksi lebih dahulu, baru translasi vertikal.',
    ],
    competencies: ['refleksi', 'translasi vertikal'],
  },
  {
    id: 'tf-07',
    topicId: 'transformasi-fungsi',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penerapan',
    prompt:
      'Grafik $y = x^{2}$ melalui titik $(3, 9)$. Tentukan titik padanannya pada grafik $y = f(3x)$ beserta alasan singkatnya.',
    answer:
      'Pada dilatasi horizontal $y = f(3x)$, absis titik dibagi dengan $3$ sedangkan ordinatnya tetap. Titik $(3, 9)$ berpindah menjadi $\\left(\\dfrac{3}{3}, 9\\right) = (1, 9)$. Periksa: $f(3 \\cdot 1) = f(3) = 9$, sesuai.',
    explanation:
      'Kunci menekankan aturan perubahan titik $(a, b) \\to \\left(\\tfrac{a}{k}, b\\right)$ untuk dilatasi horizontal $y = f(kx)$ dengan $k = 3$.',
    hints: [
      'Dilatasi horizontal $f(kx)$ membagi absis dengan $k$, ordinat tetap.',
      'Gunakan aturan $(a, b) \\to \\left(\\dfrac{a}{k}, b\\right)$ dengan $k = 3$.',
    ],
    competencies: ['dilatasi horizontal'],
    rubric: [
      'Menuliskan aturan $(a,b)\\to\\left(\\dfrac{a}{k},b\\right)$ untuk $y=f(kx)$',
      'Membagi absis $3$ dengan faktor $3$',
      'Menyimpulkan titik padanan $(1,9)$',
      'Memeriksa dengan $f(3\\cdot1)=9$',
    ],
  },
  {
    id: 'tf-08',
    topicId: 'transformasi-fungsi',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Jelaskan mengapa urutan transformasi berpengaruh. Gunakan contoh $f(x) = x^{2}$ dengan meregangkan vertikal faktor $2$ dan menggeser ke atas $3$ satuan.',
    answer:
      'Jika grafik meregang vertikal faktor $2$ lebih dahulu, diperoleh $y = 2x^{2}$, lalu digeser ke atas $3$ satuan menjadi $y = 2x^{2} + 3$. Jika urutannya dibalik, digeser ke atas $3$ satuan dahulu menjadi $y = x^{2} + 3$, lalu diregangkan vertikal faktor $2$ menghasilkan $y = 2(x^{2} + 3) = 2x^{2} + 6$. Hasil $2x^{2}+3$ dan $2x^{2}+6$ berbeda untuk setiap $x$, jadi urutan transformasi memengaruhi rumus akhir.',
    explanation:
      'Kunci menekankan bahwa peregangan vertikal mengalikan seluruh nilai fungsi, sehingga elemen yang sudah digeser ikut dikalikan bila urutannya berbeda.',
    hints: [
      'Bandingkan $2x^{2}+3$ dengan $2(x^{2}+3)$ lalu jabarkan keduanya.',
      'Peregangan vertikal mengalikan seluruh nilai fungsi, termasuk bagian yang sudah bergeser.',
    ],
    competencies: ['urutan transformasi', 'penalaran'],
    rubric: [
      'Menerapkan regang vertikal $2$ lalu geser $3$ menjadi $2x^{2}+3$',
      'Menerapkan urutan sebaliknya menjadi $2(x^{2}+3)=2x^{2}+6$',
      'Menunjukkan kedua hasil berbeda untuk setiap $x$',
      'Menyimpulkan urutan transformasi memengaruhi rumus akhir',
    ],
  },
  {
    id: 'tf-09',
    topicId: 'transformasi-fungsi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Grafik $y = x^{2}$ digeser ke kanan $3$ satuan, lalu diregangkan horizontal dengan $g(x) = f\\!\\left(\\dfrac{x}{2}\\right)$. Rumus $g(x)$ adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{(x-6)^{2}}{4}$' },
      { key: 'B', text: '$\\dfrac{(x-6)^{2}}{2}$' },
      { key: 'C', text: '$(x-6)^{2}$' },
      { key: 'D', text: '$\\dfrac{(x+6)^{2}}{4}$' },
    ],
    answer: 'A',
    explanation:
      'Setelah digeser ke kanan $3$ satuan diperoleh $y = (x-3)^{2}$. Mengganti $x$ dengan $\\dfrac{x}{2}$ memberi $g(x) = \\left(\\dfrac{x}{2} - 3\\right)^{2} = \\left(\\dfrac{x - 6}{2}\\right)^{2} = \\dfrac{(x-6)^{2}}{4}$. Opsi B salah menyederhanakan penyebut menjadi $2$; opsi C lupa menguadratkan faktor $\\dfrac{1}{2}$; opsi D salah arah pergeseran sehingga muncul $x+6$.',
    hints: [
      'Substitusikan $\\dfrac{x}{2}$ ke setiap kemunculan $x$ pada $(x-3)^{2}$.',
      'Samakan penyebut $\\dfrac{x}{2} - 3 = \\dfrac{x-6}{2}$ sebelum menguadratkan.',
    ],
    competencies: ['dilatasi horizontal', 'komposisi transformasi'],
  },
  {
    id: 'tf-10',
    topicId: 'transformasi-fungsi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Lintasan sebuah bola dimodelkan $h(t) = a(t-p)^{2} + q$ dengan titik puncak $(2, 5)$ dan melalui titik $(0, 1)$. Tentukan nilai $a$, $p$, dan $q$, lalu tuliskan rumus lengkapnya.',
    answer:
      'Dari puncak $(p, q) = (2, 5)$ diperoleh $p = 2$ dan $q = 5$, sehingga $h(t) = a(t-2)^{2} + 5$. Substitusi titik $(0, 1)$: $a(0-2)^{2} + 5 = 1 \\Rightarrow 4a = -4 \\Rightarrow a = -1$. Jadi $h(t) = -(t-2)^{2} + 5$. Periksa: $h(2) = 5$ dan $h(0) = -(0-2)^{2} + 5 = -4 + 5 = 1$, benar.',
    explanation:
      'Kunci menekankan pembacaan parameter puncak dari bentuk $a(t-p)^{2}+q$ dan penentuan $a$ melalui substitusi satu titik yang dilalui.',
    hints: [
      'Bentuk puncak $a(t-p)^{2}+q$ memiliki puncak $(p, q)$; gunakan titik lain untuk mencari $a$.',
      'Substitusikan $(0,1)$ ke $h(t)=a(t-2)^{2}+5$ untuk memperoleh $a$.',
    ],
    competencies: ['pemodelan transformasi', 'bentuk puncak'],
    rubric: [
      'Membaca $p=2$ dan $q=5$ dari titik puncak',
      'Menyusun $h(t)=a(t-2)^{2}+5$',
      'Memakai titik $(0,1)$ untuk memperoleh $a=-1$',
      'Menuliskan rumus lengkap dan memeriksanya',
    ],
  },
  {
    id: 'tf-11',
    topicId: 'transformasi-fungsi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Diberikan grafik $y=x^{2}$. (a) Tuliskan rumus grafik setelah dicerminkan terhadap sumbu-$x$, lalu digeser ke atas $2$ satuan. (b) Tentukan titik puncak grafik hasilnya. (c) Jelaskan apakah hasilnya sama jika translasi dilakukan lebih dahulu, baru dicerminkan.',
    answer:
      '(a) Refleksi terhadap sumbu-$x$ memberi $y=-x^{2}$, lalu digeser ke atas $2$ satuan menjadi $y=-x^{2}+2$. (b) Grafik membuka ke bawah dengan puncak di $(0,2)$. (c) Jika urutan dibalik, digeser dahulu menjadi $y=x^{2}+2$, lalu dicerminkan menjadi $y=-(x^{2}+2)=-x^{2}-2$ dengan puncak $(0,-2)$. Jadi hasilnya berbeda; urutan transformasi memengaruhi rumus akhir.',
    explanation:
      'Kunci: menerapkan refleksi dan translasi sesuai urutan, membaca puncak, lalu membandingkan hasil saat urutan dibalik.',
    hints: ['Refleksi sumbu-$x$ mengubah tanda seluruh fungsi.', 'Geser ke atas menambah konstanta di luar fungsi.'],
    competencies: ['refleksi', 'translasi', 'evaluasi'],
    rubric: [
      'Menuliskan $y=-x^{2}+2$ dari refleksi lalu translasi',
      'Menentukan titik puncak $(0,2)$',
      'Membandingkan dengan urutan dibalik $y=-x^{2}-2$',
      'Menyimpulkan urutan transformasi mengubah hasil',
    ],
  },
  {
    id: 'tf-12',
    topicId: 'transformasi-fungsi',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Grafik emisi harian sebuah pabrik (dalam ton) terhadap tingkat produksi dimodelkan $y=f(x)$. Grafik itu digeser $2$ satuan ke kanan dan $3$ satuan ke bawah. (a) Tuliskan rumus transformasinya. (b) Jika titik $(4,5)$ terletak pada grafik awal, tentukan titik padanannya pada grafik baru. (c) Jelaskan arti pergeseran itu dalam konteks emisi.',
    answer:
      '(a) Geser ke kanan $2$ dan ke bawah $3$ memberi $y=f(x-2)-3$. (b) Titik $(4,5)$ berpindah menjadi $(4+2,\\,5-3)=(6,2)$. (c) Pergeseran ke kanan menunda tercapainya tingkat emisi tertentu (baru terjadi pada tingkat produksi yang lebih besar), sedangkan pergeseran ke bawah menurunkan tingkat emisi secara keseluruhan, misalnya karena teknologi yang lebih bersih atau penggunaan bahan bakar yang lebih efisien.',
    explanation:
      'Kunci: menulis transformasi $f(x-h)+k$, memindahkan titik dengan aturan $(a,b)\\to(a+h,b+k)$, lalu menafsirkan pergeseran secara kontekstual.',
    hints: [
      'Geser ke kanan berarti $x$ diganti $x-2$.',
      'Geser ke bawah mengurangi nilai fungsi dengan $3$.',
    ],
    competencies: ['translasi grafik', 'kontekstual', 'interpretasi'],
    rubric: [
      'Menuliskan rumus transformasi $y=f(x-2)-3$',
      'Memetakan titik $(4,5)$ menjadi $(6,2)$',
      'Menafsirkan geser kanan sebagai penundaan tingkat emisi',
      'Menafsirkan geser bawah sebagai penurunan tingkat emisi',
    ],
  },
  {
    id: 'tf-13',
    topicId: 'transformasi-fungsi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Lengkung sebuah jembatan dimodelkan $y=a(x-h)^{2}+k$. Tinggi maksimumnya $12$ m terjadi di tengah bentang selebar $40$ m, dan kedua ujung lengkung menyentuh permukaan jalan ($y=0$) pada $x=0$ dan $x=40$. (a) Tentukan $h$ dan $k$ dari titik puncak. (b) Tentukan $a$ menggunakan salah satu ujung, lalu tulis rumus lengkapnya. (c) Hitung tinggi lengkung pada jarak $10$ m dari tepi kiri.',
    answer:
      '(a) Titik tertinggi berada di tengah, yaitu $(h,k)=(20,12)$. (b) Substitusi ujung $(0,0)$: $a(0-20)^{2}+12=0 \\Rightarrow 400a=-12 \\Rightarrow a=-0{,}03$. Jadi $y=-0{,}03(x-20)^{2}+12$. Periksa ujung kanan: $-0{,}03(40-20)^{2}+12=-0{,}03(400)+12=0$, benar. (c) Untuk $x=10$: $y=-0{,}03(10-20)^{2}+12=-0{,}03(100)+12=-3+12=9$ m.',
    explanation:
      'Kunci: membaca parameter puncak dari bentuk $a(x-h)^{2}+k$, menentukan $a$ dari satu titik pada lengkung, lalu mengevaluasi tinggi.',
    hints: [
      'Puncak lengkung berada di tengah bentang, yaitu $x=20$.',
      'Gunakan titik ujung $(0,0)$ untuk mencari $a$.',
    ],
    competencies: ['pemodelan transformasi', 'bentuk puncak'],
    rubric: [
      'Menentukan titik puncak $(20,12)$ dari tengah bentang',
      'Memakai ujung $(0,0)$ untuk memperoleh $a=-0{,}03$',
      'Menuliskan rumus $y=-0{,}03(x-20)^{2}+12$',
      'Menghitung tinggi pada $x=10$ sebesar $9$ m',
    ],
  },
  {
    id: 'tf-14',
    topicId: 'transformasi-fungsi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Diberikan grafik $y=f(x)$. Tiga transformasi diterapkan berurutan: (i) refleksi terhadap sumbu-$y$, (ii) digeser ke kanan $2$ satuan, (iii) diregangkan vertikal dengan faktor $3$. (a) Tentukan rumus akhirnya. (b) Bandingkan dengan urutan yang dibalik (regang vertikal, lalu geser ke kanan, lalu refleksi sumbu-$y$) dan jelaskan perbedaannya. (c) Tunjukkan perbedaan itu dengan $f(x)=x^{2}$.',
    answer:
      '(a) Mulai dari $y=f(x)$. Refleksi sumbu-$y$: $y=f(-x)$. Geser ke kanan $2$: ganti $x$ dengan $x-2$, menjadi $y=f(-(x-2))=f(2-x)$. Regang vertikal faktor $3$: $y=3f(2-x)$. (b) Urutan dibalik: regang vertikal memberi $y=3f(x)$, geser ke kanan $2$ memberi $y=3f(x-2)$, lalu refleksi sumbu-$y$ mengganti $x$ dengan $-x$ sehingga $y=3f(-x-2)$. Jadi hasilnya $3f(2-x)$ versus $3f(-x-2)$; karena $2-x\\neq-x-2$ secara umum, keduanya berbeda. (c) Dengan $f(x)=x^{2}$: urutan pertama memberi $3(2-x)^{2}=3(x-2)^{2}$ yang puncaknya di $x=2$, sedangkan urutan kedua memberi $3(-x-2)^{2}=3(x+2)^{2}$ yang puncaknya di $x=-2$. Kedua grafik kongruen tetapi bergeser ke arah berlawanan, membuktikan urutan transformasi memengaruhi hasil.',
    explanation:
      'Kunci: menerapkan tiap transformasi pada rumus secara berurutan, membandingkan hasil saat urutan dibalik, dan mengonfirmasi perbedaan melalui contoh konkret.',
    hints: [
      'Refleksi sumbu-$y$ mengganti setiap $x$ dengan $-x$; peregangan vertikal mengalikan seluruh nilai fungsi.',
      'Bandingkan letak titik puncak kedua hasil dengan $f(x)=x^{2}$.',
    ],
    competencies: ['komposisi transformasi', 'urutan transformasi', 'penalaran'],
    rubric: [
      'Menuliskan hasil urutan awal $y=3f(2-x)$',
      'Menuliskan hasil urutan dibalik $y=3f(-x-2)$',
      'Menguji perbedaan dengan $f(x)=x^{2}$',
      'Menyimpulkan urutan transformasi memengaruhi hasil',
    ],
  },
  {
    id: 'tf-15',
    topicId: 'transformasi-fungsi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Biaya produksi $x$ unit (dalam ribu rupiah) dimodelkan $y=x^{2}$. Karena terjadi efisiensi, grafik biaya digeser $1$ satuan ke kanan dan $4$ satuan ke bawah. Jika titik $(3,9)$ berada pada grafik awal, titik padanannya pada grafik baru adalah …',
    options: [
      { key: 'A', text: '$(4,5)$' },
      { key: 'B', text: '$(2,5)$' },
      { key: 'C', text: '$(4,13)$' },
      { key: 'D', text: '$(2,13)$' },
    ],
    answer: 'A',
    explanation:
      'Geser ke kanan $1$ satuan menambah absis dan geser ke bawah $4$ satuan mengurangi ordinat, sehingga $(3,9)\\to(3+1,\\,9-4)=(4,5)$. Rumus barunya $y=(x-1)^{2}-4$; periksa $x=4$: $(4-1)^{2}-4=9-4=5$. Opsi B menggeser ke kiri; opsi C menggeser ke atas; opsi D salah arah pada kedua sumbu sekaligus.',
    hints: [
      'Geser ke kanan berarti $(a,b)\\to(a+1,b)$ dan geser ke bawah $(a,b)\\to(a,b-4)$.',
      'Terapkan kedua pergeseran pada titik $(3,9)$ sekaligus.',
    ],
    competencies: ['translasi grafik', 'kontekstual'],
  },
  {
    id: 'tf-16',
    topicId: 'transformasi-fungsi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Perhatikan gambar. Grafik putus-putus adalah $y=x^{2}$ dan grafik penuh adalah hasil pergeserannya. Rumus grafik penuh adalah …',
    figure: {
      svg: '<svg viewBox="0 0 320 220" aria-hidden="true" role="presentation"><line x1="55" y1="120" x2="300" y2="120" stroke="currentColor" stroke-width="1.2"/><line x1="175" y1="20" x2="175" y2="200" stroke="currentColor" stroke-width="1.2"/><polyline points="125,40 137,75 150,100 162,115 175,120 187,115 200,100 212,75 225,40" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4" opacity="0.6"/><polyline points="175,100 187,135 200,160 212,175 225,180 237,175 250,160 262,135 275,100 287,75 300,40" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="225" cy="180" r="3" fill="currentColor"/><text x="292" y="136" font-size="11" fill="currentColor">x</text><text x="179" y="28" font-size="11" fill="currentColor">y</text></svg>',
      alt: 'Bidang koordinat dengan parabola putus-putus y sama dengan x kuadrat dan parabola penuh yang titik puncaknya berada di (2, -3).',
      caption: 'Grafik putus-putus $y=x^{2}$; grafik penuh hasil pergeseran dengan puncak di $(2,-3)$.',
    },
    options: [
      { key: 'A', text: '$y = (x-2)^{2} - 3$' },
      { key: 'B', text: '$y = (x+2)^{2} - 3$' },
      { key: 'C', text: '$y = (x-2)^{2} + 3$' },
      { key: 'D', text: '$y = (x-3)^{2} - 2$' },
    ],
    answer: 'A',
    explanation:
      'Puncak $y=x^{2}$ di $(0,0)$ berpindah ke $(2,-3)$, yaitu $2$ satuan ke kanan dan $3$ satuan ke bawah, sehingga rumusnya $y=(x-2)^{2}-3$. Opsi B salah arah horizontal karena memberi $x+2$; opsi C salah arah vertikal karena memberi $+3$; opsi D menukar peran kedua pergeseran sehingga memperoleh $(x-3)^{2}-2$.',
    hints: [
      'Baca koordinat titik puncak grafik penuh pada gambar.',
      'Bentuk $y=(x-h)^{2}+k$ memiliki puncak $(h,k)$.',
    ],
    competencies: ['translasi grafik', 'membaca grafik'],
  },
];

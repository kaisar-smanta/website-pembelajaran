import type { Question } from '@/types/content';

export const sistemPertidaksamaanQuestions: Question[] = [
  {
    id: 'spt-01',
    topicId: 'sistem-pertidaksamaan',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Titik potong garis $2x + 3y = 12$ dengan sumbu-$y$ adalah …',
    options: [
      { key: 'A', text: '$(0,4)$' },
      { key: 'B', text: '$(4,0)$' },
      { key: 'C', text: '$(0,6)$' },
      { key: 'D', text: '$(6,0)$' },
    ],
    answer: 'A',
    explanation:
      'Titik potong dengan sumbu-$y$ terjadi saat $x=0$. Substitusi: $2(0)+3y=12 \\Rightarrow 3y=12 \\Rightarrow y=4$, jadi titiknya $(0,4)$. Opsi B $(4,0)$ dan opsi D $(6,0)$ justru titik potong dengan sumbu-$x$ (saat $y=0$). Opsi C $(0,6)$ muncul bila $12$ keliru dibagi koefisien $x$, yaitu $2$.',
    hints: ['Substitusikan $x = 0$ untuk mencari titik potong sumbu-$y$.'],
    competencies: ['titik potong garis', 'garis pembatas'],
  },
  {
    id: 'spt-02',
    topicId: 'sistem-pertidaksamaan',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Titik manakah yang memenuhi pertidaksamaan $x - y \\le 2$?',
    options: [
      { key: 'A', text: '$(0,0)$' },
      { key: 'B', text: '$(3,0)$' },
      { key: 'C', text: '$(0,-3)$' },
      { key: 'D', text: '$(4,1)$' },
    ],
    answer: 'A',
    explanation:
      'Uji tiap titik. $(0,0)$: $0 - 0 = 0 \\le 2$ benar. $(3,0)$: $3 \\le 2$ salah. $(0,-3)$: $0 - (-3) = 3 \\le 2$ salah. $(4,1)$: $3 \\le 2$ salah. Hanya $(0,0)$ yang memenuhi.',
    hints: ['Substitusikan setiap pasangan $(x,y)$ ke pertidaksamaan.'],
    competencies: ['titik uji', 'pertidaksamaan linear'],
  },
  {
    id: 'spt-03',
    topicId: 'sistem-pertidaksamaan',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Diketahui garis $x + 2y = 8$. Tentukan nilai $y$ ketika $x = 0$.',
    answer: '4',
    acceptedAnswers: ['4'],
    explanation: 'Substitusi $x = 0$: $0 + 2y = 8 \\Rightarrow y = 4$.',
    hints: ['Masukkan $x = 0$ lalu selesaikan untuk $y$.'],
    competencies: ['titik potong garis'],
  },
  {
    id: 'spt-04',
    topicId: 'sistem-pertidaksamaan',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Daerah penyelesaian $x + y \\ge 4$ memuat titik …',
    options: [
      { key: 'A', text: '$(0,0)$' },
      { key: 'B', text: '$(1,1)$' },
      { key: 'C', text: '$(3,2)$' },
      { key: 'D', text: '$(2,1)$' },
    ],
    answer: 'C',
    explanation:
      'Uji tiap titik. $(0,0)$: $0 \\ge 4$ salah. $(1,1)$: $2 \\ge 4$ salah. $(3,2)$: $5 \\ge 4$ benar. $(2,1)$: $3 \\ge 4$ salah. Jadi titik $(3,2)$ berada di daerah penyelesaian.',
    hints: ['Tanda $\\ge$ berarti jumlah $x + y$ harus minimal sama dengan $4$.'],
    competencies: ['daerah penyelesaian', 'titik uji'],
  },
  {
    id: 'spt-05',
    topicId: 'sistem-pertidaksamaan',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Nilai maksimum fungsi $f = 3x + 2y$ pada kendala $x + y \\le 8$, $2x + y \\le 12$, $x \\ge 0$, dan $y \\ge 0$ adalah …',
    options: [
      { key: 'A', text: '$16$' },
      { key: 'B', text: '$18$' },
      { key: 'C', text: '$20$' },
      { key: 'D', text: '$24$' },
    ],
    answer: 'C',
    explanation:
      'Titik sudut daerah penyelesaian: $(0,0)$, $(6,0)$, $(4,4)$, dan $(0,8)$. Nilai $f=3x+2y$: $(0,0)=0$, $(6,0)=18$, $(4,4)=20$, dan $(0,8)=16$. Nilai maksimum $20$ di titik $(4,4)$. Opsi A ($16$) berasal dari titik $(0,8)$, opsi B ($18$) dari titik $(6,0)$, dan opsi D ($24$) dari keliru menjumlahkan kedua nilai terbesar itu.',
    hints: ['Cari titik potong $x + y = 8$ dan $2x + y = 12$.', 'Uji fungsi objektif pada setiap titik sudut.'],
    competencies: ['program linear', 'nilai maksimum'],
  },
  {
    id: 'spt-06',
    topicId: 'sistem-pertidaksamaan',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Tentukan nilai maksimum $f = 2x + 3y$ dengan kendala $x + y \\le 5$, $x + 2y \\le 8$, $x \\ge 0$, dan $y \\ge 0$.',
    answer: '13',
    acceptedAnswers: ['13'],
    explanation:
      'Titik sudut: $(0,0)$, $(5,0)$, $(2,3)$, dan $(0,4)$. Nilai $f$: $0$, $10$, $13$, dan $12$. Jadi nilai maksimumnya $13$ di titik $(2,3)$.',
    hints: ['Titik potong kedua garis adalah $(2,3)$.', 'Bandingkan nilai $f$ di semua titik sudut.'],
    competencies: ['program linear', 'nilai maksimum'],
  },
  {
    id: 'spt-07',
    topicId: 'sistem-pertidaksamaan',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Titik-titik sudut daerah penyelesaian sistem $x + y \\le 4$, $x + 2y \\le 6$, $x \\ge 0$, dan $y \\ge 0$ adalah …',
    options: [
      { key: 'A', text: '$(0,0)$, $(4,0)$, $(2,2)$, $(0,3)$' },
      { key: 'B', text: '$(0,0)$, $(6,0)$, $(2,2)$, $(0,4)$' },
      { key: 'C', text: '$(0,0)$, $(4,0)$, $(0,4)$' },
      { key: 'D', text: '$(0,0)$, $(3,0)$, $(2,2)$, $(0,6)$' },
    ],
    answer: 'A',
    explanation:
      'Garis $x + y = 4$ memotong sumbu di $(4,0)$ dan $(0,4)$, sedangkan $x + 2y = 6$ di $(6,0)$ dan $(0,3)$. Titik potong keduanya: $x + y = 4$ dan $x + 2y = 6$ memberi $y = 2$ dan $x = 2$, yaitu $(2,2)$. Titik $(0,4)$ dan $(6,0)$ tidak memenuhi pertidaksamaan yang lain, sehingga titik sudutnya $(0,0)$, $(4,0)$, $(2,2)$, dan $(0,3)$. Opsi B memakai $(6,0)$ dan $(0,4)$ yang tidak layak. Opsi C menghilangkan titik $(2,2)$ sehingga hanya tiga titik. Opsi D memakai $(3,0)$ dan $(0,6)$ yang bukan titik sudut atau tidak layak.',
    hints: [
      'Periksa setiap titik potong pada kedua pertidaksamaan.',
      'Titik yang tidak memenuhi salah satu pertidaksamaan bukan titik sudut daerah penyelesaian.',
    ],
    competencies: ['titik sudut', 'daerah penyelesaian'],
  },
  {
    id: 'spt-08',
    topicId: 'sistem-pertidaksamaan',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah toko kue membuat dua jenis kue. Kue A memerlukan $2$ ons tepung dan $1$ ons gula dengan laba Rp3.000, sedangkan kue B memerlukan $1$ ons tepung dan $2$ ons gula dengan laba Rp4.000. Tersedia $8$ ons tepung dan $10$ ons gula. Tentukan model kendala, fungsi objektif, dan laba maksimum beserta langkahnya.',
    answer:
      'Misal $x$ banyak kue A dan $y$ banyak kue B. Kendala: $2x + y \\le 8$ (tepung), $x + 2y \\le 10$ (gula), $x \\ge 0$, $y \\ge 0$. Fungsi objektif: $f = 3000x + 4000y$. Titik sudut: $(0,0)$, $(4,0)$, $(2,4)$, dan $(0,5)$. Nilai $f$: $0$, $12000$, $22000$, dan $20000$. Laba maksimum Rp22.000 dicapai dengan membuat $2$ kue A dan $4$ kue B.',
    explanation:
      'Kunci jawaban: menyusun dua kendala dari bahan, menambahkan syarat tak negatif, menulis fungsi objektif dari laba, lalu menguji semua titik sudut.',
    hints: [
      'Koefisien tiap pertidaksamaan berasal dari kebutuhan bahan tiap kue.',
      'Laba tiap kue menjadi koefisien fungsi objektif.',
    ],
    competencies: ['pemodelan program linear', 'nilai maksimum'],
    rubric: [
      'Menyusun kendala bahan dan syarat tak negatif',
      'Menuliskan fungsi objektif laba',
      'Menentukan titik sudut daerah penyelesaian',
      'Memperoleh laba maksimum yang tepat',
    ],
  },
  {
    id: 'spt-09',
    topicId: 'sistem-pertidaksamaan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Tentukan nilai maksimum $f = 5x + 4y$ dengan kendala $2x + y \\le 10$, $x + 3y \\le 15$, $x \\ge 0$, dan $y \\ge 0$. Uraikan langkah penentuan titik sudut dan pemeriksaan nilainya.',
    answer:
      'Titik potong sumbu: $2x + y = 10$ memotong di $(5,0)$ dan $(0,10)$; $x + 3y = 15$ memotong di $(15,0)$ dan $(0,5)$. Titik potong kedua garis: dari $y = 10 - 2x$ dan $x + 3y = 15$ diperoleh $x + 30 - 6x = 15$, sehingga $x = 3$ dan $y = 4$, yaitu $(3,4)$. Titik sudut daerah penyelesaian: $(0,0)$, $(5,0)$, $(3,4)$, dan $(0,5)$. Nilai $f$: $(0,0)=0$, $(5,0)=25$, $(3,4)=31$, dan $(0,5)=20$. Nilai maksimum $31$ di titik $(3,4)$.',
    explanation:
      'Kunci jawaban: menentukan titik potong antargaris, menyaring titik sudut yang layak, lalu membandingkan nilai fungsi objektif.',
    hints: [
      'Titik potong kedua garis bukan berupa bilangan bulat jika salah menghitung; periksa dengan substitusi.',
      'Titik $(15,0)$ dan $(0,10)$ bukan titik sudut daerah penyelesaian.',
    ],
    competencies: ['program linear', 'penalaran', 'nilai maksimum'],
    rubric: [
      'Menentukan titik potong tiap garis',
      'Menyaring titik sudut yang layak',
      'Menguji fungsi objektif di tiap titik sudut',
      'Menyimpulkan nilai maksimum',
    ],
  },
  {
    id: 'spt-10',
    topicId: 'sistem-pertidaksamaan',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Suatu daerah penyelesaian memiliki titik sudut $(0,0)$, $(4,0)$, $(2,3)$, dan $(0,2)$. Nilai maksimum $f = 6x + 5y$ pada daerah itu adalah …',
    options: [
      { key: 'A', text: '$24$' },
      { key: 'B', text: '$27$' },
      { key: 'C', text: '$10$' },
      { key: 'D', text: '$0$' },
    ],
    answer: 'B',
    explanation:
      'Nilai $f$ di tiap titik sudut: $(0,0)=0$, $(4,0)=24$, $(2,3)=12+15=27$, dan $(0,2)=10$. Nilai terbesar adalah $27$ di titik $(2,3)$. Opsi $24$ dan $10$ berasal dari titik sudut lain, sedangkan $0$ berasal dari memakai titik asal yang bukan titik optimum.',
    hints: [
      'Substitusikan setiap titik sudut ke fungsi objektif.',
      'Nilai terbesar muncul di titik sudut yang paling jauh searah fungsi objektif.',
    ],
    competencies: ['nilai maksimum', 'titik sudut'],
  },
  {
    id: 'spt-11',
    topicId: 'sistem-pertidaksamaan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Jelaskan mengapa nilai optimum fungsi objektif linear pada program linear selalu dapat ditemukan dengan memeriksa titik-titik sudut daerah penyelesaian.',
    answer:
      'Fungsi objektif linear, misalnya $f = ax + by$, bernilai konstan pada setiap garis sejajar berbentuk $ax + by = k$. Ketika nilai $k$ diubah, garis tersebut bergeser; nilai optimum dicapai ketika garis sejajar itu menyentuh daerah penyelesaian paling jauh dari titik asal. Sentuhan terakhir selalu terjadi di ujung daerah, yaitu titik sudut. Di sepanjang satu sisi daerah, nilai fungsi berubah secara linear, sehingga nilai terbesar atau terkecil pasti muncul di salah satu ujung sisi. Karena itu memeriksa semua titik sudut sudah cukup untuk menemukan nilai optimum.',
    explanation:
      'Kunci jawaban: menghubungkan sifat linear fungsi objektif dengan posisi garis sejajar dan munculnya nilai ekstrem di titik sudut.',
    hints: [
      'Bayangkan garis $f = k$ bergeser sejajar hingga menyentuh daerah penyelesaian.',
      'Pada setiap sisi daerah, nilai fungsi berubah linear sehingga ujung-ujung sisinya menentukan nilai ekstrem.',
    ],
    competencies: ['penalaran', 'program linear', 'titik sudut'],
    rubric: [
      'Mengaitkan garis $f=k$ dengan nilai fungsi konstan',
      'Menjelaskan pergeseran garis sejajar',
      'Menyimpulkan optimum terjadi di titik sudut',
      'Menjelaskan perilaku nilai di sepanjang satu sisi',
    ],
  },
  {
    id: 'spt-12',
    topicId: 'sistem-pertidaksamaan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Sebuah penyedia layanan komputasi menyewa dua jenis server. Server A menyediakan $1$ inti CPU dan $2$ GB RAM dengan biaya Rp3 ribu per jam, sedangkan server B menyediakan $1$ inti CPU dan $1$ GB RAM dengan biaya Rp2 ribu per jam. Layanan harus memenuhi kebutuhan minimal $5$ inti CPU dan $8$ GB RAM. (a) Susun model kendala dengan $a$ server A dan $b$ server B. (b) Tentukan kombinasi server yang berbiaya minimum beserta biayanya.',
    answer:
      '(a) Kendala: $a+b\\ge5$ (CPU), $2a+b\\ge8$ (RAM), serta $a\\ge0$ dan $b\\ge0$. (b) Titik sudut daerah penyelesaian: $(5,0)$ dari $a+b=5$ dengan $b=0$; $(3,2)$ dari titik potong $a+b=5$ dan $2a+b=8$; serta $(0,8)$ dari $2a+b=8$ dengan $a=0$. Fungsi biaya $B=3a+2b$ (dalam ribu rupiah). Nilainya: $(5,0)=15$, $(3,2)=9+4=13$, dan $(0,8)=16$. Jadi biaya minimum Rp13 ribu per jam dicapai dengan menyewa $3$ server A dan $2$ server B.',
    explanation:
      'Kunci: menerjemahkan dua kebutuhan minimum menjadi pertidaksamaan bertanda $\\ge$, menyaring titik sudut yang layak, lalu mencari nilai minimum fungsi biaya.',
    hints: [
      'Kebutuhan "minimal" menghasilkan pertidaksamaan bertanda $\\ge$.',
      'Cari titik potong $a+b=5$ dan $2a+b=8$ dengan eliminasi.',
      'Bandingkan nilai $B=3a+2b$ di setiap titik sudut untuk memilih yang terkecil.',
    ],
    competencies: ['program linear', 'optimasi', 'evaluasi'],
    rubric: [
      'Menyusun kendala kebutuhan minimum',
      'Menentukan titik potong antargaris',
      'Menguji fungsi biaya di tiap titik sudut',
      'Memberikan kombinasi berbiaya minimum',
    ],
  },
  {
    id: 'spt-13',
    topicId: 'sistem-pertidaksamaan',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Seorang petani memiliki $10$ hektar lahan dan modal Rp70 juta. Ia ingin menanam jagung (biaya Rp5 juta per hektar, laba Rp8 juta per hektar) dan padi (biaya Rp8 juta per hektar, laba Rp12 juta per hektar). (a) Susun model kendala dengan $x$ hektar jagung dan $y$ hektar padi. (b) Tuliskan fungsi objektif laba. (c) Sebutkan dua kendala nyata lain yang mungkin muncul.',
    answer:
      '(a) Kendala: $x+y\\leq10$ (lahan), $5x+8y\\leq70$ (modal, dalam juta rupiah), serta $x\\geq0$ dan $y\\geq0$. (b) Fungsi objektif laba $L=8x+12y$ juta rupiah. (c) Kendala nyata lain misalnya ketersediaan air/irigasi, jumlah tenaga kerja, waktu tanam, atau harga jual yang berubah.',
    explanation:
      'Kunci: menerjemahkan batas lahan, modal, dan syarat tak negatif menjadi pertidaksamaan, menulis fungsi objektif, serta mengenali faktor luar model.',
    hints: ['Satu kendala untuk lahan dan satu untuk modal.', 'Laba tiap komoditas menjadi koefisien fungsi objektif.'],
    competencies: ['pemodelan program linear', 'kontekstual'],
    rubric: [
      'Menyusun kendala lahan dan modal',
      'Menuliskan fungsi objektif laba',
      'Menyertakan syarat tak negatif',
      'Menyebut kendala nyata lain yang relevan',
    ],
  },
  {
    id: 'spt-14',
    topicId: 'sistem-pertidaksamaan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah bengkel kerajinan membuat dua jenis produk. Produk A memerlukan $2$ jam pengecatan dan $1$ jam perakitan, sedangkan produk B memerlukan $1$ jam pengecatan dan $2$ jam perakitan. Waktu yang tersedia $12$ jam untuk pengecatan dan $12$ jam untuk perakitan. Laba produk A Rp50.000 per unit dan produk B Rp60.000 per unit. (a) Susun model kendala dan fungsi objektifnya. (b) Tentukan kombinasi produksi yang memberi laba maksimum beserta nilainya.',
    answer:
      'Misal $x$ banyak produk A dan $y$ banyak produk B. Kendala: $2x+y\\le12$ (pengecatan), $x+2y\\le12$ (perakitan), $x\\ge0$, dan $y\\ge0$. Fungsi objektif $L=50000x+60000y$. Titik sudut: $(0,0)$, $(6,0)$, $(4,4)$, dan $(0,6)$. Nilai $L$: $0$, $300000$, $440000$, dan $360000$. Laba maksimum Rp440.000 dicapai dengan memproduksi $4$ unit produk A dan $4$ unit produk B.',
    explanation:
      'Kunci: menerjemahkan kebutuhan jam tiap produk menjadi dua kendala, menambahkan syarat tak negatif, menulis laba sebagai fungsi objektif, lalu menguji semua titik sudut daerah penyelesaian.',
    hints: [
      'Koefisien tiap pertidaksamaan berasal dari kebutuhan jam tiap produk.',
      'Titik potong $2x+y=12$ dan $x+2y=12$ adalah $(4,4)$.',
      'Uji nilai $L$ di setiap titik sudut.',
    ],
    competencies: ['pemodelan program linear', 'nilai maksimum', 'optimasi'],
    rubric: [
      'Menyusun dua kendala dari kebutuhan jam',
      'Menuliskan fungsi objektif laba',
      'Menentukan titik sudut dan mengujinya',
      'Memberikan kombinasi produksi optimum',
    ],
  },
  {
    id: 'spt-15',
    topicId: 'sistem-pertidaksamaan',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Daerah penyelesaian sistem $x+y\\ge6$, $x+2y\\ge8$, $x\\ge0$, dan $y\\ge0$ tidak terbatas. Nilai minimum fungsi $f=3x+2y$ pada daerah itu adalah …',
    options: [
      { key: 'A', text: '$12$' },
      { key: 'B', text: '$16$' },
      { key: 'C', text: '$24$' },
      { key: 'D', text: '$8$' },
    ],
    answer: 'A',
    explanation:
      'Titik sudut daerah penyelesaian: $(8,0)$ dari $x+2y=8$ dengan $y=0$; $(4,2)$ dari titik potong $x+y=6$ dan $x+2y=8$; serta $(0,6)$ dari $x+y=6$ dengan $x=0$. Nilai $f$: $(8,0)=24$, $(4,2)=16$, dan $(0,6)=12$. Karena $f$ makin kecil ke arah kiri atas dan tetap terbatas oleh titik $(0,6)$, nilai minimumnya $12$. Opsi B ($16$) berasal dari titik $(4,2)$ dan opsi C ($24$) dari titik $(8,0)$, keduanya lebih besar dari nilai minimum. Opsi D ($8$) berasal dari titik yang tidak layak, misalnya $(0,4)$ yang melanggar $x+y\\ge6$.',
    hints: [
      'Cari titik potong kedua garis dan titik potong dengan sumbu-sumbu.',
      'Meskipun daerah tak terbatas, nilai minimum masih dapat muncul di titik sudut.',
    ],
    competencies: ['program linear', 'nilai minimum', 'penalaran'],
  },
  {
    id: 'spt-16',
    topicId: 'sistem-pertidaksamaan',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Daerah yang diarsir pada gambar berikut adalah himpunan penyelesaian dari sistem …',
    figure: {
      svg: '<svg viewBox="0 0 240 210" xmlns="http://www.w3.org/2000/svg"><polygon points="60,180 200,180 60,40" fill="currentColor" opacity="0.18"/><line x1="30" y1="180" x2="230" y2="180" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="25" x2="60" y2="200" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="40" x2="200" y2="180" stroke="currentColor" stroke-width="2"/><text x="205" y="196" font-size="11" fill="currentColor">x</text><text x="66" y="32" font-size="11" fill="currentColor">y</text><text x="80" y="66" font-size="11" fill="currentColor">daerah</text><text x="80" y="78" font-size="11" fill="currentColor">penyelesaian</text></svg>',
      alt: 'Daerah penyelesaian berupa segitiga di kuadran pertama dengan titik sudut (0,0), (4,0), dan (0,4), dibatasi garis x + y = 4.',
      caption: 'Daerah penyelesaian sistem pertidaksamaan linear.',
    },
    options: [
      { key: 'A', text: '$x+y\\le4,\\ x\\ge0,\\ y\\ge0$' },
      { key: 'B', text: '$x+y\\ge4,\\ x\\ge0,\\ y\\ge0$' },
      { key: 'C', text: '$x+y\\le4,\\ x\\le0,\\ y\\le0$' },
      { key: 'D', text: '$x+y\\ge4,\\ x\\le0,\\ y\\le0$' },
    ],
    answer: 'A',
    explanation:
      'Daerah arsir berada di kuadran pertama ($x\\ge0$, $y\\ge0$) dan di bawah garis $x+y=4$, sehingga $x+y\\le4$. Jadi sistemnya $x+y\\le4,\\ x\\ge0,\\ y\\ge0$. Opsi B membalik tanda menjadi $\\ge$ sehingga mengarsir sisi yang berlawanan. Opsi C memakai $x\\le0$ dan $y\\le0$, padahal daerah arsir berada di kuadran pertama. Opsi D selain memakai $x\\le0$ dan $y\\le0$ juga membalik tanda menjadi $\\ge$, sehingga sama sekali tidak sesuai.',
    hints: [
      'Perhatikan kuadran tempat daerah arsir berada.',
      'Tentukan apakah daerah arsir berada di bawah atau di atas garis $x+y=4$.',
    ],
    competencies: ['daerah penyelesaian', 'membaca grafik'],
  },
];

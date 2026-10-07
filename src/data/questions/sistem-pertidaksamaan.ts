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
      'Titik potong dengan sumbu-$y$ terjadi saat $x = 0$. Substitusi: $2(0) + 3y = 12 \\Rightarrow 3y = 12 \\Rightarrow y = 4$. Jadi titiknya $(0,4)$.',
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
      'Titik sudut daerah penyelesaian: $(0,0)$, $(6,0)$, $(4,4)$, dan $(0,8)$. Nilai $f$: $(0,0)=0$, $(6,0)=18$, $(4,4)=20$, dan $(0,8)=16$. Nilai maksimum $20$ di titik $(4,4)$.',
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
      'Garis $x + y = 4$ memotong sumbu di $(4,0)$ dan $(0,4)$, sedangkan $x + 2y = 6$ di $(6,0)$ dan $(0,3)$. Titik potong keduanya: $x + y = 4$ dan $x + 2y = 6$ memberi $y = 2$ dan $x = 2$, yaitu $(2,2)$. Titik $(0,4)$ dan $(6,0)$ tidak memenuhi pertidaksamaan yang lain, sehingga titik sudutnya $(0,0)$, $(4,0)$, $(2,2)$, dan $(0,3)$.',
    hints: ['Periksa setiap titik potong pada kedua pertidaksamaan.'],
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
      { key: 'C', text: '$30$' },
      { key: 'D', text: '$12$' },
    ],
    answer: 'B',
    explanation:
      'Nilai $f$ di tiap titik sudut: $(0,0)=0$, $(4,0)=24$, $(2,3)=12+15=27$, dan $(0,2)=10$. Nilai terbesar adalah $27$ di titik $(2,3)$.',
    hints: ['Substitusikan setiap titik sudut ke fungsi objektif.'],
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
    hints: ['Bayangkan garis $f = k$ bergeser sejajar hingga menyentuh daerah penyelesaian.'],
    competencies: ['penalaran', 'program linear', 'titik sudut'],
  },
];

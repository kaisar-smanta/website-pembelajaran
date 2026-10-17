import type { Question } from '@/types/content';

export const ketaksamaanQuestions: Question[] = [
  {
    id: 'ktk-01',
    topicId: 'ketaksamaan',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Jika $2x - 3 > 5$, maka himpunan penyelesaiannya adalah …',
    options: [
      { key: 'A', text: '$x > 1$' },
      { key: 'B', text: '$x > 4$' },
      { key: 'C', text: '$x < 4$' },
      { key: 'D', text: '$x > -4$' },
    ],
    answer: 'B',
    explanation:
      '$2x - 3 > 5 \\Rightarrow 2x > 8 \\Rightarrow x > 4$. Opsi A ($x > 1$) muncul bila $3$ dikurangkan alih-alih ditambahkan sehingga diperoleh $2x > 2$. Opsi C ($x < 4$) membalik arah tanda tanpa alasan. Opsi D ($x > -4$) salah tanda karena tidak menambahkan $3$ lebih dahulu.',
    hints: [
      'Tambahkan $3$ pada kedua ruas lebih dahulu.',
      'Setelah itu bagi kedua ruas dengan $2$.',
      'Periksa hasilnya dengan mencoba $x = 5$ pada $2x - 3 > 5$.',
    ],
    competencies: ['sifat ketaksamaan'],
  },
  {
    id: 'ktk-02',
    topicId: 'ketaksamaan',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Jika $a < b$ dan $c < 0$, maka pernyataan yang benar adalah …',
    options: [
      { key: 'A', text: '$ac < bc$' },
      { key: 'B', text: '$ac > bc$' },
      { key: 'C', text: '$ac = bc$' },
      { key: 'D', text: '$a + c > b + c$' },
    ],
    answer: 'B',
    explanation:
      'Mengalikan kedua ruas ketaksamaan $a<b$ dengan bilangan negatif $c<0$ membalik arah tanda, sehingga $ac>bc$. Opsi A ($ac<bc$) mempertahankan arah seolah mengalikan dengan bilangan positif. Opsi C ($ac=bc$) menganggap arahnya berubah menjadi kesamaan. Opsi D ($a+c>b+c$) justru terbalik, seharusnya $a+c<b+c$ karena menambah bilangan yang sama tidak membalik tanda.',
    hints: [
      'Perhatikan tanda bilangan pengali.',
      'Mengalikan ketaksamaan dengan bilangan negatif membalik arah tanda.',
      'Karena $c < 0$, dari $a < b$ diperoleh $ac > bc$.',
    ],
    competencies: ['sifat ketaksamaan'],
  },
  {
    id: 'ktk-03',
    topicId: 'ketaksamaan',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Tentukan nilai terkecil dari $x + \\dfrac{4}{x}$ untuk $x > 0$.',
    answer: '4',
    acceptedAnswers: ['4'],
    explanation:
      'Dengan AM-GM, $x + \\dfrac{4}{x} \\ge 2\\sqrt{x \\cdot \\dfrac{4}{x}} = 2\\sqrt{4} = 4$. Kesamaan saat $x = 2$.',
    hints: [
      'Gunakan $a + b \\ge 2\\sqrt{ab}$ dengan $a = x$ dan $b = \\dfrac{4}{x}$.',
      'Hasil kali $x \\cdot \\dfrac{4}{x} = 4$ konstan, sehingga batas bawahnya $2\\sqrt{4}$.',
      'Kesamaan tercapai saat $x = \\dfrac{4}{x}$, yaitu $x = 2$.',
    ],
    competencies: ['AM-GM'],
  },
  {
    id: 'ktk-04',
    topicId: 'ketaksamaan',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Untuk setiap bilangan real $x$ dan $y$, pernyataan yang **selalu** benar adalah …',
    options: [
      { key: 'A', text: '$|x + y| \\ge |x| + |y|$' },
      { key: 'B', text: '$|x + y| \\le |x| + |y|$' },
      { key: 'C', text: '$|x + y| = |x| + |y|$' },
      { key: 'D', text: '$|x + y| \\ge |x| - |y| + 1$' },
    ],
    answer: 'B',
    explanation:
      'Ketaksamaan segitiga menyatakan $|x + y| \\le |x| + |y|$ untuk semua bilangan real $x$ dan $y$. Opsi A ($\\ge$) membalik arah sehingga salah, misalnya $x=1$ dan $y=-1$. Opsi C (kesamaan) hanya berlaku pada kasus khusus tanda sama, bukan selalu. Opsi D menambahkan $1$ sehingga salah, misalnya $x=y=0$ memberi $0\\ge1$ yang keliru.',
    hints: [
      'Ingat bahwa nilai mutlak tidak pernah membuat hasil lebih besar dari jumlah nilai mutlaknya.',
      'Nama sifat ini adalah ketaksamaan segitiga.',
      'Uji dengan $x = 1$ dan $y = -1$ untuk menyingkirkan opsi yang salah.',
    ],
    competencies: ['ketaksamaan segitiga'],
  },
  {
    id: 'ktk-05',
    topicId: 'ketaksamaan',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Tentukan himpunan penyelesaian dari $3 - 2x \\ge 7$.',
    figure: {
      svg: '<svg viewBox="0 0 320 140" role="img" aria-hidden="true"><line x1="30" y1="80" x2="300" y2="80" stroke="currentColor" stroke-width="1.4"/><line x1="60" y1="80" x2="60" y2="90" stroke="currentColor" stroke-width="1"/><text x="56" y="104" font-size="10" fill="currentColor">-5</text><line x1="90" y1="80" x2="90" y2="90" stroke="currentColor" stroke-width="1"/><text x="86" y="104" font-size="10" fill="currentColor">-4</text><line x1="120" y1="80" x2="120" y2="90" stroke="currentColor" stroke-width="1"/><text x="114" y="104" font-size="10" fill="currentColor">-3</text><line x1="150" y1="80" x2="150" y2="90" stroke="currentColor" stroke-width="1"/><text x="144" y="104" font-size="10" fill="currentColor">-2</text><line x1="180" y1="80" x2="180" y2="90" stroke="currentColor" stroke-width="1"/><text x="174" y="104" font-size="10" fill="currentColor">-1</text><line x1="210" y1="80" x2="210" y2="90" stroke="currentColor" stroke-width="1"/><text x="208" y="104" font-size="10" fill="currentColor">0</text><line x1="30" y1="76" x2="150" y2="76" stroke="currentColor" stroke-width="4" opacity="0.4"/><circle cx="150" cy="80" r="5" fill="currentColor"/><line x1="150" y1="80" x2="216" y2="80" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><text x="232" y="84" font-size="10" fill="currentColor">x ≤ -2</text></svg>',
      alt: 'Garis bilangan dari -5 sampai 0. Titik penuh di x sama dengan -2, dengan daerah di sebelah kirinya diarsir, menunjukkan x lebih kecil atau sama dengan -2.',
      caption: 'Daerah penyelesaian $x\\le-2$ pada garis bilangan.',
    },
    answer: 'x <= -2',
    acceptedAnswers: ['x <= -2', 'x ≤ -2', 'x≤-2', '(-∞,-2]', '(-inf,-2]'],
    explanation:
      '$3 - 2x \\ge 7 \\Rightarrow -2x \\ge 4$. Membagi dengan $-2$ membalik tanda, sehingga $x \\le -2$.',
    hints: [
      'Membagi dengan bilangan negatif membalik arah ketaksamaan.',
      'Pindahkan dulu $3$ sehingga menjadi $-2x \\ge 4$, lalu bagi dengan $-2$.',
    ],
    competencies: ['sifat ketaksamaan', 'penyelesaian pertidaksamaan'],
  },
  {
    id: 'ktk-06',
    topicId: 'ketaksamaan',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Untuk $x > 0$, nilai minimum dari $2x + \\dfrac{8}{x}$ adalah …',
    options: [
      { key: 'A', text: '$4$' },
      { key: 'B', text: '$6$' },
      { key: 'C', text: '$8$' },
      { key: 'D', text: '$16$' },
    ],
    answer: 'C',
    explanation:
      '$2x + \\dfrac{8}{x} \\ge 2\\sqrt{2x \\cdot \\dfrac{8}{x}} = 2\\sqrt{16} = 8$. Kesamaan saat $2x = \\dfrac{8}{x}$, yaitu $x = 2$. Opsi A ($4$) mengambil $\\sqrt{16}$ tanpa faktor $2$. Opsi B ($6$) memakai $2\\sqrt{9}$ karena menganggap hasil kalinya $9$. Opsi D ($16$) mengambil hasil kali $2x\\cdot\\dfrac{8}{x}=16$ sebagai minimum tanpa menarik akarnya.',
    hints: [
      'Kalikan suku $2x$ dan $\\dfrac{8}{x}$ untuk melihat hasilnya konstan.',
      'Setelah hasil kalinya $16$, gunakan $a + b \\ge 2\\sqrt{ab}$.',
    ],
    competencies: ['AM-GM', 'optimasi'],
  },
  {
    id: 'ktk-07',
    topicId: 'ketaksamaan',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'konsep',
    prompt: 'Diketahui $x + y = 6$. Tentukan nilai minimum dari $x^2 + y^2$.',
    answer: '18',
    acceptedAnswers: ['18'],
    explanation:
      'Dengan $c = d = 1$ pada Cauchy-Schwarz: $(x^2 + y^2)(1+1) \\ge (x+y)^2 = 36$, sehingga $x^2 + y^2 \\ge 18$. Kesamaan saat $x = y = 3$.',
    hints: [
      'Gunakan $(x^2+y^2)(1^2+1^2) \\ge (x+y)^2$.',
      'Dengan $x+y=6$, diperoleh $2(x^2+y^2) \\ge 36$.',
    ],
    competencies: ['Cauchy-Schwarz', 'optimasi'],
  },
  {
    id: 'ktk-08',
    topicId: 'ketaksamaan',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'konsep',
    prompt:
      'Jelaskan bunyi ketaksamaan AM-GM untuk dua bilangan, syarat keberlakuannya, dan kapan kesamaan tercapai. Berikan satu contoh penggunaannya untuk mencari nilai minimum.',
    answer:
      'Untuk dua bilangan tak negatif $a$ dan $b$ berlaku $\\dfrac{a+b}{2} \\ge \\sqrt{ab}$, yaitu $a + b \\ge 2\\sqrt{ab}$. Syaratnya $a \\ge 0$ dan $b \\ge 0$. Kesamaan tercapai tepat saat $a = b$. Contoh: untuk $x > 0$, nilai minimum $x + \\dfrac{4}{x}$ adalah $2\\sqrt{4} = 4$, tercapai saat $x = 2$.',
    explanation:
      'Kunci jawaban: rumus AM-GM dua variabel, syarat tak negatif, syarat kesamaan $a = b$, dan satu contoh optimasi yang benar.',
    hints: ['Sebutkan syarat $a, b \\ge 0$.', 'Kesamaan terjadi ketika kedua bilangan sama.'],
    competencies: ['AM-GM', 'komunikasi matematis'],
    rubric: [
      'Menulis rumus AM-GM $a+b\\ge2\\sqrt{ab}$ untuk $a,b\\ge0$',
      'Menyebut syarat kedua bilangan tak negatif',
      'Menyatakan kesamaan tercapai saat $a=b$',
      'Memberi satu contoh optimasi dengan nilai minimum yang benar',
    ],
  },
  {
    id: 'ktk-09',
    topicId: 'ketaksamaan',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Waktu pemrosesan (dalam menit) sebuah algoritma untuk $x$ unit data dimodelkan $T(x)=x+\\dfrac{9}{x}$ dengan $x>0$. Waktu pemrosesan minimum adalah …',
    options: [
      { key: 'A', text: '$3$ menit' },
      { key: 'B', text: '$6$ menit' },
      { key: 'C', text: '$9$ menit' },
      { key: 'D', text: '$12$ menit' },
    ],
    answer: 'B',
    explanation:
      'Dengan AM-GM, $x+\\dfrac{9}{x}\\ge2\\sqrt{x\\cdot\\dfrac{9}{x}}=2\\sqrt{9}=6$, dengan kesamaan saat $x=3$. Opsi A ($3$) mengambil $\\sqrt{9}$ tanpa faktor $2$. Opsi C ($9$) mengambil hasil kali $x\\cdot\\dfrac{9}{x}=9$ sebagai nilai minimum tanpa menarik akar. Opsi D ($12$) menggandakan hasil $6$ secara berlebihan.',
    hints: [
      'Gunakan AM-GM $a+b\\ge2\\sqrt{ab}$ pada $x$ dan $\\dfrac{9}{x}$.',
      'Hasil kali kedua sukunya konstan, yaitu $x\\cdot\\dfrac{9}{x}=9$.',
    ],
    competencies: ['AM-GM', 'optimasi', 'kontekstual'],
  },
  {
    id: 'ktk-10',
    topicId: 'ketaksamaan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Buktikan bahwa untuk setiap bilangan real $a$ dan $b$ berlaku $a^2 + b^2 \\ge 2ab$. Jelaskan mengapa kesamaan hanya terjadi saat $a = b$.',
    answer:
      '$(a-b)^2 \\ge 0$ untuk semua bilangan real, karena kuadrat selalu tak negatif. Jabarkan: $a^2 - 2ab + b^2 \\ge 0$, sehingga $a^2 + b^2 \\ge 2ab$. Kesamaan terjadi tepat ketika $(a-b)^2 = 0$, yaitu $a - b = 0$ atau $a = b$.',
    explanation:
      'Kunci jawaban: memulai dari kuadrat tak negatif $(a-b)^2 \\ge 0$, menjabarkannya, dan menafsirkan syarat kesamaan.',
    hints: ['Mulai dari $(a-b)^2 \\ge 0$.', 'Kapan suatu kuadrat bernilai nol?'],
    competencies: ['penalaran', 'pembuktian'],
    rubric: [
      'Memulai pembuktian dari $(a-b)^2\\ge0$',
      'Menjabarkan menjadi $a^2-2ab+b^2\\ge0$',
      'Menyimpulkan $a^2+b^2\\ge2ab$',
      'Menunjukkan kesamaan hanya terjadi saat $a=b$',
    ],
  },
  {
    id: 'ktk-11',
    topicId: 'ketaksamaan',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Diketahui $x > 0$ dan $y > 0$ dengan $xy = 36$. Tentukan nilai minimum dari $x + y$.',
    answer: '12',
    acceptedAnswers: ['12'],
    explanation:
      'Dengan AM-GM, $x + y \\ge 2\\sqrt{xy} = 2\\sqrt{36} = 12$. Kesamaan saat $x = y = 6$.',
    hints: [
      'Karena hasil kalinya tetap, gunakan AM-GM untuk menjumlahkan.',
      'Kesamaan AM-GM saat $x=y$, dan dengan $xy=36$ diperoleh $x=y=6$.',
    ],
    competencies: ['AM-GM', 'optimasi'],
  },
  {
    id: 'ktk-12',
    topicId: 'ketaksamaan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah taman persegi panjang dirancang dengan keliling tepat $60$ m. (a) Nyatakan luas taman sebagai fungsi satu variabel. (b) Gunakan ketaksamaan AM-GM untuk membuktikan bahwa luas maksimumnya $225$ m$^2$ dan tentukan ukuran taman saat itu.',
    answer:
      '(a) Misal panjang $x$ dan lebar $y$ dengan $2(x+y)=60$, sehingga $x+y=30$ dan $y=30-x$. Luas $L=xy$ dengan jumlah $x+y$ tetap. (b) Dengan AM-GM pada dua bilangan positif $x$ dan $y$: $\\sqrt{xy}\\le\\dfrac{x+y}{2}=15$, sehingga $xy\\le15^{2}=225$. Jadi luas maksimum $225$ m$^2$, dan kesamaan tercapai ketika $x=y=15$ m, yaitu taman berbentuk persegi $15\\times15$ m.',
    explanation:
      'Kunci: mengubah kendala keliling menjadi $x+y=30$, lalu memakai AM-GM $\\sqrt{xy}\\le\\dfrac{x+y}{2}$ dengan kesamaan saat $x=y$.',
    hints: [
      'Keliling $60$ berarti $x+y=30$.',
      'AM-GM menyatakan $\\sqrt{xy}\\le\\dfrac{x+y}{2}$ dengan kesamaan saat $x=y$.',
    ],
    competencies: ['AM-GM', 'pemodelan', 'optimasi'],
    rubric: [
      'Mengubah keliling $60$ menjadi $x+y=30$',
      'Menerapkan AM-GM $\\sqrt{xy}\\le\\dfrac{x+y}{2}=15$',
      'Menyimpulkan luas maksimum $xy\\le225$ m$^2$',
      'Menentukan kesamaan saat $x=y=15$ sehingga taman $15\\times15$ m',
    ],
  },
  {
    id: 'ktk-13',
    topicId: 'ketaksamaan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Untuk bilangan positif $a$ dan $b$, buktikan bahwa $(a+b)\\left(\\dfrac{1}{a} + \\dfrac{1}{b}\\right) \\ge 4$ dan tentukan kapan kesamaan tercapai.',
    answer:
      'Jabarkan: $(a+b)\\left(\\dfrac{1}{a} + \\dfrac{1}{b}\\right) = 1 + \\dfrac{a}{b} + \\dfrac{b}{a} + 1 = 2 + \\dfrac{a}{b} + \\dfrac{b}{a}$. Dengan AM-GM, $\\dfrac{a}{b} + \\dfrac{b}{a} \\ge 2\\sqrt{\\dfrac{a}{b} \\cdot \\dfrac{b}{a}} = 2$. Jadi hasilnya $\\ge 2 + 2 = 4$. Kesamaan terjadi saat $\\dfrac{a}{b} = \\dfrac{b}{a}$, yaitu $a = b$ (karena $a, b > 0$).',
    explanation:
      'Kunci jawaban: menjabarkan hasil kali, mengenali bentuk $\\dfrac{a}{b} + \\dfrac{b}{a}$, lalu menerapkan AM-GM.',
    hints: ['Jabarkan hasil kalinya lebih dahulu.', 'Terapkan AM-GM pada $\\dfrac{a}{b}$ dan $\\dfrac{b}{a}$.'],
    competencies: ['AM-GM', 'penalaran', 'pembuktian'],
    rubric: [
      'Menjabarkan menjadi $2+\\dfrac{a}{b}+\\dfrac{b}{a}$',
      'Menerapkan AM-GM pada $\\dfrac{a}{b}+\\dfrac{b}{a}\\ge2$',
      'Menyimpulkan hasil $\\ge4$',
      'Menentukan kesamaan tercapai saat $a=b$',
    ],
  },
  {
    id: 'ktk-14',
    topicId: 'ketaksamaan',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'evaluasi',
    prompt: 'Manakah pernyataan berikut yang **salah**?',
    options: [
      { key: 'A', text: 'Untuk $x > 0$ berlaku $x + \\dfrac{1}{x} \\ge 2$.' },
      { key: 'B', text: 'Untuk setiap $x \\ne 0$ berlaku $x + \\dfrac{1}{x} \\ge 2$.' },
      { key: 'C', text: 'AM-GM mensyaratkan kedua bilangan tak negatif.' },
      { key: 'D', text: 'Kesamaan $x + \\dfrac{1}{x} = 2$ terjadi saat $x = 1$.' },
    ],
    answer: 'B',
    explanation:
      'Opsi A benar karena AM-GM pada $x > 0$ memberi $x + \\dfrac{1}{x} \\ge 2$. Opsi B salah: untuk $x < 0$, misalnya $x = -1$, nilai $x + \\dfrac{1}{x} = -2 < 2$, dan AM-GM tidak berlaku karena salah satu bilangan negatif. Opsi C benar karena AM-GM mensyaratkan kedua bilangan tak negatif. Opsi D benar karena $x + \\dfrac{1}{x} = 2$ hanya tercapai saat $x = 1$ untuk $x > 0$.',
    hints: [
      'Uji pernyataan dengan bilangan negatif.',
      'Periksa juga apakah setiap pernyataan yang benar tetap berlaku untuk $x > 0$.',
    ],
    competencies: ['AM-GM', 'evaluasi'],
  },
  {
    id: 'ktk-15',
    topicId: 'ketaksamaan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Untuk bilangan real positif $a$, $b$, dan $c$ dengan $a+b+c=1$, buktikan bahwa $ab+bc+ca\\le\\dfrac{1}{3}$. Kapan kesamaan tercapai?',
    answer:
      'Karena $(a+b+c)^2=1$, maka $a^2+b^2+c^2+2(ab+bc+ca)=1$. Dari $\\tfrac{1}{2}\\left[(a-b)^2+(b-c)^2+(c-a)^2\\right]\\ge0$ diperoleh $a^2+b^2+c^2\\ge ab+bc+ca$. Substitusi: $1=(a^2+b^2+c^2)+2(ab+bc+ca)\\ge 3(ab+bc+ca)$, sehingga $ab+bc+ca\\le\\dfrac{1}{3}$. Kesamaan tercapai saat $a=b=c=\\dfrac{1}{3}$.',
    explanation:
      'Kunci: memakai identitas $(a+b+c)^2$ bersama $a^2+b^2+c^2\\ge ab+bc+ca$ yang berasal dari jumlah kuadrat selisih.',
    hints: [
      'Kembangkan $(a+b+c)^2$ dan gunakan $a+b+c=1$.',
      'Tunjukkan $a^2+b^2+c^2\\ge ab+bc+ca$ dari $\\tfrac{1}{2}\\sum (a-b)^2\\ge0$.',
    ],
    competencies: ['ketaksamaan', 'pembuktian', 'optimasi'],
    rubric: [
      'Mengembangkan $(a+b+c)^2=1$ menjadi $a^2+b^2+c^2+2(ab+bc+ca)=1$',
      'Menunjukkan $a^2+b^2+c^2\\ge ab+bc+ca$',
      'Menyimpulkan $ab+bc+ca\\le\\dfrac{1}{3}$',
      'Menentukan kesamaan saat $a=b=c=\\dfrac{1}{3}$',
    ],
  },
];

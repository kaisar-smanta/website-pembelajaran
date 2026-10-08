import type { Question } from '@/types/content';

export const irisanKerucutQuestions: Question[] = [
  {
    id: 'ik-01',
    topicId: 'irisan-kerucut',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Pusat lingkaran $(x-2)^{2} + (y+3)^{2} = 16$ adalah …',
    options: [
      { key: 'A', text: '$(2,-3)$' },
      { key: 'B', text: '$(2,3)$' },
      { key: 'C', text: '$(-2,3)$' },
      { key: 'D', text: '$(-2,-3)$' },
    ],
    answer: 'A',
    explanation:
      'Bentuk baku $(x-a)^{2} + (y-b)^{2} = r^{2}$ berpusat $(a,b)$. Di sini $a = 2$ dan $b = -3$, sehingga pusatnya $(2,-3)$.',
    hints: ['Tanda di dalam kurung berlawanan dengan tanda koordinat pusat.'],
    competencies: ['persamaan lingkaran bentuk baku'],
  },
  {
    id: 'ik-02',
    topicId: 'irisan-kerucut',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Tentukan jari-jari lingkaran $x^{2} + y^{2} = 49$.',
    answer: '7',
    explanation:
      'Bentuk $x^{2} + y^{2} = r^{2}$ berjari-jari $r = \\sqrt{49} = 7$.',
    hints: ['Jari-jari adalah akar dari bilangan di ruas kanan.'],
    competencies: ['jari-jari lingkaran'],
  },
  {
    id: 'ik-03',
    topicId: 'irisan-kerucut',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Pusat dan jari-jari lingkaran $x^{2} + y^{2} - 6x + 4y - 12 = 0$ adalah …',
    options: [
      { key: 'A', text: 'pusat $(3,-2)$, jari-jari $5$' },
      { key: 'B', text: 'pusat $(-3,2)$, jari-jari $5$' },
      { key: 'C', text: 'pusat $(3,-2)$, jari-jari $25$' },
      { key: 'D', text: 'pusat $(6,-4)$, jari-jari $5$' },
    ],
    answer: 'A',
    explanation:
      'Dengan $D = -6$, $E = 4$, $F = -12$: pusat $\\left(-\\dfrac{D}{2}, -\\dfrac{E}{2}\\right) = (3,-2)$ dan $r = \\sqrt{9 + 4 + 12} = \\sqrt{25} = 5$.',
    hints: ['Pusat adalah $\\left(-\\dfrac{D}{2}, -\\dfrac{E}{2}\\right)$ dan $r = \\sqrt{\\left(\\dfrac{D}{2}\\right)^{2} + \\left(\\dfrac{E}{2}\\right)^{2} - F}$.'],
    competencies: ['persamaan lingkaran bentuk umum'],
  },
  {
    id: 'ik-04',
    topicId: 'irisan-kerucut',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Tentukan jari-jari lingkaran $x^{2} + y^{2} - 4x + 6y - 3 = 0$.',
    answer: '4',
    explanation:
      'Dengan $D = -4$, $E = 6$, $F = -3$: $r = \\sqrt{\\left(\\dfrac{-4}{2}\\right)^{2} + \\left(\\dfrac{6}{2}\\right)^{2} - (-3)} = \\sqrt{4 + 9 + 3} = \\sqrt{16} = 4$.',
    hints: ['Gunakan rumus jari-jari bentuk umum, perhatikan tanda $F$ yang negatif.'],
    competencies: ['persamaan lingkaran bentuk umum'],
  },
  {
    id: 'ik-05',
    topicId: 'irisan-kerucut',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Garis singgung lingkaran $x^{2} + y^{2} = 25$ di titik $(3,4)$ adalah …',
    options: [
      { key: 'A', text: '$3x + 4y = 25$' },
      { key: 'B', text: '$4x + 3y = 25$' },
      { key: 'C', text: '$3x - 4y = 25$' },
      { key: 'D', text: '$3x + 4y = 5$' },
    ],
    answer: 'A',
    explanation:
      'Garis singgung lingkaran $x^{2} + y^{2} = r^{2}$ di $(x_{1}, y_{1})$ adalah $x\\,x_{1} + y\\,y_{1} = r^{2}$. Maka $3x + 4y = 25$. Periksa: $3(3) + 4(4) = 25$.',
    hints: ['Substitusikan koordinat titik singgung pada rumus garis singgung.'],
    competencies: ['garis singgung lingkaran'],
  },
  {
    id: 'ik-06',
    topicId: 'irisan-kerucut',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Diketahui elips $\\dfrac{x^{2}}{25} + \\dfrac{y^{2}}{9} = 1$. Tentukan jarak dari pusat ke salah satu titik fokusnya.',
    answer: '4',
    explanation:
      '$a^{2} = 25$ dan $b^{2} = 9$, sehingga $c = \\sqrt{a^{2} - b^{2}} = \\sqrt{25 - 9} = \\sqrt{16} = 4$. Jarak pusat ke fokus adalah $c = 4$.',
    hints: ['Untuk elips berlaku $c^{2} = a^{2} - b^{2}$ dengan $a$ penyebut terbesar.'],
    competencies: ['fokus elips'],
  },
  {
    id: 'ik-07',
    topicId: 'irisan-kerucut',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Eksentrisitas elips $\\dfrac{x^{2}}{25} + \\dfrac{y^{2}}{9} = 1$ adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{4}{5}$' },
      { key: 'B', text: '$\\dfrac{5}{4}$' },
      { key: 'C', text: '$\\dfrac{3}{5}$' },
      { key: 'D', text: '$\\dfrac{5}{3}$' },
    ],
    answer: 'A',
    explanation:
      '$a = 5$, $b = 3$, sehingga $c = \\sqrt{25 - 9} = 4$ dan $e = \\dfrac{c}{a} = \\dfrac{4}{5} = 0{,}8$. Karena $0 < e < 1$, hasilnya masuk akal untuk elips.',
    hints: ['Eksentrisitas $e = \\dfrac{c}{a}$ dan selalu bernilai kurang dari $1$.'],
    competencies: ['eksentrisitas elips'],
  },
  {
    id: 'ik-08',
    topicId: 'irisan-kerucut',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Tentukan pusat, fokus, panjang sumbu mayor, panjang sumbu minor, dan eksentrisitas elips $\\dfrac{(x-2)^{2}}{25} + \\dfrac{(y-1)^{2}}{16} = 1$.',
    answer:
      'Pusatnya $(2,1)$. Karena penyebut $x$ lebih besar, sumbu mayor sejajar sumbu-$x$ dengan $a = 5$ dan $b = 4$. Maka $c = \\sqrt{a^{2} - b^{2}} = \\sqrt{25 - 16} = 3$. Fokusnya $(2 \\pm 3, 1)$, yaitu $(-1,1)$ dan $(5,1)$. Sumbu mayor $2a = 10$, sumbu minor $2b = 8$, dan eksentrisitas $e = \\dfrac{3}{5} = 0{,}6$.',
    explanation:
      'Kunci menekankan pembacaan pusat dari bentuk baku, penentuan $a$ dan $b$, perhitungan $c^{2} = a^{2} - b^{2}$, lalu penentuan fokus dan eksentrisitas.',
    hints: ['Fokus berada pada sumbu mayor, yaitu sejajar sumbu-$x$ karena $a$ pada suku $x$.'],
    competencies: ['unsur elips', 'fokus elips', 'eksentrisitas elips'],
  },
  {
    id: 'ik-09',
    topicId: 'irisan-kerucut',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'penalaran',
    prompt:
      'Garis singgung elips $\\dfrac{x^{2}}{25} + \\dfrac{y^{2}}{9} = 1$ di titik $\\left(4, \\tfrac{9}{5}\\right)$ berbentuk $4x + 5y = c$. Tentukan nilai $c$.',
    answer: '25',
    explanation:
      'Garis singgung di $(x_{1}, y_{1})$ adalah $\\dfrac{x\\,x_{1}}{25} + \\dfrac{y\\,y_{1}}{9} = 1$. Substitusi $x_{1} = 4$ dan $y_{1} = \\tfrac{9}{5}$: $\\dfrac{4x}{25} + \\dfrac{y}{5} = 1$. Kalikan dengan $25$: $4x + 5y = 25$, sehingga $c = 25$. Periksa: $4(4) + 5\\left(\\tfrac{9}{5}\\right) = 25$.',
    hints: ['Gunakan $\\dfrac{x\\,x_{1}}{a^{2}} + \\dfrac{y\\,y_{1}}{b^{2}} = 1$, lalu kalikan dengan penyebut bersama.'],
    competencies: ['garis singgung elips'],
  },
  {
    id: 'ik-10',
    topicId: 'irisan-kerucut',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Fokus elips $\\dfrac{(x-2)^{2}}{25} + \\dfrac{(y-1)^{2}}{16} = 1$ adalah …',
    options: [
      { key: 'A', text: '$(-1,1)$ dan $(5,1)$' },
      { key: 'B', text: '$(2,-2)$ dan $(2,4)$' },
      { key: 'C', text: '$(2,0)$ dan $(2,2)$' },
      { key: 'D', text: '$(-3,1)$ dan $(7,1)$' },
    ],
    answer: 'A',
    explanation:
      '$a = 5$, $b = 4$, sehingga $c = \\sqrt{25 - 16} = 3$. Karena sumbu mayor sejajar sumbu-$x$, fokusnya $(2 \\pm 3, 1)$, yaitu $(-1,1)$ dan $(5,1)$.',
    hints: ['Fokus bergeser dari pusat sejauh $c$ sepanjang sumbu mayor.'],
    competencies: ['fokus elips'],
  },
  {
    id: 'ik-11',
    topicId: 'irisan-kerucut',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Tentukan pusat dan jari-jari lingkaran $2x^{2} + 2y^{2} - 8x + 12y - 6 = 0$, lalu tuliskan persamaannya dalam bentuk baku.',
    answer:
      'Bagi seluruh persamaan dengan $2$: $x^{2} + y^{2} - 4x + 6y - 3 = 0$, sehingga $D = -4$, $E = 6$, $F = -3$. Pusat $\\left(-\\dfrac{D}{2}, -\\dfrac{E}{2}\\right) = (2,-3)$ dan $r = \\sqrt{\\left(\\dfrac{-4}{2}\\right)^{2} + \\left(\\dfrac{6}{2}\\right)^{2} - (-3)} = \\sqrt{4 + 9 + 3} = \\sqrt{16} = 4$. Bentuk bakunya $(x-2)^{2} + (y+3)^{2} = 16$.',
    explanation:
      'Kunci menekankan langkah awal membagi dengan koefisien $x^{2}$ dan $y^{2}$ sebelum menerapkan rumus bentuk umum.',
    hints: ['Koefisien $x^{2}$ dan $y^{2}$ harus $1$ sebelum memakai rumus pusat.'],
    competencies: ['persamaan lingkaran bentuk umum', 'melengkapkan kuadrat'],
  },
  {
    id: 'ik-12',
    topicId: 'irisan-kerucut',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Sebuah elips berpusat di titik asal, sumbu mayornya pada sumbu-$x$ dengan panjang $10$, dan sumbu minornya panjang $6$. Tentukan persamaannya beserta eksentrisitasnya.',
    answer:
      'Sumbu mayor $2a = 10$ memberi $a = 5$; sumbu minor $2b = 6$ memberi $b = 3$. Karena sumbu mayor pada sumbu-$x$, persamaannya $\\dfrac{x^{2}}{25} + \\dfrac{y^{2}}{9} = 1$. Selanjutnya $c = \\sqrt{a^{2} - b^{2}} = \\sqrt{25 - 9} = 4$, sehingga eksentrisitasnya $e = \\dfrac{c}{a} = \\dfrac{4}{5} = 0{,}8$.',
    explanation:
      'Kunci menekankan penafsiran panjang sumbu menjadi nilai $a$ dan $b$, penulisan persamaan baku, dan perhitungan eksentrisitas melalui $c$.',
    hints: ['Panjang sumbu mayor adalah $2a$ dan sumbu minor $2b$.'],
    competencies: ['persamaan elips', 'eksentrisitas elips'],
  },
  {
    id: 'ik-13',
    topicId: 'irisan-kerucut',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Sebuah elips memiliki persamaan $\\dfrac{x^{2}}{36}+\\dfrac{y^{2}}{16}=1$. (a) Tentukan panjang sumbu mayor, jarak fokus dari pusat, dan eksentrisitasnya. (b) Jelaskan bentuk elips ketika eksentrisitas mendekati $0$ dan ketika mendekati $1$.',
    answer:
      '(a) $a^{2}=36$ dan $b^{2}=16$, sehingga $a=6$ dan $b=4$. Sumbu mayor $2a=12$. Jarak fokus $c=\\sqrt{36-16}=\\sqrt{20}=2\\sqrt{5}\\approx4{,}47$. Eksentrisitas $e=\\dfrac{c}{a}=\\dfrac{2\\sqrt{5}}{6}=\\dfrac{\\sqrt{5}}{3}\\approx0{,}745$. (b) Ketika $e\\to0$, fokus hampir berimpit di pusat sehingga elips mendekati lingkaran. Ketika $e\\to1$, fokus makin dekat ke tepi sehingga elips makin pipih/memanjang.',
    explanation:
      'Kunci: membaca $a$ dan $b$ dari persamaan, menghitung $c$ dan $e$, serta menafsirkan rentang eksentrisitas.',
    hints: ['Penyebut terbesar menempel pada sumbu mayor.', 'Gunakan $c^{2}=a^{2}-b^{2}$ dan $e=\\dfrac{c}{a}$.'],
    competencies: ['unsur elips', 'eksentrisitas', 'evaluasi'],
  },
  {
    id: 'ik-14',
    topicId: 'irisan-kerucut',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Langit-langit sebuah gedung berbentuk lengkung elips dengan persamaan $\\dfrac{x^{2}}{100}+\\dfrac{y^{2}}{64}=1$ (dalam meter). (a) Tentukan tinggi maksimum langit-langit dari garis pusatnya. (b) Tentukan jarak antara kedua titik fokusnya.',
    answer:
      '(a) Karena penyebut $y$ adalah $64$, semi-sumbu vertikalnya $b=8$, sehingga tinggi maksimum langit-langit adalah $8$ m. (b) Dari $a^{2}=100$ dan $b^{2}=64$, diperoleh $c=\\sqrt{100-64}=\\sqrt{36}=6$. Kedua fokus berada di $(\\pm6,0)$, sehingga jarak antarfokus adalah $2c=12$ m.',
    explanation:
      'Kunci: membaca orientasi elips dari penyebut, menentukan puncak teratas, lalu menghitung $c$ dan jarak antarfokus.',
    hints: ['Tinggi maksimum adalah semi-sumbu pada arah $y$.', 'Jarak antarfokus adalah $2c$ dengan $c^{2}=a^{2}-b^{2}$.'],
    competencies: ['unsur elips', 'fokus elips', 'kontekstual'],
  },
];

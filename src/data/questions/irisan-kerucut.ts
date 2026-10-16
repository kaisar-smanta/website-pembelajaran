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
      'Bentuk baku $(x-a)^{2} + (y-b)^{2} = r^{2}$ berpusat $(a,b)$. Di sini $a = 2$ dan $b = -3$, sehingga pusatnya $(2,-3)$ (A). Opsi B salah tanda pada koordinat $y$; opsi D salah tanda pada kedua koordinat; opsi C salah tanda pada koordinat $x$, karena mengira tanda di dalam kurung sama dengan tanda pusat.',
    hints: [
      'Tanda di dalam kurung berlawanan dengan tanda koordinat pusat.',
      'Bandingkan dengan bentuk baku $(x-a)^{2} + (y-b)^{2} = r^{2}$.',
      'Di sini $a = 2$ dan $b = -3$, sehingga pusatnya $(2,-3)$.',
    ],
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
    hints: [
      'Jari-jari adalah akar dari bilangan di ruas kanan.',
      'Bentuk $x^{2} + y^{2} = r^{2}$ berjari-jari $r$.',
      'Hitung $\\sqrt{49}$.',
    ],
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
      'Dengan $D = -6$, $E = 4$, $F = -12$: pusat $\\left(-\\dfrac{D}{2}, -\\dfrac{E}{2}\\right) = (3,-2)$ dan $r = \\sqrt{9 + 4 + 12} = \\sqrt{25} = 5$ (A). Opsi B salah tanda pada kedua koordinat pusat; opsi C lupa mengakarkan sehingga memakai $r^{2}=25$; opsi D memakai $D$ dan $E$ mentah tanpa membagi dengan $2$.',
    hints: [
      'Pusat adalah $\\left(-\\dfrac{D}{2}, -\\dfrac{E}{2}\\right)$ dan $r = \\sqrt{\\left(\\dfrac{D}{2}\\right)^{2} + \\left(\\dfrac{E}{2}\\right)^{2} - F}$.',
      'Dari persamaan diperoleh $D = -6$, $E = 4$, dan $F = -12$.',
      'Pusatnya $(3,-2)$; hitung $r = \\sqrt{9 + 4 + 12} = \\sqrt{25}$.',
    ],
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
    hints: [
      'Gunakan rumus jari-jari bentuk umum, perhatikan tanda $F$ yang negatif.',
      'Dari persamaan diperoleh $D = -4$, $E = 6$, dan $F = -3$.',
      'Hitung $\\sqrt{\\left(\\dfrac{-4}{2}\\right)^{2} + \\left(\\dfrac{6}{2}\\right)^{2} - (-3)} = \\sqrt{4 + 9 + 3}$.',
    ],
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
      'Garis singgung lingkaran $x^{2} + y^{2} = r^{2}$ di $(x_{1}, y_{1})$ adalah $x\\,x_{1} + y\\,y_{1} = r^{2}$, sehingga $3x + 4y = 25$ (A). Opsi B menukar koefisien $3$ dan $4$; opsi C salah tanda pada suku $y$; opsi D memakai $r = 5$ di ruas kanan alih-alih $r^{2} = 25$.',
    hints: [
      'Substitusikan koordinat titik singgung pada rumus garis singgung.',
      'Ingat rumus $x\\,x_{1}+y\\,y_{1}=r^{2}$ dengan $r^{2}=25$.',
    ],
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
    hints: [
      'Untuk elips berlaku $c^{2} = a^{2} - b^{2}$ dengan $a$ penyebut terbesar.',
      'Karena $a^{2}=25$ lebih besar dari $b^{2}=9$, sumbu mayor sejajar sumbu-$x$.',
    ],
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
      '$a = 5$, $b = 3$, sehingga $c = \\sqrt{25 - 9} = 4$ dan $e = \\dfrac{c}{a} = \\dfrac{4}{5} = 0{,}8$ (A). Opsi B membalik menjadi $\\dfrac{a}{c}$ sehingga nilainya lebih dari $1$ (mustahil untuk elips); opsi C memakai $\\dfrac{b}{a}$; opsi D memakai $\\dfrac{a}{b}$ yang juga lebih dari $1$.',
    hints: [
      'Eksentrisitas $e = \\dfrac{c}{a}$ dan selalu bernilai kurang dari $1$.',
      'Hitung $c=\\sqrt{a^{2}-b^{2}}$ lebih dahulu.',
    ],
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
    hints: [
      'Fokus berada pada sumbu mayor, yaitu sejajar sumbu-$x$ karena $a$ pada suku $x$.',
      'Hitung $c=\\sqrt{25-16}=3$ sebelum menentukan koordinat fokus.',
    ],
    competencies: ['unsur elips', 'fokus elips', 'eksentrisitas elips'],
    rubric: [
      'Membaca pusat $(2,1)$ dari bentuk baku',
      'Menentukan $a=5$, $b=4$, dan $c=\\sqrt{25-16}=3$',
      'Menulis fokus $(-1,1)$ dan $(5,1)$',
      'Menyebut sumbu mayor $10$ dan sumbu minor $8$',
      'Menghitung eksentrisitas $e=\\dfrac{3}{5}$',
    ],
  },
  {
    id: 'ik-09',
    topicId: 'irisan-kerucut',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Titik $\\left(4, \\tfrac{9}{5}\\right)$ terletak pada elips $\\dfrac{x^{2}}{25} + \\dfrac{y^{2}}{9} = 1$. (a) Tentukan persamaan garis singgung elips di titik itu. (b) Tentukan titik potong garis singgung tersebut dengan sumbu-$x$. (c) Jelaskan mengapa garis itu menyinggung elips di tepat satu titik.',
    answer:
      '(a) Garis singgung di $(x_{1},y_{1})$ adalah $\\dfrac{x\\,x_{1}}{25}+\\dfrac{y\\,y_{1}}{9}=1$. Substitusi $x_{1}=4$ dan $y_{1}=\\tfrac{9}{5}$: $\\dfrac{4x}{25}+\\dfrac{y}{5}=1$, atau $4x+5y=25$ setelah dikalikan $25$. (b) Pada sumbu-$x$, $y=0$ sehingga $4x=25$ dan $x=\\dfrac{25}{4}=6{,}25$. Titik potongnya $\\left(\\dfrac{25}{4},0\\right)$. (c) Substitusi $y=\\dfrac{25-4x}{5}$ ke persamaan elips menghasilkan persamaan kuadrat dalam $x$ dengan diskriminan nol, sehingga hanya ada satu solusi. Satu titik potong inilah yang membuat garis menjadi garis singgung.',
    explanation:
      'Kunci: memakai rumus garis singgung elips di satu titik, menghitung titik potong dengan sumbu-$x$, dan menjelaskan ketunggalan titik singgung melalui diskriminan nol.',
    hints: [
      'Gunakan $\\dfrac{x\\,x_{1}}{a^{2}}+\\dfrac{y\\,y_{1}}{b^{2}}=1$ lalu kalikan dengan penyebut bersama.',
      'Titik potong sumbu-$x$ diperoleh dengan menetapkan $y=0$.',
      'Garis singgung menyentuh elips di satu titik ketika persamaan gabungannya berdiskriminan nol.',
    ],
    competencies: ['garis singgung elips', 'penalaran', 'pembuktian'],
    rubric: [
      'Memperoleh persamaan garis singgung $4x+5y=25$',
      'Menentukan titik potong sumbu-$x$ $\\left(\\dfrac{25}{4},0\\right)$',
      'Menjelaskan ketunggalan titik singgung melalui diskriminan nol',
    ],
  },
  {
    id: 'ik-10',
    topicId: 'irisan-kerucut',
    difficulty: 'cakap',
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
      '$a = 5$, $b = 4$, sehingga $c = \\sqrt{25 - 16} = 3$. Karena sumbu mayor sejajar sumbu-$x$, fokusnya $(2 \\pm 3, 1)$, yaitu $(-1,1)$ dan $(5,1)$ (A). Opsi B bergeser pada arah $y$; opsi C memakai $c=1$; opsi D memakai $c=5$ (nilai $a$, bukan $c$).',
    hints: [
      'Fokus bergeser dari pusat sejauh $c$ sepanjang sumbu mayor.',
      'Hitung $c=\\sqrt{a^{2}-b^{2}}=\\sqrt{25-16}=3$.',
    ],
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
    hints: [
      'Koefisien $x^{2}$ dan $y^{2}$ harus $1$ sebelum memakai rumus pusat.',
      'Setelah dibagi $2$ dan pusat diketahui, hitung $r=\\sqrt{\\left(\\dfrac{D}{2}\\right)^{2}+\\left(\\dfrac{E}{2}\\right)^{2}-F}$.',
    ],
    competencies: ['persamaan lingkaran bentuk umum', 'melengkapkan kuadrat'],
    rubric: [
      'Membagi persamaan dengan $2$ terlebih dahulu',
      'Menentukan pusat $(2,-3)$',
      'Menghitung jari-jari $r=4$',
      'Menulis bentuk baku $(x-2)^{2}+(y+3)^{2}=16$',
    ],
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
    hints: [
      'Panjang sumbu mayor adalah $2a$ dan sumbu minor $2b$.',
      'Hitung $c=\\sqrt{a^{2}-b^{2}}$ lalu $e=\\dfrac{c}{a}$.',
    ],
    competencies: ['persamaan elips', 'eksentrisitas elips'],
    rubric: [
      'Mengubah sumbu mayor $10$ menjadi $a=5$ dan minor $6$ menjadi $b=3$',
      'Menulis persamaan $\\dfrac{x^{2}}{25}+\\dfrac{y^{2}}{9}=1$',
      'Menghitung $c=\\sqrt{25-9}=4$',
      'Menghitung eksentrisitas $e=\\dfrac{4}{5}=0{,}8$',
    ],
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
    rubric: [
      'Menentukan $a=6$ dan $b=4$, sehingga sumbu mayor $2a=12$',
      'Menghitung $c=\\sqrt{36-16}=2\\sqrt{5}\\approx4{,}47$',
      'Menghitung eksentrisitas $e=\\dfrac{\\sqrt{5}}{3}\\approx0{,}745$',
      'Menjelaskan $e\\to0$ membuat elips mendekati lingkaran',
      'Menjelaskan $e\\to1$ membuat elips makin pipih',
    ],
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
    rubric: [
      'Membaca semi-sumbu vertikal $b=8$ sebagai tinggi maksimum',
      'Menyimpulkan tinggi langit-langit $8$ m',
      'Menghitung $c=\\sqrt{100-64}=6$',
      'Menentukan jarak antarfokus $2c=12$ m',
    ],
  },
  {
    id: 'ik-15',
    topicId: 'irisan-kerucut',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Sketsa berikut menunjukkan sebuah elips berpusat di titik asal dengan titik puncak pada sumbu-$x$ di $(5,0)$ dan $(-5,0)$ serta titik puncak pada sumbu-$y$ di $(0,3)$ dan $(0,-3)$. Persamaan elips tersebut adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{x^{2}}{25}+\\dfrac{y^{2}}{9}=1$' },
      { key: 'B', text: '$\\dfrac{x^{2}}{9}+\\dfrac{y^{2}}{25}=1$' },
      { key: 'C', text: '$\\dfrac{x^{2}}{25}-\\dfrac{y^{2}}{9}=1$' },
      { key: 'D', text: '$\\dfrac{x^{2}}{16}+\\dfrac{y^{2}}{9}=1$' },
    ],
    answer: 'A',
    explanation:
      'Karena titik puncak terjauh berada pada sumbu-$x$ di $(\\pm5,0)$, maka $a=5$ pada suku $x$ dan $b=3$ pada suku $y$, sehingga persamaannya $\\dfrac{x^{2}}{25}+\\dfrac{y^{2}}{9}=1$ (A). Opsi B menukar $a$ dan $b$ sehingga sumbu mayornya menjadi vertikal; opsi C memakai tanda kurang sehingga menjadi hiperbola; opsi D memakai $a^{2}=16$ padahal titik puncaknya di $x=\\pm5$.',
    figure: {
      svg: '<svg viewBox="0 0 240 170" role="img" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="85" x2="230" y2="85" stroke="currentColor" stroke-width="1" opacity="0.35"/><line x1="120" y1="10" x2="120" y2="160" stroke="currentColor" stroke-width="1" opacity="0.35"/><ellipse cx="120" cy="85" rx="90" ry="54" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="48" cy="85" r="3" fill="currentColor"/><circle cx="192" cy="85" r="3" fill="currentColor"/><text x="203" y="102" fill="currentColor" font-size="12">5</text><text x="126" y="24" fill="currentColor" font-size="12">3</text><text x="28" y="102" fill="currentColor" font-size="12">-5</text></svg>',
      alt: 'Sketsa elips berpusat di titik asal dengan titik puncak di (5,0), (-5,0), (0,3), dan (0,-3), serta dua titik fokus di sumbu-x.',
      caption: 'Elips berpusat di titik asal dengan sumbu mayor horizontal.',
    },
    hints: [
      'Titik puncak terjauh menentukan nilai $a$ dan arah sumbu mayor.',
      'Penyebut suku $x$ adalah $a^{2}$ dan penyebut suku $y$ adalah $b^{2}$.',
    ],
    competencies: ['persamaan elips', 'representasi grafik'],
  },
];

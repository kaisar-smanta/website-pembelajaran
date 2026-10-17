// Verifikasi nilai matematika topik Fungsi Nilai Mutlak, Tangga, dan Piecewise:
// persamaan/pertidaksamaan nilai mutlak, penilaian piecewise, kontinuitas di
// titik sambung, tarif bertingkat, dan angka studi kasus ongkos kirim.
// Dipanggil otomatis oleh tests/run-all.mjs.
//
// Pemakaian: node tests/mtl-fungsi-khusus.mjs
import { checkFileExists, close, ok, report } from './_util.mjs';

const abs = Math.abs;

// ---------- Persamaan nilai mutlak ----------
// |2x - 5| = 7 memberi x = -1 atau x = 6.
close(abs(2 * -1 - 5), 7, '|2x-5|=7 pada x=-1', 1e-12);
close(abs(2 * 6 - 5), 7, '|2x-5|=7 pada x=6', 1e-12);
// |3x - 6| = |x + 2| memberi x = 1 atau x = 4.
close(abs(3 * 1 - 6), abs(1 + 2), '|3x-6|=|x+2| pada x=1', 1e-12);
close(abs(3 * 4 - 6), abs(4 + 2), '|3x-6|=|x+2| pada x=4', 1e-12);

// ---------- Pertidaksamaan nilai mutlak ----------
// |x - 3| <= 5 memberi -2 <= x <= 8.
close(abs(-2 - 3), 5, 'batas bawah |x-3|<=5 di x=-2', 1e-12);
close(abs(8 - 3), 5, 'batas atas |x-3|<=5 di x=8', 1e-12);
ok(abs(-3 - 3) > 5, 'x=-3 di luar |x-3|<=5');
ok(abs(9 - 3) > 5, 'x=9 di luar |x-3|<=5');
// |2x - 4| > 6 memberi x < -1 atau x > 5.
ok(abs(2 * -2 - 4) > 6, 'x=-2 memenuhi |2x-4|>6');
ok(abs(2 * 0 - 4) <= 6, 'x=0 tidak memenuhi |2x-4|>6');
ok(abs(2 * 6 - 4) > 6, 'x=6 memenuhi |2x-4|>6');

// ---------- Penilaian fungsi piecewise ----------
const h = (x) => (x < 0 ? x * x - 1 : 3 * x + 2);
close(h(-2), 3, 'h(-2) pada potongan x<0', 0);
close(h(0), 2, 'h(0) pada potongan x>=0', 0);
close(h(3), 11, 'h(3) pada potongan x>=0', 0);

const f = (x) => (x < 2 ? x + 1 : x * x - 1);
close(f(0), 1, 'f(0) pada potongan x<2', 0);
close(f(2), 3, 'f(2) pada potongan x>=2', 0);
close(f(4), 15, 'f(4) pada potongan x>=2', 0);

// ---------- Kontinuitas di titik sambung ----------
const fLeft = 2 + 1;
close(fLeft, f(2), 'f kontinu di x=2 (nilai kiri = nilai fungsi)', 0);

const gLeft = 1 + 2;
const gRight = 1 * 1 + 1;
close(gLeft, 3, 'g nilai kiri di x=1', 0);
close(gRight, 2, 'g nilai kanan di x=1', 0);
close(abs(gLeft - gRight), 1, 'lompatan g di x=1 sebesar 1', 0);

// Parameter k agar fungsi kontinu: 2k - 1 = 5.
const k = (5 + 1) / 2;
close(k, 3, 'k agar f kontinu di x=2', 0);
close(2 * k - 1, 5, 'cek 2k-1 = nilai kiri', 0);

// ---------- Tarif ongkos kirim bertingkat ----------
function ongkosKirim(w) {
  if (w <= 1) return 8000;
  if (w <= 3) return 8000 + 4000 * (w - 1);
  if (w <= 5) return 16000 + 3000 * (w - 3);
  return 22000 + 2000 * (w - 5);
}
close(ongkosKirim(1), 8000, 'ongkos 1 kg', 0);
close(ongkosKirim(2), 12000, 'ongkos 2 kg', 0);
close(ongkosKirim(3), 16000, 'ongkos 3 kg', 0);
close(ongkosKirim(4), 19000, 'ongkos 4 kg', 0);
close(ongkosKirim(5), 22000, 'ongkos 5 kg', 0);
close(ongkosKirim(6), 24000, 'ongkos 6 kg', 0);
close(ongkosKirim(8), 28000, 'ongkos 8 kg', 0);
// Kontinuitas di batas 3 kg.
close(8000 + 4000 * (3 - 1), 16000 + 3000 * (3 - 3), 'ongkos menyambung di w=3', 0);
close(16000 + 3000 * (5 - 3), 22000 + 2000 * (5 - 5), 'ongkos menyambung di w=5', 0);
// Pertanyaan kebalikan: tagihan 25.000 -> berat 6,5 kg.
const beratInvers = 5 + (25000 - 22000) / 2000;
close(beratInvers, 6.5, 'berat dari tagihan 25.000', 1e-12);
close(ongkosKirim(beratInvers), 25000, 'cek ongkos 6,5 kg', 0);

// ---------- Angka studi kasus lain ----------
// Taksi: 10.000 + 4.000(d - 3) = 27.000 -> d = 7,25.
const jarakTaksi = 3 + (27000 - 10000) / 4000;
close(jarakTaksi, 7.25, 'jarak taksi dari tarif 27.000', 1e-12);
close(10000 + 4000 * (jarakTaksi - 3), 27000, 'cek tarif taksi 7,25 km', 0);

// Pajak progresif per lapisan.
function pajak(H) {
  if (H <= 60) return 0.05 * H;
  if (H <= 250) return 3 + 0.15 * (H - 60);
  if (H <= 500) return 31.5 + 0.25 * (H - 250);
  return 94 + 0.3 * (H - 500);
}
close(pajak(60), 3, 'pajak penghasilan 60 juta', 1e-12);
close(pajak(250), 31.5, 'pajak penghasilan 250 juta', 1e-12);
close(pajak(300), 44, 'pajak penghasilan 300 juta', 1e-12);
close(3 + 0.15 * (250 - 60), 31.5 + 0.25 * (250 - 250), 'pajak menyambung di H=250', 1e-12);
close(31.5 + 0.25 * (500 - 250), 94 + 0.3 * (500 - 500), 'pajak menyambung di H=500', 1e-12);

// Paket internet: 100.000 untuk 10 GB pertama, lalu 15.000 per GB lebih.
function biayaInternet(d) {
  return d <= 10 ? 100000 : 100000 + 15000 * (d - 10);
}
close(biayaInternet(10), 100000, 'biaya internet 10 GB', 0);
close(biayaInternet(14), 160000, 'biaya internet 14 GB', 0);

// ---------- Berkas konten baru ----------
checkFileExists('topik nilai mutlak piecewise', 'src/data/topics/fungsi-nilai-mutlak-piecewise.ts');
checkFileExists('soal nilai mutlak piecewise', 'src/data/questions/fungsi-nilai-mutlak-piecewise.ts');
checkFileExists('studi kasus ongkos kirim', 'src/data/applications/keuangan.ts');

report();

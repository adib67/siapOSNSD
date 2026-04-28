import { SubjectMaterials, SubjectQuestions } from './types';

export const subjects: SubjectMaterials[] = [
  {
    id: 'matematika',
    title: 'Matematika',
    icon: 'Calculator',
    color: 'bg-blue-500',
    sections: [
      {
        title: 'Bilangan Cacah & Operasi Hitungnya',
        content: 'Bilangan cacah adalah bilangan yang dimulai dari angka nol (0, 1, 2, 3, ...). Operasi hitung meliputi penjumlahan, pengurangan, perkalian, dan pembagian. Aturan prioritas operasi (KABATAKU: Kali, Bagi, Tambah, Kurang) sangat penting. Jika ada kurung, selesaikan dalam kurung terlebih dahulu.',
        subsections: [
          { title: 'Sifat Komutatif', content: 'a + b = b + a atau a × b = b × a. Urutan tidak mengubah hasil.' },
          { title: 'Sifat Distributif', content: 'a × (b + c) = (a × b) + (a × c). Berlaku untuk perkalian terhadap penjumlahan.' }
        ]
      },
      {
        title: 'KPK dan FPB',
        content: 'KPK (Kelipatan Persekutuan Terkecil) digunakan untuk mencari waktu bertemu kembali atau kelipatan bersama terkecil. FPB (Faktor Persekutuan Terbesar) digunakan untuk membagi barang dalam jumlah yang sama banyak ke dalam beberapa wadah. Bilangan prima (2, 3, 5, 7, 11, ...) sangat membantu dalam mencari KPK dan FPB melalui pohon faktor atau metode tabel.',
      },
      {
        title: 'Geometri: Bangun Datar & Ruang',
        content: 'Bangun Datar: Persegi (K = 4 × s, L = s²), Persegi Panjang (K = 2 × [p + l], L = p × l), Segitiga (L = ½ × a × t), Lingkaran (L = π × r²). Bangun Ruang: Kubus (V = s³), Balok (V = p × l × t), Prisma, dan Tabung. Memahami jaring-jaring juga menjadi bagian penting dalam soal olimpiade.',
        subsections: [
          { title: 'Sifat-sifat Bangun Datar', content: 'Persegi memiliki 4 sisi sama panjang dan 4 sudut siku-siku. Segitiga sama sisi memiliki 3 sisi sama panjang dan 3 sudut 60°. Lingkaran memiliki simetri putar tak terhingga.' },
          { title: 'Volume & Luas Permukaan', content: 'Luas Permukaan Kubus = 6 × s². Luas Permukaan Balok = 2 × (p×l + p×t + l×t). Volume Tabung = π × r² × t.' }
        ]
      },
      {
        title: 'Statistika Data & Pengukuran',
        content: 'Meliputi Mean (rata-rata), Modus (nilai paling banyak muncul), dan Median (nilai tengah setelah data diurutkan). Satuan juga penting: Konversi satuan panjang (km-hm-dam-m-dm-cm-mm), satuan berat (kg-hg/ons-dag-g-dg-cg-mg), dan satuan waktu (1 jam = 60 menit, 1 menit = 60 detik).',
        subsections: [
          { title: 'Cara Menghitung Mean', content: 'Mean = (Jumlah Semua Data) ÷ (Banyaknya Data). Digunakan untuk menentukan nilai rata-rata kelompok.' },
          { title: 'Median Data Ganjil & Genap', content: 'Jika data ganjil, median adalah nilai paling tengah. Jika genap, median adalah rata-rata dua nilai tengah.' }
        ]
      }
    ]
  },
  {
    id: 'ipa',
    title: 'IPA (Sains)',
    icon: 'Beaker',
    color: 'bg-green-500',
    sections: [
      {
        title: 'Makhluk Hidup & Lingkungannya',
        content: 'Mempelajari klasifikasi makhluk hidup (5 Kingdom: Monera, Protista, Fungi, Plantae, Animalia), rantai makanan, dan jaring-jaring makanan. Hubungan antar makhluk hidup (simbiosis mutualisme, komensalisme, parasitisme) sering muncul dalam soal.',
      },
      {
        title: 'Struktur & Fungsi Tubuh Manusia',
        content: 'Memahami sistem pencernaan (mulut-kerongkongan-lambung-usus halus-usus besar-anus), sistem pernapasan (hidung-tenggorokan-paru-paru), sistem peredaran darah, dan alat indra. Setiap organ memiliki fungsi spesifik yang bekerja sama menjaga kelangsungan hidup.',
        subsections: [
          { title: 'Sistem Pencernaan', content: 'Lambung berfungsi menghancurkan makanan dengan bantuan enzim pepsin dan asam klorida (HCl). Penyerapan sari makanan terjadi di usus halus.' },
          { title: 'Sistem Pernapasan', content: 'Pertukaran Oksigen (O₂) dan Karbondioksida (CO₂) terjadi di alveolus yang berada di paru-paru.' }
        ]
      },
      {
        title: 'Mekanika & Wujud Benda',
        content: 'Gerak benda (GLB, GLBB), gaya (gesek, magnet, gravitasi, otot, pegas), dan energi (kinetik, potensial, panas, bunyi). Sifat benda padat, cair, dan gas serta perubahan wujudnya (mencair, membeku, menguap, mengembun, menyublim, mengkristal) adalah materi dasar yang krusial.',
        subsections: [
          { title: 'Perubahan Wujud', content: 'Menyublim: Padat ke Gas (misal: kapur barus). Mengkristal: Gas ke Padat (misal: salju). Mengembun: Gas ke Cair (misal: titik air di daun pagi hari).' }
        ]
      },
      {
        title: 'Bumi & Tata Surya',
        content: 'Memahami rotasi bumi (penyebab siang-malam) dan revolusi bumi (penyebab perubahan musim). Urutan planet dalam tata surya serta ciri khas masing-masing planet (misal: Jupiter planet terbesar, Mars planet merah).',
      }
    ]
  },
  {
    id: 'ips',
    title: 'IPS',
    icon: 'Globe',
    color: 'bg-orange-500',
    sections: [
      {
        title: 'Letak Geografis & Astronomis',
        content: 'Indonesia secara geografis di antara Asia-Australia dan Pasifik-Hindia. Secara astronomis di 6°LU – 11°LS dan 95°BT – 141°BT. Ini menyebabkan Indonesia beriklim tropis dengan dua musim: hujan dan kemarau.',
      },
      {
        title: 'Keanekaragaman Budaya & Sosial',
        content: 'Bhinneka Tunggal Ika (Berbeda-beda tetapi tetap satu jua). Indonesia memiliki ratusan suku bangsa (Jawa, Sunda, Batak, Dayak, dll) dan budaya yang unik. Melestarikan budaya daerah adalah tugas setiap warga negara.',
      },
      {
        title: 'Sumber Daya Alam (SDA)',
        content: 'SDA yang dapat diperbarui (tumbuhan, hewan, air) dan tidak dapat diperbarui (minyak bumi, batubara, emas). Pengelolaan SDA harus dilakukan secara bijaksana (3R: Reduce, Reuse, Recycle) untuk pembangunan berkelanjutan.',
      },
      {
        title: 'Sejarah & Perjuangan Bangsa',
        content: 'Masa Kerajaan Hindu-Budha (Majapahit, Sriwijaya), masuknya Islam (Walisongo), masa kolonialisme, hingga Proklamasi Kemerdekaan. Tokoh pahlawan seperti Soekarno, Hatta, dan Ki Hajar Dewantara adalah inspirasi perjuangan bangsa.',
      }
    ]
  }
];

export const allQuestions: SubjectQuestions[] = [
  {
    subjectId: 'matematika',
    questions: [
      { id: 1, text: 'Hasil dari 125 × 24 adalah ....', options: ['2.800', '3.000', '3.125', '3.600'], answer: 'B', explanation: 'Gunakan perkalian bersusun: 125 × 24 = 3.000.' },
      { id: 2, text: 'Sebuah segitiga memiliki panjang alas 12 cm dan tinggi 10 cm. Luas segitiga tersebut adalah ....', options: ['60 cm²', '100 cm²', '120 cm²', '240 cm²'], answer: 'A', explanation: 'Luas Segitiga = ½ × alas × tinggi = ½ × 12 × 10 = 60 cm².' },
      { id: 3, text: 'Hasil dari 3² + 4² adalah ....', options: ['12', '16', '25', '32'], answer: 'C', explanation: '3² = 9 dan 4² = 16. Maka 9 + 16 = 25.' },
      { id: 4, text: 'Faktor persekutuan terbesar (FPB) dari 36 dan 48 adalah ....', options: ['4', '6', '12', '24'], answer: 'C', explanation: 'Faktor 36: 1,2,3,4,6,9,12,18,36. Faktor 48: 1,2,3,4,6,8,12,16,24,48. FPB adalah 12.' },
      { id: 5, text: 'Rata-rata dari bilangan 8, 12, 16, dan 24 adalah ....', options: ['14', '15', '16', '18'], answer: 'B', explanation: 'Rata-rata = (8 + 12 + 16 + 24) ÷ 4 = 60 ÷ 4 = 15.' },
      { id: 6, text: 'Nilai dari 1.000 – (250 + 125 + 75) adalah ....', options: ['500', '550', '600', '700'], answer: 'B', explanation: 'Selesaikan dalam kurung dulu: 250+125+75 = 450. Lalu 1000 - 450 = 550.' },
      { id: 7, text: 'Diketahui keliling persegi adalah 64 cm. Maka panjang sisi persegi tersebut adalah ....', options: ['8 cm', '12 cm', '16 cm', '20 cm'], answer: 'C', explanation: 'Sisi = Keliling ÷ 4 = 64 ÷ 4 = 16 cm.' },
      { id: 8, text: 'Hasil dari 2 × (3 + 5) – 4 adalah ....', options: ['8', '10', '12', '16'], answer: 'C', explanation: 'Selesaikan dalam kurung: 3+5=8. Lalu 2×8=16. Terakhir 16-4=12.' },
      { id: 9, text: 'Jika 1 rim kertas berisi 500 lembar, maka 2,5 rim kertas berisi .... lembar.', options: ['1.000', '1.200', '1.250', '1.500'], answer: 'C', explanation: '2,5 × 500 = 1.250 lembar.' },
      { id: 10, text: 'Bentuk sederhana dari pecahan 45/60 adalah ....', options: ['2/3', '3/4', '4/5', '5/6'], answer: 'B', explanation: 'Bagi pembilang dan penyebut dengan FPB 15: 45 ÷ 15 = 3, 60 ÷ 15 = 4. Hasilnya 3/4.' },
      { id: 11, text: 'Satu lusin ditambah setengah kodi sama dengan .... buah.', options: ['16', '18', '22', '32'], answer: 'C', explanation: '1 lusin = 12, ½ kodi = 10. Total = 12 + 10 = 22.' },
      { id: 12, text: 'Hasil dari 2.340 ÷ 13 adalah ....', options: ['170', '180', '190', '200'], answer: 'B', explanation: 'Gunakan pembagian porogapit: 2.340 ÷ 13 = 180.' },
      { id: 13, text: 'Jumlah semua bilangan ganjil antara 10 dan 20 adalah ....', options: ['75', '60', '45', '80'], answer: 'A', explanation: 'Bilangan ganjil: 11, 13, 15, 17, 19. Jumlah = 11+13+15+17+19 = 75.' },
      { id: 14, text: 'Sebuah mobil menempuh jarak 180 km dalam waktu 3 jam. Kecepatan rata-ratanya adalah ....', options: ['50 km/jam', '55 km/jam', '60 km/jam', '65 km/jam'], answer: 'C', explanation: 'Kecepatan = Jarak ÷ Waktu = 180 ÷ 3 = 60 km/jam.' },
      { id: 15, text: 'Volume kubus dengan panjang sisi 8 cm adalah ....', options: ['512 cm³', '256 cm³', '384 cm³', '640 cm³'], answer: 'A', explanation: 'Volume = sisi³ = 8 × 8 × 8 = 512 cm³.' },
      { id: 16, text: 'Nilai tempat angka 7 pada bilangan 37.429 adalah ....', options: ['Ratusan', 'Ribuan', 'Puluhan ribu', 'Satuan'], answer: 'B', explanation: 'Angka 7 berada pada posisi ribuan.' },
      { id: 17, text: 'Pecahan desimal dari 7/8 adalah ....', options: ['0,75', '0,775', '0,875', '0,825'], answer: 'C', explanation: '7 dibagi 8 = 0,875.' },
      { id: 18, text: 'Jika X + 3 = 17, maka nilai X adalah ....', options: ['13', '14', '15', '16'], answer: 'B', explanation: 'X = 17 - 3 = 14.' },
      { id: 19, text: 'Perbandingan uang Budi dan Andi adalah 5:3. Jika jumlah uang mereka Rp160.000, maka uang Budi adalah ....', options: ['Rp80.000', 'Rp90.000', 'Rp100.000', 'Rp120.000'], answer: 'C', explanation: 'Total bagian = 5+3=8. Uang Budi = 5/8 × 160.000 = Rp100.000.' },
      { id: 20, text: 'Sebuah kolam diisi air dengan debit 12 liter per menit. Dalam 2 jam, air yang mengalir adalah ....', options: ['720 liter', '1.200 liter', '1.440 liter', '2.400 liter'], answer: 'C', explanation: 'Waktu = 2 jam = 120 menit. Volume = Debit × Waktu = 12 × 120 = 1.440 liter.' },
      { id: 21, text: 'Banyak sisi pada bangun prisma segi enam adalah ....', options: ['8', '10', '12', '14'], answer: 'A', explanation: 'Prisma segi-n memiliki n+2 sisi. Jadi, 6+2 = 8 sisi.' },
      { id: 22, text: 'Hasil dari 25×4 + 60÷3 adalah ....', options: ['160', '130', '140', '120'], answer: 'D', explanation: '25×4 = 100, 60÷3 = 20. Total = 100 + 20 = 120.' },
      { id: 23, text: 'Bilangan kelipatan 6 antara 40 dan 60 adalah sebanyak ....', options: ['2', '3', '4', '5'], answer: 'B', explanation: 'Kelipatan 6: 42, 48, 54. Total ada 3 bilangan.' },
      { id: 24, text: 'Hasil dari 8² - 6² adalah ....', options: ['24', '26', '28', '36'], answer: 'C', explanation: '64 - 36 = 28.' },
      { id: 25, text: 'Sudut terkecil antara jarum jam dan menit pada pukul 12:15 adalah ....', options: ['82,5°', '90°', '67,5°', '75°'], answer: 'A', explanation: 'Sudut jam = (15 ÷ 60) × 30 = 7,5°. Sudut menit = 15 × 6 = 90°. Selisih = 82,5°.' },
      { id: 26, text: 'Jumlah dua bilangan adalah 96 dan selisihnya 24. Bilangan yang terkecil adalah ....', options: ['36', '48', '60', '72'], answer: 'A', explanation: 'x + y = 96, x - y = 24. 2y = 96 - 24 = 72. y = 36.' },
      { id: 27, text: 'Banyaknya kelereng 60, merah ada 15. Persentase kelereng merah adalah ....', options: ['15%', '20%', '25%', '30%'], answer: 'C', explanation: 'Persen = (15 ÷ 60) × 100% = ¼ × 100% = 25%.' },
      { id: 28, text: '3 kg 250 gram sama dengan .... gram.', options: ['3.250', '3.500', '3.750', '4.000'], answer: 'A', explanation: '3 kg = 3.000 g. Total = 3.000 + 250 = 3.250 gram.' },
      { id: 29, text: 'Hasil dari 3/4 × 2 1/2 adalah ....', options: ['13/8', '15/8', '17/8', '19/8'], answer: 'B', explanation: '3/4 × 5/2 = 15/8.' },
      { id: 30, text: 'Nilai rata-rata dari 6, 8, 10, 12, dan 14 adalah ....', options: ['10', '11', '12', '13'], answer: 'A', explanation: 'Jumlah = 50. Rata-rata = 50 ÷ 5 = 10.' },
      { id: 31, text: 'Hasil dari (45+15) ÷ 5 adalah ....', options: ['10', '11', '12', '13'], answer: 'C', explanation: '60 ÷ 5 = 12.' },
      { id: 32, text: 'Sederhanakan pecahan 36/48 ....', options: ['3/4', '4/5', '2/3', '3/5'], answer: 'A', explanation: 'Bagi dengan FPB 12: 36 ÷ 12 = 3, 48 ÷ 12 = 4. Hasilnya 3/4.' },
      { id: 33, text: 'Hasil dari 125 ÷ 5 × 4 adalah ....', options: ['80', '90', '100', '110'], answer: 'C', explanation: '25 × 4 = 100.' },
      { id: 34, text: 'Sebuah lingkaran berdiameter 28 cm. Kelilingnya adalah .... (π=22/7)', options: ['88 cm', '66 cm', '44 cm', '76 cm'], answer: 'A', explanation: 'Keliling = π × d = 22/7 × 28 = 88 cm.' },
      { id: 35, text: 'Rata-rata 5 bilangan adalah 20. Jika satu bilangan diubah dari 24 menjadi 14, rata-ratanya?', options: ['18', '19', '21', '22'], answer: 'A', explanation: 'Total awal 100. Selisih 10. Total baru 90. Rerata baru 90 ÷ 5 = 18.' },
      { id: 36, text: 'Lengkapi pola berikut: 2, 5, 10, 17, 26, ....', options: ['35', '37', '39', '41'], answer: 'B', explanation: 'Selisih: +3, +5, +7, +9. Berikutnya +11. 26 + 11 = 37.' },
      { id: 37, text: 'Hasil dari (15−3) × 2 + 8 ÷ 4 adalah ....', options: ['24', '26', '27', '28'], answer: 'B', explanation: '12 × 2 + 2 = 24 + 2 = 26.' },
      { id: 38, text: 'Harga sebuah tas Rp200.000 diskon 20%. Harga setelah diskon?', options: ['Rp180.000', 'Rp160.000', 'Rp150.000', 'Rp140.000'], answer: 'B', explanation: 'Potongan = 20% × 200k = 40k. Harga = 200k - 40k = 160k.' },
      { id: 39, text: '3 kg apel @25k dan 2 kg jeruk @30k. Total bayar?', options: ['Rp105.000', 'Rp115.000', 'Rp135.000', 'Rp100.000'], answer: 'C', explanation: '75k + 60k = 135k.' },
      { id: 41, text: 'Hasil dari 5² + 12² adalah ....²', options: ['13²', '14²', '15²', '17²'], answer: 'A', explanation: '25 + 144 = 169. 13² = 169.' },
      { id: 42, text: 'Sebuah taman berbentuk lingkaran dengan jari-jari 7 m. Luasnya adalah ....', options: ['150 m²', '154 m²', '160 m²', '164 m²'], answer: 'B', explanation: 'Luas = 22/7 × 7 × 7 = 154 m².' },
      { id: 43, text: 'KPK dari 12 dan 15 adalah ....', options: ['30', '45', '60', '75'], answer: 'C', explanation: 'Kelipatan 12: 12, 24, 36, 48, 60. Kelipatan 15: 15, 30, 45, 60. KPK = 60.' },
      { id: 44, text: 'Hasil dari 1.200 ÷ 40 × 5 adalah ....', options: ['120', '150', '180', '200'], answer: 'B', explanation: '30 × 5 = 150.' },
      { id: 45, text: 'Sudut siku-siku besarnya adalah ....', options: ['45°', '90°', '180°', '360°'], answer: 'B', explanation: 'Sudut siku-siku tepat 90 derajat.' },
      { id: 46, text: 'Banyak rusuk pada kubus adalah ....', options: ['6', '8', '10', '12'], answer: 'D', explanation: 'Kubus memiliki 12 rusuk sama panjang.' },
      { id: 47, text: 'Hasil dari 0,25 + 0,5 adalah ....', options: ['0,30', '0,75', '0,80', '0,35'], answer: 'B', explanation: '0,25 + 0,50 = 0,75.' },
      { id: 48, text: 'Pecahan 2/5 jika diubah ke persen menjadi ....', options: ['20%', '30%', '40%', '50%'], answer: 'C', explanation: '2/5 × 100% = 40%.' },
      { id: 49, text: 'Volume balok dengan p=10, l=5, t=4 adalah ....', options: ['150', '180', '200', '220'], answer: 'C', explanation: '10 × 5 × 4 = 200.' },
      { id: 50, text: 'Modus dari data 2, 3, 3, 4, 5, 5, 5, 6 adalah ....', options: ['3', '4', '5', '6'], answer: 'C', explanation: 'Angka 5 muncul paling sering (3 kali).' }
    ]
  },
  {
    subjectId: 'ipa',
    questions: [
      { id: 1, text: 'Rantai makanan dalam suatu ekosistem yang tidak terputus menandakan ....', options: ['Lingkungan yang berubah', 'Keseimbangan ekosistem', 'Populasi meningkat', 'Ketidakseimbangan ekosistem'], answer: 'B', explanation: 'Keseimbangan ekosistem terjaga jika aliran energi terus berlanjut.' },
      { id: 2, text: 'Ujung saraf yang menerima rasa dingin saat memegang es yaitu ....', options: ['Paccini', 'Krause', 'Ruffini', 'Meissner'], answer: 'B', explanation: 'Krause adalah reseptor saraf untuk suhu dingin.' },
      { id: 3, text: 'Permukaan bumi sebagiannya tertutup oleh air yang disebut hidrosfer. Kandungan terbesar adalah ....', options: ['Oksigen', 'Nitrogen', 'Karbondioksida', 'Hidrogen'], answer: 'D', explanation: 'Air terdiri dari H₂O, di mana atom Hidrogen melimpah.' },
      { id: 4, text: 'Protozoa bereproduksi dengan cara ....', options: ['Fragmentasi', 'Pertunasan', 'Membelah diri', 'Spora'], answer: 'C', explanation: 'Protozoa (seperti amoeba) umumnya membelah diri biner.' },
      { id: 5, text: 'Ayam tergolong hewan .... karena memakan biji-bijian dan juga hewan kecil.', options: ['Herbivora', 'Pengurai', 'Karnivora', 'Omnivora'], answer: 'D', explanation: 'Omnivora adalah pemakan segala (tumbuhan dan hewan).' },
      { id: 6, text: 'Perkembangbiakan generatif pada tumbuhan hanya bisa terjadi pada tumbuhan yang memiliki ....', options: ['Akar', 'Daun', 'Batang', 'Bunga'], answer: 'D', explanation: 'Bunga adalah alat reproduksi generatif (penyerbukan).' },
      { id: 7, text: 'Bencana geologi yang disebabkan oleh pertemuan lempeng tektonik adalah ....', options: ['Gempa bumi', 'Tsunami', 'Gunung meletus', 'Banjir bandang'], answer: 'A', explanation: 'Gempa bumi tektonik terjadi karena pergeseran lempeng.' },
      { id: 8, text: 'Urutan warna pelangi dari yang terkecil ke terbesar jari-jarinya adalah ....', options: ['Merah...Ungu', 'Biru...Kuning', 'Hijau...Ungu', 'Nila, biru, hijau, kuning'], answer: 'D', explanation: 'Nila memiliki panjang gelombang terpendek dan jari-jari terkecil.' },
      { id: 9, text: 'Hubungan simbiosis mutualisme terjadi antara ....', options: ['Tanaman kacang dengan Rhizobium', 'Tanaman anggrek dengan pohon mangga', 'Kutu rambut dengan manusia', 'Tanaman benalu dengan pohon inang'], answer: 'A', explanation: 'Rhizobium mengikat nitrogen, kacang memberi nutrisi.' },
      { id: 10, text: 'Kromosom yang berfungsi untuk menentukan jenis kelamin suatu individu disebut ....', options: ['Gonosom', 'Autosom', 'Alel', 'Haploid'], answer: 'A', explanation: 'Gonosom adalah kromosom seks (X dan Y).' },
      { id: 11, text: 'Gaya yang bekerja pada pelontar ketapel saat digunakan adalah gaya ....', options: ['Gravitasi', 'Pegas', 'Gesek', 'Magnet'], answer: 'B', explanation: 'Ketapel menggunakan elastisitas benda yang merupakan gaya pegas.' },
      { id: 12, text: 'Bunyi tidak dapat merambat melalui ....', options: ['Udara', 'Air', 'Besi', 'Ruang hampa'], answer: 'D', explanation: 'Bunyi adalah gelombang mekanik yang perlu medium.' },
      { id: 13, text: 'Bagian mata yang mengatur banyaknya cahaya yang masuk adalah ....', options: ['Retina', 'Kornea', 'Iris', 'Pupil'], answer: 'D', explanation: 'Pupil mengecil dan membesar untuk mengatur cahaya.' },
      { id: 14, text: 'Zat makanan yang berfungsi sebagai pembangun tubuh adalah ....', options: ['Karbohidrat', 'Lemak', 'Protein', 'Vitamin'], answer: 'C', explanation: 'Protein sangat penting untuk pertumbuhan dan perbaikan sel.' },
      { id: 15, text: 'Planet yang dikenal sebagai planet merah adalah ....', options: ['Venus', 'Mars', 'Jupiter', 'Saturnus'], answer: 'B', explanation: 'Mars tampak merah karena besi oksida (karat).' },
      { id: 16, text: 'Hormon yang dihasilkan oleh testis pria disebut ....', options: ['Estrogen', 'Progesteron', 'Testosteron', 'Insulin'], answer: 'C', explanation: 'Testosteron adalah hormon seks utama pada pria.' },
      { id: 17, text: 'Gerak menutupnya daun putri malu karena sentuhan disebut ....', options: ['Seismonasti', 'Fotonasti', 'Fototropi', 'Geotropi'], answer: 'A', explanation: 'Nasti yang dipicu sentuhan mekanik disebut seismonasti.' },
      { id: 18, text: 'Pencernaan kimiawi protein pertama kali terjadi di ....', options: ['Mulut', 'Kerongkongan', 'Lambung', 'Usus Halus'], answer: 'C', explanation: 'Lambung menghasilkan pepsin untuk memecah protein.' },
      { id: 19, text: 'Hewan yang bernapas dengan trakea adalah ....', options: ['Ikan', 'Burung', 'Belalang', 'Cacing'], answer: 'C', explanation: 'Serangga (belalang) menggunakan sistem trakea.' },
      { id: 20, text: 'Tumbuhan yang menyimpan cadangan makanan di umbi akar adalah ....', options: ['Kentang', 'Wortel', 'Bawang merah', 'Tebu'], answer: 'B', explanation: 'Wortel menyimpan cadangan pada akarnya (umbi akar).' },
      { id: 21, text: 'Satuan daya dalam SI adalah ....', options: ['Joule', 'Newton', 'Watt', 'Volt'], answer: 'C', explanation: 'Daya diukur dalam Watt.' },
      { id: 22, text: 'Peristiwa penguapan air dari tumbuhan melalui stomata disebut ....', options: ['Respirasi', 'Fotosintesis', 'Transpirasi', 'Evaporasi'], answer: 'C', explanation: 'Transpirasi adalah hilangnya uap air dari tumbuhan.' },
      { id: 23, text: 'Benda yang dapat ditarik kuat oleh magnet disebut benda ....', options: ['Diamagnetik', 'Paramagnetik', 'Non-magnetik', 'Feromagnetik'], answer: 'D', explanation: 'Feromagnetik (besi/baja) ditarik kuat oleh magnet.' },
      { id: 24, text: 'Perubahan wujud dari padat menjadi gas disebut ....', options: ['Mencair', 'Menguap', 'Menyublim', 'Mengkristal'], answer: 'C', explanation: 'Menyublim adalah perubahan langsung dari padat ke gas.' },
      { id: 25, text: 'Bagian darah yang mengangkut oksigen adalah ....', options: ['Leukosit', 'Eritrosit', 'Trombosit', 'Plasma'], answer: 'B', explanation: 'Eritrosit (sel darah merah) mengandung hemoglobin.' },
      { id: 26, text: 'Alat ukur tekanan udara adalah ....', options: ['Termometer', 'Anemometer', 'Higrometer', 'Barometer'], answer: 'D', explanation: 'Barometer digunakan untuk mengukur tekanan atmosfer.' },
      { id: 27, text: 'Hubungan antara benalu dan pohon mangga adalah ....', options: ['Mutualisme', 'Komensalisme', 'Parasitisme', 'Amensalisme'], answer: 'C', explanation: 'Benalu mengambil nutrisi inang sehingga merugikan.' },
      { id: 28, text: 'Vitamin yang larut dalam lemak adalah ....', options: ['B dan C', 'A, D, E, K', 'Semua vitamin', 'Hanya Vitamin C'], answer: 'B', explanation: 'Vitamin larut lemak adalah A, D, E, K.' },
      { id: 29, text: 'Proses pembentukan makanan pada tumbuhan hijau disebut ....', options: ['Oksidasi', 'Fotosintesis', 'Respirasi', 'Fermentasi'], answer: 'B', explanation: 'Fotosintesis mengubah cahaya jadi energi kimia.' },
      { id: 30, text: 'Urutan planet dari yang terkecil adalah ....', options: ['Merkurius, Mars, Venus...', 'Bumi, Venus...', 'Jupiter...', 'Neptunus...'], answer: 'A', explanation: 'Merkurius adalah planet terkecil di tata surya.' },
      { id: 31, text: 'Bagian bunga yang berfungsi sebagai alat kelamin betina adalah ....', options: ['Benang sari', 'Mahkota', 'Putik', 'Kelopak'], answer: 'C', explanation: 'Putik adalah alat kelamin betina.' },
      { id: 32, text: 'Enzim yang terdapat di dalam ludah (saliva) adalah ....', options: ['Pepsin', 'Tripsin', 'Amilase/Ptialin', 'Lipase'], answer: 'C', explanation: 'Ptialin memecah amilum jadi maltosa di mulut.' },
      { id: 33, text: 'Sumber energi utama bagi kehidupan di bumi adalah ....', options: ['Makanan', 'Minyak bumi', 'Listrik', 'Matahari'], answer: 'D', explanation: 'Matahari adalah sumber energi primer bumi.' },
      { id: 34, text: 'Berikut yang termasuk hewan ovovivipar adalah ....', options: ['Ayam', 'Kucing', 'Ikan Hiu / Pari', 'Buaya'], answer: 'C', explanation: 'Ovovivipar bertelur-menetas di dalam.' },
      { id: 35, text: 'Sendi yang memungkinkan gerakan ke segala arah adalah ....', options: ['Sendi peluru', 'Sendi engsel', 'Sendi putar', 'Sendi pelana'], answer: 'A', explanation: 'Sendi peluru ada di bahu dan panggul.' },
      { id: 36, text: 'Zat hijau daun disebut ....', options: ['Stomata', 'Klorofil', 'Kambium', 'Xilem'], answer: 'B', explanation: 'Klorofil menangkap cahaya matahari.' },
      { id: 37, text: 'Lapisan udara yang menyelimuti bumi disebut ....', options: ['Litosfer', 'Hidrosfer', 'Atmosfer', 'Biosfer'], answer: 'C', explanation: 'Atmosfer melindungi bumi dari radiasi.' },
      { id: 38, text: 'Penyakit akibat kekurangan Vitamin C adalah ....', options: ['Rakhitis', 'Rabun senja', 'Sariawan/Skorbut', 'Anemia'], answer: 'C', explanation: 'Vitamin C menjaga gusi dan jaringan ikat.' },
      { id: 39, text: 'Benda yang volumenya tetap tapi bentuknya berubah sesuai wadah adalah ....', options: ['Batu', 'Minyak', 'Gas LPG', 'Kayu'], answer: 'B', explanation: 'Itu adalah ciri zat cair.' },
      { id: 41, text: 'Energi panas dari matahari sampai ke bumi melalui cara ....', options: ['Konduksi', 'Konveksi', 'Radiasi', 'Evaporasi'], answer: 'C', explanation: 'Radiasi adalah perpindahan panas tanpa medium.' },
      { id: 42, text: 'Bahan yang dapat menghantarkan panas dengan baik disebut ....', options: ['Isolator', 'Konduktor', 'Radiator', 'Generator'], answer: 'B', explanation: 'Logam adalah contoh konduktor yang baik.' },
      { id: 43, text: 'Bagian tumbuhan yang berfungsi sebagai tempat fotosintesis adalah ....', options: ['Akar', 'Batang', 'Bunga', 'Daun'], answer: 'D', explanation: 'Daun mengandung klorofil untuk fotosintesis.' },
      { id: 44, text: 'Gigi yang berfungsi untuk merobek makanan adalah ....', options: ['Gigi seri', 'Gigi taring', 'Gigi geraham depan', 'Gigi geraham belakang'], answer: 'B', explanation: 'Gigi taring berbentuk lancip untuk merobek.' },
      { id: 45, text: 'Penyakit pernapasan yang disebabkan oleh penyempitan saluran napas adalah ....', options: ['Flu', 'TBC', 'Asma', 'Bronkitis'], answer: 'C', explanation: 'Asma biasanya dipicu oleh alergi atau udara dingin.' },
      { id: 46, text: 'Planet yang memiliki cincin paling terlihat jelas adalah ....', options: ['Jupiter', 'Saturnus', 'Uranus', 'Neptunus'], answer: 'B', explanation: 'Cincin Saturnus terbuat dari es dan debu.' },
      { id: 47, text: 'Lapisan paling luar bumi yang padat disebut ....', options: ['Inti bumi', 'Mantel bumi', 'Kerak bumi', 'Litosfer'], answer: 'C', explanation: 'Kerak bumi tempat kita tinggal.' },
      { id: 48, text: 'Hewan yang mengalami metamorfosis sempurna adalah ....', options: ['Belalang', 'Kupu-kupu', 'Kecoa', 'Jangkrik'], answer: 'B', explanation: 'Kupu-kupu melalui fase ulat dan kepongpong.' },
      { id: 49, text: 'Alat untuk mengukur kecepatan angin adalah ....', options: ['Termometer', 'Barometer', 'Anemometer', 'Higrometer'], answer: 'C', explanation: 'Anemometer memiliki mangkok yang berputar.' },
      { id: 50, text: 'Zat yang dihasilkan dari proses fotosintesis adalah ....', options: ['Oksigen & Karbohidrat', 'Karbondioksida & Air', 'Oksigen & Nitrogen', 'Karbondioksida & Gula'], answer: 'A', explanation: 'Fotosintesis menghasilkan O₂ dan amilum/gula.' }
    ]
  },
  {
    subjectId: 'ips',
    questions: [
      { id: 1, text: 'Keterangan gambar pada peta untuk mewakili kenampakan alam dinamakan ....', options: ['Skala', 'Judul', 'Legenda', 'Kompas'], answer: 'C', explanation: 'Legenda menjelaskan arti simbol-simbol peta.' },
      { id: 2, text: 'Laut yang memisahkan dua pulau dinamakan ....', options: ['Danau', 'Samudra', 'Selat', 'Teluk'], answer: 'C', explanation: 'Selat adalah perairan sempit antar pulau.' },
      { id: 3, text: 'Gunung Semeru terdapat di provinsi ....', options: ['Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Bali'], answer: 'C', explanation: 'Gunung meletus di Jawa Timur ini tertinggi di Jawa.' },
      { id: 4, text: 'Sungai terpanjang di Indonesia adalah Sungai ....', options: ['Musi', 'Mahakam', 'Brantas', 'Kapuas'], answer: 'D', explanation: 'Sungai Kapuas (Kalbar) adalah yang terpanjang.' },
      { id: 5, text: 'Bhinneka Tunggal Ika mempunyai makna ....', options: ['Bersatu kita teguh', 'Berbeda-beda tapi tetap satu', 'Satu bahasa', 'Tanah airku'], answer: 'B', explanation: 'Semboyan persatuan dari Kitab Sutasoma.' },
      { id: 6, text: 'Candi Borobudur terdapat di pulau ....', options: ['Bali', 'Sumatera', 'Kalimantan', 'Jawa'], answer: 'D', explanation: 'Candi Budha di Magelang (Pulau Jawa).' },
      { id: 7, text: 'Bangsa yang pertama kali tiba di Malaka (1511) mencari rempah adalah ....', options: ['Belanda', 'Inggris', 'Portugis', 'Spanyol'], answer: 'C', explanation: 'Portugis pionir penjelajahan di Nusantara.' },
      { id: 8, text: 'Bapak Pendidikan Indonesia adalah ....', options: ['Soekarno', 'Hatta', 'Ki Hajar Dewantara', 'Agus Salim'], answer: 'C', explanation: 'Pendiri Taman Siswa.' },
      { id: 9, text: 'Pulau dengan penduduk paling padat di Indonesia adalah pulau ....', options: ['Sumatera', 'Kalimantan', 'Papua', 'Jawa'], answer: 'D', explanation: 'Jawa pusat populasi Indonesia.' },
      { id: 10, text: 'Kegiatan ekonomi menciptakan nilai guna barang disebut ....', options: ['Konsumsi', 'Distribusi', 'Produksi', 'Ekspor'], answer: 'C', explanation: 'Produksi mengolah bahan jadi barang/jasa.' },
      { id: 11, text: 'Sungai terpanjang di Pulau Sumatera adalah ....', options: ['Sungai Musi', 'Sungai Batanghari', 'Sungai Indragiri', 'Sungai Kampar'], answer: 'A', explanation: 'Sungai Musi arteri utama Sumsel.' },
      { id: 12, text: 'Lagu daerah "Ampar-Ampar Pisang" berasal dari ....', options: ['Kalsel', 'Kaltim', 'Kalbar', 'Kaltara'], answer: 'A', explanation: 'Budaya khas Kalimantan Selatan.' },
      { id: 13, text: 'Rumah adat khas daerah Papua adalah ....', options: ['Gadang', 'Joglo', 'Honai', 'Tongkonan'], answer: 'C', explanation: 'Honai rumah bulat atap jerami.' },
      { id: 14, text: 'Negara ASEAN yang tidak pernah dijajah bangsa Eropa adalah ....', options: ['Singapura', 'Thailand', 'Laos', 'Vietnam'], answer: 'B', explanation: 'Thailand sukses menjaga kedaulatan.' },
      { id: 15, text: 'Organisasi ASEAN didirikan pada tanggal ....', options: ['8 Aug 1967', '17 Aug 1945', '10 Nov 1945', '1 Jun 1945'], answer: 'A', explanation: 'Lewat Deklarasi Bangkok.' },
      { id: 16, text: 'Tugu Muda di Semarang mengenang peristiwa ....', options: ['Bandung Api', 'Pertempuran 5 Hari', 'Serangan Umum', 'Proklamasi'], answer: 'B', explanation: 'Aksi heroik pemuda Semarang.' },
      { id: 17, text: 'Prasasti Ciaruteun peninggalan Kerajaan ....', options: ['Kutai', 'Tarumanegara', 'Sriwijaya', 'Majapahit'], answer: 'B', explanation: 'Bukti keberadaan raja Purnawarman.' },
      { id: 18, text: 'Zaman prasejarah berakhir saat manusia mulai ....', options: ['Tanam', 'Menetap', 'Kenal tulisan', 'Logam'], answer: 'C', explanation: 'Aksara pembatas prasejarah-sejarah.' },
      { id: 19, text: 'Suku Dayak berasal dari pulau ....', options: ['Jawa', 'Sumatera', 'Kalimantan', 'Sulawesi'], answer: 'C', explanation: 'Suku asli pedalaman Borneo.' },
      { id: 20, text: 'BPUPKI dipimpin oleh ....', options: ['Soekarno', 'Hatta', 'Dr. Radjiman W.', 'Moh. Yamin'], answer: 'C', explanation: 'Badan pelaksana persiapan kemerdekaan.' },
      { id: 21, text: 'Sumber daya alam tak dapat diperbarui adalah ....', options: ['Air', 'Hutan', 'Minyak Bumi', 'Tanah'], answer: 'C', explanation: 'Minyak bumi butuh jutaan tahun.' },
      { id: 22, text: 'Pencetus Tanam Paksa (Cultuurstelsel) adalah ....', options: ['Daendels', 'Van den Bosch', 'Raffles', 'Coen'], answer: 'B', explanation: 'Gubernur Jenderal Belanda.' },
      { id: 23, text: 'Semboyan "Ing Ngarsa Sung Tuladha" dicetuskan oleh ....', options: ['Kartini', 'Sartika', 'Ki Hajar Dewantara', 'Malaka'], answer: 'C', explanation: 'Filosofi kepemimpinan pendidikan.' },
      { id: 24, text: 'Ibu kota negara (IKN) Indonesia yang baru berada di ....', options: ['Jateng', 'Sumsel', 'Kaltim', 'Sulut'], answer: 'C', explanation: 'IKN Nusantara di Kalimantan Timur.' },
      { id: 25, text: 'Garis yang memisahkan fauna Asiatis dan Peralihan adalah ....', options: ['Weber', 'Wallace', 'Ekuator', 'Bujur'], answer: 'B', explanation: 'Teori Alfred Russel Wallace.' },
      { id: 26, text: 'Asas utama koperasi adalah ....', options: ['Untung', 'Kekeluargaan', 'Adil', 'Sejahtera'], answer: 'B', explanation: 'Berasaskan gotong royong.' },
      { id: 27, text: 'Sumpah Palapa diucapkan oleh ....', options: ['Kertanegara', 'Gajah Mada', 'Anusapati', 'Ken Arok'], answer: 'B', explanation: 'Ambisi satukan Nusantara.' },
      { id: 28, text: 'Provinsi dengan status Otonomi Khusus adalah ....', options: ['Jabar', 'Jatim', 'Aceh-Papua', 'Babel'], answer: 'C', explanation: 'Aceh, Papua, Papua Barat, DIY, DKI.' },
      { id: 29, text: 'Bapak Koperasi Indonesia adalah ....', options: ['Soekarno', 'Moh. Hatta', 'Sjahrir', 'Salim'], answer: 'B', explanation: 'Wakil Presiden pertama RI.' },
      { id: 30, text: 'Batas wilayah Indonesia paling utara adalah pulau ....', options: ['Weh', 'Rote', 'Miangas', 'Sebatik'], answer: 'C', explanation: 'Sering disebut gerbang utara.' },
      { id: 31, text: 'Samudra terluas adalah Samudra ....', options: ['Hindia', 'Atlantik', 'Pasifik', 'Arktik'], answer: 'C', explanation: 'Mencakup 1/3 bumi.' },
      { id: 32, text: 'Benua terkecil adalah ....', options: ['Eropa', 'Australia', 'Asia', 'Afrika'], answer: 'B', explanation: 'Benua sekaligus satu negara.' },
      { id: 33, text: 'Tokoh pengetik naskah Proklamasi adalah ....', options: ['Sayuti Melik', 'Sukarni', 'Diah', 'Sudiro'], answer: 'A', explanation: 'Menggunakan mesin ketik pinjaman.' },
      { id: 34, text: 'Negara ASEAN tanpa laut (land-locked) adalah ....', options: ['Laos', 'Kamboja', 'Myanmar', 'Brunei'], answer: 'A', explanation: 'Satu-satunya di ASEAN.' },
      { id: 35, text: 'Peninggalan sejarah tradisi lisan adalah ....', options: ['Candi', 'Naskah', 'Dongeng', 'Koin'], answer: 'C', explanation: 'Diturunkan via suara/cerita.' },
      { id: 36, text: 'Warna biru pada peta menunjukkan ....', options: ['Darat', 'Gunung', 'Perairan', 'Hutan'], answer: 'C', explanation: 'Standar kartografi internasional.' },
      { id: 37, text: 'Garis bujur 0° melewati kota ....', options: ['Jakarta', 'Mekkah', 'Greenwich', 'Paris'], answer: 'C', explanation: 'Terletak di dekat London.' },
      { id: 38, text: 'Hak tawan karang adalah hak Raja Bali untuk ....', options: ['Pajak', 'Kapal karam', 'Ikan', 'Tawanan'], answer: 'B', explanation: 'Merampas muatan kapal karam.' },
      { id: 39, text: 'Upacara pembakaran jenazah di Bali disebut ....', options: ['Ngaben', 'Slametan', 'Kasada', 'Sekaten'], answer: 'A', explanation: 'Pelepasan roh menuju reinkarnasi.' },
      { id: 41, text: 'Lagu daerah "Gundul-Gundul Pacul" berasal dari ....', options: ['Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'DIY'], answer: 'B', explanation: 'Lagu ciptaan Sunan Kalijaga ini populer di Jateng.' },
      { id: 42, text: 'Alat musik tradisional "Angklung" berasal dari ....', options: ['Sumatera Utara', 'Jawa Barat', 'Sulawesi Selatan', 'Bali'], answer: 'B', explanation: 'Terbuat dari bambu, alat musik khas Sunda.' },
      { id: 43, text: 'Pahlawan yang memimpin Perang Diponegoro adalah ....', options: ['Pangeran Diponegoro', 'Tuanku Imam Bonjol', 'Pangeran Antasari', 'Sultan Hasanuddin'], answer: 'A', explanation: 'Perang besar di Jawa melawan Belanda (1825-1830).' },
      { id: 44, text: 'Garis khayal yang membagi bumi menjadi Utara dan Selatan adalah ....', options: ['Bujur', 'Lintang', 'Khatulistiwa', 'Meridian'], answer: 'C', explanation: 'Garis Ekuator atau Khatulistiwa.' },
      { id: 45, text: 'Mata uang negara Thailand adalah ....', options: ['Ringgit', 'Baht', 'Peso', 'Dong'], answer: 'B', explanation: 'Thai Baht.' },
      { id: 46, text: 'Danau terbesar di Indonesia adalah Danau ....', options: ['Singkarak', 'Toba', 'Poso', 'Sentani'], answer: 'B', explanation: 'Danau vulkanik di Sumatera Utara.' },
      { id: 47, text: 'Lembaga yang membuat undang-undang adalah ....', options: ['Eksekutif', 'Yudikatif', 'Legislatif', 'Federatif'], answer: 'C', explanation: 'Contohnya adalah DPR.' },
      { id: 48, text: 'Kerajaan Islam pertama di Indonesia adalah ....', options: ['Demak', 'Samudra Pasai', 'Aceh', 'Banten'], answer: 'B', explanation: 'Terletak di pesisir utara Sumatera.' },
      { id: 49, text: 'Pulau paling selatan di Indonesia adalah Pulau ....', options: ['Miangas', 'Rote', 'Weh', 'Sebatik'], answer: 'B', explanation: 'Terletak di NTT.' },
      { id: 50, text: 'Organisasi kesehatan dunia adalah ....', options: ['UNESCO', 'UNICEF', 'WHO', 'FAO'], answer: 'C', explanation: 'World Health Organization.' }
    ]
  }
];

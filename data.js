// ===== SEMUA ISI TEKS WEB DIEDIT DI SINI =====
const D = {
  p: {
    name: "Kak Faiq", short: "FAIQ", sign: "Kak Faiq",
    full: "M Zainur Rahman Al Faiqi",
    tag: "Mahasiswa Informatika & pemimpin muda",
    role: "Presiden Mahasiswa UPJB &<br>Pembina Pramuka",
    desc: "Membangun karakter, menggerakkan generasi. Saya mengubah disiplin dan semangat kebersamaan menjadi kegiatan nyata, dari ruang organisasi sampai lapangan.",
    loc: "Desa Mayangan, Jogoroto, Jombang",
    about: "Saya M Zainur Rahman Al Faiqi, mahasiswa S1 Informatika semester 5 di Universitas PGRI Jombang. Saya aktif di BEM, UKM Pramuka, dan pencak silat, belajar memimpin lewat contoh dan membangun kebersamaan.",
    quote: "Dari disiplin dan kebersamaan, sampai karakter yang kuat.",
    email: "mzaainurrahmanalfaiqi@gmail.com", ig: "@_muzarafa", wa: "0821-1203-1731",
    wahref: "https://wa.me/6282112031731",
    ighref: "https://instagram.com/_muzarafa"
  },
  // c = kategori (dipakai tombol filter), pos = posisi crop foto
  works: [
    { t: "Latihan IKSPI Kera Sakti", c: "Silat", y: 2026, img: "assets/img/silat.jpeg", pos: "50% 62%" },
    { t: "KMD UPJB 2026", c: "Pramuka", y: 2026, img: "assets/img/kmd.jpg" },
    { t: "Pengukuhan KML Bumi Ayu Tunggorono", c: "Pramuka", y: 2026, img: "assets/img/kml.jpg" },
    // #KOMEN: 3 foto di bawah ini placeholder. Ganti file tambahan-1/2/3.jpg di assets/img (nama sama), lalu ubah judulnya
    { t: "Kegiatan BEM UPJB", c: "Organisasi", y: 2026, img: "assets/img/tambahan-1.jpeg" },
    { t: "Kegiatan Racana Rasdin Nasdin", c: "Pramuka", y: 2026, img: "assets/img/rasdin.jpeg" },
    { t: "Proyek PKM-PM Laskara", c: "Akademik", y: 2026, img: "assets/img/laskara.jpeg" }
  ],
  logos: ["BEM UPJB", "Racana Rasdin Nasdin", "Pramuka Kwarran Jogoroto", "IKSPI Kera Sakti", "Universitas PGRI Jombang"], // #KOMEN: ganti dengan logo (<img>) kalau ada
  awards: [
    { t: "Presiden Mahasiswa", o: "Universitas PGRI Jombang", y: "2026 - 2027" },
    { t: "Lolos pendanaan PKM-PM", o: 'Judul "Laskara"', y: "PKM" }, // #KOMEN: isi tahun kalau mau
    { t: "Pemangku Adat Racana Rasdin Nasdin", o: "UKM Pramuka UPJB", y: "2026 - 2027" },
    { t: "Ketua Dewan Ranting", o: "Kwarran Jogoroto", y: "2022 - 2026" },
    { t: "Ketua Sub Ranting Mayangan", o: "IKSPI Kera Sakti", y: "Aktif" }
  ],
  edu: [
    ["Universitas PGRI Jombang", "S1 Informatika", "Smt 5"],
    ["BEM UPJB", "Organisasi kemahasiswaan", "Aktif"],
    ["UKM Racana Rasdin Nasdin", "Pramuka UPJB", "Aktif"]
  ],
  toolkit: ["Kepemimpinan", "Organisasi", "Informatika", "Kepramukaan", "Pencak Silat", "Proposal PKM"],
  steps: [
    ["Niat", "Menentukan tujuan dan alasan bergerak."],
    ["Rencana", "Menyusun langkah, peran, dan waktu."],
    ["Latihan", "Mengulang sampai terbiasa dan tangguh."],
    ["Aksi", "Turun langsung ke lapangan bersama tim."],
    ["Evaluasi", "Belajar dari hasil, lalu naik level."]
  ],
  journey: [
    { y: "2026 - 2027", t: "Presiden Mahasiswa UPJB", d: "Memimpin lembaga kemahasiswaan Universitas PGRI Jombang." },
    { y: "2026 - 2027", t: "Pemangku Adat Racana Rasdin Nasdin", d: "Menjaga adat dan tradisi UKM Pramuka UPJB." },
    { y: "2022 - 2026", t: "Ketua Dewan Ranting Kwarran Jogoroto", d: "Menggerakkan kegiatan kepramukaan tingkat kwartir ranting." },
    { y: "Aktif", t: "Ketua Sub Ranting Mayangan IKSPI Kera Sakti", d: "Membina latihan dan disiplin anggota di Mayangan." }
  ],
    // #KOMEN: daftar sekolah tempat kamu jadi pembina aktif (tambah/hapus baris sesuai kebutuhan)
  pembina: ["SDN Kedungpari 1", "SDN Bongkot", "SDN Alang-Alang Caruban 1", "MTs Salafiyah Syafi'iyah Seblak", "SMP Islam Mbah Bolong", "SMPN 2 Ngoro", "MA Al Muhajirin", "MI Silamiyah Kwaringan"],
  miles: [{ t: "Lolos pendanaan PKM-PM Laskara", y: "PKM" }, { t: "Terpilih Presiden Mahasiswa", y: 2026 }, { t: "Pemangku Adat Racana", y: 2026 }]
};
const processTindakan = (data) => {
  let res = Array();
  let tbu = Array();
  let bsb = Array();

  let telinga = Array();
  let gizi = Array();
  //tbu
  if (data.tbu.klasifikasiTBU.tbu_klasifikasi === "Penyakit sangat berat") {
    tbu.push(
      "Bila sedang kejang beri diazepam",
      "Bila ada stridor pastikan tidak ada sumbatan jalan napas",
      "Bila ada stridor, sianosis dan ujung tangan dan kaki pucat dan dingin berikan oksigen 3 - 5 liter/menit melalui nasal prong dengan perangkat oksigen standar (tabung O2 dan humidifier)",
      "Cegah agar gula darah tidak turun",
      "Jaga anak tetap hangat",
      "RUJUK SEGERA"
    );
    res.push(tbu);
  }

  //batuk
  if (data.batuk.klasifikasiBatuk.bsb_klasifikasi === "Pneumonia berat"){
    bsb.push(
      "Beri Oksigen maksimal 2-3 liter/menit dengan menggunakan nasal prong",
      "Beri dosis pertama antibiotik yang sesuai",
      "RUJUK SEGERA"
    );
    res.push(bsb);
  }
  if(data.batuk.klasifikasiBatuk.bsb_klasifikasi === "Pneumonia"){
    bsb.push(
      "Beri amoksisilin 2x sehari sela ma 3 hr atau 5 hr",
      "Beri pelega tenggorokan dan pereda batuk yang aman",
      "Obati wheezing bila ada",
      "Apabila batuk >14 hari RUJUK untuk pemeriksaan lanjutan",
      "Nasehati kapan kembali segera",
      "Kunjungan ulang 2 hari"
    );
    res.push(bsb);
  }
  if(data.batuk.klasifikasiBatuk.bsb_klasifikasi === "Batuk bukan pneumonia"){
    bsb.push(
      "Beri pelega tenggorokan dan pereda batuk yang aman",
      "Obati wheezing bila ada",
      "Apabila batuk ≥14 hari rujuk untuk pemeriksaan TB dan sebab lain",
      "Nasehati kapan kembali segera",
      "Kunjungan ulang 2 hari jika tidak ada perbaikan"
    );
    res.push(bsb);
  }

  //Diare

  //Demam

  //Telinga
  if(data.telinga.klasifikasiTelinga.telinga_klasifikasi === "Mastoiditis"){
    telinga.push(
      "Beri dosis pertama antibiotik yang sesuai",
      "Beri dosis pertama parasetamol untuk mengatasi nyeri",
      "RUJUK SEGERA",
    );
    res.push(telinga);
  }
  if(data.telinga.klasifikasiTelinga.telinga_klasifikasi === "Infeksi Telinga Kronis"){
    telinga.push(
      "Beri antibiotik yang sesuai selama 7 hari",
      "Beri parasetamol untuk mengatasi nyeri",
      "Keringkan telinga dengan bahan penyedap",
      "Kunjungan ulang 5 hari"
    );
    res.push(telinga);
  }
  if(data.telinga.klasifikasiTelinga.telinga_klasifikasi === "Infeksi Telinga Akut"){
    telinga.push(
      "Keringkan telinga dengan bahan penyerap setelah dicuci dengan NaCl 0,9% atau H2O23%",
      "Beri tetes telinga yang sesuai",
      "Kunjungan ulang 5 hari",
    );
    res.push(telinga);
  }
  if(data.telinga.klasifikasiTelinga.telinga_klasifikasi === "Tidak Ada Infeksi Telinga"){
    telinga.push(
      "Tangani masalah telinga yang ditemukan"
    );
    res.push(telinga);
  }

  //Gizi
  if(data.gizi.klasifikasiGizi.gizi_klasifikasi === "Sangat Kurus Dengan Komplikasi"){
    gizi.push(
      "Beri dosis pertama antibiotik yang sesuai",
      "Beri Vitamin A dosis pertama",
      "Cegah gula darah tidak turun",
      "Hangatkan badan",
      "RUJUK SEGERA"
    );
    res.push(gizi);
  }
  if(data.gizi.klasifikasiGizi.gizi_klasifikasi === "Sangat Kurus Tanpa Komplikasi"){
    gizi.push(
      "Beri antibiotik yang sesuai selama 5 hari",
      "Beri Vitamin A dosis pertama",
      "Cegah gula darah tidak turun",
      "Hangatkan badan",
      "RUJUK untuk penanganan gizi sangat kurus termasuk kemungkinan adanya penyakit penyerta",
      "Nasihati kapan kembali segera",
      "Kunjungan ulang 7 hari"
    );
    res.push(gizi);
  }
  if(data.gizi.klasifikasiGizi.gizi_klasifikasi === "Kurus"){
    gizi.push(
      "Lakukan Penilaian Pemberian Makan pada anak dan nasihati sesuai Anjuran Makan Untuk Anak Sehat Maupun Sakit. Bila ada masalah pemberian makan, kunjungan ulang 7 hari",
      "RUJUK untuk penilaianan kemungkinan adanya penyakit penyerta (Infeksi TB dll)",
      "Kunjungan ulang 30 hari"
    );
    res.push(gizi);
  }
  if(data.gizi.klasifikasiGizi.gizi_klasifikasi === "Gizi Normal"){
    gizi.push(
      "Jika anak berumur kurang dari 2 tahun, lakukan penilaian pemberian makan dan nasihati sesuai Anjuran Makan Untuk Anak Sehat Maupun Sakit. Bila ada masalah pemberian makan, kunjungan ulang 7 hari",
      "Anjurkan untuk menimbang berat badan anak setiap bulan"
    );
    res.push(gizi);
  }

  return res;
};

//diare dehidrasi berat
//Jika Tidak ada klasifikasi berat lain: Beri cairan untuk dehidrasi berat dan tablet Zinc sesuai rencana terapi C
//Jika anak juga mempunyai klasifikasi berat lain:
//- RUJUK SEGERA
//- Jika masih bisa minum, berikan ASI dan larutan oralit selama perjalanan
//Jika anak >2 tahun dan ada wabah kolera di daerah tersebut, beri antibiotik untuk kolera

//diare dehidrasi ringan/sedang
//Beri cairan, tablet Zinc dan makanan sesuai Rencana Terapi B
//Jika terdapat klasifikasi berat lain :
//- RUJUK SEGERA
//- Jika masih bisa minum, berikan ASI dan larutan oralit selama perjalanan
//Nasihati kapan kembali segera
//Kunjungan ulang 3 hari jika tidak ada perbaikan

//diare tanpa dehidrasi
//Beri cairan, tablet Zinc dan makanan sesuai Rencana Terapi A
//Nasihati kapan kembali segera.
//Kunjungan ulang 3 hari jika tidak ada perbaikan.

//diare persisten berat - jika diare 14 hari atau lebih
//Atasi dehidrasi sebelum dirujuk, kecuali ada klasifikasi berat lain.
//RUJUK

//diare persisten - jika diare 14 hari atau lebih
//Nasihati pemberian makan untuk Diare Persisten.
//Beri tablet zinc selama 10 hari berturut-turut
//Nasihati kapan kembali segera
//Kunjungan ulang 3 hari

//disentri - jika ada darah dalam tinja
//Beri antibiotik yang sesuai
//Beri tablet zinc selama 10 hari berturut-turut
//Nasihati kapan kembali segera.
//Kunjungan ulang 3 hari.
module.exports = {
  processTindakan,
};

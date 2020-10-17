const processTindakan = (data) => {
  let res = Array();
  let tbu = Array();
  if(data.tbu.klasifikasiTBU.tbu_klasifikasi === 'Penyakit sangat berat'){
    tbu.push(
      'Bila sedang kejang beri diazepam', 
      'Bila ada stridor pastikan tidak ada sumbatan jalan napas',
      'Bila ada stridor, sianosis dan ujung tangan dan kaki pucat dan dingin berikan oksigen 3 - 5 liter/menit melalui nasal prong dengan perangkat oksigen standar (tabung O dan 2 humidifier)',
      'Cegah agar gula darah tidak turun',
      'Jaga anak tetap hangat',
      'RUJUK SEGERA'
    );
    res.push(tbu);
  }

  
  return res;
}

//Penumonia Berat
//Beri Oksigen maksimal 2-3 liter/menit dengan menggunakan nasal prong
//Beri dosis pertama antibiotik yang sesuai
//RUJUK SEGERA **

//Penumonia
//Beri amoksisilin 2x sehari sela ma 3 hr atau 5 hr ***
//Beri pelega tenggorokan dan pereda batuk yang aman
// Obati wheezing bila ada
// Apabila batuk >14 hari RUJUK untuk pemeriksaan lanjutan
// Nasehati kapan kembali segera
// Kunjungan ulang 2 hari


//bukan batuk pneunomia
// Beri pelega tenggorokan dan pereda batuk yang aman
// Obati wheezing bila ada
// Apabila batuk ≥14 hari rujuk untuk pemeriksaan TB dan sebab lain
// Nasihati kapan kembali segera
// Kunjungan ulang 2 hari jika tidak ada perbaikan


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
    processTindakan
};
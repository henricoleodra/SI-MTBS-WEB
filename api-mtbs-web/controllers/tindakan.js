const Tindakan = require("../models/tindakan");
const Pengobatan = require("../models/pengobatan");

const tindakan = function (req, res, next) {
  let data = req.body;
  let tbu = Array();
  let batuk = Array();
  let diare = Array();
  let demam = Array();
  let telinga = Array();
  let gizi = Array();
  let anemia = Array();
  let hiv = Array();
  let obat = {
    zatbesi: { name: "Zat Besi", value: 0 },
    obatcacing: { name: "Obat Cacing", value: 0 },
    antibiotik: { name: "Antibiotik", value: 0 },
    vitamina: { name: "Vitamin A", value: 0 },
    parasetamol: { name: "Parasetamol", value: 0 },
    antimalaria: { name: "Anti Malaria", value: 0 },
    diazepam: { name: "Diazepam", value: 0 },
  };
  // TANDA BAHAYA UMUM
  tbu = tbu.concat(
    Tindakan.classifyTindakan(
      "tandabahayaumum",
      data.klasifikasiTBU.tbu_klasifikasi,
      data
    )
  );
  if (data.klasifikasiTBU.tbu_klasifikasi === "Penyakit sangat berat") {
    if (data.ansTBU.tbu_tidakBisaMinum === true) {
      tbu = tbu.concat(
        Pengobatan.classifyPengobatan(
          "tandabahayaumum",
          "tidak dapat minum / menyusu",
          "Antibiotik",
          data
        )
      );
      obat.antibiotik.value++;
    }
    if (data.ansTBU.tbu_kejang === true) {
      tbu = tbu.concat(
        Pengobatan.classifyPengobatan(
          "tandabahayaumum",
          "kejang",
          "Diazepam",
          data
        )
      );
      obat.diazepam.value++;
    }
  }
  // BATUK
  batuk = batuk.concat(
    Tindakan.classifyTindakan(
      "batuk",
      data.klasifikasiBatuk.bsb_klasifikasi,
      data
    )
  );
  if (data.klasifikasiBatuk.bsb_klasifikasi === "Pneumonia berat") {
    batuk = batuk.concat(
      Pengobatan.classifyPengobatan("batuk", "Pneumonia", "Antibiotik", data)
    );
    obat.antibiotik.value++;
  } else if (data.klasifikasiBatuk.bsb_klasifikasi === "Pneumonia") {
    batuk = batuk.concat(
      Pengobatan.classifyPengobatan("batuk", "Pneumonia", "Antibiotik", data)
    );
    obat.antibiotik.value++;
  }
  // DIARE
  if (
    data.klasifikasiDiare.diare_klasifikasi.includes("Diare dehidrasi berat")
  ) {
    diare = diare.concat(
      Tindakan.classifyTindakan("diare", "Diare dehidrasi berat", data)
    );
    if (data.dataAnak.umurAnakTahun > 2) {
      diare = diare.concat(
        Pengobatan.classifyPengobatan("diare", "Kolera", "Antibiotik", data)
      );
      obat.antibiotik.value++;
    }
  } else if (
    data.klasifikasiDiare.diare_klasifikasi.includes(
      "Diare dehidrasi ringan/sedang"
    )
  ) {
    diare = diare.concat(
      Tindakan.classifyTindakan("diare", "Diare dehidrasi ringan/sedang", data)
    );
  } else {
    diare = diare.concat(
      Tindakan.classifyTindakan("diare", "Diare tanpa dehidrasi", data)
    );
  }
  if (
    data.klasifikasiDiare.diare_klasifikasi.includes("Diare persisten berat")
  ) {
    diare = diare.concat(
      Tindakan.classifyTindakan("diare", "Diare persisten berat", data)
    );
  } else if (
    data.klasifikasiDiare.diare_klasifikasi.includes("Diare persisten")
  ) {
    diare = diare.concat(
      Tindakan.classifyTindakan("diare", "Diare persisten", data)
    );
  }
  if (data.klasifikasiDiare.diare_klasifikasi.includes("Disentri")) {
    diare = diare.concat(Tindakan.classifyTindakan("diare", "Disentri", data));
    diare = diare.concat(
      Pengobatan.classifyPengobatan("diare", "Disentri", "Antibiotik", data)
    );
    obat.antibiotik.value++;
  }
  // DEMAM
  if (
    data.ansDemam.demam_isDaerahEndemis !== "Non Endemis" ||
    data.ansDemam.demam_isBerkunjungDaerahEndemis !== "Non Endemis"
  ) {
    if (
      data.klasifikasiDemam.demam_klasifikasi.includes(
        "Penyakit berat dengan demam"
      )
    ) {
      demam = demam.concat(
        Tindakan.classifyTindakan("demam", "Penyakit berat dengan demam", data)
      );
      demam = demam.concat(
        Pengobatan.classifyPengobatan(
          "demam",
          "Demam tinggi",
          "Parasetamol",
          data
        )
      );
      obat.parasetamol.value++;
    } else if (data.klasifikasiDemam.demam_klasifikasi.includes("Malaria")) {
      demam = demam.concat(
        Pengobatan.classifyPengobatan(
          "malaria",
          "Malaria",
          "Obat Anti Malaria Falsiparum",
          data
        ),
        Pengobatan.classifyPengobatan(
          "malaria",
          "Malaria",
          "Obat Anti Malaria Vivax",
          data
        ),
        Pengobatan.classifyPengobatan(
          "malaria",
          "Malaria",
          "Obat Anti Malaria Infeksi Campur",
          data
        ),
        Pengobatan.classifyPengobatan(
          "demam",
          "Demam tinggi",
          "Parasetamol",
          data
        )
      );
      obat.antimalaria.value++;
      demam = demam.concat(Tindakan.classifyTindakan("demam", "Malaria", data));
    } else if (
      data.klasifikasiDemam.demam_klasifikasi.includes(
        "Demam mungkin bukan malaria"
      )
    ) {
      demam = demam.concat(
        Pengobatan.classifyPengobatan(
          "demam",
          "Demam tinggi",
          "Parasetamol",
          data
        )
      );
      obat.parasetamol.value++;
      demam = demam.concat(
        Tindakan.classifyTindakan("demam", "Demam mungkin bukan malaria", data)
      );
    }
  } else {
    if (
      data.klasifikasiDemam.demam_klasifikasi.includes(
        "Penyakit berat dengan demam"
      )
    ) {
      demam = demam.concat(
        Tindakan.classifyTindakan("demam", "Penyakit berat dengan demam", data)
      );
      demam = demam.concat(
        Pengobatan.classifyPengobatan(
          "demam",
          "Demam tinggi",
          "Parasetamol",
          data
        )
      );
      obat.parasetamol.value++;
    } else if (
      data.klasifikasiDemam.demam_klasifikasi.includes("Demam bukan malaria")
    ) {
      demam = demam.concat(
        Pengobatan.classifyPengobatan(
          "demam",
          "Demam tinggi",
          "Parasetamol",
          data
        )
      );
      demam = demam.concat(
        Tindakan.classifyTindakan("demam", "Demam bukan malaria", data)
      );
    }
  }
  if (
    data.klasifikasiDemam.demam_klasifikasi.includes(
      "Campak dengan komplikasi berat"
    )
  ) {
    if (
      data.ansDemam.demam_korneaKeruh === true ||
      data.ansDemam.demam_nanahDiMata === true
    ) {
      demam = demam.concat(
        Pengobatan.classifyPengobatan(
          "demam",
          "Campak dengan komplikasi mata atau mulut",
          "Vitamin A",
          data
        )
      );
      obat.vitamina.value++;
    } else {
      demam = demam.concat(
        Pengobatan.classifyPengobatan(
          "demam",
          "Campak tanpa komplikasi mata atau mulut",
          "Vitamin A",
          data
        )
      );
      obat.vitamina.value++;
    }
    demam = demam.concat(
      Tindakan.classifyTindakan("demam", "Campak dengan komplikasi berat", data)
    );
  } else if (
    data.klasifikasiDemam.demam_klasifikasi.includes(
      "Campak dengan komplikasi pada mata dan/atau mulut"
    )
  ) {
    demam = demam.concat(
      Pengobatan.classifyPengobatan(
        "demam",
        "Campak dengan komplikasi mata atau mulut",
        "Vitamin A",
        data
      )
    );
    obat.vitamina.value++;
    demam = demam.concat(
      Tindakan.classifyTindakan(
        "demam",
        "Campak dengan komplikasi pada mata dan/atau mulut",
        data
      )
    );
    if (
      data.ansGizi.gizi_BBmenurutPBAtauTB ===
      "BB/PB (TB) < -3 SD (Sangat Kurus)"
    ) {
      demam = demam.concat(
        Pengobatan.classifyPengobatan(
          "vitamina",
          "Defisiensi Vit A, Xerofthalmia dan Gizi Sangat Kurus",
          "Vitamin A",
          data
        )
      );
      obat.vitamina.value++;
    }
  }
  if (
    data.klasifikasiDemam.demam_klasifikasi.includes(
      "Demam berdarah dengue (DBD)"
    )
  ) {
    demam = demam.concat(
      Tindakan.classifyTindakan("demam", "Demam berdarah dengue (DBD)", data)
    );
    if (data.dataAnak.suhuAnak >= 38.5) {
      demam = demam.concat(
        Pengobatan.classifyPengobatan(
          "demam",
          "Demam tinggi (DBD)",
          "Parasetamol",
          data
        )
      );
      obat.parasetamol.value++;
    }
  } else if (data.klasifikasiDemam.demam_klasifikasi.includes("Mungkin DBD")) {
    if (data.dataAnak.suhuAnak >= 38.5) {
      demam = demam.concat(
        Pengobatan.classifyPengobatan(
          "demam",
          "Demam tinggi (DBD)",
          "Parasetamol",
          data
        )
      );
      obat.parasetamol.value++;
    }
    demam = demam.concat(
      Tindakan.classifyTindakan("demam", "Mungkin DBD", data)
    );
  } else if (
    data.klasifikasiDemam.demam_klasifikasi.includes("Demam mungkin bukan DBD")
  ) {
    demam = demam.concat(
      Tindakan.classifyTindakan("demam", "Demam mungkin bukan DBD", data)
    );
    if (data.dataAnak.suhuAnak >= 38.5) {
      demam = demam.concat(
        Pengobatan.classifyPengobatan(
          "demam",
          "Demam tinggi (DBD)",
          "Parasetamol",
          data
        )
      );
      obat.parasetamol.value++;
    }
  }
  // TELINGA
  if (data.klasifikasiTelinga.telinga_klasifikasi === "Mastoditis") {
    telinga = telinga.concat(
      Pengobatan.classifyPengobatan(
        "telinga",
        "Infeksi Telinga Akut",
        "Antibiotik",
        data
      ),
      Pengobatan.classifyPengobatan(
        "telinga",
        "Sakit Telinga",
        "Parasetamol",
        data
      )
    );
    obat.antibiotik.value++;
    obat.parasetamol.value++;
    telinga = telinga.concat(
      Tindakan.classifyTindakan(
        "telinga",
        data.klasifikasiTelinga.telinga_klasifikasi,
        data
      )
    );
  } else if (
    data.klasifikasiTelinga.telinga_klasifikasi === "Infeksi telinga akut"
  ) {
    telinga = telinga.concat(
      Pengobatan.classifyPengobatan(
        "telinga",
        "Infeksi Telinga Akut",
        "Antibiotik",
        data
      )
    );
    obat.antibiotik.value++;
    telinga = telinga.concat(
      Tindakan.classifyTindakan(
        "telinga",
        data.klasifikasiTelinga.telinga_klasifikasi,
        data
      )
    );
  } else if (
    data.klasifikasiTelinga.telinga_klasifikasi === "Infeksi telinga kronis"
  ) {
    telinga = telinga.concat(
      Tindakan.classifyTindakan(
        "telinga",
        data.klasifikasiTelinga.telinga_klasifikasi,
        data
      )
    );
  } else if (
    data.klasifikasiTelinga.telinga_klasifikasi === "Tidak ada infeksi telinga"
  ) {
    telinga = telinga.concat(
      Tindakan.classifyTindakan(
        "telinga",
        data.klasifikasiTelinga.telinga_klasifikasi,
        data
      )
    );
  }
  // GIZI
  if (
    data.klasifikasiGizi.gizi_klasifikasi === "Sangat kurus dengan komplikasi"
  ) {
    gizi = gizi.concat(
      Pengobatan.classifyPengobatan(
        "vitamina",
        "Defisiensi Vit A, Xerofthalmia dan Gizi Sangat Kurus",
        "Vitamin A",
        data
      )
    );
    obat.vitamina.value++;
    gizi = gizi.concat(
      Tindakan.classifyTindakan(
        "gizi",
        data.klasifikasiGizi.gizi_klasifikasi,
        data
      )
    );
  } else if (
    data.klasifikasiGizi.gizi_klasifikasi === "Sangat kurus tanpa komplikasi"
  ) {
    gizi = gizi.concat(
      Pengobatan.classifyPengobatan(
        "vitamina",
        "Defisiensi Vit A, Xerofthalmia dan Gizi Sangat Kurus",
        "Vitamin A",
        data
      )
    );
    obat.vitamina.value++;
    gizi = gizi.concat(
      Tindakan.classifyTindakan(
        "gizi",
        data.klasifikasiGizi.gizi_klasifikasi,
        data
      )
    );
  } else if (data.klasifikasiGizi.gizi_klasifikasi === "Kurus") {
    gizi = gizi.concat(
      Tindakan.classifyTindakan(
        "gizi",
        data.klasifikasiGizi.gizi_klasifikasi,
        data
      )
    );
  } else if (data.klasifikasiGizi.gizi_klasifikasi === "Gizi normal") {
    gizi = gizi.concat(
      Tindakan.classifyTindakan(
        "gizi",
        data.klasifikasiGizi.gizi_klasifikasi,
        data
      )
    );
  }
  // ANEMIA
  if (data.klasifikasiAnemia.anemia_klasifikasi === "Anemia berat") {
    if (data.dataAnak.umurAnakBulan >= 4) {
      anemia = anemia.concat(
        Pengobatan.classifyPengobatan("anemia", "Anemia", "Obat Cacing", data)
      );
      obat.obatcacing.value++;
    }
    anemia = anemia.concat(
      Tindakan.classifyTindakan(
        "anemia",
        data.klasifikasiAnemia.anemia_klasifikasi,
        data
      )
    );
  } else if (data.klasifikasiAnemia.anemia_klasifikasi === "Anemia") {
    anemia = anemia.concat(
      Pengobatan.classifyPengobatan("anemia", "Anemia", "Zat Besi", data),
      Pengobatan.classifyPengobatan("anemia", "Anemia", "Obat Cacing", data)
    );
    obat.zatbesi.value++;
    obat.obatcacing.value++;
    anemia = anemia.concat(
      Tindakan.classifyTindakan(
        "anemia",
        data.klasifikasiAnemia.anemia_klasifikasi,
        data
      )
    );
  } else if (data.klasifikasiAnemia.anemia_klasifikasi === "Tidak anemia") {
    Tindakan.classifyTindakan(
      "anemia",
      data.klasifikasiAnemia.anemia_klasifikasi,
      data
    );
  }
  // HIV
  if (data.klasifikasiHIV.hiv_klasifikasi === "Infeksi HIV terkonfirmasi") {
    hiv = hiv.concat(
      Tindakan.classifyTindakan(
        "hiv",
        data.klasifikasiHIV.hiv_klasifikasi,
        data
      )
    );
  } else if (data.klasifikasiHIV.hiv_klasifikasi === "Diduga terinfeksi HIV") {
    hiv = hiv.concat(
      Tindakan.classifyTindakan(
        "hiv",
        data.klasifikasiHIV.hiv_klasifikasi,
        data
      )
    );
  } else if (data.klasifikasiHIV.hiv_klasifikasi === "Terpajan HIV") {
    hiv = hiv.concat(
      Tindakan.classifyTindakan(
        "hiv",
        data.klasifikasiHIV.hiv_klasifikasi,
        data
      )
    );
  } else if (
    data.klasifikasiHIV.hiv_klasifikasi === "Mungkin bukan infeksi HIV"
  ) {
    hiv = hiv.concat(
      Tindakan.classifyTindakan(
        "hiv",
        data.klasifikasiHIV.hiv_klasifikasi,
        data
      )
    );
  }
  let duplicate = "";
  let flag = true;
  Object.keys(obat).map((key) => {
    if (obat[key].value > 1) {
      if (flag) {
        duplicate += obat[key].name;
        flag = false;
      } else {
        duplicate += ", " + obat[key].name;
      }
    }
  });
  const result = {
    tbu: tbu,
    batuk: batuk,
    diare: diare,
    demam: demam,
    telinga: telinga,
    gizi: gizi,
    anemia: anemia,
    hiv: hiv,
    duplicate: duplicate,
  };
  res.json(result);
};

module.exports = {
  tindakan,
};

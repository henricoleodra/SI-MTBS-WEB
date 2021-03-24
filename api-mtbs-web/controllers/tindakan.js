const Tindakan = require("../models/tindakan");
const Pengobatan = require("../models/pengobatan");

const tindakan = function (req, res, next) {
  let data = req.body;
  let tbu = Array();
  let batuk = Array();
  let diare = Array();
  let demam = Array();
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
  } else if (data.klasifikasiBatuk.bsb_klasifikasi === "Pneumonia") {
    batuk = batuk.concat(
      Pengobatan.classifyPengobatan("batuk", "Pneumonia", "Antibiotik", data)
    );
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
    } else {
      demam = demam.concat(
        Pengobatan.classifyPengobatan(
          "demam",
          "Campak tanpa komplikasi mata atau mulut",
          "Vitamin A",
          data
        )
      );
    }
    demam = demam.concat(
      Tindakan.classifyTindakan("demam", "Campak dengan komplikasi berat")
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
    }
  }
  if (
    data.klasifikasiDemam.demam_klasifikasi.includes(
      "Demam berdarah dengue (DBD)"
    )
  ) {
    demam = demam.concat(
      Tindakan.classifyTindakan("demam", "Demam berdarah dengan (DBD)", data)
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
    }
  }
  const result = {
    tbu: tbu,
    batuk: batuk,
    diare: diare,
    demam: demam,
    telinga: [],
    gizi: [],
    anemia: [],
    hiv: [],
  };
  res.json(result);
};

module.exports = {
  tindakan,
};

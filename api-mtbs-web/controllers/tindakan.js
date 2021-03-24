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
  const result = {
    tbu: tbu,
    batuk: batuk,
    diare: diare,
    demam: [],
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

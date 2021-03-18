const fs = require("fs");

const classifyPengobatan = (klasifikasi, penyakit, obat, data) => {
  let rawRules;
  let res = "";
  switch (klasifikasi) {
    case "tandabahayaumum":
      try {
        rawRules = fs.readFileSync("./rules/TandaBahayaUmum.json");
      } catch (err) {
        return err;
      }
      break;
    case "batuk":
      try {
        rawRules = fs.readFileSync("./rules/Batuk.json");
      } catch (err) {
        return err;
      }
      break;
    case "diare":
      try {
        rawRules = fs.readFileSync("./rules/Diare.json");
      } catch (err) {
        return err;
      }
      break;
    case "demam":
      try {
        rawRules = fs.readFileSync("./rules/Demam.json");
      } catch (err) {
        return err;
      }
      break;
    case "telinga":
      try {
        rawRules = fs.readFileSync("./rules/Telinga.json");
      } catch (err) {
        return err;
      }
      break;
    case "anemia":
      try {
        rawRules = fs.readFileSync("./rules/Anemia.json");
      } catch (err) {
        return err;
      }
      break;
    case "malaria":
      try {
        rawRules = fs.readFileSync(".rules/Malaria.json");
      } catch (err) {
        return err;
      }
      break;
    case "vitamina":
      try {
        rawRules = fs.readFileSync(".rules/VitA_Gizi.json");
      } catch (err) {
        return err;
      }
      break;
    // Other Penyakit Here!
    default:
      return "Error";
  }
  let rules = JSON.parse(rawRules);
  let i = 0;
  rules.forEach((rule) => {
    if (rule.penyakit === penyakit && rule.jenisObat === obat) {
      let flag = true;
      res += "Berikan " + rule.jenisObat + " " + rule.keterangan;
      if (rule.keteranganKondisiSpesial !== "") {
        res += " atau " + rule.keteranganKondisiSpesial;
      }
      res += ". Dengan pilihan:";
      rule.conditioned.forEach((condition) => {
        let valid = true;
        condition.rule.forEach((validation) => {
          let dataAnak = "";
          if (validation.key === "beratbadan") {
            dataAnak = data.dataanak.dataAnak.beratAnak;
          }
          if (validation.key === "umur") {
            dataAnak = Number(data.dataanak.dataAnak.umurAnak) / 30;
          }
          // Other Data Anak Type Here!
          if (!evaluateRules(dataAnak, validation.value, validation.operator)) {
            valid = valid && false;
          }
        });
        if (valid) {
          if (flag) {
            res +=
              " (" + ++i + ") " + condition.tipe + " " + condition.keterangan;
            flag = false;
          } else {
            res +=
              ", (" + ++i + ") " + condition.tipe + " " + condition.keterangan;
          }
        }
      });
      res += ".";
      if (rule.keteranganObatAlternatif !== "") {
        res +=
          " " + rule.keteranganObatAlternatif + " " + rule.obatAlternatif + ".";
      }
    }
  });
  return res;
};

const evaluateRules = (data, operand, operator) => {
  switch (operator) {
    case "<":
      return data < operand;
    case ">":
      return data > operand;
    case "<=":
      return data <= operand;
    case ">=":
      return data >= operand;
    case "=":
      return data === operand;
    default:
      return "Error";
  }
};

module.exports = {
  classifyPengobatan,
};

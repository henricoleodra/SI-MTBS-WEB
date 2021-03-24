const fs = require("fs");

const classifyPengobatan = (klasifikasi, penyakit, obat, data) => {
  let rawRules;
  let res = Array();
  switch (klasifikasi) {
    case "tandabahayaumum":
      try {
        rawRules = fs.readFileSync("./rules/pengobatan/TandaBahayaUmum.json");
      } catch (err) {
        return err;
      }
      break;
    case "batuk":
      try {
        rawRules = fs.readFileSync("./rules/pengobatan/Batuk.json");
      } catch (err) {
        return err;
      }
      break;
    case "diare":
      try {
        rawRules = fs.readFileSync("./rules/pengobatan/Diare.json");
      } catch (err) {
        return err;
      }
      break;
    case "demam":
      try {
        rawRules = fs.readFileSync("./rules/pengobatan/Demam.json");
      } catch (err) {
        return err;
      }
      break;
    case "telinga":
      try {
        rawRules = fs.readFileSync("./rules/pengobatan/Telinga.json");
      } catch (err) {
        return err;
      }
      break;
    case "anemia":
      try {
        rawRules = fs.readFileSync("./rules/pengobatan/Anemia.json");
      } catch (err) {
        return err;
      }
      break;
    case "malaria":
      try {
        rawRules = fs.readFileSync(".rules/pengobatan/Malaria.json");
      } catch (err) {
        return err;
      }
      break;
    case "vitamina":
      try {
        rawRules = fs.readFileSync(".rules/pengobatan/VitA_Gizi.json");
      } catch (err) {
        return err;
      }
      break;
    default:
      return "Error";
  }
  let rules = JSON.parse(rawRules);
  let i = 0;
  rules.forEach((rule) => {
    if (rule.penyakit === penyakit && rule.jenisObat === obat) {
      let tmp = "";
      let flag = true;
      tmp += "Berikan " + rule.jenisObat;
      if (rule.keterangan !== "") {
        tmp += " " + rule.keterangan;
      }
      if (rule.keteranganKondisiSpesial !== "") {
        tmp += " atau " + rule.keteranganKondisiSpesial;
      }
      tmp += ". Dengan pilihan:";
      rule.conditioned.forEach((condition) => {
        let valid = true;
        condition.rule.forEach((validation) => {
          let dataAnak = "";
          if (validation.key === "beratbadan") {
            dataAnak = data.dataAnak.beratAnak;
          }
          if (validation.key === "umur") {
            dataAnak = Number(data.dataAnak.umurAnak) / 30;
          }
          if (!evaluateRules(dataAnak, validation.value, validation.operator)) {
            valid = valid && false;
          }
        });
        if (valid) {
          if (flag) {
            tmp +=
              " (" + ++i + ") " + condition.tipe + " " + condition.keterangan;
            flag = false;
          } else {
            tmp +=
              ", (" + ++i + ") " + condition.tipe + " " + condition.keterangan;
          }
        }
      });
      tmp += ".";
      if (rule.keteranganObatAlternatif !== "") {
        tmp +=
          " " + rule.keteranganObatAlternatif + " " + rule.obatAlternatif + ".";
      }
      res.push(tmp);
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

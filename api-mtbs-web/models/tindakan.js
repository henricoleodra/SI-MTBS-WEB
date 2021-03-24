const fs = require("fs");

const classifyTindakan = (penyakit, klasifikasi, data) => {
  let rawRules;
  let res = Array();
  switch (penyakit) {
    case "tandabahayaumum":
      try {
        rawRules = fs.readFileSync("./rules/tindakan/TandaBahayaUmum.json");
      } catch (err) {
        return err;
      }
      break;
    case "batuk":
      try {
        rawRules = fs.readFileSync("./rules/tindakan/Batuk.json");
      } catch (err) {
        return err;
      }
      break;
    case "diare":
      try {
        rawRules = fs.readFileSync("./rules/tindakan/Diare.json");
      } catch (err) {
        return err;
      }
      break;
    case "demam":
      try {
        rawRules = fs.readFileSync("./rules/tindakan/Demam.json");
      } catch (err) {
        return err;
      }
      break;
    case "telinga":
      try {
        rawRules = fs.readFileSync("./rules/tindakan/Telinga.json");
      } catch (err) {
        return err;
      }
      break;
    case "gizi":
      try {
        rawRules = fs.readFileSync("./rules/tindakan/Gizi.json");
      } catch (err) {
        return err;
      }
      break;
    default:
      return "Error";
  }
  let rules = JSON.parse(rawRules);
  rules.forEach((rule) => {
    if (rule.klasifikasi === klasifikasi) {
      rule.conditioned.forEach((condition) => {
        if (!condition.tipe) {
          res.push(condition.keterangan);
        } else {
          let conditional = condition.conditional;
          let valid = conditional === "AND";
          condition.rule.forEach((validation) => {
            let dataAnak = data[validation.node][validation.key];
            let tmp = evaluateRules(
              dataAnak,
              validation.value,
              validation.operator
            );
            valid = evaluateConditional(valid, tmp, conditional);
          });
          if (valid) {
            res.push("(Anak " + condition.tipe + ") " + condition.keterangan);
          }
        }
      });
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

const evaluateConditional = (data1, data2, condition) => {
  switch (condition) {
    case "AND":
      return data1 && data2;
    case "OR":
      return data1 || data2;
    default:
      return "Error";
  }
};

module.exports = {
  classifyTindakan,
};

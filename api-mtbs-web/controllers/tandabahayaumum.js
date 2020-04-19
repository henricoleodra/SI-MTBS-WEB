const tandaBahayaUmum1 = async function(req, res, next) {
//   console.log(req.body.tbu_tidakBisaMinum);
  //Save ke "react strap" global variable terlebih dahulu sebelum di klasifikasikan

  if(req.body.tbu_tidakBisaMinum || req.body.tbu_muntah || req.body.tbu_kejang || req.body.tbu_gelisah){
      console.log("Anak Siap Mati");
  }
  else{
      console.log("Anak Mungkin Selamat");
  }
};

const tandaBahayaUmum2 = async function(req, res, next){
    
}


module.exports = {
    tandaBahayaUmum1, tandaBahayaUmum2
};
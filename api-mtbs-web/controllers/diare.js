const klasifikasiDiare = require('../models/diare');

const diare = async function(req, res, next){
    const classDiare = await klasifikasiDiare.classifierDiare(req.body.ansDiare);
    console.log(req.body.ansDiare);
    const ans = {
        hasilKlasifikasi : classDiare.hasilKlasifikasi,
        statusKlasifikasi: classDiare.statusKlasifikasi,
    }
    res.json(ans);
}


module.exports = {
    diare
};
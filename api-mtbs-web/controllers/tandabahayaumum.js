const klasifikasiTBU = require('../models/tandabahayaumum');


const tandaBahayaUmum = async function(req, res, next){
    const classTBU = await klasifikasiTBU.classifierTBU(req.body.ansTBU);
    const ans = {
        hasilKlasifkasi : classTBU.hasilKlasifkasi,
        statusKlasifikasi: classTBU.statusKlasifikasi,
    }
    res.json(ans);
}


module.exports = {
    tandaBahayaUmum
};
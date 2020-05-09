const klasifikasiTBU = require('../models/tandabahayaumum');

const tandaBahayaUmum1 = async function(req, res, next) {
    const klasTBU = await klasifikasiTBU.klasifikasiTBU1(req.body.ansTBU);
    const ans = {
        hasilKlasifkasi : klasTBU.hasilKlasifkasi,
        statusKlasifikasi: klasTBU.statusKlasifikasi,
    }
    res.json(ans);
    
};

const tandaBahayaUmum2 = async function(req, res, next){
    const klasTBU = await klasifikasiTBU.klasifikasiTBU2(req.body.ansTBU);
    const ans = {
        hasilKlasifkasi : klasTBU.hasilKlasifkasi,
        statusKlasifikasi: klasTBU.statusKlasifikasi,
    }
    res.json(ans);
}

const tandaBahayaUmum = async function(req, res, next){
    const classTBU = await klasifikasiTBU.klasifikasiTBU2(req.body.ansTBU);
    const ans = {
        hasilKlasifkasi : classTBU.hasilKlasifkasi,
        statusKlasifikasi: classTBU.statusKlasifikasi,
    }
    res.json(ans);
}


module.exports = {
    tandaBahayaUmum1, tandaBahayaUmum2, tandaBahayaUmum
};
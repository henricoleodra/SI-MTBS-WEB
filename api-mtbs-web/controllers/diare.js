const klasifikasiDiare = require('../models/diare');

const diare1 = async function(req, res, next) {
    const klasDiare = await klasifikasiDiare.klasifikasiDiare1(req.body.ansDiare);
    const ans = {
        hasilKlasifikasi : klasDiare.hasilKlasifikasi,
        statusKlasifikasi: klasDiare.statusKlasifikasi,
    }
    res.json(ans);
};

const diare2 = async function(req, res, next) {
    const klasDiare = await klasifikasiDiare.klasifikasiDiare2(req.body.ansDiare);
    const ans = {
        hasilKlasifikasi : klasDiare.hasilKlasifikasi,
        statusKlasifikasi: klasDiare.statusKlasifikasi,
    }
    res.json(ans);
};

const diare3 = async function(req, res, next) {
    const klasDiare = await klasifikasiDiare.klasifikasiDiare3(req.body.ansDiare);
    const ans = {
        hasilKlasifikasi : klasDiare.hasilKlasifikasi,
        statusKlasifikasi: klasDiare.statusKlasifikasi,
    }
    res.json(ans);
};


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
    diare1, diare2, diare3, diare
};
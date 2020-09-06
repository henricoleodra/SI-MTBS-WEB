const klasifikasiTelinga = require('../models/telinga');

const telinga1 = async function(req, res, next){
    // kamu lihat front end di folder reducer, AnsTelinga
    const klasTelinga = await klasifikasiTelinga.klasifikasiTelinga1(req.body.ansTelinga);
    
    const ans = {
        hasilKlasifikasi : klasTelinga.hasilKlasifikasi,
        statusKlasifikasi : klasTelinga.statusKlasifikasi,
    }
    res.json(ans);
};

const telinga2 = async function(req, res, next){
    const klasTelinga = await klasifikasiTelinga.klasifikasiTelinga2(req.body.ansTelinga);

    const ans = {
        hasilKlasifikasi : klasTelinga.hasilKlasifikasi,
        statusKlasifikasi : klasTelinga.statusKlasifikasi,
    }
    res.json(ans);
};

const telinga = async function(req, res, next){
    const klasTelinga = await klasifikasiTelinga.classifierTelinga(req.body.ansTelinga);

    const ans = {
        hasilKlasifikasi : klasTelinga.hasilKlasifikasi,
        statusKlasifikasi : klasTelinga.statusKlasifikasi,
    }
    res.json(ans);
};

module.exports = {
    telinga1, telinga2, telinga
};
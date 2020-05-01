const klasifikasiTelinga = require('../models/telinga');

const telinga = async function(req, res, next){
    // kamu lihat front end di folder reducer, AnsTelinga
    const klasTelinga = await klasifikasiTelinga.klasifikasiTelinga1(req.body.telinga_isNyeri, 
        req.body.telinga_isPenuh, 
        req.body.telinga_isNanah, 
        req.body.telinga_nanahLamaHari);
    
    const ans = {
        hasilKlasifikasi : klasTelinga.hasilKlasifikasi,
        statusKlasifikasi : klasTelinga.statusKlasifikasi,
    }
    res.json(ans);
};

const telinga2 = async function(req, res, next){
    const klasTelinga = await klasifikasiTelinga.klasifikasiTelinga2(req.body.telinga_cekKeluarNanah, 
        req.body.telinga_isBengkak);

    const ans = {
        hasilKlasifikasi : klasTelinga.hasilKlasifikasi,
        statusKlasifikasi : klasTelinga.statusKlasifikasi,
    }
    res.json(ans);
};

module.exports = {
    telinga,
    telinga2
};
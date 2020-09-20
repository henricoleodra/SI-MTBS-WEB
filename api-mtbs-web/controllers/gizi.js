const klasifikasiGizi = require('../models/gizi');

const gizi = async function(req, res, next) {
    const klasGizi = await klasifikasiGizi.classifierGizi(req.body.ansGizi);
    const ans = {
        hasilKlasifikasi : klasGizi.hasilKlasifikasi,
        statusKlasifikasi: klasGizi.statusKlasifikasi,
    }
    res.json(ans);
}

const sdGizi = async function(req, res, next) {
    const sdGizi = await klasifikasiGizi.perhitunganSD(req.body.dataAnak);
    const ans = {
        hasilSDGizi: sdGizi.hasilSDGizi,
        nilaiSDGizi: sdGizi.nilaiSDGizi,
    }
    res.json(ans);
}

module.exports = {
    gizi,
    sdGizi
};
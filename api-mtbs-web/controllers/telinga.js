const klasifikasiTelinga = require('../models/telinga');

const telinga = async function(req, res, next){
    const klasTelinga = await klasifikasiTelinga.classifierTelinga(req.body.ansTelinga);

    const ans = {
        hasilKlasifikasi : klasTelinga.hasilKlasifikasi,
        statusKlasifikasi : klasTelinga.statusKlasifikasi,
    }
    res.json(ans);
};

module.exports = {
    telinga
};
const klasifikasiDemam = require('../models/demam');

const demam = async function(req, res, next){
    const classDemam = await klasifikasiDemam.classifierDemam(req.body.ansDemam);
    const ans = {
        hasilKlasifkasi : classDemam.hasilKlasifkasi,
        statusKlasifikasi: classDemam.statusKlasifikasi,
    }
    res.json(ans);
}


module.exports = {
    demam
};
const klasifikasiHIV = require('../models/hiv');

const hiv = async function(req, res, next) {
    const klasHIV = await klasifikasiHIV.classifierHIV(req.body.ansHIV);
    const ans = {
        hasilKlasifikasi : klasHIV.hasilKlasifikasi,
        statusKlasifikasi: klasHIV.statusKlasifikasi,
    }
    res.json(ans);
};

module.exports = {
    hiv
};
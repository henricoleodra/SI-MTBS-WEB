const klasifikasiHIV = require('../models/hiv');

const hiv1 = async function(req, res, next) {
    const klasHIV = await klasifikasiHIV.klasifkasiHIV1(req.body.hiv_pernahTes,req.body.hiv_hasilTes,req.body.hiv_ibuPernahTes,req.body.hiv_ibuHasilTes);
    // const ans = {
    //     hasilKlasifkasi : klasHIV.hasilKlasifkasi,
    //     statusKlasifikasi: klasHIV.statusKlasifikasi,
    // }
    // res.json(ans);
    console.log(req.body);
};

const hiv2 = async function(req, res, next) {
    const klasHIV = await klasifikasiHIV.klasifkasiHIV2(req.body.hiv_pernahTes,req.body.hiv_hasilTes,req.body.hiv_ibuPernahTes,req.body.hiv_ibuHasilTes,
        req.body.hiv_kerabatTerdiagnosis,req.body.hiv_kerabatMeninggal,req.body.hiv_masihDapatASI);
    const ans = {
        hasilKlasifkasi : klasHIV.hasilKlasifkasi,
        statusKlasifikasi: klasHIV.statusKlasifikasi,
    }
    res.json(ans);
};

const hiv3 = async function(req, res, next) {
    const klasHIV = await klasifikasiHIV.klasifkasiHIV2(req.body.hiv_pernahTes,req.body.hiv_hasilTes,req.body.hiv_ibuPernahTes,req.body.hiv_ibuHasilTes,
        req.body.hiv_kerabatTerdiagnosis,req.body.hiv_kerabatMeninggal,req.body.hiv_masihDapatASI);
    const ans = {
        hasilKlasifkasi : klasHIV.hasilKlasifkasi,
        statusKlasifikasi: klasHIV.statusKlasifikasi,
    }
    res.json(ans);
};

module.exports = {
    hiv1, hiv2, hiv3
};
const klasifikasiHIV = require('../models/hiv');

const hiv1 = async function(req, res, next) {
    const klasHIV = await klasifikasiHIV.klasifkasiHIV1(req.body.ansHIV);
    const ans = {
        hasilKlasifikasi : klasHIV.hasilKlasifikasi,
        statusKlasifikasi: klasHIV.statusKlasifikasi,
    }
    res.json(ans);
    // console.log(req.body.ansHIV);
};

const hiv2 = async function(req, res, next) {
    const klasHIV = await klasifikasiHIV.klasifkasiHIV2(req.body.ansHIV);
    const ans = {
        hasilKlasifikasi : klasHIV.hasilKlasifikasi,
        statusKlasifikasi: klasHIV.statusKlasifikasi,
    }
    res.json(ans);
};

const hiv3 = async function(req, res, next) {
    const klasHIV = await klasifikasiHIV.klasifkasiHIV2(req.body.ansHIV);
    const ans = {
        hasilKlasifikasi : klasHIV.hasilKlasifikasi,
        statusKlasifikasi: klasHIV.statusKlasifikasi,
    }
    res.json(ans);
};

const hiv = async function(req, res, next) {
    const klasHIV = await klasifikasiHIV.classifierHIV(req.body.ansHIV);
    const ans = {
        hasilKlasifikasi : klasHIV.hasilKlasifikasi,
        statusKlasifikasi: klasHIV.statusKlasifikasi,
    }
    res.json(ans);
};

module.exports = {
    hiv1, hiv2, hiv3, hiv
};
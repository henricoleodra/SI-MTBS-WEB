const klasifikasiBatuk = require('../models/batuk');

const batuk1 = async function(req, res, next) {
    const klasBatuk = await klasifikasiBatuk.klasifikasiBatuk1(req.body.ansBatuk);
    const ans = {
        hasilKlasifkasi : klasBatuk.hasilKlasifkasi,
        statusKlasifikasi: klasBatuk.statusKlasifikasi,
    }
    res.json(ans);
};

const batuk2 = async function(req, res, next) {
    const klasBatuk = await klasifikasiBatuk.klasifikasiBatuk2(req.body.ansBatuk);
    const ans = {
        hasilKlasifkasi : klasBatuk.hasilKlasifkasi,
        statusKlasifikasi: klasBatuk.statusKlasifikasi,
    }
    res.json(ans);
};

module.exports = {
    batuk1, batuk2
};
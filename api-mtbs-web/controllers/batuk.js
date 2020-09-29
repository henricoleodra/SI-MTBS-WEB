const klasifikasiBatuk = require('../models/batuk');

const batuk = async function(req, res, next){
    const klasBatuk = await klasifikasiBatuk.classifierBatuk(req.body.ansBatuk);
    const ans = {
        hasilKlasifikasi : klasBatuk.hasilKlasifikasi,
        statusKlasifikasi : klasBatuk.statusKlasifikasi,
    }
    res.json(ans);
}

module.exports = {
    batuk
};
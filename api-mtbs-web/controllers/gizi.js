const klasifikasiGizi = require('../models/gizi');

const gizi = async function(req, res, next) {
    // const klasGizi = await klasifikasiGizi.classifierGizi(req.body.ansDemam);
    // const ans = {
    //     hasilKlasifikasi : classDemam.hasilKlasifikasi,
    //     statusKlasifikasi: classDemam.statusKlasifikasi,
    // }
    // res.json(ans);

    const klasGizi = await klasifikasiGizi.perhitunganSD({ jenisKelamin: 1, beratBadan: 21, tinggiAnak: 80 });
}

const sdGizi = async function(req, res, next) {
    const klasGizi = await klasifikasiGizi.perhitunganSD({ jenisKelamin: 1, beratAnak: 21, tinggiAnak: 80 });
}

module.exports = {
    gizi,
    sdGizi
};
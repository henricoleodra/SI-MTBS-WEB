const klasifikasiAnemia = require('../models/anemia');

const anemia = async function(req, res, next) {
    const klasAnemia = await klasifikasiAnemia.klasifikasiAnemia(req.body.ansAnemia);
    const ans = {
        hasilKlasifkasi : klasAnemia.hasilKlasifkasi,
        statusKlasifikasi: klasAnemia.statusKlasifikasi,
    }
    res.json(ans);
};

module.exports = {
    anemia
};


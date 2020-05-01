const klasifikasiTelinga = require('../models/telinga');

const telinga =async function(req, res, next){
    const klasTelinga = await klasifikasiTelinga.klasifikasiTelinga(req.body.telinga);
    // kamu lihat front end di folder reducer, AnsTelinga
    const klasTelinga = await klasifikasiTelinga.klasifikasiTelinga(req.body.telinga_isNyeri);
    // penuh

    // nanah
    
    // tambahin seluruh yang ada di case AnsTelinga 
    
    
    const ans = {
        hasilKlasifikasi : klasTelinga.hasilKlasifikasi,
        statusKlasifikasi : klasTelinga.statusKlasifikasi,
    }
    res.json(ans)
}
const batuk1 = async function(req, res, next) {
    if(req.body.bsb_tarikanDindingDada){
        const ans = {
            hasilKlasifkasi : 'Pneumonia berat',
            statusKlasifikasi: 'danger',
        }
        res.json(ans);
    }
    else if(req.body.bsb_nafasCepat){
        const ans = {
            hasilKlasifkasi : 'Pneumonia',
            statusKlasifikasi: 'warning',
        }
        res.json(ans);
    }
    else{
        const ans = {
            hasilKlasifkasi : 'Batuk bukan pneumonia',
            statusKlasifikasi: 'success'
        }
        res.json(ans);
    }
};

const batuk2 = async function(req, res, next) {
    if(req.body.bsb_tarikanDindingDada || req.body.bsb_saturasiOksigen < 90){
        const ans = {
            hasilKlasifkasi : 'Pneumonia berat',
            statusKlasifikasi: 'danger',
        }
        res.json(ans);
    }
    else if(req.body.bsb_nafasCepat){
        const ans = {
            hasilKlasifkasi : 'Pneumonia',
            statusKlasifikasi: 'warning',
        }
        res.json(ans);
    }
    else{
        const ans = {
            hasilKlasifkasi : 'Batuk bukan pneumonia',
            statusKlasifikasi: 'success'
        }
        res.json(ans);
    }
};

module.exports = {
    batuk1, batuk2
};
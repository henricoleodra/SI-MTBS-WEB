const diare1 = async function(req, res, next) {
    if(req.body.diare_tinjaBerdarah){
        const ans = {
            hasilKlasifkasi : 'Disentri',
            statusKlasifikasi: 'warning',
        }
        res.json(ans);
    }
    else{
        const ans = {
            hasilKlasifkasi : '',
            statusKlasifikasi: 'success'
        }
        res.json(ans);
    }
};
const diare2 = async function(req, res, next) {
    if(req.body.diare_tinjaBerdarah){
        const ans = {
            hasilKlasifkasi : 'Disentri',
            statusKlasifikasi: 'warning',
        }
        res.json(ans);
    }
    else if(req.body.diare_isAnakTidakSadar && req.body.diare_isMataCekung){
        const ans = {
            hasilKlasifkasi : 'Diare Dehidrasi Berat',
            statusKlasifikasi: 'danger',
        }
        res.json(ans);
    }
    else if(req.body.diare_rewelMudahMarah && req.body.diare_isMataCekung){
        const ans = {
            hasilKlasifkasi : 'Diare Dehidrasi Ringan/Sedang',
            statusKlasifikasi: 'warning',
        }
        res.json(ans);
    }
    else{
        const ans = {
            hasilKlasifkasi : '',
            statusKlasifikasi: 'success'
        }
        res.json(ans);
    }
};
const diare3 = async function(req, res, next) {
    if(req.body.diare_tinjaBerdarah){
        const ans = {
            hasilKlasifkasi : 'Disentri',
            statusKlasifikasi: 'warning',
        }
        res.json(ans);
    }
    else if(req.body.diare_berapaLama > 13){
        if(req.body.diare_isNotMinum){
            const ans = {
                hasilKlasifkasi : 'Diare Persisten Berat',
                statusKlasifikasi: 'danger',
            }
            res.json(ans);
        }
        else{
            const ans = {
                hasilKlasifkasi : 'Diare Persisten',
                statusKlasifikasi: 'warning',
            }
            res.json(ans);
        }
    }
    else{
        const ans = {
            hasilKlasifkasi : '',
            statusKlasifikasi: 'success'
        }
        res.json(ans);
    }
};

module.exports = {
    diare1, diare2, diare3
};
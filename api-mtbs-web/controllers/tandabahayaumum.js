const tandaBahayaUmum1 = async function(req, res, next) {
    if(req.body.tbu_tidakBisaMinum || req.body.tbu_muntah || req.body.tbu_kejang || req.body.tbu_gelisah){
        const ans = {
            hasilKlasifkasi : 'Penyakit sangat berat',
            statusKlasifikasi: 'danger',
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

const tandaBahayaUmum2 = async function(req, res, next){
    if(req.body.tbu_tidakBisaMinum || req.body.tbu_muntah || req.body.tbu_kejang || req.body.tbu_gelisah || req.body.tbu_letargis || req.body.tbu_stridor || req.body.tbu_sianosis || req.body.tbu_pucatDingin){
        const ans = {
            hasilKlasifkasi : 'Penyakit sangat berat',
            statusKlasifikasi: 'danger',
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
}


module.exports = {
    tandaBahayaUmum1, tandaBahayaUmum2
};
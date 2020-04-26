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

};
const diare3 = async function(req, res, next) {
    
};

module.exports = {
    diare1, diare2, diare3
};
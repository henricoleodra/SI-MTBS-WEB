const classifierBatuk = (ansBatuk) => {
    if((ansBatuk.bsb_tarikanDindingDada !== null && ansBatuk.bsb_tarikanDindingDada === true) || (ansBatuk.bsb_saturasiOksigen !== '' && ansBatuk.bsb_saturasiOksigen < 90)){
        const ans = {
            hasilKlasifikasi: 'Pneumonia berat',
            statusKlasifikasi: 'danger', 
        }
        return ans;
    }
    else if(ansBatuk.bsb_nafasCepat === true){
        const ans = {
            hasilKlasifikasi : 'Pneumonia',
            statusKlasifikasi: 'warning',
        }
        return ans;
    }
    else{
        const ans = {
            hasilKlasifikasi: 'Batuk bukan pneumonia',
            statusKlasifikasi: 'success'
        }
        return ans;
    }
}


module.exports = {
    classifierBatuk
};
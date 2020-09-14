const classifierBatuk = (ansBatuk) => {
    if((ansBatuk.bsb_tarikanDindingDada !== null && ansBatuk.bsb_tarikanDindingDada === true) || (ansBatuk.bsb_saturasiOksigen !== '' && ansBatuk.bsb_saturasiOksigen < 90)){
        const ans = {
            hasilKlasifkasi: 'Pneumonia berat',
            statusKlasifikasi: 'danger', 
        }
        return ans;
    }
    else if(ansBatuk.bsb_nafasCepat === true){
        const ans = {
            hasilKlasifkasi : 'Pneumonia',
            statusKlasifikasi: 'warning',
        }
        return ans;
    }
    else{
        const ans = {
            hasilKlasifkasi: 'Batuk bukan pneumonia',
            statusKlasifikasi: 'success'
        }
        return ans;
    }
}


module.exports = {
    classifierBatuk
};
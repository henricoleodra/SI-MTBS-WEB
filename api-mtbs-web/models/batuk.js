const klasifikasiBatuk1 = (ansBatuk) =>{
    if(ansBatuk.bsb_tarikanDindingDada){
        const ans = {
            hasilKlasifkasi : 'Pneumonia berat',
            statusKlasifikasi: 'danger',
        }
        return ans;
    }
    else if(ansBatuk.bsb_nafasCepat){
        const ans = {
            hasilKlasifkasi : 'Pneumonia',
            statusKlasifikasi: 'warning',
        }
        return ans;
    }
    else{
        const ans = {
            hasilKlasifkasi : 'Batuk bukan pneumonia',
            statusKlasifikasi: 'success'
        }
        return ans;
    }
};

const klasifikasiBatuk2 = (ansBatuk) =>{
    if(ansBatuk.bsb_tarikanDindingDada || ansBatuk.bsb_saturasiOksigen < 90){
        const ans = {
            hasilKlasifkasi : 'Pneumonia berat',
            statusKlasifikasi: 'danger',
        }
        return ans;
    }
    else if(ansBatuk.bsb_nafasCepat){
        const ans = {
            hasilKlasifkasi : 'Pneumonia',
            statusKlasifikasi: 'warning',
        }
        return ans;
    }
    else{
        const ans = {
            hasilKlasifkasi : 'Batuk bukan pneumonia',
            statusKlasifikasi: 'success'
        }
        return ans;
    }
};

const classifierBatuk = (ansBatuk) => {
    var res = false;
    if(ansBatuk.bsb_lamaHari != null){
        res = res || ansBatuk.bsb_lamaHari;
    }
    if(ansBatuk.bsb_jumlahNafas != null){
        res = res || ansBatuk.bsb_jumlahNafas;
    }
    if(ansBatuk.bsb_nafasCepat != null){
        res = res || ansBatuk.bsb_nafasCepat;
    }
    if(ansBatuk.bsb_tarikanDindingDada != null){
        res = res || ansBatuk.bsb_tarikanDindingDada;
    }
    if(ansBatuk.bsb_wheezing != null){
        res = res || ansBatuk.bsb_wheezing;
    }
    if(res === true || ansBatuk.bsb_saturasiOksigen < 90){
        const ans = {
            hasilKlasifkasi: 'Pneumonia berat',
            statusKlasifikasi: 'danger', 
        }
        return ans;
    }
    else if(ansBatuk.bsb_nafasCepat){
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
    klasifikasiBatuk1, klasifikasiBatuk2, classifierBatuk
};
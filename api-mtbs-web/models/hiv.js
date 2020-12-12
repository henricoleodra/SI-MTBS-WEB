const classifierHIV = (ansHIV) =>{
    var test = false;
    var hasilTest = false;
    var ibuTest = false;
    var ibutHasilTest = false;
    var kerabatTerdiagonis = false;
    var kerabatMeninggal = false;
    var dapatASI = false;
    if(ansHIV.hiv_pernahTes != null){
        test = test || ansHIV.hiv_pernahTes;
    }
    if(ansHIV.hiv_hasilTes != null){
        hasilTest = hasilTest || ansHIV.hiv_hasilTes;
    }
    if(ansHIV.hiv_ibuPernahTes != null){
        ibuTest = ibuTest || ansHIV.hiv_ibuPernahTes;
    }
    if(ansHIV.hiv_ibuHasilTes != null){
        ibutHasilTest = ibutHasilTest || ansHIV.hiv_ibuHasilTes;
    }
    if(ansHIV.hiv_kerabatTerdiagnosis != null){
        kerabatTerdiagonis = kerabatTerdiagonis || ansHIV.hiv_kerabatTerdiagnosis;
    }
    if(ansHIV.hiv_kerabatMeninggal != null){
        kerabatMeninggal = kerabatMeninggal || ansHIV.hiv_kerabatMeninggal;
    }
    if(ansHIV.hiv_masihDapatASI != null){
        dapatASI = dapatASI || ansHIV.hiv_masihDapatASI;
    }

    if(test === true && hasilTest === true){
        const ans = {
            hasilKlasifikasi : 'Infeksi HIV Terkonfirmasi',
            statusKlasifikasi: 'danger',
        }
        return ans;
    }
    else if(ibuTest === true && ibutHasilTest === true){
        if(kerabatTerdiagonis === true || kerabatMeninggal === true){
            const ans = {
                hasilKlasifikasi : 'Diduga terinfeksi HIV',
                statusKlasifikasi: 'danger',
            }
            return ans;
        }
        else{
            const ans = {
                hasilKlasifikasi : 'Diduga terinfeksi HIV',
                statusKlasifikasi: 'danger',
            }
            return ans;
        }
    }
    else if(ibuTest === true && ibutHasilTest === true){
        if(dapatASI === true || test === false){
            const ans = {
                hasilKlasifikasi : 'Terpajan HIV',
                statusKlasifikasi: 'danger',
            }
            return ans;
        }
    }
    else if(kerabatTerdiagonis === true || kerabatMeninggal === true){
        const ans = {
            hasilKlasifikasi : 'Diduga terinfeksi HIV',
            statusKlasifikasi: 'danger',
        }
        return ans;
    }
    else{
        const ans = {
            hasilKlasifikasi : 'Mungkin bukan infeksi HIV',
            statusKlasifikasi: 'success',
        }
        return ans;
    }

}

module.exports = {
    classifierHIV
};
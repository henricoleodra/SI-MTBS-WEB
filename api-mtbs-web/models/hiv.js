const klasifkasiHIV1 = (pernahTes, hasilTes, ibuPernahTes, ibuHasilTes) =>{
    if(pernahTes && hasilTes){
        const ans = {
            hasilKlasifkasi : 'Infeksi HIV Terkonfirmasi',
            statusKlasifikasi: 'danger',
        }
        return ans;
    }
    else if(ibuPernahTes && ibuHasilTes){
        const ans = {
            hasilKlasifkasi : 'Diduga terinfeksi HIV',
            statusKlasifikasi: 'danger',
        }
        return ans;
    }
    else{
        const ans = {
            hasilKlasifkasi : 'Mungkin bukan infeksi HIV',
            statusKlasifikasi: 'success',
        }
        return ans;
    }
    
};

const klasifkasiHIV2 = (pernahTes, hasilTes, ibuPernahTes, ibuHasilTes, kerabatTerdiagnosis, kerabatMeninggal, masihDapatASI) =>{
    if(pernahTes && hasilTes){
        const ans = {
            hasilKlasifkasi : 'Infeksi HIV Terkonfirmasi',
            statusKlasifikasi: 'danger',
        }
        return ans;
    }
    else if((ibuPernahTes && ibuHasilTes) || kerabatTerdiagnosis || kerabatMeninggal){
        const ans = {
            hasilKlasifkasi : 'Diduga terinfeksi HIV',
            statusKlasifikasi: 'danger',
        }
        return ans;
    }
    else if((ibuPernahTes && ibuHasilTes) && (masihDapatASI || pernahTes==false)){
        const ans = {
            hasilKlasifkasi : 'Terpajan HIV',
            statusKlasifikasi: 'danger',
        }
        return ans;
    }
    else{
        const ans = {
            hasilKlasifkasi : 'Mungkin bukan infeksi HIV',
            statusKlasifikasi: 'success',
        }
        return ans;
    }
    
};

module.exports = {
    klasifkasiHIV1, klasifkasiHIV2
};
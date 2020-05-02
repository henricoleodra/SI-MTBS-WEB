const klasifkasiHIV1 = (ansHIV) =>{
    if(ansHIV.hiv_pernahTes && ansHIV.hiv_hasilTes){
        const ans = {
            hasilKlasifikasi : 'Infeksi HIV Terkonfirmasi',
            statusKlasifikasi: 'danger',
        }
        return ans;
    }
    else if(ansHIV.hiv_ibuPernahTes && ansHIV.hiv_ibuHasilTes){
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
    
};

const klasifkasiHIV2 = (ansHIV) =>{
    if(ansHIV.hiv_pernahTes && ansHIV.hiv_hasilTes){
        const ans = {
            hasilKlasifikasi : 'Infeksi HIV Terkonfirmasi',
            statusKlasifikasi: 'danger',
        }
        return ans;
    }
    else if(ansHIV.hiv_ibuPernahTes && ansHIV.hiv_ibuHasilTes){
        if(ansHIV.hiv_kerabatTerdiagnosis || ansHIV.hiv_kerabatMeninggal){
            const ans = {
                hasilKlasifikasi : 'Diduga terinfeksi HIV',
                statusKlasifikasi: 'danger',
            }
            return ans;
        }
    }
    else if(ansHIV.hiv_ibuPernahTes && ansHIV.hiv_ibuHasilTes){
        if(ansHIV.hiv_masihDapatASI || ansHIV.hiv_pernahTes==false){
            const ans = {
                hasilKlasifikasi : 'Terpajan HIV',
                statusKlasifikasi: 'danger',
            }
            return ans;
        }   
    }
    else{
        const ans = {
            hasilKlasifikasi : 'Mungkin bukan infeksi HIV',
            statusKlasifikasi: 'success',
        }
        return ans;
    }
    
};

module.exports = {
    klasifkasiHIV1, klasifkasiHIV2
};
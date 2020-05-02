const klasifkasiHIV1 = (ansHIV) =>{
    if(ansHIV.pernahTes && ansHIV.hasilTes){
        const ans = {
            hasilKlasifikasi : 'Infeksi HIV Terkonfirmasi',
            statusKlasifikasi: 'danger',
        }
        return ans;
    }
    else if(ansHIV.ibuPernahTes && ansHIV.ibuHasilTes){
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
    if(ansHIV.pernahTes && ansHIV.hasilTes){
        const ans = {
            hasilKlasifikasi : 'Infeksi HIV Terkonfirmasi',
            statusKlasifikasi: 'danger',
        }
        return ans;
    }
    else if(ansHIV.ibuPernahTes && ansHIV.ibuHasilTes){
        if(ansHIV.kerabatTerdiagnosis || ansHIV.kerabatMeninggal){
            const ans = {
                hasilKlasifikasi : 'Diduga terinfeksi HIV',
                statusKlasifikasi: 'danger',
            }
            return ans;
        }
    }
    else if(ansHIV.ibuPernahTes && ansHIV.ibuHasilTes){
        if(ansHIV.masihDapatASI || ansHIV.pernahTes==false){
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
const klasifikasiAnemia = (ansAnemia) =>{
    if(ansAnemia.anemia_isPucat == "sangatPucat"){
        const ans = {
            hasilKlasifkasi : 'Anemia Berat',
            statusKlasifikasi: 'danger',
        }
        return ans;
    }
    else if(ansAnemia.anemia_isPucat == "agakPucat"){
        const ans = {
            hasilKlasifkasi : 'Anemia',
            statusKlasifikasi: 'warning',
        }
        return ans;
    }
    else{
        const ans = {
            hasilKlasifkasi : 'Tidak Anemia',
            statusKlasifikasi: 'success',
        }
        return ans;
    }
    
};

module.exports = {
    klasifikasiAnemia
};
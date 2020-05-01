// Sangat Pucat -> Anemia Berat Merah
// Agak Pucat -> Anemia Kuning
// Normal -> Tidak Anemia

const klasifkasiAnemia = (anemia) =>{
    if(anemia == "sangatPucat"){
        const ans = {
            hasilKlasifkasi : 'Anemia Berat',
            statusKlasifikasi: 'danger',
        }
        return ans;
    }
    else if(anemia == "agakPucat"){
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
    klasifkasiAnemia
};
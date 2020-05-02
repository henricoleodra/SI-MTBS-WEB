const klasifikasiTBU1 = (ansTBU) =>{
    if(ansTBU.tbu_tidakBisaMinum || ansTBU.tbu_muntah || ansTBU.tbu_kejang || ansTBU.tbu_gelisah){
        const ans = {
            hasilKlasifkasi : 'Penyakit sangat berat',
            statusKlasifikasi: 'danger',
        }
        return ans;
    }
    else{
        const ans = {
            hasilKlasifkasi : '',
            statusKlasifikasi: 'success'
        }
        return ans;
    }
};

const klasifikasiTBU2 = (ansTBU) =>{
    if(ansTBU.tbu_tidakBisaMinum || ansTBU.tbu_muntah || ansTBU.tbu_kejang || ansTBU.tbu_gelisah || ansTBU.tbu_letargis || ansTBU.tbu_stridor || ansTBU.tbu_sianosis || ansTBU.tbu_pucatDingin){
        const ans = {
            hasilKlasifkasi : 'Penyakit sangat berat',
            statusKlasifikasi: 'danger',    
        }
        return ans;
    }
    else{
        const ans = {
            hasilKlasifkasi : '',
            statusKlasifikasi: 'success'
        }
        return ans;
    }
};

module.exports = {
    klasifikasiTBU1, klasifikasiTBU2
};
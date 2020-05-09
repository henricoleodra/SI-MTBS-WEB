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

const classifierTBU = (ansTBU) =>{
    var res = false;
    if(ansTBU.tbu_tidakBisaMinum != null){
        res = res || ansTBU.tbu_tidakBisaMinum;
    }
    if(ansTBU.tbu_muntah != null){
        res = res || ansTBU.tbu_muntah;
    }
    if(ansTBU.tbu_kejang != null){
        res = res || ansTBU.tbu_kejang;
    }
    if(ansTBU.tbu_gelisah != null){
        res = res || ansTBU.tbu_gelisah;
    }
    if(ansTBU.tbu_letargis != null){
        res = res || ansTBU.tbu_letargis;
    }
    if(ansTBU.tbu_stridor != null){
        res = res || ansTBU.tbu_stridor;
    }
    if(ansTBU.tbu_sianosis != null){
        res = res || ansTBU.tbu_sianosis;
    }
    if(ansTBU.tbu_pucatDingin != null){
        res = res || ansTBU.tbu_pucatDingin;
    }
    if(res === true){
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
}

module.exports = {
    klasifikasiTBU1, klasifikasiTBU2, classifierTBU
};
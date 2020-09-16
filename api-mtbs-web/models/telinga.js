const classifierTelinga = (ansTelinga) =>{
    var masto = false;
    var infeksi = false;
    if(ansTelinga.telinga_isBengkak != null){
        masto = masto || ansTelinga.telinga_isBengkak;
    }
    if(ansTelinga.telinga_isNyeri != null){
        infeksi = infeksi || ansTelinga.telinga_isNyeri;
    }
    if(ansTelinga.telinga_isPenuh != null){
        infeksi = infeksi || ansTelinga.telinga_isPenuh;
    }
    if(ansTelinga.telinga_isNanah != null){
        infeksi = infeksi || ansTelinga.telinga_isNanah;
    }
    if(ansTelinga.telinga_cekKeluarNanah != null){
        infeksi = infeksi || ansTelinga.telinga_cekKeluarNanah;
    }
    
    if(masto === true){
        const ans = {
            hasilKlasifikasi : 'Mastoiditis',
            statusKlasifikasi : 'danger',
        }
        return ans;
    }
    else if(infeksi === true){
        if(ansTelinga.telinga_nanahLamaHari >= 14){
            const ans1 = {
                hasilKlasifikasi : 'Infeksi Telinga Kronis',
                statusKlasifikasi : 'warning',
            }
            return ans1;
        }

        const ans = {
            hasilKlasifikasi : 'Infeksi Telinga Akut',
            statusKlasifikasi : 'warning',
        }
        return ans;
    }
    else{
        const ans = {
            hasilKlasifikasi : 'Tidak Ada Infeksi Telinga',
            statusKlasifikasi : 'success',
        }
        return ans;
    }
}

module.exports = {
    classifierTelinga
};
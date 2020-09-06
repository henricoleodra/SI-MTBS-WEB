// Pembengkakan telinga-> Telinga berat Merah
// Nyeri telinga -> Telinga Kuning
// Rasa penuh di telinga -> Telinga Kuning
// Tampak cairan -> Telinga Kuning
// lebih besar sama dengan 14 hari ->Telinga Kuning
// Tidak ada nyeri -> Telinga aman

const klasifikasiTelinga1 = (ansTelinga) =>{

    if(ansTelinga.telinga_isNyeri || ansTelinga.telinga_isPenuh || ansTelinga.telinga_isNanah){
        const ans = {
            hasilKlasifikasi : 'Infeksi Telinga Akut',
            statusKlasifikasi : 'warning',
        }
        if(ansTelinga.telinga_nanahLamaHari >= 14){
            const ans1 = {
                hasilKlasifikasi : 'Infeksi Telinga Kronis',
                statusKlasifikasi : 'warning',
            }
            return ans1;
        }
    return ans;
    }
    else{
        const ans = {
            hasilKlasifikasi : 'Tidak Ada Infeksi Telinga',
            // hasilKlasifikasi : '',
            statusKlasifikasi : 'success',
        }
        return ans;
    }
};

const klasifikasiTelinga2 = (ansTelinga) =>{
    if(ansTelinga.telinga_isBengkak){
        const ans = {
            hasilKlasifikasi : 'Mastoiditis',
            statusKlasifikasi : 'danger',
        }
        return ans;
    }else if(ansTelinga.telinga_isNyeri || ansTelinga.telinga_isPenuh || ansTelinga.telinga_isNanah || ansTelinga.telinga_cekKeluarNanah){
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
    }else{
        const ans = {
            hasilKlasifikasi : 'Tidak Ada Infeksi Telinga',
            // hasilKlasifikasi : '',
            statusKlasifikasi : 'success',
        }
        return ans;
    }
};

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
    klasifikasiTelinga1,
    klasifikasiTelinga2,
    classifierTelinga
};
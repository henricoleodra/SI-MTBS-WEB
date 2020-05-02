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
    }else if(ansTelinga.telinga_cekKeluarNanah){
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

module.exports = {
    klasifikasiTelinga1,
    klasifikasiTelinga2
};
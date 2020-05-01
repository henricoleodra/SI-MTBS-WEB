// Pembengkakan telinga-> Telinga berat Merah
// Nyeri telinga -> Telinga Kuning
// Rasa penuh di telinga -> Telinga Kuning
// Tampak cairan -> Telinga Kuning
// lebih besar sama dengan 14 hari ->Telinga Kuning
// Tidak ada nyeri -> Telinga aman

const klasifikasiTelinga = (nyeriTelinga, penuh, tampakCairan, lebihBesarSamaDengan14Hari) =>{

    if(nyeriTelinga || penuh || tampakCairan){
        const ans = {
            hasilKlasifikasi : 'Infeksi Telinga Akut',
            statusKlasifikasi : 'warning',
        }
        if(lebihBesarSamaDengan14Hari >= 14){
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
            // hasilKlasifikasi : 'Tidak Ada Infeksi Telinga',
            hasilKlasifikasi : '',
            statusKlasifikasi : 'success',
        }
        return ans;
    }
};

const klasifikasiTelinga2 = (lihatCairan, pembengkakanTelinga) =>{
    if(pembengkakanTelinga){
        const ans = {
            hasilKlasifikasi : 'Mastoiditis',
            statusKlasifikasi : 'danger',
        }
        return ans;
    }else if(lihatCairan){
        const ans = {
            hasilKlasifikasi : 'Infeksi Telinga Akut',
            statusKlasifikasi : 'warning',
        }
        return ans;
    }else{
        const ans = {
            // hasilKlasifikasi : 'Tidak Ada Infeksi Telinga',
            hasilKlasifikasi : '',
            statusKlasifikasi : 'success',
        }
        return ans;
    }
};

module.exports = {
    klasifikasiTelinga,
    klasifikasiTelinga2
};
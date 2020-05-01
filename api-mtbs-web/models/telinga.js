// Pembengkakan telinga-> Telinga berat Merah
// Nyeri telinga -> Telinga Kuning
// Rasa penuh di telinga -> Telinga Kuning
// Tampak cairan -> Telinga Kuning
// lebih besar sama dengan 14 hari ->Telinga Kuning
// Tidak ada nyeri -> Telinga aman

const klasifikasiTelinga = (telinga) =>{
    if(telinga == 'pembengkakanTelinga'){
        const ans = {
            hasilKlasifikasi : 'Mastoiditis',
            statusKlasifikasi : 'danger',
        }
        return ans;
    }
    else if(telinga == 'nyeriTelinga' || telinga == 'rasaPenuhDiTelinga' || telinga == 'tampakCairan'){
        const ans = {
            hasilKlasifikasi : 'Infeksi Telinga Akut',
            statusKlasifikasi : 'warning',
        }
        if(telinga == 'lebihBesarSamaDengan14Hari'){
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
            statusKlasifikasi : 'success',
        }
        return ans;
    }
};

module.exports = {
    klasifikasiTelinga
};
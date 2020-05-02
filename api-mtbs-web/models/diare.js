const klasifikasiDiare1 = (ansDiare) =>{
    if(ansDiare.diare_tinjaBerdarah){
        const ans = {
            hasilKlasifikasi : 'Disentri',
            statusKlasifikasi: 'warning',
        }
        return ans;
    }
    else{
        const ans = {
            hasilKlasifikasi : '',
            statusKlasifikasi: 'success'
        }
        return ans;
    }
};

const klasifikasiDiare2 = (ansDiare) =>{
    if(ansDiare.diare_tinjaBerdarah){
        const ans = {
            hasilKlasifikasi : 'Disentri',
            statusKlasifikasi: 'warning',
        }
        return ans;
    }
    else if(ansDiare.diare_isAnakTidakSadar && ansDiare.diare_isMataCekung){
        const ans = {
            hasilKlasifikasi : 'Diare Dehidrasi Berat',
            statusKlasifikasi: 'danger',
        }
        return ans;
    }
    else if(ansDiare.diare_rewelMudahMarah && ansDiare.diare_isMataCekung){
        const ans = {
            hasilKlasifikasi : 'Diare Dehidrasi Ringan/Sedang',
            statusKlasifikasi: 'warning',
        }
        return ans;
    }
    else{
        const ans = {
            hasilKlasifikasi : 'Diare Tanpa Dehidrasi',
            statusKlasifikasi: 'success'
        }
        return ans;
    }
};

const klasifikasiDiare3 = (ansDiare) =>{
    let berat = 0;
    let ringan = 0;
    if(ansDiare.diare_isAnakTidakSadar){
        berat = berat + 1;
    }
    if(ansDiare.diare_rewelMudahMarah){
        ringan = ringan + 1;
    }
    if(ansDiare.diare_isMataCekung){
        berat = berat + 1;
        ringan = ringan + 1;
    }
    if(ansDiare.diare_isNotMinum){
        berat = berat + 1;
    }
    if(ansDiare.diare_isNotMinum == false){
        ringan = ringan + 1;
    }
    if(ansDiare.diare_kulitPerutLambat === "SangatLambat"){
        berat = berat + 1;
    }
    if(ansDiare.diare_kulitPerutLambat === "Lambat"){
        ringan = ringan + 1;
    }
    if(ansDiare.diare_tinjaBerdarah){
        const ans = {
            hasilKlasifikasi : 'Disentri',
            statusKlasifikasi: 'warning',
        }
        return ans;
    }
    else if(ansDiare.diare_berapaLama > 13){
        if(ansDiare.diare_isNotMinum){
            const ans = {
                hasilKlasifikasi : 'Diare Persisten Berat',
                statusKlasifikasi: 'danger',
            }
            return ans;
        }
        else{
            const ans = {
                hasilKlasifikasi : 'Diare Persisten',
                statusKlasifikasi: 'warning',
            }
            return ans;
        }
    }
    else if(berat > 1){
        const ans = {
            hasilKlasifikasi : 'Diare Dehidrasi Berat',
            statusKlasifikasi: 'danger',
        }
        return ans;
    }
    else if(ringan > 1){
        const ans = {
            hasilKlasifikasi : 'Diare Dehidrasi Ringan/Sedang',
            statusKlasifikasi: 'warning',
        }
        return ans;
    }
    else{
        const ans = {
            hasilKlasifikasi : 'Diare Tanpa Dehidrasi',
            statusKlasifikasi: 'success'
        }
        return ans;
    }
};


module.exports = {
    klasifikasiDiare1, klasifikasiDiare2, klasifikasiDiare3
};
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

const classifierDiare = (ansDiare) =>{
    var status = null;
    var klasifikasi = null; 
    var berat = 0;
    var ringan = 0;
    var dehidrasi = null;
    if(ansDiare.diare_tinjaBerdarah != null){
        if(ansDiare.diare_tinjaBerdarah === true){
            if(status === null){
                status = 2;
            }
            else{
                if(status != 1){
                    status = 2;
                }
            }
            if(klasifikasi === null){
                klasifikasi = 'Disentri';
            }
            else{
                klasifikasi += '\nDisentri';
            }
        }
    }
    if(ansDiare.diare_isAnakTidakSadar != null){
        if(ansDiare.diare_isAnakTidakSadar === true){
            berat ++;
        }
    }
    if(ansDiare.diare_isMataCekung != null){
        if(ansDiare.diare_isMataCekung === true){
            berat ++;
            ringan ++;
        }
    }
    if(ansDiare.diare_isNotMinum != null){
        if(ansDiare.diare_isNotMinum === true){
            berat ++;
        }
        else{
            ringan ++;
        }
    }
    if(ansDiare.diare_kulitPerutLambat != null){
        if(ansDiare.diare_kulitPerutLambat === 'Sangat Lambat'){
            berat ++;
        } 
        else if(ansDiare.diare_kulitPerutLambat === 'Lambat'){
            ringan ++;
        }
    }
    if(berat >= 2){
        status = 1;
        dehidrasi = true;
        if(klasifikasi === null){
            klasifikasi = 'Diare Dehidrasi Berat';
        }
        else{
            klasifikasi += '\nDiare Dehidrasi Berat';
        }
    }
    else if(ringan >= 2){
        dehidrasi = true;
        if(status === null){
            status = 2;
        }
        else{
            if(status != 1){
                status = 2;
            }
        }
        if(klasifikasi === null){
            klasifikasi = 'Diare Dehidrasi Ringan/Sedang';
        }
        else{
            klasifikasi += '\nDiare Dehidrasi Ringan/Sedang';
        }
    }
    else{
        dehidrasi = false;
        if(status === null){
            status = 3;
        }
        else{
            if(status != 1 && status != 2){
                status = 3;
            }
        }
        if(klasifikasi === null){
            klasifikasi = 'Diare Tanpa Dehidrasi';
        }
        else{
            klasifikasi += '\nDiare Tanpa Dehidrasi';
        }
    }
    if(dehidrasi != null){
        if(ansDiare.diare_berapaLama !=null){
            if(ansDiare.diare_berapaLama >= 14 && dehidrasi === true){
                status = 1;
                if(klasifikasi === null){
                    klasifikasi = 'Diare Persisten Berat';
                }
                else{
                    klasifikasi += '\nDiare Persisten Berat';
                }
            }
            else{
                if(status === null){
                    status = 2;
                }
                else{
                    if(status != 1){
                        status = 2;
                    }
                }
                if(klasifikasi === null && ansDiare.diare_berapaLama >= 14){
                    klasifikasi = 'Diare Persisten';
                }
                else if(klasifikasi !== null && ansDiare.diare_berapaLama >= 14){
                    klasifikasi += '\nDiare Persisten';
                }
            }
        }
    }
    var resStatus = '';
    if(status === 1){
        resStatus = 'danger';
    }
    else if(status === 2){
        resStatus = 'warning';
    }
    else if(status === 3){
        resStatus = 'success';
    }
    else{
        resStatus = 'dark';
    }
    const ans = {
        hasilKlasifikasi : klasifikasi,
        statusKlasifikasi: resStatus,    
    }
    return ans;
};


module.exports = {
    klasifikasiDiare1, klasifikasiDiare2, klasifikasiDiare3, classifierDiare
};
const classifierDemam = (ansDemam) =>{
    var status = null;
    var klasifikasi = null; 
    if(ansDemam.demam_isDaerahEndemis === 'Tinggi' || ansDemam.demam_isDaerahEndemis === 'Rendah' || ansDemam.demam_isBerkunjungDaerahEndemis === 'Tinggi' || ansDemam.demam_isBerkunjungDaerahEndemis === 'Rendah'){
        if(ansDemam.demam_kudukKaku != null){
            if(ansDemam.klasifikasiTBU === true || ansDemam.demam_kudukKaku === true){
                status = 1;
                if(klasifikasi != null){
                    klasifikasi = 'Penyakit Berat Dengan Demam';
                }
                else{
                    klasifikasi = 'Penyakit Berat Dengan Demam';
                }
            }
            else if(ansDemam.demam_hasilRDT != null){
                if(ansDemam.suhuAnak >= 37.5 && ansDemam.demam_hasilRDT === true){
                    if(status === null){
                        status = 2;
                    }
                    else{
                        if(status != 1){
                            status = 2;
                        }
                    }
                    if(klasifikasi != null){
                        klasifikasi = 'Malaria';
                    }
                    else{
                        klasifikasi = 'Malaria';
                    }
                }
                else if(ansDemam.demam_hasilRDT === false  || demam_sebabLain != ''){
                    if(status === null){
                        status = 3;
                    }
                    else{
                        if(status != 1 && status != 2){
                            status = 3;
                        }
                    }
                    if(klasifikasi != null){
                        klasifikasi = 'Demam Mungkin Bukan Malaria';
                    }
                    else{
                        klasifikasi = 'Demam Mungkin Bukan Malaria';
                    }
                }
            }
            else if(demam_sebabLain != ''){
                if(status === null){
                    status = 3;
                }
                else{
                    if(status != 1 && status != 2){
                        status = 3;
                    }
                }
                if(klasifikasi != null){
                    klasifikasi = 'Demam Mungkin Bukan Malaria';
                }
                else{
                    klasifikasi = 'Demam Mungkin Bukan Malaria';
                }
            }
        }
    }
    else if(ansDemam.demam_isDaerahEndemis === 'Non Endemis' && ansDemam.demam_isBerkunjungDaerahEndemis === 'Non Endemis'){
        if(ansDemam.demam_kudukKaku != null){
            if(ansDemam.klasifikasiTBU === true || ansDemam.demam_kudukKaku === true || ansDemam.umurAnak <= 3){
                status = 1;
                if(klasifikasi != null){
                    klasifikasi = 'Penyakit Berat Dengan Demam';
                }
                else{
                    klasifikasi = 'Penyakit Berat Dengan Demam';
                }
            }
            else if(ansDemam.klasifikasiTBU === false && ansDemam.demam_kudukKaku === false){
                if(status === null){
                    status = 3;
                }
                else{
                    if(status != 1 && status != 2){
                        status = 3;
                    }
                }
                if(klasifikasi != null){
                    klasifikasi = 'Demam Bukan Malaria';
                }
                else{
                    klasifikasi = 'Demam Bukan Malaria';
                }
            }
        }    
    }
    if(ansDemam.demam_ruamKemerahan !=null){
        if(ansDemam.demam_ruamKemerahan === true){
            if(ansDemam.klasifikasiTBU === true || ansDemam.demam_korneaKeruh === true || ( ansDemam.demam_isLukaMulut === true && (ansDemam.demam_descLukaMulutLuas === true || ansDemam.demam_descLukaMulutDalam === true))){
                status = 1;
                if(klasifikasi != null){
                    klasifikasi = 'Campak Dengan Komplikasi Berat';
                }
                else{
                    klasifikasi = 'Campak Dengan Komplikasi Berat';
                }
            }
            else if(ansDemam.demam_nanahDiMata === true || ansDemam.demam_isLukaMulut === true){
                if(status === null){
                    status = 2;
                }
                else{
                    if(status != 1){
                        status = 2;
                    }
                }
                if(klasifikasi != null){
                    klasifikasi = 'Campak Dengan Komplikasi Pada Mata Dan/Atau Mulut';
                }
                else{
                    klasifikasi = 'Campak Dengan Komplikasi Pada Mata Dan/Atau Mulut';
                }
            }
        }
    }
    if(ansDemam.demam_berapaLama >=2){
        var tmpTandaSyok = false;
        var tmpUluHati = false;
        var tmpMuntahMuntah = false;
        var tmpPendarahan = false;
        var tmpTorniket = false;
        var tmpMendadakTinggi = false;

        if(ansDemam.demam_isEkstremitasDingin != null){
            tmpTandaSyok = ansDemam.demam_isEkstremitasDingin;
        }
        if(ansDemam.demam_isNyeriUluOrGelisah != null){
            tmpUluHati = ansDemam.demam_isNyeriUluOrGelisah;
        }
        if(ansDemam.demam_anakMuntah != null){
            tmpMuntahMuntah = ansDemam.demam_anakMuntah;
        }
        if(ansDemam.demam_darahHidungGusiKulit != null){
            tmpPendarahan = ansDemam.demam_darahHidungGusiKulit;
        }
        if(ansDemam.demam_hasilUjiTorniket != null){
            tmpTorniket = ansDemam.demam_hasilUjiTorniket;
        }
        if(ansDemam.demam_isTinggiMenerus != null){
            tmpMendadakTinggi = ansDemam.demam_isTinggiMenerus;
        }
        
        if(tmpTandaSyok === true || tmpUluHati === true || tmpMuntahMuntah === true || tmpPendarahan === true || tmpTorniket === true){
            status = 1;
            if(klasifikasi != null){
                klasifikasi = 'Demam Berdarah Dengue (DBD)';
            }
            else{
                klasifikasi = 'Demam Berdarah Dengue (DBD)';
            }
        }
        else if(tmpMendadakTinggi === true || tmpPendarahan === false || tmpTorniket === false){
            if(status === null){
                status = 2;
            }
            else{
                if(status != 1){
                    status = 2;
                }
            }
            if(klasifikasi != null){
                klasifikasi = 'Mungkin DBD';
            }
            else{
                klasifikasi = 'Mungkin DBD';
            }
        }
        else if(tmpTandaSyok === false && tmpUluHati === false && tmpMuntahMuntah === false && tmpPendarahan === false && tmpTorniket === false && tmpMendadakTinggi === false){
            if(status === null){
                status = 3;
            }
            else{
                if(status != 1 && status != 2){
                    status = 3;
                }
            }
            if(klasifikasi != null){
                klasifikasi = 'Demam Mungkin Bukan DBD';
            }
            else{
                klasifikasi = 'Demam Mungkin Bukan DBD';
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
    else{
        resStatus = 'success';
    }
    const ans = {
        hasilKlasifikasi : klasifikasi,
        statusKlasifikasi: resStatus,    
    }
    return ans;
}

module.exports = {
    classifierDemam
};
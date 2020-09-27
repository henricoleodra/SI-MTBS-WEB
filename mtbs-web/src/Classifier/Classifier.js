import axios from 'axios';
import { 
    KlasifikasiTBUChange, 
    KlasifikasiBatukChange, 
    KlasifikasiDiareChange, 
    KlasifikasiDemamChange,
    KlasifikasiTelingaChange,
    KlasifikasiGiziChange,
    KlasifikasiAnemiaChange,
    KlasifikasiHIVChange, 
} from '../Actions'; 

const Classifier = ( cur, dispatch, flag, ansTBU, ansBatuk, ansDiare, ansDemam, ansTelinga, ansGizi, ansAnemia, ansHIV ) => {

    if(flag.tbu === true && cur !== "tbu") {
        axios.post(`/TBU`, {
            ansTBU : ansTBU
          })
          .then(res => {
            dispatch(KlasifikasiTBUChange('TBU_KLASIFIKASI', res.data.hasilKlasifkasi));
            dispatch(KlasifikasiTBUChange('TBU_STATUS', res.data.statusKlasifikasi));
          })
          .catch(err=>{
            console.log(err);
          });
    }
    if(flag.batuk === true  && cur !== "batuk") {
        axios.post(`/Batuk`, {
            ansBatuk: ansBatuk
        })
        .then(res => {
            dispatch(KlasifikasiBatukChange('BATUK_KLASIFIKASI', res.data.hasilKlasifikasi));
            dispatch(KlasifikasiBatukChange('BATUK_STATUS', res.data.statusKlasifikasi));
        })
        .catch(err => {
            console.log(err);
        });
    }
    if(flag.diare === true && cur !== "diare") {
        axios.post(`/Diare`, {
            ansDiare: ansDiare
        })
        .then(res => {
            dispatch(KlasifikasiDiareChange('DIARE_KLASIFIKASI', res.data.hasilKlasifikasi));
            dispatch(KlasifikasiDiareChange('DIARE_STATUS', res.data.statusKlasifikasi));
        })
        .catch(err => {
            console.log(err);
        });
    }
    if(flag.demam === true && cur !== "demam") {
        axios.post(`/Demam`, {
            ansDemam: ansDemam
        })
        .then(res => {
            dispatch(KlasifikasiDemamChange('DEMAM_KLASIFIKASI', res.data.hasilKlasifikasi));
            dispatch(KlasifikasiDemamChange('DEMAM_STATUS', res.data.statusKlasifikasi));
        })
        .catch(err => {
            console.log(err);
        });
    }
    if(flag.telinga === true && cur !== "telinga") {
        axios.post(`/Telinga`, {
            ansTelinga: ansTelinga
        })
        .then(res => {
            dispatch(KlasifikasiTelingaChange('TELINGA_KLASIFIKASI', res.data.hasilKlasifikasi));
            dispatch(KlasifikasiTelingaChange('TELINGA_STATUS', res.data.statusKlasifikasi));
        })
        .catch(err => {
            console.log(err);
        });
    }
    if(flag.gizi === true && cur !== "gizi") {
        axios.post(`/Gizi`, {
            ansGizi: ansGizi
        })
        .then(res => {
            dispatch(KlasifikasiGiziChange('GIZI_KLASIFIKASI', res.data.hasilKlasifikasi));
            dispatch(KlasifikasiGiziChange('GIZI_STATUS', res.data.statusKlasifikasi));
        })
        .catch(err => {
            console.log(err);
        });
    }
    if(flag.anemia === true && cur !== "anemia"){
        axios.post(`/Anemia`, {
            ansAnemia : ansAnemia
        })
        .then(res => {
            dispatch(KlasifikasiAnemiaChange('ANEMIA_KLASIFIKASI', res.data.hasilKlasifkasi));
            dispatch(KlasifikasiAnemiaChange('ANEMIA_STATUS', res.data.statusKlasifikasi));
        })
        .catch(err=>{
            console.log(err);
        });
    }
    if(flag.hiv === true  && cur !== "hiv"){
        axios.post(`/HIV`, {
            ansHIV: ansHIV
        })
        .then(res => {
            dispatch(KlasifikasiHIVChange('HIV_KLASIFIKASI', res.data.hasilKlasifikasi));
            dispatch(KlasifikasiHIVChange('HIV_STATUS', res.data.statusKlasifikasi));
        })
        .catch(err => {
            console.log(err);
        });
    }
}

export default Classifier;


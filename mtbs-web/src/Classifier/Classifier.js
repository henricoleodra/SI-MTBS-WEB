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
    AnsDemamChange,
    AnsGiziChange 
} from '../Actions'; 

const Classifier = ( cur, dispatch, flag, ansTBU, ansBatuk, ansDiare, ansDemam, ansTelinga, ansGizi, ansAnemia, ansHIV ) => {
    if(flag.tbu !== 0 && cur !== "tbu") {
        axios.post(`/TBU`, {
            ansTBU : ansTBU
        })
        .then(res => {
            dispatch(KlasifikasiTBUChange('TBU_KLASIFIKASI', res.data.hasilKlasifkasi));
            dispatch(KlasifikasiTBUChange('TBU_STATUS', res.data.statusKlasifikasi));
            if(res.data.statusKlasifikasi === 'danger'){
                dispatch(AnsDemamChange('KLASIFIKASI_TBU', true));
                dispatch(AnsGiziChange('GIZI_TANDA_BAHAYA_UMUM', true));
            }
            else{
                dispatch(AnsGiziChange('GIZI_TANDA_BAHAYA_UMUM', false));
                dispatch(AnsDemamChange('KLASIFIKASI_TBU', false));
            }
        })
        .catch(err=>{
            console.log(err);
        });
    }
    if(flag.batuk !== 0  && cur !== "batuk") {
        axios.post(`/Batuk`, {
            ansBatuk: ansBatuk
        })
        .then(res => {
            console.log(res.data.hasilKlasifikasi);
            dispatch(KlasifikasiBatukChange('BATUK_KLASIFIKASI', res.data.hasilKlasifikasi));
            dispatch(KlasifikasiBatukChange('BATUK_STATUS', res.data.statusKlasifikasi));
            if(res.data.statusKlasifikasi === "danger" || res.data.statusKlasifikasi === "warning"){
                dispatch(AnsGiziChange('GIZI_BATUK', true));
            }
            else{
                dispatch(AnsGiziChange('GIZI_BATUK', false));
            }
        })
        .catch(err => {
            console.log(err);
        });
    }
    if(flag.diare !== 0 && cur !== "diare") {
        axios.post(`/Diare`, {
            ansDiare: ansDiare
        })
        .then(res => {
            dispatch(KlasifikasiDiareChange('DIARE_KLASIFIKASI', res.data.hasilKlasifikasi));
            dispatch(KlasifikasiDiareChange('DIARE_STATUS', res.data.statusKlasifikasi));
            if(res.data.statusKlasifikasi === "danger" || res.data.statusKlasifikasi === "warning"){
                dispatch(AnsGiziChange('GIZI_DIARE', true));
            }
            else{
                dispatch(AnsGiziChange('GIZI_DIARE', false));
            }
        })
        .catch(err => {
            console.log(err);
        });
    }
    if(flag.demam !== 0 && cur !== "demam") {
        axios.post(`/Demam`, {
            ansDemam: ansDemam
        })
        .then(res => {
            console.log(res.data.hasilKlasifikasi);
            dispatch(KlasifikasiDemamChange('DEMAM_KLASIFIKASI', res.data.hasilKlasifikasi));
            dispatch(KlasifikasiDemamChange('DEMAM_STATUS', res.data.statusKlasifikasi));
            if(res.data.statusKlasifikasi === "danger" || res.data.statusKlasifikasi === "warning"){
                dispatch(AnsGiziChange('GIZI_DEMAM', true));
            }
            else{
                dispatch(AnsGiziChange('GIZI_DEMAM', false));
            }
        })
        .catch(err => {
            console.log(err);
        });
    }
    if(flag.telinga !== 0 && cur !== "telinga") {
        axios.post(`/Telinga`, {
            ansTelinga: ansTelinga
        })
        .then(res => {
            dispatch(KlasifikasiTelingaChange('TELINGA_KLASIFIKASI', res.data.hasilKlasifikasi));
            dispatch(KlasifikasiTelingaChange('TELINGA_STATUS', res.data.statusKlasifikasi));
            if(res.data.statusKlasifikasi === "danger" || res.data.statusKlasifikasi === "warning"){
                dispatch(AnsGiziChange('GIZI_TELINGA', true));
            }
            else{   
                dispatch(AnsGiziChange('GIZI_TELINGA', false));
            }
        })
        .catch(err => {
            console.log(err);
        });
    }
    if(flag.gizi !== 0 && cur !== "gizi") {
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
    if(flag.anemia !== 0 && cur !== "anemia"){
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
    if(flag.hiv !== 0  && cur !== "hiv"){
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


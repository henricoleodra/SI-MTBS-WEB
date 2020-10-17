import { combineReducers } from 'redux';
import CompStatusReducer from './CompStatus';
import FlagReducer from './Flag';
import AnsTBUReducer from './AnsTBU';
import KlasifikasiTBUReducer from './KlasifikasiTBU';
import AnsBatukReducer from './AnsBatuk';
import KlasifikasiBatukReducer from './KlasifikasiBatuk';
import AnsDiareReducer from './AnsDiare';
import KlasifikasiDiareReducer from './KlasifikasiDiare';
import AnsDemamReducer from './AnsDemam';
import KlasifikasiDemamReducer from './KlasifikasiDemam';
import AnsTelingaReducer from './AnsTelinga';
import KlasifikasiTelingaReducer from './KlasifikasiTelinga';
import AnsGiziReducer from './AnsGizi';
import KlasifikasiGiziReducer from './KlasifikasiGizi';
import AnsAnemiaReducer from './AnsAnemia';
import KlasifikasiAnemiaReducer from './KlasifikasiAnemia';
import AnsHIVReducer from './AnsHIV';
import KlasifikasiHIVReducer from './KlasifikasiHIV';
import AnsImunisasiReducer from './AnsImunisasi';
import KlasifikasiImunisasiReducer from './KlasifikasiImunisasi';
import AnsPemberianMakananReducer from './AnsPemberianMakanan';
import KlasifikasiPemberianMakananReducer from './KlasifikasiPemberianMakanan';

import AnsVitaminAReducer from './AnsVitaminA';
import KlasifikasiVitaminAReducer from './KlasifikasiVitaminA';

import AnsKeluhanLainReducer from './AnsKeluhanLain';
import KlasifikasiKeluhanLainReducer from './KlasifikasiKeluhanLain';

import DataAnakReducer from './DataAnak';

import TindakanReducer from './Tindakan';

import storage from 'redux-persist/lib/storage';

const appReducer = combineReducers({
    compStatus: CompStatusReducer,
    flag: FlagReducer,
    dataAnak: DataAnakReducer,
    ansTBU: AnsTBUReducer,
    klasifikasiTBU: KlasifikasiTBUReducer,
    ansBatuk: AnsBatukReducer,
    klasifikasiBatuk: KlasifikasiBatukReducer,
    ansDiare: AnsDiareReducer,
    klasifikasiDiare: KlasifikasiDiareReducer,
    ansDemam: AnsDemamReducer,
    klasifikasiDemam: KlasifikasiDemamReducer,
    ansTelinga: AnsTelingaReducer,
    klasifikasiTelinga: KlasifikasiTelingaReducer,
    ansGizi: AnsGiziReducer,
    klasifikasiGizi: KlasifikasiGiziReducer,
    ansAnemia: AnsAnemiaReducer,
    klasifikasiAnemia: KlasifikasiAnemiaReducer,
    ansHIV: AnsHIVReducer,
    klasifikasiHIV: KlasifikasiHIVReducer,
    ansImunisasi: AnsImunisasiReducer,
    klasifikasiImunisasi: KlasifikasiImunisasiReducer,
    ansVitaminA: AnsVitaminAReducer,
    klasifikasiVitaminA: KlasifikasiVitaminAReducer,
    ansKeluhanLain: AnsKeluhanLainReducer,
    klasifikasiKeluhanLain: KlasifikasiKeluhanLainReducer,
    ansPemberianMakanan: AnsPemberianMakananReducer,
    klasifikasiPemberianMakanan: KlasifikasiPemberianMakananReducer,
    tindakan: TindakanReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'RESET_STORE'){
        storage.removeItem('persist:root');
        state = undefined;
    }
    return appReducer(state, action);
}

export default rootReducer;
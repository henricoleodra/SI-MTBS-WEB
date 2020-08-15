import { combineReducers } from 'redux';
import CompStatusReducer from './CompStatus';
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
import AnsAnemiaReducer from './AnsAnemia';
import KlasifikasiAnemiaReducer from './KlasifikasiAnemia';
import AnsHIVReducer from './AnsHIV';
import KlasifikasiHIVReducer from './KlasifikasiHIV';
import AnsImunisasiReducer from './AnsImunisasi';
import KlasifikasiImunisasiReducer from './KlasifikasiImunisasi';

import DataAnakReducer from './DataAnak';


const rootReducer = combineReducers({
    compStatus : CompStatusReducer,
    dataAnak : DataAnakReducer,
    ansTBU : AnsTBUReducer,
    klasifikasiTBU : KlasifikasiTBUReducer,
    ansBatuk : AnsBatukReducer,
    klasifikasiBatuk : KlasifikasiBatukReducer,
    ansDiare : AnsDiareReducer,
    klasifikasiDiare : KlasifikasiDiareReducer,
    ansDemam : AnsDemamReducer,
    klasifikasiDemam : KlasifikasiDemamReducer,
    ansTelinga : AnsTelingaReducer,
    klasifikasiTelinga : KlasifikasiTelingaReducer,
    ansAnemia : AnsAnemiaReducer,
    klasifikasiAnemia : KlasifikasiAnemiaReducer,
    ansHIV : AnsHIVReducer,
    klasifikasiHIV : KlasifikasiHIVReducer,
    ansImunisasi : AnsImunisasiReducer,
    klasifikasiImunisasi : KlasifikasiImunisasiReducer
});

export default rootReducer;
import { combineReducers } from 'redux';
import CompStatusReducer from './CompStatus';
import AnsTBUReducer from './AnsTBU';
import KlasifikasiTBUReducer from './KlasifikasiTBU';
import AnsBatukReducer from './AnsBatuk';
import KlasifikasiBatukReducer from './KlasifikasiBatuk';
import AnsDiareReducer from './AnsDiare';
import KlasifikasiDiareReducer from './KlasifikasiDiare';
import AnsTelingaReducer from './AnsTelinga';
import KlasifikasiTelingaReducer from './KlasifikasiTelinga';
import AnsAnemiaReducer from './AnsAnemia';
import KlasifikasiAnemiaReducer from './KlasifikasiAnemia';
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
    ansTelinga : AnsTelingaReducer,
    klasifikasiTelinga : KlasifikasiTelingaReducer,
    ansAnemia : AnsAnemiaReducer,
    klasifikasiAnemia : KlasifikasiAnemiaReducer,
});

export default rootReducer;
import { combineReducers } from 'redux';
import CompStatusReducer from './CompStatus';
import AnsTBUReducer from './AnsTBU';
import KlasifikasiTBUReducer from './KlasifikasiTBU';
import AnsBatukReducer from './AnsBatuk';
import KlasifikasiBatukReducer from './KlasifikasiBatuk';


const rootReducer = combineReducers({
    compStatus : CompStatusReducer,
    ansTBU : AnsTBUReducer,
    klasifikasiTBU : KlasifikasiTBUReducer,
    ansBatuk : AnsBatukReducer,
    klasifikasiBatuk : KlasifikasiBatukReducer
});

export default rootReducer;
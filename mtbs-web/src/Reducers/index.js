import { combineReducers } from 'redux';
import CompStatusReducer from './CompStatus';
import AnsTBUReducer from './AnsTBU';
import KlasifikasiTBUReducer from './KlasifikasiTBU';


const rootReducer = combineReducers({
    compStatus : CompStatusReducer,
    ansTBU : AnsTBUReducer,
    klasifikasiTBU : KlasifikasiTBUReducer
});

export default rootReducer;
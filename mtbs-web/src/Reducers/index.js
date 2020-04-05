import { combineReducers } from 'redux';
import compStatusReducer from './CompStatus';


const rootReducer = combineReducers({
    compStatus : compStatusReducer
});

export default rootReducer;
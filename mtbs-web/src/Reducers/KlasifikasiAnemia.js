const initState = {
    anemia_klasifikasi : null,
    anemia_status : null,
}

const KlasifikasiAnemiaReducer = (state = initState, action) => {
    switch(action.type){
        case 'ANEMIA_KLASIFIKASI':
            return Object.assign({}, state, {
                anemia_klasifikasi : action.answer
            });
        case 'ANEMIA_STATUS':
            return Object.assign({}, state, {
                anemia_status : action.answer
            });
        default:
            return state;
    }
}

export default KlasifikasiAnemiaReducer;
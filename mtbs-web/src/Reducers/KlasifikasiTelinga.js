const initState = {
    telinga_klasifikasi : null,
    telinga_status : null,
}

const KlasifikasiTelingaReducer = (state = initState, action) => {
    switch(action.type){
        case 'TELINGA_KLASIFIKASI':
            return Object.assign({}, state, {
                telinga_klasifikasi : action.answer
            });
        case 'TELINGA_STATUS':
            return Object.assign({}, state, {
                telinga_status : action.answer
            });
        default:
            return state;
    }
}

export default KlasifikasiTelingaReducer;
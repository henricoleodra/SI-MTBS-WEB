const initState = {
    demam_klasifikasi : null,
    demam_status : null
}

const KlasifikasiDemamReducer = (state = initState, action) => {
    switch(action.type){
        case 'DEMAM_KLASIFIKASI':
            return Object.assign({}, state, {
                demam_klasifikasi : action.answer
            });
        case 'DEMAM_STATUS':
            return Object.assign({}, state, {
                demam_status : action.answer
            });
        default:
            return state;
    }
}

export default KlasifikasiDemamReducer;
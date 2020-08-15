const initState = {
    kel_klasifikasi : null,
    kel_status : null
}

const KlasifikasiKeluhanLainReducer = (state = initState, action) => {
    switch(action.type){
        case 'KELUHAN_KLASIFIKASI':
            return Object.assign({}, state, {
                kel_klasifikasi : action.answer
            });
        case 'KELUHAN_STATUS':
            return Object.assign({}, state, {
                kel_status : action.answer
            });
        default:
            return state;
    }
}

export default KlasifikasiKeluhanLainReducer;
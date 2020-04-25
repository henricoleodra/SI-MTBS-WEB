const initState = {
    diare_klasifikasi : null,
    diare_status : null,
}

const KlasifikasiDiareReducer = (state = initState, action) => {
    switch(action.type){
        case 'DIARE_KLASIFIKASI':
            return Object.assign({}, state, {
                diare_klasifikasi : action.answer
            });
        case 'DIARE_STATUS':
            return Object.assign({}, state, {
                diare_status : action.answer
            });
        default:
            return state;
    }
}

export default KlasifikasiDiareReducer;
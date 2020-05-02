const initState = {
    diare_klasifikasi : null,
    diare_status : null,
    diare_2 : null,
    diare_3 : null
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
        case 'DIARE_2':
            return Object.assign({}, state, {
                diare_2 : action.answer
            });
        case 'DIARE_3':
            return Object.assign({}, state, {
                diare_3 : action.answer
            });
        default:
            return state;
    }
}

export default KlasifikasiDiareReducer;
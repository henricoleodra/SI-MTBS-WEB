const initState = {
    tbu_klasifikasi : null,
    tbu_status : null,
    tbu_2 : null
}

const KlasifikasiTBUReducer = (state = initState, action) => {
    switch(action.type){
        case 'TBU_KLASIFIKASI':
            return Object.assign({}, state, {
                tbu_klasifikasi : action.answer
            });
        case 'TBU_STATUS':
            return Object.assign({}, state, {
                tbu_status : action.answer
            });
        case 'TBU_2':
            return Object.assign({}, state, {
                tbu_2 : action.answer
            });
        default:
            return state;
    }
}

export default KlasifikasiTBUReducer;
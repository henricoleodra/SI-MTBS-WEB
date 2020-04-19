const initState = {
    tbu_klasifikasi : null,
    tbu_status : null,
    tbu_text_status : null
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
        case 'TBU_TEXT_STATUS':
            return Object.assign({}, state, {
                tbu_status : action.answer
            });
        default:
            return state;
    }
}

export default KlasifikasiTBUReducer;
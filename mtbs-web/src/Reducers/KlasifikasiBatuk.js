const initState = {
    bsb_klasifikasi : null,
    bsb_status : null,
    bsb_2 : null
}

const KlasifikasiBatukReducer = (state = initState, action) => {
    switch(action.type){
        case 'BATUK_KLASIFIKASI':
            return Object.assign({}, state, {
                bsb_klasifikasi : action.answer
            });
        case 'BATUK_STATUS':
            return Object.assign({}, state, {
                bsb_status : action.answer
            });
        case 'BATUK_2':
            return Object.assign({}, state, {
                bsb_2 : action.answer
            });
        default:
            return state;
    }
}

export default KlasifikasiBatukReducer;
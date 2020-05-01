const initState = {
    hiv_klasifikasi : null,
    hiv_status : null,
}

const KlasifikasiBatukReducer = (state = initState, action) => {
    switch(action.type){
        case 'HIV_KLASIFIKASI':
            return Object.assign({}, state, {
                hiv_klasifikasi : action.answer
            });
        case 'HIV_STATUS':
            return Object.assign({}, state, {
                hiv_status : action.answer
            });
        default:
            return state;
    }
}
const initState = {
    hiv_klasifikasi : null,
    hiv_status : null,
    hiv_2 : null,
    hiv_3 : null
}

const KlasifikasiHIVReducer = (state = initState, action) => {
    switch(action.type){
        case 'HIV_KLASIFIKASI':
            return Object.assign({}, state, {
                hiv_klasifikasi : action.answer
            });
        case 'HIV_STATUS':
            return Object.assign({}, state, {
                hiv_status : action.answer
            });
        case 'HIV_2':
            return Object.assign({}, state, {
                hiv_2 : action.answer
            });
        case 'HIV_3':
            return Object.assign({}, state, {
                hiv_3 : action.answer
            });
        default:
            return state;
    }
}

export default KlasifikasiHIVReducer;
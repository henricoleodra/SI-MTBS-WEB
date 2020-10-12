const initState = {
    tbu : 0,
    batuk : 0,
    diare : 0,
    demam : 0,
    telinga : 0,
    gizi : 0,
    hiv : 0
}

const flagReducer = (state = initState, action) => {
    switch(action.type){
        case 'FLAG_TBU':
            return Object.assign({}, state, {
                tbu : action.value
            });
        case 'FLAG_BATUK':
            return Object.assign({}, state, {
                batuk : action.value
            });
        case 'FLAG_DIARE':
            return Object.assign({}, state, {
                diare : action.value
            });
        case 'FLAG_DEMAM':
            return Object.assign({}, state, {
                demam : action.value
            });
        case 'FLAG_TELINGA':
            return Object.assign({}, state, {
                telinga : action.value
            });
        case 'FLAG_GIZI':
            return Object.assign({}, state, {
                gizi : action.value
            });
        default:
            return state; 
    }
}

export default flagReducer;
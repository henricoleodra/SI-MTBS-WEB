const initState = {
    tbu : null,
    batuk : null,
    diare : null,
    demam : null,
    telinga : null,
    gizi : null,
    hiv : null
}

const flagReducer = (state = initState, action) => {
    switch(action.type){
        case 'FLAG_TBU':
            return Object.assign({}, state, {
                tbu : true
            });
        case 'FLAG_BATUK':
            return Object.assign({}, state, {
                batuk : true
            });
        case 'FLAG_DIARE':
            return Object.assign({}, state, {
                diare : true
            });
        case 'FLAG_DEMAM':
            return Object.assign({}, state, {
                demam : true
            });
        case 'FLAG_TELINGA':
            return Object.assign({}, state, {
                telinga : true
            });
        case 'FLAG_GIZI':
            return Object.assign({}, state, {
                gizi : true
            });
        default:
            return state; 
    }
}

export default flagReducer;
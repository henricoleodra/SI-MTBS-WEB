const initState = {
    tbu = false,
    batuk = false,
    diare = false,
    demam = false,
    telinga = false,
    gizi = false,
    hiv = false
}

const flagReducer = (state = initState, action) => {
    switch(action.type){
        case 'TBU':
            return Object.assign({}, state, {
                tbu : action.answer
            });
        case 'BATUK':
            return Object.assign({}, state, {
                batuk : action.answer
            });
        case 'DIARE':
            return Object.assign({}, state, {
                diare : action.answer
            });
        case 'DEMAM':
            return Object.assign({}, state, {
                demam : action.answer
            });
        case 'TELINGA':
            return Object.assign({}, state, {
                telinga : action.answer
            });
        case 'GIZI':
            return Object.assign({}, state, {
                gizi : action.answer
            });
        default:
            return state; 
    }
}

export default flagReducer;
const initState = {
    tbu : false,
    batuk : false,
    diare : false,
    demam : false,
    telinga : false,
    gizi : false,
    hiv : false
}

const flagReducer = (state = initState, action) => {
    switch(action.type){
        case 'TBU':
            return Object.assign({}, state, {
                tbu : true
            });
        case 'BATUK':
            return Object.assign({}, state, {
                batuk : true
            });
        case 'DIARE':
            return Object.assign({}, state, {
                diare : true
            });
        case 'DEMAM':
            return Object.assign({}, state, {
                demam : true
            });
        case 'TELINGA':
            return Object.assign({}, state, {
                telinga : true
            });
        case 'GIZI':
            return Object.assign({}, state, {
                gizi : true
            });
        default:
            return state; 
    }
}

export default flagReducer;
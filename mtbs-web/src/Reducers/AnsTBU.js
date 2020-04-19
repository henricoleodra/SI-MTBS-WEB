const initState = {
    tbu_tidakBisaMinum : null,
    tbu_muntah : null,
    tbu_kejang : null,
    tbu_gelisah : null,
    tbu_letargis : null,
    tbu_stridor : null,
    tbu_sianosis : null,
    tbu_pucatDingin : null
}

const ansTBUReducer = (state = initState, action) => {
    switch(action.type){
        case 'TIDAK_BISA_MINUM':
            return Object.assign({}, state, {
                tbu_tidakBisaMinum : action.answer
            });
        case 'MUNTAH':
            return Object.assign({}, state, {
                tbu_muntah : action.answer
            });
        case 'KEJANG':
            return Object.assign({}, state, {
                tbu_kejang : action.answer
            });
        case 'GELISAH':
            return Object.assign({}, state, {
                tbu_gelisah : action.answer
            });
        case 'LETARGIS':
            return Object.assign({}, state, {
                tbu_letargis : action.answer
            });
        case 'STRIDOR':
            return Object.assign({}, state, {
                tbu_stridor : action.answer
            });
        case 'SIANOSIS':
            return Object.assign({}, state, {
                tbu_sianosis : action.answer
            });
        case 'PUCAT_DINGIN':
            return Object.assign({}, state, {
                tbu_pucatDingin : action.answer
            });
        default:
            return state;
    }
}

export default ansTBUReducer;
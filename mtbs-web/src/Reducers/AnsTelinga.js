const initState = {
    telinga : null,
    telinga_isNyeri : null,
    telinga_isPenuh : null,
    telinga_isNanah : null,
    telinga_nanahLamaHari : '',
    telinga_cekKeluarNanah : null,
    telinga_isBengkak : null
}

const ansTelingaReducer = (state = initState, action) => {
    switch(action.type){
        case 'TELINGA':
            return Object.assign({}, state, {
                telinga : action.answer
            });
        case 'NYERI':
            return Object.assign({}, state, {
                telinga_isNyeri : action.answer
            });
        case 'PENUH':
            return Object.assign({}, state, {
                telinga_isPenuh : action.answer
            });
        case 'NANAH':
            return Object.assign({}, state, {
                telinga_isNanah : action.answer
            });
        case 'NANAH_LAMA_HARI':
            return Object.assign({}, state, {
                telinga_nanahLamaHari : action.answer
            });
        case 'CEK_KELUAR_NANAH':
            return Object.assign({}, state, {
                telinga_cekKeluarNanah : action.answer
            });
        case 'BENGKAK':
            return Object.assign({}, state, {
                telinga_isBengkak : action.answer
            });
        case 'RESET_TELINGA':
            return Object.assign({}, state, 
                initState
            );
        default:
            return state;
    }
}

export default ansTelingaReducer;
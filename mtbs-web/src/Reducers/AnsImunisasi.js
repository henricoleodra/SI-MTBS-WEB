const initState = {
    imun_bcg : null,
    imun_hb0 : null,
    imun_polio1 : null,
    imun_polio2 : null,
    imun_polio3 : null,
    imun_polio4 : null,
    imun_dpthbhib1 : null,
    imun_dpthbhib2 : null,
    imun_dpthbhib3 : null,
    imun_ipv : null,
    imun_campak : null,
    imun_dpthbhiblanjut : null,
    imun_campaklanjut : null
}

const ansImunisasiReducer = (state = initState, action) => {
    switch(action.type){
        case 'BCG':
            return Object.assign({}, state, {
                imun_bcg : action.answer
            });
        case 'HB0':
            return Object.assign({}, state, {
                imun_hb0 : action.answer
            });
        case 'POLIO1':
            return Object.assign({}, state, {
                imun_polio1 : action.answer
            });
        case 'POLIO2':
            return Object.assign({}, state, {
                imun_polio2 : action.answer
            });
        case 'POLIO3':
            return Object.assign({}, state, {
                imun_polio3 : action.answer
            });
        case 'POLIO4':
            return Object.assign({}, state, {
                imun_polio4 : action.answer
            });
        case 'DPT_HB_HIB1':
            return Object.assign({}, state, {
                imun_dpthbhib1 : action.answer
            });
        case 'DPT_HB_HIB2':
            return Object.assign({}, state, {
                imun_dpthbhib2 : action.answer
            });
        case 'DPT_HB_HIB3':
            return Object.assign({}, state, {
                imun_dpthbhib3 : action.answer
            });
        case 'IPV':
            return Object.assign({}, state, {
                imun_ipv : action.answer
            });
        case 'CAMPAK':
            return Object.assign({}, state, {
                imun_campak : action.answer
            });
        case 'DPT_HB_HIB_LANJUT':
            return Object.assign({}, state, {
                imun_dpthbhiblanjut : action.answer
            });
        case 'CAMPAK_LANJUT':
            return Object.assign({}, state, {
                imun_campaklanjut : action.answer
            });
        default:
            return state;
    }
}

export default ansImunisasiReducer;
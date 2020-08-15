const inistate = {
    pemberianMakanan_klasifikasi: null,
    pemberianMakanan_status: null,
    pemberianMakanan_2: null,
    pemberianMakanan_3: null,
    pemberianMakanan_4: null
}

const KlasifikasiPemberianMakananReducer = (state = inistate, action) => {
    switch (action.type) {
        case 'PEMBERIANMAKANAN_KLASIFIKASI':
            return Object.assign({}, state, {
                pemberianMakanan_klasifikasi: action.answer
            });
        case 'PEMBERIANMAKANAN_STATUS':
            return Object.assign({}, state, {
                pemberianMakanan_status: action.answer
            });
        case 'PEMBERIANMAKANAN_2':
            return Object.assign({}, state, {
                pemberianMakanan_2: action.answer
            });
        case 'PEMBERIANMAKANAN_3':
            return Object.assign({}, state, {
                pemberianMakanan_3: action.answer
            });
        case 'PEMBERIANMAKANAN_4':
            return Object.assign({}, state, {
                pemberianMakanan_4: action.answer
            });
        default:
            return state;
    }
}

export default KlasifikasiPemberianMakananReducer;
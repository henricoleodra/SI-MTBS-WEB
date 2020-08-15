const initState = {
    imun_klasifikasi : null,
    imun_status : null
}

const KlasifikasiImunisasiReducer = (state = initState, action) => {
    switch(action.type){
        case 'IMUNISASI_KLASIFIKASI':
            return Object.assign({}, state, {
                imun_klasifikasi : action.answer
            });
        case 'IMUNISASI_STATUS':
            return Object.assign({}, state, {
                imun_status : action.answer
            });
        default:
            return state;
    }
}

export default KlasifikasiImunisasiReducer;
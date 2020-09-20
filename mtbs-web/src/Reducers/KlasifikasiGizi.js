const initState = {
    gizi_klasifikasi : null,
    gizi_status : null,
    gizi_hasilSD : null,
    gizi_nilaiSD : null
}

const KlasifikasiGiziReducer = (state = initState, action) => {
    switch(action.type){
        case 'GIZI_KLASIFIKASI':
            return Object.assign({}, state, {
                gizi_klasifikasi : action.answer
            });
        case 'GIZI_STATUS':
            return Object.assign({}, state, {
                gizi_status : action.answer
            });
        case 'GIZI_HASIL_SD':
            return Object.assign({}, state, {
                gizi_hasilSD : action.answer
            });
        case 'GIZI_NILAI_SD':
            return Object.assign({}, state, {
                gizi_nilaiSD : action.answer
            });
        default:
            return state;
    }
}

export default KlasifikasiGiziReducer;
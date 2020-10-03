const initState = {
    gizi_tampakSangatKurus: null,
    gizi_pembengkakanKeduaPunggungKakiAtauTangan: null,
    gizi_BBmenurutPBAtauTB: null,
    gizi_nilaiSD: null,
    gizi_lingkarLenganAtas: null,
    gizi_masalahPemberianASI: null,
    gizi_tandaBahayaUmum: false,
    gizi_batuk: false,
    gizi_diare: false,
    gizi_demam: false,
    gizi_telinga: false,
    gizi_klasifikasiBerat: false
}

const ansGiziReducer = (state = initState, action) => {
    switch(action.type){
        case 'TAMPAK_SANGAT_KURUS':
            return Object.assign({}, state, {
                gizi_tampakSangatKurus : action.answer
            });
        case 'PEMBENGKAKAN_KEDUA_PUNGGUNG_KAKI_ATAU_TANGAN':
            return Object.assign({}, state, {
                gizi_pembengkakanKeduaPunggungKakiAtauTangan : action.answer
            });
        case 'BB_MENURUT_PB_ATAU_TB':
            return Object.assign({}, state, {
                gizi_BBmenurutPBAtauTB : action.answer
            });
        case 'NILAI_SD':
            return Object.assign({}, state, {
                gizi_nilaiSD : action.answer
            });
        case 'LINGKAR_LENGAN_ATAS':
            return Object.assign({}, state, {
                gizi_lingkarLenganAtas : action.answer
            });
        case 'MASALAH_PEMBERIAN_ASI':
            return Object.assign({}, state, {
                gizi_masalahPemberianASI : action.answer
            });
        case 'GIZI_TANDA_BAHAYA_UMUM':
            return Object.assign({}, state, {
                gizi_tandaBahayaUmum : action.answer
            });
        case 'GIZI_BATUK':
            return Object.assign({}, state, {
                gizi_batuk : action.answer
            });
        case 'GIZI_DIARE':
            return Object.assign({}, state, {
                gizi_diare : action.answer
            });
        case 'GIZI_TELINGA':
            return Object.assign({}, state, {
                gizi_telinga : action.answer
            });
        case 'GIZI_KLASIFIKASI_BERAT':
            return Object.assign({}, state, {
                gizi_klasifikasiBerat : action.answer
            });
        default:
            return state;
    }
}

export default ansGiziReducer;
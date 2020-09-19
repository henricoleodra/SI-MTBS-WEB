const initState = {
    gizi : null,
    gizi_tampakSangatKurus : null,
    gizi_pembengkakanKeduaPunggungKakiAtauTangan : null,
    gizi_BBmenurutPBAtauTB : null,
    // jika umur >= 6 bln
    gizi_lingkarLenganAtas : null,
    // Jika BB menurut PB atau TB < -3 SD ATAU Lingkar Lengan Atas < 11.5cm, periksa komplikasi medis
    gizi_tandaBahayaUmum : null,
    gizi_klasifikasiBerat : null,
    // Jika tidak ada komplikasi medis, nilai pemberian ASI pada anak umur <6 bulan
    gizi_masalahPemberianASI : null
}

const ansGiziReducer = (state = initState, action) => {
    switch(action.type){
        case 'Gizi':
            return Object.assign({}, state, {
                gizi : action.answer
            });
        case 'SANGAT_KURUS':
            return Object.assign({}, state, {
                gizi : action.answer
            });
        case 'PEMBENGKAKAN_KEDUA_PUNGGUNGKT':
            return Object.assign({}, state, {
                gizi : action.answer
            });
        case 'BB_PBA_TB':
            return Object.assign({}, state, {
                gizi : action.answer
            });
        case 'LILA':
            return Object.assign({}, state, {
                gizi : action.answer
            });
        case 'TANDA_BAHAYA_UMUM':
            return Object.assign({}, state, {
                gizi : action.answer
            });
        case 'KLASIFIKASI_BERAT':
            return Object.assign({}, state, {
                gizi : action.answer
            });
        case 'MASALAH_PEMBERIAN_ASI':
            return Object.assign({}, state, {
                gizi : action.answer
            });
        default:
            return state;
    }
}

export default ansGiziReducer;
const initState = {
    hiv : null,
    hiv_pernahTes : null,
    hiv_waktuTes : "",
    hiv_hasilTes : null,
    hiv_ibuPernahTes : null,
    hiv_ibuWaktuTes : null,
    hiv_ibuHasilTes : null,
    hiv_masihDapatASI : null,
    hiv_bercakPutih : null,
    hiv_kerabatTerdiagnosis : null,
    hiv_kerabatMeninggal : null
}

const ansHIVReducer = (state = initState, action) => {
    switch(action.type){
        case 'HIV':
            return Object.assign({}, state, {
                hiv : action.answer
            });
        case 'PERNAH_TES':
            return Object.assign({}, state, { 
                hiv_pernahTes : action.answer
            });
        case 'WAKTU_TES':
            return Object.assign({}, state, { 
                hiv_waktuTes : action.answer
            });
        case 'HASIL_TES':
            return Object.assign({}, state, { 
                hiv_hasilTes : action.answer
            });
        case 'IBU_PERNAH_TES':
            return Object.assign({}, state, { 
                hiv_ibuPernahTes : action.answer
            });
        case 'IBU_WAKTU_TES':
            return Object.assign({}, state, { 
                hiv_ibuWaktuTes : action.answer
            });
        case 'IBU_HASIL_TES':
            return Object.assign({}, state, { 
                hiv_ibuHasilTes : action.answer
            });
        case 'MASIH_DAPAT_ASI':
            return Object.assign({}, state, { 
                hiv_masihDapatASI : action.answer
            });
        case 'BERCAK_PUTIH':
            return Object.assign({}, state, { 
                hiv_bercakPutih : action.answer
            });
        case 'KERABAT_TERDIAGNOSIS':
            return Object.assign({}, state, { 
                hiv_kerabatTerdiagnosis : action.answer
            });
        case 'KERABAT_MENINGGAL':
            return Object.assign({}, state, { 
                hiv_kerabatMeninggal : action.answer
            });
        default:
            return state;
    }
}

export default ansHIVReducer;
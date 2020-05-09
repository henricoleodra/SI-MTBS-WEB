const initState = {
    demam: null,
    demam_isDaerahEndemis: null,
    demam_isBerkunjungDaerahEndemis: null,
    demam_lamaDiDaerahEndemis: "",
    demam_isDemamSetiapHari: null,
    demam_pernahMalaria: null,
    demam_isCampak3Bulan: null,
    demam_kudukKaku: null,
    demam_sebabLain: "",
    demam_ruamKemerahan: null,
    demam_tandaLain: null,

    demam_tindakanPengobatan_hasilRDT: null,

    demam_isLukaMulut: null,
    demam_descLukaMulut: null,
    demam_nanahDiMata: null,
    demam_korneaKeruh: null,

    demam_isTinggiMenerus: null,
    demam_isNyeriUluOrGelisah: null,
    demam_isBadanDingin: null,
    demam_anakMuntah: null,
    demam_anakSeringMuntah: null,
    demam_muntahLikeDarahOrKopi: null,
    demam_berakBerwarnaHitam: null,
    demam_nearIsDBD: null,
    demam_isEkstremitasDingin: null,
    demam_isNadiLemah: null,
    demam_darahHidungGusiKulit: null,
    demam_hasilUjiTorniket: null,
}

const ansDemamReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DEMAM':
            return Object.assign({}, state, {
                demam: action.answer
            });
        case 'DAERAH_ENDEMIS':
            return Object.assign({}, state, {
                demam_isDaerahEndemis: action.answer
            });
        case 'BERKUNJUNG_DAERAH_ENDEMIS':
            return Object.assign({}, state, {
                demam_isBerkunjungDaerahEndemis: action.answer
            });
        case 'LAMA_DAERAH_ENDEMIS':
            return Object.assign({}, state, {
                demam_lamaDiDaerahEndemis: action.answer
            });
        case 'DEMAM_SETIAP_HARI':
            return Object.assign({}, state, {
                demam_isDemamSetiapHari: action.answer
            });
        case 'MALARIA':
            return Object.assign({}, state, {
                demam_pernahMalaria: action.answer
            });
        case 'CAMPAK_TIGA_BULAN':
            return Object.assign({}, state, {
                demam_isCampak3Bulan: action.answer
            });
        case 'KUDUK_KAKU':
            return Object.assign({}, state, {
                demam_kudukKaku: action.answer
            });
        case 'SEBAB_LAIN':
            return Object.assign({}, state, {
                demam_sebabLain: action.answer
            });
        case 'RUAM_KEMERAHAN':
            return Object.assign({}, state, {
                demam_ruamKemerahan: action.answer
            });
        case 'TANDA_LAIN':
            return Object.assign({}, state, {
                demam_tandaLain: action.answer
            });
        case 'TINDAKAN_HASIL_RDT':
            return Object.assign({}, state, {
                demam_tindakanPengobatan_hasilRDT: action.answer
            });
        case 'LUKA_MULUT':
            return Object.assign({}, state, {
                demam_isLukaMulut: action.answer
            });
        case 'DECS_LUKA_MULUT_LUAS':
            return Object.assign({}, state, {
                demam_descLukaMulutLuas: action.answer
            });
        case 'DECS_LUKA_MULUT_DALAM':
            return Object.assign({}, state, {
                demam_descLukaMulutDalam: action.answer
            });
        case 'NANAH_DI_MATA':
            return Object.assign({}, state, {
                demam_nanahDiMata: action.answer
            });
        case 'KORNEA_KERUH':
            return Object.assign({}, state, {
                demam_korneaKeruh: action.answer
            });
        case 'TINGGI_MENERUS':
            return Object.assign({}, state, {
                demam_isTinggiMenerus: action.answer
            });
        case 'NYERI_ULU_GELISAH':
            return Object.assign({}, state, {
                demam_isNyeriUluOrGelisah: action.answer
            });
        case 'BADAN_DINGIN':
            return Object.assign({}, state, {
                demam_isBadanDingin: action.answer
            });
        case 'ANAK_MUNTAH':
            return Object.assign({}, state, {
                demam_anakMuntah: action.answer
            });
        case 'SERING_MUNTAH':
            return Object.assign({}, state, {
                demam_anakSeringMuntah: action.answer
            });
        case 'MUNTAH_DARAH_KOPI':
            return Object.assign({}, state, {
                demam_muntahLikeDarahOrKopi: action.answer
            });
        case 'BERAK_HITAM':
            return Object.assign({}, state, {
                demam_berakBerwarnaHitam: action.answer
            });
        case 'NEAR_DBD':
            return Object.assign({}, state, {
                demam_nearIsDBD: action.answer
            });
        case 'EKSTREMITAS_DINGIN':
            return Object.assign({}, state, {
                demam_isEkstremitasDingin: action.answer
            });
        case 'NADI_LEMAH':
            return Object.assign({}, state, {
                demam_isNadiLemah: action.answer
            });
        case 'DARAH_HIDUNG_GUSI_KULIT':
            return Object.assign({}, state, {
                demam_darahHidungGusiKulit: action.answer
            });
        case 'UJI_TORNIKET':
            return Object.assign({}, state, {
                demam_hasilUjiTorniket: action.answer
            });
        default:
            return state;
    }
}

export default ansDemamReducer;
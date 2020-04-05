const initState = {
    tandabahayaumum : false,
    batuk : false,
    diare : true,
    demam : true,
    telinga : true,
    gizi : true,
    anemia : true,
    hiv : true,
    imunisasi : true,
    vitamina : true,
    keluhanlain : true,
    makan : true,
    klasifikasi : true,
    tindakan : true
}

const compStatusReducer = (state = initState, action) => {
    switch(action.type){
        case 'TANDA_BAHAYA_UMUM':
            return Object.assign({}, state, {
                tandabahayaumum : false
            });
        case 'BATUK':
            return Object.assign({}, state, {
                batuk : false
            });
        case 'DIARE':
            return Object.assign({}, state, {
                diare : false
            });
        case 'DEMAM':
            return Object.assign({}, state, {
                demam : false
            });
        case 'TELINGA':
            return Object.assign({}, state, {
                telinga : false
            });
        case 'GIZI':
            return Object.assign({}, state, {
                gizi : false
            });
        case 'ANEMIA':
            return Object.assign({}, state, {
                anemia : false
            });
        case 'HIV':
            return Object.assign({}, state, {
                hiv : false
            });
        case 'IMUNISASI':
            return Object.assign({}, state, {
                imunisasi : false
            });
        case 'VITAMIN_A':
            return Object.assign({}, state, {
                vitamina : false
            });
        case 'KELUHAN_LAIN':
            return Object.assign({}, state, {
                keluhanlain : false
            });
        case 'MAKAN':
            return Object.assign({}, state, {
                makan : false
            });
        case 'KLASIFIKASI':
            return Object.assign({}, state, {
                klasifikasi : false
            });
        case 'TINDAKAN':
            return Object.assign({}, state, {
                tindakan : false
            });
        default:
            return state;
    }
}

export default compStatusReducer;
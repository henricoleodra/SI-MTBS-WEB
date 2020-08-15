const initState = {
    vit_klasifikasi : null,
    vit_status : null
}

const KlasifikasiVitaminAReducer = (state = initState, action) => {
    switch(action.type){
        case 'VITAMIN_KLASIFIKASI':
            return Object.assign({}, state, {
                vit_klasifikasi : action.answer
            });
        case 'VITAMIN_STATUS':
            return Object.assign({}, state, {
                vit_status : action.answer
            });
        default:
            return state;
    }
}

export default KlasifikasiVitaminAReducer;
const initState = {
    keluhan_adaTidak : null,
    keluhan_isiKeluhan : null
}

const ansKeluhanLainReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADA_KELUHAN':
            return Object.assign({}, state, {
                keluhan_adaTidak : action.answer
            });
        case 'ISI_KELUHAN':
            return Object.assign({}, state, {
                keluhan_isiKeluhan : action.answer
            });
        default:
            return state;
    }
}

export default ansKeluhanLainReducer;
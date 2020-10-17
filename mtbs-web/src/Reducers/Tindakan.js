const initState = {
    tindakan_tbu: null,
}

const TindakanReducer = (state = initState, action) => {
    switch(action.type){
        case 'TINDAKAN_TBU':
            return Object.assign({}, state, {
                tindakan_tbu : action.answer
            });
        default:
            return state;
    }
}

export default TindakanReducer;
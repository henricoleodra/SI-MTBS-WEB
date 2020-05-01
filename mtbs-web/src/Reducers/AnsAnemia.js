const initState = {
    anemia_isPucat : null
}

const ansAnemiaReducer = (state = initState, action) => {
    switch(action.type){
        case 'PUCAT':
            return Object.assign({}, state, {
                anemia_isPucat : action.answer
            });
        default:
            return state;
    }
}

export default ansAnemiaReducer;
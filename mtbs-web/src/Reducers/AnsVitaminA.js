const initState = {
    vit_dibutuhkanA : null
}

const ansVitaminAReducer = (state = initState, action) => {
    switch(action.type){
        case 'SUPLEMEN_A':
            return Object.assign({}, state, {
                vit_dibutuhkanA : action.answer
            });
        default:
            return state;
    }
}

export default ansVitaminAReducer;
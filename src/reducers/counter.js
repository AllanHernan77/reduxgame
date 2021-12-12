

const counterReducer = (state =0, action) => {
    switch(action.type){
        case 'INCREMENTUSER' :
                return state +1
        default:
            return state 
    }
}

export default counterReducer
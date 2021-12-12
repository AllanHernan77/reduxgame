

const counterCPUReducer = (state =0, action) => {
    switch(action.type){
        case 'INCREMENTCPU' :
                return state +1
        default:
            return state 
    }
}

export default counterCPUReducer
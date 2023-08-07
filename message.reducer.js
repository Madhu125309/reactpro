import { GM, GN } from './Message.action'
let initialState={
    Msg:'GM'
}

let messageReducer =(state=initialState,action)=>{

    switch(action.type){
        case GM:
            return{Msg:"GM" }

        case GN:
            return{Msg:"GN"}

            default:
                return state
    }
}
export { messageReducer }

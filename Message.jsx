import { gmAction, gnAction } from '../redux/Message/Message.action'
import React from "react";
import { useDispatch, useSelector } from "react-redux";
const Message=()=>{
    let dispatch = useDispatch()

    let Msg = useSelector((state)=>{
        return state
    })

    let gmHandler = () =>{
        dispatch(gmAction())
}
    let gnHandler = () =>{
        dispatch(gnAction())
    }

return (<div>
    <h2>Message comp</h2>
    <pre>{JSON.stringify(Msg)}</pre>
        <button onClick={gmHandler}>GM</button>
    
        <button onClick={gnHandler}>GN</button>
        
    </div>)
}
export default Message
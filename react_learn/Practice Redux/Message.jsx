import React from 'react'
import{gmaction,gnaction} from'./Redux/Message/Message.action'
import {useDispatch,useSelector} from'react-redux'
const Message = () => {
 let dispatch=useDispatch()
 let  StoreMessage=useSelector((state)=>{
   return state.Message
 })
 let gmhandler=()=>{
  //dispatch an action
  dispatch(gmaction())
 }
 let gnhandler=()=>{
  dispatch(gnaction())
 }
  return (
    <div>
      <div className="container mt-5">
       <pre>{JSON.stringify(StoreMessage)}</pre>
 <div className="row">
  <div className="col md-6">
   <div className="card">
    <div className="card-header">
     <h1>Message:{StoreMessage.Message}</h1>
    </div>
    <div className="card-body">
      <button className='btn btn-primary mr-5' onClick={gmhandler}>GM</button>
      <button className='btn btn-warning' onClick={gnhandler}>GN</button>
    </div>
   </div>
  </div>
 </div>
</div>
    </div>
  )
}

export default Message
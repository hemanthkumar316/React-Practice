import React from 'react'
import { incraction,decraction } from './Redux/Counter/Counter.action'
import { useDispatch,useSelector } from 'react-redux'
const Counter = () => {
  let Counter=useSelector((state)=>{
      return state.Counter
  })
  let dispatch=useDispatch()
 let decrhandler=()=>{
   dispatch(decraction())
 }
 let incrhandler=()=>{
   dispatch(incraction())
 }
  return (
    <div>
     <div className="container mt-5">
      <div className="row">
       <div className="col">
        <div className="card">
         <div className="card-header">
           <h1>Counter value:{Counter.Counter}</h1>
         </div>
         <div className="card-body">
          <button className='btn btn-danger mr-4' onClick={decrhandler}>DECR</button>
          <button className='btn btn-success' onClick={incrhandler}>INCR</button>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
  )
}

export default Counter
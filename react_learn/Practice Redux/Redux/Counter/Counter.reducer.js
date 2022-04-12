import{Incr,Decr} from'./Counter.action'
let initialstate={
 Counter:0
}
let CounterReducer=(state=initialstate,action)=>{
 switch(action.type){
  case Decr:
   return{Counter:state.Counter-1}
   case Incr:
    return{Counter:state.Counter+1}
    default:
     return state

 }
}
export{CounterReducer}
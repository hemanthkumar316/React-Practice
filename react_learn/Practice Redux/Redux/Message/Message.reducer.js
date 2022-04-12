// reducer is pure function .it will take two arguments i.e state and action
import { GM,GN } from "./Message.action"
let initialState={
 Message:'Hello...'
}
let MessageReducer=(state=initialState,action)=>{
 console.log('messageReducer -step 2')
//update store/state based on action type
switch(action.type){
 case GM:
  return {Message:'Good Morning'}
  case GN:
   return {Message:'Good Night'}
   default:
    return state
}
}
export {MessageReducer}
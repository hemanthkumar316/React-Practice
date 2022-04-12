import { combineReducers } from "redux";
import { CounterReducer } from "./Counter/Counter.reducer";
import { MessageReducer } from "./Message/Message.reducer";

let rootReducer=combineReducers({
 Message:MessageReducer,
 Counter:CounterReducer

})
export{rootReducer}
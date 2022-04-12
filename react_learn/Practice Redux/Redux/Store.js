import { createStore } from "redux";
//import { MessageReducer } from "./Message/Message.reducer";
import { rootReducer } from "./rootReducer";
import{composeWithDevTools} from'redux-devtools-extension'
//let Store=createStore(MessageReducer,composeWithDevTools())
let Store=createStore(rootReducer,composeWithDevTools())
export{Store}
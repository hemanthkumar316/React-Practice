import React from 'react'
import Message from './Message'
import { Provider } from 'react-redux'
import{Store} from'./Redux/Store'
import Counter from './Counter'
const App = () => {
  return (
    <div>
      <Provider store={Store}>
      <Message/> 
      <hr/>
      <Counter/> 
      </Provider>
    
    </div>
  )
}

export default App
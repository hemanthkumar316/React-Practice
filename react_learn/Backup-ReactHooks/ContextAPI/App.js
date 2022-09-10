import React,{createContext} from 'react'
import CompA from './CompA'
const FirstName=createContext();
const LastName=createContext();
const App = () => {
  return (
    <div >
     <FirstName.Provider value={'Hemanth'}>
      <LastName.Provider value={'Kumar'}>
     <CompA/> 
     </LastName.Provider> 
     </FirstName.Provider>
      
    </div>
  )
}

export default App
export{FirstName,LastName};

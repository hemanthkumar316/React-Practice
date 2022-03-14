import React,{createContext} from 'react'
import Test1 from './Test1'
  const  FirstName=createContext()
  const LastName=createContext()
const App = () => {
  return (
    <div>
     <FirstName.Provider value={'Hemanth'}>
     <LastName.Provider value={'Kumar'}>
     <Test1/>
     </LastName.Provider>
     </FirstName.Provider>
    
    </div>
  )
}

export default App
export{FirstName,LastName}
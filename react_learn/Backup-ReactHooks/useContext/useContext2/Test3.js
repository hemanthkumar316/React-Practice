/* import React from 'react'
import { FirstName,LastName } from './App'
const Test3 = () => {
  return (
    <div>
     <FirstName.Consumer>
      {(fname)=>{
      return(
       <LastName.Consumer>{(lname)=>{
        return(  <h1>My Name is {fname} {lname}</h1>)
       }}
       </LastName.Consumer>
      
      )
     }}</FirstName.Consumer>
     
    </div>
  )
}

export default Test3 */
import React,{useContext} from 'react'
import { FirstName,LastName } from './App'
const Test3 = () => {
 const fname = useContext(FirstName)
 const lname = useContext(LastName)
  return (
 
    <div>
    <h1>{fname} {lname}</h1>
    </div>
  )
}

export default Test3
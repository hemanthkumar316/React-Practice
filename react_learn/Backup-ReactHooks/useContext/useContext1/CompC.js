import React,{useContext} from 'react'
import { Biodata } from './CompA'
const CompC = () => {
  const myname = useContext(Biodata)
  return (
    <div>
      <h1>{myname}</h1>
    
    </div>
  )
}

export default CompC
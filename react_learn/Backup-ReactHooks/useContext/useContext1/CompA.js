import React, { createContext } from 'react'
import CompB from './CompB'
const Biodata=createContext();
const CompA = () => {
  return (
    <div>
      <Biodata.Provider value={'hemanth Kumar'}>
      <CompB />
      </Biodata.Provider>
     
    </div>
  )
}

export default CompA
export {Biodata}
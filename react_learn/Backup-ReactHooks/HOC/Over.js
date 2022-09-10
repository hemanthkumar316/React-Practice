import React from 'react'
import Counter from './Counter'
const Over = (props) => {
 const {count,increment}=props
  return (
    <div>
    <center>
    <button onMouseOver={increment}>You Mouse overed{count} times</button>
    </center>
     
    </div>
  )
}

export default Counter(Over)
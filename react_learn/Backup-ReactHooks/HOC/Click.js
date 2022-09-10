import React from 'react'
import Counter from './Counter'
const Click = (props) => {
 const {count,increment}=props
return (
    <div>
    <center>
    <button onClick={increment}>You Clicked {count} times</button>
    </center>
   
    </div>
  )
}

export default Counter(Click)
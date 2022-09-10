 import React from 'react'
import { useHistory } from 'react-router-dom'
const Login = () => {
  let history =useHistory()
 
  return (
    <div>
      <form>
        <input type='text' placeholder='email'/>
        <input type='text' placeholder='password'/>
        <button onClick={()=>{ history.push("/Dashboard")}}>submit</button>
      </form>
    </div>
  )
}

export default Login 

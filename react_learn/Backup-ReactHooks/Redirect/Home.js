import React,{useState} from 'react'
import { Redirect } from 'react-router-dom'
const Home = () => {
  const [auth,setAuth]=useState(false)
  if(auth){
    return <Redirect to='/Dashboard'/>
  }
  return (
    <div>
    <center>
    <h1>Welcome to Home Page</h1>
    <button onClick={()=>setAuth(true)}>Login</button>
    </center>
    
    </div>
  )
}

export default Home
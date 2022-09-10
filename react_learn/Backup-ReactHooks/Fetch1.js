import React,{useState,useEffect} from 'react'
import axios from'axios'
const Fetch1 = () => {
 const [state,setState]=useState([])
 useEffect(
   async ()=>{
    const response=await axios.get("https://jsonplaceholder.typicode.com/todos")
    //console.log(response.data)
    setState(response.data)
   }
 ,[])
  return (
    <div>
    <pre>{JSON.stringify(state)}</pre>
     {
      state.map((item)=>{
        return(
          <ul>
            <li>{item.title}</li>
            
          </ul>
        )
      })
    } 
    </div>
  )
}

export default Fetch1
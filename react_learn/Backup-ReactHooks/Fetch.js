/* import React,{useEffect,useState} from 'react'

const Fetch = () => {
 const [state, setstate] = useState([])
 useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response=>response.json())
    //.then(json=>console.log(json))
    .then(json=>setstate(json))
 }, [])
  return (
    <div>
      {
       state.map(hemanth=><li key={hemanth.id}>{hemanth.title}</li>)
      }
    </div>
  ) 
}

export default Fetch */
import React,{useEffect,useState} from 'react'
 import Axios from'axios'
const Fetch = () => {
 const [state, setstate] = useState({user:[]})
useEffect(()=>{
 /*  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  //.then(json=>console.log(json))
  .then(json=>setstate({user:json})) */
  Axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.data)
  //.then(data=>console.log(data))
  .then(data=>setstate({user:data}))
 },[]) 

  return (
    <>
    <pre>{JSON.stringify(state.user)}</pre>
    <div className='container'>
     <div className='row'>
      <div className='col'>
     <table className='table table-hover'>
     <thead className='bg-dark text-warning'>
      <tr>
       <th>ID</th>
       <th>Name</th>
       <th>Email</th>
       </tr>
       </thead>
     <tbody>
      {
        state.user.map((hemanth)=>{
         return(
          
           <tr key={hemanth.id}>
            <td>{hemanth.id}</td>
            <td>{hemanth.name}</td>
            <td>{hemanth.email}</td>
           </tr>
          
         )
        })
       }
     </tbody>
    </table>
    </div>
    </div>
   </div>
    </>
  )
}

export default Fetch
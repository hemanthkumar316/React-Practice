import React,{useState,useEffect} from 'react'
import Axios from'axios'
const Postapi = () => {
 const [state,setState]=useState([])
 useEffect(()=>{
  Axios.post('https://addithrpython.azurewebsites.net/api/testAPINew?',{
   "crudtype": 1
})
       .then(response=>response.data)
       //.then(data=>console.log(data))
       .then(data=>setState(data.data))
 })
  return (
    <div className='container mt-5'>
    <div className='row'>
     <div className='col'>
     <pre>{JSON.stringify(state)}</pre>
       <table className='table table-hover'>
        <thead>
         <tr>
           <th>Id</th> 
          <th>empAutoId</th>
          <th>Attendance date</th>
          <th>Attendance Status</th>
          <th>in Time</th>
          <th>Out Time</th>
          <th>Work Duration</th>
          <th>Break Duration</th>
         </tr>
        </thead>
        <tbody>
         {
          state.map((person)=>{
           return(
            <tr>
            <td>{person.id}</td>
             <td>{person.empAutoId}</td>
             <td>{person.attendanceDate}</td>
             <td>{person.attendanceStatus}</td>
             <td>{person.inTime}</td>
             <td>{person.outTime}</td>
             <td>{person.workDuration}</td>
             <td>{person.breakDuration}</td>
            </tr>

           )
          })
         }
        </tbody>
       </table>
     </div>
    </div>

    </div>
  )
}

export default Postapi
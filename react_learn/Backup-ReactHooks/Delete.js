import React,{useState} from 'react'
const employees=[{"first_name":"Ignatius"},
{"first_name":"Rozanna"},
{"first_name":"Katya"},
{"first_name":"Alfreda"},
{"first_name":"Viole"},
{"first_name":"Yehudit"},
{"first_name":"Corbie"},
{"first_name":"Berkeley"},
{"first_name":"Haydon"},
{"first_name":"Shelli"},
{"first_name":"Audy"},
{"first_name":"Lottie"},
{"first_name":"Cacilie"},
{"first_name":"Morton"},
{"first_name":"Josiah"},
{"first_name":"Corabella"},
{"first_name":"Kevyn"},
{"first_name":"Barri"},
{"first_name":"Grannie"},
{"first_name":"Johannes"}]
const Test = () => {
 const [data, setData] = useState(employees)
 const deletehandler=(e)=>{
let emp=e.target.getAttribute('removeitems')
setData(data.filter(emps=>emps.first_name!==emp))
 }
  return (
    <div className='contianer mt-5'>
    
     <center>
     <h1>Delete arrary of items</h1>
     {
      data.map((emp,key)=>{
       return(
       <div key={key}>
      {emp.first_name} 
     <button  removeitems={emp.first_name} onClick={deletehandler}>Delete</button>
     
       </div>
       )
      })
     }
     </center>
    </div>
  )
}

export default Test
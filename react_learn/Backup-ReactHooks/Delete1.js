import React,{useState} from 'react'
const arr=[
 {
   "id": 1,
   "name": "John Doe",
   "age": 28
 },
 {
   "id": 2,
   "name": "John Doe",
   "age": 28
 },
 {
   "id": 3,
   "name": "John Doe",
   "age": 28
 },
 {
   "id": 4,
   "name": "John Doe",
   "age": 28
 },
 {
   "id": 5,
   "name": "John Doe",
   "age": 28
 },
 {
   "id": 6,
   "name": "John Doe",
   "age": 28
 },
 {
   "id": 7,
   "name": "John Doe",
   "age": 28
 }
]
const Simple = () => {
 const [data,setData]=useState(arr)
 const clickhandler=(id)=>{
  const newdata=data.filter(user=>user.id!==id)
  setData(newdata)
 }
  return (
    <div>
     {
      data.map((user)=>{
       return(
        <div>
        {user.id} {user.name}{' '}
        <button onClick={()=>clickhandler(user.id)}>*</button>
        </div>
       
       )
      })
     }
    </div>
  )
}

export default Simple
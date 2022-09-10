import axios from 'axios'
import React,{useState,useEffect}from 'react'

const Post = () => {
 const data={userId:'',title:'',body:''}
 const [form,setForm]=useState(data)
 const changehandler=e=>{
  setForm({...form,[e.target.name]:e.target.value})
 } 
 const submithandler=e=>{
  e.preventDefault()
  console.log(form)
 }
 useEffect(()=>{
  axios.post('https://jsonplaceholder.typicode.com/posts',form)
  .then(response=>console.log(response))
  .catch(error=>console.log(error))



 })
 return (
    <div className='container mt-5'>
        <center>
        <form  onSubmit={submithandler}>
      <div>
       <input type='text' name='userId' value={form.userId} onChange={changehandler}/>
      </div>
      <div>
       <input type='text' name='title' value={form.title} onChange={changehandler}/>
      </div>
      <div>
       <input type='text' name='body' value={form.body} onChange={changehandler}/>
      </div>
      <button>Submit</button>
     </form>
        </center>
     
    </div>
  )
}

export default Post
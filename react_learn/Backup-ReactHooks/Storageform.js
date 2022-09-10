import React,{useState} from 'react'

const Storageform = () => {
 const [formvalues,setFormvalues]=useState({name:'',email:'',phone:''})
 const changehandler=e=>{
  setFormvalues({...formvalues,[e.target.name]:e.target.value})
 } 
 const submithandler=e=>{
  e.preventDefault()
  console.log(formvalues)
 }
  /* useEffect(()=>{
   localStorage.setItem('user',JSON.stringify(formvalues))
 },[formvalues]) */
 const id=new Date().getTime().toString()
 localStorage.setItem(id,JSON.stringify(formvalues))
 return (
    <div className='container mt-5'>
     
      <form onSubmit={submithandler}>
       <div className='form-group'>
      <label>Name</label>
      <input type='text' className='form-control' name='name' value={formvalues.name} onChange={changehandler}/>
        </div>
        <div className='form-group'>
      <label>Email</label>
      <input type='text' className='form-control' name='email' value={formvalues.email} onChange={changehandler}/>
        </div>
        <div className='form-group'>
      <label>Phone</label>
      <input type='text' className='form-control' name='phone' value={formvalues.phone} onChange={changehandler}/>
        </div>
        <button className='btn btn-success '>Submit</button>
      </form>
     
    </div>
  )
}

export default Storageform
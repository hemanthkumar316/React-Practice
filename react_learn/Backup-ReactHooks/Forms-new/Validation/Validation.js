import React,{useState,useEffect} from 'react'

const Validation = () => {
 const data={username:'',email:'',password:''}
 const [form, setForm] = useState(data)
const [formerrors,setFormErrors]=useState({})
const[issubmit,setIssubmit]=useState(false)
 const changehandler=(e)=>{
  setForm({...form,[e.target.name]: e.target.value})
  //console.log(form)
 }
 const submithandler=(e)=>{
  e.preventDefault()
  setFormErrors(validate(form))
  setIssubmit(true)
}
useEffect(()=>{
 console.log(formerrors)
   if(Object.keys(formerrors).length===0 & issubmit){
    console.log(form)
   }
},[formerrors])
const validate=(values)=>{
 const errors={}
 //const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
 const usercheck=/^[a-z0-9.]+\@[a-z]+\.[a-z]{2,6}$/;

 if(!values.username){
  errors.username='Username is required'
 }
 if(!values.email){
  errors.email='Email is required';
 }
  else if(!usercheck.test(values.email)) {
  errors.email='This is not a valid email format!';
 }
 if(!values.password){
  errors.password='Password is required';
 } else if(values.password.length<4){
  errors.password='Password must be more than 4 charcters!';
 } else if(values.password.length>10){
  errors.password='Password cannot exceed more than 10 charcters!';
 }
 return errors;
}
  return (
    <div className='container'>
    {Object.keys(formerrors).length === 0 && issubmit ? (
        <div><h1>Signed in Successfully...</h1></div>
      ) : (
        <pre>{JSON.stringify(form, undefined, 2)}</pre>
      )}
     <form onSubmit={submithandler}>
      <h1>Login form</h1>
      <div className='row'> </div>
     <div className='col'>
      <div className='field'>
       <label>UserName </label>
       <input type='text' placeholder='username' name='username' value={form.username} onChange={changehandler}/>
      </div>
      <p>{formerrors.username}</p>
      <div className='field'>
       <label>Email </label><br/>
       <input type='email' placeholder='email' name='email'value={form.email} onChange={changehandler}/>
      </div>
      <p>{formerrors.email}</p>
      <div className='field'>
       <label>Password </label>
       <input type='password' placeholder='password' name='password'value={form.password} onChange={changehandler}/>
      </div>
     </div>
     <p>{formerrors.password}</p>
       <button>Submit</button>
     </form>
    </div>
  )
}

export default Validation
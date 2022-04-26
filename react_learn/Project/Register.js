 import React,{useState,useEffect} from 'react'

const Register = () => {
  const data={username:'',email:'',password:''}
  const [form, setForm] = useState(data)
  const[formerrors,setFormErrors]=useState({})
  const[issubmit,setIssubmit]=useState(false)
  const changehandler=(e)=>{
    console.log(e.target.value)
    setForm({...form,[e.target.name]:e.target.value})
  }
  const signuphandler=(e)=>{
    e.preventDefault()
    setFormErrors(validate(form))
    //console.log(form)
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
    const usercheck=/^[a-z0-9.]+\@[a-z]+\.[a-z]{2,6}$/;
    if(!values.username){
      errors.username='username is required'
    }
    if(!values.email){
      errors.email='email is required'
    }
      else if(!usercheck.test(values.email)){
        errors.email='This is not valid Email Format'
      }
    if(!values.password){
      errors.passsword='password is required'
    }
    else if(values.password.length<4){
      errors.passsword='Password must be more than 4 charcters'
    }
    else if(values.password.length>10){
      errors.passsword='Password cannot be exceed more than 10 charcters'
    }
    return errors
  }
  return (
    <div className='container mt-5'>
      {Object.keys(formerrors).length===0 &issubmit?(<div><h1 text-align='center'>Signed in Successfully</h1></div>):<pre>{JSON.stringify(form)}</pre>}
     <div className='row'>
      <div className='col md-5'>
        
       <form onSubmit={signuphandler}>
      <div className='form-group'>
        <label  htmlFor="Username">UserName</label>
        <input type='text' className='form-control'placeholder='Enter you Name' id="Username" name='username' value={form.username} onChange={changehandler}/>
      </div>
      <p className='text-danger'>{formerrors.username}</p>
      <div className='form-group'>
       <label htmlFor='Email'>Email</label>
       <input type='text' className='form-control' placeholder='Enter valid Email Address' id='Email'name='email' value={form.email}onChange={changehandler}/>
       </div>
       <p className='text-danger'>{formerrors.email}</p>
       <div className='form-group'>
       <label htmlFor='Password'>Password</label>
       <input type='text' className='form-control' placeholder='Enter your Password' id='Password' name='password' value={form.password} onChange={changehandler}/>
       </div>
       <p className='text-danger'>{formerrors.passsword}</p>
       <button className='btn btn-primary'>Signup</button><br/>
     </form>
    </div>
    </div>
    </div>
  )
}

export default Register
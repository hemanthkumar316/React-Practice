import React,{useState,useEffect} from 'react'

const Form = () => {
  const data={email:'',password:''}
  const [form, setForm] = useState(data)
  const [formerrors,setFormErrors]=useState({})
  const [issubmit,setIssubmit]=useState(false)
  const changeHandler=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const submihandler=(e)=>{
    e.preventDefault();
    //console.log(form)
    setFormErrors(validate(form))
    setIssubmit(true)
  }
  useEffect(()=>{
    console.log(formerrors)
    if(Object.keys(formerrors).length==0 & issubmit){
      console.log(form)
    }

  },[formerrors])
  const validate=(values)=>{
    const errors={}
    const usercheck=/^[a-z0-9.]+\@[a-z]+\.[a-z]{2,6}$/;
    if(!values.email){
      errors.email='Email is required'
    }
    else if(!usercheck.test(values.email)){
      errors.email='This is not a valid email format'
    }
    if(!values.password){
      errors.password='Password is required'
    }
    else if(values.password.length<4){
      errors.password='password must be more than 4 charcters'
    }
    else if(values.password.length>10){
      errors.password='password  cannot be exceed more than 10 charcters'
    }
    return errors;
  }
  return (
    <div>
      <pre align='center'>{JSON.stringify(form)}</pre>
      <h1 align='center'>Signup Form</h1>
      <form onSubmit={submihandler}>
        <div className='form-group'>
      <label>Email</label>
      <input type='text' className='form-control' placeholder='enter email'name='email' value={form.email} onChange={changeHandler}/>
      </div>
      <p>{formerrors.email}</p>
      <div className='form-group'>
      <label>Password</label>
      <input type='text'  className=' form-control' placeholder='enter password'name='password' value={form.password} onChange={changeHandler}/>
      </div>
      <p>{formerrors.password}</p>
      <br/>
      <button className='btn btn-primary'>Login</button>
      </form>
    </div>
  )
}

export default Form
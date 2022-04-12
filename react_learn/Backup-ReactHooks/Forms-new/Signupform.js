import React,{useState} from 'react'

const Signupform = () => {
const [data, setData] = useState({username:'',email:'',password:'',confirmpassword:""})
const {username,email,password,confirmpassword}=data
const changehandler=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
}
const submithandler=(e)=>{
   e.preventDefault()
   
   /*   if( password===confirmpassword){
      console.log(data)
    }
    else{
      console.log('Passwords are not matching')
    }  */
    if(username.length<=5){
      alert('username must be at least 5 character')
    }
   else if(password!=confirmpassword){
  alert('Passwords are not matching')
   }
   else{
     console.log(data)
   }
}
  return (
    <div>
     
     <form onSubmit={submithandler}>
     <h1> Signupform </h1>
      <input type='text' name='username' value={username} onChange={changehandler}/><br/>
      <input type='email' name='email' value={email} onChange={changehandler}/><br/>
      <input type='password' name='password' value={password} onChange={changehandler}/><br/>
      <input type='password' name='confirmpassword' value={confirmpassword} onChange={changehandler}/><br/>
      {password!=confirmpassword?<p style={{'colour':'red'}}> * Passwords not matching</p>:null}
      <input type='submit' />
     </form>
    </div>
  )
}

export default Signupform
import React from 'react'

const Login = () => {
  return (
    <div className='container mt-5'>
     <div className='row'>
      <div className='col md-5'>
       <form>
      <div className='form-group'>
       <label>Email</label>
       <input type='text' className='form-control' placeholder='Enter Avalid Email Address'/>
      </div><br/>
       <div className='form-group'>
      <label>Password</label>
       <input type='password' className='form-control'placeholder='Enter Your Password'/>
      </div><br/>
      <div className='form-group'>
      <label>ReEnter Password</label>
      <input type='password' className='form-control' placeholder='Enter Again Your Password'/>
      </div><br/>
     <button className='btn btn-success'>Login</button>
     </form>
    </div>
    </div>
    </div>
  )
}

export default Login
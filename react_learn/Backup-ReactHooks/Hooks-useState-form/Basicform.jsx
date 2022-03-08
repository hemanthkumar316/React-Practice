import React,{useState} from 'react'

const Basicform = () => {
  const[email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const [allEntry,setAllEntry]=useState([])
 
  const submithandler=(e)=>{
        e.preventDefault();
       const newEntry= {email:email,password:password} 
        setAllEntry([...allEntry,newEntry])
        console.log(allEntry);
      }
  return (
    <div>
        
        <h1 align='center'>Login Form</h1>
        
          <div className="container">
              <div className="row">
                  <div className="col">
                      <form onSubmit={submithandler}>
                      
                          <label>Email</label>
                          <input type='email'className='form-control'placeholder='enter a vaild email address'name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
                      
                      
                          <label>Password</label>
                          <input type='text'className='form-control' placeholder='enter your password'name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
                          <input type='submit' className='btn btn-success' value='login'/><br/>
                      </form>
                      <div>
                        {
                          allEntry.map((curlElem)=>{
                          return (
                            <div className='showDataStyle'> 
                            <p>{curlElem.email}</p>
                            <p>{curlElem.password}</p>
                            </div>
                          )
                          })
                        }
                      </div>
                  </div>
              </div>
              </div> 

    </div>
  )
}

export default Basicform
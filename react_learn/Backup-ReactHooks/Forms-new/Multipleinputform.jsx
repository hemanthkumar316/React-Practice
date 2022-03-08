import React,{useState} from 'react'

const Multipleinputform = () => {
  const[user_name,setUser_name]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[project_name,setProject_name]=useState('')
  const [allEntry,setAllEntry]=useState([])
  const submitHandler=(event)=>{
  

    
    const newEntry={user_name:user_name,email:email,password:password,project_name:project_name}
    event.preventDefault();
    setAllEntry([...allEntry,newEntry])
    console.log(allEntry);
  }
  return (
    <div>
        <h1 align='center'>Registeration Form</h1>
        <div className="container">
            <div className="row">
                <div className="col">
                <form onSubmit={submitHandler}>
                    <label>User Name</label>
                    <input type='text' className='form-control' placeholder='enter your user name'name='user_name' value={user_name} onChange={(event)=>{
                      setUser_name(event.target.value)
                    }}/><br/>
                    <label>Email</label>
                    <input type='email' className='form-control' placeholder='enter a valid email address'name='email' value={email} onChange={(event)=>{
                     setEmail(event.target.value)
                    }}/><br/>
                    <label>Password</label>
                    <input type='password' className='form-control' placeholder='enter your user name'name='password' value={password} onChange={(event)=>{
                      setPassword(event.target.value)
                    }}/><br/>
                    <label>Project Name</label>
                    <input type='text' className='form-control' placeholder='enter your user name'name='project_name' value={project_name} onChange={(event)=>{
                      setProject_name(event.target.value)
                    }}/><br/>
                    <input type='submit' className='btn btn-primary' value='login'/><br/>

                </form>
                <div>
                  {
                    allEntry.map((hemanth)=>{
                      return(
                        <div>
                          <p>{hemanth.user_name}</p>
                          <p>{hemanth.email}</p>
                          <p>{hemanth.password}</p>
                          <p>{hemanth.project_name}</p>
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

export default Multipleinputform
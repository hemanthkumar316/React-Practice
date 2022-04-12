import React,{useState} from 'react'

const Multipleinput = () => {
  const[user,setUser]=useState({user_name:'',email:'',password:'',phone:''})
  const[records,setRecords]=useState([])
  const changeInput=(event)=>{
   /*  setUser({...user,[event.target.name]:event.target.value}) */
   const name=event.target.name
   const value=event.target.value
    console.log(name,value)
    setUser({...user,[name]:value})
  }
  const submithandler=(event)=>{
    event.preventDefault();
    const newrecord={...user,id:new Date().getTime().toString()}
    setRecords([...records,newrecord])
    console.log(records);
    setUser({user_name:'',email:'',password:'',phone:''})
  }
  return (
    <div>
    <h1 align='center'>Form</h1>
    <pre>{JSON.stringify(user)}</pre>
    <form onSubmit={submithandler}>
      <label>user Name</label>
      <input type='text'  placeholder='enter your name'name='user_name' id='user_name'value={user.user_name}onChange={changeInput}/>
      <label>Email</label>
      <input type='email' placeholder='enter a valid email address'name='email'id='email' value={user.email}onChange={changeInput}/>
      <label>Password</label>
      <input type='password'  placeholder='enter your password'name='password' id='password' value={user.password}onChange={changeInput}/>
      <label>Phone</label>
      <input type='number'  placeholder='enter your phone number'name='phone'id='phone' value={user.phone}onChange={changeInput}/>
      <input type='submit' className='btn btn-success' value='submit'/>
      </form> 
      <div>
        {
          records.map((Hemanth)=>{
            const{id,user_name,email,password,phone}=Hemanth
            return(
              <div key={id}>
                <p>{user_name}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{password}</p>
                </div>
            )
          })
        }
      </div>
  
    </div>
  )
}

export default Multipleinput
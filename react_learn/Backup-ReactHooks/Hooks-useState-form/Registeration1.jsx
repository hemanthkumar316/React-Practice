import React,{useState} from'react'
let Registeration1=()=>{
    let[state,setState]= useState({name:"",email:'',password:''})
    let changeHandler=(event)=>{
        /* console.log(event.target.value); */
        setState({...state,[event.target.name]:event.target.value})
    }
    let submitHandler=(event)=>{
        event.preventDefault()
        console.log(state);
    }
    return<>
    <h1>Registeration</h1>
    <pre>{JSON.stringify(state)}</pre>
    <div className="container mt-5">
        <div className="row">
            <div className="col">
                <form onSubmit={submitHandler}>
                    <label>Name</label>
                    <input type="text" className='form-control' placeholder='enter your name' name='name' value={state.name}onChange={changeHandler}/><br/>
                    <label>Email</label>
                    <input type='text' className='form-control' placeholder='enter a valid email id' name='email' value={state.email}onChange={changeHandler}/><br/>
                    <label>Password</label>
                    <input type="text" className='form-control' placeholder='enter your password' name='password' onChange={changeHandler}/><br/>
                    <input type="submit" className='btm btn-primary' value='Registeration'/>
                </form>
            </div>
        </div>
    </div>
    </>
}
export default Registeration1
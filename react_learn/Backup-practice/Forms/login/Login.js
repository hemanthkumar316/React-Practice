import React from "react"
class Login  extends React.Component{
    state={
        email:"",
        password:""
    }
    emailHandler=(event)=>{
     this.setState=({email:event.target.value})
    }
    passwordHandler=(event)=>{
        this.setState=({password:event.target.value})
    }
    submitHandler=(event)=>{
        event.preventDefault()
        console.log(this.state)
        }
    render(){
        return(
        <div>
         <h1>Login Form</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submitHandler}>
             <label>Email</label>
             <input type="text" placeholder="Enter Mail"onChange={this.emailHandler}/><br/><br/>
             <label>Password</label>
             <input type="text" placeholder="Enter your Password"onChange={this.passwordHandler}/><br/><br/>
             <input type='submit' value="Login"/>
        </form>
        </div>
        )
    }
}
export default Login
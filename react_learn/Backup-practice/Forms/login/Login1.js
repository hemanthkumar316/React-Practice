import React from'react'
class Login1 extends React.Component{
    state={
        Email:"",
    Password:""
    }
    updateHandler=(event)=>{this.setState({
        Email:event.target.value,Password:event.target.value})
}
    
      submitHandler=(event)=>{
          event.preventDefault();
          console.log(this.state);
      }


    render(){
        return<div>
            <h1>Login Form</h1>
            <pre>{JSON.stringify(this.state)}</pre>
             <form onSubmit={this.submitHandler}>
            <label>Email</label>
            <input type="text" placeholder="Enter Mail-ID"OnChange={this.updateHandler} /><br/>
            <label>Password</label>
            <input type="text" placeholder="Enter Password"onChange={this.updateHandler}/><br/>
            <input type="submit"/>
            </form>
        </div>
    }
}
export default Login1
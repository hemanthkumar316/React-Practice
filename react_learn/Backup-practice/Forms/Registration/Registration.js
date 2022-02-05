import React from'react'
class Registration  extends React.Component{
    state={
        username:""
       }
    userNameHandler=(event)=>{
        console.log(event.target.value);
        this.setState({username:event.target.value})
    }
    submitHandler=(event)=>{
        console.log(this.setState)
        event.preventDefault();
    }
    render(){
        return(
         <>
        <h2>Registration Form</h2><br/>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submitHandler}>
            <label>User Name:</label>
            <input type="text" onChange={this.userNameHandler}/><br/><br/>
            <input type="submit" value="Registration"/>
        </form>

        </>
        )
    }
}
export default Registration
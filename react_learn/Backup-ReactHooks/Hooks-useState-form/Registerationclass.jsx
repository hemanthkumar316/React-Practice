import React from 'react';
class Registerationclass extends React.Component{
    state={
        name:'',
        email:'',
        password:''
    }
    nameHandler=(event)=>{
       console.log(event.target.value);
       this.setState({name:event.target.value})
    }
    emailHandler=(event)=>{
    console.log(event.target.value);
    this.setState({email:event.target.value})
}
   passwordHandler=(event)=>{
    console.log(event.target.value);
    this.setState({email:event.target.value})
}
submitHandler=(event)=>{
    console.log(this.state);
   event.preventDefault()
}
    render(){
        return<>
        <h1>Registration form</h1>
        <pre>{JSON.stringify(this.state)}</pre>
    <div className="container mt-5">
        <div className="row">
            <div className="col">
                <form onSubmit={this.submitHandler}>
                <label>User Name</label>
                <br/>
                <input type='text' className='form-control' onChange={this.nameHandler}/>
                <label>Email</label>
                <br/>
                <input type="text" className='form-control' onChange={this.emailHandler}/>
                <br/>
                <label>Password</label>
                <br/>
                <input type="text" className='form-control' onChange={this.passwordHandler}/>
                <br/>
                <input type="submit" className='btn btn-success'value="login"/>
                </form>
            </div>
        </div>
    </div>
       </>
    }    
    }
export default Registerationclass
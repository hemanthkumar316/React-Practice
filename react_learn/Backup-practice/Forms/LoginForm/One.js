import React from 'react'
class One extends React.Component{
    state={
        Email:"",
        Password:""
    }
    updateHandler=(event)=>{
         this.setState({[event.target.name]:event.target.value})
    }
    submitHandler=(event)=>{
       event.preventDefault()
       console.log(this.state);s
    }
render(){
    return <>
    <div className="container md-5">
    <pre>{JSON.stringify(this.state)}</pre>
    
    <div className="row">   
    <div className="col md-6">
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                 <input type="text" className='form-control' placeholder='Enter Your Email Id'name="Email" value={this.state.Email} onChange={this.updateHandler}/>
                </div>
                <div className="form-group">
                 <input type="text" className='form-control' placeholder='Enter your Password'name="Password" onChange={this.updateHandler}/>   
                </div>
                <div className="form-group">
                <input type="submit" clasName="btn btn-success" value='Login'/>
                </div>
            </form>
         </div>
    </div>
</div>
    </>
}
}
export default One
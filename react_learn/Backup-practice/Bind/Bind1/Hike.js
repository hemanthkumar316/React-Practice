import React from 'react'
class Hike extends React.Component{
    state={
        salary:400000
    }
    setHikeHandler = (e) => {
        console.log("Test Case 123");
        this.setState({ salary: this.state.salary + e })
    }
    render(){
        return(
       <React.Fragment>
           <nav className='navbar navbar bg-white'>Employee Hike Details</nav>
           <hr/>
         <div className="container mt-5">   
         <div className="row">
             <div className="col-md-8">
                 <div className="card">
                     <div className="card-header">
                         <h3>Salary:{this.state.salary}</h3>
                         <div className="card-body">
                             <button className="btn btn-success mr-2" onClick={this.setHikeHandler.bind(this,50000)}>Hike 50k</button>
                             <button className="btn btn-primary mr-2" onClick={this.setHikeHandler.bind(this,100000)}>Hike100k</button>
                             <button className="btn btn-warning" onClick={this.setHikeHandler.bind(this,10000)}>Hike 10k</button>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
     
</React.Fragment>
        )
    }
}
export default Hike
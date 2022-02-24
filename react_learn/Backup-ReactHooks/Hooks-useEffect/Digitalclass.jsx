import React, { Component } from 'react'

class Digitalclass extends Component {
    constructor(props){
        super(props)
        console.log('constructor-first')
        this.state={
          currentTime:new Date().toLocaleTimeString(),
        }
    } 
    componentDidMount=()=>{
      console.log('third-component Didmount');
      
      setInterval(()=>{
        this.setState({
          currentTime:new Date().toLocaleTimeString()})
      },1000)
    }
    componentWillUpdate=()=>{
      console.log('Four -component-Willupdate');
    }
    componentWillUnmount=()=>{
      console.log('Final-will Unmount');
    }
  render() {
    console.log('second-render Method');
    return (
      <div>
        <h1>Digital Clock using Class Life cycle Methods</h1>
       <div className="container mt-5">
         <div className="row">
           <div className="col-md-6">
             <div className="card">
               <div className="card-header">
<h1>{this.state.currentTime}</h1>
               </div>
               <div className="card-body"></div>
             </div>
           </div>
         </div>
       </div>
      </div>
    )
  }
}

export default Digitalclass
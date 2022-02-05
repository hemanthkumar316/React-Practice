import React from 'react';
class One extends React.Component {
  state={
      message:"Hello"
  }
  gmHandler=()=>{
      this.setState({ message: "Good Morning"})
  }
  gnHandler=()=>{
      
      this.setState({message: "Good Evening"})
}
    render(){
    return <>
    <h3> {this.state.message}</h3>
     <button className='btn btn-primary' onClick={this.gmHandler}>GM</button>
     <button  className='btn btn-primary'onClick={this.gnHandler}>GN </button>
    </>
  }
}
export default One
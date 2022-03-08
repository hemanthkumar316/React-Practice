import React, { Component } from 'react'
class Classtimer extends Component {
 constructor(props){
  super(props)
  this.state={
   timer:0
  }
 }
 componentDidMount(){
  this.interval=setInterval(()=>{
   this.setState(prevState =>({ timer:prevState.timer+1}))
  },1000)
 }
 componentWillMount(){
  clearInterval(this.interval)
 }
  render() {
    return (
      <div>
       <h1> class Timer-{this.state.timer}</h1>
       <button onClick={()=>{clearInterval(this.interval)}}>Stop timer</button>
      </div>
    )
  }
}

export default Classtimer
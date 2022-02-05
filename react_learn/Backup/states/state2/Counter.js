import React from'react'
class Counter extends React.Component{
    state={
qty:1
    }
    IncrHandler=()=>{
        this.setState({qty:this.state.qty+1})
       }
    DecrHandler=()=>{
        this.setState({qty:this.state.qty-1})
    }
    render(){
        return(
            <>
            <h2>Quantity:{this.state.qty}</h2>
            <button onClick={this.IncrHandler}>INCR</button>
             <button onClick={this.DecrHandler}>DECR</button>
            </>
        )
    }
}
export default Counter
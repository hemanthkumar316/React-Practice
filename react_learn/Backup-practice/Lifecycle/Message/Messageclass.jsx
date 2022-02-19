
import React from'react'
class Messageclass extends React.Component{
constructor(props){
    super(props)
    console.log('First Constructor');
    this.state={
        Msge:"Hii Everyone"
    }
}
messageHandler=()=>{
    this.setState({Msge:'Take Care'})
}
componentDidMount(){
    console.log('Birth:Third-componentDidmount method after render method');
}
componentwilUpdate(){
    console.log('Update:Excetuting@time of,updating component data using setState');
}
compoenentwilUnmount(){
    console.log('Death:componentwillUnmout execute-finally');
}
    render(){
        console.log('Second Render Method');
        return<React.Fragment>
     <h1>Message.................</h1>
     <h1>Message:{this.state.Msge}</h1>
     <button className='btn btn-primary' onClick={this.messageHandler}>wish me</button>
        </React.Fragment>
    }
}
export default Messageclass
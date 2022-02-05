import React, { Component } from 'react';
class Bind extends Component {
     state={
      Message: "Hello Everyone"
          }
          changeHandler=(msge)=>{
            this.setState({Message:msge})
          }
  render() {
    return <div>
      <h1>{this.state.Message}</h1>
      <button onClick={this.changeHandler.bind(this,"Iam Hemanth")}>change</button>
      <button onClick={this.changeHandler.bind(this,"Iam Also Hemanth")}>change</button>
    </div>;
  }
}
export default Bind;

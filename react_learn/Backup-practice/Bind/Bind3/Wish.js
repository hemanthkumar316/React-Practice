import React, { Component } from 'react';

 class Wish extends Component {
    constructor(props) {
        super(props);
        console.log("First - Const")
        this.state = {
            message: "Hello............."
        }
    }
    wishHandler = (msg) => {
        console.log(msg);
        this.setState({ message: msg })
    }
  render() {
    return <div>
            <h3>Message Value:{this.state.message}</h3>
            <button onClick={this.wishHandler.bind(this, "Good Morning")}>GM</button>
            <button onClick={this.wishHandler.bind(this, "Good Aternoon")}>GA</button>
            <button onClick={this.wishHandler.bind(this, "Good Night")}>GN</button>
    </div>;
  }
}

export default Wish;

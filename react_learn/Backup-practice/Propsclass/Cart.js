import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    return <div>
        <>
        <h1>Cart Component</h1>
        <h4>Product Name:{this.props.name}</h4>
        <h4><img src={this.props.img}/></h4>
        <h4> Price:{this.props.price}</h4>
        <h4>Product Colour:{this.props.colour}</h4>
        </>
    </div>;
  }
}

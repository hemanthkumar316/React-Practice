import React from'react'
class Laptop extends React.Component{
    state={
        Product_Name:"Acer Swift 3 Thin And Light Laptop 11th Gen Intel Core I5 ",
        price:60000,
        image:"https://static-ecapac.acer.com/media/catalog/product/cache/a17a77e026ef2eddd3ecae104c32cc71/6/_/6_3.jpg",
        Qty:1
    }
    incrHandler=()=>{
        this.setState({Qty:this.state.Qty+1})
    }
    decrHandler=()=>{
        this.setState({Qty:this.state.Qty-1})
    }
    render(){
        return(
            <div className='container mt-5'>
    <div className="row-md-3">
        <div className="col-md-10">
            <table className="table table-hover">
                <thead className='bg-secondary'>
                    <th>Product_Name</th>
                    <th>image</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.Product_Name}</td>
                            <td><img src={this.state.image} width="350px" height="300px"/></td>
                            <td>{this.state.price}</td>
                            <td>
                                <i class="fa fa-minus-circle" onClick={this.decrHandler}/>
                                {this.state.Qty}
                                <i class="fa fa-plus-circle" onClick={this.incrHandler}/>
                            </td>
                            <td>{this.state.price*this.state.Qty}</td>
                        </tr>
                    </tbody>
            </table>
        </div>
    </div>
</div>
        )
    }
}
export default Laptop
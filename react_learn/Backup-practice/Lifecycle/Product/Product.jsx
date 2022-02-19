import React,{useState} from'react'
let Product=()=>{
let[Product,setProduct]=useState({
    name:'Iphone',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcwSUXyixKbHq5_G2SwdmQGTM2TUJvA3rfqQ&usqp=CAU',
    price:45000,
    qty:1
})
 let decrHandler=()=>{
   setProduct({...Product,qty:Product.qty-1})
}
 let incrHandler=()=>{
     setProduct({...Product,qty:Product.qty+1})

}
return<>
<h1>Product Details</h1>
<div className="container">
    <div className="row">
        <div className="col md-9">
            <table className='text-white table bg-dark'>
                <thead className='text-white'>
                    <th>Product Name</th>
                    <th>Product Image</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total Price</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{Product.name}</td>
                        <td><img src={Product.image}alt=""/></td>
                        <td>{Product.price}</td>
                        <td>
                        <i className='fa fa-minus-circle' onClick={decrHandler}></i>
                        {Product.qty}
                        <i className='fa fa-plus-circle' onClick={incrHandler}></i>
                        </td>
                       
                        <td>{Product.price*Product.qty}</td>
                    </tr>

                </tbody>
            </table>

        </div>

    </div>
</div>
    </>
}
export default Product
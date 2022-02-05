import React from 'react'
import Prop2 from './Prop2'
let Prop=()=>{
    let name="Mobile"
    let price=200000
    let image="https://images-eu.ssl-images-amazon.com/images/I/41jr5nrfFoL._SX300_SY300_QL70_FMwebp_.jpg"
return<>
<h2>Component A</h2>
<Prop2 name={name}
price={price}
image={image}/>
</>
}
export default Prop

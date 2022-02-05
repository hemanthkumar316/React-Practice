import React from 'react'
let Prop2=(props)=>{
    return<>
    <h2>Component B</h2>
    <h2>Device: {props.name}</h2>
    <h2>Price: {props.price}</h2>
    <img src={props.image}/>
    </>
}
export default Prop2
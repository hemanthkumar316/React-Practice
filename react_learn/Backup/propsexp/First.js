import React from "react"
import Second from "./Second"
let First=()=>{
    let name="Hemanth"
    let age=21 
   return(<div>
        <h1>First</h1>
        <hr/>
        <Second name={name}
        age={age}
        image={image}
        />
        </div>)
}
export default First
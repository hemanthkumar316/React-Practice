import React from "react";
import First from"./First"
let Second=(props)=>{
    return(
        <div>
          <h2>name is:{props.name}</h2>
          <h3>Age:{props.age}</h3>
          <h3>image:{props.image}</h3>
        </div>
    )
}
export default Second
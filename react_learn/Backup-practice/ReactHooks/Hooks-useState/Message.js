import React,{useState} from'react'
let Message=()=>{
    let[msge,setmsge]=useState("Hello Everyone......")
  let gmHandler=()=>{
   setmsge("Good Morning....")
  }
  let gafHandler=()=>{
setmsge("Good Afternoon....")
}
let gnHandler=()=>{
    setmsge("Good Night....")
}
return<>
<h1>Message:{msge}</h1>
<button  className="btn btn-success mr-4"onClick={gmHandler} >GM</button>
<button  className="btn btn-warning  mr-3"onClick={gafHandler}>GA</button>
<button  className="btn btn-primary mr-4" onClick={gnHandler}>GN</button>
</>
}
export default Message
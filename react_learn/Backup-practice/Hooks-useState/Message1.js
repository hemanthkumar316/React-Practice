import React,{useState} from'react'
let Message1=()=>{
    let[msge,setmsge]= useState("Hii")
    return<>
    <h1>Message:{msge}</h1>
    <button className="btn btn-warning"onMouseOver={()=>{setmsge("GOOD MORNING")}}>GM</button>
    <button  className="btn btn-danger"onMouseOver={()=>{setmsge("GOOD AFTERNOON")}}>GA</button>
    <button  className="btn btn-success"onMouseOver={()=>{setmsge("GOOD NIGHT")}}>GN</button>
    </>
}
export default Message1
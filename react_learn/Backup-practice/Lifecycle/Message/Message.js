import React,{useState,useEffect} from "react";
let Message=()=>{
    let[ msge,setMsge]=useState('Hii Everyone')
    useEffect(()=>{
        console.log('Birth')
        return()=>{
        console.log('Death')
        }
    },[])
    
    return<>
    <h1>{msge}</h1>
    <button className="btn btn-primary ml-4" onClick={()=>{setMsge('Iam Hemanth')}}>
        Click
    </button>
    </>
}
export default Message
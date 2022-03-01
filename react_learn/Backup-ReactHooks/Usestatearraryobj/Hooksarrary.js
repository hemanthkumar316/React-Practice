import React,{useState} from 'react'

const Hooksarrary = () => {
const myBiodata=[
        {
            id:1,myName:"Hemanth",age:21
        },
        {
            id:2,myName:"Hemanthkumar",age:22
        } , 
        {
            id:3,myName:"Hemu",age:23  
        }      
    ]
    const[myArrary,setmyArrary]=useState(myBiodata)
    const clearArrary=()=>{
        setmyArrary([]);
    }
  return (
      
    <div>
        {/*  {<h1>Name:AAA & Age:21</h1>} */}
    {
        myArrary.map((curElm)=><h1 key={curElm.id}>Name:{curElm.myName} & Age:{curElm.age}</h1>
        )
    }
     <button className='btn btn-primary ml-4'onClick={clearArrary}>Clear</button>
    </div>
  ) 
}

export default Hooksarrary
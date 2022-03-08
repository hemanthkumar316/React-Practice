import React,{useState} from 'react'

const Data = () => {
     const Biodata=[
        { id:1,name:'AAA',age:21},
        { id:2,name:'BBB',age:22},
        { id:3,name:'CCC',age:23},
        { id:4,name:'DDD',age:24}
    ]
    const[myarrary,setmyArrary]=useState(Biodata)
    const cleardata=()=>{
        setmyArrary([]);
    }
  const removedata=(id)=>{
        // alert(id)
        const mynewarrary=myarrary.filter((newdata)=>{
            return newdata.id!==id;

        })
        setmyArrary(mynewarrary)
    } 
    
  
  return (
    <div>
       {
            myarrary.map((hemanth)=>{
                return<h1 key={hemanth.id}>Name:{hemanth.name} & Age:{hemanth.age}
                <button className='btn btn-danger' onClick={()=>{removedata(hemanth.id)}}>Remove</button>
                 </h1>
            })
        } 
         
        <button className='btn btn-primary'onClick={cleardata}>clear</button>
    </div>
  )
}

export default Data
import React,{useState,useEffect} from 'react'

const UseEffect1 = () => {
 const [count,setCount] = useState(0)
 // useEffect be on the top level of our components.If we want to run an effect conditionally.we can put the condition inside our hook
 //ex :if and else
 useEffect(()=>{
  if(count>=1){
   document.title= `chats(${count})`
  }else{
   document.title='chats'
  }
 
 })
 console.log('hello outside')
  return (
    <div>
     <h1>{count}</h1>
     <button className='btn btn-primary' onClick={()=>{setCount(count+1)}}>Click</button>
    </div>
  )
}

export default UseEffect1
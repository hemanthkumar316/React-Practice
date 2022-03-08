import React,{useState,useEffect} from 'react'

const useEffect2 = () => {
  const [count, setCount] = useState(0)
  //useEffect with Dependency List Arrary
  useEffect(()=>{
    if(count>=1){
      document.title=`chats(${count})`
    }else{
      document.title='chats'
    }
    console.log('First One')
  },[count])
  useEffect(()=>{
    console.log('First wish')
  },[])
  console.log('First Outside')
  return (
    <div>
      <h1>{count}</h1>
      <button className='btn btn-primary'  onClick={()=>{setCount(count+1)}}>Click</button>
    </div>
  )
}

export default useEffect2
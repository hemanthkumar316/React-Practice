import React,{useState} from 'react'

const Hookinstring = () => {
    const [myname,setMyName]=useState('hemanth')
     const Changename=()=>{
      let val=myname;
        ( val==='hemanth')?
        setMyName('hemanthkumar') : setMyName('hemanth')
    }
    console.log(myname);
  return (
    <div>
        <h1>{myname}</h1>
        <button className='btn btn-primary' onClick={Changename}>Click</button>
    </div>
  )
}

export default Hookinstring
import React,{useState} from 'react'

const Bind = () => {
   let[msge,setMsge]=useState({Message:'Hii Everyone,this is Hemanth'})
    let changeHandler=(msge)=>{
        console.log('testing')
         setMsge({Message:msge})
    }
  return (
    <div>
        <h1>{msge.Message}</h1>
        <button className='btn btn-success'onClick={changeHandler.bind(this,'Good Morning,WakeUp-Take Breakfast')}>GM</button>
        <button className='btn btn-secondary'onClick={changeHandler.bind(this,"Good Afternoon,Take Lunch")}>GA</button>
        <button className='btn btn-primary'onClick={changeHandler.bind(this,'Good Night,Take Dinner and go to Sleep')}>GN</button>
    </div>
  )
}

export default Bind
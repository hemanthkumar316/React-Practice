import React,{useState,useEffect} from 'react'
//clean up function used in useEffect removing the events.That is it first removes the old added listener from CleanUp function and adds the new listener.
const UseEffectcleanup = () => {
 const [widthcount, setWidthcount] = useState(window.screen.width)
 const actualWidth=()=>{
  console.log(window.innerWidth)
  setWidthcount(window.innerWidth)
 }
 useEffect(()=>{
  console.log('add event')
    window.addEventListener('resize',actualWidth)
    return()=>{
     console.log('remove event')
     window.removeEventListener('resize',actualWidth)
    }
 })
  return (
    <div>
    <h1 align='center'>The Actual size of window is:</h1>
      <h2 align='center'>{widthcount}</h2>
    </div>
  )
}

export default UseEffectcleanup
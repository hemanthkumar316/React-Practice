import React,{useRef} from 'react'

const Login = () => {
 let buttonref=useRef(null)
 let clickhandler=(event)=>{
  console.log(buttonref.current)
  event.preventDefault();
  buttonref.current.disabled=false
 }

  return (
    <>
     
     <div className="container mt-5">
      <div className="row">
       <div className="col md-5">
        <form>
         <div className="form-group">
          <input type='text' className='form-control'/>
          </div>
          
         <div className='form-check'>
          <input className='form-check-input' type='checkbox'onChange={clickhandler}/>
          Terms & Conditons
        </div>
        <input type='button'  className='btn btn-primary'value='login' ref={buttonref} disabled/>
        </form>
   
        </div>
        </div>
        </div>
    
    </>
  )
}

export default Login
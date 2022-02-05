import React from 'react';
function Login() {
  return<>

 <nav className='navbar navbar bg-dark'><h1>login Form</h1></nav> 
    <div className="container mt-5">
    <div className="row">
           <div className="col md-4">
            <form className="">
                
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Please Enter Your Email"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-Control" placeholder="Enter Your Password"/>
                </div>
                <button className="btn btn-success mr-4">Login</button>
                <button className="btn btn-danger">Reset</button>
            </form>
           </div>
        </div>
    </div>
    </>
  
 }
   export default Login
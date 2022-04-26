import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <header >
        <div><h1 className='bg-primary'>Header</h1></div>      
     <nav className='navbar navbar-light bg-light navbar-expand-lg '>
     <Link to='#' className='navbar-brand'></Link> 
      <div className='collapse navbar-collapse'>
       <ul className='navbar-nav'>
        <li className='nav-item active'>
         <Link to='/Home' className='nav-link'>Home</Link>
         </li>
        <li className='nav-item active'>
         <Link to='/About' className='nav-link'>About</Link>
        </li>
        <li className='nav-item active'>
         <Link to='/Services' className='nav-link'>Services</Link>
        </li>
        <li className='nav-item active'>
         <Link to='/Contact' className='nav-link'>Contact</Link>
         </li>
         </ul>

         <ul className='navbar-nav ml-auto'>
         <li className='nav-item active'>
          <Link to='Register' className='nav-link' ><i className="fa-solid fa-right-to-bracket"></i>Register</Link>
         </li>
         <li className='nav-item active'>
          <Link to='/Login' className='nav-link'><i className="fa-solid fa-right-to-bracket"></i>Login</Link>
          </li>
          </ul>
       

      </div>


     </nav>
     </header>
    </div>
  )
}

export default Navbar
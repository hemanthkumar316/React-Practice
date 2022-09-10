import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
     <Link>React Router exp</Link>
     <div className='collapse navbar-collapse'>
     
   <ul className='navbar-nav ml-auto'>
    <li className='nav-item'>
     <Link to="/Home" className='nav-link'>Home</Link>
    </li>
    <li className='nav-item'>
     <Link to="/About" className='nav-link'>About</Link>
    </li>
    <li className='nav-item'>
     <Link to="/Dashboard" className='nav-link'>Dashboard</Link>
    </li>
   </ul> 
   
     </div>
     </nav>
    </>
  )
}

export default Navbar
/* import React from'react'
import {Link} from'react-router-dom'
let Navbar=()=>{
        return<>
         <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <Link to="Home">React Routing</Link>
            <div className='collapse navbar-collapse'>
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                    <Link to="/Home" className="nav-link">Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/About" className='nav-link'>About</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/Dashboard" className='nav-link'>Dashboard</Link>
                </li>
               
            </ul>
            </div>
            </nav> 
             </>
    }

export default Navbar */
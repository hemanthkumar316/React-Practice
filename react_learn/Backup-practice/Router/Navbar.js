import React from'react'
import {Link} from'react-router-dom'
class Navbar extends React.Component{
    render(){
        return<>
         <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <Link to="Home">React Routing</Link>
            <div className='collapse navbar-collapse'>
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                    <Link to="/Services" className="nav-link">Services</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/Contact" className='nav-link'>Contact</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/Sms" className='nav-link'>Sms</Link>
                </li>
               
            </ul>
            </div>
            </nav> 
             </>
    }
}
export default Navbar
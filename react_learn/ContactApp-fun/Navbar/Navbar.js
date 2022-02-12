import React from'react'
import {Link} from'react-router-dom'
let Navbar=()=>{
        return(
        <div>
        <nav className='navbar navbar  bg-dark '>
            <Link className="navbar-brand text-white" to="contact">React Contact App</Link>
        <div>
        <ul className='navbar-nav'>
            <li className='nav-item'>
                <Link to="contact" className='nav-Link text-warning'>Contacts</Link>
                </li>
                </ul>
        </div>
        </nav>
        </div>
        )
    }

export default Navbar
import React from'react'
import {Link} from'react-router-dom'
class Navbar extends React.Component{
    render(){
        return(
        <>
        <nav className='navbar navbar-dark bg-dark'>
            <Link className="navbar-brand" to="Contact">React Contact App</Link>
           <div>
               <ul className='navbar-nav'>
                   <li className='navbar-item'>
                       <Link to="/Contact" className="nav-link">Contacts</Link>
                        </li>
                  </ul>
           </div>
        </nav>
        </>
        )
    }
}
export default Navbar
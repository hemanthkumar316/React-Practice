import React from'react'
import{Link} from'react-router-dom'
class Navbar extends React.Component{
    render(){
        return<>
        <nav className='navbar navbar-dark bg-dark'>
    <Link className="navbar-brand" to="contact">React Contact App Using Class</Link>
    <div>
            <ul>
          <li className='navbar-item'>
              <Link to="/Contact" className='nav-link text-warning'>Contacts</Link>
          </li>
            </ul>
            </div>    
        </nav>
        </>
    }
}
export default Navbar
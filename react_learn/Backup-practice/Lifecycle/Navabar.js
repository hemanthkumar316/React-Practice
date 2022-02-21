import React from'react'
import { Link } from'react-router-dom'
class Navbar extends React.Component{
    render(){
        return<>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to='home' className="navbar-brand">React Class Component Life Cycle Methods</Link>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link to="message" className='nav-link'>Message</Link>
                </li>
                <li className='nav-item'>
                 <Link to='product' className='nav-link'>Product</Link>
                </li>
            </ul>

        </div>
        </nav>
        </>
    }
}
export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/barterLogo.png'
import './navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <Link to='/' className='nav-l'><img src={logo} className='app-logo' alt="" /></Link>
      </div>
      <div className='nav-link'>
        <ul>
        
          <Link to='/'><li>student ambassador</li></Link>
          <Link to='/'><li>support</li></Link>
          <Link to='login'><li>log in</li></Link>
          <Link to='signup'><li>create account</li></Link>
        </ul>

      </div>
      
    </div>
  )
}

export default Navbar
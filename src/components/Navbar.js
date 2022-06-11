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
          <li>student ambassador</li>
          <li>support</li>
          <li>log in</li>
          <li>create account</li>
        </ul>

      </div>
      
    </div>
  )
}

export default Navbar
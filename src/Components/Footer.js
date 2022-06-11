import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegCopyright } from "react-icons/fa";

import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-p'>
            <div><p><FaRegCopyright />2022 All rights reserved</p></div>
            <div className='p-last'><p>Built by <Link to='/'>SH-React Team 3</Link></p></div>
        </div>
        
    </div>
  )
}

export default Footer
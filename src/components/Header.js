import React from 'react'
import './header.css'
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
          <div className='icon-box'>
            <RiMoneyDollarCircleLine />
            <RiMoneyDollarCircleLine />
            <RiMoneyDollarCircleLine />
          </div>
          <div className='header-h'>
            <h4>What’s better than receiving your <strong>USD</strong> via Barter right now? Receiving your <strong>USD PLUS 5 NGN</strong> for every <strong>1 USD</strong> you receive!</h4>
          </div>
          <div className='header-link'>
            <Link to='/'>Learn More</Link>
          </div>
    </div>
  )
}

export default Header
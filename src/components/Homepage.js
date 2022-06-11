import React from 'react'
import Navbar from './Navbar'
import './homepage.css'
import { Link } from 'react-router-dom'
import googleplay from './images/google.png'
import appstore2 from './images/apple-logo1.png'
import Footer from './Footer'

const Homepage = () => {
  return (
    <div className='homepage'>
        <Navbar />
        <div className='homepage-box'>
          <div className='box-h1'>
            <h1>Be truly borderless</h1>
            </div>
          <div className='box-h2'>
            <h2>send and receive money globally. Create virtual dollar cards that work anywhere online.</h2>
          </div>
          <div className='hompage-buttons'>
            <div className='google-play'>
              <Link to='/'><img src={googleplay} alt='google play' /></Link>
            </div>
            <div className='app-store'>
              <Link to='/'><img src={appstore2} alt='app store' /></Link>
            </div>
          </div>
          <div className='circles'>
              <button className='big'><Link to='/'>&nbsp;</Link></button>
              <button className='small' ><Link to='/'>&nbsp;</Link></button>
          </div>
        </div>
        <Footer />

    </div>
  )
}

export default Homepage
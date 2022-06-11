import React from 'react'
import Navbar from './Navbar'
import './homepage.css'

const Homepage = () => {
  return (
    <div className='homepage'>
        <Navbar />
        <div className='homepage-box'>
          <div><h1></h1></div>
          <div><h2></h2></div>
          <div className='hompage-buttons'>
            <div className='google-play'></div>
            <div className='apple-store'></div>
          </div>

        </div>
        this is the Homepage containing the navba

    </div>
  )
}

export default Homepage
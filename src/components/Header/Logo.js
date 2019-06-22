import React from 'react'
import './Logo.scss'

function Logo() {
  return (
    <div className="logo">
      <div className='image'>
        <img src="https://placeimg.com/640/640/any" />
      </div>
      <div className="name">
        <h1><span className="firstname">VERN</span><span className="lastname">BRIGGS</span></h1>
        <h2>FRONT-END DEVELOPER / UX DESIGNER</h2>
      </div>
    </div>
  )
}

export default Logo
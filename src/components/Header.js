import React from 'react'
import './Header.scss'
import { FaGithub, FaBitbucket, FaPhone, FaEnvelope } from "react-icons/fa"

// TODO animate head to follow mouse cursor
// TODO animate in circled around head
// TODO slick animation in general

function Header() {
 return (
    <header>
      <div className="logo">Logo</div>
      <div className="links">
        <FaGithub />
        <FaBitbucket />
        <FaPhone />
        <FaEnvelope />
      </div>
    </header>
  )
}

export default Header
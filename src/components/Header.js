import React from 'react'
import Logo from './Header/Logo'
import './Header.scss'
import { FaGithub, FaBitbucket, FaPhone, FaEnvelope } from "react-icons/fa"

// TODO animate head to follow mouse cursor
// TODO animate in circled around head
// TODO slick animation in general

function Header() {
 return (
   <header>
     <div className='container'>
       <div className='inner'>
         <Logo />
         <div className='links'>
           <FaGithub />
           <FaBitbucket />
           <FaPhone />
           <FaEnvelope />
         </div>
       </div>
     </div>
   </header>
 )
}

export default Header
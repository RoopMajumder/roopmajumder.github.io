import React from 'react'
import logo from '../assets/logo.png'
import Hr from './Hr'
import igLogo from '../assets/instagram.svg'
import dcLogo from '../assets/discord.svg'
import { useState } from 'react'
import menu from '../assets/round-menu.svg'

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false)

  return (
    <>
      <div className='navbar'>
        <div className="navLogoCont">
          <img src={logo} alt="logo" />
        </div>
        <ul className={menuToggle?'mobile-nav desktop-nav':'desktop-nav'}>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#services">Services</a></li>
          {/* <li><a href="#blog">Blog</a></li> */}
          <li><a href="#contact">Contact me</a></li>
        </ul>
        <div className="socialLinks">
        <a href="https://www.instagram.com/roop_majumder5" target='_blank'><img src={igLogo} width={25}/></a>
        <a href="https://discord.gg/Wr7PVAptwp" target='_blank'><img src={dcLogo} width={25}/></a>
      </div>
      <img src={menu} alt="menu" className='menubar' width={30} onClick={() => {
        setMenuToggle(!menuToggle)
      }}/>
      </div>
      <Hr />
    </>
  )
}

export default Navbar

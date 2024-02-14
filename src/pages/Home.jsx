import React from 'react'
import logo from '../assets/logo.png'
import igLogo from '../assets/instagram.svg'
import dcLogo from '../assets/discord.svg'

const Home = (props) => {
  return (
    <div className='home' id={props.id}>
      <div className="logoCont">
        <img className='logo-main' src={logo} alt="me" />
      </div>
      <h1 className='homeTitle'>Hello, I'm Roop Majumder <span className='hiAnim'>👋</span></h1>
      <div className="socialLinks">
        {/* Add */}
        <a href="https://www.instagram.com/roop_majumder5" target='_blank'><img src={igLogo} width={25}/></a>
        <a href="https://discord.gg/Wr7PVAptwp" target='_blank'><img src={dcLogo} width={25}/></a>
      </div>
    </div>
  )
}

export default Home

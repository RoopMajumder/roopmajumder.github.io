import React from 'react'
import reactLogo from '../assets/react.svg'
import htmlLogo from '../assets/html-5.svg'
import cssLogo from '../assets/css-3.svg'
import figmaLogo from '../assets/figma.svg'
import nodejsLogo from '../assets/nodejs.svg'
import firebaseLogo from '../assets/firebase.svg'
// import framerMotionLogo from '../assets/framermotion.svg'

const Services = (props) => {
  return (
    <div className='services' id={props.id}>
      <h1 className='textCenter'>Services</h1>
      <div className="servicesCont">
        <div className="card">
            <div className="card-heading">
                <h2>Frontend Development</h2>
            </div>
            {/* <img src="https://raw.githubusercontent.com/RoopMajumder/musico/9b15967bd1e548f00c9c3e3ba0e32d9f696bf4b5/logo.svg" /> */}
            <div className="card-bottom">
                <p>Frontend Development with React, HTML, etc.</p>
                <div className="card-imgGroup">
                    <img src={reactLogo} width={70}/>
                    <span>+</span>
                    <img src={htmlLogo} width={50} />
                </div>
            </div>
        </div>

        <div className="card">
            <div className="card-heading">
                <h2>UI/UX Design</h2>
            </div>
            {/* <img src="https://raw.githubusercontent.com/RoopMajumder/musico/9b15967bd1e548f00c9c3e3ba0e32d9f696bf4b5/logo.svg" /> */}
            <div className="card-bottom">
                <p>Web Design using Figma and CSS with Animations.</p>
                <div className="card-imgGroup">
                    <img src={figmaLogo} width={70}/>
                    <span>+</span>
                    <img src={cssLogo} width={50} />
                    {/* <span>+</span>
                    <img src={framerMotionLogo} width={70} /> */}
                </div>
            </div>
        </div>

        <div className="card">
            <div className="card-heading">
                <h2>Backend Development</h2>
            </div>
            {/* <img src="https://raw.githubusercontent.com/RoopMajumder/musico/9b15967bd1e548f00c9c3e3ba0e32d9f696bf4b5/logo.svg" /> */}
            <div className="card-bottom">
                <p>Backend Development using Node.js and Firebase.</p>
                <div className="card-imgGroup">
                    <img src={nodejsLogo} width={70}/>
                    <span>+</span>
                    <img src={firebaseLogo} width={50} />
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Services

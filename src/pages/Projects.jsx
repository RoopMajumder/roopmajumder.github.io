import React from 'react'

const Projects = (props) => {
  return (
    <div className='projects' id={props.id}>
      <h1 className='textCenter'>Projects</h1>
      <div className="projectsCont">
        <div className="card">
            <img src="https://raw.githubusercontent.com/RoopMajumder/musico/9b15967bd1e548f00c9c3e3ba0e32d9f696bf4b5/logo.svg" />
            <div className="card-bottom">
                <h2>Musico</h2>
                <a href="https://roopmajumder.github.io/musico/#/" target='_blank'><button className='btn'>Visit</button></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

import React from 'react'

const Projects = (props) => {
  return (
    <div className='projects' id={props.id}>
      <h1 className='textCenter'>Projects</h1>
      <div className="projectsCont">
        <div className="card">
          <div className="card-header" style={{height: "50%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <img src="data:image/svg+xml,%3csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_20_2)'%3e%3ccircle%20cx='50'%20cy='50'%20r='50'%20fill='%238000FF'/%3e%3cpath%20d='M25.7799%2056.2431L28.257%2062.0719M32.1918%2044.3429L41.2745%2065.7152M39.4294%2034.3855L54.292%2069.3584M53.2726%2039.9717L59.0525%2053.5723M60.5101%2030.0144L71.2443%2055.2726M74.3533%2035.6006L76.8305%2041.4294'%20stroke='white'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_20_2'%3e%3crect%20width='100'%20height='100'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" height={150} width={150} />
          </div>
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

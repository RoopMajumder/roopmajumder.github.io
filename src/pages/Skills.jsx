import React from 'react'
import { useRef } from 'react'
import { useIsVisible } from '../hooks/useIsVisible'

const Skills = (props) => {
    const b901 = useRef(null)
    const b751 = useRef(null)
    const b951 = useRef(null)
    const b902 = useRef(null)
    const b931 = useRef(null)
    const vb901 = useIsVisible(b901)
    const vb751 = useIsVisible(b751)
    const vb951 = useIsVisible(b951)
    const vb902 = useIsVisible(b902)
    const vb931 = useIsVisible(b931)

  return (
    <div className="skills" id={props.id}>
      <h1 className="textCenter">Skills</h1>
      <div className="skillsCont">
        <div className="skillsSingle">
            <h3>HTML</h3>
            <div className="bar">
                <div ref={b901} className={vb901 ? "filled f90 host" : "filled f90"} style={{ width: '90%' }}></div>
            </div>
            <h3>90%</h3>
        </div>
        <div className="skillsSingle">
            <h3>CSS</h3>
            <div className="bar">
                <div ref={b751} className={vb751 ? "filled f75 host" : "filled f75"} style={{ width: '75%' }}></div>
            </div>
            <h3>75%</h3>
        </div>
        <div className="skillsSingle">
            <h3>JavaScript</h3>
            <div className="bar">
                <div ref={b951} className={vb951 ? "filled f95 host" : "filled f95"} style={{ width: '95%' }}></div>
            </div>
            <h3>95%</h3>
        </div>
        <div className="skillsSingle">
            <h3>React</h3>
            <div className="bar">
                <div ref={b902} className={vb902 ? "filled f90-2 host" : "filled f90-2"} style={{ width: '90%' }}></div>
            </div>
            <h3>90%</h3>
        </div>
        <div className="skillsSingle">
            <h3>UI/UX</h3>
            <div className="bar">
                <div ref={b931} className={vb931 ? "filled f93 host" : "filled f93"} style={{ width: '93%' }}></div>
            </div>
            <h3>93%</h3>
        </div>
      </div>
    </div>
  )
}

export default Skills

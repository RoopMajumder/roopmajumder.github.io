import React from 'react'
import { useState } from 'react'
import { db } from '../config/firebase'
import { collection, addDoc } from "firebase/firestore"; 

const Contact = (props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [alert, setAlert] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(name==="") return setAlert("<span style='color:red'>Missing Fields!</span>")
        if(email==="") return setAlert("<span style='color:red'>Missing Fields!</span>")
        if(message==="") return setAlert("<span style='color:red'>Missing Fields!</span>")
        try {
            const docRef = await addDoc(collection(db, "ContactMessages"), {
                name,
                email,
                message,
            });
            setAlert("<span style='color:lime'>Form Submitted Successfully. Message ID: <br><b>"+ docRef.id + "</b></span>")
            setName("")
            setEmail("")
            setMessage("")
        } catch (e) {
            setAlert("Some Error Occured...")
        }
    }

  return (
    <div className='contact' id={props.id}>
      <h1 className='textCenter'>Contact Me</h1>
      <div className="contactCont">
        <div className="left">
            <h3><a href="mailto:roopmajumder5@gmail.com" target='_blank' style={{ textDecoration: "none", color: "white" }}><span className='mail'>Email:</span> <b className='mail'>roopmajumder5@gmail.com</b></a></h3>
        </div>
        <div className="right">
            <form>
                <input type="text" placeholder='Name...' value={name} onChange={(e) => {setName(e.target.value)}} required/>
                <input type="email" placeholder='Email...' value={email} onChange={(e) => {setEmail(e.target.value)}} required/>
                <textarea cols="50" rows="10" placeholder='Enter your Message...' value={message} onChange={(e) => {setMessage(e.target.value)}} style={{width: "424px", height: "236px", resize: "none"}} required></textarea>
                <button type="submit" className='btn' onClick={handleSubmit}>Send</button>
            </form>
            <div className="alert">
                <p dangerouslySetInnerHTML={{__html: alert}} style={{color: "#EAE0D5", padding: '10px'}}></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

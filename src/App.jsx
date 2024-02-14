import './App.css'
import Footer from './components/Footer'
import Hr from './components/Hr'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Skills from './pages/Skills'

function App() {
  return (
    <div className='main'>
      <Navbar />
      <Home id="home"/>
      <Hr />
      <Skills id="skills" />
      <Hr />
      <Projects id="projects" />
      <Hr />
      <Services id="services" />
      <Hr />
      <Contact id="contact" />
      <Footer />
    </div>
  )
}

export default App

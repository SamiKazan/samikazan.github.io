import './App.css'
import { AboutMePage } from './components/AboutMe.js'
import { Header } from './components/Header.js'
import { ProjectsPage } from './components/Projects.js'
import { useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  return (
    <>
      <Header setActiveSection={setActiveSection} activeSection={activeSection}/>
      <div className="pt-20">
        {activeSection === 'about' && <AboutMePage/>}
        {activeSection === 'projects' && <ProjectsPage/>}
      </div>
    </>
  )
}

export default App

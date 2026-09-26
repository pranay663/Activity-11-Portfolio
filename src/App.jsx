import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const views = {
    home: <Hero onNavigate={setActiveSection} />,
    about: <About />,
    skills: <Skills />,
    education: <Education />,
    projects: <Projects />,
    contact: <Contact />,
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />

      <main className="tab-view" key={activeSection}>
        {views[activeSection]}
      </main>

      <Footer onNavigate={setActiveSection} />
    </div>
  )
}

export default App

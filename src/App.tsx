import './App.css'
import Experience from './pages/experience'
import FooterSection from './pages/footer'
import Hero from "./pages/hero"
import Project from './pages/project'
import Skill from './pages/skil'
import { Navbar } from './views/navbar'

function App() {
  return (
    <div className="relative w-screen overflow-x-hidden">
      {/* Navbar dengan z-index lebih tinggi */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      {/* Hero section - full height & width */}
      <section id="home" className="relative w-full h-[100vh] overflow-hidden">
        <Hero />
      </section>
      
      {/* Experience section - full height & width dengan scroll margin */}
      <section 
        id="experience" 
        className="relative w-full h-[100vh] flex flex-col justify-center overflow-visible"
        style={{ scrollMarginTop: '80px' }}
      >
        <div className="h-full w-full py-20 flex items-center">
          <Experience/>
        </div>
      </section>

      {/* Project section - full height & width dengan scroll margin */}
      <section 
        id="project" 
        className="relative w-full h-[100vh] flex flex-col justify-center overflow-visible z-20"
        style={{ scrollMarginTop: '80px' }}
      >
        <div className="h-full w-full py-20 flex items-center">
          <Project />
        </div>
      </section>

      {/* Skill section - full height & width dengan scroll margin */}
      <section 
        id="skill" 
        className="relative w-full h-[100vh] flex flex-col justify-center overflow-visible z-0"
        style={{ scrollMarginTop: '80px' }}
      >
        <div className="h-full w-full py-20 flex flex-col justify-between">
          <div className="flex-grow flex items-center">
            <Skill />
          </div>
          <FooterSection />
        </div>
      </section>
    </div>
  )
}

export default App
import './App.css'
import Experience from './pages/experience'
import FooterSection from './pages/footer'
import Hero from "./pages/hero"
import Project from './pages/project'
import Skill from './pages/skil'
import { Navbar } from './views/navbar'

function App() {
  return (
    <div className="relative h-screen w-screen overflow-x-hidden">
      {/* Hero mengisi seluruh layar dan menjadi interaktif */}
      <div id="home" className="relative w-full h-full overflow-y-auto overflow-x-hidden ">
        <Hero />
      </div>
      
      {/* Navbar dengan z-index lebih tinggi tapi hanya header yang dapat diklik */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div id="experience">
        <Experience/>
      </div>
      {/* Skill section dengan width terbatas */}
      <div id="project" className="w-full overflow-x-hidden=">
        <Project />
      </div>

      <div id="skill"  className="relative z-0">
        <Skill />
        <FooterSection />
      </div>

    </div>
  )
}

export default App
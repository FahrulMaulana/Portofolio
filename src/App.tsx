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
      
      {/* Hero mengisi seluruh layar */}
      <div id="home" className="relative w-full h-screen overflow-hidden">
        <Hero />
      </div>
      
      {/* Experience dengan padding-top lebih besar untuk memberi ruang dari navbar */}
      <div id="experience" className="w-full overflow-hidden pt-28 pb-20">
        <Experience/>
      </div>

      {/* Project section dengan padding-top yang cukup */}
      <div id="project" className="relative z-10 w-full overflow-x-hidden pt-28">
        <Project />
      </div>

      {/* Skill section dengan padding-top yang cukup */}
      <div id="skill" className="relative z-0 pt-28">
        <Skill />
        <FooterSection />
      </div>

    </div>
  )
}

export default App
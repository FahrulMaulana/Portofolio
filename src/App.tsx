import './App.css'
import Expirient from './pages/expirient'
import FooterSection from './pages/footer'
import Hero from "./pages/hero"
import Project from './pages/project'
import Skill from './pages/skil'
import Experience from './pages/experience'
import { Navbar } from './views/navbar'

function App() {
  return (
    <div className="portfolio-shell">
      <div className="portfolio-bg-layer" aria-hidden="true">
        <div className="portfolio-bg-grid" />
        <div className="portfolio-bg-beam portfolio-bg-beam--a" />
        <div className="portfolio-bg-beam portfolio-bg-beam--b" />
        <div className="portfolio-bg-glow portfolio-bg-glow--one" />
        <div className="portfolio-bg-glow portfolio-bg-glow--two" />
        <div className="portfolio-bg-glow portfolio-bg-glow--three" />
        <div className="portfolio-bg-vignette" />
      </div>

      <div className="relative z-10 w-screen overflow-x-hidden">
        {/* Navbar dengan z-index lebih tinggi */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>

        {/* Hero section */}
        <div id="home" className="relative w-full pb-86 md:pb-86 lg:pb-86">
          <Hero />
        </div>

        {/* Experience dengan padding-top lebih besar untuk memberi ruang dari navbar */}
        <div id="experience" className="w-full overflow-hidden ">
            <Expirient/>
        </div>

        <div id="experience" className="w-full overflow-hidden ">
            <Experience/>
        </div>

        {/* Project section dengan tinggi lebih besar dan padding-top yang cukup */}
        <div id="project" className="relative z-10 w-full overflow-x-hidden">
          <Project />
        </div>

        {/* Skill section dengan padding-top yang cukup */}
        <div id="skill" className="relative z-0">
          <Skill />
          <FooterSection />
        </div>
      </div>
    </div>
  )
}

export default App
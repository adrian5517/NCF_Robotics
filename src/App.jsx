import Hero from '../components/HeroPage';
import About from '../components/AboutSection';
import Achievements from '../components/AchievementsSection';
import Footer from '../components/Footer';
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <About />
      <Achievements />
      <Footer />
      <Analytics />
    </div>
  )
}

export default App

import Hero from '../components/HeroPage';
import About from '../components/AboutSection';
import Achievements from '../components/AchievementsSection';

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <About />
      <Achievements />
    </div>
  )
}

export default App

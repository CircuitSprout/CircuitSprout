import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    <div className="app">
      <ParticleBackground />
      <div className="container">
        <Navigation />
        <Header />
        <Hero />
        <About />
        <Contact />
      </div>
    </div>
  )
}

export default App

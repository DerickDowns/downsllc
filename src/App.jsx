import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Coverage from './components/Coverage'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fafcff' }}>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

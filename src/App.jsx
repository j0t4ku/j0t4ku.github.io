import React from 'react';
import {
  About,
  Contact,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills,
} from './components';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
  )
}

export default App

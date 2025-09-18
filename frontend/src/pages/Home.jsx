import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Features from '../components/Features';
import Contact from '../components/Contact';

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Features />
      <Contact/>
    </div>
  );
}

export default Home;

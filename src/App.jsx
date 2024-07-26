import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <WorkExperience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

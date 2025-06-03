import React from 'react';
import './App.css';
import Navbar from './components/navbar-component/Navbar';
import Home from './components/home-component/Home';
import Footer from './components/footer-component/Footer';
import SkillsShowcase from './components/skills component/SkillsShowcase';
import Contact from './components/contact/Contact';
import About from './components/about-components/About';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <SkillsShowcase />
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;

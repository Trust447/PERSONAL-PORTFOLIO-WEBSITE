import React from 'react';
import './App.css';
import Navbar from './components/navbar-component/Navbar';
import Home from './components/home-component/Home';
import Footer from './components/footer-component/Footer';
import SkillsShowcase from './components/home-component/SkillsShowcase';
import Contact from './components/home-component/contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <SkillsShowcase />
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar-component/Navbar';
import Home from './components/home-component/Home';
import About from './components/about-components/About';
// import Projects from './components/projects-component/Projects';
import Footer from './components/footer-component/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

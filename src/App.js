import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import BackToTopButton  from './components/BackToTopButton';
import React, { useState, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [scrolled, setScrolled] = useState(false);

    // Update scroll state when the page is scrolled
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);  // Add class when scrolling more than 50px
        } else {
          setScrolled(false); // Remove class when scrolled back to top
        }
      };
  
      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup event listener on component unmount
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <div className="App">
      <Router>
      <div className={`container-md-fluid container-lg  ${scrolled ? 'scrolled-conainer' : ''}`}>
        <Navbar/>
        <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/projects" element={<Projects/>} />
         <Route path="/resume" element={<Resume/>} />
        </Routes>
        </div>
      </Router>
     <BackToTopButton/>
    </div>
  );
}

export default App;

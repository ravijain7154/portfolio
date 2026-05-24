import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTopButton  from './components/BackToTopButton';
import Seo from './components/Seo';
import React, { useState, useEffect } from "react";
import { HOME_KEYWORDS, createHomeSchema } from "./seo";

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
      <div className={`main-container container-md-fluid container-lg  ${scrolled ? 'scrolled-conainer' : ''} px-0`}>
        <Navbar/>
        <Routes>
         <Route path="/" element={<><Seo
            title="Ravi Jain | Freelance Web, Shopify, React & Full Stack Developer in Indore, India"
            description="Ravi Jain is a freelance web developer, Shopify developer, full stack developer, and React developer in Indore, India building custom stores, business websites, and SEO-friendly digital experiences."
            path="/"
            keywords={HOME_KEYWORDS}
            schema={createHomeSchema}
          /><Home/></>} />
         <Route path="/projects" element={<><Seo
            title="Projects | Ravi Jain Full Stack and Web Developer in Indore"
            description="Browse Shopify, React, WordPress, and custom web development projects delivered by Ravi Jain, a full stack and web developer based in Indore, India."
            path="/projects"
            keywords={["Ravi Jain portfolio", "web developer portfolio", "full stack developer Indore", "Shopify developer Indore", "React developer Indore"]}
          /><Projects/></>} />
         <Route path="/resume" element={<><Seo
            title="Resume | Ravi Jain Full Stack Developer in Indore"
            description="View the resume of Ravi Jain, a full stack developer in Indore with experience in Shopify, React, Node.js, ecommerce, and SEO-focused websites."
            path="/resume"
            keywords={["Ravi Jain resume", "full stack developer resume", "web developer resume", "Shopify developer resume", "full stack developer Indore"]}
          /><Resume/></>} />
        </Routes>
      </div>
      <Footer />
      </Router>
     <BackToTopButton/>
    </div>
  );
}

export default App;

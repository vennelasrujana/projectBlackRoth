import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import ServicesGrid from './components/ServicesGrid';
import CalloutSection from './components/CalloutSection';
import VideoCard from './components/VideoCard';
import Footer from './components/Footer';
import RDPage from './components/RDPage';
import UIUXPage from './components/UIUXPage';
import CyberSecurityPage from './components/CyberSecurityPage';
import CloudServicesPage from './components/CloudServicesPage';
import AboutUs from './components/AboutUs';

function App() {
  const [heroTitle, setHeroTitle] = useState('');

  useEffect(() => {
    // AI Fuel typewriter effect
    const text = "AI Fuel. The Future Engine.";
    let index = 0;
    const step = 2;   
    const speed = 200; 

    function typeEffect() {
      if (index < text.length) {
        setHeroTitle(text.substring(0, index + step));
        index += step;
        setTimeout(typeEffect, speed);
      }
    }

    // Start typewriter effect
    typeEffect();

    // Fade-up and Slide-in animations using IntersectionObserver
    const fadeElements = document.querySelectorAll('.fade-up');
    const slideElements = document.querySelectorAll('.slide-text');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    fadeElements.forEach(el => observer.observe(el));
    slideElements.forEach(el => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero heroTitle={heroTitle} />
              <Carousel />
              <CalloutSection />
              <ServicesGrid />
              <AboutUs />
              <VideoCard />
              <Footer />
            </>
          } />
          <Route path="/rd" element={<RDPage />} />
          <Route path="/uiux" element={<UIUXPage />} />
          <Route path="/cyber-security" element={<CyberSecurityPage />} />
          <Route path="/cloud-services" element={<CloudServicesPage />} />
          <Route path="/mobile-development" element={<div>Mobile Development Page</div>} />
          <Route path="/ai-ml" element={<div>AI & ML Page</div>} />
          <Route path="/data-science" element={<div>Data Science Page</div>} />
          <Route path="/data-visualization" element={<div>Data Visualization Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

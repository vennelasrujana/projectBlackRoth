import React, { useState, useEffect, useRef } from 'react';

const Carousel = () => {
  const [activeTab, setActiveTab] = useState(0);
  const carouselRef = useRef(null);

  const carouselData = [
    {
      id: 0,
      title: "Research & Development",
      subtitle: "AI-powered Integrated Fleet Management →",
      image: "assets/R&D.jpg"
    },
    {
      id: 1,
      title: "UUV Coordination",
      subtitle: "Submarine Operations and Health Management System →",
      image: "assets/satelite.jpg"
    },
    {
      id: 2,
      title: "Autonomous Navigation & Collision Avoidance",
      subtitle: "Satellite Operations & Earth Analytics Platform →",
      image: "assets/Earth.jpg"
    },
    {
      id: 3,
      title: "Edge Computing",
      subtitle: "AI-Powered Data Center Operations Platform →",
      image: "assets/edge.jpg"
    },
    {
      id: 4,
      title: "IoT Integration",
      subtitle: "Smart Skyscraper AI Management Platform →",
      image: "assets/network2.jpg"
    }
  ];

  const showSlide = (index) => {
    setActiveTab(index);
  };

  const goToPrevious = () => {
    setActiveTab(prev => prev > 0 ? prev - 1 : carouselData.length - 1);
  };

  const goToNext = () => {
    setActiveTab(prev => prev < carouselData.length - 1 ? prev + 1 : 0);
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselData.length]);

  // Update tab classes and track active image src when activeTab changes
  useEffect(() => {
    const tabs = document.querySelectorAll('.carousel-tabs span');
    
    if (tabs.length > 0) {
      // Remove active and zoom classes from all tabs
      tabs.forEach(tab => {
        tab.classList.remove('active', 'zoom-active');
      });

      // Add active and zoom classes to current tab
      const currentTab = tabs[activeTab];
      if (currentTab) {
        currentTab.classList.add('active', 'zoom-active');
      }
    }

    // Track current image src
    const currentImageSrc = carouselData[activeTab] ? carouselData[activeTab].image : undefined;
    if (currentImageSrc) {
      // Log for debugging/analytics hookup
      console.log('Carousel active image:', currentImageSrc);
      // Emit a DOM CustomEvent that other parts of the app can listen to
      window.dispatchEvent(new CustomEvent('carousel:imageChange', {
        detail: { index: activeTab, src: currentImageSrc }
      }));
    }
  }, [activeTab]);

  return (
    <div className="palantir-carousel-container">
      {/* Tab Controls */}
      <div className="carousel-tabs">
        {carouselData.map((item, index) => (
          <span
            key={item.id}
            className={`tab ${activeTab === index ? 'active zoom-active' : ''}`}
            data-tab={index}
            onClick={() => showSlide(index)}
          >
            {item.title}
          </span>
        ))}
      </div>

      {/* Slides */}
      <div 
        ref={carouselRef}
        id="carouselExampleControls" 
        className="carousel slide"
      >
        <div className="carousel-inner">
          {carouselData.map((item, index) => (
            <div 
              key={item.id} 
              className={`carousel-item ${activeTab === index ? 'active' : ''}`}
              style={{ 
                display: activeTab === index ? 'block' : 'none',
                transition: 'opacity 0.5s ease-in-out'
              }}
            >
              <img src={item.image} className="d-block w-100" alt={item.title} />
              <div className="slide-overlay">
                <h4>{item.title}</h4>
                <h2>{item.subtitle}</h2>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Buttons */}
        <button 
          className="carousel-control-prev" 
          type="button" 
          onClick={goToPrevious}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button 
          className="carousel-control-next" 
          type="button" 
          onClick={goToNext}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

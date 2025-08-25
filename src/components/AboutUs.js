import React, { useEffect, useRef } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const storyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when story section comes into view
            const storyContent = entry.target.querySelector('.story-content');
            const storyTitle = entry.target.querySelector('.story-title');
            const storyText1 = entry.target.querySelector('.story-text-1');
            const storyText2 = entry.target.querySelector('.story-text-2');
            const storyImage = entry.target.querySelector('.story-image');

            if (storyContent) storyContent.classList.add('animate');
            if (storyTitle) storyTitle.classList.add('animate');
            if (storyText1) storyText1.classList.add('animate');
            if (storyText2) storyText2.classList.add('animate');
            if (storyImage) storyImage.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (storyRef.current) {
      observer.observe(storyRef.current);
    }

    return () => {
      if (storyRef.current) {
        observer.unobserve(storyRef.current);
      }
    };
  }, []);
  return (
    <section className="about-us">
      <div className="about-container">
        <div className="about-header">
          <h2>About <span className="black-roth">BlackRoth</span></h2>
          <p className="about-subtitle">
            A dynamic startup pioneering the future of technology through innovation, fresh perspectives, and unwavering commitment to excellence.
          </p>
        </div>

        <div className="about-content">
          <div className="about-grid">
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                To empower businesses with cutting-edge technology solutions that drive growth, 
                efficiency, and competitive advantage in an ever-evolving digital landscape.
              </p>
            </div>

            <div className="about-card">
              
              <h3>Our Vision</h3>
              <p>
                To be the leading technology partner that transforms ideas into reality, 
                creating sustainable digital solutions that shape the future of industries.
              </p>
            </div>

            <div className="about-card">
              
              <h3>Our Values</h3>
              <p>
                Innovation, integrity, collaboration, and excellence guide everything we do. 
                We believe in building lasting partnerships based on trust and mutual success.
              </p>
            </div>
          </div>

          <div className="about-story" ref={storyRef}>
            <div className="story-content">
              <h3 className="story-title">Our Story</h3>
              <p className="story-text-1">
              <span className="black-roth">BlackRoth</span> was founded with a passion for technology and a bold vision for the future. 
              We are dedicated to redefining the technology landscape through creativity, expertise, and an 
              unwavering focus on delivering exceptional value to our clients.
              </p>
              <p className="story-text-2">
              Our approach combines strategic insight, agile execution, and advanced solutions 
              that empower organizations to overcome complex challenges and position themselves for 
              long-term success in an ever-evolving digital world.
              </p>
            </div>
            <div className="story-image">
              <img src="assets/blackroth.jpg" alt="BlackRoth Team" />
            </div>
          </div>

          <div className="about-expertise">
            <h3>Why Choose BlackRoth?</h3>
            <div className="expertise-grid">
              <div className="expertise-item">
                <h4>Deep Technical Expertise</h4>
                <p>Our team comprises certified professionals with extensive experience across multiple technologies and industries.</p>
              </div>
              <div className="expertise-item">
                <h4>Innovation-Driven Approach</h4>
                <p>We stay ahead of technology trends, ensuring our solutions are future-proof and cutting-edge.</p>
              </div>
              <div className="expertise-item">
                <h4>Client-Centric Focus</h4>
                <p>Your success is our priority. We work closely with you to understand your unique challenges and goals.</p>
              </div>
              <div className="expertise-item">
                <h4>Startup Agility</h4>
                <p>Fast-paced, flexible approach that adapts quickly to changing requirements and delivers results faster than traditional firms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './UIUXPage.css';

const UIUXPage = () => {
  return (
    <>
      <Navbar />
      <div className="uiux-page">
        <div className="uiux-container">
          <div className="uiux-header">
            <h1>UI/UX Design</h1>
            <p className="uiux-subtitle">
              We craft intuitive, engaging, and user-centric digital experiences that drive customer satisfaction and business success. Our UI/UX design services blend creativity with usability, ensuring that every interaction is meaningful and every interface is optimized for performance.
            </p>
          </div>

          <div className="uiux-content">
            <section className="uiux-section">
              <h2>What We Offer</h2>
              
              <div className="uiux-service">
                <h3>User Research & Persona Development</h3>
                <p>We begin by understanding your users—their needs, behaviors, and pain points. Through interviews, surveys, and analytics, we create detailed personas that guide design decisions.</p>
              </div>

              <div className="uiux-service">
                <h3>Information Architecture & Wireframing</h3>
                <p>We organize content and functionality into clear, logical structures. Wireframes help visualize layout and navigation before visual design begins.</p>
              </div>

              <div className="uiux-service">
                <h3>Visual Design & Branding</h3>
                <p>Our designers create visually appealing interfaces that align with your brand identity. We focus on typography, color schemes, iconography, and layout to ensure consistency and impact.</p>
              </div>

              <div className="uiux-service">
                <h3>Interaction Design & Prototyping</h3>
                <p>We design interactive elements that enhance usability and engagement. Clickable prototypes allow stakeholders to experience the flow and functionality before development.</p>
              </div>

              <div className="uiux-service">
                <h3>Usability Testing & Iteration</h3>
                <p>We test designs with real users to identify friction points and improve the experience. Feedback-driven iterations ensure the final product is intuitive and effective.</p>
              </div>

              <div className="uiux-service">
                <h3>Responsive & Accessible Design</h3>
                <p>Our designs work seamlessly across devices and meet accessibility standards (WCAG), ensuring inclusivity for all users.</p>
              </div>
            </section>

            <section className="uiux-section">
              <h2>Tools & Technologies</h2>
              <div className="tools-grid">
                <div className="tool-category">
                  <h4>Design Tools</h4>
                  <p>Figma, Adobe XD, Sketch</p>
                </div>
                <div className="tool-category">
                  <h4>Prototyping</h4>
                  <p>InVision, Axure RP</p>
                </div>
                <div className="tool-category">
                  <h4>Collaboration & Testing</h4>
                  <p>Miro, Maze (for testing)</p>
                </div>
                <div className="tool-category">
                  <h4>Development Handoff</h4>
                  <p>HTML/CSS for design handoff</p>
                </div>
                <div className="tool-category">
                  <h4>Accessibility</h4>
                  <p>Accessibility tools like Stark and WAVE</p>
                </div>
              </div>
            </section>

            {/* <section className="uiux-section">
              <h2>Example Projects</h2>
              
              <div className="uiux-project">
                <h3>Healthcare Portal UI Redesign</h3>
                <p>Improved patient engagement by simplifying navigation, enhancing readability, and integrating appointment booking features.</p>
              </div>

              <div className="uiux-project">
                <h3>E-commerce Mobile App UX Optimization</h3>
                <p>Increased conversion rates by streamlining the checkout process, adding personalized product recommendations, and improving load times.</p>
              </div>

              <div className="uiux-project">
                <h3>SaaS Dashboard Design for Analytics Platform</h3>
                <p>Designed a clean, data-rich interface with customizable widgets, real-time updates, and intuitive filters for enterprise users.</p>
              </div>

              <div className="uiux-project">
                <h3>FinTech App Onboarding Experience</h3>
                <p>Reduced drop-off rates by creating a step-by-step onboarding flow with tooltips, progress indicators, and contextual help.</p>
              </div>
            </section>

            <section className="uiux-section">
              <h2>Why Choose Us?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h4>User-Centered Approach</h4>
                  <p>Every design decision is backed by user insights.</p>
                </div>
                <div className="feature-item">
                  <h4>Business-Focused Outcomes</h4>
                  <p>We align design with your KPIs and goals.</p>
                </div>
                <div className="feature-item">
                  <h4>Agile Collaboration</h4>
                  <p>Designers work closely with developers and stakeholders.</p>
                </div>
                <div className="feature-item">
                  <h4>Scalable Design Systems</h4>
                  <p>We build reusable components for long-term growth.</p>
                </div>
              </div>
            </section> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UIUXPage;

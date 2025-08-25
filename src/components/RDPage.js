import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './RDPage.css';

const RDPage = () => {
  return (
    <>
      <Navbar />
      <div className="rd-page">
        <div className="rd-container">
          <div className="rd-header">
            <h1>Research & Development (R&D)</h1>
            <p className="rd-subtitle">
              Innovation begins with exploration. Our R&D services are designed to help businesses unlock new possibilities, validate ideas, and build future-ready solutions. We combine scientific rigor with creative thinking to deliver impactful outcomes.
            </p>
          </div>

          <div className="rd-content">
            <section className="rd-section">
              <h2>What We Offer:</h2>
              
              <div className="rd-service">
                <h3>Technology Exploration & Trend Analysis</h3>
                <p>Stay ahead of the curve by identifying emerging technologies, market shifts, and disruptive innovations. We help you evaluate their relevance and potential impact on your business.</p>
              </div>

              <div className="rd-service">
                <h3>Feasibility Studies</h3>
                <p>Before investing in full-scale development, we conduct thorough feasibility studies to assess technical viability, cost-effectiveness, and scalability of your ideas.</p>
              </div>

              <div className="rd-service">
                <h3>Rapid Prototyping & Proof-of-Concepts (PoCs)</h3>
                <p>Transform ideas into working models quickly. Our agile prototyping approach allows you to test functionality, gather feedback, and refine concepts before full development.</p>
              </div>

              <div className="rd-service">
                <h3>Innovation Labs & Custom Experiments</h3>
                <p>We set up dedicated innovation labs to experiment with new tools, frameworks, and methodologies tailored to your industry and goals.</p>
              </div>

              <div className="rd-service">
                <h3>Intellectual Property (IP) Support</h3>
                <p>We assist in identifying patentable innovations, preparing documentation, and navigating the IP landscape to protect your R&D investments.</p>
              </div>

              <div className="rd-service">
                <h3>Collaboration with Academia & Industry Experts</h3>
                <p>We partner with universities, research institutions, and domain specialists to bring cutting-edge insights and collaborative innovation to your projects.</p>
              </div>
            </section>

            <section className="rd-section">
              <h2>Industries We Serve:</h2>
              <div className="industries-grid">
                <div className="industry-item">Healthcare & Life Sciences</div>
                <div className="industry-item">Manufacturing & Industrial Automation</div>
                <div className="industry-item">FinTech & Banking</div>
                <div className="industry-item">Retail & Consumer Goods</div>
                <div className="industry-item">Energy & Sustainability</div>
                <div className="industry-item">Telecommunications & Media</div>
              </div>
            </section>

            <section className="rd-section">
              <h2>Why Our R&D Stands Out:</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h4>Cross-Disciplinary Expertise</h4>
                  <p>We blend engineering, data science, and business strategy.</p>
                </div>
                <div className="feature-item">
                  <h4>Agile Innovation Cycles</h4>
                  <p>Fast iterations with measurable outcomes.</p>
                </div>
                <div className="feature-item">
                  <h4>Scalable Solutions</h4>
                  <p>From lab-scale experiments to enterprise-grade deployments.</p>
                </div>
                <div className="feature-item">
                  <h4>Client-Centric Focus</h4>
                  <p>Your vision drives our research priorities.</p>
                </div>
              </div>
            </section>

            <section className="rd-section">
              <h2>R&D Case Studies & Innovations:</h2>
              
              <div className="rd-case-study">
                <h3>🧠 AI-Powered Predictive Maintenance System</h3>
                <p><strong>Industry:</strong> Manufacturing</p>
                <p><strong>Objective:</strong> Reduce equipment downtime and optimize maintenance schedules.</p>
                <p><strong>R&D Focus:</strong></p>
                <ul>
                  <li>Developed machine learning models to predict equipment failures.</li>
                  <li>Integrated IoT sensors for real-time data collection.</li>
                  <li>Created dashboards for maintenance teams with actionable insights.</li>
                </ul>
              </div>

              <div className="rd-case-study">
                <h3>🩺 Smart Health Monitoring Wearable</h3>
                <p><strong>Industry:</strong> Healthcare</p>
                <p><strong>Objective:</strong> Enable continuous health tracking for chronic patients.</p>
                <p><strong>R&D Focus:</strong></p>
                <ul>
                  <li>Designed biosensors to monitor vitals like heart rate, oxygen levels, and ECG.</li>
                  <li>Built a mobile app with real-time alerts and health analytics.</li>
                  <li>Conducted clinical trials to validate accuracy and usability.</li>
                </ul>
              </div>

              <div className="rd-case-study">
                <h3>🌐 Next-Gen Cloud Optimization Framework</h3>
                <p><strong>Industry:</strong> IT & Cloud Services</p>
                <p><strong>Objective:</strong> Improve cloud resource utilization and reduce costs.</p>
                <p><strong>R&D Focus:</strong></p>
                <ul>
                  <li>Researched dynamic workload balancing algorithms.</li>
                  <li>Developed a cloud orchestration tool using Kubernetes and Terraform.</li>
                  <li>Implemented AI-based cost prediction models.</li>
                </ul>
              </div>

              <div className="rd-case-study">
                <h3>🛒 AI-Based Customer Behavior Prediction Engine</h3>
                <p><strong>Industry:</strong> Retail & E-commerce</p>
                <p><strong>Objective:</strong> Enhance personalization and increase conversion rates.</p>
                <p><strong>R&D Focus:</strong></p>
                <ul>
                  <li>Analyzed customer interaction data across platforms.</li>
                  <li>Built recommendation engines using deep learning.</li>
                  <li>A/B tested personalization strategies to optimize ROI.</li>
                </ul>
              </div>

              <div className="rd-case-study">
                <h3>⚡ Green Energy Optimization Platform</h3>
                <p><strong>Industry:</strong> Energy & Sustainability</p>
                <p><strong>Objective:</strong> Maximize efficiency of renewable energy sources.</p>
                <p><strong>R&D Focus:</strong></p>
                <ul>
                  <li>Modeled solar and wind energy production patterns.</li>
                  <li>Developed smart grid integration algorithms.</li>
                  <li>Simulated energy storage and distribution scenarios.</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RDPage;

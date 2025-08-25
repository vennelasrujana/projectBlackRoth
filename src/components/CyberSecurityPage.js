import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './CyberSecurityPage.css';

const CyberSecurityPage = () => {
  return (
    <>
      <Navbar />
      <div className="cyber-page">
        <div className="cyber-container">
          <div className="cyber-header">
            <h1>Cybersecurity & Compliance</h1>
            <p className="cyber-subtitle">
              In today's digital landscape, protecting sensitive data and ensuring regulatory compliance are critical to business success. Our Cybersecurity & Compliance services are designed to safeguard your infrastructure, applications, and data while helping you meet industry-specific legal and regulatory standards.
            </p>
          </div>

          <div className="cyber-content">
            <section className="cyber-section">
              <h2>What We Offer</h2>
              
              <div className="cyber-service">
                <h3>🛡️ Security Audits & Risk Assessments</h3>
                <p>We perform in-depth evaluations of your IT environment to identify vulnerabilities, assess risks, and recommend mitigation strategies.</p>
                <ul>
                  <li>Network and application security audits</li>
                  <li>Penetration testing and ethical hacking</li>
                  <li>Risk scoring and prioritization</li>
                  <li>Compliance gap analysis</li>
                </ul>
              </div>

              <div className="cyber-service">
                <h3>🔍 Threat Detection & Incident Response</h3>
                <p>We implement proactive monitoring and rapid response mechanisms to detect and neutralize threats before they cause damage.</p>
                <ul>
                  <li>Real-time threat monitoring (SIEM)</li>
                  <li>Intrusion detection and prevention systems (IDS/IPS)</li>
                  <li>Incident response planning and execution</li>
                  <li>Forensic analysis and reporting</li>
                </ul>
              </div>

              <div className="cyber-service">
                <h3>🔐 Data Protection & Access Control</h3>
                <p>We ensure that your data is encrypted, securely stored, and accessible only to authorized users.</p>
                <ul>
                  <li>End-to-end encryption</li>
                  <li>Role-based access control (RBAC)</li>
                  <li>Multi-factor authentication (MFA)</li>
                  <li>Secure data backup and recovery</li>
                </ul>
              </div>

              <div className="cyber-service">
                <h3>📜 Regulatory Compliance Management</h3>
                <p>We help you navigate complex regulatory landscapes and maintain compliance with global standards.</p>
                <ul>
                  <li>GDPR, HIPAA, ISO 27001, PCI-DSS, SOC 2</li>
                  <li>Policy creation and documentation</li>
                  <li>Compliance audits and reporting</li>
                  <li>Employee training and awareness programs</li>
                </ul>
              </div>

              <div className="cyber-service">
                <h3>🧩 Security Architecture & Implementation</h3>
                <p>We design and deploy robust security frameworks tailored to your business needs.</p>
                <ul>
                  <li>Firewall and endpoint protection</li>
                  <li>Secure cloud architecture</li>
                  <li>Zero Trust network models</li>
                  <li>Secure DevOps (DevSecOps) integration</li>
                </ul>
              </div>
            </section>

            <section className="cyber-section">
              <h2>Example Projects</h2>
              
              <div className="cyber-project">
                <h3>Healthcare Data Compliance Platform</h3>
                <p>Implemented HIPAA-compliant data storage and access controls for a telemedicine provider, including encrypted patient records and audit trails.</p>
              </div>

              <div className="cyber-project">
                <h3>Financial Services Cybersecurity Upgrade</h3>
                <p>Deployed multi-layered security architecture for a FinTech firm, including SIEM integration, MFA, and PCI-DSS compliance.</p>
              </div>

              <div className="cyber-project">
                <h3>E-commerce Fraud Prevention System</h3>
                <p>Built a real-time fraud detection engine using machine learning to monitor transactions and flag suspicious activity.</p>
              </div>

              <div className="cyber-project">
                <h3>Cloud Security for SaaS Startup</h3>
                <p>Designed a secure AWS environment with IAM policies, encrypted S3 buckets, and automated vulnerability scanning.</p>
              </div>
            </section>

            <section className="cyber-section">
              <h2>Why Choose Us?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h4>Certified Experts</h4>
                  <p>Our team includes CISSP, CISA, and CEH-certified professionals.</p>
                </div>
                <div className="feature-item">
                  <h4>End-to-End Coverage</h4>
                  <p>From strategy to implementation and monitoring.</p>
                </div>
                <div className="feature-item">
                  <h4>Industry-Specific Solutions</h4>
                  <p>Tailored to healthcare, finance, retail, and more.</p>
                </div>
                <div className="feature-item">
                  <h4>Proactive Approach</h4>
                  <p>We prevent threats before they impact your business.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CyberSecurityPage;

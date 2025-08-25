import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './CloudServicesPage.css';

const CloudServicesPage = () => {
  return (
    <>
      <Navbar />
      <div className="cloud-page">
        <div className="cloud-container">
          <div className="cloud-header">
            <h1>Cloud Services</h1>
            <p className="cloud-subtitle">
              Empower your business with scalable, secure, and cost-effective cloud solutions. Our Cloud Services help organizations modernize their infrastructure, improve agility, and reduce operational costs. Whether you're migrating to the cloud, optimizing existing environments, or building cloud-native applications, we deliver tailored solutions that align with your business goals.
            </p>
          </div>

          <div className="cloud-content">
            <section className="cloud-section">
              <h2>What We Offer</h2>
              
              <div className="cloud-service">
                <h3>🏗️ Cloud Architecture Design</h3>
                <p>We design robust, scalable, and secure cloud architectures that support your business operations and growth.</p>
                <h4>Services Include:</h4>
                <ul>
                  <li>Multi-cloud and hybrid cloud architecture</li>
                  <li>High availability and fault-tolerant design</li>
                  <li>Microservices and container-based architecture</li>
                  <li>Infrastructure as Code (IaC) using Terraform or AWS CloudFormation</li>
                </ul>
                <div className="service-example">
                  <strong>Example:</strong> Designed a multi-region architecture for a logistics company using AWS, ensuring 99.99% uptime and seamless failover.
                </div>
              </div>

              <div className="cloud-service">
                <h3>🔄 Cloud Migration Services</h3>
                <p>We help you move applications, data, and workloads from on-premises or legacy systems to the cloud with minimal disruption.</p>
                <h4>Services Include:</h4>
                <ul>
                  <li>Assessment and migration planning</li>
                  <li>Lift-and-shift, re-platforming, and re-architecting</li>
                  <li>Data migration and synchronization</li>
                  <li>Post-migration optimization and support</li>
                </ul>
                <div className="service-example">
                  <strong>Example:</strong> Migrated a legacy ERP system to Microsoft Azure for a manufacturing firm, reducing infrastructure costs by 40% and improving performance.
                </div>
              </div>

              <div className="cloud-service">
                <h3>⚙️ Cloud Optimization & Cost Management</h3>
                <p>We ensure your cloud environment is running efficiently, securely, and within budget.</p>
                <h4>Services Include:</h4>
                <ul>
                  <li>Resource utilization analysis</li>
                  <li>Auto-scaling and load balancing</li>
                  <li>Reserved instance planning and cost forecasting</li>
                  <li>Performance tuning and monitoring</li>
                </ul>
                <div className="service-example">
                  <strong>Example:</strong> Optimized cloud spend for a SaaS company by implementing auto-scaling and reserved instances, saving $25,000 annually.
                </div>
              </div>

              <div className="cloud-service">
                <h3>🔐 Cloud Security & Compliance</h3>
                <p>We implement security best practices and ensure compliance with industry standards to protect your cloud assets.</p>
                <h4>Services Include:</h4>
                <ul>
                  <li>Identity and access management (IAM)</li>
                  <li>Data encryption and secure storage</li>
                  <li>Security audits and vulnerability scanning</li>
                  <li>Compliance with GDPR, HIPAA, ISO 27001, etc.</li>
                </ul>
                <div className="service-example">
                  <strong>Example:</strong> Secured a healthcare cloud environment with HIPAA-compliant encryption and access controls, passing third-party audits successfully.
                </div>
              </div>

              <div className="cloud-service">
                <h3>🚀 DevOps & Automation</h3>
                <p>We integrate DevOps practices to streamline development, deployment, and operations in the cloud.</p>
                <h4>Services Include:</h4>
                <ul>
                  <li>CI/CD pipeline setup</li>
                  <li>Infrastructure automation</li>
                  <li>Monitoring and logging</li>
                  <li>Container orchestration with Kubernetes and Docker</li>
                </ul>
                <div className="service-example">
                  <strong>Example:</strong> Implemented a CI/CD pipeline for a FinTech startup using GitHub Actions and AWS CodePipeline, reducing deployment time by 80%.
                </div>
              </div>
            </section>

            <section className="cloud-section">
              <h2>🌍 Supported Platforms</h2>
              <div className="platforms-grid">
                <div className="platform-item">
                  <h4>Amazon Web Services (AWS)</h4>
                </div>
                <div className="platform-item">
                  <h4>Microsoft Azure</h4>
                </div>
                <div className="platform-item">
                  <h4>Google Cloud Platform (GCP)</h4>
                </div>
                <div className="platform-item">
                  <h4>IBM Cloud</h4>
                </div>
                <div className="platform-item">
                  <h4>Oracle Cloud Infrastructure (OCI)</h4>
                </div>
              </div>
            </section>

            <section className="cloud-section">
              <h2>🚀 Why Choose Us?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h4>Certified Cloud Experts</h4>
                  <p>AWS, Azure, and GCP certified professionals.</p>
                </div>
                <div className="feature-item">
                  <h4>End-to-End Services</h4>
                  <p>From strategy to deployment and optimization.</p>
                </div>
                <div className="feature-item">
                  <h4>Security-First Approach</h4>
                  <p>Built-in compliance and protection.</p>
                </div>
                <div className="feature-item">
                  <h4>Industry-Specific Solutions</h4>
                  <p>Tailored for healthcare, finance, retail, and more.</p>
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

export default CloudServicesPage;

import React from 'react';

const Footer = () => {
  const footerColumns = [
    {
      title: "BlackRoth",
      links: [
        { text: "About Us", href: "#" },
        { text: "Careers", href: "#" },
        { text: "Newsroom", href: "#" }
      ]
    },
    {
      title: "Our services",
      links: [
        // Core Tech Services
        { text: "Data science with AI", href: "#" },
        { text: "Cyber security", href: "#" },
        { text: "Cloud computing", href: "#" },
        { text: "Data visualization", href: "#" },
        { text: "Salesforce", href: "#" },
        { text: "Mobile app development", href: "#" },
        { text: "Full stack", href: "#" },
        { text: "Web development", href: "#" },
        { text: "Digital marketing", href: "#" },
        { text: "Data base", href: "#" },
        { text: "UI/UX", href: "#" },
        { text: "AI & MACHINE LEARNING", href: "#" },
        { text: "Business analytics", href: "#" }
      ]
    },
    {
      title: "Our services",
      links: [
        { text: "Payroll Services", href: "#" },
        { text: "Payroll Software", href: "#" },
        { text: "Payroll Processing", href: "#" },
        { text: "Payroll Outsourcing", href: "#" },
        { text: "Time & Attendance", href: "#" }
      ]
    },
    {
      title: "HR Services",
      links: [
        { text: "HR Services", href: "#" },
        { text: "HR Insights", href: "#" },
        { text: "Partner Integration", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", href: "#" },
        { text: "Help Center", href: "#" },
        { text: "API Docs", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", href: "#" },
        { text: "Terms of Service", href: "#" },
        { text: "Security", href: "#" }
      ]
    }
  ];

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {footerColumns.map((column, index) => (
          <div key={index} className="footer-column">
            {column.title && <h4>{column.title}</h4>}
            <ul>
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Follow Us in bottom right corner above hr line */}
      <div className="footer-follow-us">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <button><i className="fa-brands fa-twitter"></i></button>
          <button><i className="fa-brands fa-linkedin"></i></button>
          <button><i className="fa-brands fa-instagram"></i></button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 BlackRoth. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServicesGrid = () => {
  const navigate = useNavigate();
  
  const services = [
    { id: 1, name: "Cyber security", image: "assets/lock.jpg", className: "grid-item-1", route: "/cyber-security"},
    { id: 2, name: "Data visualization", image: "assets/data Visualization.jpg", className: "", route: "/data-visualization" },
    { id: 3, name: "R&D", image: "assets/R&D1.jpg", className: "", route: "/rd" },
    { id: 4, name: "UI/UX Design", image: "assets/uiux.jpg", className: "grid-item-2", route: "/uiux" },
    { id: 5, name: "Cloud Services", image: "assets/cloud.jpg", className: "", route: "/cloud-services" }
  ];

  const handleServiceClick = (route) => {
    navigate(route);
  };

  return (
    <div className="grid-container">
      <div className="image-grid">
        {services.map((service) => (
          <div 
            key={service.id} 
            className={`grid-item ${service.className}`}
            onClick={() => handleServiceClick(service.route)}
            style={{ cursor: 'pointer' }}
          >
            <img src={service.image} alt={service.name} />
            <div className="overlay">{service.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;

import React, { useEffect, useState } from "react";
import "../CSS/AdoptionResources.css";

const AdoptionResources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/resources")
      .then((res) => res.json())
      .then((data) => setResources(data))
      .catch((error) => console.error("Error fetching resources:", error));
  }, []);

  return (
    <div className="adoption-resources-page container py-5">
      <h2 className="text-center fw-bold mb-4 text-primary">Adoption Resources</h2>
      <div className="resources-section">
        {resources.map((resource, index) => (
          <div key={index} className="resource-card shadow-lg p-4 mb-4 rounded">
            <h4 className="resource-title">{index + 1}. {resource.title}</h4>
            <p className="resource-description">{resource.description}</p>
            <a 
              href={resource.link} 
              className="btn btn-primary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {resource.buttonText || "Learn More"}  
              {/* Agar `buttonText` na ho to default 'Learn More' */}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdoptionResources;
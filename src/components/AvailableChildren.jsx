import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/availableChildren.css";
import HeroSectionChildren from "./HeroSectionChildren";

const AvailableChildren = () => {
  const [children, setChildren] = useState([]);
  const [filteredChildren, setFilteredChildren] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/children")
      .then((res) => res.json())
      .then((data) => {
        setChildren(data);
        setFilteredChildren(data); // Default list
      })
      .catch((err) => console.error("Error fetching children:", err));
  }, []);

  return (
    <div className="main">
      <HeroSectionChildren setFilteredChildren={setFilteredChildren} />
      <h1 className="text-center my-4" style={{ color: "#1e3c72", fontWeight: "bold" }}>
        Available Children for Adoption
      </h1>
      <p className="text-center description">
        These children are looking for a loving family. Click on a profile to learn more about them.
      </p>

      <div className="container">
        <div className="row justify-content-center mt-4">
          {filteredChildren.map((child) => (
            <div key={child._id} className="col-md-4 col-sm-6">
              <div className="child-card">
                {/* Left Side: Image */}
                <div className="child-img-container">
                  <img src={child.photo} alt={child.name} className="child-img" />
                </div>

                {/* Right Side: Details */}
                <div className="child-info">
                  <h3>{child.name}</h3>
                  <p><strong>Age:</strong> {child.age}</p>
                  <p className="child-desc">{child.description}</p>
                  <button className="view-btn" onClick={() => navigate(`/child/${child._id}`)}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableChildren;

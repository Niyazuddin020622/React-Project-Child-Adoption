import React from "react";
// import "../CSS/childCard.css"; // Ensure styling is in this file

const ChildCard = ({ child, onClick }) => {
  return (
    <div className="child-card" onClick={onClick}>
      <img src={child.photo} alt={child.name} className="child-img" />
      <div className="child-info">
        <h3>{child.name}</h3>
        <p>Age: {child.age}</p>
        <p>Location: {child.location}</p>
      </div>
    </div>
  );
};

export default ChildCard;

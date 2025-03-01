import React, { useState } from "react";
import "../CSS/HeroSectionChildren.css";

function HeroSectionChildren({ setFilteredChildren }) {
  const [gender, setGender] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = async () => {
    try {
        let query = `http://localhost:3000/api/children?`;
        const params = [];
        
        if (gender) params.push(`gender=${encodeURIComponent(gender)}`);
        if (ageGroup) params.push(`ageGroup=${encodeURIComponent(ageGroup)}`);
        if (location) params.push(`location=${encodeURIComponent(location)}`);

        if (params.length > 0) query += params.join("&");

        const response = await fetch(query);
        const data = await response.json();

        setFilteredChildren(data);
    } catch (error) {
        console.error("Error fetching filtered children:", error);
    }
};


  return (
    <div>
      <div className="hero-section1">
        <div className="hero-overlay">
          <h1>Every Child Deserves a Loving Home</h1>
          <p className="hero-subtext">
            Join us in creating brighter futures. Start your adoption journey today.
          </p>
          <div className="form-container">
            <select className="dropdown" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="" disabled>Select Gender</option>
              <option value="Boy">Boy</option>
              <option value="Girl">Girl</option>
            </select>

            <select className="dropdown" value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)}>
              <option value="" disabled>Select Age Group</option>
              <option value="infant">Infant (0-2 years)</option>
              <option value="toddler">Toddler (2-5 years)</option>
              <option value="teen">Teen (6+ years)</option>
            </select>

            <select className="dropdown" value={location} onChange={(e) => setLocation(e.target.value)}>
              <option value="" disabled>Select Location</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai, India</option>
              <option value="Hyderabad">Hyderabad, Telangana</option>
            </select>

            <button className="search-button" onClick={handleSearch}>Find Children</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSectionChildren;

import React, { useState } from 'react';
import "../CSS/HeroSection.css";

const HeroSection = () => {
  const [category, setCategory] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [location, setLocation] = useState('');
  const [health, setHealth] = useState('');

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleAgeGroupChange = (e) => setAgeGroup(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleHealthChange = (e) => setHealth(e.target.value);

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>Every Child Deserves a Loving Home</h1>
          <p className="hero-subtext">
            Join us in creating brighter futures. Start your adoption journey today.
          </p>
          <div className="form-container">
            <select 
              className="dropdown"
              value={category} 
              onChange={handleCategoryChange}>
              <option value="" disabled>Select Category</option>
              <option value="male">Boy</option>
              <option value="female">Girl</option>
            </select>
            <select 
              className="dropdown"
              value={ageGroup} 
              onChange={handleAgeGroupChange}>
              <option value="" disabled>Select Age Group</option>
              <option value="infant">Infant (0-2 years)</option>
              <option value="toddler">Toddler (2-5 years)</option>
              <option value="teen">Teen (6+ years)</option>
            </select>
            <select 
              className="dropdown"
              value={location} 
              onChange={handleLocationChange}>
              <option value="" disabled>Select Location</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="bangalore">Bangalore</option>
              <option value="chennai">Chennai</option>
            </select>
            <select 
              className="dropdown"
              value={health} 
              onChange={handleHealthChange}>
              <option value="" disabled>Filter by Health</option>
              <option value="1">Excellent</option>
              <option value="2">Good</option>
              <option value="3">Average</option>
            </select>
            <button className="search-button">Find Children</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;

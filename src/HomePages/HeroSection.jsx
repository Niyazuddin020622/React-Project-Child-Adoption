import React from 'react'

function HeroSection() {
  return (
    <div>
       {/* Hero Section */}
       <div className="hero-section1">
        <div className="hero-overlay">
          <h1>Every Child Deserves a Loving Home</h1>
          <p className="hero-subtext">
            Join us in creating brighter futures. Start your adoption journey
            today.
          </p>
          <div className="form-container">
            <select className="dropdown">
              <option value="" disabled selected>
                Select Gender
              </option>
              <option value="girl">Girl</option>
              <option value="boy">Boy</option>
            </select>
            <select className="dropdown">
              <option value="" disabled selected>
                Select Age Group
              </option>
              <option value="infant">Infant (0-2 years)</option>
              <option value="toddler">Toddler (2-5 years)</option>
              <option value="teen">Teen (6+ years)</option>
            </select>
            <select className="dropdown">
              <option value="" disabled selected>
                Select Location
              </option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="bangalore">Bangalore</option>
              <option value="chennai">Chennai</option>
            </select>
            <button className="search-button">Find Children</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HeroSection
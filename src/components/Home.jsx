import React from "react";
import "../CSS/Home_Hero.css";

const HeroSection = () => {
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

     {/* Cards Section */}
<div className="card-container">
  {/* Card 1: Adopt a Child */}
  <div className="card" style={{ width: "25rem", marginLeft: "20px" }}>
    <img src="https://tse2.mm.bing.net/th?id=OIP.1ESvArn40v6d2yaQSr-WfwHaE8&pid=Api&P=0&h=180" className="card-img-top" alt="Adopt a Child" />
    <div className="card-body">
      <h5 className="card-title">Adopt a Child</h5>
      <p className="card-text">
        Learn more about how you can adopt a child and give them a loving home.
      </p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Age: 5-10 years</li>
      <li className="list-group-item">Location: Nationwide</li>
      <li className="list-group-item">Status: Available</li>
    </ul>
    <div className="card-body">
      <a href="#" className="card-link">Apply Now</a>
      <a href="#" className="card-link">Learn More</a>
    </div>
  </div>

  {/* Card 2: Children Available for Adoption */}
  <div className="card" style={{ width: "25rem" }}>
    <img src="https://tse4.mm.bing.net/th?id=OIP.Z3xkkuVsaockNUVOYgthzAHaFp&pid=Api&P=0&h=180" className="card-img-top" alt="Children Available for Adoption" />
    <div className="card-body">
      <h5 className="card-title">Children Available for Adoption</h5>
      <p className="card-text">
        Browse through children currently available for adoption and find a match.
      </p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Boys and Girls</li>
      <li className="list-group-item">Ages: 1-15 years</li>
      <li className="list-group-item">Waiting for a home</li>
    </ul>
    <div className="card-body">
      <a href="#" className="card-link">View Children</a>
      <a href="#" className="card-link">Contact an Agency</a>
    </div>
  </div>

  {/* Card 3: Adoption Process */}
  <div className="card" style={{ width: "25rem", marginRight: "20px" }}>
    <img src="https://tse4.mm.bing.net/th?id=OIP.Z3xkkuVsaockNUVOYgthzAHaFp&pid=Api&P=0&h=180" className="card-img-top" alt="Adoption Process" />
    <div className="card-body">
      <h5 className="card-title">Adoption Process</h5>
      <p className="card-text">
        Understand the adoption process from start to finish.
      </p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Step-by-step guide</li>
      <li className="list-group-item">Legal requirements</li>
      <li className="list-group-item">Home visits and interviews</li>
    </ul>
    <div className="card-body">
      <a href="#" className="card-link">Learn More</a>
    </div>
  </div>
</div>

    </div>
  );
};

export default HeroSection;

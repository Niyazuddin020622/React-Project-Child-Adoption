// SportsSection.js
import React from 'react';
import './SportSection.css';  // Ensure you have the corresponding CSS

function SportsSection() {
  return (
    <div className="sports-section">
      <h2 className="sports-title">Sports Gallery</h2>
      <div className="sports-items">
        <div className="sports-item">
          <img src="https://majfc.com/wp-content/uploads/2019/10/young-football-talents-low.jpg" alt="Football" />
          <div className="sports-overlay">
            <h3>Football</h3>
          </div>
        </div>
        <div className="sports-item">
          <img src="https://img.freepik.com/free-photo/happy-kid-enjoying-his-gym-class_23-2149070781.jpg?t=st=1738401855~exp=1738405455~hmac=409b49f2852cc88c77c42aa603ef3754a4bc5f120a71358a9c3a872b53a75562&w=996" alt="Basketball" />
          <div className="sports-overlay">
            <h3>Basketball</h3>
          </div>
        </div>
        <div className="sports-item">
          <img src="https://tse3.mm.bing.net/th?id=OIP.i6Nweif2iHfdC1bFcq0LBgHaFk&pid=Api&P=0&h=180" alt="Tennis" />
          <div className="sports-overlay">
            <h3>Tennis</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SportsSection;

// HeroSection.js
import React, { useEffect, useState } from 'react';
import './HeroSection.css';  // Ensure you have the corresponding CSS

function HeroSection() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation on page load
    setIsAnimated(true);
  }, []);

  return (
    <div className={`hero-section ${isAnimated ? 'animate' : ''}`}>
      <video className="hero-video" autoPlay muted loop>
        <source
          src="https://video-previews.elements.envatousercontent.com/files/b26795b6-e1d4-491c-b66b-29bde92854a9/video_preview_h264.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Our Gallery</h1>
      </div>
    </div>
  );
}

export default HeroSection;

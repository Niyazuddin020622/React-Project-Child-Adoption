// Gallery.js
import React from 'react';
import HeroSection from '../GalleryPages/HeroSection';
import GallerySection from '../GalleryPages/GallerySection';
import SportSection from '../GalleryPages/SportSection';

function Gallery() {
  return (
    <div className="gallery-page">
      <HeroSection />
      <GallerySection />
      <SportSection />
      {/* Add other sections as needed */}
    </div>
  );
}

export default Gallery;

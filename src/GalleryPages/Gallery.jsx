// Gallery.js
import React from 'react';
import HeroSection from './HeroSection';
import GallerySection from './GallerySection';
import SportSection from './SportSection';

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

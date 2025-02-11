import React from 'react'
// import "../CSS/Home_Hero.css";
import ImageCarousel from '../HomePages/Carousel';
// import HeroSection from '../HomePages/HeroSection';
import AdditionalInfo from '../HomePages/AdditionalInfo';
// import Banner from '../HomePages/Banner';
import WhyAdopt from '../HomePages/WhyAdopt';
import FAQ from '../HomePages/FAQ';

import UpcomingEvents from '../HomePages/UpcomingEvents';
// import AdoptionSupport from '../HomePages/AdoptionSupport';
function Home() {
  return (
    <div className ="Home-pages">
      {/* <HeroSection/> */}
      <ImageCarousel/>
      <AdditionalInfo/>
      <WhyAdopt/>
      {/* <Banner/> */}
      <UpcomingEvents/>
      <FAQ/>
    
      {/* <AdoptionSupport/> */}
    </div>
  )
}

export default Home

